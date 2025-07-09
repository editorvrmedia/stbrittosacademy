import React, { useState, useEffect } from 'react';
import { Play, Calendar, ExternalLink } from 'lucide-react';

interface Short {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  videoUrl: string;
  duration: string;
}

const RecentShorts = () => {
  const [shorts, setShorts] = useState<Short[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxVideoUrl, setLightboxVideoUrl] = useState<string>("");

  const CHANNEL_ID = 'UCfKsJCTgNrc06FI8i9Z9gpg';
  const API_KEY = 'AIzaSyB5qQW6EwPGpbGQ1zDXn8gWZ2b1lpl4NN4';
  
  // Manual exclusion list for videos that are not shorts
  const EXCLUDED_VIDEOS: string[] = [
    // Add video IDs here that are incorrectly showing up as shorts
  ];
  
  // Manual exclusion list for video titles that are not shorts
  const EXCLUDED_TITLES: string[] = [
    'Battle of the Best | St. Britto\'s Intramurals 2025 – Boys & Girls Showdown',
    'Intramurals',
    'Battle of the Best',
    'Sports',
    'Event',
    'Ceremony',
    'Graduation',
    'Assembly'
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const fetchShorts = async () => {
      try {
        setLoading(true);
        setError(null);

        // First, get the uploads playlist ID
        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
        );
        
        if (!channelResponse.ok) {
          throw new Error('Failed to fetch channel data');
        }

        const channelData = await channelResponse.json();
        const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

        // Get videos from the uploads playlist
        const videosResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=100&key=${API_KEY}`
        );

        if (!videosResponse.ok) {
          throw new Error('Failed to fetch videos');
        }

        const videosData = await videosResponse.json();
        
        // Get video details to check duration and filter for shorts
        const videoIds = videosData.items.map((item: any) => item.snippet.resourceId.videoId).join(',');
        const videoDetailsResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet,statistics&id=${videoIds}&key=${API_KEY}`
        );

        if (!videoDetailsResponse.ok) {
          throw new Error('Failed to fetch video details');
        }

        const videoDetailsData = await videoDetailsResponse.json();
        
        // Debug: Log all returned video IDs, titles, and durations
        console.log('YouTube API returned videos:', videoDetailsData.items.map((v: any) => ({
          id: v.id,
          title: v.snippet.title,
          duration: v.contentDetails.duration
        })));
        
        // Filter for shorts (videos less than 60 seconds) and format
        const formattedShorts: Short[] = videoDetailsData.items
          .filter((video: any) => {
            // Skip manually excluded videos
            if (EXCLUDED_VIDEOS.includes(video.id)) {
              return false;
            }
            
            // Skip videos with excluded titles
            const videoTitle = video.snippet.title.toLowerCase();
            if (EXCLUDED_TITLES.some(excludedTitle => 
              videoTitle.includes(excludedTitle.toLowerCase())
            )) {
              console.log(`Excluding video by title: ${video.snippet.title}`);
              return false;
            }
            const duration = video.contentDetails.duration;
            // Parse ISO 8601 duration format (PT1M30S = 1 minute 30 seconds)
            const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
            if (!match) return false;
            
            const hours = parseInt(match[1] || '0');
            const minutes = parseInt(match[2] || '0');
            const seconds = parseInt(match[3] || '0');
            const totalSeconds = hours * 3600 + minutes * 60 + seconds;
            
            // Filter for videos shorter than 60 seconds (shorts)
            // Also check if the title contains "short" or if it's a vertical video
            const isShortByDuration = totalSeconds < 60 && totalSeconds > 0; // Must be between 1-60 seconds
            const isShortByTitle = video.snippet.title.toLowerCase().includes('short') || 
                                  video.snippet.title.toLowerCase().includes('#shorts');
            
            // Check if thumbnail suggests vertical video (shorts typically have vertical thumbnails)
            const thumbnail = video.snippet.thumbnails.high;
            const isVerticalThumbnail = thumbnail && thumbnail.width && thumbnail.height && 
                                       (thumbnail.height > thumbnail.width);
            
            // Debug logging
            console.log(`Video: ${video.snippet.title}, Duration: ${duration} (${totalSeconds}s), IsShort: ${isShortByDuration || isShortByTitle}, Vertical: ${isVerticalThumbnail}`);
            
            // More relaxed filtering: any video under 60 seconds (and not excluded) is a short
            return isShortByDuration;
          })
          .slice(0, 12) // Take only the first 12 shorts
          .map((video: any) => ({
            id: video.id,
            title: video.snippet.title,
            thumbnail: video.snippet.thumbnails.high.url,
            publishedAt: video.snippet.publishedAt,
            videoUrl: `https://www.youtube.com/watch?v=${video.id}`,
            duration: video.contentDetails.duration
          }));

        setShorts(formattedShorts);
      } catch (err) {
        console.error('Error fetching shorts:', err);
        setError('Failed to load recent shorts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchShorts();
    interval = setInterval(fetchShorts, 60 * 60 * 1000); // every 1 hour
    return () => clearInterval(interval);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };

  const formatDuration = (duration: string) => {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return '';
    
    const hours = parseInt(match[1] || '0');
    const minutes = parseInt(match[2] || '0');
    const seconds = parseInt(match[3] || '0');
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
  };

  const handleShortClick = (videoUrl: string) => {
    // Open in modal/lightbox instead of new tab
    // Convert normal YouTube URL to embed
    const match = videoUrl.match(/(?:youtu.be\/|v=)([\w-]{11})/);
    const videoId = match ? match[1] : "";
    setLightboxVideoUrl(`https://www.youtube.com/embed/${videoId}?autoplay=1`);
    setLightboxOpen(true);
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Shorts</h2>
            <p className="text-xl text-gray-600">Latest YouTube Shorts from our channel</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-200 aspect-[9/16] rounded-lg mb-3"></div>
                <div className="bg-gray-200 h-3 rounded mb-2"></div>
                <div className="bg-gray-200 h-2 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Shorts</h2>
            <p className="text-xl text-gray-600">Latest YouTube Shorts from our channel</p>
          </div>
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{error}</p>
            <a
              href="https://www.youtube.com/@stbrittosacademy/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-indigo-600 hover:text-indigo-700 font-semibold"
            >
              Visit our YouTube Shorts
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Shorts</h2>
          <p className="text-xl text-gray-600">Latest YouTube Shorts from our channel</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {shorts.map((short) => (
            <div
              key={short.id}
              className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => handleShortClick(short.videoUrl)}
            >
              <div className="relative">
                <img
                  src={short.thumbnail}
                  alt={short.title}
                  className="w-full aspect-[9/16] object-cover group-hover:brightness-75 transition duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-1 py-0.5 rounded">
                  Short
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-1 py-0.5 rounded">
                  {formatDuration(short.duration)}
                </div>
              </div>
              
              <div className="p-2">
                <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 text-xs overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                  {short.title}
                </h3>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{formatDate(short.publishedAt)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Lightbox for shorts */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
            <div className="relative w-[90vw] max-w-xs aspect-[9/16] bg-black rounded-lg overflow-hidden">
              <button
                className="absolute top-2 right-2 z-10 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full"
                onClick={() => setLightboxOpen(false)}
              >
                <span className="text-2xl">&times;</span>
              </button>
              <iframe
                width="100%"
                height="100%"
                src={lightboxVideoUrl}
                title="Short Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        <div className="text-center mt-8">
          <a
            href="https://www.youtube.com/@stbrittosacademy/shorts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            View All Shorts on YouTube
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default RecentShorts; 
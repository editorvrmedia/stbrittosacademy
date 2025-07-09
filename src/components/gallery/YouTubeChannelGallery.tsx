import React, { useEffect, useState } from 'react';
import { ExternalLink, Calendar } from 'lucide-react';

const API_KEY = 'AIzaSyB5qQW6EwPGpbGQ1zDXn8gWZ2b1lpl4NN4';
const CHANNEL_ID = 'UCfKsJCTgNrc06FI8i9Z9gpg';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  duration: string;
  isShort: boolean;
  videoUrl: string;
}

const YouTubeChannelGallery: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      setError(null);
      try {
        // a. Get uploads playlist ID
        const channelRes = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
        );
        const channelData = await channelRes.json();
        if (!channelData.items || !channelData.items[0]) {
          setError('Channel not found or no uploads playlist.');
          setLoading(false);
          return;
        }
        const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

        // b. Fetch up to 50 videos from uploads playlist
        const playlistRes = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=50&key=${API_KEY}`
        );
        const playlistData = await playlistRes.json();
        if (!playlistData.items || playlistData.items.length === 0) {
          setError('No videos found in the uploads playlist.');
          setLoading(false);
          return;
        }
        const playlistItems = playlistData.items;

        // c. For each video, get duration
        const videoIds = playlistItems.map((item: any) => item.snippet.resourceId.videoId).join(',');
        const videosRes = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=${videoIds}&key=${API_KEY}`
        );
        const videosData = await videosRes.json();
        if (!videosData.items || videosData.items.length === 0) {
          setError('No video details found.');
          setLoading(false);
          return;
        }

        // d. Parse duration, detect Shorts, and build video list
        const parsedVideos: Video[] = videosData.items.map((video: any) => {
          const duration = video.contentDetails.duration;
          // Parse ISO 8601 duration
          const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
          const hours = parseInt(match?.[1] || '0');
          const minutes = parseInt(match?.[2] || '0');
          const seconds = parseInt(match?.[3] || '0');
          const totalSeconds = hours * 3600 + minutes * 60 + seconds;
          // Use high, medium, or default thumbnail (always present)
          const thumbObj = video.snippet.thumbnails;
          const thumbnail = thumbObj.high?.url || thumbObj.medium?.url || thumbObj.default?.url || '';
          const isVertical = thumbObj.high && thumbObj.high.height > thumbObj.high.width;
          const isShort = totalSeconds <= 60 || isVertical;
          return {
            id: video.id,
            title: video.snippet.title,
            thumbnail,
            publishedAt: video.snippet.publishedAt,
            duration,
            isShort,
            videoUrl: `https://www.youtube.com/watch?v=${video.id}`,
          };
        });

        // Sort by publish date (newest first)
        parsedVideos.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        setVideos(parsedVideos);
      } catch (err) {
        setError('Failed to load videos.');
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">YouTube Channel Gallery</h2>
          <p className="text-lg text-gray-600">All videos and Shorts from our channel</p>
        </div>
        {loading ? (
          <div className="text-center text-lg">Loading videos...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {videos.map((video) => (
              <a
                key={video.id}
                href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className={video.isShort ? 'w-full aspect-[9/16] object-cover' : 'w-full aspect-video object-cover'}
                  />
                  {video.isShort && (
                    <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-2 py-1 rounded font-bold flex items-center">
                      🩳 SHORTS
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{formatDate(video.publishedAt)}</span>
                  </div>
                  <div className="flex items-center text-indigo-600 hover:underline text-sm">
                    Watch on YouTube <ExternalLink className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default YouTubeChannelGallery; 
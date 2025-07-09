import React, { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';

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

const YouTubeMergedGallery: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllPages = async (url: string, itemsKey: string) => {
      let results: any[] = [];
      let nextPageToken = '';
      do {
        const pageUrl = url + (nextPageToken ? `&pageToken=${nextPageToken}` : '');
        const res = await fetch(pageUrl);
        const data = await res.json();
        results = results.concat(data[itemsKey] || []);
        nextPageToken = data.nextPageToken || '';
      } while (nextPageToken);
      return results;
    };

    const fetchVideos = async () => {
      setLoading(true);
      setError(null);
      try {
        // 1. Get uploads playlist ID
        const channelRes = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
        );
        const channelData = await channelRes.json();
        if (!channelData.items || !channelData.items[0]) throw new Error('Channel not found');
        const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

        // 2. Fetch ALL videos from uploads playlist (with pagination)
        const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=50&key=${API_KEY}`;
        const playlistItems = await fetchAllPages(playlistUrl, 'items');
        const playlistVideos = playlistItems.map((item: any) => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url || '',
          publishedAt: item.snippet.publishedAt,
        }));

        // 3. Fetch ALL recent videos using search.list (with pagination)
        const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&order=date&type=video&maxResults=50&key=${API_KEY}`;
        const searchItems = await fetchAllPages(searchUrl, 'items');
        const searchVideos = (searchItems || []).map((item: any) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url || '',
          publishedAt: item.snippet.publishedAt,
        }));

        // Debug: Log all fetched video IDs and titles
        console.log('Playlist videos:', playlistVideos.map(v => ({ id: v.id, title: v.title })));
        console.log('Search videos:', searchVideos.map(v => ({ id: v.id, title: v.title })));

        // 4. Merge and deduplicate by videoId
        const videoMap: Record<string, Video> = {};
        [...playlistVideos, ...searchVideos].forEach((v) => {
          if (!videoMap[v.id]) {
            videoMap[v.id] = {
              ...v,
              duration: '',
              isShort: false,
              videoUrl: `https://www.youtube.com/watch?v=${v.id}`,
            };
          }
        });
        const mergedVideos = Object.values(videoMap);

        // 5. Fetch durations in batches of 50
        for (let i = 0; i < mergedVideos.length; i += 50) {
          const batch = mergedVideos.slice(i, i + 50);
          const ids = batch.map((v) => v.id).join(',');
          const detailsRes = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${ids}&key=${API_KEY}`
          );
          const detailsData = await detailsRes.json();
          (detailsData.items || []).forEach((item: any) => {
            const video = videoMap[item.id];
            if (video) {
              const duration = item.contentDetails.duration;
              // Parse ISO 8601 duration
              const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
              const hours = parseInt(match?.[1] || '0');
              const minutes = parseInt(match?.[2] || '0');
              const seconds = parseInt(match?.[3] || '0');
              const totalSeconds = hours * 3600 + minutes * 60 + seconds;
              video.duration = duration;
              video.isShort = totalSeconds <= 60;
            }
          });
        }

        // 6. Sort by publish date (newest first)
        const sorted = Object.values(videoMap).sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        setVideos(sorted);
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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">YouTube Merged Gallery</h2>
          <p className="text-lg text-gray-600">All videos and Shorts from our channel (playlistItems + search.list, paginated)</p>
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
                  <div className="text-sm text-gray-500 mb-1">{formatDate(video.publishedAt)}</div>
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

export default YouTubeMergedGallery; 
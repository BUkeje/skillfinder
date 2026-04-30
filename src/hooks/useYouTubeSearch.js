import { useEffect, useState } from "react";

const BASE_URL = "https://www.googleapis.com/youtube/v3/search";

export default function useYouTubeSearch(query) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const trimmedQuery = query.trim();

    // ✅ Immediately reset state when query is empty
    if (!trimmedQuery) {
      setVideos([]);
      setError("");
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    async function fetchVideos() {
      try {
        setLoading(true);
        setError("");

        const params = new URLSearchParams({
          part: "snippet",
          q: trimmedQuery,
          type: "video",
          maxResults: "9",
          key: import.meta.env.VITE_YOUTUBE_API_KEY,
        });

        const response = await fetch(`${BASE_URL}?${params.toString()}`, {
          signal: controller.signal,
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error?.message || "Failed to fetch videos");
        }

        const formattedVideos = (data.items || []).map((item) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          channelTitle: item.snippet.channelTitle,
          thumbnail: item.snippet.thumbnails.medium.url,
        }));

        // ✅ Only update if request wasn't aborted
        if (!controller.signal.aborted) {
          setVideos(formattedVideos);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchVideos();

    return () => controller.abort();
  }, [query]);

  return { videos, loading, error };
}
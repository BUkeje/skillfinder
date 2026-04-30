import VideoCard from "./VideoCard";

export default function VideoGrid({ videos }) {
  return (
    <section className="grid">
      {videos.map((v) => (
        <VideoCard key={v.id} video={v} />
      ))}
    </section>
  );
}
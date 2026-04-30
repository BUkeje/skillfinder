export default function VideoCard({ video }) {
  return (
    <article className="card">
      <img
        src={video.thumbnail}
        alt={video.title}
        style={{ width: "100%", display: "block" }}
      />
      <div style={{ padding: 12, display: "grid", gap: 8 }}>
        <div style={{ fontWeight: 800, lineHeight: 1.2 }}>{video.title}</div>
        <div style={{ color: "#666" }}>{video.channelTitle}</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button
            className="btn"
            type="button"
            onClick={() =>
              window.open(`https://www.youtube.com/watch?v=${video.id}`, "_blank")
            }
          >
            Watch
          </button>
          <button className="btn" type="button">
            Save
          </button>
        </div>
      </div>
    </article>
  );
}
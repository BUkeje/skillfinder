export default function SearchBar({ value, onChange, onSubmit, onClear }) {
  return (
    <form onSubmit={onSubmit} className="card" style={{ padding: 14 }}>
      <label style={{ display: "block", fontWeight: 700, marginBottom: 8 }}>
        Search a skill
      </label>

      <input
        className="input"
        placeholder="Search for a soccer skill (e.g. shooting, passing)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <div
        style={{
          display: "flex",
          gap: 10,
          marginTop: 12,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <button className="btn" type="submit" style={{ fontWeight: 700 }}>
          Search
        </button>

        <button className="btn" type="button" onClick={onClear}>
          Clear
        </button>

        <span style={{ color: "#666" }}>
          Tip: “striker positioning”, “1v1 defending”, “switch the play”.
        </span>
      </div>
    </form>
  );
}
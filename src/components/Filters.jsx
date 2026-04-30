const positions = [
  "Any",
  "Goalkeeper",
  "Defender",
  "Midfielder",
  "Winger",
  "Striker",
];
const levels = ["Any", "Beginner", "Intermediate", "Advanced"];
const skills = [
  "Passing",
  "Shooting",
  "Dribbling",
  "Defending",
  "Positioning",
  "First Touch",
];

export default function Filters({ filters, setFilters }) {
  return (
    <div className="card" style={{ padding: 4 }}>
      <div style={{ display: "grid", gap: 12 }}>
        <div style={{ display: "grid", gap: 8 }}>
          <div style={{ fontWeight: 700 }}>Position</div>
          <select
            className="input"
            value={filters.position}
            onChange={(e) =>
              setFilters((f) => ({ ...f, position: e.target.value }))
            }
          >
            {positions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div style={{ display: "grid", gap: 8 }}>
          <div style={{ fontWeight: 700 }}>Difficulty</div>
          <select
            className="input"
            value={filters.level}
            onChange={(e) =>
              setFilters((f) => ({ ...f, level: e.target.value }))
            }
          >
            {levels.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>

        <div style={{ display: "grid", gap: 10 }}>
          <div style={{ fontWeight: 700 }}>Skill tags</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {skills.map((tag) => {
              const active = filters.skillTags.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  className="btn"
                  onClick={() => {
                    setFilters((f) => {
                      const has = f.skillTags.includes(tag);
                      return {
                        ...f,
                        skillTags: has
                          ? f.skillTags.filter((t) => t !== tag)
                          : [...f.skillTags, tag],
                      };
                    });
                  }}
                  style={{
                    borderColor: active ? "#111" : "#ddd",
                    fontWeight: active ? 800 : 600,
                  }}
                >
                  {tag}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            className="btn"
            onClick={() =>
              setFilters({ position: "Any", level: "Any", skillTags: [] })
            }
          >
            Clear filters
          </button>
        </div>
      </div>
    </div>
  );
}

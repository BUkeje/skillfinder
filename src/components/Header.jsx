export default function Header() {
    return (
      <header style={{ padding: "22px 0" }}>
        <div className="container" style={{ display: "flex", gap: 12, alignItems: "baseline", justifyContent: "space-between" }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 24 }}>SkillFinder</h1>
            <p style={{ margin: "6px 0 0", color: "#555" }}>
              Find position-specific YouTube training videos faster.
            </p>
          </div>
  
          <a
            href="#favorites"
            style={{ textDecoration: "none", color: "#333", fontWeight: 600 }}
          >
            Favorites
          </a>
        </div>
      </header>
    );
  }
  
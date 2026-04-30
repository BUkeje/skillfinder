import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import VideoGrid from "../components/VideoGrid";
import useYouTubeSearch from "../hooks/useYouTubeSearch";
import { buildSearchQuery } from "../utils/buildSearchQuery";

export default function Home() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    position: "Any",
    level: "Any",
    skillTags: [],
  });
  const [query, setQuery] = useState("");

  const { videos, loading, error } = useYouTubeSearch(query);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!search.trim()) {
      setQuery("");
      return;
    }

    const finalQuery = buildSearchQuery({
      search,
      position: filters.position,
      level: filters.level,
      skillTags: filters.skillTags,
    });

    if (!finalQuery.trim()) {
      setQuery("");
      return;
    }

    setQuery(finalQuery);
  };

  const handleClear = () => {
    setSearch("");
    setQuery("");
    setFilters({
      position: "Any",
      level: "Any",
      skillTags: [],
    });
  };

  const hasSearched = query.trim() !== "" && search.trim() !== "";
  const showEmptyState = !loading && !error && !hasSearched;
  const showNoResults =
    !loading && !error && hasSearched && videos.length === 0;
  const showResults = !loading && !error && hasSearched && videos.length > 0;

  return (
    <main className="container" style={{ paddingBottom: 40 }}>
      <div style={{ display: "grid", gap: 14 }}>
        <SearchBar
          value={search}
          onChange={(val) => {
            setSearch(val);

            if (!val.trim()) {
              setQuery("");
            }
          }}
          onSubmit={onSubmit}
          onClear={handleClear}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "320px 1fr",
            gap: 14,
          }}
        >
          <Filters filters={filters} setFilters={setFilters} />

          <div style={{ display: "grid", gap: 12 }}>
            <div style={{ color: "#555" }}>
              {hasSearched ? (
                <>
                  Showing results for: <b>{query}</b>
                </>
              ) : (
                "Search for a soccer skill to see videos"
              )}
            </div>

            {loading && (
              <div className="card" style={{ padding: 18 }}>
                Loading training videos...
              </div>
            )}

            {error && (
              <div className="card" style={{ padding: 18, color: "red" }}>
                {error}
              </div>
            )}

            {showEmptyState && (
              <div className="card" style={{ padding: 18, color: "#555" }}>
                Search for a soccer skill to get started ⚽
              </div>
            )}

            {showNoResults && (
              <div className="card" style={{ padding: 18, color: "#555" }}>
                No videos found. Try a different soccer skill.
              </div>
            )}

            {showResults && <VideoGrid videos={videos} />}
          </div>
        </div>
      </div>
    </main>
  );
}

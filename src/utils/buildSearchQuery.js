export function buildSearchQuery({ search, position, level, skillTags }) {
  let query = search.trim();

  if (position !== "Any") {
    query += ` ${position}`;
  }

  if (level !== "Any") {
    query += ` ${level}`;
  }

  if (skillTags?.length > 0) {
    query += ` ${skillTags.join(" ")}`;
  }

  query += " soccer training drill";

  return query.trim();
}

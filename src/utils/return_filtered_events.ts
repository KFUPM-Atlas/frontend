export const getFilteredEvents = (events, tag, searchValue) => {
  if (!tag && !searchValue) return events;

  if (tag === "All")
    return events.filter((event) =>
      searchValue
        ? event.title.toLowerCase().includes(searchValue.toLowerCase())
        : true
    );

  return events.filter(
    (event) =>
      (event.tag === tag || tag === "All") &&
      (searchValue
        ? event.title.toLowerCase().includes(searchValue.toLowerCase())
        : true)
  );
};

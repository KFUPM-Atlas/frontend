export const returnPastEvents = (arr) => {
  const dateObj = new Date();
  const dateString = dateObj.toISOString().slice(0, 16);

  const pastEvents = arr.filter((event) => event?.startDate < dateString);

  return pastEvents;
};

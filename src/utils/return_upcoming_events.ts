export const returnUpcomingEvents = (arr) => {
  const dateObj = new Date();
  const dateString = dateObj.toISOString().slice(0, 16);

  const upcomingEvents = arr.filter((event) => event?.startDate > dateString);

  return upcomingEvents;
};

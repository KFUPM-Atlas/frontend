export const returnUpcomingEvents = (arr) => {
  const currentDate = Math.floor(Date.now() / 1000);
  const upcomingEvents = arr.filter(
    (event) => event.startDate.seconds > currentDate
  );

  return upcomingEvents;
};

export const returnPastEvents = (arr) => {
  const currentDate = Math.floor(Date.now() / 1000);
  const pastEvents = arr.filter(
    (event) => event.startDate.seconds < currentDate
  );

  return pastEvents;
};

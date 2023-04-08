export const returnSlugs = (arr) => {
  let eventSlugs = [];
  arr.map((element) => {
    eventSlugs.push(element.eventSlug);
  });

  return eventSlugs;
};

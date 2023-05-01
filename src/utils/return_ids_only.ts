export const returnIdsOnly = (registrations: any) => {
  const ids = registrations.map((registration) => {
    return registration.uid;
  });

  return ids;
};

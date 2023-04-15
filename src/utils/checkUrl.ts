export const checkUrl = (url: string, keyword: string): boolean => {
  // Convert both the URL and the keyword to lowercase for case-insensitive comparison
  const lowercaseUrl = url.toLowerCase();
  const lowercaseKeyword = keyword.toLowerCase();

  // Check if the keyword is present in the URL
  return lowercaseUrl.includes(lowercaseKeyword);
};

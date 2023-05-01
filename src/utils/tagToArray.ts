export const getTagNames = (tagObjects): string[] => {
  const tagNames = tagObjects.map((tagObject) => {
    let tagString = tagObject.tag;

    // Modify the string based on the tag
    switch (tagString) {
      case "Engineering":
        tagString = "Engineering";
        break;
      case "Entertainment":
        tagString = "Entertainment";
        break;
      case "Tech":
        tagString = "Tech";
        break;
      case "Other":
        tagString = "Other";
      default:
        break;
    }

    return tagString;
  });

  return tagNames;
};

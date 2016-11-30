const parseHtml = (string) => {
  const parsedString = string
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>');

  return parsedString;
};

export default parseHtml;

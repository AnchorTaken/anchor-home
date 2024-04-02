export const addBreaks = (text) => {
  return text.replace(/\n/g, '<br>');
};

// utils/truncateText.js
export const truncateText = (text, limit = 300) => {
  if (text.length > limit){
    return text.slice(0, limit) + '...';
  }
  return text;
};

module.exports = {
  addBreaks,
  truncateText,
};

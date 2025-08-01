import emojiList from "./emojiList.json";

function Filter(searchText, maxResults) {
  return emojiList
    .filter((emoji) => {
      const text = searchText.toLowerCase();
      return (
        emoji.title.toLowerCase().includes(text) ||
        emoji.keywords.toLowerCase().includes(text)
      );
    })
    .slice(0, maxResults);
}

export default Filter;

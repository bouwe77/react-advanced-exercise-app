import axios from "axios";

const apiKeys = [
  "qGb7AjjmXsH0t6gejjlvavA01JuNXzMp",
  "qJOtaisMztVXuJ77qZzo0Y7Ie6q0zIpb",
  "4TABuy4Pemb0pXkLmtXxDinjekA3hifI",
  "HicHEqtUkFYyd2BtHYuUfgbF8Mfd0dqo",
  "RtIcHPH84uJXUi0eYYKQs4S79YynDF1O"
];

export async function getGifs(query) {
  const apiKey = apiKeys[Math.floor(Math.random() * apiKeys.length)];

  const result = await axios.get(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=6`
  );

  return result.data.data.map(item => item.images.fixed_width.mp4);
}

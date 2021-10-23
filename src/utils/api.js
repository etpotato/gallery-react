const API_KEY = '563492ad6f91700001000001647246300ed247b7b6748ac61d528807';
const DEFAULT_URL = 'https://api.pexels.com/v1/curated?page=1&per_page=20';

const getSearchUrl = (keyword, page = 1) => {
  return `https://api.pexels.com/v1/search?query=${keyword}&page=${page}&per_page=20`;
};

export default async function fetchPhotos (keyword, page = 1) {
  let url = DEFAULT_URL;
  if (keyword) url = getSearchUrl(keyword, page);
  try {
    const response = await fetch(url, {
      headers: { 'Authorization': API_KEY },
    });
    if (!response.ok) throw new Error('fetch error');
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const API_KEY = '563492ad6f91700001000001647246300ed247b7b6748ac61d528807';
const PER_PAGE = 12;

const getDefaultUrl = (page) => {
  return `https://api.pexels.com/v1/curated?page=${page}&per_page=${PER_PAGE}`;
};

const getSearchUrl = (keyword, page) => {
  return `https://api.pexels.com/v1/search?query=${keyword}&page=${page}&per_page=${PER_PAGE}`;
};

export default async function fetchPhotos (keyword, page = 1, onSuccess, onError) {
  const url = keyword ? getSearchUrl(keyword, page) : getDefaultUrl(page);
  try {
    console.log(`fetch: keyword-${keyword}, page-${page}`);
    const response = await fetch(url, {
      headers: { 'Authorization': API_KEY },
    });
    if (response.ok) {
      const data = await response.json();
      return onSuccess(data);
    } 
    throw new Error('Fetch error ' + response.status);
  } catch {
    onError();
  }
};

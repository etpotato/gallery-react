import APP from '../config';

const getDefaultUrl = (page) => {
  return `https://api.pexels.com/v1/curated?page=${page}&per_page=${APP.PHOTOS_PER_PAGE}`;
};

const getSearchUrl = (keyword, page) => {
  return `https://api.pexels.com/v1/search?query=${keyword}&page=${page}&per_page=${APP.PHOTOS_PER_PAGE}`;
};

export default async function fetchPhotos (keyword, page = 1, onSuccess, onError) {
  const url = keyword ? getSearchUrl(keyword, page) : getDefaultUrl(page);
  console.log('fetch');
  try {
    const response = await fetch(url, {
      headers: { 'Authorization': APP.API_KEY },
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

import APP from '../config';

const apiUrl = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_API_URL
  : `http://localhost:${process.env.REACT_APP_API_PORT}${process.env.REACT_APP_API_URL}`;

const getDefaultUrl = (page) => `${apiUrl}/photos?page=${page}&per_page=${APP.PHOTOS_PER_PAGE}`;

const getSearchUrl = (keyword, page) => `${apiUrl}/search/photos?query=${keyword}&page=${page}&per_page=${APP.PHOTOS_PER_PAGE}`;

export default async function fetchPhotos (keyword, page = 1, onSuccess, onError) {
  const url = keyword ? getSearchUrl(keyword, page) : getDefaultUrl(page);
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return onSuccess(keyword ? data.results : data);
    }
    throw new Error('Fetch error ' + response.status);
  } catch {
    onError();
  }
};

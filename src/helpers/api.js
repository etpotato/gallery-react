const API_KEY = '563492ad6f91700001000001647246300ed247b7b6748ac61d528807';
const DEFAULT_URL = 'https://api.pexels.com/v1/curated?page=1&per_page=20';
const SERCH_URL = {
  start: 'https://api.pexels.com/v1/search?query=',
  end: '&page=1&per_page=20',
}

const fetchPhotos = async (keyword) => {
  let url = DEFAULT_URL;
  if (keyword) url = SERCH_URL.start + keyword + SERCH_URL.end;
  try {
    const response = await fetch(url, {
      headers: { 'Authorization': API_KEY },
    });
    if (!response.ok) throw new Error('fetch error');
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchPhotos;
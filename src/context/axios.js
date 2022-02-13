import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const fetchVideoDetails = async (movie, fetchUrl) => {
  let response;
  if (fetchUrl.includes('tv')) {
    response = await axios.get(
      `https://api.themoviedb.org/3/tv/${movie.id}?api_key=91b3e2e31ef8bb5a693d5e34ab89300a&append_to_response=videos`,
    );
  } else {
    response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie.id}?api_key=91b3e2e31ef8bb5a693d5e34ab89300a&append_to_response=videos`,
    );
  }
  return response.data.videos?.results?.[0]?.key ?? '';
};

export default instance;

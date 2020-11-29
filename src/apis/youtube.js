import axios from 'axios';

const KEY = 'AIzaSyDnM88tPpG3FQq2H4N7ZbpE1QN1qtmftdI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});

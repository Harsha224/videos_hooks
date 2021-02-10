import axios from 'axios';

const KEY = 'AIzaSyDMK8nf0ZjBhPikH2-Wf1mKMfKb_JyqV0M';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});

import axios from 'axios';

import { SEARCH_ENDPOINT } from "../constants";

// asyc call to fetch list of repositories.
const getReactRepos = () => axios.get(SEARCH_ENDPOINT)
  .then((result) => result.data.items)
  .then((repos) => repos.map(({forks, name, stargazers_count, html_url}) => ({
    forks,
    name,
    stars: stargazers_count,
    url: html_url,
  })))

export default getReactRepos



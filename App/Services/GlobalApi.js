import { create } from "apisauce";

const api = create({
    baseURL: 'https://newsapi.org/v2',
})
const API_KEY = '?country=in&apiKey=b0d05a726e1d495fb62972558d16cdf8';

const getTopHeadline = api
    .get('/top-headlines'+API_KEY)

const getByCategory = (category) => api.get('/everything?q='+category+"&apiKey=b0d05a726e1d495fb62972558d16cdf8");

export default {
    getTopHeadline,
    getByCategory
}

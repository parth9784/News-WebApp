import axios from 'axios';
export default function Newsdata(query){
    const apikey="906b091a773e4a3baa386ede7d1a709a"
    const url="https://newsapi.org/v2/everything?q="
    // ${url}${query}&apikey=${apikey}
    return axios.get(`${url}${query}&apikey=${apikey}`);
}
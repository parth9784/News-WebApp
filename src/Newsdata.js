import axios from 'axios';

export default async function Newsdata(query) {
    try {
        let response;
        if(query){
            response = await axios.get(`https://news-api-server-1.onrender.com/getnews/${query}`);
        }
        else{
             response= await axios.get(`https://news-api-server-8z2i.onrender.com/getnews/india`);
        }
       
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

import axios from "axios";

const baseURL ='https://youtube-v3-alternative.p.rapidapi.com/search'
  const options = {
   
    url: baseURL ,
    params: {query: 'cartoon', geo: 'US', lang: 'en'},
    headers: {
      'X-RapidAPI-Key': '389d894c91mshf4b4f7def540ae3p1bcc78jsn2079f211ec2d',
      'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
  };
  
 

  export const fetch = async (url) =>{
 const {data}=  await axios.get(baseURL,options)
 return data
  }
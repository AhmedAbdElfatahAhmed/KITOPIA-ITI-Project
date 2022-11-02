import axios from "axios";

const baseURL =`https://youtube-v3-alternative.p.rapidapi.com/search`
  const options = {
   
    url: baseURL ,
    params: { geo: 'US', lang: 'en'  , type: 'video'},
    headers: {
      'X-RapidAPI-Key': '389d894c91mshf4b4f7def540ae3p1bcc78jsn2079f211ec2d',
      'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
  };
  
 

  export const fetch = async (catg) =>{
 const {data}=  await axios.get(`${baseURL}?query=${catg}`,options)
 return data
  }

  
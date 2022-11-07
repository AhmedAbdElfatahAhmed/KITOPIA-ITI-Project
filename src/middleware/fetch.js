import axios from "axios";
const keys=[
  "b0a191bc4dmsh0ce106e0a903ab7p1b03b1jsnbf509c7302fd",
  "3fdbee7856msh6aea22bd9c428b2p16efdejsneaeee50a53f7",
  "4437b4cf0bmsh853167890a039dep1ff7fbjsn3fd485dc9031",
]
const baseURL =`https://youtube-v3-alternative.p.rapidapi.com/search`
  const options = {
   
    url: baseURL ,
    params: { geo: 'US', lang: 'en'  , type: 'video' , sort_by: 'relevance'},
    headers: {
      'X-RapidAPI-Key': '389d894c91mshf4b4f7def540ae3p1bcc78jsn2079f211ec2d',
      'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
  };
  
 

  export const fetch = async (catg) =>{
 const {data}=  await axios.get(`${baseURL}?query=${catg}`,options)
 return data
  }

  
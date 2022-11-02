import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player'
const WatchVideo = ()=>{
    const params = useParams();
    const [videos, setVideos] = useState([])
    useEffect(() => {
       
      });
     
      
      const url = `https://www.youtube.com/watch?v=${params.id}`

   
    return(
        <div>
            <ReactPlayer url={url} 
            
           controls
            />
        </div>
    )

    }

export default WatchVideo
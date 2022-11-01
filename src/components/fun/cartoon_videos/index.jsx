import { useState,useEffect } from "react"
import { fetch } from "../../../middleware/fetch"


const CaVideosList = () => {
  
  const[videos , setVideos]=useState([])
  useEffect(()=>{
    getVideos();
  },[])
  const getVideos=()=>{fetch().then((data)=>setVideos(data.data))} 
console.log(videos)
  return (
   <div>
    <p>
     
    </p>
   </div>
  )
}

export default CaVideosList

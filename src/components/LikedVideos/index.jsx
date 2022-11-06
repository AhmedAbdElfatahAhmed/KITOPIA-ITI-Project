import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const LikedVideos = () => {
  const [details,setDetails]=useState({})
  const [likedVideos,setLikedVideos]= useState([])
  useEffect(() => {
    // get Liked length
    axios.get(`http://localhost:3005/likedVideos`).then((res)=>{
      setLikedVideos(res.data)
      // console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
}, [likedVideos.id]);

  return (
    <div className="container row mx-auto gy-3 .justify-content-center  position-relative align-items-center pt-5 mt-5">
    {likedVideos.map((video,i) => {
      const options = {
        method: 'GET',
        url: 'https://youtube-v3-alternative.p.rapidapi.com/video',
        params: {id:video.id},
        headers: {
          'X-RapidAPI-Key': '679c40982fmsheadd8c7b09f0c6fp175affjsn2291559f1907',
          'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
        console.log(response);
        setDetails(response.data)
      }).catch(function (error) {
        // console.error(error);
      });
      // get image video from url 
      const imageUrl = `https://img.youtube.com/vi/${video.id}/0.jpg`;
      return (
        <div className="col-xl-4" key={video.id}>
          <div className="my-card">
            <div className="image w-100">
              <Link to={`/watch/${video.id}`}>
                {" "}
                <img
                  className="w-100"
                  src={imageUrl}
                  alt="thumbnail"
                />
              </Link>
            </div>
            <div className="content">
              <h4 className="my-card-text">{details.title}</h4>
              <p>{details.channelTitle}</p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
  )
};

export default LikedVideos;

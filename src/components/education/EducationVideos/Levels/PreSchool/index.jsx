import { useState, useEffect } from "react";
import { fetch } from "../../../../../middleware/fetch";
import { Link } from "react-router-dom";
const PreSchool = () => {
  const [videos, setVideos] = useState([]);
 
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = () => {
      fetch("baby learning").then((data) => setVideos(data.data));
  };
  console.log("videosss", videos)
  return (
    <div className="container row mx-auto gy-3 .justify-content-center  position-relative align-items-center pt-5 mt-5" id="cartoonPage">
    {videos.map((video) => {
      return (
        <div className="col-xl-4" key={video.videoId}>
          <div className="my-card">
            <div className="image w-100">
              <Link to={`/watch/${video.videoId}`}>
                {" "}
                <img
                  className="w-100"
                  src={video.thumbnail[0].url}
                  alt="thumbnail"
                />
              </Link>
            </div>

            <div className="content">
              <h4 className="card-text">{video.title}</h4>
              <p>{video.description}</p>
            </div>
          </div>
        </div>
        
      );
    })}
  </div>
  );
};

export default PreSchool;

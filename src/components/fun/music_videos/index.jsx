import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetch } from "../../../middleware/fetch";
import "./MuVideosList.scss";
const MuVideosList = () => {
  let catg = "kids music";

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = () => {
    fetch(catg).then((data) => setVideos(data.data));
  };
  console.log(videos);
  return (
    <div className="container row mx-auto gy-3 .justify-content-center  position-relative align-items-center pt-5 mt-5">
      {videos.map((video) => {
        return (
          <div className="col-xl-4" key={video.videoId}>
            <div className="cardd">
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
          // <div  className="col-xl-4 shadow-lg " key={video.videoId}>
          //   <div className="card ">
          //     <img src={video.thumbnail[0].url} className="card-img-top" alt="..." />
          //     <div className="card-body ">
          //       <p className="card-text">
          //        {video.description}
          //       </p>
          //     </div>
          //   </div>
          // </div>
        );
      })}
    </div>
  );
};

export default MuVideosList;

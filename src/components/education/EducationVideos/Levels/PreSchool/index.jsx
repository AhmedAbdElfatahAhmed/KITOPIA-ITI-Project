// import axios from "a2xios";
import { useState, useEffect } from "react";
import { fetch } from "../../../../../middleware/fetch";
import { Link } from "react-router-dom";
const PreSchool = () => {
  // const [preschoolData, setPreschoolData] = useState(null);
  const [videos, setVideos] = useState([]);
  // axios.get("http://localhost:3005/preschool").then((response) => {
  //   setPreschoolData(response.data[0].title);
  // });
  useEffect(() => {
    // axios.get("http://localhost:3005/preschool").then((response) => {
    //   setPreschoolData(response.data[0].title);
    // });
    getVideos();
  }, []);

  const getVideos = () => {
    // if (preschoolData) {
      // console.log("preschoolData", preschoolData);
      fetch("baby learning").then((data) => setVideos(data.data));
    // }
  };
  console.log("videosss", videos);
  // console.log("outer", preschoolData);
  // getVideos();
  return (
    <div className="container row mx-auto gy-3 .justify-content-center  position-relative align-items-center pt-5 mt-5">
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

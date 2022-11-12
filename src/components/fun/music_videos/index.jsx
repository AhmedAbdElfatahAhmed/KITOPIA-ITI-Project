import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getVideos } from "../../redux/videosSlice";
import CircularProgress from "@mui/material/CircularProgress";
import "./MuVideosList.scss";
const MuVideosList = () => {
  const dispatch = useDispatch();
  let catg = "kids music";
  useEffect(() => {
    dispatch(getVideos(catg));
  }, [dispatch, catg]);

  const { videos } = useSelector((state) => state.videos);
  // console.log(videos);
  const { isLoading } = useSelector((state) => state.videos);

  return (
    <div id="cardWrap">
      <div className="container row mx-auto gy-5  pt-5 mt-5">
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <CircularProgress color="warning" />
          </div>
        ) : (
          videos.map((video) => {
            return (
              <div className="col-sm-6 col-md-4" key={video.videoId}>
                <div className="my-card">
                  <div className="image w-100">
                    <Link to={`/watch/${video.videoId}`}>
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
          })
        )}
      </div>
    </div>
  );
};

export default MuVideosList;

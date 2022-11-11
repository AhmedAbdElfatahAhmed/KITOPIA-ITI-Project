import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../../../redux/videosSlice";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const SubjectVideos = () => {
  const params = useParams();
  let subjName = params.subjectName;
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
    dispatch(getVideos(subjName));
  }, [dispatch, subjName]);

  const { videos } = useSelector((state) => state.videos);
  console.log("videosss", videos);

  return (
    <div className="container row mx-auto gy-3 pt-5 mt-5" id="cardWrap">
      {videos.map((video) => {
        return (
          <div className="col-12 col-md-6 col-xl-4" key={video.videoId}>
            <div className="my-card">
              <div className="image w-100">
                <Link to={`/watch/${video.videoId}`}>
                  <img
                    className="w-100 "
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

export default SubjectVideos;

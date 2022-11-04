import "./WatchVideo.scss";
import image from "../../assets/images/education/001-youtube.png";
import thumbnail from "../../assets/images/fun/thumbnail.jpg";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import { FcLike } from "react-icons/fc";
import { FaCommentDots } from "react-icons/fa";
const WatchVideo = () => {
  const params = useParams();

  const url = `https://www.youtube.com/watch?v=${params.id}`;

  return (
    <section className="watch-wrapper pt-4">
      <div className="container-fluid">
        <div className="row">
          <div className="player-wrapper col-md-8 col-sm-12">
            <ReactPlayer
              className="video-player mb-2"
              url={url}
              controls
              playsInline
              width="100%"
              height="550px"
            />
            <div className="description mb-4">
              <div className="info">
                <Avatar alt="avatar" src={image} className="me-3 border" />
                <div className="video-info">
                  <p className="video-title mb-0">Video Title</p>
                  <p className="channel-name text-black-50 mb-0">
                    Channel name
                  </p>
                </div>
              </div>
              <div className="reactions">
                <div className="views"></div>
                <div className="likes d-flex">
                  <FcLike className="fs-4" />
                  <span className="text-black-50 ms-2">100K</span>
                </div>
              </div>
            </div>
            {/* Comments */}
            <div className="comments p-3">
              <div className="d-flex align-items-center mb-4 fs-3">
                <FaCommentDots className="me-3 " />
                <span>Childs Comment :</span>
              </div>
              <div className="comment-info d-flex align-items-center ps-5">
                <Avatar alt="profile-pic" src={image} className="me-3 border" />
                <div className="comment fs-3">
                  <p className="child-name mb-0">Child Name</p>
                  <p className="channel-name text-black-50 mb-0">
                    Child Comment as a sticker
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Videos */}
          <div className="col-md-4 col-sm-12">
            <Card sx={{ Width: 100 }} className="mb-3">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={thumbnail}
                  alt="green iguana"
                />
                <CardContent>
                  <p className="fs-3 mb-0">Lizard</p>
                  <p>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ Width: 100 }} className="mb-3">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={thumbnail}
                  alt="green iguana"
                />
                <CardContent>
                  <p className="fs-3 mb-0">Lizard</p>
                  <p>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ Width: 100 }} className="mb-3">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={thumbnail}
                  alt="green iguana"
                />
                <CardContent>
                  <p className="fs-3 mb-0">Lizard</p>
                  <p>
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchVideo;

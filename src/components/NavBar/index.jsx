import "./NavBar.scss";
import logo from "../../assets/images/navbar/logo-png.png";
import axios from "axios";
import {
  FaHome,
  FaVideo,
  FaBookReader,
  FaGamepad,
  FaSignInAlt,
  FaHeart,
} from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import DarkMode from "../DarkMode";

const NavBar = () => {
  // set count liked videos from db file
  const [countLiked, setCountLiked] = useState(0);
  useEffect(() => {
    // get Liked length
    axios
      .get(`http://localhost:3005/likedVideos`)
      .then((res) => {
        setCountLiked(res.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [countLiked]);

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="KITOPIA" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>
                  <FaHome />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/fun">
                  <FaVideo />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/edu">
                  <FaBookReader />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/games">
                  <FaGamepad />
                </NavLink>
              </li>
              <li className="nav-item">
                {/* check countLiked > 0 */}
                {countLiked > 0 ? (
                  <p className="count_liked_videos">{countLiked}</p>
                ) : (
                  <p className="count_liked_videos"></p>
                )}
                <NavLink className="nav-link" to="/liked">
                  <FaHeart />
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" >
                  <DarkMode></DarkMode>
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  <SiGnuprivacyguard />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  <FaSignInAlt />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

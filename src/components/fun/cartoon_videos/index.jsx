// import { Link } from 'react-router-dom'
import "./CaVideosList.scss";
import spoongebob from "../../../assets/images/cartoons/spongebob.png";
const CaVideosList = () => {
  return (
    <div>
      <main className="site-wrapper">
        <div className="pt-table desktop-768">
          <div className="pt-tablecell page-home relative">
            <div className="overlay"></div>

            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                  {/* <div className="page-title  home text-center">
                    <span className="heading-page"> Welcome to My Page</span>
                    <p className="mt20">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                  </div> */}

                  <div className="hexagon-menu clear">
                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <a className="hex-content">
                        <span className="hex-content-inner">
                          <span className="icon">
                            <img className="w-100" src={spoongebob} alt="" />
                            <span className="title">spongebob</span>
                          </span>
                        </span>
                        <svg
                          viewBox="0 0 173.20508075688772 200"
                          height="200"
                          width="174"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                            fill="#ec9600"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <a className="hex-content">
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="fa fa-bullseye"></i>
                          </span>
                          <span className="title">About</span>
                        </span>
                        <svg
                          viewBox="0 0 173.20508075688772 200"
                          height="200"
                          width="174"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                            fill="#ec9600"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <a className="hex-content">
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="fa fa-braille"></i>
                          </span>
                          <span className="title">Services</span>
                        </span>
                        <svg
                          viewBox="0 0 173.20508075688772 200"
                          height="200"
                          width="174"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                            fill="#ec9600"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <a className="hex-content">
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="fa fa-id-badge"></i>
                          </span>
                          <span className="title">Resume</span>
                        </span>
                        <svg
                          viewBox="0 0 173.20508075688772 200"
                          height="200"
                          width="174"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                            fill="#ec9600"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <a className="hex-content">
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="fa fa-life-ring"></i>
                          </span>
                          <span className="title">Works</span>
                        </span>
                        <svg
                          viewBox="0 0 173.20508075688772 200"
                          height="200"
                          width="174"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                            fill="#ec9600"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <a className="hex-content">
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="fa fa-clipboard"></i>
                          </span>
                          <span className="title">Testimonials</span>
                        </span>
                        <svg
                          viewBox="0 0 173.20508075688772 200"
                          height="200"
                          width="174"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                            fill="#ec9600"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <a className="hex-content">
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="fa fa-map-signs"></i>
                          </span>
                          <span className="title">Contact</span>
                        </span>
                        <svg
                          viewBox="0 0 173.20508075688772 200"
                          height="200"
                          width="174"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                            fill="#ec9600"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CaVideosList;

import React from "react";
import "./about.scss";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../../assets/images/home/about/about1.jpg";
import slide2 from "../../../assets/images/home/about/about2.jpg";
import slide3 from "../../../assets/images/home/about/about3.jpg";
import img1 from "../../../assets/images/home/about/1.png";
import img2 from "../../../assets/images/home/about/2.png";
import img3 from "../../../assets/images/home/about/3.png";
import img4 from "../../../assets/images/home/about/4.png";
import img5 from "../../../assets/images/home/about/5.png";
import img6 from "../../../assets/images/home/about/6.png";
import parent1 from "../../../assets/images/home/about/testimonial1.jpg";
import parent2 from "../../../assets/images/home/about/testimonial2.jpg";
import parent3 from "../../../assets/images/home/about/testimonial3.jpg";
import parent4 from "../../../assets/images/home/about/testimonial1.jpg";

function About() {
  return (
    <section className="aboutUs">
      <div className="container">
        <div className="text-center">
          <h2>ABOUT US</h2>
        </div>
        <div className="aboutUs_wrapper">
          <div className="about_top row">
            <div className="about_left col-md-4 col-8 m-auto">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100 slide_about"
                    src={slide1}
                    alt="First slide"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 slide_about"
                    src={slide2}
                    alt="Second slide"
                  />

                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 slide_about"
                    src={slide3}
                    alt="Third slide"
                  />

                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="about_right col-md-8 col-8 m-auto">
              <h3>Our Philosophy</h3>
              <p>
                Ibu lum orci eget, viverra elit. Aliquam erat volut pat phas
                ellus ac Placerat a ultricies a, posuere lorem ipseut lincas
                psuiem t volut pat phas ellus ac sodales Lorem ipsum dolor sit
                amet, consectetur adipisicing elit uasi quidem minus id omnis a
                nibh fusce mollis.
              </p>
              <p>
                Ibu lum orci eget, viverra elit. Aliquam erat volut pat phas
                ellus ac Placerat a ultricies a, posuere lorem ipseut lincas
                psuiem t volut pat phas ellus ac sodales Lorem ipsum dolor sit
                amet, consectetur adipisicing elit uasi quidem minus id omnis a
                nibh fusce mollis.
              </p>
            </div>
          </div>
          <div className="about_cards_wrapper row">
            <div className="about_card col-md-4 col-12">
              <img src={img1} alt="img" width="50%" />
              <h5>infrastructure</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                itaque ipsum sit harum.
              </p>
            </div>
            <div className="about_card col-md-4 col-12">
              <img src={img2} alt="img" width="50%" />
              <h5>infrastructure</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                itaque ipsum sit harum.
              </p>
            </div>
            <div className="about_card col-md-4 col-12">
              <img src={img3} alt="img" width="50%" />
              <h5>infrastructure</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                itaque ipsum sit harum.
              </p>
            </div>
            <div className="about_card col-md-4 col-12">
              <img src={img4} alt="img" width="50%" />
              <h5>infrastructure</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                itaque ipsum sit harum.
              </p>
            </div>
            <div className="about_card col-md-4 col-12">
              <img src={img5} alt="img" width="50%" />
              <h5>infrastructure</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                itaque ipsum sit harum.
              </p>
            </div>
            <div className="about_card col-md-4 col-12">
              <img src={img6} alt="img" width="50%" />
              <h5>infrastructure</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                itaque ipsum sit harum.
              </p>
            </div>
          </div>
          <div className="about_paper">
            <h3 className="text-center">What Parents Think</h3>
            <div class="ourWorkSlide">
              <div id="c2" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active carouselBg2 text-center">
                    <div className="items_parent_wrapper row ">
                      <div className="item_parent col-md-4 col-8 m-auto text-center">
                        <img
                          src={parent1}
                          alt="img"
                          width="50%"
                          className="d-block"
                        />
                        <blockquote>
                          Laudantium totam tempore optio lorem ispuet doloremque
                          aut eius animi Suspendisse a elementum ante. Nunc
                          aliquet tincidunt quam, non egestas arcu imperdiet et
                          maecenas eu eros non nibh aliquet iaculis..
                        </blockquote>
                        <p>jone casdey</p>
                      </div>
                      <div className="item_parent col-md-4 col-8 m-auto text-center">
                        <img
                          src={parent2}
                          alt="img"
                          width="50%"
                          className="d-block"
                        />
                        <blockquote>
                          Laudantium totam tempore optio lorem ispuet doloremque
                          aut eius animi Suspendisse a elementum ante. Nunc
                          aliquet tincidunt quam, non egestas arcu imperdiet et
                          maecenas eu eros non nibh aliquet iaculis..
                        </blockquote>
                        <p>jone casdey</p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item carouselBg2 text-center">
                    <div className="items_parent_wrapper row ">
                      <div className="item_parent col-md-4 col-8 m-auto text-center">
                        <img
                          src={parent3}
                          alt="img"
                          width="50%"
                          className="d-block"
                        />
                        <blockquote>
                          Laudantium totam tempore optio lorem ispuet doloremque
                          aut eius animi Suspendisse a elementum ante. Nunc
                          aliquet tincidunt quam, non egestas arcu imperdiet et
                          maecenas eu eros non nibh aliquet iaculis..
                        </blockquote>
                        <p>jone casdey</p>
                      </div>
                      <div className="item_parent col-md-4 col-8 m-auto text-center">
                        <img
                          src={parent4}
                          alt="img"
                          width="50%"
                          className="d-block"
                        />
                        <blockquote>
                          Laudantium totam tempore optio lorem ispuet doloremque
                          aut eius animi Suspendisse a elementum ante. Nunc
                          aliquet tincidunt quam, non egestas arcu imperdiet et
                          maecenas eu eros non nibh aliquet iaculis..
                        </blockquote>
                        <p>jone casdey</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev "
                  type="button"
                  data-bs-target="#c2"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </button>
                <button
                  class="carousel-control-next "
                  type="button"
                  data-bs-target="#c2"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon "
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

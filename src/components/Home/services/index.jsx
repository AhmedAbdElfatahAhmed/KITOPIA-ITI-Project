import React from "react";
import "./services.scss";
import { FaStar, FaChild } from "react-icons/fa";
import service from "../../../assets/images/home/services/services.png";
import service1 from "../../../assets/images/home/services/service1.jpg";
import service2 from "../../../assets/images/home/services/service2.jpg";
import service3 from "../../../assets/images/home/services/service3.jpg";
import kids from "../../../assets//images/home/services/visit/kids.png";
import { Link } from "react-router-dom";

function Service() {
  return (
    <section className="services">
      <div className="container">
        <div className="section-title d-flex justify-content-center text-uppercase  mb-5 position-relative">
          <h2>education</h2>
          <FaChild className="child-icon position-absolute" />
        </div>

        <div className="serve_cards_wrapper row ">
          <div className="serve_card col-md-3 col-8 ">
            <img src={service1} alt="img" width="100%" />
            <Link to="/edu/levels/preschool">PRE SCHOOL</Link>
            <p>Kitopia contains a variety of the year stage before 6 years.</p>
          </div>
          <div className="serve_card col-md-3 col-8 ">
            <img src={service2} alt="img" width="100%" />
            <Link to="/edu/levels/younger">YOUNGER</Link>
            <p>
              Kitubia contains a variety of the year stage for children over 6
              years.
            </p>
          </div>
          <div className="serve_card col-md-3 col-8 ">
            <img src={service3} alt="img" width="100%" />
            <Link to="/edu/levels/older">OLDER</Link>
            <p>
              Kitopia contains a variety of general stage for more than 10 years
            </p>
          </div>
        </div>
      </div>
      <div className="serve_botton ">
        <div className="container">
          <div className="serve_botton_wrapper row align-items-center">
            <div className="serve_botton_left col-md-6 col-12">
              <h3>ENTERTAINMENT CONTENT</h3>
              <p>
                The Kitopia platform provides a special section for entertainment
                with content suitable for children.
              </p>
              <Link to="/games">GET STARTED</Link>
            </div>
            <div className="serve_botton_right col-md-6 col-12">
              <img src={kids} alt="img" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;

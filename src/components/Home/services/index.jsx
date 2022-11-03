import React from "react";
import "./services.scss";
import service from "../../../assets/images/home/services/services.png";
import service1 from "../../../assets/images/home/services/service1.jpg";
import service2 from "../../../assets/images/home/services/service2.jpg";
import service3 from "../../../assets/images/home/services/service3.jpg";
import kids from "../../../assets/images/home/services/visit/kids.png";

function Service() {
  return (
    <section className="services">
      <div className="container">
        <h2 className="text-center">OUR SERVICES</h2>
        <div className="services_wrapper row">
          <div className="serve_left col-md-6 col-12">
            <h3>The Best Daycare</h3>
            <b>
              Alphabet Daycare will provide a stimulating and safe environment
              for children ages three months to ten years. Run by a former
              elementary school educator (Jane Doe)
            </b>
            <p>
              Lectus placerat a ultricies a,interdum donec eget metus auguen u
              Fusce mollis imperdiet interdum donec eget metus auguen Lectus
              placerat a ultricies a,interdum donec eget metus auguen um fusce
              mollis imperdiet interdu.
            </p>
          </div>
          <div className="col-md-6 col-12">
            <img src={service} alt="img" width="100%" height="80%" />
          </div>
        </div>
        <div className="serve_cards_wrapper row ">
          <div className="serve_card col-md-3 col-8 ">
            <img src={service1} alt="img" width="100%" />
            <h4>INFANTS</h4>
            <p>
              Lectus placerat a ultricies a,interdum donec eget metus auguen u
              Fusce mollis imperdiet interdum donec eget metus auguen unc.
            </p>
          </div>
          <div className="serve_card col-md-3 col-8 ">
            <img src={service2} alt="img" width="100%" />
            <h4>TODDLERS</h4>
            <p>
              Lectus placerat a ultricies a,interdum donec eget metus auguen u
              Fusce mollis imperdiet interdum donec eget metus auguen unc.
            </p>
          </div>
          <div className="serve_card col-md-3 col-8 ">
            <img src={service3} alt="img" width="100%" />
            <h4>PRE SCHOOL</h4>
            <p>
              Lectus placerat a ultricies a,interdum donec eget metus auguen u
              Fusce mollis imperdiet interdum donec eget metus auguen unc.
            </p>
          </div>
        </div>
      </div>
      <div className="serve_botton ">
        <div className="container">
        <div className="serve_botton_wrapper row ">
        <div className="serve_botton_left col-md-6 col-12">
          <h3>Visit Our Daycare</h3>
          <p>
            Lotam tempore optio doloremque laboriosam quas, quos eaque molestias
            odio aut eius animi Suspendisse a elementum anteu imperdiet et
            maecenas eu eros non nibh aliquet iaculis..
          </p>
          <a href="#">Contact us</a>
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

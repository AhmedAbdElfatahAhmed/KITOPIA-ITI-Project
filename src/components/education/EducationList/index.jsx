import "./EducationList.scss";
import videoimage from "../../../assets/images/education/001-youtube.png";
import stories from "../../../assets/images/education/edu-list-1.png";
import ask from "../../../assets/images/education/002-ask.png";
import { FaPenAlt, FaPencilRuler } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
const EducationList = () => {
  return (
    <section className="education-wrapper pt-5">
      <h1 className="edu-heading mb-5">Education</h1>
      <div className="edu-list">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="edu">
                <div className="edu-icon mb-4">
                  <img src={videoimage} alt="" />
                </div>
                <div className="edu-category">E-Videos</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="edu">
                <div className="edu-icon mb-4">
                  <img src={stories} alt="" />
                </div>
                <div className="edu-category">Stories</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="edu">
                <div className="edu-icon mb-4">
                  <img src={ask} alt="" />
                </div>
                <div className="edu-category">Questions?</div>
              </div>
            </div>
          </div>
        </div>
        <div className="pens">
          <GiOpenBook className="pen" />
          <GiOpenBook className="pen" />
          <GiOpenBook className="pen" />
          <GiOpenBook className="pen" />
          <FaPencilRuler className="pen" />
          <FaPencilRuler className="pen" />
          <FaPencilRuler className="pen" />
          <FaPencilRuler className="pen" />
          <FaPenAlt className="pen" />
          <FaPenAlt className="pen" />
          <FaPenAlt className="pen" />
          <FaPenAlt className="pen" />
        </div>
      </div>
    </section>
  );
};

export default EducationList;

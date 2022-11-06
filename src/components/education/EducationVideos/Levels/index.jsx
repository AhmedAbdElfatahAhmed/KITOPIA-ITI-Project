import { Link } from "react-router-dom";
import "./Levels.scss";
const EducationLevels = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4">
          <div className="preschool bg-info p-5">
            <Link className="link" to="/edu/levels/preschool">
              <h1>preschool</h1>
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="younger bg-primary p-5">
            <Link className="link" to="/edu/levels/younger">
              <h1>younger</h1>
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="older bg-warning p-5">
            <Link className="link" to="/edu/levels/older">
              <h1>older</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationLevels;

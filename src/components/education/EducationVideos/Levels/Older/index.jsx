import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubjects } from "../../../../redux/olderSubjectsSlice";
import { Link } from "react-router-dom";
const Older = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubjects());
  }, [dispatch]);
  const { olderSubjects } = useSelector((state) => state.olderSubjects);
  return (
    <div className="container row mx-auto gy-3 .justify-content-center  position-relative align-items-center pt-5 mt-5">
      {olderSubjects.map((subject) => {
        return (
          <div className="col-xl-4 mb-5" key={subject.id}>
            <div className="my-card">
              <Link to={`/edu/levels/older/${subject.title}`}>
              <div className="image w-100">
                <img className="w-100" src={subject.img} alt={subject.title} />
              </div>
              </Link>
              <div className="content">
                <h4 className="card-text">{subject.title}</h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Older;

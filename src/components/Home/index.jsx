import { Fragment } from "react";
import { FaStar, FaChild } from "react-icons/fa";
import parent1 from "../../assets/images/home/parents_feedback/parent-1.png";
import parent2 from "../../assets/images/home/parents_feedback/parent-2.png";
import parent3 from "../../assets/images/home/parents_feedback/parent-3.png";
import parent4 from "../../assets/images/home/parents_feedback/parent-4.jpg";
import parent5 from "../../assets/images/home/parents_feedback/parent-5.jpg";
import parent6 from "../../assets/images/home/parents_feedback/parent-6.jpg";
import child from "../../assets/images/home/contact_us/child.png";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import "./Home.scss";
const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Fragment>
      <main>
        {/*Start parents feedback section */}
        <section className="parents-feedback-section mt-5">
          <div className="section-title d-flex justify-content-center text-uppercase  mb-5 position-relative">
            <h2>parents feedback</h2>
            <FaChild className="child-icon position-absolute" />
          </div>

          <div className="container">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-interval="false"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="offset-lg-1 col-lg-5">
                      <div className="feedback rounded-5 position-relative">
                        <h3 className="parent-name mb-2 text-capitalize">
                          mario salles
                        </h3>
                        <div className="rating text-warning mb-2">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                        <q>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Repellat ab voluptate voluptatum! Ad possimus
                          doloremque inventore blanditiis nihil odio dolorum.
                          Facilis repudiandae minima cum voluptas repellat nihil
                          dolore sed ratione.
                        </q>
                        <figure className="position-absolute">
                          <img src={parent1} alt="parent-1" />
                        </figure>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="feedback rounded-5 position-relative">
                        <h3 className="parent-name  mb-2 text-capitalize">
                          jane doe
                        </h3>
                        <div className="rating text-warning mb-2">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                        <q>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Repellat ab voluptate voluptatum! Ad possimus
                          doloremque inventore blanditiis nihil odio dolorum.
                          Facilis repudiandae minima cum voluptas repellat nihil
                          dolore sed ratione.
                        </q>
                        <figure className="position-absolute">
                          <img src={parent2} alt="parent-2" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="offset-lg-1 col-lg-5">
                      <div className="feedback rounded-5 position-relative">
                        <h3 className="parent-name mb-2 text-capitalize">
                          maria silveira
                        </h3>
                        <div className="rating text-warning mb-2">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                        <q>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Repellat ab voluptate voluptatum! Ad possimus
                          doloremque inventore blanditiis nihil odio dolorum.
                          Facilis repudiandae minima cum voluptas repellat nihil
                          dolore sed ratione.
                        </q>
                        <figure className="position-absolute">
                          <img src={parent3} alt="parent-3" />
                        </figure>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="feedback rounded-5 position-relative">
                        <h3 className="parent-name  mb-2 text-capitalize">
                          vilken salles
                        </h3>
                        <div className="rating text-warning mb-2">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                        <q>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Repellat ab voluptate voluptatum! Ad possimus
                          doloremque inventore blanditiis nihil odio dolorum.
                          Facilis repudiandae minima cum voluptas repellat nihil
                          dolore sed ratione.
                        </q>
                        <figure className="position-absolute">
                          <img src={parent4} alt="parent-4" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="row">
                    <div className="offset-lg-1 col-lg-5">
                      <div className="feedback rounded-5 position-relative">
                        <h3 className="parent-name mb-2 text-capitalize">
                          julia stan
                        </h3>
                        <div className="rating text-warning mb-2">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                        <q>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Repellat ab voluptate voluptatum! Ad possimus
                          doloremque inventore blanditiis nihil odio dolorum.
                          Facilis repudiandae minima cum voluptas repellat nihil
                          dolore sed ratione.
                        </q>
                        <figure className="position-absolute">
                          <img src={parent5} alt="parent-5" />
                        </figure>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="feedback rounded-5 position-relative">
                        <h3 className="parent-name  mb-2 text-capitalize">
                          mary john
                        </h3>
                        <div className="rating text-warning mb-2">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                        <q>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Repellat ab voluptate voluptatum! Ad possimus
                          doloremque inventore blanditiis nihil odio dolorum.
                          Facilis repudiandae minima cum voluptas repellat nihil
                          dolore sed ratione.
                        </q>
                        <figure className="position-absolute">
                          <img src={parent6} alt="parent-6" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>
        {/*End parents feedback section */}

        {/*Start contact us section */}

        <section className="contact-us-section mb-5">
          <div className="section-title d-flex justify-content-center text-uppercase position-relative mb-5">
            <h2>contact us</h2>
            <FaChild className="child-icon position-absolute" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <div className="contact rounded-5 p-5 mb-md-0 mb-4">
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="offset-md-2 col-md-4 mb-2">
                        <Form.Group className="mb-3" controlId="formBasicFName">
                          <Form.Control
                            {...register("FName", {
                              required: true,
                            })}
                            type="text"
                            placeholder="Enter First Name"
                          />
                          {errors?.FName?.type === "required" && (
                            <Form.Text className="text-warning fw-bold">
                              first name is required
                            </Form.Text>
                          )}
                        </Form.Group>
                      </div>
                      <div className="col-md-4 mb-2">
                        <Form.Group className="mb-3" controlId="formBasicLName">
                          <Form.Control
                            {...register("LName", {
                              required: true,
                            })}
                            type="text"
                            placeholder="Enter Last Name"
                          />
                          {errors?.FName?.type === "required" && (
                            <Form.Text className="text-warning fw-bold">
                              Last name is required
                            </Form.Text>
                          )}
                        </Form.Group>
                      </div>

                      <div className="offset-md-2 col-md-8 mb-2">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            className="py-2"
                            {...register("email", {
                              required: true,
                              pattern:
                                /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                            })}
                            type="email"
                            placeholder="Enter Email"
                          />
                          {errors?.email?.type === "required" && (
                            <Form.Text className="text-warning fw-bold">
                              Email is required
                            </Form.Text>
                          )}
                          {errors?.email?.type === "pattern" && (
                            <Form.Text className="text-warning fw-bold">
                              Email is Not Vaild
                            </Form.Text>
                          )}
                        </Form.Group>
                      </div>

                      <div className="offset-md-2 col-md-8 mb-2">
                        <Form.Group
                          className="mb-3"
                          controlId="formBasiSubject"
                        >
                          <Form.Control
                            className="py-2"
                            {...register("subject", {
                              required: true,
                            })}
                            type="text"
                            placeholder="Enter Subject"
                          />
                          {errors?.subject?.type === "required" && (
                            <Form.Text className="text-warning fw-bold">
                              Subject is required
                            </Form.Text>
                          )}
                        </Form.Group>
                      </div>

                      <div className="offset-md-2 col-md-8 mb-2">
                        <Form.Group
                          className="mb-3"
                          controlId="messageForm.ControlTextarea1"
                        >
                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter your message"
                            {...register("message", {
                              required: true,
                            })}
                          />
                          {errors?.message?.type === "required" && (
                            <Form.Text className="text-warning fw-bold">
                              message is required
                            </Form.Text>
                          )}
                        </Form.Group>
                      </div>
                    </div>

                    <button
                      className="submit btn btn-warning text-white d-flex m-auto fs-5 rounded-5"
                      type="submit"
                    >
                      send message
                    </button>
                  </Form>
                </div>
              </div>
              <div className="col-md-4">
                <figure>
                  <img className="w-100" src={child} alt="child" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/*End contact us section */}
      </main>

      {/*Start footer section */}
      <footer>
        <p className="text-center fs-5">
          Copyright &copy; 2022 <span>KITOPIA</span>
        </p>
      </footer>
      {/*End footer section */}
    </Fragment>
  );
};

export default Home;

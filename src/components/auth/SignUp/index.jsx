import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import signupImg from '../../../assets/images/auth/signup.png'
import parentImg from "../../../assets/images/auth/parentsignup.jpg";
import childImg from "../../../assets/images/auth/childsignup.jpg";
import "./SignUp.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { UserAuth } from "../../Contexts/Authcontext";
import React from "react";
import { addDoc, collection } from "firebase/firestore/lite";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // Authentication
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErroer] = useState("");
  const { createUser } = UserAuth();

  const [profile, setprofile] = useState({
    parentName: "",
    parentDate: "",
    childName: "",
    childAge: "",
  });

  // Saving Data
  function handlechange(e) {
    profile[e.target.id] = e.target.value;
    setprofile({ ...profile, profile });
  }
  const savechanges = async (e) => {
    e.preventDefault();
    try {
      let userToCreate = await createUser(email, password);
      alert("succseeded: " + userToCreate.user.uid);
      toast("you are signup successfully");
      await addDoc(collection(props.db, "user-response-saving"), {
        parentName: profile.parentName,
        parentDate: profile.parentDate,
        childName: profile.childName,
        childAge: profile.childAge,
        uid: userToCreate.user.uid,
      })
        .then(function (res) {})
        .catch(function (err) {
          setErroer(e.message);
        });
    } catch (e) {
      setErroer(e.message);
      toast("This email already exists");
    }
  };

  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    event.preventDefault();
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };
  const uploadImg = (e) => {
    e.preventDefault();
    document.getElementById("selectFile").click();
  };
  return (
    <div className="container cont">
      <div className="row">
        <div className="offset-md-2 col-md-8">
          <Form className="w-10 mt-5 pt-5 px-5 rounded-5">
            <div className="row ">
              {/* parent & child */}
              <div className="col-md-6 rounded-5 parent-child w-100 m-auto  card shadow py-4">
                {/* parent */}
                <div className="parent d-flex justify-content-around    py-">
                  <div className="image mb-3 d-flex  align-items-center">
                    <img
                      className="w-100  rounded-circle paimg"
                      src={parentImg}
                      alt=""
                    />
                  </div>
                  <div className="iputs w-50  px-">
                    {/* parent Name */}
                    <Form.Group className="mb-3 inp" controlId="formBasicName">
                      <Form.Control
                        type="text"
                        id="parentName"
                        className=""
                        placeholder="Parent Name "
                        onChange={handlechange}
                      />
                      {error && <div> parent name is requried</div>}
                    </Form.Group>
                    {/* email */}
                    <Form.Group className="mb-3 inp" controlId="formBasicEmail">
                      <Form.Control
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="email"
                        placeholder="Email"
                      />
                      {error && <div>email is required</div>}
                    </Form.Group>
                    {/*password */}
                    <Form.Group
                      className="mb-3 inp"
                      controlId="formBasicpassword"
                    >
                      <Form.Control
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="password"
                      />
                      {error && <div>pawword is required</div>}
                    </Form.Group>
                    {/*Date */}
                    <Form.Group
                      className="mb-3 inp"
                      controlId="formBasicNumber"
                    >
                      <Form.Control
                        type="date"
                        id="parentDate"
                        placeholder="date"
                        onChange={handlechange}
                      />
                      {error && <div> parent date is requried</div>}
                    </Form.Group>
                  </div>
                </div>
                {/* child */}
                <div className="child d-flex justify-content-around     py-">
                  <div className="image mb-3 d-flex  align-items-center">
                    <img
                      className="w-100 rounded-circle chimg"
                      src={childImg}
                      alt=""
                    />
                  </div>
                  <div className="iputs w-50 px-">
                    {/* child Name */}
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Control
                        type="text"
                        id="childName"
                        className="inp"
                        placeholder="Child Name "
                        onChange={handlechange}
                      />
                      {error && <div> child name isrequried</div>}
                    </Form.Group>

                    {/* child age */}
                    <Form.Group className="mb-3" controlId="formBasicage">
                      <Form.Control
                        type="number"
                        id="childAge"
                        className="inp"
                        placeholder="Child Age"
                        onChange={handlechange}
                      />
                      {error && <div> parent age isrequried</div>}
                    </Form.Group>

                    {/* upload image*/}
                    <Form.Group className="mb-3" controlId="formBasicimage">
                      <section>
                        <div className="uploading">
                          <div className="row">
                            <div className="col-md-6 ">
                              <input
                                type="file"
                                className="w-100 text-light"
                                onChange={onSelectFile}
                                id="selectFile"
                              />
                              <button
                                onClick={uploadImg}
                                className="btn btn-primary text-white fs-6 fw-bold"
                              >
                                Upload child image
                              </button>
                            </div>
                            <div className="offset-md-3 col-md-3 ">
                              <div className="images w-100">
                                {selectedImages &&
                                  selectedImages.map((image) => {
                                    return (
                                      <div key={image} className="image ">
                                        <img
                                          src={image}
                                          className="w-100 card "
                                          alt="upload"
                                        />
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      {console.log(errors)}
                      {errors?.email?.type === "required" && (
                        <p className="text-danger">phone number is required</p>
                      )}
                    </Form.Group>
                  </div>
                </div>
              </div>
            </div>
            <div className="submit text-center ">
              <Button
                onClick={savechanges}
                className="my-3 sign px-5"
                type="submit"
              >
                Sign Up
              </Button>

              <p className="pb-2">
                Already have an account?{" "}
                <span>
                  {" "}
                  <Link className="link" to="/login">
                    Login
                  </Link>
                </span>
              </p>
            </div>
          </Form>
        </div>
      </div>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default SignUp;

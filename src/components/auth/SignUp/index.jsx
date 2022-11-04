import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import signupImg from '../../../assets/images/auth/signup.png'
import parentImg from '../../../assets/images/auth/parentsignup.jpg'
import childImg from '../../../assets/images/auth/childsignup.jpg'
import './SignUp.scss';
import { Link } from "react-router-dom";
import { useState } from "react";


function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };

  const onSubmit = data => console.log(data);
  return (
    <div className="container cont">
      <div className="row">
        <div className="col-md-6">
          <div className="image ">
            <img className="w-100" src={signupImg} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <Form onSubmit={handleSubmit(onSubmit)} className=" p-5 w-100 ">

            <div className="row ">
              {/* parent & child */}
              <div className="col-md-6  parent-child w-100 m-auto  card shadow py-4">
                {/* parent */}
                <div className="parent d-flex justify-content-around    py-2">
                  <div className="image mb-3 d-flex  align-items-center">
                    <img className="w-100  rounded-circle paimg" src={parentImg} alt="" />
                  </div>
                  <div className="iputs w-50  px-2">
                    {/* parent Name */}
                    <Form.Group className="mb-3 inp" controlId="formBasicName">

                      <Form.Control
                        type="text" className="" placeholder="Parent Name "
                        {...register('fname',
                          {
                            required: true
                          }
                        )}
                      />
                      {console.log(errors)}
                      {
                        errors?.email?.type === "required"
                        &&
                        <p className="text-danger"> parent name is required</p>
                      }

                    </Form.Group>


                    {/* email */}
                    <Form.Group className="mb-3 inp" controlId="formBasicEmail">


                      <Form.Control

                        type="email" placeholder="Enter email"
                        {...register('email',
                          {
                            required: true
                          }
                        )}
                      />
                      {console.log(errors)}
                      {
                        errors?.email?.type === "required"
                        &&
                        <p className="text-danger"> email is required</p>
                      }

                    </Form.Group>

                    {/* Phone Number */}
                    <Form.Group className="mb-3 inp" controlId="formBasicNumber">


                      <Form.Control

                        type="number" placeholder="phone number"
                        {...register('phone',
                          {
                            required: true
                          }
                        )}
                      />
                      {console.log(errors)}
                      {
                        errors?.email?.type === "required"
                        &&
                        <p className="text-danger">phone number is required</p>
                      }

                    </Form.Group>

                    {/*Date */}
                    <Form.Group className="mb-3 inp" controlId="formBasicNumber">


                      <Form.Control

                        type="date" placeholder="date"
                        {...register('date',
                          {
                            required: true
                          }
                        )}
                      />
                      {console.log(errors)}
                      {
                        errors?.email?.type === "required"
                        &&
                        <p className="text-danger">Date of birth is required</p>
                      }

                    </Form.Group>

                  </div>

                </div>
                {/* child */}
                <div className="child d-flex justify-content-around     py-2">
                  <div className="image mb-3 d-flex  align-items-center">
                    <img className="w-100 rounded-circle chimg" src={childImg} alt="" />
                  </div>
                  <div className="iputs w-50 px-2">
                    {/* child Name */}
                    <Form.Group className="mb-3" controlId="formBasicName">

                      <Form.Control
                        type="text" className="inp" placeholder="Child Name "
                        {...register('Chname',
                          {
                            required: true
                          }
                        )}
                      />
                      {console.log(errors)}
                      {
                        errors?.email?.type === "required"
                        &&
                        <p className="text-danger"> child name is required</p>
                      }

                    </Form.Group>


                    {/* child age */}
                    <Form.Group className="mb-3" controlId="formBasicage">


                      <Form.Control

                        type="number" className="inp" placeholder="Child Age"
                        {...register('age',
                          {
                            required: true
                          }
                        )}
                      />
                      {console.log(errors)}
                      {
                        errors?.email?.type === "required"
                        &&
                        <p className="text-danger"> email is required</p>
                      }

                    </Form.Group>

                    {/* upload image*/}
                    <Form.Group className="mb-3" controlId="formBasicimage">
                      <section>
                        <div className="uploading  card p-1 text-center text-dark">
                          <p>Uploade Image</p>
                          <div className="row ">
                            <div className="col-md-6 ">
                              <input
                                type="file"
                                className="w-100 text-light"
                                onChange={onSelectFile}
                              />
                            </div>
                            <div className="col-md-6 ">
                              <div className="images w-75">
                                {selectedImages &&
                                  selectedImages.map((image) => {
                                    return (
                                      <div key={image} className="image ">
                                        <img src={image} className="w-100 card " alt="upload" />

                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      {console.log(errors)}
                      {
                        errors?.email?.type === "required"
                        &&
                        <p className="text-danger">phone number is required</p>
                      }

                    </Form.Group>
                  </div>

                </div>
              </div>
            </div>
            <div className="submit text-center ">
              <Button className="mt-3 sign px-5" type="submit">
                Sign Up
              </Button>
              <p className="">Already have an account? <span> <Link className='text-decoration-none'
                to="/login">Login</Link></span></p>
            </div>
          </Form>
        </div>
      </div>
    </div>


  )
}

export default SignUp;
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import signupImg from '../../../assets/images/auth/signup.png'
import parentImg from '../../../assets/images/auth/parentsignup.jpg'
import childImg from '../../../assets/images/auth/childsignup.jpg'
import './SignUp.scss';
import { Link } from "react-router-dom";
import { useState } from "react";
import { UserAuth } from "../../Contexts/Authcontext";
import React from "react";
import { addDoc, collection } from "firebase/firestore/lite";



function SignUp(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setErroer] = useState('')
  const { createUser } = UserAuth()
  

  const handlesubmit = async (e) => {
    e.preventDefault()
    setErroer('')
    try {
      await createUser(email, password)
      alert("you are signup successfully")

    } catch (e) {
      setErroer(e.message)
      console.log(e.message)
      alert("try again")
    }
  }

  const [profile, setprofile] = useState({
    parentName: "",
    parentDate: "",
    childName: "",
    childAge: "",

  });

  // Saving Data
  function handlechange(e) {
    profile[e.target.id] = e.target.value;
    setprofile({ ...profile, profile })
  }

  const savechanges = async () => {
    await addDoc(collection(props.db, "user-response-saving"), {
      parentName: profile.parentName,
      parentDate: profile.parentDate,
      childName: profile.childName,
      childAge: profile.childAge,
    }).then(function (res) {


    }).catch(function (err) {
      setErroer(err.message)


    })
  };


  //   const [details, setDetails] = useState({
//     pname: '',
//     cname: '',
//     cage: '',
   
// })


// const PostData =async(e)=>{
//   e.preventDefault()

//   const{pname,cname,cage}=details;

//  const res=await fetch("https://kitopiaa-default-rtdb.firebaseio.com/kform.json",
//  {
//      method:'POST',
//      headers:{
//          'Content-Type':'application/json'
//      },
//      body:JSON.stringify({
//       pname,
//       cname,
//       cage,
     
//      })
//   })

// }
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
          <Form onSubmit={handlesubmit} className=" p-5 w-100 ">

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
                        type="text" id="parentName" className="" placeholder="Parent Name " onChange={handlechange}
                        // onChange={(e)=> setDetails({...details,pname:e.target.value})}

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
                        onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="Email"
                      />
                    </Form.Group>


                    {/*password */}
                    <Form.Group className="mb-3 inp" controlId="formBasicpassword">


                      <Form.Control
                        onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"
                      />
                    </Form.Group>

                    {/*Date */}
                    <Form.Group className="mb-3 inp" controlId="formBasicNumber">


                      <Form.Control

                        type="date" id="parentDate" placeholder="date" onChange={handlechange}
                       
                      />
                     

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
                        type="text" id="childName" className="inp" placeholder="Child Name " onChange={handlechange}
                        // onChange={(e)=> setDetails({...details,cname:e.target.value})}

                       
                      />
                     

                    </Form.Group>


                    {/* child age */}
                    <Form.Group className="mb-3" controlId="formBasicage">


                      <Form.Control

                        type="number" id="childAge" className="inp" placeholder="Child Age" onChange={handlechange}
                        // onChange={(e)=> setDetails({...details,cage:e.target.value})}

                        
                      />
                      
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
              <Button onClick={savechanges} className="mt-3 sign px-5" type="submit">
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
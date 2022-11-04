import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import loginImg from '../../../assets/images/auth/login.jpg'
import signinImg from '../../../assets/images/auth/signin.png'
import './Login.scss';
import { Link } from "react-router-dom";




function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();


  const onSubmit = data => console.log(data);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="image mb-3">
            <img className="w-100 " src={signinImg} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <Form onSubmit={handleSubmit(onSubmit)} className=" p-5  mt-5">

            <div className="row ">
              <div className="col-md-6 w-100 login m-auto card ">
                <div className=" d-flex justify-content-around  text-center mb-4  p-5">
                  <div className="image mb-3">
                    <img className="w-100 rounded-circle paimg" src={loginImg} alt="" />
                  </div>
                  <div className="iputs w-50 m-auto px-2">
                    {/* user name*/}
                    <Form.Group className="mb-3 inp " controlId="formBasicusername">

                      <Form.Control
                        type="text" className="" placeholder="User Name "
                        {...register('Uname',
                          {
                            required: true
                          }
                        )}
                      />
                      {console.log(errors)}
                      {
                        errors?.email?.type === "required"
                        &&
                        <p className="text-danger"> user name is required</p>
                      }

                    </Form.Group>


                    {/* password */}
                    <Form.Group className="mb-3 inp" controlId="formBasicpawwsord">


                      <Form.Control

                        type="password" placeholder="password"
                        {...register('password',
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
                    <label class="switch">
                      <input type="checkbox" />
                      <span class="slider "></span>
                      <span className="text-light"> Keep Me Login</span>
                    </label>
                    <p className="text-light">Login With Social Media</p>

                  </div>

                </div>

              </div>

            </div>
            <div className="submit text-center ">
              <Button className="mt-5 log px-5" type="submit">
                Login
              </Button>
              <p className="mt-4">Dont have an account? <span> <Link className='text-decoration-none'
                to="/signup">SignUp</Link></span></p>
            </div>

          </Form>

        </div>
      </div>
    </div>


  )
}

export default Login;
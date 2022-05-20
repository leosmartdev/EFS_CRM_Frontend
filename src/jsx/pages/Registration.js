import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch } from 'react-redux';
import RingLoader from "react-spinners/RingLoader";
import {
  loadingToggleAction,
  signupAction,
} from '../../store/actions/AuthActions';
// image
import logo from "../../images/logo_full_100.png";

function Register(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  let errorsObj = { email: '', password: '' };
  const [errors, setErrors] = useState(errorsObj);
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  function onSignUp(e) {
    e.preventDefault();
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    let error = false;
    const errorObj = { ...errorsObj };
    if (name === '') {
      errorObj.name = 'UserName is Required';
      error = true;
    }
    if (email === '') {
      errorObj.email = 'Email is Required';
      error = true;
    }
    if (password === '') {
      errorObj.password = 'Password is Required';
      error = true;
    }
    if (passwordConfirmation === '') {
      errorObj.passwordConfirmation = 'Password Confirmation is Required';
      error = true;
    }
    if (passwordConfirmation !== password) {
      errorObj.passwordConfirmation = 'Password Confirmation is incorrect';
      error = true;
    }
    setErrors(errorObj);
    if (error) {
      setIsLoading(false);
      return;
    }
    dispatch(loadingToggleAction(true));
    dispatch(signupAction(name, email, password, passwordConfirmation, props.history, setIsLoading));
  }
  return (
    <div className="authincation h-100 p-meddle">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-6">
            <div className="authincation-content">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <div className="auth-form">
                    <div className="text-center mb-3">
                      <Link to="/login">
                        <img src={logo} alt="" />
                      </Link>
                    </div>
                    <h4 className="text-center mb-4 ">Sign up your account</h4>
                    {props.errorMessage && (
                      <div className=''>
                        {props.errorMessage}
                      </div>
                    )}
                    {props.successMessage && (
                      <div className=''>
                        {props.successMessage}
                      </div>
                    )}
                    <form onSubmit={onSignUp}>
                      <div className="form-group mb-3">
                        <label className="mb-1 ">
                          <strong>Username</strong>
                        </label>
                        <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          className="form-control"
                          placeholder="username"
                        />
                      </div>
                      {errors.name && <div>{errors.name}</div>}
                      <div className="form-group mb-3">
                        <label className="mb-1 ">
                          <strong>Email</strong>
                        </label>
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control"
                          placeholder="hello@example.com"
                        />
                      </div>
                      {errors.email && <div>{errors.email}</div>}
                      <div className="form-group mb-3">
                        <label className="mb-1 ">
                          <strong>Password</strong>
                        </label>
                        <input
                          value={password}
                          onChange={(e) =>
                            setPassword(e.target.value)
                          }
                          className="form-control"
                          defaultValue="Password"
                        />
                      </div>
                      {errors.password && <div>{errors.password}</div>}
                      <div className="form-group mb-3">
                        <label className="mb-1 ">
                          <strong>Password Confirmation</strong>
                        </label>
                        <input
                          value={passwordConfirmation}
                          onChange={(e) =>
                            setPasswordConfirmation(e.target.value)
                          }
                          className="form-control"
                          defaultValue="Password"
                        />
                      </div>
                      {errors.passwordConfirmation && <div>{errors.passwordConfirmation}</div>}
                      <div className="text-center mt-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          {isLoading ? (
                            <>
                              Signing me up ... <RingLoader color="#ffffff" size={20} />
                            </>
                          ) : (
                            "Sign me up"
                          )}
                        </button>
                      </div>
                    </form>
                    <div className="new-account mt-3">
                      <p className="">
                        Already have an account?{" "}
                        <Link className="text-primary" to="/login">
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
    successMessage: state.auth.successMessage,
    showLoading: state.auth.showLoading,
  };
};

export default connect(mapStateToProps)(Register);


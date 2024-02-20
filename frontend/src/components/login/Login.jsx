import React from "react";
import Dropdown from "./Dropdown";
import "./login.css";

function Login() {
  const users = ["Student", "Professor", "T.A.", "Admin"];
  return (
    <>
      <main className="login-main">
        <div className="box">
          <div className="inner-box">
            <div className="forms-wrap">
              <form
                action="/signin"
                method="post"
                autocomplete="off"
                className="sign-in-form"
              >
                <div className="logo">
                  <img src="./photos/Login/clgLogo.png" alt="easyclass" />
                  <a href="/">
                    <h4>IIITA Classroom</h4>
                  </a>
                </div>

                <div className="heading">
                  <h2>Welcome Back</h2>
                  <h6>Please enter your details</h6>
                </div>

                <div className="actual-form">
                  <div className="relative z-0">
                    <input
                      type="text"
                      id="username"
                      className=" my-5 block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      for="username"
                      className="login-label absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                      Username
                    </label>
                  </div>

                  <div className="relative z-0">
                    <input
                      type="password"
                      id="password"
                      className="block mb-5 py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      for="password"
                      className=" login-label absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                      Password
                    </label>
                  </div>

                  <div className="mb-6 input-wrap flex">
                    <div className=" mr-3 text-gray-400">Sign-in as:</div>
                    <Dropdown id="signInAs" title="Sign-in as" users={users} />
                  </div>

                  <input
                    type="submit"
                    value="Sign In"
                    className="sign-btn"
                    // style={{ backgroundColor: "#5743D8"  }}
                  />
                </div>
              </form>
            </div>

            <div className="carousel">
              <div className="images-wrapper">
                <img
                  src="/photos/Login/img1.svg"
                  className="image img-1 show"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;

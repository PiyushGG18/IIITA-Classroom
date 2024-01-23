import React from "react";
import Dropdown from "./Dropdown";
import "./login.css";

function Login() {
  const users = ["Student", "Professor", "T.A.", "Admin"];
  return (
    <>
      {/* <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10 ">
        <div className="flex ">
          <div
            className="flex flex-wrap content-center rounded-s-3xl bg-white"
            style={{ width: "36rem", height: "36rem" }}
          >
            <div className=" w-76 m-auto">
              <h1 className="text-xl font-bold flex ">
                <img
                  src="./photos/Login/clgLogo.png"
                  alt="error"
                  className="flex flex-wrap content-center"
                  style={{ height: "30px", width: "30px", marginRight: "6px" }}
                />
                IIITA Classroom
              </h1>
              <small className="text-gray-400">
                Welcome back! Please enter your details
              </small>

              <form id="loginForm" className="mt-16">
                <div className="mb-3">
                  <label
                    htmlFor="loginUsername"
                    className="mb-2 block text-xs font-semibold"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="loginUsername"
                    autoComplete="on"
                    placeholder="Enter your username"
                    className="block w-full rounded-md border-b border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    required="true"
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="loginPassword"
                    className="mb-2 block text-xs font-semibold"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="loginPassword"
                    autoComplete="off"
                    placeholder="********"
                    className="block w-full rounded-md border-b border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    required="true"
                  />
                </div>

                <div className="mb-3">
                  <p className="mb-2 block text-xs font-semibold">Sign-in as</p>
                  <Dropdown title="Sign-in as" users={users} />
                </div>

                <div className="mb-5 mt-3 flex flex-wrap content-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="mr-1 checked:bg-purple-700"
                  />{" "}
                  <label
                    htmlFor="remember"
                    className="mr-auto text-xs font-semibold"
                  >
                    Remember Me
                  </label>
                </div>

                <div className="mb-3">
                  <button className="mb-1.5  block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div
            className="flex flex-wrap content-center rounded-e-3xl bg-white px-2 "
            style={{ width: "30rem", height: "36rem" }}
          >
            <img
              className=" bg-center bg-no-repeat bg-cover rounded-e-3xl flex justify-center content-center"
              style={{ width: "24rem", height: "36rem" }}
              src="./photos/Login/img1.svg"
              alt="err"
            />
          </div>
        </div>
      </div> */}

      <main>
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
                  <div className="input-wrap">
                    <input
                      type="text"
                      minlength="4"
                      className="input-field"
                      autocomplete="off"
                      required
                      placeholder="Username"
                    />
                  </div>

                  <div className="input-wrap">
                    <input
                      type="password"
                      minlength="4"
                      className="input-field"
                      autocomplete="off"
                      required
                      placeholder="Password"
                    />
                  </div>

                  <div className="mb-3 input-wrap flex">
                    <div className=" mr-3 " style={{ color: "gray" }}>
                      Sign-in as:
                    </div>
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

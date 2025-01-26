import React from "react";
import GenderCheckBox from "./GenderCheckBox";

function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-w-[24rem] mx-auto">
      <div className="w-full p-6 rounded-lg bg-gray-400/200 backdrop-blur-md border">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-sky-500"> ChatBox</span>
        </h1>
        <form action="" className="flex flex-col justify-center items-center ">
          <div>
            <label className="label p-2">
              <span className="text-gray-300 label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Fullname"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-gray-300 label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-gray-300 label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-gray-300 label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>
             <GenderCheckBox/>
          <a
            href="a"
            className="text-sm hover:underline hover:text-sky-500 mt-2 inline-block"
          >
            Already have an account?{" "}
          </a>

          <div>
            <button className="btn btn-soft btn-info mt-4">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

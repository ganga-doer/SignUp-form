import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg">
      <div className="w-full max-w-md bg-black/30 backdrop-blur-md text-yellow-100 shadow-2xl rounded-2xl p-6 ">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form className="space-y-4">
          <label className="block">
            UserName
            <input
              type="text"
              placeholder="Name"
              className="w-full mt-1 p-2 rounded text-black"
            />
          </label>

          <label className="block">
            Password
            <input
              type="password"
              placeholder="Password"
              className="w-full mt-1 p-2 rounded text-black outline-none"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-white text-amber-800 font-bold py-2 rounded hover:bg-amber-300 transition"
          >
            Login
          </button>
          <div className="text-center">
            {" "}
            <p className="text-sm mt-2">
              Don't have an account?{" "}
              <a href="/" className="underline  text-amber-800">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

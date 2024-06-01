import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div
      className="flex rounded-2xl bg-[transparent] mx-auto md:w-[70%] overflow-hidden mt-4 px-3"
      style={{ minHeight: "calc(100vh - 2.25rem - 2.25rem)" }}
    >
      <div className="min-h-full w-full flex flex-col items-center justify-center">
        <h2 className="font-bold text-2xl text-white text-center">
          Welcome To User Management
        </h2>
        {/* <p className="text-[#646464] mt-2 text-center">Click below to start.</p> */}
        <div className="mt-3 flex gap-3 items-center">
          <Link to="/login">
            <button
              type="submit"
              className="bg-[#19594D] py-2 px-3 text-white rounded-md mt-3"
            >
              Click To Start
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;

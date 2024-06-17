import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div
      className="flex rounded-2xl bg-[transparent] mx-auto md:w-[70%] overflow-hidden mt-4 px-3"
      style={{ minHeight: "calc(100vh - 56px - 32px - 32px)" }}
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
              className="bg-[#19594D] py-1 px-5 text-white rounded-sm mt-3"
            >
              {/* <span className="inline">Start </span> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-move-right"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;

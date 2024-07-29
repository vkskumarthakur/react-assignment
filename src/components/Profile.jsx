// src/components/Dashboard.js

import React, { useState, useEffect } from "react";
import User from "./User";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({
    photo: "",
    name: "",
    email: "",
    phone: "",
    experience: "",
    skills: "",
    education: "",
  });

  // Placeholder for fetching user profile logic
  // useEffect(() => {
  //   console.log("Fetching user profile");
  // }, []);

  return (
    <div className="">
      {/* <div className="bg-[#262626] py-3 px-5 flex items-center justify-end gap-3 shadow-md">
        <h2 className="text-white">
          <span className="text-[#ffffff] font-bold text-xl">{user.name}</span>
        </h2>
        <Link to="/">
          <button
            type="button"
            className="bg-[#19594D] py-1 px-3 text-white rounded-sm"
          >
            Logout &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-log-out inline"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1={21} x2={9} y1={12} y2={12} />
            </svg>
          </button>
        </Link>
      </div> */}
    <User user={user} setUser={setUser}/>
    </div>
  );
};

export default Profile;

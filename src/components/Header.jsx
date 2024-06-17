import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/dashboard" && (
        <div className="bg-[#262626] py-3 px-5 flex items-center justify-between shadow-md">
          <Link to="/">
            <div className="text-white vt323-regular px-5 text-2xl">
              User Management
            </div>
          </Link>
          <div className="flex justify-start gap-3">
            {location.pathname !== "/login" && (
              <Link to="/login">
                <button className="bg-[#19594D] py-1 px-3 text-white rounded-sm">
                  Login
                </button>
              </Link>
            )}
            {location.pathname !== "/register" && (
              <Link to="/register">
                <button className="bg-white text-[#19594D] py-1 px-3 rounded-sm hover:bg-[#19594D] hover:text-white">
                  Register
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

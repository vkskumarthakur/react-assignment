import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("user");
    navigate("/login");
    
  }

  return (
    <>
      {location.pathname !== "/" && (
        <div className="bg-[#262626] py-3 px-5 flex items-center justify-between shadow-md">
          <Link to="/">
            <div className="text-white vt323-regular px-5 text-2xl">
              User Management
            </div>
          </Link>
          <div className="flex justify-start gap-3">
            {!user ? (
              <>
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
              </>
            ) : (
              <>
              <div className="flex items-center justify-between gap-4">
              <span className="text-white">{user.username}</span>
               <button className="bg-[#19594D] py-1 px-3 text-white rounded-sm" onClick={handleLogout}>
                  Logout
                </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

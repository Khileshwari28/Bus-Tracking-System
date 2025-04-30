import React from "react";
import Login from "./Login";

function NavBar() {
  return (
    <>
      <div className="relative h-[110px] bg-[#c20a16] flex justify-content py-8">
        <div className="absolute top-0 left-0 w-full ">
          <div className="navbar bg-transparent  md:px-45 md:py-8">
            <div className="flex-1">
              <a className="btn btn-ghost hover:bg-[#c20a16] hover:border-none text-xl sm:text-2xl md:text-3xl text-white gap-4">
                <img
                  src="/logo1.png"
                  alt="Public"
                  className=" w-12 h-12 mx-auto md:text-3xl font-semibold "
                />
                Track Your Bus
              </a>
            </div>
            <div className="flex gap-10 ">
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-8">
                  <li>
                    <a className="text-xl text-white ">Contact</a>
                  </li>
                  <li>
                    <a className="text-xl text-white">About</a>
                  </li>
                </ul>
              </div>

              {/* PROFILE SECTION */}
              <div className="dropdown dropdown-end ">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full ">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
                      className="w-12 h-12"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">Profile</a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;

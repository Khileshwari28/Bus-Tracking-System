import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import About from "./About";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Search() {
  const navigate = useNavigate();
  const [searchId, setSearchId] = useState("");
  const [radius, setRadius] = useState(1.0);

  const handleSearch = (mode) => {
    if (mode === "single" && !searchId) {
      alert("Please enter a bus ID first");
      return;
    }
    
    navigate('/map', { 
      state: { 
        mode,
        id: mode === "single" ? searchId.toString() : "", // Convert to string
        radius: mode === "nearby" ? radius : 0.01
      } 
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <>
      <NavBar />
      <div className="absolute w-12 hidden  lg:w-40  top-50 ">
        {" "}
        {/* Position the image */}
        <img
          className=" h-auto object-contain"
          src={"destination.png"}
          alt="Destination"
        />
      </div>
      <div className="flex flex-col  items-center pt-20 ">
        <div className="flex flex-col items-center justify-center text-red-800 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl  font-bold">
            Find Your Bus Instantly
          </h1>
          <br />
          <p className=" text:lg sm:text-xl md:text-2xl">
            Track live Bus location, check nearby buses and reach college on
            time!!
          </p>
        </div>
        <br />
        <div className="flex flex-col sm:flex-row justify-center  items-center pt-10 gap-6">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className=" border-2 rounded-3xl flex p-4 sm:p-5 text-base sm:text-xl cursor-pointer bg-red-600 border-b-blue-950 shadow-2xl  text-white hover:bg-red-800"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Search Your Bus
          </button>

          <dialog id="my_modal_2" className="modal ">
            <div className="modal-box  flex gap-3 justify-center w-[300px] sm:w-[400px] dark:bg-white  ">
              <label className="input bg-outline dark:bg-white dark:text-black border-black">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search" required placeholder="Search"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}/>
              </label>
              <button 
              type="button"
              onClick={() => handleSearch("single")}
              className="btn bg-red-600 text-white border-blue-950  hover:bg-red-800">
                Search
              </button>
            </div>

            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          <button 
          onClick={() => handleSearch("nearby")}
          className="border-2 rounded-3xl flex p-4 sm:p-5 text-base sm:text-xl cursor-pointer bg-red-600 border-b-blue-950 shadow-2xl  text-white hover:bg-red-800">
            NearBy Buses
          </button>
          <button 
          onClick={() => handleSearch("all")}
          className="border-2 rounded-3xl flex p-4 sm:p-5 text-base sm:text-xl cursor-pointer bg-red-600 border-b-blue-950 shadow-2xl  text-white hover:bg-red-800">
            Show All Buses
          </button>

          <div className="flex items-center gap-2">
          <span>Radius (km):</span>
          <input
            type="range"
            min="0.5"
            max="5"
            step="0.1"
            value={radius}
            onChange={(e) => setRadius(parseFloat(e.target.value))}
          />
          <span>{radius.toFixed(1)}</span>
        </div>
        </div>
      </div>
      

      <div className="w-full flex-grow ">
        <About />
      </div>

      <Footer />
    </>
  );
}

export default Search;
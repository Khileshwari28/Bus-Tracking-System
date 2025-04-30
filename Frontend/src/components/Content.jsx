import React from "react";
import Login from "./Login";

function Content() {
  return (
    <>
      <div className="absolute bg-[#c20a16] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 ">
        <div className="mb-6">
          <h1 className="text-white text-lg sm:text-2xl md:text-3xl font-semibold">
            Buses Run Late..
          </h1>
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mt-2">You Won’t!!</h2>
        </div>

        <div>
          <button
            className="btn bg-[white] border-red-950 shadow-2xl text-2xl text-red-800 hover:bg-red-100 hover:text-amber-950 transition"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Login
          </button>

          <dialog id="my_modal_3" className="modal ">
            <div className="modal-box dark:bg-white ">
              <form method="dialog">
                <button className="btn btn-sm btn-circle absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <Login />
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
}

export default Content;

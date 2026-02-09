import React from "react";
import Login from "./Login";
import AdminLogin from "./AdminLogin";

function Content() {
  return (
    <>
      <div className="absolute bg-[#c20a16] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-6 py-8 rounded-lg">
        
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-white text-lg sm:text-2xl md:text-3xl font-semibold">
            Buses Run Late..
          </h1>
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mt-2">
            You Won’t!!
          </h2>
        </div>

        {/* Buttons (Vertical) */}
        <div className="flex flex-col gap-4">
          {/* Student Login */}
          <button
            className="btn bg-white shadow-2xl text-xl text-red-800 hover:bg-red-100 transition"
            onClick={() => document.getElementById("student_modal").showModal()}
          >
            Login as Student
          </button>

          {/* Admin Login */}
          <button
            className="btn bg-white shadow-2xl text-xl text-red-800 hover:bg-red-100 transition"
            onClick={() => document.getElementById("admin_modal").showModal()}
          >
            Login as Admin
          </button>
        </div>

        {/* Student Modal */}
        <dialog id="student_modal" className="modal">
          <div className="modal-box dark:bg-white">
            <form >
              <button className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
            </form>
            <Login />
          </div>
        </dialog>

        {/* Admin Modal */}
        <dialog id="admin_modal" className="modal">
          <div className="modal-box dark:bg-white">
            <form >
              <button className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
            </form>
            <AdminLogin />
          </div>
        </dialog>

      </div>
    </>
  );
}

export default Content;

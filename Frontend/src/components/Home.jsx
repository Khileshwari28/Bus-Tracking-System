import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Content from "./Content";

function Home() {
  return (
    <>
    <div className="flex flex-col h-screen bg-[#c20a16]">
      {/* NavBar - Always at the top */}
      <NavBar />

      {/* Content - Will take up the remaining space */}
      <div className="flex-grow ">
        <Content />
      </div>

      {/* Footer - Always at the bottom */}
      <Footer />
    </div>
    </>
  );
}

export default Home;

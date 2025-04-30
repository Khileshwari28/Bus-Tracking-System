import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer sm:footer-horizontal footer-center   bg-red-800 text-white p-4">
        <aside>
          <h3 className="text-xl lg:text-2xl font-bold ">--Contact--</h3>
          
          <p >
            755-56782-85272, abc@gmail.com <br/>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;

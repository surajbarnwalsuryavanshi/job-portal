import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div>
        {/* footer for the current page */}
        <footer>
          <div className="text-center p-2 bg-gray-100 text-sm text-black font-mono">
            <p>Copyright © 2026 Samanta-India. All rights reserved.</p>
            <p>
              Powered by <a href="#">Samanta India.</a>
            </p>
            <p>
              <Link to="/privacy-policy">Privacy Policy</Link> {"|"}{" "}
              <Link to="/terms-of-service">Terms Of Service</Link>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;

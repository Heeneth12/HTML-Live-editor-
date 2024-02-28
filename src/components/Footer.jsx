import React from "react";

function FooterBar() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-1">
        <div className="container mx-auto flex items-center justify-center">
          <p>&copy; 2024 HTML live editor. All rights reserved.</p>
          <a
            className="p-4"
            href="/Privacy-Policy"
            style={{ textDecoration: "underline" }}
          >
            Privacy & Policy
          </a>
          <a
            className="p-4"
            href="/contact"
            style={{ textDecoration: "underline" }}
          >
            Contact us
          </a>
        </div>
      </footer>
    </>
  );
}

export default FooterBar;

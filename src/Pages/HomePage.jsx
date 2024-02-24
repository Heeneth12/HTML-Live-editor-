import React from "react";
import { Helmet } from "react-helmet";
import CodeEditer from "../components/CodeEditer";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      {/* Set SEO tags using Helmet */}
      <Helmet>
        <title>HTML CSS JS Online Compiler</title>
        <meta
          name="description"
          content="Write, compile, and preview HTML, CSS, and JavaScript code online."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, online compiler, preview, code editor"
        />
        <meta name="author" content="Your Name or Your Website Name" />
        {/* Add other meta tags as needed for SEO optimization */}
      </Helmet>

      <NavBar />
      <CodeEditer />
      <Footer />
    </>
  );
}

export default HomePage;

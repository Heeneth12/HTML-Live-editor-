import React from "react";

function Privacy() {
  return (
    <div className="container mx-auto p-8 bg-white shadow-md rounded-md">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
        <p className="text-gray-700">
          We collect and process only the HTML and css code entered by users for
          the purpose of providing HTML editing and preview services on our
          website.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">No Personal Information</h2>
        <p className="text-gray-700">
          We do not collect any personal information from users.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Use of Data</h2>
        <p className="text-gray-700">
          The collected HTML and CSS code is used exclusively for rendering the
          HTML editing and preview features on our website.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">No Third-Party Sharing</h2>
        <p className="text-gray-700">
          We do not share the entered HTML code or any other user data with
          third parties.
        </p>
      </div>

      {/* Add more sections as needed... */}

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Policy Updates</h2>
        <p className="text-gray-700">
          This Privacy Policy may be updated, and users will be notified of any
          changes.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p className="text-gray-700">
          For questions or concerns about privacy, please contact us at mail
          :heeneth123@gmail.com.
        </p>
        <a href="/Contact">contact</a>
      </div>
    </div>
  );
}

export default Privacy;

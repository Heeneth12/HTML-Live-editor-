// PrivacyPolicy.jsx
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>

      <h2 className="text-xl font-bold">1. Introduction</h2>
      <p className="mb-4">Welcome to HTML live editor .</p>

      {/* Add more sections as needed */}

      <h2 className="text-xl font-bold">2. Information Collection and Use</h2>

      <h3 className="text-lg font-bold">2.1 Types of Data Collected</h3>

      <p className="mb-4">
        <strong className="text-blue-500">2.1.1 Personal Data</strong>
        <br />
        While using our Service, we may ask you to provide us with certain
        personally identifiable information that can be used to contact or
        identify you ("Personal Data"). Personally identifiable information may
        include, but is not limited to:
        <ul className="list-disc pl-8">
          <li>heeneth123@gmail.com</li>
          <li>Heeneth</li>
          {/* Add more items as needed */}
        </ul>
      </p>

      <h3 className="text-lg font-bold">2.2 Usage Data</h3>

      <p className="mb-4">We don't collect any data.</p>
    </div>
  );
};

export default PrivacyPolicy;

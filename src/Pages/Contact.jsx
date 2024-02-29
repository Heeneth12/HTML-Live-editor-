import React from "react";

function Contact() {
  return (
    <>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="mb-4">
          Feel free to reach out to us for any inquiries or questions.
        </p>

        {/* Contact Form */}
        <form className="mb-8">
          {/* Include your form fields here */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border p-2"
              required
            />
          </div>

          {/* Other form fields go here... */}

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>

        {/* Other Contact Information */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2">
            Email: <a href="mailto:your@email.com">heeneth123@gmail.com</a>
          </p>
          <p className="mb-2">Phone: +91 6304781014</p>
          <p className="mb-2">
            Aishwarya apartment, Kattankulathur , GST Road Chennai, pin-603203{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;

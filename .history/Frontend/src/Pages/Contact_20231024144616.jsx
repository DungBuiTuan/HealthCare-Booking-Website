/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit the form data to your backend API
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Contact Us</h1>

      <div className="mb-4">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full rounded-md border border-gray-300 px-4 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full rounded-md border border-gray-300 px-4 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          className="w-full rounded-md border border-gray-300 px-4 py-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  )
}

export default Contact
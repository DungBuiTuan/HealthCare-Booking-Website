/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleContactChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit the form data to your backend API
  };

  return (
    <div className='max-w-[800px]'>
    <div className='g-6 flex h-full flex-wrap items-center justify-center lg:justify-between'>
      <form onSubmit={handleSubmit}>
        <h1>Contact Us</h1>

        <div className="mb-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full rounded-md border border-gray-300 px-4 py-2"
            value={formData.name}
            onChange={handleContactChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full rounded-md border border-gray-300 px-4 py-2"
            value={formData.email}
            onChange={handleContactChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className="w-full rounded-md border border-gray-300 px-4 py-2"
            rows='5'
            value={formData.message}
            onChange={handleContactChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      </div>
    </div>
  )
}

export default Contact
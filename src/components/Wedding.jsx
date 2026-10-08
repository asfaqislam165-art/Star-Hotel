import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const Wedding = () => {
  return (
    <div className="p-8 m-8 border-40 border-black">
      
     
      <form
  action="#"
  className="mx-auto max-w-md space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-6"
>
  <div>
    <label
      className="block text-sm font-medium text-gray-900"
      htmlFor="name"
    >
      Full Name
    </label>

    <input
      className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
      id="name"
      type="text"
      placeholder="Your full name"
    />
  </div>

  <div>
    <label
      className="block text-sm font-medium text-gray-900"
      htmlFor="email"
    >
      Email
    </label>

    <input
      className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
      id="email"
      type="email"
      placeholder="Your email"
    />
  </div>

  <div>
    <label
      className="block text-sm font-medium text-gray-900"
      htmlFor="phone"
    >
      Phone Number
    </label>

    <input
      className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
      id="phone"
      type="tel"
      placeholder="Your phone number"
    />
  </div>

  <div>
    <label
      className="block text-sm font-medium text-gray-900"
      htmlFor="event"
    >
      Event Type
    </label>

    <select
      className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
      id="event"
    >
      <option value="">Select event type</option>
      <option value="wedding">Wedding</option>
      <option value="reception">Wedding Reception</option>
      <option value="engagement">Engagement</option>
      <option value="anniversary">Anniversary</option>
    </select>
  </div>

  <div>
    <label
      className="block text-sm font-medium text-gray-900"
      htmlFor="guests"
    >
      Number of Guests
    </label>

    <select
      className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
      id="guests"
    >
      <option value="">Select number of guests</option>
      <option value="50-100">50 - 100 Guests</option>
      <option value="100-200">100 - 200 Guests</option>
      <option value="200-500">200 - 500 Guests</option>
      <option value="500+">500+ Guests</option>
    </select>
  </div>

  <div>
    <label
      className="block text-sm font-medium text-gray-900"
      htmlFor="date"
    >
      Event Date
    </label>

    <input
      className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
      id="date"
      type="date"
    />
  </div>

  <div>
    <label
      className="block text-sm font-medium text-gray-900"
      htmlFor="message"
    >
      Additional Details
    </label>

    <textarea
      className="mt-1 w-full resize-none rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
      id="message"
      rows="4"
      placeholder="Tell us about your wedding or special event"
    ></textarea>
  </div>

  <Link to="/Congrats">      
  <button
    className="block w-full rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600"
    type="submit"
  >
    Submit
        </button>
      </Link>   
</form>
      
       

    </div>
  )
}

export default Wedding

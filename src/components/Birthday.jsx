import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const Birthday = () => {
  return (
    <div className="p-4 sm:p-8 m-2 sm:m-8 border-4 sm:border-8 border-black">
      <form
        action="#"
        className="mx-auto w-full max-w-md space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-4 sm:p-6"
      >
        <div>
          <label
            className="block text-sm font-medium text-gray-900"
            htmlFor="name"
          >
            Full Name
          </label>

          <input
            className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm sm:text-base text-gray-900 focus:border-indigo-500 focus:outline-none"
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
            className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm sm:text-base text-gray-900 focus:border-indigo-500 focus:outline-none"
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
            className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm sm:text-base text-gray-900 focus:border-indigo-500 focus:outline-none"
            id="phone"
            type="tel"
            placeholder="Your phone number"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-900"
            htmlFor="celebration"
          >
            Celebration Type
          </label>

          <select
            className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm sm:text-base text-gray-900 focus:border-indigo-500 focus:outline-none bg-white"
            id="celebration"
          >
            <option value="">Select celebration type</option>
            <option value="birthday">Birthday Party</option>
            <option value="kids-birthday">Kids Birthday</option>
            <option value="surprise">Surprise Birthday</option>
            <option value="milestone">Milestone Birthday</option>
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
            className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm sm:text-base text-gray-900 focus:border-indigo-500 focus:outline-none bg-white"
            id="guests"
          >
            <option value="">Select number of guests</option>
            <option value="10-25">10 - 25 Guests</option>
            <option value="25-50">25 - 50 Guests</option>
            <option value="50-100">50 - 100 Guests</option>
            <option value="100+">100+ Guests</option>
          </select>
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-900"
            htmlFor="date"
          >
            Celebration Date
          </label>

          <input
            className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm sm:text-base text-gray-900 focus:border-indigo-500 focus:outline-none bg-white"
            id="date"
            type="date"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-900"
            htmlFor="message"
          >
            Celebration Details
          </label>

          <textarea
            className="mt-1 w-full resize-none rounded-lg border border-gray-300 p-2.5 text-sm sm:text-base text-gray-900 focus:border-indigo-500 focus:outline-none bg-white"
            id="message"
            rows="4"
            placeholder="Tell us about your birthday celebration requirements"
          ></textarea>
        </div>
        
        <Link to="/Congrats">
        <button
          className="block w-full rounded-lg border border-indigo-600 bg-indigo-600 px-6 sm:px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600"
          type="submit"
        >
          Submit
          </button>
          </Link>
      </form>
    </div>
  )
}

export default Birthday
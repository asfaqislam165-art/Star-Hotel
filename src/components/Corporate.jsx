import React from 'react'
import {Link} from 'react-router-dom'

const Corporate = () => {
  return (
    <div className="p-4 sm:p-8 m-2 sm:m-8 border-4 border-black">
      <form
        action="#"
        className="mx-auto max-w-md space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-4 sm:p-6"
      >
        <div>
          <label
            className="block text-sm font-medium text-gray-900"
            htmlFor="name"
          >
            Full Name
          </label>

          <input
            className="mt-1 w-full rounded-lg border-gray-300 p-2.5 text-sm border focus:border-indigo-500 focus:outline-none"
            id="name"
            type="text"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-900"
            htmlFor="company"
          >
            Company Name
          </label>

          <input
            className="mt-1 w-full rounded-lg border-gray-300 p-2.5 text-sm border focus:border-indigo-500 focus:outline-none"
            id="company"
            type="text"
            placeholder="Your company name"
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
            className="mt-1 w-full rounded-lg border-gray-300 p-2.5 text-sm border focus:border-indigo-500 focus:outline-none"
            id="email"
            type="email"
            placeholder="Your business email"
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
            className="mt-1 w-full rounded-lg border-gray-300 p-2.5 text-sm border focus:border-indigo-500 focus:outline-none"
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
            className="mt-1 w-full rounded-lg border-gray-300 p-2.5 text-sm border focus:border-indigo-500 focus:outline-none"
            id="event"
          >
            <option value="">Select event type</option>
            <option value="meeting">Business Meeting</option>
            <option value="conference">Conference</option>
            <option value="seminar">Seminar</option>
            <option value="workshop">Workshop</option>
            <option value="corporate-dinner">Corporate Dinner</option>
          </select>
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-900"
            htmlFor="guests"
          >
            Number of Attendees
          </label>

          <select
            className="mt-1 w-full rounded-lg border-gray-300 p-2.5 text-sm border focus:border-indigo-500 focus:outline-none"
            id="guests"
          >
            <option value="">Select number of attendees</option>
            <option value="10-25">10 - 25 Attendees</option>
            <option value="25-50">25 - 50 Attendees</option>
            <option value="50-100">50 - 100 Attendees</option>
            <option value="100+">100+ Attendees</option>
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
            className="mt-1 w-full rounded-lg border-gray-300 p-2.5 text-sm border focus:border-indigo-500 focus:outline-none"
            id="date"
            type="date"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-900"
            htmlFor="message"
          >
            Event Details
          </label>

          <textarea
            className="mt-1 w-full resize-none rounded-lg border-gray-300 p-2.5 text-sm border focus:border-indigo-500 focus:outline-none"
            id="message"
            rows="4"
            placeholder="Tell us about your corporate event requirements"
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

export default Corporate
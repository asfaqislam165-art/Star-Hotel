import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'

const Fourteen = () => {
  return (
    
    

 <div className="p-4 sm:p-6 md:p-10 lg:p-16">

      <form
        action="#"
        className="mx-auto w-full max-w-md space-y-4 rounded-lg border-4 sm:border-8 md:border-20 border-black bg-gray-100 p-4 sm:p-6"
      >

        <div>
          <label
            className="block text-sm font-medium text-gray-900"
            htmlFor="name"
          >
            Name
          </label>

          <input
            className="mt-1 w-full rounded-lg border-gray-300 p-2 focus:border-indigo-500 focus:outline-none"
            id="name"
            type="text"
            placeholder="Your name"
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
            className="mt-1 w-full rounded-lg border-gray-300 p-2 focus:border-indigo-500 focus:outline-none"
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
            Phone
          </label>

          <input
            className="mt-1 w-full rounded-lg border-gray-300 p-2 focus:border-indigo-500 focus:outline-none"
            id="phone"
            type="tel"
            placeholder="Your phone"
          />
        </div>


        <Link to="/congrats">
          <button
            className="mt-2 block w-full rounded-lg border border-indigo-600 bg-indigo-600 px-4 sm:px-12 py-3 text-sm font-medium text-white"
            type="submit"
          >
            Submit
          </button>
        </Link>

      </form>

    </div>
  )
}

export default Fourteen

import React from 'react'
import { Link } from 'react-router-dom'

const Event = () => {
  return (
    <div className="p-4 sm:p-8 lg:p-16 max-w-7xl mx-auto">
      {/* Title */}
      <h3 className="text-center text-2xl font-bold text-gray-900 mb-6">
        <i className="fa-solid fa-wand-magic-sparkles mr-2"></i> Select Your Best Event
      </h3>

   
      <div className="flex justify-center mb-8">
        <div className="dropdown relative inline-block text-left">
          <button
            className="btn btn-primary dropdown-toggle px-6 py-2.5 bg-blue-600 text-white font-medium text-sm rounded shadow-md hover:bg-blue-700 transition"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Reserve
          </button>
          <ul className="dropdown-menu border border-gray-200 shadow-lg rounded-lg">
            <li>
              <Link className="dropdown-item px-4 py-2 hover:bg-gray-100 flex items-center gap-2" to="/wedding">
                <i className="fa-solid fa-ring"></i> Wedding
              </Link>
            </li>
            <li>
              <Link className="dropdown-item px-4 py-2 hover:bg-gray-100 flex items-center gap-2" to="/corporate">
                <i className="fa-regular fa-handshake"></i> Corporate (Meeting & Conferences)
              </Link>
            </li>
            <li>
              <Link className="dropdown-item px-4 py-2 hover:bg-gray-100 flex items-center gap-2" to="/birthday">
                <i className="fa-solid fa-menorah"></i> Celebration (Birthday & Special Moments)
              </Link>
            </li>
          </ul>
        </div>
      </div>

    
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          
          {/* Card 1: Wedding */}
          <div className="rounded bg-black text-white overflow-hidden w-full max-w-sm flex flex-col items-center pb-4 shadow-lg transition hover:scale-105">
            <img 
              src="src/images/Event/1.jpg" 
              alt="Wedding Event" 
              className="w-full h-56 object-cover" 
            />
            <p className="text-center font-semibold text-lg mt-3">Wedding</p>
            <ul className="list-none mt-2">
              <li className="list-none">
                <Link to="/wedding" className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2">
                  <i className="fa-solid fa-arrow-pointer"></i> Click
                </Link>
              </li>
            </ul>
          </div>

      
          <div className="rounded bg-black text-white overflow-hidden w-full max-w-sm flex flex-col items-center pb-4 shadow-lg transition hover:scale-105">
            <img 
              src="src/images/Event/2.jpg" 
              alt="Corporate Event" 
              className="w-full h-56 object-cover" 
            />
            <p className="text-center font-semibold text-lg mt-3">Corporate</p>
            <ul className="list-none mt-2">
              <li className="list-none">
                <Link to="/corporate" className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2">
                  <i className="fa-solid fa-arrow-pointer"></i> Click
                </Link>
              </li>
            </ul>
          </div>

        
          <div className="rounded bg-black text-white overflow-hidden w-full max-w-sm flex flex-col items-center pb-4 shadow-lg transition hover:scale-105">
            <img 
              src="src/images/Event/3.jpg" 
              alt="Celebration Event" 
              className="w-full h-56 object-cover" 
            />
            <p className="text-center font-semibold text-lg mt-3">Celebration</p>
            <ul className="list-none mt-2">
              <li className="list-none">
                <Link to="/birthday" className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2">
                  <i className="fa-solid fa-arrow-pointer"></i> Click
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Event
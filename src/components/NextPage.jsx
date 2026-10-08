import React from 'react'
import { Link } from 'react-router-dom'

const NextPage = () => {
  return (
    <div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-6 md:p-8 lg:p-10">

        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
          <img
            alt="Executive Luxury Suite"
            src="src\images\Room\14.jpg"
            className="h-48 sm:h-52 md:h-56 w-full object-cover"
          />

          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Executive Luxury Suite
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Spacious 5-star hotel suite featuring a king bed, warm ambient lighting, elegant wooden floors, and a private glass balcony.
            </p>

            <br />

            <p>
              <i className="fa-solid fa-money-bill"></i> Price : $250
            </p>

            <Link to="/Thirteen">
              <button className="mt-3 bg-black text-blue-500 border-2 rounded h-10 w-36">
                <i className="fa-solid fa-box mr-2"></i> Reserve Now
              </button>
            </Link>
          </div>
        </article>


        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
          <img
            alt="Deluxe Double Room"
            src="src\images\Room\15.jpg"
            className="h-48 sm:h-52 md:h-56 w-full object-cover"
          />

          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Deluxe Double Room
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Minimalist hotel room featuring a comfortable queen bed, air conditioning, modern bedside lighting, and a clean, serene layout.
            </p>

            <br />

            <p>
              <i className="fa-solid fa-money-bill"></i> Price : $120
            </p>

            <Link to="/Fourteen">
              <button className="mt-3 bg-black text-blue-500 border-2 rounded h-10 w-36">
                <i className="fa-solid fa-box mr-2"></i> Reserve Now
              </button>
            </Link>
          </div>
        </article>


        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
          <img
            alt="Premier City View Suite"
            src="src\images\Room\16.jpg"
            className="h-48 sm:h-52 md:h-56 w-full object-cover"
          />

          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Premier City View Suite
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Elegant 5-star hotel suite featuring a king bed, warm ambient lighting, cozy lounge seating, and floor-to-ceiling city views.
            </p>

            <br />

            <p>
              <i className="fa-solid fa-money-bill"></i> Price : $350
            </p>

            <Link to="/Fifteen">
              <button className="mt-3 bg-black text-blue-500 border-2 rounded h-10 w-36">
                <i className="fa-solid fa-box mr-2"></i> Reserve Now
              </button>
            </Link>
          </div>
        </article>


        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
          <img
            alt="Superior King Room"
            src="src\images\Room\17.jpg"
            className="h-48 sm:h-52 md:h-56 w-full object-cover"
          />

          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Superior King Room
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Modern hotel room featuring a plush king bed, stylish blue textured accent wall, and an integrated en-suite glass bathroom.
            </p>

            <br />

            <p>
              <i className="fa-solid fa-money-bill"></i> Price : $180
            </p>

            <Link to="/Sixteen">
              <button className="mt-3 bg-black text-blue-500 border-2 rounded h-10 w-36">
                <i className="fa-solid fa-box mr-2"></i> Reserve Now
              </button>
            </Link>
          </div>
        </article>


        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
          <img
            alt="Presidential Luxury Suite"
            src="src\images\Room\18.jpg"
            className="h-48 sm:h-52 md:h-56 w-full object-cover"
          />

          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Presidential Luxury Suite
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Sophisticated 5-star suite with a king-size bed, elegant warm lighting, premium parquet flooring, and a separate sitting area with large windows.
            </p>

            <br />

            <p>
              <i className="fa-solid fa-money-bill"></i> Price : $850
            </p>

            <Link to="/Seventeen">
              <button className="mt-3 bg-black text-blue-500 border-2 rounded h-10 w-36">
                <i className="fa-solid fa-box mr-2"></i> Reserve Now
              </button>
            </Link>
          </div>
        </article>


        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
          <img
            alt="Grand Deluxe Suite"
            src="src\images\Room\19.jpeg"
            className="h-48 sm:h-52 md:h-56 w-full object-cover"
          />

          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Grand Deluxe Suite
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Luxury 5-star suite featuring a plush bed, stylish round lounge chair, textured wall panels, patterned carpet, and large floor-to-ceiling glass windows.
            </p>

            <br />

            <p>
              <i className="fa-solid fa-money-bill"></i> Price : $280
            </p>

            <Link to="/Eighteen">
              <button className="mt-3 bg-black text-blue-500 border-2 rounded h-10 w-36">
                <i className="fa-solid fa-box mr-2"></i> Reserve Now
              </button>
            </Link>
          </div>
        </article>


        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
          <img
            alt="Royal Classic Suite"
            src="src\images\Room\20.jpeg"
            className="h-48 sm:h-52 md:h-56 w-full object-cover"
          />

          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Royal Classic Suite
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Opulent 5-star hotel suite featuring an ornate tufted leather bed, warm ambient lighting, rich dark wood paneling, and a classic luxury finish.
            </p>

            <br />

            <p>
              <i className="fa-solid fa-money-bill"></i> Price : $450
            </p>

            <Link to="/Nineteen">
              <button className="mt-3 bg-black text-blue-500 border-2 rounded h-10 w-36">
                <i className="fa-solid fa-box mr-2"></i> Reserve Now
              </button>
            </Link>
          </div>
        </article>


        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
          <img
            alt="Urban Executive Skyline Suite"
            src="src\images\Room\21.jpg"
            className="h-48 sm:h-52 md:h-56 w-full object-cover"
          />

          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Urban Executive Skyline Suite
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Ultra-modern 5-star hotel suite featuring a low-profile plush bed, dramatic moody lighting, vertical slat accents, and stunning floor-to-ceiling night skyline views.
            </p>

            <br />

            <p>
              <i className="fa-solid fa-money-bill"></i> Price : $600
            </p>

            <Link to="/Twenty">
              <button className="mt-3 bg-black text-blue-500 border-2 rounded h-10 w-36">
                <i className="fa-solid fa-box mr-2"></i> Reserve Now
              </button>
            </Link>
          </div>
        </article>


        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
          <img
            alt="Contemporary Park View Suite"
            src="src\images\Room\22.jpg"
            className="h-48 sm:h-52 md:h-56 w-full object-cover"
          />

          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Contemporary Park View Suite
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Sleek 5-star hotel room featuring a minimalist king bed, rich warm wood wall paneling, modern nightstands, and large glass windows overlooking a lush park.
            </p>

            <br />

            <p>
              <i className="fa-solid fa-money-bill"></i> Price : $320
            </p>

            <Link to="Twentyone">
              <button className="mt-3 bg-black text-blue-500 border-2 rounded h-10 w-36">
                <i className="fa-solid fa-box mr-2"></i> Reserve Now
              </button>
            </Link>
          </div>
        </article>


        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
          <img
            alt="Modern Minimalist Deluxe Room"
            src="src\images\Room\23.jpg"
            className="h-48 sm:h-52 md:h-56 w-full object-cover"
          />

          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Modern Minimalist Deluxe Room
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Elegant 5-star hotel room featuring a comfortable king bed in soft neutral tones, sleek wall paneling, a dedicated workspace, and bright window views.
            </p>

            <br />

            <p>
              <i className="fa-solid fa-money-bill"></i> Price : $150
            </p>

            <Link to="/Twentytwo">
              <button className="mt-3 bg-black text-blue-500 border-2 rounded h-10 w-36">
                <i className="fa-solid fa-box mr-2"></i> Reserve Now
              </button>
            </Link>
          </div>
        </article>


        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
          <img
            alt="Dark Elegance Suite"
            src="src\images\Room\24.jpg"
            className="h-48 sm:h-52 md:h-56 w-full object-cover"
          />

          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Dark Elegance Suite
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Sleek 5-star hotel room featuring a plush king bed with a bold geometric accent wall, subtle ambient pendant lighting, and a modern minimalist design.
            </p>

            <br />

            <p>
              <i className="fa-solid fa-money-bill"></i> Price : $200
            </p>

            <Link to="/Twentythree">
              <button className="mt-3 bg-black text-blue-500 border-2 rounded h-10 w-36">
                <i className="fa-solid fa-box mr-2"></i> Reserve Now
              </button>
            </Link>
          </div>
        </article>


        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
          <img
            alt="Panoramic Ocean View Suite"
            src="src\images\Room\15.jpg"
            className="h-48 sm:h-52 md:h-56 w-full object-cover"
          />

          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Panoramic Ocean View Suite
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Bright, ultra-luxurious 5-star hotel suite featuring a king bed with a tall padded headboard, elegant neutral decor, and expansive floor-to-ceiling windows with scenic ocean and city views.
            </p>

            <br />

            <p>
              <i className="fa-solid fa-money-bill"></i> Price : $900
            </p>

            <Link to="/Twentyfour">
              <button className="mt-3 bg-black text-blue-500 border-2 rounded h-10 w-36">
                <i className="fa-solid fa-box mr-2"></i> Reserve Now
              </button>
            </Link>
          </div>
        </article>

      </div>


      <div className="flex justify-center px-4 pb-10 overflow-x-auto">
        <nav aria-label="...">
          <ul className="pagination pagination-lg flex gap-2 whitespace-nowrap">

            <li className="page-item active">
              <Link
                className="page-link"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="page-item">
              <Link className="page-link" to="/nextpage">
                1
              </Link>
            </li>

            <li className="page-item">
              <Link className="page-link" to="/threepage">
                2
              </Link>
            </li>

            <li className="page-item">
              <Link className="page-link" to="/fourpage">
                3
              </Link>
            </li>

            <li className="page-item">
              <Link className="page-link" to="/fivepage">
                4
              </Link>
            </li>

          </ul>
        </nav>
      </div>

    </div>
  )
}

export default NextPage
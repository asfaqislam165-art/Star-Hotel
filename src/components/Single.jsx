
import React from 'react'
import {Link} from 'react-router-dom'

const Single = () => {
  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-6 lg:p-14">

      <h3 className="text-center text-black active:text-blue-800 col-span-1 sm:col-span-2 lg:col-span-3">
        These are best for an single person
      </h3>

      <article
        className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25"
      >
        <img
          alt=""
          src="src\images\Single\1.jpg"
          className="h-56 w-full object-cover"
        />

        <div className="p-4 sm:p-6">
          <a href="#">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Single Luxury Suite
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Spacious 5-star hotel suite featuring a king bed, warm ambient lighting, elegant wooden floors, and a private glass balcony.
          </p>

          <br />

          <p>
            <i className="fa-solid fa-money-bill"></i> Price : $250
          </p>

          <Link to="/One">
            <button className="bg-black text-blue-500 border-2 rounded h-10 w-36">
              <i className="fa-solid fa-box mr-2"></i> Reserve Now
            </button>
          </Link>
        </div>
      </article>


      <article
        className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25"
      >
        <img
          alt=""
          src="src\images\Single\2.jpg"
          className="h-56 w-full object-cover"
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

          <Link to="/Two">
            <button className="bg-black text-blue-500 border-2 rounded h-10 w-36">
              <i className="fa-solid fa-box mr-2"></i> Reserve Now
            </button>
          </Link>
        </div>
      </article>


      <article
        className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25"
      >
        <img
          alt=""
          src="src\images\Single\3.jpg"
          className="h-56 w-full object-cover"
        />

        <div className="p-4 sm:p-6">
          <a href="#">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Single City View Suite
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Elegant 5-star hotel suite featuring a king bed, warm ambient lighting, cozy lounge seating, and floor-to-ceiling city views.
          </p>

          <br />

          <p>
            <i className="fa-solid fa-money-bill"></i> Price : $350
          </p>

          <Link to="/Three">
            <button className="bg-black text-blue-500 border-2 rounded h-10 w-36">
              <i className="fa-solid fa-box mr-2"></i> Reserve Now
            </button>
          </Link>
        </div>
      </article>


      <article
        className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25"
      >
        <img
          alt=""
          src="src\images\Single\4.jpg"
          className="h-56 w-full object-cover"
        />

        <div className="p-4 sm:p-6">
          <a href="#">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Single King Room
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Modern hotel room featuring a plush king bed, stylish blue textured accent wall, and an integrated en-suite glass bathroom.
          </p>

          <br />

          <p>
            <i className="fa-solid fa-money-bill"></i> Price : $180
          </p>

          <Link to="/Four">
            <button className="bg-black text-blue-500 border-2 rounded h-10 w-36">
              <i className="fa-solid fa-box mr-2"></i> Reserve Now
            </button>
          </Link>
        </div>
      </article>


      <article
        className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25"
      >
        <img
          alt=""
          src="src\images\Single\5.jpg"
          className="h-56 w-full object-cover"
        />

        <div className="p-4 sm:p-6">
          <a href="#">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Single Luxury Suite
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Sophisticated 5-star suite with a king-size bed, elegant warm lighting, premium parquet flooring, and a separate sitting area with large windows.
          </p>

          <br />

          <p>
            <i className="fa-solid fa-money-bill"></i> Price : $850
          </p>

          <Link to="/Five">
            <button className="bg-black text-blue-500 border-2 rounded h-10 w-36">
              <i className="fa-solid fa-box mr-2"></i> Reserve Now
            </button>
          </Link>
        </div>
      </article>


      <article
        className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25"
      >
        <img
          alt=""
          src="src\images\Single\6.jpg"
          className="h-56 w-full object-cover"
        />

        <div className="p-4 sm:p-6">
          <a href="#">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Single Deluxe Suite
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Luxury 5-star suite featuring a plush bed, stylish round lounge chair, textured wall panels, patterned carpet, and large floor-to-ceiling glass windows.
          </p>

          <br />

          <p>
            <i className="fa-solid fa-money-bill"></i> Price : $280
          </p>

          <Link to="/Six">
            <button className="bg-black text-blue-500 border-2 rounded h-10 w-36">
              <i className="fa-solid fa-box mr-2"></i> Reserve Now
            </button>
          </Link>
        </div>
      </article>


      <article
        className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25"
      >
        <img
          alt=""
          src="src\images\Single\7.jpg"
          className="h-56 w-full object-cover"
        />

        <div className="p-4 sm:p-6">
          <a href="#">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Single Royal Classic Suite
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Opulent 5-star hotel suite featuring an ornate tufted leather bed, warm ambient lighting, rich dark wood paneling, and a classic luxury finish.
          </p>

          <br />

          <p>
            <i className="fa-solid fa-money-bill"></i> Price : $450
          </p>

          <Link to="/Seven">
            <button className="bg-black text-blue-500 border-2 rounded h-10 w-36">
              <i className="fa-solid fa-box mr-2"></i> Reserve Now
            </button>
          </Link>
        </div>
      </article>


      <article
        className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25"
      >
        <img
          alt=""
          src="src\images\Single\8.jpg"
          className="h-56 w-full object-cover"
        />

        <div className="p-4 sm:p-6">
          <a href="#">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Single Executive Skyline Suite
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Ultra-modern 5-star hotel suite featuring a low-profile plush bed, dramatic moody lighting, vertical slat accents, and stunning floor-to-ceiling night skyline views.
          </p>

          <br />

          <p>
            <i className="fa-solid fa-money-bill"></i> Price : $600
          </p>

          <Link to="/Eight">
            <button className="bg-black text-blue-500 border-2 rounded h-10 w-36">
              <i className="fa-solid fa-box mr-2"></i> Reserve Now
            </button>
          </Link>
        </div>
      </article>


      <article
        className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25"
      >
        <img
          alt=""
          src="src\images\Single\9.jpg"
          className="h-56 w-full object-cover"
        />

        <div className="p-4 sm:p-6">
          <a href="#">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Single Park View Suite
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Sleek 5-star hotel room featuring a minimalist king bed, rich warm wood wall paneling, modern nightstands, and large glass windows overlooking a lush park.
          </p>

          <br />

          <p>
            <i className="fa-solid fa-money-bill"></i> Price : $320
          </p>

          <Link to="/Nine">
            <button className="bg-black text-blue-500 border-2 rounded h-10 w-36">
              <i className="fa-solid fa-box mr-2"></i> Reserve Now
            </button>
          </Link>
        </div>
      </article>


      <article
        className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25"
      >
        <img
          alt=""
          src="src\images\Single\10.jpg"
          className="h-56 w-full object-cover"
        />

        <div className="p-4 sm:p-6">
          <a href="#">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Modern Single Deluxe Room
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Elegant 5-star hotel room featuring a comfortable king bed in soft neutral tones, sleek wall paneling, a dedicated workspace, and bright window views.
          </p>

          <br />

          <p>
            <i className="fa-solid fa-money-bill"></i> Price : $150
          </p>

          <Link to="/Ten">
            <button className="bg-black text-blue-500 border-2 rounded h-10 w-36">
              <i className="fa-solid fa-box mr-2"></i> Reserve Now
            </button>
          </Link>
        </div>
      </article>


      <article
        className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25"
      >
        <img
          alt=""
          src="src\images\Single\11.jpg"
          className="h-56 w-full object-cover"
        />

        <div className="p-4 sm:p-6">
          <a href="#">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Single Dark Elegance Suite
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Sleek 5-star hotel room featuring a plush king bed with a bold geometric accent wall, subtle ambient pendant lighting, and a modern minimalist design.
          </p>

          <br />

          <p>
            <i className="fa-solid fa-money-bill"></i> Price : $200
          </p>

          <Link to="/Eleven">
            <button className="bg-black text-blue-500 border-2 rounded h-10 w-36">
              <i className="fa-solid fa-box mr-2"></i> Reserve Now
            </button>
          </Link>
        </div>
      </article>


      <article
        className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25"
      >
        <img
          alt=""
          src="src\images\Room\12.jpg"
          className="h-56 w-full object-cover"
        />

        <div className="p-4 sm:p-6">
          <a href="#">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Single Ocean View Suite
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Bright, ultra-luxurious 5-star hotel suite featuring a king bed with a tall padded headboard, elegant neutral decor, and expansive floor-to-ceiling windows with scenic ocean and city views.
          </p>

          <br />

          <p>
            <i className="fa-solid fa-money-bill"></i> Price : $900
          </p>

          <Link to="/forms/Twelve">
            <button className="bg-black text-blue-500 border-2 rounded h-10 w-36">
              <i className="fa-solid fa-box mr-2"></i> Reserve Now
            </button>
          </Link>
        </div>
      </article>


      <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center pt-4 pb-4">
        <nav aria-label="...">
          <ul className="pagination pagination-lg">
            <li className="page-item active">
              <Link className="page-link" aria-current="page" to="/">
                <i className="fa-solid fa-house-tsunami"></i> Home
              </Link>
            </li>
          </ul>
        </nav>
      </div>

    </div>
  )
}

export default Single


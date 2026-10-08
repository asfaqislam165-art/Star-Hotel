import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="bg-black p-6 sm:p-8 md:p-12 lg:px-16 lg:py-24 dark:bg-gray-800 text-blue-500 rounded-lg md:rounded-none">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
                  <i className="fa-solid fa-ranking-star"></i> Star Hotel
                </h2>

                <p className="hidden text-blue-500 sm:mt-4 sm:block dark:text-gray-200">
                  Discover a perfect blend of elegance, comfort, and exceptional hospitality at Star Hotel. Enjoy beautifully designed rooms, world-class facilities, delicious dining, and a relaxing stay—all in one place.
                </p>

                <div className="mt-4 md:mt-8">
                  <Link
                    to="/nextpage"
                    className="inline-block rounded-sm border border-blue-600 bg-blue-600 px-8 py-3 sm:px-12 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-blue-600 dark:border-blue-300 dark:bg-blue-300 dark:text-gray-900 dark:hover:text-blue-300"
                  >
                    <i className="fa-solid fa-bed"></i> Book Our Room
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <img
                alt="Hotel Showcase 1"
                src="src/images/Home/1.jpg"
                className="h-48 sm:h-56 md:h-full w-full object-cover rounded-lg md:rounded-none"
              />

              <img
                alt="Hotel Showcase 2"
                src="src/images/Home/2.jpg"
                className="h-48 sm:h-56 md:h-full w-full object-cover rounded-lg md:rounded-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="col-span-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl/tight font-bold text-gray-900 dark:text-white">
              <i className="fa-solid fa-ranking-star"></i> About Star Hotel
            </h2>

            <p className="mt-4 text-base sm:text-lg text-pretty text-gray-700 dark:text-gray-200">
              Welcome to Star Hotel, where comfort, elegance, and exceptional hospitality come together to create a memorable stay. Our hotel is designed for guests who appreciate a peaceful environment, modern amenities, beautiful surroundings, and thoughtful service. Whether you are visiting for business, a family vacation, a romantic getaway, or simply looking for a relaxing escape, Star Hotel provides a comfortable place to stay and enjoy every moment.
              <br /><br />
              From the moment you arrive, our dedicated team is committed to making you feel welcomed and valued. Our beautifully designed rooms and suites offer a relaxing atmosphere with modern furnishings, comfortable beds, clean surroundings, and essential amenities to make your stay convenient. Every detail is carefully considered to provide a balance between style, comfort, and functionality.
              <br /><br />
              At Star Hotel, we believe that a great hotel experience goes beyond a comfortable room. Our guests can enjoy a range of facilities including a refreshing <b>swimming pool,</b> <b>fitness center,</b> <b>high-speed Wi-Fi,</b> <b>convenient parking,</b> <b>relaxing spaces,</b> and <b>professional services</b>. We also offer a delightful dining experience where guests can enjoy a variety of carefully prepared dishes in a comfortable and welcoming environment.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  <i className="fa-solid fa-bed-pulse"></i> Luxury Rooms
                </h3>
                <p className="mt-1 text-gray-700 dark:text-gray-200">
                  Experience a relaxing stay in our elegantly designed rooms and suites. Each room combines modern interiors, comfortable furnishings, quality amenities, and a peaceful atmosphere to make your stay truly enjoyable.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  <i className="fa-solid fa-house-medical-flag"></i> Premium Facilities
                </h3>
                <p className="mt-1 text-gray-700 dark:text-gray-200">
                  Make the most of your stay with our range of modern facilities. From a refreshing swimming pool and fully equipped fitness center to high-speed Wi-Fi and convenient parking, everything is designed for your comfort.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  <i className="fa-solid fa-plate-wheat"></i> Exceptional Dining
                </h3>
                <p className="mt-1 text-gray-700 dark:text-gray-200">
                  Enjoy a delightful dining experience with a variety of delicious dishes prepared with carefully selected ingredients. Our restaurant offers a comfortable atmosphere where you can relax, enjoy great food, and create memorable moments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Dropdown Section */}
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-20 my-6">
        <div className="dropdown">
          <h4 className="mb-2 font-semibold text-gray-800 dark:text-white text-base sm:text-lg">
            <i className="fa-solid fa-table-list mr-2"></i>
            <i>Categories For Double / Single</i>
          </h4>
          <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Type
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/nextpage">
                <i className="fa-solid fa-person mr-1"></i>
                <i className="fa-solid fa-person-dress mr-2"></i> Double
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/single">
                <i className="fa-solid fa-person mr-2"></i> Single
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Room Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6 md:p-10">
        {/* Room 1 */}
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
          <img alt="Executive Luxury Suite" src="src/images/Room/1.jpg" className="h-56 w-full object-cover" />
          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Executive Luxury Suite</h3>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Spacious 5-star hotel suite featuring a king bed, warm ambient lighting, elegant wooden floors, and a private glass balcony.
            </p>
            <p className="mt-4 font-semibold text-gray-900 dark:text-white">
              <i className="fa-solid fa-money-bill mr-1"></i> Price: $250
            </p>
            <div className="mt-4">
              <Link to="/One">
                <button className="bg-black text-blue-500 border-2 border-blue-500 rounded h-10 w-36 hover:bg-blue-500 hover:text-white transition-colors">
                  <i className="fa-solid fa-box mr-2"></i> Reserve Now
                </button>
              </Link>
            </div>
          </div>
        </article>

        {/* Room 2 */}
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
          <img alt="Deluxe Double Room" src="src/images/Room/2.jpg" className="h-56 w-full object-cover" />
          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Deluxe Double Room</h3>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Minimalist hotel room featuring a comfortable queen bed, air conditioning, modern bedside lighting, and a clean, serene layout.
            </p>
            <p className="mt-4 font-semibold text-gray-900 dark:text-white">
              <i className="fa-solid fa-money-bill mr-1"></i> Price: $120
            </p>
            <div className="mt-4">
              <Link to="/Two">
                <button className="bg-black text-blue-500 border-2 border-blue-500 rounded h-10 w-36 hover:bg-blue-500 hover:text-white transition-colors">
                  <i className="fa-solid fa-box mr-2"></i> Reserve Now
                </button>
              </Link>
            </div>
          </div>
        </article>

        {/* Room 3 */}
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
          <img alt="Premier City View Suite" src="src/images/Room/3.jpg" className="h-56 w-full object-cover" />
          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Premier City View Suite</h3>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Elegant 5-star hotel suite featuring a king bed, warm ambient lighting, cozy lounge seating, and floor-to-ceiling city views.
            </p>
            <p className="mt-4 font-semibold text-gray-900 dark:text-white">
              <i className="fa-solid fa-money-bill mr-1"></i> Price: $350
            </p>
            <div className="mt-4">
              <Link to="/Three">
                <button className="bg-black text-blue-500 border-2 border-blue-500 rounded h-10 w-36 hover:bg-blue-500 hover:text-white transition-colors">
                  <i className="fa-solid fa-box mr-2"></i> Reserve Now
                </button>
              </Link>
            </div>
          </div>
        </article>

        {/* Room 4 */}
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
          <img alt="Superior King Room" src="src/images/Room/4.jpg" className="h-56 w-full object-cover" />
          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Superior King Room</h3>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Modern hotel room featuring a plush king bed, stylish blue textured accent wall, and an integrated en-suite glass bathroom.
            </p>
            <p className="mt-4 font-semibold text-gray-900 dark:text-white">
              <i className="fa-solid fa-money-bill mr-1"></i> Price: $180
            </p>
            <div className="mt-4">
              <Link to="/Four">
                <button className="bg-black text-blue-500 border-2 border-blue-500 rounded h-10 w-36 hover:bg-blue-500 hover:text-white transition-colors">
                  <i className="fa-solid fa-box mr-2"></i> Reserve Now
                </button>
              </Link>
            </div>
          </div>
        </article>

        {/* Room 5 */}
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
          <img alt="Presidential Luxury Suite" src="src/images/Room/5.jpg" className="h-56 w-full object-cover" />
          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Presidential Luxury Suite</h3>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Sophisticated 5-star suite with a king-size bed, elegant warm lighting, premium parquet flooring, and a separate sitting area with large windows.
            </p>
            <p className="mt-4 font-semibold text-gray-900 dark:text-white">
              <i className="fa-solid fa-money-bill mr-1"></i> Price: $500
            </p>
            <div className="mt-4">
              <Link to="/Five">
                <button className="bg-black text-blue-500 border-2 border-blue-500 rounded h-10 w-36 hover:bg-blue-500 hover:text-white transition-colors">
                  <i className="fa-solid fa-box mr-2"></i> Reserve Now
                </button>
              </Link>
            </div>
          </div>
        </article>

        {/* Room 6 */}
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
          <img alt="Grand Deluxe Suite" src="src/images/Room/6.jpg" className="h-56 w-full object-cover" />
          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Grand Deluxe Suite</h3>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Luxury 5-star suite featuring a plush bed, stylish round lounge chair, textured wall panels, patterned carpet, and large floor-to-ceiling glass windows.
            </p>
            <p className="mt-4 font-semibold text-gray-900 dark:text-white">
              <i className="fa-solid fa-money-bill mr-1"></i> Price: $280
            </p>
            <div className="mt-4">
              <Link to="/Six">
                <button className="bg-black text-blue-500 border-2 border-blue-500 rounded h-10 w-36 hover:bg-blue-500 hover:text-white transition-colors">
                  <i className="fa-solid fa-box mr-2"></i> Reserve Now
                </button>
              </Link>
            </div>
          </div>
        </article>

        {/* Room 7 */}
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
          <img alt="Royal Classic Suite" src="src/images/Room/7.jpg" className="h-56 w-full object-cover" />
          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Royal Classic Suite</h3>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Opulent 5-star hotel suite featuring an ornate tufted leather bed, warm ambient lighting, rich dark wood paneling, and a classic luxury finish.
            </p>
            <p className="mt-4 font-semibold text-gray-900 dark:text-white">
              <i className="fa-solid fa-money-bill mr-1"></i> Price: $450
            </p>
            <div className="mt-4">
              <Link to="/Seven">
                <button className="bg-black text-blue-500 border-2 border-blue-500 rounded h-10 w-36 hover:bg-blue-500 hover:text-white transition-colors">
                  <i className="fa-solid fa-box mr-2"></i> Reserve Now
                </button>
              </Link>
            </div>
          </div>
        </article>

        {/* Room 8 */}
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
          <img alt="Urban Executive Skyline Suite" src="src/images/Room/8.jpg" className="h-56 w-full object-cover" />
          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Urban Executive Skyline Suite</h3>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Ultra-modern 5-star hotel suite featuring a low-profile plush bed, dramatic moody lighting, vertical slat accents, and stunning floor-to-ceiling night skyline views.
            </p>
            <p className="mt-4 font-semibold text-gray-900 dark:text-white">
              <i className="fa-solid fa-money-bill mr-1"></i> Price: $600
            </p>
            <div className="mt-4">
              <Link to="/Eight">
                <button className="bg-black text-blue-500 border-2 border-blue-500 rounded h-10 w-36 hover:bg-blue-500 hover:text-white transition-colors">
                  <i className="fa-solid fa-box mr-2"></i> Reserve Now
                </button>
              </Link>
            </div>
          </div>
        </article>

        {/* Room 9 */}
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
          <img alt="Contemporary Park View Suite" src="src/images/Room/9.jpg" className="h-56 w-full object-cover" />
          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Contemporary Park View Suite</h3>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Sleek 5-star hotel room featuring a minimalist king bed, rich warm wood wall paneling, modern nightstands, and large glass windows overlooking a lush park.
            </p>
            <p className="mt-4 font-semibold text-gray-900 dark:text-white">
              <i className="fa-solid fa-money-bill mr-1"></i> Price: $320
            </p>
            <div className="mt-4">
              <Link to="/Nine">
                <button className="bg-black text-blue-500 border-2 border-blue-500 rounded h-10 w-36 hover:bg-blue-500 hover:text-white transition-colors">
                  <i className="fa-solid fa-box mr-2"></i> Reserve Now
                </button>
              </Link>
            </div>
          </div>
        </article>

        {/* Room 10 */}
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
          <img alt="Modern Minimalist Deluxe Room" src="src/images/Room/10.jpg" className="h-56 w-full object-cover" />
          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Modern Minimalist Deluxe Room</h3>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Elegant 5-star hotel room featuring a comfortable king bed in soft neutral tones, sleek wall paneling, a dedicated workspace, and bright window views.
            </p>
            <p className="mt-4 font-semibold text-gray-900 dark:text-white">
              <i className="fa-solid fa-money-bill mr-1"></i> Price: $150
            </p>
            <div className="mt-4">
              <Link to="/Ten">
                <button className="bg-black text-blue-500 border-2 border-blue-500 rounded h-10 w-36 hover:bg-blue-500 hover:text-white transition-colors">
                  <i className="fa-solid fa-box mr-2"></i> Reserve Now
                </button>
              </Link>
            </div>
          </div>
        </article>

        {/* Room 11 */}
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
          <img alt="Dark Elegance Suite" src="src/images/Room/11.jpg" className="h-56 w-full object-cover" />
          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Dark Elegance Suite</h3>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Sleek 5-star hotel room featuring a plush king bed with a bold geometric accent wall, subtle ambient pendant lighting, and a modern minimalist design.
            </p>
            <p className="mt-4 font-semibold text-gray-900 dark:text-white">
              <i className="fa-solid fa-money-bill mr-1"></i> Price: $200
            </p>
            <div className="mt-4">
              <Link to="/Eleven">
                <button className="bg-black text-blue-500 border-2 border-blue-500 rounded h-10 w-36 hover:bg-blue-500 hover:text-white transition-colors">
                  <i className="fa-solid fa-box mr-2"></i> Reserve Now
                </button>
              </Link>
            </div>
          </div>
        </article>

        {/* Room 12 */}
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
          <img alt="Panoramic Ocean View Suite" src="src/images/Room/12.jpg" className="h-56 w-full object-cover" />
          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Panoramic Ocean View Suite</h3>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Bright, ultra-luxurious 5-star hotel suite featuring a king bed with a tall padded headboard, elegant neutral decor, and expansive floor-to-ceiling windows with scenic ocean and city views.
            </p>
            <p className="mt-4 font-semibold text-gray-900 dark:text-white">
              <i className="fa-solid fa-money-bill mr-1"></i> Price: $900
            </p>
            <div className="mt-4">
              <Link to="/Twelve">
                <button className="bg-black text-blue-500 border-2 border-blue-500 rounded h-10 w-36 hover:bg-blue-500 hover:text-white transition-colors">
                  <i className="fa-solid fa-box mr-2"></i> Reserve Now
                </button>
              </Link>
            </div>
          </div>
        </article>
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center my-8 px-4 overflow-x-auto">
        <nav aria-label="Page navigation">
          <ul className="pagination pagination-lg flex gap-1 flex-wrap justify-center">
            <li className="page-item active">
              <Link className="page-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="page-item"><Link className="page-link" to="/nextpage">1</Link></li>
            <li className="page-item"><Link className="page-link" to="/threepage">2</Link></li>
            <li className="page-item"><Link className="page-link" to="/fourpage">3</Link></li>
            <li className="page-item"><Link className="page-link" to="/fivepage">4</Link></li>
          </ul>
        </nav>
      </div>

      <br />
      <br />




        <div className="p-4 sm:p-8 lg:p-14">
      <footer className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 lg:grid lg:grid-cols-5 dark:bg-gray-900 dark:border-gray-800">
        
       
        <div className="relative block h-48 sm:h-64 lg:col-span-2 lg:h-full min-h-200px">
          <img
            src="src/images/Contact/1.avif" 
            alt="Star Hotel Contact"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="px-4 py-8 sm:px-6 lg:col-span-3 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <p>
                <span className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                  Call us
                </span>

                <a
                  href="tel:0123456789"
                  className="block text-xl font-medium text-gray-900 hover:opacity-75 sm:text-2xl lg:text-3xl dark:text-white mt-1"
                >
                  0123456789
                </a>
              </p>

              <ul className="mt-6 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                <li>Monday to Friday: 24 Hours</li>
                <li>Weekend: 24 Hours</li>
              </ul>

             
              <ul className="mt-6 flex flex-wrap gap-4 sm:gap-6">
                <li>
                  <a
                    href="https://facebook.com"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://instagram.com"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

          
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Hotel Services</p>

                <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm">
                  <li>
                    <Link to="/services" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      Room Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      Restaurant & Dining
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      Swimming Pool
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      Spa & Wellness
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      Airport Transfer
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900 dark:text-white">Star Hotel</p>

                <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm">
                  <li>
                    <Link to="/about" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/rooms" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      Our Rooms
                    </Link>
                  </li>
                  <li>
                    <Link to="/facilities" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                      Facilities
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        
          <div className="mt-8 sm:mt-12 border-t border-gray-100 pt-8 sm:pt-12 dark:border-gray-800">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <ul className="flex flex-wrap gap-4 text-xs">
                <li>
                  <Link to="/terms" className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/policy" className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
                    Hotel Policy
                  </Link>
                </li>
              </ul>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                &copy; Star Hotel. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>








    </div>
  );
};

export default Home;
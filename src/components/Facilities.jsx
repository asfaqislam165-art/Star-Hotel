import React from 'react'

const Facilities = () => {
  return (
    <div className="px-4 py-8 sm:py-16 bg-gray-50">

      <div className="mx-auto max-w-7xl">

        <h1 className="mb-3 text-center text-3xl sm:text-4xl font-bold text-gray-900">
          Hotel Facilities
        </h1>

        <p className="mb-8 sm:mb-10 text-center text-gray-600 font-extralight text-sm sm:text-base">
          Enjoy premium facilities and services designed to make your stay at
          Star Hotel comfortable and memorable.
        </p>

       
        <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-300 bg-white">

          <table className="w-full min-w-1200px border-collapse">

            <thead>
              <tr className="bg-gray-900">

                <th className="p-5 text-left text-sm font-semibold text-white border border-gray-700 min-w-200px">
                  <i className="fa-solid fa-wifi mr-2"></i> Free Wi-Fi
                </th>

                <th className="p-5 text-left text-sm font-semibold text-white border border-gray-700 min-w-200px">
                  <i className="fa-solid fa-person-swimming mr-2"></i> Swimming Pool
                </th>

                <th className="p-5 text-left text-sm font-semibold text-white border border-gray-700 min-w-200px">
                  <i className="fa-solid fa-pizza-slice mr-2"></i> Restaurant & Dining
                </th>

                <th className="p-5 text-left text-sm font-semibold text-white border border-gray-700 min-w-200px">
                  <i className="fa-solid fa-bed mr-2"></i> Room Service
                </th>

                <th className="p-5 text-left text-sm font-semibold text-white border border-gray-700 min-w-200px">
                  <i className="fa-solid fa-dumbbell mr-2"></i> Fitness Center
                </th>

                <th className="p-5 text-left text-sm font-semibold text-white border border-gray-700 min-w-200px">
                  <i className="fa-solid fa-spa mr-2"></i> Spa & Wellness
                </th>

                <th className="p-5 text-left text-sm font-semibold text-white border border-gray-700 min-w-200px">
                  <i className="fa-solid fa-car mr-2"></i> Free Parking
                </th>

                <th className="p-5 text-left text-sm font-semibold text-white border border-gray-700 min-w-200px">
                  <i className="fa-solid fa-headset mr-2"></i> 24/7 Reception
                </th>

                <th className="p-5 text-left text-sm font-semibold text-white border border-gray-700 min-w-200px">
                  <i className="fa-solid fa-house-flag mr-2"></i> Conference Room
                </th>

                <th className="p-5 text-left text-sm font-semibold text-white border border-gray-700 min-w-200px">
                  <i className="fa-solid fa-plane mr-2"></i> Airport Transfer
                </th>

              </tr>
            </thead>

            <tbody>
              <tr className="divide-x divide-gray-200">

                <td className="p-5 align-top text-sm leading-7 text-gray-600 border border-gray-200">
                  Enjoy fast, stable, and complimentary high-speed Wi-Fi
                  throughout Star Hotel. Stay connected with family, friends,
                  work, and entertainment from your room or any public area.
                </td>

                <td className="p-5 align-top text-sm leading-7 text-gray-600 border border-gray-200">
                  Relax and refresh yourself in our beautiful swimming pool.
                  Whether you want to enjoy a peaceful swim or spend quality
                  time with family, our pool offers a comfortable and refreshing
                  experience.
                </td>

                <td className="p-5 align-top text-sm leading-7 text-gray-600 border border-gray-200">
                  Experience a delightful selection of local and international
                  cuisine prepared by our skilled chefs. Enjoy fresh
                  ingredients, delicious flavors, and a comfortable dining
                  atmosphere throughout your stay.
                </td>

                <td className="p-5 align-top text-sm leading-7 text-gray-600 border border-gray-200">
                  Enjoy convenient and comfortable dining without leaving your
                  room. Our room service is available to provide delicious
                  meals, refreshments, and essential guest services directly to
                  your room.
                </td>

                <td className="p-5 align-top text-sm leading-7 text-gray-600 border border-gray-200">
                  Stay active during your stay with access to our modern fitness
                  center. Equipped with essential workout facilities, it
                  provides a comfortable environment for maintaining your daily
                  fitness routine.
                </td>

                <td className="p-5 align-top text-sm leading-7 text-gray-600 border border-gray-200">
                  Take a break from your busy routine and enjoy a relaxing
                  wellness experience. Our spa facilities are designed to help
                  you refresh your body, relax your mind, and enjoy a peaceful
                  stay.
                </td>

                <td className="p-5 align-top text-sm leading-7 text-gray-600 border border-gray-200">
                  Enjoy safe, secure, and convenient parking throughout your
                  stay at Star Hotel. Our dedicated parking facilities provide
                  guests with an easy and comfortable experience from arrival to
                  departure.
                </td>

                <td className="p-5 align-top text-sm leading-7 text-gray-600 border border-gray-200">
                  Our friendly reception team is available around the clock to
                  assist you whenever you need. From check-in and check-out to
                  general guest support, we are always ready to make your stay
                  more comfortable.
                </td>

                <td className="p-5 align-top text-sm leading-7 text-gray-600 border border-gray-200">
                  Host your meetings, presentations, and business events in our
                  comfortable conference facilities. Our professional
                  environment provides a convenient space for productive
                  meetings and successful events.
                </td>

                <td className="p-5 align-top text-sm leading-7 text-gray-600 border border-gray-200">
                  Travel comfortably between the airport and Star Hotel with
                  our convenient transfer service. Enjoy a smooth and hassle-free
                  journey with reliable transportation arranged for our guests.
                </td>

              </tr>
            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}

export default Facilities
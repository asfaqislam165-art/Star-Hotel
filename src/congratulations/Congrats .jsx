import React from 'react'
import {Link} from 'react-router-dom'

const Congrats = () => {
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(src/images/Congratulations/Congratulations.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold"> <i className="fa-solid fa-ranking-star"></i> Star Hotel</h1>
      <p className="mb-5">
        Congratulation For Stay With Us
          </p>
          <p><Strong>Our Team Will Contact With You Very Soon</Strong></p>
            <Link to="/">
            <button className="btn btn-primary"> <i class="fa-solid fa-person-shelter"></i> Go Home</button>
            </Link>
    </div>
  </div>
</div>
    
  )
}

export default Congrats 

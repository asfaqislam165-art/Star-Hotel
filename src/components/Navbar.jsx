import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>

    
      <ul className="nav justify-content-center bg-black ">
        
  <li className="nav-item">
    <Link className ="nav-link active" aria-current="page" to="/">  <i class="fa-solid fa-ranking-star"></i> Star Hotel</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="nextpage">Rooms</Link>
        </li>

        

  <li className="nav-item">
    <Link className="nav-link" to="facilities">Facilities</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="dining">Dining</Link>
        </li>

        



        <li className="nav-item">
    <Link className ="nav-link active" aria-current="page" to="/event">Event</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="contact">Contact</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="login">Login</Link>
        </li>

        
        
  
</ul>
      

    </div>
  )
}

export default Navbar

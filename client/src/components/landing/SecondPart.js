import React from 'react'
import campground from '../../images/campground5.jpg'
import {Link} from 'react-router-dom'
const SecondPart = () => {
  return (
    <div className="second_landing">
      <div>
        <h1>Find the best places to enjoy your hobby...</h1>
      </div>
      <img src={campground} alt="" />
      <h2>Share your passion all over the world ..</h2>
      <button>
        <Link to="/login">Discover</Link>{" "}
      </button>
    </div>
  );
}

export default SecondPart
import React from "react";
import {Link} from 'react-router-dom'
const FirstPart = () => {
  return (
    <div className="div_first_part">
      <div>
        <h1>What gets you outside?</h1>
      </div>
      <main>
        <div id="div_one">
          <h2>Swimming</h2>
          <button>
            <Link to="/login">Discover</Link>
          </button>
        </div>
        <div id="div_two">
          <h2>Hiking</h2>
          <button>
            <Link to="/login">Discover</Link>
          </button>
        </div>
        <div id="div_three">
          <h2>Nature lovers</h2>
          <button>
            <Link to="/login">Discover</Link>
          </button>
        </div>
        <div id="div_four">
          <h2>Camping</h2>
          <button>
            <Link to="/login">Discover</Link>
          </button>
        </div>
      </main>
    </div>
  );
};

export default FirstPart;

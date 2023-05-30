import React from 'react'
import {Link} from 'react-router-dom'
import mgasseb from '../../images/mgasseb.jpg'
import mtir from '../../images/mtir2.jpg'
import testour from '../../images/testour2.jpg'
import cape from '../../images/camenegro.jpg'
const LastPart = () => {
  return (
    <div>
      <div id="last_part">
        <h1>Recommended</h1>
      </div>
      <div className="first_line">
        <div className="row_content">
          <img src={mgasseb} alt="" />
          <div className="row_content_content">
            <h2>Mgasseb - Béja</h2>
            <button>
              <Link to="/login"> See More</Link>
            </button>
          </div>
        </div>
        <div className="row_content">
          <img src={mtir} alt="" />
          <div className="row_content_content">
            <h2>Bni Mtir Foret</h2>
            <button>
              <Link to="/login"> See More</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="first_line">
        <div className="row_content">
          <img src={testour} alt="" />
          <div className="row_content_content">
            <h2>Testour - Béja</h2>
            <button>
              <Link to="/login"> See More</Link>
            </button>
          </div>
        </div>{" "}
        <div className="row_content">
          <img src={cape} alt="" />
          <div className="row_content_content">
            <h2>Cape Negro </h2>
            <button>
              <Link to="/login"> See More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastPart
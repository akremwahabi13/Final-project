import React, { useState, useEffect } from "react";

import Status from "../components/home/Status";
import Posts from "../components/home/Posts";
import RightSideBar from "../components/home/RightSideBar";
import places from "./dummy-data/dummy";
import { useSelector } from "react-redux";
import LoadIcon from "../images/loading.gif";

let scroll = 0;

const Home = () => {
  const { homePosts } = useSelector((state) => state);
  const [placesTunisia, setPlacesTunisia] = useState(places);

  window.addEventListener("scroll", () => {
    if (window.location.pathname === "/") {
      scroll = window.pageYOffset;
      return scroll;
    }
  });

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: scroll, behavior: "smooth" });
    }, 100);
  }, []);

  useEffect(() => {
   setPlacesTunisia(places)
  },[placesTunisia]);

  return (
    <div className="home row mx-0 home_test">
      <div className="col-md-2 another-test">
        <h5 style={{textAlign:"center", fontWeight:"bold" , color:"purple"}}>Best camping sites in Tunisia</h5>
        {placesTunisia.map((place, index) => (
          <div key={index} className="location">
            <h5> {place.title} </h5>
            <iframe
              src={place.location}
              width="150px"
              height="150px"
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <img src= {place.imageUrl} width="150px" height="150px"  />
          </div>
        ))}
      </div>
      <div className="col-md-6 test">
        <Status />

        {homePosts.loading ? (
          <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
        ) : homePosts.result === 0 && homePosts.posts.length === 0 ? (
          <h2 className="text-center">No Post</h2>
        ) : (
          <Posts />
        )}
      </div>
      {/* <div className="col-md-1"></div> */}
      <div className="col-md-3 test">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Home;

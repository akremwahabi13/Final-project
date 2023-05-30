import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   getDiscoverPosts,
//   DISCOVER_TYPES,
// } from "../redux/actions/discoverAction";
// import LoadIcon from "../images/loading.gif";
// import PostThumb from "../components/PostThumb";
// import LoadMoreBtn from "../components/LoadMoreBtn";
// import { getDataAPI } from "../utils/fetchData";
import discover from "../images/campcamp.jpg";
import places from "./dummy-data/dummy";
import data from "./dummy-data/dummy";
const Discover = () => {
  // const { auth, discover } = useSelector(state => state)
  // const dispatch = useDispatch()

  // const [load, setLoad] = useState(false)

  // useEffect(() => {
  //     if(!discover.firstLoad){
  //         dispatch(getDiscoverPosts(auth.token))
  //     }
  // },[dispatch, auth.token, discover.firstLoad])

  // const handleLoadMore = async () => {
  //     setLoad(true)
  //     const res = await getDataAPI(`post_discover?num=${discover.page * 9}`, auth.token)
  //     dispatch({type: DISCOVER_TYPES.UPDATE_POST, payload: res.data})
  //     setLoad(false)
  // }
  const [Places, setPlaces] = useState(data);
  return (
    <div>
      {/* {
                discover.loading 
                ? <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
                : <PostThumb posts={discover.posts} result={discover.result} />
            }

            {
                load && <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
            }

            {
                !discover.loading &&
                <LoadMoreBtn result={discover.result} page={discover.page}
                load={load} handleLoadMore={handleLoadMore} />
            } */}

      {/* *************** */}
      <div>
        <img src={discover} alt="" id="discoverrr" />
      </div>
      {/* ********************** */}
      <div className="another_cont">
        <div>
          <h3
            style={{ color: "purple", textAlign: "center", fontWeight: "bold" }}
          >
            Getting Back to Nature: 10 of the Best Places to Camp in Tunisia
          </h3>
        </div>

        {places.map((place, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              padding: "10px",
              margin: "5px",
            }}
          >
            <div className="into-the-desc">
              <h2>{place.title} </h2>
              <h4>{place.description} </h4>
              <img src={place.imageUrl} alt="" />
            </div>
            <div>
              <iframe
                src={place.location}
                width="600px"
                height="100%"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;

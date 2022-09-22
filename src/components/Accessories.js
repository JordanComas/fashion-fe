import React, { useRef } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { get, deleted } from "../services/service";
import axios from "axios";

const Accessories = () => {
  const [refresh, setRefresh] = React.useState(false);
  const [rings, setRings] = React.useState([]);
  const [bracelets, setBracelets] = React.useState([]);
  const [necklaces, setNecklaces] = React.useState([]);

  const newId = localStorage.getItem("id");

  const ringRef = useRef(null);
  const braceletRef = useRef(null);
  const necklaceRef = useRef(null);

  const executeScrollToRing = () =>
    ringRef.current.scrollIntoView({
      behavior: "smooth",
    });

  const executeScrollToBracelet = () =>
    braceletRef.current.scrollIntoView({
      behavior: "smooth",
    });

  const executeScrollToNecklace = () =>
    necklaceRef.current.scrollIntoView({
      behavior: "smooth",
    });

  React.useEffect(() => {
    getRings();
    getBracelets();
    getNecklaces();
  }, [refresh]);

  const getRings = async () => {
    const response = await get("/posts/all-rings");

    setRings(response.data);
  };

  const getBracelets = async () => {
    const response = await get("/posts/all-bracelets");

    setBracelets(response.data);
  };

  const getNecklaces = async () => {
    const response = await get("/posts/all-necklaces");

    setNecklaces(response.data);
  };

  const deletePost = async (postId) => {
    try {
      const response = await deleted(`/posts/delete/${postId}`);

      console.log(response);
      setRefresh(!refresh);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="accessories-page">
      <div className="dash-cat">
        <Link onClick={executeScrollToRing} to="#">
          <h4>Rings</h4>
        </Link>
        <Link onClick={executeScrollToBracelet} to="#">
          <h4>Bracelets</h4>
        </Link>
        <Link onClick={executeScrollToNecklace} to="#">
          <h4>Necklaces</h4>
        </Link>
      </div>

      <div ref={ringRef} className="grinders-section">
        <div className="titles">
          <h1>Rings</h1>
        </div>
        {rings.map((ring) => {
          return (
            <div className="grinders">
              <Link to="#">
                <h3>{ring.title}</h3>
                <div className="post-img-box">
                  <img
                    src={
                      ring.postPic ||
                      "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
                    }
                    alt=""
                  />
                </div>
                <p className="rings-content">{ring.content}</p>
                <p className="rings-price">{ring.price}</p>
                <div className="remove-btn">
                  {ring.creatorId === newId && (
                    <button onClick={() => deletePost(ring._id)}>Remove</button>
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div ref={braceletRef} className="grinders-section2">
        <div className="titles">
          <h1>Bracelets</h1>
        </div>
        {bracelets.map((bracelet) => {
          return (
            <div className="grinders">
              <Link to="#">
                <h3>{bracelet.title}</h3>
                <div className="post-img-box">
                  <img
                    src={
                      bracelet.postPic ||
                      "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
                    }
                    alt=""
                  />
                </div>
                <p className="grinders-content">{bracelet.content}</p>
                <p className="grinders-price">{bracelet.price}</p>
                <div className="remove-btn">
                  {bracelet.creatorId === newId && (
                    <button onClick={() => deletePost(bracelet._id)}>
                      Remove
                    </button>
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div ref={necklaceRef} className="grinders-section">
        <div className="titles">
          <h1>Necklaces</h1>
        </div>
        {necklaces.map((necklace) => {
          return (
            <div className="grinders">
              <Link to="#">
                <h3>{necklace.title}</h3>
                <div className="post-img-box">
                  <img
                    src={
                      necklace.postPic ||
                      "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
                    }
                    alt=""
                  />
                </div>
                <p className="grinders-content">{necklace.content}</p>
                <p className="grinders-price">{necklace.price}</p>
                <div className="remove-btn">
                  {necklace.creatorId === newId && (
                    <button onClick={() => deletePost(necklace._id)}>
                      Remove
                    </button>
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Accessories;

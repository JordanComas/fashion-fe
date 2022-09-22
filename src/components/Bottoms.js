import React, { useRef } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { get, deleted } from "../services/service";
import axios from "axios";

const Bottoms = () => {
  const [refresh, setRefresh] = React.useState(false);
  const [jeans, setJeans] = React.useState([]);
  const [sweatpants, setSweatpants] = React.useState([]);
  const [shorts, setShorts] = React.useState([]);

  const newId = localStorage.getItem("id");

  const jeansRef = useRef(null);
  const sweatpantsRef = useRef(null);
  const shortsRef = useRef(null);

  const executeScrollToJeans = () =>
    jeansRef.current.scrollIntoView({
      behavior: "smooth",
    });

  const executeScrollToSweatpants = () =>
    sweatpantsRef.current.scrollIntoView({
      behavior: "smooth",
    });
  const executeScrollToShorts = () =>
    shortsRef.current.scrollIntoView({
      behavior: "smooth",
    });

  React.useEffect(() => {
    getJeans();
    getSweatpants();
    getShorts();
  }, [refresh]);

  const getJeans = async () => {
    const response = await get("/posts/all-jeans");

    setJeans(response.data);
  };

  const getSweatpants = async () => {
    const response = await get("/posts/all-sweatpants");

    setSweatpants(response.data);
  };

  const getShorts = async () => {
    const response = await get("/posts/all-shorts");

    setShorts(response.data);
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
        <Link onClick={executeScrollToJeans} to="#">
          <h4>Jeans</h4>
        </Link>
        <Link onClick={executeScrollToSweatpants} to="#">
          <h4>Sweatpants</h4>
        </Link>
        <Link onClick={executeScrollToShorts} to="#">
          <h4>Shorts</h4>
        </Link>
      </div>

      <div ref={jeansRef} className="grinders-section">
        <div className="titles">
          <h1>Jeans</h1>
        </div>
        {jeans.map((jean) => {
          return (
            <div className="grinders">
              <Link to="#">
                <h3>{jean.title}</h3>
                <div className="post-img-box">
                  <img
                    src={
                      jean.postPic ||
                      "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
                    }
                    alt=""
                  />
                </div>
                <p className="grinders-content">{jean.content}</p>
                <p className="grinders-price">{jean.price}</p>
                <div className="remove-btn">
                  {jean.creatorId === newId && (
                    <button onClick={() => deletePost(jean._id)}>Remove</button>
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div ref={sweatpantsRef} className="grinders-section2">
        <div className="titles">
          <h1>Sweatpants</h1>
        </div>
        {sweatpants.map((sweatpant) => {
          return (
            <div className="grinders">
              <Link to="#">
                <h3>{sweatpant.title}</h3>
                <div className="post-img-box">
                  <img
                    src={
                      sweatpant.postPic ||
                      "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
                    }
                    alt=""
                  />
                </div>
                <p className="grinders-content">{sweatpant.content}</p>
                <p className="grinders-price">{sweatpant.price}</p>
                <div className="remove-btn">
                  {sweatpant.creatorId === newId && (
                    <button onClick={() => deletePost(sweatpant._id)}>
                      Remove
                    </button>
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div ref={shortsRef} className="grinders-section">
        <div className="titles">
          <h1>Shorts</h1>
        </div>
        {shorts.map((short) => {
          return (
            <div className="grinders">
              <Link to="#">
                <h3>{short.title}</h3>
                <div className="post-img-box">
                  <img
                    src={
                      short.postPic ||
                      "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
                    }
                    alt=""
                  />
                </div>
                <p className="grinders-content">{short.content}</p>
                <p className="grinders-price">{short.price}</p>
                <div className="remove-btn">
                  {short.creatorId === newId && (
                    <button onClick={() => deletePost(short._id)}>
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

export default Bottoms;

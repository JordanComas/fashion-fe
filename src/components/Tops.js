import React, { useRef } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { get, deleted } from "../services/service";
import axios from "axios";

const Tops = () => {
  const [refresh, setRefresh] = React.useState(false);
  const [shirts, setShirts] = React.useState([]);
  const [longsleeves, setLongsleeves] = React.useState([]);
  const [hoodies, setHoodies] = React.useState([]);

  const newId = localStorage.getItem("id");

  const shirtRef = useRef(null);
  const longsleeveRef = useRef(null);
  const hoodieRef = useRef(null);

  const executeScrollToShirt = () =>
    shirtRef.current.scrollIntoView({
      behavior: "smooth",
    });

  const executeScrollToLongsleeve = () =>
    longsleeveRef.current.scrollIntoView({
      behavior: "smooth",
    });

  const executeScrollToHoodie = () =>
    hoodieRef.current.scrollIntoView({
      behavior: "smooth",
    });

  React.useEffect(() => {
    getShirts();
    getLongsleeves();
    getHoodies();
  }, [refresh]);

  const getShirts = async () => {
    const response = await get("/posts/all-shirts");

    setShirts(response.data);
  };

  const getLongsleeves = async () => {
    const response = await get("/posts/all-longsleeves");

    setLongsleeves(response.data);
  };

  const getHoodies = async () => {
    const response = await get("/posts/all-hoodies");

    setHoodies(response.data);
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
        <Link onClick={executeScrollToShirt} to="#">
          <h4>Shirts</h4>
        </Link>
        <Link onClick={executeScrollToLongsleeve} to="#">
          <h4>Longsleeves</h4>
        </Link>
        <Link onClick={executeScrollToHoodie} to="#">
          <h4>Hoodies</h4>
        </Link>
      </div>

      <div ref={shirtRef} className="grinders-section">
        <div className="titles">
          <h1>Shirts</h1>
        </div>
        {shirts.map((shirt) => {
          return (
            <div className="grinders">
              <Link to="#">
                <h3>{shirt.title}</h3>
                <div className="post-img-box">
                  <img
                    src={
                      shirt.postPic ||
                      "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
                    }
                    alt=""
                  />
                </div>
                <p className="grinders-content">{shirt.content}</p>
                <p className="grinders-price">{shirt.price}</p>
                <div className="remove-btn">
                  {shirt.creatorId === newId && (
                    <button onClick={() => deletePost(shirt._id)}>
                      Remove
                    </button>
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div ref={longsleeveRef} className="grinders-section2">
        <div className="titles">
          <h1>Longsleeves</h1>
        </div>
        {longsleeves.map((longsleeve) => {
          return (
            <div className="grinders">
              <Link to="#">
                <h3>{longsleeve.title}</h3>
                <div className="post-img-box">
                  <img
                    src={
                      longsleeve.postPic ||
                      "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
                    }
                    alt=""
                  />
                </div>
                <p className="grinders-content">{longsleeve.content}</p>
                <p className="grinders-price">{longsleeve.price}</p>
                <div className="remove-btn">
                  {longsleeve.creatorId === newId && (
                    <button onClick={() => deletePost(longsleeve._id)}>
                      Remove
                    </button>
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div ref={hoodieRef} className="grinders-section">
        <div className="titles">
          <h1>Hoodies</h1>
        </div>
        {hoodies.map((hoodie) => {
          return (
            <div className="grinders">
              <Link to="#">
                <h3>{hoodie.title}</h3>
                <div className="post-img-box">
                  <img
                    src={
                      hoodie.postPic ||
                      "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
                    }
                    alt=""
                  />
                </div>
                <p className="grinders-content">{hoodie.content}</p>
                <p className="grinders-price">{hoodie.price}</p>
                <div className="remove-btn">
                  {hoodie.creatorId === newId && (
                    <button onClick={() => deletePost(hoodie._id)}>
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

export default Tops;

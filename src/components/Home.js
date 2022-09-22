import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { get, deleted } from "../services/service";
import Footer from "./Footer";
import banner from "../images/banner4.jpeg";
import ring from "../images/ring.png";
import necklace from "../images/necklace.png";
import bracelet from "../images/bracelet.webp";
import shirt from "../images/shirt.png";
import longsleeve from "../images/longsleeve.webp";
import hoodie from "../images/hoodie.webp";
import shorts from "../images/shorts.webp";
import sweatpants from "../images/sweatpants.webp";
import jeans from "../images/jeans.png";
// import ecig from "../images/ecig.png";

const Home = () => {
  const [top, setTop] = React.useState([]);
  const [refresh, setRefresh] = React.useState(false);

  const newId = localStorage.getItem("id");

  const navigate = useNavigate();

  React.useEffect(() => {
    getTop();
  }, [refresh]);

  const getTop = async () => {
    const response = await get("/posts/all-top");

    setTop(response.data);
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
    <div className="home-page">
      <div className="home-banner">
        <img width="1440" src={banner} alt="" />
        <div className="text-on-banner">
          <h1>Turn your passion into fashion.</h1>
          <Link to="/tops">
            <button>Start Shopping</button>
          </Link>
          <p>Find the best clothing options here!</p>
        </div>
      </div>
      <h2 className="section-names">Categories</h2>
      <div className="home-category">
        <Link to="/tops">
          <div className="allcats">
            <img src={shirt} alt="" />
            <h4>Shirts</h4>
          </div>
        </Link>
        <Link to="/tops">
          <div className="allcats">
            <img src={longsleeve} alt="" />
            <h4>Longsleeve</h4>
          </div>
        </Link>
        <Link to="/tops">
          <div className="allcats">
            <img src={hoodie} alt="" />
            <h4>Hoodies</h4>
          </div>
        </Link>
        <Link to="/bottoms">
          <div className="allcats">
            <img src={shorts} alt="" />
            <h4>Shorts</h4>
          </div>
        </Link>
        <Link to="/bottoms">
          <div className="allcats">
            <img src={sweatpants} alt="" />
            <h4>Sweatpants</h4>
          </div>
        </Link>
        <Link to="/bottoms">
          <div className="allcats">
            <img src={jeans} alt="" />
            <h4>Jeans</h4>
          </div>
        </Link>
        <Link to="/accessories">
          <div className="allcats">
            <img src={bracelet} alt="" />
            <h4>Bracelets</h4>
          </div>
        </Link>
        <Link to="/accessories">
          <div className="allcats">
            <img src={ring} alt="" />
            <h4>Rings</h4>
          </div>
        </Link>
        <Link to="/accessories">
          <div className="allcats">
            <img src={necklace} alt="" />
            <h4>Necklaces</h4>
          </div>
        </Link>
      </div>
      <div className="home-welcome">
        <div className="home-welcome-name">
          <h1>Welcome to Fashion Passion</h1>
          <p>Best place to buy all your clothing essentials.</p>
        </div>
        <div className="promote-sections">
          <div className="allpromote">
            <h3>Make shopping easy</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia!
            </p>
          </div>
          <div className="allpromote">
            <h3>Join our Telegram</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia!
            </p>
          </div>
          <div className="allpromote">
            <h3>A fasion communnity</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia!
            </p>
          </div>
        </div>
      </div>
      <div className="top-strains-title">
        <h2>Top clothing today!</h2>
        <p>We recommmend these!</p>
      </div>
      <div className="top-strains-home">
        {top.map((topthree) => {
          return (
            <div className="home-top-sections">
              <h3>{topthree.title}</h3>
              {/* <div className="post-img-box"> */}
              <img
                src={
                  topthree.postPic ||
                  "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
                }
                alt=""
              />
              {/* </div> */}
              <Link to="#">
                <button className="order-btn">Order now</button>
              </Link>

              <div className="remove-btn">
                {topthree.creatorId === newId && (
                  <button onClick={() => deletePost(topthree._id)}>
                    Remove
                  </button>
                )}
              </div>
            </div>
          );
        })}

        {/* <div className="home-top-sections">
          <img src={mac} alt="" />
          <h4>Pineapple MAC</h4>
          <button>Order now</button>
        </div>
        <div className="home-top-sections">
          <img src={mac} alt="" />
          <h4>Pineapple MAC</h4>
          <button>Order now</button>
        </div>
        <div className="home-top-sections">
          <img src={mac} alt="" />
          <h4>Pineapple MAC</h4>
          <button>Order now</button>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Post from "./Post";

const AdminControls = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    window.location.reload(false);
    navigate("/");
  };

  return token ? (
    <div className="controls">
      <h4>Admin</h4>
      <Link to="/adminpost">Make a post</Link>
      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </div>
  ) : null;
};

export default AdminControls;

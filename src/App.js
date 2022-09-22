import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useRoutes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Accessories from "./components/Accessories";
import Tops from "./components/Tops";
import Bottoms from "./components/Bottoms";
import Login from "./components/Login";
import Post from "./components/Post";
import AdminControls from "./components/AdminControls";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/",
      element: <Accessories />,
      children: [
        { path: "accessories", element: <Accessories /> },
        { path: "rings", element: <Accessories /> },
        { path: "bracelets", element: <Accessories /> },
        { path: "necklaces", element: <Accessories /> },
      ],
    },
    {
      path: "/",
      element: <Tops />,
      children: [
        { path: "tops", element: <Tops /> },
        { path: "shirts", element: <Tops /> },
        { path: "longsleeves", element: <Tops /> },
        { path: "hoodies", element: <Tops /> },
      ],
    },
    {
      path: "/",
      element: <Bottoms />,
      children: [
        { path: "bottoms", element: <Bottoms /> },
        { path: "shorts", element: <Bottoms /> },
        { path: "jeans", element: <Bottoms /> },
        { path: "sweatpants", element: <Bottoms /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <Navbar />
      <AdminControls />
      {element}
      <Routes>
        <Route path="/adminlogin" element={<Login />} />
        <Route path="/adminpost" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;

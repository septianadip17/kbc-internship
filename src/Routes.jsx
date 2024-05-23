// src/routes.js
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Event from "./pages/Event";
import Article from "./pages/Article";
import Article1 from "./pages/articles/Article1";
import Article2 from "./pages/articles/Article2";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import NotFound from "./pages/NotFound";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/contact", element: <Contact /> },
  { path: "/events", element: <Event /> },
  {
    path: "/articles",
    element: <Article />,
    children: [
      { path: "article1", element: <Article1 /> },
      { path: "article2", element: <Article2 /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/recovery", element: <ForgotPassword /> },
  { path: "/*", element: <NotFound /> },
];

export default routes;

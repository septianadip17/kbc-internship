import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Event from "./pages/Event";
import Article from "./pages/Article";
import Profile from "./pages/Profile";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import NotFound from "./pages/NotFound";
import CustomArticle from "./pages/articles/CustomArticle";
import MoreArticle from "./pages/articles/MoreArticle";
import ListArticle from "./pages/articles/ListArticle";
import CobaRegist from "./components/CobaRegist";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/contact", element: <Contact /> },
  { path: "/events", element: <Event /> },
  { path: "/articles", element: <Article /> },
  { path: "/profile", element: <Profile /> },
  { path: "/articles/:id", element: <CustomArticle /> },
  { path: "/articles/list", element: <ListArticle /> },
  { path: "/articles/list/:idList", element: <MoreArticle /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/recovery", element: <ForgotPassword /> },
  { path: "/*", element: <NotFound /> },
  { path: "/coba-regist", element: <CobaRegist /> },
];

export default routes;

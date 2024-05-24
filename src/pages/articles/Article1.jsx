import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Article1 = () => {
  return (
    <>
      <Navbar />
      <div className="space-y-8 p-4">
        <div className="container flex flex-row space-x-3">
          <Link to="/articles">
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded">Back</button>
          </Link>
          <h1 className="text-3xl font-bold text-center">Article 1</h1>
        </div>
        <div className="space-y-4">
          <img
            src="https://placehold.co/600x400"
            alt="Placeholder Image"
            className="w-full h-auto bg-zinc-300"
          />
          <p className="text-zinc-700 dark:text-zinc-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pundefinedtur. Excepteur sint occaecat cupiundefinedt non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="space-y-4">
          <img
            src="https://placehold.co/600x400"
            alt="Placeholder Image"
            className="w-full h-auto bg-zinc-300"
          />
          <p className="text-zinc-700 dark:text-zinc-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pundefinedtur. Excepteur sint occaecat cupiundefinedt non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Article1;

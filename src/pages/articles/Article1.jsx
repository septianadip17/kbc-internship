import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Article1 = () => {
  return (
    <>
    <Navbar/>
    <div className="space-y-8 p-4">
      <h1 className="text-3xl font-bold text-center">Article 1</h1>
      <div className="space-y-4">
        <img
          src="https://placehold.co/600x400"
          alt="Placeholder Image"
          className="w-full h-auto bg-zinc-300"
        />
        <p className="text-zinc-700 dark:text-zinc-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pundefinedtur. Excepteur sint occaecat cupiundefinedt non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Article1;

import { NavLink, Link } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", link: "/", current: false },
  { name: "About Us", link: "/about-us", current: false },
  { name: "Event", link: "/events", current: false },
  { name: "Gallery", link: "/gallery", current: false },
  { name: "Article", link: "/articles", current: false },
  { name: "Contact", link: "/contact", current: false },
  // { name: "Profile", link: "/profile", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isTop = scrollTop < 100;
      setIsScrolled(!isTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleItemClick = (name) => {
    navigation.forEach((item) => {
      item.current = item.name === name;
    });
  };

  return (
    <Disclosure
      as="nav"
      className={`w-full z-50 sticky top-0 ${
        isScrolled ? "bg-gray-100 bg-opacity-75" : "bg-gray-100"
      }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-2 md:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Hamburger */}
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              {/* Logo for Mobile */}
              <div className="flex items-center justify-center flex-shrink-0 md:hidden w-full">
                <Link to="/">
                  <img
                    className="h-10 w-auto justify-center"
                    src="https://kbc.or.id/img/general/KBC-Logo_1594107681.png"
                    alt="KBC Logo"
                  />
                </Link>
              </div>
              {/* Logo for Web */}
              <div className=" items-center justify-center flex-shrink-0 hidden md:block">
                <Link to="/">
                  <img
                    className="h-10 w-auto justify-center"
                    src="https://kbc.or.id/img/general/KBC-Logo_1594107681.png"
                    alt="KBC Logo"
                  />
                </Link>
              </div>
              <div className="hidden md:block md:ml-auto">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.link}
                      onClick={() => handleItemClick(item.name)}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-900 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                  <Link to="/login">
                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                      Login
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Navbar Mobile Panel */}
          <DisclosurePanel className="md:hidden">
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-1 text-center px-2 pb-3 pt-2"
                >
                  {navigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as={NavLink}
                      to={item.link}
                      onClick={() => handleItemClick(item.name)}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-500 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium transition-colors duration-200"
                      )}
                    >
                      {" "}
                      {item.name}
                    </DisclosureButton>
                  ))}
                  <Link to="/login">
                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-2">
                      Login
                    </button>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;

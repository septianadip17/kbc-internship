import { NavLink, Link } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const navigation = [
  { name: "Home", link: "/", current: false },
  { name: "About Us", link: "/about-us", current: false },
  { name: "Event", link: "/events", current: false },
  { name: "Gallery", link: "/gallery", current: false },
  { name: "Article", link: "/articles", current: false },
  { name: "Contact", link: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  // eslint-disable-next-line no-unused-vars
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (name) => {
    setActiveItem(name);
    navigation.forEach((item) => {
      item.current = item.name === name;
    });
  };

  return (
    <Disclosure as="nav" className="bg-gray-100 w-full z-10">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 md:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* humburger */}
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
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="h-10 w-auto justify-center"
                      src="https://kbc.or.id/img/general/KBC-Logo_1594107681.png"
                      alt="KBC Logo"
                    />
                  </Link>
                </div>
                {/* Navbar Web */}
                <div className="hidden md:ml-auto md:block">
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
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0"></div>
            </div>
          </div>
          {/* Navbar Mobile Panel */}
          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 text-center px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as={NavLink}
                  to={item.link}
                  onClick={() => handleItemClick(item.name)}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium transition-colors duration-200"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
              <Link to="/login">
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                  Login
                </button>
              </Link>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;

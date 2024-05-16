import { Link, NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About Us", href: "/about-us", current: false },
  { name: "Event", href: "/events", current: false },
  { name: "Gallery", href: "/gallery", current: false },
  { name: "Artice", href: "/articles", current: false },
  { name: "Contact", href: "/contact", current: false },
];

const NavCustom = () => {
  return (
    <nav>
      <Link to="/">
        <img
          className="text-6xl h-8 w-auto"
          src="https://kbc.or.id/img/general/KBC-Logo_1594107681.png"
          alt="Your Company"
        />
      </Link>
      <div>
        {navigation.map((item) => (
          <NavLink key={item.name} className="nav-link" to={item.href}>
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default NavCustom;

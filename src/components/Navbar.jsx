import { NavLink } from "react-router-dom";
import Logo from "../assets/nazarov_logo.png";
import { useState } from "react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import useAos from "../hooks/Aos";
import CustomSelect from "./CustomSelect";

const navLinks = [
  { path: "/", label: "About" },
  { path: "/resume", label: "Resume" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  useAos();

  return (
    <div className="md:bg-transparent bg-gray-800 rounded-2xl">
      {/* Desktop Navbar */}
      <nav className="hidden md:block">
        <ul className="flex gap-10 items-center justify-end text-white text-2xl font-semibold">
          {navLinks.map(({ path, label }, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                `group relative cursor-pointer ${
                  isActive ? "text-yellow-500" : "text-white"
                }`
              }
              data-aos="zoom-out-down"
            >
              <li className="relative">
                <span>{label}</span>
                <span className="absolute left-0 right-0 bottom-0 block h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </li>
            </NavLink>
          ))}
          {/* <CustomSelect /> */}
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <div className="flex justify-between items-center text-xl md:hidden px-5">
        <NavLink to="/">
          <img src={Logo} alt="Logo" className="w-20 rounded-xl p-1" />
        </NavLink>
        <button onClick={() => setOpen(!open)}>
          {open ? (
            <HiMenuAlt3 className="text-yellow-500 w-10 h-10" />
          ) : (
            <HiMenuAlt1 className="text-yellow-500 w-10 h-10" />
          )}
        </button>
      </div>
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;

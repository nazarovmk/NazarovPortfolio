import { NavLink } from "react-router-dom";
import Logo from "../assets/nazarov_logo.png";
import { useState } from "react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import useAos from "../hooks/Aos";

const navLinks = [
  { path: "/", label: "About" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  useAos();

  const handleOpen = () => {
    window.open("/MuhammadnazarNazarovResume.pdf", "_blank");
  };

  return (
    <div className="md:bg-transparent bg-gray-800 rounded-2xl">
      {/* Desktop Navbar */}
      <nav className="hidden md:block">
        <ul className="flex gap-[2.5rem] items-center justify-end text-white text-[1.5rem] font-semibold">
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

          <li>
            <button
              onClick={handleOpen}
              className="w-full bg-teal-600 text-white px-4 py-2 rounded cursor-pointer"
            >
              Rezume PDF ni ochish
            </button>
          </li>
        </ul>
      </nav>

      <div className="flex justify-between items-center text-[1.25rem] md:hidden px-[1.25rem]">
        <NavLink to="/">
          <img
            src={Logo}
            alt="Logo"
            className="w-[5rem] rounded-xl p-[0.25rem]"
          />
        </NavLink>
        <button onClick={() => setOpen(!open)}>
          {open ? (
            <HiMenuAlt3 className="text-yellow-500 w-[2.5rem] h-[2.5rem]" />
          ) : (
            <HiMenuAlt1 className="text-yellow-500 w-[2.5rem] h-[2.5rem]" />
          )}
        </button>
      </div>
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;

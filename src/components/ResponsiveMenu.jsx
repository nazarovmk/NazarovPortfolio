import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkedAlt,
  FaRegCalendarAlt,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { NavLink } from "react-router-dom";
import avatar from "../assets/nazosh.png";

const navLinks = [
  { to: "/", label: "About" },
  { to: "/resume", label: "Resume" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

const contactInfo = [
  {
    icon: <FaRegEnvelope />,
    title: "EMAIL",
    value: "nazarovvweb@gmail.com",
    link: "mailto:nazarovvweb@gmail.com",
  },
  {
    icon: <MdOutlinePhoneIphone />,
    title: "PHONE",
    value: "+998 90-777-28-23",
    link: "tel:+998907772823",
  },
  {
    icon: <FaLinkedin />,
    title: "Linkedin",
    value: "Muhammadnazar Nazarov",
    link: "https://www.linkedin.com/in/muhammadnazarnazarov",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    value: "nazarovmk",
    link: "https://github.com/nazarovmk",
  },
  {
    icon: <FaRegCalendarAlt />,
    title: "Telegram",
    value: "nazarov_mk",
    link: "https://t.me/nazarov_mk",
  },
  { icon: <FaRegCalendarAlt />, title: "BIRTHDAY", value: "31 August, 2008" },
  { icon: <FaMapMarkedAlt />, title: "LOCATION", value: "Uzbekistan, Fergana" },
];

const ResponsiveMenu = ({ open, setOpen }) => {
  useEffect(() => {
    const savedMenuState = localStorage.getItem("menuOpen") === "true";
    if (savedMenuState !== open) setOpen(savedMenuState);
  }, [setOpen]);

  useEffect(() => {
    localStorage.setItem("menuOpen", open);
  }, [open]);

  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-out",
      once: false,
      delay: 0,
      offset: 150,
    });
  }, []);

  return (
    <div
      className={`fixed bottom-0 top-0 z-20 flex h-screen w-[80%] flex-col justify-between bg-gray-950 px-2 pb-4 pt-4 text-black md:hidden rounded-r-xl shadow-md transition-all ${
        open ? "left-0" : "left-[100%]"
      }`}
    >
      <div className="bg-gray-600 rounded-md p-2 overflow-auto custom-scrollbar">
        <div
          className="rounded-xl p-3 flex items-center justify-center"
          data-aos="flip-down"
        >
          <img
            src={avatar}
            alt="Avatar"
            className="w-[200px] h-[200px] object-cover bg-gray-700 rounded-2xl"
          />
        </div>
        <h1 className="text-white font-bold text-center text-3xl my-2">
          Muhammadnazar Nazarov
        </h1>
        <p className="text-white bg-gray-700 rounded-md py-2 text-center mx-4 mb-7">
          Frontend Developer
        </p>
        <hr className="text-gray-700 mx-4 border-2" />

        <nav className="mt-5">
          <ul
            className="flex flex-wrap text-center gap-2 items-center justify-center text-white text-xl font-semibold"
            data-aos="fade-up"
          >
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `group relative cursor-pointer ${
                    isActive ? "text-yellow-500" : "text-white"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                <li className="relative">
                  <span>{label}</span>
                  <span className="absolute left-0 right-0 bottom-0 block h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </li>
              </NavLink>
            ))}
          </ul>
        </nav>

        <div className="mt-7 px-4 space-y-7">
          {contactInfo.map(({ icon, title, value, link }, index) => (
            <div key={index} className="flex gap-3 items-center">
              <div className="bg-gray-700 p-2 rounded-md shadow text-yellow-500 text-2xl">
                {icon}
              </div>
              <div className="text-white">
                <h1 className="font-semibold">{title}</h1>
                {link && (title === "EMAIL" || title === "PHONE") ? (
                  <a
                    href={link}
                    className="text-gray-200 hover:text-yellow-400 transition"
                  >
                    {value}
                  </a>
                ) : link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-yellow-400 transition"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-gray-200">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;

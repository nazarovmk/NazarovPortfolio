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

  const handleOpen = () => {
    window.open("/MuhammadnazarNazarovResume.pdf", "_blank");
  };

  return (
    <div
      className={`fixed bottom-0 top-0 z-20 flex h-screen w-[80%] flex-col justify-between bg-gray-950 px-[0.5rem] pb-[1rem] pt-[1rem] text-black md:hidden rounded-r-xl shadow-md transition-all ${
        open ? "left-0" : "left-[100%]"
      }`}
    >
      <div className="bg-gray-600 rounded-md p-[0.5rem] overflow-auto custom-scrollbar">
        <div
          className="rounded-xl p-[0.75rem] flex items-center justify-center"
          data-aos="flip-down"
        >
          <img
            src={avatar}
            alt="Avatar"
            className="w-[12.5rem] h-[12.5rem] object-cover bg-gray-700 rounded-2xl"
          />
        </div>
        <h1 className="text-white font-bold text-center text-[1.875rem] my-[0.5rem]">
          Muhammadnazar Nazarov
        </h1>
        <p className="text-white bg-gray-700 rounded-md py-[0.5rem] text-center mx-[1rem] mb-[1.75rem]">
          Frontend Developer
        </p>
        <hr className="text-gray-700 mx-[1rem] border-[2px]" />

        <nav className="mt-[1.25rem]">
          <ul
            className="flex flex-wrap text-center gap-[0.5rem] items-center justify-center text-white text-[1.25rem] font-semibold"
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

        <div className="mt-[1.75rem] px-[1rem] space-y-[1.75rem]">
          {contactInfo.map(({ icon, title, value, link }, index) => (
            <div key={index} className="flex gap-[0.75rem] items-center">
              <div className="bg-gray-700 p-[0.5rem] rounded-md shadow text-yellow-500 text-[1.5rem]">
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

import Navbar from "./Navbar";
import avatar from "../assets/nazosh.png";
import { service } from "./data";
import { GiCheckMark } from "react-icons/gi";
import useAos from "../hooks/Aos";

const About = () => {
  useAos();

  return (
    <div className="md:rounded-xl bg-gray-600 md:m-7 flex-1 p-5">
      <Navbar />

      <div className="mt-7">
        <div data-aos="fade-up" data-aos-duration="500">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            About Me
          </h2>
          <hr className="border-3 text-yellow-500 w-12 rounded-4xl" />
        </div>
      </div>

      <div className="mt-5 md:hidden" data-aos="zoom-in">
        <img
          src={avatar}
          alt="Avatar"
          className="bg-gray-700 rounded-2xl w-full h-auto max-h-[400px] object-cover"
          // Changed to h-auto with max-height constraint
        />
      </div>

      <div className="space-y-4 mt-4">
        {/* Wrapped text sections in a container with controlled spacing */}
        <p
          className="text-gray-300 text-xl font-semibold break-words"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          Hello! I'm Muhammadnazar Nazarov, a young and ambitious Frontend
          Developer constantly striving for self-improvement. Despite being only
          17 years old, I have over 8 months of experience in web development
          and enjoy creating functional, interactive, and visually appealing web
          applications using modern technologies.
        </p>

        <div
          className="text-gray-300 text-xl font-semibold space-y-3 break-words"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          {[
            "Fast and High-Quality Work – I understand client needs and aim to create a flawless product.",
            "Responsible and a Team Player – I enjoy participating in new projects and solving challenges.",
          ].map((text, index) => (
            <span key={index} className="flex items-center gap-2">
              <GiCheckMark className="text-green-600" />
              {text}
            </span>
          ))}
          <span className="block mt-4">
            Currently, I'm looking for a Frontend Developer position to gain
            real-world experience and contribute my skills to impactful
            projects. If you need a creative, energetic, and responsible
            developer, I'm ready to help!
          </span>
        </div>
      </div>

      <h2 className="text-2xl text-white font-bold mt-7" data-aos="fade-right">
        My Skills
      </h2>

      <div
        className="grid md:grid-cols-2 gap-6 mt-7 pb-10"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        {service.map((item, index) => (
          <div
            className="bg-gray-700 border shadow p-5 text-white flex gap-5 items-start rounded-xl"
            key={index}
            data-aos="flip-left"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <div className="text-6xl text-yellow-500 min-w-[60px]">
              {/* Added min-width to prevent icon shrinking */}
              {item.logo}
            </div>
            <div>
              <h2 className="font-bold text-2xl">{item.title}</h2>
              <p className="text-xl text-gray-300 break-words">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

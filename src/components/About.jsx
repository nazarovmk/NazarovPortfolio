import Navbar from "./Navbar";
import avatar from "../assets/nazosh.png";
import { service } from "./data";
import { GiCheckMark } from "react-icons/gi";
import useAos from "../hooks/Aos";

const About = () => {
  useAos();

  return (
    <div className="md:rounded-xl bg-gray-600 md:m-[1.75rem] flex-1 p-[1.25rem]">
      <Navbar />

      <div className="mt-[1.75rem]">
        <div data-aos="fade-up" data-aos-duration="500">
          <h2 className="text-white text-[2rem] sm:text-[2.25rem] md:text-[2.5rem] font-bold mb-[0.5rem]">
            About Me
          </h2>
          <hr className="border-[0.1875rem] text-yellow-500 w-[3rem] rounded-[2rem]" />
        </div>
      </div>

      <div className="mt-[1.25rem] md:hidden" data-aos="zoom-in">
        <img
          src={avatar}
          alt="Avatar"
          className="bg-gray-700 rounded-[1rem] w-full h-auto max-h-[25rem] object-cover"
        />
      </div>

      <div className="space-y-[1rem] mt-[1rem]">
        <p
          className="text-gray-300 text-[1.25rem] font-semibold break-words"
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
          className="text-gray-300 text-[1.25rem] font-semibold space-y-[0.75rem] break-words"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          {[
            "Fast and High-Quality Work – I understand client needs and aim to create a flawless product.",
            "Responsible and a Team Player – I enjoy participating in new projects and solving challenges.",
          ].map((text, index) => (
            <span key={index} className="flex items-center gap-[0.5rem]">
              <GiCheckMark className="text-green-600" />
              {text}
            </span>
          ))}
          <span className="block mt-[1rem]">
            Currently, I'm looking for a Frontend Developer position to gain
            real-world experience and contribute my skills to impactful
            projects. If you need a creative, energetic, and responsible
            developer, I'm ready to help!
          </span>
        </div>
      </div>

      <h2
        className="text-[1.5rem] text-white font-bold mt-[1.75rem]"
        data-aos="fade-right"
      >
        My Skills
      </h2>

      <div
        className="grid md:grid-cols-2 gap-[1.5rem] mt-[1.75rem] pb-[2.5rem]"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        {service.map((item, index) => (
          <div
            className="bg-gray-700 border shadow p-[1.25rem] text-white flex gap-[1.25rem] items-start rounded-xl"
            key={index}
            data-aos="flip-left"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <div className="text-[3.75rem] text-yellow-500 min-w-[3.75rem]">
              {item.logo}
            </div>
            <div>
              <h2 className="font-bold text-[1.25rem]">{item.title}</h2>
              <p className="text-[1.125rem] text-gray-300 break-words">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

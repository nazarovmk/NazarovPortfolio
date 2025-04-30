import { useState } from "react";
import Navbar from "./Navbar";
import { projects } from "./data";
import { FaGithub } from "react-icons/fa";
import useAos from "../hooks/Aos";
import { Link } from "react-router-dom";

const Portfolio = () => {
  useAos();
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.techStack.includes(filter));

  return (
    <div className="md:rounded-[1rem] bg-gray-600 md:m-[1.75rem] flex-1 p-[1.25rem]">
      <Navbar />

      <div className="mt-[1.75rem]">
        <div data-aos="fade-up" className="mb-[1.25rem]">
          <h2 className="text-white text-[1.5rem] sm:text-[1.875rem] md:text-[2.25rem] font-bold mb-[0.5rem]">
            Portfolio
          </h2>
          <hr className="border-[0.1875rem] border-yellow-500 w-[3rem] rounded-[2rem]" />
        </div>

        <div>
          <select
            name="type"
            id="type"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full px-[0.75rem] py-[0.5rem] pr-[3rem] border-[0.125rem] border-gray-300 text-white rounded-[0.5rem] focus:outline-none focus:ring-[0.25rem] focus:ring-blue-400 bg-gray-700 font-public-sans font-normal text-[0.875rem] leading-[1.5] appearance-none bg-[url('./assets/icon-caret-down.svg')] bg-no-repeat bg-[right_1rem_center] cursor-pointer"
          >
            <option value="All">All</option>
            <option value="CSS">CSS</option>
            <option value="HTML">HTML</option>
            <option value="Responsive Design">Responsive Design</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1.5rem] mt-[1.75rem]">
          {filteredProjects.map(
            ({ title, id, image, description, techStack, link, github }) => (
              <div
                key={id || title}
                className="bg-gray-800 rounded-[1rem] shadow-lg overflow-hidden transform transition-transform hover:scale-[1.05]"
                data-aos="flip-left"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-[12rem] object-cover rounded-t-[1rem]"
                />
                <div className="p-[1.25rem]">
                  <h3 className="text-[1.25rem] font-bold text-white mb-[0.5rem]">
                    {title}
                  </h3>
                  <p className="text-gray-300 mb-[0.75rem]">{description}</p>
                  <div className="flex flex-wrap gap-[0.5rem] mb-[0.75rem]">
                    {techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-900 text-gray-300 text-[0.875rem] px-[0.75rem] py-[0.25rem] rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-[0.75rem]">
                    <Link
                      to={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      View Project
                    </Link>
                    <Link
                      to={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-[0.25rem]"
                    >
                      <FaGithub /> Github
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

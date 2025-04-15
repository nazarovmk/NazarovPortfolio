import { useState } from "react";
import Navbar from "./Navbar";
import { projects } from "./data";
import { FaGithub } from "react-icons/fa";
import useAos from "../hooks/Aos";
import { Link } from "react-router-dom";

const Portfolio = () => {
  useAos();
  const [filter, setFilter] = useState("All");

  // Filtrlash logikasi
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.techStack.includes(filter));

  return (
    <div className="md:rounded-xl bg-gray-600 md:m-7 flex-1 p-5">
      <Navbar />

      <div className="mt-7">
        <div data-aos="fade-up" className="mb-5">
          <h2 className="text-white font-bold text-2xl mb-2">Portfolio</h2>
          <hr className="border-3 border-yellow-500 w-12 rounded-4xl" />
        </div>

        <div>
          <select
            name="type"
            id="type"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full px-3 py-2 border-2 border-gray-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-700"
          >
            <option value="All">All</option>
            <option value="CSS">CSS</option>
            <option value="HTML">HTML</option>
            <option value="Responsive Design">Responsive Design</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-7">
          {filteredProjects.map(
            ({ title, id, image, description, techStack, link, github }) => (
              <div
                key={id || title}
                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105"
                data-aos="flip-left"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-5">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-300 mb-3">{description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-900 text-gray-300 text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
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
                      className="btn-secondary flex items-center gap-1"
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

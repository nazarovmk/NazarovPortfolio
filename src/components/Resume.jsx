import Navbar from "./Navbar";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const Resume = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out", once: true });
  }, []);

  const skills = [
    "React Js",
    "Next Js",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "HTML5 & CSS3",
    "Git & GitHub",
    "Responsive Design",
    "Redux Toolkit",
    "Rest API",
    "Postman",
    "DaisyUI",
    "MUI",
  ];

  const languages = [
    { name: "English", level: "A1" },
    { name: "Russian", level: "B2" },
    { name: "Uzbek", level: "Native Speaker (NS)" },
  ];

  const workExperience = [
    {
      title: "Junior Frontend Developer",
      period: "September 2024 - Present",
      responsibilities: [
        "Developed complex web applications using React.",
        "Independently enhancing my frontend development skills and knowledge.",
        "Gained hands-on experience converting Figma designs into functional code.",
        "Created various independent projects to build a strong portfolio.",
        "Continuously learning and staying updated with the latest technologies.",
      ],
    },
  ];

  return (
    <div className="rounded-none md:rounded-xl sm:rounded-xl bg-gray-600 sm:m-[1.75rem] md:m-[1.75rem] flex-1 p-[1.25rem]">
      <Navbar />
      <div className="mt-[1.5rem] md:mt-[2rem] text-white flex-1">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-white text-[1.5rem] sm:text-[1.875rem] md:text-[2.25rem] font-bold mb-[0.5rem]">
            Resume
          </h2>
          <hr className="border-[0.125rem] sm:border-[0.25rem] border-yellow-500 w-[2.5rem] sm:w-[3rem] md:w-[4rem] rounded-full mb-[1.5rem] md:mb-[2rem]" />
        </div>

        <div className="min-h-[calc(100vh-12rem)] w-full rounded-[1rem] bg-white shadow-xl overflow-hidden flex flex-col">
          {/* Header */}
          <div
            className="bg-gradient-to-r from-teal-500 to-cyan-600 p-[2rem] text-white relative"
            data-aos="flip-down"
            data-aos-duration="1200"
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
            <div className="relative z-10 text-center">
              <h1 className="text-[2.5rem] md:text-[3.125rem] font-extrabold drop-shadow-md">
                Muhammadnazar Nazarov
              </h1>
              <p
                className="text-[1.125rem] mt-[0.5rem] font-light tracking-wider"
                data-aos="zoom-in"
              >
                Frontend Developer
              </p>
              <div
                className="mt-[1rem] flex flex-wrap justify-center gap-[1rem] text-[0.875rem]"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <a
                  href="mailto:nazarovvweb@gmail.com"
                  className="hover:text-teal-200 transition-colors"
                >
                  nazarovvweb@gmail.com
                </a>
                <a
                  href="tel:+998907772823"
                  className="hover:text-teal-200 transition-colors"
                >
                  +998 90 777 28 23
                </a>
                <a
                  href="https://github.com/nazarovmk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-200 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-[1.5rem] md:p-[2.5rem] grid grid-cols-1 md:grid-cols-3 gap-[1.5rem] flex-1 overflow-y-auto">
            {/* Left Column - Skills & Education */}
            <div className="space-y-[2rem] md:col-span-1">
              <Section
                title="Skills"
                data={skills}
                type="list"
                aosEffect="fade-right"
              />
              <Section title="Education" aosEffect="fade-right">
                <h3 className="font-medium">Najot Ta'lim Graduate</h3>
                <p>2024 - 2025</p>
              </Section>
              <Section title="Languages" aosEffect="fade-right">
                {languages.map((lang, index) => (
                  <p key={index} className="text-gray-700">
                    <span className="font-medium text-gray-800">
                      {lang.name}:
                    </span>
                    {lang.level}
                  </p>
                ))}
              </Section>
            </div>

            {/* Right Column - Summary & Experience */}
            <div className="md:col-span-2 space-y-[2rem]">
              <Section title="Summary" aosEffect="fade-left">
                <p className="text-gray-600 leading-relaxed">
                  I am a 17-year-old talented and dedicated Frontend Developer
                  with 8 months of intensive experience. I have mastered modern
                  technologies and excel at blending design with
                  functionality—transforming Figma prototypes into high-quality
                  code. My strengths include quick learning, creative
                  problem-solving, and effective teamwork. I am always eager to
                  adopt the latest technologies and deliver innovative solutions
                  tailored to client needs.
                </p>
              </Section>

              <Section title="Work Experience" aosEffect="fade-left">
                {workExperience.map((job, index) => (
                  <div key={index} data-aos="fade-left" data-aos-delay="300">
                    <h3 className="text-[1.125rem] font-medium text-gray-700">
                      {job.title}
                    </h3>
                    <p className="text-[0.875rem] text-gray-500">
                      {job.period}
                    </p>
                    <ul className="mt-[0.5rem] text-gray-600 text-[0.875rem] list-disc list-inside">
                      {job.responsibilities.map((task, idx) => (
                        <li
                          key={idx}
                          data-aos="fade-left"
                          data-aos-delay={idx * 100}
                        >
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children, data, type, aosEffect }) => (
  <div data-aos={aosEffect} data-aos-duration="900">
    <h2 className="text-[1.25rem] font-semibold text-gray-800 border-b-[0.125rem] border-teal-500 pb-[0.25rem]">
      {title}
    </h2>
    <div className="mt-[0.75rem] text-gray-600 text-[0.875rem]">
      {type === "list" ? (
        <ul className="space-y-[0.5rem]">
          {data.map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="w-[0.5rem] h-[0.5rem] bg-teal-500 rounded-full mr-[0.5rem]"></span>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        children
      )}
    </div>
  </div>
);

export default Resume;

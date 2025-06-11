import React from "react";
import {
  FaEnvelope,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter"; // ✅ Import

const Home = () => {
  return (
    <section
      id="home"
      className="bg-[#1f1f1f] min-h-screen flex items-center justify-center px-6"
    >
      <div className="flex flex-col-reverse md:flex-row items-center max-w-6xl w-full">
        {/* Text Content */}
        <div className="text-white flex-1 space-y-4">
          <h2 className="text-lg font-medium">Hello, It's Me</h2>
          <h1 className="text-4xl md:text-5xl font-bold">Goutam Jha</h1>
          <h3 className="text-xl md:text-2xl font-semibold">
            And I'm a{" "}
            <span className="text-cyan-400">
              <Typewriter
                words={[ "Full Stack Developer","MERN Stack Developer","Frontend Developer"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </h3>
          <p className="text-gray-300 max-w-md">
          I’m a passionate web developer with a strong foundation in frontend technologies and growing expertise in full stack development. 
          I love building responsive, user-friendly web applications.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="mailto:jhagoutam804@gmail.com?subject=Let's%20Connect&body=Hi%20Goutam!"
              className="text-cyan-400 border border-cyan-400 p-2 rounded-full hover:bg-cyan-400 hover:text-black transition"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/7Goutam"
              className="text-cyan-400 border border-cyan-400 p-2 rounded-full hover:bg-cyan-400 hover:text-black transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/goutam-kumar-jha-59b628282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="text-cyan-400 border border-cyan-400 p-2 rounded-full hover:bg-cyan-400 hover:text-black transition"
            >
              <FaLinkedinIn />
            </a>
          </div>

          {/* Download Button */}
          <a
            href="./public/images/RESUME.pdf"
            download
            className="inline-block px-6 py-3 bg-cyan-400 text-white font-semibold rounded-xl hover:bg-cyan-600 transition"
          >
            Download CV
          </a>
        </div>

        {/* Image Section */}
        <div className="relative mt-10 md:mt-0 md:ml-10">
          <div className="w-220 h-220 rounded-xs blur-xl absolute -z-10"></div>
          <img
            src="./public/images/Hero.jpg"
            alt="Goutam Jha"
            className="w-100 h-80 object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;

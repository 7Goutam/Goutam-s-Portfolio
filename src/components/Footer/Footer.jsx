import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#151515] text-white py-6 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left - Name or Brand */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h4 className="text-lg font-semibold">© 2025 Goutam Jha</h4>
          <p className="text-sm text-gray-200">All rights reserved.</p>
          <h4 className="mt-2">jhagoutam804@gmail.com</h4>

        </div>

        {/* Right - Social Links */}
        <div className="flex gap-6 text-2xl">
          <a href="mailto:jhagoutam804@gmail.com" className="hover:text-cyan-400">
            <FaEnvelope />
          </a>
          <a href="https://github.com/7Goutam" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/goutam-kumar-jha-59b628282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/goutamjha07?igsh=MWlvazFwbzI3NGVlNg==&utm_source=ig_contact_invite" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
            <FaInstagram />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { FaArrowLeft, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';


const Footer = () => {

    return (
        <div className='w-full'>
            <footer className="footer footer-horizontal footer-center  rounded p-10 ">
  <nav className="grid grid-flow-col gap-4">
    Connect with me
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <div className="flex justify-center items-center space-x-5 md:space-x-18"> {/* 3x gap */}
              {/* GitHub */}
              <a
                href="https://github.com/arafat-mr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  relative inline-flex items-center justify-center w-10 h-10 rounded-full
                  bg-gradient-to-r from-gray-700 via-gray-900 to-black
                  text-white
                  shadow-[0_0_25px_8px_rgba(100,100,100,0.8)]
                  hover:shadow-[0_0_35px_14px_rgba(100,100,100,1)]
                  transition-shadow duration-500
                "
              >
                <FaGithub size={22} />
              </a>
      
              {/* Facebook */}
              <a
                href="https://facebook.com/arafat-mr42"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="
                  relative inline-flex items-center justify-center w-10 h-10 rounded-full
                  bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800
                  text-white
                  shadow-[0_0_25px_8px_rgba(59,89,152,0.8)]
                  hover:shadow-[0_0_35px_14px_rgba(59,89,152,1)]
                  transition-shadow duration-500
                "
              >
                <FaFacebookF size={22} />
              </a>
      
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/arafat-mr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  relative inline-flex items-center justify-center w-10 h-10 rounded-full
                  bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700
                  text-white
                  shadow-[0_0_25px_8px_rgba(79,70,229,0.8)]
                  hover:shadow-[0_0_35px_14px_rgba(79,70,229,1)]
                  transition-shadow duration-500
                "
              >
                <FaLinkedinIn size={22} />
              </a>
      
             
            </div>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Yeasin Arafat</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;
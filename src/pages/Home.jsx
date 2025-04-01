import React from 'react'; 
import ProfileImg from "../assets/Profile.png";
import ResumePDF from "../assets/Long_RESUME2025.pdf";

function Home() {
  return (
    <div className="bg-stone-800 min-h-screen flex flex-col-reverse sm:flex-row items-center justify-center p-4 sm:p-8">
      {/* Content Section */}
      <div className="content ">
        <h1 className="text-4xl sm:text-6xl text-center text-gray-400 font-serif">
          Hey I'm <span>Long</span>
        </h1>
        <h2 className="changing-text text-3xl sm:text-5xl text-gray-400 mt-4">
          I'm a <span></span>
        </h2>
        <div>
        <p className="text-container mt-4 text-center text-gray-400 font-mono font-bold">Based in Houston, TX, passionate about tackling challenges, staying active, and always open for growth. 
        Constantly looking for new opportunities to work on exciting projects and expand my skills.</p>
        </div>
        <div className="social-link mt-6 justify-center flex">
          <a 
            href="https://www.linkedin.com/in/long-tran-205222179/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 text-3xl  transition-colors duration-300"
          ><i className="fa-brands fa-linkedin"></i>
          </a>
          <a 
            href="https://github.com/LongTran15200" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 text-3xl transition-colors duration-300 ml-2"
          ><i className="fa-brands fa-github"></i>
          </a>
          <a 
            href="https://x.com/longtran1234" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 text-3xl transition-colors duration-300 ml-2"
          ><i className="fa-brands fa-x-twitter"></i>
          </a>
          <a 
            href="https://discord.com/invite/aMecam57VT" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 text-3xl transition-colors duration-300 ml-2"
          ><i className="fa-brands fa-discord"></i>
          </a>
          <a 
            href="/contact" 
            className="text-gray-400 text-3xl transition-colors duration-300 ml-2"
          ><i className="fa-solid fa-envelope"></i>
          </a>
        </div>
        <div className="btn mt-6 justify-center flex ">
          <a href= {ResumePDF} download="Long_RESUME2025.pdf">
            <button className="text-white px-2 py-2 rounded- text-lg font-semibold flex  space-x-3 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105  ">
              Download CV
            </button>
          </a>
        </div>
      </div>

      {/* Profile Image Section */}
      <div className="sm:pt-0 bg-opacity-50 group-hover:blur-sm transition-all duration-300">
        <img 
          className="object-cover w-50 sm:w-70 md:w-95 lg:w-100 xl:w-110 rounded-full rounded-bl-none rounded-br-none transition-transform duration-300 ease-in-out transform hover:scale-102"
          src={ProfileImg} 
          alt="ProfileImg" 
          loading="lazy"
        />
      </div>
    </div>
  );
}
//DO NOT FORGET DATA AOS for smooth transition page

export default Home;
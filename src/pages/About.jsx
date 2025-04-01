import React, { useState, useEffect } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BiCheck } from 'react-icons/bi';
import GymImg from "../assets/Military.png"; 
import CookImg from "../assets/Cook.jpg";
import FishingImg from "../assets/Fishing.jpg";
import DrawingImg from "../assets/Drawing.jpg";
import OFSIImg from "../assets/OFSI.png";
import USMCImg from "../assets/USMC.png";
import LoneSImg from "../assets/LoneStar.png";

function About() {
  const slides = [
    {
      image:GymImg,
      title: "I am a Marine Reservist",
      description: "I Have a background in military.",
    },
    { 
      title: "My Experience",

      timeline: [
        { month: "Jan", 
          year: "2021", 
          event: "TA COSC-1336 & 1337",
          image: LoneSImg, 
          company:"Lone Star College", 
          date:"Jan. 2021 – Dec. 2021", 
          details: ["Supported students in mastering programming fundamentals, including control structures, data types, and problem-solving techniques in introductory and intermediate programming courses.",
                    "Utilized educational tools to manage assignments, provide constructive feedback, and track academic progress.",
                    "Assisted students in debugging code and developing algorithms, ensuring comprehension of advanced data structures and programming techniques."
                  ]},

        { month: "Oct", 
          year: "2022", 
          event: "Pharmacy Technician", 
          company:(
          <span className="inline-flex items-center ">SA <BiCheck className=" text-red-500 text-2xl mt-[-0.3rem] ml-[-0.3rem]"
           /> Pharmacy</span>), 
          date:"Oct. 2022 – Dec. 2023", 
          details: " Assisted pharmacists in daily operations, maintained inventory, trained new employees, and ensured compliance with medication and pharmacy regulations." },
        
        { month: "June", 
          year: "2024", 
          event: "Administration Specialist", 
          image: USMCImg, 
          company:"United States Marine Corps Reserve", 
          date:"June. 2024 – Present", 
          details: ["Managed and organized administrative records, ensuring accurate documentation and streamlined access for unit operations.",
            "Coordinated and scheduled training sessions and drills, optimizing personnel readiness and compliance with military protocols.",
            "Assisted in the preparation of reports and correspondence, maintaining communication efficiency within the unit and with higher command."
          ]},

        { month: "Jan", 
          year: "2025", 
          event: "IT Junior Specialist Intern", 
          image: OFSIImg, 
          company:"OFS International", 
          date:"Jan. 2025 – March. 2025",
          details: [" End-User Support & Troubleshooting: Provided technical support to end users, diagnosing problems in software, systems, and networks with a focus on TCP/IP protocols in a Microsoft Windows LAN environment.",
            "System Installation & Maintenance: Installed, configured, and maintained hardware and software systems, including upgrades and custom configurations to improve operational efficiency.",
            "Cross-Department Collaboration & Training: Assisted departments with technical resources, provided training in company software, ensured system stability, achieving a 95% issue resolution rate within the SLA time."
          ]},
      ],
    },
    {
      image:GymImg,
      title: "I am a Marine Reservist",
      description: "I Have a background in military.",
    },
    {
      image: DrawingImg,
      title: "My Hobbies",
      description: "I have a variety of hobbies outside of programming, including drawing, playing video games, fishing, and cooking, all of which allow me to unwind and express my creativity.",
      thumbnails: [
        DrawingImg,
        FishingImg,
        CookImg,
      ],
    },
    {
      image:GymImg,
      title: "I am a Marine Reservist",
      description: "I Have a background in military.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [largeImage, setLargeImage] = useState(slides[currentSlide].image);
  const [loading, setLoading] = useState(false);
  const [selectedTimeline, setSelectedTimeline] = useState(null);
  const [details,setDetails] = useState(null);

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    setLargeImage(slides[currentSlide === 0 ? slides.length - 1 : currentSlide - 1].image);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    setLargeImage(slides[currentSlide === slides.length - 1 ? 0 : currentSlide + 1].image);
  };

  const handleThumbnailClick = (thumbnail) => {
    setLoading(true);
    setTimeout(() => {
      setLargeImage(thumbnail);
      setLoading(false);
    }, 300);
  };


  const handleTimelineClick = (index, details) => {
    setSelectedTimeline(index === selectedTimeline ? null : index); // Toggle selection
    setLoading(true);  // Start loading before transition
    setTimeout(() => {
      setDetails(details);  // Update the details
      setLoading(false);  // End loading after transition delay
    }, 75); 
  };
  useEffect(() => {
    if (slides[currentSlide].image) {
      setLargeImage(slides[currentSlide].image);
    }
  }, [currentSlide]);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prevSlide) =>
  //       prevSlide === slides.length - 1 ? 0 : prevSlide + 1
  //     );
  //     setLargeImage(slides[currentSlide === slides.length - 1 ? 0 : currentSlide + 1].image);
  //   }, 5000000);

  //   return () => clearInterval(interval);
  // }, [currentSlide]);

  return (
    <div className="min-h-screen bg-stone-800 text-white flex flex-col gap-4 justify-center items-center">
      <div className="flex flex-col w-8/9 sm:w-4/5 xl:w-2/3 2xl:w-2/4 lg:flex-row bg-stone-800 p-6 shadow-lg shadow-amber-500 min-h-[50rem] gap-2 mt-6 outline-amber-500 outline">
        <div className="flex-1  rounded-2xl">
          <h2 className="text-4xl font-bold mx-2">About me</h2>
          <p className="text-sm p-2 lg:text-lg font-mono border-t border-amber-500">
            I’m a senior at the University of Houston, majoring in Computer Science with a passion for Software Engineering and Cybersecurity. 
            I enjoy building web applications, solving technical challenges, and exploring security concepts to enhance system integrity. 
            Outside of coursework, I’ve also worked on small certifications to expand my knowledge in IT and security. 
            I’m always looking for new opportunities to learn, grow, and refine my skills in both development and cybersecurity.
          </p>
        </div>

        <div className="flex-1 text-center items-center rounded-2xl ">
          <h2 className="text-2xl font-bold mb-5 border-b border-amber-500 p-1 ">{slides[currentSlide].title}</h2>

          {(currentSlide === 0 || currentSlide === 2 || currentSlide === 4) && (
          <div className="flex justify-center items-center w-full ">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full max-w-sm rounded-lg mb-4"
          />
          </div>
          )}
          {/* Artist section with img and thumbnail */}
          <div className=" flex justify-center items-center w-full ">
            {currentSlide === 3 && (
              <div className="flex justify-center items-center w-full mb-5">
                <img
                  src={largeImage}
                  alt={slides[currentSlide].title}
                  className={`size-50  2xl:size-70 rounded-lg transition-opacity duration-500 ease-in-out ${loading ? "opacity-0" : "opacity-100"}`}
                  style={{ objectFit:"cover", cursor: "pointer"}}
                />
              </div>
            )}

            {currentSlide === 3 && (
              <div className="flex-col w-[20%] mt-4 ml-auto">
                {slides[currentSlide].thumbnails.map((thumbnail, index) => (
                  <img
                    key={index}
                    src={thumbnail}
                    alt={`Thumbnail ${index + 1}`}
                    className="h-16 w-16 rounded-lg cursor-pointer hover:opacity-110 transition-all opacity-50 mb-4"
                    onClick={() => handleThumbnailClick(thumbnail)}
                  />
                ))}
              </div>
            )}
          </div>
          {currentSlide === 1 && (
            <ul className="flex relative gap-4 h-[63vh] sm:h-[40vh] justify-between mx-3 2xl:mx-10">
              {slides[currentSlide].timeline.map((item, index) => (
                <li key={index} className="btn h-[8vh] flex ">
                  {/* Button for event */}
                  <button
                    className="text-white rounded-md cursor-pointer p-2"
                    onClick={() => handleTimelineClick(index)}>
                    {item.month} {item.year}
                  </button>

                  {/* Event details */}
                  {selectedTimeline === index && (
                    <div className={`absolute bg-stone-800 p-1 rounded-md mt-2 left-0 top-17 md:top-19 2xl:top-20 text-sm text-start w-full transition-opacity duration-500 ease-in-out ${loading ? "opacity-0" : "opacity-100"}`}>                  
                    <h3 className="font-bold  font-serif text-lg 2xl:text-xl">{item.event}</h3>
                    <div className="flex gap-2">
                      {item.image && (
                        <img src={item.image} alt="Company Logo" className=" size-5 rounded-sm" />
                      )}
                      <em className="flex font-serif ">{item.company}</em>
                    </div> 
                    <p className="font-bold font-mono">{item.date}</p>
                    <ul className="list-disc list-inside text-left text-sm 2xl:text-lg">
                      {Array.isArray(item.details) ? (
                          item.details.map((detail, indx) => <li key={indx}>{detail}</li>)
                        ) : (
                          <li>{item.details}</li>
                        )}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
          <p className="text-lg mb-5 p-2 font-serif">{slides[currentSlide].description}</p>
        </div>
      </div>
      <div className="bottom-10 flex items-center gap-4 text-white">
        <BiChevronLeft className="w-6 h-6 cursor-pointer" onClick={handlePrev} />
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${currentSlide === index ? "bg-orange-400" : "bg-gray-400"}`}
            ></div>
          ))}
        </div>
        <BiChevronRight className="w-6 h-6 cursor-pointer" onClick={handleNext} />
      </div>
    </div>
    
  );
}

export default About;
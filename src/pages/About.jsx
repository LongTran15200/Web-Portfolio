import React, { useState} from "react";
import { BiChevronLeft, BiChevronRight,BiCheck } from "react-icons/bi";
import GymImg from "../assets/Military.png";
import FormalImg from "../assets/Formal2.png"; 
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
      title: "Skill & Certification",
      description: "Showcasing my skills and some IT/cybersecurity Certification.",
      skills: {
        programmingLanguages: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        ],
        frameworks: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg",
        ],
        databases: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
        ],
        others: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"

        ],
        certs: [
          {url:"https://github.com/LongTran15200/Pentesterlab-Essential-Challenges/blob/main/Essential%20certification.pdf",label:"Essential Cert"},
          {url:"https://github.com/LongTran15200/PentesterLab-HTTP-Challenges/blob/main/HTTP%20certification.pdf",label:"HTTP Cert"},
          {url:"https://www.coursera.org/account/accomplishments/professional-cert/SBC7EWVCDCQT?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=prof",label:"Google IT Cert"},
          {url:"https://github-production-user-asset-6210df.s3.amazonaws.com/128632373/260363846-335ff496-07ac-4c1d-acb5-7609433645ee.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250415%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250415T050320Z&X-Amz-Expires=300&X-Amz-Signature=240839a3cff027692643119bdffe392e35a2066fe2141da8fa2dc43faa274cb2&X-Amz-SignedHeaders=host",label:"SWE Virtual Cert"},
        ]
      },
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
          event: "Software Engineer Intern", 
          image: OFSIImg, 
          company:"OFS International", 
          date:"Jan. 2025 – March. 2025",
          details: [" Contributed to the full-stack redevelopment of the company website by collaborating with contractors on frontend enhancements, responsive design, and backend integration.",
            "Built Python scripts to support backend data processing and form workflows, integrating with RESTful APIs to enhance site functionality.",
            " Participated in system design discussions, Git-based version control, and QA/testing cycles to improve code quality and deployment reliability."
          ]},
      ],
    },
    {
      image:GymImg,
      title: "I am a Marine Reservist",
      description: "I have a Marine Reservist background, demonstrating my dedication, resilience, and ability to work effectively in high-pressure environments.",
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
      image:FormalImg,
      title: "Open to Opportunities",
      description: "I am actively seeking Software Engineering opportunities where I can leverage my technical skills, problem-solving abilities, and passion for innovation. I am eager to contribute to meaningful projects, collaborate with talented teams, and grow as an engineer in a dynamic environment.",
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
  // useEffect(() => {
  //   if (slides[currentSlide].image) {
  //     setLargeImage(slides[currentSlide].image);
  //   }
  // }, [currentSlide]);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prevSlide) =>
  //       prevSlide === slides.length - 1 ? 0 : prevSlide + 1
  //     );
  //     setLargeImage(slides[currentSlide === slides.length - 1 ? 0 : currentSlide + 1].image);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [currentSlide]);

  return (
    <div className="min-h-screen  text-white flex flex-col gap-4 justify-center items-center pt-20">
      <div className="flex flex-col w-8/9 items-ce sm:w-4/5 xl:w-2/3 2xl:w-2/4 lg:flex-row  p-6 shadow-lg  min-h-[45rem] gap-2 mt-6 outline-fuchsia-500 outline">
        <div className="flex-1  rounded-2xl">
          <h2 className="text-4xl font-bold mx-2 text-center">About me</h2>
          <p className="text-sm p-2 md:text-lg font-mono border-t border-fuchsia-500">
            I’m a senior at the University of Houston, majoring in Computer Science with a passion for Software Engineering and Cybersecurity. 
            I enjoy building web applications, solving technical challenges, and exploring security concepts to enhance system integrity. 
            Outside of coursework, I’ve also worked on small certifications to expand my knowledge in IT and security. 
            I’m always looking for new opportunities to learn, grow, and refine my skills in both development and cybersecurity.
          </p>
        </div>

        <div className="flex-1 text-center justify-center items-center rounded-2xl ">
          <h2 className="text-2xl font-bold mb-6 border-b border-fuchsia-500 p-[4.3px] ">{slides[currentSlide].title}</h2>
          <div></div>
          {currentSlide === 0 && (
          <div className="space-y-6">
            {[
              { label: "Languages", skills: slides[0].skills.programmingLanguages },
              { label: "Frameworks", skills: slides[0].skills.frameworks },
              { label: "Databases", skills: slides[0].skills.databases },
              { label: "Others", skills: slides[0].skills.others },
            ].map((group, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-2 underline">{group.label}</h3>
                <div className="flex gap-4 flex-wrap justify-center items-center">
                  {group.skills.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${group.label} icon ${i}`}
                      className="w-10 h-10 object-contain hover:scale-110 transition-transform duration-200"
                    />
                  ))}
                </div>
              </div>
            ))}
            <div className="flex-row flex gap-4 justify-center">
            {slides[currentSlide].skills?.certs?.map((cert, index) => (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="custom-color w-20 h-20 sm:h-20 transition-transform hover:scale-105 rounded-md "
              >{cert.label}
                {/* <img
                  src={certUrl}
                  alt={`Certification ${index + 1}`}
                  className="w-24 h-24 object-contain m-2 rounded shadow-md"
                /> */}
              </a>
            ))}
            </div>
          </div>
          )}
                    {currentSlide === 1 && (
            <ul className="flex relative gap-3 h-[63vh] sm:h-[40vh] justify-between mx-3 2xl:mx-10">
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
                    <div className={`absolute p-1 rounded-md mt-2 left-0 top-17 text-sm text-start w-full transition-opacity duration-500 ease-in-out ${loading ? "opacity-0" : "opacity-100"}`}>                  
                    <h3 className="font-bold  font-serif text-lg md:text-xl">{item.event}</h3>
                    <div className="flex gap-2">
                      {item.image && (
                        <img src={item.image} alt="Company Logo" className=" size-5 rounded-sm" />
                      )}
                      <em className="flex font-serif ">{item.company}</em>
                    </div> 
                    <p className="font-bold font-mono">{item.date}</p>
                    <ul className="list-disc text-left text-sm md:text-lg">
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
          {( currentSlide === 2 || currentSlide === 4) && (
          <div className="flex justify-center items-center w-full ">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-40 rounded-lg mb-4"
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
          
          <p className="text-lg mb-5 p-2 font-serif">{slides[currentSlide].description}</p>
        </div>
      </div>
      <div className="flex relative max-lg:bottom-3 items-center gap-4 text-white">
        <BiChevronLeft className="w-6 h-6 cursor-pointer" onClick={handlePrev} />
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${currentSlide === index ? "bg-fuchsia-500" : "bg-gray-400"}`}
            ></div>
          ))}
        </div>
        <BiChevronRight className="w-6 h-6 cursor-pointer" onClick={handleNext} />
      </div>
    </div>
  );
}

export default About;
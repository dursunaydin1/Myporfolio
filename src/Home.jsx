import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { MdWork, MdOutLineClose } from "react-icons/md";
import { SiGooglechat } from "react-icons/si";
import { BsTelephonePlusFill } from "react-icons/bs";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Left from "./components/home/Left";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

const Home = () => {
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [projects, setProjects] = useState(false);

  const [contact, setContact] = useState(false);
  // const [sidenav,setSidenav]=useState(false)
  return (
    <div className="w-[85%] h-[85%] bg-transparent text-white z-50 flex items-start justify-between">
      <div className="w-16 h-96 bg-transparent flex flex-col gap-4">
        <div className="w-full h-20 bg-bodyColor rounded-3xl flex justify-center items-center cursor-pointer group">
          <div className="flex flex-col gap-1.5 overflow-hidden">
            <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor"></span>
            <span className="w-8 h-[2px] bg-textColor inline-block group-hover:bg-designColor duration-300"></span>
            <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-3.5 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor"></span>
          </div>
        </div>

        <div className="w-full h-80 bg-bodyColor rounded-3xl py-6 flex flex-col items-center justify-between">
          <span
            onClick={() =>
              setAbout(true) &
              setResume(false) &
              setProjects(false) &
              setContact(false)
            }
            className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
          >
            <FaUser />
            <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
              About
            </span>
          </span>
          <span
            onClick={() =>
              setAbout(false) &
              setResume(true) &
              setProjects(false) &
              setContact(false)
            }
            className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
          >
            <IoIosPaper />
            <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
              Resume
            </span>
          </span>
          <span
            onClick={() =>
              setAbout(false) &
              setResume(false) &
              setProjects(true) &
              setContact(false)
            }
            className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
          >
            <MdWork />
            <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
              Projects
            </span>
          </span>
          {/* <span className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group">
            <SiGooglechat />
            <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
              Blog
            </span>
          </span> */}
          <span
            onClick={() =>
              setAbout(false) &
              setResume(false) &
              setProjects(false) &
              setContact(true)
            }
            className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"
          >
            <FaEnvelope />
            <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
              Contact
            </span>
          </span>
          <span className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group">
            <BsTelephonePlusFill />
            <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
              Call
            </span>
          </span>
        </div>
      </div>
      <div className="w-[94%] h-full bg-transparent flex items-center">
        <Left />
        <div className="w-8/12 h-[95%] bg-bodyColor">
          <div className="w-full h-[95%] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]">
            {about && <About />}
            {resume && <Resume />}
            {contact && <Contact />}
            {projects && <Projects />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

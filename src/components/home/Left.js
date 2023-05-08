import React, { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiTwitter, SiYoutubemusic } from "react-icons/si";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import bannerImg from "../../assets/bannerImg.png";
import CV from "../../assets/dursunaydin.pdf";
import Contact from "../contact/Contact";

const Left = () => {
  const [text] = useTypewriter({
    words: ["React Developer", "Frontend Developer", "UI Designer"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  // const styles = {
  //   borderBottomLeftRadius: "5px",
  //   borderBottomRightRadius: "5px",
  // };

  return (
    <div
      className="w-5/12 h-full bg-bodyColor rounded-2x1 shadow-testShadow z-10"
      style={{ borderRadius: "10px" }}
    >
      <div className="w-full h-3/5 flex justify-center items-center">
        <img
          className=" h-full object-cover"
          style={{ borderRadius: "10px", marginTop: "50px" }}
          src={bannerImg}
          alt="bannerImage"
          loading="priority"
        />
      </div>
      <div className="w-full h-2/5">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4x1 font-semibold">
            Dursun AYDIN
          </h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <a
              href="https://github.com/dursunaydin1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
                <FaGithub />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/dursunaydin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
                <FaLinkedin />
              </span>
            </a>
            {/* <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaYoutube />
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaFacebook />
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FiInstagram />
            </span> */}
            {/* <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <SiTwitter />
            </span> */}
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FiMail />
            </span>
          </div>
        </div>
        <div className="flex h-10">
          <a
            className="w-1/2 h-full flex justify-center borderRight items-center gap-2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase hover:text-designColor duration-300s"
            href={CV}
            target="_blank"
            rel="noreferrer"
          >
            <button className="w-full h-full flex borderRight justify-center items-center gap-2">
              Download CV <BsCloudLightningFill />
            </button>
          </a>
          <button className="w-1/2 h-full flex justify-center items-center gap-2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase hover:text-designColor duration-300s">
            Contact me <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;

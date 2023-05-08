import React from "react";
import proje1 from "../../assets/work/screen1.gif";
import proje2 from "../../assets/work/screen2.gif";
import proje3 from "../../assets/work/screen3.gif";
import proje4 from "../../assets/work/screen4.gif";
import proje5 from "../../assets/work/screen5.gif";
import proje6 from "../../assets/work/screen6.gif";
import Title from "../home/Title";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full flex flex-col gap-10">
        <div className="px-20">
          <div className="flex flex-wrap justify-between">
            <div className="w-[45%]">
              <ProjectCard
                title=<a
                  href="https://github.com/dursunaydin1/kitap-sepeti-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kitap Sepeti
                </a>
                category="alışveriş"
                image={proje1}
                link=""
              />
            </div>
            <div className="w-[45%] ">
              <ProjectCard
                title=<a
                  href="https://js-music-player1.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Music Player
                </a>
                category="eğlence"
                image={proje2}
              />
            </div>
            <div className="w-[45%] ">
              <ProjectCard
                title=<a
                  href="https://reactjs-responsive-restaurant-website.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Restaurant Website
                </a>
                category="hizmet"
                image={proje3}
              />
            </div>
            <div className="w-[45%]">
              <ProjectCard
                title=<a
                  href="https://weather-app-v10.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Weather App
                </a>
                category="güncel"
                image={proje4}
              />
            </div>
            <div className="w-[45%] ">
              <ProjectCard
                title=<a
                  href="https://earnest-gingersnap-6e2d52.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pokedex App
                </a>
                category="oyun"
                image={proje5}
              />
            </div>
            <div className="w-[35%]  ">
              <ProjectCard
                title=<a
                  href="https://crud-react-todo.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CRUD Todo App
                </a>
                category="yardımcı"
                image={proje6}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

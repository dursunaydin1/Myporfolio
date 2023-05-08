import React from "react";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeTitle from "./ResumeTitle";
import ResumeCard from "./ResumeCard";
import ResumeCard2 from "./ResumeCard2";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-4">
        <ResumeTitle title="Deneyim" icon={<MdWork />} />
        <ResumeCard />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-4">
        <ResumeTitle title="Eğitim" icon={<GiGraduateCap />} />
        <ResumeCard2 />
      </div>
    </div>
  );
};

export default Education;

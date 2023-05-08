import React from "react";

const ServicesCard = ({ icons, title, subTitle }) => {
  return (
    <div className="py-8 px-6 flex flex-col items-center gap-2 borderRight borderBottom">
      <span className="text-4x1 teext-designColor mb-2">{icons}</span>
      <h2 className="font-titleFont text-lg font-semibold">{title}</h2>
      <p className="text-sm text-zinc-400 px-6">{subTitle}</p>
    </div>
  );
};

export default ServicesCard;

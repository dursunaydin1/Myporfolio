import React from "react";

const ResumeCard2 = () => {
  return (
    <div className="w-full py-6 flex flex-col gap-2.5">
      <h6 className="w-28 text-center text-sm py-[1px] text-designColor border-[1px] rounded-sm">
        2005 - 2009
      </h6>
      <h2 className="text-lg font-titleFont text-gray-200 font-medium">
        Kocaeli Üniversitesi
      </h2>
      <p className="text-sm text-[#999] -mt-2">Yazılım</p>
      <p className="text-base text-[#999] font-medium pr-10">
        Bilgisayar Öğretmenliği
      </p>
      <p className="border-b-[1px] border-b-zinc-800"></p>
      <div className="w-full py-6 flex flex-col gap-2.5 border-b-[1px] border-b-zinc-800">
        <h6 className="w-44 text-center text-sm py-[1px] text-designColor border-[1px] border-designColor rounded-sm">
          2013 - devam ediyorum
        </h6>
        <h2 className="text-lg font-titleFont text-gray-200 font-medium">
          On Dokuz Mayıs Üniversitesi
        </h2>
        <p className="text-sm text-[#999] -mt-2">Yazılım</p>
        <p className="text-base text-[#999] font-medium pr-1">
          Bilgisayar Mühendisliği
        </p>
      </div>
    </div>
  );
};

export default ResumeCard2;

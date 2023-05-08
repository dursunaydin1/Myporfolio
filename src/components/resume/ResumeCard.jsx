import React from "react";

const ResumeCard = () => {
  return (
    <div className="w-full py-6 flex flex-col gap-2.5 border-b-[1px] border-b-zinc-800">
      <h6 className="w-44 text-center text-sm py-[1px] text-designColor border-[1px] border-designColor rounded-sm">
        2022-Halen Çalışıyorum
      </h6>
      <h2 className="text-lg font-titleFont text-gray-200 font-medium">
        Frontend Developer
      </h2>
      <p className="text-sm  text-designColor -mt-2">-arabuleu</p>
      <p className="text-xs text-[#999] font-medium -mb-2">
        -React, HTML, CSS, ve JavaScript kullanarak modern web sayfalarını
        oluşturma
      </p>
      <p className="text-xs text-[#999] font-medium -mb-2">
        -Responsive tasarım uygulamaları için CSS framework'leri (Bootstrap,
        SASS, SCSS) kullandım.
      </p>
      <p className="text-xs text-[#999] font-medium -mb-2">
        -Backend developer'larla işbirliği yaparak, API'lerle veri alışverişi
        yaptım ve web sayfalarını oluşturdum
      </p>
      <p className="text-xs text-[#999] font-medium -mb-3">
        -Git kullanarak, tüm kodlama sürecini sürüm kontrolü altında tuttum.
      </p>
      <p className="text-xs text-[#999] font-medium -mb-2.5">
        -Sitenin kullanıcı dostu olmasını sağlamak için UI/UX tasarımı
        konularında deneyimim bulunmaktadır.
      </p>
      <p className="text-xs text-[#999] font-medium -mb-3">
        - React Router kullanarak, SPA (Single Page Application) oluşturma
      </p>
      <p className="text-xs text-[#999] font-medium -mb-2">
        - Redux kullanarak, state yönetimi.
      </p>

      <div className="col-span-4"></div>
    </div>
  );
};

export default ResumeCard;

import React from "react";

const AboutMe = () => {
  return (
    <div className="flex pb-6">
      <div className="w-1/2 text-zinc-400 p-6 borderRight flex flex-col">
        <div className="py-6">
          <h2 className="font-semibold mb-1 text-lg">Merhaba.</h2>
          <p className="text-sm text-justify">
            Yazılım konusunda lise eğitimimden itibaren ilgiliyim. Kendimi
            teknoloji meraklısı ve inovasyona açık bir birey olarak
            tanımlıyorum. Hızlı bir öğreniciyim ve her zaman yeni teknolojiler
            ve gelişmeler hakkında bilgi edinmek için çaba sarf ediyorum.
            Yaratıcı bir yaklaşımla problem çözmekten keyif alırım ve
            müşterilerin beklentilerini karşılayacak özgün çözümler üretmek için
            çaba harcarım. Aynı zamanda ekip çalışmasına önem veren biriyim ve
            proje süreçlerinde takım arkadaşlarımla uyumlu bir şekilde
            çalışabilirim.
          </p>
        </div>
      </div>
      <div className="w-1/2 p-6">
        <ul>
          <li className="aboutRightLi">
            <span className="aboutRightSpan">İlgi:</span>
            Yazılım
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightSpan">Ülke:</span>
            Türkiye
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightSpan">Şehir:</span>
            Samsun
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightSpan">Çalışma Şekli:</span>
            Hibrid
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;

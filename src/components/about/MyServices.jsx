import React from "react";
import ServicesCard from "./ServicesCard";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";

const MyServices = () => {
  return (
    <div className="grid grid-cols-4 overflow-x-hidden">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Geliştirme"
        subTitle="Profesyonel olarak HTML, CSS ve JavaScript kullanarak web siteleri ve uygulamaları oluşturma deneyimi,
        "
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Dizayn"
        subTitle="UI / UX tasarım ilkeleri konusunda anlayış ve deneyim.Frontend konularıyla ilgili güncel trendler, gelişmeler ve yeni teknolojiler hakkında farkındalık.
        "
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Mobile Uygulamaları"
        subTitle="
        Responsive yapıda tasarımlar yaparak kullanıcı etkileşim ve çalışmalarına katkıda bulunan bir yapıda düzenlemeler yapma, bunları geliştirme ve güncelleme
        "
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="SEO"
        subTitle="Özelleştirilmiş web siteleri geliştirme,Sosyal medya entegrasyonu ve diğer web servisleriyle entegrasyon ,Web site
        güncelleme ve bakım hizmetleri SEO uyumlu web siteleri oluşturma,
        "
      />
    </div>
  );
};

export default MyServices;

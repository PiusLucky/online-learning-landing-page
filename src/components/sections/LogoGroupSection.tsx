import React from "react";

function LogoGroupSection() {
  const data = [
    "/images/logo_g_1.png",
    "/images/logo_g_2.png",
    "/images/logo_g_3.png",
    "/images/logo_g_4.png",
    "/images/logo_g_5.png",
    "/images/logo_g_6.png",
  ];
  return (
    <section className="mx-4">
      <div className="flex justify-center flex-col items-center mt-16">
        <p className="text-[#696984] text-[28px] mb-8 text-center">
          Trusted by 5,000+ Companies Worldwide
        </p>
        <div className="flex flex-wrap items-center w-full gap-8 justify-center">
          {data.map((image, index) => (
            <img src={image} key={index} alt="logo" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoGroupSection;

import React from "react";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import MainButton from "../common/MainButton";

function FooterSection() {
  return (
    <section className="bg-[#252641] py-16 px-4">
      <div className="flex gap-4 flex-col md:flex-row md:items-center md:justify-center">
        <div>
          <img
            src="/images/footer_logo.png"
            alt="footer logo"
            className="w-[100px]"
          />
        </div>
        <Separator
          orientation="vertical"
          className="h-[83px] bg-[#626381] hidden md:block"
        />
        <p className="text-white font-semibold text-[22px]">
          Virtual Class for Zoom
        </p>
      </div>
      <div className="flex flex-col md:justify-center md:items-center my-16">
        <p className="text-[#B2B3CF] text-[18px] mb-4">
          Subscribe to get our Newsletter
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:items-center">
          <Input
            type="email"
            placeholder="Your Email"
            className="bg-transparent border-[#83839A] text-white max-w-[400px] rounded-full"
          />
          <MainButton text="Subscribe" classes="bg-[#545AE8]" />
        </div>
      </div>
      <div className="flex flex-col md:items-center md:justify-center">
        <div className="flex flex-col md:flex-row gap-8 md:items-center">
          <p className="text-[#B2B3CF]">Careers</p>
          <Separator
            orientation="vertical"
            className="h-[15px] bg-[#626381] hidden md:block"
          />
          <p className="text-[#B2B3CF]">Privacy Policy</p>
          <Separator
            orientation="vertical"
            className="h-[15px] bg-[#626381] hidden md:block"
          />
          <p className="text-[#B2B3CF]">Terms & Conditions</p>
        </div>
        <p className="text-[#B2B3CF] mt-4">© 2021 Class Technologies Inc. </p>
      </div>
    </section>
  );
}

export default FooterSection;

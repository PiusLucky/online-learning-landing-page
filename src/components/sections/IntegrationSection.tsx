import React from "react";
import MainButton from "../common/MainButton";
import { Separator } from "@/components/ui/separator";

function IntegrationSection() {
  return (
    <section className="mt-16">
      {" "}
      <div
        className={`flex items-center flex-col gap-8 md:gap-32 justify-between md:flex-row`}
      >
        <div>
          <img src="/images/f_6.png" alt="feature card image" />
        </div>

        <div>
          <div className="flex gap-4 items-center mb-4">
            <Separator className="w-[100px]" />
            <div className="text-[#525596] text-[20px]">INTEGRATIONS</div>
          </div>
          <div className="font-semibold text-secondary text-[40px]">
            200+ educational tools and platform{" "}
            <span className="text-primary">integrations</span>
          </div>
          <p className="text-[#696984] text-[20px] mt-8 mb-12">
            Schoology has every tool your classroom needs and comes
            pre-integrated with more than 200+ tools, student information
            systems (SIS), and education platforms.
          </p>

          <MainButton
            text="See more integrations"
            classes="w-[250px] h-[70px] bg-white border border-primary text-primary text-[18px] hover:bg-white"
          />
        </div>
      </div>
    </section>
  );
}

export default IntegrationSection;

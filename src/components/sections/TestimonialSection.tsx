import React from "react";
import MainButton from "../common/MainButton";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

function TestimonialSection() {
  return (
    <section className="mt-16">
      {" "}
      <div
        className={`flex items-center flex-col gap-8 md:gap-32 justify-between md:flex-row`}
      >
        <div>
          <div className="flex gap-4 items-center mb-4">
            <Separator className="w-[100px]" />
            <div className="text-[#525596] text-[20px]">TESTIMONIAL</div>
          </div>
          <div className="font-semibold text-secondary text-[40px]">
            What They Say?
          </div>
          <p className="text-[#696984] text-[20px] mt-8 mb-3">
            Skilline has got more than 100k positive ratings from our users
            around the world.
          </p>
          <p className="text-[#696984] text-[20px] mt-8 mb-3">
            Some of the students and teachers were greatly helped by the
            Skilline.
          </p>
          <p className="text-[#696984] text-[20px] mt-8 mb-8">
            Are you too? Please give your assessment
          </p>
          <div className="relative inline-flex">
            <MainButton
              text="Write your assessment"
              classes="w-[250px] md:w-[370px] h-[70px] bg-white border border-primary text-primary text-[18px] hover:bg-white"
            />
            <div className="hidden md:flex border border-primary rounded-full w-[70px] h-[70px] justify-center items-center absolute top-0 right-0">
              <ArrowRight color="#F48C06" size={32} />
            </div>
          </div>
        </div>
        <div>
          <img src="/images/smile.png" alt="feature card image" />
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;

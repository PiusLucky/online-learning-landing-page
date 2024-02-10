import React from "react";

interface IProps {
  image: string;
  title: () => React.JSX.Element;
  imageLeft: boolean;
  description?: string;
  options?: { icon: string; text: string }[];
}

function FeatureCard({
  image,
  title,
  description,
  imageLeft,
  options,
}: IProps) {
  return (
    <div
      className={`flex items-center gap-8 justify-between ${
        imageLeft ? "flex-col md:flex-row-reverse" : "flex-col  md:flex-row"
      }`}
    >
      <div>
        <div className="font-semibold text-secondary text-[40px]">
          {title()}
        </div>
        {options?.length ? (
          <div className="mt-8 flex flex-col gap-8">
            {options?.map((option, index) => (
              <div key={index} className="flex items-center gap-4">
                <div>
                  <img src={option.icon} alt="icon" />
                </div>
                <p className="text-[#696984] text-[20px]">{option.text}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[#696984] text-[20px] mt-8">{description}</p>
        )}
      </div>
      <div>
        <img src={image} alt="feature card image" />
      </div>
    </div>
  );
}

export default FeatureCard;

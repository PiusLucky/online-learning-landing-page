import React from "react";

interface IAllInOneCard {
  icon: string;
  title: string;
  description: string;
}

function AllInOneCard({ icon, title, description }: IAllInOneCard) {
  return (
    <div className="shadow-md flex justify-center items-center flex-col px-8 rounded-[20px]">
      <div className="-mt-16">
        <img src={icon} alt="card icon" />
      </div>
      <p className="text-secondary text-[25px] mt-16 text-center">{title}</p>
      <p className="text-[#696984] text-[16px] py-8 text-center">
        {description}
      </p>
    </div>
  );
}

export default AllInOneCard;

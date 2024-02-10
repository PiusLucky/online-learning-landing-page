import React from "react";
import AllInOneCard from "../cards/AllInOneCard";

function AllInOneSection() {
  const data = [
    {
      icon: "/images/paper_icon.png",
      title: "Online Billing, Invoicing, & Contracts",
      description:
        "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts",
    },
    {
      icon: "/images/calendar_icon.png",
      title: "Easy Scheduling & Attendance Tracking",
      description:
        "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
    },
    {
      icon: "/images/user_group_icon.png",
      title: "Customer Tracking",
      description:
        "Automate and track emails to individuals or groups. Skilline's built-in system helps organize your organization ",
    },
  ];
  return (
    <section>
      <p className="font-bold text-[30px] md:text-[36px] text-secondary text-center">
        All-In-One <span className="text-primary">Studying</span>
      </p>
      <p className="text-[#696984] text-[20px] mb-8 text-center">
        Skilline is one powerful online software suite that combines all the
        tools needed to run a successful school or office.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-32 md:gap-8 lg:grid-cols-3 justify-between mt-32">
        {data.map((feature, index) => (
          <AllInOneCard {...feature} key={index} />
        ))}
      </div>
    </section>
  );
}

export default AllInOneSection;

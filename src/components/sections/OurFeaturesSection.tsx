import React from "react";
import FeatureCard from "../cards/FeatureCard";
import MainButton from "../common/MainButton";

function OurFeaturesSection() {
  const f1_data = {
    image: "/images/f_1.png",
    title: () => (
      <p>
        A <span className="text-primary">user interface</span> designed for the
        classroom
      </p>
    ),
    options: [
      {
        icon: "/images/square_colored_icon.png",
        text:
          "Teachers don't get lost in the grid view and have a dedicated Podium space.",
      },
      {
        icon: "/images/overlap_icon.png",
        text: "TA's and presenters can be moved to the front of the class.",
      },
      {
        icon: "/images/user_group_alt_icon.png",
        text:
          "Teachers can easily see all students and class data at one time.",
      },
    ],
  };

  const f2_data = {
    image: "/images/f_2.png",
    title: () => (
      <p>
        <span className="text-primary">Tools</span> For Teachers And Learners
      </p>
    ),
    description:
      "Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.",
  };

  const f3_data = {
    image: "/images/f_3.png",
    title: () => (
      <p>
        Assessments, <span className="text-primary">Quizzes </span> , Tests
      </p>
    ),
    description:
      "Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.",
  };

  const f4_data = {
    image: "/images/f_4.png",
    title: () => (
      <p>
        <span className="text-primary">Class Management </span> Tools for
        Educators
      </p>
    ),
    description:
      "Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time. ",
  };

  const f5_data = {
    image: "/images/f_5.png",
    title: () => (
      <p>
        One-on-One<span className="text-primary"> Discussions</span>
      </p>
    ),
    description:
      "Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.",
  };

  return (
    <section>
      <div>
        <div>
          <p className="font-bold text-[30px] md:text-[36px] text-secondary text-center">
            Our <span className="text-primary">Features</span>
          </p>
          <p className="text-[#696984] text-[20px] mb-16 text-center md:mx-16">
            This very extraordinary feature, can make learning activities more
            efficient
          </p>
          <div className="flex flex-col gap-16">
            <FeatureCard {...f1_data} imageLeft={true} />
            <FeatureCard {...f2_data} imageLeft={false} />
            <FeatureCard {...f3_data} imageLeft={true} />
            <FeatureCard {...f4_data} imageLeft={false} />
            <FeatureCard {...f5_data} imageLeft={true} />
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <MainButton
          text="See more features"
          classes="w-[250px] h-[70px] bg-white border border-primary text-primary text-[18px] hover:bg-white"
        />
      </div>
    </section>
  );
}

export default OurFeaturesSection;

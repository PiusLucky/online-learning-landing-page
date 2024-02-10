import Link from "next/link";
import React from "react";

function LatestNewsSection() {
  const blog_data = [
    {
      image: "/images/b_1.png",
      tag: "press release",
      title:
        "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
      description:
        "Class Technologies Inc., the company that created Class,...",
    },
    {
      image: "/images/b_2.png",
      tag: "news",
      title:
        "Zoom's earliest investors are betting millions on a better Zoom for schools",
      description:
        "Zoom was never created to be a consumer product. Nonetheless, the...",
    },
    {
      image: "/images/b_3.png",
      tag: "news",
      title:
        "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
      description:
        "This year, investors have reaped big financial returns from betting on Zoom...",
    },
  ];
  return (
    <section>
      <p className="font-bold text-[30px] md:text-[36px] text-secondary text-center">
        Lastest News and Resources
      </p>
      <p className="text-[#696984] text-[20px] mb-16 text-center md:mx-16">
        See the developments that have occurred to Skillines in the world
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col gap-6 ">
          <img
            src="/images/laptop.png"
            alt="laptop"
            className="rounded-[20px] h-[340px] object-cover"
          />
          <div className="bg-[#F4C467] rounded-full w-[80px] flex justify-center items-center">
            NEWS
          </div>
          <p className="text-[#252641] font-semibold">
            Class adds $30 million to its balance sheet for a Zoom-friendly
            edtech solution
          </p>
          <p className="text-[#696984] text-[20px]">
            Class, launched less than a year ago by Blackboard co-founder
            Michael Chasen, integrates exclusively...
          </p>
          <Link
            href="/"
            className="text-[#696984] underline underline-offset-2"
          >
            Read more
          </Link>
        </div>
        <div className="flex flex-col gap-8">
          {blog_data.map((blog, index) => (
            <div className="flex gap-8 flex-col md:flex-row" key={index}>
              <div className="relative">
                <img
                  src={blog.image}
                  alt="blog image"
                  className="rounded-[20px] w-[280px] h-[200px] object-cover"
                />
                <div className="bg-[#F4C467] rounded-full mt-6 md:mt-0 px-3 py-1 relative inline-block  md:absolute bottom-2 right-2 text-[#252641] uppercase">
                  {blog.tag}
                </div>
              </div>

              <div>
                <p className="font-medium text-[22px]">{blog.title}</p>
                <p className="text-[#696984] text-[20px] mt-3">
                  {blog.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestNewsSection;

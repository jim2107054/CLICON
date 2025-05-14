import React from "react";
import { assets } from "../assets/assets";
import CoreTeamMemberCard from "../components/CoreTeamMemberCard";
import { CoreTeamMembers } from "../assets/assets";

const AboutUs = () => {
  return (
    <div>
      <div className="flex flex-col gap-10 px-36 py-10">
        {/*------------First Div----------*/}
        <div className="flex items-center flex-col-reverse md:flex-row gap-10">
          {/*------------Left Div----------*/}
          <div className="w-1/2 justify-center flex flex-col gap-5">
            <h1 className="border w-fit px-3 py-1 bg-blue-400 text-white rounded-md">
              WHO WE ARE
            </h1>
            <p className="text-3xl font-semibold">
              Kinbo - largest electronics
              <br /> retail shop in the world.
            </p>
            <p className="font-light mb-5">
              Pellentesque ultrices, dui vel hendrerit iaculis, ipsum velit
              vestibulum risus, ac tincidunt diam lectus id magna. Praesent
              maximus lobortis neque sit amet rhoncus. Nullam tempus lectus a
              dui aliquet, non ultricies nibh elementum. Nulla ac nulla dolor.{" "}
            </p>

            <p className="flex gap-3">
              <span>
                <img src={assets.checks} alt="" />
              </span>
              Great 24/7 customer services.
            </p>
            <p className="flex gap-3">
              <span>
                <img src={assets.checks} alt="" />
              </span>
              600+ Dedicated employe.
            </p>
            <p className="flex gap-3">
              <span>
                <img src={assets.checks} alt="" />
              </span>
              50+ Branches all over the world.
            </p>
            <p className="flex gap-3">
              <span>
                <img src={assets.checks} alt="" />
              </span>
              Over 1 Million Electronics Products
            </p>
          </div>
          {/*------------Right Div----------*/}
          <div className="w-1/2">
            <img
              className="rounded-md"
              src={assets.aboutOne}
              alt="about Photo"
            />
          </div>
        </div>
        {/*------------Second Div----------*/}
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-semibold text-center my-5">
            Our core team member
          </h1>
          <div className="flex flex-col md:flex-row flex-wrap w-full gap-x-8 gap-y-5">
            {CoreTeamMembers.map((member, index) => (
              <CoreTeamMemberCard
                key={index}
                image={member.image}
                name={member.name}
                position={member.position}
              />
            ))}
          </div>
        </div>
      </div>
      {/*------------Third Div----------*/}
      <div>
        <img
        className="w-full object-cover my-5"
         src={assets.aboutBanner} alt="Banner" />
      </div>
      {/*------------Fourth Div----------*/}
      <div className="flex flex-col gap-10 px-36 py-10">
        {/*--------FLASH SALE TODAY-----------*/}
        <div></div>
        {/*--------BEST SELLERS-----------*/}
        <div></div>
        {/*--------TOP RATED-----------*/}
        <div></div>
        {/*--------NEW ARRIVAL-----------*/}
        <div></div>
      </div>
    </div>
  );
};

export default AboutUs;

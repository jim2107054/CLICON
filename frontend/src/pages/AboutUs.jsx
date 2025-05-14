import React from "react";
import { assets } from "../assets/assets";
import CoreTeamMemberCard from "../components/CoreTeamMemberCard";
import { CoreTeamMembers } from "../assets/assets";
import { flashSaleToday } from "../assets/assets";
import { bestSellers } from "../assets/assets";
import { topRated } from "../assets/assets";
import { newArrival } from "../assets/assets";
import AboutUsSales from "../components/AboutUsSales";
import { FaArrowRight } from "react-icons/fa";

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
          src={assets.aboutBanner}
          alt="Banner"
        />
      </div>
      {/*------------Fourth Div----------*/}
      <div className="flex flex-col lg:flex-row gap-10 px-36 py-10">
        {/*--------FLASH SALE TODAY-----------*/}
        <div className="">
          <p className="font-medium text-xl">FLASH SALE TODAY</p>
          <div>
            {flashSaleToday.map((item, index) => (
              <AboutUsSales
                key={index}
                image={item.image}
                price={item.price}
                description={item.description}
              />
            ))}
          </div>
        </div>
        {/*--------BEST SELLERS-----------*/}
        <div>
          <p className="font-medium text-xl">BEST SELLERS</p>
          <div>
            {bestSellers.map((item, index) => (
              <AboutUsSales
                key={index}
                image={item.image}
                price={item.price}
                description={item.description}
              />
            ))}
          </div>
        </div>
        {/*--------TOP RATED-----------*/}
        <div>
          <p className="font-medium text-xl">TOP RATED</p>
          <div>
            {topRated.map((item, index) => (
              <AboutUsSales
                key={index}
                image={item.image}
                price={item.price}
                description={item.description}
              />
            ))}
          </div>
        </div>
        {/*--------NEW ARRIVAL-----------*/}
        <div>
          <p className="font-medium text-xl">NEW ARRIVAL</p>
          <div>
            {newArrival.map((item, index) => (
              <AboutUsSales
                key={index}
                image={item.image}
                price={item.price}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/*------------Fifth Div----------*/}
      <div className="flex flex-col items-center py-10 w-full bg-secondary">
        <div className="w-full px-5 lg:px-20 md:w-1/2">
          <h1 className="text-3xl text-white font-medium text-center">
            Subscribe to our newsletter
          </h1>
          <p className="text-base font-light text-center my-5">
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
            libero et <br className="hidden lg:visible" /> cursus. Donec non
            quam urna. Quisque vitae porta ipsum.
          </p>
          <div className="flex relative">
            <input
              className="w-full h-12 px-5 rounded border-b"
              type="email"
              placeholder="Email address"
            />
            <button className="absolute right-2 bg-[#FA8232] h-10 px-8 py-2 text-white rounded top-1 flex items-center gap-2">
              Subscribe <span> <FaArrowRight/> </span>
            </button>
          </div>
          <hr className="border w-full lg:w-2/3 mx-auto border-t-0 bg-white mt-5" />

          <div className="flex items-center justify-center gap-5 mb-3">
            <img className="w-12" src={assets.google} alt="" />
            <img className="w-12" src={assets.amazom} alt="" />
            <img className="w-12" src={assets.philips} alt="" />
            <img className="w-12" src={assets.toshiba} alt="" />
            <img className="w-12" src={assets.samsung} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

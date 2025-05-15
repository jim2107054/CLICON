import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { faqsData } from "../assets/assets";
import FAQItem from "../components/FAQItem";

const FAQS = () => {
  return (
    <div>
      <div className="flex flex-col gap-10 px-36 py-10">
        <div className="flex flex-col lg:flex-row lg:gap-20 gap-16">
          {/*-------Left Div-------*/}
          <div className="flex flex-col gap-5 w-full lg:w-1/2">
            <h1 className="text-3xl font-medium mb-3">
              Frequently Asked Questions{" "}
            </h1>
            <div className="flex flex-col gap-2">
              {faqsData.length > 0 &&
                faqsData.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    points={faq.points}
                  />
                ))}
            </div>
          </div>
          {/*-------Right Div-------*/}
          <div className="bg-[#ecd179c9] px-6 py-2 mt-16 h-fit w-full lg:w-1/2 rounded">
            <p className="font-medium mt-5 mb-1">
              Don't find your answer, Ask for support.
            </p>
            <p className="text-base font-light leading-none mb-5">
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed
              molestie accumsan dui, non iaculis primis in faucibu raesent eget
              sem purus.
            </p>
            <form className="flex flex-col gap-3" action="#">
              <input
                className="h-12 px-5 rounded border border-b-2"
                type="email"
                placeholder="Email address"
              />
              <input
                className="h-12 px-5 rounded border border-b-2"
                type="text"
                placeholder="Subject"
              />
              <textarea
                className="h-24 px-5 rounded border border-b-2 mb-5"
                name="FaqMessage"
                id="FaqMessage"
                placeholder="Message(Optional)"
              />
            </form>
            <button className="flex  items-center gap-2 border bg-btnColor px-3 py-2 text-white rounded hover:scale-105 transition-all duration-200">
              SEND MESSAGE <FaArrowRight />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQS;

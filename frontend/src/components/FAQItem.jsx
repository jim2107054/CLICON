import React, { useState } from "react";

const FAQItem = (props) => {
  const { question, answer, points } = props;

  const [clicked, setClicked] = useState(false);
  const value = clicked ? "-" : "+";

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div>
      <p
        onClick={() => handleClick()}
        className={`border border-b-2 flex justify-between items-center w-full px-5 py-2 cursor-pointer rounded ${
          clicked ? "bg-btnColor text-white h-fit" : "font-medium"
        }`}
      >
        {question}{" "}
        <span className={`right-2 text-2xl ${clicked ? "" : "text-gray-500"}`}>
          {value}
        </span>
      </p>
      {clicked && (
        <div className="px-5 py-2 text-start w-full border border-b-2 shadow-lg rounded font-light">
          {answer}
          {points && points.length > 0 && (
            <ul className="list-disc px-10 py-3 gap-1 font-light">
              {
                points.map((point,index)=>(
                    <li key={index}>{point}</li>
                ))
              }
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default FAQItem;

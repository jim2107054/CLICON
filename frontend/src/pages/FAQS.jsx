import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const FAQS = () => {
  const [clicked, setClicked] = useState(false);
  const value = clicked ? "-" : "+";

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <div className="flex flex-col gap-10 px-36 py-10">
        <div className="flex flex-col lg:flex-row lg:gap-20 gap-16">
          {/*-------Left Div-------*/}
          <div className="flex flex-col gap-5 w-full lg:w-1/2">
            <h1 className="text-3xl font-medium mb-3">Frequently Asked Questions </h1>
            <div className="flex flex-col gap-2">
              <p
                onClick={() => handleClick()}
                className={`border border-b-2 flex justify-between items-center w-full px-5 py-2 cursor-pointer rounded ${
                  clicked ? "bg-btnColor text-white h-fit" : "font-medium"
                }`}
              >
                Suspendisse ultrices pharetra libero sed interdum.{" "}
                <span className={`right-2 text-2xl ${clicked?"":"text-gray-500"}`}>{value}</span>
              </p>
              {clicked && (
                <div className="px-5 py-2 text-start w-full border border-b-2 shadow-lg rounded font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  ea inventore, distinctio quas odit eligendi. Consequuntur hic
                  iure officia enim, repellat provident ut iste in optio totam!
                  In omnis modi aspernatur aut autem voluptate dolore ratione.
                  Distinctio excepturi harum odio quia, deleniti fuga? A
                  mollitia fugit aliquid atque aperiam laborum!
                  <ul className="list-disc px-10 py-3 gap-1 font-light">
                    <li>Vivamus sed est non arcu porta aliquet et vitae nulla.</li>
                    <li>Integer et lacus vitae justo fermentum rutrum. In nec ultrices massa.</li>
                    <li>Proin blandit nunc risus, at semper turpis sagittis nec.</li>
                    <li>Quisque ut dolor erat.</li>
                  </ul>
                </div>
              )}
              <p
                onClick={() => handleClick()}
                className={`border border-b-2 flex justify-between items-center w-full px-5 py-2 cursor-pointer rounded ${
                  clicked ? "bg-btnColor text-white h-fit" : "font-medium"
                }`}
              >
                Suspendisse ultrices pharetra libero sed interdum.{" "}
                <span className={`right-2 text-2xl ${clicked?"":"text-gray-500"}`}>{value}</span>
              </p>
              {clicked && (
                <div className="px-5 py-2 text-start w-full border border-b-2 shadow-lg rounded font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  ea inventore, distinctio quas odit eligendi. Consequuntur hic
                  iure officia enim, repellat provident ut iste in optio totam!
                  In omnis modi aspernatur aut autem voluptate dolore ratione.
                  Distinctio excepturi harum odio quia, deleniti fuga? A
                  mollitia fugit aliquid atque aperiam laborum!
                  <ul className="list-disc px-10 py-3 gap-1 font-light">
                    <li>Vivamus sed est non arcu porta aliquet et vitae nulla.</li>
                    <li>Integer et lacus vitae justo fermentum rutrum. In nec ultrices massa.</li>
                    <li>Proin blandit nunc risus, at semper turpis sagittis nec.</li>
                    <li>Quisque ut dolor erat.</li>
                  </ul>
                </div>
              )}
              <p
                onClick={() => handleClick()}
                className={`border border-b-2 flex justify-between items-center w-full px-5 py-2 cursor-pointer rounded ${
                  clicked ? "bg-btnColor text-white h-fit" : "font-medium"
                }`}
              >
                Suspendisse ultrices pharetra libero sed interdum.{" "}
                <span className={`right-2 text-2xl ${clicked?"":"text-gray-500"}`}>{value}</span>
              </p>
              {clicked && (
                <div className="px-5 py-2 text-start w-full border border-b-2 shadow-lg rounded font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  ea inventore, distinctio quas odit eligendi. Consequuntur hic
                  iure officia enim, repellat provident ut iste in optio totam!
                  In omnis modi aspernatur aut autem voluptate dolore ratione.
                  Distinctio excepturi harum odio quia, deleniti fuga? A
                  mollitia fugit aliquid atque aperiam laborum!
                  <ul className="list-disc px-10 py-3 gap-1 font-light">
                    <li>Vivamus sed est non arcu porta aliquet et vitae nulla.</li>
                    <li>Integer et lacus vitae justo fermentum rutrum. In nec ultrices massa.</li>
                    <li>Proin blandit nunc risus, at semper turpis sagittis nec.</li>
                    <li>Quisque ut dolor erat.</li>
                  </ul>
                </div>
              )}
              <p
                onClick={() => handleClick()}
                className={`border border-b-2 flex justify-between items-center w-full px-5 py-2 cursor-pointer rounded ${
                  clicked ? "bg-btnColor text-white h-fit" : "font-medium"
                }`}
              >
                Suspendisse ultrices pharetra libero sed interdum.{" "}
                <span className={`right-2 text-2xl ${clicked?"":"text-gray-500"}`}>{value}</span>
              </p>
              {clicked && (
                <div className="px-5 py-2 text-start w-full border border-b-2 shadow-lg rounded font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  ea inventore, distinctio quas odit eligendi. Consequuntur hic
                  iure officia enim, repellat provident ut iste in optio totam!
                  In omnis modi aspernatur aut autem voluptate dolore ratione.
                  Distinctio excepturi harum odio quia, deleniti fuga? A
                  mollitia fugit aliquid atque aperiam laborum!
                  <ul className="list-disc px-10 py-3 gap-1 font-light">
                    <li>Vivamus sed est non arcu porta aliquet et vitae nulla.</li>
                    <li>Integer et lacus vitae justo fermentum rutrum. In nec ultrices massa.</li>
                    <li>Proin blandit nunc risus, at semper turpis sagittis nec.</li>
                    <li>Quisque ut dolor erat.</li>
                  </ul>
                </div>
              )}
              <p
                onClick={() => handleClick()}
                className={`border border-b-2 flex justify-between items-center w-full px-5 py-2 cursor-pointer rounded ${
                  clicked ? "bg-btnColor text-white h-fit" : "font-medium"
                }`}
              >
                Suspendisse ultrices pharetra libero sed interdum.{" "}
                <span className={`right-2 text-2xl ${clicked?"":"text-gray-500"}`}>{value}</span>
              </p>
              {clicked && (
                <div className="px-5 py-2 text-start w-full border border-b-2 shadow-lg rounded font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  ea inventore, distinctio quas odit eligendi. Consequuntur hic
                  iure officia enim, repellat provident ut iste in optio totam!
                  In omnis modi aspernatur aut autem voluptate dolore ratione.
                  Distinctio excepturi harum odio quia, deleniti fuga? A
                  mollitia fugit aliquid atque aperiam laborum!
                  <ul className="list-disc px-10 py-3 gap-1 font-light">
                    <li>Vivamus sed est non arcu porta aliquet et vitae nulla.</li>
                    <li>Integer et lacus vitae justo fermentum rutrum. In nec ultrices massa.</li>
                    <li>Proin blandit nunc risus, at semper turpis sagittis nec.</li>
                    <li>Quisque ut dolor erat.</li>
                  </ul>
                </div>
              )}
              <p
                onClick={() => handleClick()}
                className={`border border-b-2 flex justify-between items-center w-full px-5 py-2 cursor-pointer rounded ${
                  clicked ? "bg-btnColor text-white h-fit" : "font-medium"
                }`}
              >
                Suspendisse ultrices pharetra libero sed interdum.{" "}
                <span className={`right-2 text-2xl ${clicked?"":"text-gray-500"}`}>{value}</span>
              </p>
              {clicked && (
                <div className="px-5 py-2 text-start w-full border border-b-2 shadow-lg rounded font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  ea inventore, distinctio quas odit eligendi. Consequuntur hic
                  iure officia enim, repellat provident ut iste in optio totam!
                  In omnis modi aspernatur aut autem voluptate dolore ratione.
                  Distinctio excepturi harum odio quia, deleniti fuga? A
                  mollitia fugit aliquid atque aperiam laborum!
                  <ul className="list-disc px-10 py-3 gap-1 font-light">
                    <li>Vivamus sed est non arcu porta aliquet et vitae nulla.</li>
                    <li>Integer et lacus vitae justo fermentum rutrum. In nec ultrices massa.</li>
                    <li>Proin blandit nunc risus, at semper turpis sagittis nec.</li>
                    <li>Quisque ut dolor erat.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          {/*-------Right Div-------*/}
          <div className="bg-[#FBF4CE] px-6 py-2 mt-16 h-fit w-full lg:w-1/2 rounded">
            <p className="font-medium mt-5 mb-1">Don't find your answer, Ask for support.</p>
            <p className="text-base font-light leading-none mb-5">Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis primis in faucibu raesent eget sem purus.</p>
            <form
            className="flex flex-col gap-3"
             action="#">
              <input className="h-12 px-5 rounded border border-b-2" type="email" placeholder="Email address"/>
              <input className="h-12 px-5 rounded border border-b-2" type="text" placeholder="Subject" />
              <textarea className="h-24 px-5 rounded border border-b-2 mb-5" name="FaqMessage" id="FaqMessage" placeholder="Message(Optional)"/> 
            </form>
            <button className="flex  items-center gap-2 border bg-btnColor px-3 py-2 text-white rounded hover:scale-105 transition-all duration-200">SEND MESSAGE <FaArrowRight/> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQS;

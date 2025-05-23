import React from "react";
import NewsCard from "../NewsCard";
import { LatestNewsData } from "../../assets/assetsHome";

const LatestNews = () => {
  return (
    <div>
      <div className="flex flex-col">
        {/*------------------Latest News-------------------*/}
        <div className="flex justify-center items-center">
          <p className="text-2xl font-medium mb-5">Latest News</p>
        </div>
        {/*------------------Latest News-------------------*/}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 px-5 lg:px-0 gap-5">
            {
              LatestNewsData.length>0 && LatestNewsData.map((item,index)=>(
                <NewsCard key={index} image={item.image} author={item.author} date={item.date} comment={item.comment} title={item.title} description={item.description}/>
              ))
            }
        </div>
      </div>
    </div>
  );
};

export default LatestNews;

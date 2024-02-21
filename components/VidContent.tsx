import React from "react";

const VidContent = () => {
  return (
    <div className="w-[90%] p-10 z-[20] flex items-center">
      <div className="w-full flex flex-col md:flex-row gap-20 mt-24 items-center">
        <div className="flex flex-col gap-6 mb-6">
          <h1 className="text-6xl text-[#FFD700]">My Hobby</h1>
          <p className="text-lg max-w-[600px] text-gray-400">
             My favourite ficitional universe Intro! Even though this video is outdated due to the new official introduction from the Gams Workshop, it stills tells you how you are going to enjoy this rather expensive hobby. 
          </p>
        </div>
        <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/cy4CJ4F-epA?si=l3UT1avUZDMUTTYe" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; allowfullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
        </iframe>
      </div>
    </div>
  );
};

export default VidContent;

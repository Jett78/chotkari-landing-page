import React from "react";

const MainContent = () => {
  return (
    <main className="grid justify-center -mt-[10em]">
      <button className="w-[120px] h-30px mx-auto border rounded-2xl text-gray-500 text-[14px] z-50">
        Available on
      </button>
      <div className="flex justify-center gap-2 mt-4 z-50">
        <img src="./image 28.png" alt="icon" />
        <img src="./image 30.png" alt="icon" />
      </div>

      <div className="relative z-50">
        <img src="./Next Big Wave.png" alt="text" className="mt-10" />
        <div className="text-center absolute top-20 left-72 bg-transparent ">
          <img src="./Logo text.png" alt="logo" className="w-80 mx-auto" />
          <p className="py-2 text-gray-400">
            is the <span className="text-[#C37F00]">Future</span> on How You Can
            Consume News
          </p>
          <button className="mt-10 w-[240px] h-[40px] border rounded-2xl text-gray-400">
            learn more <span className="text-gray-500">about us</span>
          </button>
        </div>
      </div>

      <div className="relative flex items-center mx-auto mt-60 bg-[#001C2F] rounded-full h-[750px] w-[750px]">
        <img src="./carousel-app-screens.png" alt="carouselimg" className="carousel" />
        <div className="absolute top-[2em] -left-[16em]">
            <div className="flex items-center gap-80">
            <img src="./benefit-03/benefit-03.png" alt="benefit" />
                <img src="./benefit-04/benefit-04.png" alt="benefit" />
            </div>
        </div>
        
        <div className="absolute top-[35em] -left-[12em]">
            <div className="flex items-center gap-80">
            <img src="./benefit-02/benefit-02.png" alt="benefit" />
                <img src="./benefit-01/benefit-01.png" alt="benefit" />
            </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;

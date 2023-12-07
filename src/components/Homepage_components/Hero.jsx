import React from "react";
import heroImage from "../../assets/images/hero-image.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container mx-auto lg:w-4/5 xl:w-3/4 px-6 md:px-1 flex md:flex-row flex-col-reverse items-center ">
      <section className="flex md:w-1/2 w-full flex-col gap-2">
        <h1 className="md:text-[60px] text-[30px] font-bold md:font-bold  py-8 tracking-wide">One Step <br />
        Closer To Your <br />
        <span className="text-[#7E90FE]">Dream Job</span>
        </h1>
        <div className="md:pe-20  ps-1 pe-3 text-justify leading-normal">
        <p className="text-base leading-8 tracking-wide">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
        </div>
       <div className="flex justify-center md:justify-start mt-4 ms-1">
         <button className="button-style-1">
          <Link to="/">Get Started</Link>
         </button>
       </div>
      </section>
      <section
        className="md:w-1/2 w-full"
      >
        <img src={heroImage} alt="banner-img" />
      </section>
    </div>
  );
};

export default Hero;

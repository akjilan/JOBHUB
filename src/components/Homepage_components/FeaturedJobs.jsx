import React from "react";
import jobListings from "../../constants/FeaturedJobs";
import FeaturedPost from "../Utils/FeaturedPost";
import { Link } from "react-router-dom";

const FeaturedJobs = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const firstFourJobs = jobListings.slice(0, 4);
  return (
    <div className="md:my-40 my-16 container mx-auto px-3 ">
      <section className="container mx-auto px-5">
        <h1 className="font-bold text-2xl md:text-5xl text-center text-[#1A1919] leading-10">
          Featured Jobs
        </h1>
        <p className="text-center text-[#1A1919] md:mt-8 mt-3 ">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </section>
      <section className="container mx-auto  grid grid-cols-1  md:grid-cols-2 lg:w-4/5 gap-6 xl:w-3/4 py-10 mt-8">
        {firstFourJobs.map((job) => (
          <FeaturedPost job={job}></FeaturedPost>
        ))}

      </section>
        <div className="flex justify-center  md:mt-3 mt-2">
          <button className="button-style-1">
            <Link onClick={handleScrollToTop} to="/alljobs">
            See All Jobs
            </Link>
          </button>
        </div>
    </div>
  );
};

export default FeaturedJobs;

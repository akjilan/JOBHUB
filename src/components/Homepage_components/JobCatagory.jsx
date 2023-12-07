import React from "react";
import JobPost from "../Utils/JobPost";
import jobCategories from "../../constants/jobCategories";

const JobCatagory = () => {
    const firstFourCategories = jobCategories.slice(0, 4);
      
  return (
    <div className="md:my-40 my-16 container mx-auto px-3 ">
      <section className="container mx-auto px-5">
        <h1 className="font-bold text-2xl md:text-5xl text-center text-[#1A1919] leading-10">
          Job Category List
        </h1>
        <p className="text-center text-[#1A1919] md:mt-8 mt-3 ">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </section>
      <section className="container mx-auto  grid grid-cols-2  md:grid-cols-4 lg:w-4/5 gap-6 xl:w-3/4 py-10 mt-8">
        {
            
            firstFourCategories.map(category=><JobPost category={category} ></JobPost>)
        }
      </section>
    </div>
  );
};

export default JobCatagory;

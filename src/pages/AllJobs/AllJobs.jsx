import React from "react";
import jobListings from "../../constants/FeaturedJobs";
import FeaturedPost from "../../components/Utils/FeaturedPost";
import { Link } from "react-router-dom";


const Alljobs = () => {

  return (
    <div className="md:my-8 container mx-auto px-3 ">
      <section className="container mx-auto px-5">
        <h1 className="font-bold text-2xl md:text-3xl text-center text-[#1A1919] leading-4">
        All Jobs - Apply Now !
        </h1>
        <p className="text-center text-[#1A1919] md:mt-4 mt-3 ">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </section>
      
      <section className="container mx-auto  grid grid-cols-1  md:grid-cols-2 lg:w-4/5 gap-6 xl:w-3/4 py-77 mt-8">
        {jobListings.map((job) => (
         <FeaturedPost job={job}></FeaturedPost>
        ))}

      </section>
        <div className="flex justify-center  md:mt-3 mt-2">
        <button className="button-style-1 mr-2">
            <Link onClick={()=>window.history.go(-1)}>Go Back</Link>
          </button>
        <button className="button-style-1">
            <Link to="/appliedJobs">Applied Jobs</Link>
          </button>
        </div>
    </div>
  );
};

export default Alljobs;

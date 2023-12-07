import React from "react";
import Hero from "../../components/Homepage_components/Hero";
import JobCatagory from "../../components/Homepage_components/JobCatagory";
import FeaturedJobs from "../../components/Homepage_components/FeaturedJobs";

const Homepage = () => {
  return (
    <>
      <Hero></Hero>
      <JobCatagory></JobCatagory>
      <FeaturedJobs></FeaturedJobs>
    </>
  );
};

export default Homepage;

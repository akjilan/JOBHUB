import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import vector from "../../assets/images/Vector.png";
import location from "../../assets/images/smallIcons/location.png";
import icon2 from "../../assets/images/smallIcons/salary.png";
import jobListings from "../../constants/FeaturedJobs";
import { Dialog } from '@headlessui/react'
const JobDetails = () => {
  const [buttonText, setButtonText] = useState("Apply Now");

  const { id } = useParams();
  const selectedJob = jobListings.find((job) => job.id === Number(id));

  const handleAddToCart = (selectedJob) => {
    const savedJobsString = localStorage.getItem("savedJobs");
    const existingData = savedJobsString ? JSON.parse(savedJobsString) : [];

    const isJobAlreadySaved = existingData.some(
      (savedJob) => savedJob.id === selectedJob.id
    );
    if (isJobAlreadySaved) {
      alert("You already applied for this job .");
    } else {
      // Add the current job to the array
      existingData.push(selectedJob);
      // Save the updated array back to local storage
      localStorage.setItem("savedJobs", JSON.stringify(existingData));

      alert("Job added to favorites!");

      setButtonText("Succesfully Applied !");
    }
  };

  // console.log(selectedJob);
  const {
    title,
    company,
    location,
    salary,
    jobDescription,
    jobResponsibilities,
    fullAddress,
    experience,
    educationalRequirements,
    phoneNumber,
    email,
  } = selectedJob;
  return (
    <>
      <div className="flex w-full">
        <img className="w-40 h-auto" src={vector} alt="" />
      </div>
      <div className="flex justify-center md:mt-5 mt-2 text-lg uppercase tracking-wide font-bold ">
        <h2 className="font-bold text-base pt-3 ">
          {title} <span className="lowercase font-semibold">at</span> {company}
        </h2>
      </div>
      <div className="container pt-4 md:pt-12 mx-auto lg:w-4/5 flex md:flex-row flex-co items-center">
        <div className="flex flex-col gap-3 font-semibold leading-7 tracking-wide md:pe-12 md:p-12 text-[#1A1919] w-full md:w-2/3">
          <p>
            <span className="font-bold">Job Description:</span> {jobDescription}
          </p>
          <p>
            <span className="font-bold">Job Responsibilities:</span>{" "}
            {jobResponsibilities}
          </p>
          <p>
            <span className="font-bold">Educational Requirements:</span>{" "}
            {educationalRequirements}
          </p>
          <p>
            <span className="font-bold"> Experience: </span>
            {experience}
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <div className=" bg-[#D9D9D9]  text-[#1A1919] rounded md:p-7 p-2 flex flex-col gap-2">
            <h3 className="text-lg font-bold  text-[#1A1919]">Job Details</h3>
            <hr className="border-t-2 border-[#7E90FE] w-4/5 flex justify-center my-2 " />
            <div className="flex gap-2 items-center">
              <img src={icon2} alt="" />
              <p>
                <span className="font-bold">Salary:</span> {salary}{" "}
                <span>(per year)</span>
              </p>
            </div>
            {/* <h2 className="font-bold text-base ">
              {title} at {company}
            </h2> */}
            <h3 className="text-lg font-bold  text-[#1A1919]">
              Contact Information
            </h3>
            <hr className="border-t-2 border-[#7E90FE] w-4/5 flex justify-center my-2 " />
            <p>
              <span className="Phone Number: font-bold">Phone Number:</span>{" "}
              {phoneNumber}
            </p>
            <p>
              <span className="font-bold  text-[#1A1919]"> Email:</span> {email}
            </p>
            <p>
              <span className="font-bold  text-[#1A1919]">Full Address: </span>
              {fullAddress}
            </p>
          </div>

          <div className="mt-4 w-full flex justify-center">
            <button
              className="button-style-1 flex w-full justify-center items-center"
              onClick={() => handleAddToCart(selectedJob)}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
      <div className="my-4 flex justify-center pb-8">
        <button
          onClick={() => window.history.go(-1)}
          className="button-style-1 mr-2"
        >
          Go Back
        </button>
        <button className="button-style-1">
          <Link to="/appliedJobs">Applied Jobs</Link>
        </button>
      </div>
    </>
  );
};

export default JobDetails;

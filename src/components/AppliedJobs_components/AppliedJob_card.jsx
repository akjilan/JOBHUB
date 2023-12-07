import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../../assets/images/smallIcons/location.png";
import icon2 from "../../assets/images/smallIcons/salary.png";

const AppliedJob_card = ({ jobs }) => {
  //   console.log(jobs);
  return (
    <div className="p-5 border-gray-400 shadow-lg container w-4/5 flex justify-center items-center ">
      <section className="bg-[#F4F4F4] rounded h-20 w-25 flex justify-center items-center text-center px-5">
        <img className="w-20 h-auto" src={jobs.logo} alt="" />
      </section>
      <section className="flex justify-between flex-grow ms-2 md:ms-7 xl:ms-16">
        <div className="">
          <h1 className="text-left font-bold text-base">{jobs.title}</h1>
          <h4 className="">{jobs.company}</h4>
          <div className="mt-4 flex gap-y-4">
            <h6 className="w-20  flex justify-center border border-gray-400 shadow-sm rounded py-2 font-bold text-sm text-[#7E90FE] mr-2">
              {jobs.remote == undefined
                ? "Unknown"
                : jobs.remote
                ? "Remote"
                : "Onsite"}
            </h6>
            <h6 className="w-20 flex justify-center border border-gray-400 shadow-sm rounded py-2 font-bold text-sm text-[#7E90FE]">
              Full Time
            </h6>
          </div>
          <div className="flex mt-2">
            <div className="flex items-center ">
              <img src={icon1} alt="" />
              <h4 className="text-sm font-semibold text-[#474747]">
                {jobs.location}
              </h4>
            </div>
            <div className="flex gap-1 ps-3 items-center ">
              <img src={icon2} alt="" />
              <h4 className="text-xs md:text-sm font-semibold text-[#474747]">
                {jobs.salary}
              </h4>
            </div>
          </div>
        </div>
        <div className="text-center mt-2 flex items-center">
          <button className="button-style-1">
            {" "}
            <Link to={`/job/${jobs.id}`}>See Details</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default AppliedJob_card;

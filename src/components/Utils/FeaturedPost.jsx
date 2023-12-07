import React from "react";
import icon1 from "../../assets/images/smallIcons/location.png";
import icon2 from "../../assets/images/smallIcons/salary.png";
import JobDetails from "../Homepage_components/JobDetails";
import { Link } from "react-router-dom";

const FeaturedPost = ({ job }) => {

    const showDetails = (id)=>{
        console.log(id)
    }

  return (
    <div className="md:p-10 p-3 border border-gray-200  shadow rounded ">
      <img className="md:mb-8 mb-3" src={job.logo} alt="" />
      <h3 className="mb-2 font-bold text-xl text-[#474747]">{job.title}</h3>
      <h5 className="font-semibold text-lg text-[#474747] ">{job.company}</h5>
      <div className="mt-4 flex gap-4">
        <h6 className="w-20  flex justify-center border border-gray-400 shadow-sm rounded py-2 font-bold text-sm text-[#7E90FE]">
          {
           job.remote==undefined?'Unknown':job.remote?'Remote':'Onsite'

          }
        </h6>
        <h6 className="w-20  flex justify-center border border-gray-400 shadow-sm rounded py-2 font-bold text-sm text-[#7E90FE]">
          Full Time
        </h6>

      </div>
      <div className="mt-4 md:me-20 gap-2 grid grid-cols-2">
        <div className="flex gap-1 ps-1 items-center ">
          <img src={icon1} alt="" />
          <h4 className="text-sm font-semibold text-[#474747]">{job.location}</h4>
        </div>
        <div className="flex gap-1 ps-3 items-center ">
          <img src={icon2} alt="" />
          <h4 className="text-xs md:text-sm font-semibold text-[#474747]">{job.salary}</h4>
        </div>
        <div className="flex justify-center md:justify-start md:mt-4 mt-2">
          <button className="button-style-1">  <Link to={`/job/${job.id}`}>See Details</Link></button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;

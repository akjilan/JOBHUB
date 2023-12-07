import React from "react";
import AppliedJob_card from "../../components/AppliedJobs_components/AppliedJob_card";

const AppliedJobs = () => {
  const savedJobString = localStorage.getItem("savedJobs");
  const existingData = savedJobString?JSON.parse(savedJobString) : [];


  console.log(savedJobString);
  return (

      <div className="flex  flex-col justify-center items-center mx-auto my-4 lg:my-12"> 
        {existingData.map((jobs) => (
          <AppliedJob_card jobs={jobs}></AppliedJob_card>
        ))}
      </div>

  );
};

export default AppliedJobs;

import React, { useEffect, useState } from "react";

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const data = [
  { name: "Page A", uv: 400, pv: 2100, amt: 2400 },
  { name: "Page B", uv: 600, pv: 2400, amt: 2800 },
  { name: "Page C", uv: 200, pv: 2700, amt: 2900 },
];

// useEffect(() => {
//   fetch("http://localhost:5001/catagories")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }, []);
const RenderLineChart = () => {
 

  return (
    <>
      <div className="flex flex-col items-center justify-center my-auto mt-6 mb-2 ">
        <div className="text-lg font-bold flex justify-center mb-2 lg:mb-8">
          This is stastical line chart for various contents
        </div>
        <div className=" mb-3 lg:mb-20">
          <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </div>
   
      </div>
    </>
  );
};

export default RenderLineChart;

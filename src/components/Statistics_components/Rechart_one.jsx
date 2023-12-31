import React from 'react'

const renderLineChart = (
    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" tick={renderCustomAxisTick} />
      <YAxis />
      <Tooltip />
    </LineChart>
  );

export default renderLineChart
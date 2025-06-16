"use client"
import React from "react";

const Client = () => {
  const [count, setCount] = React.useState(0);
  return <div  className="text-2xl p-8 m-20 bg-red-600" onClick={() => setCount(count + 1)}>{count}</div>;
};

export default Client;

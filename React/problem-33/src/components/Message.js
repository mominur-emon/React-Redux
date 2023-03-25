import React, { memo, useMemo } from "react";

const Message = ({ msgOfCount, onHandleInc }) => {
  console.log("message rendering");

  const calculatedNum = useMemo(() => {
    let number = 0;
    for (let i = 0; i < 5000000000; i++) {
      number++;
    }
    return number;
  }, []);

  return (
    <div>
      <h2>Number: {calculatedNum}</h2>
      <p>send {msgOfCount} message</p>
      <button onClick={onHandleInc}>Increment Message number</button>
    </div>
  );
};

export default memo(Message);

import React, { memo } from "react";

const Message = ({ msgOfCount, onHandleInc }) => {
  console.log("message rendering");
  return (
    <div>
      <p>send {msgOfCount} message</p>
      <button onClick={onHandleInc}>Increment Message number</button>
    </div>
  );
};

export default memo(Message);

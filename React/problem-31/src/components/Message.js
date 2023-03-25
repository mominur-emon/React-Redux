import React, { memo } from "react";

const Message = ({ msgOfCount }) => {
  console.log("message rendering");
  return (
    <div>
      <p>send {msgOfCount} message</p>
    </div>
  );
};

export default memo(Message);
//reference memo : https://dmitripavlutin.com/use-react-memo-wisely/

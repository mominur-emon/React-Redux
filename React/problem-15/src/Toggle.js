import React, { useState } from "react";
export default function Toggle() {
  const [toggle, setToggle] = useState(true);
  return (
    <div style={{ margin: "1rem", backgroundColor: "blue", padding: "1rem" }}>
      {toggle && ( //short circuit method use
        <p>
          No dolores sed eirmod lorem ipsum et, est dolor ea diam rebum et, sit
          sed dolores takimata gubergren magna sea.Voluptua ea lorem aliquyam
          elitr elitr sadipscing elitr, ipsum ut dolore takimata no amet,
          takimata erat et ipsum sea duo,.
        </p>
      )}
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "hide" : "show"}
        </button>
      </div>
    </div>
  );
}

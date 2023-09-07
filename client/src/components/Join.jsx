import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./join.css";

export default function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>

        <div>
          <input
            className="joinInput"
            type="text"
            placeholder=""
            onChange={""}
          />
        </div>

        <div>
          <input
            className="joinInput"
            type="text"
            placeholder=""
            onChange={""}
          />
        </div>
      </div>
    </div>
  );
}

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
            placeholder="Name"
            onChange={(e) => {
              (e) => {
                setName(e.target.value);
              };
            }}
          />
        </div>

        <div>
          <input
            className="joinInput mt-20"
            type="text"
            placeholder="Room"
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          />
        </div>

        <Link>
          <button className="button mt-20" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}

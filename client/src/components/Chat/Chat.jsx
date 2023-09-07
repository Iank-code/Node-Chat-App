import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import io from "socket.io-client";
import "./chat.css";

export default function Chat() {
  const location = useLocation();


  useEffect(() => {
    const data = queryString.parse(location.search);

    console.log(location.search);
    console.log(data);
  }, []);
  return <div>Chat</div>;
}

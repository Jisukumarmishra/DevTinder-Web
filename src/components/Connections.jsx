import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";

const Connections = () => {
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/connections", {
        withCredentials: true,
      });
    } catch (err) {
      // handle erroe case
    }
  };
  return <div>// fetch the data</div>;
};

export default Connections;

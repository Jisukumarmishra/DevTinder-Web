import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionsSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log(res.data.data);
      dispatch(addConnections(res.data.data));
    } catch (err) {
      // handle erroe case
    }
  };
  // call the function(fetchConnections) ones time when page is load
  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0) return <h1>No Connections Found </h1>;

  return (
    <div className=" flex justify-center my-10">
      <h1 className="text-bold text-2xl">Connections</h1>
      {/* Show the detais of the connections*/}
      {connections.map((connections) => (
        <div></div>
      ))}
    </div>
  );
};

export default Connections;

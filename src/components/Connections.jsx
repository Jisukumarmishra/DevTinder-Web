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
    <div className=" test-centre justify-center my-10">
      <h1 className="text-bold text-2xl">Connections</h1>
      {/* Show the detais of the connections*/}
      {connections.map((connections) => {
        const { firstName, lastName, age, gender, photoUrl, skills, about } =
          connections;
        return (
          <div flex className="m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto">
            <div>
            <img alt="photo" className="w-20 h-20 rounded-full" src={photoUrl} /> <div/>
            <div className="text-left mx-4"><h2 className="font-bold text-xl">{firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
              </div>           
          </div>
        );
      })}
    </div>
  );
};

export default Connections;

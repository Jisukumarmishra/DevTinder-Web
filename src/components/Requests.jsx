import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestsSlice";

const Requests = () => {
  const dispatch = useDispatch();
  // now nake an api call and get the data

  // to get the data form the store we use useSelector
  const requests = useSelector((store) => store.requests); // get the all the requests form the storestore => store.requests

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });

      dispatch(addRequests(res.data.data));
    } catch (err) {
      //
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;

  if (requests.length === 0) return <h1>no request found</h1>;

  return (
    <div className="min-h-screen py-10">
      <h1 className="text-4xl font-bold text-center mb-8"> Pending Requests</h1>

      <div className="flex flex-col gap-6">
        {requests.map((request) => {
          const { _id, firstName, lastName, photoUrl, age, gender, about } =
            request.fromUserId;

          return (
            <div
              key={_id}
              className="w-11/12 md:w-2/3 lg:w-1/2 mx-auto bg-base-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6"
            >
              <div className="flex items-center justify-between">
                {/* Left Side */}
                <div className="flex items-center gap-5">
                  <img
                    src={photoUrl}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary"
                  />

                  <div>
                    <h2 className="text-2xl font-bold">
                      {firstName} {lastName}
                    </h2>

                    {age && gender && (
                      <p className="text-gray-400">
                        {age} years • {gender}
                      </p>
                    )}

                    <p className="mt-2 text-gray-300 max-w-md">{about}</p>
                  </div>
                </div>

                {/* Right Side */}
                <div className="flex flex-col gap-3">
                  <button className="btn btn-success px-8">Accept</button>

                  <button className="btn btn-outline btn-error px-8">
                    Reject
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Requests;

import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addRequest } from "../utils/requestsSlice";

const Request = () => {
  // now nake an api call and get the data

  const fetchRequests = async () => {
    const dispatch = useDispatch();
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });

      dispatch(addRequest(res.data.data));
    } catch (err) {
      //
    }
  };
  return <div>Request</div>;
};

export default Request;

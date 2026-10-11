import React from "react";

const Premium = () => {
  return (
    <div className="m-10">
      <div className="flex w-full">
        <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
          <h1 className="font-bold text-3xl">Silver Member Ship</h1>
          <ul>
            <li> - Chat With Other People </li>
            <li> - 100 Connections Request Per Day</li>
            <li> - Blue Ticks</li>
            <li> - 3 Months</li>
          </ul>
          <button className="btn btn-primary">Buy Silver</button>
        </div>
        <div className="divider divider-horizontal">OR</div>
        <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
          <h1 className=" font-bold text-3xl">Gold Member Ship</h1>
          <ul>
            <li>- Chat With Others people</li>
            <li>- Access To Infinite Connections Request</li>
            <li>- Blue Ticks</li>
            <li>- 6 Months</li>
          </ul>
          <button className="btn btn-secondary">Buy Golden</button>
        </div>
      </div>
    </div>
  );
};

export default Premium;

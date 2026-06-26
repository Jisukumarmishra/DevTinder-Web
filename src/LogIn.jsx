import axios from "axios";
import { useState } from "react";

const LogIn = () => {
  const [emailId, setEmailId] = useState("tony@gmail.com");
  const [passWord, setPassWord] = useState("Tony@123");

  const handleLogin = async () => {
    console.log("Buttom Clicked");
     try {
      const res = await axios.post("http://localhost:3000/login", {
      emailId,
      passWord
    },
    {withCredentials : true});
   }
   catch (err) {
    console.error(err);
   }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title">Login!</h2>

          {/* Email */}
          <label className="input validator mb-1">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>

            <input
              type="email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              placeholder="mail@site.com"
              required
            />
          </label>

          <p className="validator-hint hidden mb-2">
            Enter valid email address
          </p>

          {/* Password */}
          <label className="input validator mt-2">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>

            <input
              type="password"
              value={passWord}
              onChange={(e) => setPassWord(e.target.value)}
              placeholder="Password"
              required
              minLength={8}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
          </label>

          <p className="validator-hint hidden">
            Must be more than 8 characters, including
            <br />
            At least one number
            <br />
            At least one lowercase letter
            <br />
            At least one uppercase letter
          </p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary my-3" onClick={handleLogin}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const LogIn = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // to create a switch we use a state varraible
  const [isLogInForm, setIsLogInForm] = useState(true);
  const [emailId, setEmailId] = useState("");
  const [passWord, setPassWord] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          passWord,
        },
        { withCredentials: true },
      );
      console.log(res.data);
      dispatch(addUser(res.data));
      navigate("/");
    } catch (err) {
      setError(err?.response.data || "Something Went Wrong");
      console.error(err.message);
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup" + { firstName, lastName, emailId, passWord },
        { withCredentials: true },
      );
      dispatch(addUser(res.data));
      navigate("/profile");
    } catch (err) {
      setError(err?.response.data || "Something Went Wrong");
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <h2
            className="card-title"
            onClick={isLogInForm ? handleLogin : handleSignUp}
          >
            {isLogInForm ? "Login!" : "Sign Up!"}
          </h2>

          {!isLogInForm && (
            <>
              <label className="input validator mb-1">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" />
                  </g>
                </svg>

                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="FirstName"
                  required
                />
              </label>
              <label className="input validator mb-1">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" />
                  </g>
                </svg>

                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="LastName"
                  required
                />
              </label>{" "}
            </>
          )}

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
            <p className="text-red-500 p-4">{error}</p>
            <button
              className="btn btn-primary my-3"
              onClick={isLogInForm ? handleLogin : handleSignUp}
            >
              Submit
            </button>
          </div>
          <p
            onClick={() => setIsLogInForm((value) => !value)}
            className="cursor-pointer m-auto"
          >
            {isLogInForm
              ? "New User ?  Sign Up Here"
              : "Existing User : LogIn Here"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

import React, { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstname] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [about, setabout] = useState(user.about);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const saveProfile = async () => {
    // before saving the profile clear the error
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, photoUrl, age, gender, about },
        { withCredentials: true },
      );
      // once my profile is save (above code)
      // now update my store withh the new profile means dispatch an action addUser
      dispatch(addUser(res?.data?.data)); // now addUser take the data that we are getting formm the response
      setShowToast(true);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <>
      <div className="flex justify-center my-10 mx-75">
        {/* Edit Profile Card */}
        <div className="flex justify-center mx-10 bg-base-300 w-96">
          <div className="card-body">
            <h2 className="card-title justify-center text-2xl mb-4">
              Edit Profile
            </h2>

            {/* First Name */}
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered w-full mb-3"
              value={firstName}
              onChange={(e) => setFirstname(e.target.value)}
            />

            {/* Last Name */}
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered w-full mb-3"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            {/* Photo URL */}
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered w-full mb-3"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />

            {/* Age */}
            <input
              type="number"
              placeholder="Age"
              className="input input-bordered w-full mb-3"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />

            {/* Gender */}
            <select
              className="select select-bordered w-full mb-3"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            {/* About */}
            <textarea
              className="textarea textarea-bordered w-full mb-3"
              placeholder="About Yourself"
              value={about}
              onChange={(e) => setabout(e.target.value)}
            ></textarea>

            {error && <p className="text-red-500">{error}</p>}

            <button className="btn btn-primary mt-3" onClick={saveProfile}>
              Save Profile
            </button>
          </div>
        </div>

        {/* Live Preview */}
        <UserCard
          user={{
            firstName,
            lastName,
            photoUrl,
            age,
            gender,
            about,
          }}
        />
      </div>
      <div className="toast toast-top toast-center">
        <div className="alert alert-success">
          <span>Message sent successfully.</span>
        </div>
      </div>
    </>
  );
};

export default EditProfile;

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      // now clear the data form the redux store and redirect to the login page after onClick on the logout
      // Dispatch an Action removeUser That Action Create In userSlice
      dispatch(removeUser());
      return navigate("/login");
    } catch (err) {
      // Error Logic May Be Redirect To The Error Page
    }
  };

  return (
    <div className="navbar bg-base-300 shadow-sm px-8">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          DevTinder
        </Link>
      </div>

      {user && (
        <div className="flex items-center gap-4">
          <p className="font-medium">Welcome, {user.firstName}</p>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-12 rounded-full ring ring-primary ring-offset-2">
                <img alt="User Photo" src={user.photoUrl} />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>

              <li>
                <Link to="/Connections">Connections</Link>
              </li>

              <li>
                <Link to="/requests">Requests</Link>
              </li>

              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;

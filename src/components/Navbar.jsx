// toast
import { toast } from "react-hot-toast";

// firebase
import { auth } from "../firebase/firebaseConfig"
import { signOut } from "firebase/auth";

// redux
import { useDispatch } from "react-redux";
import { logout } from "../app/userSlice";

function Navbar() {
  const dispatch = useDispatch()
  const logOutProfile = async () => {
    try {
      await signOut(auth);
      toast.success("See you soon");
      dispatch(logout())
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="container">
      <header className="bg-base-200 ">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-xl dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li className="text-lg font-normal"><a>Home</a></li>
                <li className="text-lg font-normal"><a>About</a></li>
                <li className="text-lg font-normal"><a>Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost text-xl">Ashraf | Todos App</a>
          </div>
          <div className="navbar-end">
            <button onClick={logOutProfile} className="btn flex items-center btn-error text-white btn-md ">
              Log out
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 20H6C4.89543 20 4 19.1046 4 18L4 6C4 4.89543 4.89543 4 6 4H14M10 12H21M21 12L18 15M21 12L18 9" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;

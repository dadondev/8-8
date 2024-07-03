//rrd imports
import {
  createBrowserRouter,
  Navigate,
  Router,
  RouterProvider,
} from "react-router-dom";

//pages
import { Home, Login, Register } from "./pages";

//layouts
import MainLayout from "./layouts/MainLayout";

// components
import { ProtectedRoutes } from "./components";

//redux
import { useSelector, useDispatch } from "react-redux";
import { login, isAuthChange } from "./app/userSlice";

// actions
import { action as LoginAction } from "./pages/Login";
import { action as RegisterAction } from "./pages/Register";
import { useEffect } from "react";
import { action as HomeAction } from "./pages/Home"

// firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";

function App() {
  const dispatch = useDispatch();
  const { user, isAuthState } = useSelector((state) => state.user);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
          action: HomeAction,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
      action: LoginAction,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
      action: RegisterAction,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(login(user));
      dispatch(isAuthChange());
    });
  }, []);

  return <> {isAuthState && <RouterProvider router={routes} />}
  </>
}

export default App;

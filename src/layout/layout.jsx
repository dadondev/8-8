import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "../general/components/header";
import Home from "../pages/home/home";
import { Provider } from "react-redux";
import store from "../redux/store";
import Dashboard from "../pages/dashboard/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home></Home>
      </>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <>
        <Header />
        <Dashboard />
      </>
    ),
  },
]);

const Layout = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
};

export default Layout;

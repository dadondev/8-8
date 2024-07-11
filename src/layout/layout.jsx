
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Header from "../general/components/header"
import Home from "../pages/home/home"
import { Provider } from "react-redux"
import store from "../redux/store"

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Header />
      <Home></Home>
    </>
  }
])


const Layout = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  )
}

export default Layout
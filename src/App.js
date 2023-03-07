import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';
import HowItWorks from './pages/HowItWorks';
import WhyChooseUs from "./pages/WhyChooseUs"
import Connect from "./pages/Connect"
import Cart from './pages/Cart';
import Checkout from "./pages/CheckOut"
import Login from './pages/Login';
import Signup from './pages/Signup';

import UserLayout from "./components/Layout/UserLayout"
import Profile from "./pages/Profile/Profile"
import UserOrders from "./pages/Profile/UserOrders"
import UserSettings from "./pages/Profile/UserSettings"

import DashboardLayout from "./components/Layout/DashboardLayout"
import Dashboard from "./pages/Dashboard/Dashboard"
import Orders from "./pages/Dashboard/Orders"
import AdminVegitables from "./pages/Dashboard/AdminVegitables"
import AdminBoxes from "./pages/Dashboard/AdminBoxes"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/shop",
    element: <Shop />
  },
  {
    path: "/howitworks",
    element: <HowItWorks />
  },
  {
    path: "/whychooseus",
    element: <WhyChooseUs />
  },
  {
    path: "/connect",
    element: <Connect />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/checkout",
    element: <Checkout />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/profile",
    element: <UserLayout />,
    children: [
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/profile/orders",
        element: <UserOrders />
      },
      {
        path: "/profile/settings",
        element: <UserSettings />
      },
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/dashboard/orders",
        element: <Orders />
      },
      {
        path: "/dashboard/vegitables",
        element: <AdminVegitables />
      },
      {
        path: "/dashboard/boxes",
        element: <AdminBoxes />
      },
    ]
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

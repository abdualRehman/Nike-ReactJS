import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import ComingSoon from "./Body/Coming Soon/ComingSoon";
import NewFeaturedDetails from "./Body/New & Featured/NewFeaturedDetails";
import Showcase from "./Body/Product Showcase/Showcase";
import MensDetails from "./Body/Men/MensDetails";
import StoreMap from "./Body/Find a Store/StoreMap";
import WomensDetails from "./Body/Women/Women";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/SignIn",
    element: <SignIn />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/ComingSoon",
    element: <ComingSoon />,
  },
  {
    path: "/NewFeaturedDetails",
    element: <NewFeaturedDetails />,
  },
  {
    path: "/Showcase/:id",
    element: <Showcase />,
  },
  {
    path: "/MensDetails",
    element: <MensDetails />,
  },
  {
    path: "/StoreMap",
    element: <StoreMap />,
  },
  {
    path: "/WomensDetails",
    element: <WomensDetails />,
  },
]);

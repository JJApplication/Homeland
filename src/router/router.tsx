/**
 * 路由
 */

import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../components/Home";
import Intro from "../components/Intro";
import { App } from "antd";
import About from "../components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/intro",
    element: <Intro />
  },
  {
    path: "/about",
    element: <About />
  }
]);

export default router;
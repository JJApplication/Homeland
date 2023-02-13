/**
 * 路由
 */

import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../components/Home";
import Intro from "../components/Intro";
import About from "../components/About";
import JJApplication from "../works/JJApplication";

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
  },
  {
    path: '/works/jjapplication',
    element: <JJApplication />
  }
]);

export default router;
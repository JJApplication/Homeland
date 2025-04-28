/**
 * 路由
 */

// @ts-nocheck
import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";

import { html as Mgek } from '../works/Mgek.md';
import { html as JJApplication } from '../works/JJApplication.md';
import { html as Apollo } from '../works/Apollo.md';
import { html as Fushin } from '../works/Fushin.md';
import { html as Octopus } from '../works/Octopus.md';
import { html as Sandwich } from '../works/Sandwich.md';

const NotFound = React.lazy(() => import("../pages/NotFound"));
const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const WorkLayout = React.lazy(() => import("../works/Layout"));

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: '/works/mgek',
    element: <WorkLayout name="Mgek APP" content={Mgek}></WorkLayout>
  },
  {
    path: '/works/jjapplication',
    element: <WorkLayout name="JJApplication" content={JJApplication}></WorkLayout>
  },
  {
    path: '/works/fushin',
    element: <WorkLayout name="Fushin Stone" content={Fushin}></WorkLayout>
  },
  {
    path: '/works/apollo',
    element: <WorkLayout name="Apollo" content={Apollo}></WorkLayout>
  },
  {
    path: '/works/octopus',
    element: <WorkLayout name="OctopusTree" content={Octopus}></WorkLayout>
  },
  {
    path: '/works/sandwich',
    element: <WorkLayout name="Sandwich" content={Sandwich}></WorkLayout>
  }
]);

export default router;
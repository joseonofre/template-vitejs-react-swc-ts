import { lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const LayoutMain = lazy(() => import("./layouts/LayoutMain"));
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <About />,
      }
    ],
  },
]);


export default function Routes() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<div>Carregando...</div>}
    />
  )
}
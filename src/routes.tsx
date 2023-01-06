import { lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const LayoutMain = lazy(() => import("./layouts/LayoutMain"));
const Home = lazy(() => import("./pages/Home/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {
        path: "/",
        element: <Home />,
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
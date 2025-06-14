import { createBrowserRouter, type RouteObject } from "react-router";
import { Home } from "../home";
import { ContectUs, Sunglasses, Watch, Ring, Bracelet } from "../pages";
import images from "../images/5593131.jpg";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: (
          <div
            style={{ backgroundImage: `url(${images})` }}
            className="bg-cover bg-center w-full h-full"
          ></div>
        ),
      },
      { path: "contact-us", element: <ContectUs /> },
      { path: "sunglasses", element: <Sunglasses /> },
      { path: "watch", element: <Watch /> },
      { path: "ring", element: <Ring /> },
      { path: "bracelet", element: <Bracelet /> },
    ],
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
];

const router = createBrowserRouter(routes);

export default router;

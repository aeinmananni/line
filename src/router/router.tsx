import { createBrowserRouter, type RouteObject } from "react-router";
import { Home } from "../home";
import { About } from "../pages";
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
      { path: "about", element: <About /> },
    ],
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
];

const router = createBrowserRouter(routes);

export default router;

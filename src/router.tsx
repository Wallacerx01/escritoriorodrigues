import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { Atuacao } from "./pages/atuacao";
import { Sobre } from "./pages/sobre";
import { Notfound } from "./pages/notfound";
import { Layout } from "./components/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/areadeatuação",
        element: <Atuacao />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },

      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
]);

export { router };

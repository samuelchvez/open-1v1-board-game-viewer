import { createBrowserRouter } from "react-router-dom";

import Home from "./components/screens/Home";
import Sim from "./components/screens/Sim";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/game-sim/:gameId",
    element: <Sim />,
  },
]);

export default router;

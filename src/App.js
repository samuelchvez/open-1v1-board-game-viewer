import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";

import router from "./router";
import GlobalProvider from "./components/GlobalProvider";
import ViewerSocket from "./components/ViewerSocket";

function App() {
  return (
    <StrictMode>
      <GlobalProvider>
        <ViewerSocket />
        <RouterProvider router={router} />
      </GlobalProvider>
    </StrictMode>
  );
}

export default App;

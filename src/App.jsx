import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Sidebar from "./components/Sidebar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <About />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

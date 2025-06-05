import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Sidebar from "./components/Sidebar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { Analytics } from "@vercel/analytics/react"; // e'tibor bering: /next emas, /react

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
      <div className="flex-1">
        <RouterProvider router={router} />
      </div>
      <Analytics />
    </div>
  );
};

export default App;

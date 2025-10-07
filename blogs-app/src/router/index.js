import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import BlogContent from "../pages/BlogContent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/blogs/:id",
            element: <BlogContent/>
        }
    ]
  },
]);

export default router;
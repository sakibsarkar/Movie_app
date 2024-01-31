import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import MovieDetails from "../Pages/MovieDetails/MovieDetails";
import { createBrowserRouter } from "react-router-dom";

export const route = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "/show/:id",
                element: <MovieDetails />
            }
        ]
    }
])
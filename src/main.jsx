import "aos/dist/aos.css";
import "./index.css";
import AOS from "aos";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { route } from "./Routes/Route";

// ..
AOS.init();
const quaryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={quaryClient}>
      <ParallaxProvider>
        <RouterProvider router={route} />
      </ParallaxProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)

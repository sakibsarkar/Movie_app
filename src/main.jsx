import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { route } from "./Routes/Route";

const quaryClient = new quaryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={quaryClient}>
      <RouterProvider router={route} />
    </QueryClientProvider>
  </React.StrictMode>,
)

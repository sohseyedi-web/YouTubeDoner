import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./features/api/dataSlice.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <App />
      <Toaster />
    </ApiProvider>
  </React.StrictMode>
);

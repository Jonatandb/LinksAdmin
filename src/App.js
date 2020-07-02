import React from "react";
import Links from "./components/Links";
import MainTitle from "./components/MainTitle";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="container p-4">
      <div className="row">
        <MainTitle />
        <Links />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;

import React from "react";

import "./App.css";
import MainPage from "./pages/MainPage";
import Layout from "./layout/Layout";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;

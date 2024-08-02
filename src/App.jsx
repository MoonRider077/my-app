import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout";
import HomePage from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;

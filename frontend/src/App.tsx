// src/App.jsx

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/admin/Dashboard";
import HomePage from "./components/frontend/HomePage";
import RegistrationPage from "./components/frontend/RegistrationPage";
import Layout from "./components/common/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Frontend Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="registration" element={<RegistrationPage />} />
        </Route>

        {/* Admin routes (can have their own layout later) */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}


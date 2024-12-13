import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Auth/Login";
import LoggedRoutes from "./Middleware/LoggedRoutes";
import Home from "./Views/Home";
import { AuthProvider } from "./Provider/Protected";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route element={<LoggedRoutes />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

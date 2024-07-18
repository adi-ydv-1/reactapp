import "./App.css";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import React from "react";
import Dashboard from "./Dashboard";
import Forgotpassword from "./Forgotpassword";
import Login from "./Login";
import Register from "./Register";
import ModuleTagging from "./moduleTagging";
import UserTagging from "./UserTagging";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/moduleTag" element={<ModuleTagging />} />
          <Route path="/userTag" element={<UserTagging />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDoList from "./ToDoList";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ToDoList" element={<ToDoList />} />
      </Routes>
    </BrowserRouter>
  );
}

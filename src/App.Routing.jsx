import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Roadmap from "./pages/Roadmap/roadmap";
import Interns from "./pages/Interns/Interns";
import FormModal from "./pages/Roadmap/components/AddRoadmapModal";

export default function Routing() {
  return (
    <Routes>
      <Route path="/roadmap" element={<Roadmap />}></Route>
      <Route path="/interns" element={<Interns />}></Route>
      <Route path="/edit-mentor/:id" element={<FormModal />}></Route>
    </Routes>
  );
}

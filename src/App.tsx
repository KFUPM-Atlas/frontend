import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { Box } from "@chakra-ui/react";
import { Register } from "./pages/Register";
import { EventPage } from "./pages/EventPage";
import { BrowseEvents } from "./pages/BrowseEvents";
import { Events } from "./pages/Event";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/event/:slug" element={<EventPage />} />
        <Route path="/events" element={<BrowseEvents />} />
        <Route path="/club-dashboard/event" element={<Events />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

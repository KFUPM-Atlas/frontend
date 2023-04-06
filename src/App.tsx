import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { Box } from "@chakra-ui/react";
import { Register } from "./pages/Register";
import { Events } from "./pages/Event";
import { Overview } from "./pages/Overview";
import { Requests } from "./pages/Requests";
import { ClubProfile } from "./pages/ClubProfile";

export const App: React.FC = () => {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/club/events" element={<Events />} />
          <Route path="/club/overview" element={<Overview />} />
          <Route path="/club/requests" element={<Requests />} />
          <Route path="/club/profile" element={<ClubProfile />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { Box, useMediaQuery } from "@chakra-ui/react";
import { Register } from "./pages/Register";
import { EventPage } from "./pages/EventPage";
import { BrowseEvents } from "./pages/BrowseEvents";
import { Events } from "./pages/Event";
import { Explore } from "./pages/Explore";
import { ClubPage } from "./pages/ClubPage";
import { Tickets } from "./pages/Tickets";
import { Overview } from "./pages/Overview";
import { Requests } from "./pages/Requests";
import { ClubProfile } from "./pages/ClubProfile";
import { NotSupported } from "./components/NotSupported";

export const App: React.FC = () => {
  const [isLargerThan400] = useMediaQuery("(min-width: 500px)");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/events" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/event/:slug"
          element={isLargerThan400 ? <NotSupported /> : <EventPage />}
        />
        <Route
          path="/events"
          element={isLargerThan400 ? <NotSupported /> : <BrowseEvents />}
        />
        <Route path="/club-dashboard/event" element={<Events />} />
        <Route path="/club/:id" element={<ClubPage />} />
        <Route path="/club/:id/events" element={<Events />} />
        <Route path="/club/:id/overview" element={<Overview />} />
        <Route path="/club/:id/requests" element={<Requests />} />
        <Route path="/club/:id/profile" element={<ClubProfile />} />
        <Route
          path="/explore"
          element={isLargerThan400 ? <NotSupported /> : <Explore />}
        />
        <Route
          path="/tickets"
          element={isLargerThan400 ? <NotSupported /> : <Tickets />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

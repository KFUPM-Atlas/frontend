import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { Box } from "@chakra-ui/react";
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
import {SupervisorClubs} from "./pages/SupervisorClubs";
import {SupervisorDeptPage} from "./pages/SupervisorDeptPage";
import {SupervisorRequests} from "./pages/SupervisorRequests";

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
        <Route path="/club/:id" element={<ClubPage />} />
         <Route path="/club/events" element={<Events />} />
          <Route path="/club/overview" element={<Overview />} />
          <Route path="/club/requests" element={<Requests />} />
          <Route path="/club/profile" element={<ClubProfile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/tickets" element={<Tickets />} />
          <Route path="supervisor/clubs" element={<SupervisorClubs/>}/>
          <Route path="supervisor/dept" element={<SupervisorDeptPage/>}/>
          <Route path="supervisor/requests" element={<SupervisorRequests/>}/>
        <Route path="*" element={<Navigate to="/login" />} />
        
      </Routes>
    </BrowserRouter>
   );
};

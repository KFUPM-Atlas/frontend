import {
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  SimpleGrid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { COLORS } from "../core/constants";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFetchClubEvent } from "../hooks/useFetchClubEvents";
import { useFetchClubMembers } from "../hooks/useFetchClubMembers";
import { useFetchRegistrations } from "../hooks/useFetchRegistrations";
import { useFetchUserEvents } from "../hooks/useFetchUserEvents";
import { returnPastEvents } from "../utils/return_past_events";
import { returnUpcomingEvents } from "../utils/return_upcoming_events";
import { ClubAbout } from "./ClubAbout";
import { EventOverviewBox } from "./EventOverviewBox";
import { MemberOverviewBox } from "./MemberOverviewBox";
import { TabElement } from "./TabElement";
import { TicketBox } from "./TicketBox";
interface TicketEventsProps {
  eventIds: any;
}

export const TicketEvents: React.FC<TicketEventsProps> = ({ eventIds }) => {
  const { events } = useFetchUserEvents(eventIds);
  const upcomingEvents = returnUpcomingEvents(events);
  const pastEvents = returnPastEvents(events);

  return (
    <Tabs pt={5}>
      <TabList borderColor="white">
        <TabElement title="Upcoming" />
        <TabElement title="Past" />
      </TabList>
      <TabPanels w="full">
        <TabPanel>
          <SimpleGrid columns={2} spacing={4}>
            {events &&
              upcomingEvents.map((event, index) => (
                <GridItem colSpan={{ base: 2, lg: 1 }} key={index}>
                  <TicketBox event={event} />
                </GridItem>
              ))}
          </SimpleGrid>
        </TabPanel>
        <TabPanel>
          <SimpleGrid columns={1} spacing={4}>
            {events &&
              pastEvents.map((event, index) => (
                <GridItem colSpan={{ base: 2, lg: 1 }} key={index}>
                  <TicketBox event={event} />
                </GridItem>
              ))}
          </SimpleGrid>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

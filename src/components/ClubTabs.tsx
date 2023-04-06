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
import { useFetchClubEvent } from "../hooks/useFetchClubEvents";
import { useFetchClubMembers } from "../hooks/useFetchClubMembers";
import { returnPastEvents } from "../utils/return_past_events";
import { returnUpcomingEvents } from "../utils/return_upcoming_events";
import { ClubAbout } from "./ClubAbout";
import { EventOverviewBox } from "./EventOverviewBox";
import { MemberOverviewBox } from "./MemberOverviewBox";
import { TabElement } from "./TabElement";
interface TabsProps {}

export const ClubTabs: React.FC<TabsProps> = ({}) => {
  const { id } = useParams();
  const { clubMembers } = useFetchClubMembers(id);
  const { events } = useFetchClubEvent(id);
  const upcomingEvents = returnUpcomingEvents(events);
  const pastEvents = returnPastEvents(events);
  return (
    <Tabs pt={5}>
      <TabList borderColor="white">
        <TabElement title="Events" />
        <TabElement title="Members" />
        <TabElement title="About" />
      </TabList>
      <TabPanels w="full">
        <TabPanel p={0}>
          <Text pt={4}>Upcoming Events</Text>
          <SimpleGrid columns={2} spacing={0}>
            {upcomingEvents &&
              upcomingEvents?.map((event, index) => (
                <GridItem colSpan={{ base: 2, lg: 1 }} key={index}>
                  <EventOverviewBox event={event} />
                </GridItem>
              ))}
          </SimpleGrid>
          <Text pt={4}>Past Events</Text>
          <SimpleGrid columns={2} spacing={0}>
            {pastEvents &&
              pastEvents?.map((event, index) => (
                <GridItem colSpan={{ base: 2, lg: 1 }} key={index}>
                  <EventOverviewBox event={event} />
                </GridItem>
              ))}{" "}
          </SimpleGrid>
        </TabPanel>
        <TabPanel p={0}>
          <SimpleGrid columns={2} spacing={0}>
            {clubMembers && (
              <>
                {clubMembers?.map((member, index) => (
                  <GridItem colSpan={{ base: 2, lg: 1 }} key={index}>
                    <MemberOverviewBox
                      role={member?.role}
                      name={member?.name}
                    />
                  </GridItem>
                ))}
              </>
            )}
          </SimpleGrid>{" "}
        </TabPanel>
        <TabPanel>
          <ClubAbout />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

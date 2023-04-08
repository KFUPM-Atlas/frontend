import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import { TabElement } from "./TabElement";
import { EventOverviewBox } from "../components/EventOverviewBox";
import { ClubOverviewBox } from "../components/ClubOverviewBox";
import { useFetchEvents } from "../hooks/useFetchEvents";
import { useFetchClubs } from "../hooks/useFetchClubs";

interface TabsProps {}

export const ExploreTabs: React.FC<TabsProps> = ({}) => {
  const { events } = useFetchEvents();
  const { clubs } = useFetchClubs();
  return (
    <Tabs pt={5}>
      <TabList borderColor="white">
        <TabElement title="Events" />
        <TabElement title="Clubs" />
      </TabList>
      <TabPanels>
        <TabPanel p={0}>
          <SimpleGrid columns={2} spacing={0}>
            {events &&
              events?.map((event, index) => (
                <GridItem colSpan={{ base: 2, lg: 1 }} key={index}>
                  <EventOverviewBox event={event} />
                </GridItem>
              ))}
          </SimpleGrid>
        </TabPanel>
        <TabPanel p={0}>
          <SimpleGrid columns={2} spacing={0}>
            {clubs &&
              clubs?.map((club, index) => (
                <GridItem colSpan={{ base: 2, lg: 1 }} key={index}>
                  <ClubOverviewBox club={club} />
                </GridItem>
              ))}
          </SimpleGrid>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

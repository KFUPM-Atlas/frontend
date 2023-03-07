import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import { COLORS } from "../core/constants";
import { TabElement } from "./TabElement";
import { EventOverviewBox } from "../components/EventOverviewBox";
import { ClubOverviewBox } from "../components/ClubOverviewBox";

interface TabsProps {}

export const ExploreTabs: React.FC<TabsProps> = ({}) => {
  return (
    <Tabs pt={5}>
      <TabList borderColor="white">
        <TabElement title="Events" />
        <TabElement title="Clubs" />
      </TabList>
      <TabPanels>
        <TabPanel p={0}>
          <SimpleGrid columns={2} spacing={0}>
            <GridItem colSpan={{ base: 2, lg: 1 }}>
              <EventOverviewBox />
            </GridItem>
            <GridItem colSpan={{ base: 2, lg: 1 }}>
              <EventOverviewBox />
            </GridItem>
            <GridItem colSpan={{ base: 2, lg: 1 }}>
              <EventOverviewBox />
            </GridItem>
            <GridItem colSpan={{ base: 2, lg: 1 }}>
              <EventOverviewBox />
            </GridItem>
          </SimpleGrid>
        </TabPanel>
        <TabPanel p={0}>
          <SimpleGrid columns={2} spacing={0}>
            <GridItem colSpan={{ base: 2, lg: 1 }}>
              <ClubOverviewBox />
            </GridItem>
            <GridItem colSpan={{ base: 2, lg: 1 }}>
              <ClubOverviewBox />
            </GridItem>
            <GridItem colSpan={{ base: 2, lg: 1 }}>
              <ClubOverviewBox />
            </GridItem>
            <GridItem colSpan={{ base: 2, lg: 1 }}>
              <ClubOverviewBox />
            </GridItem>
          </SimpleGrid>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

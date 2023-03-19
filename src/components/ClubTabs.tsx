import {
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  SimpleGrid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { COLORS } from "../core/constants";
import { ClubAbout } from "./ClubAbout";
import { EventOverviewBox } from "./EventOverviewBox";
import { MemberOverviewBox } from "./MemberOverviewBox";
import { TabElement } from "./TabElement";
interface TabsProps {}

export const ClubTabs: React.FC<TabsProps> = ({}) => {
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
            <GridItem colSpan={{ base: 2, lg: 1 }}>
              <EventOverviewBox />
            </GridItem>
          </SimpleGrid>
          <Text pt={4}>Past Events</Text>
          <SimpleGrid columns={2} spacing={0}>
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
              <MemberOverviewBox role={"Member"} name={"Faisal Alshawan"} />
            </GridItem>
            <GridItem colSpan={{ base: 2, lg: 1 }}>
              <MemberOverviewBox role={"Member"} name={"Faisal Alshawan"} />
            </GridItem>
            <GridItem colSpan={{ base: 2, lg: 1 }}>
              <MemberOverviewBox role={"Member"} name={"Faisal Alshawan"} />
            </GridItem>
          </SimpleGrid>{" "}
        </TabPanel>
        <TabPanel>
          <ClubAbout />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

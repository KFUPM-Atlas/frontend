import {
  Box,
  Container,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { MobileNavbar } from "../components/MobileNavbar";
import { ExploreEvents } from "../components/ExploreEvents";
import { COLORS } from "../core/constants";
import { SearchBox } from "../components/SearchBox";
import { EventList } from "../components/EventList";
import { CategoryPick } from "../components/CategoryPick";
import { TabElement } from "../components/TabElement";
import { useFetchClubs } from "../hooks/useFetchClubs";
import { ClubOverviewBox } from "../components/ClubOverviewBox";
import { useCollection } from "../hooks/useCollection";
import { getTagNames } from "../utils/tagToArray";
import { useAuthContext } from "../hooks/useAuthContext";
export const Explore: React.FC = () => {
  const { clubs } = useFetchClubs();
  const { documents: tags } = useCollection("tags", []);

  return (
    <>
      <Box minH="100vh">
        <Container maxW="container.lg">
          <Heading
            size="lg"
            fontWeight="bold"
            fontSize={29}
            bgGradient="linear(to-l, gray.600, gray.900)"
            bgClip="text"
            py={6}
          >
            Explore
          </Heading>
          <SearchBox />
          {tags && <CategoryPick categories={getTagNames(tags)} />}
          <Tabs pt={0}>
            <TabList borderColor="white">
              <TabElement title="Events" />
              <TabElement title="Clubs" />
            </TabList>
            <TabPanels>
              <TabPanel p={0}>
                <EventList />
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
        </Container>
      </Box>
      <MobileNavbar />
    </>
  );
};

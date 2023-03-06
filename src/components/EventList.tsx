import { Box } from "@chakra-ui/react";
import { SearchBox } from "./SearchBox";
import { TabsList } from "./TabsList";
import { EventBox } from "./EventBox";
import { SimpleGrid, GridItem } from "@chakra-ui/react";
interface EventListProps {}

export const EventList: React.FC<EventListProps> = ({}) => {
  return (
    <Box>
      <SearchBox />
      <TabsList />
      <SimpleGrid columns={2} spacing={10}>
        <GridItem colSpan={{ base: 2, lg: 1 }}>
          <EventBox />
        </GridItem>
        <GridItem colSpan={{ base: 2, lg: 1 }}>
          <EventBox />
        </GridItem>
        <GridItem colSpan={{ base: 2, lg: 1 }}>
          <EventBox />
        </GridItem>
        <GridItem colSpan={{ base: 2, lg: 1 }}>
          <EventBox />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

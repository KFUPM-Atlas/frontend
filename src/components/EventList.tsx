import { Box } from "@chakra-ui/react";
import { SearchBox } from "./SearchBox";
import { TabsList } from "./TabsList";
import { EventBox } from "./EventBox";
import { SimpleGrid, GridItem } from "@chakra-ui/react";
import { useFetchEvents } from "../hooks/useFetchEvents";
interface EventListProps {}

export const EventList: React.FC<EventListProps> = ({}) => {
  const { events } = useFetchEvents();
  return (
    <Box pt={0}>
      {/* <TabsList /> */}
      <SimpleGrid columns={2} spacing={{ base: 0, md: 10 }}>
        {events?.map((event, index) => (
          <GridItem colSpan={{ base: 2, lg: 1 }} key={index}>
            <EventBox event={event} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

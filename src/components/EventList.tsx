import { Box } from "@chakra-ui/react";
import { SearchBox } from "./SearchBox";
import { TabsList } from "./TabsList";
import { EventBox } from "./EventBox";
import { SimpleGrid, GridItem } from "@chakra-ui/react";
import { useFetchEvents } from "../hooks/useFetchEvents";
import { useFiltersStore } from "../stores/useFiltersStore";
import { getFilteredEvents } from "../utils/return_filtered_events";

interface EventListProps {}

export const EventList: React.FC<EventListProps> = ({}) => {
  const { events } = useFetchEvents();
  const { filter, search } = useFiltersStore();
  const filteredEvents = getFilteredEvents(events, filter, search);
  return (
    <Box pt={0}>
      {/* <TabsList /> */}
      <SimpleGrid columns={2} spacing={{ base: 0, md: 10 }}>
        {filteredEvents.map((event, index) => (
          <GridItem colSpan={{ base: 2, lg: 1 }} key={index}>
            <EventBox event={event} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

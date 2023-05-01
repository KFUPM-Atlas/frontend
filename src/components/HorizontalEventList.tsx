import { Box, HStack, Tag } from "@chakra-ui/react";
import { SearchBox } from "./SearchBox";
import { TabsList } from "./TabsList";
import { EventBox } from "./EventBox";
import { SimpleGrid, GridItem } from "@chakra-ui/react";
import { useFetchEvents } from "../hooks/useFetchEvents";
import { getFilteredEvents } from "../utils/return_filtered_events";
import { useFiltersStore } from "../stores/useFiltersStore";
interface HorizontalEventListProps {}

export const HorizontalEventList: React.FC<HorizontalEventListProps> = ({}) => {
  const { events } = useFetchEvents();
  const { filter, search } = useFiltersStore();
  const filteredEvents = getFilteredEvents(events, filter, search);

  return (
    <div style={{ overflowX: "hidden", position: "relative" }}>
      <HStack
        pt={0}
        spacing={-10}
        w="full"
        css={{
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            width: "0.4rem",
            height: "0.4rem",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "transparent",
          },
        }}
      >
        {filteredEvents?.map((event, index) => (
          <Tag
            flexShrink="0"
            bgColor="white"
            size="md"
            key={index}
            mr={8}
            boxShadow="sm"
          >
            <EventBox event={event} />
          </Tag>
        ))}
      </HStack>
    </div>
  );
};

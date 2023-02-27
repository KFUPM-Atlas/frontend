import { Box } from "@chakra-ui/react"
import { SearchBox } from "./SearchBox"
import { TabsList } from "./TabsList"
import { EventBox } from "./EventBox"
interface EventListProps {}

export const EventList: React.FC<EventListProps> = ({}) => {
  return (
    <Box>
      <SearchBox />
      <TabsList />
      <EventBox />
      <EventBox />
    </Box>
  )
}

import { Box } from "@chakra-ui/react";
import { SearchBox } from "./SearchBox";
import { ExploreTabs } from "./ExploreTabs";
import { EventBox } from "./EventBox";
import { SimpleGrid, GridItem } from "@chakra-ui/react";
import { EventOverviewBox } from "./EventOverviewBox";
import { CategoryPick } from "./CategoryPick";
interface EventListProps {}

export const ExploreEvents: React.FC<EventListProps> = ({}) => {
  return (
    <Box>
      <ExploreTabs />
    </Box>
  );
};

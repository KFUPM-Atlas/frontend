import {
  VStack,
  HStack,
  Tag,
  FormControl,
  Input,
  Button,
  TagLabel,
} from "@chakra-ui/react";
import { SearchBox } from "./SearchBox";
import { TabsList } from "./TabsList";
import { EventBox } from "./EventBox";
import { SimpleGrid, GridItem } from "@chakra-ui/react";
import { COLORS } from "../core/constants";
interface EventListProps {
  categories: string[];
}

export const CategoryPick: React.FC<EventListProps> = ({ categories }) => {
  return (
    <HStack spacing={4} overflowX="auto" w="full" pt={3}>
      {categories.map((data, index) => (
        <Tag
          flexShrink="0"
          size="md"
          key={index}
          borderRadius={"lg"}
          bgColor={COLORS.PRIMARY}
          py={3}
          px={7}
        >
          <TagLabel color="white">{data}</TagLabel>
        </Tag>
      ))}
    </HStack>
  );
};

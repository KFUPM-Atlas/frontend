import {
  VStack,
  HStack,
  Tag,
  FormControl,
  Input,
  Text,
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
    <div style={{ overflowX: "hidden", position: "relative" }}>
      <HStack
        spacing={4}
        w="full"
        pb={4}
        pt={6}
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
        {categories.map((data, index) => (
          <Tag
            flexShrink="0"
            bgColor="white"
            size="md"
            key={index}
            borderRadius={"full"}
            py={3}
            px={7}
            boxShadow="sm"
            border="1px"
            borderColor="gray.100"
          >
            <TagLabel color={COLORS.PRIMARY}>{data}</TagLabel>
          </Tag>
        ))}
      </HStack>
    </div>
  );
};

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
import { useEffect, useState } from "react";
import { useFiltersStore } from "../stores/useFiltersStore";
interface EventListProps {
  categories: string[];
}

export const CategoryPick: React.FC<EventListProps> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { setFilter } = useFiltersStore();
  useEffect(() => {
    setFilter(selectedCategory);
  }, [selectedCategory]);
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
            bgGradient={
              selectedCategory == data
                ? "linear(to-l, gray.600, gray.900)"
                : "linear(to-l, gray.100, gray.100)"
            }
            size="md"
            key={index}
            borderRadius={"full"}
            py={3}
            px={7}
            boxShadow="sm"
            border="1px"
            borderColor="gray.100"
            onClick={() =>
              selectedCategory == data
                ? setSelectedCategory("")
                : setSelectedCategory(data)
            }
          >
            <TagLabel
              color={selectedCategory == data ? "white" : COLORS.PRIMARY}
            >
              {data}
            </TagLabel>
          </Tag>
        ))}
      </HStack>
    </div>
  );
};

import {
  Box,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { COLORS } from "../core/constants";
interface SearchBoxProps {}

export const SearchBox: React.FC<SearchBoxProps> = ({}) => {
  return (
    <Box>
      <Stack spacing={4}>
        <Input
          size="lg"
          placeholder="Search Atlas..."
          borderRadius={"full"}
          boxShadow="sm"
          bgColor="white"
          fontWeight="regular"
          py={8}
          pl={10}
        />
      </Stack>
    </Box>
  );
};

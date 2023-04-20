import {
  Box,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
interface SearchBoxProps {}

export const SearchBox: React.FC<SearchBoxProps> = ({}) => {
  return (
    <Box>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            placeholder="Tech Event, Webinar.."
            borderRadius={20}
            border="1px"
            borderColor="gray.200"
          />
        </InputGroup>
      </Stack>
    </Box>
  );
};

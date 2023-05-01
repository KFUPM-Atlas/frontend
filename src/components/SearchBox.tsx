import {
  Box,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useFiltersStore } from "../stores/useFiltersStore";
import { useEffect, useState } from "react";
interface SearchBoxProps {}

export const SearchBox: React.FC<SearchBoxProps> = ({}) => {
  const { setSearch, search } = useFiltersStore();
  const [userSearch, setUserSearch] = useState("");

  useEffect(() => {
    setSearch(userSearch);
  }, [userSearch]);

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
            value={userSearch}
            onChange={(e) => setUserSearch(e.target.value)}
          />
        </InputGroup>
      </Stack>
    </Box>
  );
};

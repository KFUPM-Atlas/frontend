import {
  Box,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import { COLORS } from "../core/constants"
interface SearchBoxProps {}

export const SearchBox: React.FC<SearchBoxProps> = ({}) => {
  return (
    <Box>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            py={8}
            px={5}
            children={<SearchIcon color={COLORS.PRIMARY} />}
          />

          <Input
            size="lg"
            placeholder="Hackathon..."
            borderRadius={12}
            border="none"
            boxShadow="lg"
            py={8}
            px={5}
          />
        </InputGroup>
      </Stack>
    </Box>
  )
}

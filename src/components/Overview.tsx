import { Box, HStack, Stack, Text } from "@chakra-ui/react"
import { COLORS } from "../core/constants"
import { CalendarIcon } from "./icons/CalendarIcon"
import { ClockIcon } from "./icons/ClockIcon"

interface OverviewProps {}

export const Overview: React.FC<OverviewProps> = ({}) => {
  return (
    <Box>
      <HStack spacing={5}>
        <HStack>
          <CalendarIcon />
          <Stack spacing={0}>
            <Text fontSize={15} color={COLORS.TEXT_LIGHT}>
              Date
            </Text>
            <Text>10pm - 11pm</Text>
          </Stack>
        </HStack>
        <HStack>
          <ClockIcon />
          <Stack spacing={0}>
            <Text fontSize={15} color={COLORS.TEXT_LIGHT}>
              Duration
            </Text>
            <Text>60m</Text>
          </Stack>
        </HStack>
      </HStack>
      <Text fontSize={15} color={COLORS.TEXT_LIGHT} pt={4}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
      </Text>
    </Box>
  )
}

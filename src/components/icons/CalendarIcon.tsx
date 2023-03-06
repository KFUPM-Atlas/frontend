import { Box, Icon } from "@chakra-ui/react"
import { BsCalendar2RangeFill } from "react-icons/bs"
import { COLORS } from "../../core/constants"

interface CalendarIconProps {}

export const CalendarIcon: React.FC<CalendarIconProps> = ({}) => {
  return (
    <Box>
      <Box border="1px" borderColor="gray.300" borderRadius={10} px={4} py={3}>
        <Icon as={BsCalendar2RangeFill} w={5} h={5} color={COLORS.PRIMARY} />
      </Box>
    </Box>
  )
}

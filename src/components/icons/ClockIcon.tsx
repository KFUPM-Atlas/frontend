import { Box, Icon } from "@chakra-ui/react"
import { AiFillClockCircle } from "react-icons/ai"
import { COLORS } from "../../core/constants"

interface ClockIcon {}

export const ClockIcon: React.FC<ClockIcon> = ({}) => {
  return (
    <Box>
      <Box border="1px" borderColor="gray.300" borderRadius={10} px={4} py={3}>
        <Icon as={AiFillClockCircle} w={5} h={5} color={COLORS.PRIMARY} />
      </Box>
    </Box>
  )
}

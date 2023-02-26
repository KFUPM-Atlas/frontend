import { Divider, HStack, Text } from "@chakra-ui/react"
import { COLORS } from "../core/constants"
interface OrDividerProps {}

export const OrDivider: React.FC<OrDividerProps> = () => {
  return (
    <HStack>
      <Divider />
      <Text color={COLORS.TEXT_LIGHT} fontSize={12} fontWeight="bold">
        OR
      </Text>
      <Divider />
    </HStack>
  )
}

import { Tab, Box } from "@chakra-ui/react"
import { COLORS } from "../core/constants"
interface TabProps {
  title: string
}

export const TabElement: React.FC<TabProps> = ({ title }) => {
  return (
    <Box pr={5}>
      <Tab
        _selected={{
          color: COLORS.PRIMARY,
          borderColor: COLORS.PRIMARY,
        }}
        color={COLORS.TEXT_LIGHT}
        px={0}
        mx={0}
      >
        {title}
      </Tab>
    </Box>
  )
}

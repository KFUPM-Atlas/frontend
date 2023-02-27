import { Box, Image, HStack, Stack, Text, Icon } from "@chakra-ui/react"
import { COLORS } from "../core/constants"
import { BiTimeFive } from "react-icons/bi"
import { AiOutlineCalendar } from "react-icons/ai"
interface EventBoxProps {}

export const EventBox: React.FC<EventBoxProps> = ({}) => {
  return (
    <Box pt={10} position="relative">
      <Image
        src="./laptop.svg"
        w={400}
        h={200}
        objectFit="cover"
        borderRadius={10}
        boxShadow="md"
      />
      <Box
        position="absolute"
        bottom={5}
        bgColor={COLORS.PRIMARY}
        color="white"
        margin-left="auto"
        margin-right="auto"
        left={5}
        right={5}
        text-align="center"
        px={4}
        borderRadius={10}
      >
        <HStack justifyContent="space-between">
          <Stack py={3}>
            <HStack justifyContent="space-between">
              <Text fontWeight="medium" fontSize={13}>
                Cyberthon UCI CTF 2023
              </Text>
            </HStack>
            <HStack>
              <Image
                src="./gdsc.jpeg"
                w={5}
                h={5}
                objectFit="cover"
                borderRadius={"full"}
                boxShadow="md"
              />
              <Text fontWeight="normal" fontSize={8}>
                Google Developers Student Club
              </Text>
            </HStack>
          </Stack>
          <Stack>
            <HStack color="gray.400">
              <Icon as={BiTimeFive} w={3} h={3} />
              <Text fontWeight="medium" fontSize={10}>
                7pm-8pm
              </Text>
            </HStack>
            <HStack color="gray.400">
              <Icon as={AiOutlineCalendar} w={3} h={3} />
              <Text fontWeight="medium" fontSize={10}>
                Feb 12 2023
              </Text>
            </HStack>
          </Stack>
        </HStack>
      </Box>
    </Box>
  )
}

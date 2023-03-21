import { Box, Image, HStack, Stack, Text, Icon } from "@chakra-ui/react";
import { COLORS } from "../core/constants";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
interface EventBoxProps {
  event: any;
}

export const EventBox: React.FC<EventBoxProps> = ({ event }) => {
  const navigate = useNavigate();
  const startDate = new Date(event?.startDate * 1000);
  const endDate = new Date(event?.endDate * 1000);

  return (
    <Box
      pt={10}
      position="relative"
      onClick={() => navigate(`/event/${event?.slug}`)}
    >
      <Image
        src="./laptop.svg"
        w={"full"}
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
                {event?.eventName}
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
                {event?.club}
              </Text>
            </HStack>
          </Stack>
          <Stack>
            <HStack color="gray.400">
              <Icon as={BiTimeFive} w={3} h={3} />
              <Text fontWeight="medium" fontSize={10}>
                {startDate?.toLocaleString("en-US", {
                  hour: "numeric",
                  hour12: true,
                })}
                -
                {endDate?.toLocaleString("en-US", {
                  hour: "numeric",
                  hour12: true,
                })}
              </Text>
            </HStack>
            <HStack color="gray.400">
              <Icon as={AiOutlineCalendar} w={3} h={3} />
              <Text fontWeight="medium" fontSize={10}>
                {startDate?.getDate()}{" "}
                {startDate?.toLocaleString("default", { month: "short" })}
              </Text>
            </HStack>
          </Stack>
        </HStack>
      </Box>
    </Box>
  );
};

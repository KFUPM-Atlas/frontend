import {
  Box,
  Image,
  HStack,
  Stack,
  Text,
  Icon,
  AvatarGroup,
  Avatar,
} from "@chakra-ui/react";
import { COLORS } from "../core/constants";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
interface EventBoxProps {
  event: any;
}

export const EventBox: React.FC<EventBoxProps> = ({ event }) => {
  const navigate = useNavigate();
  const startDate = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(new Date(event?.startDate));

  const endDate = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(new Date(event?.endDate));

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
  }).format(new Date(event?.startDate));

  return (
    <Box
      pt={4}
      position="relative"
      onClick={() => navigate(`/event/${event?.eventId}`)}
      minWidth="308px" // add a minWidth property to adjust the size of the box
    >
      <Image
        src={event?.posterLink}
        w={"full"}
        h={200}
        objectFit="cover"
        borderRadius="lg"
        boxShadow="lg"
      />
      <Box position="absolute" top={7} color={COLORS.PRIMARY} left={5} p={2}>
        <AvatarGroup size="xs" max={3}>
          <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
          <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
          <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
          <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        </AvatarGroup>
      </Box>
      <Box
        position="absolute"
        bottom={5}
        bgColor={"white"}
        color={COLORS.PRIMARY}
        margin-left="auto"
        margin-right="auto"
        left={5}
        right={5}
        text-align="center"
        px={4}
        borderRadius="lg"
        boxShadow="lg"
      >
        <HStack justifyContent="space-between">
          <Stack py={3}>
            <HStack justifyContent="space-between">
              <Text fontWeight="medium" fontSize={13}>
                {event?.title}
              </Text>
            </HStack>
            <HStack>
              <Image src="./gdsc.jpeg" w={5} h={5} objectFit="cover" />
              <Text fontWeight="normal" fontSize={8}>
                {event?.club?.name}
              </Text>
            </HStack>
          </Stack>
          <Stack>
            <HStack color="gray.400">
              <Icon as={BiTimeFive} w={3} h={3} />
              <Text fontWeight="medium" fontSize={8}>
                {startDate}-{endDate}
              </Text>
            </HStack>
            <HStack color="gray.400">
              <Icon as={AiOutlineCalendar} w={3} h={3} />
              <Text fontWeight="medium" fontSize={10}>
                {formattedDate}
              </Text>
            </HStack>
          </Stack>
        </HStack>
      </Box>
    </Box>
  );
};

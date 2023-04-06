import {
  Box,
  Image,
  HStack,
  Stack,
  Text,
  Icon,
  Button,
} from "@chakra-ui/react";
import { COLORS } from "../core/constants";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { CgScreen } from "react-icons/cg";
import { MdDateRange } from "react-icons/md";

interface EventBoxProps {
  event: any;
}

export const EventOverviewBox: React.FC<EventBoxProps> = ({ event }) => {
  const navigate = useNavigate();
  const startDate = new Date(event?.startDate * 1000);

  return (
    <Box pt={3} onClick={() => navigate(`/event/${event?.slug}`)}>
      <Box boxShadow="lg" bgColor="white" borderRadius={10}>
        <HStack px={3}>
          <Box py={3} px={2}>
            <Image
              src="/laptop.svg"
              w={40}
              h={20}
              objectFit="cover"
              borderRadius={10}
              boxShadow="md"
            />
          </Box>
          <Stack spacing={0} pr={10}>
            <Text color={COLORS.PRIMARY} fontWeight="bold">
              {event?.eventName}
            </Text>
            <Text
              color={COLORS.TEXT_LIGHT}
              fontSize={10}
              w={10}
              isTruncated={true}
            >
              {event?.description}
            </Text>
          </Stack>
          <Stack justifyContent="center" spacing={2}>
            <HStack justifyContent="center">
              <Icon as={MdDateRange} w={4} h={4} />
              <Text fontSize={10}>
                {startDate?.getDate()}{" "}
                {startDate?.toLocaleString("default", { month: "short" })}
              </Text>
            </HStack>
            <Button
              fontSize={10}
              size="sm"
              bgColor={COLORS.PRIMARY}
              color="white"
              px={5}
              borderRadius="lg"
            >
              <HStack>
                <Icon as={CgScreen} w={4} h={4} />
                <Text>Tech</Text>
              </HStack>
            </Button>
          </Stack>
        </HStack>
      </Box>
    </Box>
  );
};

import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { COLORS } from "../core/constants";
import { CalendarIcon } from "./icons/CalendarIcon";
import { ClockIcon } from "./icons/ClockIcon";

interface OverviewProps {
  event: any;
}

export const Overview: React.FC<OverviewProps> = ({ event }) => {
  const startDate = new Date(event?.startDate * 1000);
  const endDate = new Date(event?.endDate * 1000);

  return (
    <Box>
      <HStack spacing={5}>
        <HStack>
          <CalendarIcon />
          <Stack spacing={0}>
            <Text fontSize={15} color={COLORS.TEXT_LIGHT}>
              Date
            </Text>
            <Text>
              {startDate?.getDate()}{" "}
              {startDate?.toLocaleString("default", { month: "short" })}
            </Text>
          </Stack>
        </HStack>
        <HStack>
          <ClockIcon />
          <Stack spacing={0}>
            <Text fontSize={15} color={COLORS.TEXT_LIGHT}>
              Duration
            </Text>
            <Text>
              {startDate?.toLocaleString("en-US", {
                hour: "numeric",
                hour12: true,
              })}
              -
              {endDate?.toLocaleString("en-US", {
                hour: "numeric",
                hour12: true,
              })}{" "}
            </Text>
          </Stack>
        </HStack>
      </HStack>
      <Text fontSize={15} color={COLORS.TEXT_LIGHT} pt={4}>
        {event?.description}
      </Text>
    </Box>
  );
};

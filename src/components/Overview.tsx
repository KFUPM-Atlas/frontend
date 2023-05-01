import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { COLORS } from "../core/constants";
import { CalendarIcon } from "./icons/CalendarIcon";
import { ClockIcon } from "./icons/ClockIcon";

interface OverviewProps {
  event: any;
}

export const Overview: React.FC<OverviewProps> = ({ event }) => {
  return (
    <Box>
      {event.startDate && (
        <>
          <HStack spacing={5}>
            <HStack>
              <CalendarIcon />
              <Stack spacing={0}>
                <Text fontSize={15} color={COLORS.TEXT_LIGHT}>
                  Date
                </Text>
                <Text fontSize={14}>
                  {new Intl.DateTimeFormat("en-US", {
                    month: "long",
                    day: "numeric",
                  }).format(new Date(event.startDate))}
                </Text>
              </Stack>
            </HStack>
            <HStack>
              <ClockIcon />
              <Stack spacing={0}>
                <Text fontSize={15} color={COLORS.TEXT_LIGHT}>
                  Duration
                </Text>
                <Text fontSize={14}>
                  {new Intl.DateTimeFormat("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  }).format(new Date(event?.startDate))}
                  -
                  {new Intl.DateTimeFormat("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  }).format(new Date(event?.endDate))}
                </Text>
              </Stack>
            </HStack>
          </HStack>
          <Text fontSize={15} color={COLORS.TEXT_LIGHT} pt={4}>
            {event?.description}
          </Text>
        </>
      )}
    </Box>
  );
};

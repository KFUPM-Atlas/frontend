import { Box, Button, Center, Stack, Text } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";

interface RoomReservationProps {}
export const RoomReservation: React.FC<RoomReservationProps> = ({}) => {
  return (
    <Box>
      <Stack>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          Book a room
        </Text>
        <Text>This room will be used for the entirety of your event.</Text>
      </Stack>
      <Center my={"16"}>
        <Button
          bg={"black"}
          size={"lg"}
          color={"white"}
          as={"a"}
          href={"https://kfupm.edu.sa/"}
        >
          Book your room through KFUPM Room Reservation
          <Box ml={"3"}>
            <FiExternalLink />
          </Box>
        </Button>
      </Center>
    </Box>
  );
};

import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { doc, getFirestore, setDoc, serverTimestamp } from "firebase/firestore";
import { FiExternalLink } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useClubName } from "../../hooks/useClub";
import { useUser } from "../../hooks/useUser";
import useCreateEventStore from "../../stores/useCreateEventStore";
import { generateId } from "../../utils/generate_id";
import { removeEmpty } from "../../utils/remove_empty";

interface RoomReservationProps {}
export const RoomReservation: React.FC<RoomReservationProps> = ({}) => {
  const store = useCreateEventStore((state) => state);
  return (
    <Box>
      <Stack>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          Book a room
        </Text>
        <Text>This room will be used for the entirety of your event.</Text>
      </Stack>
      <Center my={"16"}>
        <FormControl>
          <FormLabel>Building</FormLabel>
          <Input
            value={store.building}
            onChange={(e) => store.setBuilding(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Room</FormLabel>
          <Input
            value={store.room}
            onChange={(e) => store.setRoom(e.target.value)}
          />
        </FormControl>
      </Center>
    </Box>
  );
};

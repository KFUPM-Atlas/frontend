import {
  Box,
  useDisclosure,
  Flex,
  Heading,
  Button,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { CreateEvent } from "../components/create_event/CreateEvent";
import { Sidebar } from "../components/Sidebar";
import { TableData } from "../components/TableData";
import { EventStatus } from "../enums/event_status";
import { mapEventStatusToColor } from "../utils/map_event_status_to_color";
import { randomArr } from "../utils/random_arr";

export const Events: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  return (
    <Box minH="100vh">
      <Sidebar onClose={onClose} isOpen={isOpen} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Box
          mx={{
            base: "1",
            md: "24",
          }}
          my={"16"}
        >
          <Flex justifyContent={"space-between"}>
            <Heading>Events</Heading>
            <Button bg={"black"} color={"white"} onClick={onOpenModal}>
              Create Event
            </Button>
            <CreateEvent
              isOpen={isOpenModal}
              onClose={onCloseModal}
              onOpen={onOpenModal}
            />
          </Flex>
          <TableData />
        </Box>
      </Box>
    </Box>
  );
};

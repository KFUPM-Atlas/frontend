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
          <TableContainer mt={10}>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Sender</Th>
                  <Th>Send Date</Th>
                  <Th>Type</Th>
                  <Th>Title</Th>
                  <Th>Status</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Array(10)
                  .fill(0)
                  .map((_, i) => {
                    const status = randomArr([
                      "pending",
                      "approved",
                      "rejected",
                    ]);
                    return (
                      <Tr>
                        <Td>Salah</Td>
                        <Td>{new Date().toLocaleString()}</Td>
                        <Td>Type-1</Td>
                        <Td>Introduction to Python</Td>
                        <Td
                          color={mapEventStatusToColor(status as EventStatus)}
                        >
                          {status}
                        </Td>
                        <Td>
                          <Button bg={"black"} color={"white"}>
                            View
                          </Button>
                        </Td>
                      </Tr>
                    );
                  })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

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
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { CreateEvent } from "../components/create_event/CreateEvent";
import { Sidebar } from "../components/Sidebar";
import { EventStatus } from "../enums/event_status";
import { mapEventStatusToColor } from "../utils/map_event_status_to_color";
import { randomArr } from "../utils/random_arr";
import { Lines } from "./create_event/Lines";
import { RequestForm } from "./create_event/RequestForm";

export const TableData: React.FC = () => {
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();
  return (
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
              const status = randomArr(["pending", "approved", "rejected"]);
              return (
                <Tr>
                  <Td>Salah</Td>
                  <Td>{new Date().toLocaleString()}</Td>
                  <Td>Type-1</Td>
                  <Td>Introduction to Python</Td>
                  <Td color={mapEventStatusToColor(status as EventStatus)}>
                    {status}
                  </Td>
                  <Td>
                    <Button bg={"black"} color={"white"} onClick={onOpenModal}>
                      View
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          <Modal isOpen={isOpenModal} onClose={onCloseModal} size={"2xl"}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>#RequestId</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Lines />
                <RequestForm msg={"Request certain needs for you club."} />
              </ModalBody>
              <ModalFooter>
                <Button bg={"black"} color={"white"} mx={"5"}>
                  Cancel
                </Button>

                <Button bg={"black"} color={"white"}>
                  Send
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

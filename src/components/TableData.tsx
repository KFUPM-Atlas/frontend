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
  Tag,
} from "@chakra-ui/react";
import { CreateEvent } from "../components/create_event/CreateEvent";
import { Sidebar } from "../components/Sidebar";
import { EventStatus } from "../enums/event_status";
import { mapEventStatusToColor } from "../utils/map_event_status_to_color";
import { randomArr } from "../utils/random_arr";
import { Lines } from "./create_event/Lines";
import { RequestForm } from "./create_event/RequestForm";

interface TableDataProps {
  data: any;
  type: "event" | "request";
}
export const TableData: React.FC<TableDataProps> = ({ data, type }) => {
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
            {type === "request" ? (
              <>
                <Th>Type</Th>
              </>
            ) : (
              <>
                <Th>Event name</Th>
                <Th>Description</Th>
                <Th>Start Date</Th>
                <Th>End Date</Th>
                <Th>Tag</Th>
                <Th>Status</Th>
              </>
            )}
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((event, i) => {
            return type === "request" ? (
              <Tr key={i}>
                <Td>{event.type}</Td>
              </Tr>
            ) : (
              <Tr key={i}>
                <Td>{event.eventName}</Td>
                <Td>{event.description}</Td>
                <Td>
                  {
                    new Date(
                      event.startDate?.seconds * 1000
                    ).toLocaleDateString() as any
                  }
                </Td>
                <Td>
                  {
                    new Date(
                      event.endDate?.seconds * 1000
                    ).toLocaleDateString() as any
                  }
                </Td>

                <Td>
                  <Tag>{event.tag}</Tag>
                </Td>
                <Td color={mapEventStatusToColor(event.status as EventStatus)}>
                  {event.status || "Pending"}
                </Td>
                {/* <Td>
                  <Button bg={"black"} color={"white"} onClick={onOpenModal}>
                    View
                  </Button>
                </Td> */}
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

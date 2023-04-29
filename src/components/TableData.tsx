import {
  Box,
  useDisclosure,
  Flex,
  Text,
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
  Link,
  LinkBox,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  HStack,
  Spacer,
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
                <Th>Sender</Th>
                <Th>Status</Th>
                <Th>Link</Th>
                <Th>Type</Th>
                <Th>Request Date</Th>
              </>
            ) : (
              <>
                <Th>Event name</Th>
                <Th>Description</Th>
                <Th>Start Date</Th>
                <Th>End Date</Th>
                <Th>Poster</Th>
                <Th>Location</Th>
                <Th>Status</Th>
                <Th>Tag</Th>
              </>
            )}
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((event, i) => {
            return type === "request" ? (
              <Tr key={i}>
                <Td>{event.sender}</Td>
                <Td color={mapEventStatusToColor(event.status)}>
                  {event.status}
                </Td>
                <Td>
                  <Link href={event.documentUrl} isExternal={true}>
                    Link to the request
                  </Link>
                </Td>
                <Td>{event.type}</Td>
                <Td>
                  {
                    new Date(
                      event.createdAt?.seconds * 1000
                    ).toLocaleDateString() as any
                  }
                </Td>
              </Tr>
            ) : (
              <Tr key={i}>
                <Td>{event.title}</Td>
                <Td>{event.description}</Td>
                <Td>
                  {new Date(event.startDate).toDateString() as any}-{" "}
                  {new Date(event.startDate).toLocaleTimeString() as any}
                </Td>
                <Td>
                  {new Date(event.endDate).toDateString() as any}-{" "}
                  {new Date(event.endDate).toLocaleTimeString() as any}
                </Td>

                <Td>
                  <Link isExternal={true} href={event.posterLink}>
                    Poster Link
                  </Link>
                </Td>
                <Td>
                  <span>
                    {event.building} - {event.room}
                  </span>
                </Td>
                <Td color={mapEventStatusToColor(event.status as EventStatus)}>
                  {event.status || "Pending"}
                </Td>
                <Td>
                  <Tag>{event.tag}</Tag>
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

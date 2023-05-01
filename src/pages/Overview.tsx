import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Spacer,
  Stack,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { BsCalendar, BsThreeDots } from "react-icons/bs";
import { IoPeopleOutline, IoSend } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Stat } from "../components/Stat";
import { WithPresidentCheck } from "../components/WithPresidentCheck";
import { EventStatus } from "../enums/event_status";
import { useAuthContext } from "../hooks/useAuthContext";
import { useClubName } from "../hooks/useClub";
import { useCollection } from "../hooks/useCollection";
import { mapEventStatusToColor } from "../utils/map_event_status_to_color";
import { randomArr } from "../utils/random_arr";
const Overview: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useAuthContext();
  const { id } = useParams();
  const args = ["clubId", "==", id];
  const { documents: followers } = useCollection("followers", args);
  const { documents: events } = useCollection("events", args);
  const { documents: requests } = useCollection("requests", args);
  const name = useClubName(id);
  console.log(name);
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
          <Stack
            spacing={10}
            my={10}
            direction={{
              base: "column",
              lg: "row",
            }}
          >
            <Center>
              <Image
                src={`https://firebasestorage.googleapis.com/v0/b/atlas-5fb14.appspot.com/o/files%2F${id}?alt=media&token=20cb9bd7-8af6-4534-bf30-e23c390d0882&`}
                alt="Google Logo"
                w={200}
                h={100}
              />
            </Center>
            <Center>
              <Heading>{name?.name}</Heading>
            </Center>
          </Stack>
          <Flex
            justifyContent={"space-between"}
            flexDir={{
              base: "column",
              lg: "row",
            }}
          >
            <Stat
              title="Total Followers"
              total={followers && followers.length}
              icon={<IoPeopleOutline size={20} />}
              bg={"black"}
              color={"white"}
            />
            <Stat
              title="Total Events"
              total={events && events.length}
              icon={<BsCalendar size={20} />}
              bg={"#CED1F4"}
              color={"black"}
            />
            <Stat
              title="Total Request"
              total={requests && requests.length}
              icon={<IoSend size={20} />}
              bg={"#DABAC5"}
              color={"black"}
            />
          </Flex>
          <Box mt={3}>
            <Text fontSize={"xl"} fontWeight={"bold"}>
              Recent Events
            </Text>
            <TableContainer mt={10}>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Event</Th>
                    <Th>Description</Th>
                    <Th>Start Date</Th>
                    <Th>End Date</Th>
                    <Th>Tag</Th>
                    <Th>Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {events?.map((event, i) => {
                    return (
                      <Tr key={i}>
                        <Td>{event.title}</Td>
                        <Td>{event.description}</Td>
                        <Td>
                          {new Date(event.startDate).toDateString() as any}-{" "}
                          {
                            new Date(
                              event.startDate
                            ).toLocaleTimeString() as any
                          }
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
                        <Td
                          color={mapEventStatusToColor(
                            event.status as EventStatus
                          )}
                        >
                          {event.status || "Pending"}
                        </Td>
                        <Td>
                          <Tag>{event.tag}</Tag>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
          <Box mt={3}>
            <Text fontSize={"xl"} fontWeight={"bold"}>
              Recent Requests
            </Text>
            <TableContainer mt={10}>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Type</Th>
                    <Th>Status</Th>
                    <Th>Link</Th>
                    <Th>Type</Th>
                    <Th>Request Date</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {requests?.map((event, i) => {
                    return (
                      <Tr key={i}>
                        <Td>{event.type}</Td>
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
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WithPresidentCheck(Overview);

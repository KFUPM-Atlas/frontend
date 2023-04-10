import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Table,
  TableContainer,
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
import { EventStatus } from "../enums/event_status";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";
import { mapEventStatusToColor } from "../utils/map_event_status_to_color";
import { randomArr } from "../utils/random_arr";
export const Overview: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useAuthContext();
  const { id } = useParams();
  const args = ["clubId", "==", id];
  const { documents: followers } = useCollection("followers", args);
  const { documents: events } = useCollection("events", args);
  const { documents: requests } = useCollection("requests", args);

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
                src="https://seeklogo.com/images/G/google-developers-logo-F8BF3155AC-seeklogo.com.png"
                alt="Google Logo"
                w={10}
                h={5}
              />
            </Center>
            <Center>
              <Heading>Google Developer Student Club</Heading>
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
                    <Th>Type</Th>
                    <Th>Date</Th>
                    <Th>Status</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Array(3)
                    .fill(0)
                    .map((_, i) => {
                      const status = randomArr([
                        "pending",
                        "approved",
                        "rejected",
                      ]);
                      return (
                        <Tr key={i}>
                          <Td>Event-{i}</Td>
                          <Td>Type-1</Td>
                          <Td>{new Date().toLocaleString()}</Td>
                          <Td
                            color={mapEventStatusToColor(status as EventStatus)}
                          >
                            {status}
                          </Td>
                          <Td>
                            <BsThreeDots size={30} />
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
                    <Th>Event</Th>
                    <Th>Type</Th>
                    <Th>Date</Th>
                    <Th>Status</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Array(3)
                    .fill(0)
                    .map((_, i) => {
                      const status = randomArr([
                        "pending",
                        "approved",
                        "rejected",
                      ]);
                      return (
                        <Tr key={i}>
                          <Td>Event-{i}</Td>
                          <Td>Type-1</Td>
                          <Td>{new Date().toLocaleString()}</Td>
                          <Td
                            color={mapEventStatusToColor(status as EventStatus)}
                          >
                            {status}
                          </Td>
                          <Td>
                            <BsThreeDots size={30} />
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

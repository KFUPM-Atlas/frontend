import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Image,
  useDisclosure,
  HStack,
  Text,
  Center,
} from "@chakra-ui/react";
import { IoPeopleOutline, IoSend } from "react-icons/io5";
import { Sidebar } from "../components/Sidebar";
import { Stat } from "../components/Stat";
import { EventStatus } from "../enums/event_status";
import { mapEventStatusToColor } from "../utils/map_event_status_to_color";
import { randomArr } from "../utils/random_arr";
import { BsCalendar } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
export const Overview: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
              total={1023}
              icon={<IoPeopleOutline size={20} />}
              bg={"black"}
              color={"white"}
            />
            <Stat
              title="Total Followers"
              total={1023}
              icon={<BsCalendar size={20} />}
              bg={"#CED1F4"}
              color={"black"}
            />
            <Stat
              title="Total Followers"
              total={1023}
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
                        <Tr>
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
                        <Tr>
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

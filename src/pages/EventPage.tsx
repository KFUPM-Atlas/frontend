import {
  Box,
  Stack,
  Image,
  HStack,
  Heading,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Button,
  Text,
  AvatarGroup,
  Avatar,
  Link,
  Icon,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { MobileNavbar } from "../components/MobileNavbar";
import { Overview } from "../components/Overview";
import { TabElement } from "../components/TabElement";
import { COLORS } from "../core/constants";
import { BsArrowRight } from "react-icons/bs";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useAuthContext } from "../hooks/useAuthContext";

export const EventPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  return (
    <>
      <Stack
        spacing={0}
        flexDir={{ base: "column", lg: "row-reverse" }}
        minH="100vh"
      >
        <Image
          src="/hackathon.jpeg"
          objectFit="fill"
          boxShadow="md"
          minH="60vh"
          w={{ base: "100%", lg: "50%" }}
        />
        <Box minH="40vh" w={{ base: "100%", lg: "50%" }} boxShadow="lg" p={8}>
          <HStack spacing={1} pb={4}>
            <Icon as={ArrowBackIcon} />
            <Text onClick={() => navigate("/events")}>Back</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Heading size="lg" color={COLORS.PRIMARY}>
              React Hackathon
            </Heading>
            <AvatarGroup size="sm" max={2}>
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
              <Avatar
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </AvatarGroup>
          </HStack>
          <Tabs pt={3}>
            <TabList borderColor="white">
              <TabElement title="Overview" />
            </TabList>
            <TabPanels>
              <TabPanel px={0}>
                <Overview />
              </TabPanel>
            </TabPanels>
          </Tabs>
          {user && (
            <Button
              w="full"
              bgGradient="linear(to-l, gray.600, gray.900)"
              color="white"
              p={8}
              onClick={() => toast.success("Registered Event")}
              _focus={{ bgGradient: "linear(to-l, gray.600, gray.900)" }}
            >
              <HStack justifyContent="space-between">
                <Text>Attend</Text>
                <BsArrowRight />
              </HStack>
            </Button>
          )}
          {!user && (
            <Button
              w="full"
              bgGradient="linear(to-l, gray.600, gray.900)"
              color="white"
              p={8}
              onClick={() => navigate("/login")}
              _focus={{ bgGradient: "linear(to-l, gray.600, gray.900)" }}
            >
              <HStack justifyContent="space-between">
                <Text>Login to Attend</Text>
              </HStack>
            </Button>
          )}
        </Box>
      </Stack>
    </>
  );
};

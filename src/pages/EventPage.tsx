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
import { useNavigate, useParams } from "react-router";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFetchEvent } from "../hooks/useFetchEvent";
import { useFirestoreRegistrations } from "../hooks/useFirestoreRegistrations";
import { useEffect } from "react";
import { useCheckRegistration } from "../hooks/useCheckRegistration";

export const EventPage: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { event } = useFetchEvent(slug);
  const { createRegistration } = useFirestoreRegistrations();
  const { hasRegistration, loading } = useCheckRegistration(slug, user?.uid);
  console.log(hasRegistration);
  return (
    <>
      {event && (
        <Stack
          spacing={0}
          flexDir={{ base: "column", lg: "row-reverse" }}
          minH="100vh"
        >
          <Image
            src="/ctf.jpeg"
            objectFit="cover"
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
                {event?.eventName}
              </Heading>
              <AvatarGroup size="sm" max={2}>
                <Avatar
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
                <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                <Avatar
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />
                <Avatar
                  name="Christian Nwamba"
                  src="https://bit.ly/code-beast"
                />
              </AvatarGroup>
            </HStack>
            <Tabs pt={3}>
              <TabList borderColor="white">
                <TabElement title="Overview" />
              </TabList>
              <TabPanels>
                <TabPanel px={0}>
                  <Overview event={event} />
                </TabPanel>
              </TabPanels>
            </Tabs>
            {user && (
              <>
                {!loading && !hasRegistration && (
                  <Button
                    w="full"
                    bgGradient="linear(to-l, gray.600, gray.900)"
                    color="white"
                    p={8}
                    onClick={() => createRegistration(user.uid, event.slug)}
                    _focus={{ bgGradient: "linear(to-l, gray.600, gray.900)" }}
                  >
                    <HStack justifyContent="space-between">
                      <Text>Attend</Text>
                      <BsArrowRight />
                    </HStack>
                  </Button>
                )}
                {!loading && hasRegistration && (
                  <Button
                    w="full"
                    bgGradient="linear(to-l, gray.600, gray.900)"
                    color="white"
                    p={8}
                    _focus={{ bgGradient: "linear(to-l, gray.600, gray.900)" }}
                  >
                    <HStack justifyContent="space-between">
                      <Text>Registered</Text>
                    </HStack>
                  </Button>
                )}
              </>
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
      )}
    </>
  );
};

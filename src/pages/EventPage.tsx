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
  Icon,
} from "@chakra-ui/react";
import { Overview } from "../components/Overview";
import { TabElement } from "../components/TabElement";
import { COLORS } from "../core/constants";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate, useParams } from "react-router";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFetchEvent } from "../hooks/useFetchEvent";
import { useFirestoreRegistrations } from "../hooks/useFirestoreRegistrations";
import { useCheckRegistration } from "../hooks/useCheckRegistration";
import { FiChevronLeft } from "react-icons/fi";
import { Avatars } from "../components/Avatars";
import { useFetchEventRegistrations } from "../hooks/useFetchEventRegistrations";
export const EventPage: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { event } = useFetchEvent(slug);
  const { createRegistration } = useFirestoreRegistrations();
  const { hasRegistration, loading } = useCheckRegistration(slug, user?.uid);
  const { registrations } = useFetchEventRegistrations(slug);

  return (
    <>
      {event && (
        <Stack
          spacing={0}
          flexDir={{ base: "column", lg: "row-reverse" }}
          minH="100vh"
        >
          <Box position="relative">
            <Image
              src={event.posterLink}
              objectFit="cover"
              boxShadow="md"
              minH="60vh"
              w={{ base: "100%", lg: "50%" }}
            />
            <Box
              top={7}
              borderRadius="full"
              px={3}
              pt={3}
              pb={1.5}
              opacity={0.5}
              left={4}
              position="absolute"
              bgColor="gray"
              onClick={() => navigate("/events")}
            >
              <Icon w={5} h={5} pr={0.5} color="white" as={FiChevronLeft} />
            </Box>
            <Box
              top={7}
              borderRadius="full"
              right={4}
              position="absolute"
              bgColor="gray"
            >
              <Image
                src={event?.club?.logoUrl}
                w={12}
                h={12}
                objectFit="cover"
                borderRadius={"full"}
                boxShadow="md"
              />
            </Box>
          </Box>
          <Box minH="40vh" w={{ base: "100%", lg: "50%" }} boxShadow="lg" p={8}>
            <HStack justifyContent="space-between">
              <Heading size="lg" color={COLORS.PRIMARY}>
                {event?.title}
              </Heading>
              {registrations.length >= 1 && (
                <Avatars
                  registrations={registrations}
                  size="md"
                  type="eventPage"
                />
              )}
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
                    onClick={() => createRegistration(user.uid, event.eventId)}
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

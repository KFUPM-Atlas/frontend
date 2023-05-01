import { Box, Container, Heading, HStack } from "@chakra-ui/react";
import { MobileNavbar } from "../components/MobileNavbar";
import { ExploreEvents } from "../components/ExploreEvents";
import { COLORS } from "../core/constants";
import { TicketEvents } from "../components/TicketEvents";
import { useFetchRegistrations } from "../hooks/useFetchRegistrations";
import { returnSlugs } from "../utils/return_eventIds";
import { useAuthContext } from "../hooks/useAuthContext";

export const Tickets: React.FC = () => {
  const { user } = useAuthContext();
  const { registrations } = useFetchRegistrations(user?.uid);
  const eventIds = returnSlugs(registrations);

  return (
    <>
      <Box minH="100vh">
        <Container maxW="container.lg">
          <Heading
            size="lg"
            fontWeight="bold"
            fontSize={29}
            color={COLORS.PRIMARY}
            pt={2}
          >
            My Tickets
          </Heading>
          {registrations && <TicketEvents eventIds={eventIds} />}
        </Container>
      </Box>
      <MobileNavbar />
    </>
  );
};

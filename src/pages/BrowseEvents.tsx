import { Box, Container, Heading, HStack } from "@chakra-ui/react";
import { MobileNavbar } from "../components/MobileNavbar";
import { EventList } from "../components/EventList";
import { COLORS } from "../core/constants";
export const BrowseEvents: React.FC = () => {
  return (
    <>
      <Box minH="100vh">
        <Container maxW="container.lg">
          <Heading
            size="lg"
            fontWeight="bold"
            fontSize={29}
            color={COLORS.PRIMARY}
            py={8}
          >
            Overview
          </Heading>
          <EventList />
        </Container>
      </Box>
      <MobileNavbar />
    </>
  );
};

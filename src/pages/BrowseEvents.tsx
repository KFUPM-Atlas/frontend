import {
  Avatar,
  Box,
  Container,
  Divider,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { MobileNavbar } from "../components/MobileNavbar";
import { EventList } from "../components/EventList";
import { COLORS } from "../core/constants";
export const BrowseEvents: React.FC = () => {
  return (
    <>
      <Box minH="100vh">
        <Container maxW="container.lg">
          <HStack py={6} justifyContent="space-between" alignItems="center">
            <Heading
              size="lg"
              fontWeight="bold"
              fontSize={29}
              color={COLORS.PRIMARY}
            >
              Overview
            </Heading>
            <Avatar name="Faisal Alshawan" size="sm" />
          </HStack>
          <Divider />
          <EventList />
        </Container>
      </Box>
      <MobileNavbar />
    </>
  );
};

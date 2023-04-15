import { Box, Container, Heading, HStack } from "@chakra-ui/react";
import { MobileNavbar } from "../components/MobileNavbar";
import { ExploreEvents } from "../components/ExploreEvents";
import { COLORS } from "../core/constants";
import { DesktopNavbar } from "../components/DesktopNavbar";
export const Explore: React.FC = () => {
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
            Explore
          </Heading>
          <ExploreEvents />
        </Container>
      </Box>
      <MobileNavbar />
    </>
  );
};

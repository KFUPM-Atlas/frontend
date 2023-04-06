import {
  Avatar,
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  Button,
} from "@chakra-ui/react";
import { MobileNavbar } from "../components/MobileNavbar";
import { EventList } from "../components/EventList";
import { COLORS } from "../core/constants";
import { useNavigate } from "react-router";
import { useAuthContext } from "../hooks/useAuthContext";
export const BrowseEvents: React.FC = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
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
            {!user && (
              <Button
                bg={"white"}
                color={COLORS.PRIMARY}
                boxShadow={"lg"}
                as={"a"}
                onClick={() => navigate("/login")}
                fontSize="sm"
              >
                Login
              </Button>
            )}
          </HStack>
          <Divider />
          <EventList />
        </Container>
      </Box>
      <MobileNavbar />
    </>
  );
};

import {
  Text,
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { MobileNavbar } from "../components/MobileNavbar";
import { EventList } from "../components/EventList";
import { COLORS } from "../core/constants";
import { useNavigate } from "react-router";
import { useAuthContext } from "../hooks/useAuthContext";
import { DesktopNavbar } from "../components/DesktopNavbar";
import { EventRow } from "../components/events/EventRow";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const BrowseEvents: React.FC = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  return (
    <>
      <Box minH="100vh">
        <Container maxW="container.lg">
          <HStack py={6} justifyContent="space-between" alignItems="center">
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
          {/* <Divider />
          <EventList /> */}
          <HStack justifyContent="space-between" pb={4}>
            <HStack>
              <Text fontWeight="bold">My Events</Text>
            </HStack>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                color="white"
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                bgGradient="linear(to-l, gray.600, gray.900)"
              >
                Most Recent <ChevronDownIcon color="green.500" />
              </MenuButton>
              <MenuList>
                <MenuItem>Most Recent</MenuItem>
                <MenuItem>Popular</MenuItem>
                <MenuItem>Hot</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
          <EventRow />
        </Container>
      </Box>
      <MobileNavbar />
    </>
  );
};

import { Avatar, Box, Container, Text, HStack, Button } from "@chakra-ui/react";
import { EventList } from "../components/EventList";
import { COLORS } from "../core/constants";
import { useNavigate } from "react-router";
import { useAuthContext } from "../hooks/useAuthContext";
import { SearchBox } from "../components/SearchBox";
import { CategoryPick } from "../components/CategoryPick";
import { MobileNavbar } from "../components/MobileNavbar";
import { useLogout } from "../hooks/useLogout";
export const BrowseEvents: React.FC = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const { logout } = useLogout();

  return (
    <>
      <Box minH="100vh" bgColor="#FDFDFD">
        <Container maxW="container.lg">
          <HStack
            borderBottomLeftRadius={20}
            borderBottomRightRadius={20}
            py={8}
            px={2}
            justifyContent="space-between"
          >
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
            {user && (
              <Button
                bg={"white"}
                color={COLORS.PRIMARY}
                boxShadow={"lg"}
                as={"a"}
                onClick={() => logout()}
                fontSize="sm"
              >
                Logout
              </Button>
            )}
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </HStack>
          <SearchBox />
          <CategoryPick
            categories={["All", "Tech", "Business", "Entertainment", "Other"]}
          />
          <HStack justifyContent="space-between" pt={4}>
            <Text fontWeight="medium">Events for you</Text>
            <Text>See more</Text>
          </HStack>

          <HStack justifyContent="space-between" pt={4}>
            <Text fontWeight="medium">Popular Events</Text>
            <Text>See more</Text>
          </HStack>
          <EventList />
        </Container>
      </Box>
      <MobileNavbar />
    </>
  );
};

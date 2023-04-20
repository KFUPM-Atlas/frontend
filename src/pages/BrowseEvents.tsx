import {
  Avatar,
  Box,
  Container,
  Text,
  HStack,
  Button,
  Stack,
  Heading,
  AvatarBadge,
} from "@chakra-ui/react";
import { EventList } from "../components/EventList";
import { COLORS } from "../core/constants";
import { useNavigate } from "react-router";
import { useAuthContext } from "../hooks/useAuthContext";
import { SearchBox } from "../components/SearchBox";
import { CategoryPick } from "../components/CategoryPick";
import { MobileNavbar } from "../components/MobileNavbar";
import { HorizontalEventList } from "../components/HorizontalEventList";
import { useCollection } from "../hooks/useCollection";
import { getTagNames } from "../utils/tagToArray";
export const BrowseEvents: React.FC = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const { documents: userProfile } = useCollection("users", [
    "uid",
    "==",
    user?.uid,
  ]);

  const { documents: tags, loading } = useCollection("tags", []);
  console.log(tags);

  return (
    <>
      <Box minH="100vh" bgColor="#FDFDFD">
        <Container maxW="container.lg" py={2}>
          <HStack
            borderBottomLeftRadius={20}
            borderBottomRightRadius={20}
            py={8}
            px={2}
            justifyContent="space-between"
          >
            {user && userProfile && (
              <Stack spacing={1}>
                <Heading
                  bgGradient="linear(to-l, gray.500, gray.900)"
                  bgClip="text"
                  fontSize="2xl"
                  fontWeight="extrabold"
                >
                  Welcome Back!
                </Heading>
                <Text color={COLORS.TEXT_LIGHT} fontWeight="medium">
                  {userProfile[0]?.name}
                </Text>
              </Stack>
            )}

            {user && userProfile && (
              <Stack direction="row" spacing={4}>
                <Avatar
                  name={userProfile[0]?.name}
                  src={userProfile[0]?.profilePictureUrl}
                >
                  <AvatarBadge boxSize="1em" bg="green.500" />
                </Avatar>
              </Stack>
            )}
            {!user && (
              <>
                <Text fontWeight="bold">Logo</Text>
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
              </>
            )}
          </HStack>
          <SearchBox />
          {tags && <CategoryPick categories={getTagNames(tags)} />}
          <HStack justifyContent="space-between" pt={0}>
            <Text fontWeight="bold">Events for you</Text>
            <Text fontWeight="medium" color={COLORS.TEXT_LIGHT}>
              See more
            </Text>
          </HStack>
          <HorizontalEventList />

          <HStack justifyContent="space-between" pt={4}>
            <Text fontWeight="bold">Popular Events</Text>
            <Text color={COLORS.TEXT_LIGHT} fontWeight="medium">
              See more
            </Text>
          </HStack>
          <EventList />
        </Container>
      </Box>
      <MobileNavbar />
    </>
  );
};

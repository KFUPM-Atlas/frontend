import {
  Box,
  Container,
  Wrap,
  WrapItem,
  Avatar,
  Center,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";
import { MobileNavbar } from "../components/MobileNavbar";
import { ExploreEvents } from "../components/ExploreEvents";
import { COLORS } from "../core/constants";
import { ClubTabs } from "../components/ClubTabs";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFetchClub } from "../hooks/useFetchClub";
import { useFirestoreFollowers } from "../hooks/useFirestoreFollowers";
import { useCheckFollow } from "../hooks/useCheckFollow";
import { FollowButton } from "../components/FollowButton";
import { useCollection } from "../hooks/useCollection";

export const ClubPage: React.FC = () => {
  const { id } = useParams();
  const { club } = useFetchClub(id);
  const { user } = useAuthContext();
  const args = ["clubId", "==", id];
  const { documents: followers } = useCollection("followers", args);

  return (
    <>
      {club.id && user && followers && (
        <>
          <Box minH="100vh">
            <Container maxW="container.lg">
              <Center pt={10}>
                <Wrap>
                  <WrapItem>
                    <Avatar size="xl" src={club.logoUrl} />
                  </WrapItem>
                </Wrap>
              </Center>
              <Stack spacing={3}>
                <Text color={COLORS.TEXT_LIGHT} textAlign="center">
                  {followers.length} Followers
                </Text>
                <Center>
                  <FollowButton club={club} />
                </Center>
              </Stack>
              <ClubTabs />
            </Container>
          </Box>
          <MobileNavbar />
        </>
      )}
    </>
  );
};

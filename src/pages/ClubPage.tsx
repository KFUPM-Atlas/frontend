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

export const ClubPage: React.FC = () => {
  const { id } = useParams();
  const { club } = useFetchClub(id);
  const { user } = useAuthContext();

  return (
    <>
      {club.id && user && (
        <>
          <Box minH="100vh">
            <Container maxW="container.lg">
              <Center pt={10}>
                <Wrap>
                  <WrapItem>
                    <Avatar size="xl" src="/gdsc.jpeg" />
                  </WrapItem>
                </Wrap>
              </Center>
              <Stack spacing={3}>
                <Text color={COLORS.TEXT_LIGHT} textAlign="center">
                  {club?.followers} Followers
                </Text>
                <Center>
                  <FollowButton club={club} />
                </Center>
              </Stack>
              <ClubTabs />
            </Container>
          </Box>
        </>
      )}
    </>
  );
};

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
export const ClubPage: React.FC = () => {
  const [follow, setFollow] = useState<boolean>(false);
  return (
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
              300 Followers
            </Text>
            <Center>
              <Button
                bgColor={follow ? COLORS.PRIMARY : "white"}
                color={follow ? "white" : COLORS.PRIMARY}
                border="1px"
                px={8}
                borderRadius="full"
                onClick={() => setFollow(!follow)}
                _focus={{ bgColor: follow ? COLORS.PRIMARY : "white" }}
              >
                {follow ? "Followed" : "Follow"}
              </Button>
            </Center>
          </Stack>
          <ClubTabs />
        </Container>
      </Box>
      <MobileNavbar />
    </>
  );
};

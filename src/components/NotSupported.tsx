import {
  Box,
  Center,
  Image,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { COLORS } from "../core/constants";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFetchUserClubs } from "../hooks/useFetchUserClubs";
interface NotSupportedProps {}

export const NotSupported: React.FC<NotSupportedProps> = ({}) => {
  const { user } = useAuthContext();
  const { clubs } = useFetchUserClubs(user?.uid);
  const navigate = useNavigate();

  return (
    <Box minH="100vh" w="full" bgColor={COLORS.PRIMARY} boxShadow="lg">
      {clubs.length >= 1 && (
        <HStack justifyContent="space-between" p={10}>
          <Heading fontSize="2xl" fontWeight="bold" color="white">
            For event exploration, kindly use mobile view.
          </Heading>

          <Menu>
            <MenuButton as={Button}>Clubs</MenuButton>
            <MenuList>
              {clubs.map((club) => (
                <MenuItem
                  onClick={() => navigate(`/club/${club.clubId}/profile`)}
                >
                  {club.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </HStack>
      )}
      <Center>
        <Stack color="white">
          <Center>
            <Image src="./illustration.svg" w={400} />
          </Center>
        </Stack>
      </Center>
    </Box>
  );
};

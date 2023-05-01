import {
  Box,
  Text,
  Stack,
  Heading,
  HStack,
  SimpleGrid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useFetchClub } from "../hooks/useFetchClub";
import { COLORS } from "../core/constants";
interface ClubAboutProps {}

export const ClubAbout: React.FC<ClubAboutProps> = ({}) => {
  const { id } = useParams();
  const { club } = useFetchClub(id);

  return (
    <>
      {club && (
        <Box>
          <Stack justifyContent="space-between" spacing={20}>
            <Box>
              <Heading fontWeight="bold" fontSize={18} color={COLORS.PRIMARY}>
                Description
              </Heading>
              <Text>{club?.description}</Text>
            </Box>
          </Stack>
        </Box>
      )}
    </>
  );
};

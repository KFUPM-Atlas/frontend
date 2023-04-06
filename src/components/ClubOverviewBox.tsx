import {
  Box,
  Image,
  HStack,
  Stack,
  Text,
  Icon,
  Button,
} from "@chakra-ui/react";
import { COLORS } from "../core/constants";
import { useNavigate } from "react-router-dom";

interface ClubBoxProps {
  club: any;
}

export const ClubOverviewBox: React.FC<ClubBoxProps> = ({ club }) => {
  const navigate = useNavigate();

  return (
    <Box pt={3} onClick={() => navigate(`/club/${club?.clubId}`)}>
      <Box boxShadow="lg" bgColor="white" borderRadius={10}>
        <HStack justifyContent="space-between">
          <Box p={5}>
            <Image
              src="/gdsc.jpeg"
              w={20}
              h={20}
              objectFit="cover"
              borderRadius={10}
              boxShadow="md"
            />
          </Box>
          <Stack spacing={0} pr={10}>
            <Text color={COLORS.PRIMARY} fontWeight="bold">
              {club?.name}
            </Text>
            <Text color={COLORS.TEXT_LIGHT} fontSize={10}>
              {club?.description}
            </Text>
          </Stack>
          <Stack justifyContent="center" spacing={2} pr={5}>
            <Button
              fontSize={10}
              size="sm"
              bgColor={COLORS.PRIMARY}
              color="white"
              px={5}
              borderRadius="lg"
            >
              <Text>View</Text>
            </Button>
          </Stack>
        </HStack>
      </Box>
    </Box>
  );
};

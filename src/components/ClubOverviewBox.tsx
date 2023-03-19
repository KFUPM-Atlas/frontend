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
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { CgScreen } from "react-icons/cg";
import { MdDateRange } from "react-icons/md";

interface EventBoxProps {}

export const ClubOverviewBox: React.FC<EventBoxProps> = ({}) => {
  const navigate = useNavigate();

  return (
    <Box pt={3} onClick={() => navigate("/club/test")}>
      <Box boxShadow="lg" bgColor="white" borderRadius={10}>
        <HStack>
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
              GDSC
            </Text>
            <Text color={COLORS.TEXT_LIGHT} fontSize={10}>
              Some Description
            </Text>
          </Stack>
          <Stack justifyContent="center" spacing={2}>
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

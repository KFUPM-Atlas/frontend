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

interface EventBoxProps {
  role: string;
  name: string;
}

export const MemberOverviewBox: React.FC<EventBoxProps> = ({ role, name }) => {
  return (
    <Box pt={3}>
      <Box boxShadow="lg" bgColor="white" borderRadius={10}>
        <HStack>
          <Box p={5}>
            <Image
              src="/laptop.svg"
              w={20}
              h={20}
              objectFit="cover"
              borderRadius={10}
              boxShadow="md"
            />
          </Box>
          <Stack spacing={0}>
            <Text color={COLORS.PRIMARY} fontWeight="bold" fontSize={14}>
              {name}
            </Text>
            <Text color={COLORS.TEXT_LIGHT} fontSize={14}>
              {role}
            </Text>
          </Stack>
        </HStack>
      </Box>
    </Box>
  );
};

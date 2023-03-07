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

export const EventOverviewBox: React.FC<EventBoxProps> = ({}) => {
  const navigate = useNavigate();

  return (
    <Box pt={3} onClick={() => navigate("/event/test")}>
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
          <Stack spacing={0} pr={10}>
            <Text color={COLORS.PRIMARY} fontWeight="bold">
              Hackathon
            </Text>
            <Text color={COLORS.TEXT_LIGHT} fontSize={10}>
              Some Description
            </Text>
          </Stack>
          <Stack justifyContent="center" spacing={2}>
            <HStack justifyContent="center">
              <Icon as={MdDateRange} w={4} h={4} />
              <Text fontSize={10}>14th Feb</Text>
            </HStack>
            <Button
              fontSize={10}
              size="sm"
              bgColor={COLORS.PRIMARY}
              color="white"
              px={5}
              borderRadius="lg"
            >
              <HStack>
                <Icon as={CgScreen} w={4} h={4} />
                <Text>Tech</Text>
              </HStack>
            </Button>
          </Stack>
        </HStack>
      </Box>
    </Box>
  );
};

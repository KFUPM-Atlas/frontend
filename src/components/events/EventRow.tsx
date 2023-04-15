import {
  HStack,
  Image,
  Stack,
  Text,
  Button,
  Box,
  VStack,
} from "@chakra-ui/react";
import { COLORS } from "../../core/constants";
interface EventRowProps {}

export const EventRow: React.FC<EventRowProps> = ({}) => {
  return (
    <HStack
      justifyContent="space-between"
      boxShadow="lg"
      borderRadius="md"
      _hover={{ cursor: "pointer" }}
    >
      <HStack p={5}>
        <Image
          src="/ctf.jpeg"
          w={20}
          h={20}
          objectFit="cover"
          borderRadius={10}
        />
        <Stack pl={4} spacing={0}>
          <Text fontWeight="bold" color={COLORS.PRIMARY}>
            React Hackathon
          </Text>
          <Text fontWeight="bold" color={COLORS.TEXT_LIGHT} fontSize={10}>
            July 09, 2022
          </Text>
        </Stack>
      </HStack>
    </HStack>
  );
};

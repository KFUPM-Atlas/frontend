import { Box, Stack, Text, Divider, Image, Button } from "@chakra-ui/react";
import { COLORS } from "../core/constants";
import { AiOutlineExpand } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
interface TicketBoxProps {
  event: any;
}

export const TicketBox: React.FC<TicketBoxProps> = ({ event }) => {
  const navigate = useNavigate();
  return (
    <Box>
      <Stack bgColor={"white"} p={10} boxShadow="lg" borderRadius={10}>
        <Text fontSize={20} fontWeight="bold">
          {event?.title}
        </Text>
        <Text fontSize={15} color={COLORS.TEXT_LIGHT}>
          {event?.description}
        </Text>
        <Divider />
        <Text fontSize={20} fontWeight="bold" pt={4}>
          {event?.location}
        </Text>
        <Image
          src={event?.posterLink}
          w={"full"}
          h={200}
          objectFit="cover"
          borderRadius={10}
          boxShadow="md"
        />
        <Box>
          <Button
            type="submit"
            bgColor={COLORS.PRIMARY}
            color="white"
            size="md"
            w="full"
            mt={10}
            fontWeight="medium"
            border={"1px"}
            borderColor="gray.300"
            leftIcon={<AiOutlineExpand />}
            onClick={() => navigate(`/event/${event?.eventId}`)}
          >
            Details
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

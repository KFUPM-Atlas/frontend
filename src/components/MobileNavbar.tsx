import { Box, HStack, Button, Icon } from "@chakra-ui/react";
import { COLORS } from "../core/constants";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";
import { HiOutlineTicket } from "react-icons/hi";
import { useMediaQuery } from "@chakra-ui/react";
interface MobileNavbarProps {}

export const MobileNavbar: React.FC<MobileNavbarProps> = ({}) => {
  const [isLargerThan450] = useMediaQuery("(min-width: 450px)", {
    ssr: false,
    fallback: false,
  });

  return (
    <>
      {!isLargerThan450 && (
        <Box
          bgColor={COLORS.PRIMARY}
          boxShadow="xs"
          py={5}
          position={"sticky"}
          bottom={2}
          mx={4}
          my={4}
          borderRadius={12}
          bgGradient="linear(to-l, gray.600, gray.900)"
        >
          <HStack justifyContent="space-evenly" color={COLORS.TEXT_LIGHT}>
            <Button
              px={10}
              py={6}
              borderRadius={7}
              bgColor={"transparent"}
              _focus={{ bgColor: "transparent" }}
            >
              <Icon as={BiHomeAlt} w={6} h={6} color="white" />
            </Button>
            <Button
              px={10}
              py={6}
              borderRadius={7}
              bgColor={"transparent"}
              _focus={{ bgColor: "transparent" }}
            >
              <Icon as={AiOutlineCalendar} w={6} h={6} color="white" />
            </Button>
            <Button
              px={10}
              py={6}
              borderRadius={7}
              bgColor={"transparent"}
              _focus={{ bgColor: "transparent" }}
            >
              <Icon as={HiOutlineTicket} w={6} h={6} color="white" />
            </Button>
            <Button
              px={10}
              py={6}
              borderRadius={7}
              bgColor={"transparent"}
              _focus={{ bgColor: "transparent" }}
            >
              <Icon as={AiOutlineUser} w={6} h={6} color="white" />
            </Button>
          </HStack>
        </Box>
      )}
    </>
  );
};

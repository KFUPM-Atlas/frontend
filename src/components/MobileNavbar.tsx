import { Box, HStack, Button, Icon } from "@chakra-ui/react";
import { COLORS } from "../core/constants";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";
import { HiOutlineTicket } from "react-icons/hi";
import { useMediaQuery } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
interface MobileNavbarProps {}

export const MobileNavbar: React.FC<MobileNavbarProps> = ({}) => {
  const [isLargerThan450] = useMediaQuery("(min-width: 450px)", {
    ssr: false,
    fallback: false,
  });
  const navigate = useNavigate();
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <>
      {!isLargerThan450 && (
        <Box
          boxShadow="xs"
          py={5}
          position={"sticky"}
          bottom={2}
          bgGradient="linear(to-l, gray.600, gray.900)"
          m={2}
          borderRadius={10}
        >
          <HStack justifyContent="space-evenly" color={COLORS.TEXT_LIGHT}>
            <Button
              px={10}
              py={6}
              borderRadius={7}
              bgColor={"transparent"}
              _focus={{ bgColor: "transparent" }}
            >
              <Icon
                as={BiHomeAlt}
                w={6}
                h={6}
                color="white"
                onClick={() => navigate("/events")}
              />
            </Button>
            <Button
              px={10}
              py={6}
              borderRadius={7}
              bgColor={"transparent"}
              _focus={{ bgColor: "transparent" }}
            >
              <Icon
                as={AiOutlineCalendar}
                w={6}
                h={6}
                color="white"
                onClick={() => navigate("/explore")}
              />
            </Button>
            {user && (
              <>
                <Button
                  px={10}
                  py={6}
                  borderRadius={7}
                  bgColor={"transparent"}
                  _focus={{ bgColor: "transparent" }}
                  onClick={() => navigate("/tickets")}
                >
                  <Icon as={HiOutlineTicket} w={6} h={6} color="white" />
                </Button>
                <Button
                  px={10}
                  py={6}
                  borderRadius={7}
                  bgColor={"transparent"}
                  _focus={{ bgColor: "transparent" }}
                  onClick={() => logout()}
                >
                  <Icon as={MdOutlineLogout} w={6} h={6} color="white" />
                </Button>
              </>
            )}
          </HStack>
        </Box>
      )}
    </>
  );
};

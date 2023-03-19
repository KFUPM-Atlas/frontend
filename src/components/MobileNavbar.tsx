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
  console.log(user);

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
            <Button
              px={10}
              py={6}
              borderRadius={7}
              bgColor={"transparent"}
              _focus={{ bgColor: "transparent" }}
            >
              <Icon as={HiOutlineTicket} w={6} h={6} color="white" />
            </Button>
            {user && (
              <Button
                px={10}
                py={6}
                borderRadius={7}
                bgColor={"transparent"}
                _focus={{ bgColor: "transparent" }}
              >
                <Icon
                  as={MdOutlineLogout}
                  onClick={() => logout()}
                  w={6}
                  h={6}
                  color="white"
                />
              </Button>
            )}
          </HStack>
        </Box>
      )}
    </>
  );
};

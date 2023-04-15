import {
  Box,
  HStack,
  Text,
  Link,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Icon,
} from "@chakra-ui/react";
import { HiOutlineCalendar } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import { checkUrl } from "../utils/checkUrl";

interface DesktopNavbarProps {}

export const DesktopNavbar: React.FC<DesktopNavbarProps> = ({}) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <HStack
      bgGradient="linear(to-l, gray.600, gray.900)"
      py={10}
      px={32}
      justifyContent="space-between"
      boxShadow="lg"
      mb={4}
    >
      <HStack>
        <Icon as={HiOutlineCalendar} color="white" />
        <Text color="white" fontWeight="medium">
          Atlas
        </Text>
      </HStack>
      <HStack color="white" spacing={10}>
        <Link
          onClick={() => navigate("/events")}
          color={checkUrl(location.pathname, "events") ? "white" : "gray.500"}
          borderBottomColor={
            checkUrl(location.pathname, "events") ? "green.500" : "transparent"
          }
          _hover={{ outline: "off" }}
          borderBottomWidth={2}
          borderBottomStyle="solid"
        >
          Events
        </Link>
        <Link
          onClick={() => navigate("/explore")}
          color={checkUrl(location.pathname, "explore") ? "white" : "gray.500"}
          borderBottomColor={
            checkUrl(location.pathname, "explore") ? "green.500" : "transparent"
          }
          _hover={{ outline: "off" }}
          borderBottomWidth={2}
          borderBottomStyle="solid"
        >
          Explore
        </Link>
        <Link
          onClick={() => navigate("/tickets")}
          color={checkUrl(location.pathname, "tickets") ? "white" : "gray.500"}
          borderBottomColor={
            checkUrl(location.pathname, "tickets") ? "green.500" : "transparent"
          }
          _hover={{ outline: "off" }}
          borderBottomWidth={2}
          borderBottomStyle="solid"
        >
          Tickets
        </Link>
      </HStack>
      <Avatar
        size="md"
        name="Faisal Alshawan"
        src="https://bit.ly/dan-abramov"
      />
    </HStack>
  );
};

import { Box, CloseButton, Flex, Spacer, Text } from "@chakra-ui/react";
import { linkItems } from "../utils/link_items";
import { NavItem } from "./NavItem";
import { BiLogOut } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { FiCompass, FiHome, FiStar, FiTrendingUp } from "react-icons/fi";

interface NavItemProps {
  onClose: any;
}

export const SidebarContent: React.FC<NavItemProps> = ({ onClose }) => {
  const { id } = useParams();
  const links = [
    { name: "Overview", icon: FiHome, link: `/club/${id}/overview` },
    { name: "Events", icon: FiTrendingUp, link: `/club/${id}/events` },
    { name: "Requests", icon: FiCompass, link: `/club/${id}/requests` },
    { name: "Club Profile", icon: FiStar, link: `/club/${id}/profile` },
  ];

  return (
    <Box
      bg={"black"}
      color={"white"}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {links.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          name={link.name}
          link={link.link}
        />
      ))}
      <Spacer h={"lg"} />
      <NavItem key={324} icon={BiLogOut} name={"Logout"} />
    </Box>
  );
};

import { Box, CloseButton, Flex, Spacer, Text } from "@chakra-ui/react";
import { NavItem } from "./NavItem";
import { BiLogOut } from "react-icons/bi";
import {supervisorLinkItems} from "../utils/supervisor_link_items";
interface NavItemProps {
  onClose: any;
}

export const SupervisorSidebarContent: React.FC<NavItemProps> = ({ onClose }) => {
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
      {supervisorLinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} text={link.name} />
      ))}
      <Spacer h={"lg"} />
      <NavItem key={324} icon={BiLogOut} text={"تسجيل الخروج"} />
    </Box>
  );
};

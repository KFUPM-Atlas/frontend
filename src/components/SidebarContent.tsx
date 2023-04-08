import { Box, CloseButton, Flex, Spacer, Text } from "@chakra-ui/react";
import { linkItems } from "../utils/link_items";
import { NavItem } from "./NavItem";
import { BiLogOut } from "react-icons/bi";
interface NavItemProps {
  onClose: any;
}

export const SidebarContent: React.FC<NavItemProps> = ({ onClose }) => {
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
      {linkItems.map((link) => (
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

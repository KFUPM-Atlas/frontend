import { Box, Flex, Icon, Link } from "@chakra-ui/react";
import { LinkItemProps } from "../utils/link_items";
import { Link as RouteLink } from "react-router-dom";
interface NavItemProps extends LinkItemProps {}

export const NavItem: React.FC<NavItemProps> = ({ icon, name, isOn, link }) => {
  return (
    <RouteLink to={link!}>
      <Box style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
        >
          {icon && <Icon mr="4" fontSize="16" as={icon} />}
          {name}
        </Flex>
      </Box>
    </RouteLink>
  );
};

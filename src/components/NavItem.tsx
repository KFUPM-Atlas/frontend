import { Flex, Icon, Link } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface NavItemProps {
  icon: IconType;
  text: string;
}
export const NavItem: React.FC<NavItemProps> = ({ icon, text }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
      >
        {icon && <Icon mr="4" fontSize="16" as={icon} />}
        {text}
      </Flex>
    </Link>
  );
};

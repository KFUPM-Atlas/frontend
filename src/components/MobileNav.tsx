import { Flex, IconButton, Text } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

interface MobileNavProps {
  onOpen: any;
}
export const MobileNav: React.FC<MobileNavProps> = ({ onOpen }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      color={"white"}
      bg={"black"}
      display={{ base: "flex", md: "none" }}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};

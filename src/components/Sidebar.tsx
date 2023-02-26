import { Box, Drawer, DrawerContent } from "@chakra-ui/react";
import { MobileNav } from "./MobileNav";
import { SidebarContent } from "./SidebarContent";

interface SidebarProps {
  isOpen: boolean;
  onOpen: any;
  onClose: any;
}

export const Sidebar: React.FC<SidebarProps> = ({
  onClose,
  isOpen,
  onOpen,
}) => {
  return (
    <>
      {/**
       * by default it will be hidden on mobile and shown on desktop
       */}
      <Box display={{ base: "none", md: "block" }}>
        <SidebarContent onClose={onClose} />
      </Box>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/**
       * this is the mobile nav that will be hidden on desktop, when the it's button is clicked, it will open the drawer aboce
       */}
      <MobileNav onOpen={onOpen} />
    </>
  );
};

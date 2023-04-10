import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { Lines } from "../components/create_event/Lines";
import { Sidebar } from "../components/Sidebar";
import { TableData } from "../components/TableData";
import { useCollection } from "../hooks/useCollection";

interface CustomBtnProps {
  isSelected: boolean;
  title: string;
}
export const CustomBtn: React.FC<CustomBtnProps> = ({ isSelected, title }) => {
  return (
    <Button bg={isSelected ? "black" : "gray.600"} color={"white"}>
      {title}
    </Button>
  );
};
export const Requests: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();
  const { id } = useParams();
  const args = ["clubId", "==", id];
  const { documents } = useCollection("requests", args);
  return (
    <Box minH="100vh">
      <Sidebar onClose={onClose} isOpen={isOpen} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Box
          mx={{
            base: "1",
            md: "24",
          }}
          my={"16"}
        >
          <Flex justifyContent={"space-between"}>
            <Heading>Requests</Heading>
            <Button bg={"black"} color={"white"} onClick={onOpenModal}>
              Create Request
            </Button>
          </Flex>
          <Modal isOpen={isOpenModal} onClose={onCloseModal} size={"2xl"}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Multi-Step Form</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Lines />
                <HStack>
                  <CustomBtn isSelected={true} title="Budget" />
                  <CustomBtn isSelected={false} title="Custody" />
                  <CustomBtn isSelected={false} title="Settlement" />
                  <CustomBtn isSelected={false} title="Budget" />
                </HStack>
              </ModalBody>
              <ModalFooter>
                <Button bg={"black"} color={"white"} mx={"5"}>
                  Cancel
                </Button>

                <Button bg={"black"} color={"white"}>
                  Send
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <TableData data={documents} type="request" />
        </Box>
      </Box>
    </Box>
  );
};

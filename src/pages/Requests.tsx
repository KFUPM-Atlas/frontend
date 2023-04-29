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
  Image,
  Text,
  Stack,
  Center,
  Input,
} from "@chakra-ui/react";
import { doc, getFirestore, serverTimestamp, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Lines } from "../components/create_event/Lines";
import { Sidebar } from "../components/Sidebar";
import { TableData } from "../components/TableData";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";
import { useUser } from "../hooks/useUser";
import { generateId } from "../utils/generate_id";
import { storage } from "../utils/initialize_app_if_necessary";
import { removeEmpty } from "../utils/remove_empty";
interface CustomBtnProps {
  isSelected: boolean;
  title: string;
  onClick?: () => void;
}
export const CustomBtn: React.FC<CustomBtnProps> = ({
  isSelected,
  title,
  onClick,
}) => {
  return (
    <Button
      bg={isSelected ? "black" : "gray.600"}
      color={"white"}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};
export const Requests: React.FC = () => {
  const [tab, setTab] = useState<
    "Budget" | "Custody" | "Settlement" | "Announcement"
  >("Budget");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();
  const { id } = useParams();
  const args = ["clubId", "==", id];
  const { documents } = useCollection("requests", args);
  const { user } = useAuthContext();
  const name = useUser();
  const requestId = generateId();
  const [file, setFile] = useState<any>(); // progress
  const [link, setLink] = useState<string>();
  const [percent, setPercent] = useState(0); // Handle file upload event and update state
  const [url, setUrl] = useState("");
  const handleDownload = () => {
    const fileUrl = "./Register.tsx";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  function handleChange(event) {
    console.log("files ", event.target.files);
    console.log("single file ", event.target.files[0]);

    setFile(event.target.files[0]);
    handleUpload(event.target.files[0]);
  }
  const handleUpload = (f: any) => {
    if (!f) {
      console.log("File ", f, " is not valid");
      alert("Please upload a file first!");
      return;
    }
    const storageRef = ref(storage, `/files/${requestId}`); // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, f as any);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        ); // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setFile(null);
          setUrl(url);
          console.log(url);
        });
      }
    );
  };
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
                  <CustomBtn
                    isSelected={tab == "Budget"}
                    title="Budget"
                    onClick={() => setTab("Budget")}
                  />
                  <CustomBtn
                    isSelected={tab == "Custody"}
                    title="Custody"
                    onClick={() => setTab("Custody")}
                  />
                  <CustomBtn
                    isSelected={tab == "Settlement"}
                    title="Settlement"
                    onClick={() => setTab("Settlement")}
                  />
                  <CustomBtn
                    isSelected={tab == "Announcement"}
                    title="Announcement"
                    onClick={() => setTab("Announcement")}
                  />
                </HStack>
              </ModalBody>
              <Box my={10}>
                <Center>
                  {tab == "Announcement" ? (
                    <>
                      <Box>
                        <Input
                          id="file"
                          type={"file"}
                          bgColor={"bg.black"}
                          hidden
                          onChange={handleChange}
                          accept="application/pdf"
                        />
                        <Text
                          color={"white"}
                          width={"sm"}
                          borderRadius={"md"}
                          bg={"black"}
                          as={"label"}
                          htmlFor={"file"}
                          p={3}
                        >
                          Upload Poster
                        </Text>
                        <Box mt={10}>
                          <Input
                            placeholder={"Link"}
                            borderRadius={10}
                            border={"1px"}
                          />
                        </Box>
                      </Box>
                    </>
                  ) : (
                    <>
                      <Stack direction={"column"} mx={10}>
                        <Box>
                          <Center fontSize={"5xl"} fontWeight={"bold"}>
                            1
                          </Center>
                        </Box>
                        <Button
                          bg={"black"}
                          color={"white"}
                          onClick={handleDownload}
                        >
                          Download Template
                        </Button>
                      </Stack>
                      <Stack direction={"column"} mx={10}>
                        <Box>
                          <Center fontSize={"5xl"} fontWeight={"bold"}>
                            2
                          </Center>
                        </Box>
                        <Button bg={"gray.200"} color={"black"}>
                          Fill out form
                        </Button>
                      </Stack>
                      <Stack direction={"column"} mx={10}>
                        <Box>
                          <Center fontSize={"5xl"} fontWeight={"bold"}>
                            3
                          </Center>
                        </Box>
                        <Box>
                          <Input
                            id="file"
                            type={"file"}
                            bgColor={"bg.black"}
                            hidden
                            onChange={handleChange}
                            accept="application/pdf"
                          />
                          <Text
                            color={"white"}
                            width={"sm"}
                            borderRadius={"md"}
                            bg={"black"}
                            as={"label"}
                            htmlFor={"file"}
                            p={3}
                          >
                            Upload file
                          </Text>
                        </Box>
                      </Stack>
                    </>
                  )}
                </Center>
              </Box>
              <ModalFooter>
                <Button bg={"black"} color={"white"} mx={"5"}>
                  Cancel
                </Button>

                <Button
                  bg={"black"}
                  color={"white"}
                  onClick={async () => {
                    const requestDocRef = doc(
                      getFirestore(),
                      "requests",
                      requestId
                    );

                    await setDoc(
                      requestDocRef,
                      removeEmpty({
                        clubId: id,
                        sender: name?.name,
                        userId: user?.uid || "",
                        type: tab,
                        status: "pending",
                        documentUrl: url,
                        posterLink: link,
                        createdAt: serverTimestamp(),
                        isDeleted: false,
                      })
                    ); // Save download URL to Firestore with custom doc ID
                    onCloseModal();
                  }}
                >
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

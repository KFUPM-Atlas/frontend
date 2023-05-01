import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  Tag,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { WithPresidentCheck } from "../components/WithPresidentCheck";
import { useCollection } from "../hooks/useCollection";
import { storage } from "../utils/initialize_app_if_necessary";

const ClubProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();
  const { id } = useParams();
  const args = ["clubId", "==", id];
  const { documents: members } = useCollection("clubMembers", args);
  const { documents: club } = useCollection("clubs", args);
  const [file, setFile] = useState<any>(""); // progress
  const [percent, setPercent] = useState(0); // Handle file upload event and update state
  const [temp, setTemp] = useState(0);
  function handleChange(event) {
    setFile(event.target.files[0]);
    handleUpload(event.target.files[0]);
  }
  const handleUpload = (f: any) => {
    console.log("file: ", f);
    if (!f) {
      alert("Please upload an image first!");
      return;
    }
    const storageRef = ref(storage, `/files/${id}`); // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
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
          setTemp(Math.random());
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
          p={"8"}
          borderRadius={"lg"}
          shadow={"2xl"}
          bg={".100"}
        >
          <Flex justifyContent={"space-between"}>
            <Heading>Club Profile</Heading>
          </Flex>
          <VStack>
            <Heading>Edit Profile</Heading>
            <Text>Let people know more about the club!</Text>
          </VStack>
          <Box mt={10}>
            <Center>
              <Image
                src={`https://firebasestorage.googleapis.com/v0/b/atlas-5fb14.appspot.com/o/files%2F${id}?alt=media&token=20cb9bd7-8af6-4534-bf30-e23c390d0882&temp=${temp}`}
                alt="Google Logo"
                w={200}
                h={100}
              />
            </Center>
            <Stack direction={"column"} spacing={5}>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                Club Profile Picture
              </Text>
              <Text fontSize={"lg"}>Club Profile Picture</Text>
              <Text fontSize={"lg"} color={"gray.500"}>
                This will be displayed in your club's <strong>profile</strong>
              </Text>
              <Input
                id="file"
                type={"file"}
                bgColor={"bg.black"}
                hidden
                onChange={handleChange}
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
                <Center>Upload file</Center>
              </Text>
            </Stack>
            <Stack direction={"column"} spacing={5} mt={10}>
              <Text fontSize={"2xl"}>Club Description</Text>
              <Text fontSize={"lg"} color={"gray.500"}>
                <Stack>{club?.[0].description}</Stack>
              </Text>
            </Stack>
            <Stack direction={"column"} spacing={5} mt={10}>
              <Text fontSize={"2xl"}>Club Members</Text>
              <Text fontSize={"lg"} color={"gray.500"}>
                Showcase the clubs great <strong>members!</strong>
              </Text>
              <Stack>
                {members?.map((e, i) => {
                  return (
                    <Text>
                      {e.name} <Tag>{e.role}</Tag>
                    </Text>
                  );
                })}
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WithPresidentCheck(ClubProfile);

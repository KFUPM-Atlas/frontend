import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";

export const ClubProfile: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

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
                src="https://seeklogo.com/images/G/google-developers-logo-F8BF3155AC-seeklogo.com.png"
                alt="Google Logo"
                w={10}
                h={5}
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
              <Input id="file" type={"file"} bgColor={"bg.black"} hidden />
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
              <Text fontSize={"2xl"}>Club Objective</Text>
              <Text fontSize={"lg"} color={"gray.500"}>
                This will represent your club's goal
              </Text>
              <Input />
            </Stack>
            <Stack direction={"column"} spacing={5} mt={10}>
              <Text fontSize={"2xl"}>Club Members</Text>
              <Text fontSize={"lg"} color={"gray.500"}>
                Showcase the clubs great <strong>members!</strong>
              </Text>
              <Input />
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

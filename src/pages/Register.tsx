import { Box, Center, HStack, Image, Container, Stack } from "@chakra-ui/react";
import { Form } from "../components/Form";
import { COLORS } from "../core/constants";
import { useMediaQuery } from "@chakra-ui/react";

export const Register: React.FC = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)", {
    ssr: false,
    fallback: false,
  });

  return (
    <HStack spacing={0}>
      <Stack minH="100vh" w="full" alignItems="center" justifyContent="center">
        {!isLargerThan700 && <Image src="./illustration.svg" w={200} />}
        <Container w="sm">
          <Form type="signup" />
        </Container>
      </Stack>
      {isLargerThan700 && (
        <Box minH="100vh" w="100%" bgColor={COLORS.PRIMARY} boxShadow="lg">
          <Center minH="100vh">
            <Image src="./illustration.svg" w={400} />
          </Center>
        </Box>
      )}
    </HStack>
  );
};

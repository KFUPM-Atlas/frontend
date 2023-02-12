import { Box, Center, HStack, Image, Container, Stack } from "@chakra-ui/react"
import { Form } from "../components/Form"
import { COLORS } from "../core/constants"
import { useMediaQuery } from "@chakra-ui/react"
export const Login: React.FC = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)")

  return (
    <HStack spacing={0}>
      <Stack minH="100vh" w="full" alignItems="center" justifyContent="center">
        {!isLargerThan700 && <Image src="./illustration.svg" w={200} />}
        <Container w="sm">
          <Form type="login" />
        </Container>
      </Stack>
      {isLargerThan700 && (
        <Box minH="100vh" w="full" bgColor={COLORS.PRIMARY} boxShadow="lg">
          <Center minH="100vh">
            <Image src="./illustration.svg" w={400} />
          </Center>
        </Box>
      )}
    </HStack>
  )
}

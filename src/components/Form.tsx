import {
  Button,
  Divider,
  FormControl,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc"
import { useState } from "react"
import { COLORS } from "../core/constants"
import { OrDivider } from "./OrDivider"
import { useNavigate } from "react-router"

interface FormProps {
  type: "login" | "signup"
}

export const Form: React.FC<FormProps> = ({ type }) => {
  const navigate = useNavigate()
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      // if (type === "signup") {
      //   await signup(name, email, password)
      // }
      // if (type === "login") {
      //   await login(email, password)
      // }
    } catch (e) {
      // toast.error((e as Error).message)
    }
  }
  return (
    <Stack bgColor="white" p={7} borderRadius={10} spacing={3} w="full">
      <Heading size="lg" fontWeight="bold" mb={5}>
        {type == "login" ? "Login" : "Signup"}
      </Heading>
      <form onSubmit={handleSubmit}>
        <SimpleGrid
          w="full"
          spacing={type !== "login" && type !== "signup" ? 5 : 2.5}
        >
          {type == "signup" && (
            <GridItem>
              <FormControl isRequired>
                <Input
                  bgColor="white"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
            </GridItem>
          )}

          <GridItem>
            <FormControl isRequired>
              <Input
                bgColor="white"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <Input
                bgColor="white"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <Button
            type="submit"
            bgColor={COLORS.PRIMARY}
            color="white"
            size="md"
            w="full"
            mt={10}
            fontWeight="medium"
            border={"1px"}
            borderColor="gray.300"
          >
            {type == "login" ? "Login" : "Signup"}
          </Button>
        </SimpleGrid>
      </form>
      <Stack>
        <OrDivider />
        <Button
          bgColor="white"
          color="gray.700"
          size="md"
          w="full"
          fontWeight="medium"
          border={"1px"}
          borderColor="gray.300"
          leftIcon={<FcGoogle />}
        >
          {"Continue With Google"}
        </Button>
        <Text textAlign="center" color={COLORS.TEXT_LIGHT} pt={2}>
          New to Atlas?{" "}
          <Link
            display="inline"
            color={COLORS.PRIMARY}
            onClick={() => navigate(type == "login" ? "/register" : "/login")}
          >
            {type == "login" ? "Register" : "Login"}
          </Link>
        </Text>
      </Stack>
      )
    </Stack>
  )
}

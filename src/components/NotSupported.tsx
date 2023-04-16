import { Box, Center, Image, Stack, Text } from "@chakra-ui/react";
import { COLORS } from "../core/constants";
interface NotSupportedProps {}

export const NotSupported: React.FC<NotSupportedProps> = ({}) => {
  return (
    <Box minH="100vh" w="full" bgColor={COLORS.PRIMARY} boxShadow="lg">
      <Center minH="100vh">
        <Stack color="white">
          <Text>
            Desktop will be supported soon! For now kindly switch to mobile.
          </Text>
          <Image src="./illustration.svg" w={400} />
        </Stack>
      </Center>
    </Box>
  );
};

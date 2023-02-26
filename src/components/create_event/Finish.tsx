import { Center, Stack, Text } from "@chakra-ui/react";
import { CheckBoxIcon } from "../CheckBoxIcon";

interface FinishProps {}
export const Finish: React.FC<FinishProps> = () => {
  return (
    <Center my={"10"}>
      <Stack>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          Event Request Successful!
        </Text>
        <Text>
          Your request will be processed bu the assigned faculty member.
        </Text>{" "}
        <Center>
          <CheckBoxIcon />
        </Center>
      </Stack>
    </Center>
  );
};

import {
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
const responsiveStack: any = {
  base: "column",
  md: "row",
};
interface EventDetailsProps {}
export const EventDetails: React.FC<EventDetailsProps> = ({}) => {
  return (
    <Stack spacing={"5"}>
      <Stack mt={"10"}>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          General Details
        </Text>
        <Text>
          This will be displayed on you
          <Text display={"inline"} fontWeight={"bold"}>
            {" "}
            posted event.
          </Text>
        </Text>
      </Stack>
      <Stack direction={responsiveStack}>
        <FormControl>
          <FormLabel>Event title</FormLabel>
          <Input />
        </FormControl>
        <Spacer />
        <FormControl>
          <FormLabel>Event Type</FormLabel>
          <Input />
        </FormControl>
      </Stack>
      <Stack direction={responsiveStack}>
        <FormControl>
          <FormLabel>From Date</FormLabel>
          <Input type={"datetime-local"} />
        </FormControl>
        <Spacer />
        <FormControl>
          <FormLabel>To Date</FormLabel>
          <Input type={"datetime-local"} />
        </FormControl>
      </Stack>
      <Stack>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          Upload Event Poster
        </Text>
        <Text>
          This poster will be displayed on you
          <Text display={"inline"} fontWeight={"bold"}>
            {" "}
            posted event.
          </Text>
        </Text>
      </Stack>
    </Stack>
  );
};

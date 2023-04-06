import {
  Box,
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Spacer,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import useCreateEventStore from "../../stores/useCreateEventStore";
interface RequestsProps {
  msg: string;
}
export const RequestForm: React.FC<RequestsProps> = ({ msg }) => {
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [reason, setReason] = useState<string>("");
  const budget = useCreateEventStore((state) => state.budget);
  const addBudget = useCreateEventStore((state) => state.addBudget);
  const removeBudget = useCreateEventStore((state) => state.removeBudget);

  return (
    <Stack>
      <Text fontSize={"xl"} fontWeight={"bold"}>
        Add your requests
      </Text>
      <Text>{msg}</Text>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Submitted");
          if (title !== "" && amount !== 0 && reason !== "") {
            addBudget({ title, amount, reason });
            setTitle("");
            setAmount(0);
            setReason("");
          }
        }}
      >
        <HStack>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              placeholder="Foods"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>
              Amount in <code>SAR</code>
            </FormLabel>
            <Input
              type="number"
              placeholder="99"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Reason</FormLabel>
          <Textarea
            placeholder="From this budget foods and coffees will be bought for attendance"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </FormControl>
        <Stack my={"3"}>
          {budget.length === 0 ? (
            <Center>
              <Text color={"gray.500"}>No Requests added yet</Text>
            </Center>
          ) : (
            <Text fontSize={"lg"} fontWeight={"bold"}>
              Your Requests
            </Text>
          )}
          {budget.map((item, index) => (
            <Box key={index} bg={"gray.100"} borderRadius={"lg"} p={"3"}>
              <HStack>
                <Text fontWeight={"bold"}>{item.title}</Text>
                <Spacer />
                <HStack>
                  <Text fontWeight={"bold"}>{item.amount}</Text>
                  <code>SAR</code>
                </HStack>
              </HStack>
              <Text>{item.reason}</Text>
              <Button
                mt={"2"}
                colorScheme={"red"}
                size={"xs"}
                onClick={() => removeBudget(item)}
              >
                Remove
              </Button>
            </Box>
          ))}
        </Stack>
        <HStack w={"sm"} cursor={"pointer"} as={"button"} type="submit">
          <AiFillPlusCircle size={40} />
          <Text fontWeight={"bold"}>Add another Request</Text>
        </HStack>
      </form>
    </Stack>
  );
};

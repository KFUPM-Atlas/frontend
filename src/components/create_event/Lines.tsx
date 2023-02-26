import { HStack, Center, Text } from "@chakra-ui/react";

interface LinesProps {}
export const Lines: React.FC<LinesProps> = () => {
  const labels: string[] = [
    "Event Details",
    "Requests",
    "Room Reservation",
    "Finish",
  ];
  return (
    <>
      {labels.map((label, index) => {
        <HStack key={index}>
          <Center
            w={"10"}
            p={"2"}
            borderRadius={"100%"}
            bg={"black"}
            color={"white"}
          >
            {index + 1}
          </Center>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            {label}
          </Text>
        </HStack>;
      })}
    </>
  );
};

import { Box, Center, Flex, Spacer, Text } from "@chakra-ui/react";

interface StatProps {
  icon: JSX.Element;
  title: string;
  total: number;
  color?: string;
  bg?: string;
}
export const Stat: React.FC<StatProps> = ({
  icon,
  title,
  total,
  bg,
  color,
}) => {
  return (
    <Box
      shadow={"lg"}
      bg={bg}
      p={"5"}
      borderRadius={"2xl"}
      color={color}
      w={{
        base: "100%",
        lg: "30%",
      }}
      my={2}
    >
      <Flex justifyContent={"space-between"}>
        <Text fontWeight={"bold"} fontSize={"4xl"}>
          {total}
        </Text>
        <Center>{icon}</Center>
      </Flex>
      <Text fontSize={"2xl"}>{title}</Text>
    </Box>
  );
};

import {
  Box,
  Text,
  Stack,
  Heading,
  HStack,
  SimpleGrid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { COLORS } from "../core/constants";
interface ClubAboutProps {}

export const ClubAbout: React.FC<ClubAboutProps> = ({}) => {
  return (
    <Box>
      <Stack justifyContent="space-between" spacing={20}>
        <Box>
          <Heading fontWeight="bold" fontSize={18} color={COLORS.PRIMARY}>
            Description
          </Heading>
          <Text>
            Description Description Description Description Description
            Description Description Description Description
          </Text>
        </Box>
        <Box>
          <Heading fontWeight="bold" fontSize={18} color={COLORS.PRIMARY}>
            Objective
          </Heading>
          <HStack>
            <Text>Goal one</Text>
            <Text>Goal two</Text>
            <Text>Goal three</Text>
          </HStack>
        </Box>

        <Box>
          <Heading fontWeight="bold" fontSize={18} color={COLORS.PRIMARY}>
            Social Media
          </Heading>
          <SimpleGrid columns={2} spacing={4} pt={4}>
            <GridItem colSpan={{ base: 1, lg: 1 }}>
              <HStack>
                <Image
                  w={10}
                  src="https://cdn.cdnlogo.com/logos/t/96/twitter-icon.svg"
                />
                <Text fontSize={13}>@GDSCKFUPM</Text>
              </HStack>
            </GridItem>
            <GridItem colSpan={{ base: 1, lg: 1 }}>
              <HStack>
                <Image
                  w={10}
                  src="https://cdn.cdnlogo.com/logos/i/92/instagram.svg"
                />
                <Text fontSize={13}>@GDSCKFUPM</Text>
              </HStack>
            </GridItem>
            <GridItem colSpan={{ base: 1, lg: 1 }}>
              <HStack>
                <Image
                  w={10}
                  src="https://cdn.cdnlogo.com/logos/l/78/linkedin-icon.svg"
                />
                <Text fontSize={13}>@GDSCKFUPM</Text>
              </HStack>
            </GridItem>
            <GridItem colSpan={{ base: 1, lg: 1 }}>
              <HStack>
                <Image
                  w={10}
                  src="https://cdn.cdnlogo.com/logos/f/83/facebook.svg"
                />
                <Text fontSize={13}>@GDSCKFUPM</Text>
              </HStack>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Stack>
    </Box>
  );
};

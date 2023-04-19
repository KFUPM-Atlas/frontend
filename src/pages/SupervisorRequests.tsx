import {
    Box,
    useDisclosure,
    Flex,
    Heading,
    Button,
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td, HStack, Icon,
} from "@chakra-ui/react";
import {SupervisorSidebar} from "../components/SupervisorSidebar";
import {randomArr} from "../utils/random_arr";
import {SupervisorRequestStatusAR} from "../enums/supervisor_request_status_ar";
import {mapRequestStatusToColor} from "../utils/map_request_status_to_color";
import {FiFile, FiLink, FiImage} from "react-icons/fi";
import React from "react";



export const SupervisorRequests: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div dir="rtl">
        <Box minH="100vh">
            <SupervisorSidebar onClose={onClose} isOpen={isOpen} onOpen={onOpen} />
            <Box mr={{ base: 0, md: 60 }} p="4">
                <Box
                    mx={{
                        base: "1",
                        md: "5",
                    }}
                    my={"16"}
                >
                    <Flex justifyContent={"space-between"}>
                        <Heading>الطلبات</Heading>
                    </Flex>
                    <HStack mt={10} spacing={5}>
                        <Button variant='outline' width={0.19}>
                            {1} {"طلب جديد"}
                        </Button>
                        <Button variant='outline' width={0.19}>
                            {1} {"طلب عهدة"}
                        </Button>
                        <Button variant='outline' width={0.19}>
                            {1} {"طلب ميزانية"}
                        </Button>
                        <Button variant='outline' width={0.19}>
                            {1} {"طلب تسوية"}
                        </Button>
                        <Button variant='outline' width={0.19}>
                            {1} {"طلب فعالية"}
                        </Button>
                    </HStack>
                    <TableContainer mt={2} style={{marginRight: 0}}>
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    <Th>الرقم</Th>
                                    <Th>النوع</Th>
                                    <Th>النادي</Th>
                                    <Th>الطلب</Th>
                                    <Th>التاريخ</Th>
                                    <Th>الحالة</Th>
                                    <Th>الإجراء</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {Array(10)
                                    .fill(0)
                                    .map((_, i) => {
                                        const status = randomArr([
                                            "جديد",
                                            "مقبول",
                                            "مرفوض",
                                        ]);
                                        const type = randomArr([
                                            "فعالية",
                                            "عهدة",
                                            "تسوية عهدة",
                                            "ميزانية",
                                        ]);
                                        const club = randomArr([
                                           "نادي جوجل",
                                           "نادي الحاسب",
                                           "نادي الجوالة",
                                           "نادي هندسة النظم"
                                        ]);
                                        return (
                                            <Tr>
                                                <Td>{i + 1}</Td>
                                                <Td>{type}</Td>
                                                <Td>{club}</Td>
                                                <Td style={{ textDecoration: "underline" }}>
                                                    {type !== "فعالية" ? (
                                                        <Button bgColor={"white"} height={8} width={8}>
                                                            <Icon as={FiFile}/>
                                                        </Button>
                                                    ) : (
                                                        <>
                                                            <Button bgColor={"white"} height={8} width={8}>
                                                                <Icon as={FiImage}/>
                                                            </Button>
                                                            <Button bgColor={"white"} height={8} width={8}>
                                                                <Icon as={FiLink}/>
                                                            </Button>
                                                        </>
                                                    )}
                                                </Td>
                                                <Td>{new Date().toLocaleString()}</Td>
                                                <Td color={mapRequestStatusToColor(status as SupervisorRequestStatusAR)}>
                                                    {status}
                                                </Td>
                                                <Td style={{ display: status === "جديد" ? "table-cell" : "none" }}>
                                                    <Button bg={"green.500"} color={"white"} ml={2}>
                                                        قبول
                                                    </Button>
                                                    <Button bg={"red.500"} color={"white"}>
                                                        رفض
                                                    </Button>
                                                </Td>
                                            </Tr>
                                        );
                                    })}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Box>
        </div>

    );
};
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
    Td, HStack,
} from "@chakra-ui/react";
import {SupervisorSidebar} from "../components/SupervisorSidebar";
import {randomArr} from "../utils/random_arr";
import {SupervisorRequestStatusAR} from "../enums/supervisor_request_status_ar";
import {mapRequestStatusToColor} from "../utils/map_request_status_to_color";



export const SupervisorRequests: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        isOpen: isOpenModal,
        onOpen: onOpenModal,
        onClose: onCloseModal,
    } = useDisclosure();

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
                                                <Td style={{textDecoration: "underline"}}>تنزيل الملف</Td>
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
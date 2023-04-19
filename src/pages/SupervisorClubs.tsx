import {
    Box,
    Button, Center,
    Flex,
    Heading,
    HStack,
    Table,
    TableContainer, Tag, Tbody, Td,
    Th,
    Thead,
    Tr,
    useDisclosure
} from "@chakra-ui/react";
import {SupervisorSidebar} from "../components/SupervisorSidebar";
import {COLORS} from "../core/constants";
import {CreateClub} from "../components/create_club/CreateClub";

export const SupervisorClubs: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const clubsData = [
        {id: 1, name: "نادي الحاسب"},
        {id: 2, name: "نادي الجوالة"},
        {id: 3, name: "نادي هندسة النظم"},
        {id: 4, name: "نادي مطوري جوجل"},
        {id: 5, name: "نادي التصوير"},
        {id: 6, name: "نادي الفيزياء"},
        {id: 7, name: "نادي الزيارات"},
        {id: 8, name: "نادي خدمة المجتمع"},
        {id: 9, name: "نادي الهندسة الكهربائية"},
        {id: 10, name: "نادي هندسة الطيران والفضاء"},
        {id: 11, name: "نادي وعينا"},

    ];

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
        <Heading>الأندية</Heading>
        </Flex>
        <Tag justifyContent="center" size={'md'} key={'md'} variant='outline' color="black" mx="auto" width={"100px"} height={7} mt={5}>
            {clubsData.length + " نادي"}
        </Tag>

        <TableContainer mt="5" maxHeight="400px" overflowY="auto"
                        style={{border: "1px solid var(--chakra-colors-chakra-border-color)",
                        borderRadius: "10px"}}>
            <Table>
                <Thead>
                    <Tr>
                        <Td>الرقم</Td>
                        <Td>النادي</Td>
                        <Td>الإجراء</Td>
                    </Tr>
                </Thead>
                <Tbody>
                    {clubsData.map((row, i) => (
                        <Tr key={row.id}>
                            <Td>{i + 1}</Td>
                            <Td>{row.name}</Td>
                            <Td>
                                <Button bg={COLORS.PRIMARY} color="white" width={"50%"}>
                                    تعديل
                                </Button>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
        <Button bg={COLORS.PRIMARY} color="white" width={"20%"} mt={8} onClick={onOpenModal}>
            إضافة نادي
        </Button>
        <CreateClub
            isOpen={isOpenModal}
            onClose={onCloseModal}
            onOpen={onOpenModal}
        />
    </Box>
    </Box>
    </Box>
    </div>

);
};
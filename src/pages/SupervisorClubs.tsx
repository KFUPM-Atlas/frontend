import {
    Box,
    Button, Center,
    Flex,
    Heading,
    HStack, Icon,
    Table,
    TableContainer, Tag, Tbody, Td,
    Th,
    Thead,
    Tr,
    useDisclosure
} from "@chakra-ui/react";
import {SupervisorSidebar} from "../components/SupervisorSidebar";
import {COLORS} from "../core/constants";
import {CreateAndModifyClub} from "../components/create_club/CreateAndModifyClub";
import {useFetchSupervisorClubs} from "../hooks/useFetchSupervisorClubs";
import {FiTrash} from "react-icons/all";
import {useAuthContext} from "../hooks/useAuthContext";
import {RemoveClubAlert} from "../components/remove_club_alert/RemoveClubAlert";
import {useState} from "react";


export const SupervisorClubs: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [clubIdToDelete, setClubIdToDelete] = useState<string>("")
    const [isNewClub, setIsNewClub] = useState<boolean>(true)
    const [clubToModifyData, setClubToModifyData] = useState<any>()
    const clubsData = useFetchSupervisorClubs().clubs
    const {
        isOpen: isOpenModal,
        onOpen: onOpenModal,
        onClose: onCloseModal,
    } = useDisclosure();

    const {
        isOpen: isOpenAlert,
        onOpen: onOpenAlert,
        onClose: onCloseAlert,
    } = useDisclosure();

    console.log(useAuthContext().user.uid)

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
        <Tag justifyContent="center" size={'md'} key={'md'} variant='outline'
             color="black" mx="auto" width={"100px"} height={7} mt={5} boxShadow="base">
            {clubsData.length + " نادي"}
        </Tag>

        <TableContainer mt="5" maxHeight="400px" overflowY="auto" boxShadow="lg"
                        style={{border: "1px solid var(--chakra-colors-chakra-border-color)",
                        borderRadius: "10px"}}>
            <Table>
                <Thead>
                    <Tr>
                        <Td>الرقم</Td>
                        <Td>النادي</Td>
                        <Td style={{textAlign: "center"}}>الإجراء</Td>
                    </Tr>
                </Thead>
                <Tbody>
                    {clubsData.map((row, i) => (
                        <Tr key={row.id}>
                            <Td>{i + 1}</Td>
                            <Td>{row.name}</Td>
                            <Td>
                                <Button bg={COLORS.PRIMARY} color="white" width={"50%"}
                                onClick={() => {
                                    setIsNewClub(false)
                                    setClubToModifyData(row)
                                    onOpenModal()
                                }}>
                                    تعديل
                                </Button>
                                <Button bg="red.500" mr={5} onClick={() => {
                                    onOpenAlert()
                                    setClubIdToDelete(row.clubId)
                                }}>
                                    <Icon as={FiTrash} color="white"/>
                                </Button>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
        <Button bg={COLORS.PRIMARY} color="white" width={"20%"} mt={8} onClick={() => {
            setIsNewClub(true)
            onOpenModal()
        }}>
            إضافة نادي
        </Button>
        <CreateAndModifyClub
            isOpen={isOpenModal}
            onClose={onCloseModal}
            onOpen={onOpenModal}
            isNewClub={isNewClub}
            data={clubToModifyData}
        />
        <RemoveClubAlert isOpen={isOpenAlert} onClose={onCloseAlert} onOpen={onOpenAlert} clubId={clubIdToDelete}/>
    </Box>
    </Box>
    </Box>
    </div>

);
};
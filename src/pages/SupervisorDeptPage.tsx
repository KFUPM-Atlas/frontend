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
    Td, HStack, Card, CardBody, Text, cssVar, Input, Icon, Checkbox, Spacer,
} from "@chakra-ui/react";
import {SupervisorSidebar} from "../components/SupervisorSidebar";
import {
    FiEye,
    FiEdit3,
    FiUploadCloud
} from "react-icons/fi";
import {COLORS} from "../core/constants";



export const SupervisorDeptPage: React.FC = () => {
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
                            <Heading>صفحة القسم</Heading>
                        </Flex>
                        <Card mt={10}>
                            <CardBody>
                                <Heading as='h2' size="lg" textAlign='center'>تعديل صفحة القسم</Heading>
                                <Text textAlign='center' mt={2}>تأكد من كتباة المحتوى باللغة الإنجليزية</Text>
                            </CardBody>
                        </Card>
                        <Card mt={2}>
                            <CardBody p={0}>
                                <Box mt={5} mr={8} ml={8}>
                                    <Text>وصف القسم</Text>
                                    <Input mt={2} height={100}></Input>
                                </Box>
                                <Box mt={12} mr={8} ml={8}>
                                    <HStack>
                                        <Text>موظفي القسم</Text>
                                        <Spacer/>
                                        <Button bg={COLORS.PRIMARY} color="white" width={"20%"}>
                                            إزالة المحدد
                                        </Button>
                                    </HStack>
                                    <TableContainer mt="5" maxHeight="200px" overflowY="auto"
                                                    style={{border: "1px solid var(--chakra-colors-chakra-border-color)",
                                                        borderRadius: "10px"}}>
                                        <Table>
                                            <Thead>
                                                <Th>#</Th>
                                                <Th>الاسم</Th>
                                                <Th>الوظيفة</Th>
                                                <Th>المكتب</Th>
                                                <Th>البريد الإلكتروني</Th>
                                                <Th>الصورة الشخصية</Th>
                                                <Th></Th>
                                            </Thead>
                                            <Tbody>
                                                <Tr>
                                                    <Td>1</Td>
                                                    <Td>أحمد المغلوث</Td>
                                                    <Td>مشرف نشاط</Td>
                                                    <Td>68</Td>
                                                    <Td>maghlouth@kfupm.edu.sa</Td>
                                                    <Td>
                                                        <Button bg="white">
                                                            <Icon as={FiEye}/>
                                                        </Button>
                                                        <Button bg="white">
                                                            <Icon as={FiEdit3}/>
                                                        </Button>

                                                    </Td>
                                                    <Td>
                                                        <Checkbox/>
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>2</Td>
                                                    <Td><Input/></Td>
                                                    <Td><Input/></Td>
                                                    <Td><Input/></Td>
                                                    <Td><Input/></Td>
                                                    <Td>
                                                        <Button bg="white">
                                                            <Icon as={FiUploadCloud}/>
                                                        </Button>

                                                    </Td>
                                                    <Td p={0}>
                                                        <Button bg={COLORS.PRIMARY} color="white" width={"90%"}>
                                                            إضافة
                                                        </Button>
                                                    </Td>
                                                </Tr>
                                            </Tbody>

                                        </Table>
                                    </TableContainer>
                                </Box>
                                <Box mt={12} mr={8} ml={8}>
                                    <HStack>
                                        <Text>اللوائح والأنظمة</Text>
                                        <Spacer/>
                                        <Button bg={COLORS.PRIMARY} color="white" width={"20%"}>
                                            إزالة المحدد
                                        </Button>
                                    </HStack>
                                    <TableContainer mt="5" maxHeight="200px" overflowY="auto"
                                                    style={{border: "1px solid var(--chakra-colors-chakra-border-color)",
                                                        borderRadius: "10px"}}>
                                        <Table>
                                            <Thead>
                                                <Th>#</Th>
                                                <Th>العنوان</Th>
                                                <Th>تاريخ النشر</Th>
                                                <Th>الملف</Th>
                                                <Th></Th>
                                            </Thead>
                                            <Tbody>
                                                <Tr>
                                                    <Td>1</Td>
                                                    <Td>عنوان الملف</Td>
                                                    <Td>2023/04/01</Td>
                                                    <Td>
                                                        <Button bg="white">
                                                            <Icon as={FiEye}/>
                                                        </Button>
                                                    </Td>
                                                    <Td>
                                                        <Checkbox/>
                                                    </Td>
                                                </Tr>
                                            </Tbody>

                                        </Table>
                                    </TableContainer>
                                    <Button bg={COLORS.PRIMARY} color="white" width={"20%"} mt={4}>
                                       إضافة
                                    </Button>
                                </Box>

                                <HStack mt={12} mb={8} mr={8}>
                                    <Button bg={COLORS.PRIMARY} color="white" width={"20%"}>
                                        حفظ
                                    </Button>
                                    <Button bg={"white"} color={COLORS.PRIMARY} borderColor={COLORS.PRIMARY} borderWidth={1} width={"20%"}>
                                        إلغاء
                                    </Button>
                                </HStack>

                            </CardBody>
                        </Card>
                    </Box>
                </Box>
            </Box>
        </div>

    );
};
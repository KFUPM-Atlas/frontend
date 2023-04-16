import {
    Button, FormControl, FormLabel, HStack, Icon, Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay, Select, Spacer, Stack, Td, Text, Textarea, Tr, VStack,
} from "@chakra-ui/react";
import {COLORS} from "../../core/constants";
import React, {useEffect, useState} from "react";
import {useCreateNewClub} from "../../hooks/useCreateNewClub";
import {useFetchSupervisors} from "../../hooks/useFetchSupervisors";
import {useModifyClub} from "../../hooks/useModifyClub";
interface CreateClubProps {
    isOpen: boolean;
    onClose: any;
    onOpen: any;
    isNewClub: Boolean;
    data?: any
}


export const CreateAndModifyClub: React.FC<CreateClubProps> = ({isOpen, onClose, onOpen, isNewClub, data}) => {
    const [name, setName] = useState<string>("")
    const [desc, setDesc] = useState<string>("")
    const [hq, setHQ] = useState<string>("")
    const [presidentId, setPresidentId] = useState<string>("")
    const [supervisorId, setSupervisorId] = useState<string>("")
    const [clubGender, setClubGender] = useState<string>("")
    const { createClub } = useCreateNewClub()
    const { modifyClub } = useModifyClub()
    const supervisors = useFetchSupervisors().supervisors

    useEffect(() => {
        setName(isNewClub ? "" : data.name)
        setDesc(isNewClub ? "" : data.description)
        setHQ(isNewClub ? "" : data.headQuarter)
        setPresidentId(isNewClub ? "" : data.presidentId)
        setSupervisorId(isNewClub ? "" : data.supervisorId)
        setClubGender(isNewClub ? "" : data.clubGender)
    }, [isOpen])

    const createClubHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await createClub(name, desc, hq, presidentId, supervisorId, clubGender)
            onClose()
        } catch (e) {
            console.log(e)
        }
    }
    const modifyClubHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await modifyClub(data.clubId, name, desc, hq, presidentId, supervisorId, clubGender)
            onClose()
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
            <ModalOverlay />
            <ModalContent>
                <form onSubmit={isNewClub ? createClubHandler : modifyClubHandler}>
                    <div dir="rtl">
                        <ModalHeader textAlign={"center"}>
                            {
                                isNewClub ?   "إنشاء نادي جديد" : "تحرير بيانات نادي"
                            }
                          </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text>اسم النادي:</Text>
                            <FormControl isRequired>
                                <Input value={name} mt={2} style={{borderColor: COLORS.PRIMARY}}
                                       onChange={(e) => setName(e.target.value)} />
                            </FormControl>
                            <Text mt={5}>وصف النادي:</Text>
                            <FormControl isRequired>
                                <Textarea value={desc} mt={2} style={{borderColor: COLORS.PRIMARY}}
                                          onChange={(e) => setDesc(e.target.value)}/>
                            </FormControl>
                            <HStack mt={5} >
                                <VStack width="50%" style={{alignItems: "flex-start"}}>
                                    <Text>مقر النادي:</Text>
                                    <FormControl isRequired>
                                        <Input value={hq} ml={5} placeholder={"mall-204"} style={{borderColor: COLORS.PRIMARY}}
                                               onChange={(e) => setHQ(e.target.value)}/>
                                    </FormControl>
                                </VStack>
                                <VStack width="50%" style={{alignItems: "flex-start"}}>
                                    <Text>الرقم الجامعي لرئيس النادي:</Text>
                                    <FormControl isRequired>
                                        <Input value={presidentId} placeholder={"2XXXXXXX0"} style={{borderColor: COLORS.PRIMARY}}
                                               onChange={(e) => setPresidentId(e.target.value)}/>
                                    </FormControl>
                                </VStack>
                            </HStack>
                            <HStack mt={5}>
                                <VStack width="50%" style={{alignItems: "flex-start"}}>
                                    <Text width={200}>المشرف على النادي:</Text>
                                    <FormControl isRequired>
                                        <Select  value={supervisorId} style={{textAlign: "center"}} placeholder="يرجى الإختيار"
                                                onChange={(e) => setSupervisorId(e.target.value)}>
                                            {supervisors.map((supervisor) => (
                                                <option value={supervisor.uid}>{supervisor.name}</option>
                                            ))}

                                        </Select>
                                    </FormControl>
                                </VStack>
                                <VStack width="50%" style={{alignItems: "flex-start"}}>
                                    <Text width={200}>الجنس المستهدف:</Text>
                                    <FormControl isRequired>
                                        <Select value={clubGender} style={{textAlign: "center"}} placeholder="يرجى الإختيار"
                                                onChange={(e) => setClubGender(e.target.value)}>
                                            <option value='male'>ذكور</option>
                                            <option value='female'>إناث</option>
                                            <option value='unisex'>غير محدد الجنس</option>
                                        </Select>
                                    </FormControl>
                                </VStack>
                            </HStack>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                bg={"black"}
                                color={"white"}
                                ml={2} onClick={onClose}>
                                إلغاء
                            </Button>
                            <Button
                                type="submit"
                                bg={"black"}
                                color={"white"}>
                                حفظ
                            </Button>
                        </ModalFooter>
                    </div>
                </form>
            </ModalContent>
        </Modal>
    );
};
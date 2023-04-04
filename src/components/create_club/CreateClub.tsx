import {
    Button, FormControl, FormLabel, HStack, Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay, Spacer, Stack, Text,
} from "@chakra-ui/react";

interface CreateEventProps {
    isOpen: boolean;
    onClose: any;
    onOpen: any;
}


export const CreateClub: React.FC<CreateEventProps> = ({
                                                            isOpen,
                                                            onClose,
                                                            onOpen,
                                                        }) => {


    return (
        <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
            <ModalOverlay />
            <ModalContent>
                <div dir="rtl">
                <ModalHeader textAlign={"center"}>إنشاء نادي جديد</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>اسم النادي:</Text>
                    <Input mt={2}/>
                    <Text mt={5}>وصف النادي:</Text>
                    <Input mt={2}/>
                    <HStack mt={5} >
                        <Text>مقر النادي:</Text>
                        <Input ml={5} placeholder={"mall-204"}/>
                        <Text width={250}>الرقم الجامعي لرئيس النادي:</Text>
                        <Input placeholder={"2XXXXXXX0"}/>
                    </HStack>

                </ModalBody>
                <ModalFooter>
                    <Button
                        bg={"black"}
                        color={"white"}
                        ml={2}>
                        إلغاء
                    </Button>
                    <Button
                        bg={"black"}
                        color={"white"}>
                        حفظ
                    </Button>
                </ModalFooter>
                </div>
            </ModalContent>
        </Modal>
    );
};
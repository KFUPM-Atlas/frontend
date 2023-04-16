import React from "react";
import {
    AlertDialog, AlertDialogBody,
    AlertDialogCloseButton,
    AlertDialogContent, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay, Button
} from "@chakra-ui/react";
import {useDeleteClub} from "../../hooks/useDeleteClub";

interface RemoveClubProps {
    isOpen: boolean;
    onClose: any;
    onOpen: any;
    clubId: string
}

export const RemoveClubAlert: React.FC<RemoveClubProps> = ({isOpen, onClose, onOpen, clubId}) => {

    const cancelRef = React.useRef()
    const {deleteClub} = useDeleteClub()
    const clubDeleteHandler = async () => {
        try {
            await deleteClub(clubId)
            onClose()
        } catch (e) {
            console.log(e)
        }
    }

    return (
    <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
    >
        <AlertDialogOverlay />

        <AlertDialogContent>
            <div dir="rtl">
                <AlertDialogHeader mt={5}>هل أنت متأكد من حذف النادي؟</AlertDialogHeader>
                <AlertDialogCloseButton />
                <AlertDialogBody>
                    هل أنت متأكد من حذف النادي؟
                    <br/>
                    هذا الاجراء لا يمكن التراجع عنه بعد تأكيد الحذف
                </AlertDialogBody>
                <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                        لا
                    </Button>
                    <Button colorScheme='red' mr={3} onClick={clubDeleteHandler}>
                        نعم، احذف
                    </Button>
                </AlertDialogFooter>
            </div>
        </AlertDialogContent>
    </AlertDialog>
    )

}
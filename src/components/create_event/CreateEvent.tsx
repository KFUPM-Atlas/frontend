import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { doc, getFirestore, setDoc, serverTimestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useClubName } from "../../hooks/useClub";
import useCreateEventStore from "../../stores/useCreateEventStore";
import { generateId } from "../../utils/generate_id";
import { removeEmpty } from "../../utils/remove_empty";
import { EventDetails } from "./EventDetails";
import { Finish } from "./Finish";
import { Lines } from "./Lines";
import { RequestForm } from "./RequestForm";
import { RoomReservation } from "./RoomReservation";

interface CreateEventProps {
  isOpen: boolean;
  onClose: any;
  onOpen: any;
}
export const CreateEvent: React.FC<CreateEventProps> = ({
  isOpen,
  onClose,
  onOpen,
}) => {
  const store = useCreateEventStore((state) => state);
  const [step, setStep] = useState(1);
  const { id } = useParams<{ id: string }>();
  const { user } = useAuthContext();
  const clubName = useClubName(id);
  if (step === 4 && !isOpen) {
    setStep(1);
  }
  useEffect(() => {
    if (isOpen) {
      const id = generateId();
      store.setId(id);
      console.log("Event ID: ", store.id);
    }
  }, [isOpen]);
  if (step === 3) {
    const requestDocRef = doc(getFirestore(), "events", store.id);

    setDoc(
      requestDocRef,
      removeEmpty({
        clubId: id,
        club: clubName,
        description: store.description,
        title: store.title,
        endDate: store.toDate,
        startDate: store.fromDate,
        userId: user?.uid || "",
        eventId: store.id,
        status: "pending",
        building: store.building,
        room: store.room,
        budget: store.budget,
        posterLink: store.posterUrl,
        tag: store.tag,
        createdAt: serverTimestamp(),
        isDeleted: false,
      })
    ).then(() => {
      console.log("Document successfully written!");
    });
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Multi-Step Form</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Lines />
          {step === 1 && <EventDetails />}
          {step === 2 && <RoomReservation />}
          {step === 3 && <Finish />}
        </ModalBody>
        <ModalFooter>
          {step != 4 && (
            <>
              {" "}
              <Button
                bg={"black"}
                color={"white"}
                mx={"5"}
                onClick={() => setStep(step > 1 ? step - 1 : 1)}
              >
                Back
              </Button>
              <Button
                bg={"black"}
                color={"white"}
                onClick={() => {
                  setStep(step + 1);
                  console.log("Store: ", store);
                }}
              >
                Next
              </Button>
            </>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

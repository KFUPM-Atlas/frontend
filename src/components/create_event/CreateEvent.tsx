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
import React, { useState } from "react";
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
  const [step, setStep] = useState(1);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Multi-Step Form</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Lines />
          {step === 1 && <EventDetails />}
          {step === 2 && (
            <RequestForm msg="This will be displayed on you posted event." />
          )}
          {step === 3 && <RoomReservation />}
          {step === 4 && <Finish />}
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
                onClick={() => setStep(step + 1)}
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

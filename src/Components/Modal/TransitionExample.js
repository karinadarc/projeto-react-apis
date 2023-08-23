import { Image } from "@chakra-ui/react";
import { images } from "../../assets/importImages";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";

export const TransitionExample = () => {
  const context = useContext(GlobalContext);
  const { isOpen, onClose, imgModal } = context;

  return (
    <>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Image src={images[imgModal]} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

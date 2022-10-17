import React from "react";
import GutsRest from "../Images/GutsResting.jpg";
import Kiss from "../Images/GutsCascaKiss.jpg";
import SaveCasca from "../Images/GutsSaveCasca.jpg";
import {
  Center,
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Wrap,
} from "@chakra-ui/react";

export default function BandL() {
  const {
    isOpen: gutsLayOpen,
    onOpen: gutsLayDisplay,
    onClose: gutsLayClose,
  } = useDisclosure();
  const {
    isOpen: gutscaOpen,
    onOpen: gutscaDisplay,
    onClose: gutscaClose,
  } = useDisclosure();
  const {
    isOpen: gutsSavesOpen,
    onOpen: gutsSavesDisplay,
    onClose: gutsSavesClose,
  } = useDisclosure();

  return (
    <section>
      <h3 className="head">Beauty & Love</h3>
      <p className="text">
        Berserk's artwork can be some of the most beautiful art in all of manga,
        even when the context is anything but.
      </p>
      <br></br>
      <Wrap justify="center" spacing="3rem">
        <div>
          <Image
            onClick={gutsLayDisplay}
            border="0.5rem groove crimson"
            maxW="20rem"
            id="gutsRest"
            src={GutsRest}
            alt="One-Eyed Male Warrior wrapped in black cloak laying against tree stump, facing the rising sun"
          />
          <Modal isCentered size="" onClose={gutsLayClose} isOpen={gutsLayOpen}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalCloseButton />
            <ModalContent bg="">
              <Center>
                <Image
                  border="1rem groove crimson"
                  id="gutsRest"
                  maxW="60rem"
                  src={GutsRest}
                  alt="One-Eyed Male Warrior wrapped in black cloak laying against tree stump, facing the rising sun"
                />
              </Center>
            </ModalContent>
          </Modal>
        </div>
        <div>
          <Image
            onClick={gutscaDisplay}
            border="0.5rem groove crimson"
            maxW="20rem"
            id="kiss"
            src={Kiss}
            alt="Armor-clad man and woman passionately kiss in front of a waterfall, the man's cape flows and loosely wraps around the female"
          />
          <Modal isCentered size="" onClose={gutscaClose} isOpen={gutscaOpen}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalCloseButton />
            <ModalContent bg="">
              <Image
                maxW="90%"
                border="1rem groove crimson"
                id="kiss"
                src={Kiss}
                alt="Armor-clad man and woman passionately kiss in front of a waterfall, the man's cape flows and loosely wraps around the female"
              />
            </ModalContent>
          </Modal>
        </div>
        <div>
          <Image
            onClick={gutsSavesDisplay}
            border="0.5rem groove crimson"
            maxW="20rem"
            id="saveCasca"
            src={SaveCasca}
            alt="Corpses fall as a One-Eyed Male Warrior in black armor with a flowing cloak stands after killing them to save a woman, the womans looks on at the one-eyed man as they share a silent reunion"
          />
          <Modal
            isCentered
            size=""
            onClose={gutsSavesClose}
            isOpen={gutsSavesOpen}
          >
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalCloseButton />
            <ModalContent bg="">
              <Image
                maxW="90%"
                border="1rem groove crimson"
                id="saveCasca"
                src={SaveCasca}
                alt="Corpses fall as a One-Eyed Male Warrior in black armor with a flowing cloak stands after killing them to save a woman, the womans looks on at the one-eyed man as they share a silent reunion"
              />
            </ModalContent>
          </Modal>
        </div>
      </Wrap>
    </section>
  );
}

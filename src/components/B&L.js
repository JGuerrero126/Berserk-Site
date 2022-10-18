import React from "react";
import GutsRest from "../Images/B&L/GutsResting.jpg";
import Kiss from "../Images/B&L/GutsCascaKiss.jpg";
import SaveCasca from "../Images/B&L/GutsSaveCasca.jpg";
import MBSaves from "../Images/B&L/MBSavesGuts.jpg";
import Group from "../Images/B&L/GroupOnBeach.jpg";
import Casca from "../Images/B&L/CascaAwakens.jpg";
import FarneseMagic from "../Images/B&L/FarneseMagic.jpg";
import SchriekeSavingGuts from "../Images/B&L/SchriekeSavingGuts.jpg";
import Someone from "../Images/B&L/TheresSomeoneIWantToSee.jpg";

import {
  Center,
  Heading,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  Wrap,
  WrapItem,
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
  const {
    isOpen: mbSavesOpen,
    onOpen: mbSavesDisplay,
    onClose: mbSavesClose,
  } = useDisclosure();
  const {
    isOpen: groupOpen,
    onOpen: groupDisplay,
    onClose: groupClose,
  } = useDisclosure();
  const {
    isOpen: cascaOpen,
    onOpen: cascaDisplay,
    onClose: cascaClose,
  } = useDisclosure();
  const {
    isOpen: farneseOpen,
    onOpen: farneseDisplay,
    onClose: farneseClose,
  } = useDisclosure();
  const {
    isOpen: witchSavesOpen,
    onOpen: witchSavesDisplay,
    onClose: witchSavesClose,
  } = useDisclosure();
  const {
    isOpen: someoneOpen,
    onOpen: someoneDisplay,
    onClose: someoneClose,
  } = useDisclosure();

  return (
    <section>
      <Heading className="head" fontFamily="Koulen" fontSize="4rem">
        Beauty & Love
      </Heading>
      <Text mt="1rem" mb="1rem" className="text">
        Berserk's artwork can be some of the most beautiful art in all of manga,
        even when the context is anything but.
      </Text>
      <Wrap ml="2rem" mr="2rem" justify="center" spacing="3rem">
        <WrapItem>
          <Image
            className="cursor"
            onClick={gutsLayDisplay}
            border="0.5rem groove crimson"
            maxW="10rem"
            id="gutsRest"
            src={GutsRest}
            alt="One-Eyed Male Warrior wrapped in black cloak laying against tree stump, facing the rising sun"
          />
          <Modal isCentered size="" onClose={gutsLayClose} isOpen={gutsLayOpen}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Center>
                <Image
                  border="1rem groove crimson"
                  id="gutsRest"
                  maxHeight="90vh"
                  maxW="75vw"
                  src={GutsRest}
                  alt="One-Eyed Male Warrior wrapped in black cloak laying against tree stump, facing the rising sun"
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            className="cursor"
            onClick={gutscaDisplay}
            border="0.5rem groove crimson"
            maxW="10rem"
            id="kiss"
            src={Kiss}
            alt="Armor-clad man and woman passionately kiss in front of a waterfall, the man's cape flows and loosely wraps around the female"
          />
          <Modal isCentered size="" onClose={gutscaClose} isOpen={gutscaOpen}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Center>
                <Image
                  maxHeight="90vh"
                  maxW="75vw"
                  border="1rem groove crimson"
                  id="kiss"
                  src={Kiss}
                  alt="Armor-clad man and woman passionately kiss in front of a waterfall, the man's cape flows and loosely wraps around the female"
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            className="cursor"
            onClick={gutsSavesDisplay}
            border="0.5rem groove crimson"
            maxW="10rem"
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
            <ModalContent bg="">
              <Center>
                <Image
                  maxHeight="90vh"
                  maxW="75vw"
                  border="1rem groove crimson"
                  id="saveCasca"
                  src={SaveCasca}
                  alt="Corpses fall as a One-Eyed Male Warrior in black armor with a flowing cloak stands after killing them to save a woman, the womans looks on at the one-eyed man as they share a silent reunion"
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            className="cursor"
            onClick={mbSavesDisplay}
            border="0.5rem groove crimson"
            maxW="10rem"
            id="MBSaves"
            src={MBSaves}
            alt="Small child-looking shape pushes away darkness from man about to lose himself"
          />
          <Modal isCentered size="" onClose={mbSavesClose} isOpen={mbSavesOpen}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Center>
                <Image
                  border="1rem groove crimson"
                  id="MBSaves"
                  maxHeight="90vh"
                  maxW="75vw"
                  src={MBSaves}
                  alt="Small child-looking shape pushes away darkness from man about to lose himself"
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            className="cursor"
            onClick={groupDisplay}
            border="0.5rem groove crimson"
            maxW="10rem"
            id="Group"
            src={Group}
            alt="One-Eyed Male Warrior in black armor overlooks his companions having an amazing time while splashing around the beach."
          />
          <Modal isCentered size="" onClose={groupClose} isOpen={groupOpen}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Center>
                <Image
                  border="1rem groove crimson"
                  id="Group"
                  maxHeight="90vh"
                  maxW="75vw"
                  src={Group}
                  alt="One-Eyed Male Warrior in black armor overlooks his companions having an amazing time while splashing around the beach."
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            className="cursor"
            onClick={cascaDisplay}
            border="0.5rem groove crimson"
            maxW="10rem"
            id="Casca"
            src={Casca}
            alt="Woman with long hair is nearly crying with a face of deep appreciation and adoration."
          />
          <Modal isCentered size="" onClose={cascaClose} isOpen={cascaOpen}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Center>
                <Image
                  border="1rem groove crimson"
                  id="Casca"
                  maxHeight="90vh"
                  maxW="75vw"
                  src={Casca}
                  alt="Woman with long hair is nearly crying with a face of deep appreciation and adoration."
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            className="cursor"
            onClick={farneseDisplay}
            border="0.5rem groove crimson"
            maxW="10rem"
            id="FarneseMagic"
            src={FarneseMagic}
            alt="Floating female soars through the sky while holding the hand of a little witch girl who has a little elf next to her. The female has a face of awe."
          />
          <Modal isCentered size="" onClose={farneseClose} isOpen={farneseOpen}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Center>
                <Image
                  border="1rem groove crimson"
                  id="FarneseMagic"
                  maxHeight="90vh"
                  maxW="75vw"
                  src={FarneseMagic}
                  alt="Floating female soars through the sky while holding the hand of a little witch girl who has a little elf next to her. The female has a face of awe."
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            className="cursor"
            onClick={witchSavesDisplay}
            border="0.5rem groove crimson"
            maxW="10rem"
            id="SchriekeSavingGuts"
            src={SchriekeSavingGuts}
            alt="Little witch girl reaches out to save a man who is being consumed by darkness."
          />
          <Modal
            isCentered
            size=""
            onClose={witchSavesClose}
            isOpen={witchSavesOpen}
          >
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Center>
                <Image
                  border="1rem groove crimson"
                  id="SchriekeSavingGuts"
                  maxHeight="90vh"
                  maxW="75vw"
                  src={SchriekeSavingGuts}
                  alt="Little witch girl reaches out to save a man who is being consumed by darkness."
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            className="cursor"
            onClick={someoneDisplay}
            border="0.5rem groove crimson"
            maxW="10rem"
            id="Someone"
            src={Someone}
            alt="Woman in dress made of flowers approaches Man in black cloak and armor, they are meeting under a tree as leaves slowly fall to the ground."
          />
          <Modal isCentered size="" onClose={someoneClose} isOpen={someoneOpen}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Center>
                <Image
                  border="1rem groove crimson"
                  id="Someone"
                  maxHeight="90vh"
                  maxW="75vw"
                  src={Someone}
                  alt="Woman in dress made of flowers approaches Man in black cloak and armor, they are meeting under a tree as leaves slowly fall to the ground."
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
      </Wrap>
    </section>
  );
}

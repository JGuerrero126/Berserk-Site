import React from "react";
import Eclipse from "../Images/H&D/BerserkEclipse.jpg";
import RedLake from "../Images/H&D/Manga_E95_Red_Lake.png";
import Hell from "../Images/H&D/Hell.png";
import Skin from "../Images/H&D/SkinHawk.png";
import Bodies from "../Images/H&D/BodiesHanging.jpg";
import Corpses from "../Images/H&D/GriffithCorpses.jpg";
import GutsDespair from "../Images/H&D/GutsTrueDespair.jpg";

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

export default function HandD() {
  const {
    isOpen: demonFeastOpen,
    onOpen: demonFeastDisplay,
    onClose: demonFeastClose,
  } = useDisclosure();
  const {
    isOpen: redLakeOpen,
    onOpen: redLakeDisplay,
    onClose: redLakeClose,
  } = useDisclosure();
  const {
    isOpen: hellOpen,
    onOpen: hellDisplay,
    onClose: hellClose,
  } = useDisclosure();
  const {
    isOpen: skinCrossOpen,
    onOpen: skinCrossDisplay,
    onClose: skinCrossClose,
  } = useDisclosure();
  const {
    isOpen: bodiesOpen,
    onOpen: bodiesDisplay,
    onClose: bodiesClose,
  } = useDisclosure();
  const {
    isOpen: corpsesOpen,
    onOpen: corpsesDisplay,
    onClose: corpsesClose,
  } = useDisclosure();
  const {
    isOpen: gutsDespairOpen,
    onOpen: gutsDespairDisplay,
    onClose: gutsDespairClose,
  } = useDisclosure();

  return (
    <section>
      <Heading className="head" fontFamily="Koulen" fontSize="4rem">
        Horror & Despair
      </Heading>
      <Text mt="1rem" mb="1rem" className="text">
        The horror and outright despair that Berserk brings to the page are
        unmatched in their scale, detail, and feeling of absolute hopelessness
        they often evoke.
      </Text>
      <Wrap ml="2rem" mr="2rem" justify="center" spacing="3rem">
        <WrapItem>
          <Image
            onClick={demonFeastDisplay}
            className="cursor"
            border="0.5rem groove crimson"
            maxW="10rem"
            id="eclipse"
            src={Eclipse}
            alt="An ocean of demonic looking figures about to attack an army of scared soldiers"
          />
          <Modal
            isCentered
            size=""
            onClose={demonFeastClose}
            isOpen={demonFeastOpen}
          >
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Center>
                <Image
                  maxHeight="90vh"
                  maxW="75vw"
                  border="1rem groove crimson"
                  id="eclipse"
                  src={Eclipse}
                  alt="An ocean of demonic looking figures about to attack an army of scared soldiers"
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            onClick={redLakeDisplay}
            className="cursor"
            border="0.5rem groove crimson"
            maxW="10rem"
            id="redLake"
            src={RedLake}
            alt="A lake of blood filled with dismembered and ripped apart corpses"
          />
          <Modal isCentered size="" onClose={redLakeClose} isOpen={redLakeOpen}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Center>
                <Image
                  maxHeight="90vh"
                  maxW="75vw"
                  border="1rem groove crimson"
                  id="redLake"
                  src={RedLake}
                  alt="A lake of blood filled with dismembered and ripped apart corpses"
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            onClick={hellDisplay}
            className="cursor"
            border="0.5rem groove crimson"
            maxW="10rem"
            id="hell"
            src={Hell}
            alt="A series of ghastly faces made of human corpses approach two figures"
          />
          <Modal isCentered size="" onClose={hellClose} isOpen={hellOpen}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Center>
                <Image
                  maxHeight="90vh"
                  maxW="75vw"
                  border="1rem groove crimson"
                  id="hell"
                  src={Hell}
                  alt="A series of ghastly faces made of human corpses approach two figures"
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            onClick={skinCrossDisplay}
            className="cursor"
            border="0.5rem groove crimson"
            maxW="10rem"
            id="skin"
            src={Skin}
            alt="A woman looks up at an effigy made of human skin and faces in the shape of a hawk"
          />
          <Modal
            isCentered
            size=""
            onClose={skinCrossClose}
            isOpen={skinCrossOpen}
          >
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Center>
                <Image
                  maxHeight="90vh"
                  maxW="75vw"
                  border="1rem groove crimson"
                  id="skin"
                  src={Skin}
                  alt="A woman looks up at an effigy made of human skin and faces in the shape of a hawk"
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            onClick={bodiesDisplay}
            className="cursor"
            border="0.5rem groove crimson"
            maxW="10rem"
            id="Bodies"
            src={Bodies}
            alt="A group of soldiers in knight armor approach a tree filled with hung corpses, a small infant lies on the ground."
          />
          <Modal isCentered size="" onClose={bodiesClose} isOpen={bodiesOpen}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Center>
                <Image
                  maxHeight="90vh"
                  maxW="75vw"
                  border="1rem groove crimson"
                  id="Bodies"
                  src={Bodies}
                  alt="A group of soldiers in knight armor approach a tree filled with hung corpses, a small infant lies on the ground."
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            onClick={corpsesDisplay}
            className="cursor"
            border="0.5rem groove crimson"
            maxW="10rem"
            id="Corpses"
            src={Corpses}
            alt="A small child with white hair stands atop a mass grave filled with corpses."
          />
          <Modal isCentered size="" onClose={corpsesClose} isOpen={corpsesOpen}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Center>
                <Image
                  maxHeight="90vh"
                  maxW="75vw"
                  border="1rem groove crimson"
                  id="Corpses"
                  src={Corpses}
                  alt="A small child with white hair stands atop a mass grave filled with corpses."
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            onClick={gutsDespairDisplay}
            className="cursor"
            border="0.5rem groove crimson"
            maxW="10rem"
            id="GutsDespair"
            src={GutsDespair}
            alt="One eyed man in black armor reaches out helplessly, his face is filled with absolute horror and hopelessness."
          />
          <Modal
            isCentered
            size=""
            onClose={gutsDespairClose}
            isOpen={gutsDespairOpen}
          >
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Center>
                <Image
                  maxHeight="90vh"
                  maxW="75vw"
                  border="1rem groove crimson"
                  id="GutsDespair"
                  src={GutsDespair}
                  alt="One eyed man in black armor reaches out helplessly, his face is filled with absolute horror and hopelessness."
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
      </Wrap>
    </section>
  );
}

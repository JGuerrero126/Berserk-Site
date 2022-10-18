import React from "react";
import Anger from "../Images/Rage/GutsAngry.jpg";
import Raging from "../Images/Rage/Rage.png";
import Flame from "../Images/Rage/guts-flame.png";
import Scream from "../Images/Rage/Scream.jpg";
import Sword from "../Images/Rage/GutsSwingingSword.jpg";

import {
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

export default function Rage() {
  const {
    isOpen: blindedOpen,
    onOpen: blindedDisplay,
    onClose: blindedClose,
  } = useDisclosure();
  const {
    isOpen: swingOpen,
    onOpen: swingDisplay,
    onClose: swingClose,
  } = useDisclosure();
  const {
    isOpen: fireOpen,
    onOpen: fireDisplay,
    onClose: fireClose,
  } = useDisclosure();
  const {
    isOpen: yellOpen,
    onOpen: yellDisplay,
    onClose: yellClose,
  } = useDisclosure();
  const {
    isOpen: swordOpen,
    onOpen: swordDisplay,
    onClose: swordClose,
  } = useDisclosure();

  return (
    <section>
      <Heading className="head" fontFamily="Koulen" fontSize="4rem">
        Rage
      </Heading>
      <Text mt="1rem" mb="1rem" className="text">
        Rage and Anger is a very key aspect of Berserk, specifically the emotion
        "Berserk" that Guts feels. In fact, it's so important that the entire
        series is named after it.
      </Text>
      <Wrap ml="2rem" mr="2rem" justify="center" spacing="3rem">
        <WrapItem>
          <Image
            onClick={blindedDisplay}
            className="cursor"
            border="0.5rem groove crimson"
            maxW="10rem"
            id="anger"
            src={Anger}
            alt="One eyed Man covered in blood with eyes blinded by rage steps forward"
          />
          <Modal
            isCentered
            size="xl"
            onClose={blindedClose}
            isOpen={blindedOpen}
          >
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Image
                maxHeight="90vh"
                maxW="90vw"
                border="1rem groove crimson"
                id="anger"
                src={Anger}
                alt="One eyed Man covered in blood with eyes blinded by rage steps forward"
              />
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            onClick={swingDisplay}
            className="cursor"
            border="0.5rem groove crimson"
            maxW="10rem"
            id="rage"
            src={Raging}
            alt="One eyed Man swings sword, becoming a blur of rage and malice in the process"
          />
          <Modal isCentered size="xl" onClose={swingClose} isOpen={swingOpen}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Image
                maxHeight="90vh"
                maxW="90vw"
                border="1rem groove crimson"
                id="rage"
                src={Raging}
                alt="One eyed Man swings sword, becoming a blur of rage and malice in the process"
              />
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            onClick={fireDisplay}
            className="cursor"
            border="0.5rem groove crimson"
            maxW="10rem"
            id="flame"
            src={Flame}
            alt="A torrent of flames and rage in the shape of a man with one eye"
          />
          <Modal isCentered size="xl" onClose={fireClose} isOpen={fireOpen}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Image
                maxHeight="90vh"
                maxW="90vw"
                border="1rem groove crimson"
                id="flame"
                src={Flame}
                alt="A torrent of flames and rage in the shape of a man with one eye"
              />
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            onClick={yellDisplay}
            className="cursor"
            border="0.5rem groove crimson"
            maxW="10rem"
            id="scream"
            src={Scream}
            alt="One eyed man screaming in anger"
          />
          <Modal isCentered size="xl" onClose={yellClose} isOpen={yellOpen}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Image
                maxHeight="90vh"
                maxW="90vw"
                border="1rem groove crimson"
                id="scream"
                src={Scream}
                alt="One eyed man screaming in anger"
              />
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            onClick={swordDisplay}
            className="cursor"
            border="0.5rem groove crimson"
            maxW="10rem"
            id="Sword"
            src={Sword}
            alt="One eyed Man becomes a whirlwind as he violently swings his sword, his opened eye is white with rage."
          />
          <Modal isCentered size="xl" onClose={swordClose} isOpen={swordOpen}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Image
                maxHeight="90vh"
                maxW="90vw"
                border="1rem groove crimson"
                id="Sword"
                src={Sword}
                alt="One eyed Man becomes a whirlwind as he violently swings his sword, his opened eye is white with rage."
              />
            </ModalContent>
          </Modal>
        </WrapItem>
      </Wrap>
    </section>
  );
}

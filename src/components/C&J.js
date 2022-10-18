import React from "react";
import PuckBright from "../Images/C&J/PuckBright.png";
import PuckShock from "../Images/C&J/PuckShocked.jpg";
import Smile from "../Images/C&J/SchriekeSmile.png";
import SchriekeShock from "../Images/C&J/SchriekeShock.jpeg";
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

export default function CandJ() {
  const {
    isOpen: puckShockOpen,
    onOpen: puckShockDisplay,
    onClose: puckShockClose,
  } = useDisclosure();
  const {
    isOpen: brightPuckOpen,
    onOpen: brightPuckDisplay,
    onClose: brightPuckClose,
  } = useDisclosure();
  const {
    isOpen: witchSmileOpen,
    onOpen: witchSmileDisplay,
    onClose: witchSmileClose,
  } = useDisclosure();
  const {
    isOpen: embarassedOpen,
    onOpen: embarassedDisplay,
    onClose: embarassedClose,
  } = useDisclosure();

  return (
    <section>
      <Heading className="head" fontFamily="Koulen" fontSize="4rem">
        Comedy & Joy
      </Heading>
      <Text mt="1rem" mb="1rem" className="text">
        Despite being a mostly deeply dramatic and emotionally draining work of
        art, Berserk can sometimes have moments of comedy and profound joy.
      </Text>
      <Wrap ml="2rem" mr="2rem" justify="center" spacing="3rem">
        <WrapItem>
          <Image
            className="cursor"
            onClick={puckShockDisplay}
            border="0.5rem groove crimson"
            maxW="10rem"
            id="puckShock"
            src={PuckShock}
            alt="Elf with chestnut shaped head looking shocked and a man who looks tired"
          />
          <Modal
            isCentered
            size=""
            onClose={puckShockClose}
            isOpen={puckShockOpen}
          >
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Center>
                <Image
                  maxHeight="90vh"
                  maxW="75vw"
                  border="1rem groove crimson"
                  id="puckShock"
                  src={PuckShock}
                  alt="Elf with chestnut shaped head looking shocked and a man who looks tired"
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            className="cursor"
            onClick={brightPuckDisplay}
            border="0.5rem groove crimson"
            maxW="10rem"
            id="puckBright"
            src={PuckBright}
            alt="Elf with chestnut shaped head staring at bright light"
          />
          <Modal
            isCentered
            size=""
            onClose={brightPuckClose}
            isOpen={brightPuckOpen}
          >
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Center>
                <Image
                  maxHeight="90vh"
                  maxW="75vw"
                  border="1rem groove crimson"
                  d="puckBright"
                  src={PuckBright}
                  alt="Elf with chestnut shaped head staring at bright light"
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            className="cursor"
            onClick={witchSmileDisplay}
            border="0.5rem groove crimson"
            maxW="10rem"
            id="smile"
            src={Smile}
            alt="Little girl smiling very nicely with text 'Even with all that I can still smile'"
          />
          <Modal
            isCentered
            size=""
            onClose={witchSmileClose}
            isOpen={witchSmileOpen}
          >
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Center>
                <Image
                  maxHeight="90vh"
                  maxW="75vw"
                  border="1rem groove crimson"
                  id="smile"
                  src={Smile}
                  alt="Little girl smiling very nicely with text 'Even with all that I can still smile'"
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            className="cursor"
            onClick={embarassedDisplay}
            border="0.5rem groove crimson"
            maxW="10rem"
            id="schriekeShock"
            src={SchriekeShock}
            alt="Little girl with a very embarassed and shy face as she tries to feed a male figure"
          />
          <Modal
            isCentered
            size=""
            onClose={embarassedClose}
            isOpen={embarassedOpen}
          >
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Center>
                <Image
                  maxHeight="90vh"
                  maxW="75vw"
                  border="1rem groove crimson"
                  id="schriekeShock"
                  src={SchriekeShock}
                  alt="Little girl with a very embarassed and shy face as she tries to feed a male figure"
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
      </Wrap>
    </section>
  );
}

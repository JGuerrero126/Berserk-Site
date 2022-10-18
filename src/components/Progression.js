import React from "react";
import FirstGuts from "../Images/Progress/GutsFA.jpg";
import UpdatedGuts from "../Images/Progress/GutsUA.png";
import FirstFemto from "../Images/Progress/FemtoFA.png";
import UpdatedFemto from "../Images/Progress/FemtoUA.jpg";
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

export default function Progression() {
  const {
    isOpen: upGrifOpen,
    onOpen: upGrifDisplay,
    onClose: upGrifClose,
  } = useDisclosure();
  const {
    isOpen: ogGrifOpen,
    onOpen: ogGrifDisplay,
    onClose: ogGrifClose,
  } = useDisclosure();
  const {
    isOpen: upGutsOpen,
    onOpen: upGutsDisplay,
    onClose: upGutsClose,
  } = useDisclosure();
  const {
    isOpen: ogGutsOpen,
    onOpen: ogGutsDisplay,
    onClose: ogGutsClose,
  } = useDisclosure();

  return (
    <section>
      <Heading fontSize="4rem" className="head" fontFamily="Koulen">
        The Progression
      </Heading>
      <Text mt="1rem" mb="1rem" className="text">
        Berserk's author, Kentaro Muira, undergoes quite the artistic journey
        throughout the story of Berserk. Despite having considerable skill from
        the start, his art becomes simply masterful.
      </Text>
      <Wrap ml="2rem" mr="2rem" justify="center" spacing="3rem">
        <WrapItem>
          <Image
            className="cursor"
            onClick={ogGutsDisplay}
            border="0.5rem groove crimson"
            maxW="10rem"
            id="firstGuts"
            src={FirstGuts}
            alt="One-Eyed Male Warrior clad in black armor reloading crossbow attached to arm"
          />
          <Modal isCentered size="xl" onClose={ogGutsClose} isOpen={ogGutsOpen}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Text mt="1rem" className="text" color="red" fontFamily="Koulen">
                This is Guts from the very first chapter of Berserk.
              </Text>
              <Image
                maxHeight="90vh"
                maxW="90vw"
                border="1rem groove crimson"
                id="firstGuts"
                src={FirstGuts}
                alt="One-Eyed Male Warrior clad in black armor reloading crossbow attached to arm"
              />
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            className="cursor"
            onClick={upGutsDisplay}
            border="0.5rem groove crimson"
            maxW="10rem"
            id="updatedGuts"
            src={UpdatedGuts}
            alt="One-Eyed Male Warrior clad in black armor with flowing cape and large sword standing above child"
          />
          <Modal isCentered size="xl" onClose={upGutsClose} isOpen={upGutsOpen}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Text mt="1rem" className="text" color="red" fontFamily="Koulen">
                Here is Guts at the same point of time but drawn much later in
                Muira's career
              </Text>
              <Image
                maxHeight="90vh"
                maxW="90vw"
                border="1rem groove crimson"
                id="updatedGuts"
                src={UpdatedGuts}
                alt="One-Eyed Male Warrior clad in black armor with flowing cape and large sword standing above child"
              />
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            className="cursor"
            onClick={ogGrifDisplay}
            border="0.5rem groove crimson"
            maxW="10rem"
            id="firstFemto"
            src={FirstFemto}
            alt="Very buff demonic looking figure with bird-skull like helmet and skin like latex with wings hanging over arms, standing"
          />
          <Modal isCentered size="xl" onClose={ogGrifClose} isOpen={ogGrifOpen}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Text mt="1rem" className="text" color="red" fontFamily="Koulen">
                This is Femto, the series Antagonist, from one of the first
                chapters of Berserk
              </Text>
              <Image
                maxHeight="90vh"
                maxW="90vw"
                border="1rem groove crimson"
                id="firstFemto"
                src={FirstFemto}
                alt="Very buff demonic looking figure with bird-skull like helmet and skin like latex with wings hanging over arms, standing"
              />
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            className="cursor"
            onClick={upGrifDisplay}
            border="0.5rem groove crimson"
            maxW="10rem"
            id="updatedFemto"
            src={UpdatedFemto}
            alt="Very buff demonic looking figure with bird-skull like helmet and skin like latex with wings hanging over arms, standing atop ground that looks like faces of babies"
          />
          <Modal isCentered size="xl" onClose={upGrifClose} isOpen={upGrifOpen}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Text mt="1rem" className="text" color="red" fontFamily="Koulen">
                Here is Femto from around the same point in time but drawn much
                later in Muira's career
              </Text>
              <Image
                maxHeight="90vh"
                maxW="90vw"
                border="1rem groove crimson"
                id="updatedFemto"
                src={UpdatedFemto}
                alt="Very buff demonic looking figure with bird-skull like helmet and skin like latex with wings hanging over arms, standing atop ground that looks like faces of babies"
              />
            </ModalContent>
          </Modal>
        </WrapItem>
      </Wrap>
    </section>
  );
}

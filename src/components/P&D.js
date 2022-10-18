import React from "react";
import BlackSword from "../Images/P&D/BlackSwordsman.jpg";
import SkullKnightSmoke from "../Images/P&D/SkullKnightSmokey.jpg";
import GutsHeavy from "../Images/P&D/GutsHeavyRain.jpg";
import Darkness from "../Images/P&D/GutsDarkness.jpg";
import Ganishka from "../Images/P&D/GanishkaDoor.jpg";
import Fight from "../Images/P&D/SKFightsNZ.jpg";
import OnHill from "../Images/P&D/SKOnHill.jpg";
import Eclipse from "../Images/P&D/SolarEclipse.jpg";
import Void from "../Images/P&D/VoidTakingShape.jpg";

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

export default function PandD() {
  const {
    isOpen: deadEyesOpen,
    onOpen: deadEyesDisplay,
    onClose: deadEyesClose,
  } = useDisclosure();
  const {
    isOpen: skNightOpen,
    onOpen: skNightDisplay,
    onClose: skNightClose,
  } = useDisclosure();
  const {
    isOpen: heavySwordOpen,
    onOpen: heavySwordDisplay,
    onClose: heavySwordClose,
  } = useDisclosure();
  const {
    isOpen: darknessOpen,
    onOpen: darknessDisplay,
    onClose: darknessClose,
  } = useDisclosure();
  const {
    isOpen: ganishkaOpen,
    onOpen: ganishkaDisplay,
    onClose: ganishkaClose,
  } = useDisclosure();
  const {
    isOpen: fightOpen,
    onOpen: fightDisplay,
    onClose: fightClose,
  } = useDisclosure();
  const {
    isOpen: onHillOpen,
    onOpen: onHillDisplay,
    onClose: onHillClose,
  } = useDisclosure();
  const {
    isOpen: eclipseOpen,
    onOpen: eclipseDisplay,
    onClose: eclipseClose,
  } = useDisclosure();
  const {
    isOpen: voidOpen,
    onOpen: voidDisplay,
    onClose: voidClose,
  } = useDisclosure();

  return (
    <section>
      <Heading className="head" fontFamily="Koulen" fontSize="4rem">
        Pain & Dread
      </Heading>
      <Text mt="1rem" mb="1rem" className="text">
        Berserk is most well known for its often horrific artwork, but it also
        shines in the moments just before those horrific event's occur as well
        illustrating moments of emotional trauma and pain.
      </Text>
      <Wrap ml="2rem" mr="2rem" justify="center" spacing="3rem">
        <WrapItem>
          <Image
            onClick={deadEyesDisplay}
            className="cursor"
            border="0.5rem groove crimson"
            maxW="10rem"
            id="blackSword"
            src={BlackSword}
            alt="Stoic looking man standing in front of a fire with dead eyes"
          />
          <Modal
            isCentered
            size=""
            onClose={deadEyesClose}
            isOpen={deadEyesOpen}
          >
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Center>
                <Image
                  maxHeight="90vh"
                  maxW="75vw"
                  border="1rem groove crimson"
                  id="blackSword"
                  src={BlackSword}
                  alt="Stoic looking man standing in front of a fire with dead eyes"
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            onClick={skNightDisplay}
            className="cursor"
            border="0.5rem groove crimson"
            maxW="10rem"
            id="skullKnightSmoke"
            src={SkullKnightSmoke}
            alt="Moonlit silouette of a horse-riding figure in thick fog"
          />
          <Modal isCentered size="" onClose={skNightClose} isOpen={skNightOpen}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Center>
                <Image
                  maxHeight="90vh"
                  maxW="75vw"
                  border="1rem groove crimson"
                  id="skullKnightSmoke"
                  src={SkullKnightSmoke}
                  alt="Moonlit silouette of a horse-riding figure in thick fog"
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            onClick={heavySwordDisplay}
            className="cursor"
            border="0.5rem groove crimson"
            maxW="10rem"
            id="gutsHeavy"
            src={GutsHeavy}
            alt="Man lifting sword to strike while being beaten down by a very heavy rain storm"
          />
          <Modal
            isCentered
            size=""
            onClose={heavySwordClose}
            isOpen={heavySwordOpen}
          >
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Center>
                <Image
                  maxHeight="90vh"
                  maxW="75vw"
                  border="1rem groove crimson"
                  id="gutsHeavy"
                  src={GutsHeavy}
                  alt="Man lifting sword to strike while being beaten down by a very heavy rain storm"
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            onClick={darknessDisplay}
            className="cursor"
            border="0.5rem groove crimson"
            maxW="10rem"
            id="darkness"
            src={Darkness}
            alt="Ghastly looking faces behind man with one eye surrounded by darkness"
          />
          <Modal
            isCentered
            size=""
            onClose={darknessClose}
            isOpen={darknessOpen}
          >
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Center>
                <Image
                  maxHeight="90vh"
                  maxW="75vw"
                  border="1rem groove crimson"
                  id="darkness"
                  src={Darkness}
                  alt="Ghastly looking faces behind man with one eye surrounded by darkness"
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            onClick={ganishkaDisplay}
            className="cursor"
            border="0.5rem groove crimson"
            maxW="10rem"
            id="Ganishka"
            src={Ganishka}
            alt="Mass of twisted and mishapen eyes and faces peer through a barely opened door."
          />
          <Modal
            isCentered
            size=""
            onClose={ganishkaClose}
            isOpen={ganishkaOpen}
          >
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Center>
                <Image
                  maxHeight="90vh"
                  maxW="75vw"
                  border="1rem groove crimson"
                  id="Ganishka"
                  src={Ganishka}
                  alt="Mass of twisted and mishapen eyes and faces peer through a barely opened door."
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            onClick={fightDisplay}
            className="cursor"
            border="0.5rem groove crimson"
            maxW="10rem"
            id="Fight"
            src={Fight}
            alt="Knight armed with a sword and shield rides a horse directly towards a horned demonic creature covered in black fur."
          />
          <Modal isCentered size="" onClose={fightClose} isOpen={fightOpen}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Center>
                <Image
                  maxHeight="90vh"
                  maxW="75vw"
                  border="1rem groove crimson"
                  id="Fight"
                  src={Fight}
                  alt="Knight armed with a sword and shield rides a horse directly towards a horned demonic creature covered in black fur."
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            onClick={onHillDisplay}
            className="cursor"
            border="0.5rem groove crimson"
            maxW="10rem"
            id="OnHill"
            src={OnHill}
            alt="Knight Riding A Horse sits on top of a mountain silhoutted by the moon."
          />
          <Modal isCentered size="" onClose={onHillClose} isOpen={onHillOpen}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Center>
                <Image
                  maxHeight="90vh"
                  maxW="75vw"
                  border="1rem groove crimson"
                  id="OnHill"
                  src={OnHill}
                  alt="Knight Riding A Horse sits on top of a mountain silhoutted by the moon."
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            onClick={eclipseDisplay}
            className="cursor"
            border="0.5rem groove crimson"
            maxW="10rem"
            id="Eclipse"
            src={Eclipse}
            alt="Skeleton-thin man wearing iron mask stares as an eclipse occurs, the scene is covered in fog."
          />
          <Modal isCentered size="" onClose={eclipseClose} isOpen={eclipseOpen}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Center>
                <Image
                  maxHeight="90vh"
                  maxW="75vw"
                  border="1rem groove crimson"
                  id="Eclipse"
                  src={Eclipse}
                  alt="Skeleton-thin man wearing iron mask stares as an eclipse occurs, the scene is covered in fog."
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
        <WrapItem>
          <Image
            onClick={voidDisplay}
            className="cursor"
            border="0.5rem groove crimson"
            maxW="10rem"
            id="Void"
            src={Void}
            alt="Dark mass takes shape in a sea made of screaming and crying faces."
          />
          <Modal isCentered size="" onClose={voidClose} isOpen={voidOpen}>
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
            <ModalContent bg="">
              <Center>
                <Image
                  maxHeight="90vh"
                  maxW="75vw"
                  border="1rem groove crimson"
                  id="Void"
                  src={Void}
                  alt="Dark mass takes shape in a sea made of screaming and crying faces."
                />
              </Center>
            </ModalContent>
          </Modal>
        </WrapItem>
      </Wrap>
    </section>
  );
}

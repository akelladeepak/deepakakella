import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Typed from "react-typed";

const greeting = "Hello, I am Deepak!";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="black"
  >
<VStack spacing={16}>
  <VStack spacing={4} alignItems="center">
  <Avatar 
    name="Deepak" 
    src="https://media.licdn.com/dms/image/D4E03AQEPV0PJt0XtHQ/profile-displayphoto-shrink_800_800/0/1685892424908?e=2147483647&v=beta&t=Rtb4aRR5rW8ywnRFsV8Gv0E-zzjuMKwfEPNaUjJB7DQ"
    size="2xl"
    />
  <Heading as="h4" size="md" noOfLines={1}>
    {greeting}
    </Heading>
  </VStack>
  <VStack spacing={6}>
  <div className="styles">
    <Heading as ="h1" size="lg" noOfLines={1}>
      <Typed 
        strings={[
          "I'm a Software Developer",
          "I'm an Innovator",
          "I'm a Believer",
          "I'm a Problem Solver",
        ]}
        typeSpeed={80}
        backSpeed={80}
        loop
      />
    </Heading>
  </div>
  </VStack>
</VStack>
  </FullScreenSection>
);

export default LandingSection;

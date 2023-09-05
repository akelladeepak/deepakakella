import React from "react";
import { Heading, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Fade from 'react-reveal/Fade';

const AboutSection = () => (
    <FullScreenSection
        justifyContent="center"
        alignItems="flex-start"
        isDarkBackground
        backgroundColor="black"
    >
    
    <VStack spacing={16}>
        <Fade left duration={1500}>
            <Heading id="about-section" as="h1" size="lg" noOfLines={1}>About Me</Heading>
        </Fade>
        <Fade left duration={2000}>
            <Text fontSize="xl" fontFamily="poppins">
                Hello! My name is Deepak. I am a Junior pursuing a degree in Computer Science at the UMass Boston, 
                specializing in web development. With a keen interest in applying my skills in a professional environment, I am eager to contribute to projects and make an impact in the tech industry.
            </Text>
        </Fade>
        <Fade left duration={2000}>
            <Text fontSize="xl" fontFamily="poppins">
                I specialize in crafting engaging user interfaces and interactive experiences using React. With a keen eye for detail and a commitment to clean code, 
                I strive to create exceptional digital solutions.
            </Text>
        </Fade>
        <Fade left duration={2000}>
            <Text fontSize="xl" fontFamily="poppins">
                When I'm not coding, you'll find me exploring the latest developments in the tech world, listening to music, playing basketball, or enjoying a cup of coffee while brainstorming new ideas to help our world utilise its 
                resources efficiently.
            </Text>
        </Fade>
    </VStack>
    
    </FullScreenSection>
);

export default AboutSection;
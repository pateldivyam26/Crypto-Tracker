import { Box, Heading, Center, VStack, Text } from '@chakra-ui/react';
import Carousel from "./Carousel";

export default function Banner() {

  return (<>
    <Box w="100%" h="23em" bgImage="url('/background.jpg')"
      bgPosition="center" bgRepeat="no-repeat" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Center>
        <VStack spacing="2rem">
          <Heading color="white" mt="1rem" size="4xl">
            Crypto-Tracker
          </Heading>
          <Text color="white" mt="1rem" fontSize="2g">
            {/* Get Info Regarding Your Favorite Crypto Currency */}
          </Text>
          <Box w={{ sm: "60rem", md: "80rem" }} mt="1rem">
            <Carousel />
          </Box>
        </VStack>
      </Center>
    </Box>
  </>);
}

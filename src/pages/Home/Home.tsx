import {
  Text, Flex, Heading, Center,
} from "@chakra-ui/react";
import List from "./List";
import HeaderInput from "./HeaderInput";

const Home = () => (
  <Flex backgroundColor="gray.50" h="100vh" gridGap={16} direction="column" as="main">
    <Center as="header">
      <Heading>
        <Text
          bgGradient="linear(to-l, green.500 , green.200)"
          bgClip="text"
          marginTop={6}
        >
          Todo App
        </Text>
      </Heading>
    </Center>
    <Center>
      <HeaderInput />
    </Center>
    <Center>
      <List />
    </Center>
  </Flex>
);

export default Home;

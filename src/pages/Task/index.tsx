import { FormEvent } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  Text, IconButton, Box, Flex, Heading, Divider, Input, Center, useControllableState, Button,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import ListTask from "../Home/List/Task";

const Task = () => {
  const { id } = useParams<{ id: string }>();
  const { goBack } = useHistory();
  const [name, setName] = useControllableState({ defaultValue: "Name" });
  const [color, setColor] = useControllableState({ defaultValue: "blue.500" });

  const handleName = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.currentTarget.value);
  };

  const handleColor = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setColor(e.currentTarget.value);
  };

  const handleSave = () => {
    // saveFunction();
    goBack();
  };

  return (
    <Box>
      <Flex padding={1} gridGap={8} alignItems="center">
        <IconButton
          onClick={goBack}
          backgroundColor="transparent"
          aria-label="Go back to home"
          w="32px"
          h="32px"
          fontSize="32px"
          icon={<ArrowBackIcon />}
        />
        <Heading>
          Go back
        </Heading>
      </Flex>
      <Divider />
      <Center gridGap={8} flexDirection="column">
        <Box marginBottom={2}>
          <Text>Change task name</Text>
          <Input value={name} onChange={handleName} placeholder="Change name" />
        </Box>
        <Box marginBottom={4}>
          <Text>Change task color</Text>
          <Input value={color} onChange={handleColor} w="200px" h="150px" type="color" placeholder="Change name" />
        </Box>
        <Button colorScheme="green" onClick={handleSave}>Save</Button>
        <ListTask name={name} color={color} time="uwU" isChecked id={id} />
      </Center>
    </Box>
  );
};

export default Task;

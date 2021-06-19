import { FormEvent } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  Text, IconButton, Box, Flex, Heading, Divider, Input, Center, useControllableState, Button,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import ListTask from "../Home/List/Task";
import { useTaskContext } from "../../context/TaskContext/TaskContext";

const Task = () => {
  const { Tasks, editTask } = useTaskContext();
  const { id: urlId } = useParams<{ id: string }>();

  const {
    color, name, time, isChecked,
  } = Tasks.filter(({ id: currentId }) => urlId === currentId)[0];

  const { goBack } = useHistory();
  const [newName, setNewName] = useControllableState({ defaultValue: name });
  const [newColor, setNewColor] = useControllableState({ defaultValue: color });

  const handleName = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewName(e.currentTarget.value);
  };

  const handleColor = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewColor(e.currentTarget.value);
  };

  const handleSave = () => {
    editTask?.({
      color: newColor, id: urlId, name: newName, time, isChecked,
    });
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
          <Input value={newName} onChange={handleName} placeholder="Change name" />
        </Box>
        <Box marginBottom={4}>
          <Text>Change task color</Text>
          <Input value={color} onChange={handleColor} w="200px" h="150px" type="color" placeholder="Change name" />
        </Box>
        <Button colorScheme="green" onClick={handleSave}>Save</Button>
        <ListTask name={newName} color={newColor} time={time} isChecked={isChecked} id={urlId} />
      </Center>
    </Box>
  );
};

export default Task;

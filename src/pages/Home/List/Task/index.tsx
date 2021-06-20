import {
  Text, Checkbox, Grid, IconButton, GridItem, useBoolean,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import ITask from "./types";
import { useTaskContext } from "../../../../context/TaskContext/TaskContext";

dayjs.extend(relativeTime);

const Task = ({
  color, name, time, id, isChecked,
}: ITask) => {
  const { deleteTask, editTask } = useTaskContext();
  const { push } = useHistory();
  const [currentIsChecked, setChecked] = useBoolean(isChecked);

  const handleCheck = () => {
    setChecked.toggle();
    editTask?.({
      color, id, name, time, isChecked: currentIsChecked,
    });
  };
  return (
    <Grid gridGap={2} templateColumns="repeat(3, 1fr)" templateRows="repeat(3, 1fr)" padding={4} backgroundColor={color} borderRadius="20%" w="215px" h="215px">
      <GridItem paddingRight={2} alignSelf="flex-start" justifySelf="flex-end" colSpan={3}>
        <Text color="white" fontSize={16}>{dayjs().to(time)}</Text>
      </GridItem>
      <GridItem alignSelf="center" justifySelf="center" colSpan={2}>
        <Text color="white" textOverflow="clip" fontSize={20}>{name}</Text>
      </GridItem>
      <GridItem alignSelf="center" justifySelf="center">
        <Checkbox onClick={handleCheck} isChecked={currentIsChecked} size="lg" />
      </GridItem>
      <GridItem
        colSpan={2}
        justifySelf="center"
        alignSelf="flex-end"
      >
        <IconButton
          color="black"
          aria-label="Settings"
          fontSize="20px"
          onClick={() => push(`/${id}`)}
          icon={<EditIcon />}
        />
      </GridItem>
      <GridItem justifySelf="center" alignSelf="flex-end">
        <IconButton
          color="red"
          aria-label="Delete"
          fontSize="20px"
          onClick={() => deleteTask?.(id)}
          icon={<DeleteIcon />}
        />
      </GridItem>
    </Grid>
  );
};

export default Task;

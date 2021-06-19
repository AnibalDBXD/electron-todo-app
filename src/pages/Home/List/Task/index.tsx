import {
  Text, Checkbox, Grid, IconButton, GridItem,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import ITask from "./types";

dayjs.extend(relativeTime);

const Task = ({
  color, name, time, id, isChecked,
}: ITask) => {
  const { push } = useHistory();
  return (
    <Grid gridGap={2} templateColumns="repeat(3, 1fr)" templateRows="repeat(3, 1fr)" padding={4} backgroundColor={color} borderRadius="20%" w="215px" h="215px">
      <GridItem paddingRight={2} alignSelf="flex-start" justifySelf="flex-end" colSpan={3}>
        <Text color="white" fontSize={16}>{dayjs().to(time)}</Text>
      </GridItem>
      <GridItem alignSelf="center" justifySelf="center" colSpan={2}>
        <Text color="white" textOverflow="clip" fontSize={20}>{name}</Text>
      </GridItem>
      <GridItem alignSelf="center" justifySelf="center">
        <Checkbox isChecked={isChecked} size="lg" />
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
          icon={<DeleteIcon />}
        />
      </GridItem>
    </Grid>
  );
};

export default Task;

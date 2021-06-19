import { SimpleGrid } from "@chakra-ui/react";
import { useTaskContext } from "../../../context/TaskContext/TaskContext";
import Task from "./Task";

const List = () => {
  const { Tasks } = useTaskContext();

  return (
    <SimpleGrid w="80vw" spacing={20} columns={[1, 2, 3, 4]} justifyItems="center">
      {Tasks.map(({
        color, id, name, time, isChecked,
      }) => <Task key={id} color={color} id={id} name={name} time={time} isChecked={isChecked} />)}
    </SimpleGrid>
  );
};

export default List;

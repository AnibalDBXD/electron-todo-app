import { SimpleGrid } from "@chakra-ui/react";
import Task from "./Task";

const List = () => (
  <SimpleGrid w="80vw" spacing={20} columns={[1, 2, 3, 4]} justifyItems="center">
    <Task />
    <Task />
    <Task />
    <Task />
  </SimpleGrid>
);

export default List;

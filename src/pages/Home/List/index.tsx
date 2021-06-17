import { SimpleGrid } from "@chakra-ui/react";
import Task from "./Task";

const List = () => (
  <SimpleGrid w="80vw" spacing={20} columns={[1, 2, 3, 4]} justifyItems="center">
    <Task color="blue.500" id="1" name="namee" time="10:32" isChecked />
    <Task color="blue.500" id="1" name="namee" time="10:32" isChecked />
    <Task color="blue.500" id="1" name="namee" time="10:32" isChecked />
    <Task color="blue.500" id="1" name="namee" time="10:32" isChecked />
  </SimpleGrid>
);

export default List;

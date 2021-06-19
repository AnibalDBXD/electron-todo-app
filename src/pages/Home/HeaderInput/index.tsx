import {
  IconButton, InputRightElement, Input, InputGroup, InputLeftElement, useBoolean,
} from "@chakra-ui/react";
import { SearchIcon, PlusSquareIcon, AddIcon } from "@chakra-ui/icons";
import { FormEvent, useState } from "react";
import { generate } from "shortid";
import dayjs from "dayjs";
import { useTaskContext } from "../../../context/TaskContext/TaskContext";
import { randomColor } from "./utils";

const HeaderInput = () => {
  const { addTask } = useTaskContext();
  const [isCreating, setIsCreating] = useBoolean(false);
  const [InputValue, setInputValue] = useState("");

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.currentTarget.value);
  };

  const toggleCreating = () => {
    setIsCreating.toggle();
    setInputValue("");
  };

  const handleCreateTask = () => {
    if (InputValue !== "") {
      addTask?.({
        color: randomColor(), id: generate(), name: InputValue, time: dayjs(),
      });
    }
  };

  return (
    <InputGroup w="70%" size="lg">
      <InputLeftElement width="4.5rem" paddingRight="1.2rem">
        <IconButton
          backgroundColor="transparent"
          color="green.400"
          aria-label="Add task icon"
          fontSize="20px"
          onClick={toggleCreating}
          icon={<PlusSquareIcon />}
        />
      </InputLeftElement>
      <Input
        pr="4.5rem"
        borderColor={`${isCreating ? "green.400" : "inherit"}`}
        onChange={handleChange}
        value={InputValue}
        onSubmit={handleCreateTask}
        placeholder={`${isCreating ? "Create Task" : "Search task"}`}
      />
      <InputRightElement width="4.5rem">
        {
          isCreating ? (
            <IconButton
              backgroundColor="transparent"
              color="green.400"
              aria-label="Add Task"
              fontSize="20px"
              onClick={handleCreateTask}
              icon={<AddIcon />}
            />
          ) : (
            <IconButton
              backgroundColor="transparent"
              color="green.400"
              aria-label="Add task icon"
              fontSize="20px"
              icon={<SearchIcon />}
            />
          )
        }

      </InputRightElement>
    </InputGroup>
  );
};

export default HeaderInput;

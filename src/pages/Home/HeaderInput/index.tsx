import {
  IconButton, InputRightElement, Input, InputGroup,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const HeaderInput = () => (
  <InputGroup w="70%" size="lg">
    <Input
      pr="4.5rem"
      placeholder="Search task"
    />
    <InputRightElement width="4.5rem">
      <IconButton
        backgroundColor="transparent"
        color="green.400"
        aria-label="Add task icon"
        fontSize="20px"
        icon={<SearchIcon />}
      />
    </InputRightElement>
  </InputGroup>
);

export default HeaderInput;

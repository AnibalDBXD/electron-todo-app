import {
  Text, Checkbox, Grid, IconButton, GridItem,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const Task = () => (
  <Grid gridGap={2} templateColumns="repeat(3, 1fr)" templateRows="repeat(3, 1fr)" padding={4} backgroundColor="red.500" borderRadius="20%" w="215px" h="215px">
    <GridItem paddingRight={2} alignSelf="flex-start" justifySelf="flex-end" colSpan={3}>
      <Text color="white" fontSize={24}>10:52</Text>
    </GridItem>
    <GridItem alignSelf="center" justifySelf="center" colSpan={2}>
      <Text color="white" textOverflow="clip" fontSize={20}>Comprar la cena </Text>
    </GridItem>
    <GridItem alignSelf="center" justifySelf="center">
      <Checkbox size="lg" />
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

export default Task;

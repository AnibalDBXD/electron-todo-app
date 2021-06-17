import { Center, Spinner } from "@chakra-ui/react";
import ILoading from "./types";

const Loading = ({ isPage }: ILoading) => (
  <Center h={`${isPage ? "100vh" : "auto"}`}>
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  </Center>
);

export default Loading;

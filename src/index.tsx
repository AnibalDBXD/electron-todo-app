import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import RouterApp from "./routes/App";
import TaskProvider from "./context/TaskContext/TaskProvider";

ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <TaskProvider>
        <RouterApp />
      </TaskProvider>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById("root"),
);

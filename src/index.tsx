import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import RouterApp from "./routes/App";

ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <RouterApp />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById("root"),
);

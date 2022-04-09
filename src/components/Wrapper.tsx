import { Flex } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "./Sidebar";

interface WrapperProps {}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Flex gap={"2%"}>
      <Sidebar />
      {children}
    </Flex>
  );
};

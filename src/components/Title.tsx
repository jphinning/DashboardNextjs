import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

interface TitleProps {
  title: string;
}

export const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <Flex mb={5}>
      <Heading size="sm">{title} </Heading>
    </Flex>
  );
};

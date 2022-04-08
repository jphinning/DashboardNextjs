import { Flex } from "@chakra-ui/react";
import { Body } from "../components/Body";
import { Sidebar } from "../components/Sidebar";

const Index = () => (
  <>
    <Flex gap={"2%"}>
      <Sidebar />
      <Body />
    </Flex>
  </>
);

export default Index;

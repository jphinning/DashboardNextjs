import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface MenuBoxProps {
  title: string;
}

type data = "ALO" | "CPC" | "CPCA" | "PP";

export const MenuBox: React.FC<MenuBoxProps> = ({ title }) => {
  const [indicator, setIndicator] = useState<data>("ALO");

  return (
    <Box boxShadow="md" borderRadius="md" p="3" w="15vw">
      <Heading as="em" size="xs" color="gray.500">
        {title}
      </Heading>
      <Flex gap="1">
        <Menu>
          {() => (
            <>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} w="15vw">
                {indicator}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => setIndicator("ALO")}>ALO</MenuItem>
                <MenuItem onClick={() => setIndicator("CPC")}>CPC</MenuItem>
                <MenuItem onClick={() => setIndicator("CPCA")}>CPCA </MenuItem>
                <MenuItem onClick={() => setIndicator("PP")}>PP</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Flex>
    </Box>
  );
};

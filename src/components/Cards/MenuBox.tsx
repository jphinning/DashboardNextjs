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
import React from "react";

interface MenuBoxProps {
  title: string;
  indicator: "alo" | "cpc" | "cpca" | "pp";
  setIndicator: (
    value: React.SetStateAction<"alo" | "cpc" | "cpca" | "pp">
  ) => void;
}

export const MenuBox: React.FC<MenuBoxProps> = ({
  title,
  indicator,
  setIndicator,
}) => {
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
                {indicator.toUpperCase()}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => setIndicator("alo")}>ALO</MenuItem>
                <MenuItem onClick={() => setIndicator("cpc")}>CPC</MenuItem>
                <MenuItem onClick={() => setIndicator("cpca")}>CPCA </MenuItem>
                <MenuItem onClick={() => setIndicator("pp")}>PP</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Flex>
    </Box>
  );
};

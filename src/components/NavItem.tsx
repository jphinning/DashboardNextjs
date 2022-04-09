import { Flex, Icon, Link, Menu, MenuButton, Text } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

interface NavItemProps {
  navSize: "small" | "large";
  title: string;
  icon: IconType;
  active?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({
  navSize,
  title,
  icon,
  active,
}) => {
  return (
    <Flex
      mt="30"
      flexDir="column"
      w="100%"
      alignItems={navSize == "small" ? "center" : "flex-start"}
    >
      <Menu placement="right">
        <Link
          backgroundColor={active ? "#c0d6e4" : "none"}
          borderRadius={8}
          _hover={{ textDecor: "none", backgroundColor: "#c0d6e4" }}
          w={navSize == "large" ? "100%" : "none"}
        >
          <MenuButton w="100%">
            <Flex p={3}>
              <Icon
                as={icon}
                fontSize="xl"
                color={active ? "#008ffb" : "gray.400"}
              />
              <Text ml="5" display={navSize == "small" ? "none" : "flex"}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
};

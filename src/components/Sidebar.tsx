import { Flex, IconButton, Link } from "@chakra-ui/react";
import { FiCalendar, FiGlobe, FiMenu } from "react-icons/fi";

import React, { useState } from "react";

import { NavItem } from "./NavItem";
import NextLink from "next/link";

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = ({}) => {
  const [navSize, changeNavSize] = useState<"large" | "small">("large");

  return (
    <Flex
      position="sticky"
      left="5"
      h="95vh"
      mt="2.5 vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      w={navSize == "small" ? "75px" : "250px "}
      borderRadius={navSize == "small" ? "15px" : "30px "}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          background="none"
          mt="5"
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize == "small") changeNavSize("large");
            else changeNavSize("small");
          }}
          aria-label={""}
        />
        <NextLink href="/" passHref>
          <Link w="100%">
            <NavItem
              navSize={navSize}
              icon={FiCalendar}
              title="Dashboard Hora"
              active
            />
          </Link>
        </NextLink>
        <NextLink href="/region" passHref>
          <Link w="100%">
            <NavItem navSize={navSize} icon={FiGlobe} title="Regiao" />
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};

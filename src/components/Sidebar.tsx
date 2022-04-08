import { Flex, IconButton } from "@chakra-ui/react";
import {
  FiBriefcase,
  FiDollarSign,
  FiHome,
  FiMenu,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import { IoPawOutline } from "react-icons/io5";

import React, { useState } from "react";

import { NavItem } from "./NavItem";

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
        <NavItem navSize={navSize} icon={FiHome} title="Dashboard" active />
        <NavItem navSize={navSize} icon={FiUser} title="About" />
        <NavItem navSize={navSize} icon={FiUser} title="Clients" />
        <NavItem navSize={navSize} icon={IoPawOutline} title="Animals" />
        <NavItem navSize={navSize} icon={FiDollarSign} title="Stocks" />
        <NavItem navSize={navSize} icon={FiBriefcase} title="Reports" />
        <NavItem navSize={navSize} icon={FiSettings} title="Settings" />
      </Flex>
    </Flex>
  );
};

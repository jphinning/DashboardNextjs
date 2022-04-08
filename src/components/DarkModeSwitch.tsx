import { useColorMode, Switch } from "@chakra-ui/react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Switch
      left="95vw"
      mt="2.5vh"
      position="sticky"
      color="green"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  );
};

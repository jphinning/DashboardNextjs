import { Box, Heading, Flex } from "@chakra-ui/react";
import React from "react";
import { IoCalendarClear } from "react-icons/io5";
import DatePicker from "react-datepicker";

interface DateBoxProps {
  title: string;
  date: Date;
  setDate: (value: React.SetStateAction<Date>) => void;
}

export const DateBox: React.FC<DateBoxProps> = ({ title, date, setDate }) => {
  return (
    <Box boxShadow="md" borderRadius="md" p="3" w="15vw">
      <Heading as="em" size="xs" color="gray.500">
        {title}
      </Heading>
      <Flex gap="1">
        <DatePicker
          selected={date}
          onChange={(date: Date) => setDate(date)}
          dateFormat="dd/MM/yyyy  "
        />
        <IoCalendarClear color="#008ffb" />
      </Flex>
    </Box>
  );
};

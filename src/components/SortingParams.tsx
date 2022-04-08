import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoCalendarClear } from "react-icons/io5";

interface SortingParamsProps {}

export const SortingParams: React.FC<SortingParamsProps> = ({}) => {
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate);
  return (
    <Flex>
      <Box boxShadow="md" borderRadius="md" width={"auto"} p="3">
        <Heading as="em" size="xs" color="gray.500">
          Data inicial
        </Heading>
        <Flex gap="1">
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
          />
          <IoCalendarClear />
        </Flex>
      </Box>
    </Flex>
  );
};

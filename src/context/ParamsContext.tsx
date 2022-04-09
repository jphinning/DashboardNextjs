import React, { createContext, useContext, useState } from "react";

export type Params = {
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  finalDate: Date;
  setFinalDate: React.Dispatch<React.SetStateAction<Date>>;
  indicator: string;
  setIndicator: React.Dispatch<React.SetStateAction<string>>;
};

const Context = createContext<Params>(undefined!);

export const ParamsProvider: React.FC = ({ children }) => {
  const [startDate, setStartDate] = useState(new Date(2019, 3, 5));
  const [finalDate, setFinalDate] = useState(new Date(2019, 3, 5));
  const [indicator, setIndicator] = useState<string>("alo");

  return (
    <Context.Provider
      value={{
        startDate: startDate,
        setStartDate: setStartDate,
        finalDate: finalDate,
        setFinalDate: setFinalDate,
        indicator: indicator,
        setIndicator: setIndicator,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// Custom context hook
export const useParamsContext = () => {
  return useContext(Context);
};

import React, { createContext, useContext, useState } from "react";

export type Params = {
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  finalDate: Date;
  setFinalDate: React.Dispatch<React.SetStateAction<Date>>;
};

const Context = createContext<Params>(undefined!);

export const ParamsProvider: React.FC = ({ children }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [finalDate, setFinalDate] = useState(new Date());

  return (
    <Context.Provider
      value={{
        startDate: startDate,
        setStartDate: setStartDate,
        finalDate: finalDate,
        setFinalDate: setFinalDate,
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

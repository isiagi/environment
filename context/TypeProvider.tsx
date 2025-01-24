import React, { createContext, useContext, useState } from "react";

interface TypeContextType {
  type: string | null;
  setType: React.Dispatch<React.SetStateAction<string | null>>;
}

const TypeContext = createContext<TypeContextType>({
  type: null,
  setType: () => {},
});

export const TypeProvider = ({ children }: { children: React.ReactNode }) => {
  const [type, setType] = useState<string | null>(null);

  return (
    <TypeContext.Provider value={{ type, setType }}>
      {children}
    </TypeContext.Provider>
  );
};

export const useType = () => useContext(TypeContext);

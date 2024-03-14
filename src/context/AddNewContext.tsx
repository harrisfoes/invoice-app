import { createContext, useContext, useState, ReactNode } from "react";

interface OpenFormAddNew {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

//creating the context
const AddNewContext = createContext<OpenFormAddNew | undefined>(undefined);

//using a custom hook for the context
export const useAddNew = (): OpenFormAddNew => {
  const context = useContext(AddNewContext);
  if (!context) {
    throw new Error("useAddNew must be used within a Theme Provider");
  }
  return context;
};

type AddNewProviderProps = {
  children: ReactNode;
};

//provider component
export const AddNewProvider: React.FC<AddNewProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = () => {
    setIsOpen((prevMode) => !prevMode);
  };

  return (
    <AddNewContext.Provider value={{ isOpen, toggleIsOpen }}>
      {children}
    </AddNewContext.Provider>
  );
};

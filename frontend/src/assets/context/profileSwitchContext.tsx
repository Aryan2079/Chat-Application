import React, { ReactNode, createContext, useContext, useState } from "react";

interface ComponentProviderProps {
  children: ReactNode;
}

interface ComponentContextType {
  showComponent: boolean;
  toggleComponent: () => void;
}

const profileSwitchContext = createContext<ComponentContextType>({
  showComponent: true,
  toggleComponent: () => {},
});

const ProfileSwitchContextProvider = ({ children }: ComponentProviderProps) => {
  const [showComponent, setShowComponent] = useState(true);

  const toggleComponent = () => {
    setShowComponent((prev) => !prev);
  };
  return (
    <profileSwitchContext.Provider value={{ showComponent, toggleComponent }}>
      {children}
    </profileSwitchContext.Provider>
  );
};

export default ProfileSwitchContextProvider;

export function useComponentContext() {
  return useContext(profileSwitchContext);
}

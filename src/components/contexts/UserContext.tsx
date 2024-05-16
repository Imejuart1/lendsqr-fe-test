// UserContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  USERNAME: string;
  EMAIL: string;
  'PHONE NUMBER': string;
}

interface UserContextType {
  selectedUser: User | null;
  selectUser: (user: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const selectUser = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <UserContext.Provider value={{ selectedUser, selectUser }}>
      {children}
    </UserContext.Provider>
  );
};

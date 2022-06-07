/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';

export const AuthContext = React.createContext({});

export default function AuthProvider(
  { children }: { children: React.ReactNode},
) {
  const [rollNo, setRollNo] = React.useState(null);

  const value = {
    rollNo,
    setRollNo,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

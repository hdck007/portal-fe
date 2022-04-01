/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';

export const DetailsContext = React.createContext({});

export default function DetailsProvider(
  { children }: { children: React.ReactNode},
) {
  const [isLoading, setIsLoading] = React.useState(true);

  const value = {
    isLoading,
    setIsLoading,
  };

  return (
    <DetailsContext.Provider value={value}>
      {children}
    </DetailsContext.Provider>
  );
}

import { PaletteMode } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';

import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

export type ColorModeContextValue = {
  toggleColorMode: () => void;
};

export const ColorModeContext = createContext<ColorModeContextValue>({
  toggleColorMode: () => undefined,
});

type ColorModeContextProviderProps = {
  children: ReactNode;
};

const ColorModeContextProvider = ({
  children,
}: ColorModeContextProviderProps) => {
  const [mode, setMode] = useState<PaletteMode>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorModeContext = () =>
  useContext<ColorModeContextValue>(ColorModeContext);

export default ColorModeContextProvider;

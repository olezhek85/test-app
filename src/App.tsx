import { Form } from '@/components/form/Form';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { Weather } from '@/components/weather/Weather';
import ColorModeContextProvider from '@/context/ColorModeContext';

const App = () => {
  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <Container>
        <Weather />
        <Form />
      </Container>
    </ColorModeContextProvider>
  );
};

export default App;

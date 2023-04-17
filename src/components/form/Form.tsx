import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { validationSchema } from './validation';
import TextField from '@mui/material/TextField';
import { IconButton, Typography, useTheme } from '@mui/material';
import { useColorModeContext } from '@/context/ColorModeContext';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  address?: string;
  city?: string;
  state?: string;
  zipcode?: string;
}

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  city: '',
  state: '',
  zipcode: '',
} as FormValues;

export const Form = () => {
  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const theme = useTheme();
  const { toggleColorMode } = useColorModeContext();

  return (
    <Box
      component='form'
      mt={3}
      noValidate
      autoComplete='off'
      onSubmit={formik.handleSubmit}
      sx={{
        width: 500,
      }}
    >
      <Stack spacing={2} direction='row' sx={{ marginBottom: 2 }}>
        <TextField
          autoFocus
          id='firstName'
          name='firstName'
          label='First Name'
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          fullWidth
          required
        />
        <TextField
          id='lastName'
          name='lastName'
          label='Last Name'
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          fullWidth
          required
        />
      </Stack>
      <TextField
        id='email'
        name='email'
        label='Email Address'
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        id='address'
        name='address'
        label='Address'
        value={formik.values.address}
        onChange={formik.handleChange}
        error={formik.touched.address && Boolean(formik.errors.address)}
        helperText={formik.touched.address && formik.errors.address}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Stack spacing={2} direction='row' sx={{ marginBottom: 2 }}>
        <TextField
          id='city'
          name='city'
          label='City'
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
          fullWidth
        />
        <TextField
          id='state'
          name='state'
          label='State'
          value={formik.values.state}
          onChange={formik.handleChange}
          error={formik.touched.state && Boolean(formik.errors.state)}
          helperText={formik.touched.state && formik.errors.state}
          fullWidth
        />
        <TextField
          id='zipcode'
          name='zipcode'
          label='Zip Code'
          value={formik.values.zipcode}
          onChange={formik.handleChange}
          error={formik.touched.zipcode && Boolean(formik.errors.zipcode)}
          helperText={formik.touched.zipcode && formik.errors.zipcode}
          fullWidth
        />
      </Stack>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <Typography>{theme.palette.mode} mode</Typography>
          <IconButton sx={{ ml: 1 }} onClick={toggleColorMode}>
            {theme.palette.mode === 'dark' ? (
              <LightModeOutlinedIcon />
            ) : (
              <DarkModeOutlinedIcon />
            )}
          </IconButton>
        </Box>

        <Button variant='contained' size='large' type='submit'>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface WeatherDetailsRowProps {
  label: string;
  children: React.ReactNode;
}

export const WeatherDetailsRow = ({
  label,
  children,
}: WeatherDetailsRowProps) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography
        component='span'
        sx={{ fontSize: 12, fontWeight: 400, textAlign: 'left' }}
      >
        {label}
      </Typography>
      <Typography
        component='span'
        sx={{ fontSize: 12, fontWeight: 600, textAlign: 'right' }}
      >
        {children}
      </Typography>
    </Box>
  );
};

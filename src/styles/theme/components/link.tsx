import type { Components } from '@mui/material/styles';

import type { Theme } from '../types';

export const MuiLink = {
  defaultProps: { underline: 'hover' },
  styleOverrides: {
    root: {
      fontWeight: 500,
      transition: 'color 0.15s ease',
    },
  },
} satisfies Components<Theme>['MuiLink'];

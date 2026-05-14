import { paperClasses } from '@mui/material/Paper';
import type { Components } from '@mui/material/styles';

import type { Theme } from '../types';

export const MuiCard = {
  styleOverrides: {
    root: ({ theme }) => {
      return {
        borderRadius: '16px',
        [`&.${paperClasses.elevation1}`]: {
          boxShadow:
            theme.palette.mode === 'dark'
              ? '0 4px 24px 0 rgba(0, 0, 0, 0.32), 0 0 0 1px rgba(255, 255, 255, 0.10)'
              : '0 2px 12px 0 rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04)',
        },
      };
    },
  },
} satisfies Components<Theme>['MuiCard'];

import type { Components } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

import type { Theme } from '../types';

export const MuiTableHead = {
  styleOverrides: {
    root: {
      [`& .${tableCellClasses.root}`]: {
        backgroundColor: 'var(--mui-palette-background-level1)',
        color: 'var(--mui-palette-text-secondary)',
        lineHeight: 1,
        fontSize: '0.75rem',
        fontWeight: 700,
        letterSpacing: '0.6px',
        textTransform: 'uppercase',
      },
    },
  },
} satisfies Components<Theme>['MuiTableHead'];

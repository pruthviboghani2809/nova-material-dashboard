import type { Components } from '@mui/material/styles';

import type { Theme } from '../types';

export const MuiButton = {
  styleOverrides: {
    root: { borderRadius: '8px', textTransform: 'none', fontWeight: 600, letterSpacing: '0.01em' },
    sizeSmall: { padding: '5px 16px' },
    sizeMedium: { padding: '8px 22px' },
    sizeLarge: { padding: '12px 28px' },
    textSizeSmall: { padding: '6px 12px' },
    textSizeMedium: { padding: '8px 16px' },
    textSizeLarge: { padding: '11px 16px' },
  },
} satisfies Components<Theme>['MuiButton'];

import type { Components } from '@mui/material/styles';

import type { Theme } from '../types';

export const MuiCardContent = {
  styleOverrides: { root: { padding: '24px', '&:last-child': { paddingBottom: '24px' } } },
} satisfies Components<Theme>['MuiCardContent'];

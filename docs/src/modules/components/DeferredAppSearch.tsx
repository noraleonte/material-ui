import * as React from 'react';
import { SxProps, Theme } from '@mui/material/styles';
import SearchButton from './SearchButton';

const defaultSx = { minWidth: { sm: 160 } };

const AppSearch = React.lazy(() => import('docs/src/modules/components/AppSearch'));

export default function DeferredAppSearch({ sx: sxProp }: { sx?: SxProps<Theme> }) {
  const mergedSx = sxProp ? [defaultSx, ...(Array.isArray(sxProp) ? sxProp : [sxProp])] : defaultSx;
  return (
    <React.Suspense fallback={<SearchButton sx={mergedSx} />}>
      <AppSearch sx={mergedSx} />
    </React.Suspense>
  );
}

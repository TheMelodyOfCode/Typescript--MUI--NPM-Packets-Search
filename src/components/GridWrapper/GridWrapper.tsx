import * as React from 'react';
import { MUIGrid } from '../../utils/MaterialUI';

import { gridWrapperStyles } from './gridWrapper.styles';

interface GridWrapperProps {
  children: React.ReactNode;
}

const GridWrapper: React.FC<GridWrapperProps> = ({ children }) => {
  return (
    <MUIGrid item xs={12} sx={gridWrapperStyles}>
      {children}
    </MUIGrid>
  );
};

export default GridWrapper;

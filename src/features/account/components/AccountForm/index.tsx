import React, { FC } from 'react';
import { Container, Box } from '@material-ui/core';

export class Test {
  public n = 'test bundle';

  public checkRuntime() {
    this.n = 'test treeshaking';
  }
}

export const AccountForm: FC = ({ children }) => {
  return (
    <Container maxWidth="sm">
      <Box mt={7} mb={12}>
        {children}
      </Box>
    </Container>
  );
};

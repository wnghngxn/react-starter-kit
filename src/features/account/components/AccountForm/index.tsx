import React, { FC } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

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

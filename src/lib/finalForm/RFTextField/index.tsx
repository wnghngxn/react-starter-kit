/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import TextField from '@material-ui/core/TextField';
// eslint-disable-next-line
export const RFTextField: FC<any> = props => {
  const {
    input,
    meta: { touched, error, submitError },
    ...other
  } = props;
  // todo
  return (
    <TextField
      {...input}
      {...other}
      error={Boolean(touched && (error || submitError))}
      helperText={touched ? error || submitError : ''}
    />
  );
};

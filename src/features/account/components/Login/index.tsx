import React, { FC } from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import { RFTextField } from 'lib/finalForm/RFTextField';
import { Button, InputAdornment } from '@material-ui/core';
import { FormFeedback } from 'lib/finalForm/FormFeedback';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Key from '@material-ui/icons/VpnKey';
import { FieldGroup } from 'features/common/components/FieldGroup';
import { AccountForm } from '../AccountForm';
import { useProps } from './useProps';

const Login: FC = () => {
  const {
    loading,
    login,
    error,
    username,
    password,
    validate,
    intl,
  } = useProps();
  return (
    <AccountForm>
      <Form
        onSubmit={props => {
          login({
            data: props,
          });
        }}
        validate={validate}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <FieldGroup>
                <FormSpy subscription={{ submitError: true }}>
                  {() => {
                    return (
                      <FormFeedback>{error && error.message}</FormFeedback>
                    );
                  }}
                </FormSpy>
              </FieldGroup>
              <FieldGroup>
                <Field
                  component={RFTextField}
                  disabled={loading}
                  fullWidth
                  placeholder={intl({ id: 'noun.username' })}
                  name={username}
                  required
                  size="small"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
              </FieldGroup>
              <FieldGroup>
                <Field
                  fullWidth
                  component={RFTextField}
                  disabled={loading}
                  required
                  name={password}
                  placeholder={intl({ id: 'noun.password' })}
                  type="password"
                  size="small"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Key />
                      </InputAdornment>
                    ),
                  }}
                />
              </FieldGroup>
              <FieldGroup>
                <Button
                  disabled={loading}
                  color="primary"
                  fullWidth
                  type="submit"
                  variant="contained"
                >
                  {intl({ id: 'noun.login' })}
                </Button>
              </FieldGroup>
            </form>
          );
        }}
      />
    </AccountForm>
  );
};

export default Login;

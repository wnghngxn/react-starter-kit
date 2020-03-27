import React, { FC } from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import { RFTextField } from 'lib/finalForm/RFTextField';
import Button from '@material-ui/core/Button';
import { FormFeedback } from 'lib/finalForm/FormFeedback';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Key from '@material-ui/icons/VpnKey';
import Code from '@material-ui/icons/Code';
import { FieldGroup } from 'features/common/components/FieldGroup';
import { AccountForm } from '../AccountForm';
import { useProps } from './useProps';

const Register: FC = () => {
  const {
    register,
    loading,
    error,
    validate,
    intl,
    username,
    password,
    registerCode,
  } = useProps();
  return (
    <AccountForm>
      <Form
        onSubmit={props => {
          register({
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
                  autoComplete={username}
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
                  size="small"
                  autoComplete={password}
                  placeholder={intl({ id: 'noun.password' })}
                  type="password"
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
                <Field
                  fullWidth
                  component={RFTextField}
                  disabled={loading}
                  required
                  name={registerCode}
                  placeholder={intl({ id: 'noun.register_code' })}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Code />
                      </InputAdornment>
                    ),
                    autoComplete: 'off',
                  }}
                />
              </FieldGroup>
              <FieldGroup>
                <Button
                  disabled={loading}
                  color="primary"
                  fullWidth
                  size="small"
                  type="submit"
                  variant="contained"
                >
                  {intl({ id: 'noun.register' })}
                </Button>
              </FieldGroup>
            </form>
          );
        }}
      />
    </AccountForm>
  );
};

export default Register;

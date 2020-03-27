import React, { FC } from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import { RFTextField } from 'lib/finalForm/RFTextField';
import t from 'tersus-jsx.macro';
import { FieldGroup } from 'features/common/components/FieldGroup';
import { FormFeedback } from 'lib/finalForm/FormFeedback';
import { store } from 'app/store';
import styled from 'styled-components';
import { parse } from 'date-fns';
import { useProps } from './useProps';
import { User } from '../../../../../resources/user';

const StyledDialogContent = styled(DialogContent)`
  min-width: 456px;
`;

export const ExpireForm: FC<{
  record: User;
}> = ({ record }) => {
  const {
    name,
    validate,
    intl,
    updateUserExpire,
    loading,
    error,
    registerCode,
  } = useProps();
  return t(
    <>
      <Form
        onSubmit={props => {
          updateUserExpire({
            data: {
              expiration_ts:
                parse(
                  props.expiration_ts,
                  "yyyy-MM-dd'T'HH:mm",
                  new Date(),
                ).getTime() / 1000,
              username: /^(.*:)/.exec(record.id)![0].slice(1, -1),
            },
          });
        }}
        validate={validate}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <StyledDialogContent dividers>
                <FieldGroup>
                  <Field
                    component={RFTextField}
                    disabled={loading}
                    required
                    fullWidth
                    name={name}
                    size="small"
                    placeholder={intl({ id: 'noun.expire' })}
                    margin="normal"
                    InputProps={{
                      autoComplete: 'off',
                    }}
                    type="datetime-local"
                  />
                </FieldGroup>
                <FieldGroup>
                  <FormSpy subscription={{ submitError: true }}>
                    {() => {
                      return (
                        <FormFeedback>{error && error.message}</FormFeedback>
                      );
                    }}
                  </FormSpy>
                </FieldGroup>
              </StyledDialogContent>
              <DialogActions>
                <Button onClick={handleSubmit}>
                  {intl({ id: 'noun.confirm' })}
                </Button>
                <Button
                  onClick={() => {
                    store.dispatch.feedback.closeDialog();
                  }}
                >
                  {intl({ id: 'noun.cancel' })}
                </Button>
              </DialogActions>
            </form>
          );
        }}
      />
      <StyledDialogContent tj-if={registerCode} dividers>
        <Box
          display="flex"
          height="157px"
          justifyContent="center"
          alignItems="center"
        >
          {registerCode}
        </Box>
      </StyledDialogContent>
    </>,
  );
};

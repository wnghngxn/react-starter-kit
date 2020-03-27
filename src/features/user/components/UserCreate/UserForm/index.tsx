/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
import React, { FC, useRef } from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { RFTextField } from 'lib/finalForm/RFTextField';
import { FieldGroup } from 'features/common/components/FieldGroup';
import { FormFeedback } from 'lib/finalForm/FormFeedback';
import { store } from 'app/store';
import styled from 'styled-components';
import { useProps } from './useProps';
// todo
const StyledDialogContent = styled(DialogContent)`
  min-width: 600px;
`;

export const UserForm: FC = () => {
  const { create, loading, error, validate, intl, fieldName } = useProps();
  const dropdown = useRef(null);

  return (
    <div ref={dropdown}>
      <Form
        onSubmit={({ id }) => {
          create({
            data: {
              id,
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
                    name={fieldName.title}
                    size="small"
                    placeholder={fieldName.title}
                    margin="normal"
                    InputProps={{
                      autoComplete: 'off',
                    }}
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
    </div>
  );
};

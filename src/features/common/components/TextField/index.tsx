import React, { FC } from 'react';
import MuiTextField, { TextFieldProps } from '@material-ui/core/TextField';
import capitalize from '@material-ui/core/utils/capitalize';
import { useStyles } from './index.styled';

export const TextField: FC<TextFieldProps> = ({
  InputProps: {
    classes: { ...InputPropsClassesOther } = {},
    ...InputPropsOther
  } = {},
  InputLabelProps,
  size = 'medium',
  SelectProps,
}) => {
  const classes = useStyles();
  const inputClassName = `inputSize${capitalize(size)}` as 'inputSizeMedium';

  return (
    <MuiTextField
      InputProps={{
        classes: {
          input: classes[inputClassName],
          disabled: classes.disabled,
          ...InputPropsClassesOther,
        },
        ...InputPropsOther,
      }}
      InputLabelProps={{
        ...InputLabelProps,
        shrink: true,
        className: classes.formLabel,
      }}
      SelectProps={{
        ...SelectProps,
        classes: {
          select: classes.select,
          icon: classes.selectIcon,
        },
      }}
    />
  );
};

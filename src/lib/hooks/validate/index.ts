import { useIntl } from 'lib/hooks/i18n';
import { useAutoMemo, useAutoCallback } from 'hooks.macro';
import { reduce, isArray, isFunction, map } from 'lodash';
import { Validator } from 'helper/validator/type';

const requiredValidator = 'validator.required';
const VALIDATOR = 'validator';

const isDirty = (value: string | number) => {
  const magicNumber = 0;
  return value || value === magicNumber;
};

export const requiredCreater = (errorMessage: string) => (
  requiredFields: string[],
  values: Record<string, string | number>,
) => {
  return requiredFields.reduce(
    (
      fields: {
        [x: string]: string;
      },
      field: string,
    ) => {
      return {
        ...fields,
        ...(isDirty(values[field]) ? undefined : { [field]: errorMessage }),
      };
    },
    {},
  );
};

const useRequired = () => {
  const intl = useIntl();
  const required = useAutoMemo(
    requiredCreater(intl({ id: requiredValidator })),
  );
  return required;
};

export const useFormValidate = <T extends string>(
  requiredFields: string[],
  validators: Record<T, Validator>,
) => {
  const required = useRequired();
  const intl = useIntl();
  const validate = useAutoCallback(values => {
    const rest: {
      [x: string]: string;
    } = { ...required(requiredFields, values) };
    const errors = reduce(
      validators,
      (errors, validator, field) => {
        if (!errors[field]) {
          const fieldError = validator(
            intl({ id: `${VALIDATOR}.${validator.errorMessage}` }),
          )(values[field]);
          if (fieldError) {
            return {
              ...errors,
              [field]: fieldError,
            };
          }
        }
        return errors;
      },
      rest,
    );
    return errors;
  });
  return validate;
};

export const useFieldValidate = (
  validator: Validator | Validator[] | Record<string, Validator>,
) => {
  const intl = useIntl();
  const validators = useAutoMemo(() => {
    if (isArray(validator)) {
      return validator.map(x =>
        x(intl({ id: `${VALIDATOR}.${x.errorMessage}` })),
      );
    }
    if (isFunction(validator)) {
      return validator(intl({ id: `${VALIDATOR}.${validator.errorMessage}` }));
    }
    return map(validator, (x: Validator, k) => {
      return x(intl({ id: `${VALIDATOR}.${k}` }));
    });
  });
  return validators;
};

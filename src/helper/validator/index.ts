import { toString, toNumber, isNaN } from 'lodash';
import { isEmail, isPhone } from '../assert';
import { Validator, FieldType } from './type';

const password: Validator = (errMessage: string) => (value: FieldType) => {
  const fieldValue = toString(value);
  return /^[^\n\r]{8,30}$/.test(fieldValue) ? null : errMessage;
};

password.errorMessage = 'password';

const required: Validator = (errMessage: string) => (value: FieldType) => {
  const fieldValue = toString(value);
  return fieldValue ? null : errMessage;
};
required.errorMessage = 'required';

const email: Validator = (errMessage: string) => (value: FieldType) => {
  const fieldValue = toString(value);
  return isEmail(fieldValue.trim()) ? null : errMessage;
};
email.errorMessage = 'email';

const number: Validator = (errMessage: string) => (value: FieldType) => {
  return value && isNaN(toNumber(value)) ? errMessage : null;
};
number.errorMessage = 'number';

const phone: Validator = (errMessage: string) => (value: FieldType) => {
  const fieldValue = toString(value);
  return isPhone(fieldValue, 'zh-CN') ? null : errMessage;
};
phone.errorMessage = 'phone';

export { password, required, email, number };

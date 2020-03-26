import isEmail from 'validator/lib/isEmail';
import isPhone from 'validator/lib/isMobilePhone';

export { isEmail, isPhone };

export const isStrictPassword = (value: string) => {
  return !!value && /^[a-zA-Z0-9]{8,16}$/.test(value);
};

export const isWeakUsername = (value: string) => {
  return !!value;
};

export const isWeakPassword = (value: string) => {
  return !!value;
};

export const isPhoneCreator = (language: 'zh-CN' | 'zh-TW') => (
  value: string,
) => {
  return !!value && isPhone(value, language);
};

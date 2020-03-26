export interface Validator {
  errorMessage: string;
  (errorMessage: string): (value: string | number) => string | null;
}

export type FieldType = string | number | undefined;

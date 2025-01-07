export type FormType = {
  _id: string;
  title: string;
  fields: FormField[];
}

export type FormField = {
  _key: string;
  inputType: 'text' | 'email' | 'tel' | 'textarea';
  name: string;
  label: string;
  placeholder: string;
  isRequired: boolean;
};
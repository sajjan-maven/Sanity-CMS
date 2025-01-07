"use client"
import { z } from 'zod';
import { formatFieldId } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormRegister } from 'react-hook-form';
import { FormBlockType, FormField } from '@/types/page-builder/blocks/form';

export default function Form({ formFields }: { formFields: FormBlockType['formFields'] }) {
  
  const formSchema = z.object(
    formFields.reduce((acc, field) => {
      let validator = z.string();
      if (field.isRequired) validator = validator.min(1, `${field.name} is required`);
      if (field.inputType === 'email') validator = validator.email('Invalid email address');
      return { ...acc, [field.name]: validator };
    }, {})
  );

  type FormValues = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return(
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="mt-10 w-full max-w-xl p-8 space-y-6 border backdrop-blur-sm rounded-3xl"
    >
      {formFields.map((field) => (
        <div key={field.name} className="space-y-2">
          <label htmlFor={formatFieldId(field.name)} className="text-sm font-medium">
            {field.name} {field.isRequired && <span className="text-red-500">*</span>}
          </label>
          <FieldRenderer field={field} register={register} />
          {errors[field.name as keyof typeof errors] && (
            <p className="text-sm text-red-500">
              {errors[field.name as keyof typeof errors]?.message as string}
            </p>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="w-full px-6 py-3 text-white bg-blue-700 rounded-full hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  )
}

function FieldRenderer({ field, register }: { 
  field: FormField;
  register: UseFormRegister<Record<string, string>>;
}) {
  switch (field.inputType) {
    case 'text':
    case 'email':
    case 'tel':
      return (
        <input
          id={formatFieldId(field.name)}
          {...register(field.name)}
          type={field.inputType}
          placeholder={field.placeholder}
          className="w-full px-4 py-2 border rounded-md"
        />
      );
    case 'textarea':
      return (
        <textarea
          id={formatFieldId(field.name)}
          {...register(field.name)}
          placeholder={field.placeholder}
          rows={4}
          className="w-full px-4 py-2 border rounded-lg"
        />
      );
    default:
      return null;
  }
}
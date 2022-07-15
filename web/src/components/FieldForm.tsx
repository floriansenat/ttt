import React from "react";
import { createContext } from "@/utils/createContext";
import { Input } from "./Input";

interface FormFieldContext {
  id: string;
}

const [useFormField, FormFieldProvider] =
  createContext<FormFieldContext>("FormField");

type FieldFormRootProps = React.PropsWithChildren & FormFieldContext;

function FieldFormRoot({ children, id }: FieldFormRootProps) {
  return (
    <FormFieldProvider value={{ id }}>
      <div>{children}</div>
    </FormFieldProvider>
  );
}

function FieldFormLabel({ children }: React.PropsWithChildren) {
  const { id } = useFormField();

  return <label htmlFor={id}>{children}</label>;
}

function FieldFormInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { id } = useFormField();

  return <Input {...props} id={id} />;
}

export const FieldForm = {
  Root: FieldFormRoot,
  Label: FieldFormLabel,
  Input: FieldFormInput,
};

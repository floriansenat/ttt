import React from "react";
import { createContext } from "@/utils/create-context";
import { Input } from "./Input";
import { Flex } from "./Box";

interface FormFieldContext {
  id: string;
}

const [useFormField, FormFieldProvider] =
  createContext<FormFieldContext>("FormField");

type FieldFormRootProps = React.PropsWithChildren & FormFieldContext;

function FieldFormRoot({ children, id }: FieldFormRootProps) {
  return (
    <FormFieldProvider value={{ id }}>
      <Flex as="p" css={{ flexDirection: "column", gap: "$1" }}>
        {children}
      </Flex>
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

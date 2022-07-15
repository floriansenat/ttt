import React from "react";
import { Helmet } from "react-helmet-async";

import { Button } from "@/components/Button";
import { ButtonLink } from "@/components/ButtonLink";
import { FieldForm } from "@/components/FieldForm";
import { Flex } from "@/components/Box";

import { useRegister } from "../api";

const meta = {
  title: "Register",
};

// TODO: Form validation
export function Register() {
  const { mutate: register } = useRegister();

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    const data = new FormData(evt.target as HTMLFormElement);

    register(data);
  };

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
      </Helmet>

      <main>
        <h1>{meta.title}</h1>

        <form onSubmit={handleSubmit}>
          <Flex css={{ flexDirection: "column", gap: "$4", marginTop: "$6" }}>
            <FieldForm.Root id="username">
              <FieldForm.Label>Username</FieldForm.Label>
              <FieldForm.Input name="username" type="text" />
            </FieldForm.Root>

            <FieldForm.Root id="password">
              <FieldForm.Label>Password</FieldForm.Label>
              <FieldForm.Input name="password" type="password" />
            </FieldForm.Root>
          </Flex>

          <Flex css={{ gap: "$4", marginTop: "$9" }}>
            <ButtonLink type="secondary" to="/">
              Cancel
            </ButtonLink>
            <Button>Create account</Button>
          </Flex>
        </form>
      </main>
    </>
  );
}

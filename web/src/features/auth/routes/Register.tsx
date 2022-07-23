import React from "react";
import { Helmet } from "react-helmet-async";
import { match } from "ts-pattern";

import { Button } from "@/components/Button";
import { ButtonLink } from "@/components/ButtonLink";
import { FieldForm } from "@/components/FieldForm";
import { Flex } from "@/components/Box";

import { useRegister } from "../api";

const meta = {
  title: "Register",
};

export function Register() {
  const { mutate: register, status } = useRegister();

  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    const data = new FormData(evt.target as HTMLFormElement);
    register(data);
  }

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
              <FieldForm.Input name="username" type="text" required />
            </FieldForm.Root>

            <FieldForm.Root id="password">
              <FieldForm.Label>Password</FieldForm.Label>
              <FieldForm.Input name="password" type="password" required />
            </FieldForm.Root>
          </Flex>

          <Flex css={{ gap: "$4", marginTop: "$9" }}>
            <ButtonLink type="secondary" to="/">
              Cancel
            </ButtonLink>
            <Button>
              {match(status)
                .with("loading", () => "Creating...")
                .otherwise(() => "Create account")}
            </Button>
          </Flex>
        </form>
      </main>
    </>
  );
}

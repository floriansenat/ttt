import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import { Flex } from "@/components/Box";
import { FieldForm } from "@/components/FieldForm";
import { Button } from "@/components/Button";

import { useAuth } from "../providers";

const meta = {
  title: "Login",
};

export function Login() {
  const { login } = useAuth();

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    const data = new FormData(evt.target as HTMLFormElement);
    login(data);
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
            <Button>Login</Button>
          </Flex>
        </form>

        <Flex
          as="section"
          css={{ marginTop: "$8", gap: "$6", flexDirection: "column" }}
        >
          <h2>Don't have an account?</h2>
          <Link to="register">Register</Link>
        </Flex>
      </main>
    </>
  );
}

import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";
import { ButtonLink } from "@/components/ButtonLink";

const meta = {
  title: "Login",
};

export function Login() {
  const { data } = useQuery(["hello_world"], async () => {
    const request = new Request("http://127.0.0.1:3333/");
    const res = await fetch(request);
    const parsedRes = await res.text();

    return parsedRes;
  });

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
      </Helmet>

      <main>
        <h1>{meta.title}</h1>
        <section>
          <div>{data}</div>
          <br />
          <ButtonLink to="register">Register</ButtonLink>
        </section>
      </main>
    </>
  );
}

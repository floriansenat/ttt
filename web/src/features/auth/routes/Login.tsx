import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

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
        <h2>{meta.title}</h2>
        <section>
          <div>{data}</div>
          <br />
          <Link to="register">Create account</Link>
        </section>
      </main>
    </>
  );
}

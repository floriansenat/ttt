import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";

export function App() {
  const { data } = useQuery(["hello_world"], async () => {
    const request = new Request("http://127.0.0.1:3333/");
    const res = await fetch(request);
    const parsedRes = await res.text();

    return parsedRes;
  });

  return (
    <div>
      <Helmet>
        <title>Coucou</title>
      </Helmet>
      <main>{data}</main>
    </div>
  );
}

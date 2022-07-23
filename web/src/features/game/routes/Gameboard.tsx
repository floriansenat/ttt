import { Helmet } from "react-helmet-async";
import { match } from "ts-pattern";

import { Button } from "@/components/Button";
import { useLogout } from "@/features/auth";

const meta = {
  title: "Gameboard",
};

export function Gameboard() {
  const { mutate: logout, status } = useLogout();

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
      </Helmet>

      <main>
        <h1>{meta.title}</h1>
        <Button type="destructive" onClick={() => logout()}>
          {match(status)
            .with("loading", () => "Logging out...")
            .otherwise(() => "Log out")}
        </Button>
      </main>
    </>
  );
}

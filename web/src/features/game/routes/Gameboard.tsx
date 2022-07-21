import { Button } from "@/components/Button";
import { useLogout } from "@/features/auth";
import { Helmet } from "react-helmet-async";

export function Gameboard() {
  const { mutate: logout } = useLogout();

  return (
    <>
      <Helmet>
        <title>Gameboard</title>
      </Helmet>

      <main>
        <h1>Gameboard</h1>
        <Button type="destructive" onClick={() => logout()}>
          Logout
        </Button>
      </main>
    </>
  );
}

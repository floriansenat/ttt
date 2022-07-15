import { Link, LinkProps } from "react-router-dom";
import { Button } from "./Button";

type ButtonLinkType = "secondary";

type ButtonLinkProps = React.PropsWithChildren &
  LinkProps & {
    type?: ButtonLinkType;
  };

export function ButtonLink({ children, type, ...linkProps }: ButtonLinkProps) {
  return (
    <Button as={Link} {...linkProps} type={type}>
      {children}
    </Button>
  );
}

import { Link as RRLink } from "react-router-dom";

import { styled } from "@/libs/stitches";

export const Link = styled(RRLink, {
  $$shadowColor: "$colors$primaryMedium",
  color: "$primaryMedium",
  textDecoration: "none",
  boxShadow: "inset 0 -1px 0 $$shadowColor",
  transition: "all 0.3s ease-out",

  "&:hover": {
    boxShadow: "inset 0 -30px 0 $$shadowColor",
    color: "$blackMedium",
  },
});

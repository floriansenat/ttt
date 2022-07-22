import { styled } from "@/libs/stitches";

export const Button = styled("button", {
  $$shadowColor: "$colors$primaryDark",
  $$textColor: "$colors$blackDark",
  $$bgColor: "$colors$primaryMedium",

  padding: "0.8em 1.5em",
  fontWeight: 600,
  fontStyle: "italic",
  fontSize: "14px",
  textTransform: "uppercase",
  textDecoration: "none",
  borderRadius: "$md",
  display: "inline-block",
  border: 0,
  cursor: "pointer",
  transition: "all 0.14s ease-in",
  backgroundColor: "$$bgColor",
  color: "$$textColor",
  boxShadow: "$buttonIdle $$shadowColor",

  "&:active": {
    boxShadow: "none",
    transform: "translateY(3px)",
  },

  variants: {
    type: {
      secondary: {
        $$shadowColor: "$colors$blackDark",
        $$textColor: "$colors$white",
        $$bgColor: "$colors$blackLight",
      },
      destructive: {
        $$shadowColor: "$colors$redDark",
        $$textColor: "$colors$white",
        $$bgColor: "$colors$red",
      },
    },
  },
});

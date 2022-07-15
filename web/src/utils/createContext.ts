import React from "react";

type CreateContextTuple<C> = readonly [() => C, React.Provider<C | null>];

export function createContext<C extends unknown | null>(
  name: string
): CreateContextTuple<C> {
  const ctx = React.createContext<C | null>(null);

  const useCtx = () => {
    const c = React.useContext(ctx);

    if (c === null) {
      throw new Error(
        `use${name} must be inside a ${name}Provider with a value`
      );
    }

    return c;
  };

  return [useCtx, ctx.Provider];
}

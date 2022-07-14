import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useRegister } from "../api";

const meta = {
  title: "Register",
};

export function Register() {
  const { mutate: register } = useRegister();

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    const data = new FormData(evt.target as HTMLFormElement);

    register(data);
  };

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
      </Helmet>

      <main>
        <h2>{meta.title}</h2>

        <nav>
          <ul>
            <li>
              <Link to="/">Connexion</Link>
            </li>
          </ul>
        </nav>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input name="username" id="username" type="text" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input name="password" id="password" type="password" />
          </div>

          <div>
            <Link to="/">Cancel</Link>
            <button>Create account</button>
          </div>
        </form>
      </main>
    </>
  );
}

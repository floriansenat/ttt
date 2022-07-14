import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return "Coucou est bienvenue dans le futur";
});

Route.resource("users", "UsersController").only(["index", "store"]);

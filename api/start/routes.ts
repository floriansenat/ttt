import Route from "@ioc:Adonis/Core/Route";

Route.post("login", "AuthController.login");
Route.post("logout", "AuthController.logout");

// TODO: register should be public
// But the rest of users ressources must be protected
Route.resource("users", "UsersController").only(["index", "store"]);

Route.group(() => {
  Route.get("me", "UsersController.me");
}).middleware("auth");

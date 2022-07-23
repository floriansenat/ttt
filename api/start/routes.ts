import Route from "@ioc:Adonis/Core/Route";

// Auth
Route.post("login", "AuthController.login");
Route.post("logout", "AuthController.logout");
Route.get("me", "AuthController.me").middleware("auth");

// Users
Route.resource("users", "UsersController").only(["store"]);

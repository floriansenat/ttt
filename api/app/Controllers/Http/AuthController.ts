import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class AuthController {
  public async login({ request, auth, response }: HttpContextContract) {
    const username = request.input("username");
    const password = request.input("password");

    try {
      await auth.use("web").attempt(username, password);
    } catch {
      return response.badRequest("Invalid credentials");
    }
  }

  public async logout() {
    return { should: "logout" };
  }
}

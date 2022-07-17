import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class AuthController {
  public async login({ request, auth, response }: HttpContextContract) {
    const username = request.input("username");
    const password = request.input("password");

    try {
      const token = await auth.use("api").attempt(username, password);
      return token;
    } catch {
      return response.unauthorized("Invalid credentials");
    }
  }

  public async logout() {
    return { should: "logout" };
  }

  public async me({ auth }: HttpContextContract) {
    await auth.use("api").authenticate();

    return auth.use("api").user!;
  }
}

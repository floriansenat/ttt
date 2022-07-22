import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class AuthController {
  public async login({ request, auth, response }: HttpContextContract) {
    const username = request.input("username");
    const password = request.input("password");

    try {
      return await auth.use("api").attempt(username, password);
    } catch {
      return response.unauthorized("Invalid credentials");
    }
  }

  public async logout({ auth }: HttpContextContract) {
    await auth.use("api").revoke();
  }

  public async me({ auth }: HttpContextContract) {
    await auth.use("api").authenticate();
    return auth.use("api").user!;
  }
}

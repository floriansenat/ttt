import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "../../Models/User";

export default class UsersController {
  public async store({ request, response }: HttpContextContract) {
    const username = request.input("username");
    const password = request.input("password");
    const user = await User.findBy("username", username);

    if (user) {
      return response.conflict("User already exists");
    }

    try {
      await User.create({
        username,
        password,
      });

      return response.created();
    } catch {
      return response.badRequest();
    }
  }
}

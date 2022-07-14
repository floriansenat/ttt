import { v4 } from "uuid";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "../../Models/User";
import Hash from "@ioc:Adonis/Core/Hash";

export default class UsersController {
  public async index() {
    const users = await User.all();
    return users;
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const username = request.input("username");
      const password = request.input("password");
      const hashedPassword = await Hash.make(password);

      await User.create({
        id: v4(),
        username,
        password: hashedPassword,
      });

      return response.status(201);
    } catch {
      return response.badRequest("Invalid username or password");
    }
  }
}

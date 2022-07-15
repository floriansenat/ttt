import { v4 } from "uuid";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Hash from "@ioc:Adonis/Core/Hash";
import User from "../../Models/User";

export default class UsersController {
  public async index() {
    const users = await User.all();
    return users;
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const username = request.input("username");
      const password = request.input("password");

      await User.create({
        id: v4(),
        username,
        password: await Hash.make(password),
      });

      return response.status(201);
    } catch {
      return response.badRequest("Invalid username or password");
    }
  }

  public async me() {
    return { should: "me" };
  }
}

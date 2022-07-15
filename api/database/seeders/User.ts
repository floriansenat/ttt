import { v4 } from "uuid";
import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import User from "App/Models/User";
import Hash from "@ioc:Adonis/Core/Hash";

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        id: v4(),
        username: "john_doe",
        password: await Hash.make("secret"),
      },
      {
        id: v4(),
        username: "4llu",
        password: await Hash.make("secret"),
      },
    ]);
  }
}

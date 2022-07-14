import { v4 } from "uuid";
import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import User from "App/Models/User";

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        id: v4(),
        username: "john_doe",
        password: "secret",
      },
      {
        id: v4(),
        username: "4llu: ",
        password: "jesuis1connard",
      },
    ]);
  }
}

import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import User from "../../app/Models/User";

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        username: "4llu",
        password: "secret",
      },
      {
        username: "john_doe",
        password: "secret",
      },
    ]);
  }
}

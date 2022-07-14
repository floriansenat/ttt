import Env from "@ioc:Adonis/Core/Env";

export default Env.rules({
  REDIS_CONNECTION: Env.schema.enum(["local"] as const),
  REDIS_HOST: Env.schema.string({ format: "host" }),
  REDIS_PORT: Env.schema.number(),
  REDIS_PASSWORD: Env.schema.string.optional(),
  SESSION_DRIVER: Env.schema.string(),
  DB_CONNECTION: Env.schema.string(),
  HOST: Env.schema.string({ format: "host" }),
  PORT: Env.schema.number(),
  APP_KEY: Env.schema.string(),
  APP_NAME: Env.schema.string(),
  DRIVE_DISK: Env.schema.enum(["local"] as const),
  NODE_ENV: Env.schema.enum(["development", "production", "test"] as const),
});

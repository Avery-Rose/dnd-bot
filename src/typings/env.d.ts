namespace NodeJS {
  interface ProcessEnv {
    readonly DISCORD_TOKEN: string;
    readonly GUILD_ID: string;
    readonly CLIENT_ID: string;
    readonly MONGO_USER: string;
    readonly MONGO_PASSWORD: string;
    readonly MONGO_HOST: string;
    readonly MONGO_DB: string;
    readonly MONGO_URI: string;
  }
}

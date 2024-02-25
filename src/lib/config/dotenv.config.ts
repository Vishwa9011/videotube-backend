export const envConfig = () => {
  const env = getEnv(process.env.NODE_ENV || "");
  console.log(`Loading environment configuration from: ${env}`);
  return { path: env };
};

export const getEnv = (NODE_ENV: string) => {
  switch (NODE_ENV) {
    case "production":
      return ".env.production";
    case "test":
      return ".env.test";
    case "development":
      return ".env.development";
    default:
      return ".env";
  }
};

export const environment = process.env.NODE_ENV;

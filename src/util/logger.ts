import dotenv from "dotenv";
dotenv.config();

import chalk from "chalk";

process.env["NODE_ENV"];
const isProd = process.env["NODE_ENV"] === "production";

const logger = {
  info: (...args: unknown[]) => {
    console.info(chalk.blue(`[INFO]`), ...args);
  },
  warn: (...args: unknown[]) => {
    console.warn(chalk.yellow(`[WARN]`), ...args);
  },
  error: (...args: unknown[]) => {
    console.error(chalk.red(`[ERROR]`), ...args);
  },
  debug: (...args: unknown[]) => {
    if (process.env["DEBUG"].toLowerCase() !== "true") return;
    console.debug(chalk.magenta(`[DEBUG]`), ...args);
  },
  divide: () => {
    console.log(chalk.gray(`----------------------------------------------------`));
  },
  log: (...args: unknown[]) => {
    console.log(...args);
  },
  table: (...args: unknown[]) => {
    console.table(...args);
  },
};

export default logger;

import dotenv from "dotenv";

import chalk from "chalk";

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

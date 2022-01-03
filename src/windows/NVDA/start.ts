import { exec } from "child_process";
import { ERR_NVDA_CANNOT_BE_STARTED } from "../errors";

export async function start(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    exec("nvda", (e) => {
      if (e) {
        reject(new Error(`${ERR_NVDA_CANNOT_BE_STARTED}\n${e.message}`));
      } else {
        resolve();
      }
    });
  });
}

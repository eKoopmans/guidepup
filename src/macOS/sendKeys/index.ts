import type { KeyCodeCommand } from "../KeyCodeCommand";
import type { KeystrokeCommand } from "../KeystrokeCommand";
import { activate } from "../activate";
import { Applications } from "../Applications";
import { keyCode } from "../keyCode";
import { keystroke } from "./keystroke";
import { isKeyCode } from "../../isKeyCode";
import { ERR_PREFIX_SEND_KEYS } from "../errors";

export async function sendKeys(
  applicationName: Applications | string,
  keyCommand: KeyCodeCommand | KeystrokeCommand
): Promise<void> {
  await activate(applicationName);

  try {
    return isKeyCode(keyCommand)
      ? await keyCode(keyCommand)
      : await keystroke(keyCommand);
  } catch (e) {
    throw new Error(`${ERR_PREFIX_SEND_KEYS}${applicationName}\n${e.message}`);
  }
}

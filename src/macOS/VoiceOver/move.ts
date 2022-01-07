import type { Directions } from "./Directions";
import type { Containments } from "./Containments";
import type { Places } from "./Places";
import type { CommandOptions } from "../../CommandOptions";
import { retryIfAppleEventTimeout } from "../retryIfAppleEventTimeout";
import { runAppleScript } from "../runAppleScript";
import { Applications } from "../Applications";
import { ERR_VOICE_OVER_MOVE } from "../errors";

export async function move(
  direction: Directions | Containments,
  place?: Places,
  options?: CommandOptions
): Promise<void> {
  const script = `tell application "${
    Applications.VOICE_OVER
  }"\ntell vo cursor to move ${direction}${
    place ? ` to ${place}` : ""
  }\nend tell`;

  try {
    return await retryIfAppleEventTimeout(
      () => runAppleScript(script, options),
      options
    );
  } catch (e) {
    throw new Error(`${ERR_VOICE_OVER_MOVE}\n${e.message}`);
  }
}

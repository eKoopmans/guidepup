import type { Options } from "../types";
import { runAppleScript } from "../runAppleScript";
import { Applications } from "../Applications";
import { retry } from "../../retry";
import { ERR_VOICE_OVER_COPY_LAST_SPOKEN_PHRASE } from "../errors";

export async function copyLastSpokenPhrase(options?: Options): Promise<void> {
  const script = `tell application "${Applications.VOICE_OVER}"\ntell last phrase to copy to pasteboard\nend tell`;

  try {
    return await retry(() => runAppleScript(script, options));
  } catch (e) {
    throw new Error(`${ERR_VOICE_OVER_COPY_LAST_SPOKEN_PHRASE}\n${e.message}`);
  }
}

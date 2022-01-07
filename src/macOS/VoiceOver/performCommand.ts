import type { CommanderCommands } from "./CommanderCommands";
import type { CommandOptions } from "../../CommandOptions";
import { retryIfAppleEventTimeout } from "../retryIfAppleEventTimeout";
import { runAppleScript } from "../runAppleScript";
import { Applications } from "../Applications";
import { ERR_VOICE_OVER_PERFORM_COMMAND } from "../errors";

export async function performCommand(
  command: CommanderCommands,
  options?: CommandOptions
): Promise<void> {
  const script = `tell application "${
    Applications.VOICE_OVER
  }"\ntell commander to perform command "${command.toLowerCase()}"\nend tell`;

  try {
    return await retryIfAppleEventTimeout(
      () => runAppleScript(script, options),
      options
    );
  } catch (e) {
    throw new Error(`${ERR_VOICE_OVER_PERFORM_COMMAND}\n${e.message}`);
  }
}

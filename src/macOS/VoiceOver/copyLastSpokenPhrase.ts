import { run } from "@jxa/run";
import { Applications } from "../Applications";
import "@jxa/global-type";
import type { VoiceOver } from "@jxa/types";

export async function copyLastSpokenPhrase(): Promise<void> {
  return await run<void, Applications.VOICE_OVER>((name) => {
    const app = Application<VoiceOver.VoiceOver>(name);
    const lastPhrase =
      app.lastPhrase as unknown as VoiceOver.VoiceOver.LastPhraseObject;

    return app.copyToPasteboard(lastPhrase);
  }, Applications.VOICE_OVER);
}

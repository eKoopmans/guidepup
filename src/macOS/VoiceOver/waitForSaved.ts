import { waitForCondition } from "./waitForCondition";
import { isSaved } from "./isSaved";
import { ERR_VOICE_OVER_SAVED_TIMEOUT } from "../errors";

const ONE_SECOND = 1000;
const TWENTY_SECONDS = 20000;

export async function waitForSaved(): Promise<void> {
  return await waitForCondition(isSaved, {
    timeoutErrorMessage: ERR_VOICE_OVER_SAVED_TIMEOUT,
    pollInterval: ONE_SECOND,
    pollTimeout: TWENTY_SECONDS,
  });
}

import * as v4 from "uuid/v4";

export function generateMyId(): string {
  return v4().replace(/-/g, "");
}

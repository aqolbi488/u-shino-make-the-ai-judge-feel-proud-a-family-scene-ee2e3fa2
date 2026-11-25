// Make the AI Judge Feel Proud: A Family Scene
// Writes one short family scene to /output/entry.txt.
// Deterministic: no network, no randomness, no secrets.

import { mkdirSync, writeFileSync } from "node:fs";

const scene =
  "Every Sunday Dad 'loses' at arm-wrestling to my six-year-old, then asks her to open the jam jar — 'only the strong one can.' She twists it open; he applauds like it's the Olympics.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", scene, "utf8");

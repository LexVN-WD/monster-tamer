import Phaser from "../lib/phaser.js";
import { SCENE_KEYS } from "../scenes/scene-keys.js";

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super ({
      key: SCENE_KEYS.PRELOAD_SCENE,
    });
    console.log(SCENE_KEYS.PRELOAD_SCENE);
  }
}
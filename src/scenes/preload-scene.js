import Phaser from "../lib/phaser.js";

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super ({
      key: PreloadScene.name,
    });
    console.log(PreloadScene.name);
  }
}
import Phaser from "../lib/phaser.js";
import { SCENE_KEYS } from "../scenes/scene-keys.js";
import { BATTLE_BACKGROUND_ASSET_KEYS, BATTLE_ASSET_KEYS, HEALTH_BAR_ASSET_KEYS, MONSTER_ASSET_KEYS } from "../assets/asset-keys.js";

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super ({
      key: SCENE_KEYS.PRELOAD_SCENE,
    });
    console.log(SCENE_KEYS.PRELOAD_SCENE);
  }

  preload() {
    
    // asset path constants
    const monsterTrainerAP = 'assets/images/monster-tamer/';
    const kenneyAP = 'assets/images/kenneys-assets/';

    // battle backgrounds
    this.load.image(
      BATTLE_BACKGROUND_ASSET_KEYS.FOREST,
      `${monsterTrainerAP}/battle-backgrounds/forest-background.png`
    );

    // battle Assets
    this.load.image(
      BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND,
      `${kenneyAP}/ui-space-expansion/custom-ui.png`
    );

    // health bar assets
    this.load.image(
      HEALTH_BAR_ASSET_KEYS.RIGHT_CAP,
      `${kenneyAP}/ui-space-expansion/barHorizontal_green_right.png`
    );

    this.load.image(
      HEALTH_BAR_ASSET_KEYS.LEFT_CAP,
      `${kenneyAP}/ui-space-expansion/barHorizontal_green_left.png`
    );

    this.load.image(
      HEALTH_BAR_ASSET_KEYS.MIDDLE,
      `${kenneyAP}/ui-space-expansion/barHorizontal_green_mid.png`
    );

    // monster assets
    this.load.image(
      MONSTER_ASSET_KEYS.CARNODUSK,
      `${monsterTrainerAP}/monsters/carnodusk.png`
    );

    this.load.image(
      MONSTER_ASSET_KEYS.IGAUNAIGNITE,
      `${monsterTrainerAP}/monsters/iguanignite.png`
    );
  }

  create() {
    console.log('create');
    console.log(this.textures.get('background'));
    this.add.image(0, 0, BATTLE_BACKGROUND_ASSET_KEYS.FOREST).setOrigin(0);
  }

}
// Main starting point of game, everything needed to start the game is here

import Phaser from './lib/phaser.js';
import { PreloadScene } from './scenes/preload-scene.js';

const game = new Phaser.Game({
  parent: 'game-container',
});

game.scene.add(PreloadScene.name, PreloadScene);
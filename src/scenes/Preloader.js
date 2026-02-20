import Phaser from "phaser";

export default class Preloader extends Phaser.Scene {
  constructor() {
    super("Preloader");
  }

  preload() {
    this.load.setPath("assets");
    this.load.image("intro", "intro.png");
    this.load.image("sky", "sky.png");
    this.load.image("spaceship-forward", "spaceship-forward.png");
    this.load.image("spaceship-turning", "spaceship-turning.png");
    this.load.image("missile", "missile.png");
    this.load.spritesheet("explosion", "explosion.png", {
      frameHeight: 64,
      frameWidth: 585 / 9,
    });
    for (let i = 0; i < 3; i++) {
      this.load.image(`asteroid-${i + 1}`, `asteroid-${i + 1}.png`);
    }
    this.load.audio("shoot", "shoot.wav");
    this.load.audio("explosion", "explosion.wav");
  }

  create() {
    this.add
      .image(0, 0, "intro")
      .setOrigin(0)
      .setInteractive({ cursor: "pointer" })
      .on("pointerdown", () => this.scene.start("Game"));
  }

  update(time) {
    if (time > 3000) this.scene.start("Game");
  }
}

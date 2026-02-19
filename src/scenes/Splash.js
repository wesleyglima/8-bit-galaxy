import Phaser from "phaser";

export default class Splash extends Phaser.Scene {
  constructor() {
    super("Splash");
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

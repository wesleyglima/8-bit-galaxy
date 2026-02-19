import Preloader from "./scenes/Preloader";
import Splash from "./scenes/Splash";
import Game from "./scenes/Game";

const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 1024,
  parent: "game-container",
  backgroundColor: "#000000",
  physics: {
    default: "arcade",
  },
  pixelArt: true,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [Preloader, Splash, Game],
};

const StartGame = (parent) => {
  return new Phaser.Game({ ...config, parent });
};

export default StartGame;

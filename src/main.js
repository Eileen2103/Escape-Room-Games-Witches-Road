import './style.css'
import Phaser, { Physics, Scene } from 'phaser'


const mainMenuDiv = document.querySelector("#mainMenu");
const startButton = document.querySelector("#gameStartButton");
const gameCanvas = document.getElementById("gameCanvas");
const speedDown = 100;
const eyesOpenDuration = 2000;
const eyesClosedDuration = 500;




const sizes = {
  width: 1366,
  height: 768,
}

class GameScene extends Phaser.Scene {
  constructor() {
    super("scene-game");
    this.bg = null;
    this.boiler = null;
    this.brom = null;
    this.creature = null;
    this.crystallBall = null;
    this.table = null;
    this.potion_table = null;
    this.creature_eyesclosed = null;

  }
  preload() {
    this.load.image("bg", "assets/bg.png");
    this.load.image("boiler", "assets/boiler.png");
    this.load.image("broom", "assets/brom.png");
    this.load.image("creature", "assets/creature.png");
    this.load.image("crystallBall", "assets/crystalBall.png");
    this.load.image("table", "assets/table.png");
    this.load.image("potion_table", "assets/potion_table.png");
    this.load.image("creature_eyesclosed", "assets/creature_eyesclosed.png");



  }
  create() {
    /*this.scene.pause("scene-game");*/

    this.bg = this.add.image(0, 0, "bg").setOrigin(0, 0);

    this.boiler = this.add.sprite(this.scale.width - (this.scale.width / 5), 300, "boiler").setDepth(2)  // (x, y) konumu
      .setOrigin(0.5)
      .setScale(0.2); // %50 küçült
    this.boiler.setInteractive({ useHandCursor: true });
    this.boiler.on('pointerover', () => { });
    this.boiler.on('pointerout', () => { });
    this.boiler.on("pointerdown", () => {
      console.log("pressed");
    });

    this.broom = this.add.sprite(this.scale.width / 3, 430, "broom").setDepth(2)
      .setOrigin(0.5)
      .setScale(-0.3); // %30 küçült
    this.broom.flipY = true;
    this.broom.setInteractive({ useHandCursor: true });
    this.broom.on('pointerover', () => { });
    this.broom.on('pointerout', () => { });
    this.broom.on("pointerdown", () => {
      console.log("pressed");
    });


    this.crystallBall = this.add.sprite(this.scale.width / 5, 410, "crystallBall").setDepth(2)
      .setOrigin(0.5)
      .setScale(0.1); // %60 küçült
    this.crystallBall.setInteractive({ useHandCursor: true });
    this.crystallBall.on('pointerover', () => { });
    this.crystallBall.on('pointerout', () => { });
    this.crystallBall.on("pointerdown", () => {
      console.log("pressed");
    });


    this.table = this.add.sprite(this.scale.width / 6, 450, "table").setOrigin(0.5).setScale(0.4).setDepth(1);
    this.table.setInteractive({ useHandCursor: true });
    this.table.on('pointerover', () => { });
    this.table.on('pointerout', () => { });
    this.table.on("pointerdown", () => {
      console.log("pressed");
    });

    this.potion_table = this.add.sprite(this.scale.width - (this.scale.width / 6), 430, "potion_table").setOrigin(0.5).setScale(0.3).setDepth(1);
    this.potion_table.setInteractive({ useHandCursor: true });
    this.potion_table.on('pointerover', () => { });
    this.potion_table.on('pointerout', () => { });
    this.potion_table.on("pointerdown", () => {
      console.log("pressed");
    });


    this.creature = this.add.sprite(this.scale.width - (this.scale.width / 3), 430, "creature")
      .setDepth(1).setOrigin(0.5).setScale(0.3); // %40 küçült

    this.creature.setInteractive({ useHandCursor: true });
    this.creature.on('pointerover', () => { });
    this.creature.on('pointerout', () => { });
    this.creature.on("pointerdown", () => {
      console.log("pressed");
    });

    this.time.addEvent({
      delay: eyesOpenDuration,
      loop: true,
      callback: () => {

        // Gözleri kapat
        this.creature.setTexture("creature_eyesclosed");
        this.creature.setScale(0.3)

        // Belirli süre sonra gözleri tekrar aç
        this.time.delayedCall(eyesClosedDuration, () => {
          this.creature.setTexture("creature");
          this.creature.setScale(0.3);
        });
      }
    });


    this.bg.visible = false;
    this.boiler.visible = false;
    this.broom.visible = false;
    this.creature.visible = false;
    this.crystallBall.visible = false;
    this.table.visible = false;
    this.potion_table.visible = false;



  }
  update() {


  }


}

const config = {
  type: Phaser.WEBGL,
  width: sizes.width,
  height: sizes.height,
  canvas: gameCanvas,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: speedDown },
      debug: true
    }
  },
  scene: [GameScene]


}
const game = new Phaser.Game(config);


startButton.addEventListener("click", () => {
  mainMenuDiv.style.display = "none";
  const scene = game.scene.getScene("scene-game");
  if (scene) {

    scene.bg.setVisible(true);
    scene.boiler.setVisible(true);
    scene.broom.setVisible(true);
    scene.crystallBall.setVisible(true);
    scene.table.setVisible(true);
    scene.potion_table.setVisible(true);
    scene.creature.setVisible(true);

    scene.scene.resume();





  }


})
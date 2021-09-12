import { bouncingBird, flap, restartBirdPosition } from "./bird";

// Global Config Variables //
var config = {
    width: 350,
    height: 500,
    renderer: Phaser.AUTO,
    // antialias: true,
    // multiTexture: true,
    state: { preload, create, update },
};

// Global Variables //
const game = new Phaser.Game(config);

const initBirdPos = { x: 100, y: config.height / 4 };
const BIRD_VELOCITY = 200;
let sky = null;
let bird = null;

const upperPipeVerticalPositionRange = [-480, -80];
const pipeVerticalDistanceRange = [100, 250];
const pipesPosX = 400;
const upperPipePosY = Phaser.Math.between(...upperPipeVerticalPositionRange);
const freePass = Phaser.Math.between(...pipeVerticalDistanceRange);
let upperPipe = null;
let lowerPipe = null;

function preload() {
    game.load.image("sky", "assets/sky.png");
    game.load.image("bird", "assets/bird.png");
    game.load.image("pipe", "assets/pipe.png");
}

function create() {
    // Game Setting //
    game.physics.startSystem(Phaser.Physics.ARCADE);
    //
    //
    //
    //
    sky = game.add.image(0, 0, "sky");

    //
    //
    //
    bird = game.add.sprite(initBirdPos.x, initBirdPos.y, "bird");
    game.physics.arcade.enable(bird); // enable bird physics
    bird.body.gravity.y = BIRD_VELOCITY; // Bird fall forever
    // bird.body.collideWorldBounds = true; // Bird cannot exit the world

    const pipes = game.add.group();
    pipes.eableBody = true; // enable pipes physics
    pipes.scale.setTo(0.5, 1);
    upperPipe = pipes.create(pipesPosX, upperPipePosY, "pipe");

    const lowerPipePosY = upperPipe.y + upperPipe.height + freePass;
    lowerPipe = pipes.create(pipesPosX, lowerPipePosY, "pipe");

    //
    //
    //
    // Game Input Controls //
    const bindedFlap = () => flap(bird, BIRD_VELOCITY);
    game.input.onTap.add(bindedFlap, this);
    this.spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    this.enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    this.upArrow = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.downArrow = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
}

function update() {
    if (this.spacebar.downDuration(100)) flap(bird, BIRD_VELOCITY);
    if (this.enter.downDuration(100)) flap(bird, BIRD_VELOCITY);
    if (this.upArrow.downDuration(100)) flap(bird, BIRD_VELOCITY);
    if (bird.body.velocity.y < 150 && this.downArrow.downDuration(100)) {
        flap(bird, -BIRD_VELOCITY);
    }

    restartBirdPosition(bird, initBirdPos, config.height);

    // bouncingBird(game, bird, BIRD_VELOCITY);
    // game.debug.body(bird);
}

// const config = {
//     type: Phaser.AUTO,
//     width: 800,
//     height: 600,
//     physics: {
//         default: "arcade",
//         arcade: {
//             gravity: { y: 200 },
//         },
//     },
//     scene: {
//         preload: preload,
//         create: create,
//     },
// };

// const config = {}

var game = new Phaser.Game(800, 600, Phaser.AUTO, "", { preload, create });

function preload() {
    game.load.image("sky", "assets/sky.png");
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = 200;
    //
    //
    //
    //
    game.add.image(0, 0, "sky");
}

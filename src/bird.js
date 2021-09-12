export const bouncingBird = (game, bird, BIRD_VELOCITY) => {
    if (bird.x > game.width - bird.width) bird.body.velocity.x = -BIRD_VELOCITY;
    if (bird.x < 0) bird.body.velocity.x = BIRD_VELOCITY;
    // console.log("hello");
};

export const flap = (bird, BIRD_VELOCITY) => {
    bird.body.velocity.y = -BIRD_VELOCITY;
};

export const restartBirdPosition = (bird, initBirdPos, worldHeight) => {
    if (bird.y + bird.height < 0 || bird.y > worldHeight) {
        bird.x = initBirdPos.x;
        bird.y = initBirdPos.y;
        bird.body.velocity.y = 0;
    }
};

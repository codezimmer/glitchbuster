function WalkingEnemy(){
    Enemy.call(this);

    this.speed = WALKING_ENEMY_SPEED;

    this.direction = pick([-1, 1]);

    var superCycle = this.cycle;
    this.cycle = function(e){
        superCycle.call(this, e);

        if(!this.dead){
            var leftX = this.x - CHARACTER_WIDTH / 2,
                rightX = this.x + CHARACTER_WIDTH / 2,
                bottomY = this.y + CHARACTER_HEIGHT / 2,

                bottomLeft = W.tileAt(leftX, bottomY),
                bottomRight = W.tileAt(rightX, bottomY);

            if(this.lastAdjustment & LEFT || !bottomRight || bottomRight.type > CEILING_SPIKE_ID){
                this.direction = -1;
            }
            if(this.lastAdjustment & RIGHT || !bottomLeft || bottomLeft.type > CEILING_SPIKE_ID){
                this.direction = 1;
            }
        }
    };
}
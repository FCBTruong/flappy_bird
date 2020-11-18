/**
 * Created by nguye on 11/16/2020.
 */


var Bird = cc.Sprite.extend({
    speed: 1,
    sprite: null,
    gravity: 5,
    moveDown: true,
    isFlying: false,
    posYDestination: null,
    flyOffset: 30,
    flySpeed: 8,
    timeFall: 0,
    size: 8,

    ctor: function () {
        this._super();
        this.sprite = cc.Sprite.create(res.Bird_png,0);

        this.scheduleUpdate();
        this.addChild(this.sprite, 1);

        //create an animation object
        var ani = cc.Animation.create();

//add a sprite frame to this animation
        ani.addSpriteFrameWithFile(bird_anims[0]);
        ani.addSpriteFrameWithFile(bird_anims[1]);
        ani.addSpriteFrameWithFile(bird_anims[2]);

        ani.setDelayPerUnit(0.15);   // set the delay time, in seconds
//create an animate with this animation
        var action = cc.Animate.create(ani);

//run animate
        this.sprite.runAction(action.repeatForever());
    },
    move: function () {
        if (!this.isFlying) {
            this.setPosition(this._position.x, this._position.y - this.gravity * this.timeFall);
            this.timeFall += 0.05;
        }
        else {
            this._position.y += this.flySpeed;
            if (this._position.y >= this.posYDestination) {
                this.isFlying = false;
                this.rotateDown();
            }
            this.setPosition(this._position.x, this._position.y);
        }
    },
    fly: function () {
        this.timeFall = 0;
        if (!this.isFlying) {
            this.posYDestination = this._position.y + this.flyOffset;
            this.rotateUp();
            this.isFlying = true;
        }
        else {
            this.posYDestination += this.flyOffset;
        }
    },

    rotateUp: function () {
        this.sprite.stopActionByTag(1);
        var r = new cc.RotateTo(0.1, -50);
        r.setTag(1);
        this.sprite.runAction(r, 1);
    },
    rotateDown: function () {
        this.sprite.stopActionByTag(1);
        var r = new cc.RotateTo(0.7, 90);
        r.setTag(1);
        this.sprite.runAction(r, 1);
    },

    getRect: function () {
        var rect = cc.rect(
            this.x + this.sprite.getPositionX() - this.sprite.getContentSize().width *
            this.sprite.getScaleX() / 2,
            this.y + this.sprite.getPositionY() - this.sprite.getContentSize().height *
            this.sprite.getScaleY() / 2,
            this.sprite.getContentSize().width * this.sprite.getScaleX(),
            this.sprite.getContentSize().height * this.sprite.getScaleY()
        );
        // cc.log(rect);
        return rect;
    },

    stopRotate: function () {
        this.sprite.stopAllActions();
    }
});
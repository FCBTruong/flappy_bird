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

    ctor: function(){
        this._super();
        this.sprite = cc.Sprite.create(res.Bird_png);
        this.addChild(this.sprite, 1);
        this.scheduleUpdate();
    },
    move: function(){
        if(!this.isFlying){
            this.setPosition(this._position.x,this._position.y - this.gravity * this.timeFall);
            this.timeFall += 0.05;
        }
        else {
            this._position.y += this.flySpeed;
            if(this._position.y >= this.posYDestination) {
                this.isFlying = false;
                this.rotateDown();
            }
            this.setPosition(this._position.x,this._position.y);
        }
    },
    fly: function(){
        this.timeFall = 0;
        if(!this.isFlying){
            this.posYDestination = this._position.y + this.flyOffset;
            this.rotateUp();
            this.isFlying = true;
        }
        else{
            this.posYDestination += this.flyOffset;
        }
    },

    rotateUp: function(){
        this.sprite.stopAllActions();
        var r = new cc.RotateTo(0.1,-50);
        this.sprite.runAction(r);
    },
    rotateDown: function(){
        this.sprite.stopAllActions();
        var r = new cc.RotateTo(0.7, 90);
        this.sprite.runAction(r);
    },

    getRect: function(){
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

    stopRotate: function(){
        this.sprite.stopAllActions();
    }
});
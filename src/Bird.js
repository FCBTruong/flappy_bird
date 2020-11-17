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
    flySpeed: 4,

    ctor: function(){
        this._super();
        this.sprite = cc.Sprite.create(res.Bird_png);
        this.addChild(this.sprite, 1);
        this.scheduleUpdate();
    },
    move: function(){
        if(!this.isFlying){
            this.setPosition(this._position.x,this._position.y - this.gravity);
        }
        else {
            this._position.y += this.flySpeed;
            if(this._position.y >= this.posYDestination) this.isFlying = false;
            this.setPosition(this._position.x,this._position.y);
        }
    },
    fly: function(){
        if(!this.isFlying){
            this.posYDestination = this._position.y + this.flyOffset;
            this.isFlying = true;
        }
        else{
            this.posYDestination += this.flyOffset;
        }
    }
});
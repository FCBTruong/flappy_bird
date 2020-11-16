

Game = {};
Game.scenes = [];
Game.scenes[1] = {};
Game.layers = [];
Game.layers[1] = {};

var Bird = cc.Sprite.extend ({
    sprite: null,
    speed: null,

    ctor: function (){
        this._super();
        this.sprite = cc.Sprite.create(Game.res.Bird_png);
        this.sprite.attr({
            x: 300,
            y: 300,
        });

        this.addChild(this.sprite, 1);
    }
});






Game.layers[1].extend = cc.Layer.extend({
    init: function(){
        this._super();
        var game = this;
        Game.layers[1].start(game);
        this.scheduleUpdate();
    },

    update: function(dt){
        cc.log('xx');
    }
});


Game.layers[1].start = function(game){
    var size = cc.director.getWinSize();
    var background = cc.Sprite.create(Game.res.BackGround_png);
    background.attr({
        x: size.width /2,
        y: size.height /2,
        anchorX: 0.5,
        anchorY: 0.5,
        scaleX: size.width / background.width
    });
   // game.addChild(background, 0);
    game.addChild(new Bird(), 0);
}



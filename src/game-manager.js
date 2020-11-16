
var GameLayer = cc.Layer.extend({
    ctor:function() {
        cc.log('xx');
        this._super();
        var background = cc.Sprite.create(res.BackGround_png);
        background.attr({
            x: cc.winSize.width / 2,
            y: cc.winSize.width / 2,
            scaleX: (cc.winSize.width / background.width),
        });


        this.addChild(background);
        this.scheduleUpdate();
    },
    update: function(dt){

    }
});


var GameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new GameLayer();
        this.addChild(layer);
    }
});

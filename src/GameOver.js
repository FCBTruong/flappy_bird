/**
 * Created by nguye on 11/17/2020.
 */

var GameOver = cc.Layer.extend({
    fadeValue: 128,
    gameOverTitle: null,
    yourScore: null,
    ctor: function () {
        this._super();
        this.init();
        var f = new cc.FadeTo(0.5,0);

        var fade = cc.Sprite.create(res.Fade_png);
        fade.setPosition(cc.winSize.width/2, cc.winSize.height/2);
        fade.setScaleX(cc.winSize.width/fade.width);
        fade.setScaleY(cc.winSize.height/fade.height);
        fade.runAction(f);
        this.addChild(fade);

        this.gameOverTitle = cc.Sprite.create(res.GameOverTitle_png);
        this.gameOverTitle.setPosition(cc.winSize.width/2, 350);
        this.addChild(this.gameOverTitle);

        var box = cc.Sprite.create(res.Box_png);
        box.setPosition(cc.winSize.width/2, 350);
        this.addChild(box,2);

        this.yourScore = cc.LabelTTF.create(game.scoreBoard.score);
        this.yourScore.setPosition(cc.winSize.width/2, 250);
        this.addChild(this.yourScore,3);
    },
    init: function () {

    },
});

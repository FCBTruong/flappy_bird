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
        this.addChild(fade,1);

        this.gameOverTitle = cc.Sprite.create(res.GameOverTitle_png);
        this.gameOverTitle.setPosition(cc.winSize.width/2, 350);
        this.addChild(this.gameOverTitle);

        var box = cc.Sprite.create(res.Box_png);
        box.setPosition(cc.winSize.width/2, 250);
        this.addChild(box,2);

        this.yourScore = cc.LabelTTF.create(game.scoreBoard.score);
        this.yourScore.setPosition(cc.winSize.width/2, 248);
        this.addChild(this.yourScore,3);
        this.restartButton();
    },

    restartButton: function(){
        var spriteBut1 = new cc.Sprite.create(res.Restart_png);
        var spriteBut2 = new cc.Sprite.create(res.Restart_png);
        var spriteBut3 = new cc.Sprite.create(res.Restart_png);

        var restartButton = new cc.MenuItemSprite(spriteBut1, spriteBut2, spriteBut3,this.pressRestart);
        var menu = new cc.Menu(restartButton);
        menu.x = cc.winSize.width / 2;
        menu.y = cc.winSize.height / 3;
        this.addChild(menu);
    },

    pressRestart: function(pSender){
        var scene = new cc.Scene();
        scene.addChild(new GameScene());
        cc.director.runScene(new cc.TransitionFade(1, scene));
    }
});

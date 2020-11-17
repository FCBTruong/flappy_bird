/**
 * Created by nguye on 11/16/2020.
 */

const MAX_PIPES = 6;
const DISTANCE_OF_TWO_PIPES = 200;
const RANDOM_RANGE = 80;

var game;

var GameLayer = cc.Layer.extend({
    isPlaying: false,
    _listPipes: [],
    _bird: null,
    _speed: 1,
    _widthPipe: 100,

    ctor: function () {
        game = this;
        this._super();
        var background = cc.Sprite.create(res.BackGround_png);
        background.attr({
            x: cc.winSize.width / 2,
            y: cc.winSize.height / 2,
            scaleX: cc.winSize.width / background.width,
        });
        this.addChild(background);

        this._bird = new Bird();
        this._bird.setPosition(
            cc.winSize.width / 2,
            cc.winSize.height / 2
        );
        this.addChild(this._bird, 2);

        this.scheduleUpdate();

        this.initPines();
        cc.eventManager.addListener(this.listener.clone(), this);
    },
    update: function (dt) {
        if(!this.isPlaying) return;
        this.movePipes();
        this.moveBird();
    },

    initPines: function () {
        var xPos = 300;
        for (var i = 0; i < MAX_PIPES; i++) {
            var pipe = new Pipe();
            xPos = xPos + DISTANCE_OF_TWO_PIPES;

            var negative = Math.floor(Math.random() * 2);
            if (negative == 0) negative = -1;
            var yPos = Math.floor(Math.random() * RANDOM_RANGE) * negative;
            pipe.setPosition(xPos, yPos);
            this._listPipes.push(pipe);
            this.addChild(pipe, 0);
        }
    },

    movePipes: function () {
        for (var i = 0; i < MAX_PIPES; i++) {
            MovementController.move(this._listPipes[i], -this._speed, "horizontal");
        }

        var firstPosX = this._listPipes[0].x + this._widthPipe / 2;
        if (firstPosX < 0) {
            var firstPipe = this._listPipes[0];
            firstPipe.x = this._listPipes[MAX_PIPES - 1].getPosition().x + DISTANCE_OF_TWO_PIPES;
            var negative = Math.floor(Math.random() * 2);
            if (negative == 0) negative = -1;
            var yPos = Math.floor(Math.random() * RANDOM_RANGE) * negative;
            firstPipe.y = yPos;
            firstPipe.setPosition(firstPipe);
            this._listPipes.shift();
            this._listPipes.push(firstPipe);
        }
    },
    moveBird: function () {
        this._bird.move();
        cc.log('xx' + this._bird.y);
    },

    checkCollisions: function(){

    },

    listener: cc.EventListener.create(
        {
        event: cc.EventListener.TOUCH_ONE_BY_ONE, swallowTouches: true,
        onTouchBegan: function (touch, event) {
            cc.log('press');
            if(!game.isPlaying) game.isPlaying = true;
            game._bird.fly();
        }
    })
});

var GameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new GameLayer();
        this.addChild(layer);
    }
});




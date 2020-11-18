/**
 * Created by nguye on 11/16/2020.
 */

const MAX_PIPES = 6;
const DISTANCE_OF_TWO_PIPES = 200;
const RANDOM_RANGE = 80;

var game;

var GameLayer = cc.Layer.extend({
    isPlaying: false,
    gameOverStatus: false,
    _listPipes: [],
    _bird: null,
    _speed: 1,
    _widthPipe: 100,
    scoreBoard: null,

    ctor: function () {
        this._listPipes = [],
        this.isPlaying = false;
        this.gameOverStatus = false;
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

        this.scoreBoard = new ScoreBoard();
        this.scoreBoard.setPosition(cc.winSize.width / 2, 350);
        this.scoreBoard.setScale(1.2);
        this.addChild(this.scoreBoard, 2);
    },

    update: function (dt) {
        if (!this.isPlaying) return;
        this.movePipes();
        this.moveBird();
        this.checkCollisions();

        if (this._bird.y < 0) this.gameOver();
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
            if (!this._listPipes[i].isPassed) {
                if (this._listPipes[i].x < this._bird.x) {
                    this.scoreBoard.increase();
                    cc.log(this.scoreBoard.size);
                    this.scoreBoard.setPosition(cc.winSize.width/2 + this.scoreBoard.size / 2,
                    this.scoreBoard.y);
                    this._listPipes[i].isPassed = true;
                }
            }
        }

        var firstPosX = this._listPipes[0].x + this._widthPipe / 2;
        if (firstPosX < 0) {
            var firstPipe = this._listPipes[0];
            firstPipe.x = this._listPipes[MAX_PIPES - 1].getPosition().x + DISTANCE_OF_TWO_PIPES;
            var negative = Math.floor(Math.random() * 2);
            if (negative == 0) negative = -1;
            var yPos = Math.floor(Math.random() * RANDOM_RANGE) * negative;
            firstPipe.y = yPos;
            firstPipe.isPassed = false;
            firstPipe.setPosition(firstPipe);
            this._listPipes.shift();
            this._listPipes.push(firstPipe);
        }
    },
    moveBird: function () {
        this._bird.move();
    },

    checkCollisions: function () {
        for (var i = 0; i < MAX_PIPES; i++) {
            if (this._listPipes[i].checkBird(this._bird.getRect())) {
                this.gameOver();
            }
        }
    },

    gameOver: function () {
        this.scoreBoard.removeFromParent(true);
        this.gameOverStatus = true;
        this.isPlaying = false;
        this._bird.stopRotate();
        this.addChild(new GameOver(), 2);
        this.scoreBoard.setVisible(false);
    },

    listener: cc.EventListener.create(
        {
            event: cc.EventListener.TOUCH_ONE_BY_ONE, swallowTouches: true,
            onTouchBegan: function (touch, event) {
                if (!game.gameOverStatus) {
                    if (!game.isPlaying) game.isPlaying = true;
                    game._bird.fly();
                }
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




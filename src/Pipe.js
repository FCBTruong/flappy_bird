/**
 * Created by nguye on 11/16/2020.
 */

var Pipe = cc.Sprite.extend({
    abovePipe: null,
    bottomPipe: null,
    distanceBetween: 100,
    isPassed: false,

    ctor: function () {
        this._super();
        this.abovePipe = cc.Sprite.create(res.Pipe_green_png);
        this.bottomPipe = cc.Sprite.create(res.Pipe_green_png);
        this.abovePipe.scaleY *= -1;

        this.abovePipe.setPosition(0, (cc.winSize.height + this.abovePipe.height + this.distanceBetween) / 2);
        this.bottomPipe.setPosition(0, (cc.winSize.height - this.abovePipe.height - this.distanceBetween) / 2);

        this.addChild(this.abovePipe, 0);
        this.addChild(this.bottomPipe, 0);
    },

    checkBird: function (rectBird) {
        var rectPipeAbove = cc.rect(
            this.x - this.abovePipe.getContentSize().width *
            this.abovePipe.getScaleX() /2 ,
            this.y + this.abovePipe.getPositionY() - this.abovePipe.getContentSize().height *
            Math.abs(this.abovePipe.getScaleY()) / 2,
            this.abovePipe.getContentSize().width * this.abovePipe.getScaleX(),
            this.abovePipe.getContentSize().height * Math.abs(this.abovePipe.getScaleY()) * 2
        );


        var rectPipeBottom = cc.rect(
            this.x  - this.bottomPipe.getContentSize().width *
            this.bottomPipe.getScaleX() / 2,
            this.y + this.bottomPipe.getPositionY() - this.bottomPipe.getContentSize().height *
            this.bottomPipe.getScaleY() / 2,
            this.bottomPipe.getContentSize().width * this.bottomPipe.getScaleX(),
            this.bottomPipe.getContentSize().height * Math.abs(this.abovePipe.getScaleY())
        );

        if(cc.rectIntersectsRect(rectBird, rectPipeAbove)) return true;
        if(cc.rectIntersectsRect(rectBird, rectPipeBottom)) return true;
        return false;
    }
});
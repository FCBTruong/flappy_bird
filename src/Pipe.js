/**
 * Created by nguye on 11/16/2020.
 */

var Pipe = cc.Sprite.extend({
    abovePine: null,
    bottomPine: null,
    distanceBetween: 100,

    ctor: function(){
        this._super();
        this.abovePine = cc.Sprite.create(res.Pipe_green_png);
        this.bottomPine = cc.Sprite.create(res.Pipe_green_png);
        this.abovePine.scaleY *= -1;

        this.abovePine.setPosition(0, (cc.winSize.height + this.abovePine.height + this.distanceBetween)/2);
        this.bottomPine.setPosition(0, (cc.winSize.height - this.abovePine.height - this.distanceBetween)/2);

        this.addChild(this.abovePine,0);
        this.addChild(this.bottomPine,0);
    }
});
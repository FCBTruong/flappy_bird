/**
 * Created by nguye on 11/17/2020.
 */

const DISTANCE_TWO_CHARS = 5;
var ScoreBoard = cc.Sprite.extend({
    score: 0,
    numberDisplayLists: [],
    sizeOneNumber: 40,
    size: 0,

    ctor: function () {
        this.numberDisplayLists = [];
        this.score = 0;
        this._super();
        this.initNumbers();
    },

    initNumbers: function () {
        this.updateScoreToScreen();
    },

    increase: function(){
        this.numberDisplayLists = [];
        this.removeAllChildren();
        this.score++;
        cc.log(this.score);
        this.updateScoreToScreen();
    },

    updateScoreToScreen: function(){
        var x = this.score;
        var count = 0;
        if(x == 0){
            count ++;
            this.numberDisplayLists.push(cc.Sprite.create(number_resources[0]));
        }

        while(x != 0){
            count ++;
            var n = x % 10;
            x = Math.floor(x / 10);
            this.numberDisplayLists.push(cc.Sprite.create(number_resources[n]));
        }

        this.size = this.sizeOneNumber * (count - 1);
        var posX = 0;
        for(var i = 0; i < count; i ++){
            this.numberDisplayLists[i].setPosition(posX, 0);
            this.addChild(this.numberDisplayLists[i]);
            posX -= this.sizeOneNumber;
        }
    }
});

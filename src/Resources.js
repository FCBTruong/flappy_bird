res = {
    HelloWorld_png : "res/HelloWorld.png",
    CloseNormal_png : "res/CloseNormal.png",
    CloseSelected_png : "res/CloseSelected.png",
    BackGround_png: "res/sprites/background-day.png",
    Bird_png: "res/sprites/bluebird-downflap.png",
    Pipe_green_png: "res/sprites/pipe-green.png",
    Fade_png: "res/sprites/fade.png",
    GameOverTitle_png: "res/sprites/gameover.png",
    Box_png: "res/sprites/box.png",
    Restart_png: "res/sprites/restart_button.png"
};

numbers = {
    Number0_png: "res/sprites/0.png",
    Number1_png: "res/sprites/1.png",
    Number2_png: "res/sprites/2.png",
    Number3_png: "res/sprites/3.png",
    Number4_png: "res/sprites/4.png",
    Number5_png: "res/sprites/5.png",
    Number6_png: "res/sprites/6.png",
    Number7_png: "res/sprites/7.png",
    Number8_png: "res/sprites/8.png",
    Number9_png: "res/sprites/9.png",
};

birdsAnim = {
    Bird0_png: "res/sprites/yellowbird-downflap.png",
    Bird1_png: "res/sprites/yellowbird-midflap.png",
    Bird2_png: "res/sprites/yellowbird-upflap.png"
};

var g_resources = [];
var number_resources = [];
var bird_anims = [];

for (var i in res) {
    g_resources.push(res[i]);
}

for (var j in numbers){
    number_resources.push(numbers[j]);
}

for (var k in birdsAnim) {
    bird_anims.push(birdsAnim[k]);
}
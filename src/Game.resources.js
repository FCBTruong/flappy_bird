Game.res = {
    HelloWorld_png : "res/HelloWorld.png",
    CloseNormal_png : "res/CloseNormal.png",
    CloseSelected_png : "res/CloseSelected.png",
    BackGround_png: "res/sprites/background-day.png",
    Bird_png: "res/sprites/bluebird-downflap.png"
};

var g_resources = [];
for (var i in Game.res) {
    g_resources.push(Game.res[i]);
}
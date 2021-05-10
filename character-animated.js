﻿(function(window) {
SkateDude = function() {
	this.initialize();
}
SkateDude._SpriteSheet = new createjs.SpriteSheet({images: ["character-animated.png"], frames: [[7,7,134,288,0,60,282.75],[148,7,134,288,0,60,282.75],[289,7,134,288,0,60,282.75],[430,7,134,288,0,60,282.75],[571,7,134,288,0,60,282.75],[712,7,134,288,0,60,282.75],[853,7,134,288,0,60,282.75],[994,7,134,288,0,60,282.75],[1135,7,134,287,0,60,282.75],[1276,7,134,287,0,60,282.75],[1417,7,134,287,0,60,282.75],[1558,7,134,287,0,60,282.75],[1699,7,134,287,0,60,282.75],[1840,7,134,287,0,60,282.75],[7,302,134,287,0,60,282.75],[148,302,134,287,0,60,282.75],[289,302,134,287,0,60,282.75],[430,302,134,288,0,60,282.75],[571,302,134,288,0,60,282.75],[712,302,134,288,0,60,282.75],[853,302,134,288,0,60,282.75],[994,302,134,288,0,60,282.75],[1135,302,134,288,0,60,282.75],[1276,302,134,288,0,60,282.75],[1276,302,134,288,0,60,282.75],[1417,302,134,288,0,60,282.75],[1558,302,134,287,0,60,281.75],[1699,302,134,287,0,60,281.75],[1840,302,134,286,0,60,280.75],[7,597,134,286,0,60,280.75],[148,597,134,285,0,60,279.75],[289,597,134,285,0,60,279.75],[430,597,134,284,0,60,278.75],[571,597,134,283,0,60,277.75],[712,597,135,283,0,61,277.75],[854,597,135,282,0,61,276.75],[996,597,135,282,0,61,276.75],[1138,597,135,281,0,61,275.75],[1280,597,135,281,0,61,275.75],[1422,597,135,280,0,61,274.75],[1564,597,135,279,0,61,273.75],[1706,597,135,279,0,61,273.75],[1848,597,135,278,0,61,272.75],[7,890,135,277,0,61,271.75],[149,890,136,277,0,62,271.75],[292,890,136,276,0,62,270.75],[435,890,136,275,0,62,269.75],[578,890,136,275,0,62,269.75],[721,890,136,274,0,62,268.75],[864,890,137,273,0,62,267.75],[1008,890,138,272,0,62,266.75],[1153,890,140,272,0,62,266.75],[1300,890,138,273,0,62,267.75],[1445,890,136,274,0,62,268.75],[1588,890,136,275,0,62,269.75],[1731,890,136,276,0,62,270.75],[1874,890,135,277,0,61,271.75],[7,1174,135,279,0,61,273.75],[149,1174,135,280,0,61,274.75],[291,1174,135,281,0,61,275.75],[433,1174,135,282,0,61,276.75],[575,1174,135,283,0,61,277.75],[717,1174,134,284,0,60,278.75],[858,1174,134,285,0,60,279.75],[999,1174,134,286,0,60,280.75],[1140,1174,134,286,0,60,280.75],[1281,1174,134,287,0,60,281.75],[1276,302,134,288,0,60,282.75],[1276,302,134,288,0,60,282.75],[1422,1174,134,285,0,60,279.75],[1563,1174,134,282,0,60,276.75],[1704,1174,134,279,0,60,273.75],[1845,1174,134,275,0,60,269.75],[7,1468,134,272,0,60,266.75],[148,1468,134,269,0,60,263.75],[289,1468,136,266,0,62,260.75],[432,1468,135,265,0,62,260.75],[574,1468,135,265,0,62,260.75],[716,1468,134,264,0,62,260.75],[857,1468,141,264,0,62,260.75],[1005,1468,140,263,0,64,259.75],[1152,1468,138,262,0,66,258.75],[1297,1468,141,261,0,68,257.75],[1445,1468,143,260,0,69,256.75],[1595,1468,146,259,0,72,255.75],[1748,1468,138,265,0,64,261.75],[1893,1468,134,271,0,60,266.75],[7,1747,134,277,0,60,272.75],[148,1747,134,282,0,60,277.75],[1276,302,134,288,0,60,282.75],[1276,302,134,288,0,60,282.75],[1422,1174,134,285,0,60,279.75],[1563,1174,134,282,0,60,276.75],[1704,1174,134,279,0,60,273.75],[1845,1174,134,275,0,60,269.75],[7,1468,134,272,0,60,266.75],[148,1468,134,269,0,60,263.75],[289,1468,136,266,0,62,260.75],[432,1468,135,265,0,62,260.75],[574,1468,135,265,0,62,260.75],[716,1468,134,264,0,62,260.75],[857,1468,141,264,0,62,260.75],[289,1747,136,252,0,60,248.75],[432,1747,148,241,0,60,237.75],[587,1747,158,229,0,60,225.75],[752,1747,164,217,0,60,213.75],[923,1747,163,222,0,60,218.75],[1093,1747,162,228,0,60,224.75],[1262,1747,161,233,0,60,229.75],[1430,1747,156,238,0,60,234.75],[1593,1747,151,244,0,60,240.75],[1751,1747,145,249,0,60,245.75],[7,2036,141,254,0,63,250.75],[1595,1468,146,259,0,72,255.75],[155,2036,136,267,0,62,262.75],[298,2036,134,274,0,60,269.75],[439,2036,134,280,0,60,275.75],[1276,302,134,288,0,60,282.75]],  animations: {cruising:[0,23, true], speed:[24,67, true], jump:[68,83, true], rail:[84,89, true], grab:[90,117, true]}});
var SkateDude_p = SkateDude.prototype = new createjs.Sprite();
SkateDude_p.Sprite_initialize = SkateDude_p.initialize;
SkateDude_p.initialize = function() {
	this.Sprite_initialize(SkateDude._SpriteSheet);
	this.paused = false;
}
SkateDude_p.cruising = function(){
	this.gotoAndPlay("cruising");
}
SkateDude_p.speed = function(){
	this.gotoAndPlay("speed");
}
SkateDude_p.jump = function(){
	this.gotoAndPlay("jump");
}
SkateDude_p.rail = function(){
	this.gotoAndPlay("rail");
}
SkateDude_p.grab = function(){
	this.gotoAndPlay("grab");
}
window.SkateDude = SkateDude;
}(window));

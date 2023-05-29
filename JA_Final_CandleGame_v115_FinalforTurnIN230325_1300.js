(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_1", frames: [[0,0,856,1632]]},
		{name:"JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_2", frames: [[0,0,1517,715]]},
		{name:"JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_3", frames: [[0,0,735,1460],[0,1462,1696,499],[737,0,1053,715],[737,717,910,714]]},
		{name:"JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4", frames: [[1100,750,284,317],[680,269,599,297],[0,269,678,321],[2033,0,11,4],[238,905,518,66],[1273,1072,445,66],[1273,1140,445,66],[2017,0,14,5],[880,1069,391,77],[363,592,302,77],[363,671,302,77],[1460,269,305,305],[1460,576,305,305],[0,905,236,236],[1386,750,67,67],[238,1076,144,137],[1889,1122,83,130],[1281,269,176,130],[384,1076,167,109],[384,1187,166,109],[1720,1122,167,109],[1218,1208,166,109],[0,1143,167,109],[880,1148,167,109],[1049,1148,167,109],[559,973,167,51],[1386,819,49,48],[553,1160,167,109],[1281,401,150,150],[1386,1208,227,32],[1615,1233,227,32],[238,973,319,101],[1386,1242,227,32],[0,592,361,128],[0,1254,227,32],[559,1057,319,101],[2011,290,37,5],[0,722,53,21],[0,750,791,153],[793,750,305,305],[1767,580,234,269],[1773,0,242,288],[1767,851,234,269],[1767,290,242,288],[1386,883,339,187],[0,0,1771,267],[680,568,778,180]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_98 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_97 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_96 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_95 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_94 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_93 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_92 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_91 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_90 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_89 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_88 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_87 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_86 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_85 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_84 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_83 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_82 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_81 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_80 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_79 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_78 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_77 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_76 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_75 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_74 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_73 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_72 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_71 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_70 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_69 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_67 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_68 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_65 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_64 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_63 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_62 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_61 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_60 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_59 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_57 = function() {
	this.initialize(img.CachedBmp_57);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7742,944);


(lib.CachedBmp_56 = function() {
	this.initialize(img.CachedBmp_56);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7650,419);


(lib.CachedBmp_55 = function() {
	this.initialize(img.CachedBmp_55);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2688,374);


(lib.CachedBmp_54 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_53 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_52 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_51 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_50 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_49 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_48 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_47 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(img.CachedBmp_45);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5487,620);


(lib.CachedBmp_44 = function() {
	this.initialize(img.CachedBmp_44);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6327,948);


(lib.CachedBmp_43 = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.BG_Illustrator = function() {
	this.initialize(img.BG_Illustrator);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2592,960);


(lib.GameOver = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.gameTitle = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.PhotoshopWall = function() {
	this.initialize(img.PhotoshopWall);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,768,2701);


(lib.YouWin_art = function() {
	this.initialize(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tableBroken_art = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// verticalLft
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#331103").ss(0.7,2,1).p("AAAg6IAAB1");
	this.shape.setTransform(-99.35,-54.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#330000").ss(0.1,1,1).p("ABSh+IAADdAAZhpIAACQAgOgQIAACPAhRhKIAAB2");
	this.shape_1.setTransform(-100.5,-48.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// otherside
	this.instance = new lib.CachedBmp_96();
	this.instance.setTransform(459.4,-83.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#49180F").s().p("AD0D8QgEgBAAgDQgBgCAEgDIARgRIgCgBQAAgEAGgCIAFgCIAfgcIAAAAIABgBIAQgNIAJgCQAKgCAFgEIAEgFIAJgOQAFgFAEgDQAGgEABgDQgBgDgEgFIgBAAQAbAJATAAQgCAFgHAGQgzAjgpArQgUAUgIAFQgNAGgLAAQgHAAgGgCgAFSBuIgKgBIgBgCQgEgIAIgQQAJgVAEgTQADgMgEgFIgDgEIAEgDQABgCAAgDQgCgEgDgBQgNgHgYABIgLABQgBgDgDgCQgGgDgKgCQgMgCgZABIgSgGQgNgFgPgIQAJgCAIgEQAHgDgBgEQAAgCgCgDIABABIABgBIAIABIAJABIgHgCIAAgCIgSgCIgBgBIACgCIgFAAIgUgMIgPgJQAHgEAJgBQgEgEgMAAQgIAAgFgBIgYgbIANABIAAAAIgOgBIgKgKIANABQASABANAFQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQgBAAAAABIgPALIArAHIAAABIAOACQAKACACAFIgaAIQAxAAAVAHIADACQACADgDACQgCABgEAAIAAABQAGAAACACQgBAEgDAAQAaAFAVACIAXADIASAEIASACQAJABABAGQgDACgGABIgKABIgJADQgFABgKAAQgUAAgKACIgIABIACABQAiAIAdAJQAKAEAGAFIgGAfIAAACIgEARQgBAGgJATIgKASIgBAFIgHgCgAE7gdIgBADIAMABIAMAAQgIgEgNgBIgVgCgAD1gaIAEAAIASAAQgPgCgRgEIgHgBIARAHgAEmggIgagFIgFAAgADZg7IAIgBIgTAAIALABgACfhMIABAAIAAAAIgBAAgAAnhvIglgPIgPgIQAAAEgHABQgLACgTgBQATgBANgDIAFgCIAHgEQADgCAAgDQAkAOAYAZIACACIgUgJgAk9hoIAEAAIgIABIAEgBgAmVhzQgCgDABgMIAAgBQACACAEACQALAFANABIgbAJIgCgDgAhtiBIAFgDIAIABIgOADIABgBgAmUiZIAAAAIAFgBIgBAFQgBAFgCAEIgCABIABgOgAmRifIgEgCIAAgHIAQAAIADAAIAAACIABACQgKADgDAEIgDgCgAmWisIgBgGIAAgBIAEAAIAAABQABACAEAEIABAAIgJAAgAmXi6IACgTIgEgCQABgDADgCIAFggIACgBIAogIIgBADIADABQgKADgIAFQgFAEgBABQgCAFACADQgGACgBAHIgKAEQgGADABAGQAAAEAHADQAGADAHABQgLADgFADIgDAEIgGgBg");
	this.shape_2.setTransform(-82.15,-23.9264);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// verticalInside
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#331103").ss(0.3,2,1).p("AgDgoIADAAIAQABIgDBfAgDgoIgBACAgOgyIAWgFIgLAP");
	this.shape_3.setTransform(-105.9522,-52.8661);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#331103").ss(0.7,2,1).p("AAAgrIAABX");
	this.shape_4.setTransform(-117.2,-48.2125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#331103").s().p("AAHAKIgFgBIAAgEIAAgHQgKAAgDgBIACgCIAKgCIAAAAIAAgBIACgBIADAAIAAAAIACAAIACABIABABIgBAAIABABIABACIAAAGIAAAHQgDABgCAAIAAAAg");
	this.shape_5.setTransform(-117.85,-53.6618);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAUAWIAAgPIgBAAQgBgDABgDIABAAIgBgBIAAgGIAAgCIABAAIAAgCIABAAIAAgBIAAAAIABgBIABgBIgEAAIgCgBIgCAAIgDgBIgPAAIgEgBIgCgBIgJAEIgMABQgGAAgCgCIAAgBIAIgBIAEAAIAEgCIADgBIAKgDIABAAIAAgBIAGABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIAQABIADgBIABAAIABAAIADgBIAEAAIABAAIADAAIAAgBIAEABQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABIAAABIgDABIgEABIACABIAAACIgCABIgBACIgBAAIAAABIAAACIgBAAIAAABIAAAGIgBAAIAAABIABACIAAAEIABAAIAAANIAAACIgCABIgDABIgFgCg");
	this.shape_6.setTransform(-112.975,-54.6219);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#5F2F2C","#341103","#291103"],[0,0.686,0.906],-1.5,-15.1,1.6,15.6).s().p("AiQgpIAugPIAAAEIAEACQADAAADgCIAAgHIA3gSIAAAHIACABIgBAAQgBACABADIAAABIABAPQAEACAEgBIABgBIABgCIgBgNIAAgBIAAgDIgCgCIABgBIAAgCIAAgGIABgBIAAAAIAAgBIABgBIAigLIAEgCIB9goQABABAGgDIAFgDIgDDbIgRAFIgBABIgLABQgOACgYAIQgagFgRAKQgGADgIAJIhEAJQg9AIgzAJgAheAlIAAhXgAAeACIAEhfIgRgBIARABg");
	this.shape_7.setTransform(-107.7375,-47.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer_1
	this.instance_1 = new lib.CachedBmp_98();
	this.instance_1.setTransform(-160.1,-78.55,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_97();
	this.instance_2.setTransform(-139.4,-76.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// black
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#331103").ss(0.3,2,1).p("AgehHIAsgIIgWAWIgCACAgIg5IAHABIAhAAIgICI");
	this.shape_8.setTransform(-83.5895,35.1633);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#331103").ss(0.7,2,1).p("AAAg+IAAB9");
	this.shape_9.setTransform(-106.3,41.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#331103").s().p("AAEAMIAAgFIAAgLQgUAAgIgCIAEgCIAXgBIgBgBQAAgBAAAAQgBAAABAAQAAgBAAAAQAAAAABgBIADAAIAGAAIAAgBIAJACIABACIgBABIACAAIACADIAAAIIAAAKQgGADgGAAIgJgDg");
	this.shape_10.setTransform(-107.6,34.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAoAgIAAgWIgBgBQgCgEACgDIADAAIgFgCIAAgJIAAgDIADAAIAAgCIACgBIAAgBIABAAIABgCIACgBIgHAAIgPgDIgfAAIgJgBIgDgCIgTAGQgHABgQAAQgLAAgGgCIABgCIAPgCIAJAAIAigIIADAAIAAgBIAKABQAHACgBADIAhAAIAHgBIADAAIAEgBIAJAAIACAAIAGAAIAAgBIAJABQAFAAAAABIABABIgHADIgHABIADABIAAADIgDACIgDADIAAAAIgCABIAAACIgBAAIgBACIAAAIIgBABIgBACIADACIAAAFIABABIABATIgBADIgDABIgHABQgFAAgFgCg");
	this.shape_11.setTransform(-97.8,32.6771);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#5F2F2C","#341103","#291103"],[0,0.686,0.906],-3.2,-18.4,3.1,25.3).s().p("Ak0CpIAQjFIBbgVIAAAFIAJADQAGAAAGgDIAAgKIBvgaIAAAKIAEACIgDAAQgCADACAEIABABIABAWQAIAEAIgDIADgBIABgDIgBgTIgBgBIAAgEIgDgDIABgCIABgCIAAgIIABgCIABAAIAAgBIACgBIBEgRIAKgBID8g7QABACAMgEIALgFIgIFRIphAAgAjABTIAAh8gAA7AiIAHiHIghgBIAhABg");
	this.shape_12.setTransform(-87.0125,39.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#331103").s().p("AtAAEIABgBIAAgCIAAgBIAAgBIAAgCIbQAAIAHACIADABIgBABIgBACIgCAAIgGABI7RAAgAuQAEIgHgBIgDgCIAAgBIADgBIACgBIAFAAIAAgBIA+AAIAAACIAAABIAAABIAAACIAAABIg+AAg");
	this.shape_13.setTransform(-22.05,58.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AxjK3IgCgBIgBgBIAAgCIAAgCIAAgBIAAgCIAAAAIAAgCIAAgCIAAgCIAAgCIgIgDQgsgUgtgJQADghgDgRQgFgdgUgNQAEgKAJgHQgJAAgFgIQAsgeAwgZIg5gOQABgFAKgBQBpgIBrgXIBOgRQAsgIAiACQAhABAGgBQAQgCATgJIAggRQAogUAogKQgGgEAIgPQAHgKADgRIACgdQACgnATgOIgWgNQAYgjAggaIhNgnQBHg5BOg1QACgIgKgLQgLgNgCgFQgBgGADgMIgkgBQAJgHALgCQgQgBgPgKQAYgFAVgCIgogGIgFgDQgBAAAAgBQAAgBAAAAQgBgBABAAQAAAAAAgBQgnABgigGQAEgHAOgBQAjgCAigFIgJgDIAAgCIgZgCIACAAIASgDIATAAIAGAAIgbgIQAAgEAHAAIAlAAIACAAIAMAAIAEgCQgKgEgEgEQgugCgugKQARABAPgJQgEgGgOgDIhkgVIACgBIgEABIgDgBIAsgDQAGAAABgEQAAgDgEgCQgOgIgWgFQgngIgpABIgEAAQgnAAgogMQgngNgNgBQgPgCgdADIi7AUQgmAFgWAAQghABgbgGQAEgGgFgNQgGgOABgGQADgKAWgIQAIgDAFgFQAHgGgCgHQgCgHgLgFQgNgFgDgFQAUgMASgFIgjgMQAIgFAQgEIAZgHQAIgCAHgFQAGgEAGgHIgKgBQgMgCgNgEQACgJARgCQAxgEA6gWQAkgOBDgfQhOgNhAgrQgHgFgBgDQgCgEABgKQADgOgFgIQgEgKgWgHIhgggQARgVARgPQAEgDADgBQADgBACACQAEACgCAFQgBAFgEAEIgTAUIBYAdQASAGAHAHQALAMgEAhQA2AmBCAPIATAEQALAEAGAFIAEgFIiFhaIgngcQgfgVgPgLQgVgRgSgRIgGgGQAFgHAKAEQAEABAJAJQAWAVAyAjIA3AmQBZA+AzAhQBOAyBDAiQBRApCZA4QClA8BFAgQAZALBBAhQDjB1BUAwQAwAaBjA8QBgA6AzAdQAlAWAZAFQALADADACQADACACAFIADAHQAHANAaAKQAkAOBAAPQBKASAbAJQBMAYBQAvQBBAmBOA7ICIBrQBSBCA4AlQgMAJgQABQgLABgKgDIpLABI7RABIAAAAIAAABIABACIAAACIAAACIAAACIAAACIAAACIAAAAIAAACIAAABIAAACIgBACIAAABIgDABIgGABIgHgBgATQKYQAIgCAIAAIgKgHgAqAFrIhfAeQgjAMgMAHQAEADAKAEQALAEAEADQAHAFAHARQALAaAFAbQBtgHB6gPQgEgXAOgTQgPgBgRgKIgcgUQgcgVgfgSQgNgHgIgBQgIAAgKAEgAq6FzQAGgBAUgIIARgFQAKgDAGgDIgBgCQgfAJgbANgAoLhPIAAgDIgHAAIAHADgAochnIAVAEIABgCIABgDIgGgBgApOhxQAbABAYgCIgHgCQgBgBgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIgoAGgAnwiaQAHgBAHAAIgPgBIgFAAIAGACgAzJl3QAQABAJAOIAEgVQgOAEgPACgAqDiOQgJgCACgFQAPgDARgBQgBAAAAAAQgBABAAAAQgBABAAAAQAAABAAAAIALACIAAAAIAMABIASADQgNABgLADQgFABgBADIAFADQgTgDgTgGgAplibIgDAAQgmAAgVgGQAMgGANAAQAYAIAYACIgBACgArGixQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQgHAAgIgEQAEgEALgBQAKAFAOABIAaAAQASABAOAFQgMAAgJABIgFgDIgPACIAJACIgLADIAOAGgArvjUQAQgEAQgBQgcAAgQgDQAEgIAPgDIAGAAQATACAeAKIgtAEQgJABgEADIgEgBg");
	this.shape_14.setTransform(5.535,-10.5227);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.1,-83.3,958.5,163.3);


(lib.tablehit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hitArea
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#330000").ss(3,1,0,3).p("AjXh6IGwD1");
	this.shape.setTransform(5908.3,13.9625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#532513").ss(40,1,1).p("ANNzHMJIkAAAQCrAAB6BqQB5BqAACUIAAbJQAACVh5BpQg7A0haAcQhUAahaAAMpIVAAAQhlAAhTgTQhngYg4gwQg1gvgNhNQgGgiAAhvIAP7JQgGhfAEgrQAGhHA0gtQA5gyBugeQBigaBeAAgEpVggTRMJIkAAAQCrAAB6BqQB5BqAACUIAAbJQAACVh5BpQg7A0haAcQhUAahaAAMpIVAAAQhlAAhTgTQhngYg4gwQg1gvgNhNQgGgiAAhvIAP7JQgGhfAEgrQAGhHA0gtQA5gyBugeQBigaBeAAg");
	this.shape_1.setTransform(2049.575,141.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#875846").ss(5,1,1).p("EJeYgR8QAFAGAEAFQA4BOAABMIAAe5QAABMg1BKQgiAthXBQQhFA/hVAlQhbAohbAAMpNCAAAQi7AAiEh6QiFh6AAirIAA+5QAAisCFh5QCEh6C7AAMJMGAAAQAjAAAlAFEpYUgWAMJMFAAAQBjAABuAjQB3AmBAA6QBWBPAkAzQA4BOAABMIAAe5QAABMg1BKQghAthXBQQhFA/hWAlQhaAohbAAMpNCAAAQi7AAiEh6QiFh6AAirIAA+5QAAisCFh5QCEh6C7AAg");
	this.shape_2.setTransform(2049.1,141.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#341103").s().p("AM+TSQhlAAhTgTQhngYg4gwQg1gvgNhMQgGgjAAhvIAP7IQgGhgAEgrQAGhHA0gtQA5gyBugdQBigbBeAAMJIkAAAQCrAAB6BqQB5BqAACVIAAbIQAACVh5BpQg7A0haAcQhUAahaAAgEpVvATIQhlAAhTgTQhngYg4gwQg1gvgNhNQgGgiAAhvIAP7JQgGhfAEgqQAGhIA0gtQA5gxBugfQBigaBeAAMJIkAAAQCrAAB6BqQB5BqAACUIAAbJQAACVh5BpQg7A0haAbQhUAbhaAAg");
	this.shape_3.setTransform(2049.575,141.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("EAb5Aw5QglhKhNhqQhAhZh3g5QhGgihCgMMgy6grpMAAAgvSQAGAJdwhQQO4gnO3grMgAUBkfg");
	this.shape_4.setTransform(5751.425,-296);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tablehit, new cjs.Rectangle(-1840.6,-617.5,7782.799999999999,902), null);


(lib.potionMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF6699","#FF94B8"],[0,1],-128.5,0,128.6,0).s().p("AjNKQQh0gIhTgcQkAhYj7kIQlvmBgGoeQAfA0FXAlQF6AqIVAAQIWAAF6gqQFMgkAogxQgFJRlXFnQhbBghDA6QhbBRhPArQhyA+itAPQhMAIjwgBQiXAAg8gDg");
	this.shape.setTransform(-0.0274,2.3114,0.3064,0.3064);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FE0B5D","#FF6699"],[0,1],-3,-28.5,-2.8,14.6).s().p("AuPBjQlXglgfg0QgEgFAAgFQAAgEAEgFQAeg0FYgmQF5goIWAAQIWAAF6AoQFMAlAoAxQAFAHABAGQgBAHgFAHQgoAxlMAkQl6AqoWAAQoWAAl5gqg");
	this.shape_1.setTransform(0.0109,-18.2172,0.3064,0.3064);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF6699","#FF94B8"],[0,1],-23.3,-29.1,10.9,41.8).s().p("AgSFpQgngMgZgKQgjgPgWgQQgggXgcguQgMgUgghCIgbg7QgNghgDgaQgKhSAnhoQA5iZCVhKQgKAPAjBkQAmBuBHCTQBICSA9BjQA3BXASAEQhmAxhfAAQg5AAg1gSg");
	this.shape_2.setTransform(39.124,-6.4781);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FE0B5D","#FF6699"],[0,1],-0.2,-4.6,-12.1,1.2).s().p("ABaFkQgTgEg2hXQg9hjhHiTQhHiTgnhuQgjhjAJgPIADgDIADAAQASABA5BaQArBFAvBdIABAAQARgBASAMQALAHATARQAuAtAgASQATAKAjANQAqAPANAGQBDAfAMA0QAHAdgNAaQgFAMgLAOIgUAYIgXAiQgNAUgMAMQgPAPgTAGQgRAGgPgEQAGAbgFAIQAAABAAAAQgBABAAAAQAAABgBAAQAAABAAAAIgDAAIgCAAg");
	this.shape_3.setTransform(59.0992,-9.0333);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FF6699","#FF94B8"],[0,1],-38.4,-44.5,-26.3,33.3).s().p("AlwDxQgigXgUgRQgegYgRgWQgXgfgNg0QgGgWgLhJQgHgugCgSQgDgkAFgZQANhKA4hOQBYgJBbAEQA5ADAiAKQAyAPAYAjIANAUIAFAHIAFAdIAAAAQAQAEAPARQAIAJANAXQAOAZANATIANAEIAXAKQAcANAdAJQAqANAhgCQAQgCAogKQAYgIAPgGIAXgMIAYgLQARgFAlgDQAUgEAmgNQAtgLAhAMQATAIANAPQAOARABATQABASgKARQgKAQgQAIQgdATgqgHIgegGQgSgEgMABIgRAEIgRAFIgeAJQgKAFgNARIgnA3QglAzguAgQgcATgXAHQgJADgLACIgfAZQgTAPgOAIQgUALgTAAQgSAAgNgIQgCAbgHAHIgDADQgCAAgDgCQgqAGgnAAQiAAAhfhCg");
	this.shape_4.setTransform(73.8195,9.7356);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF6699","#FF94B8"],[0,1],113.1,44.3,113.1,44.3).s().p("AmqDbIgNgCIgEgBQgIgDgCgEQgEgFACgHQABgGAFgDQAFgDAIABIANADQAOACATgFIAhgKIAcgHQAQgFALgFIAPgIQAJgEAHAEIANgIIARgLIAggSQAIgFAdgUQAbgVANgNQAVgUAKgVQAFgMADgDQAHgJAJACQAKACABAMQAAAGgFAKIAAACQgWArgwAlQgRAOgaAQIguAcQgZARgQAFQgIAEgHgCIAAgBIgSAIIgUAGIg6AQQgNAFgKAAIgVgBgAFXB/QgNgFgOgNIgYgYIghgeQgWgSgLgMQgXgbgMgMIgFgEQgdgYgkgHIgTgDIgTgFQgXgIgDgTQhuAfhhgEQhxgDhagtIgqgUIgTgHQgLgEgGgGQgOgMAAgUQAAgUANgMQALgKANgCQALgCANACIAIACIAJACIATAJIAaAOQBLAnBcAEQBSAEBZgYIAzgOQAdgHAWgBQAhAAA9ARQBEAUAdASQAWANAlAjQAXAVAMANQARAUAJAUQAGAPAJAhIAIAWQAEANABAKQAAAZgVAPQgQAKgeACIgMABQgUAAgPgGgAEzgWIACADIABABIABAAIAAgBIgBAAIAAgBIgBAAIgCgDIgBAAg");
	this.shape_5.setTransform(111.9275,16.7294);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FF6699","#FF94B8"],[0,1],-31.9,-54.9,-32,23.8).s().p("Ah2DuQi2gChthoQgegcgSgUQgZgdgOgYQgSghgFg2QgCgWABhLQAAguABgSIACgOQALgCATABQAYABBtgHQBRgEAzAIQANACBGARQAmAKAdACQgOACgLAKQgNAMAAAUQAAAUAOAMQAGAGALAEIATAHIAqAUQBZAtBxADQBhAEBvgfQADATAXAIIATAFIATADQAkAGAdAZQgDAGgGAHQgLAOgSAHQgfANgogNIgdgKIgLgEIgIgFIgegNIgPgFIgPgBQgIAAgFADQgFAEgBAGIAAABIgBABIgHAHQgHAIgCAKIgEAEQAEgKAAgGQgBgNgKgCQgJgCgHAJQgDAEgFAMQgKAVgVAUQgNANgbAVQgdAUgIAFIggASIgRALIgNAIQgHgEgJAEIgPAIQgLAFgQAFIgbAHIghAKQgTAFgOgCIgNgDQgIgBgFADQgFADgBAGQgCAHAEAFQACAEAIADIAEABQgDAEgDADIgDACQgDAAgCgDgAgpjJIgIgCIAOgCIADAGIgJgCg");
	this.shape_6.setTransform(78.4107,15.2471);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FF6699","#FF94B8"],[0,1],-32,-63.4,-32.1,15.3).s().p("Ah3CZQi1gChthpQgegbgSgUQgZgcgOgYQgSgjgFg1IgBgGIAOAAQAtgBA+AIIBrAPQA5AHBzAHQBKAEAggDQAmgDBQgWQAmAHApABQBhADBvgeQADASAXAJIATAEIAUADQAkAHAdAZQgEAHgFAGQgMAOgRAHQggAOgogNIgdgLIgKgDIgJgFIgegOIgOgFIgPgCQgIAAgFAEQgGADAAAIIgBABIAAAAIgHAHQgHAJgDAKIgEAEQAEgKAAgHQgBgMgJgCQgJgDgHAJQgDAEgGAMQgJAVgVAVQgNAMgcAUQgcAVgIAEIghATIgQALIgNAHQgHgDgKADIgPAIQgKAGgRAEIgbAHIggALQgTAFgOgDIgNgCQgIgBgFACQgGADgBAHQgBAGADAFQADAEAHADIAEABQgCAFgDACIgEACQgCAAgDgCg");
	this.shape_7.setTransform(84.475,22.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FF6699","#FF94B8"],[0,1],-929.1,-49.6,709.3,-49.6).s().p("AmKCmIgOgDIgEgBQgHgDgDgEQgDgFABgGQABgHAGgDQAFgCAIABIANACQAOADATgFIAggLIAcgHQARgEAKgGIAPgIQAKgDAHADIANgHIAQgLIAhgTQAIgEAcgVQAcgVANgMQAVgUAJgVQAGgMADgEQAHgJAJADQAJACABAMQAAAHgEAKIgBABQgVAqgwAlQgSAOgaARIgtAcQgaAQgPAGQgJADgGgCIgBAAIgRAHIgUAGIg6ARQgNAEgLABIgUgBgADehDIgEgEQgdgZgkgHIgUgDIgTgEQgXgJgDgSQhuAehhgDQgpgBgmgHIAEgBQBQgWAsgDIA7AAQAjAAAXgFIAbgGQAQgEALgBIAUAAQAMAAAIgDIAJgDIAHAAIBeABQAlABAMACQAUADAaAJIBBAUIAAAAIAOAOQgQAAgOAJQgSALgBASQgfgBgQABQgaADgRAKQgRANgKAEIgOAEIgBAAIgWgXg");
	this.shape_8.setTransform(114.79,21.0625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FF6699","#FF94B8"],[0,1],173.6,52.5,173.6,52.5).s().p("AAHCSQgrgGhbgVQg+gOgbgRQgPgJgfgaQgcgZgSgJIgfgOQgRgIgIgLQgLgQAHgVQAGgVATgHIAMgDIABgBIAOgEQAKgDARgNQARgLAagCQAQgCAfACQABgSASgMQAOgJAQAAIAGABQAQACAUAKIAgATQBGAnBnAMIA6AGQAkADAXAEQBDALApAhQAYASANAbQAPAbgCAdQgCAigXASQgLAIgRADQgLACgUABQhhAEgsAAQhPgBg9gJg");
	this.shape_9.setTransform(172.3914,24.9244);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FF6699","#FF94B8"],[0,1],-947.2,-39.9,691.2,-39.9).s().p("ABNApQgIgUgYgGQgLgCgJACQgZgPgbgFIgTgDIgTgFIgCgBQAQgCANgHQALgHAGgJIBcgDQA+AEBIgBIAFAAIgDABQgjAJgLAQQgGALgBALIABAJIgGABQgaACgSAKQgQANgKAEIgCgHgAjRgvIAHAAQADAMAJAIQAEAEAFACIgcAFg");
	this.shape_10.setTransform(132.8375,11.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FF6699","#FF94B8"],[0,1],126.6,55,126.6,55).s().p("ALhDXQgjgBg6gGQhFgIgYgBIg/gDQgmgCgYgEQgqgGhRgZQg9gTgmgQQg1gXgngbQgdgUgLgUQgIgQgDgdQgDghACgkIACgQQgMADgNAAIgBgBQgDgNgKgJQgJgKgOgCIAAAAIgIgDIgGgCIgFgDQgKgHgOgBQgPgBgOAHIgHAFIgLgEQgHgCgIAAQgIAAgFAEQgFADgBAIIAAABQgFgDgGgCQgFgCgHgBQgLgBgKAFIgEABQgRAEgJAOQgGAKAAAOIgYAqIgBABQgTAggPATIgNAQIgBADIgcARQgZAQgQAGQgIADgHgCIAAAAIgSAHIgUAGIgeAJIgBACQgMARgdAJQgqANg4gEQghgChCgNQg4gLgagJQgtgOgqgeQhKgzgohRQgRgiACgbQABgQAJgOQAJgOAPgFQAKgCAKACQArgBA9AIIBqAPQA6AHBzAHQBJAEAggDQAogDBQgWIAEgBQBQgWArgDIAqAAIAAAeIAcgEQAHAEAIACQAOADANgFQAKgEAHgHIAEADQAOAKAXABQAHABAGgBIACABIATAEIATADQAcAGAZAQQAJgCALACQAYAGAIAUIACAHQAKgEAQgNQASgKAagDIAGAAIgBgJQABgNAGgKQALgQAjgJIADgBIAAAAQBwgcB1AXQB3AZBdBHIAqAiQAwAUAcAPQA9AiAiAqQATAXAHAZQAIAcgKAXQgKAXgjAUQhDAkhkAAIgNAAgAMwBxIgIAFIANgCIgDgDIgCAAg");
	this.shape_11.setTransform(125.4425,27.3516);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FF6699","#FF94B8"],[0,1],-71.9,-52.9,-72,25.8).s().p("AAQAYQAMgZABgSIAIACIAUADIAGABIADAGQgLgBgMAEQgOAGgHANIgEAJIgCAAgAhBgXIACAAIAAABIAAAAg");
	this.shape_12.setTransform(124.35,12.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#FF6699","#FF94B8"],[0,1],-923.2,-50.7,715.2,-50.7).s().p("AlPCbIgEAAQAKgOgBgQQAOACARgFIAhgLIAcgHQARgEAKgGIAPgIQAKgDAGADIAOgHIAQgLIAEgCIgEAHIgDABQgUAHgIAKIgCADIgFACQgIAHgQAOIgVASIg5AQQgNAEgLABIgVgBgAE+hCIgFgIIAbADQgNAJgHADIgCgHgADVhxIgUgDIgIgCIgBgGQAJgDAIgEQALgHAHgJIACAAQgEAHgBAKQAAAKADAIIgGgBgAg7h5QgpgBgmgHIAEgBQBQgWArgDIAwAAQADAKAHAHIgNgEQgkgOgVAHQgTAGgNAWIgEAAg");
	this.shape_13.setTransform(108.8,22.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#FF6699","#FF94B8"],[0,1],124,53.1,124,53.1).s().p("AL7DqQgigBg7gGQhEgIgZgBIg/gDQglgCgZgEQgqgGhRgZQg9gTgmgQQgbgMgXgNQgHADgHAAQgLAAgVgIIgYgJQgbgLgMgIQgVgOgGgTQgCgIgBgQIAAgmQAAgWgBgHIgIgYQgCgJABgRQABgLACgHIAEgKQAHgNAOgGQALgFAMACIgDgGQgDgIABgKQAAgKAEgHQAEgIAGgFQAOgMAXAAQAMgBAfAFQBAAKBBgNQAcgFA4gPQBbgTBFAXQAZAJAvAaID8CNQAXANALALQAPAQADAQQAaAVATAXQASAXAIAZQAIAcgKAXQgKAXgjAUQhEAkhkAAIgNAAgANLCEIgIAFIAMgCIgDgDIgBAAgACyhjIACAHQAHgDANgJIgagDIAEAIgArSCeQgOgDgUgKIgggPQgvgRgVgMQgXgOgagbQhShSgGhRQgBgaAIgUQAKgZAVgIQANgFATADQALABAWAFIAYAEQAlABAvAGIBrAPQA5AHBzAHQBKAEAggDQAngDBQgWQAmAHApABIAFAAIgCAEQgHAOgGAgIgBADIgCACQgGAGgHARQgIATgLAUQgOAcgbAoIgBACIgEACIgQALIgNAHQgHgDgKADIgPAIQgKAGgRAEIgcAHIggALQgSAFgOgCQABAQgKANIgBACQgOAPgkAIQg5ANg7AEIgcABQgdAAgTgGgAtshLIgDgFIgCgEIgCgBIAHAKg");
	this.shape_14.setTransform(122.7909,25.4905);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FF6699","#FF94B8"],[0,1],-949.4,-40.3,689,-40.3).s().p("AA4AlIgFgHIAbACQgNAJgHADIgCgHgAgwgJIgUgDIgIgCIgBgGQAJgDAIgEQALgHAHgJIACAAQgEAIgBAKQAAAJADAIIgGgBg");
	this.shape_15.setTransform(135,11.7375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FF6699","#FF94B8"],[0,1],126.3,53.1,126.3,53.1).s().p("ALkDqQgjgBg6gGQhFgIgYgBIg/gDQgmgCgYgEQgqgGhRgZQg9gTgmgQQgcgMgXgNQgHADgHAAQgLAAgVgIIgYgJQgbgLgMgIQgVgOgGgTQgCgIgBgQIABgmQAAgWgCgHIgIgYQgCgJABgRQABgLADgHIADgKQAHgNAPgGQALgFALACIgCgGQgDgIAAgKQABgKAEgHQADgIAGgFQAOgMAYAAQAMgBAeAFQBAAKBBgNQAcgFA4gPQBbgTBFAXQAaAJAvAaID7CNQAXANALALQAQAQACAQQAbAVASAXQATAXAHAZQAIAcgKAXQgKAXgjAUQhDAkhkAAIgNAAgAMzCEIgIAFIANgCIgDgDIgCAAgACahjIACAHQAIgDANgJIgbgDIAEAIgAo5CYQi2gChthpQgegbgSgUQgZgcgOgYQgSgjgFg1IAAgGIAOAAQAsgBA/AIIBqAPQA6AHBzAHQA8AEAggCIAAABQAHAKAKAGQANAIAcgBIAggDQAbgEAlgHQBBgOAfgCIAUgCIADAFQAHAPgCAQQgBATgQAUIgeAhIgpAuQgZAcgUAOQgXAQgtASQgrAPgtAMQgrALgaAAIgDACIgDACQgDAAgCgCg");
	this.shape_16.setTransform(125.1028,25.4905);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#FF6699","#FF94B8"],[0,1],126.8,53.1,126.8,53.1).s().p("ALfDqQgigBg7gGQhEgIgZgBIg/gDQglgCgZgEQgqgGhRgZQg9gTgmgQQgbgMgXgNQgHADgHAAQgLAAgVgIIgYgJQgbgLgMgIQgVgOgGgTQgCgIgBgQIAAgmQAAgWgBgHIgIgYQgCgJABgRQABgLACgHIAEgKQAHgNAOgGQALgFAMACIgDgGQgDgIABgKQAAgKAEgHQAEgIAGgFQAOgMAXAAQAMgBAfAFQBAAKBBgNQAcgFA4gPQBbgTBFAXQAZAJAvAaID8CNQAXANALALQAPAQADAQQAaAVATAXQASAXAIAZQAIAcgKAXQgKAXgjAUQhDAkhlAAIgNAAgAMvCEIgIAFIAMgCIgDgDIgBAAgACWhjIACAHQAHgDANgJIgagDIAEAIgAo+CYQi1gChthpQgegbgSgUQgZgcgOgYQgJgQgFgVQB+gdCEALQAtAEBbALIACABIASgBIAcABQAaABAmgDQAzgCAqgIIAngHQAWgDAQABQALAAAGAFIAIAAQAGAAAHAEQANAFAFAGIACAEIAUAJIAGADQgCARgOASIgeAhIgqAuQgYAcgVAOQgWAQguASQgqAPguAMQgrALgaAAIgCACIgEACQgCAAgDgCg");
	this.shape_17.setTransform(125.5778,25.4905);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{x:0.0109,rotation:0,y:-18.2172}},{t:this.shape,p:{x:-0.0274,rotation:0,y:2.3114}}]}).to({state:[{t:this.shape_1,p:{x:3.9109,rotation:0,y:-18.2172}},{t:this.shape,p:{x:3.8726,rotation:0,y:2.3114}}]},1).to({state:[{t:this.shape_1,p:{x:5.4739,rotation:2.2149,y:-18.7481}},{t:this.shape,p:{x:4.6423,rotation:2.2149,y:1.7627}}]},2).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},2).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_12}]},3).to({state:[{t:this.shape_17},{t:this.shape_15},{t:this.shape_12}]},1).wait(17));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-44.6,261.7,93.5);


(lib.musicBtnn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {playAudio:0,muteAudio:6};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(7));

	// drawings
	this.instance = new lib.CachedBmp_81();
	this.instance.setTransform(-44.5,-32.9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_83();
	this.instance_1.setTransform(-38.45,-37.8,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_82();
	this.instance_2.setTransform(-22,-32.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},6).to({state:[]},6).wait(1));

	// button
	this.instance_3 = new lib.CachedBmp_85();
	this.instance_3.setTransform(-59.1,-58.95,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_84();
	this.instance_4.setTransform(-16.95,-16.75,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(191,175,0,0.537)").ss(1,1,1).p("AIPj+IABAAQACAFACAEQAAABAAAAQAAABABAAQAAABABABQAAABAAABQABABAAABQABABAAACQABABABACQAkBUAIBgIAAAAQACAUAAAUQAAAEAAAEQAAACAAABQAADyirCrQirCrjyAAQiVAAh7hCQgXgMgVgPQgMgIgMgIQgTgOgSgPQgPgNgOgPQgBgBgBgBQgCgCgCgBQirirAAjyQAAhEAOg/QADgPAEgPQABgDABgDQAEgNAEgOQAqh4BihiQCMiMC8gaQAEAAADgBQAWgCAXgBQAJgBAJAAQAAAAAAAAIABAAQADAAAEAAQADAAADAAQAbAAAZACQDRARCYCYQABABABABQABACABABQAHAGAGAHQAPAQANAQQACACABACQABABAAAAIAAAAQAlAvAaAzQAAABABABQABACAAABgAHKlqQACADACACAINkDQABACABAD");
	this.shape.setTransform(-0.2,-0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEEE3D").s().p("AjGDxIgBAAIgFgBIhRgQIgFgBIAAAAIgDgBIgBAAIgBgBIAAAAIgEgCQAIgCAJAAIAKgEIADgBQAJgDAUgCIAYgCQALABAJACIAAAAIAJgDIAegIQA8gSAogQQBFgcAzgkQAYgRAcgaIAxgwQAmgjASgYQA5hJARhlQACgLADgGIAAARIABAHIAAAJQAAC7iFCEIgCABIgCACIgBACQgiAhgmAYQgfAVgjAPIgNACIgBAAIgYALIgKAEQg8AShEAAQgYAAgWgCg");
	this.shape_1.setTransform(15.1375,20.7625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBEA34").s().p("Al5GWQgXgMgWgPIgXgRIgcgWIgFgDQB0gLBrgNIAIAEIAAAAIABAAIABABIADABIAAAAIAFABIBRAQIAFABIABAAQAWACAYAAQBEAAA7gSQAZgHAYgKQAjgPAfgVQAmgYAighIABgCIACgCIACgBQCFiFAAi6IAAgJQAVihgWikQgBgNADgFQACgEAEgCIABABIABABIAAAAQAlAvAZAzIADAFIAAAAIAEAJIABABIAAABIABACIABACIABACIABADIABADQAlBTAIBgIAAABIACAnIAAAIIAAAFQAADwisCrQiqCsjxAAQiWAAh7hCg");
	this.shape_2.setTransform(10.3375,11.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF690").s().p("Ag7A4QgTgRAEgeQAEgcAagXQAYgXAegEQAggEATASQATASgFAdQgCAMgGANQgHAOgNAMQgOANgQAHQgNAGgNABIgLABQgXAAgQgPg");
	this.shape_3.setTransform(-34.9251,-37.5678);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF265").s().p("Ak8H0IgegbIgCgCIgEgEQirirAAjxQAAhEAOg/IAHgeIACgGIAJgbQAph5BihhQCNiMC7gaIAIgBQAUgCAXgCIASAAIABAAIAAAAIAHAAIAHAAQAbAAAZACQDRAQCYCZIACACIACACIANANIAcAhIADAEIAAgBQgFACgCAEQgCAFABANQAWCkgWCgIAAgHIgBgRQgLimh5h5QiEiEi8AAIgEAAQicABh3BfQAGgMACgOQAFgdgTgSQgTgRggADQgfAEgYAXQgaAYgEAdQgEAdATASQATASAfgEQAOgCANgGQhBBFgeBSQgcBKAABVQAAC7CFCFQARARARAOIADADIACACICDBHQhsANhzALIAEADIAcAWQgSgNgSgQg");
	this.shape_4.setTransform(-6.2107,-5.5125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E5D206").s().p("Al7G3QgXgNgWgOIAAAAQAWAOAXANgAGolEIABABIAAAAIgBgBgAGhlTIACADIABACIgDgFgAFim1IAAAAIABABIgBgBg");
	this.shape_5.setTransform(10.5375,7.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFEF42").s().p("AiaG2IiChHIgCgCIgDgCQgSgPgRgRQiEiFAAi7QAAhUAbhLQAfhSBAhEQAQgHAOgOQANgMAHgNQB3hgCegBIAEAAQC6AACFCEQB5B6ALCmQgDAGgCALQgRBkg5BJQgSAYgmAkIgxAwQgcAagYARQgzAkhGAcQgoAQg6ASIgfAIIgJADIAAAAQgJgCgLgBIgYACQgUACgJADIgCABIgLAEQgJAAgHACIADACgAHJlZIgDgEIADAEIAAAAg");
	this.shape_6.setTransform(0.225,-1.3375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8E40F").s().p("AgOAFIAYgLIABAAIAOgCQgYAJgZAIIAKgEg");
	this.shape_7.setTransform(15.125,42.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).to({state:[]},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.6,-59.4,118.80000000000001,118.8);


(lib.lightAround_art = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,153,0.188)").s().p("ApzJ0QkEkEAAlwQAAlvEEkEQEEkEFvAAQFwAAEEEEQEFEEgBFvQABFwkFEEQkEEFlwgBQlvABkEkFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.8,-88.8,177.7,177.7);


(lib.heavyBook = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,0,3).p("AO1gKIAEACIAHF8I2hAAIAAmBIAAgFQh3hXh2hZQjtiyADgGIUfAAIJOFwIABACI2XgFAu/BUIHeEnAnhgSIWWAI");
	this.shape.setTransform(0.03,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiWCHIhTgzIAAnJIHTFjIAACZIAADwg");
	this.shape_1.setTransform(-71.825,0.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FE0B5D","#FF6699"],[0,1],-71.6,19.1,72.6,19.1).s().p("ArLAAIAAgEIWWAGIABADg");
	this.shape_2.setTransform(23.425,-1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC99FF").s().p("AnlF4IAAmBIWYAFIgBgDIADADIAIF8gAnlgOQh3hYh2hZQjsixADgHIUfAAIJOFwg");
	this.shape_3.setTransform(0.3981,-0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.heavyBook, new cjs.Rectangle(-97,-38.9,194.1,77.8), null);


(lib.healthBarfill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("EgksAFtIgGAAIgEAAIgUAAQgqAAgdgdQgdgdAAgqIAAoCQAAgpAdgeQAMgMANgGQAZgaAzAAMA2nAAAQAxAAAZAYQAZgTAsgBIQ2AAQBnAEAIAXQACAIgFAXQgHAaAAARIjAH8QAABlhmgBIt1AAQgnAAgYgOQgZAeg3AAg");
	this.shape.setTransform(-0.1,-1,1,1,0,0,0,-248,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.healthBarfill, new cjs.Rectangle(0,-36.5,495.9,73), null);


(lib.head_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// eyes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgqAOQgEgDAAgKQAAgEACgEQAAgBAAAAQAAAAAAAAQAAgBAAABQABAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAEgBACADIACADQADAIgEAKIgBACQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgEgBgAAiAMQgDgBgCgEIgBgHIABgJIABgCQADgEAEABQACgBADADIADAEQAEAKgFAHQgEAEgEAAIgCgBg");
	this.shape.setTransform(0.0139,-13.785);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgqAJQgEgDAAgIIAAgDIACAAIAAgBIAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABAAIAAAAIABAAIAAAAIAAAAQAEgBAEABIAAABIABAAIAAACIAAAAIABAAIAAADIAAACIgBAAIAAABIgCAHIgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgEgCgAAiAIQgDgBgCgFIAAgCIAAAAIAAAAIAAgCIABAAIAAgCIAAAAIAAgBIABgBIACgBIAEgCIACAAIACAAIAEABIABABQABAHgDAEQgEAEgEAAIgCAAg");
	this.shape_1.setTransform(0.0121,-13.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgmAIIgCgBIgEAAIgCgCQgCgDACgCIACgCIAAAAIABAAIAFAAIADABIADgBIAEABIABABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAIAAACIgCACIgEABgAAbADQgCgCABgEIABgBIAEgCIADABIAIgBIABgBIADABIABACQABADgBACIgGACIgIABIgGgBg");
	this.shape_2.setTransform(0.2575,-12.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgqAOQgEgDAAgKIAAgBIACgHQAAgBAAAAQAAAAAAAAQAAgBAAABQABAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQABAAAAAAQAEgBACADIACADIABAGIABAAIAAACIAAABIgBACIgBAFIgBACIgBACQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgEgBgAAiAMQgDgBgCgEIAAgCIgBgFIABgJIABgCQADgEAEABQACgBADADIADAEIABAGQABAGgDAFQgEAEgEAAIgCgBg");
	this.shape_3.setTransform(-0.4389,-13.785);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},7).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},2).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(11).to({_off:false},0).wait(2).to({x:-0.8389},0).wait(2).to({x:-0.4889},0).to({_off:true},2).wait(4).to({_off:false,x:0.2111},0).wait(2).to({x:0.3111},0).wait(3));

	// innerFLame
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFCAC").s().p("AgZB7IgHgBIgEAAIgPgEIgGgDIgCgBIgCgBIAAAAIgDgCIgCgBIgDgCQgKgHgJgIQgLgKgDgHQgEgHgCgLQgEgdALgdQAJgTAOgQIAHgGIAGgEIAdgVQAZgTAOgTQAHgJACgIIADgBQAKgFAKAMQAGAFAGAKIAKARQAFAIAMAOIARAWQAXAigFAnQgCAUgJASQgKASgOANIgJAGQgCACgDACIgCABQgZAKgiAAIgYgBg");
	this.shape_4.setTransform(1.4242,-13.4336);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFCAC").s().p("AgcB8IgFgBIgCgBIgMgDIgBgBIgNgFQgGgEgLgKIgIgJQgTgWAAgjQAAgKABgIIADgJIAGgOQAIgVAcgcIAdgbIAPgLQANgLAMgPIAFgEQADAAADABQACACACADIABAFIADAJQACAHAEAIIAJALIAQASQAXAcAIAQQAMAVADAaQADAigPAXIgIAKQgMAOgKAGIgBAAQgaAGgaACIgPABQgNAAgLgCg");
	this.shape_5.setTransform(1.2831,-13.6199);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFCAC").s().p("AgCB9QgRgBgQgEIgLgDQgQgIgLgOQgKgNgGgQQgGgPAAgRQAAgRADgRQADgRAHgPQAHgQALgNQALgOAPgKQANgJANgHIABgBIAZgUIACgBIADgBIACAAIACACIABACIAEAVIACAHIABADIACADIABABIAAABIAIAOIAJAMQALAMAKAQQAJAPAHAQQAGAQABASIAAARIABAJIgBASIgCAHQgCAKgLAIQgIAFgNAFQgRAGgOADIgDAAQgJACgJAAIgJAAg");
	this.shape_6.setTransform(0.975,-13.7136);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFCAC").s().p("AgcB7QgPgDgMgJQgOgMgLgNQgLgOgEgRQgEgSABgSQAAgRAFgPQAEgRAKgQQAIgOAMgNIADgDIAzgtIAGgDQARAIgCAWQgCALAFAKQAKAWASAOQALAKAJAMQAOASAKAWQAIATAAAUQAAASgLAQIgDACQgNAOgTAEQgNADgOACQgOACgMAAIgJAAQgKAAgJgCg");
	this.shape_7.setTransform(0.815,-13.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFCAC").s().p("AgPB9QgOgCgRgHQgHgDgDgDIgEgEQgQgNgJgSQgMgWABgZQAAgKADgSIAEgSQAHgWAQgWQANgSAVgTIAOgLIANgLIACgBIABgBQACgDAEAAQAGABACAGQADAGgCANQgBAWADAMQAEANAMAMQAIAIAPALIAGAEQAJAIAIAKQAQAWADAZQADAbgNAXQgGAKgIAGIgHAEQgKAFgOACIgKACIgWABQgNAAgLgCg");
	this.shape_8.setTransform(0.4243,-13.7107);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFCAC").s().p("AAGB+QgGAAgUgHQgkgMgPgSQgFgFgEgGQgOgWgBgbQgBgTAEgSQAFgUAKgUIAEgHQALgUAWgUIAMgMIANgLIAHgFIACgBQAFgCAIABIACADQABAFgCAEIgEAJQgFANABAUIABAIQAGAQAUANQAYALALAIQAYASAIAjIACALIAAAMIgBALQgBAGgFANIgCAHQgCAHgDADQgEAEgKADIgTAGIgUADQgLACgJAAIgDAAg");
	this.shape_9.setTransform(-0.1341,-13.3771);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFCAC").s().p("AAVCAQgTgBgRgFQgFAAgQgGQgTgGgGgGQgLgLgIgQQgIgQgEgRQgFgRAAgRQAAgQAEgRQAFgRAJgOIASgbQAKgNALgMQANgMAPgJIAFACQAJAWgGAZQgFAUAPAQQAOAOATAKQAUAJAPAPQAMANAGARQAHASgBAUQgBAVgQAOQgHAIgKADQgTAIgVAAIgDAAg");
	this.shape_10.setTransform(-0.5868,-13.6235);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFCAC").s().p("AgSB7QgNgFgNgIQgMgGgKgJIgMgMQgIgJgFgKQgGgNgEgOQgDgMABgOQAAgNADgOIAGgdQAEgMAHgMQAHgLAKgKQAJgLAMgJQAKgIALgEQAHgDAHgCIADABQAFAHgFAJIgGARIgDARQgBAGACAEQAFAKAJAIIAGAHIAWAOIAVANQAKAIAJAIQAJAJAHAKQAHALAFALQAFALADANQACANgDANQgDAPgPAIQgLAGgNADQgNAAgMACIgaABQgOAAgNgFg");
	this.shape_11.setTransform(-1.1886,-13.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFCAC").s().p("AgXB8QgMgDgMgFQgMgFgMgKQgLgJgIgNIgHgQQgDgOABgOQABgOAEgPQAEgNAHgNIALgYIAKgcQAFgNACgOIACgKQACgQAQgDIAHAAQAFADAEAFQAEAGACAGQACAKAGAJQAGALAJAKQAKALAMAJQAJAIAIAKIAPATIAQAUQAIALAFANQAGANABAOQABANgCAOQgCAOgKAJQgMAKgOAEQgNADgNAAQgPACgPAAQgOAAgOgFg");
	this.shape_12.setTransform(-1.0193,-13.7333);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFCAC").s().p("AgVCAIgMgBQgVgFgSgMQgIgFgEgJQgJgVADgYQADgWAHgUIAMgoQAGgVgDgWQgDgSAEgSIADgMQAPgMARAIQAQAIALAOIATAYIAXAbIAVAdQAJAOAHANQAHAQAEAQQAEAQAAARQAAARgHAPQgIAQgOAGIgKAEIghADQgKABgKAAQgKAAgLgCg");
	this.shape_13.setTransform(-0.274,-13.6529);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFCAC").s().p("AAJCCIgGgBIgHAAIgLgCIgGgBIgHgBIgFgBIgHgCIgGgCIgHgCIgJgEIgIgFIgEgDIgFgFIgEgEIgCgGIgFgKIgDgMIgBgFIAAgHIAAgGIABgHIABgGIACgHIACgGIADgKIAEgLIAFgKIACgEIAEgGIAFgKIAFgKIACgDIABgFIACgGIAEgLIACgLIABgGIAAgLIAAgJIgBgJQAAgGACgFQACgEAEgEQABgCAEAAQAEgCADACIALAEIAJAGIAGAFIAHAHIAIAIIAEAFIAFAEIAEAFIAFAFIAEAFIAIAHIAHAIIAHAIIAEAGIAFAFIADAGIAEAFIAEAGIACAGIAEAHIACAGIACAFIACAHIADAHIABAGIABAHIABAHIAAAGIAAAHIAAAMIgBALIgCAIIgEAJIgDAHIgEAFIgEAFIgFAFIgEAEIgJAFIgIAEIgKADIgLACIgHABIgGABIgHAAg");
	this.shape_14.setTransform(0,-13.4375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFCAC").s().p("AgqB9QgQgEgOgMQgNgLgFgQQgGgQABgRQABgRAHgOQAHgQALgNIATgcQALgPAEgRQAFgQAAgRQAAgOAIgKIAGAAQAQAGAMANQAMAMANAKQANAKAKAPQAKAOAHAQIAMAdQAGAOABAQQABATgGARQgEAQgIAPQgHAPgQAIQgPAHgQAEIghABQgRAAgRgEg");
	this.shape_15.setTransform(0.9177,-13.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFCAC").s().p("AgRB+IgXgCQgMgDgJgEQgLgGgNgPIgIgKQgPgXADgiQADgaAMgVQAIgQAYgcIAPgSIAJgLQAFgIABgHIADgJIABgFQACgDACgCQADgBADAAIAFAEQAMAPAOALIAOALIAdAbQAcAcAJAVIAFAOIADAJQABAIAAAKQAAAjgTAWIgIAJQgLAKgGAEIgNAFIgBABIgMADQgWAGgNAAIgDAAIgPgBg");
	this.shape_16.setTransform(1.2169,-13.5229);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_4}]},2).wait(1));

	// outerFLame
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FD3838").s().p("AgpDNIgNgCIgHAAIgYgIIgJgEIgEgCIgDgCIgBAAQgDAAgCgDIgDgCIgEgDQgSgMgOgNQgSgQgGgMQgHgMgCgSQgHgwATgwQANghAYgZIAMgKIAKgIQAXgOAYgTQAqghAYgfQALgPAFgMIAEgDQAQgIASATQAJAKAJAQIARAcQAIANAVAXQAUAYAIANQAmA4gIBCQgEAhgPAdQgQAegXAVQgJAIgHADQgCADgGADIgDACQgrARg5AAQgSAAgTgBg");
	this.shape_17.setTransform(2.1761,-21.8245);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FD3838").s().p("AgvDNIgJgCIgCAAQgNgDgIgEIgBAAQgPgFgHgEQgKgGgSgRIgNgOQgggmAAg6QAAgRACgMIAFgPIAJgZQAOghAvgvQAfgfAQgNIAZgUQAWgSAVgYQAEgFAEgBQAEgCAFADQAFADACAFIACAIIAFAQQADALAIAMIAPATIAZAeQAmAuAOAbQAUAkAEArQAGA4gZAmIgNARQgVAXgQAJIgCABQgqAKgsADIgaACQgVAAgSgEg");
	this.shape_18.setTransform(0.9831,-22.0855);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FD3838").s().p("AgEDPQgbgCgbgHIgSgFQgbgNgSgWQgRgXgKgaQgKgZAAgcQAAgdAFgcQAGgcALgZQALgaASgXQATgXAZgQQAVgOAWgMIABgCIAqghIAEgCQACgCADAAIADABIADACIABAEIAHAiIAEANIACAFIACAEIACACIABACIAMAWIAPAUQATAVAQAaQAQAZAKAbQAKAbACAeQABANAAAOQABAHAAAJIgCAdIgCAMQgEARgTANQgMAIgWAJQgdAKgXAFIgFAAQgPAEgQAAIgOgBg");
	this.shape_19.setTransform(0.475,-22.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FD3838").s().p("AgvDNQgYgFgVgPQgXgUgSgXQgSgXgHgcQgGgdABgeQABgcAHgZQAIgdAPgaQAOgYAUgVIAFgGIBVhJIALgHQAcAPgEAkQgDARAIASQARAkAdAYQATAQAOATQAYAfAQAlQANAeABAiQAAAfgTAZIgEAEQgWAXgfAHQgXAFgXADQgXADgVAAIgPABQgPAAgQgDg");
	this.shape_20.setTransform(0.194,-22.2583);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FD3838").s().p("AgaDPQgXgEgcgLQgMgGgEgDIgHgHQgagWgPgeQgUgkABgpQAAgRAFggIAHgcQALglAbglQAWgdAjggQANgMAKgHIANgJIAIgIIADgCIACgCQAFgFAGABQAJABAEAKQAEAJgCAWQgDAlAGAUQAHAVAUAVQANANAZASIAJAHQAPAMAOASQAbAkAFAqQAFAtgWAlQgLASgNAJIgLAGQgRAJgXAEIgRACQgTACgRAAQgWAAgTgDg");
	this.shape_21.setTransform(-0.4303,-22.2308);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FD3838").s().p("AAKDRQgKAAgigMQg7gUgagdQgHgIgHgLQgWglgDgsQgCggAIgeQAHghARghQACgGAEgFQAUgjAkggIApgmIALgIIAEgCQAIgDAOABIADAFQACAIgDAIIgHAOQgKAWADAgIADAOQAIAbAjAUQAnAUASANQAnAdAPA7QACAJABAJIgBAUIgBASQgCAKgJAVQAAAGgCAHQgEAKgFAGQgHAGgPAFIggALIgiAFQgUADgOAAIgEAAg");
	this.shape_22.setTransform(-1.3542,-21.676);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FD3838").s().p("AAiDUQgegCgegHQgIAAgbgKQgegLgKgJQgTgSgNgbQgNgbgIgcQgIgcAAgdQAAgaAIgdQAHgbAPgYIAfgsQAPgXAUgSQAVgUAZgQIAHAEQAQAlgKAoQgIAhAZAaQAYAZAfAQQAgAPAZAZQAVAVAKAcQALAfgCAgQgCAkgZAYQgNAMgQAGQggAMgiAAIgGAAg");
	this.shape_23.setTransform(-2.0852,-22.1214);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FD3838").s().p("AgfDMQgWgJgVgMQgTgLgRgOQgLgJgJgLQgOgQgIgRQgKgVgFgWQgFgWAAgWQABgWAEgYQAFgYAGgXQAGgVAMgUQAMgRAPgSQAQgRATgOQARgOATgHQALgFAMgDIAEACQAJALgIAPQgHAOgDAOQgEAPgBAOQgBAIADAIQAIARAPANIAKAKQARANAUAMIAjAWQARAMAOAOQAPAPAMAQQALASAJATQAIATAFAWQAEAVgFAVQgGAagYAMQgTAKgWAEQgWABgTADQgWACgVAAQgYgBgWgHg");
	this.shape_24.setTransform(-3.0884,-22.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FD3838").s().p("AgnDOQgUgFgTgIQgVgJgTgQQgTgPgMgVQgIgOgFgNQgEgXACgYQABgYAHgYQAGgWALgWIATgoQAKgXAHgXQAIgWADgXIADgQQAEgbAagFQAFgBAGACQAKAEAGAJQAHAJADALQAEARAIAOQAMATAPAQQAQASATAPQAQAOANAQIAZAfIAbAiQANASAJAWQAJAWABAWQACAXgDAWQgDAXgRAPQgUASgXAFQgVAGgWAAQgZADgZAAQgYAAgXgIg");
	this.shape_25.setTransform(-2.8055,-22.2821);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FD3838").s().p("AgkDUIgUgDQgjgHgegUQgNgIgGgPQgPgkAGgnQAFgkAKgiIAVhCQAKgjgFgkQgFgeAGgeIAFgUQAZgVAdAOQAaANASAXIAhApIAmAtQARAWARAZQAPAXAMAXQALAZAHAbQAGAaAAAdQAAAcgMAaQgMAZgYALIgQAGIg2AFQgQADgQAAQgSAAgUgEg");
	this.shape_26.setTransform(-1.5607,-22.1467);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FD3838").s().p("AAPDXIgLgBIgKgBIgTgCIgKgBIgLgDIgKgCIgLgDIgKgDIgLgEIgQgHIgMgHIgHgGIgIgIIgGgHIgFgKIgIgQQgCgJgCgKIgBgJIgBgLIABgLIACgLIABgKIACgLIADgKIAGgRIAHgTIAIgQIADgHIAGgKIAKgRIAIgQIACgFIADgJIAEgKIAFgSIAEgRIACgLIAAgSIgBgQIgBgOQAAgJADgJQADgHAGgGQAEgEAFAAQAGgCAGACIARAGIAQALIAKAJIALALIAOANIAIAIIAHAHIAHAIIAHAIIAIAIIANANIAMANIALANIAHAJIAIAJIAGAKIAGAJIAGAKIAEAKIAFAKIAEAKIAEAKIAEALIADALIACALIACAMIABALIABALIAAALIgBAUIgBASIgEAMIgGARIgFAKIgFAJIgHAIIgIAIIgJAGIgOAJIgNAHIgQAFIgUAEIgKABIgKABIgMAAg");
	this.shape_27.setTransform(-1.15,-21.7944);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FD3838").s().p("AgODWQgcgBgdgGQgagHgWgTQgWgTgJgbQgKgaACgcQACgcALgXQANgaARgXIAgguQARgZAIgcQAIgcAAgbQAAgXANgRIAKAAQAbALAUAUQAUAUAWARQAVARAQAYQARAYAMAaIAUAwQAKAYABAbQACAegJAeQgIAZgNAaQgMAZgaAMQgYAMgbAGQgaADgWAAIgIAAg");
	this.shape_28.setTransform(0.3857,-22.0964);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FD3838").s().p("AgdDRIgmgEQgVgEgOgIQgSgJgWgZIgNgRQgZglAGg4QAEgrAUglQAOgbAmguIAZgeIAPgSQAIgMADgMIAFgQIACgIQACgFAFgCQAFgDAEABQAEABAEAFQAVAYAWATIAZATQAQAOAfAeQAvAvAOAiIAJAZIAFAPQACAMAAAQQAAA7ggAlIgNAOQgSASgKAFQgHAEgPAFIgBABQgIADgNADQgkAJgWAAIgDAAIgbgBg");
	this.shape_29.setTransform(0.9169,-21.9187);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17,p:{x:2.1761,y:-21.8245}}]}).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_20}]},2).to({state:[{t:this.shape_21}]},2).to({state:[{t:this.shape_22}]},2).to({state:[{t:this.shape_23}]},2).to({state:[{t:this.shape_24}]},2).to({state:[{t:this.shape_25}]},2).to({state:[{t:this.shape_26}]},2).to({state:[{t:this.shape_27}]},2).to({state:[{t:this.shape_28}]},2).to({state:[{t:this.shape_29}]},2).to({state:[{t:this.shape_17,p:{x:1.2261,y:-21.7745}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.3,-43.7,40.7,43.400000000000006);


(lib.glowMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,241,142,0.467)").s().p("AGRVOQgtgJg3gbIhfgxQhUgriCgtQiTgxhIgbQg6gVgjgSQgxgaghgfIgPgOQgJgIgIgEQgLgFgQgBIgcgBQhOgChGgqQhGgrglhEQgkhDgHhkQgCgnADiLQACg6gCh+QgBh5AChAQABgxAGhPIAIiAQAFhcAAhyQAAhEgDiJIgGlbQgChBACgkQACg4AIgsQAWhxBEhBQAtgrBEgVQA8gSBHACQA4ABBLANICCAaQBPAPDRAaQC3AWBpAYQBMASA1AXQBCAeArAtQAyA0AaBSQAUBBAHBbQAEBAABBtQAAB+ACAvQACAxAGBFIAKB1QAVEBgHFaQgEDKgQGTQgCBJgEAlQgIA9gSAuQgnBfhhA1QhHAmhIAAQgcAAgbgFgAihhnQgSG0ADCZQBPANBgAiQA2ATBzAwQAJjDACirQABiVgFhlIgYlBQgOjAAHiAQiVgbidgJQAPDbgOFzg");
	this.shape.setTransform(-0.0146,-0.0299);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.glowMC, new cjs.Rectangle(-78.9,-136.3,157.8,272.6), null);


(lib.flameMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFCAC").s().p("AgZB7IgHgBIgEAAIgPgEIgGgDIgCgBIgCgBIAAAAIgDgCIgCgBIgDgCQgKgHgJgIQgLgKgDgHQgEgHgCgLQgEgdALgdQAJgTAOgQIAHgGIAGgEIAdgVQAZgTAOgTQAHgJACgIIADgBQAKgFAKAMQAGAFAGAKIAKARQAFAIAMAOIARAWQAXAigFAnQgCAUgJASQgKASgOANIgJAGQgCACgDACIgCABQgZAKgiAAIgYgBg");
	this.shape.setTransform(0.0242,0.0164);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFCAC").s().p("AgcB8IgFgBIgCgBIgMgDIgBgBIgNgFQgGgEgLgKIgIgJQgTgWAAgjQAAgKABgIIADgJIAGgOQAIgVAcgcIAdgbIAPgLQANgLAMgPIAFgEQADAAADABQACACACADIABAFIADAJQACAHAEAIIAJALIAQASQAXAcAIAQQAMAVADAaQADAigPAXIgIAKQgMAOgKAGIgBAAQgaAGgaACIgPABQgNAAgLgCg");
	this.shape_1.setTransform(0.8831,-0.6199);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFCAC").s().p("AgCB9QgRgBgQgEIgLgDQgQgIgLgOQgKgNgGgQQgGgPAAgRQAAgRADgRQADgRAHgPQAHgQALgNQALgOAPgKQANgJANgHIABgBIAZgUIACgBIADgBIACAAIACACIABACIAEAVIACAHIABADIACADIABABIAAABIAIAOIAJAMQALAMAKAQQAJAPAHAQQAGAQABASIAAARIABAJIgBASIgCAHQgCAKgLAIQgIAFgNAFQgRAGgOADIgDAAQgJACgJAAIgJAAg");
	this.shape_2.setTransform(0.575,-0.7136);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFCAC").s().p("AgcB7QgPgDgMgJQgOgMgLgNQgLgOgEgRQgEgSABgSQAAgRAFgPQAEgRAKgQQAIgOAMgNIADgDIAzgtIAGgDQARAIgCAWQgCALAFAKQAKAWASAOQALAKAJAMQAOASAKAWQAIATAAAUQAAASgLAQIgDACQgNAOgTAEQgNADgOACQgOACgMAAIgJAAQgKAAgJgCg");
	this.shape_3.setTransform(0.415,-0.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFCAC").s().p("AgPB9QgOgCgRgHQgHgDgDgDIgEgEQgQgNgJgSQgMgWABgZQAAgKADgSIAEgSQAHgWAQgWQANgSAVgTIAOgLIANgLIACgBIABgBQACgDAEAAQAGABACAGQADAGgCANQgBAWADAMQAEANAMAMQAIAIAPALIAGAEQAJAIAIAKQAQAWADAZQADAbgNAXQgGAKgIAGIgHAEQgKAFgOACIgKACIgWABQgNAAgLgCg");
	this.shape_4.setTransform(0.0243,-0.7107);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFCAC").s().p("AAGB+QgGAAgUgHQgkgMgPgSQgFgFgEgGQgOgWgBgbQgBgTAEgSQAFgUAKgUIAEgHQALgUAWgUIAMgMIANgLIAHgFIACgBQAFgCAIABIACADQABAFgCAEIgEAJQgFANABAUIABAIQAGAQAUANQAYALALAIQAYASAIAjIACALIAAAMIgBALQgBAGgFANIgCAHQgCAHgDADQgEAEgKADIgTAGIgUADQgLACgJAAIgDAAg");
	this.shape_5.setTransform(-0.5341,-0.3771);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFCAC").s().p("AAVCAQgTgBgRgFQgFAAgQgGQgTgGgGgGQgLgLgIgQQgIgQgEgRQgFgRAAgRQAAgQAEgRQAFgRAJgOIASgbQAKgNALgMQANgMAPgJIAFACQAJAWgGAZQgFAUAPAQQAOAOATAKQAUAJAPAPQAMANAGARQAHASgBAUQgBAVgQAOQgHAIgKADQgTAIgVAAIgDAAg");
	this.shape_6.setTransform(-0.9868,-0.6235);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFCAC").s().p("AgSB7QgNgFgNgIQgMgGgKgJIgMgMQgIgJgFgKQgGgNgEgOQgDgMABgOQAAgNADgOIAGgdQAEgMAHgMQAHgLAKgKQAJgLAMgJQAKgIALgEQAHgDAHgCIADABQAFAHgFAJIgGARIgDARQgBAGACAEQAFAKAJAIIAGAHIAWAOIAVANQAKAIAJAIQAJAJAHAKQAHALAFALQAFALADANQACANgDANQgDAPgPAIQgLAGgNADQgNAAgMACIgaABQgOAAgNgFg");
	this.shape_7.setTransform(-1.5886,-0.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFCAC").s().p("AgXB8QgMgDgMgFQgMgFgMgKQgLgJgIgNIgHgQQgDgOABgOQABgOAEgPQAEgNAHgNIALgYIAKgcQAFgNACgOIACgKQACgQAQgDIAHAAQAFADAEAFQAEAGACAGQACAKAGAJQAGALAJAKQAKALAMAJQAJAIAIAKIAPATIAQAUQAIALAFANQAGANABAOQABANgCAOQgCAOgKAJQgMAKgOAEQgNADgNAAQgPACgPAAQgOAAgOgFg");
	this.shape_8.setTransform(-1.4193,-0.7333);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFCAC").s().p("AgVCAIgMgBQgVgFgSgMQgIgFgEgJQgJgVADgYQADgWAHgUIAMgoQAGgVgDgWQgDgSAEgSIADgMQAPgMARAIQAQAIALAOIATAYIAXAbIAVAdQAJAOAHANQAHAQAEAQQAEAQAAARQAAARgHAPQgIAQgOAGIgKAEIghADQgKABgKAAQgKAAgLgCg");
	this.shape_9.setTransform(-0.674,-0.6529);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFCAC").s().p("AAJCCIgGgBIgHAAIgLgCIgGgBIgHgBIgFgBIgHgCIgGgCIgHgCIgJgEIgIgFIgEgDIgFgFIgEgEIgCgGIgFgKIgDgMIgBgFIAAgHIAAgGIABgHIABgGIACgHIACgGIADgKIAEgLIAFgKIACgEIAEgGIAFgKIAFgKIACgDIABgFIACgGIAEgLIACgLIABgGIAAgLIAAgJIgBgJQAAgGACgFQACgEAEgEQABgCAEAAQAEgCADACIALAEIAJAGIAGAFIAHAHIAIAIIAEAFIAFAEIAEAFIAFAFIAEAFIAIAHIAHAIIAHAIIAEAGIAFAFIADAGIAEAFIAEAGIACAGIAEAHIACAGIACAFIACAHIADAHIABAGIABAHIABAHIAAAGIAAAHIAAAMIgBALIgCAIIgEAJIgDAHIgEAFIgEAFIgFAFIgEAEIgJAFIgIAEIgKADIgLACIgHABIgGABIgHAAg");
	this.shape_10.setTransform(-0.4,-0.4375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFCAC").s().p("AgqB9QgQgEgOgMQgNgLgFgQQgGgQABgRQABgRAHgOQAHgQALgNIATgcQALgPAEgRQAFgQAAgRQAAgOAIgKIAGAAQAQAGAMANQAMAMANAKQANAKAKAPQAKAOAHAQIAMAdQAGAOABAQQABATgGARQgEAQgIAPQgHAPgQAIQgPAHgQAEIghABQgRAAgRgEg");
	this.shape_11.setTransform(0.5177,-0.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFCAC").s().p("AgRB+IgXgCQgMgDgJgEQgLgGgNgPIgIgKQgPgXADgiQADgaAMgVQAIgQAYgcIAPgSIAJgLQAFgIABgHIADgJIABgFQACgDACgCQADgBADAAIAFAEQAMAPAOALIAOALIAdAbQAcAcAJAVIAFAOIADAJQABAIAAAKQAAAjgTAWIgIAJQgLAKgGAEIgNAFIgBABIgMADQgWAGgNAAIgDAAIgPgBg");
	this.shape_12.setTransform(0.8169,-0.5229);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{x:0.0242,y:0.0164}}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape,p:{x:1.0242,y:-0.4336}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-13.7,24,26.299999999999997);


(lib.Ember = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {fireFall:0,burn:9,burnEnd:23};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		playSound("fireOnly");
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(14).call(this.frame_23).wait(7));

	// fire
	this.instance = new lib.CachedBmp_70();
	this.instance.setTransform(-38.35,-37.1,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA526").s().p("AiHClQgegHgmgkQgMgNgFgHQgIgMAAgNQAAgEADgDQAEgEAIABQAKABAUAIQAUAHAKABQAHABAGgCQAOgHAAgUQAAgQgHgJQgGgHgNgIIgUgNQALgDANgFIAfgRIARgFQgHgXAFgXQAHgeAkgmQANgMAHgFQAMgIAMAAQAFAAADADQAEAEgBAIQgBAKgIAUQgHATgBALQgBAGACAHQAHAOATAAQAQAAAJgIQAHgFAIgNIANgUQADAKAGANIARAgIAFARQARgEARABQAeACArAeQAOAJAFAHQALAKABAMQABAFgDAEQgDAEgIAAQgJAAgUgEIABAIIgHABQgJAKAAALQADAUgEAJQgFAKgWAFIgoAJIgkAIIgwAPQgqAMgwgBQgNAIgLADIgBgBQgJACgJAAQgKAAgLgCg");
	this.shape.setTransform(0.0028,-0.0074);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6424").s().p("AiWEKIgQgFQgtgTgegmQgLgMgUghQgTgegNgOQgMgNgKgDQgSgHgOANIAAAEQgGACgGgCQgEgBAAgDIACgDIACgIQACgHAFgFQAWgaAigFQAhgEAfAQIAWANQAIAFAEgBQADAAAEgDQACgCgBgDQgOgSgMgJQgPgPgCgGQgCgCAAgDQACgFAGAAIAKAAQAFABALgDQAfgJATgGQgDgWAGgUIAEgQQAUgsAlgfQANgKAggVQAegSAOgNQAMgMADgKQAHgTgMgOIgEABQgCgGACgHQABgEACAAIADADIAIACQAHACAFAFQAaAVAGAjQADAhgQAfIgNAVQgEAJAAAEQAAADADADQACADADgBQASgOAJgMQAPgPAGgDQACgCADABQAFABABAHIgBAKQgBAFADAKQAIAfAIATQAKgCAMACIAPACQAwANAjAgQALAKAaAdQAXAbAPAMQANALALACQATAEAMgPIgBgEQAGgDAGABQAEAAABADIgCAEIgBAIQgBAIgFAFQgRAdghAKQggAJghgMIgXgJQgJgDgEABQgDAAgDADQgCAEACACQAQAPANAIQAQAMAEAGQABABAAAAQABABAAABQAAAAAAABQAAAAAAABQAAAGgGAAQgEABgGAAQgFAAgKAEQgiAPgRALIgOAJIABABQgmgCgmAKIjIAqIgBgBIgEABIgKABQgMAAgMgEg");
	this.shape_1.setTransform(0,0.0036);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDFFCE").s().p("AkvFrIgEAAIgCgGQgDgdAOgjQAIgTAYgqQAwhUAXhNIAYhSQAPgwATgfQAZgnAdAFQANACASAQQAiAcAMATIAKAWQAGAOAFAHQAJANAhAcQAcAZAHAVIAEAWQADAPADAHQAEAOAPAOIAZAYQAtAnAjAzQAaAmAIAiIgRgSIgEgLQgFgQgXgbQgxg4gXgTIgegcQgRgRgEgRIgDgWQgCgNgDgIQgGgPgWgNIgjgWQgNgKgMgTIgXgjQgSgYgbgTQgHgFgGAAQgIAAgIAJQgJALgGASIgHAgQgLAwgPAqQgSAyg4BoQgGAMgEAKIgBAEIgYBCIgDAGIgDAOIAAAEQgCAEACAHIAAAIQgRgEgSADgADsCDQgPgBgMgHIADAAQgOAAgNgHQgMgIgOgPIgVgbQgIgJgMgLIgCgBQgagKgHgFQgggRgfgwQgggzgDgiQgBgMACgRIADgeQACgXgCguQgBgiAIgUQAHgUAjgaQATgQAMABQAJAAASAJQAGACAKAAIARABQAhAEAVAbQALAWAIAJQAHAHALAFIATAJQApATAUAbIAAABIAAABQAFASABAPQAGARgDAUQgCAJgGAOIgJAWQgGAQgFAYIgQBEIgIAvQgBAZABAMIABARQgBALgJAGIAEAGIACADIgLABIgHAAg");
	this.shape_2.setTransform(-0.35,-31.1633);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhOEyQgoAAgXgKQgZgLgWgcQgTgXgdg0IgMgYIgDgCQgEgEgBgIIAAgIQgBgHACgEIAAgEIADgOIADgGIAXhCIACgEQAEgKAGgMQA3hnATgyQAPgqALgxIAHggQAGgSAJgLQAHgJAIAAQAGAAAIAFQAbATASAYIAVAjQAOAUANAKIAjAWQAVANAHAPQADAIABANIAEAWQAEARAQARIAfAcQAXATAwA3QAXAbAGAQIAEALQAFAZgNAYQgEAJgJALIgPATQgQAegLAOQgSAWgpASQhjArhsAAIgFAAg");
	this.shape_3.setTransform(-1.64,-9.1739);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFA526").s().p("ABNGcIgKgLQgIgigbgmQghgzgtgnIgagYQgOgOgFgOQgCgIgDgOIgEgXQgHgUgcgZQghgegJgMQgFgIgGgOIgMgVQgMgSghgcQgTgQgMgDQgegEgYAnQgTAdgPAwIgYBTQgYBNgvBVQgYAqgIATQgOAiADAeIACAGQgRADgNAIQABgIgDgJQgFgMgKgMIgVgRQgNgLgHgIQAVg6gGhAQgCgVADgHQAEgIAKgGIASgHQBAgXAug1QAigoAahCQAwh2ABiBIAAhDQABgnAJgbQAeAvAlAmQAYAYARgIQAMgGgBgWIgDgkQABgPAMgTIAGgIIADACQAIACAHgBQAGgDAJgKQAKgKAGgDQAHgEAQAAIAIAAIAGAAIA1AAQAMAAAFgBQAFgBAMgHIANgIQAIgEADgHQADgGgCgJIAIACQAtAJARgXQAOArgJBRQgLBaAHAkIANAzQgTgbgpgTIgTgJQgLgFgHgIQgIgJgLgVQgUgbghgFIgRAAQgKAAgGgCQgSgJgJAAQgMgBgUAQQgiAagIAUQgIAUABAiQACAugCAXIgDAeQgCAQABANQADAiAhAyQAfAxAfARQAIAFAaAJIACABQAMAMAHAJIAWAbQAOAPAMAHQAMAIAOAAIgEAAQANAGAPACQAKABAIgCIAEADQAFATACAXQABANABA+QACBaAmAoQgPgMgWgcgADqkIQAAgPADgGQAEgGAMgHIAlgTQAWgKAPgJQAlgZAZgjQABAEgBASQAAANAEAHQAFALAQAFQAXAGArgOQAYgIALgIQALgIANgRQAPgVAHgGQAPADAHAaQAGAYAAAOQgBANgGAQQgDAIgJASQgIANgEAEQgGAHgUAJIgJAEQgEgMgQgKQgfgTgkAGIgeAIQgSAGgMgBQgEAAgCgCIgDgFQgDgIgIgFQgIgDgJAAQgGgBgLACIgRACIgaAEQgPADgOAOQgMALgDALIgBgKg");
	this.shape_4.setTransform(18.9518,-38.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6424").s().p("AlTLAIgPgFQgtgTgfgmQgKgMgUghQgTgegNgOQgMgNgKgDQgSgHgPANIABAEQgGACgGgCQgEgBAAgDIACgDIACgGIgCABQgfAOgVgFQgegHgWgyQgYg2ACgiQABgRAHgZIANgqQANg1gOgxQgIgcAAgLQgCgWANgLQAIgGAMgBQALAAAKAFQAOAHASAVQAYgCANghIAIgZQAFgPAGgJQAIgMANgEQAOgFAKAHQASgvAGgvQgLgLgfgEQgggFgLgLQgKgLAAgRQABgQAKgNQANgSAmgSQATgJAJgFQAPgJAKgLQAOgQAIgeIAMg1QALgpAkgwQATgbASgJQAMgGAOAAQAOABAKAIQAKAJAAAOQAAAPgLAHIAhAvQAbgbAIgTQAFgOgDgOQgDgQgLgIQgEAKgMABQgMAAgIgIQgKgMAEgTQgPgBgiAGQgfAEgSgEQgTgDgJgMQgJgNAAgYQgCg+AcghIAJgKIAIgLQAHgLACgeQACgdAJgMQAJgNASgDQARgEARAGIAUAHQAMADAIgCQAFgBAGgEIALgFIANgCIANgBIAOgDIAOgBQAOAAAMALQALAJAGAOQAIATAAAnQAAAigMALQgFAEgIAEIgFAMQgFAPgBAJQgBAYAcAgQAgAlAFASQAbgYAlgFQAkgFAgAPIAMhHQADgTAJgMQALgPANAFQANAEAGAYQATBFAHAlQAFAbACAZQAMgEANAIQAMAIAHAOQAEAKAGAAQACABAFgEQAugiARgTIAOgQIAOgQQARgRAcgQQA1gdAjAIQAZAGAQAXQAPAXgDAZQAIgFAKgLIAQgSQAeggAsgDQAagCAOALQAMAJAJAdIAPA4QAOA5gBAjQAAA1gbAjQgTAYgoAWQg1AchVAXIghAKQgSAGgLAJQgPAPgIAFQgRAKgMgHQgHgEgFgMIgIgVQgJgTgbgIQgNgEgigDQgygHgXgaQgcghAPhKIADgXQABgNgEgJIgIgMIgHA+QgFAqADAbQACAOALAnQAJAgAAAUQABAWgHAfQgKAigDASQgDAQgEApQgEAkgFAVIgLAmIgEATIADgBQAKgCAJAJQAIAJgBALQgBALgJAIQgHAHgKADIABAEIAIAnQACAQgCAfQgBAfACAPQADAaAMATQAOAWAVAGQAJADAVADQARAEAFALQADAKgFAKQgFAJgJAHQgbAWgpAGIgHABIgLAEQgdAIgegJQgWgCgHgJQgIgDgEABQgDAAgDADQgCAEABACQARAPAMAIQARAMAEAGQABABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAGgHAAQgDABgHAAQgFAAgKAEQghAPgQALIgOAJIAAABQglgCgmAKIjJAqIgBgBIgEABIgKAAQgNAAgMgDgAnMHqQABAIADAEIAEACIALAYQAdA0ATAXQAXAcAZALQAXAKAoAAQBvABBlgsQApgSASgWQALgOAPgeIAPgTQAJgLAFgJQAMgYgFgZIARASIAKAMQAWAbAQAMQgngogChaQAAg9gCgOQgCgXgFgSIgDgEIgDgDIgEgGQAJgGABgLIgBgRQgBgMACgZIAHgvIAQhFQAFgYAGgQIAKgVQAFgOACgJQAEgUgHgRQgBgPgFgSIAAgBIAAgBIgOgyQgHglALhZQAKhRgPgrQgQAWgugJIgHgCQACAJgEAHQgDAGgHAFIgNAHQgNAHgEABQgGACgMAAIg1AAIgFAAIgIAAQgRAAgHADQgFADgKALQgJAJgHADQgHACgHgDIgEgCIgFAJQgMASgBAPIADAlQABAVgNAGQgRAJgYgYQglgngegvQgIAbgCAnIAABDQAACBgwB3QgaBBgjApQguA1hAAWIgSAIQgJAFgEAIQgEAHACAVQAGBAgVA7QAHAIANAKIAVASQALALAEAMQAEAJgBAIQANgHAQgEIAEAAIANgBQALAAALACgAFIkaQgOAJgWALIglASQgNAIgDAFQgEAGAAAPIABAKQAEgLAMgLQANgOAPgDIAbgDIARgDQAKgCAHABQAJAAAHAEQAIAEADAIIADAFQACACAEAAQAMABATgGIAegIQAjgGAfATQAQAKAEAMIAJgEQAUgIAHgIQAEgEAHgNQAKgSADgIQAGgQAAgNQABgOgHgYQgGgagQgCQgGAGgQAUQgNASgKAHQgLAIgYAIQgrAPgYgHQgPgFgGgKQgEgHABgOQAAgRgBgFQgZAkglAYgAEnIQQgNgMgCgWQgCgYALgOQAGgIAMgFIAIgDIAJgCIADAAIAegEQAYgEAVgPQAOgKAFgDQALgGAKADQAMAEAIAVQAHAQgBAKQgBARgSARQgqAsg9AKIgQABQgYAAgLgLg");
	this.shape_5.setTransform(18.8215,-43.7714);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FDFFCE").s().p("AgFHpQhKAAglgEQgLgBgDgDQgCgCgCgFQAIADAJACQALADAPAAIAbgBQAZAABDAEQA6AFAigEQAfgCARgKQAagQAAgZQABgFgCgMQgCgMABgGQAEgOAAgIQAAgOgRgQQgSgTgQgCQAVgngNgrQgNgpgngWQgSgIgFgGQgGgKABgaQABgZgMgIQgIgHgOAEIgXAJQgUAJgSgCQgXgBgLgSQgGgJgDgRQgFgXgBgdQAAgSgCgHQgDgPgIgIQgIgGgLgBQgMAAgIAHQgMAKgDAcQgJBWAIBXQACAagBAJQgBASgMAcQgMAdgQAfQgNAZgEAPQgFAZALAPIALAMQAHAHADAFIACAEQgRgHgSAJQgRAIgNAUIgFAKIgIAIIgGAEQgFgMgKgRQgPgagCgPQgEgXALgcQAEgLAUgmQAyhhASigIANiGQAIhTAJg0QAKg7AQgiQAOAJASgCQARgCAOgKQAUgPAUgmQAXgqAAgdQAAgVABgHQACgQALgDQgHBVAkBNQgiAQgQAmQgQAlALAkIAOAiQAJAVABAPQACAZgXAvQgYAuADAZQACAVAPAPQAOAQAUAEQAUADATgKQAUgJAJgSQAxAXAUASQAkAdACAmIAAAUQAAALADAIQAOAeA7gKQAAALAJAjQAIAcgIAQQgFAIgMAJIgTANQgXAVABAhQABAjAYASIAXASQALALgDAKQgNACgdAAQgdAAgOADQgTADgNAMg");
	this.shape_6.setTransform(-1.9344,-33.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAcEHQhCgFgZAAIgbABQgQAAgLgCQgJgCgHgEQgSgIgHgQIgFgPIgDgKIgCgEQgCgFgIgHIgKgLQgMgQAGgZQAEgPAMgYQARggAMgdQALgcACgRQABgJgDgaQgHhWAJhXQADgcAMgLQAIgHALAAQAMABAIAHQAIAHADAPQABAHABATQABAdAEAYQADAQAGAKQAMARAWABQASACAVgJIAXgJQANgDAJAGQALAIgBAZQgBAaAHAKQAEAGASAJQAoAVAMApQAOAqgVAnQAQADASASQARARAAANQAAAIgFAOQgBAGACAMQACAMAAAGQgBAYgZAQQgSAKgeADQgPACgUAAQgZAAghgDg");
	this.shape_7.setTransform(-1.989,-10.8984);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6424").s().p("AAdK7QgUgBgbgNQggAAgmACIh2AIQgQABgMgBQgyABgdgDQg6gHgmgZQgNASgYAFQgXAFgWgJQgegMgkgvQhFhbAIhIQADgUAJgZQAFgPAOgdIAshjQAphfALg5QAHgiAEhEQAFhEAGghIAMg3QAIgjADgVIAEg8QADgjAKgWQAKgTARgLQAUgMARAHQgGghAKgeQALghAagQQALgHAYgIQAZgIALgGQAbgRAUgqIAghJQAQgfAVgGQANgEANAIQAMAIAAANQAJgjAMgOQAJgKANgEQAPgEALAHQANAIAIAdQAkCfg7BQQgRAUgDAHQgJAQADANQACAKAKALIASATQAQAVgCAsQgCA4AEAPQAEANAHAEQAFAEAPABQARAEAKAiQASBBADAjQABAVgBAuQgCAsADAYQAFA0AhBEIAcA6QAQAhAHAaQALAmgLAXQgHARgWAOIgnAVQATAaAHAxQAJBJADAKQAEAOAAAGQACAMgEAIQgFAJgTAJQgYAMgNAEQgUAHgQAAIgDAAgAmHIPIADAKIAFAPQAHAQASAIQABAFACACQAEAEAKABQAlADBLAAICmAAQAOgMASgDQAPgDAbAAQAdABAOgCQADgLgMgLIgWgSQgXgSgBgiQgBgiAWgUIATgOQAMgJAEgIQAJgQgIgcQgKgjABgLQg7AKgOgeQgDgHAAgMIAAgTQgCgmgjgeQgUgRgxgYQgKASgTAKQgTAJgVgDQgUgEgOgQQgPgPgDgVQgDgaAYguQAZgugCgZQgBgPgKgVIgOgiQgLgkAQglQAQgmAigQQgkhNAIhVQgMADgCAQQgCAHABAVQAAAdgXAqQgVAmgUAPQgOAKgRACQgSACgNgIQgRAigKA6QgIA0gIBSIgNCHQgTCggyBhQgTAmgFALQgLAcAEAXQADAQAOAZQAKARAFAMIAHgEIAHgIIAGgKQANgUAQgIQALgFAKAAQAHAAAHADgADJiKQgQgKgLgaIgSgrQgEgIgLgRQgKgQgFgKQgJgUgCgeIgCg1IAAgYQABgOAEgKQAHgPATgOQASgNAhgSQAngUAOgJIAsghQAagUAUgJQAUgJAMAHQALAHACASQACAPgIAlQgGAhAFATQAqg9AcgZQAXgVAFgHIAMgTQAHgKAJgDQAQgFAZAVQAmAhANAWQAVAiAEBCQADA4gPAfQgWAwg8AUQgkANhIAFQglADgPALQgMAKgLAcQgLAegKAKQgUAVgxACIgLABQgaAAgOgJg");
	this.shape_8.setTransform(20.5332,-43.3711);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FDFFCE").s().p("AiKEKIgSgqQgMgYgOgOIgPgQQgIgKgBgJQAAgKAMgPQALgPAfgeQAbgdANgRQASgYAZg2QAqheARg+QAMgzAFgMQAFgOARggQAHgNAGgEQAFgDAGgBQAGAAADAEQADADACAHIAYBSQAPAuACAcIAAAiQgBAWACANQAFAqAcAPQgRAkgDAVQgGAjAPAYQAHAMAWARQAWASAIALQAJAOAEAVQADANABAZQABAYgIAKQgGAHgLAEQgHACgPACQgdAEgFARQgHgFgFgSQgFgSgIgEQgHgEgLADIgUAFIgSACQgMAAgGAEQgPAHgEAdQgBAKgEADQgDADgIAAQgyABgoAcQgWgWgTgqgAgCgqQgGAGgCAQIgPBQQgHAqgLATQgHAMgcAdQgYAYgHASQgGAWAFAYQAHAdASAMQAMAIAQAAQAQgBAMgIQAagQADgiQACgLAEgBQACgCAHADQAeAJARgSQAGgHAFgDQAGgEANADQASAGANANIALAOQAGAIAHADQAKAGANgEQAMgEAFgLQAFgKgDgYIgFgkQgEgbgIgJQgGgHgLgFIgVgHQgagJgGgQQAIgcgDgQQgCgLgHgJQgHgKgKgDQgQgFgVAKQgEgIgBgXQAAgVgIgIQgGgIgLAAQgLAAgFAIg");
	this.shape_9.setTransform(-7.9704,-19.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah7CnQgTgMgGgdQgGgYAHgWQAGgSAYgYQAcgdAIgLQALgTAHgqIAOhRQACgQAGgGQAHgIALAAQAKAAAHAIQAHAIAAAVQAAAYAFAIQAVgKAPAFQALADAHAKQAGAJACALQADAQgIAcQAGAQAbAJIAUAHQALAEAGAHQAIAJAFAbIAFAkQADAYgFAKQgGALgMAEQgMAEgLgGQgGgDgHgIIgLgOQgNgNgSgGQgNgDgGAEQgEADgGAHQgRASgegJQgHgDgCACQgEABgCALQgEAigZAQQgNAIgPABIgCAAQgPAAgLgIg");
	this.shape_10.setTransform(-4.1198,-6.7235);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFA526").s().p("Ah/GjQgMgJgHgWQgKgggDgFQgGgKgLgKIgVgSQgXgTgMgWQgPgaAFgYQAEgTASgTIAhgfQBdhRAmiXQAOg6AJhMIAMiIQAMACAMgEQAMgFAIgKQAHgJAFgUQAGgWAFgIQAKAPAEAbQAEAfADAPQAFAWAQAlQATApAFASQAIAbAEAxQAGA9gCAgIgBAUQABALAGAHQALANAZgEQgLA0gWAyQgJAWgBAJQgCAVAOAIQAGAEALABQAOABAEABQANAFAJAPQAEAJAHAWQAJAiASAkQARAfgLAOQgGAIgSAFIh3AhQAEgGgFgIQgGgIgIABQgHAAgGAHQgGAGAAAIQgKgEgIAIQgJAIAEAJQgyAFgzAOQgXAHgLABIgGAAQgPAAgLgHgAAnjwQgGAEgHANQgRAggGAOQgDAMgOAzQgQA+gqBdQgZA3gSAYQgNARgcAdQgeAegMAPQgMAPABAKQAAAJAIAKIAQAQQAOAOALAYIASAqQATAqAXAWQAngcAzgBQAJAAACgDQAEgDABgKQAEgdAOgHQAHgEALAAIATgCIATgFQAMgDAHAEQAIAEAFASQAFASAGAFQAFgRAegEQAPgCAGgCQAMgEAFgHQAIgKgBgYQgBgZgCgNQgEgVgKgOQgHgLgXgSQgVgRgIgMQgPgYAGgjQAEgVARglQgcgPgGgpQgBgNAAgWIAAgiQgCgcgOguIgZhSQgCgHgCgDQgEgEgGAAQgFABgFADg");
	this.shape_11.setTransform(-7.6099,-27.6387);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF6424").s().p("Ah8HRQgSgDgOgMQgOgMgHgRIgHgWQgFgOgEgIQgGgMgXgTQglgggMgZQgLgXACgbQACgbAOgVQAIgNAQgOIAagYQBXhPAkiNQAOg3AHhHQAFgoAFhYQACgUAEgHQAIgQAOACIAKACQAHACAEgCQAGgCAEgMIAPg5QAGgUALgCQAIgBAKAKQAWAVAKAsQAIAxAHAXQAFARANAeQAOAgAEAOQAHAXAIA5QAJBQgDApIALgSQAHgKAJABQAQACgBAcQgEBWgpBOQAPgDARAIQAOAHALAOQAJALAHARIAMAgIAbBIQALAggGAQQgIAUgeAOQgRAHgeAHIgwAMIguAQQgdAMgSAEIghAFIghAFIgxAOQgSAEgPAAQgJAAgIgCgAgnjMQgJBMgOA6QgmCXhdBRIghAfQgSATgEATQgFAYAPAaQAMAWAXATIAVASQALAKAGAKQADAFAKAgQAHAWAMAJQANAIATgBQALgBAXgHQAzgOAygFQgEgJAJgIQAIgIAKAEQAAgIAGgGQAGgHAHAAQAIgBAGAIQAFAIgEAGIB3ghQASgFAGgIQALgOgRgfQgSgkgJgiQgHgWgEgJQgJgPgNgFQgEgBgOgBQgLgBgGgEQgOgIACgVQABgJAJgWQAWgyALg1QgZAFgLgNQgGgHgBgLIABgUQACgggGg9QgEgxgIgbQgFgSgTgpQgQglgFgWQgDgPgEgfQgEgbgKgPQgFAIgGAWQgFAUgHAJQgIAKgLAFQgNAEgMgCIgMCIgADlgoIgIgDIgJgCQgHgBgDgFQgFgFgDgOQgFgZgBgNQgBgJACgGQACgGAMgOQAOgSADgTIACgKQADgFAFgCQAGgDAFACQAHADAGAOIANAdQADAHABAHIAHAXIACAQQAEAagOASQgIAKgLAEQgGACgGAAQgFAAgFgBg");
	this.shape_12.setTransform(-7.0304,-28.5217);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFA526").s().p("ABIEMQgIgIgLgEQgLgEgLACQgDgEgEgOQgDgMgGgEQgEgEgGABQgFAAgEADQgEAEgBAGQgBAFACAFQggAAglADQgDgLgPgLQgTgPgEgEQgRgUAFgkQAKgmACgUQAHAEARgBQARgBAIAFIAJAIQAFAEAFAAQAKgCADgPQAHghgEg9QgFhDAEgdQABgLAIggQAGgbABgQIAAgfQAAgTADgMQADgKAFgEQAHgHAHAEQgCAGADAGQACAFAGADQAFACAGgBQAGgBADgFQAGAOgFAUIgLAiQgMArAUApIAHAOQAEAIAAAHIgBAPQgBAJACAGQACAIAJAFQAJAFAKgBQAWgBANgRQAGALgMAQIgKALQgGAFgCAGQgFARASATIAOANQAJAJAEAGQAMAUgIAWQgJgVgNgCQgKgCgQAMQgOALgEAKQgIAQAKALQADAEAHACIALAEQANAGAJAJQAMAOgGAKQgFAHgLABQgUABgPgMIgBgBIgDgDIACgEQADgEgBgDQAAgCgEgEQgOgNACgXQACgOAMgWQAIgNAHgGQAKgIAMADQABgKgJgMIgOgVQgEgLABgRQAAgKgCgDQgCgDgJgGQgZgPgPgbQgOgbABgdQgKAFgKAAIgICgQgCAdgGALQgJAQgTAFQgTAGgQgJQgLAWgCAMQgEAUAKAQQAEAFAHAHIANALQAMAOAHAFQANAKAMgFQADgBAEgDIAHgGQAQgNASAHQATAIAEATQAWALAagDIgDgDIADABIAZAAIAFgBQgBAIAFAFQgVALgYAAIgFAAg");
	this.shape_13.setTransform(-6.4597,-9.601);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FDFFCE").s().p("AAtCsQgEgUgTgHQgTgHgQAMIgGAGQgEAEgEABQgLAFgOgLQgHgFgLgNIgNgLQgIgHgEgGQgJgPAEgUQACgNALgWQAPAJAUgFQATgFAIgQQAGgLACgcIAJihQAIAAALgFQgBAdAPAbQAPAbAZAPQAJAFABADQACADAAALQgBASAFAKIAOAVQAIAMgBAJQgLgDgLAJQgHAFgHANQgNAWgBAPQgDAWAOAOQAFADAAADQAAADgDAEIgBADIgJgGQgIgFgGABQgGACgDAGQgDAFABAGQACALAKAKQAQAOAWAHIANACIgEAAIAEADIgLAAQgUAAgRgIgAAKhdQgGATAAANQgBAGADAYQABATgDALIgCAJQABAGAFABQgKAegRALQgFADgSAGQgHACgDACQgFAFACAFIAGAHQAEAFgDAHIgFALQgHAMACAIQABAGAEAEQAEAEAGgBQADAAAFgEQAHgFAFgHQAJgMAFgBQAIgBAGAHQAGAFAEgCQAEgCgBgGQgDgHABgDQAAgEAHgFIAKgFQAIgHgDgKQgDgIAAgEQAAgEADgGIAPgQQAKgKABgJQACgLgOgVQgNgTgLgVQgLgTACgOIABgGQAAgDgEgBIAAAAQgEAAgCAGg");
	this.shape_14.setTransform(-6.929,-2.8679);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag3B2QgEgEgBgGQgCgIAHgMIAFgLQADgHgEgFIgGgHQgCgFAFgFQADgCAHgCQASgGAFgDQARgLAKgdQgFgBgBgGIACgKQADgLgBgTQgDgYABgGQAAgNAGgTQACgHAEABQAEABAAADIgBAGQgCAOALATQALAVANATQAOAWgCALQgBAIgKAKIgPAQQgDAGAAAEQAAAEADAIQADAKgIAHIgKAFQgHAFAAAEQgBADADAHQABAGgEACQgEACgGgFQgGgHgIABQgFABgJAMQgFAHgHAFQgFAEgDAAIgCAAQgEAAgEgDg");
	this.shape_15.setTransform(-6.7097,-0.7739);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF6424").s().p("AgFE7IgSgIQgLgEgIgBQgMgBgdAJQgaAIgPgEQgLgDgGgJQgHgJACgKQAEgJAAgFQAAgKgNgFQgQgGgDgCQgMgLAEgdIAPh8QACgTAJgGQAHgFAJAFQAJAFAAAJQAagCAWAPQgdgtAIhIQACgXAIgmIAMg8IAIgxQAGgbALgSQAEgHARgTQAOgRAFgMIAGgMQAEgHAFgBQAIgDAMAJQAKAHAFAHQAEAGADALIADASIAHAiQAEAUgBAOQAAALgKAiQgIAbADARQABAJAGAMIAJATQALAZgHASQAMgBAMgOIAJgLQAGgGAFgDQAHgEAHABQAIABAEAGQAEAGgDAQQgCAegDANQgGAcgRAJQAoAkAHAgQAFAVgKAUQgKAWgTAFQATAQgCAaQAGgBAGgIQAHgLADgCQAGgEAIACQAHACAEAGQAHAJgBARQgDApglAbQgfAWguADIgSABQgeAAgYgKgAAnEaQALADAHAIQAbACAXgMQgEgFABgIIgFAAIgZAAIgNgCQgWgHgQgOQgKgKgCgLQgBgGADgFQADgGAGgCQAGgBAIAFIAIAGIAEADIABABQAPANATgCQAMgBAEgHQAHgKgNgNQgIgKgNgFIgMgEQgGgDgEgEQgJgLAHgPQAFgKAOgLQAQgNAKACQAMACAKAWQAIgWgNgUQgEgHgIgIIgPgOQgRgSAFgRQACgGAFgHIAKgLQANgOgHgLQgNAQgWABQgKAAgIgDQgJgFgDgJQgBgFABgJIABgPQgBgHgEgJIgHgOQgSgoALgsIALgiQAFgUgGgNQgEAEgGACQgGABgFgDQgEgCgDgGQgCgGABgFQgHgFgIAIQgEAEgDAKQgDAMAAASIgBAfQgBAQgGAcQgHAfgCAMQgEAdAFBCQAEA9gHAhQgDAQgJABQgFABgGgFIgJgHQgHgFgRABQgSABgHgEQgCATgJAnQgGAkASATQADAFAUAOQAPALADALQAlgDAgABQgDgFACgGQABgGAEgDQAEgEAGAAQAGAAADADQAGAEADAMQAEAOADAEIAGAAQAIAAAIADg");
	this.shape_16.setTransform(-5.0172,-12.1742);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FDFFCE").s().p("AgIBMIAAAAIgCgDIgNgJIgJgHIgDgBIgBgBIgEAAQgEgBgEABIAAAAQgJADgEAIQgHgOgQgCQgNgCgPAGQgKAEgEAFIgBADIAAAAIgBABIgBAFIAAAAIgYgDQgRgFgHgLQgFgJAAgKQABgKAGgHQgFgHgCgDQgFgKAEgRQADgOAHgLQAJgMAOgCQAFgBAKACIAPACIAAAAIADAAIAAAAIAAgBQAHgDAPgCIADgBIABAAIAKgCIABAAIAdgHIAagHQAPgDAKACQALADAIAFIAHAEQAEABAGgCQAPgDAMABQARADAHALQAGAJAAAPQAAAMgEALQgEAJgLALQgQAUgMAHQgDAIgGAKIgGAKIgBAAIgBADIgEABIAAAAIgJAGIgBAAIgBAAIgCACIgCABIgDADIgBAAQgEAAgEgCIgDACIgBAAQAAgCgCgDgAhXAbIAQgCQAUgCANgHIABAAIAAgBIABgBIABgBIAPgLIAGgCQALgGAQgEIAkgKQAHgDACgCQAFgFgDgEQgBgEgFgBIgJgBQgcACgXgEQgMgCgHABQgJAAgMAHIgVAMQgEADgFAAQgGABgLgEQgKgBgIAEQgEADgFAFIgEAFQgEAGABAEQAAAGAIAHIgBAFQADABAFgBQALAGAOABgACjA3QgEgDgBgDQgBgFACgDQACgEAGgEIACgHIAFgEIAKgGQADAJgDAIIgBAHQAAAFgBACIgEAEIgBADIgEACIgFACQgDAAgCgDg");
	this.shape_17.setTransform(1.26,7.66);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFA526").s().p("AieCOQgUgIgFgOQAQAGAJABQAQAAAHgKQAEgFAAgHQgBgHgFgEQgEgDgLAAQgMAAgFgDQgIgFgCgSQgDgZABgZQANgCAEgNQACgEABgHIACgMQAEgZARgTQAIgIAIgCIAQgCQALgCACgGQAFAGAJACQAIACAHgCQABAVAOADQAHABAHgGQAFgGACgIIACgQIAEgPQADgHAMgOQAKgMADgIQADAJAQANQAQAOAEAJIAEAPQACAJAFADQAHADACADQADADABAFQAFAWAFAFQAFAGAIABQAIABAFgGQAIAFALgEQAKgEAEgKQAFAIAIAFQAJAFAJgBQgBALAIAMIAGAHQADAHgDAQQgFAYgHALQgGAIgQAOQgIAKgMAVQgNAUgQAAQACgFgFgFQgFgEgGAAIgEAAIABgCIAAgBIAGgKQAHgKACgIQANgGAQgUQALgMADgJQAFgLAAgMQAAgQgHgIQgHgLgQgCQgNgCgPAEQgGABgEAAIgHgEQgIgGgKgCQgMgCgOADIgaAHIgdAHIgBAAIgJABIgCABIgDAAQgPACgGAEIgBAAIAAAAIgCAAIgBAAIgPgCQgJgBgGABQgNABgJAMQgIAKgDAOQgEASAGAKQABAEAGAGQgHAHAAALQgBAKAFAIQAIAMARAEIAXAEIABAEIABABQgQgBgFACQgLAEgCAKQgJACgJAAQgPAAgPgFgAAtCGIABgBIADgBQAEABAFAAIAAAAQgJAGgGAAIACgFgAhEBJIAAgGIABABIAHAFIgFAAIgDAAgAAMBEIACgBIgBABIgBAAg");
	this.shape_18.setTransform(-3.8808,2.4176);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhOAdIgHgEIgBgBQgIgHAAgGQAAgFAEgGIAEgFQAEgFAFgCQAHgEAKABQAMAEAGgBQAEAAAFgDIAUgMQAMgHAJAAQAGgBAMACQAZAEAcgCIAIABQAFABACAEQACAEgFAFQgCACgHADIgkAKQgRADgLAGIgGADIgNALIgCABIAAABIgCAAQgNAIgTACIgRACQgNgBgLgGg");
	this.shape_19.setTransform(-2.0861,6.795);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF6424").s().p("AgTC8QgHAFgMgDIgVgEQgGAAgRADQgrAKgrgKQgdgGgPgPQgLgOgIgeQgDgMABgHQADgMAJgCQgGgpAHgrQADgPAFgHIAKgKIAJgQQAHgPAOgQIAZgbQAJgIAFgCQAFgBAEABQAEACACAEQAFgIALAEQALAGAGABQAQACASgXQAbgeAFgWIAEgMQACgHAFgCQAHgDAGAEQAGAEADAIIADAOIACAPQAEAJALANIAcAhQATAWACAOQAFgEAIAAQAHABAFAEQAGgJAGgFQAIgGAHAEQAGADAEAMQAEAMAFADQADADAJAAQAIABAEACQAEADADAHIADAMIAJAVQAQAtgmA5QAFAEgBAIQgBAHgEAGIgIALQgEAHgBAFIgBAKQgBAGgCADQgEAFgHgBQgHgBgGgFQgOAQgMgBIgMgDIgKAAIgLACIgUgBQgIgBgLAEIgSAHQgKADgHAAQgLAAgIgIgAirCdQAZAJAYgFQABgKAMgFQAFgBAPABIAAgCIgBgEIAAAAIABgFIABgBIAAAAIABgDQAEgFAKgEQAPgGANACQAQACAHAOQAEgIAJgDIAAAAQAEgBAEABIADAAIABABIADABIAJAHIANAJIACADIAAAAQACADAAACIgBAFQAGAAAJgFIADgDIACgBIACgCIABAAIABAAIAJgGIAAAAIAEgBIAEgBQAHAAAEAFQAFAEgCAGQARgBANgTQAMgWAIgJQAPgOAGgJQAIgKAFgZQADgPgEgIIgFgHQgJgLACgLQgKAAgIgFQgJgEgFgIQgDAJgLAEQgKAEgJgEQgEAGgIgBQgIgBgFgGQgFgGgGgVQgBgGgCgCQgDgDgHgDQgFgEgCgJIgEgOQgEgKgPgNQgPgOgEgJQgCAJgLAMQgNANgDAHIgDAQIgCAPQgCAJgGAFQgGAHgIgCQgNgCgBgWQgIADgIgCQgIgCgFgGQgDAGgLACIgQABQgIACgHAJQgSASgEAaIgBALQgBAHgCAEQgFAOgMABQgCAZADAaQACASAJAFQAEACAMAAQALAAAFAEQAFADAAAIQABAHgEAFQgIAJgPAAQgJAAgQgGQAEAOAUAHgADJCHQgMgEgCgLQgDgLAJgRQAEgHAFgDQAEgDAJgDIAGgFQAEgCADABQACABACAFQAEANgDATQgEASgIAGQgGAFgGAAIgIgCgADVBaIgFAEIgCAHQgGAEgCAEQgCADABAFQABADAEADQACADADAAIAFgCIAEgCIABgDIAEgEQABgCAAgFIABgHQADgIgDgJg");
	this.shape_20.setTransform(-2.6354,0.87);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FDFFCE").s().p("Ag3AfQgJgCgDgJQgDgJAFgIIAFgGQABgCgBgFIgBgMQAAgHACgBQAEgDAGAEQAKAIADAAIAOgBQAKgBADAFIACAKIAFALQABAJgJADIgGAAIgFABQgEABgFAFQgKAKgJAAIgGgBgAgygEQAAAGgDAEQgFAGAAACIABAEQAFAGAIgEQAEgCAHgIQAIgGAFABQgBgCABgDQACgEgBgDQgEgDABgCQgHADgIgBQgHgBgGgFgAAvAWQgFgBgIgGQgKgJgBgGQAAgDACgIQAAgEADgEQACgDAGgFQAFgDADABQACABABAEQACAEABABQADACAHAAQAFACACAHQACAGAAADQAAAJgGAHQgFAFgIAAIgDAAgAAmgMIgCAFQgBAEADAIIAFAEQAEACACAAQAFAAADgEQADgEgBgDQgDgEAAgDQgJAAgHgIIgCAAIAAADg");
	this.shape_21.setTransform(2.2721,3.4117);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFA526").s().p("Ag0BfQgKgBgKgIIgQgPQAFgFgDgNIgCgJQgCgFAAgEIAFgRQABgNgKgIQAFgBAFgNQACgHAHgKIAKgRQAFgIADgKQAIAJABAFQABAHACADQAEAGAHgDQAGgEACgGIACgJIAHgHQAEgGADgNQAGAFAHgCQAHgCACgIQAFAIAKAGIASAKQAYAOARAbQAIAPABAJQABAHgDAFIgHAKIgFAKIgGAEIgFADIgMAHQgIAEgFgEIgEgEQgFgHgIgFQgNgKgKAIQgDADgCAIQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAIgEAAQgIgCgHAFQgIAIAFAUQAFANgFAGQgEAFgJABIgEAAIAAgCIAAgcQAAgGgBgCQAAgBgBAAQAAAAgBgBQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQgBABAAAEIAAAXQAAAIgBAEIgBAAgAg8gcQgCABAAAHIABAMQABAFgBACIgFAGQgFAIADAJQADAJAJACQAMAEANgNQAFgFAEgBIAFgBIAGAAQAJgDgBgJIgFgLIgCgKQgDgFgKABIgOABQgDAAgKgIQgDgCgDAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAgAAjgZQgGAFgCADQgDAEAAAEQgCAIAAADQABAGAKAJQAIAGAFABQAJABAHgGQAGgHAAgJQAAgDgCgGQgCgHgFgCQgHAAgDgCQgBgBgCgEQgBgEgCgBIgCgBQgCAAgEADg");
	this.shape_22.setTransform(2.3625,3.2375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag5AQIgBgEQAAgCAFgGQADgEAAgGIAAgMQAGAFAHABQAIABAHgDQgBACAEADQABADgCAEQgBADABACQgFgBgIAGQgHAIgEACIgGABQgEAAgDgDgAArAHIgFgEQgDgIABgEIACgFIAAgDIACAAQAHAIAJAAQAAADADAFQABACgDAEQgDAEgFAAQgCAAgEgCg");
	this.shape_23.setTransform(2.2792,3.63);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF6424").s().p("AAwCHIgKAAIgLgBIgJgDIgKAAQgGAAgDgBQgHgEgBgKQgBgIADgFQAFgGAGABIAHAEQAFADADgBQACAAAEgGQAFgIAIgCIAMABQAHACAEgCQADgCAEgIQAEgHAFgBQAEAAADADQADADAAAEQABAGgBALIAEANQACAIgCAFQgDALgQABQgQgCgIABgAhAByQgRgFgUgVQgMgMgDgKQgBgDACgSQABgKgCgSIAAgbIACgaQgFgWAEgLIAFgKIAEgKQABgEAAgGIgCgKQAAgPAKgCQAJgCAFALQABAEAAAOIABAcIAGgWQAGgTAJgBQAKgDAEAJQACAEgBAFQgBAEgDADQAAAEAFACQAFACADgDQAFgDAAgMQAAgLAEgEQAHgFANAJQAAgKACgEQACgIAHgBQAIgCAGAKIAIARQAEAGAKAGIARAKQAZAOAPAXIAOAYQAGAOABAGQAAAKgMATQgJAOgGAGQgRARgZADQgOABgHgHIgFgHQgDgEgEAAQgGAWgLAFQAAAOgHAOQgEAHgFADIgNAEIgTABQgKAAgFgBgAhCg1IgLARQgHAKgCAHQgEANgGABQALAIgCANIgEARQgBAEACAFIADAJQADANgGAFIAQAPQALAIAJABIABAAQACgEAAgIIAAgXQAAgEABgBQAAgBABAAQAAAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQACACAAAGIAAAcIgBACIAEAAQAKgBAEgFQAEgGgEgNQgGgUAJgIQAGgFAIACIAFAAQAAAAABAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABgIADgDQAJgIAOAKQAIAFAFAHIAEAEQAFAEAIgEIALgHIAGgDIAFgEIAFgKIAHgKQADgFgBgHQAAgJgIgPQgRgbgZgOIgSgKQgKgGgEgIQgDAIgHACQgHACgFgFQgDANgFAGIgHAHIgCAJQgBAGgGAEQgIADgEgGQgCgDAAgHQgBgFgJgJQgDAKgEAIg");
	this.shape_24.setTransform(2.5289,3.4152);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFA526").s().p("AgUArIgRgcQgIgMABgHQAAgFAHgMIAOgYQAJAGAIgHQAFAHAHAAQAIgBADgIIAJABQAHAMAIAdIAEATQABAKgHAWIgJgLQgFgGgGgBQgEgBgJAFQgJAHgCAEIgCAEIgDACIgCABQgEAAgEgGgAASAMQAEADADgCQADgCAAgIQgBgGgCgFQgHgJgNACQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAIgBAGQAAAIABAAQADAIALgCQABAFADABg");
	this.shape_25.setTransform(8.0252,1.0909);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAFAOQgDgCgCgEQgJACgEgIQgBgCAAgGIACgGQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAAAQAMgBAIAJQACAEABAGQAAAIgDACIgDABIgEgBg");
	this.shape_26.setTransform(9.35,0.9337);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF6424").s().p("AAYBhQgMgHgGgOQgHAKgHgCQgEgBgEgGIgUgfIgFgJIgBABIgBAHIABAFIAJAPQAEALgEAHQgGAJgJgDQgIgBgIgOIgHgQQgEgKgBgGQAAgLAIgHQAKgHAJAFIAAAAQgFgMAAgJQABgNAPgYQAPgYAAgOIAAgKQABgHADgDQAEgDAFABQAGABACAFIACACIACgBQAEgDAGACQAGACAAAFQAAgIAEgDQACgCAJgBIAFgBIAFAAQAFABACAGIABAKQAAASACAGIAKATIAFAQQALAigDAWQgCAQgLAfQgCAKgEABIgFAAIgFAAIgFADIgEADIgFABQgDAAgGgCgAAYA+IABACIAAADIACAGIADABIAAAAIgBgEIgBgCIgBgCIAAgCIgCgCQgCgCABgDIAAAAgAgagQQgHAMAAAEQgBAIAIANIARAcQAFAIAEgDIADgDIACgDQACgFAKgGQAJgFAEAAQAGABAFAHIAJALQAHgXgBgJIgEgUQgIgdgHgMIgJAAQgDAHgIABQgIAAgFgGQgHAHgJgGg");
	this.shape_27.setTransform(6.9083,0.5225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFA526").s().p("AgmAZQAAgGACgEIAFgIIAQgfIADAAQABAJAJAAQACAAACgDQAEgDAAgDQAKgDABgMQAHAHAGgGIAEgHIACgNIADAFQgBAFgDAHIgGAMIgGASQgCADAAAJIACAFQADAFAKAAIAAAYQgGgBgKAFQgLAEgGABIgKAAQgFABgMALQgCADgDAAQgIgWgBgMg");
	this.shape_28.setTransform(3.65,0.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF6424").s().p("AgvBRQgFgEgDgKQgHgSAAgXQAAgIADgGIAIgMIAKgTQAFgMAGgGQAEgCAAgCIAAgHQAAgEACgDQADgDAEgBQAEgBAEACQADACABAEQACgOAGgLQADgFAEgDQAGgDAFACQADACAEAEQACACAHACQAIAEAFAHQAFAIAAAIQAAAKgIAQQgCAEABACIACAGQAFAIAAANIAAAXIABAFIAEAEQAFAFgBAHQAAAHgFAEQgFADgJAAQgLAAgEACIgNAJQgLAEgHgHIgEgCQgCgBgFAGQgGAIgKABIgCAAQgIAAgHgHgAgjAOIgFAHQgCAEAAAHQABAMAIAWQADAAADgEQALgLAFgBIALAAQAFAAALgFQAKgFAHABIAAgYQgLAAgDgEIgBgGQAAgJABgDIAGgSIAGgMQADgHABgFIgCgFIgDANIgEAIQgFAFgIgGQAAALgLADQAAADgCADQgDADgDAAQgJAAgBgJIgCAAg");
	this.shape_29.setTransform(4.0023,0.2788);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFA526").s().p("AABAmQgKgRgEgRQgEgOADgJQABgHAIgLQAEACAIABIAEAAQACACABADQAEAIgCAGQgEAAgBAEIAAAGQACANgKAeg");
	this.shape_30.setTransform(4.469,9.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF6424").s().p("AgDAwQgEgBgDgGQgOgagCgQQgCgcAQgQQAEgEAEAAQADAAAFAEIAGAAIAFABQAFADADAGQADAHABAFIgCAOIgIAlQgDANgDADQgFAGgFAAIgEgCgAgPgTQgDAJAEAPQAFARAKAQIACAAQAJgegBgNIAAgGQABgEADAAQACgGgEgIQgBgDgCgCIgEAAQgHgBgEgCQgIALgCAHg");
	this.shape_31.setTransform(4.5086,9.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape}]},9).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},2).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},2).to({state:[]},3).to({state:[]},1).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-114.5,137.5,152.4);


(lib.Droplet = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {fall:0,splash:9,splashEnd:22};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		playSound("waterTable");
	}
	this.frame_22 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(13).call(this.frame_22).wait(6));

	// waterSpot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeBSQgEgOADgNIAEgSIAEgQIAHgRIAEgOIAhhJQACgEACAAQADAAABAEQAEAIAAAMQAAALgCAJQgBAHgEAKIgQAuQgKAbgUAlQgCAEgDAAQgEAAgBgGg");
	this.shape.setTransform(-4.0143,-45.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},9).wait(19));

	// waterDrop
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CCFF").s().p("AiFEEQg4g2AAhPIC9m5ICeFiIAgBXQAABPg4A2Qg3A3hPAAQhNAAg4g3g");
	this.shape_1.setTransform(0.15,-31.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#33CCFF").s().p("AAADAIgkgCQgWgCgQABIhHAFQgkAAgmgKQgggJgIgRQgLgXAaglQAZgkBWhZQBJhNAdg3QARghARgCQAMgBAIAMQAJAMgGALQgIALgBAGQgBAHAHAPQAJAPANAhQAOAhAIAQQAOAYATARQAWATAZADQAIABATAAQARAAAKACQAZAGASAYQAUAZgBAeQAAAPgHANQgHAOgMAIQgPAKghADQg4AFg4AAQgnAAgmgDg");
	this.shape_2.setTransform(-2.124,-18.5299);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33CCFF").s().p("AiuBxIhIgEQgWgBgKgCQgRgDgLgJQgPgNAAgXQAAgWAPgOQAKgKATgFIAhgIQAngKA2giQBHgtATgJQAdgPAWAAQARgBAbAKQARAHAiAUQAgATATAHQAWAIAnAGQAtAIAQAFQAyAOALAgQAEANgDAOQgDAPgKAKQgOAOgfAHQgjAHg0ABQg7AAgdABQgfAAhAAGQg+AGghAAIgJAAQgZAAglgCg");
	this.shape_3.setTransform(-4.1408,-11.122);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#33CCFF").s().p("AhoBAQgagBgygJQgfgEg7AEQg9AEgdgCQgbgCgNgIQgJgGgFgJQgGgKACgKQADgSAegOQArgUArgCQAWgBArAGIBJAJQBBAJAhgBQAWgBAjgFIA4gIQAkgDANgFIAUgJQAMgGAIgCQAOgEAVACIAjAEQAOACBDABQAxACAeAIQAYAHANANQASATgFATQgFARgTAKQgNAGgYACQgZACgigBIg8gEQiJgJiBAUQgxAIgXAAIgFAAg");
	this.shape_4.setTransform(-5.8605,-6.0652);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#33CCFF").s().p("Ag9A0QgNgEgYgKIgNgFQgHgDgDgFQgEgFAAgHQAAgHADgGQAGgJAOgGQAMgGASgBIAggBQAUgBAkgGQAngHASgBIAagBIAagCQANgBAYgFIAkgGQARgCAhAAQAhABAKACQAVAEAKAMQAOAPgGAYQgFAagUAHQgIADgMgCIgVgFQgQgEgjgBQgegBgOACQgMACgVAFIggAIQgQAEgWABIg2AFQgUADgRAAQgWAAgOgEgAkwApQgQgEgGgMQgEgGgBgPQAAgLAEgHQAEgIAKgFQAKgFAQgDQAjgGAUACQAJABAVAGIAYAIQAOAHAGAJQAHAKgDAMQgDAMgKAHQgLAIgaABIhHACQgUAAgJgDg");
	this.shape_5.setTransform(-7.5704,-5.3913);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#33CCFF").s().p("AgwAvQgbgBgJgPQgEgIACgMQACgNAKgLQAKgMAOgEQAIgCAXgBQAWgBAugEQAWgBAWgDIAqgEQAOgBAYABIAnACIAWABQANACAIAEQAKAGAFALQAFALgBAKQgCALgHAJQgIAJgLAEQgFACgaABIgfABIgnACIggAEIgngDQgWgCgnAEQghADgTAAIgJAAgAjqAqQgYgBgKgQQgGgIABgLQABgKAIgFQACgCARgFQAMgGAHgBQAKgDANADQAMACAIAGQAMAJAAAPQAAANgJAIQgHAGgTADQgQADgJAAIgDAAg");
	this.shape_6.setTransform(-7.4911,-5.16);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#33CCFF").s().p("Ag+AoQgWgCgIgLQgJgMAIgQQAEgJAGgGQAFgHAJgGQANgJAPgCIAmAAIAvAHQAYAEALAGQATALAAASQgBAPgNAHQgIADgNAAIgigCIgRAAQgHAGgPACQgUAEgSAAIgOgBg");
	this.shape_7.setTransform(1.0295,-4.2964);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},9).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},1).to({state:[]},6).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.8,-63.4,83.9,64.4);


(lib.doorHit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjmKDQAM1wAFiPIGyA4IAKABIgIMjIAAAnIgKN2g");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.doorHit, new cjs.Rectangle(-23.1,-89.3,46.3,178.6), null);


(lib.darkBG_MC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {noShade:0,threeShade:4,halfShade:9,fullShade:14};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgqLBLAMAAAiV/MBUXAAAMAAACV/g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.247)").s().p("EgqLBLAMAAAiV/MBUXAAAMAAACV/g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("EgqLBLAMAAAiV/MBUXAAAMAAACV/g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.749)").s().p("EgqLBLAMAAAiV/MBUXAAAMAAACV/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_3}]},5).to({state:[]},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270,-480,540,960);


(lib.creditsBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_63();
	this.instance.setTransform(-66.8,6.85,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_62();
	this.instance_1.setTransform(-79.7,-25.1,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_65();
	this.instance_2.setTransform(-66.8,6.85,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_64();
	this.instance_3.setTransform(-90.25,-31.5,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_67();
	this.instance_4.setTransform(-66.8,6.85,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_68();
	this.instance_5.setTransform(-79.7,-25.1,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_69();
	this.instance_6.setTransform(-66.8,6.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).to({state:[{t:this.instance_5},{t:this.instance_6}]},1).wait(1));

	// HIT
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AsND6IAAnzIYcAAIAAHzg");
	this.shape.setTransform(2.7765,-0.79,1.0543,1.06);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.2,-31.5,180.5,64);


(lib.cork = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#98672F").s().p("AgrBTQgUgIgHgLIguiUIACAAQBoAxBKgWQAXgHARgNIAKgIIADgEIgaA9QgdBDgNApQgdAKgYAAQgWAAgRgHg");
	this.shape.setTransform(0,2.0836);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#704411","#B98952"],[0,1],0,-6.1,0,6.8).s().p("AhxAHIgBgDQAAgSAhgMQAigNAvAAQAwAAAhANQAiAMAAASIAAABIgKAIQgRANgXAHQgYAHgaAAQg4AAhIghg");
	this.shape_1.setTransform(-0.1,-7.0817);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-11.1,23.4,22.2);


(lib.candlehitbody = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B39999").s().p("AhlBtIAAjaIDLAAIAADag");
	this.shape.setTransform(-1.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(26));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-10.7,20.4,21.9);


(lib.candlehit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B39999").s().p("Ah8CXIAAktID5AAIAAEtg");
	this.shape.setTransform(-0.025,0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(26));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-15,25,30.2);


(lib.bin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.badHit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFF3CE","#F8C78E"],[0,1],2078,-126.1,0,2078,-126.1,0).s().p("A6vLbMgpygWNUgATgAGBEqgASUAiUgAJAiZgAHMg1XAW1g");
	this.shape.setTransform(-0.0039,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.badHit, new cjs.Rectangle(-438.6,-73.1,877.3,146.2), null);


(lib.YouWin_MC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.YouWin_art();
	this.instance.setTransform(-133.75,-104.95,0.2939,0.2939);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.YouWin_MC, new cjs.Rectangle(-133.7,-104.9,267.5,209.9), null);


(lib.title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_2"],0);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.24,0,0,0.24,-182,-85.8)).s().p("A8bNaIAA6zMA43AAAIAAazg")
	}.bind(this);
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182,-85.8,364.1,171.6);


(lib.Instructions_page = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BDBDFF").s().p("Eg38AYgQgUAAAAgKMAAAgw1MBwhAAAMAAAAw1QAAAKgUAAg");
	this.shape.setTransform(0,274.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCFF").s().p("Eg4QAq5MAAAhVfQAAgSAUAAMBv5AAAQAUAAAAASMAAABVfg");
	this.shape_1.setTransform(0,-156.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Instructions_page, new cjs.Rectangle(-360.1,-431.3,720.2,862.7), null);


(lib.howToBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AqqpuIVVAAIAATdI1VAAg");
	this.shape.setTransform(-6.025,8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AEJGkIAHgUIAAhZIhAi0IgPgXIBNAAIgIAMIAjBzIAjhzIgHgMIBMAAIgPAXIg/C0IAABZIAGAUgAB6GkIAEgMIgLgwIgGgGIg0AAIgGAGIgLAwIAEAMIhAAAIAKgVIA/kRIgGgSIBHAAIgFASIBAERIAKAVgAA/EpIAFAEIAeAAIAFgEIgUhkgAjCGkIAHgUIAAkQIgHgUIBBAAIgGAUIAADqIAGAGIBPAAIAVgGIgJA6gAmAGkIAHgUIAAkQIgHgUICIAAIAbAaIAACOIgbAaIhIAAIgGAGIAABcIAHAUgAlGCmIAABOIAGAGIAoAAIAGgGIAAhOIgGgFIgoAAgAHNhrIgbgaIAAkEIAbgaIBnAAIAaAaIAAEEIgaAagAHmlpIAADEIAGAGIAoAAIAGgGIAAjEIgGgFIgoAAgAEdhrIAHgUIAAjqIgGgFIgoAAIgVAFIAJg6ICnAAIAKA6IgWgFIgnAAIgGAFIAADqIAGAUgAgNhrIAFgTIgki0IgiC0IAFATIhIAAIAFgTIg4kHIgMgeIBBAAIgEAMIAmC9IAli4IgFgRIBBAAIgEARIAlC4IAli9IgEgMIBBAAIgNAeIg2EHIAFATgAlnhrIgbgaIAAkEIAbgaIBnAAIAaAaIAAEEIgaAagAlOlpIAADEIAGAGIAoAAIAGgGIAAjEIgGgFIgoAAgAnmhrIAHgUIAAhpIgHgGIgnAAIgGAGIAABpIAGAUIhAAAIAGgUIAAkQIgGgUIBAAAIgGAUIAABmIAGAHIAnAAIAHgHIAAhmIgHgUIBCAAIgHAUIAAEQIAHAUg");
	this.shape_1.setTransform(-6.175,11.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AqqJuIAAzcIVVAAIAATcgADPCiIA/C0IAABZIgGAUIA/AAIgFgUIAAhZIA/i0IAPgWIhNAAIAIALIgjBzIgjhzIAHgLIhNAAgABrGBIAGAGIAMAwIgFAMIBBAAIgKgVIhAkQIAGgSIhHAAIAGASIg/EQIgLAVIBBAAIgFgMIAMgwIAGgGgAi9CgIAAEPIgGAUICcAAIAJg6IgVAGIhQAAIgGgGIAAjpIAGgUIhAAAgAl7CgIAAEPIgGAUIBAAAIgGgUIAAhbIAGgHIBIAAIAagaIAAiOIgagZIiIAAgAGxlqIAAEEIAaAaIBoAAIAagaIAAkEIgagaIhoAAgAFdhMIgGgTIAAjqIAFgGIAnAAIAWAGIgKg7IimAAIgKA7IAVgGIAoAAIAGAGIAADqIgGATIBBAAgAgKhfIgFATIBGAAIgFgTIA3kHIAMgeIhBAAIAFAMIgmC9Igki4IAEgRIhBAAIAEARIglC4Igli9IADgMIhAAAIAMAeIA4EHIgFATIBHAAIgFgTIAjizgAmDlqIAAEEIAaAaIBoAAIAagaIAAkEIgagaIhoAAgAmmhMIgGgTIAAkRIAGgUIhBAAIAGAUIAABnIgGAGIgoAAIgGgGIAAhnIAHgUIhBAAIAHAUIAAERIgHATIBBAAIgHgTIAAhqIAGgGIAoAAIAGAGIAABqIgGATIBBAAgABDFMIgFgEIAUhjIAUBjIgFAEgAlBEZIgGgFIAAhPIAGgFIAnAAIAHAFIAABPIgHAFgAHriAIgGgGIAAjDIAGgGIAnAAIAGAGIAADDIgGAGgAlJiAIgGgGIAAjDIAGgGIAnAAIAGAGIAADDIgGAGg");
	this.shape_2.setTransform(-6.025,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFCC00").ss(1,1,1).p("AGPmDIimAAIgKA5IAVgFIAoAAIAGAFIAADrIgGATIBBAAIgGgTIAAjrIAFgFIAnAAIAWAFgAIzmDIhoAAIgaAZIAAEEIAaAaIBoAAIAagaIAAkEgABpllIAMgeIhBAAIAFALIgmC9Igki4IAEgQIhBAAIAEAQIglC4Igli9IADgLIhAAAIAMAeIA4EGIgFATIBHAAIgFgTIAji0IAjC0IgFATIBGAAIgFgTgAIYlKIAADEIgGAGIgnAAIgGgGIAAjEIAGgFIAnAAgAFCFXIA/i0IAPgXIhNAAIAIAMIgjByIgjhyIAHgMIhNAAIAQAXIA/C0IAABZIgGATIA/AAIgFgTgACvGuIhAkQIAGgSIhHAAIAGASIg/EQIgLAVIBBAAIgFgMIAMgwIAGgGIAzAAIAGAGIAMAwIgFAMIBBAAgAA+FIIAUhjIAUBjIgFAFIgeAAgAqqpuIVVAAIAATdI1VAAgAkBmDIhoAAIgaAZIAAEEIAaAaIBoAAIAagaIAAkEgApIlvIAAEQIgHATIBBAAIgHgTIAAhqIAGgGIAoAAIAGAGIAABqIgGATIBBAAIgGgTIAAkQIAGgUIhBAAIAGAUIAABlIgGAHIgoAAIgGgHIAAhlIAHgUIhBAAgAkclKIAADEIgGAGIgnAAIgGgGIAAjEIAGgFIAnAAgAlHEUIAAhOIAGgGIAnAAIAHAGIAABOIgHAFIgnAAgAlHGwIAAhcIAGgGIBIAAIAagbIAAiOIgagZIiIAAIAGAUIAAEQIgGATIBAAAgAgeGJIgVAGIhQAAIgGgGIAAjpIAGgUIhAAAIAGAUIAAEQIgGATICcAAg");
	this.shape_3.setTransform(-6.025,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape_3}]},2).to({state:[]},1).wait(1));

	// book
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(4,1,1).p("AsyvNIXrAAQBXAAAABQIAAerQAAAUgFAPQgRAthBAAI3rAAQhWAAAAhQIAA+rQAAgoAWgUQAVgUArAAgAuFu0IAIgLICAi+QADADNCAEQGhACGgABMAAAAg9IiCCgIAFgYIAKgv");
	this.shape_4.setTransform(0.025,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AKZv2IAvAIQAuATAAAyAMXq9IAAbEAL0pTIAAZpArkwVIUXAAAsWvjIUXAA");
	this.shape_5.setTransform(8,-3.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FFFF").s().p("ANKP5QgRAthAAAgAszwRQAVgUAsAAIhBAUIgWA8QAAgoAWgUg");
	this.shape_6.setTransform(-6.3,8.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6FBCF7").s().p("Ar1QmQhXAAAAhQIAA+rIAWg8IBBgUIXrAAQBXAAAABQIAAerQAAAUgGAPIhRAtg");
	this.shape_7.setTransform(-6.025,8.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCFF").s().p("AMGRcIgBgBQAGgPAAgUIAA+qQgBhQhWAAI3rAAQgsAAgVAUIgLgHICAi+QAEADNBAEINBAEMAAAAg8IiCCggAMGRcIAKgvgAM9QBIAA5pgANgPyIAA7DgAMRwCQAvASAAAzQAAgzgvgSIgugJgAJKv3I0VAAgAJ9wpI0XAAg");
	this.shape_8.setTransform(0.6,-1.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#97D2FF").s().p("Ar1QmQhXAAAAhQIAA+rIAWg8IBBgUIXrAAQBXAAAABQIAAerQAAAUgGAPIhRAtg");
	this.shape_9.setTransform(-6.025,8.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AKZv2IAvAIQAuATAAAyAL0pTIAAZpAMXq9IAAbEAsWvjIUXAAArkwVIUXAA");
	this.shape_10.setTransform(8,-3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_8},{t:this.shape_6},{t:this.shape_9},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_8},{t:this.shape_6},{t:this.shape_7},{t:this.shape_10},{t:this.shape_4}]},1).to({state:[]},1).wait(1));

	// Glow
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(255,204,0,0.557)").ss(13,1,1).p("AslyxIiqDnMAAAAgEQAMAdAcAdQA5A5BOAAIYTAFIDdjdMAAAgiBg");
	this.shape_11.setTransform(-0.725,1.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(102,255,255,0.557)").ss(13,1,1).p("AslyxIiqDnMAAAAgEQAMAdAcAdQA5A5BOAAIYTAFIDdjdMAAAgiBg");
	this.shape_12.setTransform(-0.725,1.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).wait(2));

	// hit
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AxD1NMAiHAAAMAAAAqbMgiHAAAg");
	this.shape_13.setTransform(3.275,5.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00FFFF").s().p("AxDVOMAAAgqbMAiHAAAMAAAAqbg");
	this.shape_14.setTransform(3.275,5.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14},{t:this.shape_13}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.9,-130.9,220.4,273.5);


(lib.homeBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// arrw
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(2,1,1).p("ABfAFIAACAQAAAQgQAAIiZAAQgQAAAAgQIAAiAQAAgHADgEIhhAAIC4iOIC6COIhfAAQAEAEAAAHg");
	this.shape.setTransform(-35.25,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(8,1,1).p("AgviKIgFiDIlYEJIFQEGIAAieIApAAQAyABAtAJQCRAdAkBcQCDAqAIgDQADgBgFgsQgGgygOgzQgoiWhKgoQhmg4hvgOQgjgEggAAQgaACgBAAg");
	this.shape_1.setTransform(14.0721,-7.865);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhJCVQgRAAAAgRIAAh/QAAgGADgFIhiAAIC5iOIC5COIheAAQAEAFAAAGIAAB/QAAARgQAAg");
	this.shape_2.setTransform(-35.25,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(2,1,1).p("ABfAFIAACAQAAAQgQAAIiZAAQgQAAAAgQIAAiAQAAgHADgEIhhAAIC4iOIC6COIhfAAQAEAEAAAHg");
	this.shape_3.setTransform(-35.25,20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(8,1,1).p("AgviKIgFiDIlYEJIFQEGIAAieIApAAQAyABAtAJQCRAdAkBcQCDAqAIgDQADgBgFgsQgGgygOgzQgoiWhKgoQhmg4hvgOQgjgEggAAQgaACgBAAg");
	this.shape_4.setTransform(14.0721,-7.865);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhJCVQgRAAAAgRIAAh/QAAgGADgFIhiAAIC5iOIC5COIheAAQAEAFAAAGIAAB/QAAARgQAAg");
	this.shape_5.setTransform(-35.25,20);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#666666").ss(2,1,1).p("ABfAFIAACAQAAAQgQAAIiZAAQgQAAAAgQIAAiAQAAgHADgEIhhAAIC4iOIC6COIhfAAQAEAEAAAHg");
	this.shape_6.setTransform(-35.25,20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#666666").ss(8,1,1).p("AgviKIgFiDIlYEJIFQEGIAAieIApAAQAyABAtAJQCRAdAkBcQCDAqAIgDQADgBgFgsQgGgygOgzQgoiWhKgoQhmg4hvgOQgjgEggAAQgaACgBAAg");
	this.shape_7.setTransform(14.0721,-7.865);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AmqFdQgQAAAAgRIAAh/QAAgHADgFIhiAAIC5iOIC6COIheAAQAEAFAAAHIAAB/QAAARgRAAgAGOCYQgkhciRgdQgtgJgzgBIgpABIAACdIlPkGIFXkJIAFCDIAbgCQAhAAAjAFQBvANBmA4QBKAoAoCXQAOAyAGAzQAFArgDACIgCAAQgPAAh6gog");
	this.shape_8.setTransform(-0.0029,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(2));

	// outline
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(3,1,1).p("ApcoCIS5AAQBQAAAAA8IAAONQAAA8hQAAIy5AAQhQAAAAg8IAAuNQAAg8BQAAg");
	this.shape_9.setTransform(2.525,-5.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.867)").s().p("ApcIDQhQAAAAg8IAAuNQAAg8BQAAIS5AAQBQAAAAA8IAAONQAAA8hQAAg");
	this.shape_10.setTransform(2.525,-5.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(153,255,0,0.867)").s().p("ApcIDQhQAAAAg8IAAuNQAAg8BQAAIS5AAQBQAAAAA8IAAONQAAA8hQAAg");
	this.shape_11.setTransform(2.525,-5.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.shape_11},{t:this.shape_9}]},1).wait(3));

	// Layer_4
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3,2,1).p("AgbgcQA5AIAAAz");
	this.shape_12.setTransform(73.9541,-50.1709);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(3,0,1).p("AAAAAIAAAA");
	this.shape_13.setTransform(-62.4,45.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(3,1,1).p("AK5nsIAAOcQAAA9hSAAIzNAAQhOAAgEg3QAAgDAAgD");
	this.shape_14.setTransform(7.275,2.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(51,51,51,0.867)").s().p("ApmILQhOAAgEg3IAAgGIAAgBIABAAIAAAHITpAAIAAgBQAWAAAPgFQAVgFAMgQQAOgRgFgUIgCgGIAAuYQA6AIAAA0IAAOcQAAA9hSAAg");
	this.shape_15.setTransform(7.275,-0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_15},{t:this.shape_12},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[]},1).wait(2));

	// hit
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AqlH4QgTAAAAgUIAAvHQAAgUATAAIVLAAQATAAABAUIAAPHQgBAUgTAAg");
	this.shape_16.setTransform(7.55,-1.35);
	this.shape_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-58.4,146,111.5);


(lib.CreditsPage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// TXT
	this.instance = new lib.CachedBmp_59();
	this.instance.setTransform(-193.65,-39.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgpBgHuMBSDAAAIAAPdMhSDAAAg");
	this.shape.setTransform(0.0079,0,0.8822,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgpBAHvIAAvdMBSDAAAIAAPdg");
	this.shape_1.setTransform(0.0079,0,0.8822,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-232.6,-50.5,465.29999999999995,101);


(lib.btnart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_58();
	this.instance.setTransform(-76.2,-76.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.2,-76.2,152.5,152.5);


(lib.table_art = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_57();
	this.instance.setTransform(-1935.4,-235.25,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_56();
	this.instance_1.setTransform(-1912,-231.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1935.4,-235.2,3871,472);


(lib.shelf2_art = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0B0732").s().p("Eg4YgANIgghpMBxxAAAIqUDtMhmNAAAIgBAAQgFAAgqiEg");
	this.shape.setTransform(-3.375,11.0605);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#19144C").s().p("EA4XABvMhxxAAAIgmAAIAAjdMB0BAAAIAADdg");
	this.shape_1.setTransform(0,-11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-371.3,-22.9,742.6,45.9);


(lib.shelf1_art = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_55();
	this.instance.setTransform(-671.95,-97.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-671.9,-97,1344,187);


(lib.puddle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {ripple:4};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Ripple
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AAeBVQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIADAAQAFAAAEgFIAFgJIAGgJQABgEgBgHIgFggIgEgPIgQgjIgCgEQgHgMgGgHIgEgEQgIgGgPgFQgWgFgFgDIgBgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAFgCAHACIALAEQATAEAKAEQAOAIALASIAEAJIACACIANAcIAGASIAGAjQABAIgBADIgFAKIgNARQgDACgGAAIgKgBgAguBDIACgCIADgBQACgBAAgFIAAgyQgBgJgEgIIgKgRIgHgIIgCgBIgDgDQAHgGAHAFIAIAIIAEAEIAFAIQADADABAFIACAGQADAFAAAFIABA0IgBAGQgDAGgKAAIgCAAQgEAAgBgCg");
	this.shape.setTransform(-79.475,9.8268);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AAMB5IAAgCIABgBQABgDADgBIAEgBIAFgFIADgFIAEgJIAAgDIAEgLIABgKIABgDQACgMAAgHQAAgKgBgMIgDgTIgFgQIgEgLIgGgOIgDgFIgDgFIgEgGIgMgOIgBgCIgGgFIgLgIQgHgFgLgDIgLgEIgPgFIgKgDIgCgBIgBgBIAEgCIAaAGIAPAEIAWAJQAGAEAMANIANAOQAEADAEAHIADAFIAGALIAGAQIACAHQADALACAOQACAOgBAMIgCAUIgCAPIgCALIgBACQgDAJgFAHIgEAFIgDACQgDADgFAAIgFABIgHgBgAgWBxIgDgBQADgBADgFIABgBIACgDIACgBIACgDQACgEABgEIAAgGIACgNIADgTQADgSgFgeIgCgJIgCgFIgCgGIgIgNQgCgEgGgGIgCgCIgNgOQgFgFgHgEIgJgEIgKgFIgCgBIgDgBIgGgDIgCgBQAEgDAHABIAZAKIAKAFIAIAFIANAOIAIAKIADADIAEAFIAEAHIAEAKIABAFIACAHQAGAcgDAVIgEARIgCAWIAAADIgDALIgBACIgEAEQgEAEgFABIgFABIgDgBgAg4BkIgBgCIgBgBIADAAIAEgDIAEgEIADgHIAAgCIAFgKIABgKIABgHIABgIIAAgCQAAgJgBgHIAAgFIgCgLIgIgSIgGgPIgBgCIgCgEIgDgIQgEgKgDgEIgCgCIgDgCQgDgDgGgCIgQgFIgWgGIgGgCIgCgBIgCAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAgBIAIgBIADABIAEABIAHACQAQADAOAFIAKAGIADABQAHAFAEAFIADAGIADAHIABACIABADIADAHIACAGIAIAQIABADIAEAQQADANgBANIgBAKIAAADQAAAEgCAEIgEAKIgFAMIgDAHQgDADgFABQgEACgFAAIgCgBgAhgBbIABgCIACgCIABAAQADgCAAgDIACgDIABgHIADgPIABgGIAAgCIACgQQgBgKgEgOIgCgIIgBgDIgDgLIgEgLIgCgDIgIgGIgMgIIgOgGIAAAAIgDgBIgFgCIgBAAQACgDAGgBQASAFAIAEIAHAEIAGAEIAEADQAFAEACAEIADAJIAEAKIABAGIAEAOQAFASgDAPIgCALIgDAPIgBAIIgBABQgCAIgHACIgCACIgEABQgDAAgDgDgABzBaIgBgCIAAgBQgBgEABgCIACgCIABgBIAEgIIACgMQADgGAAgFIAAgNIgEgmIgBgGIgDgOIgEgKIgJgSIgHgMIgCgEIgGgKQgFgJgFgFIgBAAIgGgEIgCgBQgMgFgQgEIgOgEQgNgEgFgEIgBgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAIAZAHIAOADIAMAEIALADQAOAGADAEQAFAEAFAIIAEAGIAGALIACADIADAGIALAXIABADQADAGACAOIABAEIAFArIAAANIgCAKIAAACIgGAUIgBAEQgCADgDACQgCABgDAAQgDAAgDgCgABQBTIgCgBIAAgDIgCgGIABgCIAAgDIACgFIABgNQAAgZgDgaIgDgTIgFgPIgBgBIgKgVQgCgGgEgDIgCgCQgCgCgGgDIgdgPIgGgDIgEgCIgEgEQACgEAIADIAWAJIAKAEIAKAEIALAIQAEAEAEAHIAFAKIAGAMIAEAIIADAKIADAUQADAeAAAbIgBAMIgCAIQgBAFgEADIgEABIgCgBg");
	this.shape_1.setTransform(-68.1417,8.3571);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("AgJCcQALgDAIgIIAEgHQAEgHACgLIADgdIAIgbQAFgXgKgvIgEgOQgDgLgEgGQgFgJgJgJIgQgQIgVgUQgLgIgXgHIgUgGIgQgHQAEgEALADIAmANQATAHAJAFIAVAVIAPAPQAJAJAGAHQADAGADAIQAEAJADAMQALArgGAdIgHAZIgEAgQgDAOgFAJIgGAGQgFAGgJACIgFABQgFAAgEgDgAiTBzIAHgFQADgDACgKQABgIAHgWIACgIIABgBQADgNgBgIQAAgNgIgSIgGgPIgFgPQgDgMgDgDIgCgCQgEgEgIgDQgTgHgUgEIgNgDQABgEAIAAIAHABQATADAdALIADACQAJAEAEAFQADADABAJIAFANIACAHIAIATQAJAZgEASIgFANQgEALgEAVQgCAKgGAFQgEAEgFAAQgEAAgEgDgADGBfIABgFIABgOQACg0gHg4QgDgSgDgIQgDgJgIgMIgSgeQgGgLgHgFIgNgFIgwgOQgQgEgGgHQADgFAMAFQAMAHAVAFIAPAFIASAEQAMAFAEACQAEAEAHAMIASAdQAKAQADAKQACAGAEAWQAFAuAAAlIgBAcQAAAKgEAEQgCACgEAAQgEAAgBgEg");
	this.shape_2.setTransform(-56.85,6.8173);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FF").s().p("AAKCdIgBgCQAKgFAIgIIAEgGIAEgEIAFgLIADgIQACgKABgJIAAgDIADgYQABgcgKglIgBgCIgFgMIgHgRIgFgIIgHgLIgIgLIgGgGIgQgPIgFgEQgMgJgLgGIgHgEIgKgHIgFgCQgJgFgGgBQAEgEAIABQASAHAFAEIAPAKIAWANQAIAHANANIACADQAIAHAFAIIAKAOIACAFIAGANIAIATIAEASQAGAbgBAYIgCAQIgCAIIgCAQIgGAOIgCAEQgFAJgFAGIgFAGIgCACQgFAEgFACIgBAAIgFABQgDAAgDgCgAh6CJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAgBgBIgCgEIADgGIABgBQACgGABgJQAAgOADgVIABgJIAAgDQABgNgBgMIAAgEQgCgOgEgKIgDgIIgGgKIgDgHIgIgQIgCgFQgEgIgDgDIgCgDIgCgBQgDgCgHgDIgFgCIglgKIgHgCIgOgGQADgEAJACIABAAIAHADIAWAGIAMAEIARAEIAHADIADACIADACQAFADAFAHIABACIAGAMIAGAOIABABIADAGIAIAQIACAGIAEASQACASgBAQIgBARIgDAVIgCAQIAAAIQgCAHgDAEIgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgDAAIgCgBgADJB5QgEgBgCgCIADgFIAIgMIAFgPIAAgBQADgQABgWQAAgYgEgRIgGgSIgCgEIgGgZIgBgEIgIgUIgDgJIgNgaQgFgKgGgHIgJgIIgCgCQgJgIgJgDQgLgFgSgDIgBAAQgSgDgIgHQAFgEAJADIAkAKIASAFQANAGAEAFQAIAHAEAFQAGAGAGALIAMAWIAEALIADAJIAGAUIAJAeIACAGQAFALAAAGIACATQABAWgCARIgBAHIgBAFQgCALgEAJQgDAJgDADIgFADQgDACgDABIgBAAg");
	this.shape_3.setTransform(-41.4937,3.7708);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0099FF").s().p("AhsCcIAAgFIACgOQACg0gHg5QgDgSgDgIQgEgIgHgMIgTgeQgFgLgHgFIgNgFIgwgOQgQgEgHgHQAEgFAMAFQAMAHAVAFIAPAEIASAFQAMAFADACQAFAEAHAMIASAdQAJAQAEAJQACAGAEAWQAFAvAAAlIgBAcQAAAKgEAEQgCACgEAAQgEAAgBgEgAAaCcIAbgZQAIgJAEgHQADgHAAgPQAAgvgPgmIgSgmQgHgRgFgGQgHgKgQgMQgSgNgGgHIgNgPQgJgIgIAAQAEgEAIAAQAGABAGAEQAFADAFAGIAIAKQAHAHAPANQAQAMAHAIQAJALALAYQAPAhAGATQAIAeAAAiQAAAPgEAIQgDAHgJAJIgUATQgFAGgEABIgFABQgEAAgCgDgAC/CMQAUgIAKgUIABgCQAGgOACgaQACgdgGgPQgEgJgJgPQgGgLgEgUIgHghQgFgWgXgkQgJgQgIgFQgJgFgXgCQgWgCgJgIQAGgCAJACIAPADIAYAEQAOACAIAGQAGAFAGAKQAMATAJAQQAIANADALQADAIADAOIAEAWQAEAWAKAPQAIAPABADQADAHAAAOQAAAZgDAPIgEAPQgEAMgIAJQgGAHgGADIgOAFIgIgCg");
	this.shape_4.setTransform(-26.125,0.7429);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0099FF").s().p("AhsCcIAAgFIACgOQACg0gHg5QgDgSgDgIQgEgIgHgMIgTgeQgFgLgHgFIgNgFIgwgOQgQgEgHgHQAEgFAMAFQAMAHAVAFIAPAFIASAEQAMAFADACQAFAEAHAMIASAdQAJAQAEAJQACAGAEAWQAFAvAAAlIgBAcQAAAKgEAEQgCACgEAAQgEAAgBgEgAAaCcIAbgZQAIgJAEgHQADgHAAgPQAAgvgPgmIgSgmQgHgRgFgGQgHgKgQgMQgSgNgGgHIgNgPQgJgIgIAAQAEgEAIAAQAGABAGAEQAFADAFAGIAIAKQAHAHAPANQAQAMAHAIQAJALALAYQAPAhAGATQAIAeAAAiQAAAPgEAIQgDAHgJAJIgUATQgFAGgEABIgFABQgEAAgCgDgAC/CMQAUgIAKgUIABgCQAGgOACgaQACgdgGgPQgEgJgJgPQgGgLgEgUIgHghQgFgWgXgkQgJgQgIgFQgJgFgXgCQgWgCgJgIQAGgCAJACIAPADIAYAEQAOACAIAGQAGAFAGAKQAMATAJAQQAIANADALQADAIADAOIAEAWQAEAWAKAPIAJASQADAHAAAOQAAAZgDAPIgEAPQgEAMgIAJQgGAHgGAEIgOAEIgIgCg");
	this.shape_5.setTransform(-14.125,-5.2571);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B6E5FF").s().p("AgwAuQgIgCgGgDQgQgNgDgeQAFgNAPgJQAPgJAXAAIATABQAKAAAIgDIAQgHQAMgGAMACQANACAJAKQAEAFABAFIAAAAQgLAJgNAMIgfAfIgCACIgCABIgBABIgCABIgBABIgBABIgRAKIgHACIgCAAIgIABQgVAAgKgCg");
	this.shape_6.setTransform(-64.025,8.1339);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AJ1BuIgfgKQAyAIAxgJQArgJAqgPIAGAHIgDAFQgtAdg2ACIgDAAQgbAAgbgIgArehXQAsgjAdAGQAeAFgKAPQgKANgbgLQgUgIguAjQgYASgTASQARgbAkgdg");
	this.shape_7.setTransform(-7.225,1.208);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BBE8FF").s().p("Ah1B3QgTgNgDgjQgEgqAQgdQANgVAjgbQAjgaAggRQAOgKAKgFQAsgWAoAFQATACAJAIIgDAAQAKAHAFAJQAGAMgCAPQgCAOgHANQgLARgcAWIhFA2QgCgFgEgEQgIgKgNgDQgMgBgLAFIgRAIQgHADgLAAIgTgBQgXAAgPAIQgPAJgFAOQADAeAQANQAGADAHACQAKACAVAAIAIAAIAAAAIgJACIgMAAQgSAAgKgGgAhEB7IADAAIAGgCIgIADIgBgBg");
	this.shape_8.setTransform(-58.199,0.592);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#43AFFF").s().p("AtXgkQgYgagHgjQBpCjDCAQQCzAHCtgvQClgtCngnQC2goC0AsQBUAWBTATQCPAiB2hUQhiBSiXgIQh4gChzgnQhlgkhrASQixAcivAtQisAsiwALQgWACgVAAQi2AAh9iGg");
	this.shape_9.setTransform(-3.625,19.9909);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8ED8FF").s().p("ApuEpQjCgQhpikQA2jNDfgoQCSgbCOgfQBegWBagjQCqhCC0APQDFAIDCAlQCJAZByBLQBgBAAFBzQAEBVhIA0Qh3BViOgiQhUgUhUgWQi0gsi1AoQinAnilAuQiXApicAAIgugBgAgzjpQikA+irAiIjNAmQgjAGghAQQiNBLARCFQADAZAUAQQCqB9DJgvQCygoCvg1QCSgtCaAJIA1AEQBBAPBCgDIAbAAIBnAOIBMgCIACAAQCPAFAsh1QAJgXgGgZQgoi5i9AYQi9goi7gqQg5gNg4AAQhaAAhZAigAslg7QgkAdgQAbQATgTAXgRQAugjAUAIQAbAKAKgNQAKgOgegGIgIgBQgbAAgmAfg");
	this.shape_10.setTransform(-0.1919,-1.5106);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#95DBFF").s().p("ABJCiIAEgBIA3gXIADgCIACgBIADgCQAegPAOgLQAXgRAKgVQAQgjgSg6QgJgcgNgbIACAEIgFgCQgEgCgNgKQgKgJgVgHIgggNIgggUQgQgKgbgKQC9gZAoC4QAFAagJAXQgpBwiFAAIgNAAgACdiQIgDgDIgDAAIgDAAIAJADgAkJCKIAjABQBJAAAUABQANAAAJAEQAFADADADIgaAAIgXAAQg3AAg2gMg");
	this.shape_11.setTransform(58.0793,-2.841);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#ACE1FF").s().p("AnyCdQgVgPgDgZQgRiFCNhLQAhgRAkgGIDMglQCrgiCkg/IhSAmIg9AaQgUAHg3ASIhuAhQgvAOgcAFQgKgHgSgDQgogFgtAXQgKAFgOAJQghARgjAbQgjAagMAVQgRAeAEAqQADAjATAMQAOAJAbgDIAJgBIgBgBIABABIACAEIACACIAIAHQAlAgATAOQAdAWAaAJQAJgCAPABQA1AEBcgUQB9gbB9gmQBlgeAngJQBQgQA/AIQA2ALAbAEIAFAAQiagIiTAtQivA0ixApQg3ANg0AAQiMAAh7hcg");
	this.shape_12.setTransform(-26.304,-0.0722);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A6DCF8").s().p("AqTDcQgTgOglggIgIgGIgCgDIgCgEIAJgCIASgLIABgBIABAAIACgCIABgBIACgBIACgCIAfggQANgMALgJIABAAIBEg3QAdgXAKgQQAIgNACgNQABgPgGgMQgFgJgJgHIADgBQAdgFAugOIBughQA4gSAUgHIA9gaIBSglQCPg4CUAiQC8ArC9AoQAcAKAPAKIAgAVIAgANQAVAHAKAIQANALAEACIAFACIgBgEQAMAbAJAcQASA6gQAjQgKAUgXASQgOALgeAPIgCABIgDABIgDACIg2AXIgFABIgBABIhMACIhogOQgDgDgFgDQgJgEgNAAQgUgChJAAIgjAAIg1gEIgFgBQgbgEg2gLQg/gIhPAQQgnAJhlAeQh9Amh+AbQhcAUg1gEQgPgBgJACQgagJgdgWgAHgCaQAcAIAcAAQA2gCAugdIACgFIgGgHQgqAPgrAJQgxAJgygIgAKLiQIADAAIAEABIACADIgJgEg");
	this.shape_13.setTransform(7.7514,-3.1976);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(68,28,13,0.667)").s().p("AqECdQhugOhjg6QgxgcgWg0QgNgeAGgeQAIgpAUgnIAJgGIAGgCIAKAAIAJACIAIABIAIACQgDAjgPAlQgOAjARAgQAcA2A5AYQA8AYA9AVIAPAFIAEAFQBEAPBGgKIC9gbQBagPBagWIgQgGQAMgPAcgBQAsgHAugFIATgGQBcgWBegHQBYgJBTAWQA0AQA1ALQBiATBhgYQA7gPA9AKQAegHAZgWQBKg+gXhiIAGgFIAIgBIAIgBIAIAAIAHACIAHADIADACQANAsgJAuQgKAugkAaQgiAagiAWQg+AohKAHQh8ANhzgpQjphTjoBJQi8A5jDAbQhJALhLAAQgtAAgtgEg");
	this.shape_14.setTransform(-0.0064,15.0918);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.4,-31.3,186.9,62.6);


(lib.containers_art = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_50();
	this.instance.setTransform(-45.85,-25.35,0.2709,0.2709);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.8,-25.3,91.8,50.6);


(lib.cauldron2_art = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#798F2B").ss(10,1,0,3).p("ABGAAQAAAjgVAaQgUAZgdAAQgcAAgVgZQgUgaAAgjQAAgiAUgZQAVgaAcAAQAdAAAUAaQAVAZAAAig");
	this.shape.setTransform(13.6,-1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9900").s().p("AAdBpIgFgbQgCgLAAgMIAAgOIgEgQIgMgsIgGghQgDgUABgOQACgMADgEQADgDAGABIABAAIAQAAQAHgBADADQACACACAHQAEAOAHAhIAFAZIAKAsIATBSIAAAAgAhBBpIgBAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIAAgFQAAgUgBgXIgIg5IgFgrIAAgCQgCgUAAgRQAEgBALAAIAWAAIACAAQAGAAACACQADADACAJIAQBtIADAPIAEASIAGAaIABAFQAAAAgBABQAAAAAAABQgBAAgBAAQAAAAgBAAIgEABg");
	this.shape_1.setTransform(-10.43,-40.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#354500").s().p("AETBIQgKgDgGgIIgGgJIgUggIgJgPIgCgEQgGgOADgPQACgJAGgKQADgHAEgEQAFgEAGgDQAMgGANgBQANgCANADQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAIAAAGQABAFADAGIACAFIACAGIAGATIAEAUIAEAIIAEAIQAFALgBANQgBAIgEAIQgEAHgFAFQgLAKgOABIgFABQgHAAgGgDgAkkBKQgOgBgLgKQgGgFgDgHQgEgIgBgIQgBgNAFgLIAFgIIACgIIAFgUIAEgPIABgEIAGgLQACgGAAgFIABgGQAAAAABgBQAAAAAAAAQABAAAAgBQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAQAMgDANACQANABAMAGQAGADAFAEQAEAEAEAHQAEAKACAJQAEAPgGAOIgDAJIgHAKIgUAgIgHAJQgHAIgJADQgGADgHAAIgFgBg");
	this.shape_2.setTransform(0.2,45.0725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9DB34F").s().p("AgxA8QgTgZAAgjQAAgiATgZQAVgaAcABQAdgBAUAaQAUAZAAAiQAAAjgUAZQgUAagdAAQgcAAgVgag");
	this.shape_3.setTransform(13.6,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5F7416").s().p("AgrCcQgNgGgLgIQgPgLgMgPQgmgvgBhCIAAgDQAAgPACgOQAHgxAeglQAogwA2AAQA4AAAnAwQAnAwAABDQAABEgnAwQgnAwg4AAQgWAAgVgIgAgthGQgUAZAAAjQAAAiAUAaQAVAZAcAAQAdAAAUgZQAUgaAAgiQAAgjgUgZQgUgZgdAAQgcAAgVAZg");
	this.shape_4.setTransform(13.225,-0.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#55680F").s().p("Ag5GTQhUgKhRgoIAEgIQAFgPgDgQQgCgJgFgJQgEgHgEgEQgEgEgHgDQgMgGgNgCQgNgBgMADQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABIAAAFQgBAFgCAGIgFALIgCAFIgBgBQgjgxgZgwQglhIgRhEQgIgdgEgcQgPhhAbhVIAGgVQAQgqAZglIBGhPIAAABIAWgWQAWgUAOgIIAHgEIAlAAIAkAAIA0AAIArAAIA7AAICBAAIA3AAIBCAAIAaAAIAGAEIAeAWIAQAMIADACIgGAFIAAABIACABQAQALAbAgQBtB8gaDKQgJBGgZBHQgSA0gRAeQgPAZgrAjIgDgGQgDgGAAgFIgBgFQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABQgNgDgNABQgNACgMAGQgGADgFAEQgEAEgDAHQgGAJgBAJQgDAQAFAPIACAEQgkATgnANQhMAahMAAQgcAAgcgEgAAmjnQgfAmgHAxQgBAOAAAPIAAAEQABBCAmAtQAMAPAOALQAMAJANAFQAUAJAYAAQA3AAAngxQAogvAAhEQAAhEgogwQgngwg3AAQg4AAgnAwg");
	this.shape_5.setTransform(-0.006,10.7242);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AA2BIIgaAAIAhhtQAFgSADgIIABgDIAHACIAFACQAGACADADQACAFgBAHIgEALQgCAGgDANIgXBbIgGgEgAhcBIQABgDACgBQADgCACAAIACgGIADgGIAGgQIAFgPQAHgYAEgWIABgKIADgJIAFgLIAEgLQADgHACgBQADgDAFAAIAJABQAIABALAEIAFADIAEABIgDAKIgDAMQgGAfgLAiIgHAUIgIAWIgFAIIAAAAg");
	this.shape_6.setTransform(20.6143,-37.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC00").s().p("ACKBxIAAAAIAEgIIAIgWIAHgUQAMgjAHgeIADgMIADgKIABgDIAGgQIAGgPQAEgJADgCQADgDAFAAIAIAAQAIADALAFIAGADQAGADABAEQACAGgCALQgBAAgDAMIgBADQgEAIgFARIggBugAiUBxIAEgBQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAIgBgFIgGgaIgEgSIgDgPIgQhtQgCgJgDgDQgCgCgGAAIgCAAIgDgMIgCgLQAAgFACgCIADgBIABgCIgBgBIAtgBQAIAAAEAEQADACACAGIABADQgGAAgDADQgEAEgCALQgBAPADATIAHAiIAMAsIAEAQIAAAOQAAAMACALIAFAbgAjsBxIgHhUIgDgUIgBgJIgDgOIABgGIAEgEIAOgKIAAgBIABgCQAGgDAEABIAAACIAFAqIAIA5QABAYAAAUIAAAFQABAAAAAAQABABAAAAQABAAAAAAQABAAABABIABAAg");
	this.shape_7.setTransform(3.075,-41.2528);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.2,-52.5,88.5,105.1);


(lib.cauldron_art = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#242424").s().p("ATAEFQgpgNgdgbQgKgLgTgXIhahyQgZgggNgWIgIgOQgYg1AOg5QAIghAXgjQAQgYASgOQATgPAegMQA0gWA6gFQA5gGA3ALQADgJALgBQALgBAFAIQACAFAAAOQABASALAYIANAVIAJASQANAaAMAtIAVBIQAGARAGAMIAUAgQAXApgGAuQgEAdgQAbQgQAagYATQguAkhBAFIgSABQggAAgfgKgA0QEOQhAgFgvgkQgYgTgQgaQgQgbgEgdQgGguAXgpIATggQAHgMAGgRIAVhIQAJghAJgWIAHgQIAWgnQALgYABgSQAAgOADgFQAEgIALABQALABADAJQA3gLA5AGQA6AFA1AWQAdAMATAPQASAOAQAYQAXAjAIAhQAOA5gYA1QgGAMgMASIgcAmIhaByQgSAXgLALQgdAbgpANQgfAKggAAIgSgBg");
	this.shape.setTransform(0.95,144.159);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkAVoQlygllqiQQAMgSAGgMQAYg2gOg5QgIghgXgjQgRgYgRgOQgTgPgegMQg1gWg5gFQg5gGg4ALQgCgJgLgBQgLgBgFAIQgCAFAAAOQgBASgMAYIgVAnIgHAQIgFgDQiaiyhzitQihkEhOj3QghhogThlQhAlhB0k3QANglARglQBFiaBtiHIE8khIgBADQgFAIABAEQACAFAIADQBBAbBTAYQA3APBfAXIBuAbQBMASAVAEQA7AMBMAGQBKAGB9AAQCWAAAyADQAfABCjALQB2AJBLgCQBPgBCcgSICcgSQDLgXBngPQDBgcEhg+QAmgHAVgHQAggLAWgRQgTgNgMgUIAJAAQAPAEAXAMQBHAnB0B1QHiHChyLdQgnD+hsEAQhQC/hMBqQhDBdjBB+IgMgVQgLgYgBgSQAAgOgDgFQgEgIgLABQgLABgDAJQg3gLg6AGQg5AFg1AWQgdAMgTAPQgSAOgQAYQgXAjgJAhQgNA5AYA2IAHAOQieBEirAwQlQBdlUAAQh8AAh9gMg");
	this.shape_1.setTransform(-0.0007,27.3713);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#161616").s().p("AhpE/QiigMgfgBQgzgCiVgBQh9AAhLgGQhLgGg7gLQgVgEhMgSIhugbQhggXg3gQQhSgXhBgbQgJgDgBgFQgBgEAEgJIACgCQAOgdgBg1QgBiIg5h/Qgcg9gjgYIgKgGQAGgIATAAMAsoAABQAcAAAMAIIgCAFIhLCRQgXAtgLAaQgQAogEAjQgFApAMAlQAFAPAIAMQAMAVASANQgWAQggALQgVAHgmAIQkhA+jBAbQhnAQjLAXIibARQicAShQACIgXAAQhFAAhlgHg");
	this.shape_2.setTransform(-1.575,-120.7887);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#393939").s().p("AWZBhIACgFQgMgIgcAAMgsogACQgTAAgGAIIAKAHIhQAAIAAggIAAgkQAAhSAbgeQANgOAOABMAubAAAQBQAAAHBfQADAdgGAkIgGAdIAAAEg");
	this.shape_3.setTransform(1.0141,-161.632);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cauldron_art, new cjs.Rectangle(-195.8,-171.3,391.6,342.6), null);


(lib.catContainer_art = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B4A0A7").ss(10,1,0,3).p("AEPktIANAKQAQANAQAQQAyA0AcBAQBYDMitD0IqCAAQgBgBAAgBQgOgSgQgfQgjhBgOhGQgGgfgCgfQgGhMAWhHQAfhpBYhf");
	this.shape.setTransform(-0.0196,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C4AEB8").s().p("AhFBEQgcgcAAgoQAAgnAcgcQAdgcAoAAQAoAAAdAcQAdAcAAAnQAAAogdAcQgdAcgoAAQgoAAgdgcg");
	this.shape_1.setTransform(7.5,6.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B4A0A7").s().p("AlNGQIgBgCQgOgSgQgfQgjhBgOhGQgGgfgCgfQgGhMAWhIQAfhnBYhfIAHAAIAFgJIgEAAIgGgBIgCAAIgEgBIgDgCIgBgCIgBgBIACgCIACgBIACgBIADgBIACAAIAGAAIAAgBIALAAIBli3ICAC3IBfAAIBYivIBxCvIAMAAIAGABIADAAIADABIACACIACABIAAACIgBABIgCACIgCABIgCABIgDAAIgGABIgHAAIgBAAIAJAAIANAKQAQANAQAQQAyA1AcA/QBYDMitD0gAAGgFQgcAbAAAoQAAAoAcAcQAdAcAoAAQApAAAcgcQAdgcAAgoQAAgogdgbQgcgcgpAAQgoAAgdAcgAjgjDIAJAAIAAgBIAAAAIAAAAg");
	this.shape_2.setTransform(-0.0196,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.3,-40,94.6,85);


(lib.bookcase3_art = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494482").s().p("EAWOA3SQhLAAAAiCIAAhJIgHAAMgrzAAAQgbAAgOgTQgNgTABglIAAh4QgBgjAMgTIAGgHQANgOAXAAMArxAAAQAIgBAGACQACgVgCgdIgFgwIAAhJIABgIQACgOgDgHIAAgKQACgvAAhSMAAAgqqIADAAIAAgCIAAgDIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgDIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgDIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgDIAAgCIAAgBMgr4AAAQgsAAhpAzQgMgUAAgiIAAh5QAAgvAWgSQAOgKAUAAMAtOAAAQAJAAAHACMAAAgjuIAAgzIAFgCQAEhNgDhMQgCgwgGhXIAAj9IAMhTIh+BPMgqBAAAQgTAAgNgOQgXgYAAhEIAAirQAAg5AQgaQAOgXAZAAMAsgAAAQAaAAAOAYIBvAAQBLAAAACCMAAABqHQAACChLAAg");
	this.shape.setTransform(23.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#402413").ss(3,1,0,3).p("ADiCDIltjTIgSgLIhEgn");
	this.shape_1.setTransform(-148.75,294.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2F2968").s().p("EAECA1UImykAQgggSAAhLIAAhfIAAgCQAAhJAgAUIAGADIBDAnIASALIFXDKQAKAGAHALQgMATAAAjIAAB4QAAAlANATQgCACgDAAQgGAAgHgFgAjsEhQgHgIgEgVQgCgQAAgXIAAhoQAAhUAdgOIFRihIAzgYQAJgEAHAEIgBABQgOAMgFAXQgDANAAARIAAB3QAAAjAMASQgbANggARIjyB+QgrAWgaAQIgLAGQgRALgJAIIgCgCgEgEfgn1QgEgWAAgiIAAiUQAAh2AngmIIGnyQALgLAIACQgQAaAAA6IAACqQAABFAXAYQgJAegRAQIoGHzQgJAJgHAAQgOAAgFgig");
	this.shape_2.setTransform(-154.225,-9.9816);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660000").s().p("A34glIgTgLIhDgnIRzgoQR0gqAJgFID/BbIEeBlIGQCOMgq0AAAQgXAAgOAPg");
	this.shape_3.setTransform(-9.85,290.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4E2413").s().p("AAUgKQgLAOgPAFIgMACIAmgVg");
	this.shape_4.setTransform(159.6,-1.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#04021B").s().p("EgR4AquIgRgLIASALgEgUiAnzMAAAgnSQAEgCAFgCQADAVAHAHIAFAGQgRAPAZAAMAojAAAMAAAAnVQAAA2ACAnIkAhbQgJAGx0ApIxzApIgFgDQgggUgBBIQgvgEAAi3gEgUignyQAAiFAZgmQAKgRAOABMAoLAAAIAIABIgBAsMAAAAjsMghoAAAQgUAAgNALIgDgDIABgBQgHgEgJADIgyAZQAFgVANgKQgGgFgJAEIl5C1g");
	this.shape_5.setTransform(-48.375,13.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#19144C").s().p("AOYaaMgojAAAQgZAAARgQQAVgUBUgsID0h+IA6gdQBqgyAsAAMAs8AAAQAsAAhYAyIgnAWIgOAHIj1B+QiYBQg3AAgA7VxSQgiAAAsg/QAJAzAbgaIIHnzQAQgQAJgeQANANAUAAMAqBAAAIgkAWIhJAvQihBoiFCGQgmAkgUAbQgLANgZAjQgVAfgOAQQgtA2g0AKIAAAFIgCAAIgLADIAAASIgIgBMgoLAAAQgOAAgKAQg");
	this.shape_6.setTransform(-9.0768,-147.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0B0732").s().p("EAFsAxNIg5AAIgLgEQiag2ijg9Ig5gXIgSAAIkehmQgBgnAAg2MAAAgnVIEYAAQA3AACYhPID0h/IAPgHIAMgCMAAAAqsQAABRgDAvIAAAJIAAACQADAGgCAOIgBAIQgDAcACAbIABASIAEAxQADAbgCAWIgNgBgAFli8IrkAAMAAAgjsIAAgsIAAgSIALgDIACAAIAAgEQA0gLAtg2QAOgQAWgfQAZgjAKgMQAVgbAlglQCGiGCfhoIBJgvIAkgVIB+hQIgMBUIgDAeQgHBIAHBsIADArQAHBXABAwQADBNgFBMIgEACIABAzMAAAAjvQgIgCgKgBg");
	this.shape_7.setTransform(121.4,-8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185.5,-353.8,371.1,707.6);


(lib.bookcase2_art = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_49();
	this.instance.setTransform(-214.05,-408.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_48();
	this.instance_1.setTransform(-192.75,-366.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-214,-408,428,816);


(lib.bookcase_art = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#792617").s().p("EAqpACWMhV0AAAIAAgmIAGAAIAAkFMAnPAAAIAABdIFkAAIAAhdIfBAAIAiAAQgHgOFACcQCgBNChBQIgiABg");
	this.shape.setTransform(-1.2,21.6172);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#62180A").s().p("AlNf9IAA10IJ5AAIAAkJIAigBQihhQighOQk/ibAHAOIgiAAIAAodIKbAAIAANIIAAdCgAlNqvIAAgBIAA3cIAAgSQAAANDmADIBtAAQCkAACkgCIAAgwIAAAAIAAA0IAAXdg");
	this.shape_1.setTransform(241.7,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#571306").s().p("Egl8ATzIAAgoIACAAIAAkhIADAAIAAjOIgDAAIAAkMMAnRAAAIAAIeMgnOAAAIAAEFgAG9PuIAAoeIfAAAIAAIegEAj5ADpIAAgBIxvAAIAAABIrNAAIAA1QIlmAAIAAVQIiyAAIAAgBI5vgBIAAABIAAABIqwAAIAA3bMBL3AAAIAAXbg");
	this.shape_2.setTransform(-34.65,-93.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#862E1E").s().p("EAq/Ai4IAAgiIAA9CIAAtJIqcAAI/BAAIAAIdIAABdIlkAAIAAhdIAAodMgnTAAAIAAENIAEAAIAADOIgEAAIAAEgIgCAAIAAAoIAAAmMBV0AAAIAAABIAAEJIp6AAMhOaAAAIAAgxIiiAAMAAAgrkIFEAAIAAXcIKxAAIAAgCIAAAAIZvAAIAAACICzAAIAA1SIFkAAIAAVSILNAAIAAgBIRvAAIAAABICFAAIAAABIKcAAIAA3dIFbAAMAAABFvg");
	this.shape_3.setTransform(0,2.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-309.7,-225.8,619.5,451.70000000000005);


(lib.book5_art = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3BAA97").s().p("AgTEoIAAo5IATgLIAUgLIAAJPg");
	this.shape.setTransform(-40.25,-4.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99CC99").s().p("AATEvIgmAAIAApLIAAAAIAEgCIADgCIAFgEIATgKIAHAAIABAAIAAJdg");
	this.shape_1.setTransform(-36.15,-5.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D0E564").s().p("AgiFDIAAgmIACAAIAApcIgCAAIAAgDIBFAAIAAKFg");
	this.shape_2.setTransform(-30.775,-4.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66CC99").s().p("AlZFsIAArXIKzAAIAALXg");
	this.shape_3.setTransform(7.675,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.2,-36.3,84.5,72.69999999999999);


(lib.book4_art = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#798F2B").ss(10,1,0,3).p("AnJlNIBsAAIAAKiIhsAAgAlBlUIMLAAIAAKpIsLAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#798F2B").s().p("Ag1FRIAAqhIBrAAIAAKhg");
	this.shape_1.setTransform(-40.4,0.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B4A0A7").s().p("AmFFVIAAqpIMLAAIAAKpg");
	this.shape_2.setTransform(6.825,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.8,-39.1,101.69999999999999,78.2);


(lib.book3_str_art = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AomibQALgFARAAIQVAAQA3AAAAA2IAADVQAAA2g3AAIwVAAIgcgFQgDgBgDgCQgVgNAAghIAAjVQAAglAbgMg");
	this.shape.setTransform(-0.025,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#669999").s().p("AoKChIgcgFIgGgDQgVgNAAghIAAjVQAAglAbgMQALgFARAAIQVAAQA3AAAAA2IAADVQAAA2g3AAg");
	this.shape_1.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,-18.6,120.6,37.2);


(lib.book3_art = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#959595").s().p("AgTGhIAAshIATgRIAUgQIAANCg");
	this.shape.setTransform(-40.25,-6.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9E9E9").s().p("AATGrIgmAAIAAs7IAHgHIAFgEIATgPIAHAAIABAAIAANVg");
	this.shape_1.setTransform(-36.125,-8.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1F1F1").s().p("AgiHHIAAg1IACAAIAAtVIgCAAIAAgDIBFAAIAAONg");
	this.shape_2.setTransform(-30.775,-5.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3D3D3").s().p("AlZIAIAAv/IKzAAIAAP/g");
	this.shape_3.setTransform(7.675,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.2,-51.2,84.5,102.4);


(lib.book2_art = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjKoBQANgVAggBQADAAABAAIDmABQARAAALAFIABAAQARAHAHAQIBWimIgGSDADYqjIAAADACCn6QAEAMAAARIgFRHQAAAVgIAOQgOAXgkAAIjlgCQg6AAABg6IAFxGIAFgdQABgEACgCIBTihAB8KOIBWil");
	this.shape.setTransform(-0.2252,0.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC66").s().p("AieKgQg6AAABg5IAFxGIAFgdQABgEACgDQANgUAggBIAEAAIDmABQARAAALAFIABAAQARAGAHARIBWimIgGSCIAAAGIhWCmIgDgCQAIgOAAgVIAFxGQAAgRgEgMQAEAMAAARIgFRGQAAAVgIAOQgOAXgkAAg");
	this.shape_1.setTransform(-0.2252,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABbBPQgMgFgQAAIjmgBIgEAAQgTgMAPggIAag6QAXgxA5AAIDSAAQA5ABgVAzIgbA4IgBACIgBAEIgBABIgCACIgtAmIgJACg");
	this.shape_2.setTransform(1.2259,-60.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.3,-69.3,48.2,140.1);


(lib.book1_art = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAF0WQAKAbAAAnMAAAAmpQAAAxgPAfQgXAyhBAAImbAAQhnAAAAiCMAAAgmpQAAgnAJgbQACgIAEgGQAYgyBAAAIGbAAQBIAAAVBAIJEC/IgDAEMAAOAmBAJbUnIgHAHAAjTiIIxBM");
	this.shape.setTransform(0,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC99CC").s().p("AjNVXQhnAAAAiCMAAAgmpIAJhCQADgIAEgGQAYgyA/AAIGbAAQBIAAAVBAIAKBCMAAAAmpQAAAxgPAfQgYAyhAAAg");
	this.shape_1.setTransform(-29.425,-0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C684BD").s().p("AkJTWIgUgMMAAAgmpQAAgogJgbIJDDAIgEADMAAOAmCg");
	this.shape_2.setTransform(30.025,1.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.book1_art, new cjs.Rectangle(-62.8,-139.2,125.6,278.4), null);


(lib.bgAtmosphere = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Floor
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#CCCCCC"],[0,1],-8,-210.7,-8,307.2).s().p("Ej82AfsMAAAg/XMH5tAAAMAAAA/Xg");
	this.shape.setTransform(0.05,351.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.BG_Illustrator();
	this.instance.setTransform(-1606.4,-556.8,1.2395,1.16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#01461D").s().p("AgQAtQgNgtAOgsQAFgRAKAAQAIAAAGAPQASAugSAvQgFAPgJAAQgKAAgGgRg");
	this.shape_1.setTransform(-723.7875,516.3493);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bgAtmosphere, new cjs.Rectangle(-1618.2,-556.8,3236.6000000000004,1113.6), null);


(lib.replayBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txy
	this.instance = new lib.CachedBmp_92();
	this.instance.setTransform(-95.3,-7.2,0.4165,0.4165);

	this.instance_1 = new lib.head_mc();
	this.instance_1.setTransform(-116.65,5.95,0.5096,0.5096,0,0,0,2.1,-21.8);

	this.instance_2 = new lib.CachedBmp_93();
	this.instance_2.setTransform(-95.3,-7.2,0.4165,0.4165);

	this.instance_3 = new lib.CachedBmp_95();
	this.instance_3.setTransform(-120,9.2,0.4165,0.4165);

	this.instance_4 = new lib.CachedBmp_94();
	this.instance_4.setTransform(-125.85,-7.2,0.4165,0.4165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_4},{t:this.instance_3}]},1).wait(2));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AslDrIAAnVIZLAAIAAHVg");
	this.shape.setTransform(-11.6,3.525,1.4811,1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.9,-20,238.7,47.1);


(lib.quitBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txt
	this.instance = new lib.CachedBmp_88();
	this.instance.setTransform(-75.35,-18.8,0.5,0.5);

	this.instance_1 = new lib.head_mc();
	this.instance_1.setTransform(-106,-0.05,0.7455,0.7455,0,0,0,2.1,-21.8);

	this.instance_2 = new lib.CachedBmp_89();
	this.instance_2.setTransform(-75.35,-18.8,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_91();
	this.instance_3.setTransform(-111,4.75,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_90();
	this.instance_4.setTransform(-119.5,-18.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_4},{t:this.instance_3}]},1).wait(2));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("At1GQIAAsfIbrAAIAAMfg");
	this.shape.setTransform(-17.8156,0,1.3772,0.7735);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.8,-30.9,244,61.8);


(lib.playBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// btn
	this.instance = new lib.CachedBmp_86();
	this.instance.setTransform(-76.2,-76.2,0.5,0.5);

	this.instance_1 = new lib.btnart("synched",0);
	var instance_1Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_1.filters = [instance_1Filter_1];
	this.instance_1.cache(-78,-78,157,157);

	this.instance_2 = new lib.CachedBmp_87();
	this.instance_2.setTransform(-76.2,-76.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(instance_1Filter_1).wait(1).to(new cjs.ColorFilter(0.83,0.83,0.83,1,43.35,43.35,43.35,0), 0).wait(2));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,153,0,0.529)").s().p("AowIyQiaiag0jDQgbhlAAhwIABgoQANkaC+jPIAAgBIACgDIADgCIATgVIACgCIADgCQBuhvCFg7QCRg/CsAAIAEAAIAGAAIADAAIAEAAIADAAQBmACBcAZIADABIAAAAQBLAVBFAjIACACIAAAAIAIAEIAGACIADADIAAAAIAtAaIAPAKQBAAsA5A6QDpDoAAFIQAAFJjpDpQjoDolJAAQlIAAjojog");
	this.shape.setTransform(-2.5,2.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

	// Hit
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9900").s().p("Ap6J7QkHkHAAl0QAAlzEHkHQEHkHFzAAQF0AAEHEHQEHEHAAFzQAAF0kHEHQkHEHl0AAQlzAAkHkHg");
	this.shape_1.setTransform(0.65,0.65);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(3).to({_off:false},0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_1, startFrame:1, endFrame:1, x:-78, y:-78, w:157, h:157});
	this.filterCacheList.push({instance: this.instance_1, startFrame:0, endFrame:0, x:-78, y:-78, w:157, h:157});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.1,-89.1,179.6,179.6);


(lib.healthBar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {healthMax:0,threeQrtrBar:4,halfBar:9,qrtrBar:14,emptyBar:19};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25));

	// healthContainer
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC9900").ss(5,1,1).p("EAjbAFQQgZAig7AAMhHVAAAQhkAAAAhkIAAobQAAhkBkAAMBLPAAAQAQAAALAGQALAGAKAPEAjbAFQIgEAJEAjrAEdIgQAzEAjrAEdQgDAfgNAUEAjrAEOQAAAIAAAHA0KlTIhHKsEAmzgFTIjIJwASflTIjcKsAgeldIiOLB");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CC0000").ss(5,1,1).p("EAjbAFQQgZAig7AAMhHVAAAQhkAAAAhkIAAobQAAhkBkAAMBLPAAAQAQAAALAGQALAGAKAPEAjrAEOQAAAIAAAHQgDAfgNAUEAjrAEdIgQAzIgEAJAgeldIiOLBASflTIjcKsEAmzgFTIjIJwA0KlTIhHKs");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},19).wait(6));

	// moveableGreen
	this.fill = new lib.healthBarfill();
	this.fill.name = "fill";
	this.fill.setTransform(-249.3,0.05,1,1,0,0,0,-0.7,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.fill).to({_off:true},19).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250.8,-39.5,501.6,79);


(lib.doorLightMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {glowing:0,walkThrough:19};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_18 = function() {
		this.gotoAndPlay("glowing");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(23));

	// GlowScreen
	this.instance = new lib.glowMC();
	this.instance.setTransform(0.45,0.25,0.7719,0.7719,0,0,0,-0.1,-0.1);
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(50, 50, 1)];
	this.instance.cache(-81,-138,162,277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({regY:0,scaleX:2.7401,scaleY:2.7401,y:0.6},18).to({_off:true},1).wait(1));

	// glowExpandSmall
	this.instance_1 = new lib.glowMC();
	this.instance_1.setTransform(-1.5,-11.35,0.7719,0.7719,0,0,0,-0.1,-0.1);
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.BlurFilter(50, 50, 1)];
	this.instance_1.cache(-81,-138,162,277);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).to({scaleX:1.077,scaleY:1.077,x:-1.45,y:-11.3},13).to({_off:true},6).wait(1));

	// glow
	this.instance_2 = new lib.glowMC();
	this.instance_2.setTransform(-1.5,-11.35,0.7719,0.7719,0,0,0,-0.1,-0.1);
	this.instance_2.filters = [new cjs.BlurFilter(50, 50, 1)];
	this.instance_2.cache(-81,-138,162,277);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-0.2,scaleX:0.6263,scaleY:0.6263,x:-1.55,y:-11.3},4).to({regX:-0.1,scaleX:0.7719,scaleY:0.7719,x:-1.5,y:-11.35},5).to({regX:-0.2,scaleX:0.6263,scaleY:0.6263,x:-1.55,y:-11.3},4).to({regX:-0.1,scaleX:0.7719,scaleY:0.7719,x:-1.5,y:-11.35},5).to({scaleX:1.077,scaleY:1.077,x:-1.45,y:-11.3},11).to({_off:true},11).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240.5,-398,485,801);


(lib.candleLightFlicker = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.lightAround_art("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9831,scaleY:0.9831},3).to({scaleX:1.0252,scaleY:1.0252},2).to({scaleX:1.1492,scaleY:1.1492},4).to({scaleX:1.0477,scaleY:1.0477},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.1,-102.1,204.2,204.2);


(lib.candleFriendMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {idle:0,light:4};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// txt
	this.thankText = new cjs.Text("", "normal 900 22px 'Montserrat'", "#FFF18E");
	this.thankText.name = "thankText";
	this.thankText.textAlign = "center";
	this.thankText.lineHeight = 32;
	this.thankText.lineWidth = 98;
	this.thankText.parent = this;
	this.thankText.setTransform(58,-65.85);
	if(!lib.properties.webfonts['Montserrat']) {
		lib.webFontTxtInst['Montserrat'] = lib.webFontTxtInst['Montserrat'] || [];
		lib.webFontTxtInst['Montserrat'].push(this.thankText);
	}
	this.thankText._off = true;

	this.timeline.addTween(cjs.Tween.get(this.thankText).wait(4).to({_off:false},0).wait(26));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA9AfQgHAAgJgDIgBAAIgFgDIgHgEQgFgDgFgGIgFgFIgBgCIAAgBIAAAAIgBgCIgBgCIgBAAIgDgHIgBgIIAAgFIAAgCIABgBIABABIABAAIAAACIABAEIACAHIAFAIIABABIAAAAIAGAGQAEAEAGAEIAFADIAHACQAHACAFAAIAHAAIACgBIABAAIAEAAIABAAIABgBIABAAIAGgCIADgBQAGgDADgDIAEgEIACgCIAGgKIAAAAIAAgBIABgBIAAgCIADgFIABgEIABgBIAAABIABACIgBACIAAADIAAAEIAAACIgBABIAAABIgEAJIgGAKIgJAHIgBABIgCABIgHADIgFACIgBAAIgBAAIgEABIgBAAIgDAAIgCABgAg/AfQgKgBgGgDIgHgDQgFgCgCgDQgFgEgGgHIgEgFIgCgDIAAgBIgBgBIgBgDIAAgBIAAgCIgBgDIgBgLIACgHIAAgBIABABIABACIAAAFIABAIIAEAJIABABIABABIACADIABABIACACQAEAFAGAEIAGAEIABAAIABABIABAAIACABIABAAIAAAAQAHADAHAAIAHAAIACgBIABAAIAFAAIAIgDIABAAIAAAAIACgBIALgIIAFgEIAHgNIAAgBIADgMIAAgCIABgBIABABIAAAAIAAALIAAADIAAABIgBAAIAAABIgBAFIgEALIgGAHIgDADIgBABIgCABIgDACIgBABIgCABIgEACIgCABIgBABIgHABIgEABIgCAAIgCAAIgBABg");
	this.shape.setTransform(0.7,-5.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABdAzIAAgCIACgCIACgFIACgCIAFgLIADgGIADgQIgBgIIgDgIIAAgBIgBgCIgBgCIgBgCIgBgBIAAAAIAAgBIgCgCIgDgEIgBgBIgBgBIgDgCIgBgBIgBgBIgBgBIgCgBIgJgEIgKgDIgDgBIgIAAIgDABIgCAAIgFABIgKADIgIAGIgHAHIgEAIIgBACIgBACIAAACIgBACIgBAFIAAABIgBACIAAACIAAACIAAALIADAQIACAFQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIgCgCIgDgIIgEgLQgCgNABgEIAAgBIAAgCIAAgDIACgHIAAgBIACgEIAEgKIACgCIAGgHIAKgHQAFgDAGgBIACAAIAAgBIABAAIADgBIACAAIABAAIADgBIAKAAIADABIAMADIALAFIAKAIIABACIABABIADAEIABABIABACIABABIABACIABACIABACIABACIAAABQADAGAAAFQABAFgBAFIgCAJIgBACIAAACIgBACIgBACIgDAHIgMAQIgCADgAgdAzIAAgCIABgCIADgFIABgCIAGgLIACgGIADgQIAAgIIgDgIIgBgBIAAgCIgBgCIgCgCIAAgBIgBAAIAAgBIgCgCIgDgEIgBgBIgBgBIgDgCIgBgBIAAgBIgCgBIgCgBIgJgEIgKgDIgDgBIgHAAIgDABIgDAAIgFABIgJADIgJAGIgGAHIgFAIIAAACIgBACIgBACIgBACIgBAFIAAABIAAACIAAACIgBACIAAALIAEAQIACAFQAAABAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIgBgCIgEgIIgEgLQgBgNAAgEIAAgBIABgCIAAgDIABgHIABgBIABgEIAFgKIABgCIAGgHIAKgHQAFgDAHgBIABAAIABgBIABAAIADgBIABAAIACAAIADgBIAJAAIADABIANADIALAFIAJAIIABACIABABIAEAEIABABIAAACIABABIABACIABACIACACIAAACIABABQACAFAAAGQABAFgBAFIgBAJIgBACIgBACIgBACIAAACIgEAHIgMAQIgCADg");
	this.shape_1.setTransform(0.7938,-8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).to({state:[]},25).wait(1));

	// face
	this.instance = new lib.CachedBmp_61();
	this.instance.setTransform(-7.9,-8.2,0.3857,0.3857);

	this.instance_1 = new lib.CachedBmp_60();
	this.instance_1.setTransform(-9.25,-12.55,0.3857,0.3857);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},4).to({state:[]},25).wait(1));

	// flame
	this.instance_2 = new lib.flameMC();
	this.instance_2.setTransform(-0.05,-41.45);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({_off:true},25).wait(1));

	// candle
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#98672F").ss(1,1,1).p("AAAAyIAAhj");
	this.shape_2.setTransform(-0.35,-32.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C4C2A9","#DAD1B2","#F0EEE2"],[0,0.486,1],-20.5,-0.1,20.1,-0.1).s().p("ABREUQgSgEgSAAQgkgCgiAAIhjABQgsAAgbgcQgGgGAAgJQAAgRAFgRQAVg/AOhAQAHgeABgfQACggAHghIABjOIACgCQAMgIAPgCIDlAAIAIABQAOAAAIALIAAC+IAEANQAGAVAGAYIAEASQAHAwAMAuQAOA1ADA2QADApgiASQgfARgiAAQgMAAgMgCg");
	this.shape_3.setTransform(-0.0414,1.0799);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F0EEE2","#DAD1B2","#EFEDE0","#C4C2A9"],[0,0.412,0.698,1],0,0,0,0,0,32.1).s().p("ABREUQgSgEgSAAQgkgCgiAAIhjABQgsAAgbgcQgGgGAAgJQAAgRAFgRQAVg/AOhAQAHgeABgfQACggAHghIABjOIACgCQAMgIAPgCIDlAAIAIABQAOAAAIALIAAC+IAEANQAGAVAGAYIAEASQAHAwAMAuQAOA1ADA2QADApgiASQgfARgiAAQgMAAgMgCg");
	this.shape_4.setTransform(-0.0414,1.0799);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#F0E3E7","#DAD1B2","#EFE3E5","#C4C2A9"],[0,0.412,0.741,1],0,0,0,0,0,32.1).s().p("ABREUQgSgEgSAAQgkgCgiAAIhjABQgsAAgbgcQgGgGAAgJQAAgRAFgRQAVg/AOhAQAHgeABgfQACggAHghIABjOIACgCQAMgIAPgCIDlAAIAIABQAOAAAIALIAAC+IAEANQAGAVAGAYIAEASQAHAwAMAuQAOA1ADA2QADApgiASQgfARgiAAQgMAAgMgCg");
	this.shape_5.setTransform(-0.0414,1.0799);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_4},{t:this.shape_2}]},4).to({state:[{t:this.shape_5},{t:this.shape_2}]},1).to({state:[]},24).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.2,-67.8,129.2,96.69999999999999);


(lib.candleplayer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {startBody:0,threeBody:9,halfBody:19,quarterBody:29,zeroBody:39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(11));

	// body
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFFF99","#FFFF99","#FFFF99"],[0.584,1,1,1],0,0,0,0,0,45.4).s().p("AjrE4QhkhcgMiHIgckpQAZhUBHg1QBGg1BZAAIDxAAQBYAABHA1QBHA1AZBUIgcEpQgMCHhkBcQhkBbiIAAQiGAAhlhbg");
	this.shape.setTransform(-0.7271,11.8996,0.2506,0.2506);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFF99","#B2B235","#3617E5"],[0.027,1,1],0,0,0,0,0,45.4).s().p("AjrE4QhkhcgMiHIgckpQAZhUBHg1QBGg1BZAAIDxAAQBYAABHA1QBHA1AZBUIgcEpQgMCHhkBcQhkBbiIAAQiGAAhlhbg");
	this.shape_1.setTransform(-0.7271,11.8996,0.2506,0.2506);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#999999","#B2B235"],[0.051,0.839],0,0,0,0,0,45.4).s().p("AjrE4QhkhcgMiHIgckpQAZhUBHg1QBGg1BZAAIDxAAQBYAABHA1QBHA1AZBUIgcEpQgMCHhkBcQhkBbiIAAQiGAAhlhbg");
	this.shape_2.setTransform(-0.7271,11.8996,0.2506,0.2506);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#CCCCCC","#737373","#737373"],[0,0.427,0.69],0,0,0,0,0,45.4).s().p("AjrE4QhkhcgMiHIgckpQAZhUBHg1QBGg1BZAAIDxAAQBYAABHA1QBHA1AZBUIgcEpQgMCHhkBcQhkBbiIAAQiGAAhlhbg");
	this.shape_3.setTransform(-0.7271,11.8996,0.2506,0.2506);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#737373","#4D4D4D"],[0.027,1],0,0,0,0,0,45.4).s().p("AjrE4QhkhcgMiHIgckpQAZhUBHg1QBGg1BZAAIDxAAQBYAABHA1QBHA1AZBUIgcEpQgMCHhkBcQhkBbiIAAQiGAAhlhbg");
	this.shape_4.setTransform(-0.7271,11.8996,0.2506,0.2506);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_3}]},10).to({state:[{t:this.shape_4}]},10).wait(11));

	// outerFlame
	this.headHit = new lib.head_mc();
	this.headHit.name = "headHit";
	this.headHit.setTransform(-1.35,2.05);

	this.timeline.addTween(cjs.Tween.get(this.headHit).wait(50));

	// hitBody
	this.hit = new lib.candlehitbody();
	this.hit.name = "hit";
	this.hit.setTransform(-0.85,12.75,1,1,0,0,0,-1.2,0.2);
	this.hit.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.hit).wait(50));

	// hitFull
	this.fullHit = new lib.candlehit();
	this.fullHit.name = "fullHit";
	this.fullHit.setTransform(-2.1,5.3,1.4993,2.1165,0,0,0,-1.7,6.7);
	this.fullHit.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.fullHit).wait(50));

	// lightAround
	this.instance = new lib.candleLightFlicker();
	this.instance.setTransform(0,5.75,0.9961,0.9961);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({regY:0.1,scaleX:0.8162,scaleY:0.8162,x:-0.3,y:5.9},0).wait(10).to({regX:-0.1,regY:0.3,scaleX:0.7033,scaleY:0.7033,y:5.95},0).wait(10).to({regX:-0.2,scaleX:0.4896,scaleY:0.4896,x:-0.35},0).to({_off:true},10).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.5,-82.7,177,177);


(lib.booklet2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {animate2:0,hitDamage:18};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// book
	this.instance = new lib.heavyBook();
	this.instance.setTransform(0.6,-0.1,1,1,0,-89.9991,90.0009);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({y:-60.1},0).to({y:186.9},10).wait(1).to({y:184.4},0).wait(2).to({y:186.9},0).wait(4).to({y:187.4},0).wait(2).to({y:187.9},0).to({y:-0.1},8).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.3,-156.6,77.9,441.1);


(lib.Bookfall = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"fall":0,"hitDamage":10,nothing:25};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// book
	this.instance = new lib.heavyBook();
	this.instance.setTransform(0,-78.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:239},8).to({_off:true},15).wait(17));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.8)").s().p("Ap5hiIOyAAIFBCyIvJASQkqi6AAgKg");
	this.shape.setTransform(0,263.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(45,45,45,0.824)").s().p("AqhhoIPuAAIFVC9IwGAUQk+jGABgLg");
	this.shape_1.setTransform(0,263.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(38,38,38,0.851)").s().p("ArKhuIQrAAIFqDIIxFAVQlQjSAAgLg");
	this.shape_2.setTransform(0,263.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(32,32,32,0.875)").s().p("Aryh0IRnAAIF+DTIyDAWQlijeAAgLg");
	this.shape_3.setTransform(0,263.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(26,26,26,0.902)").s().p("Asbh7ISkAAIGTDfIzBAYQl2jqAAgNg");
	this.shape_4.setTransform(0.025,263.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(19,19,19,0.925)").s().p("AtDiBITgAAIGnDqIz+AZQmJj2AAgNg");
	this.shape_5.setTransform(0,263.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(13,13,13,0.949)").s().p("AtsiHIUdAAIG8D1I08AaQmdkCAAgNg");
	this.shape_6.setTransform(0,263.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(6,6,6,0.976)").s().p("AuUiNIVZAAIHQEAI16AbQmvkOAAgNg");
	this.shape_7.setTransform(0,263.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Au9iUIWWAAIHlEMI25AdQnBkagBgPg");
	this.shape_8.setTransform(0,263.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[]},1).wait(31));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-117.2,194.1,396);


(lib.winGameMsg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highScoreTXT
	this.finalScoreTxt = new cjs.Text("Final Score:\n ", "normal 700 45px 'IBM Plex Mono'", "#339900");
	this.finalScoreTxt.name = "finalScoreTxt";
	this.finalScoreTxt.textAlign = "center";
	this.finalScoreTxt.lineHeight = 70;
	this.finalScoreTxt.lineWidth = 418;
	this.finalScoreTxt.parent = this;
	this.finalScoreTxt.setTransform(1,120.45);
	if(!lib.properties.webfonts['IBM Plex Mono']) {
		lib.webFontTxtInst['IBM Plex Mono'] = lib.webFontTxtInst['IBM Plex Mono'] || [];
		lib.webFontTxtInst['IBM Plex Mono'].push(this.finalScoreTxt);
	}

	this.timeline.addTween(cjs.Tween.get(this.finalScoreTxt).wait(15));

	// Txt
	this.instance = new lib.YouWin_MC();
	this.instance.setTransform(-4,-167.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9215,scaleY:0.9215},7).to({scaleX:1,scaleY:1},7).wait(1));

	// btns
	this.quitBtn = new lib.quitBtn();
	this.quitBtn.name = "quitBtn";
	this.quitBtn.setTransform(-1.4,65.05,0.8383,0.8383,0,0,0,-0.5,-0.5);
	new cjs.ButtonHelper(this.quitBtn, 0, 1, 2, false, new lib.quitBtn(), 3);

	this.replayBtn = new lib.replayBtn();
	this.replayBtn.name = "replayBtn";
	this.replayBtn.setTransform(2.75,-3.5,1.2004,1.2004);
	new cjs.ButtonHelper(this.replayBtn, 0, 1, 2, false, new lib.replayBtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.replayBtn},{t:this.quitBtn}]}).wait(15));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,241,142,0.859)").s().p("EgqLBLAMAAAiV/MBUXAAAMAAACV/g");
	this.shape.setTransform(-1,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-271,-477,540,960);


(lib.gameOverMsg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ScoreTXT
	this.hiScoreTxt = new cjs.Text("Final Score:\n ", "normal 700 45px 'IBM Plex Mono'", "#CC0000");
	this.hiScoreTxt.name = "hiScoreTxt";
	this.hiScoreTxt.textAlign = "center";
	this.hiScoreTxt.lineHeight = 70;
	this.hiScoreTxt.lineWidth = 418;
	this.hiScoreTxt.parent = this;
	this.hiScoreTxt.setTransform(1,121.85);
	if(!lib.properties.webfonts['IBM Plex Mono']) {
		lib.webFontTxtInst['IBM Plex Mono'] = lib.webFontTxtInst['IBM Plex Mono'] || [];
		lib.webFontTxtInst['IBM Plex Mono'].push(this.hiScoreTxt);
	}

	this.timeline.addTween(cjs.Tween.get(this.hiScoreTxt).wait(5));

	// GO_txt
	this.instance = new lib.GameOver();
	this.instance.setTransform(-140.6,-348.95,0.267,0.267);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

	// btns
	this.quitBtn = new lib.quitBtn();
	this.quitBtn.name = "quitBtn";
	this.quitBtn.setTransform(-1.4,65.05,0.8383,0.8383,0,0,0,-0.5,-0.5);
	new cjs.ButtonHelper(this.quitBtn, 0, 1, 2, false, new lib.quitBtn(), 3);

	this.replayBtn = new lib.replayBtn();
	this.replayBtn.name = "replayBtn";
	this.replayBtn.setTransform(2.75,-3.5,1.2004,1.2004);
	new cjs.ButtonHelper(this.replayBtn, 0, 1, 2, false, new lib.replayBtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.replayBtn},{t:this.quitBtn}]}).wait(5));

	// BtnBG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD6B0D").s().p("AZPM4QgGAAgEgEQgFgFAAgGQAAgGAEgEIAAguQAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGIAAA4QAAAGgEAFQgFAEgGAAgAWvM4QgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAgAUPM4QgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgARvM4QgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAPPM4QgGAAgEgEQgFgFAAgGQAAgGAFgEQAEgFAGAAIA8AAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAgAMvM4QgGAAgEgEQgFgFAAgGQAAgGAFgEQAEgFAGAAIA8AAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAgAKPM4QgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAHvM4QgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAFPM4QgGAAgEgEQgFgFAAgGQAAgGAFgEQAEgFAGAAIA8AAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAgACvM4QgGAAgEgEQgFgFAAgGQAAgGAFgEQAEgFAGAAIA8AAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAgAAPM4QgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAgAiQM4QgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAkwM4QgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAnQM4QgGAAgEgEQgFgFAAgGQAAgGAFgEQAEgFAGAAIA8AAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAgApwM4QgGAAgEgEQgFgFAAgGQAAgGAFgEQAEgFAGAAIA8AAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAgAsQM4QgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAuwM4QgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAxQM4QgGAAgEgEQgFgFAAgGQAAgGAFgEQAEgFAGAAIA8AAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAgAzwM4QgGAAgEgEQgFgFAAgGQAAgGAFgEQAEgFAGAAIA8AAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAgA2QM4QgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgA4wM4QgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgA5dLyQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGIAAA8QAAAGgEAEQgFAFgGAAQgGAAgFgFgAZIKXQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGIAAA8QAAAGgEAEQgFAFgGAAQgGAAgFgFgA5dJSQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGIAAA8QAAAGgEAEQgFAFgGAAQgGAAgFgFgAZIH3QgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGIAAA8QAAAGgEAEQgFAFgGAAQgGAAgFgFgA5dGyQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGIAAA8QAAAGgEAEQgFAFgGAAQgGAAgFgFgAZIFXQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGIAAA8QAAAGgEAEQgFAFgGAAQgGAAgFgFgA5dESQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGIAAA8QAAAGgEAEQgFAFgGAAQgGAAgFgFgAZIC3QgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGIAAA8QAAAGgEAEQgFAFgGAAQgGAAgFgFgA5dByQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGIAAA8QAAAGgEAEQgFAFgGAAQgGAAgFgFgAZIAXQgEgEAAgGIAAg7QAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGIAAA7QAAAGgEAEQgFAFgGAAQgGAAgFgFgA5dgtQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGIAAA8QAAAGgEAEQgFAFgGAAQgGAAgFgFgAZIiIQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGIAAA8QAAAGgEAEQgFAFgGAAQgGAAgFgFgA5djNQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGIAAA8QAAAGgEAEQgFAFgGAAQgGAAgFgFgAZIkoQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGIAAA8QAAAGgEAEQgFAFgGAAQgGAAgFgFgA5dltQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGIAAA8QAAAGgEAEQgFAFgGAAQgGAAgFgFgAZInIQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGIAAA8QAAAGgEAEQgFAFgGAAQgGAAgFgFgA5doNQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGIAAA8QAAAGgEAEQgFAFgGAAQgGAAgFgFgAZIpoQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGIAAA8QAAAGgEAEQgFAFgGAAQgGAAgFgFgA5dqtQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGIAAA8QAAAGgEAEQgFAFgGAAQgGAAgFgFgAZIsIQgEgEAAgGIAAgHIgXAAQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIAmAAQAGAAAFAEQAEAFAAAGIAAAWQAAAGgEAEQgFAFgGAAQgGAAgFgFgAWNsZQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgATtsZQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgARNsZQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAOtsZQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAMNsZQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgAJtsZQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgAHNsZQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAEtsZQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgACNsZQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgAgSsZQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA7AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgAiysZQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgAlSsZQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAnysZQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAqSsZQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgAsysZQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgAvSsZQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAxysZQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgA0SsZQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgA2ysZQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgA5SsZQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAg");
	this.shape.setTransform(0,39.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(8,133,133,0.757)").s().p("AX6MpQAAgGgEgEQgFgFgGAAIg8AAQgGAAgFAFQgEAEAAAGIhGAAQAAgGgFgEQgEgFgGAAIg8AAQgGAAgFAFQgEAEAAAGIhGAAQAAgGgFgEQgEgFgGAAIg8AAQgGAAgFAFQgEAEAAAGIhGAAQAAgGgEgEQgFgFgGAAIg8AAQgGAAgEAFQgFAEAAAGIhGAAQAAgGgEgEQgFgFgGAAIg8AAQgGAAgEAFQgFAEAAAGIhGAAQAAgGgFgEQgEgFgGAAIg8AAQgGAAgFAFQgEAEAAAGIhGAAQAAgGgFgEQgEgFgGAAIg8AAQgGAAgFAFQgEAEAAAGIhGAAQAAgGgEgEQgFgFgGAAIg8AAQgGAAgEAFQgFAEAAAGIhGAAQAAgGgEgEQgFgFgGAAIg8AAQgGAAgEAFQgFAEAAAGIhGAAQAAgGgEgEQgFgFgGAAIg8AAQgGAAgFAFQgEAEAAAGIhFAAQAAgGgFgEQgEgFgGAAIg8AAQgGAAgFAFQgEAEAAAGIhGAAQAAgGgFgEQgEgFgGAAIg8AAQgGAAgFAFQgEAEAAAGIhGAAQAAgGgEgEQgFgFgGAAIg8AAQgGAAgEAFQgFAEAAAGIhGAAQAAgGgEgEQgFgFgGAAIg8AAQgGAAgEAFQgFAEAAAGIhGAAQAAgGgFgEQgEgFgGAAIg8AAQgGAAgFAFQgEAEAAAGIhGAAQAAgGgFgEQgEgFgGAAIg8AAQgGAAgFAFQgEAEAAAGIhGAAQAAgGgEgEQgFgFgGAAIg8AAQgGAAgEAFQgFAEAAAGIhGAAQAAgGgEgEQgFgFgGAAIg8AAQgGAAgEAFQgFAEAAAGIhGAAQAAgGgFgEQgEgFgGAAIg8AAQgGAAgFAFQgEAEAAAGIhGAAQAAgGgFgEQgEgFgGAAIg8AAQgGAAgFAFQgEAEAAAGIgTAAIAAgyQAGAAAFgFQAEgEAAgGIAAg8QAAgGgEgFQgFgEgGAAIAAhGQAGAAAFgFQAEgEAAgGIAAg8QAAgGgEgFQgFgEgGAAIAAhGQAGAAAFgFQAEgEAAgGIAAg8QAAgGgEgFQgFgEgGAAIAAhGQAGAAAFgFQAEgEAAgGIAAg8QAAgGgEgFQgFgEgGAAIAAhGQAGAAAFgFQAEgEAAgGIAAg8QAAgGgEgFQgFgEgGAAIAAhFQAGAAAFgFQAEgEAAgGIAAg8QAAgGgEgFQgFgEgGAAIAAhGQAGAAAFgFQAEgEAAgGIAAg8QAAgGgEgFQgFgEgGAAIAAhGQAGAAAFgFQAEgEAAgGIAAg8QAAgGgEgFQgFgEgGAAIAAhGQAGAAAFgFQAEgEAAgGIAAg8QAAgGgEgFQgFgEgGAAIAAhGQAGAAAFgFQAEgEAAgGIAAg8QAAgGgEgFQgFgEgGAAIAAgXIA8AAQAGAAAEgFQAFgEAAgGIBGAAQAAAGAEAEQAFAFAGAAIA8AAQAGAAAEgFQAFgEAAgGIBGAAQAAAGAEAEQAFAFAGAAIA8AAQAGAAAEgFQAFgEAAgGIBGAAQAAAGAFAEQAEAFAGAAIA8AAQAGAAAFgFQAEgEAAgGIBGAAQAAAGAFAEQAEAFAGAAIA8AAQAGAAAFgFQAEgEAAgGIBGAAQAAAGAEAEQAFAFAGAAIA8AAQAGAAAEgFQAFgEAAgGIBGAAQAAAGAEAEQAFAFAGAAIA8AAQAGAAAEgFQAFgEAAgGIBGAAQAAAGAFAEQAEAFAGAAIA8AAQAGAAAFgFQAEgEAAgGIBGAAQAAAGAFAEQAEAFAGAAIA8AAQAGAAAFgFQAEgEAAgGIBGAAQAAAGAEAEQAFAFAGAAIA8AAQAGAAAEgFQAFgEAAgGIBGAAQAAAGAEAEQAFAFAGAAIA7AAQAGAAAEgFQAFgEAAgGIBGAAQAAAGAFAEQAEAFAGAAIA8AAQAGAAAEgFQAFgEAAgGIBGAAQAAAGAFAEQAEAFAGAAIA8AAQAGAAAFgFQAEgEAAgGIBGAAQAAAGAFAEQAEAFAGAAIA8AAQAGAAAFgFQAEgEAAgGIBGAAQAAAGAEAEQAFAFAGAAIA8AAQAGAAAEgFQAFgEAAgGIBGAAQAAAGAEAEQAFAFAGAAIA8AAQAGAAAEgFQAFgEAAgGIBGAAQAAAGAFAEQAEAFAGAAIA8AAQAGAAAFgFQAEgEAAgGIBGAAQAAAGAFAEQAEAFAGAAIA8AAQAGAAAFgFQAEgEAAgGIBGAAQAAAGAEAEQAFAFAGAAIA8AAQAGAAAEgFQAFgEAAgGIBGAAQAAAGAEAEQAFAFAGAAIA8AAQAGAAAEgFQAFgEAAgGIBGAAQAAAGAFAEQAEAFAGAAIAXAAIAAAHQAAAGAEAEQAFAFAGAAIAABGQgGAAgFAEQgEAFAAAGIAAA8QAAAGAEAEQAFAFAGAAIAABGQgGAAgFAEQgEAFAAAGIAAA8QAAAGAEAEQAFAFAGAAIAABGQgGAAgFAEQgEAFAAAGIAAA8QAAAGAEAEQAFAFAGAAIAABGQgGAAgFAEQgEAFAAAGIAAA8QAAAGAEAEQAFAFAGAAIAABGQgGAAgFAEQgEAFAAAGIAAA7QAAAGAEAEQAFAFAGAAIAABGQgGAAgFAEQgEAFAAAGIAAA8QAAAGAEAEQAFAFAGAAIAABGQgGAAgFAEQgEAFAAAGIAAA8QAAAGAEAEQAFAFAGAAIAABGQgGAAgFAEQgEAFAAAGIAAA8QAAAGAEAEQAFAFAGAAIAABGQgGAAgFAEQgEAFAAAGIAAA8QAAAGAEAEQAFAFAGAAIAABGQgGAAgFAEQgEAFAAAGIAAAuQgEAEAAAGg");
	this.shape_1.setTransform(0,39.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(5));

	// BG
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,51,51,0.278)").s().p("EgqLBLAMAAAiV/MBUXAAAMAAACV/g");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270,-480,540,960);


(lib.potion = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"idle":0,"fall":4};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(38));

	// bottleMC
	this.instance = new lib.CachedBmp_52();
	this.instance.setTransform(-41.95,-46.45,0.3593,0.3593);

	this.instance_1 = new lib.CachedBmp_51();
	this.instance_1.setTransform(-43.6,-51.4,0.3593,0.3593);

	this.instance_2 = new lib.CachedBmp_54();
	this.instance_2.setTransform(-41.95,-46.45,0.3593,0.3593);

	this.instance_3 = new lib.CachedBmp_53();
	this.instance_3.setTransform(-43.6,-51.4,0.3593,0.3593);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9AA4AE").s().p("AgLIFIhUgDIgRgDIgugQQgKgDgJgGIgCgBIgjgUIgjgaIgngjIgzg2QgPgSgKgQQgYgjgQgoQgQgpgIgpIgFgrQgCgVAAgVQAAgrAIgoQAIgrAQgnQAQglAYgmQANgTANgPIAZgbIABgCIAigfQAPgMAUgMIAlgVIAJgFIAEgCIAFgDIA7gXIApgLIACgBIACAAIABAAIABgBIABAAIAAAAIABAAIACgCIABgBIABgBIABgBIAAgBIABAAIAAgBIAAgBIAAgBIABgCIAAgBIAAgKIgFgTIgIgSIACACIgCgCIAAAAIgIgGIgHgJIgHgKIgFgMIAAgDIgBgBIAAgDIABgCIAAgBIAAgCIAAgCIABgBIAGgLQAFgFAFgDIABgBIABgBIACAAIAAAAIAAgBIABAAIAAAAIAIgEIABgBIAhgOIAQgFIADAAIADgBIANgDIACAAIACgBIAQgCIADAAIACAAIAGAAIADgBIAxAEIABABIACAAIAeAIIAfAOIAUANQAKAIAGAIIAGAGIADAEIABAEIABAFIAAAEIgDAJIgFAHIgBACIgBABIgEAEIgLAHIgDACIgBAAIAAgBIAHgFIALgKIABgCIAEgGIABgEIACgEQAAgEgCgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgCgEIgGgGQgHgIgJgGQgKgIgKgEQgJgGgLgDIgKgEIgbgHIgDgBIgDAAQgMgCgKAAIgjAAIgBAAIgCAAIgQADIgBAAIgBAAIgJACIgIACIgDABIguASIgBABIgJAFIgCABIAAABIgBABQgFACgDAEIgCAEIgCADIAAABIgBABIAAAHIABABIABACIAAAAIAAABIAAABIACAFIACADIABACIADADIARAQIANAeIACALIAAADIAAABIAAAIIAAACIAAABIgBADIgBAFIAAABIgBAAIAAAAIAAACIgBABIgBABIgBABIgBABIgFAFIgCAAIgCABIgDABIgBAAIgBABIgDAAQgRAEgXAIIhLAhQgTAJgQALIghAYIgXAVIgCACIgCABIgDAEQgdAegXAiQgWAhgPAnQgQAmgHAoIgEAdQgDAaAAAZQAAApAHAoQAJApAOAlQARAnAVAhQAOATALAOIA1A3IAjAfIAaAUIAGAEIACACIAzAbIAyAQIADAAIAOACIALAAIAKABIALAAIBoAAIA7AAIApgEIAbgFIACgBIAGgBIAGgDIADAAIAXgKIAEgCIADgBIABgCIAJgFIAEgDIACgBIAMgJIAGgFIAegbIA2g+QAagjAPgjIALgdIABgBIAAgBIAAgCIAFgPIAAgBIABgBIAAgBIAGgbQAFgXACgZIADgiIAAgsIABgeIAAgBIAAgHIgBgDIAAgDQgDgmgJgkQgMgsgRghQgRgkgagiIgoguQgHgHgJgGIheg2IAAACIgBACIAAABIgBACIgBABIAAABIgBABIgEACIgBAAIgCAAIgBgBIgBgBIgBgBIAAAAIgBgBIAAAAIgBgBIAAgBIgBAAIgBAAIAAgBIgBAAIAAAAIAAgBIgBAAIAAgCIABAAIAAgBIAAgBIAAgDIABgBIAAgEIAAgBIghgQIgCgBIgCgBIgBgCIgBAAIgCgGIAAgCIABgJIACgKIAEgKQAGgTAJgUQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIgRAxIgDAKIAAAJIACAFIADACIAnASIABAAIABABIACAAIAEADIAmARIBAAlQAJAGAHAIIAPAPQARASALANQAaAhAUAmQAUApAKAmQALAoADAqIABAqIAAAqQgDAxgHAjIgFAaIgBADIAAABIgCAGIgBAFIgCAFIAAADIgNAhQgQAogZAiIgUAZIgCACIgBABIghAkQgQAQgPANIgMAKIglAWIgkANIgDABIgDABIgaAFQgWAEgVAAIgpABIg+ABIgVAAgAAamTIgfgGIgSgGIgfgQIgCgBIgCgBIgEgEIgBgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAABIAKACIAFABIApAJIAOABIAEABIADAAIADABIAFAAIADAAIACAAIAFABIApgBIACgBIADAAIAFgBIAEAAIABAAIAFgBIAhgIIAEgCIACAAIABAAIANgHIAFgDIACgCIAAAAIAAAAIAAgBIABAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAAABIgBAAIAAACIgEAGIgJAJIgDACIgBAAIAAAAIAAABIgBAAIgQAJIgJAEQgLAFgIABIgCABIAAAAIgBAAIgZAEIgFAAIgMABg");
	this.shape.setTransform(3.45,0.2833);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(127,167,186,0.388)").s().p("AAAAAIAAAAIABgBIABABIAAABIgDABIABgCg");
	this.shape_1.setTransform(16.35,-39.3875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(153,153,153,0.149)").s().p("AhHA1QgPgMgHgMIgCgDIADgUIABgGQADgdABgRIAAggIAgAGQApAGAxAAIAmgDIARgBIAEAAIABAAQgGAbABAiIABANIAFAkIgCAAIgCAGQgDAHgHAGQgFAFgIAEQgVAKgmABIgBAAQgwAAgggag");
	this.shape_2.setTransform(7.15,-32.1495);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(127,167,186,0.176)").s().p("AglAgIgHgBIgMgEIgXgFIAAgDQAJABAMADIAVAFQBCARBFgOIAXgFIAAADIgJACIgCABIgSADIgnADIgFAAQgwAAglgGgAheAJIgGgEQgIgFgFgFIgCgCIgCgEIgCgEIAAgCIAAgBIgBgHQAAgGADgDIACgDIAEAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABIgCADQgDAEAAAEQAAAFAFAGIACADIAEAEIAEAEIAIAEIANAFIACABIAAABIAAACQgIgBgHgDg");
	this.shape_3.setTransform(5.3474,-42.674);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNAWIAAgDIAEgCIAGgEIABgCIACgCIADgDIAEgEIABgBIABgDIABgEQABgDgDgEIgBgCQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAIAAgCIADgBIACACIABACIACADIAAADQABAHgCAFIgBAEIgBAAIgEAFIgBAAIgCACIgDADIgCACIgDACQgEADgDAAIgBAAg");
	this.shape_4.setTransform(19.1143,-43.3714);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(211,218,223,0.067)").s().p("Ag0GoQhXgKhIgqIgagUIgjgfIg1g4QgLgNgOgTQgVghgRgnQgOglgIgpQgIgoAAgpQAAgZADgZQATiBBjhgQBihfCCgUIAAgFIADgWIAAgFIABgBIAAgCIACABIAAAJIgCAZIAJgCIgDAVIABADIAAACQAGANAQANQAgAZAuAAQApgBAWgOQAHgEAGgFQAGgGAEgGIACgHIABAAIgFgjIgBgPIAAAAIABACIACAFIAAABIACAGIADASQAUAHATAIIAAABIACAAIABABIABAAQBCAeA4A2QAfAeAXAiIABADIABACQABAPADAOIADANQAGAWAIAsIAHArIABADIAAAAIABAFIAGASQAHAXADAUIABAdIABANIABgCIACgIIABAAIABgFIABgDIAAgCIABgBQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIABgEIABgBIABgDIADgKIAAAOIAAgCIACgRIAAAAIABgBIgBAsIgDAhQgUB+hhBeQhpBniOAPgAEniDIgCABIgBADIAAAHIABAIQAAAEADADIACACIACAEIAHAgIAAAHIADATIABAFIABADIABADQAAABABAAQAAAAABAAQAAAAABAAQAAgBABgBIACgDIAFgKIADgFIADgNQAEgTgEgVIgBgFIgDgGIgDgHQgFgFgMgEIgJgCIgCAAgACwj4IACADIADACIAEADIADAEIAFAFIANAMIAPAPQAIAIAFAJIAEAHIAFAGQAGAFAKABQAIABAJgDQAAgVgJgUQgDgIgKgUIgMgTQgHgLgHgIQgIgJgHgCQgEgCgGAAQgHAAgFACQgKAEgEANQgCAGgBAPIAAAAIACACgAGeg5IgFgbQAGAYADAaIABADIAAADIAAAHQgBgMgEgYg");
	this.shape_5.setTransform(3.625,7.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D3DADF").s().p("ABpChIgCgdQgCgVgIgXIgFgSIgBgEIAAAAIgCgEIgGgqQgIgsgHgWIgCgMQgDgPgCgOIAAgDIgBgDQgCgIABgDIACAAIACAFIACAAIAAAEIABACIAGAKQAgA2AMA6IABADIAFAbQAEAYABAMIAAABIgBAdIAAABIAAAAIgCARIgBADIABgOIgDAJIgBADIgBACIgBAEQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAIAAACIAAACIgBACIgBAGIgCAAIgBAIIgBACIgBgOgAARBWIgBgDIgBgEIgCgEIgCgUIgBgGIgHghIgBgDIgCgCQgCgEAAgDIgBgHIAAgIIABgCIACgBQADAAAHACQAMADAFAGIADAGIADAFIABAGQADAUgDATIgEAOIgCAEIgGAKIgCAEIgCACIgBgBgAgkgzQgKgCgGgEIgFgHIgFgHQgEgIgIgIIgPgPIgOgMIgEgGIgDgDIgFgEIgCgCIgCgCQgBgBAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQABgPADgHQADgMALgFQAEgBAIgBQAGAAAEACQAHADAIAJQAGAIAIALIALATQALATADAJQAJATAAAVQgIADgHAAIgCAAg");
	this.shape_6.setTransform(33.25,-4.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9AA4AE").s().p("AgaICIgqgDIgfgCIgDgBIgDAAIgKgCIgCAAIgDgBIgBAAIgHgCIgBAAIgDgBIgCgBIgDAAIgKgEIgsgUIgCgBIgDgBIgEgDIgFgDIgSgMIgBAAIgBgBIgCgCQgRgMgQgPQgOgLgRgRIgTgTIgCgCIgCgCIgigoIgYgjQgYgmgNgnQgPgpgGgqQgDgXgBgTIAAgrQACgrAJgoQAKgqARgmQATgpAYghQALgQAPgRIAagbIACgBIAJgKIAIgHIARgNQAQgLAUgMQAOgJAXgLIBPgeIApgJIADgBIABAAIABAAIACgBIABAAIAAAAIABAAIACgCIABgBIAAgBIACgBIAAgBIAAgBIAAgBIABAAIAAgDIAAgBIABgBIAAgJIgBgCIAAgDIgDgOIgHgSQgKgIgGgHIgHgLQgDgIAAgFIAAgDIgBAAIAAAAIABgBIAAgEIAAgCIAAgBIABgCQADgHAEgEQAFgFAFgDIADgCIAAAAIABAAIAAgBIAAAAIABAAIAlgQIAOgEIADAAIAQgEIARgCIACgBIArAAIAGABIADAAIAUAEIAhAKIAXALIAFADIABAAIAAAAIACABIASANQAJAIAIAJIgBAAIADADIAFAHIACAFIAAAEIgBAJIgCAEIgIAKIgLAIIgHAEQgBABAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAOgKIADgDIAHgJIADgIQABgEgCgEIgDgHIgFgGIgBAAQgFgHgLgIQgHgGgLgGIgCgCIAAAAIgDgBIgCgBIgDgCIgfgMIgLgDIgIgCIgBAAIgCAAIgQgDIgDAAIgIgBIgDAAIgDgBIgkABIgiAHIgDABIgBAAIgBABIgdAKIgRAJIgCAAIAAABIAAAAIgDABIgHAGIAAABIgDACIAAABIAAAAIgBACIAAABIgBAAIAAABIAAABIAAABIgBAAIAAAHIABADIACAGIAGAJIAGAGIALAKIAAABIAIATIAEAQIAAADIAAAFIABAAIAAAIIgBACIAAABIAAACIgBADIgBAEIgBABIAAABIAAAAIAAABIgBACIgBABIgBAAIgBACIgGAEIgBABIgBAAIgBAAIgCABIgBAAIgBAAIgCABIgCAAQgRADgXAHIhMAfQgQAHgVAMQgUAMgNALIguApIgBACIgMANQgMANgOATQgYAjgQAkQgRAmgIAnIgGAeQgDAXgBAbIgBAFIABAkQABASADAWQAGAqAOAlQAOAmAWAjQAKASANAQIAhAnIAAAAIABAAIAAABIAVAUQALANATAPIAbAXIAHAFIABABIANAIIAEADIAJAFIACACIAnASIAOAFIADAAIAGACIABAAIAFACIACAAIABABIABAAIANACIAYABIB3AFIA2ACQASAAAXgCIAzgLIAFgCIACgBIAKgEIABgBIAAAAIADgBIACgBIAEgCIACgCIAJgFIACgBIATgNQAOgLARgPIAWgWIAHgHQAMgMAPgTQAbgiAQgjIAMgdIAOgwQAFgVAEgXIAEglIACgsIABgkIAAgDIAAgNQgCgjgHggQgIgogSgmQgRgmgXghQgNgSgNgPIgNgPQgHgIgIgGIhGgsIgWgNIAAADIgBABIAAABIAAAAIAAABIgBABIgBABIgBACIgBAAIgBABIgCABIgBAAIgBAAIgBAAIgBgBIgBgBIgBgBIgCgBIAAgBIgBgBIgCgCIAAAAIgBgBIAAgCIABgBIAAgBIAAAAIAAgCIABgBIAAgEIAAgCIghgRIgBAAIgBAAIgBgBIgCgDIgCgGIAAgBIABgKIAAgCIABgCIAAgBIAAgBIABgBIAEgNQAIgTAKgTQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABgBAAIgTAwIgBAEIAAABIgBABIAAABIAAADIgBABIAAAJIACAEIABABIABABIAnAUIABAAIABAAIABABIADABIACACIAkASIABABIAAAAIAuAaIAhAbIAOAPQAMANAPAUQAZAjASAmQARAlAKAqQAKAnABAsIgCBUQgEAxgIAiIgBAGIgKAjIgDAIIAAABIgBABIgMAeQgSAngaAiQgJALgTAVIgeAeIggAcIgfAVIgDABIgFADIgCABIgDABIAAAAIgBABIgLAEIgDACIgCAAIgFACIg1AMIhAADgAAxmUIgjgHIgCgBIgJgDIgegOIgKgGIgBgBIgCgBIgFgEIAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAABABAAIADAAIA0ANIAFABIAKACIAFAAIACABIADAAIAFABIACAAIADAAIAFABIApAAIADAAIALgBIABAAIAFgBIAngIIABgBIABAAIAPgHIABgBIACgCIABAAIAAgBIABAAIAAAAIABgBQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIAAABIgBABIAAABQgBADgEAEIgEAEIgIAGIAAAAIgBAAIAAABIgBAAIgIAFIglAMIgBABIAAAAIgBAAIgBAAIgCABIgcACg");
	this.shape_7.setTransform(4.925,-0.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D3DADF").s().p("ABjClIgBgdQgCgVgGgYIgFgSIgBgEIAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAIgGgrQgGgsgFgXIgDgNQgCgOgBgOIAAgCIgBgEQgCgHABgEIADAAIABAFIACAAIAAAEIABACIAGALQAdA2ALA7IAAACIAEAcIADAgIgBAkIgDARIAAABIABgOIgEAKIgBADIgBACIgBADIgCAEIAAACIAAABIgBADIgBAFIgCAAIgCAIIgBACIAAgNgAANBWIAAgDIgBgDIgBgEIgCgUIAAgHIgGghIgCgDIgBgCQgDgEAAgDIAAgHIAAgIIABgCIACgBQADgBAHADQAMAEAEAGIAEAGIACAFIABAGQADAUgEATQgCAJgCAFIgDAEIgGAJIgCAFIgCABIgCgBgAgjg1QgJgBgGgFIgFgHIgEgHQgFgJgIgIIgOgPIgNgNIgFgFIgDgFIgDgCIgDgCIgCgDQgBgBAAAAQAAgBAAAAQgBAAAAAAQAAAAAAgBQABgOADgHQAEgNALgDQAEgCAHAAQAGABAFACQAHADAHAIIANATIALAVQAKATADAJQAIAUgBAVIgMABIgFAAg");
	this.shape_8.setTransform(35.225,-3.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(211,218,223,0.067)").s().p("AhNGkQhPgNhCgqIgbgWQgTgQgLgMIgVgUIgBgBIAAAAIgBgBIghgnQgMgQgKgRQgXgjgNgmQgOglgGgqQgDgXgBgSIgBgiIAAgGQABgaAEgYQAYiABmhdQBlhcCDgPIAAgEIAEgXIAAgFIABgBIAAgCIABABIAAAJIgCAZIAJgBIgFAUIACADIAAADQAFANAQANQAeAaAwABQApABAVgMQAIgEAFgFQAIgGADgHIACgGIABABIgDgkIgBgPIABAAIAAACIACAFIACAHIACATQAUAGATAKIABABIACABIAAAAQBCAfA2A5QAeAfAWAjIABADIAAACQAAAOADAPIACANQAGAWAGAtIAGArQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIABAAIABAEIAEASQAHAXACAVIAAAdIAAANIABgCIADgIIACABIABgGIABgCIAAgCIAAgCIACgDIAAgEIABgCIABgDIAFgJIgBANIAAgBIACgRIgBArIgFAlQgZB6hiBaQhrBhiLAMgAEsh4IgCABIgBADIAAAHIAAAIQAAAEACADIADACIABAEIAGAgIAAAHIACAUIABAEIACADIAAAEQAAAAABAAQAAAAABAAQAAAAABAAQABgBAAAAIACgEIAGgJIACgFQADgFACgIQAEgTgDgVIgBgFIgDgGIgDgHQgEgGgMgEQgGgCgEAAIgBAAgADJkZQgLAEgDAMQgDAHgCAPQABAAAAAAQAAAAAAAAQABABAAAAQAAABAAAAIACADIAEACIADADIADAEIAFAFIAMANIAPAPQAHAJAFAIIAFAIIAEAGQAGAFAJABQAJABAJgCQABgVgJgUQgCgJgKgTIgLgUIgNgTQgIgJgGgDQgFgCgGgBQgHAAgFACgAGggqIgEgbQAEAVACAWIABANIAAADIgDggg");
	this.shape_9.setTransform(5.15,6.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(153,153,153,0.149)").s().p("AAIBRQgxgCghgbQgOgMgHgNIgBgDIAEgUIAAgFQAFgdABgRIABghIAbAGIABAAIAEABQApAIAxABIAmgBIARAAIAEgBIABAAQgHAbAAAiIABAOIACAkIAAgBIgCAGQgEAHgHAGQgFAFgJAEQgUAJgjAAIgDAAg");
	this.shape_10.setTransform(10.1,-32.7237);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(127,167,186,0.388)").s().p("AAAAAIAAAAIAAAAIABgBIABABIAAABIgDABIABgCg");
	this.shape_11.setTransform(19.5,-39.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(127,167,186,0.176)").s().p("AgnAgIgDgBIgBAAIgCgBIgMgEIgXgGIAAgDQAJABAMAEIAUAGQBCATBFgMIAYgEIgBADIgJACIgCAAIAAAAIgSAEIgmABQgzgBgogIgAhfAGIgGgDIgDgDIgHgFIgGgJIgCgGIAAgIQAAgGADgCIACgEIAEABQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAIgCAEQgDADAAAEQAAAFAEAGIACADIAEAFIAEAEIAIAEIANAFIABABIAAABIAAACQgHgBgIgEg");
	this.shape_12.setTransform(8.6213,-43.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNAVIAAgDIAEgCIAGgDIABgCIACgCIADgDIAFgEIAAAAIABgDIACgFQABgCgDgFIgBgCQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAAAIAAgDIADAAIACABIABACIACAEIAAACQABAHgDAGIgBADIAAAAIgFAFIgBABIgCABIgDACIgCADIgDACQgEACgDAAIgBAAg");
	this.shape_13.setTransform(22.3792,-43.3958);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9AA4AE").s().p("AA2IFIiygQIgIgCIgDgBIgCAAIgBgBIgBAAIgBAAIgFgCIgmgPIg8gmIgBgBIgBgBIgCgBIgCgCIgSgPIg4g6IgCgBIAAgBIgBgBIgjgtQgLgQgKgSQgLgTgHgSQgRgmgIgnQgJgrAAgmIAAgoIABgDIAAgLIABgCIACgZQAHgqAMgjQANgoAUgiQAUgjAbggIAngoIAEgDIADgDIApgfIAEgDQARgLATgJIAdgNIAtgRIAngKIAogHQAHgCADgGIACgHIAAgJQgBgLgDgIIgFgRIABABIgCgCIABABIgQgQIgFgLIgBgBIgBgCIAAgCIAAgBIgBgCIAAgBIAAAAIAAgEIgBgBIAAgEIABgBIAAgCIAAgCIAAgBIABgBIAAgBQACgFAFgGIAKgIIAEgCIAAAAIABAAIAegMIADgBIAGgCIAKgCIADgBIAogGIAoACIABAAIACAAIAUAEIACABIAGABIABAAIAAAAIACABIADAAIAvAVIAKAGQALAHAHAHQAIAHAIAKIgBAAIADADIAFAIIABAEIAAAJIgCAEIgCAEIgFAHIgGAGQgIAFgHADQAAABgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQgBAAABAAQAAAAAAAAQAAAAAAAAQAIgEAGgFIADgDIAGgGIAEgHIABgEQABgDgBgEIgDgHIgFgHIgBAAQgGgIgJgIIgSgNIgHgEIgDgBIgKgFIgkgOIgDgBIgBAAIgCAAIgTgEIgDAAIgFgBIgDAAIgIgBIgfAAIgmAGIgCAAIgBABIgEABIgGACIgVAHIgPAHIgBAAIgBAAIAAABIgCABIgIAGIgBABIgBACIgBABIgBACIAAAAIgBABIAAABIAAABIgBAAIAAACIAAABIAAADIAAABIAAABIACAJIABAAIAIAMIADAEIAIAIIACACIAHATQAEALAAAKIAAALIgCALIgBACIgBABIAAABIgBACIgBAAIgEAFIgDACIgBAAIgBAAIgBABIgCABIgBAAIgBAAIgCAAIgBABIglAHIgmALIglAOIgFABIgfAPQgkATgdAXIgFAFIgCACIgEADIgBABIAAABIgCABIgOAOIgbAcQgXAcgVAkQgUAlgLAjQgHAVgFAYIgGAdIgDAiIgBACIAAAqQABAoAIAlQAJAnAPAiQAFAMAMAXIAVAhIAcAlIACACIADAEIABAAIAAABIAAAAIACACIA3A4IAPANIABACIAEADIABAAIABABIAkAZIA4AaIAFABIABAAIABABIAAAAIAEABIABAAIAtAGIBiAJIAnADQAWABARAAQAVAAASgCQARgCAUgFIAOgFIABAAIABAAIAGgDIAAAAIABAAIANgGIAggVQAOgKARgOIAQgPIACgBIALgKQAPgPALgOQAbgeARgiIAVgsIABgFIABgCIAAgBIABAAIAAgBIACgFIAAgCIABgCIADgKQAEgOAGgYIAEgYIACgPIAIhOQACgsgFgiQgGgqgLghQgMgmgUgiQgJgQgMgSIgXgfIgKgMIgSgQIhUg4IAAAEIAAACIgBABIAAAAIgBACIgDADIgDABIgBABIgBAAIgBgBIgBgBIgCgCIgBgBIAAAAIgBAAIgBgCIgBgBIAAAAIgBgBIAAgBIAAgBIAAgDIAAAAIAAgBIABgBIAAgCIAAAAIABgBIABgCIAAgBIAAgBIgBAAIgCgBIgBAAIgBAAIgGgCIgEAAIgCgBIgCgBIgEgBIgCgBIgHgDIgBAAIgCgBIgBAAIgBgBIgBAAIAAAAIgCgBIgCgCIgBgCIgBgBIgBgCIgBgCIgBgCIAAgCIAAgDIgBgBIAAgCIABgCIAAgDIAAgCIAAgCIABAAIAAgBIAAgCIAAgBIABAAIAAgBIAAgBIADgHIABgDIABgDIAEgFIAAgCIABgBIABgBIACgFIAGgHIABgCIABgCIAHgHIABgBIABgBIABgBIACgBIABABIAAABIgBACIAAACIgFAVIgCAHIAAABIgBABIgEANIgBACIAAACIgBACIAAABIgBABIAAACIAAAAIAAADIgBABIAAAGIgBAAIAEACIABABIALAJIACABIAJAIIABABIAAABIACABIAAABIAGAAIABABIAAAAIADABIABABIABAAIAAABIAAAAIABACIABAAIABADIA3AfIAwAkIANAPQALAMAOATQAIALAOAXQAVAjANAlQAOAoAFAlQAGAogBAoIgHBQQgFAsgLAjIgGAUIAAABIAAABIgBAAIAAADIgCAEIgBADIgHAQIgBAFIgDAEIgJATQgHAPgNAUIgZAgQgLAOgQAQIgeAbQgPAOgQAMIgNAJIgEACQgIAGgKAFIgCABIgMAGIgBAAIAAAAIgGACIgBABIgOAFIgDAAQgSAGgWACQgWADgaAAIghgBgABbmRIgDgBIgDAAIgYgDIgDgBIgNgDIgZgIIglgVIgHgGIgBgBQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIAHACIARAGIADAAIAKADIADABIADABIADAAIADABIAkAIIAEAAIAVACIADAAIADABIANAAIADAAIADAAIAMAAIADgBIADAAIArgHIAAAAIAKgEIABgBIADgBIABAAIABgBIABgBIABAAIABgBIACgBIABgCIABAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAgBABIAAABIgEAGIgEAEIgBABIgBABIgDACIgDACIgDACIAAAAIgTAIIgZAIIgDAAIgBAAIgBABIgCAAIgHABIgDAAIgDAAIgEAAIgDABg");
	this.shape_14.setTransform(6.6567,-0.4269);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D3DADF").s().p("ABbCpIABgdQgBgVgGgYIgEgTIAAgEIgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAIgFgrQgEgtgFgWIgCgNQgBgPAAgOIgBgCIAAgDQgCgIABgEIADAAIABAFIACAAIgBAEIABADIAGALQAbA3AIA7IABADIADAcQACAYgBAMQAAANgCANIABAAIgBAFIAAAAIgEARIAAAAIABgMIgEAJIgBADIgBACIgBAEIgCADIgBACIAAACIgBACIgBAGIgBgBIgDAIIgBACIAAgNgAAJBXIgBgDIAAgEIgBgEIgBgUIAAgHIgFggIgBgEIgCgDQgCgDAAgEIAAgHIABgHIAAgCIADgBQADAAAHACQAMAFADAGIAEAGIACALQADAVgFATIgFANIgDAEIgGAJIgCAEIgDACIgBgBgAgig2QgJgCgFgFIgFgHIgEgHQgFgJgHgJIgOgQIgMgNIgEgGIgDgEIgEgDIgDgCIgBgDQgBgBAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAQACgPADgGQAEgNALgDQAFgCAHABQAGAAAEACQAHAEAHAJIAMAUIALAUQAJAUACAIQAHAVgCAVIgKABIgHAAg");
	this.shape_15.setTransform(37.48,-3.0562);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(211,218,223,0.067)").s().p("AhWGjQhVgRhFgwIgBgBIgPgNIg3g4IgCgCIAAgBIAAAAIgBgBIgDgEIgCgCIgcgkIgVghQgMgXgFgMQgPgjgJgnQgIglgBgoIAAgoIABgDIADgiIAFgeQAfh4BmhWQBohYCEgKIAAgEIAEgXIAAgFIACgCIACAAIgBAKIgEAYIAJAAIgEATIABADIgBADQAGANAPAOQAcAbAwADQApACAWgLQAIgDAGgFQAHgFAEgHIACgGIABAAIgBgiIACABIAAABIABAAIABAAIABAOQAUAIATALIABABIABAAIAAAAQBBAiAzA7QAdAgAVAkIAAADIABACQAAAOABAPIACANQAFAWAEAuIAFArQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIABAAIAAAEIAEASQAGAYABAVIgBAdIAAANIABgCIADgIIABABIABgGIABgCIAAgCIABgCIACgDIABgEIABgCIABgDIAEgJIgBANIAAgBIAEgRIAAAAIABgFIgBAAQACgNAAgNQABgLgCgYIgDgcQAFAiAAAkIgIBPIgCAOQgcCAhrBZQhzBhiSADgAEthrIAAACIgBAHIAAAIQAAAEACADIADADIABAEIAFAgIAAAHIABAUIABAEIAAAEIABADQAAABABAAQAAAAABAAQAAAAABgBQAAAAABgBIACgEIAGgJIADgEIAFgNQAFgTgDgVIgCgLIgEgHQgDgGgMgFQgHgCgEAAIgDABgADUkRQgLADgEANQgDAGgCAPQAAAAAAAAQABAAAAAAQAAABAAAAQAAABABAAIABADIADACIAEADIADAEIAEAGIAMANIAOAQQAHAJAFAJIAEAHIAFAHQAFAFAJACQAIABAJgCQACgVgHgVQgCgIgJgUIgLgUIgMgUQgHgJgHgEQgEgCgGAAIgEAAIgIABg");
	this.shape_16.setTransform(6.9753,6.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(153,153,153,0.149)").s().p("AADBSQgwgDgggcQgOgNgGgNIgBgDIAFgUIABgEQAFgeACgRIADggIAaAHIABAAIADABQApAKAyADIAmAAIAQAAIAFAAIABAAIgGAYIgDAGIgBADIgCADIgCAHIgBABIAAABIAAAAIAAABIgBACIAAABIAAAAIAAACIgBACIAAADIAAACIAAACIAAAAIAAADIABACIABACIAAACIABACIABABIACACIABACIACAiIgBgBIgCAGQgEAHgHAGQgGAEgIAEQgSAGgcAAIgOAAg");
	this.shape_17.setTransform(13.525,-33.206);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(127,167,186,0.176)").s().p("AAzAsQgzgDgogKIgDgBIgBAAIgCgBIgLgEIgYgHIAAgDQAJABAMAEIAVAHQBBAWBFgKIAYgDIgBADIgJACIgCAAIAAAAIgSADgAhfADIgFgDIgIgFIgIgMQgDgHABgIQABgGADgCIACgDIAEAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABIgDADQgDAEAAAEQAAAFAEAGIACADIADAEIAFAFIAHAFQADACAKACIABABIAAACIAAABQgHgBgIgEg");
	this.shape_18.setTransform(12.3386,-43.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOAUIABgDIAEgBIAFgDIACgCIACgCIADgCIAFgEIAAgBIACgDIABgEQABgDgCgEIgBgCQAAgBAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAIAAgCIADgBIACACIABACIABAEIABACQAAAHgCAFIgCAEIAAAAIgFAFIgCAAIgBABIgDACIgCADIgDACIgHACIgCgBg");
	this.shape_19.setTransform(26.1,-43.2357);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9AA4AE").s().p("AiHG8IgLgBIgygJIgEgBIgFgBIgwgQQgXgJgPgHIgbgOIgEgDIgFgCIgNgJIgCgCIgCgCIgBgBIgHgFIgDgEIgCgCIgCgCQgNgNgNgSQgNgSgJgRIgRgfIAAgBIgBgBIgzhwIgPglIgIgVIAAgDIgCgDIAAgCIgBgDIAAgBIAAgBIgGguQgBgXABgRIACgQIAAgCIAAgDIABgCIAAgBIAAgBIAAgBIAHgjIAYhNIAAgCIABgBIAAgCIAEgIIAAgBIAQglIADgEQAKgVAKgPQAJgOAOgTQAXgeAhgdQAhgcAhgTIBFghIAFgCQAogPAmgGQAngIAqABQAlAAAqAJQASAEAWAGIAVAHIABAAIABABIABAAIAOAFQAjAPAkAZIAVAOIADAEIACABIABABIABAAIAAABIAMAJIAEAEIACABIAQAQIAcAdIAEAEIAUAaIABABIAAAAQABABgBgBIABABIAAABIABAAIAAAAIAAABIABAAIACACIAHABIAIgDIAHgDIAAAAQAHgFAIgIIAMgNIAAgBIABgEIAAgCIADgJIADgGIABgBIAAgCIABgBIABgBIACgDIACgDIABgBIABgBIADgCIABgCIABgBIABAAIABAAIABgBIAAAAQAGgEAFAAQAEgBAIABIALAEIAEACIABACIABAAIAAAAIABAAIAAAAIAZAVIAHAHIABABIABABIABACIAHAHIADAEIACACIAQAWIABADIABABIADAFIACACIAKAVIAKAcIABABIAAABIABACIABAFIAAACIAAABIADAMIADAoIgBAUQgBALgDAIQgCALgEAIIgEAIIgCAEIgEADIgDADIgJADIgFAAIgIgCIgEgCIgEgBQgIgDgHgGIAAgBIABAAIAPAIIAIACIAIABIAHgBIAHgEIADgCIAEgHIABgEQAEgKACgJIACgJIABgPIgBgiQAAgJgDgKIgCgMIAAgBIgBgBIgCgIIgBgBIgDgJIgQgkIgCgCIgBgBIgCgFIgBgBIgBgBIgMgSIgEgDIgGgIIgJgJIgBgBIgggaIAAgBIgFgDQgEgCgEgBIgIAAIgDABIgCABIgCABIAAAAIAAAAIgBABIgBAAIAAABIgBAAIgEAEIgDAFIgBABIgBABIAAABIgCAFIgDAGIgBAGIgBACIAAADIgBACIgOAQQgHAIgJAGIgBAAIgBABIgCABIgCABIgCABIgBABQgHADgFAAIgEABIgDgBIgGgBIgFgEIgBAAIgBgBIgBgBIgBgBIAAAAIgBgBIgBAAIAAgBIgBgBIgUgZIgDgEQgLgMgQgQIgagWIgEgEIgEgDIgBAAIgBgBIgZgTIgigUQgQgJgTgHIgJgEIgFgCIgBAAIAAAAIgBAAIgCgBIgTgGQgRgFgVgEQgogIgkAAQgmgBgoAIQgWAEgXAHIgeAKIhGAhQgkAWgbAYQgcAYgZAgQgNAQgJAQQgKAQgKASIgTAsIgCAEIgBACIAAADIgXBLIgEARIgDARIgBAEIAAACIAAADIgCAOQgBARABAVIAFArIABABIAAABIAAACIABABIAAABIABADIABAEIAOAhIAnBbIASAqIAAAAIABABIACAFIADAEIAJASIACAEQAJAQAMARQAMARAMAMIACACIACACIADAEIAFAEIACABIACACIABABIAAAAIABABIADACIAlAWIBEAbIAwANQAlAIAoAAIAngDIAEgBIADAAIAHgBIADAAIAJgCIADAAIAJgCQAXgGAOgEIAMgFIBMgeIACAAIADgCIAQgGIABgBQAmgSAdgWQAfgVAcgfQAZgbAXgjQALgTAIgQIAUgtIAHgcQADgKAAgKIAGhQIgBAAIgBAAIgBABIgBAAIgBABIgDAAIgDgBIAAAAIgBgBIgDgCIgBgBQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIABgBIAAgCIABgBIAAAAIAAgBIABgCIAAgBIAAAAIABAAIAAgBIACgCIAAAAIABgBIABAAIAAAAIAEAAIAAgBIAEAAIACAAIgEgKIgBgEIAAgBIAAgCIgDgQIgBgDIAAgBIAAgCIABgDIAAAAIABgFIABgBIABgCIAEgEIABAAIADgDIAEgCIACgBIACAAIACgBIAFgCIABAAIAHgBIAPAAIAEAAIADAAIAEABIACAAIABAAIAEABIACAAIALACIABABIAAAAIAFACIgBABIgEACIgBAAIgMAEIgEAAIgDABIgEABIgDABIgCAAIgCAAIgHABIgDABIgKACIABAAIgDABIgBAAIgBAAIgCABIgBAAIgBABIgDABIAAABIgBAAIAAAAIgBAAIAAAAIAAAFIgBAEIAAACIgCAIIAAACIAAACIAAABIgCAEIgBAFIgBADIAAACIAAABIABADIABABIAAAHIAAAAIAAAAIgBABIAAABIgBABIgBAYIgDA8IgHAnQAAAFgDAFIgDAJIgPAlQgMAZgHALQgVAjgbAeQgaAeghAYQgiAZgiASIhKAhQgqAQgiAHIgWAFIgCAAIgeAEIgGAAIgUABIgJABIgfgCgAFZkgIgBABIABgCgAHchUIgCAAIgCAAIgBgBIgBAAIgGgCIgJgEIgBAAIgDgCIgCgCIgZgXIgEgFIgDgDIgBgBIgHgJIgBgDIgCgDIgOgbIgLgiIgEgXIAAgoIACgNIAAgBIABABIAJAmIABADIAAADIANAqIAFAMIASAiIAAACIABABIADAGIABABIAAABIABAAIAWAeIAGAGIADACIADAEIACAAIABABIABACIABAAIACABIAAABIABAAIABABIACAAIABABIABABIACAAIABABIgBABIgCAAg");
	this.shape_20.setTransform(59.305,17.8504);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D3DADF").s().p("AhrCpQgFAAgEACIgCgBIAMgFQASgJAHgFQASgLATgQIAOgNIADgCIAAgBIADgBIAigZQAngaAQgPIALgIQAMgIANgHIABgCIACgCIAKgGIACADIgEADIABACIgDABIgDACIgHAKQgiAzgyAkIgCACIgWAQQgUANgLAGQgLAGgNAFIAAAAIgDABIgBAAIAAABIgRAFIAAAAIALgFIgKABIgDAAIgCAAIgEABIgEAAIgCAAIgBABIgDAAIgFACgAg4A5IgLAAQgEAAgBgBQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIADgCIADgCIADgDIASgLIAGgDIAagTIACgEIABgDQACgEADgBIAHgDIAGgDIACgBIADACQACAEAAAGQACAMgEAHIgDAGIgJAIQgRAMgSAEQgIADgGAAgAAdg1QgEgIADgIIADgHIAFgHQAFgJAEgKIAHgUIAGgRIADgHIADgEIAAgEIAAgEIADgDQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAAAQANgFAIgBQANgCAIAIQADADAEAHIACAKQAAAIgFALIgLAUIgMATQgNARgHAGQgPAQgTAJQgGgHgCgIg");
	this.shape_21.setTransform(76.875,38.8716);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AABAIIgGgBIgBgCIgCgBIgDgCIgDgBIgDgBQgFgDgBgEIADgBIADAEIAGAEIADAAIACAAIAEACQACACACAAIABAAIAFgBIAEAAQADAAADgDIAAgCIACgDIACgCIACADIAAACIgCACIgDACIgBACQgHADgGABIgEABg");
	this.shape_22.setTransform(106.15,10.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(127,167,186,0.388)").s().p("AgCgBIACAAIABABIACAAIAAABIgDABg");
	this.shape_23.setTransform(101.5,9.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(127,167,186,0.176)").s().p("AgQAMIAAgGIACgKIACgFIABgBIABgBIAAgBIADgFIAEgEIABAAIABgBIABgBIAAAAIACgBIACgBQAFgCADACIAEAAIABAEIgDAAIgEgBQgFAAgDACQgEABgDAHIgCADIgCAFIgCAGIgBAJQgBAEACAJIAAACIgBAAIgBABQgDgHAAgIg");
	this.shape_24.setTransform(96.875,-11.8071);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(211,218,223,0.067)").s().p("AiQGHQiNg2hKiCIgnhbQgahTAJhUIAEgRIAXhLIAAgDIABgCIACgEIATgsQAKgTAKgPQAJgQANgQQAZggAcgYQAbgYAkgWIBGghIAegKQB3gfB8AvQCAAxBHBvIAEgCIAWgHIAEgCIADABIABABIgJADIgXAJIAEAIIgTAFIgCADIgCAAQgJALgGAVQgJAmAVAsQASAlAUAOQAHAFAHADQAIAEAIAAIAGgCIAAACIAegTIAAABIgBADIAAACIgLAHQADAVAAAUIgBACQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAABAAQABBJgbBJQgOApgWAjIgCACIgCACQgNAHgLAIIgLAIQgRAPgmAaIgkAZIgCABIAAABIgEACIgOANQgSAQgSALQgIAFgSAJIgMAFIADABQAEgCAEAAIAAACIAGgCIACAAIACgBIACAAIAEAAIADgBIACAAIADAAIALgBIgMAFIABAAIAQgFIABgBIABAAIgCABIhMAeQgvAMgvAAQhJAAhLgdgAD3DOIgGADIgHAEQgEABgBAEIgBADIgDAEIgaATIgGADIgRALIgEADIgCACIgDACQAAABAAAAQAAABAAAAQABABAAAAQABAAABAAQABABAEAAIAKAAIAFABQAGAAAIgDQATgEARgMIAJgIIAEgGQAEgHgCgMQgBgHgCgEIgCgCIgBAAIgCABgAFLApQgHABgOAFQAAAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAIgCADIAAAEIgBAEIgCAEIgDAHIgGARIgHAUQgEAKgGAJIgFAHIgDAHQgCAIADAIQADAIAGAHQASgJAQgQQAGgGANgRIANgTIALgUQAFgLAAgIIgDgKQgDgHgDgDQgHgGgJAAIgGAAgACzF4QAMgFALgGQALgGAVgNIAXgQQgcAWghARIgBABIgQAGg");
	this.shape_25.setTransform(52.6129,17.6534);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9AA4AE").s().p("AisGyIgqgGIgFgCIgDAAIgBAAIgggJQgrgPgjgVIgCgBIgSgMIgBAAIgFgEIgEgCIgBgBIgIgGIgEgEIgFgDIgUgQQgSgPgOgOIgOgQIgWgfIgBgBIAAgBIgDgFIgNgeIgBgDIgHgZQgFgTgDgXIgNh9IgDhcIABgDIAAgFIABgBIAAgCIAAgDIAKgqIABgCIABgDIAGgRIACgDIAQgiIAXgkIAZghIADgFIAYgbIAHgIIAWgXIAggdQAigbAmgTQApgUAmgKQAUgGAWgDQAXgEATgBQAsgEApAEQAsAFAmANQAnAMAnAVQAnAWAfAaIAFAFIABAAIACACIACACIAqAsIAHAJQAJALAPAXIAjBBIAGAPIABACIANAlIABABIAAABIAAABIABABIACACIAAAAIAAABIABAAIAFACIAEAAIAFAAIABAAIACAAIABgBIABAAIASgGIARgJIAOgRIAJgIIADgBIACgBIADgBIABgBIAFgBIABgBIALAAIAGADIADABIACABIABABQAGAEADAFIACACIABABIAAAAIAAAAIAEAGIAVApIABACIAAABIAKAdIAAABIAFAcIAAADIABAJIAAAGIABACIgBAWIgBAJIAAADIgMA1IgBACIgCADIgCAFIgLAUQgFAJgJAJIAAAAIgDAEIgHAFIgEACIgEACIgKgBIgIgDIgHgFIgJgJIgFgHQgBgBAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIAFAHIAGAGIALAHIAHADIAEABIAIgCIADgCIAGgFIADgDIAAAAQAIgJAFgJQAGgKAEgKIACgCIABgDIAAgDIABgCIAHgWIAFgeIAAgTIABgCIgBgDIAAgIIAAgDIAAgGIgBgFIAAgDIgHgfIAAgCIgPgmIgEgIIgBgCIgPgZIgCgCIAAgBIgIgHIgEgCIgEgBIgGAAIgCAAIgBABIgCAAIgBABIgCABIgCAAIgCABIgHAHIgFAGIgJALIgBABQgLAHgIAEIgKAEIgGACIgCABIgCAAIgDABIgCAAIAAAAIgDAAIgCABIgJgBIgGgCIgBAAIAAAAQgHgCgDgHIgBgBIgBgCIAAgBIAAAAIgDgHIAAgCIgghJIgNgWIgDgEIgGgJQgNgUgKgOIgDgEIgKgLIgOgPIgPgOIgHgHIgCgBIgBgBIgBgBIgEgDQgjgcghgSQgmgUglgMQglgLgqgFIgcgBQgbgBgaACQgsAEglALQgoALgkASQgmAUgeAYQgSAPgMAMIgzA5IgcAlIgPAYIgHAKIgQAiIgBADIgGAQIgBADIgKApIAAACIgBAGIAAADIAAABIACAgIAJB9IAEA1QAEAaADAOIAFAUIACAEIABADIALAbIACACIABADIABACIADAEIABACIAeAlQAMANASAPIADADIAhAaIAAAAIACABIACABIAEADIABABIABABIALAHIAEADIACABIACABQAkAWAmANIAfAJIABAAIAwAIQAXADAbABIAggBIArgDIAFAAIADAAIASgBIACgBIALgBIAFgBQAkgFAmgNQAngOAjgVQAigUAggdIAdgdIAZggIAihBIANghIgBAAIgEAAIAAgBIgBAAIgBAAIgCgCIgCgCIgBgBIgBgCIAAgCIAAAAIADgEIAAgBIABAAIABgBIAAgBIAAgBIABAAIAAAAIAAgBIABAAIABgBIABAAIAAABIABAAIABAAIADAAIABABIAEAAIABgBIANgiIABgBIAAgBIAAAAIABgBIABgBIABgCIAAAAIAFgCIABAAIAFgBIAFAAIAVAEQARAEAXAJQAAAAAAAAQABAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAgBIgogLQgIgCgMgBIgFAAIgFABIgEACIgBABIAAABIAAAAIAAAAIgBABIgPArIAAABIgBABIglBbIgLATIgMARIgNAQIgdAeQggAegjAWQglAXgnAOQgoAOgpAHIhJAHIgLAAIgfABQgeAAgXgDgAGTh/IgBABIABgBgAHOBuIgCAAIgBAAQgEgBgDgDIgFgEIgOgQIgJgQIgIgTIAAgCIgBAAIAAgBIgCgIIgBgBIAAgBIgBgDIgEgZIAAgDIgBgKIAAgWIABgDIAAgDIACgPIAAgCIABgBIAAgCIAGgWIAOggIACgCIABgBQAAAAAAAAQABAAAAABQAAAAAAAAQgBAAAAAAIAAADIgBAHIgGAwIAAACIAAACIgBAkIABACIAAADIABAJIAAADIAAACIABAGIAAACIADAPIAAABIAAACIACAHIAAABIAFAUIAMAdIAGAJIABACIABABIACACIABABIAAAAIABAAIAAABIABABIgBABIAAgBg");
	this.shape_26.setTransform(70.825,27.0642);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(127,167,186,0.388)").s().p("AgBgBIACAAIAAAAQAAABAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIgBABIgBAAg");
	this.shape_27.setTransform(111.4625,35.8625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(153,153,153,0.149)").s().p("AgfBfIgGgCQgHgCgHgGQgFgFgEgIQgNgUgEgkQgFgxAYgkQAKgQAMgHIACgCIAVABIAGAAIAuABIAggEQgDASgBASQgCAoAFAvIAFAnIADAPIAAAFIAAAAQgbgDghAEIgOABIgBABIgOADIgUAFg");
	this.shape_28.setTransform(103.5061,27.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(127,167,186,0.176)").s().p("AgRByQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIAAAAIgFgQIgFgnQgFgwACgnIACgKIACgMIADgYIADgBIgBAWIgEAVQgLBEAUBDIAHAWIgEABIgDgJgAgOhOQAAgIADgIIADgGIACgFIAGgHIAGgGIACgBIACgBIACgBIAIgBQAFAAAEACIADACIABAEQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIgEgCQgDgCgFAAQgEABgGAFIgDACIgEAEIgCAFIgFAJIgDANIgBABIgCABIgBAAg");
	this.shape_29.setTransform(113.4386,24.62);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AABALIgDAAIgBgBIgEgEIgBgBIgCgCIgDgDIgDgBIgCgCQgEgFABgEIADAAIACAFIAFAEIACACIACABIACACIABABIAEAEIAAAAIAEABIAEABQADAAAEgDIADgBIACgCIADAAIAAACIgCADIgBABIgEACIgCABIgGABIgHgCg");
	this.shape_30.setTransform(115.6472,38.3194);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(211,218,223,0.067)").s().p("AgsGkQiAgKhmhZQhthegciHIgJh+QAFhQAjhHIAPgYIAcglIAzg5QAMgMASgPQAegYAmgUQAkgSAogLQAlgKAsgEQAagDAaABQCAAJBoBaQBnBZAfCBIAEgBIAGABIARgBIAHAAIAAAAIAAADIgJABIgZAAIACAIIgVAAIgCABIgDAAQgMAIgLAQQgXAiAFAuQAEApAPAUQAFAHAFAGQAHAGAHACIAGACIAAABIAUgEIgBAAIARgEIANgCIAAABIgBAAIgFACIgBABIgGACIgCABIgQAEQgFAVgHAUIAAABIAAABQgYBFgyA8QgcAiggAaIgDABIgBABQgPACgOAFIgNAEQgVAHgsAMIgpAKIgDACIgBAAIgEABIgRAIQgXAJgVAEIgcAEIgNACIADABIAIABIAAACIAGAAIACABIABAAIABAAIAEABIAEAAIACABIADABIAKADIgRAAIAFABIARAAIAAABIgqADIgWAAIgKAAgACdEXIgHABIgIABQgEABgDACIgCADIgDACIggAKIgGABIgUAEIgEACIgDABIgEABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABIAEABQAGACAFADIAFACQAFACAIABQAUABATgFIAGgCIAFgDIAHgEQAFgFADgMQABgHgBgEIAAgDIgCAAIgBAAgAELCZIgCACIgCADIgDAEIgDAEIgFAFIgLAOIgNAQIgQAPIgHAFQgEACgBAEQgFAGAAAJQAAAIADAJQAVgCAUgJIAZgRIATgNQAKgIAHgHQAJgJACgHQABgFAAgGQgBgHgCgEQgFgKgNgDIgWgBQAAAAAAAAQAAAAAAABQgBAAAAAAQgBABAAAAgAAjGgIADAAIgDAAgAA6GfIgCAAgAA9GeQAMgBAYgHIAbgHQgZAIgZAFIgFABIgLACIADgBg");
	this.shape_31.setTransform(63.2375,27.2323);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D3DADF").s().p("AhzCEIgRAAIgFAAIARAAIgKgEIgDgBIgCgBIgEAAIgEgBIgBAAIgCAAIgCgBIgGAAIAAgCIgIgBIgDAAIANgDIAdgEQAVgDAXgKIARgHIAEgBIABgBIADgCIApgKQArgMAVgHIANgEQAOgFAPgBIABgBIADgCQAIgDAFAAIgBAEIgFACIABABIgEAAIgCACIgLAHQgxAlg6AQIgCABIgbAIQgYAGgMACIgDAAIgCAAIgSABIgDAAIAAABIgFAAgAgyAnQgIgBgFgCIgFgCQgFgDgGgBIgEgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIAEgBIADgBIAEgCIAUgEIAGgBIAggKIADgBIACgEQADgBAEgBIAHgBIAHAAIADAAIAAACQABADgBAHQgDANgFAEIgGAFIgFADIgGABQgQAEgRAAIgGAAgAAxgoQAAgJAFgHQABgEAEgCIAHgFIAQgPIANgQIALgNIAFgGIADgDIADgFIACgDIACgBQAAgBABAAQAAgBABAAQAAAAAAAAQAAgBAAAAIAWABQANADAFAKQACAEABAHQAAAGgBAGQgCAGgJAJQgHAHgKAIIgTANIgZARQgUAJgVACQgDgJAAgHg");
	this.shape_32.setTransform(77.8313,55.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9AA4AE").s().p("AiSGvQgtgEgngJIgZgHIg3gWQgmgSghgcQgWgSgLgKIgDgEIgEgDIgHgIIgEgEIgKgMQgRgSgKgPIgHgJIgDgDIgPgaIgCgHIgBgBIgDgFIAAAAIAAgBIgDgGIAAgEIgCgEIgDgLIgHgrQgCgSAAgYIANjRIABgFIAAgCIABgBIAAgCIACgHIABgBIABgDIAHgVIASgmIACgCIAPgaIAEgDIABgCIABgBIABgCQAOgSANgOIAegeIA4gxIAJgGQASgNARgLQAmgVAngOQAqgOApgFQAUgCAXgCIAgAAIADABIAIAAQAsADAmAJQArAMAlARQAmASAjAbQATAOAOANIAPAOIAqAwQALAQAMAUIAHAOIAfBJIACAKIAHAVQAEAQAFAYIAAADIABACIAAABIAAABIAAABIABABQABAEADABQADACAEABIABAAIAIAAIATgEIASgGQAIgJAJgHIALgGQAFgCAIgBIACAAIABgBIABAAIACABIACAAIABAAIACAAIABABQAIADAEAEQAFAFADAFIACADIAAAAIAAAAIAAACIABABIACAFIABADIALAdIAEAOIAFAYIABAMIABADIAAAJIAAABIgDAmIgCARIgCAGIAAACIgHAUIgEAKIgFALIgJARIAAABIgBADQgGAIgIAKQgIAIgJAIIAAgBIgDADIgIAFIgJACIgEAAIgFgCIgHgEIgGgGIgGgGIgHgMQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIAHALIAJAJIABABIACACIADACQAEACAEAAQADABAEgBIAEgCIAJgHIAAAAQAIgGAIgJIAPgVIAAAAIAJgRIANgpIAAgBIAFgXIABgQIAAgDIAAgSIAAgBIAAgGIgBgCIAAgDIgGgiIgQgqIgDgIIgBgCIAAAAIAAAAIgBgCIgHgIQgDgDgFgCIgBAAIAAgBIgHAAIgGACQgGACgHAEIgDADIgMAMIgCACIgUAIQgOAEgIAAIgBAAIgBAAIgHAAIgBAAIgCAAIgBgBIgBAAIgHgBIgDgCIgBgBIgCgBIgBgCIgBgBIgCgCIAAgBIgBgBIgBgBIgBgEIAAgBIAAgBIgBgBIAAgBIgBgBIAAgDQgEgXgGgRQgCgJgDgKIgEgKIgCgFIgBgFIgQgmIgCgEIgCgGIgPgbQgIgOgOgTIgWgaIgBgBIghghQgSgQgNgKQgigZgkgRQgmgRgmgKIgbgFQgZgEgcgCQgpgDgpAGQgqAFglAOQgnANgiAUQgQAJgSAOIgZATIhCA/IgSAUIgJALIgRAZIgCAFIgCACIgBACIgUApIgEAOIgBADIAAABIAAABIgCAEIgBABIAAACIAAABIgBACIgFAtIgBAKIgCAeIgDA4IgBAbIgBApQgBAVACAUIAHAnIAEARIABACIABAEIAAAAIADAFIAAABIABAAIAAACIACAEIAJARIANATQAMARAOAPIAcAeQAPAPAQAMQAgAcAjARIAwATIACABIACABIAZAHQAXAGAbAEIAfAFIApADIAFAAIACAAIALABIADAAIAJAAIAFAAIAGAAIAFAAQAoAAAkgIQAogHAmgQQAngRAhgXIAhgYIAIgHIAWgWIApg7IABgBIAAgBIACgCIAPgcIgCAAIgBgBIgBAAIAAAAIgCgBIAAgBIgBAAIgCgBIgCgEIAAgBIAAgBIAAgBIABgBIABAAIABgCIABgBIAAAAIABAAIABgBIAAgBIABgBIAAgBIABAAIAAAAIAAgBIADAAIAAABIAAAAIABAAIACAAIABABIABAAIABAAIADAAIABABIASggIABgBIABgBIABgCIACgBIABgBIAEgBIACAAIADAAIAGAAIACABIASAGQAQAHAVAMQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgmgRIgZgHIgEABQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABIgBACIAAAAIgBAAIgUAnIAAAAIgBACIgCADIgUAlIAAABIgBABIgcAtIgNARIgOAQIgQANIghAaQgmAbgkAPQgoASgoAIQgnAJgsABgAGhg6IgBABIADgCgAG7C5IgBAAIAAAAIgCgBIAAgBIgCgBIgBAAIgBgBIgFgGIgCgCIgDgDIgCgDIAAgBIgBAAIAAAAIgMgaIgFgUIgBgBIAAgCIAAAAIAAgDIgBgFIAAgCIAAgBIgBgnIAEgcIABgDIACgFIANgiIAIgOIAHgKIABgCIABgBIADgFIABgBQABAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBAEIgRBCIgEAZIAAADIAAADIgBAeIABAQIAAACIAAADIAJAsIAAAAIABAAIAAABIABAEIAFALIABAAIAAACIACADIABABIAAAAIAAAAIABABIAAABIAAAAIgBAAg");
	this.shape_33.setTransform(76.55,26.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(127,167,186,0.388)").s().p("AgBgBIACAAQAAABAAAAQABAAAAAAQAAABAAAAQAAAAgBABIgBAAIgBAAg");
	this.shape_34.setTransform(115.72,41.925);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D3DADF").s().p("AhoB0IgXgCIAAABIgDAAIgBgBIgBAAIgQgDIgFgBIAQACIgJgFIgDgBIgBgBIgEgBIgEgBIgBgBIgCAAIgCgBIgGgBIAAgCIgIgCIgCgBIANAAIAdAAQAVgBAYgHIASgEIAFgBIAAAAQABAAAAgBQAAAAAAAAQABAAAAAAQABAAAAAAIArgFQAsgGAWgEIAOgCQAOgDAOAAIACgBIAEAAQAIgCAEAAIgBADIgFACIAAACIgDgBIgDABIgMAHQg2Acg7AJIgDABIgbADQgXADgMAAgAg2AeQgIgCgFgCIgFgDIgJgGIgEgCQAAgBAAAAQgBgBAAgBQAAAAAAAAQABgBAAAAIADgBIADgBIAFgBIAUgBIAGAAIAhgGIADgBIADgCQADgCAEAAIAHAAIAIAAIACABIAAACQABADgDAHQgFAMgFAFIgGADIgGACIgGABIgPABQgMAAgMgDgAA4gSQgCgJABgIQABgJAGgGQACgDAEgBIAHgFIASgMIAQgOIAMgMIAGgFIAEgDIADgDIACgDQABgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAABAAQABgBAAAAQAAAAAAgBQAAAAAAAAIAVAEQANAFAEALQABAEAAAHQAAAFgDAGQgDAGgJAIQgIAGgMAHIgUAKIgcANQgRAFgSAAIgGAAg");
	this.shape_35.setTransform(79.5563,56.975);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(153,153,153,0.149)").s().p("AA/BhQgagHgigBIgMAAIgCAAIgPACIgVABIABgBIgGgCQgHgEgGgHQgEgGgDgIQgKgVACglQACgyAbgfQANgOANgGIACgBIAVADIAFABIAuAHIAgACQgEAPgEASIAAACQgIAngCAuIAAAoIAAAQIAAAEg");
	this.shape_36.setTransform(109.2148,32.425);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAAAMQgBAAgBAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgBAAIgEgFIAAgBIgCgCIgDgDIgCgCIgCgDQgDgFABgEIADABIACAFIAEAFIACACIACABIABACIABACIAEAEIAAABIAEABIAEABQADABAEgCIACgBIACgCIADAAIAAADIgCABIgBABIgEACIgCAAIgEABQgFAAgDgDg");
	this.shape_37.setTransform(119.5375,44.8225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(127,167,186,0.176)").s().p("AglB3IgCgJQABAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAIgCgRIAAgnQABgwAIgmIAAgCIADgIIAEgMIAGgXIAEAAIgFAVIgHAUQgVBCALBFIAEAXgAgJhQQABgHAEgIIADgFIAFgIIAEgDQAGgEAGgCQAFgCAFABQAGABADACIADADIAAADIgDgBIgEgCQgDgDgEAAQgFAAgGAEIgEACIgEADIgFAFIgFAHIgEANIgBABIgCABIgBgBg");
	this.shape_38.setTransform(119.8,31.0893);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(211,218,223,0.067)").s().p("AAFGjIgFAAQAMAAAXgDIAbgDQgZAFgaABIgGAAgAgOGjIgCAAIgLgBIAAgBIAXACgAgiGiIgqgEIgfgEQh8gbhahnQhkhygFiUIAEg3IABgeQAPheAzhMIASgUIBDg/IAYgTQATgOAPgJQAigVAngNQAmgNApgFQApgGAoADQAdABAZAFQB+AbBYBnQBbBmAMCEIAEAAIAXADIAGABIABAAIAAADIgKgBIgYgDIABAJIgVgEIgCABIgCAAQgOAFgNAPQgbAdgCAwQgCApANAWQADAHAFAHQAFAHAHADIAGACIAAACIAUgCIAAABIARgCIANAAIAAAAIgCABIgEABIgCAAIgFABIgDACIgQACIgRAmIgBABIAAABIAAAAQgiBAg6A2QgfAdgjAWIgEAAIgCABQgOAAgPADIgNACQgWAEguAGIgqAFQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABIgBAAIgEABIgSAEQgXAHgVABIgdAAIgNAAIACABIAIACIgBACIAHABIACABIABAAIACABIAEABIADABIACABIADABIAJAFIgQgCIAFABIAQADIAAAAIACABgAAZE3IgFABIgDABIgEABQAAAAAAAAQAAABAAAAQAAABAAAAQABABAAABIAEACIAJAGIAFADQAEACAJACQATAEAUgCIAGgBIAFgCIAHgDQAGgFAFgMQACgHAAgEIAAgCIgDgBIgHAAIgIAAQgFAAgCACIgDADIgEABIggAGIgGAAIgUABgADuC9QAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAABIgCADIgEADIgDADIgGAFIgNAMIgQAOIgRAMIgHAFQgEABgCADQgHAGgBAJQAAAIABAJQAWABAUgGIAcgNIATgKQANgHAHgGQAKgIADgGQACgGABgFQAAgHgBgEQgFgLgMgFIgVgEQAAAAAAAAQAAAAgBABQAAAAgBAAQAAABgBAAg");
	this.shape_39.setTransform(69.6,26.6859);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9AA4AE").s().p("AhtGxIgDAAIgCgBIgQgCIgCAAIgBAAIgCgBIg5gLQgrgKgmgPIgbgLIgBgBIgBAAIgYgMIgCgCIgUgMQgkgYgdgfQgKgKgSgWIgZgiQgMgRgLgTIgUgtIAAgCIgBgCIAAAAIAAgBIgBgFIAAgBIgBAAIAAgCIAAgDIgBgCIgEgTIgBgWIAAgVIADgrIAnjFIABgCIADgOIABgBIAAgBIABAAIACgFIABgBIACgHIABgCIAIgOIAbgpIADgDIARgVIACgBIADgCQANgPASgOIBNg4IAbgQQAMgHAagMQAogRAqgIQApgIArAAQArAAApAIQAtAJAlAPQAoAPAjAXQAiAWAhAfQAPAPAOARIAaAhIALASQAGAJAEAJQAMAUAGATIAHAOIASBCIAIAqIADAqIAAAGIAAABIAAABIABABIAAAAIAAAAIAAABIABABIABABIABABIABAAIAAABIABAAIABABIAAAAIABAAIAAAAIACABIABAAIAFABIABAAIABABIACAAQAKABAKgDIAKgBIAJgDIABgBIACgCIABgBIABAAIADgBIADgCIACgCIAIgEIAKgEIACAAIACAAIAIAAQAGAAAGACQAFADAEAEIAHAIIAAACIADAFIAAABIAKApIAAADIAAACIADAjIgBAXIgBABIAAABIgEAeIgJAdIgHANQgEAKgFAIIgRAZIAAAAIAAABIAAAAIgBABIgCACIgEADIgNAOQgKAIgHAEIAAAAIgDACIgIAEIgFABQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgFgBIgEgCIgEgCIgGgGIgFgHQgGgKgCgGQAAAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQACAGAGAIIADAEIAFAGIADACQAEADADABQAEABADgBIAFAAIAGgEIAEgDIAAAAQAHgEAIgHIAOgOIADgEIADgCIAAgBIAAAAIAAAAIAQgZIANgaIAAgDIABgCIAGgSIAGgfIAAgDIAAgEIAAgCIABgBIAAgWIgDghIgHghIgDgKIgBgCIAAgBIgCgFIgFgHQgDgCgEgBQgDgCgEAAIgFAAIgBABIgBAAIgBAAIgBAAIAAAAIgBAAIgBABIgCAAIgCABIgBAAIgEACIgCAAIgHAFIgCACIAAAAIgEADIgCACIgCABIgVAFQgOACgIAAIgFAAIAAgBIgHgBIgBAAIgDgBIgCgBIAAAAIgBAAIgCgBIgBgBIAAAAIgBgBIgBAAIgBgBIgBgBIgBgCIgBAAIgBgBIgBgBIAAgCIgBgBIAAgBIgBgDIAAgCIAAAAIAAgFIgBgCQgBgTgDgWIgPhGIgRgxQgIgSgKgTIgKgRIgHgLIgBgCIgEgEQgYghgdgdQgegcgigWQgigWgngPIgZgIQgZgIgcgFQgogIgpAAQgkAAgtAIQgpAIgkAQQgQAHgUALIgsAbIg5ArIgZAXIgGAFIgaAeQgHAIgFAIIgRAfIgBACIgCAFIgBACIgCAEIAAABIgBABIAAABIgEAOIgIAgIgJAoIgKA3IgFAbIgGAoIgEApIAAAUIABAUIAEAWIABABIAAABIABAFIAAABIABAAIAAABIAAADIABACIAOAgIACACIABAFQAJAOANAUIAYAiQAPAUALALQAcAeAiAXIATAMIADABIANAIIAFACIAFADIABAAIAAAAIADABIAFADIATAIQAXAJAZAHIAeAIIAtAKIACAAIAJACIAAAAIAAABIACAAIAQADIABAAIABAAIACAAIABAAIACAAQAqAGAogDQAogCAogMQAogLAkgTIAkgUIAhgYIAcgeIAqg1IAAAAIgBAAIgCgBIgBAAIAAAAIgBgBIgBgCIgBAAIAAgBIAAAAIgCgFIAAgBIABgBIABgBIACgDIABAAIABgBIABAAIABgBIABgBIAAAAIABAAIAAgBIABABIAAAAIAAAAIABAAIABABIABAAIABAAIAAABIACAAIABAAIABABIABAAIABAAIAXgdIACgCIABgBIABgBIACgBIAFAAIABAAIAEAAIADABIAKAEIACABIAJAFIAkAXQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAQgBgBAAAAIgRgLQgIgGgKgFIgTgJIgFgBIgEAAIgFABIgBAAIAAABIgBAAIgBABIgYAiIgBAAIAAABIAAABIgBABIgBADIgCABIAAABIgBAAIgsA7IgOAQIgOAPIgRAOIgRAMQgYAPgMAGQgnAUgoAMQgnAMgqAEIghABQgaAAgagDgAGwAEIgBABIACgBgAGpD6IAAAAIgBAAIAAgBIgBAAIgGgGIgKgRIgBgDIgBgCIgBgCIgBgFIgCgEIgCgJQgCgKAAgLIgBgBIABgaIABgGIABgLIACgLIACgGIAKgbIAAgBIACgFIABgCIABgBIAAgCIABgCIAIgMIABgCIAEgGIAXgcIABAAQABAAAAAAQABAAAAAAQAAAAAAABQgBAAAAAAIgBADIgCACIAAACIgGANIgHARIgBACIgBACIgFAPIgBABIAAABIgEAJIgBAFIgBADIAAACIgCAHIgCALIgCACIgFAkIAAAiIABAIIAAAFIAAAEIABADIABAHIAFAQIABACIAAACIABABIABABIAAABIAAABIgBABIAAgBg");
	this.shape_40.setTransform(81.2,25.6063);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgCANQgBgBAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAIgBAAIgEgFIAAgCIgBgCIgDgDIgCgCIgBgDQgCgGABgDIADABIABAFIADAFIACACIACACIABACIAAACIAEAFIAAAAIADACIAEACQADABAEgCIADAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABgBAAAAIADABIgBACIgCABIgBABIgEABIgCAAIgCAAQgGAAgEgDg");
	this.shape_41.setTransform(122.4429,50.2778);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(127,167,186,0.388)").s().p("AAAACIgBAAIABgDIABAAQAAABABAAQAAAAAAAAQAAABAAAAQgBABAAAAIgBAAg");
	this.shape_42.setTransform(118.975,46.975);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D3DADF").s().p("AhOBkQgZAAgMgCQgMgBgNgEIgBABIAAAAIgCgBIgBgBIgBAAIgPgFIAKADIgIgGIgDgBIgBgCIgEgBIgEgCIgBgBIgCgBIgCAAIgGgDIABgCIgHgDIgCgBIANACIAdAEQAVABAYgDIATgCIAEAAIABgBIADAAIAqAAIBDgBIAPAAQAOgBAOACIACgBIAEAAQAIgBAEABIgBADIgGACIAAABIgDgBIgDABIgMAFQg6AVg7ABIgDABQgJgBgTAAgAgSAaQgUAAgUgHIgLgGIgFgDIgIgIIgEgCQAAAAAAAAQgBgBAAgBQAAAAABAAQAAgBAAAAIAEAAIADgBIAFAAIATABIAHABIAhgCIAEAAIADgDQADgBAEAAIAHABIAHABIADABIAAACQAAAEgEAGQgGAMgGADIgGACIgHACgAA6gOQgBgJACgIQADgJAGgFQACgDAFgBIAIgDIATgJIASgNIANgKIAGgEIAFgDIAEgDIACgCQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQABAAABAAQAAAAABgBQAAAAAAAAQAAAAAAgBQAOAEAHADQAMAHACALIAAALQgBAGgDAFQgEAGgKAGQgJAFgNAFIgVAIIgdAJQgLACgKAAQgKAAgLgCg");
	this.shape_43.setTransform(81.1833,57.575);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(153,153,153,0.149)").s().p("AAuBmQgZgKgggGIgNgBIgCgBIgQAAIgUgBIAAgCQgCAAgDgCQgGgFgFgIQgEgHgCgIQgGgWAGgkQAIgxAggbQAOgNAOgEIACgBIATAGIAGACIAtANIAgAGQgHAOgGARIAAACQgNAmgIAuIgFAnIgCAQIgBAEg");
	this.shape_44.setTransform(114.156,36.975);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(127,167,186,0.176)").s().p("Ag1ByIgBgJQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAIAAgRIAEgnQAJguANgmIAAgCIADgHIAGgLIAJgWIADAAIgHAUIgJATQgdA/ABBFIAAAYgAAAhQQABgHAFgIIAEgFQAFgFAGgDIAEgDIADgBIACAAIABgBIABAAIAAAAIACAAIABAAQAEgBAFACQAGABADACIACAEIAAADIgEgCIgDgCQgDgDgEgBQgEgBgIADIgDACIgFADIgEADIgHAHIgHAMIgCABIgBABIAAgBg");
	this.shape_45.setTransform(124.6,36.7198);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(211,218,223,0.067)").s().p("AgyGhIgBAAIgBAAIgDAAIgQgDIgBAAIgBgBIAAAAIgJgCIAAAAIABgBQANAEAMACQAMABAZABQATgBAIABIgUABQgTAAgTgCgAiBGRIgegIQh4gqhMhyQhUh+AOiTIALg3IAIgoQAahRA2g/IAZgXIA6grIArgbQAUgLAQgHQAkgQAqgIQAsgIAlAAQAoAAAoAIQAcAFAZAIQB4ArBLBxQBNBxgFCDIAEABIAWAGIAGACIABABIAAACIgKgCIgXgHIgBAKIgUgHIgCABIgDgBQgOAEgPANQgfAagIAwQgGAoAJAXQACAIAEAHQAFAIAGAEQADADACAAIAAABIAUABIAAABIASAAIANACIgBABIgBAAIgFAAIgBAAIgGABIgDABIgQAAIgWAjIgBABIgBABIAAABQgqA7hAAtQgjAZglARIgEAAIgCABQgOgDgOABIgPABIhEABIgpgBIgDABIgBAAIgEAAIgTACQgYAEgVgCIgdgEIgNgBIACABIAHADIgBACIAGACIACABIACABIABAAIAEACIAEACIABABIADABIAIAGIgKgCIAPAEIABABIABABgAgbE9IAEADIAIAHIAFAEIAKAGQAUAGAUAAIAFAAIAHgBIAGgCQAHgEAGgLQAEgHAAgEIAAgDIgDAAIgHgCIgIgBQgEAAgDACIgDACIgEABIghABIgHgBIgSgBIgFABIgDAAIgEAAQAAABgBAAQAAABAAAAQAAABAAAAQABABAAAAgADTDbQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAIgCADIgEADIgFACIgGAEIgNALIgSAMIgTAJIgIAEQgFAAgCAEQgGAFgDAJQgCAHABAKQAVAEAVgEIAdgKIAVgHQANgFAJgGQAKgFAEgHQADgFABgFIAAgLQgCgMgMgGQgHgDgOgEQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABgBAAg");
	this.shape_46.setTransform(75.2949,25.824);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},4).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:19.5,y:-39.525}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_11,p:{x:23.1,y:-39.475}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},2).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},2).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},2).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},3).to({state:[]},18).wait(1));

	// potion
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#FF6699","#FF94B8"],[0,1],-128.5,0,128.6,0).s().p("AjNKQQh0gIhTgcQkAhYj7kIQlvmBgGoeQAfA0FXAlQF6AqIVAAQIWAAF6gqQFMgkAogxQgFJRlXFnQhbBghDA6QhbBRhPArQhyA+itAPQhMAIjwgBQiXAAg8gDg");
	this.shape_47.setTransform(0.3226,29.9114,0.3064,0.3064);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#FE0B5D","#FF6699"],[0,1],-3,-28.5,-2.8,14.6).s().p("AuPBjQlXglgfg0QgEgFAAgFQAAgEAEgFQAeg0FYgmQF5goIWAAQIWAAF6AoQFMAlAoAxQAFAHABAGQgBAHgFAHQgoAxlMAkQl6AqoWAAQoWAAl5gqg");
	this.shape_48.setTransform(0.3609,9.3828,0.3064,0.3064);

	this.instance_4 = new lib.potionMC("synched",0);
	this.instance_4.setTransform(1.35,27.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47}]}).to({state:[{t:this.instance_4}]},4).to({state:[]},33).wait(1));

	// cork_copy
	this.instance_5 = new lib.cork("synched",0);
	this.instance_5.setTransform(4.1,-38.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({startPosition:0},0).wait(1).to({regX:0.1,regY:-0.1,rotation:1.0343,x:8.15,y:-38.75},0).wait(1).to({rotation:7.2469,x:10,y:-38.8},0).wait(1).to({x:13.6,y:-39.05},0).to({rotation:75.7144,x:157.1,y:-27.45},2).to({regY:-0.2,rotation:111.4502,x:236.2,y:-17.45},2).to({regX:0,scaleX:0.9999,scaleY:0.9999,rotation:132.6537,x:365.15,y:60},4).to({_off:true},1).wait(22));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.6,-52.2,422.1,128.7);


(lib.BG_art = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.shelf2_art("synched",0);
	this.instance.setTransform(1412.65,29.1);

	this.instance_1 = new lib.cauldron_art("synched",0);
	this.instance_1.setTransform(2887.65,157.15,0.4475,0.4475,0,0,0,0.2,-0.5);

	this.instance_2 = new lib.book1_art("synched",0);
	this.instance_2.setTransform(2815.05,-144.65,0.5,0.5,0,0,180,-0.2,-0.4);
	var instance_2Filter_1 = new cjs.ColorFilter(0.55,0.55,0.55,1,22.95,68.85,114.75,0);
	this.instance_2.filters = [instance_2Filter_1];
	this.instance_2.cache(-65,-141,130,282);

	this.instance_3 = new lib.book1_art("synched",0);
	this.instance_3.setTransform(2873.45,-148.6,0.5,0.5,0,0,180,-0.2,-0.4);
	var instance_3Filter_2 = new cjs.ColorFilter(0.55,0.55,0.55,1,22.95,114.75,0,0);
	this.instance_3.filters = [instance_3Filter_2];
	this.instance_3.cache(-65,-141,130,282);

	this.instance_4 = new lib.book1_art("synched",0);
	this.instance_4.setTransform(2920.45,-140.4,0.3186,0.5,0,-27.1883,152.8128,-0.8,-0.1);
	var instance_4Filter_3 = new cjs.ColorFilter(0.53,0.53,0.53,1,23.97,95.88,47.94,0);
	this.instance_4.filters = [instance_4Filter_3];
	this.instance_4.cache(-65,-141,130,282);

	this.instance_5 = new lib.book1_art("synched",0);
	this.instance_5.setTransform(2981.95,-148.6,0.5,0.5,0,0,180,-0.3,-0.4);
	var instance_5Filter_4 = new cjs.ColorFilter(0.55,0.55,0.55,1,0,0,114.75,0);
	this.instance_5.filters = [instance_5Filter_4];
	this.instance_5.cache(-65,-141,130,282);

	this.instance_6 = new lib.book1_art("synched",0);
	this.instance_6.setTransform(3019.2,-148.6,0.5,0.5,0,0,180,-0.3,-0.4);

	this.instance_7 = new lib.book1_art("synched",0);
	this.instance_7.setTransform(3052.45,-148.6,0.1675,0.5,0,0,180,-0.9,-0.4);
	var instance_7Filter_5 = new cjs.ColorFilter(0.53,0.53,0.53,1,119.85,119.85,119.85,0);
	this.instance_7.filters = [instance_7Filter_5];
	this.instance_7.cache(-65,-141,130,282);

	this.instance_8 = new lib.bookcase3_art("synched",0);
	this.instance_8.setTransform(2916.5,-59.6);

	this.instance_9 = new lib.book2_art("synched",0);
	this.instance_9.setTransform(-1477.2,-89.4,0.7,0.7,-20.4449,0,0,-0.2,0.1);
	var instance_9Filter_6 = new cjs.ColorFilter(0.33,0.33,0.33,1,34.17,0,0,0);
	this.instance_9.filters = [instance_9Filter_6];
	this.instance_9.cache(-26,-71,52,144);

	this.instance_10 = new lib.potion("synched",0);
	this.instance_10.setTransform(-1550.15,-44.55,1.3448,1.3448,0,0,0,0.1,48.3);
	var instance_10Filter_7 = new cjs.ColorFilter(0.55,0.55,0.55,1,30.15,78.75,114.75,0);
	this.instance_10.filters = [instance_10Filter_7];
	this.instance_10.cache(-46,-54,426,133);

	this.instance_11 = new lib.book3_str_art("synched",0);
	this.instance_11.setTransform(-444.65,-65.5,1.2419,0.1357,0,0,0,-0.2,-0.4);
	var instance_11Filter_8 = new cjs.ColorFilter(0.27,0.27,0.27,1,37.23,186.15,148.92,0);
	this.instance_11.filters = [instance_11Filter_8];
	this.instance_11.cache(-62,-21,125,41);

	this.instance_12 = new lib.book3_str_art("synched",0);
	this.instance_12.setTransform(-449.5,-54.05,1.1124,0.321,0,0,0,-0.1,-0.1);
	var instance_12Filter_9 = new cjs.ColorFilter(0.27,0.27,0.27,1,186.15,37.23,74.46,0);
	this.instance_12.filters = [instance_12Filter_9];
	this.instance_12.cache(-62,-21,125,41);

	this.instance_13 = new lib.cauldron2_art("synched",0);
	this.instance_13.setTransform(-462.65,-122.3);

	this.instance_14 = new lib.catContainer_art("synched",0);
	this.instance_14.setTransform(-627.55,-89.05,1,1,0,0,0,-0.1,2.5);

	this.instance_15 = new lib.shelf1_art("synched",0);
	this.instance_15.setTransform(-980.6,-106.65,1,1,0,0,0,-0.1,-3.3);

	this.instance_16 = new lib.containers_art("synched",0);
	this.instance_16.setTransform(-681.2,-93.95,1.6088,1.8459,0,0,0,0,-0.1);
	var instance_16Filter_10 = new cjs.ColorFilter(0.74,0.74,0.74,1,66.3,39.78,0,0);
	this.instance_16.filters = [instance_16Filter_10];
	this.instance_16.cache(-48,-27,96,55);

	this.instance_17 = new lib.containers_art("synched",0);
	this.instance_17.setTransform(1166.55,-22.9);

	this.instance_18 = new lib.book2_art("synched",0);
	this.instance_18.setTransform(-2790.35,140.4,0.8903,1.3622,0,0,0,5.3,0);
	var instance_18Filter_11 = new cjs.ColorFilter(0.27,0.27,0.27,1,186.15,37.23,74.46,0);
	this.instance_18.filters = [instance_18Filter_11];
	this.instance_18.cache(-26,-71,52,144);

	this.instance_19 = new lib.book1_art("synched",0);
	this.instance_19.setTransform(-2821.95,142.75,0.6517,0.6492,0,0,-4.9622,0.3,0.1);
	var instance_19Filter_12 = new cjs.ColorFilter(0.55,0.55,0.55,1,45.9,114.75,0,0);
	this.instance_19.filters = [instance_19Filter_12];
	this.instance_19.cache(-65,-141,130,282);

	this.instance_20 = new lib.book2_art("synched",0);
	this.instance_20.setTransform(-2883.9,104.9,1.3622,1.3622,0,0,0,-0.3,0.8);
	var instance_20Filter_13 = new cjs.ColorFilter(0.27,0.27,0.27,1,111.69,74.46,37.23,0);
	this.instance_20.filters = [instance_20Filter_13];
	this.instance_20.cache(-26,-71,52,144);

	this.instance_21 = new lib.book3_str_art("synched",0);
	this.instance_21.setTransform(-2954.8,213.5,1.5959,1.2484,0,0,0,-0.1,-0.1);

	this.instance_22 = new lib.book2_art("synched",0);
	this.instance_22.setTransform(-2074.15,231.25,1,1,-14.205,0,0,-5,-1.4);

	this.instance_23 = new lib.book2_art("synched",0);
	this.instance_23.setTransform(-1940.95,221.2,1,1,0,0,0,-0.2,0.8);
	var instance_23Filter_14 = new cjs.ColorFilter(0.24,0.24,0.24,1,116.28,38.76,0,0);
	this.instance_23.filters = [instance_23Filter_14];
	this.instance_23.cache(-26,-71,52,144);

	this.instance_24 = new lib.book2_art("synched",0);
	this.instance_24.setTransform(-1987.55,224.1,0.7272,1,0,0,0,-20.8,0.2);
	var instance_24Filter_15 = new cjs.ColorFilter(0.24,0.24,0.24,1,38.76,38.76,116.28,0);
	this.instance_24.filters = [instance_24Filter_15];
	this.instance_24.cache(-26,-71,52,144);

	this.instance_25 = new lib.book2_art("synched",0);
	this.instance_25.setTransform(-2008.45,292.7,1,0.7806,0,0,0,-1.2,68.8);
	var instance_25Filter_16 = new cjs.ColorFilter(0.24,0.24,0.24,1,77.52,193.8,193.8,0);
	this.instance_25.filters = [instance_25Filter_16];
	this.instance_25.cache(-26,-71,52,144);

	this.instance_26 = new lib.book2_art("synched",0);
	this.instance_26.setTransform(-2333,199.35,1.023,1,-90,0,0,-0.4,0.8);

	this.instance_27 = new lib.book2_art("synched",0);
	this.instance_27.setTransform(-2331,232.15,0.769,1,-90,0,0,-0.2,0.8);
	var instance_27Filter_17 = new cjs.ColorFilter(0.75,0.75,0.75,1,0,0,0,0);
	this.instance_27.filters = [instance_27Filter_17];
	this.instance_27.cache(-26,-71,52,144);

	this.instance_28 = new lib.book2_art("synched",0);
	this.instance_28.setTransform(-2331,262.1,1,1,-90,0,0,-0.2,0.8);
	var instance_28Filter_18 = new cjs.ColorFilter(0.37,0.37,0.37,1,0,64.26,160.65,0);
	this.instance_28.filters = [instance_28Filter_18];
	this.instance_28.cache(-26,-71,52,144);

	this.instance_29 = new lib.book2_art("synched",0);
	this.instance_29.setTransform(-2209.45,200.35,1.023,1,-90,0,0,-0.4,0.8);
	var instance_29Filter_19 = new cjs.ColorFilter(0.08,0.08,0.08,1,234.6,140.76,46.92,0);
	this.instance_29.filters = [instance_29Filter_19];
	this.instance_29.cache(-26,-71,52,144);

	this.instance_30 = new lib.book2_art("synched",0);
	this.instance_30.setTransform(-2207.45,233.15,0.769,1,-90,0,0,-0.2,0.8);
	var instance_30Filter_20 = new cjs.ColorFilter(0.5,0.5,0.5,1,0,127.5,51,0);
	this.instance_30.filters = [instance_30Filter_20];
	this.instance_30.cache(-26,-71,52,144);

	this.instance_31 = new lib.book2_art("synched",0);
	this.instance_31.setTransform(-2207.45,263.1,1,1,-90,0,0,-0.2,0.8);
	var instance_31Filter_21 = new cjs.ColorFilter(0.08,0.08,0.08,1,46.92,0,140.76,0);
	this.instance_31.filters = [instance_31Filter_21];
	this.instance_31.cache(-26,-71,52,144);

	this.instance_32 = new lib.book2_art("synched",0);
	this.instance_32.setTransform(-2503.05,221.2,1,1,0,0,0,-0.2,0.8);
	var instance_32Filter_22 = new cjs.ColorFilter(0.24,0.24,0.24,1,116.28,38.76,0,0);
	this.instance_32.filters = [instance_32Filter_22];
	this.instance_32.cache(-26,-71,52,144);

	this.instance_33 = new lib.book2_art("synched",0);
	this.instance_33.setTransform(-2549.65,224.1,0.7272,1,0,0,0,-20.8,0.2);
	var instance_33Filter_23 = new cjs.ColorFilter(0.24,0.24,0.24,1,38.76,38.76,116.28,0);
	this.instance_33.filters = [instance_33Filter_23];
	this.instance_33.cache(-26,-71,52,144);

	this.instance_34 = new lib.book2_art("synched",0);
	this.instance_34.setTransform(-2570.55,292.7,1,0.7806,0,0,0,-1.2,68.8);
	var instance_34Filter_24 = new cjs.ColorFilter(0.24,0.24,0.24,1,77.52,193.8,193.8,0);
	this.instance_34.filters = [instance_34Filter_24];
	this.instance_34.cache(-26,-71,52,144);

	this.instance_35 = new lib.book2_art("synched",0);
	this.instance_35.setTransform(-2605.55,224.7,1,1,0,0,0,-0.2,0.8);
	var instance_35Filter_25 = new cjs.ColorFilter(0.24,0.24,0.24,1,116.28,0,155.04,0);
	this.instance_35.filters = [instance_35Filter_25];
	this.instance_35.cache(-26,-71,52,144);

	this.instance_36 = new lib.book2_art("synched",0);
	this.instance_36.setTransform(-2642.05,224.7,1,1,0,0,0,-0.2,0.8);
	var instance_36Filter_26 = new cjs.ColorFilter(0.36,0.36,0.36,1,32.64,17.92,0,0);
	this.instance_36.filters = [instance_36Filter_26];
	this.instance_36.cache(-26,-71,52,144);

	this.instance_37 = new lib.book3_str_art("synched",0);
	this.instance_37.setTransform(-2499.7,33.05,1.7337,0.6277,0,0,0,-0.1,0.1);
	var instance_37Filter_27 = new cjs.ColorFilter(0.27,0.27,0.27,1,74.46,186.15,111.69,0);
	this.instance_37.filters = [instance_37Filter_27];
	this.instance_37.cache(-62,-21,125,41);

	this.instance_38 = new lib.book3_str_art("synched",0);
	this.instance_38.setTransform(-2503.05,4.95,1.5959,0.8464);
	var instance_38Filter_28 = new cjs.ColorFilter(0.27,0.27,0.27,1,186.15,0,111.69,0);
	this.instance_38.filters = [instance_38Filter_28];
	this.instance_38.cache(-62,-21,125,41);

	this.instance_39 = new lib.book3_str_art("synched",0);
	this.instance_39.setTransform(-2503.7,-31.55,1.5959,1.2484,0,0,0,-0.1,-0.1);

	this.instance_40 = new lib.book3_str_art("synched",0);
	this.instance_40.setTransform(-881,-63.05);

	this.instance_41 = new lib.book1_art("synched",0);
	this.instance_41.setTransform(1550.35,163.2,0.5786,0.5786,0,0,0,0,-0.1);
	var instance_41Filter_29 = new cjs.ColorFilter(0.55,0.55,0.55,1,22.95,68.85,114.75,0);
	this.instance_41.filters = [instance_41Filter_29];
	this.instance_41.cache(-65,-141,130,282);

	this.instance_42 = new lib.book1_art("synched",0);
	this.instance_42.setTransform(1483.35,163.2,0.5786,0.5786,0,0,0,0,-0.1);
	var instance_42Filter_30 = new cjs.ColorFilter(0.55,0.55,0.55,1,22.95,114.75,0,0);
	this.instance_42.filters = [instance_42Filter_30];
	this.instance_42.cache(-65,-141,130,282);

	this.instance_43 = new lib.book1_art("synched",0);
	this.instance_43.setTransform(1411.35,164.2,0.4131,0.5786,17.6948,0,0,0.1,-0.1);
	var instance_43Filter_31 = new cjs.ColorFilter(0.31,0.31,0.31,1,70.38,140.76,105.57,0);
	this.instance_43.filters = [instance_43Filter_31];
	this.instance_43.cache(-65,-141,130,282);

	this.instance_44 = new lib.book1_art("synched",0);
	this.instance_44.setTransform(1356.35,163.2,0.5786,0.5786,0,0,0,0,-0.1);
	var instance_44Filter_32 = new cjs.ColorFilter(0.31,0.31,0.31,1,70.38,0,140.76,0);
	this.instance_44.filters = [instance_44Filter_32];
	this.instance_44.cache(-65,-141,130,282);

	this.instance_45 = new lib.book1_art("synched",0);
	this.instance_45.setTransform(1311.3,163.2,0.5786,0.5786,0,0,0,0,-0.1);

	this.instance_46 = new lib.book1_art("synched",0);
	this.instance_46.setTransform(1279.3,163.2,0.3298,0.5786,0,0,0,0,-0.1);
	var instance_46Filter_33 = new cjs.ColorFilter(0.55,0.55,0.55,1,22.95,68.85,114.75,0);
	this.instance_46.filters = [instance_46Filter_33];
	this.instance_46.cache(-65,-141,130,282);

	this.instance_47 = new lib.catContainer_art("synched",0);
	this.instance_47.setTransform(2125.4,11.35,1,1,0,0,0,-0.1,2.5);

	this.instance_48 = new lib.book2_art("synched",0);
	this.instance_48.setTransform(2339.35,138.35,1,1,0,20.4467,-159.5533,-0.1,0.1);

	this.instance_49 = new lib.book1_art("synched",0);
	this.instance_49.setTransform(2272.55,128.2,0.5786,0.5786,0,0,0,0,-0.1);

	this.instance_50 = new lib.book1_art("synched",0);
	this.instance_50.setTransform(2235.05,132.25,0.5308,0.5308,0,0,0,0.1,0.1);

	this.instance_51 = new lib.book2_art("synched",0);
	this.instance_51.setTransform(2392.55,146.2,1,1,0,0,180,-0.2,0.8);
	var instance_51Filter_34 = new cjs.ColorFilter(0.27,0.27,0.27,1,111.69,74.46,37.23,0);
	this.instance_51.filters = [instance_51Filter_34];
	this.instance_51.cache(-26,-71,52,144);

	this.instance_52 = new lib.book2_art("synched",0);
	this.instance_52.setTransform(2424.1,145.7,0.6536,1,0,0,180,-0.2,0.8);
	var instance_52Filter_35 = new cjs.ColorFilter(0.27,0.27,0.27,1,186.15,37.23,74.46,0);
	this.instance_52.filters = [instance_52Filter_35];
	this.instance_52.cache(-26,-71,52,144);

	this.instance_53 = new lib.book1_art("synched",0);
	this.instance_53.setTransform(2129.95,150.2,0.3958,0.395,0,0,-3.5874,0.4,0);
	var instance_53Filter_36 = new cjs.ColorFilter(0.55,0.55,0.55,1,45.9,114.75,0,0);
	this.instance_53.filters = [instance_53Filter_36];
	this.instance_53.cache(-65,-141,130,282);

	this.instance_54 = new lib.book1_art("synched",0);
	this.instance_54.setTransform(2102.9,150.2,0.4207,0.4207,0,0,0,0.2,0);
	var instance_54Filter_37 = new cjs.ColorFilter(0.55,0.55,0.55,1,22.95,0,114.75,0);
	this.instance_54.filters = [instance_54Filter_37];
	this.instance_54.cache(-65,-141,130,282);

	this.instance_55 = new lib.book1_art("synched",0);
	this.instance_55.setTransform(2072.8,158.2,0.3513,0.3513,0,0,0,0.1,0);
	var instance_55Filter_38 = new cjs.ColorFilter(0.55,0.55,0.55,1,0,0,114.75,0);
	this.instance_55.filters = [instance_55Filter_38];
	this.instance_55.cache(-65,-141,130,282);

	this.instance_56 = new lib.book1_art("synched",0);
	this.instance_56.setTransform(2049.25,140.75,0.5308,0.5308,0,0,0,0.1,0.1);

	this.instance_57 = new lib.book1_art("synched",0);
	this.instance_57.setTransform(2012.15,134.7,0.5786,0.5786,0,0,0,0,-0.1);
	var instance_57Filter_39 = new cjs.ColorFilter(0.19,0.19,0.19,1,0,0,0,0);
	this.instance_57.filters = [instance_57Filter_39];
	this.instance_57.cache(-65,-141,130,282);

	this.instance_58 = new lib.bookcase_art("synched",0);
	this.instance_58.setTransform(2163.55,273.75,1,1,0,0,180);

	this.instance_59 = new lib.book2_art("synched",0);
	this.instance_59.setTransform(-1251.05,158.35,1,1,-20.4467,0,0,-0.1,0.1);

	this.instance_60 = new lib.book1_art("synched",0);
	this.instance_60.setTransform(-1184.25,148.2,0.5786,0.5786,0,0,180,0,-0.1);

	this.instance_61 = new lib.book1_art("synched",0);
	this.instance_61.setTransform(-1146.75,152.25,0.5308,0.5308,0,0,180,0.1,0.1);

	this.instance_62 = new lib.book2_art("synched",0);
	this.instance_62.setTransform(-1304.25,166.2,1,1,0,0,0,-0.2,0.8);
	var instance_62Filter_40 = new cjs.ColorFilter(0.27,0.27,0.27,1,111.69,74.46,37.23,0);
	this.instance_62.filters = [instance_62Filter_40];
	this.instance_62.cache(-26,-71,52,144);

	this.instance_63 = new lib.book2_art("synched",0);
	this.instance_63.setTransform(-1335.8,165.7,0.6536,1,0,0,0,-0.2,0.8);
	var instance_63Filter_41 = new cjs.ColorFilter(0.27,0.27,0.27,1,186.15,37.23,74.46,0);
	this.instance_63.filters = [instance_63Filter_41];
	this.instance_63.cache(-26,-71,52,144);

	this.instance_64 = new lib.book1_art("synched",0);
	this.instance_64.setTransform(-1041.65,170.2,0.3958,0.395,0,0,-176.4126,0.4,0);
	var instance_64Filter_42 = new cjs.ColorFilter(0.55,0.55,0.55,1,45.9,114.75,0,0);
	this.instance_64.filters = [instance_64Filter_42];
	this.instance_64.cache(-65,-141,130,282);

	this.instance_65 = new lib.book1_art("synched",0);
	this.instance_65.setTransform(-1014.6,170.2,0.4207,0.4207,0,0,180,0.2,0);
	var instance_65Filter_43 = new cjs.ColorFilter(0.55,0.55,0.55,1,22.95,0,114.75,0);
	this.instance_65.filters = [instance_65Filter_43];
	this.instance_65.cache(-65,-141,130,282);

	this.instance_66 = new lib.book1_art("synched",0);
	this.instance_66.setTransform(-984.5,178.2,0.3513,0.3513,0,0,180,0.1,0);
	var instance_66Filter_44 = new cjs.ColorFilter(0.55,0.55,0.55,1,0,0,114.75,0);
	this.instance_66.filters = [instance_66Filter_44];
	this.instance_66.cache(-65,-141,130,282);

	this.instance_67 = new lib.book1_art("synched",0);
	this.instance_67.setTransform(-960.95,160.75,0.5308,0.5308,0,0,180,0.1,0.1);

	this.instance_68 = new lib.book1_art("synched",0);
	this.instance_68.setTransform(-923.85,154.7,0.5786,0.5786,0,0,180,0,-0.1);
	var instance_68Filter_45 = new cjs.ColorFilter(0.19,0.19,0.19,1,0,0,0,0);
	this.instance_68.filters = [instance_68Filter_45];
	this.instance_68.cache(-65,-141,130,282);

	this.instance_69 = new lib.bookcase_art("synched",0);
	this.instance_69.setTransform(-1075.25,293.75);

	this.instance_70 = new lib.cauldron2_art("synched",0);
	this.instance_70.setTransform(2371.95,2);
	var instance_70Filter_46 = new cjs.ColorFilter(0.53,0.53,0.53,1,119.85,95.88,0,0);
	this.instance_70.filters = [instance_70Filter_46];
	this.instance_70.cache(-46,-54,93,109);

	this.instance_71 = new lib.potion("synched",0);
	this.instance_71.setTransform(1750.5,181.3);
	var instance_71Filter_47 = new cjs.ColorFilter(0.53,0.53,0.53,1,31.49,82.25,119.85,0);
	this.instance_71.filters = [instance_71Filter_47];
	this.instance_71.cache(-46,-54,426,133);

	this.instance_72 = new lib.potion("synched",0);
	this.instance_72.setTransform(-889.45,-81.95,1.1231,1.1231,0,0,0,0.1,48.3);
	var instance_72Filter_48 = new cjs.ColorFilter(0.55,0.55,0.55,1,68.85,114.75,68.85,0);
	this.instance_72.filters = [instance_72Filter_48];
	this.instance_72.cache(-46,-54,426,133);

	this.instance_73 = new lib.cauldron_art("synched",0);
	this.instance_73.setTransform(-1096.7,-89.1,0.2761,0.2761,0,0,0,0.6,-0.6);
	var instance_73Filter_49 = new cjs.ColorFilter(0.55,0.55,0.55,1,68.85,45.9,22.95,0);
	this.instance_73.filters = [instance_73Filter_49];
	this.instance_73.cache(-198,-173,396,347);

	this.instance_74 = new lib.cauldron_art("synched",0);
	this.instance_74.setTransform(-1312.7,-113.7,0.425,0.425,0,0,0,0.2,-0.4);

	this.instance_75 = new lib.CachedBmp_47();
	this.instance_75.setTransform(-2551.95,-215.25,0.5,0.5);

	this.instance_76 = new lib.book1_art("synched",0);
	this.instance_76.setTransform(-2770.95,-209.45,0.5767,0.5767,0,0,0,0,-0.1);
	var instance_76Filter_50 = new cjs.ColorFilter(0.55,0.55,0.55,1,22.95,68.85,114.75,0);
	this.instance_76.filters = [instance_76Filter_50];
	this.instance_76.cache(-65,-141,130,282);

	this.instance_77 = new lib.book1_art("synched",0);
	this.instance_77.setTransform(-2838.3,-214,0.5767,0.5767,0,0,0,-0.1,-0.1);
	var instance_77Filter_51 = new cjs.ColorFilter(0.55,0.55,0.55,1,22.95,114.75,0,0);
	this.instance_77.filters = [instance_77Filter_51];
	this.instance_77.cache(-65,-141,130,282);

	this.instance_78 = new lib.book1_art("synched",0);
	this.instance_78.setTransform(-2892.4,-204.65,0.3675,0.5766,27.1895,0,0,-0.3,-0.2);
	var instance_78Filter_52 = new cjs.ColorFilter(0.53,0.53,0.53,1,23.97,95.88,47.94,0);
	this.instance_78.filters = [instance_78Filter_52];
	this.instance_78.cache(-65,-141,130,282);

	this.instance_79 = new lib.book1_art("synched",0);
	this.instance_79.setTransform(-2963.4,-214,0.5767,0.5767,0,0,0,-0.1,-0.1);
	var instance_79Filter_53 = new cjs.ColorFilter(0.55,0.55,0.55,1,0,0,114.75,0);
	this.instance_79.filters = [instance_79Filter_53];
	this.instance_79.cache(-65,-141,130,282);

	this.instance_80 = new lib.book1_art("synched",0);
	this.instance_80.setTransform(-3006.35,-214,0.5767,0.5767,0,0,0,-0.1,-0.1);

	this.instance_81 = new lib.book1_art("synched",0);
	this.instance_81.setTransform(-3044.75,-214,0.1932,0.5767,0,0,0,-0.5,-0.1);
	var instance_81Filter_54 = new cjs.ColorFilter(0.53,0.53,0.53,1,119.85,119.85,119.85,0);
	this.instance_81.filters = [instance_81Filter_54];
	this.instance_81.cache(-65,-141,130,282);

	this.instance_82 = new lib.book1_art("synched",0);
	this.instance_82.setTransform(-2619.85,-28.2,0.5767,0.5767,0,0,0,0,-0.1);
	var instance_82Filter_55 = new cjs.ColorFilter(0.36,0.36,0.36,1,32.64,17.92,0,0);
	this.instance_82.filters = [instance_82Filter_55];
	this.instance_82.cache(-65,-141,130,282);

	this.instance_83 = new lib.CachedBmp_46();
	this.instance_83.setTransform(-2700.25,46.45,0.5,0.5);

	this.instance_84 = new lib.book1_art("synched",0);
	this.instance_84.setTransform(-2918.4,106.75,0.6914,0.6914,0,0,0,0.2,0.1);
	var instance_84Filter_56 = new cjs.ColorFilter(0.55,0.55,0.55,1,22.95,0,114.75,0);
	this.instance_84.filters = [instance_84Filter_56];
	this.instance_84.cache(-65,-141,130,282);

	this.instance_85 = new lib.book2_art("synched",0);
	this.instance_85.setTransform(-3047.55,29.05,1.2718,1.3175,-19.4255,0,0,-15.8,-65);

	this.instance_86 = new lib.cauldron2_art("synched",0);
	this.instance_86.setTransform(1415.45,-38.85);

	this.instance_87 = new lib.bookcase2_art("synched",0);
	this.instance_87.setTransform(-2887.95,-111.55);

	this.instance_88 = new lib.book4_art("synched",0);
	this.instance_88.setTransform(1646.5,-31.3);

	this.instance_89 = new lib.book3_art("synched",0);
	this.instance_89.setTransform(1599.9,-24.4);

	this.instance_90 = new lib.book5_art("synched",0);
	this.instance_90.setTransform(1319.15,-22);

	this.instance_91 = new lib.CachedBmp_45();
	this.instance_91.setTransform(-1540.45,-204.9,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#402413").ss(1.5,1,0,3).p("AEjALQnCgQiDgG");
	this.shape.setTransform(-1445.4,103.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DFCA61").s().p("AgDABIgBgCIAJAAIgBABIgBABIgDABIgDgBg");
	this.shape_1.setTransform(-297.9,-23.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C104A").s().p("AAAgCIABAAIgBAFg");
	this.shape_2.setTransform(-601.3,-95.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9D8475").s().p("AgEAAQAEgBAFABIgKABIABgBg");
	this.shape_3.setTransform(-1335.95,-204.7417);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#571306").s().p("AgnAGIAAgLISVAAIAAALgAxtAGIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgDIOfAAIAAALg");
	this.shape_4.setTransform(1089.725,34.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#62180A").s().p("AidAGIAAgLIE7AAIAAADIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAAAg");
	this.shape_5.setTransform(960.525,34.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C6B5BA").s().p("AAAAAIAAAAIABAAIgBAAg");
	this.shape_6.setTransform(583.95,-3.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B4A0A7").s().p("AAAARIgBAAIAAgBIgBAAIAAAAIAAgBIAAgFIAAgBIAAgKIAAgBIAAgBIAAgBIAAgIIABgBIAAAAIgBAAIAAgBIAAgCIAAAAIABAAIABAAIAAgBIAAABIABAAIAAAAIABAAIABABIAAABIAAABIAAAAIAAABIAAABIAAAKIAAABIAAAAIAAABIAAAPIgBAAIAAABIgBAAIgBAAIAAAAg");
	this.shape_7.setTransform(597.675,-19.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DAC3CA").s().p("AAAAAIAAAAIAAAAIAAAAIABAAIAAABIgBgBg");
	this.shape_8.setTransform(596.85,-18.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_2).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_4Filter_3).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_5Filter_4).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_7Filter_5).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_9Filter_6).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_10Filter_7).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_11Filter_8).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_12Filter_9).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_16Filter_10).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_18Filter_11).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_19Filter_12).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_20Filter_13).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_23Filter_14).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_24Filter_15).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_25Filter_16).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_27Filter_17).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_28Filter_18).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_29Filter_19).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_30Filter_20).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_31Filter_21).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_32Filter_22).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_33Filter_23).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_34Filter_24).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_35Filter_25).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_36Filter_26).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_37Filter_27).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_38Filter_28).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_41Filter_29).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_42Filter_30).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_43Filter_31).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_44Filter_32).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_46Filter_33).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_51Filter_34).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_52Filter_35).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_53Filter_36).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_54Filter_37).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_55Filter_38).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_57Filter_39).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_62Filter_40).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_63Filter_41).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_64Filter_42).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_65Filter_43).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_66Filter_44).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_68Filter_45).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_70Filter_46).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_71Filter_47).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_72Filter_48).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_73Filter_49).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_76Filter_50).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_77Filter_51).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_78Filter_52).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_79Filter_53).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_81Filter_54).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_82Filter_55).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_84Filter_56).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_10, startFrame:0, endFrame:1, x:-46, y:-54, w:426, h:133});
	this.filterCacheList.push({instance: this.instance_71, startFrame:0, endFrame:1, x:-46, y:-54, w:426, h:133});
	this.filterCacheList.push({instance: this.instance_72, startFrame:0, endFrame:1, x:-46, y:-54, w:426, h:133});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3102,-519.6,6204.1,1039.2);


(lib.keyboardActions = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// candleMove
	this.instance = new lib.candleplayer();
	this.instance.setTransform(233.95,60.15,0.4003,0.4003,0,0,0,0.2,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:32},5).wait(4).to({y:60.15},6).wait(3).to({x:211.4},5).wait(3).to({x:233.95},5).wait(5));

	// keyboard_clicks
	this.instance_1 = new lib.CachedBmp_71();
	this.instance_1.setTransform(54.95,48.15,0.4631,0.4631);

	this.instance_2 = new lib.CachedBmp_73();
	this.instance_2.setTransform(54.95,74.85,0.4631,0.4631);

	this.instance_3 = new lib.CachedBmp_72();
	this.instance_3.setTransform(82.3,48.65,0.4631,0.4631);

	this.instance_4 = new lib.CachedBmp_74();
	this.instance_4.setTransform(54.95,48.15,0.4631,0.4631);

	this.instance_5 = new lib.CachedBmp_75();
	this.instance_5.setTransform(54.95,48.05,0.4631,0.4631);

	this.instance_6 = new lib.CachedBmp_76();
	this.instance_6.setTransform(54.95,48.15,0.4631,0.4631);

	this.instance_7 = new lib.CachedBmp_77();
	this.instance_7.setTransform(55.5,48.05,0.4631,0.4631);

	this.instance_8 = new lib.CachedBmp_78();
	this.instance_8.setTransform(54.95,48.15,0.4631,0.4631);

	this.instance_9 = new lib.CachedBmp_79();
	this.instance_9.setTransform(54.95,48.05,0.4631,0.4631);

	this.instance_10 = new lib.CachedBmp_80();
	this.instance_10.setTransform(54.95,48.15,0.4631,0.4631);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},6).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},5).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_10}]},6).wait(4));

	// keyboardOnly
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(7,1,1).p("Aq4AAIVxAA");
	this.shape.setTransform(-51.9,87.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("AgCnjQAAhtBLhTQBHhNB2gkQAHgCAHgCQA8gRA/gDQA0gCA1AGQCFAQBpBEQBoBECRAAQCGABB8g5QARgHAPgIQBmg2A3hQQBEhjgehtA2olfMAtRAAAQBtAAAABtIAASyQAAAQgCANQgOBRhdAAMgtRAAAQhtAAAAhuIAAyyQAAhtBtAAg");
	this.shape_1.setTransform(-6.65,9.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(37));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.9,-100.2,434.20000000000005,218.9);


(lib.doorMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Door
	this.light = new lib.doorLightMC();
	this.light.name = "light";
	this.light.setTransform(1.45,8.55);
	this.light.shadow = new cjs.Shadow("rgba(255,241,142,1)",0,0,76);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AGIrtQA3AFgCgDIAAjmIt5hRIAADMIBPALQAuAGA8AHIAZADQCEAREvAnIAKABQBqANBIAHQABAAACABIAAcQIjHhjIAAgCIAKt2IAAgoIAIsiAlttRIAAAGIAAXOIBpA9IAJAFQAAAAAAgBIG8D6Ajqs7IAAgFAkELAIAJAEQAN1wAEiP");
	this.shape.setTransform(3.4785,2.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#6F3C28","#341103"],[0,0.867],5696.9,-204.5,5696.9,-204.5).s().p("ADBPAIAAgCIAKt2IAAgoIAIsiIgKgBImzg4IAAgFIAAAFIgZgDQg8gHgugGIAAgGIAAAGIhPgLIAAjMIN5BRIAADmQACADg3gFIgDgBIiygUICyAUIADABIAAcQgAkELAIhpg9IAA3OQAuAGA8AHIAZADQgECPgNVwIgJgEIAJAEIAAABg");
	this.shape_1.setTransform(3.4785,2.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.light}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.doorMC, new cjs.Rectangle(-165.8,-212.9,337,426), null);


(lib.tableMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// potionPuddles
	this.potion5 = new lib.potion();
	this.potion5.name = "potion5";
	this.potion5.setTransform(4001,-136.05,1,1,0,0,0,-10,-0.1);
	var potion5Filter_1 = new cjs.ColorFilter(0.37,0.37,0.37,1,0,160.65,0,0);
	this.potion5.filters = [potion5Filter_1];
	this.potion5.cache(-46,-54,426,133);

	this.potion4 = new lib.potion();
	this.potion4.name = "potion4";
	this.potion4.setTransform(2782,-83.95,1.3915,1.3915);

	this.potion3 = new lib.potion();
	this.potion3.name = "potion3";
	this.potion3.setTransform(1368.4,-101.1,1.2353,1.2353,0,0,0,-10,-0.1);
	var potion3Filter_2 = new cjs.ColorFilter(0.57,0.57,0.57,1,87.72,65.79,21.93,0);
	this.potion3.filters = [potion3Filter_2];
	this.potion3.cache(-46,-54,426,133);

	this.potion2 = new lib.potion();
	this.potion2.name = "potion2";
	this.potion2.setTransform(370.15,-144.05,1,1,0,0,0,-10,-0.1);
	var potion2Filter_3 = new cjs.ColorFilter(0.37,0.37,0.37,1,0,160.65,32.13,0);
	this.potion2.filters = [potion2Filter_3];
	this.potion2.cache(-46,-54,426,133);

	this.potion1 = new lib.potion();
	this.potion1.name = "potion1";
	this.potion1.setTransform(-402.05,-129.95);

	this.puddle7 = new lib.puddle();
	this.puddle7.name = "puddle7";
	this.puddle7.setTransform(4995.9,-70.95,0.3776,0.7431,10.501,0,0,-68.7,5.2);

	this.puddle6 = new lib.puddle();
	this.puddle6.name = "puddle6";
	this.puddle6.setTransform(4772.85,-178.95,0.3776,0.7431,10.501,0,0,-68.7,5.2);

	this.puddle5 = new lib.puddle();
	this.puddle5.name = "puddle5";
	this.puddle5.setTransform(2793.6,-182.55,0.1598,0.3144,1.727,0,0,-68.5,5.2);

	this.puddle4 = new lib.puddle();
	this.puddle4.name = "puddle4";
	this.puddle4.setTransform(1640.75,-127.05,0.3776,0.7431,46.7264);

	this.puddle3 = new lib.puddle();
	this.puddle3.name = "puddle3";
	this.puddle3.setTransform(680.85,-41.85,0.3777,0.7432,0,0,0,-68.6,5.3);

	this.puddle2 = new lib.puddle();
	this.puddle2.name = "puddle2";
	this.puddle2.setTransform(-198.35,-49.7,0.3777,0.7432,24.7228,0,0,-68.5,5.3);

	this.puddle1 = new lib.puddle();
	this.puddle1.name = "puddle1";
	this.puddle1.setTransform(-735.7,-128.1,0.3776,0.7432,37.1955,0,0,-68.6,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.puddle1},{t:this.puddle2},{t:this.puddle3},{t:this.puddle4},{t:this.puddle5},{t:this.puddle6},{t:this.puddle7},{t:this.potion1},{t:this.potion2},{t:this.potion3},{t:this.potion4},{t:this.potion5}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(potion5Filter_1).wait(1));
	this.timeline.addTween(cjs.Tween.get(potion3Filter_2).wait(1));
	this.timeline.addTween(cjs.Tween.get(potion2Filter_3).wait(1));

	// doorHit
	this.doorHit = new lib.doorHit();
	this.doorHit.name = "doorHit";
	this.doorHit.setTransform(5690.6,-195.95);

	this.timeline.addTween(cjs.Tween.get(this.doorHit).wait(1));

	// door
	this.doorEnd = new lib.doorMC();
	this.doorEnd.name = "doorEnd";
	this.doorEnd.setTransform(5656.9,-158.85,1,1,0,0,0,-32.5,46.2);

	this.timeline.addTween(cjs.Tween.get(this.doorEnd).wait(1));

	// candleFriends
	this.candleFriend5 = new lib.candleFriendMC();
	this.candleFriend5.name = "candleFriend5";
	this.candleFriend5.setTransform(4325.05,-202.9,0.8652,0.8652);

	this.candleFriend1 = new lib.candleFriendMC();
	this.candleFriend1.name = "candleFriend1";
	this.candleFriend1.setTransform(173.05,-158.05);

	this.candleFriend4 = new lib.candleFriendMC();
	this.candleFriend4.name = "candleFriend4";
	this.candleFriend4.setTransform(3012.7,-92,1.2156,1.2156);

	this.candleFriend3 = new lib.candleFriendMC();
	this.candleFriend3.name = "candleFriend3";
	this.candleFriend3.setTransform(2676.65,-219.05,0.8652,0.8652);

	this.candleFriend2 = new lib.candleFriendMC();
	this.candleFriend2.name = "candleFriend2";
	this.candleFriend2.setTransform(1072.25,-59.05,1.2965,1.2965);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.candleFriend2},{t:this.candleFriend3},{t:this.candleFriend4},{t:this.candleFriend1},{t:this.candleFriend5}]}).wait(1));

	// books
	this.bookAnimate1 = new lib.Bookfall();
	this.bookAnimate1.name = "bookAnimate1";
	this.bookAnimate1.setTransform(3403.25,-347.9,0.8701,0.7098,0,0,0,4.2,-7.1);

	this.bookAnimate4 = new lib.booklet2();
	this.bookAnimate4.name = "bookAnimate4";
	this.bookAnimate4.setTransform(3723.3,-322.8,1,1,0,0,0,0,97);

	this.bookAnimate3 = new lib.booklet2();
	this.bookAnimate3.name = "bookAnimate3";
	this.bookAnimate3.setTransform(5219.65,-202.95,1,1,0,0,0,-0.5,96.9);

	this.bookAnimate2 = new lib.Bookfall();
	this.bookAnimate2.name = "bookAnimate2";
	this.bookAnimate2.setTransform(4517.15,-343.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bookAnimate2},{t:this.bookAnimate3},{t:this.bookAnimate4},{t:this.bookAnimate1}]}).wait(1));

	// table_hit
	this.tableHit = new lib.tablehit();
	this.tableHit.name = "tableHit";
	this.tableHit.setTransform(-2.15,80.9,1,1,0,0,0,8,98.2);
	this.tableHit.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.tableHit).wait(1));

	// bridge
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AlsjPIBLClAEsjeIAUBpAS1jPIgFBGALpjUIAPCvAavjPIAACqEggDgDoMBCQAAAQBQAAA1BQIBkCWIBrCgQA1BQhQAAMhJSAAAQhQAAg1hQIhrigIhkiWQg1hQBQAAgEggGgDtIADAFIBSCMA4IjUIB9C5Av2jUIA8Bp");
	this.shape.setTransform(2041.975,-38.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC000").s().p("Egk8ABzIhkiVQg1hQBQAAIHCAAMBCQAAAQBQAAA1BQIBkCVgA1LBaIh9i4gAbvBQIAAipgAM4BQIgPiugAjhBLIhLikgA9xAZIhSiLgAt6AKIg8hogAGAAAIgUhogATwgTIAFhGg");
	this.shape_1.setTransform(2035.578,-50.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("EgjIAB4QhQAAg2hQIhqifMBLyAAAIBqCfQA2BQhQAAg");
	this.shape_2.setTransform(2048.047,-27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// middleHoleHit
	this.holeHit = new lib.badHit();
	this.holeHit.name = "holeHit";
	this.holeHit.setTransform(2076.7,-115.55,1,0.8818,0,0,0,-1.3,38.2);
	this.holeHit.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.holeHit).wait(1));

	// brokenTable
	this.instance = new lib.tableBroken_art("synched",0);
	this.instance.setTransform(1754.05,-121.5);

	this.instance_1 = new lib.tableBroken_art("synched",0);
	this.instance_1.setTransform(1754.05,-121.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// newTable
	this.instance_2 = new lib.table_art("synched",0);
	this.instance_2.setTransform(3989,32.6,1,1,0,0,0,0,0.6);

	this.instance_3 = new lib.table_art("synched",0);
	this.instance_3.setTransform(82.75,32.9,1,1,0,0,0,0,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// bgItems
	this.puddle1_1 = new lib.puddle();
	this.puddle1_1.name = "puddle1_1";
	this.puddle1_1.setTransform(125.3,-44.85,0.3777,0.7432,24.7228,0,0,-68.5,5.3);

	this.puddle1_2 = new lib.puddle();
	this.puddle1_2.name = "puddle1_2";
	this.puddle1_2.setTransform(-466.8,-71,0.3777,0.7432,0,0,0,-68.6,5.3);

	this.instance_4 = new lib.BG_art();
	this.instance_4.setTransform(1522.15,-432.2,1,1,0,0,0,-186.8,0);
	this.instance_4.filters = [new cjs.BlurFilter(4, 4, 3)];
	this.instance_4.cache(-3104,-522,6208,1043);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.puddle1_2},{t:this.puddle1_1}]}).wait(1));
	this.instance_4.addEventListener("tick", AdobeAn.handleFilterCache);

	// wall
	this.instance_5 = new lib.PhotoshopWall();
	this.instance_5.setTransform(5583.15,-2282.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.potion5, startFrame:0, endFrame:1, x:-46, y:-54, w:426, h:133});
	this.filterCacheList.push({instance: this.potion3, startFrame:0, endFrame:1, x:-46, y:-54, w:426, h:133});
	this.filterCacheList.push({instance: this.potion2, startFrame:0, endFrame:1, x:-46, y:-54, w:426, h:133});
	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tableMC, new cjs.Rectangle(-1852.6,-2282.2,8203.8,2701), null);


// stage content:
(lib.JA_Final_CandleGame_v115_FinalforTurnIN230325_1300 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {menu:0,instructions:4,gameIntro:10,gamePlay:19,resetGame:25,resetMenu:34};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,4,19,25,34];
	// timeline functions:
	this.frame_0 = function() {
		rootRef = this;
		rootRef.stop();
		
		// listen for window resize
		window.addEventListener("resize", onWindowResize);
		
		// call onWindowResize()
		onWindowResize();
		
		//calculateCandleBounds();
		
		// INITIALIZE GAME
		rootRef.gameCredits.visible = false;
		rootRef.playBtn.addEventListener("click", onPlayBtnClick);
		
		function onPlayBtnClick(evt)
		{
			rootRef.gotoAndPlay("gameIntro");
			playBGMusic();
			setInterval(playBGMusic, 205.9 * 1000);
		}
		
		rootRef.howToBtn.addEventListener("click", onHowToClick);
		function onHowToClick(evt)
		{
			rootRef.gotoAndStop("instructions");
		}
		
		
		rootRef.creditBtn.addEventListener("click", onCreditClick);
		
		function onCreditClick(evt)
		{
			if (!rootRef.gameCredits.visible)
			{
				rootRef.gameCredits.visible = true;
			} else
			{
				rootRef.gameCredits.visible = false;
			}
		}
		
		/*
		calculateCandleBounds();
		
		
		function calculateCandleBounds()
		{
			// Setting boundary of candle
			candleWidth = rootRef.candle1.nominalBounds.width;
			candleHeight = rootRef.candle1.nominalBounds.height;
			
			candleWidth *= rootRef.candle1.scaleX;
			candleHeight *= rootRef.candle1.scaleY;
		
			candleHalfWidth = candleWidth / 2;
			candleHalfHeight = candleHeight / 2;
		
			candleXMin = 0 + candleHalfWidth;
			candleXMax = stageWidth - candleHalfWidth;
		
			candleYMin = 0 + candleHalfHeight;
			candleYMax = stageHeight - candleHalfHeight;
		}
		*/
	}
	this.frame_4 = function() {
		rootRef = this;
		rootRef.stop();
		
		rootRef.homeBtn.addEventListener("click", onHomeClick);
		
		function onHomeClick(evt)
		{
			rootRef.gotoAndStop("menu");
		}
	}
	this.frame_19 = function() {
		// calling all items on Game Start! - - - - - - 
		rootRef = this;
		rootRef.stop();
		
		currentTick = 0;
		
		player = rootRef.candle1;
		player.x = stageWidth / 2;
		speedBG = 7; 
		
		leftPress = false;
		rightPress = false;
		upPress = false;
		downPress = false;
		
		// Calling Default Start
		health = 74;
		rootRef.healthBar.fill.scaleX = health / healthMax;
		player.gotoAndStop("threeBody");
		//updateHealth();
		rootRef.musicBtn.currentLabel = "playAudio";
		createjs.Sound.volume = 1;
		
		score = 0;
		updateScore();
		droplets = new Array();
		embers = new Array();
		
		
		getStageBounds();
		
		dropletXMax = stageWidth - dropletXOffset;
		emberXMax = 0; //stageWidth - emberXOffset;
		
		// Adding table bg on game restart
		tableBGStartX = rootRef.tableBG.x;
		tableBGStartY = rootRef.tableBG.y;
		rootRef.gameOverMsg.visible = false;
		rootRef.winGameMsg.visible = false;
		
		
		// Adding back key technology on game start - - - - - - - -
		window.addEventListener("keydown", onKeyDown);
		window.addEventListener("keyup", onKeyUp);
		createjs.Ticker.addEventListener("tick", onMainTick);
		
		//Arrayed Objects
		var puddles = [rootRef.tableBG.puddle1, rootRef.tableBG.puddle2, rootRef.tableBG.puddle3, rootRef.tableBG.puddle4, rootRef.tableBG.puddle5, rootRef.tableBG.puddle6, rootRef.tableBG.puddle7];
		var potions = [rootRef.tableBG.potion1, rootRef.tableBG.potion2, rootRef.tableBG.potion3, rootRef.tableBG.potion4, rootRef.tableBG.potion5];
		var friends = [rootRef.tableBG.candleFriend1, rootRef.tableBG.candleFriend2, rootRef.tableBG.candleFriend3, rootRef.tableBG.candleFriend4, rootRef.tableBG.candleFriend5];
		var books = [rootRef.tableBG.bookAnimate1, rootRef.tableBG.bookAnimate2, rootRef.tableBG.bookAnimate3, rootRef.tableBG.bookAnimate4];
		
		// Spawning 
		spawnDroplets();
		spawnEmbers();
		
		// listen for window resize
		window.addEventListener("resize", onWindowResize);
		
		// call onWindowResize()
		onWindowResize();
		
		//PLAYER 
		// Places  the Player in center of stage and calculates for stage scale
		player.x = stageWidth / 2;
		player.y = 597; //stageHeight / 3;
		candleScaleYMax = 1.37;
		candleScaleYMin = 0.6256;
		candleScaleXMax = 1.37;
		candleScaleXMin = 0.6256;
		
		
		// MUSIC PLAY AND PAUSE - - - - - - - - - - - - - - - 
		rootRef.musicBtn.addEventListener("click", onMusicClick);
		
		function onMusicClick(evt)
		{
			if (rootRef.musicBtn.currentLabel == "playAudio")
			{
				createjs.Sound.volume = 0;
				rootRef.musicBtn.gotoAndStop("muteAudio");
			} 
			if (rootRef.musicBtn.currentLabel == "muteAudio")
			{
				createjs.Sound.volume = 1;
				rootRef.musicBtn.gotoAndStop("playAudio");
			}
		}
		function constrainScale()
		{
			if(player.scaleY > candleScaleYMax)
			{
				player.scaleY = candleScaleYMax;
			}
			if(player.scaleY < candleScaleYMin)
			{
				player.scaleY = candleScaleYMin;
			}
			if(player.scaleX > candleScaleXMax)
			{
				player.scaleX = candleScaleXMax;
			}
			if(player.scaleX < candleScaleXMin)
			{
				player.scaleX = candleScaleXMin;
			}
		}
		function constrainCandle() 
		{
			calculateCandleBounds();
		
			if (player.x < candleXMin) 
			{
				endGame(); 
				//player.x = candleXMin;
			}
			if (player.x > candleXMax) 
			{
				player.x = candleXMax;
			}
			if (player.y < candleYMin) 
			{
				player.y = candleYMin;
			}
			if (player.y > candleYMax) 
			{
				player.y = candleYMax;
			}
		}
		
		//SPAWNING WATER  - - - - - - - - - - - - 
		function spawnDroplet() 
		{
			var droplet = new lib.Droplet();
		
			rootRef.dropletBin.addChild(droplet);
		
			droplets.push(droplet);
		
			resetDroplet(droplet); // Calling the below function in spawn
			/* Moving this that is positioning and setting up its own function
			droplet.x = randomInteger(dropletXMin, dropletXMax);
			droplet.y = randomInteger(dropletYMin, dropletYMax);
			
			droplet.speedY = randomInteger(dropletSpeedMin, dropletSpeedMax);
			*/
		}
		
		function resetDroplet(droplet)
		{
			droplet.x = randomInteger(dropletXMin, dropletXMax);
			droplet.y = randomInteger(dropletYMin, dropletYMax);
		
			droplet.speedY = randomInteger(dropletSpeedMin, dropletSpeedMax);
			droplet.gotoAndStop("fall");
		}
		
		function spawnDroplets() 
		{
			for (let i = 0; i < numDroplets; i++) 
			{
				spawnDroplet();
			}
		}
		
		
		// SPAWNING FIRE - - - - - - - - - - - - 
		function spawnEmber() 
		{
			var ember = new lib.Ember();
		
			rootRef.fireBin.addChild(ember);
		
			embers.push(ember);
			
			resetEmber(ember);
		
		}
		function resetEmber(ember)
		{
			ember.x = randomInteger(emberXMin, emberXMax);
			ember.y = randomInteger(emberYMin, emberYMax);
		
			ember.speedX = randomInteger(emberSpeedMin, emberSpeedMax);
			ember.gotoAndStop("fireFall");
		}
		
		function spawnEmbers() 
		{
			for (let j = 0; j < numEmbers; j++) 
			{
				spawnEmber();
			}
		}
		
		
		// Removing Droplets and Embers - - - - - - -  - - -  -
		function removeDroplets()
		{
		  for (let i = 0; i < numDroplets; i++) 
		  {
			  var droplet = droplets[i];
			  rootRef.dropletBin.removeChild(droplet);
		  }
		}
		
		function removeEmbers()
		{
		  for (let j = 0; j < numEmbers; j++) 
		  {
			  var ember = embers[j];
			  rootRef.fireBin.removeChild(ember);
		  }
		}
		
		// KEYBOARD CONTROLS:  - - - - - - - - - - - - - - - - - - - - - - - - - -
		window.addEventListener("keydown", onKeyDown);
		window.addEventListener("keyup", onKeyUp);
		
		function onKeyDown(evt) 
		{
			var keyCode = evt.keyCode;
		
			if (keyCode == leftKey) 
			{
				leftPress = true;
			}
			if (keyCode == rightKey) 
			{
				rightPress = true;
			}
			if (keyCode == upKey) 
			{
				upPress = true;
			} else if (keyCode == downKey) 
			{
				downPress = true;
			}
		
		}
		
		function onKeyUp(evt) 
		{
			var keyCode = evt.keyCode;
			if (keyCode == leftKey) 
			{
				leftPress = false;
			}
			if (keyCode == rightKey) 
			{
				rightPress = false;
			}
			if (keyCode == upKey) 
			{
				upPress = false;
			} else if (keyCode == downKey) 
			{
				downPress = false;
			}
		
		}
		
		// SCORE FUNCTION:  - - - - - - - - - - - - - - - - - - - - - - - - - -
		
		function updateScore()
		{
			rootRef.scoreTxt.text = score;
		}
		
		//HEALTH FUNCTION:  - - - - - - - - - - - - - - - - - - - - - - - - - -
		
		function updateHealth() //QUESTION: my healthbar is no longer constrained at the MAX also when I die and replay it cycles through then stops... :(
		{
			if (health > 75)
			{
				rootRef.darkness.gotoAndStop("noShade");
				player.gotoAndStop("startBody");
			}
			if (health < 75)
			{
				player.gotoAndStop("threeBody");
				rootRef.darkness.gotoAndStop("threeShade");
			}
			if (health < 50)
			{
				player.gotoAndStop("halfBody");
				rootRef.darkness.gotoAndStop("halfShade");
			}
			if (health <= 0) 
			{
				player.gotoAndStop("zeroBody");
				rootRef.darkness.gotoAndStop("fullShade");
				health = 0;
				endGame();
				//rootRef.gotoAndStop("gameOver");
				//createjs.Ticker.removeEventListener("tick", onMainTick);
			} 
			else if(health >= healthMax) 
				{
					health = healthMax;
					player.gotoAndStop("startBody");
					rootRef.darkness.gotoAndStop("noShade");
					rootRef.healthBar.fill.scaleX = healthMax;
				}
		
			rootRef.healthBar.fill.scaleX = health / healthMax;
		}
		
		function endGame()
		{
			createjs.Ticker.removeEventListener("tick", onMainTick);
			window.removeEventListener("keydown", onKeyDown);
			window.removeEventListener("keyup", onKeyUp);
			
			rootRef.gameOverMsg.hiScoreTxt.text = "Final Score:\n" +score;
			
			rootRef.gameOverMsg.visible = true;
			rootRef.gameOverMsg.replayBtn.addEventListener("click", onReplayBtnClick);
			rootRef.gameOverMsg.quitBtn.addEventListener("click", onQuitBtnClick);
		}
		function winGame()
		{
			 createjs.Ticker.removeEventListener("tick", onMainTick);
			 window.removeEventListener("keydown", onKeyDown);
			 window.removeEventListener("keyup", onKeyUp);
			
			rootRef.winGameMsg.finalScoreTxt.text = "Final Score:\n" +score;
			
			rootRef.winGameMsg.visible = true;
			rootRef.winGameMsg.replayBtn.addEventListener("click", onReplayBtnClick);
			rootRef.winGameMsg.quitBtn.addEventListener("click", onQuitBtnClick);
		}
		
		
		function onQuitBtnClick(evt)
		{
			removeEmbers();
			removeDroplets();
			resetBGStage();
			rootRef.gotoAndStop("resetMenu");
			rootRef.gameOverMsg.quitBtn.removeEventListener("click", onQuitBtnClick);	
			rootRef.gameOverMsg.replayBtn.removeEventListener("click", onReplayBtnClick);
			createjs.Sound.stop("Music");
		
		
		}
		
		function onReplayBtnClick(evt)
		{
			removeEmbers();
			removeDroplets();
			resetBGStage();
			rootRef.gotoAndPlay("resetGame");
			rootRef.gameOverMsg.replayBtn.removeEventListener("click", onReplayBtnClick);
			rootRef.gameOverMsg.quitBtn.removeEventListener("click", onQuitBtnClick);
		}
		
		function resetBGStage()
		{
			rootRef.tableBG.x = tableBGStartX;
			rootRef.tableBG.y = tableBGStartY;
		}
		
		
		//TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER
		//TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER
		//TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- 
		
		//TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER
		//TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER
		//TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER -- TICKER
		
		createjs.Ticker.addEventListener("tick", onMainTick);
		
		
		function onMainTick(evt) 
		{
			//currentTick++;
			//console.log(currentTick);
			
		// SCROLLING ITEMS  - - - - - - - - - - - - 
			
			if(rootRef.tableBG.x <=-5300)
			{
				rootRef.tableBG.x = -5300;
			} 
			else 
			{
					rootRef.tableBG.x -= speedBG;
			}
			
			
			
		//KEYBOARD STUFF:  - - - - - - - - - - - - - - - - - - - - - - - - - -
			if (leftPress) 
				{
				player.x -= candleSpeed;
				}
			if (rightPress) 
				{
				player.x += candleSpeed;
				
				}
			if (upPress) 
				{
				player.y += candleSpeed;
				player.scaleY += scaleSpeed;
				player.scaleX += scaleSpeed;
				}
			if (downPress) 
				{
				player.y -= candleSpeed;
				player.scaleY -= scaleSpeed;
				player.scaleX -= scaleSpeed;
				}
			constrainCandle();
			constrainScale();
		
		
		
		// Spawning Droplets:   - - - - - - - - - - - - - - - - - - - - - - - - - -
			for (let i = 0; i < numDroplets; i++)
			{
				var droplet = droplets[i];
				if (droplet.currentLabel == "fall")
					{
						droplet.y += droplet.speedY;
						// WATER  HIT PLAYER	
						if (hitTestPoint(player.fullHit, droplet.x, droplet.y))
						{
							// SCORE - Points
							score -= dropletDropDamage;
							updateScore();
							resetDroplet(droplet);
							//console.log("Water hit me!");
							health -= dropletDropDamage;
							updateHealth();
							createjs.Sound.play("candleHitSnd");
						}
						// Adding the Reset WATER HIT TABLE 
						if (hitTestPoint(rootRef.table.tableHit, droplet.x, droplet.y))
						{
							updateHealth();
							droplet.gotoAndPlay("splash");
						}
					} 
				else if (droplet.currentLabel == "splashEnd")
					{
						resetDroplet(droplet);
					}
			}
		
		// Spawning FIIIIRRREEEE:   - - - - - - - - - - - - - - - - - - - - - - - - - -
			for (let j = 0; j < numEmbers; j++) 
			{
				//console.log(j);
				var ember = embers[j];
				if (ember.currentLabel == "fireFall")
					{
						ember.x += ember.speedX;
						// IF Fire hits player, reset and gain health		
						if (hitTestPoint(player.fullHit, ember.x, ember.y))
						{
							//SCORE - POINTS!
							score += emberPoints;
							ember.gotoAndPlay("burn");
							updateScore();
							resetEmber(ember);
							//console.log("Fire hit, yesss!");
							health += emberPoints;
							updateHealth();
							createjs.Sound.play("DingSnd");
						}
					
						// Adding the Reset fire Hit to Table
						if (hitTestPoint(rootRef.table.tableHit, ember.x, ember.y))
						{
							updateHealth();
							ember.gotoAndPlay("burn");
							health -= 5;
							
						}
					}
					else if (ember.currentLabel == "burnEnd")
					{
						resetEmber(ember);
					}
					
			}
		
		// PUDDLE HITTING PLAYER parameters:   - - - - - - - - - - - - - - - - - - - - - - - - - -
			for (let i = 0; i < puddles.length; i++)
			{
				var puddle = puddles[i];
				if (hitTestMCBounds(player.hit, puddle))
				{
					score -= dropletDropDamage;
					updateScore();
					//console.log("Oh gosh, GET OUT OF THE PUDDDLLLEEE!! You're FIRE!'");
					health -= dropletDropDamage;
					updateHealth();
					createjs.Sound.play("PuddleSnd");
					puddle.gotoAndPlay("ripple");	
				}
			}
		
		// POTION Hitting Player:     - - - - - - - - - - - - - - - - - - - - - - - - - -
			for (let j = 0; j < potions.length; j++)
			{	
				var potion = potions[j];
				if (hitTestPointNestedMC(player.fullHit, potion))
				{
					//console.log("ouch -_-");
					player.x -= speedBG;
					rightPress = false;
					potion.gotoAndPlay("fall"); 
				} 
			}
		
		// Hole Hit Nested:   - - - - - - - - - - - - - - - - - - - - - - - - - -
				if(hitTestMCBounds(player.hit, rootRef.tableBG.holeHit)) // if I use hitTestMCBounds the hole wouldn't let me through
				{
					//console.log("HOLE HIT");
					health = 0;
					updateHealth();
					endGame();
				}
			
		//Books Candles :   - - - - - - - - - - - - - - - - - - - - - - - - - -
			for (let l = 0; l < books.length; l++)
			{
				var book = books[l];
				if(hitTestMCBounds(player.hit, book)) 
				{
					if(book.currentLabel == "hitDamage")
					{
						score -= bookDropDamage;
						updateScore();
						//console.log("OUCH");
						health -= bookDropDamage;
						updateHealth();
						player.x -= speedBG;
						//endGame();
					}
				}
				
			}
			
			
		//Lighting Candles :   - - - - - - - - - - - - - - - - - - - - - - - - - -
		
			for (let k = 0; k < friends.length; k++)
			{
				var friend = friends[k];
				if (hitTestMCBounds(player.fullHit, friend))
				{
					if (friend.currentLabel == "idle")
					{
						score += emberPoints;
						updateScore();
						health += emberPoints;
						updateHealth();
						friend.gotoAndPlay("light");
					} if (friend.currentLabel == "light")
					{
						friend.thankText.text = "Thank you";
					}
				}
			}
		
		// Door End Paramenter  :   - - - - - - - - - - - - - - - - - - - - - - - - - -
			if(hitTestMCBounds(player.hit, rootRef.tableBG.doorHit))
				{
					console.log("Ending!");
					rootRef.tableBG.doorEnd.light.gotoAndPlay("walkThrough");
					winGame();
				}
			
		}
	}
	this.frame_25 = function() {
		rootRef.gotoAndStop("gamePlay");
	}
	this.frame_34 = function() {
		this.gotoAndPlay("menu");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(15).call(this.frame_19).wait(6).call(this.frame_25).wait(9).call(this.frame_34).wait(1));

	// Buttons
	this.homeBtn = new lib.homeBtn();
	this.homeBtn.name = "homeBtn";
	this.homeBtn.setTransform(75.75,901.95,0.7475,0.7475,0,0,0,1.4,-1.4);
	this.homeBtn._off = true;
	new cjs.ButtonHelper(this.homeBtn, 0, 1, 2, false, new lib.homeBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.homeBtn).wait(4).to({_off:false},0).to({_off:true},6).wait(25));

	// Title2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00CC").s().p("AjIFOIAAqcIFPAAIAABEIBCAAIAAELIhCAAIAAALIAAA5IiIAAIAAhGIBCAAIAAj9IAAgKIiBAAIAAAKIAAJMg");
	this.shape.setTransform(359.95,105.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AinFOIAAqcICIAAIAAJYIDHAAIAABEg");
	this.shape_1.setTransform(403.325,105.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#33FF66").s().p("ABBFOIAAi+IAAgKIjEAAIAAAKIAAC+IhGAAIAAkMIBDAAIAAjIIBDAAIAAjIICHAAIAADIIBCAAIAADIIBEAAIAAEMgAhBh4IAAC6IBAAAIAAi6IAAgKIhAAAg");
	this.shape_2.setTransform(446.675,105.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3300").s().p("AhDFOIAAlCIAAgLIhCAAIAAh5IAAgKIhEAAIAAjMICIAAIAADIIBCAAIAACFIBAAAIAAlNICJAAIAADMIhEAAIAAAKIAAB5IhCAAIAAALIAAFCg");
	this.shape_3.setTransform(499.975,105.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A936DE").s().p("ARKFOIAAg4IAAgKIhDAAIAAoWIBDAAIAAhEIEOAAIAABEIBDAAIAAIWIhDAAIAAAKIAAA4gASPj+IAAIIICDAAIAAoIIAAgKIiDAAgAK6FOIAApMIAAgKIiFAAIAAhGIGSAAIAABGIiFAAIAAAKIAAJMgAAfFOIAAi+IAAgKIiBAAIAAAKIAAC+IiIAAIAAi+IAAgKIhCAAIAAj+IAAgKIhEAAIAAjMICIAAIAADIIBDAAIAAEKIBAAAIAAhCIBDAAIAAi6IAAgKIhDAAIAAjMICIAAIAADIIBCAAIAAEKIBAAAIAAnSICIAAIAADMIhDAAIAAAKIAAD+IhDAAIAAAKIAAC+gAtCFOIAAg4IAAgKIhDAAIAAoWIBDAAIAAhEIEOAAIAABEIBDAAIAAIWIhDAAIAAAKIAAA4gAr9j+IAAIIICDAAIAAoIIAAgKIiDAAgAyPFOIAAlCIAAgLIiDAAIAAALIAAFCIiIAAIAAqcICIAAIAAEMICDAAIAAkMICJAAIAAKcg");
	this.shape_4.setTransform(163.375,105.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("EAi4AExIAAgKICIAAIAAAKgAcoExIAAgKICIAAIAAAKgAYdExIAAgKIBGAAIAAAKgASNExIAAgKIFQAAIAAAKgAK6ExIAAgKICIAAIAAAKgAAgExIAAgKIENAAIAAAKgAlvExIAAgKICIAAIAAAKgAwKExIAAgKICIAAIAAAKgA0UExIAAgKICIAAIAAAKgA9sExIAAgKIENAAIAAAKgEgi5AExIAAgKICIAAIAAAKgEgnEAExIAAgKICIAAIAAAKgAEtDvIAAgKIBDAAIAAAKgAgiDvIAAgKIBCAAIAAAKgA5fDvIAAgKIBDAAIAAAKgA+vDvIAAgKIBDAAIAAAKgAZjBpIAAgKIDFAAIAAAKgAuCBpIAAgKIBDAAIAAAKgAyMBpIAAgKICCAAIAAAKgA1XBpIAAgKIBDAAIAAAKgAOBAnIAAgKICJAAIAAAKgEAlAgAbIAAgKIBCAAIAAAKgEAh1gAbIAAgKIBDAAIAAAKgAQKgbIAAgKIBDAAIAAAKgEgk8gAbIAAgKICDAAIAAAKgEAmCgCgIAAgKIBDAAIAAAKgEAgygCgIAAgKIBDAAIAAAKgAaligIAAgKIBAAAIAAAKgAs/igIAAgKIBDAAIAAAKgAyPigIAAgKIBDAAIAAAKgA2aigIAAgKIBDAAIAAAKgANCkmIAAgKICCAAIAAAKgABlkmIAAgKICDAAIAAAKgAjnkmIAAgKICFAAIAAAKgAn0kmIAAgKICFAAIAAAKgA8nkmIAAgKICDAAIAAAKg");
	this.shape_5.setTransform(270.025,109.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[]},6).to({state:[]},24).wait(1));

	// Items
	this.instance = new lib.puddle();
	this.instance.setTransform(158,782.6,0.648,0.648,0,0,0,0,-0.1);

	this.instance_1 = new lib.Droplet();
	this.instance_1.setTransform(42.95,774.55,1,1,0,0,0,0.1,-31.9);

	this.instance_2 = new lib.CachedBmp_43();
	this.instance_2.setTransform(76.2,615.05,0.5,0.5);

	this.instance_3 = new lib.candleFriendMC("single",27);
	this.instance_3.setTransform(468.95,768.35,1,1,0,0,0,-0.1,-4.4);

	this.instance_4 = new lib.Ember();
	this.instance_4.setTransform(362.15,757.55,1,1,0,0,0,-0.8,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},4).to({state:[]},6).to({state:[]},24).wait(1));

	// keyboard
	this.instance_5 = new lib.keyboardActions();
	this.instance_5.setTransform(212.35,342,1.0797,1.0797);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({_off:true},6).wait(25));

	// separation
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("Aj+ATQh+AAh4gBItggRIgBgBIABAAINggRQB4gBB+AAIH9AAQB+AAB4ABINZARIAIAAIAAAAIAAABIthARQh4ABh+AAg");
	this.shape_6.setTransform(320.075,550.125);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(4).to({_off:false},0).to({_off:true},6).wait(25));

	// table
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6F3C28").s().p("AJ2HFIgLAAIgkgBIgBAAIAAgCIAlgCIALAAIGWgHIGSACIDTAFIALAAIAnACIAAACIgBAAIgmABIgLAAIn9AIgEAmsAE/IgJgBIgJAAIhBgFIgSAAIgJABIgmAEIgIAAIgEABIgjgBIgEgBIgDAAIgVgCIgCAAIgMgDIgDAAIgEgBIgBgBIAAgBIABAAIAEgBIADAAIAMgDIACAAIA/gFIAEABIAIAAIAmAFIAJAAIASABIBBgGIAJAAIAJgBIA9gBIAIABIA/AFIADABIASADIABAAIAAABIgBABIgSACIgDACIg/AFIgIAAgEAmOAAsIAAgCIGeAAIAAACgA8uAgIAAgCIGOAAIAAACgEgyogBXIgBAAIAAgCIABAAIA9AAIAAACgEAktgEhIjUgGIgBAAIAAgCIEBgHIHygBIFeAIIABAAIAAACIgBAAIleAIgEgihgExIgLgBIglgBIgBgBIAAgBIAmgCIALAAIH+gHIH+AHIAKAAIAmACIAAABIgBABIglABIgKABIn+AHgAYZmsIg6gEIgegCIgfAAIggAAIgQABIgQABIgfACIgRABIjbgBIgLAAIg+gGIgBAAIAAgCIABAAIA+gGIALgBIDbgBIARABIAfACIAQABIAQABIAgABIAfgBIAegCIA6gDIAbAAIBEACIAJAAIAJABIAIABIAEAAIAVADIAEAAIAIABIABAAIAAACIgBAAIgIABIgEAAIgVACIgEAAIgIABIgJABIgJABIhEACIgOAAIgNAAgAlqm4IgJAAIgKgBIhBgFIgSAAIgJABIgmAFIgIAAIgEAAIg/gFIgCAAIgNgCIgCAAIgEgBIgBAAIAAgCIABAAIAEgCIACAAIANgCIACAAIAZgCIACgBIAkgBIAEAAIAIAAIAmAEIAJABIASAAIBBgEIAKgBIAJAAIA7gCIAIAAIA/AGIAFABIARADIABAAIAAACIgBAAIgRACIgFABIg/AGIgIABg");
	this.shape_7.setTransform(320.1,905.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#330000").s().p("AC1HXIgBAAIAAgBIGQAAIAAABIgCAAgEAoWAFLIgBAAIAAgCIGOAAIAAACIgBAAgABFEzIskgHIgBgBIAAgBIMlgIIHUgBIHTABIMlAIIAAABIgBABIskAHInTACInUgCgAUQhQItCgHIgBgBIAAgBINDgIIHkgBIHkABINDAIIAAABIgBABItCAHInkACInkgCgAXWicIgBAAIAAgCIGeAAIAAACIgBAAgAuWinIgBgBIAAgBIGPAAIAAABIgBABgEAwXgC6IgKAAIgKgBIkIABIgLAAIgTgBIgBgBIAAgCIABAAIATgBIALgBIEIABIAKAAIAKgBIAngBIBrADIABAAIAAACIgBABIhrADIgngCgEgpLgDEIjQgEIgBAAIAAgCIDRgDIArAAIM+ADIAAACIgBAAIs9AEIgWAAIgVAAgEgphgEfIgBgBIAAgCIGOAAIAAACIAAABgAKfkvIgBgBIAAgBIGdAAIAAABIgBABgAkCmsIgBAAIAAgBIGPAAIAAABIgBAAgEgntgHEIq7gIIgBAAIAAgCIABAAIK7gIIGWgBIGVABIK9AIIAAACIgBAAIq8AIImVABImWgBg");
	this.shape_8.setTransform(320.1,910);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#6F3C28","#341103"],[0,0.867],1076.1,134.6,1076.1,-190.1).s().p("EgyoAJWIAAqKIA9AAIAAgCIg9AAIAAlKIK7AIIGWABIGVgBIK8gIIABAAIAAgCIq9gIImVgBImWABIq7AIIAAjMQAwgHAuAAMBjzAAAIAAFPIlegIInyABIkBAHIAAACIABAAIDUAGIIeACIFegIIAACSIhrgDIgnABIgKABIgKAAIkIgBIgLABIgTABIgBAAIAAABIABABIATABIALAAIEIgBIAKABIAKAAIAnACIBrgDIAALGgAC0IiIABABIGNAAIACgBIAAgBImQAAgAJ2HjIgLAAIglACIAAACIABAAIAkABIALAAIH+AIIH9gIIALAAIAmgBIABAAIAAgCIgngCIgLAAIjTgFImSgCgEAoVAGXIABAAIGMAAIABAAIAAgCImOAAgABFFtIslAIIAAABIABABIMkAHIHUACIHTgCIMkgHIABgBIAAgBIslgIInTgBInUABgEAlZAFcIBBAFIAJAAIAJABIA9ABIAIAAIA/gFIADgCIASgCIABgBIAAgBIgBAAIgSgDIgDgBIg/gFIgIgBIg9ABIgJABIgJAAIhBAGIgSgBIgJAAIgmgFIgIAAIgEgBIg/AFIgCAAIgMADIgDAAIgEABIgBAAIAAABIABABIAEABIADAAIAMADIACAAIAVACIADAAIAEABIAjABIAEgBIAIAAIAmgEIAJgBIANAAIAFAAgEAmOABPIGeAAIAAgCImeAAgA8uBDIGOAAIAAgCImOAAgAUQgWItDAIIAAABIABABINCAHIHkACIHkgCINCgHIABgBIAAgBItDgIInkgBInkABgAXVhQIABAAIGcAAIABAAIAAgCImeAAgAuXhdIABABIGNAAIABgBIAAgBImPAAgEgpLgCCIjRAEIAAACIABAAIDQADQAVABAVgBIM+gDIABAAIAAgCIs/gEIgVAAIgVAAgEgpigDVIABABIGNAAIAAgBIAAgBImOAAgAKejlIABABIGbAAIABgBIAAgBImdAAgEgihgEUIgLAAIgmACIAAABIABABIAlABIALABIH+AHIH+gHIAKgBIAlgBIABgBIAAgBIgmgCIgKAAIn+gHgAkDlhIABABIGNAAIABgBIAAgBImPAAgAXBmPIAeACIA6AEQAOABANgBIBEgCIAJgBIAJgBIAIgBIAEAAIAVgCIAEAAIAIgBIABAAIAAgCIgBAAIgIgBIgEAAIgVgDIgEAAIgIgBIgJgBIgJAAIhEgCIgbAAIg6ADIgeACIgfABIgggBIgQgBIgQgBIgfgCIgRgBIjbABIgLABIg+AGIgBAAIAAACIABAAIA+AGIALAAIDbABIARgBIAfgCIAQgBIAQgBIAgAAIAIAAIAXAAgAm+mbIBBAFIAKABIAJAAIA7ACIAIgBIA/gGIAFgBIARgCIABAAIAAgCIgBAAIgRgDIgFgBIg/gGIgIAAIg7ACIgJAAIgKABIhBAEIgSAAIgJgBIgmgEIgIAAIgEAAIgkABIgCABIgZACIgCAAIgNACIgCAAIgEACIgBAAIAAACIABAAIAEABIACAAIANACIACAAIA/AFIAEAAIAIAAIAmgFIAJgBIANAAIAFAAg");
	this.shape_9.setTransform(320.1,902.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},4).to({state:[]},6).to({state:[]},24).wait(1));

	// BG
	this.instance_6 = new lib.Instructions_page();
	this.instance_6.setTransform(340.1,432.45);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({_off:true},6).wait(25));

	// CreditsPage
	this.gameCredits = new lib.CreditsPage("synched",0);
	this.gameCredits.name = "gameCredits";
	this.gameCredits.setTransform(272.6,849.7);

	this.timeline.addTween(cjs.Tween.get(this.gameCredits).to({_off:true},4).wait(31));

	// Btns
	this.creditBtn = new lib.creditsBtn();
	this.creditBtn.name = "creditBtn";
	this.creditBtn.setTransform(415.55,923.65);
	new cjs.ButtonHelper(this.creditBtn, 0, 1, 2, false, new lib.creditsBtn(), 3);

	this.howToBtn = new lib.howToBtn();
	this.howToBtn.name = "howToBtn";
	this.howToBtn.setTransform(270,741.85,0.8078,0.8078);
	new cjs.ButtonHelper(this.howToBtn, 0, 1, 2, false, new lib.howToBtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.howToBtn},{t:this.creditBtn}]}).to({state:[]},4).to({state:[]},30).wait(1));

	// playBtn
	this.playBtn = new lib.playBtn();
	this.playBtn.name = "playBtn";
	this.playBtn.setTransform(270,440.3);
	new cjs.ButtonHelper(this.playBtn, 0, 1, 2, false, new lib.playBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playBtn).to({_off:true},4).wait(31));
	this.playBtn.addEventListener("tick", AdobeAn.handleFilterCache);

	// title
	this.instance_7 = new lib.title("synched",0);
	this.instance_7.setTransform(270,214.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},4).wait(31));

	// winGame
	this.winGameMsg = new lib.winGameMsg();
	this.winGameMsg.name = "winGameMsg";
	this.winGameMsg.setTransform(270,480);
	this.winGameMsg._off = true;

	this.timeline.addTween(cjs.Tween.get(this.winGameMsg).wait(19).to({_off:false},0).to({_off:true},6).wait(10));

	// music
	this.musicBtn = new lib.musicBtnn();
	this.musicBtn.name = "musicBtn";
	this.musicBtn.setTransform(57.05,767.9,0.5887,0.5887,0,0,0,-0.1,-0.1);
	this.musicBtn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.musicBtn).wait(19).to({_off:false},0).to({_off:true},6).wait(10));

	// gameOverMsg
	this.gameOverMsg = new lib.gameOverMsg();
	this.gameOverMsg.name = "gameOverMsg";
	this.gameOverMsg.setTransform(270,480);
	this.gameOverMsg._off = true;

	this.timeline.addTween(cjs.Tween.get(this.gameOverMsg).wait(19).to({_off:false},0).to({_off:true},6).wait(10));

	// scoreTxt
	this.scoreTxt = new cjs.Text("", "normal 400 72px 'tk-acier-bat-solid'", "#33FF00");
	this.scoreTxt.name = "scoreTxt";
	this.scoreTxt.textAlign = "right";
	this.scoreTxt.lineHeight = 77;
	this.scoreTxt.lineWidth = 498;
	this.scoreTxt.parent = this;
	this.scoreTxt.setTransform(528.15,730.45);
	if(!lib.properties.webfonts['tk-acier-bat-solid']) {
		lib.webFontTxtInst['tk-acier-bat-solid'] = lib.webFontTxtInst['tk-acier-bat-solid'] || [];
		lib.webFontTxtInst['tk-acier-bat-solid'].push(this.scoreTxt);
	}
	this.scoreTxt._off = true;

	this.timeline.addTween(cjs.Tween.get(this.scoreTxt).wait(19).to({_off:false},0).to({_off:true},6).wait(10));

	// player
	this.candle1 = new lib.candleplayer();
	this.candle1.name = "candle1";
	this.candle1.setTransform(270.3,597);
	this.candle1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.candle1).wait(10).to({_off:false},0).to({_off:true},15).wait(10));

	// fireBin
	this.fireBin = new lib.bin();
	this.fireBin.name = "fireBin";
	this.fireBin._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fireBin).wait(10).to({_off:false},0).to({_off:true},15).wait(10));

	// darkShade
	this.darkness = new lib.darkBG_MC();
	this.darkness.name = "darkness";
	this.darkness.setTransform(270,480);
	this.darkness._off = true;

	this.timeline.addTween(cjs.Tween.get(this.darkness).wait(19).to({_off:false},0).to({_off:true},6).wait(10));

	// dropletBin
	this.dropletBin = new lib.bin();
	this.dropletBin.name = "dropletBin";
	this.dropletBin.setTransform(0,20);
	this.dropletBin._off = true;

	this.timeline.addTween(cjs.Tween.get(this.dropletBin).wait(10).to({_off:false},0).to({_off:true},15).wait(10));

	// healthBar
	this.instance_8 = new lib.healthBar();
	this.instance_8.setTransform(270,1178.25);
	this.instance_8._off = true;

	this.healthBar = new lib.healthBar();
	this.healthBar.name = "healthBar";
	this.healthBar.setTransform(270,858.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},10).to({state:[{t:this.healthBar,p:{regX:0,regY:0,x:270,y:858.7}}]},8).to({state:[{t:this.healthBar,p:{regX:-249,regY:1,x:21,y:859.7}}]},1).to({state:[]},6).to({state:[]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10).to({_off:false},0).to({_off:true,y:858.7},8).wait(17));

	// Table
	this.instance_9 = new lib.CachedBmp_44();
	this.instance_9.setTransform(-186.3,792.3,0.5,0.5);

	this.table = new lib.tableMC();
	this.table.name = "table";
	this.table.setTransform(1395.05,1028.8,1,1,0,0,0,-1.7,-0.4);
	this.table._off = true;

	this.tableBG = new lib.tableMC();
	this.tableBG.name = "tableBG";
	this.tableBG.setTransform(1395.05,708.8,1,1,0,0,0,-1.7,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[]},4).to({state:[{t:this.table}]},6).to({state:[{t:this.table}]},1).to({state:[{t:this.tableBG}]},7).to({state:[{t:this.tableBG}]},1).to({state:[]},6).to({state:[]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.table).wait(10).to({_off:false},0).to({y:988.8},1).to({_off:true,y:708.8},7).wait(17));
	this.table.addEventListener("tick", AdobeAn.handleFilterCache);
	this.tableBG.addEventListener("tick", AdobeAn.handleFilterCache);

	// bg
	this.instance_10 = new lib.bgAtmosphere();
	this.instance_10.setTransform(1389.4,538.8);
	var instance_10Filter_1 = new cjs.ColorFilter(0.69,0.69,0.69,1,79.05,47.43,79.05,0);
	this.instance_10.filters = [instance_10Filter_1];
	this.instance_10.cache(-1620,-559,3241,1118);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(19).to({_off:true},6).wait(10));
	this.timeline.addTween(cjs.Tween.get(instance_10Filter_1).wait(10).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).to(new cjs.ColorFilter(0.65,0.65,0.65,1,0,0,0,0), 9).wait(10));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_10, startFrame:10, endFrame:10, x:-1620, y:-559, w:3241, h:1118});
	this.filterCacheList.push({instance: this.instance_10, startFrame:0, endFrame:0, x:-1620, y:-559, w:3241, h:1118});
	this.filterCacheList.push({instance: this.instance_10, startFrame:11, endFrame:19, x:-1620, y:-559, w:3241, h:1118});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-185.9,-1093,7933.799999999999,2541);
// library properties:
lib.properties = {
	id: '95573411BE4243B2B9FF519342FC8CD8',
	width: 540,
	height: 960,
	fps: 24,
	color: "#333333",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CachedBmp_57.png?1685318769717", id:"CachedBmp_57"},
		{src:"images/CachedBmp_56.png?1685318769717", id:"CachedBmp_56"},
		{src:"images/CachedBmp_55.png?1685318769717", id:"CachedBmp_55"},
		{src:"images/CachedBmp_45.png?1685318769717", id:"CachedBmp_45"},
		{src:"images/CachedBmp_44.png?1685318769717", id:"CachedBmp_44"},
		{src:"images/BG_Illustrator.jpg?1685318769717", id:"BG_Illustrator"},
		{src:"images/PhotoshopWall.jpg?1685318769717", id:"PhotoshopWall"},
		{src:"images/JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_1.png?1685318769531", id:"JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_1"},
		{src:"images/JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_2.png?1685318769531", id:"JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_2"},
		{src:"images/JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_3.png?1685318769531", id:"JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_3"},
		{src:"images/JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4.png?1685318769532", id:"JA_Final_CandleGame_v115_FinalforTurnIN230325_1300_atlas_4"},
		{src:"sounds/fireOnly.mp3?1685318769717", id:"fireOnly"},
		{src:"sounds/DingSnd.mp3?1685318769717", id:"DingSnd"},
		{src:"sounds/Music.mp3?1685318769717", id:"Music"},
		{src:"sounds/PuddleSnd.mp3?1685318769717", id:"PuddleSnd"},
		{src:"sounds/candleHitSnd.mp3?1685318769717", id:"candleHitSnd"},
		{src:"sounds/waterTable.mp3?1685318769717", id:"waterTable"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['95573411BE4243B2B9FF519342FC8CD8'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
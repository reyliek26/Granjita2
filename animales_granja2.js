(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"animales_granja2_atlas_1", frames: [[0,1656,905,172],[628,628,512,512],[0,1053,512,512],[1142,628,512,512],[0,628,626,423],[0,0,626,626],[1028,1142,626,417],[514,1142,512,512],[1201,0,536,626],[628,0,571,626],[1028,1561,570,456]]},
		{name:"animales_granja2_atlas_2", frames: [[590,632,272,64],[452,0,456,150],[0,321,588,173],[0,496,588,173],[0,0,450,319],[590,152,256,256],[590,410,229,220]]}
];


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



(lib.CachedBmp_5 = function() {
	this.initialize(ss["animales_granja2_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["animales_granja2_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["animales_granja2_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["animales_granja2_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["animales_granja2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._17311870 = function() {
	this.initialize(ss["animales_granja2_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._17311873 = function() {
	this.initialize(ss["animales_granja2_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._3388845 = function() {
	this.initialize(ss["animales_granja2_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits1 = function() {
	this.initialize(ss["animales_granja2_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits10 = function() {
	this.initialize(ss["animales_granja2_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits11 = function() {
	this.initialize(ss["animales_granja2_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits2 = function() {
	this.initialize(ss["animales_granja2_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits3 = function() {
	this.initialize(ss["animales_granja2_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits4 = function() {
	this.initialize(ss["animales_granja2_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits5 = function() {
	this.initialize(ss["animales_granja2_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits6 = function() {
	this.initialize(ss["animales_granja2_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits8 = function() {
	this.initialize(ss["animales_granja2_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits9 = function() {
	this.initialize(ss["animales_granja2_atlas_2"]);
	this.gotoAndStop(6);
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


(lib.vaca = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("_008699584_prev");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.Mapadebits8();
	this.instance.setTransform(-80.1,-51.7,0.2891,0.2327,0,2.0445,-0.6532);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.2949,scaleY:0.2982,skewX:0,skewY:0,x:-84,y:-68},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-68,168.7,136);


(lib.oveja = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("animals057");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.Mapadebits9();
	this.instance.setTransform(-66.55,-62,0.5812,0.5638);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.6685,scaleY:0.7364,x:-77,y:-81},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77,-81,153.1,162);


(lib.gallo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Gallo2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.Mapadebits5();
	this.instance.setTransform(0,-67.5,0.2711,0.2013);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.2396,y:-80},0).wait(1).to({scaleY:0.2013,y:-67.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-80,145.3,150);


(lib.Cochino = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("_006135194_prev2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.Mapadebits11();
	this.instance.setTransform(0,-55.55,0.298,0.3483);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.3824,scaleY:0.4469,x:-19,y:-71},0).wait(1).to({scaleX:0.298,scaleY:0.3483,x:0,y:-55.55},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-71,172.1,142.6);


(lib.caballo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("_008700305_prev8");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.Mapadebits10();
	this.instance.setTransform(-71.1,-62.55,0.2272,0.1998);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.3038,scaleY:0.302,x:-95,y:-95},0).wait(1).to({scaleX:0.2272,scaleY:0.1998,x:-71.1,y:-62.55},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-95,190.2,189.1);


(lib.burro = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("_008700019_prevmp3copia");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.Mapadebits6();
	this.instance.setTransform(0,-67.2,0.2589,0.2147);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.2937,x:-10,y:-67},0).wait(1).to({scaleX:0.2589,x:0,y:-67.2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-67.2,167.7,134.60000000000002);


(lib.btnVolver = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib._3388845();
	this.instance.setTransform(-57.5,-40.25,0.2246,0.1572);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.5,-40.2,115,80.5);


(lib.btnStop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Mapadebits3();
	this.instance.setTransform(-52.05,-44.05,0.4066,0.3441);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.5656,scaleY:0.4663,x:-72,y:-60},0).wait(1).to({scaleX:0.4066,scaleY:0.3441,x:-52.05,y:-44.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-60,144.8,119.4);


(lib.btnSiguiente = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-94.75,-18.8,0.1844,0.1844);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(-94.75,-18.8,0.1844,0.1844);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(-94.75,-18.8,0.1844,0.1844);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.7,-18.8,166.8,31.9);


(lib.btnPlay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Mapadebits4();
	this.instance.setTransform(-26,-26,0.1016,0.1016);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.1685,scaleY:0.1685,x:-43,y:-43},0).wait(1).to({scaleX:0.1016,scaleY:0.1016,x:-26,y:-26},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-43,86.3,86.3);


(lib.btnMenos2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib._17311873();
	this.instance.setTransform(-40.75,-40.75,0.1592,0.1592);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.2324,scaleY:0.2387,x:-60,y:-61},0).wait(1).to({scaleX:0.1592,scaleY:0.1592,x:-40.75,y:-40.75},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-61,119,122.2);


(lib.btnMenos = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib._17311873();
	this.instance.setTransform(-45.75,-45.75,0.1787,0.1787);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.3125,scaleY:0.3125,x:-80,y:-80},0).wait(1).to({scaleX:0.1787,scaleY:0.1787,x:-45.75,y:-45.75},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-80,160,160);


(lib.btnMas2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib._17311870();
	this.instance.setTransform(-37.1,-37.1,0.1449,0.1449);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.2242,scaleY:0.2242,x:-57,y:-57},0).wait(1).to({scaleX:0.1449,scaleY:0.1449,x:-37.1,y:-37.1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-57,114.8,114.8);


(lib.btnMas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib._17311870();
	this.instance.setTransform(-50.6,-50.6,0.1977,0.1977);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.3123,scaleY:0.3123,x:-80,y:-80},0).wait(1).to({scaleX:0.1977,scaleY:0.1977,x:-50.6,y:-50.6},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-80,159.9,159.9);


(lib.btnListo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Mapadebits4();
	this.instance.setTransform(-53.9,-44.55,0.2106,0.174);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.2111,x:-54,y:-54},0).wait(1).to({scaleY:0.174,x:-53.9,y:-44.55},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-54,108,108.1);


(lib.brnPausa = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Mapadebits3();
	this.instance.setTransform(-32.65,-27.7,0.2551,0.2164);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.4277,scaleY:0.3629,x:-55,y:-46},0).wait(1).to({scaleX:0.2551,scaleY:0.2164,x:-32.65,y:-27.7},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-46,109.5,92.9);


(lib.cpEscenario2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.btnVolver.on("click",irA2.bind(this));
		
		function irA2(e){
		this.parent.cambiarEscenario (new lib.cpEscenario1());	
			}
		
		var sonido = new createjs.Sound.play("audioMp3", {loop: 0});
		
		sonido.volume = 0.5;
		
		function detenerSonido() {
		    sonido.stop();
		}
		
		function iniciarSonido() {
		    sonido.play();
		}
		
		this.btnPausa.addEventListener("click", detenerSonido);
		this.btnVolver.addEventListener("click", detenerSonido);
		this.btnPlay.addEventListener("click", iniciarSonido);
		
		
		this.btnMas2.addEventListener("click", function(){
			if (sonido.volume < 1){
				sonido.volume += 0.1;
			}
		});
		
		this.btnMenos2.addEventListener("click", function(){
			if (sonido.volume > 0){
				sonido.volume -= 0.1;
			}
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_2
	this.instance = new lib.gallo();
	this.instance.setTransform(464.9,250.5,1,1,0,0,0,364.9,0);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa_3
	this.instance_1 = new lib.burro();
	this.instance_1.setTransform(486.9,250.2,1,1,0,0,0,73.9,0);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Capa_5
	this.instance_2 = new lib.oveja();
	this.instance_2.setTransform(178.55,470);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Capa_8
	this.instance_3 = new lib.vaca();
	this.instance_3.setTransform(758.05,249);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Capa_7
	this.instance_4 = new lib.Cochino();
	this.instance_4.setTransform(751.5,469.8,1,1,0,0,0,67,0);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Capa_6
	this.instance_5 = new lib.caballo();
	this.instance_5.setTransform(490.1,470.55);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Capa_1
	this.btnVolver = new lib.btnVolver();
	this.btnVolver.name = "btnVolver";
	this.btnVolver.setTransform(454.5,587.25);
	new cjs.ButtonHelper(this.btnVolver, 0, 1, 1);

	this.btnMenos2 = new lib.btnMenos2();
	this.btnMenos2.name = "btnMenos2";
	this.btnMenos2.setTransform(859.75,580.75);
	new cjs.ButtonHelper(this.btnMenos2, 0, 1, 2);

	this.btnMas2 = new lib.btnMas2();
	this.btnMas2.name = "btnMas2";
	this.btnMas2.setTransform(749.1,584.1);
	new cjs.ButtonHelper(this.btnMas2, 0, 1, 2);

	this.btnPausa = new lib.btnPlay();
	this.btnPausa.name = "btnPausa";
	this.btnPausa.setTransform(126,592);
	new cjs.ButtonHelper(this.btnPausa, 0, 1, 2);

	this.btnPlay = new lib.brnPausa();
	this.btnPlay.name = "btnPlay";
	this.btnPlay.setTransform(32.65,593.7);
	new cjs.ButtonHelper(this.btnPlay, 0, 1, 2);

	this.instance_6 = new lib.Mapadebits2();
	this.instance_6.setTransform(-58,-79,1.6327,1.8629);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99FFFF").s().p("EhK/AyAMAAAhj/MCV/AAAMAAABj/g");
	this.shape.setTransform(479,319.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_6},{t:this.btnPlay},{t:this.btnPausa},{t:this.btnMas2},{t:this.btnMenos2},{t:this.btnVolver}]}).wait(1));

	// Titulo
	this.instance_7 = new lib.CachedBmp_5();
	this.instance_7.setTransform(57.05,38.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cpEscenario2, new cjs.Rectangle(-58,-79,1022.1,776.8), null);


(lib.cpEscenario1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.btnSiguiente1.on("click",irA2.bind(this));
		
		function irA2(e){
		this.parent.cambiarEscenario (new lib.cpEscenario2());	
			}
		
		var sonido = new createjs.Sound.play("audioMp3", {loop: 0});
		
		sonido.volume = 0.5;
		
		function detenerSonido() {
		    sonido.stop();
		}
		
		function iniciarSonido() {
		    sonido.play();
		}
		
		this.btnStop.addEventListener("click", detenerSonido);
		this.btnSiguiente1.addEventListener("click", detenerSonido);
		this.btnListo.addEventListener("click", iniciarSonido);
		
		
		this.btnMas.addEventListener("click", function(){
			if (sonido.volume < 1){
				sonido.volume += 0.1;
			}
		});
		
		this.btnMenos.addEventListener("click", function(){
			if (sonido.volume > 0){
				sonido.volume -= 0.1;
			}
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_2
	this.btnListo = new lib.btnStop();
	this.btnListo.name = "btnListo";
	this.btnListo.setTransform(492.05,583.05);
	new cjs.ButtonHelper(this.btnListo, 0, 1, 2);

	this.btnStop = new lib.btnListo();
	this.btnStop.name = "btnStop";
	this.btnStop.setTransform(626.9,583.55);
	new cjs.ButtonHelper(this.btnStop, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnStop},{t:this.btnListo}]}).wait(1));

	// codigo
	this.btnMas = new lib.btnMas();
	this.btnMas.name = "btnMas";
	this.btnMas.setTransform(158.6,576.6);
	new cjs.ButtonHelper(this.btnMas, 0, 1, 2);

	this.btnMenos = new lib.btnMenos();
	this.btnMenos.name = "btnMenos";
	this.btnMenos.setTransform(306.75,578.75);
	new cjs.ButtonHelper(this.btnMenos, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnMenos},{t:this.btnMas}]}).wait(1));

	// siguiente
	this.btnSiguiente1 = new lib.btnSiguiente();
	this.btnSiguiente1.name = "btnSiguiente1";
	this.btnSiguiente1.setTransform(810.8,575.6,1,2.7121);
	new cjs.ButtonHelper(this.btnSiguiente1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnSiguiente1).wait(1));

	// Titulo
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(44.05,17.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa_1
	this.instance_1 = new lib.Mapadebits1();
	this.instance_1.setTransform(0,-44,1.5497,1.6148);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EhK/AyAMAAAhj/MCV/AAAMAAABj/g");
	this.shape.setTransform(479,319.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cpEscenario1, new cjs.Rectangle(-1,-44,971.2,702.8), null);


// stage content:
(lib.animales_granja2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var escenario=new lib.cpEscenario1();
		this.addChild(escenario);
		
		this.cambiarEscenario = function (nuevoEscenario){
			this.addChild(nuevoEscenario);
			this.removeChild(escenario);
			escenario=nuevoEscenario;
			
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: 'AE8A96029B071D4C809117F4124C51F0',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/animales_granja2_atlas_1.png?1742675506771", id:"animales_granja2_atlas_1"},
		{src:"images/animales_granja2_atlas_2.png?1742675506771", id:"animales_granja2_atlas_2"},
		{src:"sounds/_006135194_prev2.mp3?1742675506888", id:"_006135194_prev2"},
		{src:"sounds/_008699584_prev.mp3?1742675506888", id:"_008699584_prev"},
		{src:"sounds/_008700019_prevmp3copia.mp3?1742675506888", id:"_008700019_prevmp3copia"},
		{src:"sounds/_008700305_prev8.mp3?1742675506888", id:"_008700305_prev8"},
		{src:"sounds/animals057.mp3?1742675506888", id:"animals057"},
		{src:"sounds/audioMp3.mp3?1742675506888", id:"audioMp3"},
		{src:"sounds/Gallo2.mp3?1742675506888", id:"Gallo2"}
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
an.compositions['AE8A96029B071D4C809117F4124C51F0'] = {
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
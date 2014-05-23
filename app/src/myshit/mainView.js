define(function(require, exports, module){


	var Surface = require('famous/core/Surface');
	var Modifier = require('famous/core/Modifier');
	var Transform = require('famous/core/Transform');	
	var View = require('famous/core/View');
	var HeaderFooterLayout = require("famous/views/HeaderFooterLayout");
	var GridLayout = require("famous/views/GridLayout");
	var Engine = require('famous/core/Engine');
	var GenericSync = require('famous/inputs/GenericSync');
    var MouseSync = require('famous/inputs/MouseSync');
    var TouchSync   = require("famous/inputs/TouchSync");
    var ScrollSync  = require("famous/inputs/ScrollSync");
    var Slider = require('famous/widgets/Slider');
    var Flipper = require('famous/views/Flipper');


	//Constructor
	function MainView(context){

		this.that = this;
		this.MAIN_CONTEXT = context;
		this.surfaces = [];
		this.modifiers = [];
		this.transforms = [];

		this.viewRotationY = 0;

		this.pagesCount = 10;
		this.dragPosition = [0, 0];
		
		var rotationYTransform = Transform.rotateY( this.viewRotationY * (Math.PI / 180) );
		var rotationZTransform = Transform.rotateX( 20 * (Math.PI / 180) );
		this.currentTransform = Transform.multiply(rotationZTransform, rotationYTransform);

	    this.coreModifier = new Modifier({
	        opacity: 1,
	        transform: this.currentTransform,
	        origin: [0.5, 0.5]
	    });

		this.theView = new View();
		this.viewer = this.theView.add(this.coreModifier);

		this.MAIN_CONTEXT.add(this.viewer);

		var theSlider = new Slider({
			label: 'Slide this',
			fillColor: 'rgba(400, 470, 170, 1)'
		});

		//this.MAIN_CONTEXT.add(theSlider);
		this.buildSurfaces();
		this.addListener();
		//this.MAIN_CONTEXT.add(this.coreModifier).add(this.getView());
	};

	MainView.prototype.addListener = function addListener(surfaceObject){

		var sync = new GenericSync(function() {
	        return [0, 0];
	    }, {
	        syncClasses: [MouseSync, TouchSync, ScrollSync]
	    });

        Engine.pipe(sync);

        sync.on('start', function(data) {
            this.dragPosition = [0,0];
            //console.log('started');
        }.bind(this));

        sync.on('update', function(data) {
        	//console.dir(data);
        	this.dragPosition[0] += data.position[0];
        	this.dragPosition[1] += data.position[1]; 

        	this.moveSurfacesForward(data.position[1] / 10);
        	this.tiltSurfacesBy(data.position[0] / 200 );

        	//console.log(this.dragPosition);
        	//console.log(data.position[0]);
        }.bind(this));

        sync.on('end', function(data) {
        	//console.log('end');
        }.bind(this));
	}


	MainView.prototype.buildSurfaces = function buildSurfaces(){

		for(var i = 0; i < this.pagesCount; i ++){

			var surface = new Surface({
		        size: [700, 700],
		        content: '<h1>'+i+'</h1>',
		        properties: {
		            lineHeight: '60px',
		            fontSize: '110px',
		            textAlign: 'center',
		            backgroundColor: "hsl(" + (i * 360 / 8) + ", 100%, 50%)",
		            borderColor: 'black',
		            borderStyle: 'solid',
		            borderWidth: '30px'
		        }
		    });

			var trans = Transform.translate(0, 0, (i * (-400)) );

			var op = 1 / this.pagesCount;

			var centerMod = new Modifier({
		    	origin: [0.5, 0.5],
		    	transform : trans,
		    	opacity: op * i
		    });		   

		   	this.surfaces.push(surface);
		   	this.modifiers.push(centerMod);
		   	this.transforms.push(trans);
		    //this.theView.add(centerMod).add(surface);	
		    this.viewer.add(centerMod).add(surface);
		}

		var that = this;		    
		Engine.on('click', function(){
	    	//that.moveUpOne();
	    });
	};


	MainView.prototype.tiltSurfacesBy = function tiltSurfacesBy( byHowMuch ){

		// var that = this;
		console.log('haaaa')
		this.viewRotationY += byHowMuch;
		var latestTransform = Transform.rotateY(this.viewRotationY  * (Math.PI / 180));
			// var currentOpacity = currentMod.getOpacity();
			// var newOpacity = currentOpacity - 0.4;
		this.coreModifier.setTransform(latestTransform);

		//this.coreModifier.setTransform(Transform.rotate(0, 10, 0));
		//var rotateRadianValue = Transform.getRotateY(currentTransform);

		// this.viewRotationY += byHowMuch;

		// var latestTransform = Transform.rotate(0, this.viewRotationY, 0);

		// this.theView.setTransform(latestTransform);

		// var newRotationY = this.viewRotationY +


		// var rotateDegreeValue = rotateRadianValue / (Math.PI * 180);
		//console.log(currentTransform) ;


		// var latestTransform = Transform.rotate(null, byHowMuch * (Math.PI / 180), null);
		// this.coreModifier.setTransform(latestTransform);

		// this.viewer = this.theView.add(this.coreModifier);
		//console.log(currentTransform);
		//console.dir(this.currentTransform);
		//var theTransform = Transform.translate(this.coreModifier);
	
		// for(var i = 0; i < that.surfaces.length; i ++){

		// 	var theSurface = that.surfaces[i];
		// 	var theTransform = that.transforms[i];
		// 	var currentRotationY = Transform.getTranslate(theTransform)[2];
		// 	var newZ = currentZ - byHowMuch;

		// 	var currentMod = that.modifiers[i];

		// 	var latestTransform = Transform.translate(0, 0, newZ);
		// 	// var currentOpacity = currentMod.getOpacity();
		// 	// var newOpacity = currentOpacity - 0.4;

		// 	currentMod.setTransform(latestTransform);

		// 	that.transforms[i] = latestTransform;
		// }
	};

	MainView.prototype.moveSurfacesForward = function moveUpOne( byHowMuch ){

		var that = this;
	
		for(var i = 0; i < that.surfaces.length; i ++){

			var theSurface = that.surfaces[i];
			var theTransform = that.transforms[i];
			var currentZ = Transform.getTranslate(theTransform)[2];
			var newZ = currentZ - byHowMuch;

			var currentMod = that.modifiers[i];

			var latestTransform = Transform.translate(0, 0, newZ);
			// var currentOpacity = currentMod.getOpacity();
			// var newOpacity = currentOpacity - 0.4;

			currentMod.setTransform(latestTransform);

			that.transforms[i] = latestTransform;
		}
	};


	MainView.prototype.moveUpOne = function moveUpOne(){

		var that = this.that;
		for(var i = 0; i < that.surfaces.length; i ++){

			// var currentOpacity = currentMod.getOpacity();
			// var newOpacity = currentOpacity - 0.4;
			var theSurface = that.surfaces[i];
			var theTransform = that.transforms[i];
			var currentZ = Transform.getTranslate(theTransform)[2];
			var newZ = currentZ + 400;

			/*console.log(currentZ);
			console.log(newZ);
			console.log('-----------');*/

			var currentMod = that.modifiers[i];
			var latestTransform = Transform.translate(0, 0, newZ);
			//clearTimeout(currentTimeout);

			currentMod.setTransform(latestTransform, {
				duration: 300,
				curve: 'easeInOut'
			});

			that.transforms[i] = theTrans;

			// (function(theI, theTrans, theMod){

			// 	setTimeout(function(){
			// 		console.log('the i is '+theI);
			// 		theMod.setTransform(theTrans, {
			// 			duration: 300,
			// 			curve: 'easeInOut'
			// 		});

			// 		that.transforms[theI] = theTrans;


			// 	}, theI * 100)
			// })(i, latestTransform, currentMod);	
		}
	};

	MainView.prototype.getView = function getSurface(){
		return this.theView;
	}

	MainView.prototype.getModifier1 = function getModifier1(){
		return this.outlineModifier1;
	}

	module.exports = MainView;



	// this.outline = new Surface({
	//     size: [ window.innerWidth * 0.7, (window.innerHeight * 0.7)],
	//     content: '<h1>Devtank Portfolio</h1>',
	//     properties: {
	//         lineHeight: '250px',
	//         textAlign: 'center',
	//         backgroundColor: '#555555'
	//     }
	// });

	// this.outlineModifier1 = new Modifier({
	//     origin: [0.5, 0.5]
	// });


	// this.startRotating = function(){
	// 	// that.outlineModifier1.setTransform(Transform.rotateY(90), {
	//  //        duration: 2000,
	//  //        curve: 'easeOut'
	//  //    });

	//     that.outlineModifier1.setTransform(Transform.translate(0, 0, 3000), {
	//         duration: 3000,
	//         curve: 'easeIn'
	//     });
	// }

	// this.outline.on('click', this.startRotating);

	// function() {

	//     outlineModifier1.halt();
	//     outline.setContent('halted <img width="200" src="content/images/famous_symbol_transparent.png"/>');
	//     outlineModifier1.setTransform(
	//         Transform.translate(0, 0),
	//         { 
	//             duration : 2000
	//         }
	//     );
	// }




	 //    var grid = new GridLayout({
		// 	dimensions: [1,1]
		// });

		// var views = [];
		// grid.sequenceFrom(views);


		// for(var i = 0; i < 8; i++) {
		//   var view = new View();
		  
		//   var centerModifier = new Modifier({
		//     origin: [0.5, 0.5]
		//   });
		  
		//   var surface = new Surface({
		//     content: section + ' ' + (i + 1),
		//     size: [100, 100],
		//     classes: ['red-bg'],
		//     properties: {
		//       color: 'white',
		//       textAlign: 'center',
		//       lineHeight: '100px'
		//     },
		// });
		  
		// view.add(centerModifier).add(surface);
		// views.push(view);


            /*var edge = window.innerWidth - (this.pageSurface.getSize()[0])

            if (this.touchJustStarted) {
                if (data.position >= 0 && data.velocity >= 0) {
                    this.rotatePrevious = true;
                } else {
                    this.rotatePrevious = false;
                }
                this.touchJustStarted = false;
            }

            if (!this.rotatePrevious) {
                if (data.position > edge) {
                    this.position = edge;
                } else if (data.position >= 0) {

                    this.position = 0;

                } else {
                    this.position = data.position;
                }

                // Converts position in pixels to degrees and then to radians. 
                var deg = (60 * Math.abs(this.position)) / window.innerWidth;
                var radians = -Math.floor(deg) * (Math.PI / 180); // Negative to flip forward
                this.rotate(radians);

            } else { // Previous Page Rotate
                this.position = data.position;

                var prevDeg = 120 - (180 * Math.abs(-data.position)) / window.innerWidth;
                var prevRadians = Math.floor(prevDeg) * (Math.PI / 180); // Negative to flip forward
                this._eventOutput.emit('rotatePrevious', {
                    radians: prevRadians
                });
            }*/


		// GenericSync.register(MouseSync);
		// var sync = new GenericSync(function() {
		// return this.position;
		// }.bind(this), {
		// direction: GenericSync.DIRECTION_X
		// })



      /*if (this.rotatePrevious) {
                this._eventOutput.emit('touchEndPrevious', data);
            } else {
                if (data.velocity.toFixed(2) < 0 && !this.options.last) {
                    this.turn();
                    this._eventOutput.emit('nextPage');
                } else {
                    this.turnBack();
                }
            }

            this.position = 0;*/
});
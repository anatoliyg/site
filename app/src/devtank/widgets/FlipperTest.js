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
    var Utility = require('famous/utilities/Utility');
    // var CubesView = require('widgets/CubesView');
    // var Cube = require('widgets/Cube');
    


	function FlipperTest(context){

		//var view = new View();


	/*	var frontSufrace = new Surface({
			size: [400, 400],
			content: '<h1>Front</h1>',
			properties: {
				backgroundColor: 'red'
			}
		});

		var backSurface = new Surface({
			size: [400, 400],
			content: '<h1>Back</h1>',
			properties: {
				backgroundColor: 'blue'
			}
		});


		var justSurface = new Surface({
			size: [400, 400],
			content: '<h1>test</h1>',
			properties: {
				backgroundColor: 'yellow'
			}
		})

		var justSurfaceMod = new Modifier({
			transform: Transform.translate(0, 0, 0),
			//origin: [0.5, 0.5],
			opacity: 1
		});

		var theFlipper = new Flipper({
	        transition: true,
	        cull: false,
	        direction: Utility.Direction.Y
	    });

		theFlipper.setFront(frontSufrace);
		theFlipper.setBack(backSurface);*/



		var mainModifier = new Modifier({
			opacity: 1,
			transform: Transform.multiply( Transform.rotateY( 0 * (Math.PI / 180) ), Transform.rotateX( 0 * (Math.PI / 180) ) ),
			origin: [0.5, 0.5],
			size: [undefined, undefined]
		});




		/*frontSufrace.on('click', function(){
			theFlipper.flip();
		});

		backSurface.on('click', function(){
			theFlipper.flip();
		})*/

		// var cubesView = new CubesView();
		// cubesView.init();

		context.add(mainModifier).add(cubesView);

		//context.add(mainModifier).add(theFlipper);
		//context.add(justSurfaceMod).add(justSurface);


	}

	FlipperTest.prototype.init = function() {
		// body...
		//alert('yo bro');
	};

	FlipperTest.prototype.addSurfaces = function() {
		// body...
	};
	FlipperTest.prototype.addListeners = function(first_argument) {
		// body...
	};

	module.exports = FlipperTest;
});
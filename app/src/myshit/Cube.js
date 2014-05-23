define(function(require, exports, module){

	var Surface         	= require('famous/core/Surface');
    var Modifier        	= require('famous/core/Modifier');
    var Transform       	= require('famous/core/Transform');
    var View            	= require('famous/core/View');
    var ImageSurface		= require('famous/surfaces/ImageSurface');
    var ContainerSurface	= require('famous/surfaces/ContainerSurface');
	var Easing				= require('famous/transitions/Easing');

	function Cube(){

		View.apply(this, arguments);
		this.init();
	};

	Cube.prototype = Object.create(View.prototype);
	Cube.prototype.constructor = Cube;


	Cube.prototype.init = function(arg) {

		this.theWidth = 300;

		var cubeStructure = {
			sides: [
				{
					translate: [0, 0, this.theWidth/2],
					rotation: [0, 0, 0]
				},
				{
					translate: [0, 0, 0],
					rotation: [0, 0, 0]
				}
				// {
				// 	translate: [0, 0, -this.theWidth/2],
				// 	rotation: [0, 0, 0]
				// },
				// {
				// 	translate: [this.theWidth/2, 0, 0],
				// 	rotation: [0, -90 * (Math.PI/ 180), 0]
				// },
				// {
				// 	translate: [0, this.theWidth/2, 0],
				// 	rotation: [90 * (Math.PI/ 180), 0, 0]
				// },
				// {
				// 	translate: [0, this.theWidth/2, 0],
				// 	rotation: [-90 * (Math.PI/ 180), 0, 0]
				// }
			]
		};

		//front

		//console.log('length is '+cubeStructure.sides.length);

		for(var i = 0; i < cubeStructure.sides.length ; i ++){

			var currentSide = cubeStructure.sides[i];

			//apply(null, [0, 0, 0]
			var translate = Transform.translate.apply(null, currentSide.translate);
			var rotate = Transform.rotate.apply(null,  currentSide.rotation);

			var frontMod = new Modifier({
				transform: Transform.multiply(translate, rotate),
				origin: [0.5, 0.5],
				opacity: 0.8
			});

			var front = new Surface({
				size: [this.theWidth, this.theWidth],
				content: '<h1>Test</h1>',
				properties:{
					backgroundColor: "hsl(" + (i * 360 / 8) + ", 100%, 50%)"

				}
			});

			this.add(frontMod).add(front);
		}

		
	};

	Cube.prototype.flip = function(arg) {
		// body...
	};

	module.exports = Cube;


})
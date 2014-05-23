define(function(require, exports, module){

	var Surface         	= require('famous/core/Surface');
    var Modifier        	= require('famous/core/Modifier');
    var Transform       	= require('famous/core/Transform');
    var View            	= require('famous/core/View');
    var ImageSurface		= require('famous/surfaces/ImageSurface');
    var ContainerSurface	= require('famous/surfaces/ContainerSurface');
	var Easing				= require('famous/transitions/Easing');
	var Cube 				= require('myshit/Cube');
  


	function CubesView(){
		View.apply(this, arguments);
	};

	CubesView.prototype = Object.create(View.prototype);
	CubesView.prototype.constructor = CubesView;

	CubesView.prototype.init = function(arg) {
		// body...

		for(var i = 0; i < 1; i ++){

			var mod = new Modifier({
				transform: Transform.rotateY( 100 * (Math.PI / 180)  ),
				origin: [0.5, 0.5, 0.5],
				opacity: 1
				//Transform.multiply( Transform.rotateY( (Math.random() * 180) * (Math.PI / 180) ), Transform.rotateX( (Math.random() * 180) * (Math.PI / 180) ) ),
				
			});

			var cube = new Cube();

			//this.add(mod).add(cube);


			var surf = new Surface({
				size: [400, 400],
				context: 'test surf',
				properties: {
					backgroundColor: 'black'
				}
			});

			this.add(mod).add(cube);
		}


	};

	

	module.exports = CubesView;


});
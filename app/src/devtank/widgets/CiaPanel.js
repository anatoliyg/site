define(function(require, exports, module){

	var Surface         	= require('famous/core/Surface');
    var Modifier        	= require('famous/core/Modifier');
    var Transform       	= require('famous/core/Transform');
    var View            	= require('famous/core/View');
    var ImageSurface		= require('famous/surfaces/ImageSurface');
    var ContainerSurface	= require('famous/surfaces/ContainerSurface');
	var Easing				= require('famous/transitions/Easing');
	var GridLayout 			= require("famous/views/GridLayout");
	var CanvasSurface 		= require("famous/surfaces/CanvasSurface");
	var StateModifier 		= require('famous/modifiers/StateModifier');




	function CiaPanel(width, height){

		//this.mainContext = context;
		this.bgModifier = null;
		this.bgSurface = null;
		this.theView = null;


		this.width = width;
		this.height = height;

		this.ninerRules = [
			{
				name: 'tl',
				width: 165,
				height: 164,
				origin: [0, 0]
			},
			{
				name: 'tc',
				width: 234,
				height: 164,
				origin: [0.5, 0]
			},
			{
				name: 'tr',
				width: 170,
				height: 164,
				origin: [1, 0]
			},
			{
				name: 'mr',
				width: 170,
				height: 66,
				origin: [1, 0.5]
			},
			{
				name: 'br',
				width: 170,
				height: 177,
				origin: [1, 1]
			},
			{
				name: 'bc',
				width: 234,
				height: 177,
				origin: [0.5, 1]
			},
			{
				name: 'bl',
				width: 165,
				height: 177,
				origin: [0, 1]
			},
			{
				name: 'ml',
				width: 165,
				height: 66,
				origin: [0, 0.5]
			}
		];

		this.init();
	};



	CiaPanel.prototype.init = function(arg) {
		//this.addBackground();

		this.theView = new View();
		this.sizeModifier = new StateModifier({
		  size: [this.width, this.height]//,
		  //transform: Transform.translate(0, 0, Math.random() * -1000 )
		});

		this.originMod = new StateModifier({
			origin: [0.5, 0.5]
		});

		this.rotationModifier = new StateModifier({
			transform: Transform.rotateY(30 * (Math.PI / 180))
		})

		this.sizeNode = this.theView.add(this.sizeModifier).add(this.rotationModifier).add(this.originMod);
		this.addBackground();
		this.buildNiner();
		this.addArborgraph();

		this.rotationModifier.setTransform(
		  	Transform.rotateY(0 * (Math.PI / 180)),
	  		{ 
	  			duration : 6000, 
	  			curve: Easing.inOutBack
	  		}
		);
	};

	CiaPanel.prototype.addArborgraph = function() {
		// body...
		

	};


	CiaPanel.prototype.buildNiner = function() {

		for(var i = 0; i < this.ninerRules.length; i ++){

			var theW;
			var theH;

			if(i === 1 || i === 5){
				theW = ( this.width - (this.ninerRules[0].width * 2) ) - 100;
				theH = this.ninerRules[i].height;
			}

			else if( i === 3 || i === 7){
				theW = this.ninerRules[i].width;
				theH = (this.height - (this.ninerRules[0].height * 2) ) - 100;

			}
			else{
				theW = this.ninerRules[i].width;
				theH = this.ninerRules[i].height;
			}

			var img = new ImageSurface({
				size: [theW, theH]
			});

			img.setContent('images/'+this.ninerRules[i].name+'.png');

			var mod = new Modifier({
				//transform: Transform.translate(0, 0, 0),
				origin: [this.ninerRules[i].origin[0], this.ninerRules[i].origin[1]],
				opacity: 1
			});
			//this.sizeNode.add(mod).add(img);
		}
		
	};


	CiaPanel.prototype.addBackground = function() {
		// body...
		this.bgSurface = new Surface({

	        size: [540, 330],
	        content: '',
	        properties: {
	            backgroundColor: '#0f8d8d',
	            lineHeight: '400px',
	            textAlign: 'center',
	            fontSize: '40px'
	        }
		});

		this.bgModifier = new Modifier({
			opacity: 0.7,
			transform: Transform.translate(0, 0, -100),
			origin: [0.5, 0.5]

		});


		this.bgSurface2 = new Surface({

	        size: [580, 330],
	        content: '',
	        properties: {
	            backgroundColor: '#0f8d8d',
	            lineHeight: '400px',
	            textAlign: 'center',
	            fontSize: '40px'
	        }
		});

		this.bgModifier2 = new Modifier({
			opacity: 0.7,
			transform: Transform.translate(0, 0, -200),
			origin: [0.5, 0.5]

		});

		this.sizeNode.add(this.bgModifier).add(this.bgSurface);
		this.sizeNode.add(this.bgModifier2).add(this.bgSurface2);
	};

	CiaPanel.prototype.getPanel = function() {

		console.log(this.theView.getSize());
		return this.theView;
	};

	module.exports = CiaPanel;

})
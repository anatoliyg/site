//  arborMod.setOpacity(
    //     0,
    //     { 
    //         duration : 30000, 
    //         curve: Easing.inOutBack
    //     }
    // );



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
}




		


		var canvas = new CanvasSurface({
				size: [800, 600],
				classes: ['theCanvas']
			});

		this.sizeNode.add(mod).add(canvas);

		//console.log( $('.theCanvas') );


		setTimeout(function(){
			var sys = arbor.ParticleSystem(1000, 800, 0.5); // create the system with sensible repulsion/stiffness/friction
		    sys.renderer = DeadSimpleRenderer(); // our newly created renderer will have its .init() method called shortly by sys...

		    // pick a random datafile and load it
		    var allbirds = ["bk42w74", "bk43w73", "bk70bk62", "bk95bk3", "g81w58", "g83w57", "pk60gr7", "r15bl29", "r17pu46"];
		    var alltrans = "frm";
		    var randBird = allbirds[Math.floor(Math.random()*allbirds.length)] + "-" + alltrans[Math.floor(Math.random()*alltrans.length)] + ".json";

		    // load the data into the particle system as is (since it's already formatted correctly for .grafting)
		    var data = $.getJSON("birds/"+randBird,function(data){
		      sys.graft({nodes:data.nodes, edges:data.edges})
		    })

		}, 0);
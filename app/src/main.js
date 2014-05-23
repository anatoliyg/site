/*globals define*/
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine              = require('famous/core/Engine');
    var Surface             = require('famous/core/Surface');
    var Modifier            = require('famous/core/Modifier');
    var Transform           = require('famous/core/Transform');
    //var MainView = require('widgets/mainView');
    var CiaPanel            = require('widgets/CiaPanel');
    var FlipperTest         = require('widgets/FlipperTest');
    var GenericSync         = require('famous/inputs/GenericSync');
    var MouseSync           = require('famous/inputs/MouseSync');
    var TouchSync           = require("famous/inputs/TouchSync");
    var ScrollSync          = require("famous/inputs/ScrollSync");
    var ArborGraph          = require('widgets/ArborGraph');
    var StateModifier       = require('famous/modifiers/StateModifier');
    var Easing              = require('famous/transitions/Easing');
    var SpinningSphere      = require('widgets/SpinningSphere');

    // create the main context
    var mainContext = Engine.createContext();
    mainContext.setPerspective(1000);


    ///CIA PANEL TEST
    /*
    var ciaPanel = new CiaPanel(800, 600);
    

    
    coreNode.add(ciaPanel.getPanel());
    */

    var coreModifier = new Modifier({
        opacity: 1,
        origin: [0.5, 0.5]
    });

    var coreNode = mainContext.add(coreModifier);


    var shpereMod = new StateModifier({
        origin: [0.5, 0.5],
        opacity: 1, 
        transform: Transform.translate(0, 0, 0)
    });

    var sphere = new SpinningSphere([900, 520]);
    coreNode.add(shpereMod).add(sphere);

    //  arborMod.setOpacity(
    //     0,
    //     { 
    //         duration : 30000, 
    //         curve: Easing.inOutBack
    //     }
    // );



    sphere.on('click', function(){

        arborMod.setTransform(
            Transform.translate(0, 0, 0),
            { 
                duration : 3000, 
                curve: Easing.inOutBack
            }
            
            )
    })


    // var arborMod2 = new Modifier({
    //     origin: [1, 1],
    //     opacity: 1

    // });

    //var arborGraph2 = new ArborGraph([300, 300], 'graph2');
    //coreNode.add(arborMod2).add(arborGraph2);



   
 
    //ciaPanel.init();

    //var mainView = new MainView(mainContext);
    //var flipperTest = new FlipperTest(mainContext);
    //flipperTest.init();


    //mainContext.add(coreModifier).add(ciaPanel);


  /*  var coreModifier = new Modifier({
        opacity: 1,
        //transform: this.currentTransform,
        origin: [0.5, 0.5]
    });

    var surface = new Surface({
        size: [500, 500],
        content: '<h1>select one</h1>',
        properties: {
            backgroundColor: 'red',
            borderRadius: '250px',
            lineHeight: '400px',
            textAlign: 'center',
            fontSize: '40px'
        }

    });



    
    var dragPosition = [0, 0];

    var sync = new GenericSync(function() {
        return [0, 0];
    }, {
        syncClasses: [MouseSync, TouchSync, ScrollSync]
    });

    Engine.pipe(sync);

    sync.on('start', function(data) {
        dragPosition = [0,0];
        //console.log('started');
    }.bind(this));

    sync.on('update', function(data) {
        //console.dir(data);
        dragPosition[0] += data.position[0];
        dragPosition[1] += data.position[1]; 
        
        rotateBy(data.position[1] / 10);
        //this.tiltSurfacesBy(data.position[0] / 200 );
        //console.log(this.dragPosition);
        //console.log(data.position[0]);
    }.bind(this));

    sync.on('end', function(data) {
        //console.log('end');
    }.bind(this));

    function rotateBy(deg){


        console.log('rotating by '+dragPosition[1])
    }
*/





   // module.exports = FlipperTest;
});

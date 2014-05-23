define(function(i,e,t){function n(i,e){this.bgModifier=null,this.bgSurface=null,this.theView=null,this.width=i,this.height=e,this.ninerRules=[{name:"tl",width:165,height:164,origin:[0,0]},{name:"tc",width:234,height:164,origin:[.5,0]},{name:"tr",width:170,height:164,origin:[1,0]},{name:"mr",width:170,height:66,origin:[1,.5]},{name:"br",width:170,height:177,origin:[1,1]},{name:"bc",width:234,height:177,origin:[.5,1]},{name:"bl",width:165,height:177,origin:[0,1]},{name:"ml",width:165,height:66,origin:[0,.5]}],this.init()}var r=i("famous/core/Surface"),o=i("famous/core/Modifier"),s=i("famous/core/Transform"),h=i("famous/core/View"),a=i("famous/surfaces/ImageSurface"),d=i("famous/surfaces/ContainerSurface"),g=i("famous/transitions/Easing"),u=i("famous/views/GridLayout"),f=i("famous/surfaces/CanvasSurface"),c=i("famous/modifiers/StateModifier");n.prototype.init=function(i){this.theView=new h,this.sizeModifier=new c({size:[this.width,this.height]}),this.originMod=new c({origin:[.5,.5]}),this.rotationModifier=new c({transform:s.rotateY(30*(Math.PI/180))}),this.sizeNode=this.theView.add(this.sizeModifier).add(this.rotationModifier).add(this.originMod),this.addBackground(),this.buildNiner(),this.addArborgraph(),this.rotationModifier.setTransform(s.rotateY(0*(Math.PI/180)),{duration:6e3,curve:g.inOutBack})},n.prototype.addArborgraph=function(){},n.prototype.buildNiner=function(){for(var i=0;i<this.ninerRules.length;i++){var e,t;1===i||5===i?(e=this.width-2*this.ninerRules[0].width-100,t=this.ninerRules[i].height):3===i||7===i?(e=this.ninerRules[i].width,t=this.height-2*this.ninerRules[0].height-100):(e=this.ninerRules[i].width,t=this.ninerRules[i].height);var n=new a({size:[e,t]});n.setContent("images/"+this.ninerRules[i].name+".png");var r=new o({origin:[this.ninerRules[i].origin[0],this.ninerRules[i].origin[1]],opacity:1})}},n.prototype.addBackground=function(){this.bgSurface=new r({size:[540,330],content:"",properties:{backgroundColor:"#0f8d8d",lineHeight:"400px",textAlign:"center",fontSize:"40px"}}),this.bgModifier=new o({opacity:.7,transform:s.translate(0,0,-100),origin:[.5,.5]}),this.bgSurface2=new r({size:[580,330],content:"",properties:{backgroundColor:"#0f8d8d",lineHeight:"400px",textAlign:"center",fontSize:"40px"}}),this.bgModifier2=new o({opacity:.7,transform:s.translate(0,0,-200),origin:[.5,.5]}),this.sizeNode.add(this.bgModifier).add(this.bgSurface),this.sizeNode.add(this.bgModifier2).add(this.bgSurface2)},n.prototype.getPanel=function(){return console.log(this.theView.getSize()),this.theView},t.exports=n});
define(function(e,t,r){function i(e,t){this.defaultSize=e,this.className=t,o.apply(this,arguments),this.setSize(this.defaultSize),this.init()}var a=e("arbor/arbor"),o=e("famous/surfaces/CanvasSurface"),n=e("famous/modifiers/StateModifier"),s=e("famous/core/View");i.prototype=Object.create(o.prototype),i.prototype.constructor=i,i.prototype.init=function(){var e=this,t=function(t){var t=$("canvas.famous-surface")[0],r=e.getContext("2d"),i=null;t.setAttribute("width",""+e.defaultSize[0]),t.setAttribute("height",""+e.defaultSize[1]);var a=t.width,o=t.height,n={init:function(e){i=e,i.screenSize(a,o),i.screenPadding(30)},redraw:function(){r.clearRect(0,0,a,o),i.eachEdge(function(e,t,i){r.strokeStyle="rgba(255,255,255, .333)",r.lineWidth=1+4*e.data.weight,r.beginPath(),r.moveTo(t.x,t.y),r.lineTo(i.x,i.y),r.stroke()}),i.eachNode(function(e,t){var i=10;r.fillStyle="white",r.fillRect(t.x-i/2,t.y-i/2,i,i)})}};return n};setTimeout(function(){var e=arbor.ParticleSystem(2e3,800,1);e.renderer=t();var r=["bk42w74","bk43w73","bk70bk62","bk95bk3","g81w58","g83w57","pk60gr7","r15bl29","r17pu46"],i="frm",a=r[Math.floor(Math.random()*r.length)]+"-"+i[Math.floor(Math.random()*i.length)]+".json",o=$.getJSON("birds/"+a,function(t){e.graft({nodes:t.nodes,edges:t.edges})})},1e3)},r.exports=i});
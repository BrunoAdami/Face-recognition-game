(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n.p+"static/media/face.ab41af34.png"},26:function(e,t,n){e.exports=n(71)},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(10),c=n.n(i),r=(n(31),n(19)),l=n(20),s=n(24),u=n(21),m=n(25),p=function(e){return o.a.createElement("div",{className:"f1 center",style:{padding:40,color:"white"}},"Face Detection Game")},g=n(22),h=n.n(g),d=(n(32),n(23)),b=n.n(d),f=function(){return o.a.createElement("div",{className:"center ma4 mt0"},o.a.createElement(h.a,{className:"Tilt",options:{max:25},style:{height:150,width:150}},o.a.createElement("img",{style:{paddingTop:"5px"},src:b.a,alt:"FaceRecognition"})))},w=function(e){return o.a.createElement("div",null,o.a.createElement("p",{className:"f3 center"},"The system will recognize who is the funniest person in your picture!"),o.a.createElement("p",{className:"f3 center"},"Just insert an Url to your image below."),o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:"form center pa4 br3 shadow-5 "},o.a.createElement("input",{className:"f4 pa2 w-70 center",type:"text",onChange:e.onInputChange}),o.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:e.onButtonSubmit},"Analize"))))},E=(n(33),function(e){return o.a.createElement("div",{className:"center ma"},o.a.createElement("div",{className:"absolute mt2"},o.a.createElement("img",{id:"inputimage",alt:"",src:e.imageUrl,width:"500px",height:"auto"}),o.a.createElement("div",{className:"bounding-box",style:{top:e.box.topRow,right:e.box.rightCol,bottom:e.box.bottomRow,left:e.box.leftCol}})))}),v=(n(34),n(11)),x=n.n(v),N=new x.a.App({apiKey:"53a3c7a0e5df491db39492e3cd6c68c2"}),y=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).generateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputimage"),a=Number(n.width),o=Number(n.height);return console.log(a,o),{leftCol:t.left_col*a,topRow:t.top_row*o,rightCol:a-t.right_col*a,bottomRow:o-t.bottom_row*o}},e.generateBox=function(t){console.log(t),e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),N.models.predict(x.a.FACE_DETECT_MODEL,e.state.input).then(function(t){return e.generateBox(e.generateFaceLocation(t))}).catch(function(e){return console.log(e)})},e.state={input:"",imageUrl:"",box:{},route:"signin"},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p,null),o.a.createElement(f,null),o.a.createElement(w,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),o.a.createElement(E,{box:this.state.box,imageUrl:this.state.imageUrl}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(70);c.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.f936de48.chunk.js.map
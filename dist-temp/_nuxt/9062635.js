(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{221:function(t,n,e){var content=e(228);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(33).default)("6f9a68aa",content,!0,{sourceMap:!1})},227:function(t,n,e){"use strict";e(221)},228:function(t,n,e){var o=e(32),r=e(62),l=e(63),c=e(64),d=e(65),f=e(66),h=e(67),v=e(68),m=e(237),y=o((function(i){return i[1]})),w=r(l),x=r(c),_=r(d),k=r(f),$=r(h),S=r(v),C=r(m);y.push([t.i,'#app{\n  -webkit-font-smoothing:antialiased;\n  -moz-osx-font-smoothing:grayscale;\n  text-align:center;\n  font-family:"Radikal";\n  font-weight:400;\n  width:1080px;\n  height:5760px;\n  margin:auto;\n  position:relative;\n  background-color:#191e42;\n  overflow:hidden;\n  font-size:25px\n}\n.fade-out-enter-active,.fade-out-leave-active{\n  transition:all 1s ease\n}\n.fade-out-enter,.fade-out-leave-to{\n  opacity:0\n}\n.fadeY-enter-active{\n  transition:all 1s ease\n}\n.fadeY-leave-active{\n  transition:all .3s ease\n}\n.fadeY-enter,.fadeY-leave-to{\n  opacity:0;\n  transform:translateY(50px)\n}\n.year{\n  font-size:4.5rem!important\n}\n.gradientOverlay{\n  background:#191e42;\n  background:linear-gradient(180deg,rgba(25,30,66,0),#191e42);\n  position:absolute;\n  bottom:0;\n  left:0;\n  width:100%;\n  z-index:9\n}\n.jump{\n  position:fixed;\n  bottom:0;\n  right:0;\n  height:40px;\n  width:100px;\n  z-index:9999;\n  background:#191e42;\n  font-size:10px;\n  color:#fff\n}\n.videoMode{\n  position:relative;\n  height:5760px;\n  width:1080px;\n  display:block\n}\n.videoMode .video{\n  -o-object-fit:cover;\n     object-fit:cover;\n  position:absolute;\n  margin:auto;\n  top:0;\n  bottom:0;\n  left:0;\n  right:0;\n  height:5760px;\n  width:1080px\n}\n@font-face{\n  font-family:"Radikal";\n\n  src:url('+w+') format("woff2"),url('+x+') format("woff");\n\n  font-weight:400;\n\n  font-style:normal;\n\n  font-display:swap\n}\n@font-face{\n  font-family:"Radikal";\n\n  src:url('+_+') format("woff2"),url('+k+') format("woff");\n\n  font-weight:700;\n\n  font-style:normal;\n\n  font-display:swap\n}\n@font-face{\n  font-family:"Radikal";\n\n  src:url('+$+') format("woff2"),url('+S+') format("woff");\n\n  font-weight:300;\n\n  font-style:normal;\n\n  font-display:swap\n}\n.interactive{\n  height:1920px!important;\n  max-height:1920px!important;\n  width:100%;\n  display:block;\n  position:relative;\n  z-index:1\n}\n.interactive__inner{\n  margin-top:100px;\n  height:100%;\n  padding:0 100px;\n  display:block;\n  height:calc(100% - 200px);\n  overflow-y:auto;\n  overflow-x:hidden\n}\n.storyContent{\n  display:block;\n  width:100%;\n  height:100%;\n  position:relative\n}\n.buttonShape{\n  -webkit-clip-path:polygon(0 4%,100% 0,91% 45%,1% 36%);\n          clip-path:polygon(0 4%,100% 0,91% 45%,1% 36%);\n  background-color:#191e42;\n  width:511px;\n  height:400px;\n  position:absolute;\n  top:0;\n  bottom:0;\n  left:0;\n  right:0;\n  margin:auto;\n  color:#eae650;\n  padding:35px 0;\n  font-size:3rem;\n  vertical-align:middle\n}\n.buttonShape span{\n  vertical-align:sub;\n  margin-right:50px\n}\n.buttonShape .arrow{\n  border:6px solid #eae650;\n  height:100px;\n  width:100px;\n  border-radius:100%;\n  display:inline-block;\n  position:relative;\n  vertical-align:middle\n}\n.buttonShape .arrow svg{\n  position:absolute;\n  top:0;\n  bottom:0;\n  left:0;\n  right:0;\n  margin:auto\n}\n.buttonShape .arrow svg path{\n  fill:#eae650\n}\n.card{\n  position:relative;\n  background-color:#000;\n  display:block;\n  width:100%;\n  height:320px;\n  margin-bottom:40px;\n  background-size:cover;\n  background-repeat:no-repeat\n}\n.card:last-of-type{\n  margin-bottom:200px\n}\n.card span{\n  position:absolute;\n  left:20px;\n  bottom:20px;\n  max-width:50%\n}\n.card__next{\n  width:100px;\n  height:89px;\n  position:absolute;\n  bottom:0;\n  right:0;\n  background-image:url('+C+");\n  background-repeat:no-repeat\n}\n.card__nexta{\n  fill:#5ec4e1\n}\n.card__nextb{\n  fill:#191e42\n}",""]),t.exports=y},232:function(t,n,e){"use strict";e.r(n);var o=e(18),r=(e(40),e(39),{name:"interactive",props:["primaryColour"],data:function(){return{storyKey:0,story:0,ready:!1}},methods:{loadStories:function(){var t,n=this;this.$gsap.set(".fadeUp, .animateTitle",(t={scale:1.5,perspective:900,rotationX:-90,y:0},Object(o.a)(t,"y",-500),Object(o.a)(t,"autoAlpha",0),Object(o.a)(t,"transformStyle","preserve-3d"),t)),this.$gsap.set(".interactive__inner",{perspective:900}),this.$gsap.to(".fadeUp, .animateTitle",.7,{scale:1,rotationX:0,y:0,autoAlpha:1,stagger:.2,ease:"back.out(1.7)"}),this.$gsap.from(".fadeUp span",.7,{x:100,autoAlpha:0,stagger:.2,delay:1,ease:"back.out(1.7)"}),this.$gsap.from(".gradientOverlay",{x:0,autoAlpha:0,delay:.5}),setTimeout((function(){n.ready=!0}),2e3)},openStory:function(t){this.storyKey++,this.$store.commit("setStory",t)}},watch:{"$store.state.resetKey":function(){this.$gsap.to(".fadeUp, .animateTitle",{y:500,autoAlpha:0,stagger:.1})},"$store.state.interactiveKey":function(){var t=this;this.ready=!1,this.$gsap.set(".fadeUp, .animateTitle",{y:300,autoAlpha:0}),setTimeout((function(){t.loadStories()}),700)}},mounted:function(){},computed:{active:function(){return this.loadStories.isActive()},storys:function(){return this.$store.getters[this.$nuxt.$route.name]},view:{get:function(){return this.$store.state.storySelect},set:function(t){var n=this;this.$store.commit("setView",t),"storySelect"==t&&this.$nextTick((function(){n.loadStories()}))}}}}),l=(e(227),e(38)),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("section",{staticClass:"interactive"},["main"==t.$store.state.view?o("div",{staticClass:"interactive__inner"},[o("div",{directives:[{name:"gsap",rawName:"v-gsap.from",value:{y:50,duration:1,autoAlpha:0},expression:"{y: 50 ,duration: 1, autoAlpha: 0}",modifiers:{from:!0}}],staticClass:"buttonShape",on:{click:function(n){t.view="storySelect"}}},[o("span",[t._v("Tap to start")]),t._v(" "),o("div",{staticClass:"arrow"},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"39.903",height:"30.505",viewBox:"0 0 39.903 30.505"}},[o("defs"),t._v(" "),o("path",{staticClass:"a",attrs:{d:"M47.273,33.649,34.2,46.775a2.1,2.1,0,0,1-2.94-2.993l9.5-9.5H10.1a2.1,2.1,0,0,1,0-4.2H40.763l-9.556-9.556A2.116,2.116,0,1,1,34.2,17.53L47.273,30.656A2.092,2.092,0,0,1,47.273,33.649Z",transform:"translate(-8 -16.9)"}})])])])]):t._e(),t._v(" "),"storySelect"==t.$store.state.view&&null==t.$store.state.story?o("span",{staticClass:"gradientOverlay",staticStyle:{height:"200px",bottom:"190px"}}):t._e(),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:"storySelect"==t.$store.state.view&&null==t.$store.state.story,expression:"$store.state.view == 'storySelect' && $store.state.story == null"}],staticClass:"interactive__inner",style:t.ready?null:"pointer-events: none"},[t._l(t.storys,(function(section,i){return o("div",{key:i,staticClass:"card fadeUp text-left p-8",style:{backgroundImage:"url("+e(224)("./"+section.thumb)+")"},on:{click:function(n){return t.openStory(i)}}},[o("span",{staticClass:"text-5xl text-white",on:{click:function(n){return t.openStory(i)}}},[t._v(t._s(section.title))]),t._v(" "),o("button",{staticClass:"card__next"}),t._v(" "),o("svg",{staticClass:"card__next",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"103",height:"90.305",viewBox:"0 0 103 90.305"}},[o("defs"),t._v(" "),o("path",{attrs:{fill:t.primaryColour,d:"M-1806.8,1863.326l103-90.3v90.3Z",transform:"translate(1806.797 -1773.021)"}}),t._v(" "),o("path",{staticClass:"b",attrs:{d:"M32.887,27.514,24.6,35.832a1.329,1.329,0,0,1-1.863-1.9l6.022-6.022H9.331a1.331,1.331,0,1,1,0-2.662H28.761L22.706,19.2a1.341,1.341,0,0,1,1.9-1.9l8.285,8.318A1.326,1.326,0,0,1,32.887,27.514Z",transform:"translate(50.797 37.079)"}})])])})),t._v(" "),o("div",{staticClass:"card",staticStyle:{visibility:"hidden",height:"100px"}})],2),t._v(" "),"storySelect"==t.$store.state.view&&null!==t.$store.state.story?o("story",{key:t.storyKey,staticClass:"storyContent",attrs:{primaryColour:t.primaryColour}}):t._e()],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Story:e(239).default})}}]);
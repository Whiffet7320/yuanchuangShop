(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/qrcode/qrcode"],{5777:function(e,t,a){"use strict";a.r(t);var n=a("a509"),s=a.n(n);for(var c in n)"default"!==c&&function(e){a.d(t,e,(function(){return n[e]}))}(c);t["default"]=s.a},"5c66":function(e,t,a){"use strict";(function(e){a("0429");n(a("66fd"));var t=n(a("f7e0"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("543d")["createPage"])},"5e5e":function(e,t,a){},9843:function(e,t,a){"use strict";var n=a("5e5e"),s=a.n(n);s.a},a509:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a("a34a")),s=c(a("7b80"));function c(e){return e&&e.__esModule?e:{default:e}}function o(e,t,a,n,s,c,o){try{var r=e[c](o),i=r.value}catch(u){return void a(u)}r.done?t(i):Promise.resolve(i).then(n,s)}function r(e){return function(){var t=this,a=arguments;return new Promise((function(n,s){var c=e.apply(t,a);function r(e){o(c,n,s,r,i,"next",e)}function i(e){o(c,n,s,r,i,"throw",e)}r(void 0)}))}}var i={data:function(){return{QRCodeText:"水电费水电费水电费是的是的发送到发送到",QRCodeSrc:"",posterSrc:"",postercanvas_width:0,postercanvas_height:0,posterTemplates:[]}},onLoad:function(t){e.showLoading({title:"二维码生成中",mask:!0}),t.url?this.QRCodeText=t.url:this.QRCodeText=this.$store.state.common.appConfig.domain+"&QRtype=user",this.loadData()},methods:{loadData:function(t){var a=this;return r(n.default.mark((function t(){return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a.$api.post({url:"/wanlshop/common/qrcode",success:function(t){t.forEach((function(t,n,s){"wanlshopqr"!=t.template&&(e.downloadFile({url:a.$wanlshop.oss(t.background_url,350,0),success:function(e){t.background_url=e.tempFilePath}}),e.downloadFile({url:a.$wanlshop.oss(t.logo_src,40,40),success:function(e){t.logo_src=e.tempFilePath}}))})),a.posterTemplates=t,0==t.length?e.showModal({title:"重要提示",content:"平台尚未配置二维码，请到后台系统管理【配置二维码】",success:function(e){a.$wanlshop.back(1)}}):e.showLoading({title:"加载配置中",mask:!0}),s.default.make({canvasId:"qrcode",text:a.QRCodeText,size:200,success:function(e){a.QRCodeSrc=e,a.create(a.posterTemplates[0])}})}});case 1:case"end":return t.stop()}}),t)})))()},create:function(t){var a=this;t.checked||(e.showLoading({title:"海报生成中",mask:!0}),this.posterTemplates.forEach((function(e){e.checked=!1})),t.checked=!0,this.postercanvas_width=t.canvas_width,this.postercanvas_height=t.canvas_height,this.posterSrc="",setTimeout((function(){switch(t.template){case"wanlshopqrlist001":a.wanlshopqrlist001({canvasId:"poster",canvas_width:t.canvas_width,canvas_height:t.canvas_height,backgroundSrc:t.background_url,logoSrc:t.logo_src,name:a.$store.state.user.username,text:"长按扫描二维码~",QRCodeSrc:a.QRCodeSrc,success:function(t){a.posterSrc=t,e.hideLoading()}});break;case"wanlshopqr":a.wanlshopqr({canvasId:"poster",canvas_width:t.canvas_width,canvas_height:t.canvas_height,QRCodeSrc:a.QRCodeSrc,success:function(t){a.posterSrc=t,e.hideLoading()}});break}}),100))},save:function(){var t=this;e.saveImageToPhotosAlbum({filePath:this.posterSrc,success:function(){t.$wanlshop.msg("保存成功")}})},wanlshopqrlist001:function(t){var a=t.canvas_width,n=t.canvas_height,s=t.backgroundSrc,c=t.logoSrc,o=t.name,r=t.text,i=t.QRCodeSrc,u=e.createCanvasContext(t.canvasId);u.clearRect(0,0,a,n);var l={width:"500",height:"667"},d=a,h=l.height*a/l.width;u.drawImage(s,0,0,d,h);var f=80,v=80,p=36,g=h+(n-h)/2-v/2;u.save(),u.beginPath(),u.arc(f/2+p,v/2+g,f/2,0,2*Math.PI,!1),u.closePath(),u.clip(),u.drawImage(c,p,g,f,v),u.restore(),o.length>10&&(o=o.substring(0,10)+"...");var m=p+f+10,w=g+32,_=20;u.setFillStyle("#000000"),u.setFontSize(_),u.fillText(o,m,w);var b=m,S=w+32,T=16;u.setFillStyle("#999999"),u.setFontSize(T),u.fillText(r,b,S);var k=100,C=100,I=a-k-36,P=h+(n-h)/2-C/2;u.drawImage(i,I,P,k,C),u.draw(!1,(function(){e.canvasToTempFilePath({canvasId:t.canvasId,fileType:"jpg",success:function(e){t.success&&t.success(e.tempFilePath)}})}))},wanlshopqr:function(t){var a=t.canvas_width,n=t.canvas_height,s=t.QRCodeSrc,c=e.createCanvasContext(t.canvasId);c.clearRect(0,0,a,n),c.drawImage(s,15,15,a-30,n-30),c.draw(!1,(function(){e.canvasToTempFilePath({canvasId:t.canvasId,fileType:"jpg",success:function(e){t.success&&t.success(e.tempFilePath)}})}))}}};t.default=i}).call(this,a("543d")["default"])},a56c:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return n}));var s=function(){var e=this,t=e.$createElement,a=(e._self._c,e.__map(e.posterTemplates,(function(t,a){var n=e.__get_orig(t),s=e.$wanlshop.oss(t.thumbnail_url,0,88);return{$orig:n,g0:s}})));e.$mp.data=Object.assign({},{$root:{l0:a}})},c=[]},f7e0:function(e,t,a){"use strict";a.r(t);var n=a("a56c"),s=a("5777");for(var c in s)"default"!==c&&function(e){a.d(t,e,(function(){return s[e]}))}(c);a("9843");var o,r=a("f0c5"),i=Object(r["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);t["default"]=i.exports}},[["5c66","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/notice/chat"],{"03dc":function(t,e,s){"use strict";var i;s.d(e,"b",(function(){return o})),s.d(e,"c",(function(){return n})),s.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,s=(t._self._c,t.__map(t.msgList,(function(e,s){var i=t.__get_orig(e),o="chat"==e.type&&e.to_id==t.to_id&&"goods"==e.message.type?t.$wanlshop.oss(e.message.content.image,100,0):null,n="chat"==e.type&&e.to_id==t.to_id&&"order"==e.message.type?t.__map(e.message.content.goods,(function(e,s){var i=t.__get_orig(e),o=t.$wanlshop.oss(e.image,50,50);return{$orig:i,g1:o}})):null,a="chat"==e.type&&e.to_id==t.to_id?t.$wanlshop.oss(e.form.avatar,100,100):null,r="chat"==e.type&&e.to_id==t.to_id?t.$wanlshop.timeToChat(e.createtime):null,c="chat"==e.type&&e.to_id!=t.to_id?t.$wanlshop.oss(e.form.avatar,100,100):null,h="chat"==e.type&&e.to_id!=t.to_id?t.$wanlshop.timeToChat(e.createtime):null;return{$orig:i,g0:o,l0:n,g2:a,g3:r,g4:c,g5:h}}))),i=t.goods&&t.isGoods?t.$wanlshop.oss(t.goods.image,100,100):null,o=t.__map(t.goodsData,(function(e,s){var i=t.__get_orig(e),o=t.$wanlshop.oss(e.goods.image,100,100);return{$orig:i,g7:o}})),n=t.__map(t.orderData,(function(e,s){var i=t.__get_orig(e),o=t.__map(e.goods,(function(e,s){var i=t.__get_orig(e),o=t.$wanlshop.oss(e.image,100,100);return{$orig:i,g8:o}}));return{$orig:i,l3:o}}));t.$mp.data=Object.assign({},{$root:{l1:s,g6:i,l2:o,l4:n}})},n=[]},1753:function(t,e,s){"use strict";s.r(e);var i=s("03dc"),o=s("39da");for(var n in o)"default"!==n&&function(t){s.d(e,t,(function(){return o[t]}))}(n);s("b89d");var a,r=s("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);e["default"]=c.exports},"1ccd":function(t,e,s){"use strict";(function(t){s("0429");i(s("66fd"));var e=i(s("1753"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,s("543d")["createPage"])},"39da":function(t,e,s){"use strict";s.r(e);var i=s("8a2e"),o=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},"8a2e":function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;s("2f62");var i=s("168a"),o={data:function(){return{user_id:this.$store.state.user.id,avatar:this.$store.state.user.avatar,username:this.$store.state.user.username,nickname:this.$store.state.user.nickname,isOnline:0,to_id:0,shop_id:0,shop_name:null,shop_avatar:null,textMsg:"",isHistoryLoading:!1,reload:!1,current_page:1,scrollAnimation:!1,scrollTop:0,scrollToView:"",msgList:[],msgImgList:[],goods:null,isGoods:!0,goodsData:[],orderData:[],emptybottom:!1,RECORDER:t.getRecorderManager(),isVoice:!1,voiceTis:"按住 说话",recordTis:"手指上滑 取消发送",recording:!1,willStop:!1,initPoint:{identifier:0,Y:0},recordTimer:null,recordLength:0,AUDIO:t.createInnerAudioContext(),playMsgid:null,VoiceTimer:null,popupLayerClass:!1,hideMore:!0,modalName:null,stateText:["等待您付款","付款成功","待收货","待评论","退款订单","订单已完成","交易关闭"],refundStatusText:["未退款","退款中","待退货","退款完成","退款关闭","退款被拒"],refundStatusBg:["","bg-orange","bg-red","bg-green","bg-grey","bg-red"],TabCur:"默认",hideEmoji:!0,emojiList:this.emojiData(),QnUrl:"",Sysmodel:this.$wanlshop.wanlsys().model}},onLoad:function(e){var s=this;e.hasOwnProperty("goods")&&(this.goods=JSON.parse(e.goods),setTimeout((function(){s.isGoods=!1}),5e3)),this.$store.commit("chat/setIschat",{notice:!1}),this.$api.post({url:"/wanlshop/shop/shop",data:{id:e.shop_id,type:"chat"},success:function(t){s.to_id=t.user_id,s.shop_id=t.id,s.shop_name=t.shopname,s.shop_avatar=t.avatar,s.isOnline=t.isOnline,s.$wanlshop.title(t.shopname+"-在线"),s.getMsgList(t.user_id)}}),this.AUDIO.onEnded((function(t){s.playMsgid=null})),this.RECORDER.onStart((function(t){s.recordBegin(t)})),this.RECORDER.onStop((function(t){s.recordEnd(t)})),t.$on("onChat",this.onSend)},onNavigationBarButtonTap:function(){this.onShop(this.shop_id)},onUnload:function(){this.to_id>0&&this.$store.dispatch("chat/update",{type:"del",id:this.to_id}),this.$store.commit("chat/setIschat",{notice:!0,number:0})},onShow:function(){this.scrollTop=9999999},methods:{getMsgList:function(e){var s=this;t.getStorage({key:"wanlchat:message_"+e,success:function(t){for(var e=t.data,i=0;i<e.length;i++)"chat"==e[i].type&&"img"==e[i].message.type&&(e[i].message.content=s.setPicSize(e[i].message.content),s.msgImgList.push(e[i].message.content.url)),"chat"==e[i].type&&"text"==e[i].message.type&&(e[i].message.content.text=s.replaceEmoji(e[i].message.content.text));s.msgList=e,s.$nextTick((function(){s.scrollTop=9999,s.$nextTick((function(){s.scrollAnimation=!0}))}))}})},onChat:function(t){var e=this;"system"==t.type?"text"==t.msg.type&&this.addSystemTextMsg(t):"chat"==t.type&&("text"==t.message.type&&this.addTextMsg(t),"voice"==t.message.type&&this.addVoiceMsg(t),"img"==t.message.type&&this.addImgMsg(t),"goods"==t.message.type&&this.addGoodsMsg(t),"order"==t.message.type&&this.addOrderMsg(t)),this.$nextTick((function(){e.scrollToView="msg"+t.id}))},onSend:function(t){var e=this;t.form.id==this.to_id&&("system"==t.type?"text"==t.msg.type&&this.addSystemTextMsg(t):"chat"==t.type&&("text"==t.message.type&&this.addTextMsg(t),"voice"==t.message.type&&this.addVoiceMsg(t),"img"==t.message.type&&this.addImgMsg(t),"goods"==t.message.type&&this.addGoodsMsg(t),"order"==t.message.type&&this.addOrderMsg(t)),this.$nextTick((function(){e.scrollToView="msg"+t.id})))},sendMsg:function(t,e){var s=1;this.msgList.length&&(s=this.msgList[this.msgList.length-1].id,s++);var i={id:s,type:"chat",to_id:this.to_id,form:{id:this.user_id,avatar:this.avatar,name:this.nickname},message:{type:e,content:t},createtime:parseInt((new Date).getTime()/1e3)};this.onChat(JSON.parse(JSON.stringify(i))),this.$store.dispatch("chat/update",{type:"send",data:i,shop:{id:this.shop_id,user_id:this.to_id,name:this.shop_name,avatar:this.shop_avatar}}),this.$wanlshop.send(i)},addTextMsg:function(t){t.message.content.text=this.replaceEmoji(t.message.content.text),this.msgList.push(t)},addVoiceMsg:function(t){this.msgList.push(t)},addImgMsg:function(t){t.message.content=this.setPicSize(t.message.content),this.msgImgList.push(t.message.content.url),this.msgList.push(t)},addGoodsMsg:function(t){this.msgList.push(t)},addOrderMsg:function(t){this.msgList.push(t)},addSystemTextMsg:function(t){this.msgList.push(t)},emojiData:function(){var t={},e=[],s={};return i.forEach((function(i){var o=i.category.length>0?i.category:"默认";t[o]||(t[o]=[],e.push(o)),t[o].push(i),s[i.phrase]=i.icon})),{groups:t,categories:e,map:s}},replaceEmoji:function(t){var e=this,s=t.replace(/\[([^(\]|\[)]*)\]/g,(function(t,s){return'<img src="'+e.emojiList.map[t]+'" width="18rpx">'}));return s.replace(/(\r\n)|(\n)/g,"<br>")},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id},loadHistory:function(t){var e=this;if(!this.isHistoryLoading&&!this.reload){this.isHistoryLoading=!0,this.scrollAnimation=!1;var s=this.msgList[0].id;this.$api.post({url:"/wanlshop/chat/history",data:{to_id:this.to_id,page:this.current_page},success:function(t){for(var i=t.data,o=0;o<i.length;o++)"chat"==i[o].type&&"img"==i[o].message.type&&(i[o].message.content=e.setPicSize(i[o].message.content),e.msgImgList.unshift(i[o].message.content.url)),"chat"==i[o].type&&"text"==i[o].message.type&&(i[o].message.content.text=e.replaceEmoji(i[o].message.content.text));i.sort((function(t,e){return t.updatetime-e.updatetime})),e.msgList=1==t.current_page?i:i.concat(e.msgList),e.$nextTick((function(){e.scrollToView="msg"+s,e.$nextTick((function(){e.scrollAnimation=!0}))})),t.current_page==t.last_page?e.reload=!0:e.current_page=t.current_page+1,e.isHistoryLoading=!1},fail:function(t){e.isHistoryLoading=!1}})}},setPicSize:function(e){var s=t.upx2px(350),i=t.upx2px(350);if(e.w>s||e.h>i){var o=e.w/e.h;e.w=o>1?s:i*o,e.h=o>1?s/o:i}return e},showMore:function(){this.isVoice=!1,this.hideEmoji=!0,this.hideMore?(this.hideMore=!1,this.openDrawer()):this.hideDrawer()},openDrawer:function(){this.emptybottom=!0,this.popupLayerClass=!0},hideDrawer:function(){var t=this;this.emptybottom=!1,this.popupLayerClass=!1,setTimeout((function(){t.hideMore=!0,t.hideEmoji=!0}),150)},chooseImage:function(){this.getImage("album")},camera:function(){this.getImage("camera")},getImage:function(e){var s=this;this.hideDrawer(),t.chooseImage({sourceType:[e],sizeType:["original","compressed"],success:function(e){s.$api.get({url:"/wanlshop/common/uploadData",success:function(i){for(var o=0;o<e.tempFilePaths.length;o++)t.getImageInfo({src:e.tempFilePaths[o],success:function(t){s.$api.upload({url:i.uploadurl,filePath:t.path,name:"file",formData:"local"==i.storage?null:i.multipart,success:function(e){s.sendMsg({url:e.fullurl,w:t.width,h:t.height},"img")}})}})}})}})},showPic:function(e){t.previewImage({indicator:"none",current:e.content.url,urls:this.msgImgList})},chooseEmoji:function(){this.hideMore=!0,this.hideEmoji?(this.hideEmoji=!1,this.openDrawer()):this.hideDrawer()},addEmoji:function(t){this.textMsg+=t},textareaFocus:function(){this.emptybottom=!0,this.closeTips(),this.popupLayerClass&&0==this.hideMore&&this.hideDrawer()},textareaBlur:function(){this.emptybottom=!1},sendText:function(){if(this.hideDrawer(),this.textMsg){var t={text:this.textMsg};this.sendMsg(t,"text"),this.textMsg=""}},sendGoods:function(t){this.sendMsg(t,"goods"),this.closeTips(),this.hideModal()},sendOrder:function(t){this.sendMsg({id:t.id,order_no:t.order_no,goods:t.goods,state:t.state},"order"),this.closeTips(),this.hideModal()},closeTips:function(){this.isGoods=!1},complaint:function(){this.$wanlshop.to("/pages/user/complaint/complaint?id=".concat(this.shop_id,"&type=2")),this.hideDrawer()},browsing:function(){var t=this;this.hideDrawer(),this.$api.post({url:"/wanlshop/product/getBrowsingToShop",data:{shop_id:this.shop_id},success:function(e){t.goodsData=e,t.modalName="goods"}})},order:function(){var t=this;this.hideDrawer(),this.$api.post({url:"/wanlshop/order/getOrderListToShop",data:{shop_id:this.shop_id},success:function(e){t.orderData=e,t.modalName="order"}})},hideModal:function(){this.modalName=null},playVoice:function(t){var e=this;this.playMsgid=t.id,this.AUDIO.src=t.content.url,this.$nextTick((function(){e.AUDIO.play()}))},voiceBegin:function(t){t.touches.length>1||(this.initPoint.Y=t.touches[0].clientY,this.initPoint.identifier=t.touches[0].identifier,this.RECORDER.start({format:"mp3"}))},recordBegin:function(t){var e=this;this.recording=!0,this.voiceTis="松开 结束",this.recordLength=0,this.recordTimer=setInterval((function(){e.recordLength++}),1e3)},voiceCancel:function(){this.recording=!1,this.voiceTis="按住 说话",this.recordTis="手指上滑 取消发送",this.willStop=!0,this.RECORDER.stop()},voiceIng:function(e){if(this.recording){var s=e.touches[0];this.initPoint.Y-s.clientY>=t.upx2px(200)?(this.willStop=!0,this.recordTis="松开手指 取消发送"):(this.willStop=!1,this.recordTis="手指上滑 取消发送")}},voiceEnd:function(t){this.recording&&(this.recording=!1,this.voiceTis="按住 说话",this.recordTis="手指上滑 取消发送",this.RECORDER.stop())},recordEnd:function(t){var e=this;clearInterval(this.recordTimer),this.willStop?console.log("取消发送录音"):this.$api.get({url:"/wanlshop/common/uploadData",success:function(s){e.$api.upload({url:s.uploadurl,filePath:t.tempFilePath,name:"file",formData:"local"==s.storage?null:s.multipart,success:function(t){var s={length:0,url:t.fullurl};s.length=e.recordLength%60,s.length>0&&e.sendMsg(s,"voice")},fail:function(t){e.$wanlshop.msg(JSON.parse(t.data).msg)}})}}),this.willStop=!1},switchVoice:function(){this.hideDrawer(),this.isVoice=!this.isVoice},discard:function(){}}};e.default=o}).call(this,s("543d")["default"])},b89d:function(t,e,s){"use strict";var i=s("cb91"),o=s.n(i);o.a},cb91:function(t,e,s){}},[["1ccd","common/runtime","common/vendor"]]]);
function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{WAHi:function(e,t,n){"use strict";n.r(t);var o=n("ofXK"),i=n("3Pt+"),a=n("TEn/"),r=n("tyNb"),c=n("mrSG"),s=n("lGQG"),l=n("wd/R"),d=n("9HCY"),m=n("te5A"),f=n("B7Rs"),p=n("FAH8"),u=n("3LUQ"),h=n("fXoL");function v(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"ion-list"),h["\u0275\u0275element"](1,"br"),h["\u0275\u0275element"](2,"ion-spinner",7),h["\u0275\u0275elementEnd"]())}function g(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"ion-card"),h["\u0275\u0275elementStart"](1,"ion-card-content"),h["\u0275\u0275text"](2," No feedback... "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]())}function x(e,t){if(1&e){var n=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"ion-card"),h["\u0275\u0275elementStart"](1,"ion-grid"),h["\u0275\u0275elementStart"](2,"ion-row"),h["\u0275\u0275elementStart"](3,"ion-col",9),h["\u0275\u0275element"](4,"ion-icon",10),h["\u0275\u0275elementStart"](5,"strong"),h["\u0275\u0275text"](6),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](7,"ion-row"),h["\u0275\u0275elementStart"](8,"ion-col",11),h["\u0275\u0275text"](9),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](10,"ion-row",12),h["\u0275\u0275listener"]("click",(function(){h["\u0275\u0275restoreView"](n);var e=t.$implicit,o=h["\u0275\u0275nextContext"](2);return o.download(e.student_attachment,o.assets+e.student_attachment)})),h["\u0275\u0275elementStart"](11,"ion-col",13),h["\u0275\u0275text"](12),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](13,"ion-row"),h["\u0275\u0275elementStart"](14,"ion-col",14),h["\u0275\u0275elementStart"](15,"small"),h["\u0275\u0275text"](16),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](17,"ion-col",14),h["\u0275\u0275elementStart"](18,"small"),h["\u0275\u0275text"](19),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()}if(2&e){var o=t.$implicit,i=h["\u0275\u0275nextContext"](2);h["\u0275\u0275advance"](6),h["\u0275\u0275textInterpolate"](o.subject),h["\u0275\u0275advance"](3),h["\u0275\u0275textInterpolate1"](" ",o.message," "),h["\u0275\u0275advance"](3),h["\u0275\u0275textInterpolate1"](" ",o.student_attachment," "),h["\u0275\u0275advance"](4),h["\u0275\u0275textInterpolate1"]("Created On: ",i.formatDate(o.sent_date),""),h["\u0275\u0275advance"](3),h["\u0275\u0275textInterpolate1"]("By: ",o.parent_full_name,"")}}function k(e,t){if(1&e&&(h["\u0275\u0275elementStart"](0,"div"),h["\u0275\u0275template"](1,x,20,5,"ion-card",8),h["\u0275\u0275elementEnd"]()),2&e){var n=h["\u0275\u0275nextContext"]();h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngForOf",n.feedbacks)}}function w(e,t){if(1&e){var n=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"ion-fab",15),h["\u0275\u0275listener"]("click",(function(){return h["\u0275\u0275restoreView"](n),h["\u0275\u0275nextContext"]().addfeed()})),h["\u0275\u0275elementStart"](1,"ion-fab-button",16),h["\u0275\u0275element"](2,"ion-icon",17),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()}}var b,S=((b=function(){function e(t,n,o,i,a,r,c,s,l){var d=this;_classCallCheck(this,e),this.authService=t,this.route=n,this.router=o,this.transfer=i,this.file=a,this.fileOpener=r,this.spinnerDialog=c,this.alertService=s,this.loadingController=l,this.items=[],this.spin=0,this.fake=0,setTimeout((function(){d.fake=0}),3e3),this.feedbacks=new Array;var m=localStorage.getItem("token"),f=JSON.parse(m);this.data=f,this.school=this.data.students[0].school,console.log(this.school),this.assets="http://cdn2.eduweb.co.ke/homework_attachments/".concat(this.school,"/documents/"),console.log(this.assets)}return _createClass(e,[{key:"ngOnInit",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("token");case 2:t=e.sent,n=JSON.parse(t),this.data=n,this.school=this.data.students[0].school;case 5:case"end":return e.stop()}}),e,this)})))}},{key:"ionViewWillEnter",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.authService.presentLoading(),this.spin=1,e.next=4,this.authService.checkFeed().then((function(e){t.spin=0,t.feedback=e}));case 4:return e.next=6,this.authService.news().subscribe((function(e){t.spin=0,t.authService.dismiss(),t.data=e,t.feedbacks=t.data.data.feedback[t.school]}));case 6:case"end":return e.stop()}}),e,this)})))}},{key:"addfeed",value:function(){this.router.navigate(["feedback"],{})}},{key:"getMIMEtype",value:function(e){return{txt:"text/plain",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",doc:"application/msword",pdf:"application/pdf",jpg:"image/jpeg",bmp:"image/bmp",png:"image/png",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",rtf:"application/rtf",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",flv:"video/x-flv",mp4:"video/mp4",m3u8:"application/x-mpegURL",ts:"video/MP2T","3gp":"video/3gpp",mov:"video/quicktime",avi:"video/x-msvideo",wmv:"video/x-ms-wmv"}[e.toLowerCase()]}},{key:"open",value:function(e){var t=this;this.authService.dismiss();var n=e.split(".").reverse()[0],o=this.getMIMEtype(n);console.log(n,o,e),this.fileOpener.showOpenWithDialog(e,o).then((function(){return console.log("File is opened")})).catch((function(e){t.alertService.presentToast(e)}))}},{key:"download",value:function(e,t){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var o,i,a,r=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.includes("mp4")){n.next=8;break}return o=t.replace("/documents/","/videos/"),n.next=4,this.authService.presentLoading();case 4:i=encodeURI(o),console.log(o),this.fileTransfer=this.transfer.create(),this.fileTransfer.download(i,this.file.dataDirectory+e,!0).then((function(e){console.log("download completed: "+e.toURL()),r.open(e.toURL())})).catch((function(e){r.authService.dismiss(),r.alertService.presentToast("error"+JSON.stringify(e)),console.log("download failed: "+JSON.stringify(e))})),n.next=12;break;case 8:return n.next=10,this.authService.presentLoading();case 10:a=encodeURI(t),console.log(t),this.fileTransfer=this.transfer.create(),this.fileTransfer.download(a,this.file.dataDirectory+e,!0).then((function(e){console.log("download completed: "+e.toURL()),r.open(e.toURL())})).catch((function(e){r.authService.dismiss(),r.alertService.presentToast("error"+JSON.stringify(e)),console.log("download failed: "+JSON.stringify(e))}));case 12:case"end":return n.stop()}}),n,this)})))}},{key:"formatDate",value:function(e){return l(e).format("MMM D, YYYY")}}]),e}()).\u0275fac=function(e){return new(e||b)(h["\u0275\u0275directiveInject"](s.a),h["\u0275\u0275directiveInject"](r.a),h["\u0275\u0275directiveInject"](r.g),h["\u0275\u0275directiveInject"](f.a),h["\u0275\u0275directiveInject"](p.a),h["\u0275\u0275directiveInject"](m.a),h["\u0275\u0275directiveInject"](d.a),h["\u0275\u0275directiveInject"](u.a),h["\u0275\u0275directiveInject"](a.O))},b.\u0275cmp=h["\u0275\u0275defineComponent"]({type:b,selectors:[["app-list"]],decls:11,vars:4,consts:[["color","primary"],["slot","start",2,"font-size","14px"],["text","","icon","chevron-back"],["slot","start","size","30","name","notifications",2,"font-size","1.6em","margin-top","5px !important"],[1,"ion-no-padding"],[4,"ngIf"],["vertical","bottom","horizontal","end","slot","fixed",3,"click",4,"ngIf"],["name","lines-small","color","primary",2,"text-align","center","margin-left","50%","margin-right","50%"],[4,"ngFor","ngForOf"],["col-12","",2,"font-weight","bold","font-size","12px","color","#009e0f","text-transform","uppercase"],["name","notifications"],["col-12","",2,"font-size","13px","color","black"],[3,"click"],["col-12","",2,"font-size","13px","color","blue"],["col-6","",2,"font-weight","500"],["vertical","bottom","horizontal","end","slot","fixed",3,"click"],["color","tertiary"],["name","chatbox-ellipses"]],template:function(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"ion-header"),h["\u0275\u0275elementStart"](1,"ion-toolbar",0),h["\u0275\u0275elementStart"](2,"ion-buttons",1),h["\u0275\u0275element"](3,"ion-back-button",2),h["\u0275\u0275element"](4,"ion-icon",3),h["\u0275\u0275text"](5,"FEEDBACK "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](6,"ion-content",4),h["\u0275\u0275template"](7,v,3,0,"ion-list",5),h["\u0275\u0275template"](8,g,3,0,"ion-card",5),h["\u0275\u0275template"](9,k,2,1,"div",5),h["\u0275\u0275template"](10,w,3,0,"ion-fab",6),h["\u0275\u0275elementEnd"]()),2&e&&(h["\u0275\u0275advance"](7),h["\u0275\u0275property"]("ngIf",0===t.feedbacks.length&&1===t.fake),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf",0===t.feedbacks.length&&0===t.fake),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf",t.feedbacks.length>0),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf","true"===t.feedback))},directives:[a.q,a.L,a.g,a.d,a.e,a.r,a.l,o.i,a.v,a.H,a.h,a.i,o.h,a.p,a.B,a.k,a.n,a.o],styles:[""]}),b);n.d(t,"ListPageModule",(function(){return E}));var y,E=((y=function e(){_classCallCheck(this,e)}).\u0275mod=h["\u0275\u0275defineNgModule"]({type:y}),y.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(e){return new(e||y)},imports:[[o.b,i.FormsModule,a.M,r.i.forChild([{path:"",component:S}])]]}),y)}}]);
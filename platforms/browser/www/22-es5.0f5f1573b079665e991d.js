function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{qUUn:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),o=n("3Pt+"),a=n("tyNb"),r=n("TEn/"),s=n("tk/3"),c=n("mrSG"),l=n("lGQG"),d=n("te5A"),p=n("B7Rs"),f=n("FAH8"),m=n("9HCY"),u=n("wd/R"),v=n("IfdK"),h=n("RU0F"),g=n("m/P+"),w=n("3LUQ"),x=n("fXoL"),b=n("jhN1");function y(e,t){if(1&e&&(x["\u0275\u0275elementStart"](0,"div"),x["\u0275\u0275elementStart"](1,"ion-card-content"),x["\u0275\u0275element"](2,"div",7),x["\u0275\u0275element"](3,"br"),x["\u0275\u0275elementStart"](4,"div"),x["\u0275\u0275element"](5,"div",7),x["\u0275\u0275elementEnd"](),x["\u0275\u0275element"](6,"br"),x["\u0275\u0275elementStart"](7,"p"),x["\u0275\u0275text"](8),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]()),2&e){var n=x["\u0275\u0275nextContext"]();x["\u0275\u0275advance"](2),x["\u0275\u0275property"]("innerHTML",n.newsinfo.subject,x["\u0275\u0275sanitizeHtml"]),x["\u0275\u0275advance"](3),x["\u0275\u0275property"]("innerHTML",n.newsinfo.message,x["\u0275\u0275sanitizeHtml"]),x["\u0275\u0275advance"](3),x["\u0275\u0275textInterpolate2"]("Posted By ",n.newsinfo.posted_by,", ",n.formatdate(n.newsinfo.creation_date),"")}}function C(e,t){if(1&e&&(x["\u0275\u0275elementStart"](0,"ion-card-content"),x["\u0275\u0275element"](1,"div",7),x["\u0275\u0275element"](2,"br"),x["\u0275\u0275elementStart"](3,"p"),x["\u0275\u0275text"](4),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]()),2&e){var n=x["\u0275\u0275nextContext"]();x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("innerHTML",n.newsinfo.message,x["\u0275\u0275sanitizeHtml"]),x["\u0275\u0275advance"](3),x["\u0275\u0275textInterpolate2"]("Posted By ",n.newsinfo.posted_by,", ",n.formatdate(n.newsinfo.creation_date),"")}}function I(e,t){if(1&e){var n=x["\u0275\u0275getCurrentView"]();x["\u0275\u0275elementStart"](0,"ion-list"),x["\u0275\u0275elementStart"](1,"ion-item",10),x["\u0275\u0275listener"]("click",(function(){x["\u0275\u0275restoreView"](n);var e=t.$implicit,i=x["\u0275\u0275nextContext"](2);return i.download(e,i.assets+e)})),x["\u0275\u0275elementStart"](2,"span"),x["\u0275\u0275text"](3),x["\u0275\u0275element"](4,"ion-icon",11),x["\u0275\u0275elementStart"](5,"a",12),x["\u0275\u0275text"](6),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]()}if(2&e){var i=t.$implicit,o=t.index;x["\u0275\u0275advance"](3),x["\u0275\u0275textInterpolate1"](" ",o+1,". "),x["\u0275\u0275advance"](3),x["\u0275\u0275textInterpolate1"](" ",i," ")}}function S(e,t){if(1&e&&(x["\u0275\u0275elementStart"](0,"div",8),x["\u0275\u0275template"](1,I,7,2,"ion-list",9),x["\u0275\u0275elementEnd"]()),2&e){var n=x["\u0275\u0275nextContext"]();x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("ngForOf",n.attachments)}}var M,j=((M=function(){function e(t,n,i,o,a,r,s,c,l,d,p,f,m,u){var v=this;_classCallCheck(this,e),this.transfer=t,this.spinnerDialog=n,this.file=i,this.fileOpener=o,this.navCtrl=a,this.authService=r,this.route=s,this.router=c,this.sessionService=l,this.streamingMedia=d,this.sanitizer=p,this.http=f,this.iab=m,this.alertService=u,this.newsinfo=new Object,this.sessionService.sessionTimeOut(),this.route.queryParams.subscribe((function(e){if(v.router.getCurrentNavigation().extras.state)if(v.newsinfo=v.router.getCurrentNavigation().extras.state.details,v.school=v.router.getCurrentNavigation().extras.state.school,v.student_id=v.router.getCurrentNavigation().extras.state.student_id,null==v.newsinfo)v.navCtrl.navigateRoot("/dashboard");else{var t=v.newsinfo.attachment?v.newsinfo.attachment:null,n=null===t?"":t,i=null===n?null:n.split(",");v.attachments=""!==i[0]?i:[],console.log("here"+JSON.stringify(v.newsinfo)),v.assets="https://".concat(v.school,".eduweb.co.ke/assets/posts/")}}))}return _createClass(e,[{key:"ngOnInit",value:function(){console.log("student id "+this.student_id),this.http.get("https://api.eduweb.co.ke/getParticularCommunication/".concat(this.school,"/").concat(this.student_id,"/").concat(this.newsinfo.com_id)).subscribe((function(e){console.log(e)}))}},{key:"getMIMEtype",value:function(e){return{txt:"text/plain",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",doc:"application/msword",pdf:"application/pdf",jpg:"image/jpeg",bmp:"image/bmp",png:"image/png",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",rtf:"application/rtf",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",flv:"video/x-flv",mp4:"video/mp4",m3u8:"application/x-mpegURL",ts:"video/MP2T","3gp":"video/3gpp",mov:"video/quicktime",avi:"video/x-msvideo",wmv:"video/x-ms-wmv"}[e.toLowerCase()]}},{key:"open",value:function(e){var t=this;this.authService.dismiss();var n=e.split(".").reverse()[0],i=this.getMIMEtype(n);console.log(n,i,e),this.fileOpener.showOpenWithDialog(e,i).then((function(){return console.log("File is opened")})).catch((function(e){t.alertService.presentToast(e)}))}},{key:"download",value:function(e,t){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i,o=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.authService.presentLoading();case 2:i=encodeURI(t),this.fileTransfer=this.transfer.create(),this.fileTransfer.download(i,this.file.dataDirectory+e,!0).then((function(e){console.log("download completed: "+e.toURL()),o.open(e.toURL())})).catch((function(e){o.authService.dismiss(),o.alertService.presentToast("download failed"),console.log("download failed: "+JSON.stringify(e))}));case 4:case"end":return n.stop()}}),n,this)})))}},{key:"openFileHandler",value:function(){this.fileOpener.open(this.downloadFile,"").then((function(){return console.log("File is opened")})).catch((function(e){return console.log("Error opening file",e)}))}},{key:"trunc",value:function(e){return e.length>20?"".concat(e.substr(0,20),"..."):e}},{key:"formatdate",value:function(e){return u(e).format("MMM D, YYYY")}},{key:"filterdate",value:function(e){return u(e).year}}]),e}()).\u0275fac=function(e){return new(e||M)(x["\u0275\u0275directiveInject"](p.a),x["\u0275\u0275directiveInject"](m.a),x["\u0275\u0275directiveInject"](f.a),x["\u0275\u0275directiveInject"](d.a),x["\u0275\u0275directiveInject"](r.R),x["\u0275\u0275directiveInject"](l.a),x["\u0275\u0275directiveInject"](a.a),x["\u0275\u0275directiveInject"](a.g),x["\u0275\u0275directiveInject"](v.a),x["\u0275\u0275directiveInject"](h.a),x["\u0275\u0275directiveInject"](b.DomSanitizer),x["\u0275\u0275directiveInject"](s.a),x["\u0275\u0275directiveInject"](g.a),x["\u0275\u0275directiveInject"](w.a))},M.\u0275cmp=x["\u0275\u0275defineComponent"]({type:M,selectors:[["app-news"]],decls:12,vars:3,consts:[["color","primary"],["slot","start",2,"font-size","14px"],["text","","icon","chevron-back"],[1,"ion-no-padding"],[4,"ngIf","ngIfElse"],["no_subject",""],["class","ion-padding",4,"ngIf"],[3,"innerHTML"],[1,"ion-padding"],[4,"ngFor","ngForOf"],["no-padding","",2,"font-size","14px","color","blue","border-bottom","blue 1px !important",3,"click"],["name","document-attach","md","md-attach"],[2,"color","blue","font-size","13px","text-align","center"]],template:function(e,t){if(1&e&&(x["\u0275\u0275elementStart"](0,"ion-header"),x["\u0275\u0275elementStart"](1,"ion-toolbar",0),x["\u0275\u0275elementStart"](2,"ion-buttons",1),x["\u0275\u0275element"](3,"ion-back-button",2),x["\u0275\u0275text"](4,"MORE INFORMATION "),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](5,"ion-content",3),x["\u0275\u0275elementStart"](6,"ion-card"),x["\u0275\u0275element"](7,"ion-card-header"),x["\u0275\u0275template"](8,y,9,4,"div",4),x["\u0275\u0275template"](9,C,5,3,"ng-template",null,5,x["\u0275\u0275templateRefExtractor"]),x["\u0275\u0275elementEnd"](),x["\u0275\u0275template"](11,S,2,1,"div",6),x["\u0275\u0275elementEnd"]()),2&e){var n=x["\u0275\u0275reference"](10);x["\u0275\u0275advance"](8),x["\u0275\u0275property"]("ngIf",t.newsinfo.subject!==t.newsinfo.message)("ngIfElse",n),x["\u0275\u0275advance"](3),x["\u0275\u0275property"]("ngIf",t.attachments.length>0)}},directives:[r.q,r.L,r.g,r.d,r.e,r.l,r.h,r.j,i.i,r.i,i.h,r.v,r.t,r.r],styles:["ion-content[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{color:#000}a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:link{color:#00f}a[_ngcontent-%COMP%]:visited{color:#999}a[_ngcontent-%COMP%]:hover{color:#2b5aa1}"]}),M);n.d(t,"NewsPageModule",(function(){return k}));var _,E=[{path:"",component:j}],k=((_=function e(){_classCallCheck(this,e)}).\u0275mod=x["\u0275\u0275defineNgModule"]({type:_}),_.\u0275inj=x["\u0275\u0275defineInjector"]({factory:function(e){return new(e||_)},imports:[[i.b,o.FormsModule,r.M,a.i.forChild(E),s.b]]}),_)}}]);
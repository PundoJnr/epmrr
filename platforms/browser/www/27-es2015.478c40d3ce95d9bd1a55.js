(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"+mUW":function(e,t,n){"use strict";n.r(t);var o=n("ofXK"),a=n("3Pt+"),i=n("tyNb"),r=n("TEn/"),l=n("mrSG"),s=n("lGQG"),d=n("wd/R"),m=n("IfdK"),c=n("3LUQ"),h=n("fXoL");function p(e,t){if(1&e&&(h["\u0275\u0275elementStart"](0,"ion-avatar",12),h["\u0275\u0275element"](1,"img",13),h["\u0275\u0275elementEnd"]()),2&e){const e=h["\u0275\u0275nextContext"]();h["\u0275\u0275advance"](1),h["\u0275\u0275propertyInterpolate"]("src",e.assets,h["\u0275\u0275sanitizeUrl"])}}function u(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"ion-avatar",12),h["\u0275\u0275element"](1,"ion-icon",14),h["\u0275\u0275elementEnd"]())}function f(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"ion-card"),h["\u0275\u0275elementStart"](1,"ion-card-content"),h["\u0275\u0275text"](2," No posts for this student. "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]())}function g(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"ion-list"),h["\u0275\u0275element"](1,"br"),h["\u0275\u0275element"](2,"ion-spinner",16),h["\u0275\u0275elementEnd"]())}function x(e,t){if(1&e&&(h["\u0275\u0275elementStart"](0,"ion-card"),h["\u0275\u0275elementStart"](1,"ion-card-header"),h["\u0275\u0275elementStart"](2,"p"),h["\u0275\u0275text"](3),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](4,"p"),h["\u0275\u0275text"](5),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](6,"ion-card-content"),h["\u0275\u0275element"](7,"div",18),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;h["\u0275\u0275advance"](3),h["\u0275\u0275textInterpolate2"]("Posted On: ",e.creation_date," by ",e.posted_by,""),h["\u0275\u0275advance"](2),h["\u0275\u0275textInterpolate2"]("Posted On: ",e.creation_date," by ",e.posted_by,""),h["\u0275\u0275advance"](2),h["\u0275\u0275property"]("innerHTML",e.body,h["\u0275\u0275sanitizeHtml"])}}function v(e,t){if(1&e&&(h["\u0275\u0275elementStart"](0,"ion-list"),h["\u0275\u0275template"](1,x,8,5,"ion-card",17),h["\u0275\u0275elementEnd"]()),2&e){const e=h["\u0275\u0275nextContext"](2);h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngForOf",e.posts)}}function S(e,t){if(1&e&&(h["\u0275\u0275elementStart"](0,"div"),h["\u0275\u0275template"](1,f,3,0,"ion-card",15),h["\u0275\u0275template"](2,g,3,0,"ion-list",15),h["\u0275\u0275template"](3,v,2,1,"ion-list",15),h["\u0275\u0275elementEnd"]()),2&e){const e=h["\u0275\u0275nextContext"]();h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf",0==e.posts.length&&0===e.fake),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf",0===e.posts.length&&1===e.fake),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf",e.posts.length>0)}}function w(e,t){if(1&e&&(h["\u0275\u0275elementStart"](0,"div"),h["\u0275\u0275elementStart"](1,"ion-select-option",28),h["\u0275\u0275text"](2),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;h["\u0275\u0275advance"](1),h["\u0275\u0275propertyInterpolate"]("value",e.subject_name),h["\u0275\u0275advance"](1),h["\u0275\u0275textInterpolate1"]("",e.subject_name," ")}}function b(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"ion-list"),h["\u0275\u0275element"](1,"br"),h["\u0275\u0275element"](2,"ion-spinner",16),h["\u0275\u0275elementEnd"]())}function k(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"ion-card"),h["\u0275\u0275elementStart"](1,"ion-card-content"),h["\u0275\u0275text"](2," No homework for this student. "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]())}function E(e,t){if(1&e){const e=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"div"),h["\u0275\u0275elementStart"](1,"ion-item",32),h["\u0275\u0275listener"]("click",(function(){h["\u0275\u0275restoreView"](e);const t=h["\u0275\u0275nextContext"]().$implicit,n=h["\u0275\u0275nextContext"](3);return n.openHomework(t,n.school)})),h["\u0275\u0275element"](2,"ion-icon",33),h["\u0275\u0275elementStart"](3,"div",34),h["\u0275\u0275text"](4),h["\u0275\u0275elementStart"](5,"div",35),h["\u0275\u0275elementStart"](6,"small"),h["\u0275\u0275text"](7),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()}if(2&e){const e=h["\u0275\u0275nextContext"]().$implicit,t=h["\u0275\u0275nextContext"](3);h["\u0275\u0275advance"](4),h["\u0275\u0275textInterpolate2"](" ",e.title," (",e.subject_name,") "),h["\u0275\u0275advance"](3),h["\u0275\u0275textInterpolate2"]("",t.formatDate(e.assigned_date)," By ",e.posted_by,"")}}function C(e,t){if(1&e){const e=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"ion-item",32),h["\u0275\u0275listener"]("click",(function(){h["\u0275\u0275restoreView"](e);const t=h["\u0275\u0275nextContext"]().$implicit,n=h["\u0275\u0275nextContext"](3);return n.openHomework(t,n.school)})),h["\u0275\u0275element"](1,"ion-icon",36),h["\u0275\u0275elementStart"](2,"div",37),h["\u0275\u0275text"](3),h["\u0275\u0275elementStart"](4,"div",35),h["\u0275\u0275elementStart"](5,"small"),h["\u0275\u0275text"](6),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()}if(2&e){const e=h["\u0275\u0275nextContext"]().$implicit,t=h["\u0275\u0275nextContext"](3);h["\u0275\u0275advance"](3),h["\u0275\u0275textInterpolate2"](" ",e.title," (",e.subject_name,") "),h["\u0275\u0275advance"](3),h["\u0275\u0275textInterpolate2"]("",t.formatDate(e.assigned_date)," By ",e.posted_by,"")}}function y(e,t){if(1&e&&(h["\u0275\u0275elementStart"](0,"div"),h["\u0275\u0275elementStart"](1,"ion-list",29),h["\u0275\u0275template"](2,E,8,4,"div",30),h["\u0275\u0275template"](3,C,7,4,"ng-template",null,31,h["\u0275\u0275templateRefExtractor"]),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit,n=h["\u0275\u0275reference"](4);h["\u0275\u0275advance"](2),h["\u0275\u0275property"]("ngIf",!0===e.seen)("ngIfElse",n)}}function I(e,t){if(1&e&&(h["\u0275\u0275elementStart"](0,"div"),h["\u0275\u0275template"](1,y,5,2,"div",17),h["\u0275\u0275elementEnd"]()),2&e){const e=h["\u0275\u0275nextContext"](2);h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngForOf",e.homeworks)}}function _(e,t){if(1&e){const e=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"div"),h["\u0275\u0275elementStart"](1,"ion-list"),h["\u0275\u0275elementStart"](2,"ion-list-header"),h["\u0275\u0275elementStart"](3,"ion-button",19),h["\u0275\u0275listener"]("click",(function(){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().filterHomework()})),h["\u0275\u0275text"](4,"FILTER "),h["\u0275\u0275element"](5,"ion-icon",20),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](6,"div",21),h["\u0275\u0275elementStart"](7,"ion-item"),h["\u0275\u0275elementStart"](8,"ion-label"),h["\u0275\u0275text"](9,"Subject"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](10,"ion-select",22),h["\u0275\u0275listener"]("ngModelChange",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().subjects=t}))("ionChange",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().onChange(t)})),h["\u0275\u0275elementStart"](11,"ion-select-option",23),h["\u0275\u0275text"](12,"All"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275template"](13,w,3,2,"div",17),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](14,"div"),h["\u0275\u0275elementStart"](15,"ion-row"),h["\u0275\u0275elementStart"](16,"ion-col",24),h["\u0275\u0275elementStart"](17,"ion-item"),h["\u0275\u0275elementStart"](18,"ion-label"),h["\u0275\u0275text"](19,"Period"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](20,"ion-col",25),h["\u0275\u0275elementStart"](21,"ion-item"),h["\u0275\u0275elementStart"](22,"ion-label"),h["\u0275\u0275text"](23,"From"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](24,"ion-datetime",26),h["\u0275\u0275listener"]("ngModelChange",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().from_date=t}))("ngModelChange",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().fromDate(t)})),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](25,"ion-item"),h["\u0275\u0275elementStart"](26,"ion-label"),h["\u0275\u0275text"](27,"To"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](28,"ion-datetime",26),h["\u0275\u0275listener"]("ngModelChange",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().date=t}))("ngModelChange",(function(t){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().selectDate(t)})),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](29,"ion-item"),h["\u0275\u0275elementStart"](30,"ion-button",27),h["\u0275\u0275listener"]("click",(function(){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().filter()})),h["\u0275\u0275text"](31,"Filter"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275template"](32,b,3,0,"ion-list",15),h["\u0275\u0275template"](33,k,3,0,"ion-card",15),h["\u0275\u0275template"](34,I,2,1,"div",15),h["\u0275\u0275elementEnd"]()}if(2&e){const e=h["\u0275\u0275nextContext"]();h["\u0275\u0275advance"](10),h["\u0275\u0275property"]("value",e.all)("ngModel",e.subjects),h["\u0275\u0275advance"](3),h["\u0275\u0275property"]("ngForOf",e.subjectName),h["\u0275\u0275advance"](11),h["\u0275\u0275propertyInterpolate"]("min",e.min_date),h["\u0275\u0275propertyInterpolate"]("max",e.max_date),h["\u0275\u0275propertyInterpolate"]("placeholder",e.today),h["\u0275\u0275property"]("ngModel",e.from_date),h["\u0275\u0275advance"](4),h["\u0275\u0275propertyInterpolate"]("min",e.min_date),h["\u0275\u0275propertyInterpolate"]("max",e.max_date),h["\u0275\u0275propertyInterpolate"]("placeholder",e.today),h["\u0275\u0275property"]("ngModel",e.date),h["\u0275\u0275advance"](4),h["\u0275\u0275property"]("ngIf",0===e.homeworks.length&&1===e.fake),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf",0==e.homeworks.length&&0===e.fake),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf",e.homeworks.length>0)}}function M(e,t){if(1&e){const e=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"ion-fab",38),h["\u0275\u0275listener"]("click",(function(){return h["\u0275\u0275restoreView"](e),h["\u0275\u0275nextContext"]().addfeed()})),h["\u0275\u0275elementStart"](1,"ion-fab-button",39),h["\u0275\u0275element"](2,"ion-icon",40),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()}}let j=(()=>{class e{constructor(e,t,n,o,a){this.authService=e,this.route=t,this.router=n,this.session=o,this.alert=a,this.hidden=!0,this.filtered=0,this.segment="homeworks",this.posts=new Array,this.homeworks=new Array,this.fake=1,this.all="all",setTimeout(()=>{this.fake=0},3e3),this.session.sessionTimeOut(),this.route.queryParams.subscribe(e=>{this.router.getCurrentNavigation().extras.state&&(this.student=this.router.getCurrentNavigation().extras.state.details,this.assets=null===this.student.student_image?1:`https://${this.student.school}.eduweb.co.ke/assets/students/${this.student.student_image}`)}),this.today=d().format("DD MMM YYYY"),this.min_date=2019,this.max_date=2020}ngOnInit(){}ionViewWillEnter(){return Object(l.a)(this,void 0,void 0,(function*(){yield this.authService.checkFeed().then(e=>{console.log(e),this.feedback=e}),yield this.authService.posts(this.student.school,this.student.student_id,1).subscribe(e=>{this.data=e,this.posts=void 0===this.data.data.posts?[]:this.data.data.posts}),yield this.authService.homeworks(this.student.school,this.student.student_id).subscribe(e=>{this.data1=e,this.homeworks=void 0===this.data1.data.homework?[]:this.data1.data.homework,this.subjectName=void 0===this.data1.data.subjects?[]:this.data1.data.subjects,console.log(JSON.stringify(this.homeworks))})}))}onChange(e){this.subject=e.target.value,"all"===this.subject?this.homeworks=void 0===this.data1.data.homework?[]:this.data1.data.homework:(this.homeworks=void 0===this.data1.data.homework?[]:this.data1.data.homework,this.homeworks=this.homeworks.filter(e=>e.subject_name===this.subject))}fromDate(e){"undefined"===this.subject?this.alert.presentToast("Subject cannot be null"):(this.ok=new Date(e).getTime(),localStorage.setItem("from",this.ok))}selectDate(e){this.to=new Date(e).getTime(),this.from=this.ok,localStorage.setItem("to",this.to)}filter(){const e=Number(localStorage.getItem("from"))-864e5,t=Number(localStorage.getItem("to"));console.log("from "+e+" to "+t),this.homeworks=void 0===this.data1.data.homework?[]:this.data1.data.homework;var n=this.homeworks.filter(n=>{var o=n.assigned_date.substr(0,10),a=new Date(o).getTime();return"all"===this.subject?a>=e&&a<=t&&n.subject_name:a>=e&&a<=t&&n.subject_name===this.subject});this.homeworks=n}formatDate(e){return d(e).format("MMM D, YYYY")}segmentChanged(e){}filterHomework(){1==this.hidden?(document.getElementById("filter").hidden=!1,this.hidden=!1):(document.getElementById("filter").hidden=!0,this.hidden=!0,this.homeworks=void 0===this.data1.data.homework?[]:this.data1.data.homework)}addfeed(){this.router.navigate(["feedback"],{})}openHomework(e,t){this.router.navigate(["homework"],{state:{details:e,school:this.student.school,student_id:this.student.student_id,student:this.student.first_name+" "+this.student.last_name}})}}return e.\u0275fac=function(t){return new(t||e)(h["\u0275\u0275directiveInject"](s.a),h["\u0275\u0275directiveInject"](i.a),h["\u0275\u0275directiveInject"](i.g),h["\u0275\u0275directiveInject"](m.a),h["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=h["\u0275\u0275defineComponent"]({type:e,selectors:[["app-blog"]],decls:22,vars:10,consts:[["color","primary"],["slot","start",2,"font-size","14px"],["text","","icon","chevron-back"],["slot","start",4,"ngIf"],[2,"text-transform","uppercase"],["value","homeworks","mode","md",3,"ngModel","ionChange","ngModelChange"],["value","homeworks"],["value","posts"],["scrollY","true",1,"ion-no-padding"],[3,"ngSwitch"],[4,"ngSwitchCase"],["vertical","bottom","horizontal","end","slot","fixed",3,"click",4,"ngIf"],["slot","start"],[3,"src"],["size","32","name","happy-outline",2,"font-size","2em"],[4,"ngIf"],["name","lines-small","color","primary",2,"text-align","center","margin-left","50%","margin-right","50%"],[4,"ngFor","ngForOf"],[3,"innerHTML"],["size","small",2,"color","black",3,"click"],["slot","end","name","chevron-down"],["id","filter","hidden","",2,"padding-left","8px","padding-right","8px"],["placeholder","All","cancelText","Cancel","okText","Ok",3,"value","ngModel","ngModelChange","ionChange"],["value","all"],["col-2",""],["col-10",""],["displayFormat","DD MMM YYYY","doneText","Ok","cancelText","Cancel",3,"min","max","placeholder","ngModel","ngModelChange"],["slot","end","color","dark",3,"click"],[2,"font-size","small",3,"value"],[2,"padding","0px"],[4,"ngIf","ngIfElse"],["not_seen",""],[2,"padding","10px",3,"click"],["size","32","name","book","slot","start",2,"top","0px","color","#397C49","position","relative"],[2,"min-width","100%","text-transform","uppercase","font-size","12px","color","#397C49"],[1,"news"],["size","32","name","book","slot","start",2,"top","0px","color","black","position","relative"],[2,"min-width","100%","text-transform","uppercase","font-size","12px","color","black"],["vertical","bottom","horizontal","end","slot","fixed",3,"click"],["color","tertiary"],["name","chatbox-ellipses"]],template:function(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"ion-header"),h["\u0275\u0275elementStart"](1,"ion-toolbar",0),h["\u0275\u0275elementStart"](2,"ion-buttons",1),h["\u0275\u0275element"](3,"ion-back-button",2),h["\u0275\u0275text"](4,"HOMEWORK & POSTS "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](5,"ion-item"),h["\u0275\u0275template"](6,p,2,1,"ion-avatar",3),h["\u0275\u0275template"](7,u,2,0,"ion-avatar",3),h["\u0275\u0275elementStart"](8,"ion-label",4),h["\u0275\u0275text"](9),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](10,"ion-segment",5),h["\u0275\u0275listener"]("ionChange",(function(e){return t.segmentChanged(e)}))("ngModelChange",(function(e){return t.segment=e})),h["\u0275\u0275elementStart"](11,"ion-segment-button",6),h["\u0275\u0275elementStart"](12,"ion-label"),h["\u0275\u0275text"](13,"Homework"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](14,"ion-segment-button",7),h["\u0275\u0275elementStart"](15,"ion-label"),h["\u0275\u0275text"](16,"Posts"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](17,"ion-content",8),h["\u0275\u0275elementStart"](18,"div",9),h["\u0275\u0275template"](19,S,4,3,"div",10),h["\u0275\u0275template"](20,_,35,14,"div",10),h["\u0275\u0275elementEnd"](),h["\u0275\u0275template"](21,M,3,0,"ion-fab",11),h["\u0275\u0275elementEnd"]()),2&e&&(h["\u0275\u0275advance"](6),h["\u0275\u0275property"]("ngIf",1!==t.assets),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf",1===t.assets),h["\u0275\u0275advance"](2),h["\u0275\u0275textInterpolate3"]("",t.student.first_name," ",t.student.middle_name," ",t.student.last_name," "),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngModel",t.segment),h["\u0275\u0275advance"](8),h["\u0275\u0275property"]("ngSwitch",t.segment),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngSwitchCase","posts"),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngSwitchCase","homeworks"),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf","true"===t.feedback))},directives:[r.q,r.L,r.g,r.d,r.e,r.t,o.i,r.u,r.C,r.V,a.NgControlStatus,a.NgModel,r.D,r.l,o.j,o.k,r.c,r.r,r.h,r.i,r.v,r.H,o.h,r.j,r.w,r.f,r.E,r.F,r.B,r.k,r.m,r.n,r.o],styles:["ion-segment[_ngcontent-%COMP%]{text-transform:none}ion-segment[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:#fff;font-size:12px}ion-content[_ngcontent-%COMP%]{font-size:12px}ion-content[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{color:#000;font-size:12px}ion-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{color:#000}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{-webkit-transform:translateZ(0) translateZ(0)}"]}),e})();n.d(t,"BlogPageModule",(function(){return P}));const O=[{path:"",component:j}];let P=(()=>{class e{}return e.\u0275mod=h["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.b,a.FormsModule,r.M,i.i.forChild(O)]]}),e})()}}]);
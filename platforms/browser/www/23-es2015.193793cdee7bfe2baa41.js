(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{wMLH:function(e,t,s){"use strict";s.r(t);var r=s("ofXK"),a=s("3Pt+"),i=s("tyNb"),l=s("TEn/"),h=s("lGQG"),n=s("MO+k"),o=s("xG9w"),b=s("fXoL");const d=["barChart"],u=["lineChart"];let c=(()=>{class e{constructor(e,t,s){this.authService=e,this.route=t,this.router=s,this.reportCards=new Array,this.exam_marks=new Array,this.route.queryParams.subscribe(e=>{this.router.getCurrentNavigation().extras.state&&(this.student=this.router.getCurrentNavigation().extras.state.details,this.reportCards=this.router.getCurrentNavigation().extras.state.reports,this.exam_marks=void 0===this.reportCards.exam_marks?[]:this.reportCards.exam_marks)})}ngOnInit(){}ionViewWillEnter(){this.labels=this.reportCards,new Array,this.subjects=[],this.createChart()}createChart(){this.terms=[],this.type=[];for(var e=0;e<this.reportCards.exam_marks.length;e++)this.type.push(this.reportCards.exam_marks[e].exam_type);this.math=[],this.english=[],this.kiswahli=[],this.science=[],this.ssre=[];for(var t=0;t<this.exam_marks.length;t++){let e;e=o.a(this.exam_marks[t].exam_marks,"subject_name"),this.math.push(e[2].mark),this.english.push(e[4].mark),this.kiswahli.push(e[7].mark),this.science.push(e[8].mark),this.ssre.push(e[10].mark),console.log(e)}for(var s=0;s<this.exam_marks[0].exam_marks.length;s++){let e;e=o.a(this.exam_marks[0].exam_marks,"subject_name"),null==e[s].parent_subject_id&&this.subjects.push(e[s].subject_name)}null==this.terms&&null==this.terms||(this.bars=new n.Chart(this.barChart.nativeElement,{type:"line",data:{labels:this.type,datasets:[{label:this.subjects[0],data:this.math,fill:!1,borderWidth:2,borderColor:"orange"},{label:this.subjects[1],data:this.english,borderWidth:2,fill:!1,borderColor:"black"},{label:this.subjects[2],data:this.kiswahli,borderWidth:2,borderColor:"blue",fill:!1},{label:this.subjects[3],data:this.science,borderWidth:2,borderColor:"red",fill:!1},{label:this.subjects[4],data:this.ssre,borderWidth:2,borderColor:"green",fill:!1}]},options:{title:{display:!0,text:"Analysis for "+this.reportCards.class_name+" "+this.reportCards.term_name},maintainAspectRatio:!1,gridLines:{display:!1},scales:{yAxes:[{scaleLabel:{display:!0,labelString:"EXAM MARKS",fontStyle:"bold"},ticks:{beginAtZero:!0,suggestedMax:100}}],xAxes:[{scaleLabel:{display:!0,labelString:"EXAM TYPE",fontStyle:"bold"},ticks:{}}]}}}))}subChart(){this.terms=[];for(var e=0;e<this.labels.length;e++)this.terms.push(this.labels[e].term_name),this.marks.push(this.labels[e].overall_marks_and_grade[0].this_term_marks_and_grade[0].overall_mark.substr(0,3));for(var t=0;t<this.labels.length;t++)this.math.push(this.labels[t].subject_overalls_column[0].subject_overalls[0].average),this.english.push(this.labels[t].subject_overalls_column[0].subject_overalls[1].average),this.kiswahli.push(this.labels[t].subject_overalls_column[0].subject_overalls[2].average),this.science.push(this.labels[t].subject_overalls_column[0].subject_overalls[3].average),this.ssre.push(this.labels[t].subject_overalls_column[0].subject_overalls[4].average);null==this.terms&&null==this.terms||(this.bars=new n.Chart(this.lineChart.nativeElement,{type:"line",data:{labels:this.terms,datasets:[{label:this.subjects[0],data:this.math,fill:!1,borderWidth:1,borderColor:"grey"},{label:this.subjects[1],data:this.english,borderWidth:1,fill:!1,borderColor:"black"},{label:this.subjects[2],data:this.kiswahli,borderWidth:1,borderColor:"blue",fill:!1},{label:this.subjects[3],data:this.science,borderWidth:1,borderColor:"red",fill:!1},{label:this.subjects[4],data:this.ssre,borderWidth:1,borderColor:"green",fill:!1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0,suggestedMax:100}}]}}}))}onlyUnique(e,t,s){return s.indexOf(e)===t}}return e.\u0275fac=function(t){return new(t||e)(b["\u0275\u0275directiveInject"](h.a),b["\u0275\u0275directiveInject"](i.a),b["\u0275\u0275directiveInject"](i.g))},e.\u0275cmp=b["\u0275\u0275defineComponent"]({type:e,selectors:[["app-analysis"]],viewQuery:function(e,t){var s;1&e&&(b["\u0275\u0275viewQuery"](d,!0),b["\u0275\u0275viewQuery"](u,!0)),2&e&&(b["\u0275\u0275queryRefresh"](s=b["\u0275\u0275loadQuery"]())&&(t.barChart=s.first),b["\u0275\u0275queryRefresh"](s=b["\u0275\u0275loadQuery"]())&&(t.lineChart=s.first))},decls:8,vars:1,consts:[["color","primary"],["slot","start",2,"font-size","14px"],["text","","icon","chevron-back"],[2,"height","250px"],["barChart",""]],template:function(e,t){1&e&&(b["\u0275\u0275elementStart"](0,"ion-header"),b["\u0275\u0275elementStart"](1,"ion-toolbar",0),b["\u0275\u0275elementStart"](2,"ion-buttons",1),b["\u0275\u0275element"](3,"ion-back-button",2),b["\u0275\u0275text"](4),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementEnd"](),b["\u0275\u0275elementStart"](5,"ion-content"),b["\u0275\u0275element"](6,"canvas",3,4),b["\u0275\u0275elementEnd"]()),2&e&&(b["\u0275\u0275advance"](4),b["\u0275\u0275textInterpolate1"]("Analysis for ",t.reportCards.term_name," "))},directives:[l.q,l.L,l.g,l.d,l.e,l.l],styles:[""]}),e})();s.d(t,"AnalysisPageModule",(function(){return p}));const m=[{path:"",component:c}];let p=(()=>{class e{}return e.\u0275mod=b["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=b["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.b,a.FormsModule,l.M,i.i.forChild(m)]]}),e})()}}]);
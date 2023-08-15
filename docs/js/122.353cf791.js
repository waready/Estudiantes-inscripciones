"use strict";(globalThis["webpackChunkcharts_inscritos"]=globalThis["webpackChunkcharts_inscritos"]||[]).push([[122],{6122:(e,a,t)=>{t.r(a),t.d(a,{default:()=>pe});var s=t(9835);const o={class:"row justify-center"},n={class:"col-8"},r={class:"row q-col-gutter-sm q-py-sm"},i={class:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},l={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},c={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},d={class:"col-lg-12 col-md-12 col-sm-12 col-xs-12"};function u(e,a,t,u,m,p){const h=(0,s.up)("q-btn"),f=(0,s.up)("resumen-chart"),b=(0,s.up)("pie-chart"),g=(0,s.up)("bar-chart"),w=(0,s.up)("TableChart"),y=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(y,{class:"q-pa-sm"},{default:(0,s.w5)((()=>[(0,s._)("div",o,[(0,s._)("div",n,[(0,s.Wm)(h,{size:"15px",class:"full-width q-mb-md",color:"secondary",label:"Actualizar Datos",icon:"refresh",onClick:a[0]||(a[0]=a=>e.recargar())})])]),(0,s._)("div",r,[(0,s._)("div",i,[(0,s.Wm)(f)]),(0,s._)("div",l,[(0,s.Wm)(b,{class:"shadow-2 rounded-borders"})]),(0,s._)("div",c,[(0,s.Wm)(g,{class:"shadow-2 rounded-borders"})]),(0,s._)("div",d,[(0,s.Wm)(w)])])])),_:1})}function m(e,a,t,o,n,r){const i=(0,s.up)("q-tooltip"),l=(0,s.up)("q-btn"),c=(0,s.up)("q-card-section"),d=(0,s.up)("ECharts"),u=(0,s.up)("q-card");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(u,{class:"no-shadow",bordered:""},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{class:"text-h6"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Cantidad Inscritos por Areas & Sedes "),(0,s.Wm)(l,{icon:"fa fa-download",class:"float-right",onClick:e.SaveImage,flat:"",dense:""},{default:(0,s.w5)((()=>[(0,s.Wm)(i,null,{default:(0,s.w5)((()=>[(0,s.Uk)("Download PNG")])),_:1})])),_:1},8,["onClick"])])),_:1}),(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[(0,s.Wm)(d,{ref:"barchart",option:e.options,class:"q-mt-md",resizable:!0,autoresize:"",style:{height:"285px"}},null,8,["option"])])),_:1})])),_:1})])}t(9665),t(6890);var p=t(5213),h=t(993),f=t(7524);const b=(0,s.aZ)({name:"BarChart",mounted(){this.getInscritos()},data(){return{options:{legend:{bottom:10},tooltip:{},dataset:{source:[]},grid:{left:"3%",right:"4%",bottom:"20%",top:"5%",containLabel:!0},xAxis:{type:"category"},yAxis:{},series:[{type:"bar"},{type:"bar"},{type:"bar"}]}}},components:{ECharts:p.ZP},methods:{SaveImage(){const e=this.$refs.barchart.getDataURL(),a=document.createElement("a");document.body.appendChild(a),a.href=e,a.target="_self",a.download="BarChart.png",a.click()},async getInscritos(){const e=await f.Z.get("https://sistemas.cepreuna.edu.pe/api/v1/alumnos/inscritos",{headers:{Authorization:"cepreuna_v1_api"}});let a=e.data.areas.reduce((function(e,a){var t=e.findIndex((e=>e[0]===a.sede));return-1===t&&(e.push([a.sede,0,0,0]),t=e.length-1),"Sociales"===a.areas?e[t][3]+=a.cantidad:"Ingenierías"===a.areas?e[t][1]+=a.cantidad:"Biomédicas"===a.areas&&(e[t][2]+=a.cantidad),e}),[]);a.unshift(["Areas","Ingenierías","Biomédicas","Sociales"]),this.options.dataset.source=a}}});var g=t(1639),w=t(4458),y=t(3190),C=t(9379),v=t(6858),S=t(9984),_=t.n(S);const Z=(0,g.Z)(b,[["render",m]]),W=Z;function x(e,a,t,o,n,r){const i=(0,s.up)("q-card-section"),l=(0,s.up)("ECharts"),c=(0,s.up)("q-card");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(c,{class:"no-shadow",bordered:""},{default:(0,s.w5)((()=>[(0,s.Wm)(i,{class:"text-h6"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Cantidad Inscritos por Sedes ")])),_:1}),(0,s.Wm)(i,null,{default:(0,s.w5)((()=>[(0,s.Wm)(l,{option:e.options,class:"q-mt-md",resizable:!0,autoresize:"",style:{height:"285px"}},null,8,["option"])])),_:1})])),_:1})])}_()(b,"components",{QCard:w.Z,QCardSection:y.Z,QBtn:C.Z,QTooltip:v.Z});const k=(0,s.aZ)({name:"PieChart",components:{ECharts:p.ZP},mounted(){this.getInscritos()},data(){return{options:{tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{top:"bottom",bottom:"5%",left:"center"},series:[{name:"Cantidad",type:"pie",radius:["40%","70%"],center:["50%","35%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"40",fontWeight:"bold"}},labelLine:{show:!1},data:[]}]}}},methods:{async getInscritos(){const e=await f.Z.get("https://sistemas.cepreuna.edu.pe/api/v1/alumnos/inscritos",{headers:{Authorization:"cepreuna_v1_api"}});let a=e.data.sedes.map((e=>({value:e.cantidad,name:e.sede})));this.options.series[0].data=a}}}),q=(0,g.Z)(k,[["render",x]]),A=q;function I(e,a,t,o,n,r){const i=(0,s.up)("q-card-section"),l=(0,s.up)("ECharts"),c=(0,s.up)("q-card");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(c,{class:"no-shadow",bordered:""},{default:(0,s.w5)((()=>[(0,s.Wm)(i,{class:"text-h6"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Stacked Area Chart ")])),_:1}),(0,s.Wm)(i,null,{default:(0,s.w5)((()=>[(0,s.Wm)(l,{option:e.options,class:"q-mt-md",resizable:!0,autoresize:"",style:{height:"285px"}},null,8,["option"])])),_:1})])),_:1})])}_()(k,"components",{QCard:w.Z,QCardSection:y.Z});const Q=(0,s.aZ)({name:"AreaChart",setup(){return{options:{tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["Email marketing","Affiliate advertising","Video advertising","Direct access","Search engine"],bottom:0},grid:{left:"3%",right:"4%",bottom:"10%",top:"5%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]}],yAxis:[{type:"value"}],series:[{name:"Email marketing",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[120,132,101,134,90,230,210]},{name:"Affiliate Advertising",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[220,182,191,234,290,330,310]},{name:"Video ads",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[150,232,201,154,190,330,410]},{name:"Direct access",type:"line",stack:"Total",areaStyle:{},emphasis:{focus:"series"},data:[320,332,301,334,390,330,320]},{name:"Search Engine",type:"line",stack:"Total",label:{show:!0,position:"top"},areaStyle:{},emphasis:{focus:"series"},data:[820,932,901,934,1290,1330,1320]}]}}},components:{ECharts:p.ZP}}),T=(0,g.Z)(Q,[["render",I]]),L=T;_()(Q,"components",{QCard:w.Z,QCardSection:y.Z});var z=t(6970);const D=(0,s._)("div",{class:"text-h6"},"Resumen General",-1),P={class:"col-lg-12 col-sm-12 col-xs-12 col-md-12"},E={class:"row justify-center"};function F(e,a,t,o,n,r){const i=(0,s.up)("q-icon"),l=(0,s.up)("q-item-section"),c=(0,s.up)("q-item"),d=(0,s.up)("q-avatar"),u=(0,s.up)("q-item-label"),m=(0,s.up)("q-card-section"),p=(0,s.up)("q-card");return(0,s.wg)(),(0,s.j4)(p,{class:"q-mt-sm shadow",bordered:""},{default:(0,s.w5)((()=>[(0,s.Wm)(m,{class:"text-h6 q-pb-none"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[(0,s.Wm)(l,{avatar:"",class:""},{default:(0,s.w5)((()=>[(0,s.Wm)(i,{color:"blue",name:"fas fa-chart-line",size:"44px"})])),_:1}),(0,s.Wm)(l,null,{default:(0,s.w5)((()=>[D])),_:1})])),_:1}),(0,s.Wm)(m,{class:"row"},{default:(0,s.w5)((()=>[(0,s._)("div",P,[(0,s._)("div",E,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.sedes,((e,a)=>((0,s.wg)(),(0,s.iD)("div",{class:"col-lg-2 col-md-2 col-xs-6 col-sm-6",key:a},[(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[(0,s.Wm)(l,{top:"",avatar:""},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{color:"blue","text-color":"white",icon:"fa fa-bar-chart"})])),_:1}),(0,s.Wm)(l,null,{default:(0,s.w5)((()=>[(0,s.Wm)(u,{class:"text-h6 text-blue text-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,z.zw)(e.cantidad),1)])),_:2},1024),(0,s.Wm)(u,{caption:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,z.zw)(e.sede),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])))),128))])])])),_:1})])),_:1})])),_:1})}const U=(0,s.aZ)({name:"Resumen",mounted(){this.getInscritos()},data(){return{sedes:[]}},methods:{async getInscritos(){const e=await f.Z.get("https://sistemas.cepreuna.edu.pe/api/v1/alumnos/inscritos",{headers:{Authorization:"cepreuna_v1_api"}});this.sedes=e.data.sedes}}});var N=t(490),B=t(1233),R=t(2857),K=t(1357),G=t(3115);const M=(0,g.Z)(U,[["render",F]]),O=M;function j(e,a,t,o,n,r){const i=(0,s.up)("q-card-section"),l=(0,s.up)("ECharts"),c=(0,s.up)("q-card");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(c,{class:"no-shadow",bordered:""},{default:(0,s.w5)((()=>[(0,s.Wm)(i,{class:"text-h6"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Line Chart ")])),_:1}),(0,s.Wm)(i,null,{default:(0,s.w5)((()=>[(0,s.Wm)(l,{option:e.options,class:"q-mt-md",resizable:!0,autoresize:"",style:{height:"300px"}},null,8,["option"])])),_:1})])),_:1})])}_()(U,"components",{QCard:w.Z,QCardSection:y.Z,QItem:N.Z,QItemSection:B.Z,QIcon:R.Z,QAvatar:K.Z,QItemLabel:G.Z});const H=(0,s.aZ)({name:"LineChart",components:{ECharts:p.ZP},data(){return{options:{color:["#80FFA5","#00DDFF","#37A2FF","#FF0087","#FFBF00"],tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["Line 1","Line 2","Line 3","Line 4","Line 5"],bottom:10},grid:{left:"3%",right:"4%",bottom:"20%",top:"5%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]}],yAxis:[{type:"value"}],series:[{name:"Line 1",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new h.Q.o(0,0,0,1,[{offset:0,color:"rgba(128, 255, 165)"},{offset:1,color:"rgba(1, 191, 236)"}])},emphasis:{focus:"series"},data:[140,232,101,264,90,340,250]},{name:"Line 2",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new h.Q.o(0,0,0,1,[{offset:0,color:"rgba(0, 221, 255)"},{offset:1,color:"rgba(77, 119, 255)"}])},emphasis:{focus:"series"},data:[120,282,111,234,220,340,310]},{name:"Line 3",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new h.Q.o(0,0,0,1,[{offset:0,color:"rgba(55, 162, 255)"},{offset:1,color:"rgba(116, 21, 219)"}])},emphasis:{focus:"series"},data:[320,132,201,334,190,130,220]},{name:"Line 4",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new h.Q.o(0,0,0,1,[{offset:0,color:"rgba(255, 0, 135)"},{offset:1,color:"rgba(135, 0, 157)"}])},emphasis:{focus:"series"},data:[220,402,231,134,190,230,120]},{name:"Line 5",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,label:{show:!0,position:"top"},areaStyle:{opacity:.8,color:new h.Q.o(0,0,0,1,[{offset:0,color:"rgba(255, 191, 0)"},{offset:1,color:"rgba(224, 62, 76)"}])},emphasis:{focus:"series"},data:[220,302,181,234,210,290,150]}]}}}}),J=(0,g.Z)(H,[["render",j]]),V=J;function X(e,a,t,o,n,r){const i=(0,s.up)("q-card-section"),l=(0,s.up)("ECharts"),c=(0,s.up)("q-card");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(c,{class:"no-shadow",bordered:""},{default:(0,s.w5)((()=>[(0,s.Wm)(i,{class:"text-h6"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Scatter Chart ")])),_:1}),(0,s.Wm)(i,null,{default:(0,s.w5)((()=>[(0,s.Wm)(l,{option:e.options,class:"q-mt-md",resizable:!0,autoresize:"",style:{height:"285px"}},null,8,["option"])])),_:1})])),_:1})])}_()(H,"components",{QCard:w.Z,QCardSection:y.Z});var Y=[[[28604,77,17096869,"Australia",1990],[31163,77.4,27662440,"Canada",1990],[1516,68,1154605773,"China",1990],[13670,74.7,10582082,"Cuba",1990],[28599,75,4986705,"Finland",1990],[29476,77.1,56943299,"France",1990],[31476,75.4,78958237,"Germany",1990],[28666,78.1,254830,"Iceland",1990],[1777,57.7,870601776,"India",1990],[29550,79.1,122249285,"Japan",1990],[2076,67.9,20194354,"North Korea",1990],[12087,72,42972254,"South Korea",1990],[24021,75.4,3397534,"New Zealand",1990],[43296,76.8,4240375,"Norway",1990],[10088,70.8,38195258,"Poland",1990],[19349,69.6,147568552,"Russia",1990],[10670,67.3,53994605,"Turkey",1990],[26424,75.7,57110117,"United Kingdom",1990],[37062,75.4,252847810,"United States",1990]],[[44056,81.8,23968973,"Australia",2015],[43294,81.7,35939927,"Canada",2015],[13334,76.9,1376048943,"China",2015],[21291,78.5,11389562,"Cuba",2015],[38923,80.8,5503457,"Finland",2015],[37599,81.9,64395345,"France",2015],[44053,81.1,80688545,"Germany",2015],[42182,82.8,329425,"Iceland",2015],[5903,66.8,1311050527,"India",2015],[36162,83.5,126573481,"Japan",2015],[1390,71.4,25155317,"North Korea",2015],[34644,80.7,50293439,"South Korea",2015],[34186,80.6,4528526,"New Zealand",2015],[64304,81.6,5210967,"Norway",2015],[24787,77.3,38611794,"Poland",2015],[23038,73.13,143456918,"Russia",2015],[19360,76.5,78665830,"Turkey",2015],[38225,81.4,64715810,"United Kingdom",2015],[53354,79.1,321773631,"United States",2015]]];const $=(0,s.aZ)({name:"ScatterPlot",components:{ECharts:p.ZP},setup(){return{options:{xAxis:{},yAxis:{scale:!0},grid:{bottom:"15%"},series:[{name:"1990",data:Y[0],type:"scatter",symbolSize:function(e){return Math.sqrt(e[2])/500},emphasis:{focus:"self"},labelLayout:{y:20,align:"center",hideOverlap:!0,moveOverlap:"shiftX"},labelLine:{show:!0,length2:5,lineStyle:{color:"#bbb"}},label:{show:!0,formatter:function(e){return e.data[3]},minMargin:10,position:"top"}}]},scatter_chart:null}}}),ee=(0,g.Z)($,[["render",X]]),ae=ee;_()($,"components",{QCard:w.Z,QCardSection:y.Z});const te={class:"q-pa-md"};function se(e,a,t,o,n,r){const i=(0,s.up)("q-table");return(0,s.wg)(),(0,s.iD)("div",te,[(0,s.Wm)(i,{flat:"",bordered:"",title:"Cantidad de Inscritos por Turnos",rows:n.rows,columns:n.columns,"row-key":"name",separator:"cell",pagination:n.initialPagination,class:"table-bg",dark:""},null,8,["rows","columns","pagination"])])}var oe=t(499);const ne=[{name:"cantidad",align:"center",label:"CANTIDAD #",field:"cantidad",sortable:!0},{name:"denominacion",align:"center",label:"DENOMINACION",field:"denominacion",sortable:!0},{name:"areas",align:"center",label:"AREAS",field:"areas",sortable:!0},{name:"sede",align:"center",label:"SEDE",field:"sede",sortable:!0}],re={mounted(){this.getInscritos()},data(){return{initialPagination:{sortBy:"desc",descending:!1,rowsPerPage:10},separator:(0,oe.iH)("vertical"),columns:ne,rows:[]}},methods:{async getInscritos(){const e=await f.Z.get("https://sistemas.cepreuna.edu.pe/api/v1/alumnos/inscritos",{headers:{Authorization:"cepreuna_v1_api"}});this.rows=e.data.turnos}}};var ie=t(2254);const le=(0,g.Z)(re,[["render",se],["__scopeId","data-v-12b2946c"]]),ce=le;_()(re,"components",{QTable:ie.Z});const de=(0,s.aZ)({name:"IndexPage",components:{BarChart:W,PieChart:A,AreaChart:L,ResumenChart:O,LineChart:V,ScatterChart:ae,TableChart:ce},methods:{recargar(){window.location.reload(!0)}}});var ue=t(9885);const me=(0,g.Z)(de,[["render",u]]),pe=me;_()(de,"components",{QPage:ue.Z,QBtn:C.Z})}}]);
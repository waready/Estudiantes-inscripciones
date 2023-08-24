"use strict";(globalThis["webpackChunkcharts_inscritos"]=globalThis["webpackChunkcharts_inscritos"]||[]).push([[668],{4363:(e,a,t)=>{t.d(a,{Z:()=>w});var s=t(9835),n=t(6970);const r={key:0};function o(e,a,t,o,i,d){const l=(0,s.up)("q-tooltip"),c=(0,s.up)("q-btn"),u=(0,s.up)("q-card-section"),p=(0,s.up)("ECharts"),m=(0,s.up)("q-card");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(m,{class:"no-shadow",bordered:""},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{class:"text-h6"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Cantidad Inscritos por Areas & Sedes "+(0,n.zw)(e.suma)+" ",1),e.sede?((0,s.wg)(),(0,s.iD)("h5",r,"Sede: "+(0,n.zw)(e.sede),1)):(0,s.kq)("",!0),(0,s.Wm)(c,{icon:"fa fa-download",class:"float-right",onClick:e.SaveImage,flat:"",dense:""},{default:(0,s.w5)((()=>[(0,s.Wm)(l,null,{default:(0,s.w5)((()=>[(0,s.Uk)("Download PNG")])),_:1})])),_:1},8,["onClick"])])),_:1}),(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s.Wm)(p,{ref:"barchart",option:e.options,class:"q-mt-md",resizable:!0,autoresize:"",style:{height:"285px"}},null,8,["option"])])),_:1})])),_:1})])}t(9665),t(6890);var i=t(5213),d=(t(993),t(7524));const l=(0,s.aZ)({name:"BarChart",props:["sede"],mounted(){this.getInscritos()},data(){return{options:{legend:{bottom:10},tooltip:{},dataset:{source:[]},grid:{left:"3%",right:"4%",bottom:"20%",top:"5%",containLabel:!0},xAxis:{type:"category"},yAxis:{},series:[{type:"bar"},{type:"bar"},{type:"bar"}]}}},components:{ECharts:i.ZP},methods:{SaveImage(){const e=this.$refs.barchart.getDataURL(),a=document.createElement("a");document.body.appendChild(a),a.href=e,a.target="_self",a.download="BarChart.png",a.click()},async getInscritos(){const e=await d.Z.get("https://sistemas.cepreuna.edu.pe/api/v1/alumnos/inscritos",{headers:{Authorization:"cepreuna_v1_api"}});var a=e.data.areas;this.sede&&(a=e.data.areas.filter((e=>e.sede==this.sede)));let t=a.reduce((function(e,a){var t=e.findIndex((e=>e[0]===a.sede));return-1===t&&(e.push([a.sede,0,0,0]),t=e.length-1),"Sociales"===a.areas?e[t][3]+=a.cantidad:"Ingenierías"===a.areas?e[t][1]+=a.cantidad:"Biomédicas"===a.areas&&(e[t][2]+=a.cantidad),e}),[]);t.unshift(["Areas","Ingenierías","Biomédicas","Sociales"]),this.options.dataset.source=t}}});var c=t(1639),u=t(4458),p=t(3190),m=t(9379),h=t(6858),g=t(9984),b=t.n(g);const f=(0,c.Z)(l,[["render",o]]),w=f;b()(l,"components",{QCard:u.Z,QCardSection:p.Z,QBtn:m.Z,QTooltip:h.Z})},9880:(e,a,t)=>{t.d(a,{Z:()=>g});var s=t(9835);const n={class:"q-pa-md"};function r(e,a,t,r,o,i){const d=(0,s.up)("q-table");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s.Wm)(d,{flat:"",bordered:"",title:"Cantidad de Inscritos por Turnos",rows:o.rows,columns:o.columns,"row-key":"name",separator:"cell",pagination:o.initialPagination,class:"table-bg",dark:""},null,8,["rows","columns","pagination"])])}var o=t(499),i=t(7524);const d=[{name:"cantidad",align:"center",label:"CANTIDAD #",field:"cantidad",sortable:!0},{name:"denominacion",align:"center",label:"DENOMINACION",field:"denominacion",sortable:!0},{name:"areas",align:"center",label:"AREAS",field:"areas",sortable:!0},{name:"sede",align:"center",label:"SEDE",field:"sede",sortable:!0}],l={mounted(){this.getInscritos()},props:["sede"],data(){return{initialPagination:{sortBy:"desc",descending:!1,rowsPerPage:10},separator:(0,o.iH)("vertical"),columns:d,rows:[]}},methods:{async getInscritos(){const e=await i.Z.get("https://sistemas.cepreuna.edu.pe/api/v1/alumnos/inscritos",{headers:{Authorization:"cepreuna_v1_api"}});var a=e.data.turnos;console.log("sedes ",this.sede),this.sede&&(a=e.data.turnos.filter((e=>e.sede==this.sede))),this.rows=a}}};var c=t(1639),u=t(2254),p=t(9984),m=t.n(p);const h=(0,c.Z)(l,[["render",r],["__scopeId","data-v-779437b2"]]),g=h;m()(l,"components",{QTable:u.Z})},9668:(e,a,t)=>{t.r(a),t.d(a,{default:()=>c});var s=t(9835);function n(e,a,t,n,r,o){const i=(0,s.up)("bar-chart"),d=(0,s.up)("table-chart");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(i,{sede:r.nombre},null,8,["sede"]),(0,s.Wm)(d,{sede:r.nombre},null,8,["sede"])],64)}var r=t(4363),o=t(9880);const i={components:{BarChart:r.Z,TableChart:o.Z},data(){return{nombre:"Puno"}}};var d=t(1639);const l=(0,d.Z)(i,[["render",n]]),c=l}}]);
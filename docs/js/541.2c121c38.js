(globalThis["webpackChunkcharts_inscritos"]=globalThis["webpackChunkcharts_inscritos"]||[]).push([[541],{2541:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>F});var s=t(9835),i=t(1957),r=t(9555),o=t.n(r);const n=e=>((0,s.dD)("data-v-28127d88"),e=e(),(0,s.Cn)(),e),l=n((()=>(0,s._)("div",{class:"text-grey-9 text-h5 text-weight-bold"},"Cepreuna Ficha Simulacro",-1))),p=n((()=>(0,s._)("div",{class:"text-grey-8"},"Recuerda que para recuperar tu ficha, primero tienes que estar registrado en el simulacro",-1))),d={class:"input-container"},u=n((()=>(0,s._)("label",{for:"email"},"Correo Institucional:",-1))),c={class:"input-container"},m=n((()=>(0,s._)("label",{for:"password"},"Contraseña:",-1)));function h(e,a,t,r,n,h){const w=(0,s.up)("q-img"),f=(0,s.up)("q-card-section"),g=(0,s.up)("q-btn"),_=(0,s.up)("q-form"),b=(0,s.up)("q-card"),q=(0,s.up)("q-page"),y=(0,s.up)("q-page-container"),v=(0,s.up)("q-layout");return(0,s.wg)(),(0,s.j4)(v,{view:"lHh Lpr lFf"},{default:(0,s.w5)((()=>[(0,s.Wm)(y,null,{default:(0,s.w5)((()=>[(0,s.Wm)(q,{class:"flex flex-center bg-grey-2"},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{class:"q-pa-md shadow-2 my_card",bordered:""},{default:(0,s.w5)((()=>[(0,s.Wm)(_,{onSubmit:e.login,class:"q-gutter-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(f,{class:"text-center"},{default:(0,s.w5)((()=>[l,p,(0,s.Wm)(w,{src:o()})])),_:1}),(0,s.Wm)(f,null,{default:(0,s.w5)((()=>[(0,s._)("div",d,[u,(0,s.wy)((0,s._)("input",{id:"email",class:"custom-input",type:"email","onUpdate:modelValue":a[0]||(a[0]=a=>e.email=a),required:""},null,512),[[i.nr,e.email]])]),(0,s._)("div",c,[m,(0,s.wy)((0,s._)("input",{id:"password",class:"custom-input",type:"password","onUpdate:modelValue":a[1]||(a[1]=a=>e.password=a),required:""},null,512),[[i.nr,e.password]])])])),_:1}),(0,s.Wm)(f,null,{default:(0,s.w5)((()=>[(0,s.Wm)(g,{style:{"border-radius":"8px"},color:"primary",rounded:"",size:"md",label:"Obtener Ficha","no-caps":"",class:"full-width",type:"submit"})])),_:1}),(0,s.Wm)(f,{class:"text-center q-pt-none"})])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1})])),_:1})}var w=t(9120),f=t(7524);const g=(0,s.aZ)({name:"Login",setup(){return{email:"",password:""}},methods:{async login(){const e=this.$q.notify({spinner:w.Z,message:'<p>Esperando al Servidor &nbsp;<span><i class="fa fa-server" aria-hidden="true"></i> <span> <p>',timeout:0,html:!0});await f.Z.post("https://sistemas.cepreuna.edu.pe/api/v1/ficha/api-get-ficha",{email:this.email,password:this.password},{headers:{Authorization:"cepreuna_v1_api"}}).then((a=>{e(),a.data.status?(location.href="https://sistemas.cepreuna.edu.pe/"+a.data.datos,this.email="",this.password=""):(this.showNotif(a.data.mensajes),this.email="",this.password="")})).catch((a=>{e(),this.showNotif(a.message),this.email="",this.password=""}))},showNotif(e){this.$q.notify({position:"top-right",message:e,color:"negative",icon:"report_problem"})}}});var _=t(1639),b=t(7605),q=t(2133),y=t(9885),v=t(4458),Z=t(8326),x=t(3190),W=t(335),C=t(9379),Q=t(9984),S=t.n(Q);const k=(0,_.Z)(g,[["render",h],["__scopeId","data-v-28127d88"]]),F=k;S()(g,"components",{QLayout:b.Z,QPageContainer:q.Z,QPage:y.Z,QCard:v.Z,QForm:Z.Z,QCardSection:x.Z,QImg:W.Z,QBtn:C.Z})},9555:(e,a,t)=>{e.exports=t.p+"img/logo.f0aa639c.png"}}]);
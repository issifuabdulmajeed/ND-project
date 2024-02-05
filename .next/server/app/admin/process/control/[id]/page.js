(()=>{var e={};e.id=8782,e.ids=[8782],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},8879:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>d,routeModule:()=>x,tree:()=>c});var a=r(67096),l=r(16132),s=r(37284),i=r.n(s),n=r(32564),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);r.d(t,o);let c=["",{children:["admin",{children:["process",{children:["control",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,14256)),"C:\\Users\\issif\\ND-project\\src\\app\\admin\\process\\control\\[id]\\page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,39862)),"C:\\Users\\issif\\ND-project\\src\\app\\admin\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,76661)),"C:\\Users\\issif\\ND-project\\src\\app\\layout.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,29782)),"C:\\Users\\issif\\ND-project\\src\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Users\\issif\\ND-project\\src\\app\\admin\\process\\control\\[id]\\page.tsx"],m="/admin/process/control/[id]/page",u={require:r,loadChunk:()=>Promise.resolve()},x=new a.AppPageRouteModule({definition:{kind:l.x.APP_PAGE,page:"/admin/process/control/[id]/page",pathname:"/admin/process/control/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},97963:(e,t,r)=>{Promise.resolve().then(r.bind(r,3984))},3984:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>EntryControl});var a=r(30784),l=r(9885),s=r(34751),i=r(50981),n=r(57114),o=r(64434),c=r(26896),d=r(49030),m=r(38146),u=r(8021),x=r(91597),p=r(74593),h=r(7625),f=r(11440),k=r.n(f),b=r(21700);function ProcessControlForm({info:e,data:t,title:r,onSubmit:s,isSubmitting:i}){let n=!!(t&&t?.id),[o,f]=(0,l.useState)(e||{}),[g,_]=(0,l.useState)(!1),[j,v]=(0,l.useState)(n),[y,N]=(0,l.useState)(""),P=["customerName","product","quantity","application","standard","color","productCode","createdBy","arrivalDate","machineName"],w={customerName:"M\xfcşteri",product:"\xdcr\xfcn Tanımı",quantity:"Miktar",application:"Uygulama",standard:"Standart",color:"Renk",productCode:"\xdcr\xfcn Kodu",createdBy:"Personel",arrivalDate:"Giriş Tarihi",machineName:"Makine"},[C,q]=(0,l.useState)(n?t:{faultId:"",olcu_Kontrol:"",gorunum_kontrol:"",tork_Kontrol:"",paketleme:"",kontrol_edilen_miktar:0,hatali_miktar:0,makliye_miktar:0,remarks:"",image:"",createdBy:"",result:"",processId:""}),S=[{name:"İYİ",value:"OK"},{name:"İYİ DEĞİL",value:"NOT_OK"}],handleValues=e=>{_(!1),v(!1);let t={[e.target?.name]:e.target?.value};q({...C,...t})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsxs)(k(),{href:"/admin/process",className:"mb-3 flex  w-fit items-center gap-2 text-sm dark:text-white",children:[a.jsx("span",{children:a.jsx(h.U1p,{})}),"Prosesler"]}),a.jsx("h1",{className:"mb-4 text-center text-2xl font-bold md:text-4xl",children:r}),a.jsx("div",{className:"mb-10 grid w-full grid-cols-2 gap-2  sm:grid-cols-3",children:Object.entries(o).map(([e,t],r)=>{if(P.includes(e))return(0,a.jsxs)("div",{className:"flex flex-col flex-nowrap",children:[a.jsx("h4",{className:"mb-0 italic",children:w[e]}),"arrivalDate"===e?(0,a.jsxs)("p",{className:"font-bold",children:[" ",(0,c.o0)(t)," "]}):(0,a.jsxs)("p",{className:"font-bold",children:[" ",t," "]})]},r)})}),g?a.jsx("p",{className:"mb-3 w-full rounded-md bg-red-500 p-2 text-center text-sm  font-bold text-white",children:"L\xfctfen ilgili kontrol alanları boş bırakılmamalı."}):null,(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault();let{result:t}=C;if(!t){_(!0);return}s({...C,image:y,kontrol_edilen_miktar:parseInt(C.kontrol_edilen_miktar),hatali_miktar:parseInt(C.hatali_miktar),makliye_miktar:parseInt(C.makliye_miktar)},n)},className:"w-full",children:[(0,a.jsxs)("div",{className:"mb-8 flex flex-col gap-3 sm:flex-row",children:[a.jsx(x.Z,{extra:"pt-1",label:"\xd6l\xe7\xfc Kontrol\xfc",onChange:handleValues,name:"olcu_Kontrol",children:S.map((e,t)=>a.jsx("option",{value:e.value,selected:n?C.olcu_Kontrol===e.value:null,children:e.name},t))}),a.jsx(x.Z,{extra:"pt-1",label:"G\xf6r\xfcn\xfcm Kontrol\xfc",onChange:handleValues,name:"gorunum_kontrol",children:S.map((e,t)=>a.jsx("option",{value:e.value,selected:n?C.gorunum_kontrol===e.value:null,children:e.name},t))}),a.jsx(x.Z,{extra:"pt-1",label:"Tork Kontrol\xfc",onChange:handleValues,name:"tork_Kontrol",children:S.map((e,t)=>a.jsx("option",{value:e.value,selected:n?C.tork_Kontrol===e.value:null,children:e.name},t))})]}),(0,a.jsxs)("div",{className:"mb-8 flex flex-col gap-3 sm:flex-row",children:[a.jsx(b.Z,{label:"Kontrol Miktarı",onChange:handleValues,type:"number",id:"kontrol_edilen_miktar",name:"kontrol_edilen_miktar",placeholder:"Kontrol Miktarı",extra:"mb-2",min:0,value:C.kontrol_edilen_miktar}),a.jsx(b.Z,{label:"Hatalı Miktarı",onChange:handleValues,type:"number",id:"hatali_miktar",name:"hatali_miktar",placeholder:"Hatalı Miktarı",extra:"mb-2",min:0,value:C.hatali_miktar}),a.jsx(b.Z,{label:"Nakliye Miktarı",onChange:handleValues,type:"number",id:"makliye_miktar",name:"makliye_miktar",placeholder:"Nakliye Miktarı",extra:"mb-2",min:0,value:C.makliye_miktar})]}),a.jsx("div",{className:"mb-8 flex flex-col gap-3 sm:flex-row",children:a.jsx(b.Z,{label:"Paketleme",onChange:handleValues,type:"text",id:"paketleme",name:"paketleme",placeholder:"Paketleme",extra:"mb-2",value:C.paketleme})}),(0,a.jsxs)("div",{className:"mb-6",children:[a.jsx("h2",{className:"mb-3 ml-3  block w-full text-sm font-bold",children:"İlgili Dok\xfcman"}),a.jsx(d.Z,{onChange:e=>N(e),fileType:"all",multiple:!1,_fileName:C.image,_filePath:n?"/uploads/"+C.image:""})]}),a.jsx("div",{className:"w-full",children:a.jsx(m.Z,{label:"A\xe7ıklama",onChange:handleValues,id:"remarks",name:"remarks",placeholder:"A\xe7ıklama",extra:"mb-8",value:C.remarks})}),(0,a.jsxs)("div",{className:"mb-10 w-full",children:[a.jsx("label",{className:"mb-3 ml-3  block w-full font-bold",children:"Sonu\xe7"}),a.jsx("div",{className:"grid w-full grid-cols-2 justify-center gap-2",children:[{value:"ACCEPT",name:"Kabul"},{value:"REJECT",name:"Ret"}].map(e=>(0,a.jsxs)("label",{className:"flex w-full cursor-pointer items-center capitalize",children:[a.jsx(p.Z,{name:"result",value:e.value,onChange:handleValues,checked:C.result===e.value}),a.jsx("p",{className:"ml-3 text-sm font-bold text-navy-700 dark:text-white",children:e.name})]},e.value))})]}),a.jsx(u.Z,{disabled:j,loading:i,extra:"mt-4",text:"SAVE"})]})]}),(0,a.jsxs)("div",{className:"mt-8 flex justify-between text-sm font-bold opacity-40",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{children:["Oluşturan: ",t?.createdBy]}),(0,a.jsxs)("p",{children:["Oluşturulma Tarihi:"," ",t?.createdAt?(0,c.o0)(t?.createdAt):""]})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{children:["G\xfcncelleyen: ",t?.updatedBy]}),(0,a.jsxs)("p",{children:["G\xfcncelleme Tarihi:"," ",t?.updatedAt?(0,c.o0)(t?.updatedAt):""]})]})]})]})}var g=r(74284),_=r(85879),j=r(73837);function EntryControl(){let e=(0,n.useRouter)(),[t,r]=(0,l.useState)(!1),c=(0,n.useParams)(),[d,m]=(0,l.useState)(!1),[u,x]=(0,l.useState)({}),[p,h]=(0,l.useState)({}),{data:f}=(0,g.useSession)();(0,l.useEffect)(()=>{let getSingleProcess=async()=>{m(!0);let{status:e,data:t}=await (0,i.zJ)(c.id);if(200===e){x(t),h(t?.finalControl[0]),m(!1);return}m(!0)};c.id&&getSingleProcess()},[c?.id]);let handleSubmit=async t=>{let[a,l]=t;if(r(!0),l){let t=await (0,i.Fv)({...a,processId:u.id,faultId:u.faultId,updatedBy:f?.user?.name}),{status:l,response:n}=t;if(n?.error){let{message:e,detail:t}=n?.error;s.Am.error("Proses final kontrol başarısız."+e),(0,j.log)(t),r(!1);return}if(200===l){s.Am.success("Proses final kontrol g\xfcncelleme işlemi başarılı."),e.push("/admin/process"),r(!1);return}}let n=await (0,i.Q2)({...a,processId:u.id,faultId:u.faultId,createdBy:f?.user?.name}),{status:o,response:c}=n;if(c?.error){let{message:e,detail:t}=c?.error;s.Am.error("Proses final kontrol ekleme işlemi başarısız."+e),(0,j.log)(t),r(!1);return}if(200===o){s.Am.success("\xdcr\xfcn final kontrol işlemi başarılı."),e.push("/admin/process"),r(!1);return}};return a.jsx(_.Z,{className:"mx-auto mt-4 max-w-[700px] rounded-2xl bg-white px-8 py-10 dark:bg-[#111c44] dark:text-white",children:d?a.jsx(o.kx,{}):a.jsx(ProcessControlForm,{title:"\xdcr\xfcn Final Kontrol Formu",info:u,data:p,isSubmitting:t,onSubmit:(...e)=>handleSubmit(e)})})}},14256:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>s,default:()=>o});var a=r(95153);let l=(0,a.createProxy)(String.raw`C:\Users\issif\ND-project\src\app\admin\process\control\[id]\page.tsx`),{__esModule:s,$$typeof:i}=l,n=l.default,o=n}};var t=require("../../../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[8998,3657,7282,4407,614,580,7625,4997,4138,3008,3763,981,6896,6510,1303,8021,4434,1700,1597,8146,9030,4593],()=>__webpack_exec__(8879));module.exports=r})();
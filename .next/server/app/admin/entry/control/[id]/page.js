(()=>{var e={};e.id=6609,e.ids=[6609],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},89626:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>c});var s=r(67096),a=r(16132),l=r(37284),n=r.n(l),i=r(32564),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);r.d(t,o);let c=["",{children:["admin",{children:["entry",{children:["control",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,22276)),"C:\\Users\\issif\\ND-project\\src\\app\\admin\\entry\\control\\[id]\\page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,39862)),"C:\\Users\\issif\\ND-project\\src\\app\\admin\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,76661)),"C:\\Users\\issif\\ND-project\\src\\app\\layout.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,29782)),"C:\\Users\\issif\\ND-project\\src\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Users\\issif\\ND-project\\src\\app\\admin\\entry\\control\\[id]\\page.tsx"],u="/admin/entry/control/[id]/page",m={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/admin/entry/control/[id]/page",pathname:"/admin/entry/control/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},11826:(e,t,r)=>{Promise.resolve().then(r.bind(r,48369))},48369:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>EntryControl});var s=r(30784),a=r(9885),l=r(34751),n=r(50981),i=r(57114),o=r(64434),c=r(26896),d=r(81127),u=r(49030),m=r(38146),x=r(8021),p=r(91597),h=r(74593),f=r(7625),g=r(11440),j=r.n(g),b=r(27277);function EntryControlForm({info:e,data:t,title:r,onSubmit:l,isSubmitting:n}){let i=!!(t&&t?.id),[o,g]=(0,a.useState)(e||{}),[y,v]=(0,a.useState)(!1),[w,N]=(0,a.useState)(""),[C,k]=(0,a.useState)(i),[q,_]=(0,a.useState)(i&&t.plating?.length>0?t.plating.split(","):[]),[S,P]=(0,a.useState)(i?t:{image:"",result:"",plating:"",product:"",quantity:0,productCode:"",productDimension:"",productBatchNumber:"",processFrequency:"",dimensionConfirmation:"",dirtyThreads:"",quantityConfirmation:"",remarks:"",faultId:e?.id}),handleValues=e=>{v(!1),k(!1);let t={[e.target?.name]:e.target?.value};P({...S,...t})},handlePlating=e=>{v(!1),k(!1);let t=e.target.value;if(e.target.checked){[...q].includes(t)||_([...q,t]);return}let r=[...q].filter(e=>e!==t);_(r)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsxs)(j(),{href:"/admin/entry",className:"mb-3 flex  w-fit items-center gap-2 text-sm dark:text-white",children:[s.jsx("span",{children:s.jsx(f.U1p,{})}),"\xdcr\xfcn Girişe"]}),s.jsx("h1",{className:"mb-8 text-center text-2xl font-bold md:text-4xl",children:r}),s.jsx("div",{className:"mb-10 grid w-full grid-cols-1 gap-2  sm:grid-cols-2 md:grid-cols-3",children:Object.entries(o).map(([e,t],r)=>{if(c.XD.includes(e))return(0,s.jsxs)("div",{className:"mx-2  flex flex-col flex-nowrap",children:[s.jsx("h4",{className:"mb-0 italic",children:c.Z4[e]}),"arrivalDate"===e?(0,s.jsxs)("p",{className:"font-bold",children:[" ",(0,c.o0)(t)," "]}):"technicalDrawingAttachment"===e?s.jsx(b.Z,{file:t}):(0,s.jsxs)("p",{className:"font-bold",children:[" ",t," "]})]},r)})}),y?s.jsx("p",{className:"mb-3 w-full rounded-md bg-red-500 p-2 text-center text-sm  font-bold text-white",children:"L\xfctfen ilgili kontrol alanları boş bırakılmamalı."}):null,(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault();let{result:t}=S;if(!t){v(!0),window.scroll(100,0);return}l({...S,image:w,plating:q.join(","),dimensionConfirmation:S.dimensionConfirmation?.toString()==="true",dirtyThreads:S.dirtyThreads?.toString()==="true",quantityConfirmation:S.quantityConfirmation?.toString()==="true"},i)},className:"w-full",children:[s.jsx("h2",{className:"mb-4 text-sm font-bold",children:"kaplama"}),s.jsx("div",{className:"mb-6 grid w-full grid-cols-2 gap-3 sm:grid-cols-3",children:c.yQ.map((e,t)=>(0,s.jsxs)("label",{className:"flex cursor-pointer items-center",children:[s.jsx(d.Z,{name:"plating",colorscheme:"brandScheme",me:"10px",checked:!!i&&S.plating.includes(e),onChange:handlePlating,value:e}),s.jsx("p",{className:"ml-3 text-sm font-bold text-navy-700 dark:text-white",children:e})]},t))}),s.jsx("div",{className:"mb-8 flex flex-col gap-3 sm:flex-row",children:s.jsx(p.Z,{extra:"pt-1",label:"Malzeme T\xfcr\xfc",onChange:handleValues,name:"productDimension",children:c.NC.map((e,t)=>s.jsx("option",{value:e,selected:i?S.productDimension===e:null,children:e},t))})}),(0,s.jsxs)("div",{className:"mb-2 flex flex-col gap-3 sm:flex-row",children:[s.jsx(p.Z,{extra:"pt-1",label:"\xdcr\xfcn Boyutlari",onChange:handleValues,name:"dimensionConfirmation",children:c.y5.map((e,t)=>s.jsx("option",{value:e.value.toString(),selected:i?S.dimensionConfirmation===e.value:null,children:e.name},t))}),s.jsx(p.Z,{extra:"pt-1",label:"Miktar",onChange:handleValues,name:"quantityConfirmation",children:c.y5.map((e,t)=>s.jsx("option",{value:e.value.toString(),selected:i?S.quantityConfirmation===e.value:null,children:e.name},t))})]}),(0,s.jsxs)("div",{className:"mb-8 flex flex-col gap-3 sm:flex-row",children:[s.jsx(p.Z,{extra:"pt-1",label:"Temizleme",onChange:handleValues,name:"dirtyThreads",children:c.iA.map((e,t)=>s.jsx("option",{value:e.value.toString(),selected:i?S.dirtyThreads===e.value:null,children:e.name},t))}),s.jsx(p.Z,{extra:"pt-1",label:"Proses Frekansi",onChange:handleValues,name:"processFrequency",children:c.TZ.map((e,t)=>s.jsx("option",{value:e,selected:i?S.processFrequency===e:null,children:e},t))})]}),(0,s.jsxs)("div",{className:"mb-6",children:[s.jsx("h2",{className:"mb-3 ml-3  block w-full text-sm font-bold",children:"İlgili Dok\xfcman"}),s.jsx(u.Z,{onChange:e=>N(e),fileType:"all",multiple:!1,_fileName:S.image,_filePath:i?"/uploads/"+S.image:""})]}),s.jsx("div",{className:"w-full",children:s.jsx(m.Z,{label:"A\xe7ıklama",onChange:handleValues,id:"remarks",name:"remarks",placeholder:"A\xe7ıklama",extra:"mb-8",value:S.remarks})}),(0,s.jsxs)("div",{className:"mb-10 w-full",children:[s.jsx("label",{className:"mb-3 ml-3  block w-full font-bold",children:"Sonu\xe7"}),s.jsx("div",{className:"grid w-full grid-cols-2 justify-center gap-2 sm:grid-cols-4",children:c.sW.map(e=>(0,s.jsxs)("label",{className:"flex w-full cursor-pointer items-center capitalize",children:[s.jsx(h.Z,{name:"result",value:e.value,onChange:handleValues,checked:S.result===e.value}),s.jsx("p",{className:"ml-3 text-sm font-bold text-navy-700 dark:text-white",children:e.name})]},e.value))})]}),s.jsx(x.Z,{disabled:C,loading:n,extra:"mt-4",text:"SAVE"})]})]}),(0,s.jsxs)("div",{className:"mt-8 flex justify-between text-sm font-bold opacity-40",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{children:["Oluşturan: ",t?.createdBy]}),(0,s.jsxs)("p",{children:["Oluşturulma Tarihi:"," ",t?.createdAt?(0,c.o0)(t?.createdAt):""]})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{children:["G\xfcncelleyen: ",t?.updatedBy]}),(0,s.jsxs)("p",{children:["G\xfcncelleme Tarihi:"," ",t?.updatedAt?(0,c.o0)(t?.updatedAt):""]})]})]})]})}var y=r(74284),v=r(85879);function EntryControl(){let e=(0,i.useRouter)(),[t,r]=(0,a.useState)(!1),d=(0,i.useParams)(),[u,m]=(0,a.useState)(!1),[x,p]=(0,a.useState)({}),[h,f]=(0,a.useState)({}),{data:g}=(0,y.useSession)();(0,a.useEffect)(()=>{let getSingleFault=async()=>{m(!0);let{status:e,data:t}=await (0,n.FL)(d.id);if(200===e){p(t),f(t?.faultControl[0]),m(!1);return}m(!0)};d.id&&getSingleFault()},[d?.id]);let handleSubmit=async t=>{let[s,a]=t;if(r(!0),a){let t=await (0,n.e8)({...s,updatedBy:g?.user?.name}),{status:a,response:i}=t;if(i?.error){let{message:e,detail:t}=i?.error;l.Am.error("Hata oluştu!."+e),(0,c.cM)(t),r(!1);return}if(200===a){l.Am.success("\xdcr\xfcn kontrol g\xfcncelleme işlemi başarılı."),e.push("/admin/entry"),r(!1);return}}let i=await (0,n.G7)({...s,createdBy:g?.user?.name}),{status:o,response:d}=i;if(d?.error){let{message:e,detail:t}=d?.error;l.Am.error("Hata oluştu!."+e),(0,c.cM)(t),r(!1);return}if(200===o){l.Am.success("\xdcr\xfcn girişi kontrol işlemi başarılı."),e.push("/admin/entry"),r(!1);return}};return s.jsx(v.Z,{className:"mx-auto mt-4 max-w-[800px] rounded-2xl bg-white px-8 py-10 dark:bg-[#111c44] dark:text-white",children:u?s.jsx(o.kx,{}):s.jsx(EntryControlForm,{title:"\xdcr\xfcn Girişi Kontrol Formu",info:x,data:h,isSubmitting:t,onSubmit:(...e)=>handleSubmit(e)})})}},27277:(e,t,r)=>{"use strict";r.d(t,{Z:()=>FileViewer});var s=r(30784);r(9885);var a=r(7625);function FileViewer({file:e}){return e?s.jsx("a",{href:`/uploads/${e}`,target:"_blank",children:s.jsx(a._b$,{className:"h-6 w-6"})}):null}},22276:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>l,default:()=>o});var s=r(95153);let a=(0,s.createProxy)(String.raw`C:\Users\issif\ND-project\src\app\admin\entry\control\[id]\page.tsx`),{__esModule:l,$$typeof:n}=a,i=a.default,o=i}};var t=require("../../../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[8998,3657,7282,4407,614,580,7625,4997,4138,3008,3763,981,6896,6510,1303,8021,4434,1597,8146,9030,1127,4593],()=>__webpack_exec__(89626));module.exports=r})();
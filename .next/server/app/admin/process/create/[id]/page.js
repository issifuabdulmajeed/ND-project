(()=>{var e={};e.id=5302,e.ids=[5302],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},1388:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>x,pages:()=>d,routeModule:()=>p,tree:()=>o});var s=t(67096),a=t(16132),i=t(37284),n=t.n(i),l=t(32564),c={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>l[e]);t.d(r,c);let o=["",{children:["admin",{children:["process",{children:["create",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,48289)),"C:\\Users\\issif\\ND-project\\src\\app\\admin\\process\\create\\[id]\\page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,39862)),"C:\\Users\\issif\\ND-project\\src\\app\\admin\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,76661)),"C:\\Users\\issif\\ND-project\\src\\app\\layout.tsx"],loading:[()=>Promise.resolve().then(t.bind(t,29782)),"C:\\Users\\issif\\ND-project\\src\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9291,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Users\\issif\\ND-project\\src\\app\\admin\\process\\create\\[id]\\page.tsx"],x="/admin/process/create/[id]/page",u={require:t,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/admin/process/create/[id]/page",pathname:"/admin/process/create/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},36082:(e,r,t)=>{Promise.resolve().then(t.bind(t,51231))},51231:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>EntryControl});var s=t(30784),a=t(9885),i=t(34751),n=t(50981),l=t(57114),c=t(64434),o=t(85879),d=t(87645),x=t(8021),u=t(91328),p=t(26896),m=t(74284),h=t(11440),f=t.n(h),g=t(7625),j=t(91597);function EntryControl(){let e=(0,l.useRouter)(),[r,t]=(0,a.useState)(!1),h=(0,l.useParams)(),[y,N]=(0,a.useState)(!1),[w,v]=(0,a.useState)([]),[P,b]=(0,a.useState)({}),[_,k]=(0,a.useState)(!1),[S,q]=(0,a.useState)([]),[A,M]=(0,a.useState)(!1),[C,E]=(0,a.useState)(!1),[I,R]=(0,a.useState)([]),[D,U]=(0,a.useState)({}),{data:Z}=(0,m.useSession)(),T=["faultId","customerName","product","quantity","application","standard","color","machineName"],B={customerName:"M\xfcşteri",product:"\xdcr\xfcn adı",quantity:"Miktar",application:"Uygulama",standard:"Standart",color:"Renk",machineName:"Makine",faultId:"Takıp Kodu"},getSingleProcess=async()=>{N(!0);let{status:e,data:r}=await (0,n.zJ)(h.id);if(200===e){b(r),v(r?.technicalParams),q(r.machineParams.map(e=>e.param_name)),N(!1);return}N(!1)};(0,a.useEffect)(()=>{h.id&&getSingleProcess()},[h?.id]);let onUpdateData=async(e,r)=>{if(!e)return;k(!0);let s=await (0,n.ne)(r),{status:a,data:l,response:c}=s;if(c?.error){let{message:e,detail:r}=c?.error;i.Am.error("\xdcr\xfcn g\xfcncelleme başarısız."+e),(0,p.cM)(r),t(!1);return}if(200===a){v(l),k(!1);return}},onAddRow=async e=>{if(!P?.machineId){let{status:e,data:r}=await (0,n.Bb)();if(200===e){R(r),E(!0);return}}k(!0);let r=await (0,n.Gk)({...e,processId:h.id,machineId:P.machineId}),{status:s,data:a,response:l}=r;if(l?.error){let{message:e,detail:r}=l?.error;i.Am.error("Parametre ekleme işlemi başarısız."+e),(0,p.cM)(r),t(!1);return}if(200===s){v(a),k(!1);return}},onRemoveRow=async e=>{let r=await (0,n.r8)(e),{status:s,data:a,response:l}=r;if(l?.error){let{message:e,detail:r}=l?.error;i.Am.error("Parametre silme işlemi başarısız."+e),(0,p.cM)(r),t(!1);return}if(200===s){v(a);return}},onFinish=async()=>{let{id:r,faultId:s}=P;if(!r||!s)return;t(!0);let a=await (0,n.Q3)({id:r,faultId:s,status:"FINISHED",updatedBy:Z?.user?.name}),{status:l,response:c}=a;if(c?.error){let{message:e,detail:r}=c?.error;i.Am.error("Proses g\xfcncelleme işlemi başarısız."+e),(0,p.cM)(r),t(!1);return}200===l&&(await getSingleProcess(),M(!1),e.push(`/admin/process/${P.id}`))},onAddMachine=async()=>{if(!D?.machineId)return;t(!0);let{status:e}=await (0,n.Q3)({id:P.id,faultId:P.faultId,...D,createdBy:Z?.user?.name});if(200===e){await getSingleProcess(),i.Am.success("Makine ekleme işlemi başarılı."),E(!1),t(!1);return}i.Am.error("Bir hata oluştu, tekrar deneyin !")};return(0,s.jsxs)("div",{className:"mx-auto mt-4 max-w-full rounded-2xl px-2",children:[y?s.jsx(c.kx,{}):(0,s.jsxs)("div",{className:"flex flex-col gap-8",children:[s.jsx("div",{className:"flex justify-end ",children:(0,s.jsxs)(f(),{href:"/admin/process",className:"text-md flex items-center gap-2 self-start  dark:text-white",children:[s.jsx("span",{children:s.jsx(g.U1p,{})}),"T\xfcm Prosesleri"]})}),(0,s.jsxs)(o.Z,{extra:"w-full p-4",children:[s.jsx("h2",{className:"my-5 text-2xl font-bold",children:"\xdcr\xfcn Bilgileri"}),s.jsx("div",{className:"grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4",children:Object.entries(P).map(([e,r],t)=>{if(T.includes(e))return(0,s.jsxs)("div",{className:"",children:[s.jsx("h2",{className:"font-bold capitalize italic",children:B[e]}),(0,s.jsxs)(s.Fragment,{children:[" ",r]})]},t)})})]}),s.jsx(o.Z,{extra:"w-full p-4",children:(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsxs)("div",{className:"my-5 flex justify-between",children:[s.jsx("h2",{className:"text-2xl font-bold",children:"Teknik Parametreleri"}),P?.status!=="FINISHED"?s.jsx(x.Z,{extra:"max-w-fit px-4 h-[40px]",text:"PROSESİ TAMAMLA",onClick:()=>M(!0)}):null]}),s.jsx(d.Z,{fields:S,techParams:w,status:P?.status,onUpdateData:(e,r)=>onUpdateData(e,r),onAddRow:e=>onAddRow(e),onRemoveRow:e=>onRemoveRow(e)},_)]})}),(0,s.jsxs)("div",{className:"mt-8 flex justify-between text-sm font-bold opacity-60",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{children:["Oluşturan: ",P?.createdBy]}),(0,s.jsxs)("p",{children:["Oluşturulma Tarihi:"," ",P?.createdAt?(0,p.o0)(P?.createdAt):""]})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{children:["G\xfcncelleyen: ",P?.updatedBy]}),(0,s.jsxs)("p",{children:["G\xfcncelleme Tarihi:"," ",P?.updatedAt?(0,p.o0)(P?.updatedAt):""]})]})]})]}),(0,s.jsxs)(u.Z,{show:A,extra:"flex flex-col gap-3 py-6 px-8",children:[s.jsx("h1",{className:"text-3xl",children:"Proses Tamamlama"}),s.jsx("p",{className:"mb-2 text-lg",children:"Bu Prosesi tamamlamak istediğini Emin misin ?"}),(0,s.jsxs)("div",{className:"flex gap-4",children:[s.jsx(x.Z,{loading:r,text:"EVET",extra:"w-[60px]  h-[40px]",onClick:onFinish}),s.jsx(x.Z,{text:"HAYIR",extra:"w-[60px] h-[40px] bg-red-700",onClick:()=>M(!1)})]})]}),(0,s.jsxs)(u.Z,{show:C,extra:"flex flex-col gap-3 py-6 px-8",children:[s.jsx("h1",{className:"text-3xl",children:"Makine Şe\xe7imi"}),s.jsx("div",{className:"mb-2 flex flex-col gap-3 sm:flex-row",children:(0,s.jsxs)(j.Z,{extra:"pt-1",label:"Makine Se\xe7imi",onChange:e=>{U(JSON.parse(e.target?.value))},name:"machineName",children:[s.jsx("option",{value:"{}",selected:!0,children:"Makine Se\xe7"}),I.map((e,r)=>s.jsx("option",{value:JSON.stringify({machineId:e.id,machineName:e.machine_Name}),children:e.machine_Name},r))]})}),(0,s.jsxs)("div",{className:"flex gap-4",children:[s.jsx(x.Z,{text:"GERİ",extra:"w-[60px] bg-red-700 h-[40px]",onClick:()=>E(!1)}),s.jsx(x.Z,{loading:r,text:"DEVAM",extra:"w-[60px] h-[40px]",onClick:onAddMachine})]})]},1)]})}},48289:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>n,__esModule:()=>i,default:()=>c});var s=t(95153);let a=(0,s.createProxy)(String.raw`C:\Users\issif\ND-project\src\app\admin\process\create\[id]\page.tsx`),{__esModule:i,$$typeof:n}=a,l=a.default,c=l}};var r=require("../../../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[8998,3657,7282,4407,614,580,4997,7625,4138,1200,3008,7477,4810,6510,1303,8021,4434,1597,4346],()=>__webpack_exec__(1388));module.exports=t})();
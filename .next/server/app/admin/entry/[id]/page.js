(()=>{var e={};e.id=9326,e.ids=[9326],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},74298:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>l.a,__next_app__:()=>u,originalPathname:()=>x,pages:()=>o,routeModule:()=>p,tree:()=>c});var t=r(67096),i=r(16132),a=r(37284),l=r.n(a),n=r(32564),d={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>n[e]);r.d(s,d);let c=["",{children:["admin",{children:["entry",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,37849)),"C:\\Users\\issif\\ND-project\\src\\app\\admin\\entry\\[id]\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,39862)),"C:\\Users\\issif\\ND-project\\src\\app\\admin\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,76661)),"C:\\Users\\issif\\ND-project\\src\\app\\layout.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,29782)),"C:\\Users\\issif\\ND-project\\src\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"]}],o=["C:\\Users\\issif\\ND-project\\src\\app\\admin\\entry\\[id]\\page.tsx"],x="/admin/entry/[id]/page",u={require:r,loadChunk:()=>Promise.resolve()},p=new t.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/admin/entry/[id]/page",pathname:"/admin/entry/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},33973:(e,s,r)=>{Promise.resolve().then(r.bind(r,76110))},76110:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>Edit});var t=r(30784),i=r(9885),a=r(57114),l=r(50981),n=r(64434),d=r(74284),c=r(85879),o=r(26896),x=r(8021),u=r(11440),p=r.n(u),m=r(7625),f=r(27277);function Edit(){let e=(0,a.useRouter)(),{data:s}=(0,d.useSession)(),r=(0,a.useParams)(),[u,h]=(0,i.useState)(!1),[g,j]=(0,i.useState)([]),[b,N]=(0,i.useState)({}),[_,w]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let getSingleFault=async()=>{w(!0);let{status:e,data:s}=await (0,l.FL)(r.id);if(200===e){j(s),N(s?.faultControl[0]),w(!1);return}h(!1)};r.id&&getSingleFault()},[r?.id]);let renderValues=(e,s)=>["createdAt","updatedAt"].includes(e)?(0,t.jsxs)("p",{className:"font-bold",children:[" ",(0,o.o0)(s)," "]}):"productDimension"===e?(0,t.jsxs)("p",{className:"font-bold",children:[" ",s?"KARIŞIK":"D\xdcZG\xdcNLİ"," "]}):"dimensionConfirmation"===e||"quantityConfirmation"===e?(0,t.jsxs)("p",{className:"font-bold",children:[" ",s?"UYGUN":"UYGUNSUZ"," "]}):"dirtyThreads"===e?(0,t.jsxs)("p",{className:"font-bold",children:[" ",s?"VAR":"YOK"," "]}):"processFrequency"===e?(0,t.jsxs)("p",{className:"font-bold",children:[" ",s?"YAZSIN":"YAZILMASIN"," "]}):"result"===e?(0,t.jsxs)("p",{className:"font-bold uppercase",children:[" ",{ACCEPT:"Kabul",ACCEPTANCE_WITH_CONDITION:"Şartlı Kabul",PRE_PROCESS:"\xd6n İşlem gerekli",REJECT:"Ret"}[s]," "]}):"image"===e?t.jsx(f.Z,{file:s}):(0,t.jsxs)("p",{className:"font-bold",children:[" ",s," "]});return t.jsx("div",{className:"w-full",children:_?t.jsx(n.yg,{}):(0,t.jsxs)(t.Fragment,{children:[t.jsx("div",{className:"flex justify-end",children:(0,t.jsxs)(p(),{href:"/admin/entry",className:"text-md flex w-fit items-center gap-2 self-start  dark:text-white",children:[t.jsx("span",{children:t.jsx(m.U1p,{})}),"T\xfcm \xdcr\xfcn Girişleri"]})}),(0,t.jsxs)(c.Z,{extra:"my-12 mx-auto mt-4 w-full rounded-2xl px-8 py-10 bg-white dark:bg-[#111c44] dark:text-white",children:[t.jsx("h2",{className:"mb-4 text-2xl font-bold",children:"\xdcr\xfcn Bilgileri"}),t.jsx("div",{className:"mb-10 grid w-full grid-cols-2 gap-2  md:grid-cols-3 lg:grid-cols-4",children:Object.entries(g).map(([e,s],r)=>{if(o.XD.includes(e))return(0,t.jsxs)("div",{className:"mb-5 flex flex-col flex-nowrap",children:[t.jsx("h4",{className:"mx-1 italic",children:o.Z4[e]}),"arrivalDate"===e?(0,t.jsxs)("p",{className:"font-bold",children:[" ",(0,o.o0)(s)," "]}):"technicalDrawingAttachment"===e?t.jsx(f.Z,{file:s}):(0,t.jsxs)("p",{className:"font-bold",children:[" ",s," "]})]},r)})})]}),(0,t.jsxs)(c.Z,{extra:"my-12 mx-auto mt-4 w-full rounded-2xl px-8 py-10 bg-white dark:bg-[#111c44] dark:text-white",children:[(0,t.jsxs)("div",{className:"mb-8 flex justify-between gap-3",children:[t.jsx("h2",{className:"text-2xl font-bold",children:"\xdcr\xfcn Giriş Kontrol Bilgileri"}),s?.user?.role==="SUPER"||s?.user?.role==="ADMIN"?t.jsx(x.Z,{icon:t.jsx(m.x06,{className:"mr-1 h-5 w-5"}),extra:"max-w-fit px-4  h-[40px]",text:b?.id?"\xdcR\xdcN KONTROL\xdc D\xdcZENLE":"\xdcR\xdcN KONTROL\xdc YAP",onClick:()=>{e.push(`/admin/entry/control/${r?.id}`)}}):null]}),b?.id?t.jsx("div",{className:"mb-10 grid w-full grid-cols-2 gap-2  md:grid-cols-3 lg:grid-cols-4",children:Object.entries(b).map(([e,s],r)=>{if(o.TO.includes(e))return(0,t.jsxs)("div",{className:"mb-5 flex flex-col flex-nowrap",children:[t.jsx("h4",{className:"mb-0 italic",children:o.UH[e]}),renderValues(e,s)]},r)})}):t.jsx("div",{className:"flex h-32 w-full items-center justify-center opacity-75",children:"Hen\xfcz \xdcr\xfcn Kontrol\xfc yapılmadı"})]})]})})}},85879:(e,s,r)=>{"use strict";r.d(s,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var t=r(30784);let __WEBPACK_DEFAULT_EXPORT__=function(e){let{variant:s,extra:r,children:i,...a}=e;return t.jsx("div",{className:`!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl ${e.default?"shadow-shadow-500 dark:shadow-none":"shadow-shadow-100 dark:shadow-none"}  dark:!bg-navy-800 dark:text-white  ${r}`,...a,children:i})}},27277:(e,s,r)=>{"use strict";r.d(s,{Z:()=>FileViewer});var t=r(30784);r(9885);var i=r(7625);function FileViewer({file:e}){return e?t.jsx("a",{href:`/uploads/${e}`,target:"_blank",children:t.jsx(i._b$,{className:"h-6 w-6"})}):null}},37849:(e,s,r)=>{"use strict";r.r(s),r.d(s,{$$typeof:()=>l,__esModule:()=>a,default:()=>d});var t=r(95153);let i=(0,t.createProxy)(String.raw`C:\Users\issif\ND-project\src\app\admin\entry\[id]\page.tsx`),{__esModule:a,$$typeof:l}=i,n=i.default,d=n}};var s=require("../../../../webpack-runtime.js");s.C(e);var __webpack_exec__=e=>s(s.s=e),r=s.X(0,[8998,3657,7282,4407,614,580,4997,7625,4138,3008,7477,4810,6510,1303,8021,4434],()=>__webpack_exec__(74298));module.exports=r})();
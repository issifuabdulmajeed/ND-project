(()=>{var e={};e.id=3363,e.ids=[3363],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},42085:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>x,pages:()=>d,routeModule:()=>m,tree:()=>c});var r=s(67096),a=s(16132),i=s(37284),l=s.n(i),o=s(32564),n={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>o[e]);s.d(t,n);let c=["",{children:["admin",{children:["invoice",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,85105)),"C:\\Users\\issif\\ND-project\\src\\app\\admin\\invoice\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,39862)),"C:\\Users\\issif\\ND-project\\src\\app\\admin\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,76661)),"C:\\Users\\issif\\ND-project\\src\\app\\layout.tsx"],loading:[()=>Promise.resolve().then(s.bind(s,29782)),"C:\\Users\\issif\\ND-project\\src\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9291,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Users\\issif\\ND-project\\src\\app\\admin\\invoice\\page.tsx"],x="/admin/invoice/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/admin/invoice/page",pathname:"/admin/invoice",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},50473:(e,t,s)=>{Promise.resolve().then(s.bind(s,6930))},6930:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>page});var r=s(30784),a=s(9885),i=s(85879),l=s(7625),o=s(11200),n=s(75629),c=s(17141),d=s(8021),x=s(26896),p=s(20440);let invoiceTable=function({tableData:e,onEdit:t,onDelete:s,onAdd:u,onControl:h,variant:g="NORMAL",searchValue:b}){let[f,w]=(0,a.useState)([]),[j,v]=(0,a.useState)(""),[y,N]=(0,a.useState)(b||""),{handleMouseDown:k,handleMouseLeave:S,handleMouseUp:_,handleMouseMove:C}=(0,x.kW)(),A=(0,a.useMemo)(()=>{let e={ACTIVE:"Aktif",PAID:"\xd6dendi",NOT_PAID:"\xd6denmedi"},statusbgColor=e=>"PAID"===e?r.jsx(l.ZSR,{className:"me-1 text-green-500 dark:text-green-300"}):"NOT_PAID"===e?r.jsx(l.B4e,{className:"me-1 text-red-500 dark:text-red-300"}):r.jsx(l.Fbu,{className:"me-1 text-amber-500 dark:text-amber-300"});return[m.accessor("id",{id:"id",header:()=>r.jsx("p",{className:"min-w-[80px] text-sm font-bold text-gray-600 dark:text-white",children:"SİRA NO."}),cell:({row:e})=>r.jsx("p",{className:"text-sm font-bold text-navy-700 dark:text-white",children:(e.index+1).toString()})}),m.accessor("barcode",{id:"barcode",header:()=>r.jsx("p",{className:"min-w-[100px] text-sm font-bold uppercase text-gray-600 dark:text-white",children:"Takip Kodu"}),cell:e=>r.jsx("p",{className:"text-sm font-bold text-navy-700 dark:text-white",children:e.getValue()})}),m.accessor("customerName",{id:"customerName",header:()=>r.jsx("p",{className:"min-w-[200px] text-sm font-bold uppercase text-gray-600 dark:text-white",children:"M\xfcşteri"}),cell:e=>r.jsx("p",{className:"text-sm font-bold text-navy-700 dark:text-white",children:e.getValue()})}),m.accessor("products",{id:"products",header:()=>r.jsx("p",{className:"min-w-[300px] text-sm font-bold uppercase text-gray-600 dark:text-white",children:"\xdcr\xfcnleri"}),cell:e=>r.jsx("p",{className:"text-sm font-bold text-navy-700 dark:text-white",children:e.getValue()})}),m.accessor("createdAt",{id:"createdAt",header:()=>r.jsx("p",{className:"min-w-[130px]  text-sm font-bold uppercase text-gray-600 dark:text-white",children:"Oluşturma Tarihi"}),cell:e=>r.jsx("p",{className:"text-sm font-bold text-navy-700 dark:text-white",children:(0,x.o0)(e.getValue())})}),m.accessor("invoiceDate",{id:"invoiceDate",header:()=>r.jsx("p",{className:"min-w-[120px] text-sm font-bold uppercase text-gray-600 dark:text-white",children:"İrsalye Tarihi"}),cell:e=>r.jsx("p",{className:"text-sm font-bold text-navy-700 dark:text-white",children:(0,x.o0)(e.getValue())})}),m.accessor("address",{id:"address",header:()=>r.jsx("p",{className:"min-w-[200px]  text-sm font-bold uppercase text-gray-600 dark:text-white",children:"Adres"}),cell:e=>r.jsx("p",{className:"text-sm font-bold text-navy-700 dark:text-white",children:e.getValue()})}),m.accessor("tolalQty",{id:"tolalQty",header:()=>r.jsx("p",{className:"min-w-[160px]  text-sm font-bold uppercase text-gray-600 dark:text-white",children:"TOPLAM Miktari"}),cell:e=>r.jsx("p",{className:"text-sm font-bold text-navy-700 dark:text-white",children:e.getValue()})}),m.accessor("amount",{id:"amount",header:()=>(0,r.jsxs)("p",{className:"min-w-[160px]  text-sm font-bold uppercase text-gray-600 dark:text-white",children:["Toplam ","TL"]}),cell:e=>r.jsx("p",{className:"text-sm font-bold text-navy-700 dark:text-white",children:e.getValue()})}),m.accessor("vat",{id:"vat",header:()=>r.jsx("p",{className:"min-w-[160px]  text-sm font-bold uppercase text-gray-600 dark:text-white",children:"KDV%"}),cell:e=>r.jsx("p",{className:"text-sm font-bold text-navy-700 dark:text-white",children:e.getValue()})}),m.accessor("totalAmount",{id:"totalAmount",header:()=>(0,r.jsxs)("p",{className:"min-w-[160px]  text-sm font-bold uppercase text-gray-600 dark:text-white",children:["Genel Toplam ","TL"]}),cell:e=>r.jsx("p",{className:"text-sm font-bold text-navy-700 dark:text-white",children:e.getValue()})}),m.accessor("description",{id:"description",header:()=>r.jsx("p",{className:"text-sm font-bold uppercase text-gray-600 dark:text-white",children:"A\xe7ıklama"}),cell:e=>r.jsx("p",{className:"min-w-[100px] text-sm font-bold text-navy-700 dark:text-white",children:e.getValue()})}),m.accessor("status",{id:"status",header:()=>r.jsx("p",{className:"min-w-[130px] text-sm font-bold uppercase text-gray-600 dark:text-white",children:"KESME DURUMU"}),cell:t=>(0,r.jsxs)("div",{className:"flex items-center",children:[statusbgColor(t.getValue()),r.jsx("p",{className:"text-sm font-bold text-navy-700 dark:text-white",children:e[t.getValue()]})]})}),m.accessor("id",{id:"id",header:()=>r.jsx("p",{className:"min-w-[80px] text-sm font-bold uppercase text-gray-600 dark:text-white",children:"AKSİYON"}),cell:e=>{let a="PAID"===e.row.original.status;return(0,r.jsxs)("div",{className:"flex gap-2",children:[r.jsx("button",{className:"rounded-md bg-blue-600 px-2 py-1 hover:bg-blue-700",onClick:()=>h(e.getValue()),children:r.jsx(l.Sbz,{className:"h-5 w-5 text-white"})}),r.jsx("button",{className:`rounded-md bg-green-600 px-2 py-1 hover:bg-green-700 ${a?"disabled:opacity-25":""}`,onClick:()=>t(e.getValue()),disabled:a,children:r.jsx(l.U$P,{className:"h-5 w-5 text-white"})}),r.jsx("button",{className:`rounded-md bg-red-600 px-2 py-1 hover:bg-red-700 ${a?"disabled:opacity-25":""}`,onClick:()=>s(e.getValue()),disabled:a,children:r.jsx(l.$vK,{className:"h-5 w-5 text-white"})})]})}})]},[]),[P,q]=(0,a.useState)(()=>[...e]),M=(0,o.b7)({data:P,columns:A,initialState:{pagination:{pageSize:10}},state:{sorting:f,globalFilter:j},onSortingChange:w,getCoreRowModel:(0,n.sC)(),getSortedRowModel:(0,n.tj)(),onGlobalFilterChange:v,getFilteredRowModel:(0,n.vL)(),getPaginationRowModel:(0,n.G_)(),debugTable:!0});return(0,r.jsxs)(i.Z,{extra:"w-full h-full sm:overflow-auto px-6 pb-3",children:[(0,r.jsxs)("header",{className:"relative flex items-center justify-between gap-4 pt-6",children:[r.jsx("div",{className:"text-md font-medium text-navy-700 dark:text-white",children:r.jsx(c.Z,{extra:"!h-[38px] md:w-[300px] md:max-w-[300px]",onSubmit:e=>v(e),onChange:e=>v(e),value:y})}),"NORMAL"===g||"ADMIN"===g?r.jsx(d.Z,{text:"İrsalye Oluştur",extra:"!w-fit px-4 h-[38px] font-bold",onClick:u,icon:r.jsx(l.x06,{className:"ml-1 h-6 w-6"})}):null]}),(0,r.jsxs)("div",{className:"custom-scrollbar--hidden mt-8 overflow-x-scroll",onMouseDown:k,onMouseLeave:S,onMouseUp:_,onMouseMove:C,children:[(0,r.jsxs)("table",{className:"w-full",children:[r.jsx("thead",{children:M.getHeaderGroups().map(e=>r.jsx("tr",{className:"!border-px !border-gray-400",children:e.headers.map(e=>r.jsx("th",{colSpan:e.colSpan,onClick:e.column.getToggleSortingHandler(),className:"cursor-pointer border-b border-gray-400 pb-2 pr-4 pt-4 text-start dark:border-white/30",children:(0,r.jsxs)("div",{className:"items-center justify-between text-xs text-gray-200",children:[(0,o.ie)(e.column.columnDef.header,e.getContext()),{asc:"",desc:""}[e.column.getIsSorted()]??null]})},e.id))},e.id))}),r.jsx("tbody",{children:M.getRowModel().rows.slice().map(e=>r.jsx("tr",{className:"border-b border-gray-100 hover:bg-lightPrimary dark:border-gray-900 dark:hover:bg-navy-700",children:e.getVisibleCells().map(e=>r.jsx("td",{className:"min-w-[80px] p-1",children:(0,o.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]}),r.jsx(p.Z,{table:M})]})]})},m=(0,n.Cl)();var u=s(57114),h=s(50981),g=s(64434),b=s(34751),f=s(91328),w=s(74284);let page=()=>{let e=(0,u.useRouter)(),[t,s]=(0,a.useState)([]),[i,l]=(0,a.useState)(!1),[o,n]=(0,a.useState)(""),[c,p]=(0,a.useState)(!1),[m,j]=(0,a.useState)(!1),{data:v}=(0,w.useSession)(),y=(0,u.useSearchParams)(),N=y.get("q"),[k,S]=(0,a.useState)(N||""),getAllInvoice=async()=>{j(!0);let{status:e,data:t}=await (0,h.d5)();if(200===e){let e=t?.map(e=>{let t=e?.customer?.company_name,s=e?.process?.map((e,t)=>`${t+1}. ${e.product}`)?.join("");return e.products=s,e.customerName=t,e.address=e?.customer?.address,e.tolalQty=e?.process.reduce((e,t)=>e+t.quantity,0),e});s(e)}j(!1)};(0,a.useEffect)(()=>{getAllInvoice()},[]),(0,a.useEffect)(()=>{S(N||"")},[N]);let onComfirm=async e=>{n(e),l(!0)},onDelete=async()=>{p(!0);let e=await (0,h.Wu)(o),{status:t,response:r}=e;if(r?.error){let{message:e,detail:t}=r?.error;b.Am.error("\xdcr\xfcn silmeişlemi başarısız."+e),(0,x.cM)(t),p(!1);return}if(200===t){b.Am.success("\xdcr\xfcn silme işlemi başarılı."),p(!1),l(!1),s([]),getAllInvoice();return}};return(0,r.jsxs)("div",{className:"mt-3 w-full",children:[m?r.jsx(g.kx,{}):r.jsx(invoiceTable,{onAdd:()=>{e.push("/admin/invoice/create")},onDelete:onComfirm,onEdit:t=>{e.push(`/admin/invoice/create/${t}`)},tableData:t,variant:v?.user?.role,onControl:t=>{e.push(`/admin/invoice/${t}`)},searchValue:k},N),(0,r.jsxs)(f.Z,{show:i,extra:"flex flex-col gap-3 py-6 px-8",children:[r.jsx("h1",{className:"text-3xl",children:"\xdcr\xfcn Silme"}),r.jsx("p",{className:"mb-2 text-lg",children:"Bu İrsaliye'yi Silmek istediğini Emin misin ?"}),(0,r.jsxs)("div",{className:"flex gap-4",children:[r.jsx(d.Z,{loading:c,text:"SİL",extra:"w-[60px] bg-red-700 h-[40px]",onClick:onDelete}),r.jsx(d.Z,{text:"GERİ",extra:"w-[60px] h-[40px]",onClick:e=>{l(!1)}})]})]})]})}},85105:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>l,__esModule:()=>i,default:()=>n});var r=s(95153);let a=(0,r.createProxy)(String.raw`C:\Users\issif\ND-project\src\app\admin\invoice\page.tsx`),{__esModule:i,$$typeof:l}=a,o=a.default,n=o}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[8998,3657,7282,4407,614,580,4997,7625,4138,1200,3008,7477,4810,6510,1303,8021,4434,8692],()=>__webpack_exec__(42085));module.exports=s})();
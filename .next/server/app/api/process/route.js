"use strict";(()=>{var e={};e.id=4113,e.ids=[4113],e.modules={53524:e=>{e.exports=require("@prisma/client")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},25528:e=>{e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},22037:e=>{e.exports=require("os")},71017:e=>{e.exports=require("path")},63477:e=>{e.exports=require("querystring")},12781:e=>{e.exports=require("stream")},76224:e=>{e.exports=require("tty")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},50692:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>x,originalPathname:()=>P,requestAsyncStorage:()=>p,routeModule:()=>l,serverHooks:()=>m,staticGenerationAsyncStorage:()=>d,staticGenerationBailout:()=>f});var s={};t.r(s),t.d(s,{GET:()=>GET,PUT:()=>PUT}),t(78976);var i=t(10884),a=t(16132),n=t(95798),o=t(78749),u=t(73083),c=t(53524);async function GET(e){try{let r=await (0,u.Y)(["TECH","ADMIN","SUPER"]);if(!r)return n.Z.json({message:"Access forbidden"},{status:403});let t=e.nextUrl.searchParams,s=t.get("status"),i=t.get("result");if(s&&"finished"===s&&i&&"accept"===i){let e=await o.Z.process.findMany({where:{status:"FINISHED"},include:{finalControl:{where:{result:"ACCEPT"}}}});if(e.length>0){let r=[];e.map(e=>{r.includes(e.customerId)||r.push(e.customerId)});let t=[];return r.length>0&&await Promise.all(r.map(async r=>{let s=await o.Z.customer.findUnique({where:{id:r}}),i=e.filter(e=>e.customerId===r&&null===e.invoiceId&&e.finalControl?.length>0);i.length>0&&t.push({customer:s,process:i})})),n.Z.json(t,{status:200})}}let a=await o.Z.process.findMany({include:{technicalParams:!0}});return n.Z.json(a,{status:200})}catch(e){if(e instanceof c.Prisma.PrismaClientKnownRequestError||e instanceof c.Prisma.PrismaClientUnknownRequestError||e instanceof c.Prisma.PrismaClientValidationError||e instanceof c.Prisma.PrismaClientRustPanicError)return n.Z.json(e,{status:403});return n.Z.json(e,{status:500})}}async function PUT(e){try{let r=await (0,u.Y)(["TECH"]);if(!r)return n.Z.json({message:"Access forbidden"},{status:403});let t=await e.json(),s=await o.Z.process.create({data:t});return n.Z.json(s,{status:200})}catch(e){if(e instanceof c.Prisma.PrismaClientKnownRequestError||e instanceof c.Prisma.PrismaClientUnknownRequestError||e instanceof c.Prisma.PrismaClientValidationError||e instanceof c.Prisma.PrismaClientRustPanicError)return n.Z.json(e,{status:403});return n.Z.json(e,{status:500})}}let l=new i.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/process/route",pathname:"/api/process",filename:"route",bundlePath:"app/api/process/route"},resolvedPagePath:"C:\\Users\\issif\\ND-project\\src\\app\\api\\process\\route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:p,staticGenerationAsyncStorage:d,serverHooks:m,headerHooks:x,staticGenerationBailout:f}=l,P="/api/process/route"},78749:(e,r,t)=>{t.d(r,{Z:()=>a});var s=t(53524);let i=globalThis.prisma??new s.PrismaClient({datasources:{db:{url:"postgresql://postgres:majeed123@localhost:5432/postgres"}}}),a=i},73083:(e,r,t)=>{t.d(r,{Y:()=>checkUserRole});var s=t(92517),i=t(94020);async function checkUserRole(e){let r=await (0,i.getServerSession)(s.L);return!!r&&!!r.user.role&&e.includes(r.user.role)}}};var r=require("../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[8998,3657,9199,5798,8789,9425,2517],()=>__webpack_exec__(50692));module.exports=t})();
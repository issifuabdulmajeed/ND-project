"use strict";(()=>{var e={};e.id=6061,e.ids=[6061],e.modules={53524:e=>{e.exports=require("@prisma/client")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},25528:e=>{e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},22037:e=>{e.exports=require("os")},71017:e=>{e.exports=require("path")},63477:e=>{e.exports=require("querystring")},12781:e=>{e.exports=require("stream")},76224:e=>{e.exports=require("tty")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},45859:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>P,originalPathname:()=>q,requestAsyncStorage:()=>f,routeModule:()=>p,serverHooks:()=>d,staticGenerationAsyncStorage:()=>m,staticGenerationBailout:()=>x});var s={};r.r(s),r.d(s,{GET:()=>GET,POST:()=>POST,PUT:()=>PUT}),r(78976);var i=r(10884),n=r(16132),a=r(95798),o=r(78749),u=r(53524),c=r(94020),l=r(92517);async function GET(e){try{let e=await (0,c.getServerSession)(l.L);if(null===e)return a.Z.json([],{status:404});let t=await o.Z.notification.findMany({orderBy:{createdAt:"desc"}});if(!t)return a.Z.json([],{status:404});let r=t.filter(e=>"NOT_READ"===e.status);if("ADMIN"===e.user.role){let e=r.filter(e=>{let t=new Date,r=new Date(t.getTime()-18e5),s=new Date(e.createdAt);return s<r});return a.Z.json(e,{status:200})}let s=t.filter(t=>t.receiver===e.user.role&&"NOT_READ"===t.status);return a.Z.json(s,{status:200})}catch(e){if(e instanceof u.Prisma.PrismaClientKnownRequestError||e instanceof u.Prisma.PrismaClientUnknownRequestError||e instanceof u.Prisma.PrismaClientValidationError||e instanceof u.Prisma.PrismaClientRustPanicError)return a.Z.json(e,{status:403});return a.Z.json(e,{status:500})}}async function POST(e){try{let t=await (0,c.getServerSession)(l.L);if(!t)return a.Z.json([],{status:204});let r=await e.json(),{id:s}=r;if(t?.user?.role==="ADMIN"){let e=await o.Z.notification.findUnique({where:{id:s}});return a.Z.json(e,{status:200})}let i=await o.Z.notification.update({where:{id:s},data:{status:"READ"}});return a.Z.json(i,{status:200})}catch(e){if(e instanceof u.Prisma.PrismaClientKnownRequestError||e instanceof u.Prisma.PrismaClientUnknownRequestError||e instanceof u.Prisma.PrismaClientValidationError||e instanceof u.Prisma.PrismaClientRustPanicError)return a.Z.json(e,{status:403});return a.Z.json(e,{status:500})}}async function PUT(e){try{let t=await (0,c.getServerSession)(l.L);if(!t)return a.Z.json([],{status:204});let r=await e.json(),{id:s}=r;if(0===r.length)return a.Z.json({message:"You are missing a required data"},{status:401});let i=await o.Z.notification.updateMany({where:{id:{in:r}},data:{status:"READ"}});return a.Z.json(i,{status:200})}catch(e){if(e instanceof u.Prisma.PrismaClientKnownRequestError||e instanceof u.Prisma.PrismaClientUnknownRequestError||e instanceof u.Prisma.PrismaClientValidationError||e instanceof u.Prisma.PrismaClientRustPanicError)return a.Z.json(e,{status:403});return a.Z.json(e,{status:500})}}let p=new i.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/notification/route",pathname:"/api/notification",filename:"route",bundlePath:"app/api/notification/route"},resolvedPagePath:"C:\\Users\\issif\\ND-project\\src\\app\\api\\notification\\route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:f,staticGenerationAsyncStorage:m,serverHooks:d,headerHooks:P,staticGenerationBailout:x}=p,q="/api/notification/route"},78749:(e,t,r)=>{r.d(t,{Z:()=>n});var s=r(53524);let i=globalThis.prisma??new s.PrismaClient,n=i}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[8998,3657,9199,5798,8789,9425,2517],()=>__webpack_exec__(45859));module.exports=r})();
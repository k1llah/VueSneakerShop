import{_ as p,a as f}from"./overlay.vue_vue_type_script_setup_true_lang-QJ68jPCx.js";import{e as h,K as k,r as y,k as t,y as I,z as n,D as S,F as u,l as w,J as A,G as C,g as o,i as F,m as B,H as D}from"./index-CgQVmFwT.js";const x={key:0},L={class:"grid md:grid-cols-4 sm:grid-cols-2 md:gap-5 md:0"},N={key:1},O=B("p",null,"Загрузка данных",-1),T=[O],z=h({__name:"CardList",props:{items:Array},setup(d){const _=A(),l=k();let i=l.idShoe;const g=l.addToCart,m=async a=>{_.push("/description"),i=a,localStorage.setItem("sneakerId",i.toString());const s=localStorage.getItem("sneakerId");console.log(i),console.log(s),console.log("id",a)};let c=y(!1);const v=async(a,s)=>{try{const r=await D.post("http://localhost:3001/api/add-to-favorites",{userId:localStorage.getItem("id"),sneakerId:a});s.isFavorite=!0,c.value=!0,setTimeout(()=>{c.value=!1},150)}catch(r){console.log(r)}};return(a,s)=>{const r=C("auto-animate");return o(),t(u,null,[I(p,{"show-overlay-green":n(c)},null,8,["show-overlay-green"]),d.items?(o(),t("div",x,[S((o(),t("div",L,[(o(!0),t(u,null,w(d.items,e=>(o(),F(f,{key:e.id,id:e.id,title:e.title,"image-url":e.imageUrl,price:e.price,"is-added":e.isAdded,"is-favorite":e.isFavorite,"on-click-add":()=>n(g)(e.id),"on-favorite-add":()=>v(e.id,e),"on-click-on-card":()=>m(e.id)},null,8,["id","title","image-url","price","is-added","is-favorite","on-click-add","on-favorite-add","on-click-on-card"]))),128))])),[[r]])])):(o(),t("div",N,T))],64)}}});export{z as _};
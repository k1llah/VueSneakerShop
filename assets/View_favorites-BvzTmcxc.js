import{e as h,r as v,k as s,y as m,D as k,F as u,l as w,E as p,G as F,g as t,i as A,H as x,I as $,m as d,z as f,A as g}from"./index-CgQVmFwT.js";import{_ as S}from"./buttonBack.vue_vue_type_style_index_0_lang-CzTJJ_UG.js";import{_ as V,a as B}from"./overlay.vue_vue_type_script_setup_true_lang-QJ68jPCx.js";const y="/emoji-1.png",D={key:0},I={class:"grid md:grid-cols-4 sm:grid-cols-2 md:gap-5 md:0"},N=h({__name:"Fav-list",props:{items:Array},setup(c){const r=async()=>{};console.log(c.items);const a=v(!1),_=async(o,i)=>{try{const n=await x.post("http://localhost:3001/api/remove-from-favorites",{userId:localStorage.getItem("id"),sneakerId:o});i.isFavorite=!1,a.value=!0,setTimeout(()=>{a.value=!1},150)}catch(n){console.log(n)}};return(o,i)=>{const n=F("auto-animate");return c.items?(t(),s("div",D,[m(V,{"show-overlay-red":a.value},null,8,["show-overlay-red"]),k((t(),s("div",I,[(t(!0),s(u,null,w(c.items,e=>(t(),s(u,{key:e.id},[e.isFavorite?(t(),A(B,{key:0,id:e.id,title:e.title,"image-url":e.imageUrl,price:e.price,"is-added":e.isAdded,"is-favorite":e.isFavorite,"on-click-add":r,"on-favorite-add":()=>_(e.id,e)},null,8,["id","title","image-url","price","is-added","is-favorite","on-favorite-add"])):p("",!0)],64))),128))])),[[n]])])):p("",!0)}}}),j={class:"min-h-[600px]"},C={class:"flex md:ml-[50px] sm:ml-[20px] mt-5 gap-[15px]"},E={class:"flex gap-5 items-center"},z=d("h2",{class:"text-3xl"},"Избранное",-1),G={key:0,class:"mt-[30px]"},H={key:1,class:"flex flex-col justify-center items-center h-[500px]"},L=g('<div class="w-[500px] text-center"><h1 class="text-2xl"> К сожалению у вас нет добавленных <span class="text-2xl text-[#7747ff]">избранных</span> товаров </h1></div><div class="max-w-[70px] mt-5"><img src="'+y+'" alt=""></div>',2),O=[L],R={key:2,class:"flex flex-col justify-center items-center h-[500px]"},T=g('<div class="w-[500px] text-center"><h1 class="text-2xl"> Зарегистрируйтесь или войдите в <span class="text-2xl text-[#7747ff]">аккаунт</span> для просмотра и добавления избранных товаров </h1></div><div class="max-w-[70px] mt-5"><img src="'+y+'" alt=""></div>',2),U=[T],K=h({__name:"View_favorites",setup(c){const r=$(),l=v([]),a=v(!0);return(async()=>{try{const{data:o}=await x.post("http://localhost:3001/api/favorites-user",{id:localStorage.getItem("id")});a.value=!0,l.value=o[0].Favorite,l.value.forEach(i=>{i.isFavorite=!0})}catch(o){console.log(o)}})(),(o,i)=>(t(),s("div",null,[d("div",j,[d("div",C,[d("div",E,[m(S),z])]),f(r).isAuthenticated==!0&&a.value==!0?(t(),s("div",G,[m(N,{items:l.value},null,8,["items"])])):f(r).isAuthenticated==!0&&a.value==!1?(t(),s("div",H,O)):(t(),s("div",R,U))])]))}});export{K as default};

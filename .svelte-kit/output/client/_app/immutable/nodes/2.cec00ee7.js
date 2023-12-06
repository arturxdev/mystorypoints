import{s as he,n as ne}from"../chunks/scheduler.e108d1fd.js";import{S as pe,i as _e,g as f,s as H,h as d,x as Q,c as N,j as E,f as a,k as v,a as J,y as t,m as O,n as B,o as G,z as $}from"../chunks/index.20f83c5e.js";import{e as W}from"../chunks/each.e59479a4.js";function ie(u,e,r){const s=u.slice();return s[4]=e[r][0],s[5]=e[r][1],s}function re(u,e,r){const s=u.slice();return s[8]=e[r],s}function oe(u,e,r){const s=u.slice();return s[11]=e[r],s}function ce(u){let e,r,s,p,I="Semana actual: ",i,_=u[0].actual+"",g,M,D,h,o="Tareas sin clasificar: ",m,S=u[0].unclasificated.length+"",L,z,y,P='<button class="btn-primary flex items-center" onclick="location.reload()"><img class="mr-1 inline-block" src="/icons/loop-left-line.svg" width="20px"/><span>Actualizar</span></button>',F,V,x,k,c,b,w="<tr><th>Semana</th> <th>Fecha Inicio</th> <th>Fecha Final</th> <th>Story points</th> <th>Issues</th></tr>",C,A,U=W(u[0].unclasificated),T=[];for(let l=0;l<U.length;l+=1)T[l]=ue(oe(u,U,l));let R=W(Object.entries(u[0].cal)),j=[];for(let l=0;l<R.length;l+=1)j[l]=de(ie(u,R,l));return{c(){e=f("div"),r=f("div"),s=f("p"),p=f("span"),p.textContent=I,i=f("span"),g=O(_),M=H(),D=f("p"),h=f("span"),h.textContent=o,m=f("span"),L=O(S),z=H(),y=f("div"),y.innerHTML=P,F=H(),V=f("div");for(let l=0;l<T.length;l+=1)T[l].c();x=H(),k=f("div"),c=f("table"),b=f("thead"),b.innerHTML=w,C=H(),A=f("tbody");for(let l=0;l<j.length;l+=1)j[l].c();this.h()},l(l){e=d(l,"DIV",{class:!0});var q=E(e);r=d(q,"DIV",{});var n=E(r);s=d(n,"P",{class:!0});var Y=E(s);p=d(Y,"SPAN",{class:!0,"data-svelte-h":!0}),Q(p)!=="svelte-1xdmhi5"&&(p.textContent=I),i=d(Y,"SPAN",{class:!0});var ee=E(i);g=B(ee,_),ee.forEach(a),Y.forEach(a),M=N(n),D=d(n,"P",{});var Z=E(D);h=d(Z,"SPAN",{class:!0,"data-svelte-h":!0}),Q(h)!=="svelte-wkzxrd"&&(h.textContent=o),m=d(Z,"SPAN",{class:!0});var te=E(m);L=B(te,S),te.forEach(a),Z.forEach(a),n.forEach(a),z=N(q),y=d(q,"DIV",{class:!0,"data-svelte-h":!0}),Q(y)!=="svelte-1m7gkk2"&&(y.innerHTML=P),q.forEach(a),F=N(l),V=d(l,"DIV",{class:!0});var le=E(V);for(let K=0;K<T.length;K+=1)T[K].l(le);le.forEach(a),x=N(l),k=d(l,"DIV",{class:!0});var se=E(k);c=d(se,"TABLE",{class:!0});var X=E(c);b=d(X,"THEAD",{"data-svelte-h":!0}),Q(b)!=="svelte-n2wkii"&&(b.innerHTML=w),C=N(X),A=d(X,"TBODY",{});var ae=E(A);for(let K=0;K<j.length;K+=1)j[K].l(ae);ae.forEach(a),X.forEach(a),se.forEach(a),this.h()},h(){v(p,"class","font-medium"),v(i,"class","text-indigo-500"),v(s,"class","mt-2"),v(h,"class","font-medium"),v(m,"class","text-indigo-500"),v(y,"class","self-center"),v(e,"class","flex rounded-md justify-between px-5 py-5 bg-indigo-50 my-10"),v(V,"class","flex justify-start mt-2 flex-wrap"),v(c,"class","w-full"),v(k,"class","mx-auto w-full flex justify-center my-10")},m(l,q){J(l,e,q),t(e,r),t(r,s),t(s,p),t(s,i),t(i,g),t(r,M),t(r,D),t(D,h),t(D,m),t(m,L),t(e,z),t(e,y),J(l,F,q),J(l,V,q);for(let n=0;n<T.length;n+=1)T[n]&&T[n].m(V,null);J(l,x,q),J(l,k,q),t(k,c),t(c,b),t(c,C),t(c,A);for(let n=0;n<j.length;n+=1)j[n]&&j[n].m(A,null)},p(l,q){if(q&1&&_!==(_=l[0].actual+"")&&G(g,_),q&1&&S!==(S=l[0].unclasificated.length+"")&&G(L,S),q&1){U=W(l[0].unclasificated);let n;for(n=0;n<U.length;n+=1){const Y=oe(l,U,n);T[n]?T[n].p(Y,q):(T[n]=ue(Y),T[n].c(),T[n].m(V,null))}for(;n<T.length;n+=1)T[n].d(1);T.length=U.length}if(q&1){R=W(Object.entries(l[0].cal));let n;for(n=0;n<R.length;n+=1){const Y=ie(l,R,n);j[n]?j[n].p(Y,q):(j[n]=de(Y),j[n].c(),j[n].m(A,null))}for(;n<j.length;n+=1)j[n].d(1);j.length=R.length}},d(l){l&&(a(e),a(F),a(V),a(x),a(k)),$(T,l),$(j,l)}}}function ue(u){let e,r,s=u[11].summary+"",p,I,i,_,g,M=u[11].key+"",D,h,o,m,S=u[11].issueType+"",L,z,y,P,F,V,x,k,c,b,w;return{c(){e=f("div"),r=f("span"),p=O(s),I=H(),i=f("a"),_=f("p"),g=f("span"),D=O(M),h=H(),o=f("p"),m=f("span"),L=O(S),z=H(),y=f("span"),P=O("endDate"),V=H(),x=f("span"),k=O("storyPoints"),w=H(),this.h()},l(C){e=d(C,"DIV",{class:!0});var A=E(e);r=d(A,"SPAN",{class:!0});var U=E(r);p=B(U,s),U.forEach(a),I=N(A),i=d(A,"A",{href:!0,target:!0});var T=E(i);_=d(T,"P",{});var R=E(_);g=d(R,"SPAN",{class:!0});var j=E(g);D=B(j,M),j.forEach(a),R.forEach(a),h=N(T),o=d(T,"P",{});var l=E(o);m=d(l,"SPAN",{});var q=E(m);L=B(q,S),q.forEach(a),z=N(l),y=d(l,"SPAN",{class:!0});var n=E(y);P=B(n,"endDate"),n.forEach(a),V=N(l),x=d(l,"SPAN",{class:!0});var Y=E(x);k=B(Y,"storyPoints"),Y.forEach(a),l.forEach(a),T.forEach(a),w=N(A),A.forEach(a),this.h()},h(){v(r,"class","tooltiptext"),v(g,"class","font-semibold"),v(y,"class",F=u[11].endDate?"":"text-red-500"),v(x,"class",c=u[11].endDate?"":"text-red-500"),v(i,"href",b="https://koibanx.atlassian.net/browse/"+u[11].key),v(i,"target","_blank_"),v(e,"class","inline-block tag-danger tooltip")},m(C,A){J(C,e,A),t(e,r),t(r,p),t(e,I),t(e,i),t(i,_),t(_,g),t(g,D),t(i,h),t(i,o),t(o,m),t(m,L),t(o,z),t(o,y),t(y,P),t(o,V),t(o,x),t(x,k),t(e,w)},p(C,A){A&1&&s!==(s=C[11].summary+"")&&G(p,s),A&1&&M!==(M=C[11].key+"")&&G(D,M),A&1&&S!==(S=C[11].issueType+"")&&G(L,S),A&1&&F!==(F=C[11].endDate?"":"text-red-500")&&v(y,"class",F),A&1&&c!==(c=C[11].endDate?"":"text-red-500")&&v(x,"class",c),A&1&&b!==(b="https://koibanx.atlassian.net/browse/"+C[11].key)&&v(i,"href",b)},d(C){C&&a(e)}}}function fe(u){let e,r,s=u[8].summary+"",p,I,i,_,g,M=u[8].key+"",D,h,o,m=u[8].storyPoint+"",S,L,z;return{c(){e=f("div"),r=f("span"),p=O(s),I=H(),i=f("a"),_=f("p"),g=f("span"),D=O(M),h=H(),o=f("span"),S=O(m),z=H(),this.h()},l(y){e=d(y,"DIV",{class:!0});var P=E(e);r=d(P,"SPAN",{class:!0});var F=E(r);p=B(F,s),F.forEach(a),I=N(P),i=d(P,"A",{class:!0});var V=E(i);_=d(V,"P",{});var x=E(_);g=d(x,"SPAN",{class:!0});var k=E(g);D=B(k,M),k.forEach(a),h=N(x),o=d(x,"SPAN",{});var c=E(o);S=B(c,m),c.forEach(a),x.forEach(a),V.forEach(a),z=N(P),P.forEach(a),this.h()},h(){v(r,"class","tooltiptext"),v(g,"class","font-semibold"),v(i,"class",L=u[8].resolution==="Done"||u[8].resolution==="Finalizado"?"tooltip tag-success":"tooltip tag-warning"),v(e,"class","inline-block tooltip")},m(y,P){J(y,e,P),t(e,r),t(r,p),t(e,I),t(e,i),t(i,_),t(_,g),t(g,D),t(_,h),t(_,o),t(o,S),t(e,z)},p(y,P){P&1&&s!==(s=y[8].summary+"")&&G(p,s),P&1&&M!==(M=y[8].key+"")&&G(D,M),P&1&&m!==(m=y[8].storyPoint+"")&&G(S,m),P&1&&L!==(L=y[8].resolution==="Done"||y[8].resolution==="Finalizado"?"tooltip tag-success":"tooltip tag-warning")&&v(i,"class",L)},d(y){y&&a(e)}}}function de(u){let e,r,s=u[4]+"",p,I,i,_=u[5].start+"",g,M,D,h=u[5].end+"",o,m,S,L=u[5].total+"",z,y,P,F,V,x=W(u[5].issues),k=[];for(let c=0;c<x.length;c+=1)k[c]=fe(re(u,x,c));return{c(){e=f("tr"),r=f("td"),p=O(s),I=H(),i=f("td"),g=O(_),M=H(),D=f("td"),o=O(h),m=H(),S=f("td"),z=O(L),y=H(),P=f("td");for(let c=0;c<k.length;c+=1)k[c].c();F=H(),this.h()},l(c){e=d(c,"TR",{class:!0});var b=E(e);r=d(b,"TD",{class:!0});var w=E(r);p=B(w,s),w.forEach(a),I=N(b),i=d(b,"TD",{class:!0});var C=E(i);g=B(C,_),C.forEach(a),M=N(b),D=d(b,"TD",{class:!0});var A=E(D);o=B(A,h),A.forEach(a),m=N(b),S=d(b,"TD",{class:!0});var U=E(S);z=B(U,L),U.forEach(a),y=N(b),P=d(b,"TD",{});var T=E(P);for(let R=0;R<k.length;R+=1)k[R].l(T);T.forEach(a),F=N(b),b.forEach(a),this.h()},h(){v(r,"class","text-center"),v(i,"class","text-center"),v(D,"class","text-center"),v(S,"class","text-center"),v(e,"class",V=u[5].week===u[0].actual?"!bg-indigo-100":"")},m(c,b){J(c,e,b),t(e,r),t(r,p),t(e,I),t(e,i),t(i,g),t(e,M),t(e,D),t(D,o),t(e,m),t(e,S),t(S,z),t(e,y),t(e,P);for(let w=0;w<k.length;w+=1)k[w]&&k[w].m(P,null);t(e,F)},p(c,b){if(b&1&&s!==(s=c[4]+"")&&G(p,s),b&1&&_!==(_=c[5].start+"")&&G(g,_),b&1&&h!==(h=c[5].end+"")&&G(o,h),b&1&&L!==(L=c[5].total+"")&&G(z,L),b&1){x=W(c[5].issues);let w;for(w=0;w<x.length;w+=1){const C=re(c,x,w);k[w]?k[w].p(C,b):(k[w]=fe(C),k[w].c(),k[w].m(P,null))}for(;w<k.length;w+=1)k[w].d(1);k.length=x.length}b&1&&V!==(V=c[5].week===c[0].actual?"!bg-indigo-100":"")&&v(e,"class",V)},d(c){c&&a(e),$(k,c)}}}function ve(u){let e,r='<span class="text-xl font-bold">My story points</span> <div class="tooltips"><button class="btn-primary flex items-center"><img class="mr-1 inline-block" alt="icon" src="/icons/file-copy-line.svg" width="20px"/> <span>Copiar link</span></button></div>',s,p,I='<div class="w-2/4 m-auto"><img src="/logo-full.png" alt="logo"/></div> <p class="mt-5 text-xl text-center mb-20 font-semibold text-gray-600">Visualiza tus story points de una manera fácil para saber tu rendimiento</p>',i,_,g,M='<div class="w-full"><span>Usuario a buscar</span> <input class="px-3 py-2 mb-4 w-full border border-gray-300 rounded-md focus:border-rose-500" name="userId" placeholder="Jira userId a buscar"/></div> <div class="block self-center mb-4"><label class="mr-1">1M</label> <input type="radio" name="months" value="1" required="required"/> <label class="ml-2 mr-1">2M</label> <input type="radio" name="months" value="2" required="required"/> <label class="ml-2 mr-1">3M</label> <input type="radio" name="months" value="3" required="required"/></div> <button class="btn-primary flex items-center" type="submit"><img class="mr-1 inline-block" src="/icons/search-line.svg" alt="icon" width="20px"/> <span>Buscar</span></button>',D,h=u[0].success&&ce(u);return{c(){e=f("header"),e.innerHTML=r,s=H(),p=f("div"),p.innerHTML=I,i=H(),_=f("div"),g=f("form"),g.innerHTML=M,D=H(),h&&h.c(),this.h()},l(o){e=d(o,"HEADER",{class:!0,"data-svelte-h":!0}),Q(e)!=="svelte-r93zc6"&&(e.innerHTML=r),s=N(o),p=d(o,"DIV",{class:!0,"data-svelte-h":!0}),Q(p)!=="svelte-xwxakg"&&(p.innerHTML=I),i=N(o),_=d(o,"DIV",{class:!0});var m=E(_);g=d(m,"FORM",{action:!0,method:!0,"data-svelte-h":!0}),Q(g)!=="svelte-1y9j410"&&(g.innerHTML=M),D=N(m),h&&h.l(m),m.forEach(a),this.h()},h(){v(e,"class","w-full bg-indigo-500 py-3 px-5 text-white flex items-center justify-between"),v(p,"class","w-5/6 mx-auto mt-10"),v(g,"action","?/tasks"),v(g,"method","POST"),v(_,"class","w-5/6 mx-auto mt-2")},m(o,m){J(o,e,m),J(o,s,m),J(o,p,m),J(o,i,m),J(o,_,m),t(_,g),t(_,D),h&&h.m(_,null)},p(o,[m]){o[0].success?h?h.p(o,m):(h=ce(o),h.c(),h.m(_,null)):h&&(h.d(1),h=null)},i:ne,o:ne,d(o){o&&(a(e),a(s),a(p),a(i),a(_)),h&&h.d()}}}function me(u,e,r){let{form:s}=e,{data:p}=e,I={sucess:!1};return s&&s.success&&(I={...s}),p&&p.tasks.success&&(I={...p.tasks}),u.$$set=i=>{"form"in i&&r(1,s=i.form),"data"in i&&r(2,p=i.data)},[I,s,p]}class Ee extends pe{constructor(e){super(),_e(this,e,me,ve,he,{form:1,data:2})}}export{Ee as component};

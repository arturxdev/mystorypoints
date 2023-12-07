import{s as pe,n as re,r as ve}from"../chunks/scheduler.e108d1fd.js";import{S as me,i as be,A as ge,g as a,s as N,h as n,x as Z,c as L,j as k,f as o,k as l,B as ae,a as W,y as e,C as ne,m as K,n as Q,o as X,z as ie}from"../chunks/index.20f83c5e.js";import{e as le}from"../chunks/each.e59479a4.js";function oe(i,t,h){const u=i.slice();return u[10]=t[h][0],u[11]=t[h][1],u}function ce(i,t,h){const u=i.slice();return u[14]=t[h],u}function ue(i,t,h){const u=i.slice();return u[17]=t[h],u}function de(i){let t,h,u,b,F="Semana actual: ",d,p=i[0].tasks.actual+"",v,w,T,V,A="Tareas sin clasificar: ",y,M=i[0].tasks.unclasificated.length+"",m,z,E,x='<button disabled="" class="btn-primary flex items-center" onclick="location.reload()"><img class="mr-1 inline-block" src="/icons/loop-left-line.svg" width="20px"/><span>Actualizar(deshabilitado)</span></button>',P,j,D,g,f,r,C="<tr><th>Semana</th> <th>Fecha Inicio</th> <th>Fecha Final</th> <th>Story points</th> <th>Issues</th></tr>",I,H,J=le(i[0].tasks.unclasificated),_=[];for(let s=0;s<J.length;s+=1)_[s]=fe(ue(i,J,s));let R=le(Object.entries(i[0].tasks.cal)),S=[];for(let s=0;s<R.length;s+=1)S[s]=_e(oe(i,R,s));return{c(){t=a("div"),h=a("div"),u=a("p"),b=a("span"),b.textContent=F,d=a("span"),v=K(p),w=N(),T=a("p"),V=a("span"),V.textContent=A,y=a("span"),m=K(M),z=N(),E=a("div"),E.innerHTML=x,P=N(),j=a("div");for(let s=0;s<_.length;s+=1)_[s].c();D=N(),g=a("div"),f=a("table"),r=a("thead"),r.innerHTML=C,I=N(),H=a("tbody");for(let s=0;s<S.length;s+=1)S[s].c();this.h()},l(s){t=n(s,"DIV",{class:!0});var B=k(t);h=n(B,"DIV",{});var c=k(h);u=n(c,"P",{class:!0});var Y=k(u);b=n(Y,"SPAN",{class:!0,"data-svelte-h":!0}),Z(b)!=="svelte-1xdmhi5"&&(b.textContent=F),d=n(Y,"SPAN",{class:!0});var se=k(d);v=Q(se,p),se.forEach(o),Y.forEach(o),w=L(c),T=n(c,"P",{});var O=k(T);V=n(O,"SPAN",{class:!0,"data-svelte-h":!0}),Z(V)!=="svelte-wkzxrd"&&(V.textContent=A),y=n(O,"SPAN",{class:!0});var q=k(y);m=Q(q,M),q.forEach(o),O.forEach(o),c.forEach(o),z=L(B),E=n(B,"DIV",{class:!0,"data-svelte-h":!0}),Z(E)!=="svelte-dk1d7a"&&(E.innerHTML=x),B.forEach(o),P=L(s),j=n(s,"DIV",{class:!0});var U=k(j);for(let te=0;te<_.length;te+=1)_[te].l(U);U.forEach(o),D=L(s),g=n(s,"DIV",{class:!0});var $=k(g);f=n($,"TABLE",{class:!0});var ee=k(f);r=n(ee,"THEAD",{"data-svelte-h":!0}),Z(r)!=="svelte-n2wkii"&&(r.innerHTML=C),I=L(ee),H=n(ee,"TBODY",{});var G=k(H);for(let te=0;te<S.length;te+=1)S[te].l(G);G.forEach(o),ee.forEach(o),$.forEach(o),this.h()},h(){l(b,"class","font-medium"),l(d,"class","text-indigo-500"),l(u,"class","mt-2"),l(V,"class","font-medium"),l(y,"class","text-indigo-500"),l(E,"class","self-center"),l(t,"class","flex rounded-md justify-between px-5 py-5 bg-indigo-50 my-10"),l(j,"class","flex justify-start mt-2 flex-wrap"),l(f,"class","w-full"),l(g,"class","mx-auto w-full flex justify-center my-10")},m(s,B){W(s,t,B),e(t,h),e(h,u),e(u,b),e(u,d),e(d,v),e(h,w),e(h,T),e(T,V),e(T,y),e(y,m),e(t,z),e(t,E),W(s,P,B),W(s,j,B);for(let c=0;c<_.length;c+=1)_[c]&&_[c].m(j,null);W(s,D,B),W(s,g,B),e(g,f),e(f,r),e(f,I),e(f,H);for(let c=0;c<S.length;c+=1)S[c]&&S[c].m(H,null)},p(s,B){if(B&1&&p!==(p=s[0].tasks.actual+"")&&X(v,p),B&1&&M!==(M=s[0].tasks.unclasificated.length+"")&&X(m,M),B&1){J=le(s[0].tasks.unclasificated);let c;for(c=0;c<J.length;c+=1){const Y=ue(s,J,c);_[c]?_[c].p(Y,B):(_[c]=fe(Y),_[c].c(),_[c].m(j,null))}for(;c<_.length;c+=1)_[c].d(1);_.length=J.length}if(B&1){R=le(Object.entries(s[0].tasks.cal));let c;for(c=0;c<R.length;c+=1){const Y=oe(s,R,c);S[c]?S[c].p(Y,B):(S[c]=_e(Y),S[c].c(),S[c].m(H,null))}for(;c<S.length;c+=1)S[c].d(1);S.length=R.length}},d(s){s&&(o(t),o(P),o(j),o(D),o(g)),ie(_,s),ie(S,s)}}}function fe(i){let t,h,u=i[17].summary+"",b,F,d,p,v,w=i[17].key+"",T,V,A,y,M=i[17].issueType+"",m,z,E,x,P,j,D,g,f,r,C;return{c(){t=a("div"),h=a("span"),b=K(u),F=N(),d=a("a"),p=a("p"),v=a("span"),T=K(w),V=N(),A=a("p"),y=a("span"),m=K(M),z=N(),E=a("span"),x=K("endDate"),j=N(),D=a("span"),g=K("storyPoints"),C=N(),this.h()},l(I){t=n(I,"DIV",{class:!0});var H=k(t);h=n(H,"SPAN",{class:!0});var J=k(h);b=Q(J,u),J.forEach(o),F=L(H),d=n(H,"A",{href:!0,target:!0});var _=k(d);p=n(_,"P",{});var R=k(p);v=n(R,"SPAN",{class:!0});var S=k(v);T=Q(S,w),S.forEach(o),R.forEach(o),V=L(_),A=n(_,"P",{});var s=k(A);y=n(s,"SPAN",{});var B=k(y);m=Q(B,M),B.forEach(o),z=L(s),E=n(s,"SPAN",{class:!0});var c=k(E);x=Q(c,"endDate"),c.forEach(o),j=L(s),D=n(s,"SPAN",{class:!0});var Y=k(D);g=Q(Y,"storyPoints"),Y.forEach(o),s.forEach(o),_.forEach(o),C=L(H),H.forEach(o),this.h()},h(){l(h,"class","tooltiptext"),l(v,"class","font-semibold"),l(E,"class",P=i[17].endDate?"":"text-red-500"),l(D,"class",f=i[17].endDate?"":"text-red-500"),l(d,"href",r="https://koibanx.atlassian.net/browse/"+i[17].key),l(d,"target","_blank_"),l(t,"class","inline-block tag-danger tooltip")},m(I,H){W(I,t,H),e(t,h),e(h,b),e(t,F),e(t,d),e(d,p),e(p,v),e(v,T),e(d,V),e(d,A),e(A,y),e(y,m),e(A,z),e(A,E),e(E,x),e(A,j),e(A,D),e(D,g),e(t,C)},p(I,H){H&1&&u!==(u=I[17].summary+"")&&X(b,u),H&1&&w!==(w=I[17].key+"")&&X(T,w),H&1&&M!==(M=I[17].issueType+"")&&X(m,M),H&1&&P!==(P=I[17].endDate?"":"text-red-500")&&l(E,"class",P),H&1&&f!==(f=I[17].endDate?"":"text-red-500")&&l(D,"class",f),H&1&&r!==(r="https://koibanx.atlassian.net/browse/"+I[17].key)&&l(d,"href",r)},d(I){I&&o(t)}}}function he(i){let t,h,u=i[14].summary+"",b,F,d,p,v,w=i[14].key+"",T,V,A,y=i[14].storyPoint+"",M,m,z;return{c(){t=a("div"),h=a("span"),b=K(u),F=N(),d=a("a"),p=a("p"),v=a("span"),T=K(w),V=N(),A=a("span"),M=K(y),z=N(),this.h()},l(E){t=n(E,"DIV",{class:!0});var x=k(t);h=n(x,"SPAN",{class:!0});var P=k(h);b=Q(P,u),P.forEach(o),F=L(x),d=n(x,"A",{class:!0});var j=k(d);p=n(j,"P",{});var D=k(p);v=n(D,"SPAN",{class:!0});var g=k(v);T=Q(g,w),g.forEach(o),V=L(D),A=n(D,"SPAN",{});var f=k(A);M=Q(f,y),f.forEach(o),D.forEach(o),j.forEach(o),z=L(x),x.forEach(o),this.h()},h(){l(h,"class","tooltiptext"),l(v,"class","font-semibold"),l(d,"class",m=i[14].resolution==="Done"||i[14].resolution==="Finalizado"?"tooltip tag-success":"tooltip tag-warning"),l(t,"class","inline-block tooltip")},m(E,x){W(E,t,x),e(t,h),e(h,b),e(t,F),e(t,d),e(d,p),e(p,v),e(v,T),e(p,V),e(p,A),e(A,M),e(t,z)},p(E,x){x&1&&u!==(u=E[14].summary+"")&&X(b,u),x&1&&w!==(w=E[14].key+"")&&X(T,w),x&1&&y!==(y=E[14].storyPoint+"")&&X(M,y),x&1&&m!==(m=E[14].resolution==="Done"||E[14].resolution==="Finalizado"?"tooltip tag-success":"tooltip tag-warning")&&l(d,"class",m)},d(E){E&&o(t)}}}function _e(i){let t,h,u=i[10]+"",b,F,d,p=i[11].start+"",v,w,T,V=i[11].end+"",A,y,M,m=i[11].total+"",z,E,x,P,j,D=le(i[11].issues),g=[];for(let f=0;f<D.length;f+=1)g[f]=he(ce(i,D,f));return{c(){t=a("tr"),h=a("td"),b=K(u),F=N(),d=a("td"),v=K(p),w=N(),T=a("td"),A=K(V),y=N(),M=a("td"),z=K(m),E=N(),x=a("td");for(let f=0;f<g.length;f+=1)g[f].c();P=N(),this.h()},l(f){t=n(f,"TR",{class:!0});var r=k(t);h=n(r,"TD",{class:!0});var C=k(h);b=Q(C,u),C.forEach(o),F=L(r),d=n(r,"TD",{class:!0});var I=k(d);v=Q(I,p),I.forEach(o),w=L(r),T=n(r,"TD",{class:!0});var H=k(T);A=Q(H,V),H.forEach(o),y=L(r),M=n(r,"TD",{class:!0});var J=k(M);z=Q(J,m),J.forEach(o),E=L(r),x=n(r,"TD",{});var _=k(x);for(let R=0;R<g.length;R+=1)g[R].l(_);_.forEach(o),P=L(r),r.forEach(o),this.h()},h(){l(h,"class","text-center"),l(d,"class","text-center"),l(T,"class","text-center"),l(M,"class","text-center"),l(t,"class",j=i[11].week===i[0].tasks.actual?"!bg-indigo-100":"")},m(f,r){W(f,t,r),e(t,h),e(h,b),e(t,F),e(t,d),e(d,v),e(t,w),e(t,T),e(T,A),e(t,y),e(t,M),e(M,z),e(t,E),e(t,x);for(let C=0;C<g.length;C+=1)g[C]&&g[C].m(x,null);e(t,P)},p(f,r){if(r&1&&u!==(u=f[10]+"")&&X(b,u),r&1&&p!==(p=f[11].start+"")&&X(v,p),r&1&&V!==(V=f[11].end+"")&&X(A,V),r&1&&m!==(m=f[11].total+"")&&X(z,m),r&1){D=le(f[11].issues);let C;for(C=0;C<D.length;C+=1){const I=ce(f,D,C);g[C]?g[C].p(I,r):(g[C]=he(I),g[C].c(),g[C].m(x,null))}for(;C<g.length;C+=1)g[C].d(1);g.length=D.length}r&1&&j!==(j=f[11].week===f[0].tasks.actual?"!bg-indigo-100":"")&&l(t,"class",j)},d(f){f&&o(t),ie(g,f)}}}function ke(i){let t,h='<span class="text-xl font-bold">My story points</span> <div class="tooltips"><button class="btn-primary flex items-center"><img class="mr-1 inline-block" alt="icon" src="/icons/file-copy-line.svg" width="20px"/> <span>Copiar link</span></button></div>',u,b,F='<div class="w-2/4 m-auto"><img src="/logo-full.png" alt="logo"/></div> <p class="mt-5 text-xl text-center mb-20 font-semibold text-gray-600">Visualiza tus story points de una manera fácil para saber tu rendimiento</p>',d,p,v,w,T,V="Usuario a buscar",A,y,M,m,z,E="1M",x,P,j,D,g="2M",f,r,C,I,H="3M",J,_,R,S,s='<img class="mr-1 inline-block" src="/icons/search-line.svg" alt="icon" width="20px"/> <span>Buscar</span>',B,c,Y,se,O=i[0].tasks.success&&de(i);return c=ge(i[6][0]),{c(){t=a("header"),t.innerHTML=h,u=N(),b=a("div"),b.innerHTML=F,d=N(),p=a("div"),v=a("form"),w=a("div"),T=a("span"),T.textContent=V,A=N(),y=a("input"),M=N(),m=a("div"),z=a("label"),z.textContent=E,x=N(),P=a("input"),j=N(),D=a("label"),D.textContent=g,f=N(),r=a("input"),C=N(),I=a("label"),I.textContent=H,J=N(),_=a("input"),R=N(),S=a("button"),S.innerHTML=s,B=N(),O&&O.c(),this.h()},l(q){t=n(q,"HEADER",{class:!0,"data-svelte-h":!0}),Z(t)!=="svelte-r93zc6"&&(t.innerHTML=h),u=L(q),b=n(q,"DIV",{class:!0,"data-svelte-h":!0}),Z(b)!=="svelte-xwxakg"&&(b.innerHTML=F),d=L(q),p=n(q,"DIV",{class:!0});var U=k(p);v=n(U,"FORM",{action:!0,method:!0});var $=k(v);w=n($,"DIV",{class:!0});var ee=k(w);T=n(ee,"SPAN",{"data-svelte-h":!0}),Z(T)!=="svelte-1q5xqz3"&&(T.textContent=V),A=L(ee),y=n(ee,"INPUT",{class:!0,name:!0,placeholder:!0}),ee.forEach(o),M=L($),m=n($,"DIV",{class:!0});var G=k(m);z=n(G,"LABEL",{class:!0,"data-svelte-h":!0}),Z(z)!=="svelte-1ov3uqq"&&(z.textContent=E),x=L(G),P=n(G,"INPUT",{type:!0,name:!0}),j=L(G),D=n(G,"LABEL",{class:!0,"data-svelte-h":!0}),Z(D)!=="svelte-ye9sbz"&&(D.textContent=g),f=L(G),r=n(G,"INPUT",{type:!0,name:!0}),C=L(G),I=n(G,"LABEL",{class:!0,"data-svelte-h":!0}),Z(I)!=="svelte-1kv56ug"&&(I.textContent=H),J=L(G),_=n(G,"INPUT",{type:!0,name:!0}),G.forEach(o),R=L($),S=n($,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),Z(S)!=="svelte-3djksu"&&(S.innerHTML=s),$.forEach(o),B=L(U),O&&O.l(U),U.forEach(o),this.h()},h(){l(t,"class","w-full bg-indigo-500 py-3 px-5 text-white flex items-center justify-between"),l(b,"class","w-5/6 mx-auto mt-10"),l(y,"class","px-3 py-2 mb-4 w-full border border-gray-300 rounded-md focus:border-rose-500"),l(y,"name","userId"),l(y,"placeholder","Jira userId a buscar"),l(w,"class","w-full"),l(z,"class","mr-1"),l(P,"type","radio"),l(P,"name","months"),P.__value="1",ae(P,P.__value),P.required="required",l(D,"class","ml-2 mr-1"),l(r,"type","radio"),l(r,"name","months"),r.__value="2",ae(r,r.__value),r.required="required",l(I,"class","ml-2 mr-1"),l(_,"type","radio"),l(_,"name","months"),_.__value="3",ae(_,_.__value),_.required="required",l(m,"class","block self-center mb-4"),l(S,"class","btn-primary flex items-center"),l(S,"type","submit"),l(v,"action","?/tasks"),l(v,"method","POST"),l(p,"class","w-5/6 mx-auto mt-2"),c.p(P,r,_)},m(q,U){W(q,t,U),W(q,u,U),W(q,b,U),W(q,d,U),W(q,p,U),e(p,v),e(v,w),e(w,T),e(w,A),e(w,y),ae(y,i[1]),e(v,M),e(v,m),e(m,z),e(m,x),e(m,P),P.checked=P.__value===i[2],e(m,j),e(m,D),e(m,f),e(m,r),r.checked=r.__value===i[2],e(m,C),e(m,I),e(m,J),e(m,_),_.checked=_.__value===i[2],e(v,R),e(v,S),e(p,B),O&&O.m(p,null),Y||(se=[ne(y,"input",i[4]),ne(P,"change",i[5]),ne(r,"change",i[7]),ne(_,"change",i[8])],Y=!0)},p(q,[U]){U&2&&y.value!==q[1]&&ae(y,q[1]),U&4&&(P.checked=P.__value===q[2]),U&4&&(r.checked=r.__value===q[2]),U&4&&(_.checked=_.__value===q[2]),q[0].tasks.success?O?O.p(q,U):(O=de(q),O.c(),O.m(p,null)):O&&(O.d(1),O=null)},i:re,o:re,d(q){q&&(o(t),o(u),o(b),o(d),o(p)),O&&O.d(),c.r(),Y=!1,ve(se)}}}function Ee(i,t,h){let{data:u}=t,b={sucess:!1};u&&u.tasks.success&&(b={...u});let F=b.userId,d=b.months;const p=[[]];function v(){F=this.value,h(1,F)}function w(){d=this.__value,h(2,d)}function T(){d=this.__value,h(2,d)}function V(){d=this.__value,h(2,d)}return i.$$set=A=>{"data"in A&&h(3,u=A.data)},[b,F,d,u,v,w,p,T,V]}class De extends me{constructor(t){super(),be(this,t,Ee,ke,pe,{data:3})}}export{De as component};
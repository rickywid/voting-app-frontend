(this["webpackJsonpvoting-app-frontend"]=this["webpackJsonpvoting-app-frontend"]||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(77),s=n.n(r),o=n(11),i=n.n(o),l=n(16),j=n(4),u=n(12),b=n(17),d=n(113),h=n(122),p=n(116),O=n(130),x=n(120),g=n(124),m=n(131),f=n(114),y=n(115),k=Object(c.createContext)(null),v=n(2),S=function(){var e=Object(c.useContext)(k).auth,t=Object(c.useState)([]),n=Object(j.a)(t,2),a=n[0],r=n[1];Object(c.useEffect)((function(){Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://tva-backend.herokuapp.com/polls");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})))()}),[]);return Object(v.jsx)(v.Fragment,{children:e.user?Object(v.jsxs)(d.a,{children:[Object(v.jsxs)(f.a,{as:"h2",size:"large",mb:5,children:["Welcome ",e.user]}),Object(v.jsx)(d.a,{children:a.length?Object(v.jsx)(y.a,{templateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"5",children:a.map((function(e){var t=e.id,n=e.question,c=e.poll_count;return Object(v.jsx)(b.b,{to:"/poll/".concat(t),children:Object(v.jsxs)(d.a,{background:"#f2f9e3",padding:3,borderRadius:5,fontWeight:"bold",children:[Object(v.jsx)("p",{children:n}),Object(v.jsx)("p",{children:c})]})})}))}):Object(v.jsx)(p.a,{height:"65vh",children:Object(v.jsx)(f.a,{as:"h2",size:"large",children:"No polls"})})})]}):Object(v.jsx)(d.a,{children:Object(v.jsxs)(f.a,{as:"h2",size:"large",children:["You must be logged in. Please ",Object(v.jsx)(b.b,{style:{textDecoration:"underline"},to:"/login",children:"Log in"}),"."]})})})},w=n(39),C=n(61),z=n(128),T=n(129),J=n(83),P=function(){var e=Object(c.useContext)(k).auth,t=Object(u.g)().id,n=Object(u.f)(),a=Object(c.useState)(),r=Object(j.a)(a,2),s=r[0],o=r[1],h=Object(c.useState)(!0),p=Object(j.a)(h,2),O=p[0],x=p[1],m=Object(c.useState)(),y=Object(j.a)(m,2),S=y[0],P=y[1],F=Object(c.useState)(!1),I=Object(j.a)(F,2),N=I[0],_=I[1],A=Object(c.useState)(),W=Object(j.a)(A,2),L=W[0],q=W[1];Object(c.useEffect)((function(){e.user||n("/login"),Object(l.a)(i.a.mark((function n(){var c,a,r;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://tva-backend.herokuapp.com/poll/".concat(t));case 2:return c=n.sent,n.next=5,fetch("https://tva-backend.herokuapp.com/poll/".concat(t,"/voted"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({userId:e.userId})});case 5:return a=n.sent,n.next=8,c.json();case 8:return r=n.sent,n.next=11,a.json();case 11:n.sent.success&&_(!0),r&&o(r[0]),x(!1);case 15:case"end":return n.stop()}}),n)})))()}),[]),Object(c.useEffect)((function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://tva-backend.herokuapp.com/poll/".concat(t,"/results"),{credentials:"include"});case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,q(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[N,_]);return Object(v.jsx)(v.Fragment,{children:O?"":Object(v.jsxs)(d.a,{children:[Object(v.jsx)(f.a,{as:"h2",size:"3xl",mb:10,textAlign:"center",children:s.question}),N?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(d.a,{mb:10,background:"#b7d2d9",padding:"71px",borderRadius:"10px",children:function(){var e=JSON.parse(s.options),t={label:"# of votes",data:JSON.parse(L[0].options_weight)},n={labels:e,datasets:[Object(w.a)(Object(w.a)({},t),{},{backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1})]};return Object(v.jsx)(J.a,{data:n,options:{indexAxis:"y"}})}()}),Object(v.jsx)(d.a,{textAlign:"right",children:Object(v.jsx)(b.b,{to:"/",children:Object(v.jsx)(g.a,{colorScheme:"yellow",children:"Back"})})})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(C.a,{onChange:function(e){return function(e){P(parseInt(e))}(e)},value:S,mb:10,children:Object(v.jsx)(z.a,{children:JSON.parse(s.options).map((function(e,t){return Object(v.jsx)(T.a,{size:"lg",colorScheme:"yellow",value:t,children:e})}))})}),Object(v.jsx)(g.a,{onClick:function(){Object(l.a)(i.a.mark((function n(){var c,a,r,o;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!s){n.next=16;break}return c=JSON.parse(s.options_weight),a={choice:S,pollCount:null===s||void 0===s?void 0:s.total_count,optionsWeight:c},n.next=5,fetch("https://tva-backend.herokuapp.com/poll/".concat(t,"/submit"),{method:"POST",credentials:"include",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}});case 5:return r=n.sent,n.next=8,fetch("https://tva-backend.herokuapp.com/poll/".concat(t,"/submit-user"),{method:"POST",credentials:"include",body:JSON.stringify({userId:e.userId}),headers:{"Content-Type":"application/json"}});case 8:return o=n.sent,n.next=11,r.json();case 11:return n.sent,n.next=14,o.json();case 14:n.sent,_(!0);case 16:case"end":return n.stop()}}),n)})))()},colorScheme:"yellow",children:"Vote"})]})]})})},F=n(6),I=n(119),N=n(121),_=n(85),A=n(80),W=function(){var e=Object(c.useContext)(k).auth,t=Object(u.f)(),n=Object(c.useState)(["option","option"]),a=Object(j.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(""),b=Object(j.a)(o,2),d=b[0],h=b[1],O=Object(c.useState)(!1),m=Object(j.a)(O,2),y=m[0],S=m[1];Object(c.useEffect)((function(){e.user||t("/login")}));var w=Object(A.a)(),C=w.register,z=w.handleSubmit,T=w.errors;var J=z((function(e){for(var t=[],n=0,c=Object.values(e);n<c.length;n++){var a=c[n];t.push(a)}0===d.length?S(!0):(S(!1),function(e,t){P.apply(this,arguments)}(d,t))}));function P(){return P=Object(l.a)(i.a.mark((function e(n,c){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={question:n,options:c},e.next=3,fetch("https://tva-backend.herokuapp.com/poll/create",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}});case 3:return r=e.sent,e.next=6,r.json();case 6:e.sent,t("/");case 8:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}return Object(v.jsxs)(p.a,{direction:"column",align:"center",children:[Object(v.jsx)(f.a,{as:"h2",size:"large",children:"Create a new poll"}),Object(v.jsxs)(p.a,{direction:"column",w:"30rem",children:[Object(v.jsx)(I.a,{my:"1rem",placeholder:"Write your question here",onChange:function(e){h(e.target.value)},background:"white",_placeholder:{color:"black",opacity:"50%"}}),y&&Object(v.jsx)(x.a,{color:"red",children:"You need a Question"}),Object(v.jsxs)("form",{onSubmit:J,children:[r.map((function(e,t){return Object(v.jsx)(N.a,{my:"1rem",placeholder:"Option ".concat(t+1),type:"text",ref:C({required:!0}),name:"option ".concat(t+1," "),background:"white",_placeholder:{color:"black",opacity:"50%"}})})),T.option&&Object(v.jsx)(x.a,{children:" hallo"}),Object(v.jsxs)(p.a,{justify:"center",my:"1rem",children:[Object(v.jsx)(g.a,{mx:"1rem",variant:"ghost",leftIcon:Object(v.jsx)(_.a,{}),onClick:function(){var e=[].concat(Object(F.a)(r),["option"]);s(e)},children:"Add an option"}),Object(v.jsx)(g.a,{mx:"1rem",type:"submit",colorScheme:"facebook",children:"Submit"})]})]})]})]})},L=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(j.a)(r,2),o=s[0],d=s[1],h=Object(c.useState)(!1),O=Object(j.a)(h,2),m=O[0],y=O[1],S=Object(c.useContext)(k),w=(S.auth,S.setAuth),C=Object(u.f)();function z(){return(z=Object(l.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.length>0&&o.length>0)){e.next=11;break}return t={username:n,password:o},e.next=4,fetch("https://tva-backend.herokuapp.com/signup",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},credentials:"include"});case 4:return c=e.sent,e.next=7,c.json();case 7:e.sent.success?(w({user:t.username}),C("/login",{replace:!0})):y(!0),e.next=12;break;case 11:y(!0);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(v.jsxs)(p.a,{w:"100%",direction:"column",align:"center",children:[Object(v.jsx)(f.a,{as:"h2",size:"large",children:"Signup"}),Object(v.jsxs)(p.a,{w:"50%",direction:"column",align:"center",pos:"relative",children:[Object(v.jsx)(N.a,{my:"1rem",placeholder:"Username",size:"lg",onChange:function(e){a(e.target.value)},background:"white",required:!0,_placeholder:{color:"black",opacity:"50%"}}),Object(v.jsx)(N.a,{my:"1rem",placeholder:"Password",size:"lg",type:"password",background:"white",onChange:function(e){d(e.target.value)},_placeholder:{color:"black",opacity:"50%"}}),Object(v.jsxs)(p.a,{align:"center",children:[Object(v.jsx)(x.a,{pos:"absolute",left:"0",children:Object(v.jsx)(b.b,{to:"/login",children:"Go back to Login"})}),Object(v.jsx)(g.a,{my:"1rem",w:"8rem",type:"submit",onClick:function(){return z.apply(this,arguments)},children:"signup"})]}),m&&Object(v.jsx)(x.a,{children:"Signup Failed"})]})]})},q=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(j.a)(r,2),o=s[0],d=s[1],h=Object(c.useState)(!1),O=Object(j.a)(h,2),m=O[0],y=O[1],S=Object(c.useContext)(k),w=(S.auth,S.setAuth),C=Object(u.f)();function z(){return(z=Object(l.a)(i.a.mark((function e(){var t,c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={username:n,password:o},e.next=3,fetch("https://tva-backend.herokuapp.com/login",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},credentials:"include"});case 3:return c=e.sent,e.next=6,c.json();case 6:(a=e.sent).success?(w({user:t.username,userId:a.userId}),C("/",{replace:!0})):y(!0);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(v.jsxs)(p.a,{w:"100%",direction:"column",align:"center",children:[Object(v.jsx)(f.a,{as:"h2",size:"large",children:"Login"}),Object(v.jsxs)(p.a,{w:"50%",direction:"column",align:"center",children:[Object(v.jsx)(N.a,{my:"1rem",placeholder:"Username",size:"lg",onChange:function(e){a(e.target.value)},background:"white",_placeholder:{color:"black",opacity:"50%"}}),Object(v.jsx)(N.a,{my:"1rem",placeholder:"Password",size:"lg",type:"password",onChange:function(e){d(e.target.value)},background:"white",_placeholder:{color:"black",opacity:"50%"}}),Object(v.jsxs)(p.a,{align:"center",children:[Object(v.jsx)(g.a,{my:"1rem",mr:"1rem",w:"50%",type:"submit",colorScheme:"whiteAlpha",onClick:function(){return z.apply(this,arguments)},children:"Log In"}),Object(v.jsx)(x.a,{children:"or"}),Object(v.jsx)(g.a,{ml:"1rem",colorScheme:"facebook",children:Object(v.jsx)(b.b,{to:"/signup",children:"signup"})})]}),m&&Object(v.jsx)(x.a,{children:"Login Failed"})]})]})},E=Object(v.jsxs)(u.c,{children:[Object(v.jsx)(u.a,{path:"/",element:Object(v.jsx)(S,{})}),Object(v.jsx)(u.a,{path:"/poll/:id",element:Object(v.jsx)(P,{})}),Object(v.jsx)(u.a,{path:"/new",element:Object(v.jsx)(W,{})}),Object(v.jsx)(u.a,{path:"/signup",element:Object(v.jsx)(L,{})}),Object(v.jsx)(u.a,{path:"/login",element:Object(v.jsx)(q,{})})]});var B=function(){var e=Object(c.useState)({user:null}),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(u.f)(),s=Object(c.useState)(!0),o=Object(j.a)(s,2),f=o[0],y=o[1];return Object(c.useEffect)((function(){Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://tva-backend.herokuapp.com/auth",{credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n),y(!1);case 8:case"end":return e.stop()}}),e)})))()}),[]),Object(v.jsx)(v.Fragment,{children:f?Object(v.jsx)(d.a,{}):Object(v.jsxs)(h.a,{maxW:"container.xl",children:[Object(v.jsx)(d.a,{paddingTop:5,paddingBottom:5,children:Object(v.jsxs)(p.a,{justifyContent:"space-between",background:"#7b8e93",padding:"10px 20px",borderRadius:"10px",alignItems:"center",children:[Object(v.jsxs)(p.a,{align:"center",children:[Object(v.jsxs)(b.b,{to:"/",style:{fontWeight:"bold"},children:[Object(v.jsx)(O.a,{src:"https://emojis.slackmojis.com/emojis/images/1534453840/4524/zlatan_ibrahimovic.png?1534453840",display:"inline-block",height:10}),"Zultan's Voting App"]}),Object(v.jsx)(x.a,{fontSize:"1.5rem",fontWeight:"bold",ml:"2rem",children:Object(v.jsx)(b.b,{to:"/",children:"Home"})})]}),Object(v.jsx)(d.a,{children:n.user?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(b.b,{to:"/new",style:{marginRight:10},children:Object(v.jsx)(g.a,{colorScheme:"linkedin",size:"xs",children:"new poll"})}),Object(v.jsx)(g.a,{size:"xs",colorScheme:"whatsapp",onClick:function(){Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://tva-backend.herokuapp.com/signout",{credentials:"include",method:"POST",body:JSON.stringify({})});case 2:return t=e.sent,e.next=5,t.json();case 5:e.sent,a({user:null});case 7:case"end":return e.stop()}}),e)})))(),r("/")},children:"sign out"})]}):Object(v.jsxs)(m.b,{children:[Object(v.jsx)(m.a,{mr:4,listStyleType:"none",display:"inline",children:Object(v.jsx)(b.b,{to:"/login",children:Object(v.jsx)(g.a,{size:"xs",colorScheme:"whatsapp",children:"login"})})}),Object(v.jsx)(m.a,{listStyleType:"none",display:"inline",children:Object(v.jsx)(b.b,{to:"/signup",children:Object(v.jsx)(g.a,{colorScheme:"linkedin",size:"xs",children:"sign up"})})})]})})]})}),Object(v.jsx)(k.Provider,{value:{auth:n,setAuth:a},children:Object(v.jsx)(d.a,{mt:100,children:E})})]})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,132)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},M=n(125),D=n(123),U=Object(D.a)({initialColorMode:"dark",useSystemColorMode:!1,styles:{global:{body:{background:"#93a4a8",color:"#322727"}}}});s.a.render(Object(v.jsxs)(a.a.StrictMode,{children:[Object(v.jsx)(b.a,{children:Object(v.jsx)(M.a,{theme:U,children:Object(v.jsx)(B,{})})}),","]}),document.getElementById("root")),R()}},[[103,1,2]]]);
//# sourceMappingURL=main.a16aa6b9.chunk.js.map
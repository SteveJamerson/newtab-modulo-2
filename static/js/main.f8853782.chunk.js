(this["webpackJsonpmeu-primeiro-app"]=this["webpackJsonpmeu-primeiro-app"]||[]).push([[0],{16:function(e,a,t){e.exports=t(40)},21:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(14),r=t.n(l),m=t(2),o=(t(21),t(15)),s=t.n(o),i=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)([]),o=Object(m.a)(r,2),i=o[0],u=o[1];Object(n.useEffect)((function(){s.a.get("https://www.mocky.io/v2/5d531c4f2e0000620081ddce",{method:"GET"}).then((function(e){u(e.data),l(e.data)}))}),[]);var d=[{card_number:"1111111111111111",cvv:789,expiry_date:"01/18"},{card_number:"4111111111111234",cvv:123,expiry_date:"01/20"}],b=Object(n.useState)("none"),E=Object(m.a)(b,2),p=E[0],f=E[1],v=Object(n.useState)(""),N=Object(m.a)(v,2),j=N[0],O=N[1],h=Object(n.useState)("none"),y=Object(m.a)(h,2),g=y[0],S=y[1],C=Object(n.useState)(""),k=Object(m.a)(C,2),w=k[0],x=k[1],_=Object(n.useState)("1"),P=Object(m.a)(_,2),B=P[0],D=P[1],F=Object(n.useState)(""),I=Object(m.a)(F,2),R=I[0],J=I[1],U=Object(n.useState)("none"),q=Object(m.a)(U,2),G=q[0],L=q[1];return c.a.createElement("section",{className:"container"},c.a.createElement("label",{htmlFor:"search"},"Buscar usu\xe1rio"),c.a.createElement("input",{className:"field",type:"search",name:"",id:"search",onChange:function(e){var a=e.target.value,n=t.filter((function(e){var t=e.id,n=e.name,c=e.username;return Object.values({id:t,name:n,username:c}).join().includes(a)}));u(n)},placeholder:"Pesquise por: Nome, ID e Username."}),c.a.createElement("div",{className:"row"},i.map((function(e){return c.a.createElement("div",{className:"card",key:e.index},c.a.createElement("div",{className:"card-body"},c.a.createElement("img",{className:"thumbnail",src:e.img,alt:"Foto do usu\xe1rio"}),c.a.createElement("div",{className:"infos"},c.a.createElement("p",{className:"title"},e.name),c.a.createElement("ul",{className:"description"},c.a.createElement("li",null,c.a.createElement("b",null,"ID:")," ",e.id),c.a.createElement("li",null,c.a.createElement("b",null,"Username:")," ",e.username))),c.a.createElement("button",{className:"modal-pay",onClick:function(){var a;a=e.name,f("flex"),O(a)}},"Pagar")))})),c.a.createElement("div",{className:"modal",style:{display:p}},c.a.createElement("div",{className:"modal-content"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""===R?L("flex"):(x("1"===B?"":"n\xe3o"),f("none"),S("flex"),J(""),L("none"))}},c.a.createElement("p",{className:"modal-header"},"Pagamento para ",c.a.createElement("span",null,j),c.a.createElement("button",{class:"close",onClick:function(){return f("none")}},c.a.createElement("i",{class:"close-icon"}),c.a.createElement("i",{class:"close-icon"}))),c.a.createElement("div",{className:"modal-body"},c.a.createElement("input",{className:"field",thousandSeparator:!0,value:R,onChange:function(e){var a=e.target.value.replace(/\D/g,""),t=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(a/100);J(t),L("none")},placeholder:"R$ 0,00"}),c.a.createElement("small",{className:"field-error",style:{display:G}},"Campo obrigat\xf3rio"),c.a.createElement("select",{className:"field",value:B,onChange:function(e){D(e.target.value)}},c.a.createElement("option",{value:"1"},"Cart\xe3o com final ",d[0].card_number.substr(-4)),c.a.createElement("option",{value:"2"},"Cart\xe3o com final ",d[1].card_number.substr(-4)))),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"submit"},"Pagar"))))),c.a.createElement("div",{className:"modal",style:{display:g}},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header "},c.a.createElement("p",null,"Recibo de pagamento")),c.a.createElement("div",{className:"modal-body"},c.a.createElement("p",null,"O Pagamento ",c.a.createElement("b",null,w)," foi conclu\xeddo com sucesso")),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{onClick:function(){S("none")}},"Fechar"))))))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f8853782.chunk.js.map
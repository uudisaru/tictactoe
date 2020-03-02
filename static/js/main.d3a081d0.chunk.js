(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{18:function(e,t,a){e.exports=a(47)},23:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),i=a.n(c),s=(a(23),a(2)),o=a.n(s),l=a(4),u=a(3),m=a(5),d=a(7),p=(a(25),a(26),Object.freeze({Uninitialized:"uninitialized",InProgress:"in-progress",Lose:"lose",Tie:"tie",Win:"win",isFinished:function(e){return e===p.Lose||e===p.Win}})),f=Object.freeze({Circle:1,Cross:-1}),v=Object.freeze(Object(l.a)({},f,{Empty:0})),y={board:[[v.Empty,v.Empty,v.Empty],[v.Empty,v.Empty,v.Empty],[v.Empty,v.Empty,v.Empty]],result:null,status:p.Uninitialized,turn:f.Circle},b=function(e){var t=e.onClick,a=e.value;return r.a.createElement("div",{className:"cell"},a===v.Circle?r.a.createElement("div",{className:"cell__circle"}):a===v.Cross?r.a.createElement("div",{className:"cell__cross"}):r.a.createElement("button",{className:"cell__empty",onClick:t}))},E=(a(27),function(e){return r.a.createElement("div",{className:"loader",style:{fontSize:e.size}},r.a.createElement("div",{className:"loader__center"},r.a.createElement("i",{className:"fa fa-cog fa-spin"})))}),g=(a(28),function(e){return r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"overlay__center"},r.a.createElement("span",{style:{fontSize:e.size}},e.text)))});var h=function(e){var t=void 0;return e.interaction.loading&&(t=r.a.createElement(E,{size:90})),e.interaction.waiting&&(t=r.a.createElement(g,{size:24,text:"Start a game"})),r.a.createElement("main",{className:"tictactoe"},e.board.map((function(t,a){return r.a.createElement("div",{className:"tictactoe__row",key:a},t.map((function(t,n){return r.a.createElement(b,{key:n,onClick:e.result?void 0:function(){return e.move(a,n)},value:t})})))})),e.result&&function(e){var t={};switch(e.type){case"row":t.top=48+102*e.index;break;case"col":t.left=48+102*e.index;break;default:t.transform=0===e.index?"rotate(45deg)":"rotate(-45deg)"}return r.a.createElement("div",{className:"strike-through strike-through-"+e.type,style:t})}(e.result),t)},w=(a(29),function(e){var t=Object(n.useState)(!0),a=Object(m.a)(t,2),c=a[0],i=a[1];return r.a.createElement("header",{className:"controls"},r.a.createElement("div",{className:"controls__status"},r.a.createElement("label",null,"Status:"),r.a.createElement("span",null,e.status)),e.status!==p.InProgress&&r.a.createElement("div",{className:"controls__game"},r.a.createElement("div",{className:"game__start"},r.a.createElement("input",{id:"game-start",type:"checkbox",checked:c,onChange:function(){return i(!c)}}),r.a.createElement("label",{htmlFor:"game-start"},"Start with my move")),r.a.createElement("div",{className:"game__play"},r.a.createElement("button",{onClick:function(){return e.play(c)}},e.status===p.Uninitialized?"Play":"Play again"))))}),k=a(6),x=a.n(k),O="https://tictac.aktors.ee/api/board",_={headers:{"Access-Control-Allow-Origin":window.origin}};function j(e){return N.apply(this,arguments)}function N(){return(N=Object(u.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post(O+"?turn="+(t?"mine":"yours"),_);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t,a){return z.apply(this,arguments)}function z(){return(z=Object(u.a)(o.a.mark((function e(t,a,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.put(O+"/".concat(t,"?x=").concat(a,"&y=").concat(n),_);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){for(var t=null,a=function(a){return e[a][0]!==v.Empty&&e[a].every((function(t){return t===e[a][0]}))?(t={type:"row",index:a},"break"):e[0][a]!==v.Empty&&[e[1][a],e[2][a]].every((function(t){return t===e[0][a]}))?(t={type:"col",index:a},"break"):void 0},n=0;n<3;n++){if("break"===a(n))break}return t||e[1][1]!==v.Empty&&(e[1][1]===e[0][0]&&e[1][1]===e[2][2]?t={type:"diag",index:0}:e[1][1]===e[0][2]&&e[1][1]===e[2][0]&&(t={type:"diag",index:2})),t}function P(e,t,a,n){var r=Object(d.a)(e);return r[t]=Object(d.a)(r[t]),r[t].splice(a,1,n),{newBoard:r}}var I=function(){var e=Object(n.useState)(y),t=Object(m.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)({loading:!1,waiting:!0}),s=Object(m.a)(i,2),d=s[0],b=s[1];return r.a.createElement("div",{className:"App"},r.a.createElement(w,{play:function(){var e=Object(u.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b({waiting:!1,loading:!0}),e.next=3,j(t);case 3:a=e.sent,c(Object(l.a)({},a,{turn:f.Circle})),b({waiting:!1,loading:!1});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),status:a.status}),r.a.createElement(h,{board:a.board,interaction:d,move:function(){var e=Object(u.a)(o.a.mark((function e(t,n){var r,i,s,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.turn===f.Circle&&a.status===p.InProgress){e.next=2;break}return e.abrupt("return");case 2:return r=P(a.board,t,n,a.turn),i=r.newBoard,b({waiting:!1,loading:!0}),c(Object(l.a)({},a,{board:i,turn:v.Cross})),e.next=7,C(a.id,t,n);case 7:s=e.sent,u=null,p.isFinished(s.status)&&(u=S(s.board)),c(Object(l.a)({},s,{result:u,turn:v.Circle})),s.status===p.InProgress?b({waiting:!1,loading:!1}):b({waiting:!0,loading:!1});case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),result:a.result}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.d3a081d0.chunk.js.map
(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{27:function(e,t,n){e.exports=n(58)},32:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(25),i=n.n(c),s=(n(32),n(2)),u=n.n(s),o=n(9),l=n(5),m=n(6),f=(n(34),n(35),n(60)),d=Object.freeze({Server:"server",Minimax:"minimax algorithm"}),v=Object.freeze({Uninitialized:"uninitialized",InProgress:"in-progress",Lose:"lose",Tie:"tie",Win:"win",isFinished:function(e){return e===v.Lose||e===v.Win}}),p=Object.freeze({Circle:1,Cross:-1,Empty:0}),b=Object.freeze({Ai:p.Cross,Player:p.Circle}),h=Object.freeze({Row:"row",Column:"col",Diagonal:"diag"}),w={board:Object(f.c)(3,3).toArray(),result:null,status:v.Uninitialized,turn:b.Player},g=function(e){var t=e.onClick,n=e.value;return r.a.createElement("div",{className:"cell"},n===p.Circle?r.a.createElement("div",{className:"cell__circle"}):n===p.Cross?r.a.createElement("div",{className:"cell__cross"}):r.a.createElement("button",{className:"cell__empty",onClick:t}))},y=(n(37),function(e){return r.a.createElement("div",{className:"loader",style:{fontSize:e.size}},r.a.createElement("div",{className:"loader__center"},r.a.createElement("i",{className:"fa fa-cog fa-spin"})))}),E=(n(38),function(e){return r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"overlay__center"},r.a.createElement("span",{style:{fontSize:e.size}},e.text)))});var k=function(e){var t=void 0;return e.interaction.loading&&(t=r.a.createElement(y,{size:90})),e.interaction.waiting&&(t=r.a.createElement(E,{size:24,text:"Start a game"})),r.a.createElement("main",{className:"tictactoe"},e.board.map((function(t,n){return r.a.createElement("div",{className:"tictactoe__row",key:n},t.map((function(t,a){return r.a.createElement(g,{key:a,onClick:e.result?void 0:function(){return e.move(n,a)},value:t})})))})),e.result&&function(e){var t={};switch(e.type){case"row":t.top=48+102*e.index;break;case"col":t.left=48+102*e.index;break;default:t.transform=0===e.index?"rotate(45deg)":"rotate(-45deg)"}return r.a.createElement("div",{className:"strike-through strike-through-"+e.type,style:t})}(e.result),t)},O=(n(39),function(e){var t=Object(a.useState)(!0),n=Object(m.a)(t,2),c=n[0],i=n[1];return r.a.createElement("header",{className:"controls"},r.a.createElement("div",{className:"controls__status"},r.a.createElement("label",null,"Status:"),r.a.createElement("span",null,e.status)),e.status!==v.InProgress&&r.a.createElement("div",{className:"controls__game"},r.a.createElement("div",{className:"game__start"},r.a.createElement("input",{id:"game-start",type:"checkbox",checked:c,onChange:function(){return i(!c)}}),r.a.createElement("label",{htmlFor:"game-start"},"Start with my move")),r.a.createElement("div",{className:"game__play"},r.a.createElement("button",{onClick:function(){return e.play(c)}},e.status===v.Uninitialized?"Play":"Play again"))))}),j=n(13),x=n(14),_=n.n(x),N=n(10);function C(e,t){var n={status:v.Tie},a=!0,r=!1,c=void 0;try{for(var i,s=e.entries()[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var u=Object(m.a)(i.value,2),o=u[0],l=u[1],f=new Set(l);if(f.has(p.Empty))n.status=v.InProgress;else if(1===f.size){var d=f.values().next().value,b={index:o,type:t};return b.status=d===p.Circle?v.Win:v.Lose,b}}}catch(h){r=!0,c=h}finally{try{a||null==s.return||s.return()}finally{if(r)throw c}}return n}function P(e){var t=C(e,h.Row);if(v.isFinished(t.status))return t;var n=C(Object(f.b)(e),h.Column);return v.isFinished(n.status)?n:(n=C([Object(f.a)(e),[e[0][2],e[1][1],e[2][0]]],h.Diagonal),v.isFinished(n.status)?n:t)}function S(e){return e.map((function(e){return Object(N.a)(e)}))}function z(e,t,n,a){var r=Object(N.a)(e);return r[t]=Object(N.a)(r[t]),r[t].splice(n,1,a),{newBoard:r}}function A(e,t,n,a,r){var c=[-1,-1],i=t===b.Ai?-1e3:1e3,s=P(e).status;if(s!==v.InProgress)return[i=function(e){return e===v.Lose?1e3:e!==v.InProgress?-1e3:0}(s),c];var u=function(e){var t=[];return e.forEach((function(e,n){e.forEach((function(e,a){e===p.Empty&&t.push([n,a])}))})),t}(e);if(0===n&&1===u.length)return[0,u[0]];for(var o=0;o<u.length;o++){var l=Object(m.a)(u[o],2),f=l[0],d=l[1];e[f][d]=t;var h=A(e,t===b.Ai?b.Player:b.Ai,n+1,a,r)[0];if(t===b.Ai){if(i<h&&(i=h-10*n,c=[f,d],a=Math.max(a,i),e[f][d]=0,r<=a))break}else if(i>h&&(i=h+10*n,c=[f,d],r=Math.min(r,i),e[f][d]=0,r<=a))break;e[f][d]=0}return[i,c]}var B=null;function I(e,t){return L.apply(this,arguments)}function L(){return(L=Object(l.a)(u.a.mark((function e(t,n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t?a=Object(o.a)({},w):((a={board:Object(f.c)(3,3).toArray(),turn:b.Player}).board[1][1]=b.Ai,a.id=n),a.status=v.InProgress,a.id=1,B=a.board,e.abrupt("return",Promise.resolve(a));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,t,n){return F.apply(this,arguments)}function F(){return(F=Object(l.a)(u.a.mark((function e(t,n,a){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B=z(B,n,a,b.Player).newBoard,(r=P(B)).status===v.InProgress&&(c=A(S(B),b.Ai,0,-1e3,1e3),B=z(B,c[1][0],c[1][1],b.Ai).newBoard,r=P(B)),e.abrupt("return",Promise.resolve({board:B,id:t,status:r.status,turn:b.Player}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T="https://tictac.aktors.ee/api/board",W={headers:{"Access-Control-Allow-Origin":window.origin}};function R(e){return U.apply(this,arguments)}function U(){return(U=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post(T+"?turn="+(t?"mine":"yours"),W);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t,n){return J.apply(this,arguments)}function J(){return(J=Object(l.a)(u.a.mark((function e(t,n,a){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.put(T+"/".concat(t,"?x=").concat(n,"&y=").concat(a),W);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var $=function e(){var t=this;Object(j.a)(this,e),this.createBoard=function(){var e=Object(l.a)(u.a.mark((function e(n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id,t.id+=1,e.abrupt("return",I(n,a));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.takeTurn=function(){var e=Object(l.a)(u.a.mark((function e(t,n,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",M(t,n,a));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()},q=function e(){Object(j.a)(this,e),this.createBoard=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",R(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.takeTurn=function(){var e=Object(l.a)(u.a.mark((function e(t,n,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",D(t,n,a));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()};n(57);var G=function(e){var t=e.label,n=e.checked,a=e.onChange,c=t.replace(" ","-");return r.a.createElement("div",{className:"switch"},r.a.createElement("div",{className:"switch__container"},r.a.createElement("input",{id:c,checked:n,onChange:a,className:"switch__input",type:"checkbox"}),r.a.createElement("label",{htmlFor:c,className:"switch__label"})),r.a.createElement("div",{className:"switch__content"},t))};function H(e,t,n){return function(a){var r=a.target,c="checkbox"===r.type?r.checked:r.value;n(c?e:t)}}var K=function(e){var t=e.backend,n=e.selectBackend,c=Object(a.useRef)(),i=Object(a.useState)(!1),s=Object(m.a)(i,2),u=s[0],o=s[1],l=Object(a.useCallback)((function(){return o(!1)}),[]),f=Object(a.useCallback)(H(d.Server,d.Minimax,n),[]),v=Object(a.useCallback)(H(d.Minimax,d.Server,n),[]);return function(e,t){Object(a.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])}(c,l),r.a.createElement("div",{className:"menu",ref:c},r.a.createElement("button",{className:"menu__toggler",onClick:function(){return o(!u)}},r.a.createElement("i",{className:"fas fa-bars"})),u&&r.a.createElement("div",{className:"menu__dropdown"},r.a.createElement("div",null,"Play against"),r.a.createElement(G,{checked:t===d.Server,label:d.Server,onChange:f}),r.a.createElement(G,{checked:t===d.Minimax,label:d.Minimax,onChange:v})))};var Q=function(){var e=Object(a.useState)(w),t=Object(m.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(new q),s=Object(m.a)(i,2),f=s[0],p=s[1],h=Object(a.useState)({loading:!1,waiting:!0}),g=Object(m.a)(h,2),y=g[0],E=g[1];return r.a.createElement("div",{className:"App"},r.a.createElement(K,{backend:f instanceof q?d.Server:d.Minimax,selectBackend:function(e){c(w),E({loading:!1,waiting:!0}),e===d.Server?p(new q):p(new $)}}),r.a.createElement(O,{play:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E({waiting:!1,loading:!0}),e.next=3,f.createBoard(t);case 3:n=e.sent,c(Object(o.a)({},n,{turn:b.Player})),E({waiting:!1,loading:!1});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),status:n.status}),r.a.createElement(k,{board:n.board,interaction:y,move:function(){var e=Object(l.a)(u.a.mark((function e(t,a){var r,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.turn===b.Player&&n.status===v.InProgress){e.next=2;break}return e.abrupt("return");case 2:return E({waiting:!1,loading:!0}),c(Object(o.a)({},n,{turn:b.Ai})),e.next=6,f.takeTurn(n.id,t,a);case 6:r=e.sent,i=null,v.isFinished(r.status)&&(i=P(r.board)),c(Object(o.a)({},r,{result:i,turn:b.Player})),r.status===v.InProgress?E({waiting:!1,loading:!1}):E({waiting:!0,loading:!1});case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),result:n.result}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.4c5e2163.chunk.js.map
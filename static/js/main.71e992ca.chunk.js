(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],[,,,,,,function(e,t,r){e.exports=r(15)},,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(3),o=r.n(s),c=(r(11),r(4)),u=r(5),i=r(1),l=(r(12),r(13),function(e){var t=e.onClick,r=e.value;return n.a.createElement("div",{className:"cell"},1===r?n.a.createElement("div",{className:"circle"}):-1===r?n.a.createElement("div",{className:"cross"}):n.a.createElement("button",{className:"empty",onClick:t}))});var m=function(e){return n.a.createElement("div",{className:"tictactoe"},e.board.map((function(t,r){return n.a.createElement("div",{className:"row",key:r},t.map((function(t,a){return n.a.createElement(l,{key:a,onClick:e.result?void 0:function(){return e.move(r,a)},value:t})})))})),e.result&&function(e){var t={};switch(e.type){case"row":t.top=48+102*e.index;break;case"col":t.left=48+102*e.index;break;default:t.transform=0===e.index?"rotate(45deg)":"rotate(-45deg)"}return n.a.createElement("div",{className:"strike-through strike-through-"+e.type,style:t})}(e.result))},d=(r(14),function(e){var t=e.reset,r=e.status;return n.a.createElement("div",{className:"game-status"},n.a.createElement("div",{className:"game-status-text"},r),n.a.createElement("div",{className:"game-status-reset"},n.a.createElement("button",{onClick:t},"Reset")))}),v={board:[[0,0,0],[0,0,0],[0,0,0]],result:null,status:"in-progress",turn:-1};var f=function(){var e=Object(a.useState)(v),t=Object(c.a)(e,2),r=t[0],s=t[1];return n.a.createElement("div",{className:"App"},n.a.createElement(m,{board:r.board,move:function(e,t){var a=function(e,t,r,a){var n=Object(i.a)(e);n[t]=Object(i.a)(n[t]),n[t].splice(r,1,a);var s=function(e){for(var t={status:"in-progress",result:null},r=function(r){return 0!==e[r][0]&&e[r].every((function(t){return t===e[r][0]}))?(t.status=1===e[r][0]?"win":"lose",t.result={type:"row",index:r},"break"):0!==e[0][r]&&[e[1][r],e[2][r]].every((function(t){return t===e[0][r]}))?(t.status=1===e[0][r]?"win":"lose",t.result={type:"col",index:r},"break"):void 0},a=0;a<3;a++){if("break"===r(a))break}return"in-progress"===t.status&&0!==e[1][1]&&(e[1][1]===e[0][0]&&e[1][1]===e[2][2]?t.result={type:"diag",index:0}:e[1][1]===e[0][2]&&e[1][1]===e[2][0]&&(t.result={type:"diag",index:2}),t.result&&(t.status=1===e[1][1]?"win":"lose")),"in-progress"===t.status&&e.every((function(e){return e.every((function(e){return 0!==e}))}))&&(t.status="tie"),t}(n);return Object(u.a)({},s,{newBoard:n})}(r.board,e,t,r.turn),n=a.newBoard,o=a.result,c=a.status;s({board:n,status:c,result:o,turn:1===r.turn?-1:1})},result:r.result}),"in-progress"!==r.status&&n.a.createElement(d,{reset:function(){return s(v)},status:r.status}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.71e992ca.chunk.js.map
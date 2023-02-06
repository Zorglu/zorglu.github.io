import{c as D,u as ut,a as st,b as d,h as C,Q as le,d as ct,e as K,r as x,i as Ie,o as X,f as J,n as ze,g as re,j as M,l as ke,k as ue,m as V,p as se,w as S,q as We,s as Te,t as dt,v as Pe,x as ft,y as vt,z as Ke,P as mt,A as ht,B as U,C as gt,D as Z,E as be,F as _e,G as ye,H as Ae,I as we,J as bt,K as yt,L as wt,M as pt,N as qt,O as ie,R as Ee,S as Ct,T as Fe,U as St,V as Bt,W as kt,X as At,Y as pe,Z as ee,_ as xt,$ as zt,a0 as Tt,a1 as Pt,a2 as Ot,a3 as te,a4 as ae,a5 as z,a6 as A,a7 as Lt,a8 as ne,a9 as Dt,aa as I,ab as Qt,ac as qe,ad as Vt,ae as _t,af as Et}from"./index.2d07851b.js";import{f as Mt,a as Ht,b as Rt}from"./index.12983a23.js";import{_ as jt}from"./plugin-vue_export-helper.21dcd24c.js";var Nt=D({name:"QAvatar",props:{...ut,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:o}){const n=st(e),r=d(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),t=d(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const a=e.icon!==void 0?[C(le,{name:e.icon})]:void 0;return C("div",{class:r.value,style:n.value},[C("div",{class:"q-avatar__content row flex-center overflow-hidden",style:t.value},ct(o.default,a))])}}}),It=D({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const n=d(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>C("div",{class:n.value},K(o.default))}}),Wt=D({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const n=d(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>C("div",{class:n.value,role:"toolbar"},K(o.default))}});function Kt(){const e=x(!Ie.value);return e.value===!1&&X(()=>{e.value=!0}),e}const Ye=typeof ResizeObserver!="undefined",Me=Ye===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var xe=D({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let n=null,r,t={width:-1,height:-1};function a(c){c===!0||e.debounce===0||e.debounce==="0"?s():n===null&&(n=setTimeout(s,e.debounce))}function s(){if(n!==null&&(clearTimeout(n),n=null),r){const{offsetWidth:c,offsetHeight:u}=r;(c!==t.width||u!==t.height)&&(t={width:c,height:u},o("resize",t))}}const{proxy:m}=M();if(Ye===!0){let c;const u=i=>{r=m.$el.parentNode,r?(c=new ResizeObserver(a),c.observe(r),s()):i!==!0&&re(()=>{u(!0)})};return X(()=>{u()}),J(()=>{n!==null&&clearTimeout(n),c!==void 0&&(c.disconnect!==void 0?c.disconnect():r&&c.unobserve(r))}),ze}else{let i=function(){n!==null&&(clearTimeout(n),n=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",a,ke.passive),u=void 0)},w=function(){i(),r&&r.contentDocument&&(u=r.contentDocument.defaultView,u.addEventListener("resize",a,ke.passive),s())};const c=Kt();let u;return X(()=>{re(()=>{r=m.$el,r&&w()})}),J(i),m.trigger=a,()=>{if(c.value===!0)return C("object",{style:Me.style,tabindex:-1,type:"text/html",data:Me.url,"aria-hidden":"true",onLoad:w})}}}}),Ft=D({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:n}){const{proxy:{$q:r}}=M(),t=ue(se,V);if(t===V)return console.error("QHeader needs to be child of QLayout"),V;const a=x(parseInt(e.heightHint,10)),s=x(!0),m=d(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||r.platform.is.ios&&t.isContainer.value===!0),c=d(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return s.value===!0?a.value:0;const v=a.value-t.scroll.value.position;return v>0?v:0}),u=d(()=>e.modelValue!==!0||m.value===!0&&s.value!==!0),i=d(()=>e.modelValue===!0&&u.value===!0&&e.reveal===!0),w=d(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=d(()=>{const v=t.rows.value.top,b={};return v[0]==="l"&&t.left.space===!0&&(b[r.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),v[2]==="r"&&t.right.space===!0&&(b[r.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),b});function f(v,b){t.update("header",v,b)}function h(v,b){v.value!==b&&(v.value=b)}function T({height:v}){h(a,v),f("size",v)}function k(v){i.value===!0&&h(s,!0),n("focusin",v)}S(()=>e.modelValue,v=>{f("space",v),h(s,!0),t.animate()}),S(c,v=>{f("offset",v)}),S(()=>e.reveal,v=>{v===!1&&h(s,e.modelValue)}),S(s,v=>{t.animate(),n("reveal",v)}),S(t.scroll,v=>{e.reveal===!0&&h(s,v.direction==="up"||v.position<=e.revealOffset||v.position-v.inflectionPoint<100)});const p={};return t.instances.header=p,e.modelValue===!0&&f("size",a.value),f("space",e.modelValue),f("offset",c.value),J(()=>{t.instances.header===p&&(t.instances.header=void 0,f("size",0),f("offset",0),f("space",!1))}),()=>{const v=We(o.default,[]);return e.elevated===!0&&v.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),v.push(C(xe,{debounce:0,onResize:T})),C("header",{class:w.value,style:q.value,onFocusin:k},v)}}}),W=D({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:o}){const n=d(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>C("div",{class:n.value},K(o.default))}}),Ce=D({name:"QItem",props:{...Te,...dt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:o,emit:n}){const{proxy:{$q:r}}=M(),t=Pe(e,r),{hasLink:a,linkAttrs:s,linkClass:m,linkTag:c,navigateOnClick:u}=ft(),i=x(null),w=x(null),q=d(()=>e.clickable===!0||a.value===!0||e.tag==="label"),f=d(()=>e.disable!==!0&&q.value===!0),h=d(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(a.value===!0&&e.active===null?m.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(f.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),T=d(()=>{if(e.insetLevel===void 0)return null;const b=r.lang.rtl===!0?"Right":"Left";return{["padding"+b]:16+e.insetLevel*56+"px"}});function k(b){f.value===!0&&(w.value!==null&&(b.qKeyEvent!==!0&&document.activeElement===i.value?w.value.focus():document.activeElement===w.value&&i.value.focus()),u(b))}function p(b){if(f.value===!0&&vt(b,13)===!0){Ke(b),b.qKeyEvent=!0;const g=new MouseEvent("click",b);g.qKeyEvent=!0,i.value.dispatchEvent(g)}n("keyup",b)}function v(){const b=We(o.default,[]);return f.value===!0&&b.unshift(C("div",{class:"q-focus-helper",tabindex:-1,ref:w})),b}return()=>{const b={ref:i,class:h.value,style:T.value,role:"listitem",onClick:k,onKeyup:p};return f.value===!0?(b.tabindex=e.tabindex||"0",Object.assign(b,s.value)):q.value===!0&&(b["aria-disabled"]="true"),C(c.value,b,v())}}}),Yt=D({name:"QList",props:{...Te,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:o}){const n=M(),r=Pe(e,n.proxy.$q),t=d(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(r.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>C(e.tag,{class:t.value},K(o.default))}});const Oe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Ut=Object.keys(Oe);Oe.all=!0;function He(e){const o={};for(const n of Ut)e[n]===!0&&(o[n]=!0);return Object.keys(o).length===0?Oe:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}function Re(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function Xt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),mt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Se(e,o,n){const r=Ae(e);let t,a=r.left-o.event.x,s=r.top-o.event.y,m=Math.abs(a),c=Math.abs(s);const u=o.direction;u.horizontal===!0&&u.vertical!==!0?t=a<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?t=s<0?"up":"down":u.up===!0&&s<0?(t="up",m>c&&(u.left===!0&&a<0?t="left":u.right===!0&&a>0&&(t="right"))):u.down===!0&&s>0?(t="down",m>c&&(u.left===!0&&a<0?t="left":u.right===!0&&a>0&&(t="right"))):u.left===!0&&a<0?(t="left",m<c&&(u.up===!0&&s<0?t="up":u.down===!0&&s>0&&(t="down"))):u.right===!0&&a>0&&(t="right",m<c&&(u.up===!0&&s<0?t="up":u.down===!0&&s>0&&(t="down")));let i=!1;if(t===void 0&&n===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,i=!0,t==="left"||t==="right"?(r.left-=a,m=0,a=0):(r.top-=s,c=0,s=0)}return{synthetic:i,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:r,direction:t,isFirst:o.event.isFirst,isFinal:n===!0,duration:Date.now()-o.event.time,distance:{x:m,y:c},offset:{x:a,y:s},delta:{x:r.left-o.event.lastX,y:r.top-o.event.lastY}}}}let Jt=0;var Be=ht({name:"touch-pan",beforeMount(e,{value:o,modifiers:n}){if(n.mouse!==!0&&U.has.touch!==!0)return;function r(a,s){n.mouse===!0&&s===!0?Ke(a):(n.stop===!0&&ye(a),n.prevent===!0&&_e(a))}const t={uid:"qvtp_"+Jt++,handler:o,modifiers:n,direction:He(n),noop:ze,mouseStart(a){Re(a,t)&&gt(a)&&(Z(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Re(a,t)){const s=a.target;Z(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,s){if(U.is.firefox===!0&&be(e,!0),t.lastEvt=a,s===!0||n.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const u=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&_e(u),a.cancelBubble===!0&&ye(u),Object.assign(u,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:u}}ye(a)}const{left:m,top:c}=Ae(a);t.event={x:m,y:c,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:m,lastY:c}},move(a){if(t.event===void 0)return;const s=Ae(a),m=s.left-t.event.x,c=s.top-t.event.y;if(m===0&&c===0)return;t.lastEvt=a;const u=t.event.mouse===!0,i=()=>{r(a,u);let f;n.preserveCursor!==!0&&n.preservecursor!==!0&&(f=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Xt(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,f!==void 0&&(document.documentElement.style.cursor=f),document.body.classList.remove("non-selectable"),u===!0){const T=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{T(),h()},50):T()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&r(a,t.event.mouse);const{payload:f,synthetic:h}=Se(a,t,!1);f!==void 0&&(t.handler(f)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&i(),t.event.lastX=f.position.left,t.event.lastY=f.position.top,t.event.lastDir=h===!0?void 0:f.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||u===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){i(),t.event.detected=!0,t.move(a);return}const w=Math.abs(m),q=Math.abs(c);w!==q&&(t.direction.horizontal===!0&&w>q||t.direction.vertical===!0&&w<q||t.direction.up===!0&&w<q&&c<0||t.direction.down===!0&&w<q&&c>0||t.direction.left===!0&&w>q&&m<0||t.direction.right===!0&&w>q&&m>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,s){if(t.event!==void 0){if(we(t,"temp"),U.is.firefox===!0&&be(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Se(a===void 0?t.lastEvt:a,t).payload);const{payload:m}=Se(a===void 0?t.lastEvt:a,t,!0),c=()=>{t.handler(m)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const a=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";Z(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}U.has.touch===!0&&Z(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const n=e.__qtouchpan;n!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&n.end(),n.handler=o.value),n.direction=He(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),we(o,"main"),we(o,"temp"),U.is.firefox===!0&&be(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function oe(e,o,n){return n<=o?o:Math.min(n,Math.max(o,e))}const je=150;var Gt=D({name:"QDrawer",inheritAttrs:!1,props:{...bt,...Te,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...yt,"onLayout","miniState"],setup(e,{slots:o,emit:n,attrs:r}){const t=M(),{proxy:{$q:a}}=t,s=Pe(e,a),{preventBodyScroll:m}=Ct(),{registerTimeout:c,removeTimeout:u}=wt(),i=ue(se,V);if(i===V)return console.error("QDrawer needs to be child of QLayout"),V;let w,q=null,f;const h=x(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),T=d(()=>e.mini===!0&&h.value!==!0),k=d(()=>T.value===!0?e.miniWidth:e.width),p=x(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),v=d(()=>e.persistent!==!0&&(h.value===!0||Ue.value===!0));function b(l,y){if(H(),l!==!1&&i.animate(),L(0),h.value===!0){const P=i.instances[G.value];P!==void 0&&P.belowBreakpoint===!0&&P.hide(!1),_(1),i.isContainer.value!==!0&&m(!0)}else _(0),l!==!1&&me(!1);c(()=>{l!==!1&&me(!0),y!==!0&&n("show",l)},je)}function g(l,y){F(),l!==!1&&i.animate(),_(0),L(j.value*k.value),he(),y!==!0?c(()=>{n("hide",l)},je):u()}const{show:B,hide:O}=pt({showing:p,hideOnRouteChange:v,handleShow:b,handleHide:g}),{addToHistory:H,removeFromHistory:F}=qt(p,O,v),R={belowBreakpoint:h,hide:O},Q=d(()=>e.side==="right"),j=d(()=>(a.lang.rtl===!0?-1:1)*(Q.value===!0?1:-1)),Le=x(0),N=x(!1),ce=x(!1),De=x(k.value*j.value),G=d(()=>Q.value===!0?"left":"right"),de=d(()=>p.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:k.value:0),fe=d(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(Q.value?"R":"L")>-1||a.platform.is.ios===!0&&i.isContainer.value===!0),Y=d(()=>e.overlay===!1&&p.value===!0&&h.value===!1),Ue=d(()=>e.overlay===!0&&p.value===!0&&h.value===!1),Xe=d(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&N.value===!1?" hidden":"")),Je=d(()=>({backgroundColor:`rgba(0,0,0,${Le.value*.4})`})),Qe=d(()=>Q.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),Ge=d(()=>Q.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),$e=d(()=>{const l={};return i.header.space===!0&&Qe.value===!1&&(fe.value===!0?l.top=`${i.header.offset}px`:i.header.space===!0&&(l.top=`${i.header.size}px`)),i.footer.space===!0&&Ge.value===!1&&(fe.value===!0?l.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(l.bottom=`${i.footer.size}px`)),l}),Ze=d(()=>{const l={width:`${k.value}px`,transform:`translateX(${De.value}px)`};return h.value===!0?l:Object.assign(l,$e.value)}),et=d(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),tt=d(()=>`q-drawer q-drawer--${e.side}`+(ce.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(N.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${T.value===!0?"mini":"standard"}`+(fe.value===!0||Y.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Qe.value===!0?" q-drawer--top-padding":""))),at=d(()=>{const l=a.lang.rtl===!0?e.side:G.value;return[[Be,it,void 0,{[l]:!0,mouse:!0}]]}),nt=d(()=>{const l=a.lang.rtl===!0?G.value:e.side;return[[Be,Ve,void 0,{[l]:!0,mouse:!0}]]}),ot=d(()=>{const l=a.lang.rtl===!0?G.value:e.side;return[[Be,Ve,void 0,{[l]:!0,mouse:!0,mouseAllDir:!0}]]});function ve(){rt(h,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}S(h,l=>{l===!0?(w=p.value,p.value===!0&&O(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(p.value===!0?(L(0),_(0),he()):B(!1))}),S(()=>e.side,(l,y)=>{i.instances[y]===R&&(i.instances[y]=void 0,i[y].space=!1,i[y].offset=0),i.instances[l]=R,i[l].size=k.value,i[l].space=Y.value,i[l].offset=de.value}),S(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&ve()}),S(()=>e.behavior+e.breakpoint,ve),S(i.isContainer,l=>{p.value===!0&&m(l!==!0),l===!0&&ve()}),S(i.scrollbarWidth,()=>{L(p.value===!0?0:void 0)}),S(de,l=>{E("offset",l)}),S(Y,l=>{n("onLayout",l),E("space",l)}),S(Q,()=>{L()}),S(k,l=>{L(),ge(e.miniToOverlay,l)}),S(()=>e.miniToOverlay,l=>{ge(l,k.value)}),S(()=>a.lang.rtl,()=>{L()}),S(()=>e.mini,()=>{e.modelValue===!0&&(lt(),i.animate())}),S(T,l=>{n("miniState",l)});function L(l){l===void 0?re(()=>{l=p.value===!0?0:k.value,L(j.value*l)}):(i.isContainer.value===!0&&Q.value===!0&&(h.value===!0||Math.abs(l)===k.value)&&(l+=j.value*i.scrollbarWidth.value),De.value=l)}function _(l){Le.value=l}function me(l){const y=l===!0?"remove":i.isContainer.value!==!0?"add":"";y!==""&&document.body.classList[y]("q-body--drawer-toggle")}function lt(){q!==null&&clearTimeout(q),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ce.value=!0,q=setTimeout(()=>{q=null,ce.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function it(l){if(p.value!==!1)return;const y=k.value,P=oe(l.distance.x,0,y);if(l.isFinal===!0){P>=Math.min(75,y)===!0?B():(i.animate(),_(0),L(j.value*y)),N.value=!1;return}L((a.lang.rtl===!0?Q.value!==!0:Q.value)?Math.max(y-P,0):Math.min(0,P-y)),_(oe(P/y,0,1)),l.isFirst===!0&&(N.value=!0)}function Ve(l){if(p.value!==!0)return;const y=k.value,P=l.direction===e.side,$=(a.lang.rtl===!0?P!==!0:P)?oe(l.distance.x,0,y):0;if(l.isFinal===!0){Math.abs($)<Math.min(75,y)===!0?(i.animate(),_(1),L(0)):O(),N.value=!1;return}L(j.value*$),_(oe(1-$/y,0,1)),l.isFirst===!0&&(N.value=!0)}function he(){m(!1),me(!0)}function E(l,y){i.update(e.side,l,y)}function rt(l,y){l.value!==y&&(l.value=y)}function ge(l,y){E("size",l===!0?e.miniWidth:y)}return i.instances[e.side]=R,ge(e.miniToOverlay,k.value),E("space",Y.value),E("offset",de.value),e.showIfAbove===!0&&e.modelValue!==!0&&p.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),X(()=>{n("onLayout",Y.value),n("miniState",T.value),w=e.showIfAbove===!0;const l=()=>{(p.value===!0?b:g)(!1,!0)};if(i.totalWidth.value!==0){re(l);return}f=S(i.totalWidth,()=>{f(),f=void 0,p.value===!1&&e.showIfAbove===!0&&h.value===!1?B(!1):l()})}),J(()=>{f!==void 0&&f(),q!==null&&(clearTimeout(q),q=null),p.value===!0&&he(),i.instances[e.side]===R&&(i.instances[e.side]=void 0,E("size",0),E("offset",0),E("space",!1))}),()=>{const l=[];h.value===!0&&(e.noSwipeOpen===!1&&l.push(ie(C("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),at.value)),l.push(Ee("div",{ref:"backdrop",class:Xe.value,style:Je.value,"aria-hidden":"true",onClick:O},void 0,"backdrop",e.noSwipeBackdrop!==!0&&p.value===!0,()=>ot.value)));const y=T.value===!0&&o.mini!==void 0,P=[C("div",{...r,key:""+y,class:[et.value,r.class]},y===!0?o.mini():K(o.default))];return e.elevated===!0&&p.value===!0&&P.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(Ee("aside",{ref:"content",class:tt.value,style:Ze.value},P,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>nt.value)),C("div",{class:"q-drawer-container"},l)}}}),$t=D({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:n}}=M(),r=ue(se,V);if(r===V)return console.error("QPageContainer needs to be child of QLayout"),V;Fe(St,!0);const t=d(()=>{const a={};return r.header.space===!0&&(a.paddingTop=`${r.header.size}px`),r.right.space===!0&&(a[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(a.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(a[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),a});return()=>C("div",{class:"q-page-container",style:t.value},K(o.default))}});const{passive:Ne}=ke,Zt=["both","horizontal","vertical"];var ea=D({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Zt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,t,a;S(()=>e.scrollTarget,()=>{c(),m()});function s(){r!==null&&r();const w=Math.max(0,kt(t)),q=At(t),f={top:w-n.position.top,left:q-n.position.left};if(e.axis==="vertical"&&f.top===0||e.axis==="horizontal"&&f.left===0)return;const h=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";n.position={top:w,left:q},n.directionChanged=n.direction!==h,n.delta=f,n.directionChanged===!0&&(n.direction=h,n.inflectionPoint=n.position),o("scroll",{...n})}function m(){t=Bt(a,e.scrollTarget),t.addEventListener("scroll",u,Ne),u(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",u,Ne),t=void 0)}function u(w){if(w===!0||e.debounce===0||e.debounce==="0")s();else if(r===null){const[q,f]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];r=()=>{f(q),r=null}}}const{proxy:i}=M();return S(()=>i.$q.lang.rtl,s),X(()=>{a=i.$el.parentNode,m()}),J(()=>{r!==null&&r(),c()}),Object.assign(i,{trigger:u,getPosition:()=>n}),ze}}),ta=D({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:n}){const{proxy:{$q:r}}=M(),t=x(null),a=x(r.screen.height),s=x(e.container===!0?0:r.screen.width),m=x({position:0,direction:"down",inflectionPoint:0}),c=x(0),u=x(Ie.value===!0?0:pe()),i=d(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=d(()=>e.container===!1?{minHeight:r.screen.height+"px"}:null),q=d(()=>u.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),f=d(()=>u.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function h(g){if(e.container===!0||document.qScrollPrevented!==!0){const B={position:g.position.top,direction:g.direction,directionChanged:g.directionChanged,inflectionPoint:g.inflectionPoint.top,delta:g.delta.top};m.value=B,e.onScroll!==void 0&&n("scroll",B)}}function T(g){const{height:B,width:O}=g;let H=!1;a.value!==B&&(H=!0,a.value=B,e.onScrollHeight!==void 0&&n("scrollHeight",B),p()),s.value!==O&&(H=!0,s.value=O),H===!0&&e.onResize!==void 0&&n("resize",g)}function k({height:g}){c.value!==g&&(c.value=g,p())}function p(){if(e.container===!0){const g=a.value>c.value?pe():0;u.value!==g&&(u.value=g)}}let v=null;const b={instances:{},view:d(()=>e.view),isContainer:d(()=>e.container),rootRef:t,height:a,containerHeight:c,scrollbarWidth:u,totalWidth:d(()=>s.value+u.value),rows:d(()=>{const g=e.view.toLowerCase().split(" ");return{top:g[0].split(""),middle:g[1].split(""),bottom:g[2].split("")}}),header:ee({size:0,offset:0,space:!1}),right:ee({size:300,offset:0,space:!1}),footer:ee({size:0,offset:0,space:!1}),left:ee({size:300,offset:0,space:!1}),scroll:m,animate(){v!==null?clearTimeout(v):document.body.classList.add("q-body--layout-animate"),v=setTimeout(()=>{v=null,document.body.classList.remove("q-body--layout-animate")},155)},update(g,B,O){b[g][B]=O}};if(Fe(se,b),pe()>0){let O=function(){g=null,B.classList.remove("hide-scrollbar")},H=function(){if(g===null){if(B.scrollHeight>r.screen.height)return;B.classList.add("hide-scrollbar")}else clearTimeout(g);g=setTimeout(O,300)},F=function(R){g!==null&&R==="remove"&&(clearTimeout(g),O()),window[`${R}EventListener`]("resize",H)},g=null;const B=document.body;S(()=>e.container!==!0?"add":"remove",F),e.container!==!0&&F("add"),xt(()=>{F("remove")})}return()=>{const g=zt(o.default,[C(ea,{onScroll:h}),C(xe,{onResize:T})]),B=C("div",{class:i.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},g);return e.container===!0?C("div",{class:"q-layout-container overflow-hidden",ref:t},[C(xe,{onResize:k}),C("div",{class:"absolute-full",style:q.value},[C("div",{class:"scroll",style:f.value},[B])])]):B}}}),aa="data:image/png;base64,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";function na(){return ue(Tt)}const oa=e=>(Vt("data-v-06ef68d6"),e=e(),_t(),e),la=oa(()=>Et("img",{src:aa},null,-1)),ia={__name:"MainLayout",setup(e){const o=na(),n=Pt(),r=x(!1),t=()=>{r.value=!r.value},a=()=>{console.log("config")},s=()=>{console.log("about")},m=()=>{o.dialog({title:"Quitter le programme",message:"\xCAtes-vous s\xFBr de vouloir quitter le programme ?",cancel:"Non",ok:"Oui",persistent:!0,transitionShow:"fade"}).onOk(()=>{window.close()})};return(c,u)=>{const i=Ot("router-view");return te(),ae(ta,{view:"hHh lpR fFf"},{default:z(()=>[A(Ft,{elevated:"",class:Qt(["text-white",{"bg-positive":I(n).isOnline,"grey-5":!I(n).isOnline}])},{default:z(()=>[A(Wt,null,{default:z(()=>[A(Lt,{dense:"",flat:"",round:"",icon:"menu",onClick:t}),A(It,null,{default:z(()=>[A(Nt,null,{default:z(()=>[la]),_:1}),ne(" DomoZ "+Dt(I(n).isOnline),1)]),_:1})]),_:1})]),_:1},8,["class"]),A(Gt,{modelValue:r.value,"onUpdate:modelValue":u[0]||(u[0]=w=>r.value=w),side:"left",bordered:""},{default:z(()=>[A(Yt,{bordered:""},{default:z(()=>[ie((te(),ae(Ce,{clickable:"",onClick:a},{default:z(()=>[A(W,{avatar:""},{default:z(()=>[A(le,{color:"primary",name:I(Mt)},null,8,["name"])]),_:1}),A(W,null,{default:z(()=>[ne("Configuration...")]),_:1})]),_:1})),[[qe]]),ie((te(),ae(Ce,{clickable:"",onClick:s},{default:z(()=>[A(W,{avatar:""},{default:z(()=>[A(le,{color:"secondary",name:I(Ht)},null,8,["name"])]),_:1}),A(W,null,{default:z(()=>[ne("A propos...")]),_:1})]),_:1})),[[qe]]),ie((te(),ae(Ce,{clickable:"",onClick:m},{default:z(()=>[A(W,{avatar:""},{default:z(()=>[A(le,{color:"secondary",name:I(Rt)},null,8,["name"])]),_:1}),A(W,null,{default:z(()=>[ne("Exit")]),_:1})]),_:1})),[[qe]])]),_:1})]),_:1},8,["modelValue"]),A($t,null,{default:z(()=>[A(i)]),_:1})]),_:1})}}};var da=jt(ia,[["__scopeId","data-v-06ef68d6"]]);export{da as default};

import{c as C,k as b,m as d,p as Q,U as H,b as f,h as s,e as N,j as O,ag as T,ah as B,r as g,ai as w,aj as k,w as v,a3 as c,a4 as u,a5 as x,ak as y,Q as q,aa as $,a7 as P,a6 as _}from"./index.666bab4b.js";import{c as F,d as j,e as I,g as L}from"./index.12983a23.js";var R=C({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:i}){const{proxy:{$q:a}}=O(),t=b(Q,d);if(t===d)return console.error("QPage needs to be a deep child of QLayout"),d;if(b(H,d)===d)return console.error("QPage needs to be child of QPageContainer"),d;const m=f(()=>{const o=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof n.styleFn=="function"){const p=t.isContainer.value===!0?t.containerHeight.value:a.screen.height;return n.styleFn(o,p)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-o+"px":a.screen.height===0?o!==0?`calc(100vh - ${o}px)`:"100vh":a.screen.height-o+"px"}}),h=f(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>s("main",{class:h.value,style:m.value},N(i.default))}});const D=[s("g",[s("path",{fill:"none",stroke:"currentColor","stroke-width":"5","stroke-miterlimit":"10",d:"M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z"}),s("clipPath",{id:"uil-hourglass-clip1"},[s("rect",{x:"15",y:"20",width:" 70",height:"25"},[s("animate",{attributeName:"height",from:"25",to:"0",dur:"1s",repeatCount:"indefinite",values:"25;0;0",keyTimes:"0;0.5;1"}),s("animate",{attributeName:"y",from:"20",to:"45",dur:"1s",repeatCount:"indefinite",values:"20;45;45",keyTimes:"0;0.5;1"})])]),s("clipPath",{id:"uil-hourglass-clip2"},[s("rect",{x:"15",y:"55",width:" 70",height:"25"},[s("animate",{attributeName:"height",from:"0",to:"25",dur:"1s",repeatCount:"indefinite",values:"0;25;25",keyTimes:"0;0.5;1"}),s("animate",{attributeName:"y",from:"80",to:"55",dur:"1s",repeatCount:"indefinite",values:"80;55;55",keyTimes:"0;0.5;1"})])]),s("path",{d:"M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z","clip-path":"url(#uil-hourglass-clip1)",fill:"currentColor"}),s("path",{d:"M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z","clip-path":"url(#uil-hourglass-clip2)",fill:"currentColor"}),s("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"180 50 50",repeatCount:"indefinite",dur:"1s",values:"0 50 50;0 50 50;180 50 50",keyTimes:"0;0.7;1"})])];var S=C({name:"QSpinnerHourglass",props:T,setup(n){const{cSize:i,classes:a}=B(n);return()=>s("svg",{class:a.value,width:i.value,height:i.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},D)}});const K={__name:"ButtonPortail",props:{label:{type:String,required:!0},idx_cmd:{type:[String,Number],required:!0},idx_status:{type:[String,Number],required:!1}},setup(n){const i=n,a=g(!1),t=g(!1),l=w(),{message:m,isOnline:h}=k(l);v(m,async(e,r)=>{e.idx==i.idx_status&&(e.command=="switchlight"?t.value=e.switchcmd=="Open":t.value=parseInt(e.nvalue)==1,a.value=!1)}),v(h,async(e,r)=>{!r&&e&&l.mqttPublish("domoticz/in",`{"command": "getdeviceinfo", "idx": ${i.idx_status} }`)});const o=f(()=>t.value?F:j),p=async()=>{const e="On";a.value=!0,l.mqttPublish("domoticz/in",`{"command": "switchlight", "idx": ${i.idx_cmd}, "switchcmd": "${e}" }`)};return(e,r)=>(c(),u(P,{class:"q-mb-sm",onClick:r[0]||(r[0]=z=>p()),color:"primary",size:"xl",label:n.label,style:{height:"4rem",width:"90vw"}},{default:x(()=>[a.value?(c(),u(S,{key:0,class:"float-left"})):y("",!0),a.value?y("",!0):(c(),u(q,{key:1,name:$(o)},null,8,["name"]))]),_:1},8,["label"]))}},M={__name:"SwitchLight",props:{label:{type:String,required:!0},idx_cmd:{type:[String,Number],required:!0}},setup(n){const i=n,a=g(!1),t=g(!1),l=w(),{message:m,isOnline:h}=k(l);v(m,async(e,r)=>{e.idx==i.idx_cmd&&(e.command=="switchlight"?t.value=e.switchcmd=="On":t.value=parseInt(e.nvalue)==1,a.value=!1)}),v(h,async(e,r)=>{!r&&e&&l.mqttPublish("domoticz/in",`{"command": "getdeviceinfo", "idx": ${i.idx_cmd} }`)});const o=f(()=>t.value?I:L),p=async()=>{const e=t.value?"Off":"On";a.value=!0,l.mqttPublish("domoticz/in",`{"command": "switchlight", "idx": ${i.idx_cmd}, "switchcmd": "${e}" }`)};return(e,r)=>(c(),u(P,{class:"q-mb-sm",onClick:r[0]||(r[0]=z=>p()),color:"primary",size:"xl",label:n.label,style:{height:"4rem",width:"90vw"}},{default:x(()=>[a.value?(c(),u(S,{key:0,class:"float-left"})):y("",!0),a.value?y("",!0):(c(),u(q,{key:1,name:$(o)},null,8,["name"]))]),_:1},8,["label"]))}},J={__name:"MainPage",setup(n){return(i,a)=>(c(),u(R,{class:"flex fit row wrap justify-center items-start content-start"},{default:x(()=>[_(K,{label:"Portail",idx_cmd:"4",idx_status:"6"}),_(M,{label:"Jardin",idx_cmd:"62"})]),_:1}))}};export{J as default};

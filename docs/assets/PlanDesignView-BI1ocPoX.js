import{i as Me,j as In,a as dn,_ as sn,k as Bn,l as Qn,u as Wn,m as Ce,n as Se,P as Ae}from"./index-29Wfv63I.js";import{d as _n,b as cn,j as on,aJ as ce,al as Rn,aN as Te,aO as Le,as as pe,b1 as ue,a_ as me,aP as kn,aQ as bn,aR as Oe,aS as ze,aT as Ee,h as Mn,aU as Ne,s as ne,N as Ge,aV as He,aW as We,q as ye,aH as Ve,B as fe,aY as Be,w as Qe,ao as Ue,aZ as ve,aD as Ye,c as je,a1 as Xe,a$ as Ze,ar as Je,b0 as nt}from"./element-plus-DvdzYCWZ.js";import{G as tn,L as i,M as u,P as n,a0 as c,W as f,v as p,_ as w,$ as e,F as M,ae as T,O as H,R as Kn,Y as wn,c as S,e as pn,s as et,l as tt,n as Dn,z as Un,Z as Y,S as nn,aB as lt,j,aq as rn,ac as un,aj as it,q as Nn}from"./vue-vendor-CkCmkeKr.js";import{M as ot}from"./MindmapNode-BeNB8_3e.js";import{F as st,s as he,c as Cn,r as Sn,e as at,D as ee}from"./highlightHtml-aamd8iDV.js";import{p as rt}from"./highlights-CpBfyVwY.js";import{u as dt}from"./useDocWorkspace-CeszOPeA.js";import"./echarts-D5HcNVqP.js";const ct={class:"overview-panel"},pt={class:"hero"},ut={class:"hero-main"},mt={class:"hero-kicker"},yt={class:"hero-chips"},ft={class:"stats-row"},vt={class:"stat-value"},ht={class:"stat-label"},gt={class:"stat-desc"},_t={class:"section"},kt={class:"capability-grid"},wt={class:"capability-head"},bt={class:"capability-icon"},Kt={class:"capability-title"},$t={class:"capability-source"},Dt={class:"capability-summary"},xt={class:"capability-meta"},Pt={class:"meta-pill"},qt={class:"meta-pill"},Ft={class:"capability-actions"},Rt={class:"section"},It={class:"operation-grid"},Mt={class:"operation-watermark"},Ct={class:"operation-head"},St={class:"operation-index"},At={class:"operation-title"},Tt={class:"section"},Lt={class:"goal-grid"},Ot={class:"goal-index"},zt={class:"source-note"},Et=tn({__name:"PlanOverviewPanel",props:{overview:{},capabilities:{},operations:{},capabilityStats:{},totals:{}},emits:["open-doc","open-mindmap"],setup(o,{emit:k}){const d=o,L=k,R={Cpu:Ne,Collection:Mn,Document:on,MapLocation:Ee,VideoCamera:ze,PhoneFilled:Oe,Connection:bn,DataLine:kn,DataAnalysis:_n,List:me,SetUp:ue,Grid:pe,Link:Le},P=S(()=>[{label:"业务模块",value:d.totals.domains,desc:"初设 5.5.3 业务模块"},{label:"功能模块",value:d.totals.modules,desc:"按章节标题拆分"},{label:"功能点",value:d.totals.points,desc:"按编号条目提炼"},{label:"标准流程",value:d.totals.operations,desc:"需规 3.4 详细功能"}]);function G(g){return R[g]??kn}function D(g){return String(g+1).padStart(2,"0")}const I={classify:{main:"#3b82f6",soft:"#eff6ff"},standard:{main:"#0ea5e9",soft:"#f0f9ff"},module:{main:"#10b981",soft:"#ecfdf5"},model:{main:"#8b5cf6",soft:"#f5f3ff"},workflow:{main:"#6366f1",soft:"#eef2ff"},drill:{main:"#f59e0b",soft:"#fffbeb"},optimize:{main:"#ec4899",soft:"#fdf2f8"}};function O(g){const t=I[g]??{main:"#3b82f6",soft:"#eff6ff"};return{"--cap-main":t.main,"--cap-soft":t.soft}}return(g,t)=>{const _=cn,m=Me,a=In,x=dn;return i(),u("div",ct,[n("section",pt,[n("div",ut,[n("div",mt,[c(_,null,{default:f(()=>[c(p(_n))]),_:1}),t[1]||(t[1]=w(" 项目初步设计 · 智能应急预案管理子系统 ",-1))]),t[2]||(t[2]=n("h2",null,"预案智能生产、执行与优化的数字化底座",-1)),c(m,{content:o.overview.positioning,placement:"top"},{default:f(()=>[n("p",null,e(o.overview.positioning),1)]),_:1},8,["content"]),n("div",yt,[(i(!0),u(M,null,T(o.overview.highlights,$=>(i(),u("span",{key:$,class:"hero-chip"},e($),1))),128))])])]),c(a,{class:"stats-card"},{default:f(()=>[n("div",ft,[(i(!0),u(M,null,T(P.value,$=>(i(),u("div",{key:$.label,class:"stat-tile"},[n("div",vt,e($.value),1),n("div",ht,e($.label),1),n("div",gt,e($.desc),1)]))),128))])]),_:1}),n("section",_t,[t[8]||(t[8]=n("div",{class:"section-head"},[n("div",null,[n("h3",null,"七大业务模块"),n("p",null,"按初设 5.5.3 各业务模块梳理，点击卡片可查看功能点与原文。")])],-1)),n("div",kt,[(i(!0),u(M,null,T(o.capabilities,$=>(i(),H(a,{key:$.key,class:"capability-card",shadow:"hover",style:Kn(O($.key))},{default:f(()=>{var b,K;return[n("div",wt,[n("div",bt,[c(_,null,{default:f(()=>[(i(),H(wn(G($.iconKey))))]),_:2},1024)]),n("div",Kt,[n("h4",null,e($.title),1),n("span",null,e($.subtitle),1)]),n("span",$t,e($.sourceRef),1)]),c(m,{content:$.summary,placement:"top"},{default:f(()=>[n("p",Dt,e($.summary),1)]),_:2},1032,["content"]),t[7]||(t[7]=n("div",{class:"capability-spacer"},null,-1)),n("div",xt,[n("div",Pt,[n("em",null,e(((b=o.capabilityStats[$.key])==null?void 0:b.modules)??0),1),t[3]||(t[3]=n("span",null,"功能模块",-1))]),n("div",qt,[n("em",null,e(((K=o.capabilityStats[$.key])==null?void 0:K.points)??0),1),t[4]||(t[4]=n("span",null,"功能点",-1))])]),n("div",Ft,[c(x,{link:"",size:"small",onClick:r=>L("open-doc",$.docKey)},{default:f(()=>[c(_,null,{default:f(()=>[c(p(on))]),_:1}),t[5]||(t[5]=w(" 阅读原文 ",-1))]),_:1},8,["onClick"]),c(x,{link:"",size:"small",onClick:t[0]||(t[0]=r=>L("open-mindmap"))},{default:f(()=>[c(_,null,{default:f(()=>[c(p(ce))]),_:1}),t[6]||(t[6]=w(" 查看功能点 ",-1))]),_:1})])]}),_:2},1032,["style"]))),128))])]),n("section",Rt,[t[10]||(t[10]=n("div",{class:"section-head"},[n("div",null,[n("h3",null,"八类标准流程模块"),n("p",null,"预案拆解为先期处置、分级响应、组织指挥、应急处置、保障行动、信息发布、响应中止、后期处理八类标准模块。")])],-1)),n("div",It,[(i(!0),u(M,null,T(o.operations,($,b)=>(i(),H(a,{key:$.key,class:"operation-card",shadow:"hover"},{default:f(()=>[n("span",Mt,e(D(b)),1),n("div",Ct,[n("span",St,e(D(b)),1),n("div",At,e($.title),1)]),c(m,{content:$.summary,placement:"top"},{default:f(()=>[n("p",null,e($.summary),1)]),_:2},1032,["content"]),c(x,{class:"operation-link",link:"",size:"small",onClick:K=>L("open-doc",$.docKey)},{default:f(()=>[t[9]||(t[9]=w(" 阅读原文 ",-1)),c(_,null,{default:f(()=>[c(p(Rn))]),_:1})]),_:1},8,["onClick"])]),_:2},1024))),128))])]),n("section",Tt,[t[11]||(t[11]=n("div",{class:"section-head"},[n("div",null,[n("h3",null,"设计要点"),n("p",null,"依据初设 5.5.3 业务模块与需规 3.4 详细功能提炼。")])],-1)),c(a,{class:"goal-card"},{default:f(()=>[n("div",Lt,[(i(!0),u(M,null,T(o.overview.goals,($,b)=>(i(),u("div",{key:$,class:"goal-item"},[n("span",Ot,e(D(b)),1),c(m,{content:$,placement:"top"},{default:f(()=>[n("p",null,e($),1)]),_:2},1032,["content"]),c(_,{class:"goal-check"},{default:f(()=>[c(p(Te))]),_:1})]))),128))])]),_:1})]),n("p",zt,e(o.overview.sourceNote),1)])}}}),Nt=sn(Et,[["__scopeId","data-v-65947fff"]]),Gt={class:"mm-panel"},Ht={class:"mm-toolbar"},Wt={class:"mm-toolbar-left"},Vt={class:"mm-stat"},Bt={class:"mm-toolbar-right"},Qt={key:0,class:"mm-hit"},Ut={class:"mm-level"},Yt={class:"mm-zoom"},jt={class:"mm-body"},Xt=["width","height"],Zt=["d"],Jt={key:1,class:"mm-empty"},nl={class:"inspector-head"},el={class:"inspector-head-top"},tl={class:"inspector-kicker"},ll={key:0,class:"inspector-subtitle"},il={key:0,class:"inspector-summary"},ol={key:2,class:"inspector-section"},sl={class:"inspector-section-count"},al=["onClick"],rl={class:"inspector-child-index"},dl={class:"inspector-child-main"},cl={class:"inspector-child-text"},pl={key:0,class:"inspector-child-meta"},ul={key:3,class:"inspector-note"},ml=15,yl=9,fl=.15,vl=2.5,hl=tn({__name:"PlanMindmapPanel",props:{data:{},overview:{},capabilities:{},operations:{},compareItems:{},capabilityStats:{},stats:{}},setup(o){const k=o,d=j(),L=j(),R=j("");function P(s,l){if(!l)return s;const v=s.text.toLowerCase().includes(l),q=(s.children??[]).map(F=>P(F,l)).filter(F=>F!==null);return v?s:q.length?{...s,children:q}:null}const G=S(()=>{const s=R.value.trim().toLowerCase();return s?P(k.data,s):k.data});function D(s){var l;return s?(l=s.children)!=null&&l.length?s.children.reduce((v,q)=>v+D(q),0):1:0}const I=S(()=>D(G.value));function O(s,l,v="r",q=0,F=[]){if(v===l)return{node:s,path:v,depth:q,ancestors:F};const C=s.children??[];for(let U=0;U<C.length;U+=1){const A=O(C[U],l,`${v}-${U}`,q+1,[...F,s]);if(A)return A}return null}const g=j("r"),t=j(),_=S(()=>O(k.data,g.value));pn(g,async()=>{var s;await Dn(),(s=t.value)==null||s.scrollTo({top:0})});function m(s){g.value=s}pn(R,()=>{g.value="r"});const a=S(()=>{var A,B,Z,en;const s=_.value;if(!s)return null;const{node:l,depth:v,ancestors:q}=s;if(v===0)return{kicker:"方案总览",title:l.text,subtitle:"七大业务模块 · 功能模块与功能点全景",summary:k.overview.sourceNote,stats:[{label:"业务模块",value:k.stats.domains},{label:"功能模块",value:k.stats.modules},{label:"功能点",value:k.stats.points},{label:"标准流程",value:k.stats.operations}],childrenTitle:"业务模块",childrenSelectable:!0,children:(l.children??[]).map(N=>{if(N.key==="ops")return{text:N.text,meta:`${k.stats.operations} 个流程模块`};const Q=N.key?k.capabilityStats[N.key]:void 0;return{text:N.text,meta:Q?`${Q.modules} 模块 / ${Q.points} 点`:void 0}})};const F=v<=1?l:q[1],C=F!=null&&F.key?k.capabilities.find(N=>N.key===F.key):void 0;if(C){const N=v===1,Q=l.children??[],X=k.compareItems.find(hn=>hn.key===C.key),$n=N?[{label:"功能模块",value:((A=k.capabilityStats[C.key])==null?void 0:A.modules)??0},{label:"功能点",value:((B=k.capabilityStats[C.key])==null?void 0:B.points)??0},...X?[{label:"需规功能点",value:X.requirementFunctions.length}]:[]]:Q.length?[{label:v===2?"功能点":"子项",value:Q.length}]:void 0;return{kicker:N?`业务模块 · ${C.sourceRef}`:v===2?"功能模块":"功能点",title:N?C.title:l.text,subtitle:N?C.subtitle:C.title,summary:N?C.summary:`所属业务模块：${C.title}（${C.sourceRef}）`,stats:$n,childrenTitle:N?"功能模块":v===2?"功能点":"子项",childrenSelectable:Q.length>0,children:Q.map(hn=>{var Jn;return{text:hn.text,meta:(Jn=hn.children)!=null&&Jn.length?`${hn.children.length} 项`:void 0}}),docKey:C.docKey,compareKey:N?C.key:void 0,note:N&&X?`需求规格 ${X.requirementRef} · 共同覆盖 ${X.sharedModules.length} 个模块`:void 0}}if(l.key==="ops"||q.some(N=>N.key==="ops")){const N=l.key==="ops",Q=k.operations.find(X=>l.text.includes(X.title));return{kicker:N?"标准流程":"流程模块",title:l.text,subtitle:N?"需规 3.4 智能应急预案标准流程":"智能应急预案标准流程",summary:N?"按预案处置阶段拆解为先期处置、分级响应、组织指挥、应急处置、保障行动、信息发布、响应中止、后期处理八类标准模块。":Q==null?void 0:Q.summary,childrenTitle:N?"标准流程":void 0,children:N?k.operations.map(X=>({text:X.title,meta:X.summary})):void 0,docKey:N||Q==null?void 0:Q.docKey,note:"标准流程模块，按预案处置阶段拆解。"}}return{kicker:"节点",title:l.text,subtitle:(Z=q[q.length-1])==null?void 0:Z.text,childrenTitle:"子项",childrenSelectable:!!((en=l.children)!=null&&en.length),children:(l.children??[]).map(N=>({text:N.text}))}}),x=new Set,$=[{label:"1 级",value:1},{label:"2 级",value:2},{label:"3 级",value:3},{label:"全部",value:0}],b=j(2);function K(s,l,v="r",q=0,F=[]){var C;return(C=s.children)==null||C.forEach((U,A)=>{var Z;const B=`${v}-${A}`;q+1===l&&((Z=U.children)!=null&&Z.length)&&F.push(B),K(U,l,B,q+1,F)}),F}function r(s){return s===0?new Set:new Set(K(k.data,s))}const y=et(r(b.value));pn(b,s=>{y.value=r(s)}),pn(()=>k.data,()=>{y.value=r(b.value)});const E=S(()=>R.value.trim()?x:y.value),z=S(()=>y.value.size>0);function J(s){const l=new Set(y.value);l.has(s)?l.delete(s):l.add(s),y.value=l}function ln(){if(z.value){y.value=new Set,b.value=0;return}y.value=new Set(K(k.data,1)),b.value=1}function h(s){const l=`${g.value}-${s}`,v=new Set(y.value),q=l.split("-");for(let F=2;F<q.length;F+=1)v.delete(q.slice(0,F).join("-"));y.value=v,g.value=l}const W=j(1),V=j(0),an=j(0),$e=S(()=>({transform:`translate(${V.value}px, ${an.value}px) scale(${W.value})`})),Tn=j([]),Ln=j({w:0,h:0});function De(s,l){const v=U=>U.toFixed(1);if(Math.abs(l.y-s.y)<.5)return`M ${v(s.x)} ${v(s.y)} L ${v(l.x)} ${v(l.y)}`;const q=s.x+ml,F=l.y>s.y?1:-1,C=Math.min(yl,Math.abs(l.y-s.y)/2,q-s.x,l.x-q);return[`M ${v(s.x)} ${v(s.y)}`,`L ${v(q-C)} ${v(s.y)}`,`Q ${v(q)} ${v(s.y)} ${v(q)} ${v(s.y+F*C)}`,`L ${v(q)} ${v(l.y-F*C)}`,`Q ${v(q)} ${v(l.y)} ${v(q+C)} ${v(l.y)}`,`L ${v(l.x)} ${v(l.y)}`].join(" ")}function yn(){const s=L.value,l=G.value;if(!s||!l){Tn.value=[];return}const v=s.getBoundingClientRect(),q=W.value||1,F=(A,B)=>{const Z=s.querySelector(`[data-mm-path="${A}"]`);if(!Z)return null;const en=Z.getBoundingClientRect();return{x:((B==="left"?en.left:en.right)-v.left)/q,y:(en.top+en.height/2-v.top)/q}},C=[],U=(A,B)=>{var en;if(!((en=A.children)!=null&&en.length)||E.value.has(B))return;const Z=F(B,"right");A.children.forEach((N,Q)=>{const X=`${B}-${Q}`,$n=F(X,"left");Z&&$n&&C.push(De(Z,$n)),U(N,X)})};U(l,"r"),Tn.value=C,Ln.value={w:s.offsetWidth,h:s.offsetHeight}}function On(s){return Math.min(vl,Math.max(fl,s))}function zn(s,l,v){const q=On(W.value*s);if(q===W.value)return;const F=q/W.value;V.value=Math.round(l-F*(l-V.value)),an.value=Math.round(v-F*(v-an.value)),W.value=q}function xe(){var l;const s=(l=d.value)==null?void 0:l.getBoundingClientRect();s&&zn(1.2,s.width/2,s.height/2)}function Pe(){var l;const s=(l=d.value)==null?void 0:l.getBoundingClientRect();s&&zn(1/1.2,s.width/2,s.height/2)}function qe(){W.value=1,V.value=48,an.value=28}function Xn(s){var q;s.preventDefault();const l=(q=d.value)==null?void 0:q.getBoundingClientRect();if(!l)return;const v=Math.exp(-s.deltaY*.0015);zn(v,s.clientX-l.left,s.clientY-l.top)}function Fe(){const s=d.value,l=L.value;if(!s||!l)return;const v=l.offsetWidth||1,q=On((s.clientWidth-96)/v);W.value=q;const F=v*q;V.value=Math.round(F<s.clientWidth?(s.clientWidth-F)/2:48);const C=(l.offsetHeight||1)*q;an.value=C<s.clientHeight?Math.round((s.clientHeight-C)/2):28}function fn(){const s=d.value,l=L.value;if(!s||!l)return;const v=On(Math.min((s.clientWidth-80)/(l.offsetWidth||1),(s.clientHeight-80)/(l.offsetHeight||1),1));W.value=v,V.value=Math.round((s.clientWidth-l.offsetWidth*v)/2),an.value=Math.round((s.clientHeight-l.offsetHeight*v)/2)}let En=!1,vn={x:0,y:0,tx:0,ty:0};function Re(s){var v;if(s.button!==0)return;const l=s.target;l.closest(".mm-legend")||l.closest(".mm-label")||(En=!0,vn={x:s.clientX,y:s.clientY,tx:V.value,ty:an.value},(v=d.value)==null||v.setPointerCapture(s.pointerId))}function Ie(s){En&&(V.value=Math.round(vn.tx+(s.clientX-vn.x)),an.value=Math.round(vn.ty+(s.clientY-vn.y)))}function Zn(s){var l;En=!1,(l=d.value)==null||l.releasePointerCapture(s.pointerId)}let mn=null;return pn(G,async()=>{await Dn(),yn(),fn()}),pn(y,async()=>{await Dn(),yn(),fn()}),tt(async()=>{var s,l,v;await Dn(),(s=t.value)==null||s.scrollTo({top:0}),yn(),fn(),(l=d.value)==null||l.addEventListener("wheel",Xn,{passive:!1}),mn=new ResizeObserver(()=>yn()),L.value&&mn.observe(L.value),(v=document.fonts)==null||v.ready.then(()=>{yn(),fn()}).catch(()=>{})}),Un(()=>{var s;(s=d.value)==null||s.removeEventListener("wheel",Xn),mn==null||mn.disconnect(),mn=null}),(s,l)=>{var C,U;const v=cn,q=Ge,F=dn;return i(),u("div",Gt,[n("header",Ht,[n("div",Wt,[l[7]||(l[7]=n("div",{class:"mm-title"},[n("span",{class:"mm-title-dot"}),w(" 开发功能点思维导图 ")],-1)),n("div",Vt,[n("span",null,[n("strong",null,e(o.stats.domains),1),l[3]||(l[3]=w(" 业务模块",-1))]),n("span",null,[n("strong",null,e(o.stats.modules),1),l[4]||(l[4]=w(" 功能模块",-1))]),n("span",null,[n("strong",null,e(o.stats.points),1),l[5]||(l[5]=w(" 功能点",-1))]),n("span",null,[n("strong",null,e(o.stats.operations),1),l[6]||(l[6]=w(" 标准流程",-1))])]),l[8]||(l[8]=n("span",{class:"mm-hint"},"滚轮缩放 · 拖拽平移 · 点击节点查看详情 · +/- 展开折叠",-1))]),n("div",Bt,[c(q,{modelValue:R.value,"onUpdate:modelValue":l[0]||(l[0]=A=>R.value=A),class:"mm-search",placeholder:"搜索功能点 / 模块",clearable:""},{prefix:f(()=>[c(v,null,{default:f(()=>[c(p(ne))]),_:1})]),_:1},8,["modelValue"]),R.value.trim()?(i(),u("span",Qt,"命中 "+e(I.value)+" 项",1)):Y("",!0),n("div",Ut,[l[9]||(l[9]=n("span",{class:"mm-level-label"},"展开",-1)),(i(),u(M,null,T($,A=>c(F,{key:A.value,link:"",size:"small",class:nn({"is-active":b.value===A.value}),onClick:B=>b.value=A.value},{default:f(()=>[w(e(A.label),1)]),_:2},1032,["class","onClick"])),64))]),n("div",Yt,[c(F,{link:"",icon:p(He),onClick:Pe},null,8,["icon"]),n("span",{class:"mm-percent",title:"恢复 100%",onClick:qe},e(Math.round(W.value*100))+"%",1),c(F,{link:"",icon:p(We),onClick:xe},null,8,["icon"]),l[12]||(l[12]=n("div",{class:"mm-zoom-divider"},null,-1)),c(F,{link:"",onClick:Fe},{default:f(()=>[...l[10]||(l[10]=[w("适配宽度",-1)])]),_:1}),c(F,{link:"",onClick:fn},{default:f(()=>[...l[11]||(l[11]=[w("居中全览",-1)])]),_:1}),c(F,{link:"",onClick:ln},{default:f(()=>[w(e(z.value?"展开全部":"收起全部"),1)]),_:1})])])]),n("div",jt,[n("main",{ref_key:"viewportRef",ref:d,class:"mm-viewport",onPointerdown:Re,onPointermove:Ie,onPointerup:Zn,onPointercancel:Zn},[G.value?(i(),u("div",{key:0,ref_key:"canvasRef",ref:L,class:"mm-canvas",style:Kn($e.value)},[(i(),u("svg",{class:"mm-links",width:Ln.value.w,height:Ln.value.h,"aria-hidden":"true"},[(i(!0),u(M,null,T(Tn.value,(A,B)=>(i(),u("path",{key:B,d:A},null,8,Zt))),128))],8,Xt)),c(ot,{node:G.value,path:"r",depth:0,collapsible:!R.value.trim(),selectable:!0,"selected-path":g.value,"collapsed-paths":E.value,onToggle:J,onSelect:m},null,8,["node","collapsible","selected-path","collapsed-paths"])],4)):(i(),u("div",Jt,[c(v,null,{default:f(()=>[c(p(ne))]),_:1}),n("p",null,"未找到与「"+e(R.value)+"」匹配的功能点",1),c(F,{link:"",onClick:l[1]||(l[1]=A=>R.value="")},{default:f(()=>[...l[13]||(l[13]=[w("清空搜索",-1)])]),_:1})])),l[14]||(l[14]=lt('<div class="mm-legend" data-v-9b39629c><span class="legend-item" data-v-9b39629c><i class="dot branch" data-v-9b39629c></i>业务模块</span><span class="legend-item" data-v-9b39629c><i class="dot accent" data-v-9b39629c></i>功能模块</span><span class="legend-item" data-v-9b39629c><i class="dot text" data-v-9b39629c></i>功能点</span><span class="legend-item" data-v-9b39629c><i class="dot danger" data-v-9b39629c></i>标准流程</span></div>',1))],544),n("aside",{ref_key:"inspectorRef",ref:t,class:"mm-inspector"},[a.value?(i(),u(M,{key:0},[n("div",nl,[n("div",el,[n("span",tl,e(a.value.kicker),1),g.value!=="r"?(i(),H(F,{key:0,link:"",size:"small",onClick:l[2]||(l[2]=A=>g.value="r")},{default:f(()=>[...l[15]||(l[15]=[w(" 回到总览 ",-1)])]),_:1})):Y("",!0)]),n("h3",null,e(a.value.title),1),a.value.subtitle?(i(),u("p",ll,e(a.value.subtitle),1)):Y("",!0)]),a.value.summary?(i(),u("p",il,e(a.value.summary),1)):Y("",!0),(C=a.value.stats)!=null&&C.length?(i(),u("div",{key:1,class:nn(["inspector-stats",`is-${a.value.stats.length}`])},[(i(!0),u(M,null,T(a.value.stats,A=>(i(),u("div",{key:A.label,class:"inspector-stat"},[n("strong",null,e(A.value),1),n("span",null,e(A.label),1)]))),128))],2)):Y("",!0),(U=a.value.children)!=null&&U.length?(i(),u("section",ol,[n("h4",null,[w(e(a.value.childrenTitle)+" ",1),n("span",sl,e(a.value.children.length),1)]),n("ul",null,[(i(!0),u(M,null,T(a.value.children,(A,B)=>(i(),u("li",{key:`${A.text}-${B}`,class:nn({"is-clickable":a.value.childrenSelectable}),onClick:Z=>a.value.childrenSelectable&&h(B)},[n("span",rl,e(String(B+1).padStart(2,"0")),1),n("div",dl,[n("span",cl,e(A.text),1),A.meta?(i(),u("span",pl,e(A.meta),1)):Y("",!0)])],10,al))),128))])])):Y("",!0),a.value.note?(i(),u("p",ul,e(a.value.note),1)):Y("",!0)],64)):Y("",!0)],512)])])}}}),gl=sn(hl,[["__scopeId","data-v-9b39629c"]]),_l={class:"compare-panel"},kl={class:"domain-nav"},wl={class:"domain-nav-head"},bl={class:"domain-nav-list"},Kl=["onClick"],$l={class:"nav-index"},Dl={class:"nav-copy"},xl={class:"nav-count"},Pl={key:0,class:"compare-detail"},ql={class:"detail-head"},Fl={class:"detail-copy"},Rl={class:"detail-ref"},Il={class:"detail-actions"},Ml={class:"coverage-bar"},Cl={class:"coverage-stat"},Sl={class:"coverage-stat is-muted"},Al={class:"coverage-stat"},Tl={class:"mapping-section"},Ll={class:"section-head"},Ol={class:"section-count"},zl={class:"mapping-list"},El={class:"mapping-initial"},Nl={key:0},Gl={class:"mapping-link"},Hl={class:"relation-badge"},Wl={class:"mapping-count"},Vl={class:"mapping-requirement"},Bl={class:"function-chips"},Ql={key:0,class:"mapping-note"},Ul={class:"diff-section"},Yl={class:"diff-columns"},jl={class:"diff-card is-requirement"},Xl={class:"diff-card is-initial"},Zl=tn({__name:"PlanComparePanel",props:{items:{},activeKey:{}},emits:["update:activeKey","open-doc"],setup(o,{emit:k}){const d=o,L=k,R=S({get:()=>d.activeKey,set:g=>L("update:activeKey",g)}),P=S(()=>d.items.find(g=>g.key===R.value)??d.items[0]),G=S(()=>d.items.reduce((g,t)=>g+t.requirementFunctions.length,0)),D={aligned:{label:"一一对应"},refined:{label:"需规细化"},split:{label:"拆分细化"}};function I(g){var m;const[t,_]=g.functionRange;return((m=P.value)==null?void 0:m.requirementFunctions.slice(t-1,_))??[]}function O(g){return g.functionRange[1]-g.functionRange[0]+1}return(g,t)=>{const _=cn,m=dn;return i(),u("div",_l,[n("aside",kl,[n("div",wl,[t[2]||(t[2]=n("span",{class:"nav-kicker"},"DESIGN CHECK",-1)),t[3]||(t[3]=n("h2",null,"业务模块比对",-1)),n("p",null,e(o.items.length)+" 个业务模块 · "+e(G.value)+" 个需规功能点",1)]),n("div",bl,[(i(!0),u(M,null,T(o.items,(a,x)=>(i(),u("button",{key:a.key,type:"button",class:nn(["domain-nav-item",{active:a.key===R.value}]),onClick:$=>R.value=a.key},[n("span",$l,e(String(x+1).padStart(2,"0")),1),n("span",Dl,[n("strong",null,e(a.title),1),n("small",null,e(a.initialRef)+" ↔ "+e(a.requirementRef),1)]),n("span",xl,e(a.requirementFunctions.length),1)],10,Kl))),128))]),t[4]||(t[4]=n("div",{class:"domain-nav-foot"},[n("span",null,[n("i",{class:"legend-dot is-aligned"}),w("一一对应")]),n("span",null,[n("i",{class:"legend-dot is-refined"}),w("需规细化")]),n("span",null,[n("i",{class:"legend-dot is-split"}),w("拆分细化")])],-1))]),P.value?(i(),u("section",Pl,[n("header",ql,[n("div",Fl,[n("span",Rl,e(P.value.initialRef)+" ↔ "+e(P.value.requirementRef),1),n("h1",null,e(P.value.title),1),n("p",null,e(P.value.conclusion),1)]),n("div",Il,[c(m,{size:"small",plain:"",onClick:t[0]||(t[0]=a=>L("open-doc",P.value.initialDocKey))},{default:f(()=>[c(_,null,{default:f(()=>[c(p(on))]),_:1}),t[5]||(t[5]=w(" 阅读初设 ",-1))]),_:1}),c(m,{size:"small",onClick:t[1]||(t[1]=a=>L("open-doc",P.value.requirementDocKey))},{default:f(()=>[c(_,null,{default:f(()=>[c(p(on))]),_:1}),t[6]||(t[6]=w(" 阅读需规 ",-1))]),_:1})])]),n("div",Ml,[n("div",Cl,[n("strong",null,e(P.value.initialModules.length),1),t[7]||(t[7]=n("span",null,"初设模块",-1))]),t[10]||(t[10]=n("span",{class:"coverage-arrow"},"→",-1)),n("div",Sl,[n("strong",null,e(P.value.mappings.length),1),t[8]||(t[8]=n("span",null,"关联分组",-1))]),t[11]||(t[11]=n("span",{class:"coverage-arrow"},"→",-1)),n("div",Al,[n("strong",null,e(P.value.requirementFunctions.length),1),t[9]||(t[9]=n("span",null,"需规功能点",-1))]),t[12]||(t[12]=n("p",{class:"coverage-hint"},"按初设能力模块分组，逐组对应需规功能点；中间标签表示覆盖方式。",-1))]),n("section",Tl,[n("header",Ll,[t[13]||(t[13]=n("div",null,[n("h2",null,"模块 → 功能点映射"),n("p",null,"按初设模块分组，中列标注覆盖方式，右列对应需规功能点")],-1)),n("span",Ol,e(P.value.mappings.length)+" 组关联",1)]),t[14]||(t[14]=n("div",{class:"mapping-head"},[n("span",null,"初设能力模块"),n("span",null,"覆盖关系"),n("span",null,"需规功能点")],-1)),n("div",zl,[(i(!0),u(M,null,T(P.value.mappings,(a,x)=>(i(),u("article",{key:`${a.initialModule}-${x}`,class:nn(["mapping-row",`is-${a.relation}`])},[n("div",El,[n("strong",null,e(a.initialModule),1),a.initialDetail?(i(),u("p",Nl,e(a.initialDetail),1)):Y("",!0)]),n("div",Gl,[n("span",Hl,e(D[a.relation].label),1),n("span",Wl,e(O(a))+" 个功能点",1)]),n("div",Vl,[n("div",Bl,[(i(!0),u(M,null,T(I(a),($,b)=>(i(),u("span",{key:$,class:"function-chip"},[n("em",null,e(a.functionRange[0]+b),1),w(" "+e($),1)]))),128))]),a.note?(i(),u("p",Ql,e(a.note),1)):Y("",!0)])],2))),128))])]),n("section",Ul,[t[17]||(t[17]=n("header",{class:"section-head"},[n("div",null,[n("h2",null,"差异与保留"),n("p",null,"映射之外的补充说明，避免只看到功能点数量")])],-1)),n("div",Yl,[n("article",jl,[t[15]||(t[15]=n("h3",null,[n("i",{class:"diff-dot"}),w("需规侧细化 / 补充")],-1)),n("ul",null,[(i(!0),u(M,null,T(P.value.requirementHighlights,a=>(i(),u("li",{key:a},e(a),1))),128))])]),n("article",Xl,[t[16]||(t[16]=n("h3",null,[n("i",{class:"diff-dot"}),w("初设侧保留")],-1)),n("ul",null,[(i(!0),u(M,null,T(P.value.designHighlights,a=>(i(),u("li",{key:a},e(a),1))),128))])])])])])):Y("",!0)])}}}),Jl=sn(Zl,[["__scopeId","data-v-007a3264"]]),ni={class:"flow-panel"},ei={class:"flow-hero"},ti={class:"hero-copy"},li={class:"hero-kicker"},ii={class:"hero-metrics"},oi={class:"flow-section"},si={class:"section-head"},ai={class:"pipeline"},ri=["role","tabindex","onClick","onKeyup"],di={class:"stage-head"},ci={class:"stage-index"},pi={class:"stage-icon"},ui={class:"stage-title"},mi={key:0},yi={class:"stage-desc"},fi={class:"stage-metrics"},vi={class:"stage-highlights"},hi={key:0,class:"stage-foot"},gi={key:0,class:"stage-arrow","aria-hidden":"true"},_i={class:"source-note"},ki=tn({__name:"PlanDataflowPanel",props:{data:{}},emits:["open-doc"],setup(o,{emit:k}){const d=o,L=k,R={classify:ye,standard:Mn,structure:on,module:bn,model:ue,execute:_n},P={classify:{main:"#3b82f6",soft:"#eff6ff"},standard:{main:"#0ea5e9",soft:"#f0f9ff"},structure:{main:"#06b6d4",soft:"#ecfeff"},module:{main:"#10b981",soft:"#ecfdf5"},model:{main:"#6366f1",soft:"#eef2ff"},execute:{main:"#8b5cf6",soft:"#f5f3ff"}},G=S(()=>{var a,x;const m=d.data.stages;return[{label:"业务环节",value:String(m.length),unit:"阶段"},{label:"事件属性",value:((a=g(m,"事件属性"))==null?void 0:a.replace(/\s*维$/,""))??"—",unit:"维"},{label:"标准模块",value:((x=g(m,"标准模块"))==null?void 0:x.replace(/\s*类$/,""))??"—",unit:"类"},{label:"基座模型",value:g(m,"基座模型")??"—",unit:""}]});function D(m){return R[m]??kn}function I(m){const a=P[m]??{main:"#3b82f6",soft:"#eff6ff"};return{"--stage-main":a.main,"--stage-soft":a.soft}}function O(m){return String(m+1).padStart(2,"0")}function g(m,a){for(const x of m){const $=x.metrics.find(b=>b.label===a);if($)return $.value}}function t(m){m.docKey&&L("open-doc",m.docKey)}function _(m){m&&L("open-doc",m)}return(m,a)=>{const x=cn,$=dn;return i(),u("div",ni,[n("header",ei,[n("div",ti,[n("span",li,[c(x,null,{default:f(()=>[c(p(kn))]),_:1}),a[0]||(a[0]=w(" PLAN PIPELINE ",-1))]),a[1]||(a[1]=n("h2",null,"预案治理链路",-1)),a[2]||(a[2]=n("p",null," 从分类建库到执行评估的完整链路：应急分类库与规则规范库双源供给，经结构识别拆解为八类标准流程模块， 由微调模型生成专项预案，再通过自动化任务闭环与模拟演练回流评估结果，驱动预案持续优化。 ",-1))]),n("div",ii,[(i(!0),u(M,null,T(G.value,b=>(i(),u("div",{key:b.label,class:"hero-metric"},[n("strong",null,[w(e(b.value),1),n("em",null,e(b.unit),1)]),n("span",null,e(b.label),1)]))),128))])]),n("section",oi,[n("header",si,[a[3]||(a[3]=n("h3",null,"阶段流水线",-1)),n("p",null,"共 "+e(o.data.stages.length)+" 个阶段，点击阶段卡片可查看对应业务环节的原文",1)]),n("div",ai,[(i(!0),u(M,null,T(o.data.stages,(b,K)=>(i(),u(M,{key:b.key},[n("article",{class:nn(["stage-card",{"is-clickable":!!b.docKey}]),style:Kn(I(b.key)),role:b.docKey?"button":void 0,tabindex:b.docKey?0:void 0,onClick:r=>t(b),onKeyup:rn(r=>t(b),["enter"])},[n("header",di,[n("span",ci,e(O(K)),1),n("span",pi,[c(x,null,{default:f(()=>[(i(),H(wn(D(b.key))))]),_:2},1024)]),n("div",ui,[n("h4",null,e(b.title),1),b.subtitle?(i(),u("span",mi,e(b.subtitle),1)):Y("",!0)])]),n("p",yi,e(b.description),1),n("div",fi,[(i(!0),u(M,null,T(b.metrics,r=>(i(),u("div",{key:r.label,class:"metric-tile"},[n("strong",null,e(r.value),1),n("span",null,e(r.label),1)]))),128))]),n("ul",vi,[(i(!0),u(M,null,T(b.highlights,r=>(i(),u("li",{key:r},e(r),1))),128))]),b.docKey?(i(),u("footer",hi,[c($,{link:"",size:"small",onClick:un(r=>_(b.docKey),["stop"])},{default:f(()=>[c(x,null,{default:f(()=>[c(p(on))]),_:1}),a[4]||(a[4]=w(" 阅读原文 ",-1)),c(x,{class:"foot-arrow"},{default:f(()=>[c(p(Rn))]),_:1})]),_:1},8,["onClick"])])):Y("",!0)],46,ri),K<o.data.stages.length-1?(i(),u("div",gi,[c(x,null,{default:f(()=>[c(p(Rn))]),_:1})])):Y("",!0)],64))),128))])]),n("p",_i,e(o.data.sourceNote),1)])}}}),wi=sn(ki,[["__scopeId","data-v-46faf121"]]),bi={class:"integration-panel"},Ki={class:"panel-header"},$i={class:"panel-head-main"},Di={class:"panel-kicker"},xi={class:"panel-stats"},Pi={class:"stat"},qi={class:"stat"},Fi={class:"stat"},Ri={class:"panel-body"},Ii={class:"group-nav"},Mi={class:"group-nav-head"},Ci={class:"group-nav-list"},Si=["onClick"],Ai={class:"nav-index"},Ti={class:"nav-copy"},Li={class:"nav-count"},Oi={key:0,class:"group-detail"},zi={class:"group-head"},Ei={class:"relation-strip"},Ni={class:"rel-node is-target"},Gi={class:"group-copy-row"},Hi={class:"group-copy"},Wi={class:"group-badges"},Vi={class:"item-grid"},Bi={class:"item-head"},Qi={class:"item-index"},Ui={class:"item-count"},Yi={class:"item-desc"},ji={class:"item-interfaces"},Xi={class:"item-foot"},Zi=["title"],Ji={class:"source-note"},no=tn({__name:"PlanIntegrationPanel",props:{data:{}},emits:["open-doc"],setup(o,{emit:k}){var t;const d=o,L=k,R=j(((t=d.data.groups[0])==null?void 0:t.key)??""),P=S(()=>d.data.groups.find(_=>_.key===R.value)??d.data.groups[0]),G=S(()=>d.data.groups.reduce((_,m)=>_+m.items.length,0)),D=S(()=>d.data.groups.reduce((_,m)=>_+m.items.reduce((a,x)=>a+x.interfaces.length,0),0));pn(()=>d.data.groups,_=>{var m;_.some(a=>a.key===R.value)||(R.value=((m=_[0])==null?void 0:m.key)??"")});function I(_){return String(_+1).padStart(2,"0")}function O(_){return _.items.reduce((m,a)=>m+a.interfaces.length,0)}function g(_){L("open-doc",_??"design-external")}return(_,m)=>{const a=cn,x=Bn,$=dn,b=In,K=Qn;return i(),u("div",bi,[n("header",Ki,[n("div",$i,[n("span",Di,[c(a,null,{default:f(()=>[c(p(bn))]),_:1}),m[0]||(m[0]=w(" INTEGRATION MAP ",-1))]),m[1]||(m[1]=n("h1",null,"外部接口全景",-1)),m[2]||(m[2]=n("p",null,"以智能应急预案管理子系统为统一对接枢纽，汇聚省政务云、交通集团、国家部级与厅内协同平台的接口能力，形成外部系统一张图。",-1))]),n("div",xi,[n("div",Pi,[n("em",null,e(o.data.groups.length),1),m[3]||(m[3]=n("span",null,"外部平台",-1))]),n("div",qi,[n("em",null,e(G.value),1),m[4]||(m[4]=n("span",null,"对接能力",-1))]),n("div",Fi,[n("em",null,e(D.value),1),m[5]||(m[5]=n("span",null,"接口能力",-1))])])]),n("div",Ri,[n("aside",Ii,[n("div",Mi,[m[6]||(m[6]=n("span",{class:"nav-kicker"},"PLATFORM GROUPS",-1)),n("p",null,e(o.data.groups.length)+" 类对接来源",1)]),n("div",Ci,[(i(!0),u(M,null,T(o.data.groups,(r,y)=>(i(),u("button",{key:r.key,type:"button",class:nn(["group-nav-item",{active:r.key===R.value}]),onClick:E=>R.value=r.key},[n("span",Ai,e(I(y)),1),n("span",Ti,[n("strong",null,e(r.title),1),n("small",null,e(r.items.length)+" 项对接能力",1)]),n("span",Li,e(r.items.length),1)],10,Si))),128))]),m[7]||(m[7]=n("div",{class:"group-nav-foot"},"统一接入 · 统一鉴权 · 统一管控",-1))]),P.value?(i(),u("section",Oi,[n("div",zi,[n("div",Ei,[m[8]||(m[8]=n("span",{class:"rel-node is-core"},[w(" 智能应急预案管理子系统 "),n("small",null,"统一对接枢纽")],-1)),m[9]||(m[9]=n("span",{class:"rel-link","aria-hidden":"true"},[n("i"),n("em",null,"⇄"),n("i")],-1)),n("span",Ni,[w(e(P.value.title)+" ",1),n("small",null,e(P.value.items.length)+" 项对接能力",1)])]),n("div",Gi,[n("div",Hi,[n("h2",null,e(P.value.title),1),n("p",null,e(P.value.description),1)]),n("div",Wi,[c(x,{size:"small",effect:"plain"},{default:f(()=>[w(e(P.value.items.length)+" 项能力",1)]),_:1}),c(x,{size:"small",effect:"plain",type:"success"},{default:f(()=>[w(e(O(P.value))+" 个接口",1)]),_:1})])])]),n("div",Vi,[(i(!0),u(M,null,T(P.value.items,(r,y)=>(i(),H(b,{key:r.key,class:"item-card",shadow:"hover"},{default:f(()=>[n("div",Bi,[n("span",Qi,e(I(y)),1),n("h3",null,e(r.title),1),n("span",Ui,e(r.interfaces.length)+" 接口",1)]),n("p",Yi,e(r.description),1),n("div",ji,[(i(!0),u(M,null,T(r.interfaces,E=>(i(),u("span",{key:E,class:"interface-chip"},e(E),1))),128))]),n("div",Xi,[n("span",{class:"item-auth",title:r.authMode},[c(a,null,{default:f(()=>[c(p(Ve))]),_:1}),n("em",null,e(r.authMode||"未标注"),1)],8,Zi),c($,{link:"",size:"small",class:"item-link",onClick:E=>g(r.docKey)},{default:f(()=>[m[10]||(m[10]=w(" 阅读原文 ",-1)),c(a,null,{default:f(()=>[c(p(Rn))]),_:1})]),_:1},8,["onClick"])])]),_:2},1024))),128))]),n("p",Ji,e(o.data.sourceNote),1)])):(i(),H(K,{key:1,class:"empty-state",description:"暂无外部接口数据"}))])])}}}),eo=sn(no,[["__scopeId","data-v-8afcc35a"]]),to=tn({__name:"PlanFunctionMatrixPanel",props:{items:{},annotations:{default:()=>[]}},emits:["open-doc"],setup(o,{emit:k}){const d=o,L=k;function R(D){return{id:D.id,type:D.type,term:D.term,title:D.title,description:D.description,correction:D.correction,docKey:D.docKey}}const P=S(()=>{const D=new Map;for(const I of d.annotations){if(!I.docKey)continue;const O=D.get(I.docKey)??{tech:[],typo:[]};I.type==="tech"&&O.tech.push(R(I)),I.type==="typo"&&O.typo.push(R(I)),D.set(I.docKey,O)}return D}),G=S(()=>d.items.flatMap(D=>{const I=P.value.get(D.requirementDocKey);return D.requirementFunctions.map((O,g)=>{const t=g+1,_=D.mappings.find(m=>t>=m.functionRange[0]&&t<=m.functionRange[1]);return{rowKey:`${D.key}-${t}`,domainKey:D.key,domain:D.title,functionName:O,initialModule:(_==null?void 0:_.initialModule)??"",relation:(_==null?void 0:_.relation)??"unmapped",requirementDocKey:D.requirementDocKey,initialDocKey:D.initialDocKey,techAnnotations:(I==null?void 0:I.tech)??[],typoAnnotations:(I==null?void 0:I.typo)??[]}})}));return(D,I)=>(i(),H(st,{rows:G.value,accent:"#8b5cf6","accent-rgb":"139, 92, 246","domain-label":"业务模块","function-label":"功能点","count-hint":"批注数按需求原文文档统计",description:"需求功能点 × 初设模块 × 覆盖关系 × 批注质量",onOpenDoc:I[0]||(I[0]=O=>L("open-doc",O))},null,8,["rows"]))}}),lo={class:"role-panel"},io={class:"panel-header"},oo={class:"panel-head-main"},so={class:"panel-kicker"},ao={class:"panel-head-actions"},ro={class:"panel-stats"},co={class:"stat"},po={class:"stat"},uo={class:"stat"},mo={class:"role-body"},yo={class:"legend"},fo={class:"legend-hint"},vo={class:"matrix-wrap"},ho={class:"role-table"},go={class:"role-cell"},_o={class:"role-main"},ko={class:"role-scope"},wo={class:"source-note"},bo=tn({__name:"PlanRoleMatrixPanel",props:{data:{}},emits:["open-doc"],setup(o,{emit:k}){const d=o,L=k,R=[{key:"manage",label:"管理"},{key:"configure",label:"配置"},{key:"view",label:"查看"},{key:"none",label:"无"}],P={manage:"管理",configure:"配置",view:"查看",none:"无"},G=S(()=>d.data.rows.reduce((g,t)=>g+d.data.domains.filter(_=>t.access[_.key]==="manage").length,0));function D(g,t){return g.access[t]??"none"}function I(g){return P[g]}function O(){L("open-doc","req-spec-overview")}return(g,t)=>{const _=cn,m=dn;return i(),u("div",lo,[n("header",io,[n("div",oo,[n("span",so,[c(_,null,{default:f(()=>[c(p(fe))]),_:1}),t[0]||(t[0]=w(" ROLE MATRIX ",-1))]),t[2]||(t[2]=n("h1",null,"角色权限矩阵",-1)),n("p",null,"将 "+e(o.data.rows.length)+" 类业务角色映射到 "+e(o.data.domains.length)+" 大能力域的管理、配置与查看权限。",1),n("div",ao,[c(m,{size:"small",plain:"",onClick:O},{default:f(()=>[c(_,null,{default:f(()=>[c(p(on))]),_:1}),t[1]||(t[1]=w(" 查看需求总览 ",-1))]),_:1})])]),n("div",ro,[n("div",co,[n("em",null,e(o.data.rows.length),1),t[3]||(t[3]=n("span",null,"业务角色",-1))]),n("div",po,[n("em",null,e(o.data.domains.length),1),t[4]||(t[4]=n("span",null,"能力域",-1))]),n("div",uo,[n("em",null,e(G.value),1),t[5]||(t[5]=n("span",null,"管理授权",-1))])])]),n("div",mo,[n("div",yo,[t[7]||(t[7]=n("span",{class:"legend-title"},"权限级别",-1)),(i(),u(M,null,T(R,a=>n("span",{key:a.key,class:"legend-item"},[n("i",{class:nn(["legend-swatch",`is-${a.key}`])},null,2),w(" "+e(a.label),1)])),64)),n("span",fo,[c(_,null,{default:f(()=>[c(p(Be))]),_:1}),t[6]||(t[6]=w(" 点击角色行查看需求总览原文 ",-1))])]),n("div",vo,[n("table",ho,[n("thead",null,[n("tr",null,[t[8]||(t[8]=n("th",{class:"corner"},"角色 / 机构",-1)),(i(!0),u(M,null,T(o.data.domains,a=>(i(),u("th",{key:a.key,class:"domain-head"},[n("span",null,e(a.title),1)]))),128))])]),n("tbody",null,[(i(!0),u(M,null,T(o.data.rows,a=>(i(),u("tr",{key:a.key,class:"role-row",tabindex:"0",onClick:O,onKeyup:rn(O,["enter"])},[n("th",go,[n("span",_o,[n("strong",null,e(a.role),1),n("em",null,e(a.org),1)]),n("span",ko,e(a.scope),1)]),(i(!0),u(M,null,T(o.data.domains,x=>(i(),u("td",{key:x.key,class:"access-cell"},[n("span",{class:nn(["access-pill",`is-${D(a,x.key)}`])},e(I(D(a,x.key))),3)]))),128))],32))),128))])])]),n("p",wo,e(o.data.sourceNote),1)])])}}}),Ko=sn(bo,[["__scopeId","data-v-ff7c489d"]]),$o={class:"quality-panel"},Do={class:"quality-inner"},xo={class:"quality-head"},Po={class:"quality-summary"},qo={class:"chart-grid"},Fo={class:"card-head"},Ro={class:"card-count"},Io={class:"donut-wrap"},Mo={class:"donut-media"},Co={class:"donut-center"},So={class:"type-legend"},Ao={class:"type-label"},To={class:"type-value"},Lo={class:"card-head"},Oo={class:"card-count"},zo={class:"rank-body"},Eo={class:"rank-list"},No=["title","onClick","onKeydown"],Go={class:"rank-index"},Ho={class:"rank-main"},Wo={class:"rank-total"},Vo={class:"list-grid"},Bo={class:"card-head"},Qo={key:0,class:"note-list"},Uo=["onClick","onKeydown"],Yo={class:"note-line"},jo={class:"note-term"},Xo={class:"note-fix"},Zo={class:"note-meta"},Jo={class:"note-title"},ns={class:"note-doc"},es={class:"note-desc"},ts={class:"card-head"},ls={key:0,class:"note-list"},is=["onClick","onKeydown"],os={class:"note-line"},ss={class:"note-title"},as={class:"note-doc"},rs={class:"note-desc"},ds=tn({__name:"PlanQualityPanel",props:{annotations:{default:()=>[]},designGroups:{default:()=>[]},requirementGroups:{default:()=>[]}},emits:["open-doc"],setup(o,{emit:k}){const d=o,L=k,R=[{type:"tech",label:"技术批注",color:"#8b5cf6",icon:_n},{type:"term",label:"术语",color:"#2563eb",icon:Mn},{type:"typo",label:"错别字",color:"#ef4444",icon:Qe},{type:"link",label:"关联链接",color:"#0ea5e9",icon:bn}],P=S(()=>{const r=new Map;for(const y of[...d.designGroups,...d.requirementGroups])for(const E of y.items)r.set(E.key,{title:E.title,groupTitle:y.title});return r}),G=S(()=>{const r={tech:0,term:0,typo:0,link:0};for(const y of d.annotations)r[y.type]+=1;return r}),D=S(()=>{const r=new Map;for(const y of d.annotations){const E=P.value.get(y.docKey);let z=r.get(y.docKey);z||(z={docKey:y.docKey,title:(E==null?void 0:E.title)??y.docKey,groupTitle:(E==null?void 0:E.groupTitle)??"未归组",total:0,counts:{tech:0,term:0,typo:0,link:0}},r.set(y.docKey,z)),z.total+=1,z.counts[y.type]+=1}return[...r.values()].sort((y,E)=>E.total-y.total||y.title.localeCompare(E.title))});function I(r){const y=P.value.get(r.docKey);return{...r,docTitle:(y==null?void 0:y.title)??r.docKey,groupTitle:(y==null?void 0:y.groupTitle)??"未归组"}}const O=S(()=>d.annotations.filter(r=>r.type==="typo").map(I)),g=S(()=>d.annotations.filter(r=>r.type==="tech").map(I)),t=S(()=>[{key:"total",label:"总批注数",value:d.annotations.length,icon:Ue,color:"#2563eb",bgColor:"#eff6ff"},...R.map(r=>({key:r.type,label:r.label,value:G.value[r.type],icon:r.icon,color:r.color,bgColor:`${r.color}14`}))]),_=j(null),m=j(null),a=S(()=>({tooltip:{trigger:"item",formatter:"{b}<br/>{c} 条（{d}%）"},series:[{type:"pie",radius:["58%","78%"],center:["50%","50%"],label:{show:!1},labelLine:{show:!1},itemStyle:{borderColor:"#fff",borderWidth:2},data:R.map(r=>({name:r.label,value:G.value[r.type],itemStyle:{color:r.color}}))}]})),x=S(()=>{const r=D.value.slice(0,10).reverse();return{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:4,right:28,top:8,bottom:4,containLabel:!0},xAxis:{type:"value",minInterval:1,axisLabel:{color:"#94a3b8",fontSize:10},splitLine:{lineStyle:{color:"#eef2f7"}}},yAxis:{type:"category",data:r.map(y=>y.title),axisTick:{show:!1},axisLine:{show:!1},axisLabel:{color:"#475569",fontSize:11,width:96,overflow:"truncate"}},series:[{type:"bar",data:r.map(y=>y.total),barWidth:10,itemStyle:{color:"#3b82f6",borderRadius:[0,5,5,0]},label:{show:!0,position:"right",color:"#64748b",fontSize:10}}]}}),{dispose:$}=Wn(_,a),{dispose:b}=Wn(m,x);Un(()=>{$(),b()});function K(r){L("open-doc",r)}return(r,y)=>{const E=it("stats-cards"),z=In,J=Bn,ln=Qn;return i(),u("div",$o,[n("div",Do,[n("header",xo,[y[4]||(y[4]=n("div",{class:"quality-title"},[n("span",{class:"quality-kicker"},"ANNOTATION QUALITY"),n("h1",null,"批注与质量"),n("p",null,"技术批注、术语、错别字与关联批注的整体质量总览")],-1)),n("div",Po,[n("span",null,[y[0]||(y[0]=w("覆盖 ",-1)),n("strong",null,e(D.value.length),1),y[1]||(y[1]=w(" 篇原文",-1))]),n("span",null,[y[2]||(y[2]=w("共 ",-1)),n("strong",null,e(d.annotations.length),1),y[3]||(y[3]=w(" 条批注",-1))])])]),c(E,{items:t.value,clickable:!1},null,8,["items"]),n("div",qo,[c(z,{class:"chart-card type-card"},{header:f(()=>[n("div",Fo,[y[5]||(y[5]=n("div",null,[n("h2",null,"批注类型分布"),n("p",null,"技术批注 / 术语 / 错别字 / 关联链接")],-1)),n("span",Ro,e(d.annotations.length)+" 条",1)])]),default:f(()=>[n("div",Io,[n("div",Mo,[n("div",{ref_key:"typeChartRef",ref:_,class:"chart-canvas"},null,512),n("div",Co,[n("strong",null,e(d.annotations.length),1),y[6]||(y[6]=n("span",null,"总批注",-1))])]),n("ul",So,[(i(),u(M,null,T(R,h=>n("li",{key:h.type,class:"type-row"},[n("i",{class:"type-dot",style:Kn({background:h.color})},null,4),n("span",Ao,e(h.label),1),n("span",To,e(G.value[h.type]),1)])),64))])])]),_:1}),c(z,{class:"chart-card rank-card"},{header:f(()=>[n("div",Lo,[y[7]||(y[7]=n("div",null,[n("h2",null,"文档批注排行"),n("p",null,"按批注总数排序 · 图表取 Top 10，右侧为全量清单")],-1)),n("span",Oo,e(D.value.length)+" 篇",1)])]),default:f(()=>[n("div",zo,[n("div",{ref_key:"docChartRef",ref:m,class:"chart-canvas doc-canvas"},null,512),n("ul",Eo,[(i(!0),u(M,null,T(D.value,(h,W)=>(i(),u("li",{key:h.docKey,class:"rank-row",role:"button",tabindex:"0",title:`${h.title} · ${h.total} 条批注`,onClick:V=>K(h.docKey),onKeydown:[rn(un(V=>K(h.docKey),["stop","prevent"]),["enter"]),rn(un(V=>K(h.docKey),["stop","prevent"]),["space"])]},[n("span",Go,e(String(W+1).padStart(2,"0")),1),n("span",Ho,[n("strong",null,e(h.title),1),n("small",null,e(h.groupTitle),1)]),n("span",Wo,e(h.total),1)],40,No))),128))])])]),_:1})]),n("div",Vo,[c(z,{class:"list-card"},{header:f(()=>[n("div",Bo,[y[8]||(y[8]=n("div",null,[n("h2",null,"错别字清单"),n("p",null,"term → correction · 点击定位原文")],-1)),c(J,{type:"danger",size:"small"},{default:f(()=>[w(e(O.value.length)+" 条",1)]),_:1})])]),default:f(()=>[O.value.length?(i(),u("ul",Qo,[(i(!0),u(M,null,T(O.value,h=>(i(),u("li",{key:h.id,class:"note-row",role:"button",tabindex:"0",onClick:W=>K(h.docKey),onKeydown:[rn(un(W=>K(h.docKey),["stop","prevent"]),["enter"]),rn(un(W=>K(h.docKey),["stop","prevent"]),["space"])]},[n("div",Yo,[n("span",jo,e(h.term),1),y[9]||(y[9]=n("span",{class:"note-arrow"},"→",-1)),n("span",Xo,e(h.correction||"待确认"),1)]),n("div",Zo,[n("span",Jo,e(h.title),1),n("span",ns,e(h.docTitle),1)]),n("p",es,e(h.description),1)],40,Uo))),128))])):(i(),H(ln,{key:1,description:"暂无错别字批注","image-size":70}))]),_:1}),c(z,{class:"list-card"},{header:f(()=>[n("div",ts,[y[10]||(y[10]=n("div",null,[n("h2",null,"技术批注清单"),n("p",null,"技术实现说明 · 点击定位原文")],-1)),c(J,{type:"primary",size:"small"},{default:f(()=>[w(e(g.value.length)+" 条",1)]),_:1})])]),default:f(()=>[g.value.length?(i(),u("ul",ls,[(i(!0),u(M,null,T(g.value,h=>(i(),u("li",{key:h.id,class:"note-row",role:"button",tabindex:"0",onClick:W=>K(h.docKey),onKeydown:[rn(un(W=>K(h.docKey),["stop","prevent"]),["enter"]),rn(un(W=>K(h.docKey),["stop","prevent"]),["space"])]},[n("div",os,[n("span",ss,e(h.title),1),n("span",as,e(h.docTitle),1)]),n("p",rs,e(h.description),1)],40,is))),128))])):(i(),H(ln,{key:1,description:"暂无技术批注","image-size":70}))]),_:1})])])])}}}),cs=sn(ds,[["__scopeId","data-v-dfdcde5e"]]),ps={class:"effort-panel"},us={class:"effort-inner"},ms={class:"effort-hero"},ys={class:"hero-copy"},fs={class:"hero-kicker"},vs={class:"hero-total"},hs={class:"total-sub"},gs={class:"summary-grid"},_s={class:"summary-icon"},ks={class:"summary-copy"},ws={class:"summary-value"},bs={class:"summary-label"},Ks={class:"summary-desc"},$s={class:"detail-section"},Ds={class:"detail-grid"},xs={class:"detail-head"},Ps={class:"detail-index"},qs={class:"detail-title"},Fs={class:"detail-workload"},Rs={class:"detail-desc"},Is={class:"detail-meta"},Ms={class:"meta-item"},Cs={class:"meta-item"},Ss={class:"detail-deliverables"},As={class:"deliverable-label"},Ts={class:"deliverable-tags"},Ls={class:"detail-foot"},Os={class:"source-note"},zs=tn({__name:"PlanEffortPanel",props:{data:{}},emits:["open-doc"],setup(o,{emit:k}){const d=o,L=k,R=[{main:"#3b82f6",soft:"#bfdbfe"},{main:"#6366f1",soft:"#c7d2fe"},{main:"#10b981",soft:"#a7f3d0"},{main:"#f59e0b",soft:"#fde68a"},{main:"#ec4899",soft:"#fbcfe8"},{main:"#14b8a6",soft:"#99f6e4"}],P=["blue","purple","green","orange","pink"],G=S(()=>d.data.items.reduce((K,r)=>K+(r.libraryCount??0),0)),D=S(()=>d.data.items.reduce((K,r)=>K+r.deliverables.length,0)),I=S(()=>[{label:"总工作量",value:d.data.totalWorkload,unit:"人月",desc:`${d.data.items.length} 个业务模块合计`,icon:Ye},{label:"业务模块",value:d.data.items.length,unit:"个",desc:"按业务模块拆解",icon:pe},{label:"数据库 / 专题库",value:G.value,unit:"个",desc:"库 / 数据规模统计",icon:Mn},{label:"交付物",value:D.value,unit:"份",desc:"规范 / 设计 / 报告",icon:ye}]);function O(K){return R[K%R.length]??R[0]}function g(K){const r=O(K);return{"--effort-main":r.main,"--effort-soft":r.soft}}function t(K){return P[K%P.length]??"blue"}function _(K){return K.libraryCount!=null?`${K.libraryCount} 个库`:"—"}function m(K){return String(K+1).padStart(2,"0")}function a(K){K.docKey&&L("open-doc",K.docKey)}const x=j(null),$=S(()=>({grid:{left:52,right:24,top:38,bottom:52},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},backgroundColor:"rgba(15, 23, 42, 0.92)",borderColor:"rgba(59, 130, 246, 0.35)",textStyle:{color:"#e2e8f0",fontSize:12},valueFormatter:K=>`${K} 人月`},xAxis:{type:"category",data:d.data.items.map(K=>K.title),axisLabel:{color:"#64748b",fontSize:11,interval:0,width:96,overflow:"break"},axisLine:{lineStyle:{color:"#e2e8f0"}},axisTick:{show:!1}},yAxis:{type:"value",name:"人月",nameTextStyle:{color:"#94a3b8",fontSize:11},axisLabel:{color:"#94a3b8",fontSize:11},splitLine:{lineStyle:{color:"#eef2f7"}}},series:[{type:"bar",barWidth:38,data:d.data.items.map((K,r)=>{const y=O(r);return{value:K.workload,itemStyle:{borderRadius:[6,6,0,0],color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:y.main},{offset:1,color:y.soft}]}}}}),label:{show:!0,position:"top",color:"#334155",fontSize:11,fontWeight:600,formatter:"{c}"}}]})),{dispose:b}=Wn(x,$);return Un(()=>b()),(K,r)=>{const y=cn,E=In,z=Bn,J=dn,ln=Qn;return i(),u("div",ps,[n("div",us,[n("header",ms,[n("div",ys,[n("span",fs,[c(y,null,{default:f(()=>[c(p(ve))]),_:1}),r[0]||(r[0]=w(" DELIVERY & EFFORT ",-1))]),r[1]||(r[1]=n("h2",null,"实施与工作量",-1)),n("p",null," 按业务模块拆解各模块的工作量、建设规模与交付物； 总工作量 "+e(o.data.totalWorkload)+" 人月，点击模块卡片可进入对应原文核对口径。 ",1)]),n("div",vs,[r[3]||(r[3]=n("span",{class:"total-label"},"TOTAL EFFORT",-1)),n("strong",null,[w(e(o.data.totalWorkload),1),r[2]||(r[2]=n("em",null,"人月",-1))]),n("span",hs,e(o.data.items.length)+" 个业务模块 · "+e(G.value)+" 个库",1)])]),o.data.items.length?(i(),u(M,{key:0},[n("section",gs,[(i(!0),u(M,null,T(I.value,h=>(i(),H(E,{key:h.label,class:"summary-card"},{default:f(()=>[n("span",_s,[c(y,null,{default:f(()=>[(i(),H(wn(h.icon)))]),_:2},1024)]),n("div",ks,[n("div",ws,[w(e(h.value),1),n("em",null,e(h.unit),1)]),n("div",bs,e(h.label),1),n("div",Ks,e(h.desc),1)])]),_:2},1024))),128))]),c(E,{class:"chart-card"},{default:f(()=>[r[4]||(r[4]=n("div",{class:"chart-head"},[n("div",null,[n("h3",null,"业务模块工作量分布"),n("p",null,"单位：人月，按业务模块汇总")]),n("span",{class:"chart-legend"},[n("i"),w("工作量（人月）")])],-1)),n("div",{ref_key:"chartRef",ref:x,class:"effort-chart"},null,512)]),_:1}),n("section",$s,[r[9]||(r[9]=n("header",{class:"section-head"},[n("div",null,[n("h3",null,"模块明细"),n("p",null,"逐项展示工作量、库 / 系统规模与交付物，可点击进入原文")])],-1)),n("div",Ds,[(i(!0),u(M,null,T(o.data.items,(h,W)=>(i(),H(E,{key:h.key,class:"detail-card",shadow:"hover",style:Kn(g(W))},{default:f(()=>[n("div",xs,[n("span",Ps,e(m(W)),1),n("div",qs,[n("h4",null,e(h.title),1),n("span",null,e(h.category),1)]),n("span",Fs,[w(e(h.workload),1),r[5]||(r[5]=n("em",null,"人月",-1))])]),n("p",Rs,e(h.description),1),n("div",Is,[n("div",Ms,[r[6]||(r[6]=n("span",null,"工作量",-1)),n("strong",null,e(h.workload)+" 人月",1)]),n("div",Cs,[r[7]||(r[7]=n("span",null,"库 / 规模",-1)),n("strong",null,e(_(h)),1)])]),n("div",Ss,[n("span",As,"交付物 "+e(h.deliverables.length)+" 份",1),n("div",Ts,[(i(!0),u(M,null,T(h.deliverables,V=>(i(),H(z,{key:V,size:"small",effect:"plain","color-type":t(W)},{default:f(()=>[w(e(V),1)]),_:2},1032,["color-type"]))),128))])]),n("div",Ls,[c(J,{link:"",size:"small",onClick:V=>a(h)},{default:f(()=>[c(y,null,{default:f(()=>[c(p(on))]),_:1}),r[8]||(r[8]=w(" 查看原文 ",-1))]),_:1},8,["onClick"])])]),_:2},1032,["style"]))),128))])]),n("p",Os,e(o.data.sourceNote),1)],64)):(i(),H(ln,{key:1,description:"暂无实施与工作量数据","image-size":80}))])])}}}),Es=sn(zs,[["__scopeId","data-v-5f21ab31"]]),te={positioning:"智能应急预案管理子系统是新建的预案数字化管理平台，面向省交通运输厅及下属单位：以应急分类库（多级分类、11 维事件属性、历史情景样本）和规则规范库（国家/行业/本地三类库、范式化多版本、子集分配、下发/上报接口）为底座，经 AI 预案结构识别拆解为先期处置、分级响应、组织指挥等八类标准流程模块，基于开源大模型微调生成专项预案，并以自动化任务闭环和模拟演练—预案评估优化形成持续迭代。",highlights:["多级分类库 + 11 维事件属性 + 历史情景样本","国家 / 行业 / 本地三类规范库与子集分配","AI 结构识别 + 八类标准流程模块编排","ChatGLM / Qwen 微调 · 情境自适应 · 多风格生成","自动化任务闭环 + GIS / 视频联动","演练数据隔离存档 · 全景复盘 · 评估回流优化"],goals:["建成应急分类库：按国家分级分类标准维护多级类别与具体事件类型，以影响等级、响应等级、责任部门等 11 维属性自动生成预案多维视图，并沉淀历史情景样本供模型训练。","建成规则规范库：国家/行业/本地三类规范范式化存储，支持初稿到发布的多版本追溯、按事件类别与响应等级分配规范子集，并打通下发/上报接口。","实现预案结构识别与模块化：AI 抽取预案要素、预警/应急响应条件、响应措施和单位职责，拆解为八类标准流程模块，支持可视化组合与版本回溯。","实现专项预案智能生成：基于 ChatGLM/Qwen 微调，按事件类型/严重程度/责任部门选择模块与规范子集，适配综合/专项/现场处置方案的语言风格，并以多轮反馈再训练。","打通执行与优化闭环：任务自动推送、阶段时间轴、状态/完成/反馈闭环与 GIS/视频接入；模拟演练数据隔离存档、全景复盘，评估结果回流优化预案。"],sourceNote:"本文取自初步设计 5.5.3.1–5.5.3.6 与需求规格 3.4（3.4.2 功能描述表、3.4.3 业务角色、3.4.4 详细功能）；能力域按初设 5.5.3.x 的 7 个模块整理，其中「预案评估与优化」在初设中归入 5.5.3.6.6，需规单列为 3.4.4.7。"},le=[{key:"classify",title:"应急分类库管理",subtitle:"Emergency Classification Library",iconKey:"Collection",summary:"按国家应急预案分级分类标准维护多级类别与具体事件类型，支撑预案文件上传下载、检索、预览、目录、标签与知识库；以影响等级、响应等级、责任部门等 11 维属性生成预案多维视图，并归集历史情景样本供模型训练。",sourceRef:"5.5.3.1",docKey:"plan-design-classify"},{key:"standard",title:"规则规范库管理",subtitle:"Rules & Standards Library",iconKey:"Document",summary:"将应急标准、行业规范、流程标准范式化存储，提取预案级别、预案类型、适用范围等核心要素；支持多版本演进与历史追溯、按事件类别与响应等级调用规范子集，并经下发/上报接口对接国家、行业、本地三类规则库。",sourceRef:"5.5.3.2",docKey:"plan-design-standard"},{key:"module",title:"预案流程模块化管理",subtitle:"Plan Process Modularization",iconKey:"Connection",summary:"AI 对预案文本做结构化解析，抽取预案要素、预警/应急响应条件、响应措施与单位职责，拆解为先期处置、分级响应、组织指挥等八类标准流程模块；支持模块单独定义存储、版本管理与可视化组合编排，关联组织人员与应急资源。",sourceRef:"5.5.3.3",docKey:"plan-design-module"},{key:"model",title:"模型微调与专项预案生成",subtitle:"Model Fine-tuning & Generation",iconKey:"Cpu",summary:"基于智谱 ChatGLM、阿里 Qwen 等开源大模型，结合预案模板库与规则规范库做提示词工程和抽取识别微调；按事件类型、严重程度、责任部门自适应选择模块与规范子集，适配通用语言/专业术语/指令式风格，并以多轮生成与人工反馈再训练。",sourceRef:"5.5.3.4",docKey:"plan-design-model"},{key:"workflow",title:"自动化流程管理",subtitle:"Automated Workflow",iconKey:"DataLine",summary:"将生成的数字化预案与其他业务系统对接，自动向责任单位推送任务并设置阶段计划时间轴；闭环跟踪任务状态、完成确认与反馈收集，联动 GIS 与实时视频，自动记录执行过程并生成绩效评估报告。",sourceRef:"5.5.3.5",docKey:"plan-design-workflow"},{key:"drill",title:"应急模拟演练",subtitle:"Emergency Drill Simulation",iconKey:"DataAnalysis",summary:"以桌面推演验证预案有效性与操作性：覆盖演练设计（类型、场景、流程编排、角色、时间线）、过程控制（实时监控、事件触发、指挥调度、通信、日志）、响应模拟、效果评估与数据管理；演练数据独立存储并与真实数据隔离，支持时间轴全景复盘。",sourceRef:"5.5.3.6",docKey:"plan-design-drill"},{key:"optimize",title:"预案评估与优化",subtitle:"Plan Evaluation & Optimization",iconKey:"List",summary:"对已提取的数字化预案进行人工评估、调整与优化，建立响应时间、适应性、操作简便性、资源匹配度等评估指标；经规则引擎与数据驱动自动分析并给出改进提示，记录修改痕迹与优化历史，形成评估—优化—反馈闭环。",sourceRef:"5.5.3.6.6",docKey:"plan-design-drill"}],ie=[{key:"pre-disposal",title:"先期处置",summary:"事件接报后第一时间启动的现场控制、信息核实与初步警戒等处置动作，模块可单独定义存储并按需组合。",docKey:"plan-design-module"},{key:"graded-response",title:"分级响应",summary:"依据影响等级与应急响应等级确定响应级别，联动规范子集调用与责任部门任务分派的响应流程模块。",docKey:"plan-design-module"},{key:"command",title:"组织指挥",summary:"明确指挥机构、指挥关系与现场指挥部设置，衔接组织通讯录与参演人员角色，支撑统一指挥调度。",docKey:"plan-design-module"},{key:"disposal",title:"应急处置",summary:"针对事件类型组织的现场抢险、交通管控、人员疏散与救援等核心处置措施模块。",docKey:"plan-design-module"},{key:"support",title:"保障行动",summary:"物资装备、运输、通信、医疗与电力等应急保障资源的调用与协同行动模块。",docKey:"plan-design-module"},{key:"info-release",title:"信息发布",summary:"面向社会与相关单位统一发布事件信息、处置进展与出行提示，规范发布渠道与口径。",docKey:"plan-design-module"},{key:"response-stop",title:"响应中止",summary:"明确响应降级与终止条件、审批流程与善后衔接，避免响应过度或解除不及时。",docKey:"plan-design-module"},{key:"post-processing",title:"后期处理",summary:"事件处置结束后的恢复重建、损失评估、原因调查、总结归档与预案优化建议模块。",docKey:"plan-design-module"}],xn=[{key:"classify",title:"应急分类库管理",initialRef:"5.5.3.1",requirementRef:"3.4.4.1",initialDocKey:"plan-design-classify",requirementDocKey:"plan-req-classify",initialModules:["分类层级管理（多级分类、文件上传下载、检索、预览、目录、标签、知识库）","维度定义（影响等级、应急响应等级、责任部门等 11 维属性）","情景样本库（历史情景样本、事件案例归类）"],mappings:[{initialModule:"分类层级管理",initialDetail:"多级分类、文件上传下载、检索、预览、目录、标签、知识库",relation:"split",functionRange:[1,8],note:"拆为 8 个功能点，覆盖可视化图表、多级分类与文件全生命周期管理"},{initialModule:"维度定义",initialDetail:"影响等级、应急响应等级、责任部门等 11 维属性",relation:"split",functionRange:[9,11],note:"拆为影响等级、响应等级与多维度类别定制 3 个功能点"},{initialModule:"情景样本库",initialDetail:"历史情景样本、事件案例归类",relation:"aligned",functionRange:[12,13],note:"历史样本与案例归类两点逐一对应"}],requirementFunctions:["应急预案可视化图表信息","自定义预案多级分类信息","预案文件信息","文件查询检索结果信息","文件预览缓存信息","文件内目录信息","文件标签设置信息","文件知识库信息","设置预案文件影响等级类别定义规则信息","设置预案文件应急响应等级信息","制度多维度类别定制预案文件信息","历史情景样本库","事件案例数据归类"],sharedModules:["分类层级管理","维度定义","情景样本库"],requirementHighlights:["分类层级管理拆为 8 个功能点，覆盖可视化图表、多级分类、文件上传、检索、预览、目录、标签、知识库的输入输出。","维度定义收敛为影响等级规则、应急响应等级、多维度类别定制 3 个功能点并补充核心字段。","情景样本库明确历史样本与事件案例归类两点，直接支撑模型训练数据来源。"],designHighlights:["初设完整列出 11 维事件属性（影响等级、响应等级、责任部门、时间敏感性、触发条件、事件来源、气象影响、交通中断类型、资源依赖、是否跨区域、是否需专家参与）。","初设对文件纳入知识库、标签管理与多维视图自动生成的实现说明更细。","初设保留文件目录解析、预览缓存与综合展现的交互设计。"],conclusion:"三个模块与需规主题一一对应；需规把初设的分类与文件能力拆为 13 个可验收功能点并补充输入输出，初设保留 11 维属性清单与文件知识库关联等实现细节。"},{key:"standard",title:"规则规范库管理",initialRef:"5.5.3.2",requirementRef:"3.4.4.3",initialDocKey:"plan-design-standard",requirementDocKey:"plan-req-standard",initialModules:["规范存储与管理（应急标准 / 行业规范 / 流程标准范式化）","多版本支持（初稿—评审—试用—发布全流程）","子集分配（按事件类别、响应等级调用规范子集）","规范接口接入（下发、上报、三类规则库对接）"],mappings:[{initialModule:"规范存储与管理",initialDetail:"应急标准、行业规范、流程标准范式化与规范管理",relation:"split",functionRange:[1,4],note:"三类规范与规范管理拆为 4 个功能点"},{initialModule:"多版本支持",initialDetail:"初稿—评审—试用—发布全流程与历史回溯",relation:"aligned",functionRange:[5,6],note:"版本全流程管理与版本回溯逐一对应"},{initialModule:"子集分配",initialDetail:"按事件类别、响应等级调用规范子集",relation:"aligned",functionRange:[7,8],note:"事件类别与响应等级两类调用各对应 1 个功能点"},{initialModule:"规范接口接入",initialDetail:"下发接口、上报接口、国家/行业/本地三类规则库",relation:"refined",functionRange:[9,10],note:"需规聚焦下发与上报两个接口，三类规则库作为接口数据来源"}],requirementFunctions:["支持应急标准范式化存储数据","支持行业规范范式化存储数据","支持流程标准范式化存储数据","规范管理信息","版本全流程管理功能信息","版本回溯信息","按事件类别调用规范子集信息","按响应等级调用规范子集信息","下发接口信息","上报接口信息"],sharedModules:["规范存储与管理","多版本支持","子集分配","规范接口接入"],requirementHighlights:["规范存储拆为应急标准、行业规范、流程标准、规范管理 4 个功能点，并补充输入输出。","多版本支持明确版本全流程管理与版本回溯两个功能点，覆盖初稿到发布及历史恢复。","子集分配按事件类别与响应等级拆为两个调用功能点。","规范接入收敛为下发与上报两个接口功能点。"],designHighlights:["初设明确规范类型可覆盖流程规范、设备使用规范、数据共享协议等多种形态。","初设保留国家标准库、行业标准库、本地化规则库三类规则库的对接说明。","初设强调版本可恢复、可比较、可封存及变更追溯的上报语义。"],conclusion:"四个模块与需规主题对应；需规细化为 10 个功能点并补充输入输出，初设保留三类规则库来源、规范类型多样性与版本封存追溯等设计说明。"},{key:"module",title:"预案流程模块化管理",initialRef:"5.5.3.3",requirementRef:"3.4.4.2",initialDocKey:"plan-design-module",requirementDocKey:"plan-req-module",initialModules:["模板管理（文本解析、要素提取、八类模块存储与自定义）","预案场景管理（结构识别、关键信息提取与结构化存储）","预案模块生成与调整（版本管理、历史回溯）","模板应用（可视化编制、关联组织人员与应急资源、场景-模板-方案融合）"],mappings:[{initialModule:"模板管理",initialDetail:"文本解析、要素提取、八类模块存储与自定义",relation:"split",functionRange:[1,4],note:"解析、要素、模块存储、模块自定义拆为 4 个功能点"},{initialModule:"预案场景管理",initialDetail:"结构识别、关键信息提取与结构化存储",relation:"split",functionRange:[5,7],note:"结构化解析、关键信息提取、结构存储拆为 3 个功能点"},{initialModule:"预案模块生成与调整",initialDetail:"版本管理与历史回溯",relation:"aligned",functionRange:[8,9],note:"预案版本与版本回溯记录逐一对应"},{initialModule:"模板应用",initialDetail:"可视化编制、关联组织人员与应急资源、场景-模板-方案融合",relation:"split",functionRange:[10,13],note:"可视化编制、人员组织、应急资源、融合数据拆为 4 个功能点"}],requirementFunctions:["预案文本解析结果信息","预案要素提取结果信息","预案模块存储数据","预案模块自定义信息","结构化解析信息","关键信息提取信息","关键信息结构存储数据","预案版本信息","版本回溯记录信息","可视化编制工具信息","模板关联人员组织机构信息","模板关联应急资源信息","支持风险场景-预案模板-处置方案融合数据"],sharedModules:["模板管理","预案场景管理","预案模块生成与调整","模板应用"],requirementHighlights:["模板管理拆为文本解析、要素提取、模块存储、模块自定义 4 个功能点。","预案场景管理拆为结构化解析、关键信息提取、关键信息结构存储 3 个功能点。","模板应用拆为可视化编制、关联人员组织、关联应急资源、场景-模板-方案融合 4 个功能点。","需规补充每个功能点的输入、输出与核心字段。"],designHighlights:["初设明确八类标准流程模块（先期处置、分级响应、组织指挥、应急处置、保障行动、信息发布、响应中止、后期处理）可单独定义存储。","初设保留流程图与表格混合编辑、关联组织通讯录与已有应急资源的编制交互。","初设为模块调整保留历史版本以支持特殊情况追溯。"],conclusion:"四个模块与需规主题对应；需规细化为 13 个功能点并补充输入输出，初设保留八类模块划分、可视化混合编辑与版本追溯等设计细节。需规章节编号为 3.4.4.2，与初设 5.5.3.3 对应。"},{key:"model",title:"模型微调与专项预案生成",initialRef:"5.5.3.4",requirementRef:"3.4.4.4",initialDocKey:"plan-design-model",requirementDocKey:"plan-req-model",initialModules:["开源模型微调（ChatGLM / Qwen 提示词工程与抽取识别微调）","情境自适应生成（自动选择模板与规范子集）","自适应语言风格（通用语言 / 专业术语 / 指令式）","多轮生成与反馈学习（自动优化、手动修改、监督）"],mappings:[{initialModule:"开源模型微调",initialDetail:"提示词工程与抽取识别微调",relation:"aligned",functionRange:[1,1],note:"微调功能点一一对应"},{initialModule:"情境自适应生成",initialDetail:"自动选择模板与规范子集",relation:"split",functionRange:[2,3],note:"模板与规范子集选择拆为两个功能点"},{initialModule:"自适应语言风格",initialDetail:"通用语言、专业术语、指令式",relation:"split",functionRange:[4,6],note:"三类语言风格各对应 1 个功能点"},{initialModule:"多轮生成与反馈学习",initialDetail:"自动优化、手动修改、优化结果监督",relation:"split",functionRange:[7,9],note:"自动优化、手动修改、结果监督拆为 3 个功能点"}],requirementFunctions:["进行提示词工程及抽取识别微调信息","自动选择模板信息","自动选择规范子集信息","按需求调整生成通用语言风格预案信息","按需求调整生成专业术语风格预案信息","按需求调整生成指令式语言风格预案信息","自动优化信息","手动修改信息","优化结果应用监督信息"],sharedModules:["开源模型微调","情境自适应生成","自适应语言风格","多轮生成与反馈学习"],requirementHighlights:["开源模型微调明确提示词工程与抽取识别微调的功能点。","情境自适应拆为自动选择模板、自动选择规范子集两个功能点。","语言风格按通用语言、专业术语、指令式拆为 3 个功能点。","多轮生成拆为自动优化、手动修改、优化结果应用监督 3 个功能点。"],designHighlights:["初设明确采用智谱 ChatGLM、阿里 Qwen 等开源大语言模型。","初设强调基于模板库与规则规范库的数据进行提示词工程及抽取识别微调。","初设将事件类型、严重程度、责任部门作为情境自适应的输入条件。"],conclusion:"四个模块与需规主题对应；需规细化为 9 个功能点并补充输入输出，初设保留 ChatGLM/Qwen 选型、微调数据来源与情境输入条件等实现说明。"},{key:"workflow",title:"自动化流程管理",initialRef:"5.5.3.5",requirementRef:"3.4.4.5",initialDocKey:"plan-design-workflow",requirementDocKey:"plan-req-workflow",initialModules:["任务对接与通知（自动推送、阶段时间轴、提醒反馈）","任务闭环管理（状态更新、完成确认、反馈收集）","地图数据信息接入与视频监控数据接入","任务绩效评估与报告（过程记录、执行报告）"],mappings:[{initialModule:"任务对接与通知",initialDetail:"自动推送、阶段时间轴、提醒与反馈",relation:"split",functionRange:[1,3],note:"通知、推送、状态提醒反馈拆为 3 个功能点"},{initialModule:"任务闭环管理",initialDetail:"状态更新、完成确认、反馈收集",relation:"split",functionRange:[4,5],note:"闭环规则与全程跟踪拆为两个功能点"},{initialModule:"地图数据信息接入与视频监控数据接入",initialDetail:"地理位置信息与实时视频流",relation:"aligned",functionRange:[6,7],note:"地理位置与实时视频两个接口逐一对应"},{initialModule:"任务绩效评估与报告",initialDetail:"自动记录执行过程、生成执行报告",relation:"aligned",functionRange:[8,9],note:"过程记录与执行报告两点对应"}],requirementFunctions:["自动化通知信息","任务推送信息","任务状态提醒反馈信息","制定任务闭环管理规则信息","全程跟踪任务执行信息","提供地理位置信息接口","提供实时视频流数据","自动记录预案评估过程信息","生成执行报告信息"],sharedModules:["任务对接与通知","任务闭环管理","地图与视频数据接入","任务绩效评估与报告"],requirementHighlights:["任务对接拆为自动化通知、任务推送、状态提醒反馈 3 个功能点。","任务闭环拆为闭环管理规则与全程跟踪任务执行两个功能点。","地图与视频接入明确地理位置信息接口和实时视频流数据两个功能点。","绩效评估拆为自动记录评估过程与生成执行报告两个功能点。"],designHighlights:["初设明确数字化预案按阶段设置计划时间轴并自动推送责任单位。","初设为应急指挥保留 GIS 地理信息与实时视频流的情报支撑语义。","初设强调任务状态更新、完成确认与反馈收集的闭环全流程。"],conclusion:"四个模块与需规主题对应；需规细化为 9 个功能点并补充输入输出，初设保留阶段时间轴、GIS/视频联动与闭环全流程跟踪等设计说明。"},{key:"drill",title:"应急模拟演练",initialRef:"5.5.3.6",requirementRef:"3.4.4.6",initialDocKey:"plan-design-drill",requirementDocKey:"plan-req-drill",initialModules:["演练设计管理（类型、场景配置、流程编排、角色分配、时间线）","演练过程控制（实时监控、事件触发、指挥调度、通信系统、日志记录）","应急响应模拟（推演决策链、资源调用、互动反馈、事件升级）","效果评估与反馈（评分、问题分类、数据分析、改进建议、总结会议）","演练数据管理（资产沉淀、全景复盘、跨平台赋能、效能诊断、分级准入）","系统配置与管理（权限矩阵、模板库、审计轨迹、连续性保障、协同通告）"],mappings:[{initialModule:"演练设计管理",initialDetail:"类型、场景配置、流程编排、角色分配、时间线",relation:"aligned",functionRange:[1,5],note:"五项设计能力逐一对应"},{initialModule:"演练过程控制",initialDetail:"实时监控、事件触发、指挥调度、通信系统、日志记录",relation:"aligned",functionRange:[6,10],note:"五项过程控制能力逐一对应"},{initialModule:"应急响应模拟",initialDetail:"推演决策链、资源调用、互动反馈、事件升级",relation:"aligned",functionRange:[11,14],note:"四项响应模拟能力逐一对应"},{initialModule:"效果评估与反馈",initialDetail:"评分、问题分类、数据分析、改进建议、总结会议",relation:"aligned",functionRange:[15,19],note:"五项评估能力逐一对应"},{initialModule:"演练数据管理",initialDetail:"资产沉淀、全景复盘、跨平台赋能、效能诊断、分级准入",relation:"aligned",functionRange:[20,24],note:"五项数据管理能力逐一对应"},{initialModule:"系统配置与管理",initialDetail:"权限矩阵、模板库、审计轨迹、连续性保障、协同通告",relation:"aligned",functionRange:[25,29],note:"五项系统配置能力逐一对应"}],requirementFunctions:["演练类型信息","场景配置信息","流程编排信息","角色分配信息","时间线设定信息","实时监控信息","事件触发信息","指挥调度信息","通信系统信息","日志记录信息","智能应急推演决策链信息","资源调用信息","互动反馈信息","事件升级信息","评分系统信息","问题记录与分类信息","数据分析信息","改进建议信息","演练总结会议信息","预案推演资产沉淀体系信息","全景演练复盘溯源信息","跨平台数据赋能信息","多维度演练效能诊断信息","分级防控准入机制信息","多级安全防控矩阵信息","标准化应急响应模板库信息","全周期操作审计轨迹信息","业务连续性保障信息","全域协同预警通告信息"],sharedModules:["演练设计管理","演练过程控制","应急响应模拟","效果评估与反馈","演练数据管理","系统配置与管理"],requirementHighlights:["把演练全过程拆为 6 个模块、29 个功能点，覆盖设计、过程控制、响应模拟、效果评估、数据管理与系统配置。","需规把初设 5.5.3.6.5 演练数据管理下的跨平台赋能、效能诊断、分级准入提升为独立功能点。","需规把初设 5.5.3.6.5.3 系统配置与管理拆为多级安全防控矩阵、模板库、审计、连续性保障与协同通告 5 个功能点。","每个功能点均补充输入、输出与核心字段。"],designHighlights:["初设完整描述演练脚本、事件链与关键节点触发条件、关联文件与关联任务等编排细节。","初设明确演练数据独立存储、与真实数据隔离并添加特定标识。","初设保留全景复盘时间轴回溯、快照录像与演练总结会议等复盘方式。"],conclusion:"六个模块与需规主题一一对应；需规细化为 29 个功能点并补充输入输出，初设保留演练脚本编排、数据隔离与全景复盘等设计与实现细节。"},{key:"optimize",title:"预案评估与优化",initialRef:"5.5.3.6.6",requirementRef:"3.4.4.7",initialDocKey:"plan-design-drill",requirementDocKey:"plan-req-optimize",initialModules:["评估指标设置（通用指标库、自定义指标库、主题分类）","自动化分析与提示（规则引擎、数据驱动分析）","人工优化调整配置（修改痕迹记录）","反馈机制（评估—优化闭环）","优化历史追溯（历史修改记录）"],mappings:[{initialModule:"评估指标设置",initialDetail:"通用指标库、自定义指标库、主题分类",relation:"split",functionRange:[1,4],note:"评估标准、通用库、自定义库、主题分类拆为 4 个功能点"},{initialModule:"自动化分析与提示",initialDetail:"规则引擎与数据驱动分析、改进提示",relation:"split",functionRange:[5,6],note:"自动分析与建议提示拆为两个功能点"},{initialModule:"人工优化调整配置",initialDetail:"修改预案内容并记录修改痕迹",relation:"split",functionRange:[7,9],note:"手动调整、过程记录、版本回溯拆为 3 个功能点"},{initialModule:"反馈机制",initialDetail:"评估—优化闭环反馈",relation:"split",functionRange:[10,11],note:"评估反馈与评估结果拆为两个功能点"},{initialModule:"优化历史追溯",initialDetail:"历史修改记录追溯",relation:"split",functionRange:[12,13],note:"优化过程记录与版本回溯拆为两个功能点"}],requirementFunctions:["制定评估标准信息","通用指标库信息","自定义指标库信息","指标项支持主题分类信息","预案自动分析信息","建议与提示信息","手动调整信息","调整过程记录","版本回溯信息","评估反馈信息","评估结果信息","优化过程记录","版本回溯信息"],sharedModules:["评估指标设置","自动化分析与提示","人工优化调整配置","反馈机制","优化历史追溯"],requirementHighlights:["评估指标拆为评估标准、通用指标库、自定义指标库、主题分类 4 个功能点。","自动化分析拆为预案自动分析与建议提示两个功能点。","人工优化拆为手动调整、调整过程记录、版本回溯 3 个功能点。","反馈机制拆为评估反馈与评估结果两个功能点，历史追溯补充优化过程记录与版本回溯。"],designHighlights:["初设列明响应时间、适应性、操作简便性、资源需求匹配度等评估维度。","初设通用指标库覆盖预案结构完整性、内容准确性、流程清晰度、角色匹配度、数据支撑性。","初设明确指标可按执行性、协调性、科学性、时效性、安全性等主题分类，也可按启动、响应、处置、恢复等业务阶段分类。"],conclusion:"五个模块与需规主题对应；需规细化为 13 个功能点并补充输入输出，初设保留评估维度、通用指标库内容与指标分类方式等设计说明。预案评估与优化在初设中归入 5.5.3.6.6，需规单列为 3.4.4.7。"}],Ns=`### 5.5.3 应急预案管理子系统设计

属于新建系统。为省交通运输厅提供全面的应急预案管理支持，实现现有预

案及行业应急规范数字化管理，应急元素（人员、物资、措施）动态管理，提升

发现、报送、处置、完结、归档的突发事件处置全流程效能。

#### 5.5.3.1 应急分类库管理

##### 5.5.3.1.1 功能描述

应急分类库模块用于定义应急事件对应预案的种类并形成应急预案的可视

化视图。按照国家应急预案分级分类标准，系统可以设置主要类别，并在各类别

下细化具体应急事件类型。该模块主要是对不同行政区划、不同级别和适用灾害

的应急预案进行体系化管理，通过数字化属性自动生成预案的多维视图，为模型

生成专项预案提供准确的事件分层信息。

##### 5.5.3.1.2 功能点说明

###### 5.5.3.1.2.1 分类层级管理

支持多级分类定义，以及预案文件的文件上传下载、查询检索、预览、文件

目录管理、标签设置、文件纳入知识库和标签管理等功能，确保文档能够进行高

效、可视化的管理和综合展现，为知识库建设提供支撑，每个子类可进一步细化

为具体事件类型。

###### 5.5.3.1.2.2 维度定义

支持预案文件的类别定义影响等级（如一般、较大、重大、特别重大）、应

急响应等级、责任部门、时间敏感性、触发条件、事件来源、气象影响、交通通

断类型、资源依赖、是否跨区域、是否需专家参与等属性，确保模型对事件的理

解更精确。

###### 5.5.3.1.2.3 情景样本库

基于分类库定义的应急事件预案库，提供相关的历史情景样本库，将实际发

生的事件案例数据归类，供模型训练和参考，增强生成内容的情景适应性。

<!-- PDF 第 343 页 -->
#### 5.5.3.2 规则规范库管理

##### 5.5.3.2.1 功能描述

规则规范库对已有的应急预案标准和规范进行范式化存储，此模型支持从应

急预案中提取核心要素，如预案级别、预案类型、适用范围等。通过快速解析预

案文本，将关键信息提取并结构化存储，为后续的管理和应用提供数据支持，该

模块支持版本管理，便于标准和规范的更新和历史追溯。

##### 5.5.3.2.2 功能点说明

###### 5.5.3.2.2.1 规范存储与管理

将各类应急标准、行业规范、流程标准进行范式化存储，确保后续生成的预

案符合现行法规和行业标准，支持存储规范的多种类型（如流程规范、设备使用

规范、数据共享协议）等。

###### 5.5.3.2.2.2 多版本支持

多版本支持是系统中确保预案内容可持续迭代、历史可追溯、调用可控的重

要核心功能模块，主要用于管理同一份预案在不同阶段、不同修改批次、不同适

用背景下所形成的多个内容版本。该功能不仅支撑预案从初稿、评审、试用到正

式发布的全流程演进管理，也保障了历史版本的可恢复、可比较、可封存，防止

关键信息丢失或误用，是构建“可演进、可追溯、可复用”预案体系的关键能力

支撑。

###### 5.5.3.2.2.3 子集分配

在生成专项预案时，可按事件类别、响应等级快速调用特定的规范子集，避

免不必要的信息干扰。

###### 5.5.3.2.2.4 规范接口接入

数字化预案共享、智能分析推荐及通用大模型接口适配功能，打破部门信息

壁垒，促进预案资源共享流通，同时依托智能分析与外部技术生态扩展系统能力。

其价值在于提升跨部门协同效率，推动应急管理生态创新，为应急数字化、智能

化发展注入新动能，涵盖预案共享、智能分析推荐、大模型能力接入等核心功能。

下发接口：支持从上级应急管理部门获取最新规范库（通过API 接口传输

<!-- PDF 第 344 页 -->
压缩包）

上报接口：自动上报本系统规则修改记录至监管平台，实现变更追溯。

支持对接三类规则库：

国家标准库：自动同步发布的规范文件（交通集团、地市）

行业标准库：通过API 接入专业领域规范

本地化规则库：允许自定义补充特殊场景规则

#### 5.5.3.3 预案流程模块化管理

##### 5.5.3.3.1 功能描述

模板库对各类应急预案进行模块化管理，包含先期处置、分级响应、组织指

挥等标准流程模块。完成预案管理子系统的升级整合，融合预案管理升级、预案

结构识别、问答助手、知识图谱生成及预案处理服务功能，实现预案智能化解析、

管理与应用，将手动操作转化为智能化流程，推动预案管理从基础数字化向智能

深度应用升级，为应急指挥及辅助决策提供更高效率的支撑能力，增强预案在应

急场景中的实用性，为高效响应奠定基础。

##### 5.5.3.3.2 功能点说明

###### 5.5.3.3.2.1 模板管理

此模型支持从应急预案中提取核心要素，如预案级别、预案类型、适用范围

等。通过快速解析预案文本，具体还可拆分为多个模块，包括先期处置、分级响

应、组织指挥、应急处置、保障行动、信息发布、响应中止、后期处理等，每个

模块可单独定义、存储，为后续的管理和应用提供数据支持。

###### 5.5.3.3.2.2 预案场景管理

预案可根据场景，进行预案结构识别，借助AI 模型，对预案文本进行全方

位结构化解析与关键信息提取。涵盖预案要素、预警响应条件、应急响应条件、

响应措施、单位职责等多方面信息抽取。抽取后的信息支持结构化存储与管理，

为后续预案的管理、应用、指挥决策以及精细化职责落实等提供坚实的数据与信

息支撑。

<!-- PDF 第 345 页 -->
###### 5.5.3.3.2.3 预案模块生成与调整

具备版本管理功能，支持管理员根据预案实际人员的变动，及演练或复盘的

结果定期优化预案模块化内容。每次更新会保留历史版本，以便在特殊情况下追

溯预案变化。

###### 5.5.3.3.2.4 模板应用

支持在生成专项预案时按需组合不同模块，实现预案内容的灵活定制。提供

可视化编制工具，支持预案的可视化编辑，流程图与表格混合编辑，支持关联人

员组织机构及已有的应急资源。支持构建“风险场景-预案模板-处置方案”。

#### 5.5.3.4 模型微调与专项预案生成

##### 5.5.3.4.1 功能描述

使用开源大语言模型，基于已有预案和预案标准指导意见规范库进行微调，

支持系统更好的识别拆解符合不同情境的应急预案。系统具备情境自适应功能，

模型可以根据事件特点完成预案的数字化，选择对应的预案条目并完成预案的数

字化支撑预案的应急指挥使用，同时系统支持多轮迭代微调，结合实际反馈不断

优化预案。

##### 5.5.3.4.2 功能点说明

###### 5.5.3.4.2.1 开源模型微调

基于开源大语言模型（如智谱ChatGLM、阿里Qwen 等），结合预案模板

库和规则规范库的数据进行提示词工程及抽取识别微调，使模型能够更好的抽取

预案要素，更好的将专项预案用于事件的处置。

###### 5.5.3.4.2.2 情境自适应生成

模型在生成专项预案时，能够根据事件属性（如事件类型、严重程度、责任

部门）自动选择合适的模板模块和规范子集。

###### 5.5.3.4.2.3 自适应语言风格

支持根据综合预案、专项预案、现场处置方案等不同的预案类型，按需求调

整生成预案的语言风格（如通用语言、专业术语、指令式等），以适应不同的应

用场景和人员。

<!-- PDF 第 346 页 -->
###### 5.5.3.4.2.4 多轮生成与反馈学习

支持对抽取生成的预案进行多轮优化，支持手动修改并保存，并将每轮生成

后的信息抽取反馈用于模型的微调和再训练，确保预案内容的逐步优化。

#### 5.5.3.5 自动化流程管理

##### 5.5.3.5.1 功能描述

自动化流程管理模块负责将生成的预案与其他业务系统对接，实现应急任务

的闭环管理。系统支持自动化通知和任务调度功能，自动向相关责任单位推送任

务、设置跟进提醒和反馈监控。同时支持与GIS、实时监控系统对接，为决策者

提供地理信息或视频流数据，增强应急指挥的决策效率。

##### 5.5.3.5.2 功能点说明

###### 5.5.3.5.2.1 任务对接与通知

将系统中的数字化预案将自动推送给相应责任部门，并可根据任务要求根据

不同阶段，设置计划时间轴。支持对接通知系统，推送提醒和实时进度反馈。

###### 5.5.3.5.2.2 任务闭环管理

具备任务闭环管理功能，支持全程跟踪任务执行情况，包括任务状态更新、

完成确认、反馈收集等，确保预案的全面落实。

###### 5.5.3.5.2.3 地图数据信息接入与视频监控数据接入

在预案执行过程中提供地理位置信息和实时视频流数据支持，为应急指挥提

供实时情报。

###### 5.5.3.5.2.4 任务绩效评估与报告

系统自动记录每次预案执行的全过程，并生成执行报告供后续分析和优化使

用。

#### 5.5.3.6 应急模拟演练

应急模拟演练子系统旨在帮助厅及下属单位通过虚拟或现场模拟的方式，验

证和提高预案的有效性和操作性，属于新建系统。通过提供演练设计、过程管理、

效果评估等一系列功能，以便在不同场景中进行高仿真度的应急响应训练，从而

<!-- PDF 第 347 页 -->
提升团队应急处理能力和配合效率。系统通过对预案的桌面推演能力，检验各级

单位和一线执法人员事故处置应对的时效性、规范性、专业性，以及对应急指挥

系统的使用效能，保障战时高效响应、规范处置，全面提升应对各类突发事件的

能力和水平，达到磨合机制、检验预案、锻炼队伍、提高应急处置能力的关键作

用。

##### 5.5.3.6.1 演练设计管理

用于设计和管理应急演练的流程和内容，用户可以根据实际需求选择演练类

型、设置场景和流程，支持配置管理应急模拟演练方案，将丰富的安全应急知识

贯穿到演练流程当中，按照演练准备、组织动员、演练实施、总结评估的流程，

严格执行标准化流程；支持按照不同的业务类型、演练需求、演练目标和任务，

配置演练计划方案，确认演练参演人员队伍、演练流程及其他重要事项，并审核

演练工作方案及演练脚本。

###### 5.5.3.6.1.1 演练类型选择

支持多种不同场景和不同灾害类型的演练，按照演练准备、组织动员、演练

实施、总结评估的流程，严格执行标准化流程；支持按照不同的业务类型、演练

需求、演练目标和任务，配置演练计划方案，确认演练参演人员队伍、演练流程

及其他重要事项，并审核演练工作方案及演练脚本。

###### 5.5.3.6.1.2 场景配置

支持根据脚本及方案配置模拟演练场景，包括演练基本信息、演练脚本信息、

组织结构及人员信息、应急处置流程信息、演练方案预案信息等。从而高效地构

建模拟演练计划。

###### 5.5.3.6.1.3 流程编排

支持创建和编辑演练脚本方案，帮助演练组织单位设计事件推演逻辑，构建

动态、多分支的演练情节。演练脚本信息包括演练情景信息、事件链及关键节点

触发条件、关联文件、关联任务等信息。演练情景信息既包括事发时的事故背景

及说明材料，也包括各阶段下的新增情景事件，支持根据时间变化，对演练情景

进行分阶段的细致规划，提升演练模拟的灵活性。事件链按照时间进程，串联整

个演练流程、划分关键阶段，并支持配置各阶段事件出现的触发条件。关联文件

<!-- PDF 第 348 页 -->
包括文本类文件，也包括图片、语音、视频等多类型文件材料。关联任务即各阶

段导调员需发布的特殊任务等。

###### 5.5.3.6.1.4 角色分配

根据演练脚本及应急预案，配置好演练组织结构及参演人员角色信息，如导

调组、执行组、评估组、观摩组等，明确权责关系，从而支持为不同分组下的人

员进行权限配置。参演人员信息能够直接关联指挥系统组织通讯录信息，便于一

键发布应急演练通知。

###### 5.5.3.6.1.5 时间线设定

用户可根据不同的演练步骤设定演练的时间节点，确保每个步骤在预定时间

内进行，促使演练人员在规定时间内完成规定动作，提高演练的效率。

##### 5.5.3.6.2 演练过程控制

提供演练过程中的实时控制和监测功能，帮助演练指挥人员在演练过程中实

时调度和监控每个步骤的执行情况。

###### 5.5.3.6.2.1 实时监控

系统实时显示各步骤的状态和进度，标识完成、待执行、异常等状态。

###### 5.5.3.6.2.2 事件触发

可根据预设条件触发特定事件或情况，在真实的突发事件应急处置过程中，

往往会随着处置工作开展，出现新的突发事故，比如舆情事件发酵，新增人员伤

亡等。因此，为加强应急演练的真实性、有效性和灵活性，系统需能够支持导调

员在预设节点发布新增事件，作为原有突发事故的关联事故、衍生事故，从而升

级或调整应急演练级别，提升演练难度和丰富度。

###### 5.5.3.6.2.3 指挥调度

支持演练指挥员在演练过程中下达指令、调整任务、通知相关人员，保障演

练顺利进行，启动演练后，接收和查看演练脚本信息。在应急演练各阶段，查看

和接收导调员发布的新增事件、情景材料补充等信息，以时间线的形式展示演练

事故态势进展情况，帮助参演人员及时掌握事故进展和相关信息。

<!-- PDF 第 349 页 -->
###### 5.5.3.6.2.4 通信系统

提供内部通信功能，如即时消息、广播通知，系统能够接收来自其他协同参

演人员发布或专办的任务，查看任务详情，同时也可以反馈，可通过演练系统发

送图片、音频、文本等能力。

###### 5.5.3.6.2.5 日志记录

自动记录每个操作的时间、内容及执行人，为后续评估和复盘提供数据支持。

##### 5.5.3.6.3 应急响应模拟

在演练过程中模拟应急响应动作，系统根据预设的应急预案，指引参演人员

执行相应的响应操作，以此验证预案的可操作性和效果。

###### 5.5.3.6.3.1 智能应急推演决策链

系统自动提示或执行预设的响应动作，如疏散指示、救援物资调用、人员调

度等。

###### 5.5.3.6.3.2 资源调用

模拟调用各类应急资源，包括设备、人员、车辆等，检验资源分配的合理性。

###### 5.5.3.6.3.3 互动反馈

支持演练过程中的互动反馈，演练人员可在系统中报告发现的异常情况或需

要调整的资源需求。

###### 5.5.3.6.3.4 事件升级

在演练过程中，导调人员也可以在预设的时间节点或阶段，发布特定任务给

特定的参演单位或人员，能够有效模拟真实事件中的紧急情况，考验参演人员的

应急响应能力。当参演人员或单位处置步骤出现偏差时，也有助于指导或控制参

演人员的行动，推动应急演练流程顺利、持续进行。

##### 5.5.3.6.4 效果评估与反馈

对演练效果进行全面评估，并生成详细报告，结合评估指标和过程记录，支

持组织管理人员完成对整个演练过程的评估。能够自动集成系统已有的数据，如

情景问答得分、完成时间等信息，直接用户评估报告；其次，允许专家及评委填

写专家点评、参演人员表现、沟通协调情况等内容和打分，支持多种输入方式，

<!-- PDF 第 350 页 -->
包括文本输入、下拉菜单选择等。

###### 5.5.3.6.4.1 评分系统

实现事件整个应急处置过程的评估与总结，对事件处置前的报送效率、处置

过程中的及时性、研判分析有效性等进行分类和综合评估。结合事件接报效率和

上报内容规范、各任务组的响应效率和关键动作、报告内容完整性和格式规范性、

执法处置和调查规范性、情景问答准确性等，对演练过程、参演人员、参演组织、

整体效果进行评估打分。

###### 5.5.3.6.4.2 问题记录与分类

完成反馈和建议收集机制，允许参演人员、观摩人员提交他们对演练的看法

和建议，支持以问卷、文本形式收集参与人员和单位的反馈建议。

###### 5.5.3.6.4.3 数据分析

结合评估指标和过程记录，支持组织管理人员完成对整个演练过程的评估。

能够自动集成系统已有的数据，如情景问答得分、完成时间等信息，直接用户评

估报告；其次，允许专家及评委填写专家点评、参演人员表现、沟通协调情况等

内容和打分，支持多种输入方式，包括文本输入、下拉菜单选择等。

生成的评估报告具有保存和导出功能，允许评估人员将报告保存为不同格式

（如PDF、Word 等），便于分享和存档。

###### 5.5.3.6.4.4 改进建议

系统支持以问卷、文本形式收集参与人员和单位的反馈建议信息，支持针对

本次演练的准备情况、演练策划与设计情况、演练文件编制情况、演练保障情况、

演练实施情况进行评估，并提出优化提升建议。

###### 5.5.3.6.4.5 演练总结会议

支持组织线上/线下的演练总结会，系统可协助汇总关键数据、展示回放，

以便参演人员全面复盘和讨论。

##### 5.5.3.6.5 演练数据管理

提供演练数据的管理和存储功能，将所有演练相关的计划、执行、评估等数

据系统化归档，方便后续查询和调用。

<!-- PDF 第 351 页 -->
###### 5.5.3.6.5.1 预案推演资产沉淀体系

自动将每次演练的数据存档，包括演练方案、执行记录、评估报告等。同时，

设立独立的演练数据存储区域，与真实数据存储完全隔离。在演练模式下，所有

数据的采集、存储和处理都限定在该区域内，不影响真实数据的完整性和准确性。

在数据采集环节，对演练数据添加特定标识，以便于后续区分和管理。在数据存

储方面，采用不同的数据库表或数据文件夹进行分类存储，防止数据混淆。

###### 5.5.3.6.5.2 全景演练复盘溯源

在模拟演练结束后，能够将演练全过程的关键信息、角色、动作整合成一个

连贯的回放记录。

还能够通过时间轴的形式，允许用户自由地回溯到演练过程中的任何特定时

刻，生成演练过程的快照和录像，进行详细的观察和分析，便于演练结束后的复

盘和总结。

通过将演练回放和总结分享给相关人员，作为培训材料可以被更广泛地传播

和学习，从而提升整个组织应对紧急情况的能力。

###### 5.5.3.6.5.2.1 跨平台数据赋能

支持演练数据导出为Excel、PDF 等格式，便于管理人员备份和使用。

###### 5.5.3.6.5.2.2 多维度演练效能诊断

结合演练过程记录的数据，支持生成对演练情况的评价信息。对参演表现包

括任务响应效率、团队协作、情景问答等多个维度信息进行评估，并根据评估结

果提供针对性的改进建议。

###### 5.5.3.6.5.2.3 分级防控准入机制

对演练数据管理设置权限控制，确保敏感数据的安全性，避免未经授权的访

问或修改。

###### 5.5.3.6.5.3 系统配置与管理

提供演练子系统的配置和管理功能，包括用户权限配置、演练模板管理、数

据备份等，保障系统的正常运行。

<!-- PDF 第 352 页 -->
###### 5.5.3.6.5.3.1 多级安全防控矩阵

支持系统管理员配置不同用户的权限，确保各用户只能访问和操作其授权范

围内的内容。

###### 5.5.3.6.5.3.2 标准化应急响应模板库

支持将已编辑和发布的演练方案一键转换为模板并进行存档。系统将自动提

取方案中的关键信息，包括演练场景、角色分工、流程任务等模块内容，并将其

保存为独立的模板文件。这些模板将被分类存储在模板库中，供用户在未来创建

新的演练方案时快速调用和复用。

###### 5.5.3.6.5.3.3 全周期操作审计轨迹

系统自动记录每个用户的操作日志，便于后续查询和追溯。

###### 5.5.3.6.5.3.4 业务连续性保障

支持系统数据的定期备份和恢复功能，确保演练数据的安全性和系统的可靠

性。

###### 5.5.3.6.5.3.5 全域协同预警通告

提供系统内部通知功能，及时向用户推送系统更新、维护信息等。

##### 5.5.3.6.6 预案评估与优化

对系统内已智能提取的数字化预案进行人工评估、调整和优化，确保预案内

容的有效性和适用性。系统内置智能分析模块，并为评估人员提供自动化改进建

议，形成评估、优化、反馈的闭环管理机制，持续提升预案质量。

###### 5.5.3.6.6.1 评估指标设置

建立专项预案的评估标准，包括响应时间、适应性、操作简便性、资源需求

匹配度等，供评估人员参考，可根据实际需求自定义评估指标及权重。

系统内置预案评估通用指标库，覆盖预案结构完整性、内容准确性、流程清

晰度、角色匹配度、数据支撑性等；

支持创建自定义指标库，便于交通部门根据本地管理重点设定专项评估指

标；

指标项支持按主题分类（如执行性、协调性、科学性、时效性、安全性等）

<!-- PDF 第 353 页 -->
或业务阶段分类（启动、响应、处置、恢复等）。

###### 5.5.3.6.6.2 自动化分析与提示

通过系统算法、规则引擎与数据驱动手段，对应急预案文本、流程结构、历

史执行记录和演练反馈进行全面分析，自动识别潜在问题、评估预案质量，并生

成针对性的改进建议与提示，提升预案管理的智能化、专业化与闭环性。

###### 5.5.3.6.6.3 人工优化调整配置

评估人员根据评估结果结合自身经验手动对预案中的评估结果及内容进行

局部调整，支持对预案文本、流程、附件等进行修改，系统自动记录修改痕迹。

###### 5.5.3.6.6.4 反馈机制

将评估和优化的结果反馈至预案中，持续优化预案的准确性和预案质量，形

成“评估-优化”的闭环。

###### 5.5.3.6.6.5 优化历史追溯

每次优化都记录在案，评估人员可以追溯每个预案的历史修改记录，以便分

析优化趋势和效果。
`,Gs={"5.5.3.1":"plan-design-classify","5.5.3.2":"plan-design-standard","5.5.3.3":"plan-design-module","5.5.3.4":"plan-design-model","5.5.3.5":"plan-design-workflow","5.5.3.6":"plan-design-drill"},ge=new Map(rt.map(o=>[o.key,o])),_e=he(Ns,4),Pn=_e.find(o=>o.key==="overview"),Hs=_e.filter(o=>o.key!=="overview"),An=[];Pn&&An.push({key:"plan-design-overview",title:"概述",sourceRef:Pn.sourceRef||"5.5.3",level:3,component:Cn(Sn(Pn,ge.get("overview")),"PlanDesignHtmlSection"),searchText:Pn.searchText});for(const o of Hs){const k=Gs[o.sourceRef];k&&An.push({key:k,title:o.title,sourceRef:o.sourceRef,level:4,component:Cn(Sn(o,ge.get(o.title)),"PlanDesignHtmlSection"),searchText:o.searchText})}const oe=[{key:"design",sourceRef:"5.5.3",title:"应急预案管理子系统设计",level:3,targetKey:"plan-design-overview",description:"初步设计 5.5.3 应急预案管理子系统设计原文，标题、正文与标点保持与原文一致。",items:An}],Ws=An,ke=`# 3.4 智能应急预案管理子系统

### 3.4.1 功能总图
图3.4-1 智能应急预案管理子系统功能总图
### 3.4.2 功能描述表
表3.4-1 智能应急预案管理子系统功能描述表

| 编号 | 模块名称 | 模块功能简述 | 主要功能点 |
| --- | --- | --- | --- |
| 1 | 应急分类库管理 | 构建预案分类体系、维度规则、情景样本库，实现预案标准化管理 | 分类层级管理、维度定义、情景样本库 |
| 2 | 规则规范库管理 | 应急标准、行业规范、流程制度统一存储、版本管理与子集调用 | 规范存储、多版本管理、子集分配、接口接入 |
| 3 | 预案流程模块化管理 | 预案拆解为模块，支持可视化拼装、编辑、复用与版本回溯 | 模板管理、场景管理、模块生成、模板应用 |
| 4 | 模型微调与 | 基于大模型实现预案智能生成、场 | 模型微调、情境自适应、语言 |

<!-- PDF 第 279 页 -->

| 编号 | 模块名称 | 模块功能简述 | 主要功能点 |
| --- | --- | --- | --- |
|  | 专项预案生成 | 景自适应、风格切换 | 风格适配、多轮优化 |
| 5 | 自动化流程管理 | 基于预案自动生成任务、通知、跟踪、联动与绩效评估 | 任务对接、闭环管理、数据接入、绩效评估 |
| 6 | 应急模拟演练 | 支持演练设计、过程控制、响应模拟、效果评估与数据沉淀 | 演练设计、过程控制、响应模拟、效果评估、演练数据管理 |
| 7 | 预案评估与优化 | 建立指标体系、自动分析、人工调整、反馈闭环，持续迭代预案 | 评估指标、自动分析、人工优化、反馈机制、历史追溯 |

<!-- PDF 第 280 页 -->

### 3.4.3 业务角色一览表
表3.4-2 智能应急预案管理子系统业务角色一览表

| 机构 | 业务角色 | 拥有权限 |
| --- | --- | --- |
| 政务服务和应急指挥中心 | 总管理员 | 1. 应急分类库管理：全功能维护（分类、维度、情景样本）2. 预案流程模块化管理：全权限配置（模板、场景、模块、版本）3. 规则规范库管理：全流程管理（存储、版本、子集、接口）4. 模型微调与专项预案生成：全权限操作（模型训练、自适应生成）5. 自动化流程管理：全配置权限（任务通知、闭环、接口对接）6. 应急模拟演练：全流程管控（设计、过程、评估、数据管理）7. 预案评估与优化：全权限管理（指标、分析、优化、追溯） |
|  | 政急中心科室值班人员 | 1. 应急分类库管理：查看、查询、检索2. 预案流程模块化管理：查看、调用、应用3. 规则规范库管理：查看、引用4. 模型微调与专项预案生成：使用、生成、导出5. 自动化流程管理：发起流程、提交任务、反馈状态6. 应急模拟演练：参与演练、反馈结果、填写记录7. 预案评估与优化：查看评估、提交建议、确认优化 |
|  | 政急中心值班室值班人员 | 1. 应急分类库管理：查看、查询、检索2. 预案流程模块化管理：查看、调用、应用3. 规则规范库管理：查看、引用4. 模型微调与专项预案生成：使用、生成、导出5. 自动化流程管理：发起流程、提交任务、反馈状态6. 应急模拟演练：参与演练、反馈结果、 |

<!-- PDF 第 281 页 -->

| 机构 | 业务角色 | 拥有权限 |
| --- | --- | --- |
|  |  | 填写记录7. 预案评估与优化：查看评估、提交建议、确认优化 |
|  | 技术保障人员 | 1. 应急分类库管理：仅查看、数据维护2. 预案流程模块化管理：系统配置、接口调试3. 规则规范库管理：存储维护、版本管理4. 模型微调与专项预案生成：环境保障、模型部署维护5. 自动化流程管理：流程引擎维护、异常处理6. 应急模拟演练：系统保障、技术支撑7. 预案评估与优化：数据支撑、系统运维 |
|  | 普通用户 | 1. 应急分类库管理：仅查看公开信息2. 预案流程模块化管理：仅查看公开预案3. 规则规范库管理：仅查看公开规范4. 模型微调与专项预案生成：仅查看生成结果5. 自动化流程管理：仅查看公开流程6. 应急模拟演练：仅查看公开演练信息7. 预案评估与优化：仅查看公开评估报告 |
| 广东省公路事务中心、广东省航道事务中心、省交通集团、综合运输处、海峡办、厅科技处、公路运营管理处 | 管理员 | 1. 预案管理：本单位预案全权限维护、配置、调用2. 演练管理：发起演练、组织参与、上报结果3. 预案评估：参与评估、反馈意见、上报优化 |
|  | 普通用户 | 1. 预案管理：仅查看本单位预案2. 演练管理：参与演练、查看信息3. 预案评估：仅查看评估结果 |
| 各地市交通运输局、各地市公路事务中心 | 管理员 | 1. 预案管理：本市/辖区预案全权限维护、配置、管理2. 演练管理：组织演练、过程管控、结果上报3. 预案评估：参与评估、整改落实、反馈优化 |
|  | 普通用户 | 1. 预案管理：仅查看本辖区相关预案2. 演练管理：参与演练、查看信息 |

<!-- PDF 第 282 页 -->

| 机构 | 业务角色 | 拥有权限 |
| --- | --- | --- |
|  |  | 3. 预案评估：仅查看评估结果 |

### 3.4.4 详细功能
#### 3.4.4.1 应急分类库管理
应急分类库管理用于构建全省交通运输行业统一的应急预案分类体系、维度规则与
情景样本库，实现预案结构化、分类标准化、检索智能化、情景可复用，为预案自动匹
配、生成、演练提供基础支撑。
图3.4-2 应急分类库管理

<!-- PDF 第 283 页 -->

##### 3.4.4.1.1 分类层级管理信息
分类层级管理信息提供应急预案的多级分类维护、文件管理、目录解析、标签标注
与知识库关联，形成标准化预案文档管理体系。
| 模块 | 功能点 |
| --- | --- |
| 分类层级管理信息 | 应急预案可视化图表信息 |
|  | 自定义预案多级分类信息 |
|  | 预案文件信息 |
|  | 文件查询检索结果信息 |
|  | 文件预览缓存信息 |
|  | 文件内目录信息 |
|  | 文件标签设置信息 |
|  | 文件知识库信息 |

###### 3.4.4.1.1.1 功能点
###### 3.4.4.1.1.1.1 应急预案可视化图表信息
功能点描述：提供预案内容的可视化展示，包括结构化树形图、关系图、节点信息
展示等。支持展示预案的编制依据、适用范围、组织体系、职责分工等内容，通过图谱
方式呈现各要素之间的关联关系。支持节点点击查看详细信息，并与右侧基本信息联动
展示。
核心字段：预案名称、预案类型、编制单位、生效时间。
###### 3.4.4.1.1.1.1.1 输入
用户或系统发起应急预案可视化图表信息相关操作（提供预案内容的可视化展示，
包括结构化树形图、关系图、节点信息展示等。支持展示预案的编制依据、适用范围、

<!-- PDF 第 284 页 -->

组织体系、职责分工等内容，通过图谱方式呈现各要素之间的关联关系。支持节点点击
查看详细信息，并与右侧基本信息联动展示），提交预案名称、预案类型、编制单位、
生效时间等信息，系统同步校验用户的操作权限与参数合规性，触发应急预案可视化图
表信息处理流程。
###### 3.4.4.1.1.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回预案名称、预案
类型、编制单位、生效时间等核心字段信息，输出应急预案可视化图表信息查询展示结
果；若操作失败，返回具体错误原因，如权限不足、预案名称参数不合法、应急预案可
视化图表信息处理失败等。
###### 3.4.4.1.1.1.2 自定义预案多级分类信息
功能点描述：支持预案分类的多级结构配置，可按灾害类型、业务领域、管理单位
等维度进行分层管理。每一层级支持新增、编辑、删除和排序。分类下可关联预案文件
或预案实例，每个子类可继续细分至具体事件类型。
核心字段：预案名称、预案类型、编制单位、生效时间。
###### 3.4.4.1.1.1.2.1 输入
用户或系统发起自定义预案多级分类信息相关操作（支持预案分类的多级结构配
置，可按灾害类型、业务领域、管理单位等维度进行分层管理。每一层级支持新增、编
辑、删除和排序。分类下可关联预案文件或预案实例，每个子类可继续细分至具体事件
类型），提交预案名称、预案类型、编制单位、生效时间等信息，系统同步校验用户的
操作权限与参数合规性，触发自定义预案多级分类信息处理流程。

<!-- PDF 第 285 页 -->

###### 3.4.4.1.1.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回预案名称、预案
类型、编制单位、生效时间等核心字段信息，输出自定义预案多级分类信息文件处理结
果及管理维护结果；若操作失败，返回具体错误原因，如权限不足、预案名称参数不合
法、自定义预案多级分类信息配置异常等。
###### 3.4.4.1.1.1.3 预案文件信息
功能点描述：提供预案文件的基础信息管理，支持文件上传、版本管理、信息维护。
支持记录预案名称、类型、版本、编制单位、生效时间等信息，并与文件实体进行关联。
核心字段：预案名称、预案类型、编制单位、生效时间。
###### 3.4.4.1.1.1.3.1 输入
用户或系统发起预案文件信息相关操作（提供预案文件的基础信息管理，支持文件
上传、版本管理、信息维护。支持记录预案名称、类型、版本、编制单位、生效时间等
信息，并与文件实体进行关联），提交预案名称、预案类型、编制单位、生效时间等信
息，系统同步校验用户的操作权限与参数合规性，触发预案文件信息处理流程。
###### 3.4.4.1.1.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回预案名称、预案
类型、编制单位、生效时间等核心字段信息，输出预案文件信息文件处理结果及管理维
护结果；若操作失败，返回具体错误原因，如权限不足、预案名称参数不合法、预案文
件信息文件处理失败等。

<!-- PDF 第 286 页 -->

###### 3.4.4.1.1.1.4 文件查询检索结果信息
功能点描述：提供预案文件的查询检索功能，支持按关键词、分类、时间范围、预
案类型等条件进行筛选。查询结果以列表形式展示，支持查看详情、下载文件及跳转定
位。
核心字段：预案名称、预案类型、编制单位、生效时间。
###### 3.4.4.1.1.1.4.1 输入
用户或系统发起文件查询检索结果信息相关操作（提供预案文件的查询检索功能，
支持按关键词、分类、时间范围、预案类型等条件进行筛选。查询结果以列表形式展示，
支持查看详情、下载文件及跳转定位），提交预案名称、预案类型、编制单位、生效时
间等信息，系统同步校验用户的操作权限与参数合规性，触发文件查询检索结果信息处
理流程。
###### 3.4.4.1.1.1.4.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回预案名称、预案
类型、编制单位、生效时间等核心字段信息，输出文件查询检索结果信息查询展示结果
及文件处理结果；若操作失败，返回具体错误原因，如权限不足、预案名称参数不合法、
文件查询检索结果信息文件处理失败等。
###### 3.4.4.1.1.1.5 文件预览缓存信息
功能点描述：支持预案文件在线预览，并通过缓存机制提升访问效率。系统对已预
览文件进行缓存处理，减少重复加载，提高系统响应速度和用户体验。
核心字段：预案名称、预案类型、编制单位、生效时间。

<!-- PDF 第 287 页 -->

###### 3.4.4.1.1.1.5.1 输入
用户或系统发起文件预览缓存信息相关操作（支持预案文件在线预览，并通过缓存
机制提升访问效率。系统对已预览文件进行缓存处理，减少重复加载，提高系统响应速
度和用户体验），提交预案名称、预案类型、编制单位、生效时间等信息，系统同步校
验用户的操作权限与参数合规性，触发文件预览缓存信息处理流程。
###### 3.4.4.1.1.1.5.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回预案名称、预案
类型、编制单位、生效时间等核心字段信息，输出文件预览缓存信息查询展示结果及文
件处理结果；若操作失败，返回具体错误原因，如权限不足、预案名称参数不合法、文
件预览缓存信息文件处理失败等。
###### 3.4.4.1.1.1.6 文件内目录信息
功能点描述：提供预案文件目录结构管理，支持按章节自动解析或手动维护目录。
目录支持层级展示，点击目录可定位到对应内容位置。
核心字段：预案名称、预案类型、编制单位、生效时间。
###### 3.4.4.1.1.1.6.1 输入
用户或系统发起文件内目录信息相关操作（提供预案文件目录结构管理，支持按章
节自动解析或手动维护目录。目录支持层级展示，点击目录可定位到对应内容位置），
提交预案名称、预案类型、编制单位、生效时间等信息，系统同步校验用户的操作权限
与参数合规性，触发文件内目录信息处理流程。

<!-- PDF 第 288 页 -->

###### 3.4.4.1.1.1.6.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回预案名称、预案
类型、编制单位、生效时间等核心字段信息，输出文件内目录信息查询展示结果及文件
处理结果；若操作失败，返回具体错误原因，如权限不足、预案名称参数不合法、文件
内目录信息文件处理失败等。
###### 3.4.4.1.1.1.7 文件标签设置信息
功能点描述：支持为预案文件设置标签，标签用于分类检索和快速筛选。支持多标
签配置及标签组合使用，标签可按类型进行管理。
核心字段：预案名称、预案类型、编制单位、生效时间。
###### 3.4.4.1.1.1.7.1 输入
用户或系统发起文件标签设置信息相关操作（支持为预案文件设置标签，标签用于
分类检索和快速筛选。支持多标签配置及标签组合使用，标签可按类型进行管理），提
交预案名称、预案类型、编制单位、生效时间等信息，系统同步校验用户的操作权限与
参数合规性，触发文件标签设置信息处理流程。
###### 3.4.4.1.1.1.7.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回预案名称、预案
类型、编制单位、生效时间等核心字段信息，输出文件标签设置信息查询展示结果及文
件处理结果；若操作失败，返回具体错误原因，如权限不足、预案名称参数不合法、文
件标签设置信息配置异常等。

<!-- PDF 第 289 页 -->

###### 3.4.4.1.1.1.8 文件知识库信息
功能点描述：支持将预案文件纳入知识库管理，进行统一存储与调用。支持预案结
构化解析，将内容拆分为知识节点，便于查询和复用。支持与其他业务模块进行关联调
用。
核心字段：预案名称、预案类型、编制单位、生效时间。
###### 3.4.4.1.1.1.8.1 输入
用户或系统发起文件知识库信息相关操作（支持将预案文件纳入知识库管理，进行
统一存储与调用。支持预案结构化解析，将内容拆分为知识节点，便于查询和复用。支
持与其他业务模块进行关联调用），提交预案名称、预案类型、编制单位、生效时间等
信息，系统同步校验用户的操作权限与参数合规性，触发文件知识库信息处理流程。
###### 3.4.4.1.1.1.8.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回预案名称、预案
类型、编制单位、生效时间等核心字段信息，输出文件知识库信息查询展示结果及文件
处理结果；若操作失败，返回具体错误原因，如权限不足、预案名称参数不合法、文件
知识库信息文件处理失败等。
##### 3.4.4.1.2 维度定义信息
维度定义信息用于配置预案影响等级、响应级别、多维度分类规则，统一预案评估
与调用标准。

<!-- PDF 第 290 页 -->

| 模块 | 功能点 |
| --- | --- |
| 维度定义信息 | 设置预案文件影响等级类别定义规则信息 |
|  | 设置预案文件应急响应等级信息 |
|  | 制度多维度类别定制预案文件信息 |

###### 3.4.4.1.2.1 功能点
###### 3.4.4.1.2.1.1 设置预案文件影响等级类别定义规则信息
功能点描述：用于配置预案文件的影响等级分类规则，支持维护影响等级字典（如
一般、较大、重大、特别重大）。支持定义等级顺序、启用状态及适用范围。支持在预
案创建或编辑时进行选择，并作为后续分析、筛选及处置参考依据。支持对不同等级进
行统一管理和调整。
核心字段：字典项名称、字典项编码。
###### 3.4.4.1.2.1.1.1 输入
用户或系统发起设置预案文件影响等级类别定义规则信息相关操作（用于配置预案
文件的影响等级分类规则，支持维护影响等级字典（如一般、较大、重大、特别重大）。
支持定义等级顺序、启用状态及适用范围。支持在预案创建或编辑时进行选择，并作为
后续分析、筛选及处置参考依据。支持对不同等级进行统一管理和调整），提交字典项
名称、字典项编码等信息，系统同步校验用户的操作权限与参数合规性，触发设置预案
文件影响等级类别定义规则信息处理流程。
###### 3.4.4.1.2.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回字典项名称、字
典项编码等核心字段信息，输出设置预案文件影响等级类别定义规则信息统计分析结果

<!-- PDF 第 291 页 -->

及文件处理结果；若操作失败，返回具体错误原因，如权限不足、字典项名称参数不合
法、设置预案文件影响等级类别定义规则信息配置异常等。
###### 3.4.4.1.2.1.2 设置预案文件应急响应等级信息
功能点描述：用于配置应急响应等级分类（如Ⅰ级、Ⅱ级、Ⅲ级、Ⅳ级响应）。支
持对应急响应级别进行字典化管理，维护等级顺序及状态。支持在预案信息中进行关联
选择，并用于响应流程匹配和数据统计。
核心字段：字典项名称、字典项编码。
###### 3.4.4.1.2.1.2.1 输入
用户或系统发起设置预案文件应急响应等级信息相关操作（用于配置应急响应等级
分类（如Ⅰ级、Ⅱ级、Ⅲ级、Ⅳ级响应）。支持对应急响应级别进行字典化管理，维护等
级顺序及状态。支持在预案信息中进行关联选择，并用于响应流程匹配和数据统计），
提交字典项名称、字典项编码等信息，系统同步校验用户的操作权限与参数合规性，触
发设置预案文件应急响应等级信息处理流程。
###### 3.4.4.1.2.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回字典项名称、字
典项编码等核心字段信息，输出设置预案文件应急响应等级信息统计分析结果及文件处
理结果；若操作失败，返回具体错误原因，如权限不足、字典项名称参数不合法、设置
预案文件应急响应等级信息配置异常等。
###### 3.4.4.1.2.1.3 制度多维度类别定制预案文件信息
功能点描述：基于多维度字典配置，对预案文件进行结构化属性定义。支持按责任

<!-- PDF 第 292 页 -->

部门、时间敏感性、触发条件、事件来源、气象影响、交通通断类型、资源依赖、是否
跨区域、是否需专家参与等维度进行配置。各维度支持独立维护字典项，并在预案录入
时进行选择或组合使用，形成完整的预案属性结构。
核心字段：字典项名称、字典项编码。
###### 3.4.4.1.2.1.3.1 输入
用户或系统发起制定多维度类别定制预案文件信息相关操作（基于多维度字典配
置，对预案文件进行结构化属性定义。支持按责任部门、时间敏感性、触发条件、事件
来源、气象影响、交通通断类型、资源依赖、是否跨区域、是否需专家参与等维度进行
配置。各维度支持独立维护字典项，并在预案录入时进行选择或组合使用，形成完整的
预案属性结构），提交字典项名称、字典项编码等信息，系统同步校验用户的操作权限
与参数合规性，触发制度多维度类别定制预案文件信息处理流程。
###### 3.4.4.1.2.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回字典项名称、字
典项编码等核心字段信息，输出制度多维度类别定制预案文件信息文件处理结果及管理
维护结果；若操作失败，返回具体错误原因，如权限不足、字典项名称参数不合法、制
度多维度类别定制预案文件信息配置异常等。
##### 3.4.4.1.3 情景样本库信息
情景样本库信息汇聚历史突发事件、典型案例、处置流程，形成可复用情景模板，
支撑预案推演与智能匹配。

<!-- PDF 第 293 页 -->

| 模块 | 功能点 |
| --- | --- |
| 情景样本库信息 | 历史情景样本库 |
|  | 事件案例数据归类 |

###### 3.4.4.1.3.1 功能点
###### 3.4.4.1.3.1.1 历史情景样本库
功能点描述：创建历史样本库，基于事件条件进行创建。支持按应急响应等级、区
域、灾害类型、交通情况、事故等级等条件进行筛选查询。
核心字段：情景名称、应急响应等级、应急响应区域、灾害类型、交通通断情况、
交通情况、受伤人数、死亡人数。
###### 3.4.4.1.3.1.1.1 输入
用户或系统发起历史情景样本库相关操作（创建历史样本库，基于事件条件进行创
建。支持按应急响应等级、区域、灾害类型、交通情况、事故等级等条件进行筛选查询），
提交情景名称、应急响应等级、应急响应区域、灾害类型、交通通断情况、交通情况、
受伤人数、死亡人数等信息，系统同步校验用户的操作权限与参数合规性，触发历史情
景样本库处理流程。
###### 3.4.4.1.3.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回情景名称、应急
响应等级、应急响应区域、灾害类型、交通通断情况、交通情况、受伤人数、死亡人数
等核心字段信息，输出历史情景样本库查询展示结果；若操作失败，返回具体错误原因，
如权限不足、情景名称参数不合法、历史情景样本库配置异常等。

<!-- PDF 第 294 页 -->

###### 3.4.4.1.3.1.2 事件案例数据归类
功能点描述：根据历史样本库创建的条件，把应急事件子系统中产生的事件归档到
此处展示，归为一类的数据。归类后的数据自动进入情景样本库，用于后续检索和模型
使用。
核心字段：交通通断情况、交通情况、事故级别。
###### 3.4.4.1.3.1.2.1 输入
用户或系统发起事件案例数据归类相关操作（根据历史样本库创建的条件，把应急
事件子系统中产生的事件归档到此处展示，归为一类的数据。归类后的数据自动进入情
景样本库，用于后续检索和模型使用），提交交通通断情况、交通情况、事故级别等信
息，系统同步校验用户的操作权限与参数合规性，触发事件案例数据归类处理流程。
###### 3.4.4.1.3.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回交通通断情况、
交通情况、事故级别等核心字段信息，输出事件案例数据归类查询展示结果；若操作失
败，返回具体错误原因，如权限不足、交通通断情况参数不合法、事件案例数据归类配
置异常等。
#### 3.4.4.2 预案流程模块化管理
将应急预案拆解为标准化模块，实现预案文本解析、要素提取、场景化管理、模块
化拼装与可视化编制，支撑预案快速生成、复用与调整。

<!-- PDF 第 295 页 -->

图3.4-3 预案流程模块化管理
##### 3.4.4.2.1 模板管理信息
对预案模板进行统一解析、要素提取、模块化存储与自定义配置，形成可复用的预
案组件库。

| 模块 | 功能点 |
| --- | --- |
| 模板管理信息 | 预案文本解析结果信息 |
|  | 预案要素提取结果信息 |
|  | 预案模块存储数据 |
|  | 预案模块自定义信息 |

<!-- PDF 第 296 页 -->

###### 3.4.4.2.1.1 功能点
###### 3.4.4.2.1.1.1 预案文本解析结果信息
功能点描述：基于模板中配置的提示词，对预案原文进行结构化解析。按章节或模
块逐段提取内容，生成对应解析结果。支持按模板版本区分解析结果，支持重复解析与
结果覆盖，记录解析过程及状态。
核心字段：预案名称、更新时间。
###### 3.4.4.2.1.1.1.1 输入
用户或系统发起预案文本解析结果信息相关操作（基于模板中配置的提示词，对预
案原文进行结构化解析。按章节或模块逐段提取内容，生成对应解析结果。支持按模板
版本区分解析结果，支持重复解析与结果覆盖，记录解析过程及状态），提交预案名称、
更新时间等信息，系统同步校验用户的操作权限与参数合规性，触发预案文本解析结果
信息处理流程。
###### 3.4.4.2.1.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回预案名称、更新
时间等核心字段信息，输出预案文本解析结果信息生成结果及管理维护结果；若操作失
败，返回具体错误原因，如权限不足、预案名称参数不合法、预案文本解析结果信息配
置异常等。
###### 3.4.4.2.1.1.2 预案要素提取结果信息
功能点描述：根据模板中定义的关键要素（如预案级别、预案类型、适用范围等），
从解析结果中提取对应字段，形成结构化要素数据。支持要素字段扩展，支持多版本要

<!-- PDF 第 297 页 -->

素对比。
核心字段：预案名称、更新时间、适用类型。
###### 3.4.4.2.1.1.2.1 输入
用户或系统发起预案要素提取结果信息相关操作（根据模板中定义的关键要素（如
预案级别、预案类型、适用范围等），从解析结果中提取对应字段，形成结构化要素数
据。支持要素字段扩展，支持多版本要素对比），提交预案名称、更新时间、适用类型
等信息，系统同步校验用户的操作权限与参数合规性，触发预案要素提取结果信息处理
流程。
###### 3.4.4.2.1.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回预案名称、更新
时间、适用类型等核心字段信息，输出预案要素提取结果信息处理结果；若操作失败，
返回具体错误原因，如权限不足、预案名称参数不合法、预案要素提取结果信息配置异
常等。
###### 3.4.4.2.1.1.3 预案模块存储数据
功能点描述：将解析后的各模块内容（如先期处置、分级响应、组织指挥等）按模
块维度进行拆分存储。支持模块独立查看、编辑，支持与模板模块结构关联。
核心字段：预案名称、更新时间、适用类型。
###### 3.4.4.2.1.1.3.1 输入
用户或系统发起预案模块存储数据相关操作（将解析后的各模块内容（如先期处置、
分级响应、组织指挥等）按模块维度进行拆分存储。支持模块独立查看、编辑，支持与

<!-- PDF 第 298 页 -->

模板模块结构关联），提交预案名称、更新时间、适用类型等信息，系统同步校验用户
的操作权限与参数合规性，触发预案模块存储数据处理流程。
###### 3.4.4.2.1.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回预案名称、更新
时间、适用类型等核心字段信息，输出预案模块存储数据查询展示结果及管理维护结果；
若操作失败，返回具体错误原因，如权限不足、预案名称参数不合法、预案模块存储数
据配置异常等。
###### 3.4.4.2.1.1.4 预案模块自定义信息
功能点描述：支持对模块进行自定义配置，包括新增模块、配置模块提示词及解析
规则。支持不同模板下定义不同模块结构，用于指导后续解析与生成。
核心字段：预案名称、更新时间、适用类型。
###### 3.4.4.2.1.1.4.1 输入
用户或系统发起预案模块自定义信息相关操作（支持对模块进行自定义配置，包括
新增模块、配置模块提示词及解析规则。支持不同模板下定义不同模块结构，用于指导
后续解析与生成），提交预案名称、更新时间、适用类型等信息，系统同步校验用户的
操作权限与参数合规性，触发预案模块自定义信息处理流程。
###### 3.4.4.2.1.1.4.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回预案名称、更新
时间、适用类型等核心字段信息，输出预案模块自定义信息生成结果及管理维护结果；
若操作失败，返回具体错误原因，如权限不足、预案名称参数不合法、预案模块自定义

<!-- PDF 第 299 页 -->

信息配置异常等。
##### 3.4.4.2.2 预案场景管理信息
按突发事件场景对预案模块进行归类、结构化存储与快速匹配。
| 模块 | 功能点 |
| --- | --- |
| 预案场景管理信息 | 结构化解析信息 |
|  | 关键信息提取信息 |
|  | 关键信息结构存储数据 |

###### 3.4.4.2.2.1 功能点
###### 3.4.4.2.2.1.1 结构化解析信息
功能点描述：基于场景配置及模板提示词，对预案文本进行分模块解析。按照预案
要素、预警响应条件、应急响应条件、响应措施、单位职责等结构维度，生成对应的结
构化解析结果。支持按场景区分解析内容，支持多次解析记录。
核心字段：预案名称、更新时间、场景名称、适用类型。
###### 3.4.4.2.2.1.1.1 输入
用户或系统发起结构化解析信息相关操作（基于场景配置及模板提示词，对预案文
本进行分模块解析。按照预案要素、预警响应条件、应急响应条件、响应措施、单位职
责等结构维度，生成对应的结构化解析结果。支持按场景区分解析内容，支持多次解析
记录），提交预案名称、更新时间、场景名称、适用类型等信息，系统同步校验用户的
操作权限与参数合规性，触发结构化解析信息处理流程。

<!-- PDF 第 300 页 -->

###### 3.4.4.2.2.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回预案名称、更新
时间、场景名称、适用类型等核心字段信息，输出结构化解析信息生成结果及管理维护
结果；若操作失败，返回具体错误原因，如权限不足、预案名称参数不合法、结构化解
析信息配置异常等。
###### 3.4.4.2.2.1.2 关键信息提取信息
功能点描述：从结构化解析结果中提取关键业务信息，包括预案要素、响应条件、
处置措施、责任单位等。按字段维度进行拆分，形成可直接用于查询、分析和生成的关
键数据项。
核心字段：预案名称、更新时间、场景名称、适用类型。
###### 3.4.4.2.2.1.2.1 输入
用户或系统发起关键信息提取信息相关操作（从结构化解析结果中提取关键业务信
息，包括预案要素、响应条件、处置措施、责任单位等。按字段维度进行拆分，形成可
直接用于查询、分析和生成的关键数据项），提交预案名称、更新时间、场景名称、适
用类型等信息，系统同步校验用户的操作权限与参数合规性，触发关键信息提取信息处
理流程。
###### 3.4.4.2.2.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回预案名称、更新
时间、场景名称、适用类型等核心字段信息，输出关键信息提取信息查询展示结果及统
计分析结果；若操作失败，返回具体错误原因，如权限不足、预案名称参数不合法、关

<!-- PDF 第 301 页 -->

键信息提取信息生成失败等。
###### 3.4.4.2.2.1.3 关键信息结构存储数据
功能点描述：对提取后的关键信息进行统一结构化存储，按场景、模块、字段进行
归类管理。支持按维度查询、组合调用，作为预案生成、优化及决策分析的数据基础。
核心字段：预案名称、更新时间、场景名称、适用类型。
###### 3.4.4.2.2.1.3.1 输入
用户或系统发起关键信息结构存储数据相关操作（对提取后的关键信息进行统一结
构化存储，按场景、模块、字段进行归类管理。支持按维度查询、组合调用，作为预案
生成、优化及决策分析的数据基础），提交预案名称、更新时间、场景名称、适用类型
等信息，系统同步校验用户的操作权限与参数合规性，触发关键信息结构存储数据处理
流程。
###### 3.4.4.2.2.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回预案名称、更新
时间、场景名称、适用类型等核心字段信息，输出关键信息结构存储数据查询展示结果
及统计分析结果；若操作失败，返回具体错误原因，如权限不足、预案名称参数不合法、
关键信息结构存储数据生成失败等。
##### 3.4.4.2.3 预案模块生成与调整信息
基于模块库自动生成预案，并支持版本管理与回溯。

<!-- PDF 第 302 页 -->

| 模块 | 功能点 |
| --- | --- |
| 预案模块生成与调整信息 | 预案版本信息 |
|  | 版本回溯记录信息 |

###### 3.4.4.2.3.1 功能点
###### 3.4.4.2.3.1.1 预案版本信息
功能点描述：基于预案解析结果及模板规则生成各模块内容，包括响应措施、单位
职责、组织指挥等。支持对模块内容进行补充调整，支持按模块单独调整，支持按版本
进行保存与管理。
核心字段：调整人、调整时间、版本号、是否当前版本、创建时间、更新时间。
###### 3.4.4.2.3.1.1.1 输入
用户或系统发起预案版本信息相关操作（基于预案解析结果及模板规则生成各模块
内容，包括响应措施、单位职责、组织指挥等。支持对模块内容进行补充调整，支持按
模块单独调整。支持按版本进行保存与管理），提交调整人、调整时间、版本号、是否
当前版本、创建时间、更新时间等信息，系统同步校验用户的操作权限与参数合规性，
触发预案版本信息处理流程。
###### 3.4.4.2.3.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回调整人、调整时
间、版本号、是否当前版本、创建时间、更新时间等核心字段信息，输出预案版本信息
生成结果及管理维护结果；若操作失败，返回具体错误原因，如权限不足、调整人参数
不合法、预案版本信息配置异常等。

<!-- PDF 第 303 页 -->

###### 3.4.4.2.3.1.2 版本回溯记录信息
功能点描述：对模块级内容进行版本管理，记录每次模块生成或调整后的版本信息。
支持版本列表查看、版本对比、版本恢复。不同版本之间保留完整模块结构及内容快照。
核心字段：调整人、调整时间、版本号、是否当前版本、创建时间、更新时间。
###### 3.4.4.2.3.1.2.1 输入
用户或系统发起版本回溯记录信息相关操作（对模块级内容进行版本管理，记录每
次模块生成或调整后的版本信息。支持版本列表查看、版本对比、版本恢复。不同版本
之间保留完整模块结构及内容快照），提交调整人、调整时间、版本号、是否当前版本、
创建时间、更新时间等信息，系统同步校验用户的操作权限与参数合规性，触发版本回
溯记录信息处理流程。
###### 3.4.4.2.3.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回调整人、调整时
间、版本号、是否当前版本、创建时间、更新时间等核心字段信息，输出版本回溯记录
信息查询展示结果及生成结果；若操作失败，返回具体错误原因，如权限不足、调整人
参数不合法、版本回溯记录信息生成失败等。
##### 3.4.4.2.4 模板应用信息
通过可视化工具将模块、人员、资源、场景拼装为完整预案。

| 模块 | 功能点 |
| --- | --- |
| 模板应用信息 | 可视化编制工具信息 |
|  | 模板关联人员组织机构信息 |

<!-- PDF 第 304 页 -->

| 模块 | 功能点 |
| --- | --- |
|  | 模板关联应急资源信息 |
|  | 支持风险场景-预案模板-处置方案融合数据 |

###### 3.4.4.2.4.1 功能点
###### 3.4.4.2.4.1.1 可视化编制工具信息
功能点描述：支持使用AI 对预案内容生成思维导图，并可根据提示词进行修改。
核心字段：名称、描述。
###### 3.4.4.2.4.1.1.1 输入
用户或系统发起可视化编制工具信息相关操作（支持使用AI 对预案内容生成思维
导图，并可根据提示词进行修改），提交名称、描述等信息，系统同步校验用户的操作
权限与参数合规性，触发可视化编制工具信息处理流程。
###### 3.4.4.2.4.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回名称、描述等核
心字段信息，输出可视化编制工具信息生成结果；若操作失败，返回具体错误原因，如
权限不足、名称参数不合法、可视化编制工具信息生成失败等。
###### 3.4.4.2.4.1.2 模板关联人员组织机构信息
功能点描述：支持在生成预案时，关联责任单位、组织架构及人员信息，用于生成
预案中的职责分工、指挥体系等内容。
核心字段：部门名称、人员姓名。

<!-- PDF 第 305 页 -->

###### 3.4.4.2.4.1.2.1 输入
用户或系统发起模板关联人员组织机构信息相关操作（支持在生成预案时，关联责
任单位、组织架构及人员信息，用于生成预案中的职责分工、指挥体系等内容），提交
部门名称、人员姓名等信息，系统同步校验用户的操作权限与参数合规性，触发模板关
联人员组织机构信息处理流程。
###### 3.4.4.2.4.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回部门名称、人员
姓名等核心字段信息，输出模板关联人员组织机构信息生成结果；若操作失败，返回具
体错误原因，如权限不足、部门名称参数不合法、模板关联人员组织机构信息配置异常
等。
###### 3.4.4.2.4.1.3 模板关联应急资源信息
功能点描述：支持在AI 生成模板中绑定应急装备信息，用于预案生成时自动引用
资源配置内容。
核心字段：物资名称。
###### 3.4.4.2.4.1.3.1 输入
用户或系统发起模板关联应急资源信息相关操作（支持在AI 生成中模板中绑定应
急装备信息，用于预案生成时自动引用资源配置内容），提交物资名称等信息，系统同
步校验用户的操作权限与参数合规性，触发模板关联应急资源信息处理流程。
###### 3.4.4.2.4.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回物资名称等核心

<!-- PDF 第 306 页 -->

字段信息，输出模板关联应急资源信息生成结果及管理维护结果；若操作失败，返回具
体错误原因，如权限不足、物资名称参数不合法、模板关联应急资源信息配置异常等。
###### 3.4.4.2.4.1.4 支持风险场景-预案模板-处置方案融合数据
功能点描述：建立风险场景、预案模板与处置方案之间的映射关系。支持基于风险
场景自动匹配对应模板及处置模块，实现预案内容的自动组合生成。支持多场景、多模
板、多方案的关联配置。
核心字段：预案名称。
###### 3.4.4.2.4.1.4.1 输入
用户或系统发起支持风险场景-预案模板-处置方案融合数据相关操作（建立风险场
景、预案模板与处置方案之间的映射关系。支持基于风险场景自动匹配对应模板及处置
模块，实现预案内容的自动组合生成。支持多场景、多模板、多方案的关联配置），提
交预案名称等信息，系统同步校验用户的操作权限与参数合规性，触发支持风险场景-
预案模板-处置方案融合数据处理流程。
###### 3.4.4.2.4.1.4.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回预案名称等核心
字段信息，输出支持风险场景-预案模板-处置方案融合数据生成结果及管理维护结果；
若操作失败，返回具体错误原因，如权限不足、预案名称参数不合法、支持风险场景-
预案模板-处置方案融合数据配置异常等。

<!-- PDF 第 307 页 -->

#### 3.4.4.3 规则规范库管理
规则规范库管理统一存储应急标准、行业规范、流程制度，支持版本管理、子集调
用、接口下发上报，为预案编制与处置提供合规依据。
图3.4-4 规则规范库管理
##### 3.4.4.3.1 规范存储与管理信息
规范存储与管理信息实现应急、行业、流程类规范文件的范式化入库、分类管理与
权限控制。

| 模块 | 功能点 |
| --- | --- |
| 规范存储与管理信息 | 支持应急标准范式化存储数据 |
|  | 支持行业规范范式化存储数据 |
|  | 支持流程标准范式化存储数据 |
|  | 规范管理信息 |

<!-- PDF 第 308 页 -->

###### 3.4.4.3.1.1 功能点
###### 3.4.4.3.1.1.1 支持应急标准范式化存储数据
功能点描述：用于对应急标准类内容进行结构化存储，支持录入各类国家标准、地
方标准及专项应急标准。支持按规范名称、适用范围、响应等级等进行分类管理。支持
在预案生成时按类型调用对应标准内容，作为生成依据的一部分。
核心字段：规范名称、规范类型（应急标准）、规范描述、版本号、启用状态、适
用部门、适用响应等级、适用灾害类型。
###### 3.4.4.3.1.1.1.1 输入
用户或系统发起支持应急标准范式化存储数据相关操作（用于对应急标准类内容进
行结构化存储，支持录入各类国家标准、地方标准及专项应急标准。支持按规范名称、
适用范围、响应等级等进行分类管理。支持在预案生成时按类型调用对应标准内容，作
为生成依据的一部分），提交规范名称、规范类型（应急标准）、规范描述、版本号、
启用状态、适用部门、适用响应等级、适用灾害类型等信息，系统同步校验用户的操作
权限与参数合规性，触发支持应急标准范式化存储数据处理流程。
###### 3.4.4.3.1.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回规范名称、规范
类型（应急标准）、规范描述、版本号、启用状态、适用部门、适用响应等级、适用灾
害类型等核心字段信息，输出支持应急标准范式化存储数据生成结果及管理维护结果；
若操作失败，返回具体错误原因，如权限不足、规范名称参数不合法、支持应急标准范
式化存储数据配置异常等。

<!-- PDF 第 309 页 -->

###### 3.4.4.3.1.1.2 支持行业规范范式化存储数据
功能点描述：用于对行业相关规范进行统一存储和管理，包括交通运输行业规范、
管理制度等内容。支持按行业类别、应用场景进行分类维护。支持在预案编制或生成过
程中引用对应行业规范内容。
核心字段：规范名称、规范类型（应急标准）、规范描述、版本号、启用状态、适
用部门、适用响应等级、适用灾害类型。
###### 3.4.4.3.1.1.2.1 输入
用户或系统发起支持行业规范范式化存储数据相关操作（用于对行业相关规范进行
统一存储和管理，包括交通运输行业规范、管理制度等内容。支持按行业类别、应用场
景进行分类维护。支持在预案编制或生成过程中引用对应行业规范内容），提交规范名
称、规范类型（应急标准）、规范描述、版本号、启用状态、适用部门、适用响应等级、
适用灾害类型等信息，系统同步校验用户的操作权限与参数合规性，触发支持行业规范
范式化存储数据处理流程。
###### 3.4.4.3.1.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回规范名称、规范
类型（应急标准）、规范描述、版本号、启用状态、适用部门、适用响应等级、适用灾
害类型等核心字段信息，输出支持行业规范范式化存储数据生成结果及管理维护结果；
若操作失败，返回具体错误原因，如权限不足、规范名称参数不合法、支持行业规范范
式化存储数据配置异常等。

<!-- PDF 第 310 页 -->

###### 3.4.4.3.1.1.3 支持流程标准范式化存储数据
功能点描述：用于存储各类应急处置流程标准，包括事件处置流程、信息报送流程、
指挥调度流程等。支持对流程内容进行文本化描述或附件上传。支持在预案生成时作为
流程模板进行引用。
核心字段：规范名称、规范类型（应急标准）、规范描述、版本号、启用状态、适
用部门、适用响应等级、适用灾害类型。
###### 3.4.4.3.1.1.3.1 输入
用户或系统发起支持流程标准范式化存储数据相关操作（用于存储各类应急处置流
程标准，包括事件处置流程、信息报送流程、指挥调度流程等。支持对流程内容进行文
本化描述或附件上传。支持在预案生成时作为流程模板进行引用），提交规范名称、规
范类型（应急标准）、规范描述、版本号、启用状态、适用部门、适用响应等级、适用
灾害类型等信息，系统同步校验用户的操作权限与参数合规性，触发支持流程标准范式
化存储数据处理流程。
###### 3.4.4.3.1.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回规范名称、规范
类型（应急标准）、规范描述、版本号、启用状态、适用部门、适用响应等级、适用灾
害类型等核心字段信息，输出支持流程标准范式化存储数据生成结果及文件处理结果；
若操作失败，返回具体错误原因，如权限不足、规范名称参数不合法、支持流程标准范
式化存储数据配置异常等。

<!-- PDF 第 311 页 -->

###### 3.4.4.3.1.1.4 规范管理信息
功能点描述：用于对各类规范数据进行统一管理，支持规范的新增、编辑、删除、
版本维护、启停控制。
核心字段：规范名称、规范类型（应急标准）、规范描述、版本号、启用状态、适
用部门、适用响应等级、适用灾害类型。
###### 3.4.4.3.1.1.4.1 输入
用户或系统发起规范管理信息相关操作（用于对各类规范数据进行统一管理，支持
规范的新增、编辑、删除、版本维护、启停控制），提交规范名称、规范类型（应急标
准）、规范描述、版本号、启用状态、适用部门、适用响应等级、适用灾害类型等信息，
系统同步校验用户的操作权限与参数合规性，触发规范管理信息处理流程。
###### 3.4.4.3.1.1.4.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回规范名称、规范
类型（应急标准）、规范描述、版本号、启用状态、适用部门、适用响应等级、适用灾
害类型等核心字段信息，输出规范管理信息管理维护结果；若操作失败，返回具体错误
原因，如权限不足、规范名称参数不合法、规范管理信息配置异常等。
##### 3.4.4.3.2 多版本支持信息
多版本支持信息实现规范文件修订、升级、回溯、对比，确保合规性与可追溯。

| 模块 | 功能点 |
| --- | --- |
| 多版本支持信息 | 版本全流程管理功能信息 |
|  | 版本回溯信息 |

<!-- PDF 第 312 页 -->

###### 3.4.4.3.2.1 功能点
###### 3.4.4.3.2.1.1 版本全流程管理功能信息
功能点描述：对同一预案的不同版本进行统一管理，支持按版本号区分不同内容版
本。支持记录每个版本的创建时间、状态（草稿、已发布、已失效等）及适用范围。支
持对历史版本进行查看、对比差异、恢复为当前版本。
核心字段：预案名称、预案编号、版本号、版本说明、版本状态（草稿/已发布/
已失效）。
###### 3.4.4.3.2.1.1.1 输入
用户或系统发起版本全流程管理功能信息相关操作（对同一预案的不同版本进行统
一管理，支持按版本号区分不同内容版本。支持记录每个版本的创建时间、状态（草稿、
已发布、已失效等）及适用范围。支持对历史版本进行查看、对比差异、恢复为当前版
本），提交预案名称、预案编号、版本号、版本说明、版本状态（草稿/已发布/已失效）
等信息，系统同步校验用户的操作权限与参数合规性，触发版本全流程管理功能信息处
理流程。
###### 3.4.4.3.2.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回预案名称、预案
编号、版本号、版本说明、版本状态（草稿/已发布/已失效）等核心字段信息，输出版
本全流程管理功能信息查询展示结果及管理维护结果；若操作失败，返回具体错误原因，
如权限不足、预案名称参数不合法、版本全流程管理功能信息处理失败等。

<!-- PDF 第 313 页 -->

###### 3.4.4.3.2.1.2 版本回溯信息
功能点描述：支持预案历史版本恢复。
核心字段：预案名称、预案编号、版本号、版本说明、版本状态（草稿/已发布/
已失效）。
###### 3.4.4.3.2.1.2.1 输入
用户或系统发起版本回溯信息相关操作（支持预案历史版本恢复），提交预案名称、
预案编号、版本号、版本说明、版本状态（草稿/已发布/已失效）等信息，系统同步校
验用户的操作权限与参数合规性，触发版本回溯信息处理流程。
###### 3.4.4.3.2.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回预案名称、预案
编号、版本号、版本说明、版本状态（草稿/已发布/已失效）等核心字段信息，输出版
本回溯信息处理结果；若操作失败，返回具体错误原因，如权限不足、预案名称参数不
合法、版本回溯信息处理失败等。
##### 3.4.4.3.3 子集分配信息
子集分配信息根据事件类别、响应等级自动抽取对应规范子集，快速提供合规依据。

| 模块 | 功能点 |
| --- | --- |
| 子集分配信息 | 按事件类别调用规范子集信息 |
|  | 按响应等级调用规范子集信息 |

<!-- PDF 第 314 页 -->

###### 3.4.4.3.3.1 功能点
###### 3.4.4.3.3.1.1 按事件类别调用规范子集信息
功能点描述：根据预案生成时选择的事件类别，对已存储的规范数据进行匹配筛选。
系统按规范中配置的事件类别标签，提取对应的规范内容集合，作为当前预案生成的参
考依据。支持一个事件类别匹配多个规范条目，并支持多类别组合筛选。
核心字段：事件类别、响应登记。
###### 3.4.4.3.3.1.1.1 输入
用户或系统发起按事件类别调用规范子集信息相关操作（根据预案生成时选择的事
件类别，对已存储的规范数据进行匹配筛选。系统按规范中配置的事件类别标签，提取
对应的规范内容集合，作为当前预案生成的参考依据。支持一个事件类别匹配多个规范
条目，并支持多类别组合筛选），提交事件类别、响应登记等信息，系统同步校验用户
的操作权限与参数合规性，触发按事件类别调用规范子集信息处理流程。
###### 3.4.4.3.3.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回事件类别、响应
登记等核心字段信息，输出按事件类别调用规范子集信息生成结果及管理维护结果；若
操作失败，返回具体错误原因，如权限不足、事件类别参数不合法、按事件类别调用规
范子集信息配置异常等。
###### 3.4.4.3.3.1.2 按响应等级调用规范子集信息
功能点描述：根据预案生成时选择的应急响应等级，对规范库中已配置的响应等级
标签进行筛选匹配。系统按响应等级提取对应的规范子集内容，用于约束或补充预案生

<!-- PDF 第 315 页 -->

成内容。支持多响应等级组合匹配及规则叠加。
核心字段：事件类别、响应登记。
###### 3.4.4.3.3.1.2.1 输入
用户或系统发起按响应等级调用规范子集信息相关操作（根据预案生成时选择的应
急响应等级，对规范库中已配置的响应等级标签进行筛选匹配。系统按响应等级提取对
应的规范子集内容，用于约束或补充预案生成内容。支持多响应等级组合匹配及规则叠
加），提交事件类别、响应等级等信息，系统同步校验用户的操作权限与参数合规性，
触发按响应等级调用规范子集信息处理流程。
###### 3.4.4.3.3.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回事件类别、响应
等级等核心字段信息，输出按响应等级调用规范子集信息生成结果及管理维护结果；若
操作失败，返回具体错误原因，如权限不足、事件类别参数不合法、按响应等级调用规
范子集信息配置异常等。
##### 3.4.4.3.4 规范接入接口信息
规范接入接口信息提供规范数据上下行通道，支持向下分发与向上报备，实现多级
同步。

| 模块 | 功能点 |
| --- | --- |
| 规范接入接口信息 | 下发接口信息 |
|  | 上报接口信息 |

<!-- PDF 第 316 页 -->

###### 3.4.4.3.4.1 功能点
###### 3.4.4.3.4.1.1 下发接口信息
功能点描述：对接上级系统接口，获取规范库数据包。支持通过API 方式接收压缩
包文件，完成下载、解压、解析及入库处理。支持按规范类型（国家标准库、行业标准
库等）进行分类存储，支持版本识别与覆盖更新。记录每次下发数据的来源及处理结果。
核心字段：接口地址、请求方式、认证信息、数据包名称、数据包类型（国家/行
业）、数据版本号。
###### 3.4.4.3.4.1.1.1 输入
用户或系统发起下发接口信息相关操作（对接上级系统接口，获取规范库数据包。
支持通过API 方式接收压缩包文件，完成下载、解压、解析及入库处理。支持按规范类
型（国家标准库、行业标准库等）进行分类存储，支持版本识别与覆盖更新。记录每次
下发数据的来源及处理结果），提交接口地址、请求方式、认证信息、数据包名称、数
据包类型（国家/行业）、数据版本号等信息，系统同步校验用户的操作权限与参数合
规性，触发下发接口信息处理流程。
###### 3.4.4.3.4.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回接口地址、请求
方式、认证信息、数据包名称、数据包类型（国家/行业）、数据版本号等核心字段信
息，输出下发接口信息文件处理结果及接口处理结果；若操作失败，返回具体错误原因，
如权限不足、接口地址参数不合法、下发接口信息接口调用失败等。

<!-- PDF 第 317 页 -->

###### 3.4.4.3.4.1.2 上报接口信息
功能点描述：对接监管平台接口，将本地规范库的新增、修改、删除等变更信息进
行上报。支持自动触发和手动触发两种方式，按变更记录生成上报数据并推送。记录上
报结果及回执信息，支持失败重试及状态追踪。
核心字段：接口地址、请求方式、认证信息、数据包名称、数据包类型（国家/行
业）、数据版本号。
###### 3.4.4.3.4.1.2.1 输入
用户或系统发起上报接口信息相关操作（对接监管平台接口，将本地规范库的新增、
修改、删除等变更信息进行上报。支持自动触发和手动触发两种方式，按变更记录生成
上报数据并推送。记录上报结果及回执信息，支持失败重试及状态追踪），提交接口地
址、请求方式、认证信息、数据包名称、数据包类型（国家/行业）、数据版本号等信
息，系统同步校验用户的操作权限与参数合规性，触发上报接口信息处理流程。
###### 3.4.4.3.4.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回接口地址、请求
方式、认证信息、数据包名称、数据包类型（国家/行业）、数据版本号等核心字段信
息，输出上报接口信息生成结果及接口处理结果；若操作失败，返回具体错误原因，如
权限不足、接口地址参数不合法、上报接口信息接口调用失败等。
#### 3.4.4.4 模型微调与专项预案生成
基于大模型微调实现预案智能生成，支持场景自适应、语言风格切换与多轮迭代优
化。

<!-- PDF 第 318 页 -->

图3.4-5 模型微调与专项预案生成
##### 3.4.4.4.1 开源模型微调
对开源大模型进行交通应急领域微调，提升预案抽取、理解、生成效果。
| 模块 | 功能点 |
| --- | --- |
| 开源模型微调 | 进行提示词工程及抽取识别微调信息 |

###### 3.4.4.4.1.1 功能点
###### 3.4.4.4.1.1.1 进行提示词工程及抽取识别微调信息
功能点描述：基于开源大语言模型（如ChatGLM、Qwen、LLaMA 等），结合预案模
板库、规范库、情景样本库等数据，进行提示词工程与监督微调（SFT/LoRA）。支持对
预案文本解析、要素抽取、结构生成等能力进行定向优化，使模型在交通应急场景下具

<!-- PDF 第 319 页 -->

备更高的结构理解能力和生成一致性。
核心字段：模型名称、模型路径、微调方式、数据集、学习率、训练轮数、批处理
大小、最大样本数。
###### 3.4.4.4.1.1.1.1 输入
用户或系统发起进行提示词工程及抽取识别微调信息相关操作（基于开源大语言模
型（如ChatGLM、Qwen、LLaMA 等），结合预案模板库、规范库、情景样本库等数据，
进行提示词工程与监督微调（SFT/LoRA）），提交模型名称、模型路径、微调方式、数
据集、学习率、训练轮数、批处理大小、最大样本数等信息，系统同步校验用户的操作
权限与参数合规性，触发进行提示词工程及抽取识别微调信息处理流程。
###### 3.4.4.4.1.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回模型名称、模型
路径、微调方式、数据集、学习率、训练轮数、批处理大小、最大样本数等核心字段信
息，输出进行提示词工程及抽取识别微调信息生成结果；若操作失败，返回具体错误原
因，如权限不足、模型名称参数不合法、进行提示词工程及抽取识别微调信息配置异常
等。
##### 3.4.4.4.2 情境自适应生成
根据事件场景自动匹配模板与规范，快速生成专项预案。

| 模块 | 功能点 |
| --- | --- |
| 情境自适应生成 | 自动选择模板信息 |
|  | 自动选择规范子集信息 |

<!-- PDF 第 320 页 -->

###### 3.4.4.4.2.1 功能点
###### 3.4.4.4.2.1.1 自动选择模板信息
功能点描述：在预案生成过程中，根据输入的事件属性（事件类别、影响等级、应
急响应等级、灾害类型、适用区域等），通过预设匹配规则自动筛选并确定适用的预案
模板或模板组合。支持多条件匹配、优先级排序及多模板融合，用于确定预案整体结构
与模块框架。
核心字段：事件类别、灾害类型、影响等级、应急响应等级、适用区域。
###### 3.4.4.4.2.1.1.1 输入
用户或系统发起自动选择模板信息相关操作（在预案生成过程中，根据输入的事件
属性（事件类别、影响等级、应急响应等级、灾害类型、适用区域等），通过预设匹配
规则自动筛选并确定适用的预案模板或模板组合。支持多条件匹配、优先级排序及多模
板融合，用于确定预案整体结构与模块框架），提交事件类别、灾害类型、影响等级、
应急响应等级、适用区域等信息，系统同步校验用户的操作权限与参数合规性，触发自
动选择模板信息处理流程。
###### 3.4.4.4.2.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回事件类别、灾害
类型、影响等级、应急响应等级、适用区域等核心字段信息，输出自动选择模板信息生
成结果；若操作失败，返回具体错误原因，如权限不足、事件类别参数不合法、自动选
择模板信息配置异常等。

<!-- PDF 第 321 页 -->

###### 3.4.4.4.2.1.2 自动选择规范子集信息
功能点描述：在预案生成阶段，根据事件属性及已选模板，自动匹配对应的规范子
集（应急标准、行业规范、流程规范等），仅加载与当前场景相关的规则内容，作为生
成约束的参考依据。支持按事件类别、响应等级、部门职责等多维条件筛选规范集合。
核心字段：事件类别、应急响应等级、责任部门。
###### 3.4.4.4.2.1.2.1 输入
用户或系统发起自动选择规范子集信息相关操作（在预案生成阶段，根据事件属性
及已选模板，自动匹配对应的规范子集（应急标准、行业规范、流程规范等），仅加载
与当前场景相关的规则内容，作为生成约束与参考依据。支持按事件类别、响应等级、
部门职责等多维条件筛选规范集合），提交事件类别、应急响应等级、责任部门等信息，
系统同步校验用户的操作权限与参数合规性，触发自动选择规范子集信息处理流程。
###### 3.4.4.4.2.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回事件类别、应急
响应等级、责任部门等核心字段信息，输出自动选择规范子集信息生成结果；若操作失
败，返回具体错误原因，如权限不足、事件类别参数不合法、自动选择规范子集信息配
置异常等。
##### 3.4.4.4.3 自适应语言风格
支持生成不同公文风格的预案文本，满足上报、下达、执行等不同场景。

<!-- PDF 第 322 页 -->

| 模块 | 功能点 |
| --- | --- |
| 自适应语言风格 | 按需求调整生成通用语言风格预案信息 |
|  | 按需求调整生成专业术语风格预案信息 |
|  | 按需求调整生成指令式语言风格预案信息 |

###### 3.4.4.4.3.1 功能点
###### 3.4.4.4.3.1.1 按需求调整生成通用语言风格预案信息
功能点描述：在预案生成过程中，基于预案类型及使用对象（如基层人员、公众等），
自动采用通用表达方式生成内容。语言以易理解、描述性为主，减少专业术语密度，适
用于宣贯、培训及普及场景。
核心字段：生成内容。
###### 3.4.4.4.3.1.1.1 输入
用户或系统发起按需求调整生成通用语言风格预案信息相关操作（在预案生成过程
中，基于预案类型及使用对象（如基层人员、公众等），自动采用通用表达方式生成内
容。语言以易理解、描述性为主，减少专业术语密度，适用于宣贯、培训及普及场景），
提交生成内容等信息，系统同步校验用户的操作权限与参数合规性，触发按需求调整生
成通用语言风格预案信息处理流程。
###### 3.4.4.4.3.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回生成内容等核心
字段信息，输出按需求调整生成通用语言风格预案信息生成结果；若操作失败，返回具
体错误原因，如权限不足、生成内容参数不合法、按需求调整生成通用语言风格预案信
息生成失败等。

<!-- PDF 第 323 页 -->

###### 3.4.4.4.3.1.2 按需求调整生成专业术语风格预案信息
功能点描述：在预案生成过程中，采用行业标准术语和规范表达方式输出内容，适
用于专业部门及技术人员使用场景。内容强调规范性、严谨性及术语一致性，符合行业
标准及法规要求。
核心字段：生成内容。
###### 3.4.4.4.3.1.2.1 输入
用户或系统发起按需求调整生成专业术语风格预案信息相关操作（在预案生成过程
中，采用行业标准术语和规范表达方式输出内容，适用于专业部门及技术人员使用场景。
内容强调规范性、严谨性及术语一致性，符合行业标准及法规要求），提交生成内容等
信息，系统同步校验用户的操作权限与参数合规性，触发按需求调整生成专业术语风格
预案信息处理流程。
###### 3.4.4.4.3.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回生成内容等核心
字段信息，输出按需求调整生成专业术语风格预案信息生成结果；若操作失败，返回具
体错误原因，如权限不足、生成内容参数不合法、按需求调整生成专业术语风格预案信
息生成失败等。
###### 3.4.4.4.3.1.3 按需求调整生成指令式语言风格预案信息
功能点描述：在预案生成过程中，将内容转化为明确的操作指令形式，突出动作导
向与执行路径，适用于现场处置及应急响应阶段。语言结构以“动词+对象+步骤”为主，
支持步骤化、条目化输出。

<!-- PDF 第 324 页 -->

核心字段：生成内容。
###### 3.4.4.4.3.1.3.1 输入
用户或系统发起按需求调整生成指令式语言风格预案信息相关操作（在预案生成过
程中，将内容转化为明确的操作指令形式，突出动作导向与执行路径，适用于现场处置
及应急响应阶段。语言结构以“动词+对象+步骤”为主，支持步骤化、条目化输出），提
交生成内容等信息，系统同步校验用户的操作权限与参数合规性，触发按需求调整生成
指令式语言风格预案信息处理流程。
###### 3.4.4.4.3.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回生成内容等核心
字段信息，输出按需求调整生成指令式语言风格预案信息生成结果；若操作失败，返回
具体错误原因，如权限不足、生成内容参数不合法、按需求调整生成指令式语言风格预
案信息生成失败等。
##### 3.4.4.4.4 多轮生成与反馈学习信息
支持多轮修改、人工优化、反馈迭代，持续提升生成质量。

| 模块 | 功能点 |
| --- | --- |
| 多轮生成与反馈学习信息 | 自动优化信息 |
|  | 手动修改信息 |
|  | 优化结果应用监督信息 |

<!-- PDF 第 325 页 -->

###### 3.4.4.4.4.1 功能点
###### 3.4.4.4.4.1.1 自动优化信息
功能点描述：基于用户对生成内容的反馈（点赞/点踩）、历史修改记录及评价结
果，自动识别需优化的预案内容，对低评分或被频繁修改的模块进行二次生成优化。支
持结合规则库、模板库及样本库进行优化重生成，并记录优化前后差异。
核心字段：反馈类型（点赞/点踩）、反馈次数。
###### 3.4.4.4.4.1.1.1 输入
用户或系统发起自动优化信息相关操作（基于用户对生成内容的反馈（点赞/点踩）、
历史修改记录及评价结果，自动识别需优化的预案内容，对低评分或被频繁修改的模块
进行二次生成优化。支持结合规则库、模板库及样本库进行优化重生成，并记录优化前
后差异），提交反馈类型（点赞/点踩）、反馈次数等信息，系统同步校验用户的操作
权限与参数合规性，触发自动优化信息处理流程。
###### 3.4.4.4.4.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回反馈类型（点赞
/点踩）、反馈次数等核心字段信息，输出自动优化信息生成结果；若操作失败，返回
具体错误原因，如权限不足、反馈类型（点赞/点踩）参数不合法、自动优化信息配置
异常等。
###### 3.4.4.4.4.1.2 手动修改信息
功能点描述：支持用户对生成的预案内容进行人工编辑与调整，修改内容可按模块
或段落进行保存，并记录修改前后差异。支持多版本保存及回溯，用于后续优化分析及

<!-- PDF 第 326 页 -->

模型训练数据积累。
核心字段：预案名称。
###### 3.4.4.4.4.1.2.1 输入
用户或系统发起手动修改信息相关操作（支持用户对生成的预案内容进行人工编辑
与调整，修改内容可按模块或段落进行保存，并记录修改前后差异。支持多版本保存及
回溯，用于后续优化分析及模型训练数据积累），提交预案名称等信息，系统同步校验
用户的操作权限与参数合规性，触发手动修改信息处理流程。
###### 3.4.4.4.4.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回预案名称等核心
字段信息，输出手动修改信息统计分析结果及生成结果；若操作失败，返回具体错误原
因，如权限不足、预案名称参数不合法、手动修改信息配置异常等。
###### 3.4.4.4.4.1.3 优化结果应用监督信息
功能点描述：将用户反馈（点赞/点踩）、人工修改记录及自动优化结果进行结构
化沉淀，形成监督数据，用于模型微调与再训练。支持对高质量修改内容进行标注与筛
选，构建训练样本数据集（如指令微调数据）。
核心字段：预案名称。
###### 3.4.4.4.4.1.3.1 输入
用户或系统发起优化结果应用监督信息相关操作（将用户反馈（点赞/点踩）、人
工修改记录及自动优化结果进行结构化沉淀，形成监督数据，用于模型微调与再训练。
支持对高质量修改内容进行标注与筛选，构建训练样本数据集（如指令微调数据）），

<!-- PDF 第 327 页 -->

提交预案名称等信息，系统同步校验用户的操作权限与参数合规性，触发优化结果应用
监督信息处理流程。
###### 3.4.4.4.4.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回预案名称等核心
字段信息，输出优化结果应用监督信息处理结果；若操作失败，返回具体错误原因，如
权限不足、预案名称参数不合法、优化结果应用监督信息配置异常等。
#### 3.4.4.5 自动化流程管理
自动化流程管理基于应急预案自动生成处置任务，实现任务推送、通知提醒、执行
跟踪、地图与视频联动、绩效评估全流程自动化，确保预案快速落地、处置可管可控。
图3.4-6 自动化流程管理

<!-- PDF 第 328 页 -->

##### 3.4.4.5.1 任务对接与通知信息
将预案流程自动转化为可执行任务，并通过多渠道自动通知责任人，实现任务快速
下达与反馈。
| 模块 | 功能点 |
| --- | --- |
| 任务对接与通知信息 | 自动化通知信息 |
|  | 任务推送信息 |
|  | 任务状态提醒反馈信息 |

###### 3.4.4.5.1.1 功能点
###### 3.4.4.5.1.1.1 自动化通知信息
功能点描述：基于预案执行流程及任务流转节点，自动触发通知机制，按规则向相
关责任人、协同人员推送消息。支持多种通知方式（APP 推送、短信、系统消息等），
并可基于不同事件阶段（启动、流转、完成、回退）配置通知模板，实现通知内容自动
填充与发送。
核心字段：当前状态、处理结果。
###### 3.4.4.5.1.1.1.1 输入
用户或系统发起自动化通知信息相关操作（基于预案执行流程及任务流转节点，自
动触发通知机制，按规则向相关责任人、协同人员推送消息。支持多种通知方式（APP
推送、短信、系统消息等），并可基于不同事件阶段（启动、流转、完成、回退）配置
通知模板，实现通知内容自动填充与发送），提交当前状态、处理结果等信息，系统同
步校验用户的操作权限与参数合规性，触发自动化通知信息处理流程。

<!-- PDF 第 329 页 -->

###### 3.4.4.5.1.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回当前状态、处理
结果等核心字段信息，输出自动化通知信息管理维护结果；若操作失败，返回具体错误
原因，如权限不足、当前状态参数不合法、自动化通知信息配置异常等。
###### 3.4.4.5.1.1.2 任务推送信息
功能点描述：根据预案中定义的职责分工与流程节点，将具体任务自动分发至对应
责任部门及人员。支持任务分级、时间节点配置及多角色协同处理，确保任务按流程有
序流转，并记录任务分派及接收情况。
核心字段：当前状态、处理结果。
###### 3.4.4.5.1.1.2.1 输入
用户或系统发起任务推送信息相关操作（根据预案中定义的职责分工与流程节点，
将具体任务自动分发至对应责任部门及人员。支持任务分级、时间节点配置及多角色协
同处理，确保任务按流程有序流转，并记录任务分派及接收情况），提交当前状态、处
理结果等信息，系统同步校验用户的操作权限与参数合规性，触发任务推送信息处理流
程。
###### 3.4.4.5.1.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回当前状态、处理
结果等核心字段信息，输出任务推送信息管理维护结果；若操作失败，返回具体错误原
因，如权限不足、当前状态参数不合法、任务推送信息配置异常等。

<!-- PDF 第 330 页 -->

###### 3.4.4.5.1.1.3 任务状态提醒反馈信息
功能点描述：对任务执行全过程进行状态监控与提醒，针对超时未处理、即将到期、
已完成等状态自动触发提醒，并支持任务执行进度实时反馈。支持回执机制，记录任务
处理结果及执行情况，形成闭环跟踪。
核心字段：当前状态、处理结果。
###### 3.4.4.5.1.1.3.1 输入
用户或系统发起任务状态提醒反馈信息相关操作（对任务执行全过程进行状态监控
与提醒，针对超时未处理、即将到期、已完成等状态自动触发提醒，并支持任务执行进
度实时反馈。支持回执机制，记录任务处理结果及执行情况，形成闭环跟踪），提交当
前状态、处理结果等信息，系统同步校验用户的操作权限与参数合规性，触发任务状态
提醒反馈信息处理流程。
###### 3.4.4.5.1.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回当前状态、处理
结果等核心字段信息，输出任务状态提醒反馈信息处理结果；若操作失败，返回具体错
误原因，如权限不足、当前状态参数不合法、任务状态提醒反馈信息处理失败等。
##### 3.4.4.5.2 任务闭环管理信息
建立任务从派发、执行、反馈到结案的全闭环规则，实现全程可跟踪、可追溯、可
考核。

| 模块 | 功能点 |
| --- | --- |
| 任务闭环管理信息 | 制定任务闭环管理规则信息 |

<!-- PDF 第 331 页 -->

| 模块 | 功能点 |
| --- | --- |
|  | 全程跟踪任务执行信息 |

###### 3.4.4.5.2.1 功能点
###### 3.4.4.5.2.1.1 制定任务闭环管理规则信息
功能点描述：基于预案流程模型，对任务全生命周期进行规则定义。支持按流程节
点配置任务流转路径、状态机规则、完成条件及异常处理策略，控制任务是否进入下一
环节，确保任务必须完成确认后才能闭环。
核心字段：规则名称、任务类型。
###### 3.4.4.5.2.1.1.1 输入
用户或系统发起制定任务闭环管理规则信息相关操作（基于预案流程模型，对任务
全生命周期进行规则定义。支持按流程节点配置任务流转路径、状态机规则、完成条件
及异常处理策略，控制任务是否进入下一环节，确保任务必须完成确认后才能闭环），
提交规则名称、任务类型等信息，系统同步校验用户的操作权限与参数合规性，触发制
定任务闭环管理规则信息处理流程。
###### 3.4.4.5.2.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回规则名称、任务
类型等核心字段信息，输出制定任务闭环管理规则信息管理维护结果；若操作失败，返
回具体错误原因，如权限不足、规则名称参数不合法、制定任务闭环管理规则信息配置
异常等。

<!-- PDF 第 332 页 -->

###### 3.4.4.5.2.1.2 全程跟踪任务执行信息
功能点描述：围绕任务执行过程建立完整跟踪链路，记录任务在各流程节点的流转
轨迹、状态变化、执行进度及反馈信息。支持时间轴展示任务全过程，结合流程节点实
时反映执行位置，并对异常情况（超时、未处理、回退、卡点）进行标识，形成可追溯
的执行记录和闭环证明。
核心字段：任务ID、状态、进度、执行人、处理时间。
###### 3.4.4.5.2.1.2.1 输入
用户或系统发起全程跟踪任务执行信息相关操作（围绕任务执行过程建立完整跟踪
链路，记录任务在各流程节点的流转轨迹、状态变化、执行进度及反馈信息。支持时间
轴展示任务全过程，结合流程节点实时反映执行位置，并对异常情况（超时、未处理、
回退、卡点）进行标识，形成可追溯的执行记录和闭环证明），提交任务ID、状态、进
度、执行人、处理时间等信息，系统同步校验用户的操作权限与参数合规性，触发全程
跟踪任务执行信息处理流程。
###### 3.4.4.5.2.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回任务ID、状态、
进度、执行人、处理时间等核心字段信息，输出全程跟踪任务执行信息查询展示结果；
若操作失败，返回具体错误原因，如权限不足、任务ID 参数不合法、全程跟踪任务执
行信息处理失败等。
##### 3.4.4.5.3 地图数据信息接入与视频监控数据接入接口
将任务位置与GIS 地图、现场视频联动，实现任务“一张图”可视、可指挥。

<!-- PDF 第 333 页 -->

| 模块 | 功能点 |
| --- | --- |
| 地图数据信息接入与视频监控数据接入接口 | 提供地理位置信息接口 |
|  | 提供实时视频流数据 |

###### 3.4.4.5.3.1 功能点
###### 3.4.4.5.3.1.1 提供地理位置信息接口
功能点描述：对接地理位置信息，并在地图上展示应急相关的资源点位。
核心字段：经纬度、地址。
###### 3.4.4.5.3.1.1.1 输入
用户或系统发起提供地理位置信息接口相关操作（对接地理位置信息，并在地图上
展示应急相关的资源点位），提交经纬度、地址等信息，系统同步校验用户的操作权限
与参数合规性，触发提供地理位置信息接口处理流程。
###### 3.4.4.5.3.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回经纬度、地址等
核心字段信息，输出提供地理位置信息接口查询展示结果及接口处理结果；若操作失败，
返回具体错误原因，如权限不足、经纬度参数不合法、提供地理位置信息接口调用失败
等。
###### 3.4.4.5.3.1.2 提供实时视频流数据
功能点描述：绑定与预案相关的视频资源。
核心字段：设备名称、设备类型、所属单位、设备状态。

<!-- PDF 第 334 页 -->

###### 3.4.4.5.3.1.2.1 输入
用户或系统发起提供实时视频流数据相关操作（绑定与预案相关的视频资源），提
交设备名称、设备类型、所属单位、设备状态等信息，系统同步校验用户的操作权限与
参数合规性，触发提供实时视频流数据处理流程。
###### 3.4.4.5.3.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回设备名称、设备
类型、所属单位、设备状态等核心字段信息，输出提供实时视频流数据处理结果；若操
作失败，返回具体错误原因，如权限不足、设备名称参数不合法、提供实时视频流数据
处理失败等。
##### 3.4.4.5.4 任务绩效评估与报告
自动记录任务执行全过程，评估处置时效、完成质量，自动生成执行报告用于复盘
与考核。
| 模块 | 功能点 |
| --- | --- |
| 任务绩效评估与报告 | 自动记录预案评估过程信息 |
|  | 生成执行报告信息 |

###### 3.4.4.5.4.1 功能点
###### 3.4.4.5.4.1.1 自动记录预案评估过程信息
功能点描述：系统在预案执行过程中自动采集各流程节点、任务执行、人员响应及
反馈处理等过程数据，形成全过程评估记录。支持按时间轴记录事件发展、任务流转、
处置动作及状态变化，并自动汇总执行时长、超时情况、任务完成率。

<!-- PDF 第 335 页 -->

核心字段：执行时长、超时情况、任务完成率。
###### 3.4.4.5.4.1.1.1 输入
用户或系统发起自动记录预案评估过程信息相关操作（系统在预案执行过程中自动
采集各流程节点、任务执行、人员响应、及反馈处理等过程数据，形成全过程评估记录。
支持按时间轴记录事件发展、任务流转、处置动作及状态变化，并自动汇总执行时长、
超时情况、任务完成率），提交执行时长、超时情况、任务完成率等信息，系统同步校
验用户的操作权限与参数合规性，触发自动记录预案评估过程信息处理流程。
###### 3.4.4.5.4.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回执行时长、超时
情况、任务完成率等核心字段信息，输出自动记录预案评估过程信息处理结果；若操作
失败，返回具体错误原因，如权限不足、执行时长参数不合法、自动记录预案评估过程
信息处理失败等。
###### 3.4.4.5.4.1.2 生成执行报告信息
功能点描述：统计预案执行的报告信息，包括人员响应情况、任务响应情况及伤亡
等。
核心字段：任务响应数、任务逾期。
###### 3.4.4.5.4.1.2.1 输入
用户或系统发起生成执行报告信息相关操作（统计预案执行的报告信息，包括人员
响应情况、任务响应情况及伤亡等），提交任务响应数、任务逾期等信息，系统同步校
验用户的操作权限与参数合规性，触发生成执行报告信息处理流程。

<!-- PDF 第 336 页 -->

###### 3.4.4.5.4.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回任务响应数、任
务逾期等核心字段信息，输出生成执行报告信息统计分析结果及生成结果；若操作失败，
返回具体错误原因，如权限不足、任务响应数参数不合法、生成执行报告信息生成失败
等。
#### 3.4.4.6 应急模拟演练
应急模拟演练支持桌面推演、实战演练等多种模式，通过场景配置、流程编排、过
程控制、响应模拟、效果评估，实现预案可演练、流程可检验、能力可提升、问题可闭
环。
图3.4-7 应急模拟演练
##### 3.4.4.6.1 演练设计管理
应急模拟演练支持桌面推演、实战演练等多种模式，通过场景配置、流程编排、过
程控制、响应模拟、效果评估，实现预案可演练、流程可检验、能力可提升、问题可闭
环。

<!-- PDF 第 337 页 -->

| 模块 | 功能点 |
| --- | --- |
| 演练设计管理 | 演练类型信息 |
|  | 场景配置信息 |
|  | 流程编排信息 |
|  | 角色分配信息 |
|  | 时间线设定信息 |

###### 3.4.4.6.1.1 功能点
###### 3.4.4.6.1.1.1 演练类型信息
功能点描述：支持创建对演练计划的创建，并配置演练相关信息，支持演练类型选
择与演练方案配置，面向不同灾害场景、业务类型及演练目标开展演练管理。
核心字段：演练周期、所属分类、演练名称、演练场景、演练时间、演练类型、承
办单位、参演单位、处置流程、参演人数、参演人员、演练地点、主办单位、演练科目、
演练对应预案、应急资源绑定、演练附件。
###### 3.4.4.6.1.1.1.1 输入
用户或系统发起演练类型信息相关操作（支持创建对演练计划的创建，并配置演练
相关信息，支持演练类型选择与演练方案配置，面向不同灾害场景、业务类型及演练目
标开展演练管理），提交演练周期、所属分类、演练名称、演练场景、演练时间、演练
类型、承办单位、参演单位、处置流程、参演人数、参演人员、演练地点、主办单位、
演练科目、演练对应预案、应急资源绑定、演练附件等信息，系统同步校验用户的操作
权限与参数合规性，触发演练类型信息处理流程。

<!-- PDF 第 338 页 -->

###### 3.4.4.6.1.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回演练周期、所属
分类、演练名称、演练场景、演练时间、演练类型、承办单位、参演单位、处置流程、
参演人数、参演人员、演练地点、主办单位、演练科目、演练对应预案、应急资源绑定、
演练附件等核心字段信息，输出演练类型信息管理维护结果；若操作失败，返回具体错
误原因，如权限不足、演练周期参数不合法、演练类型信息配置异常等。
###### 3.4.4.6.1.1.2 场景配置信息
功能点描述：系统按照演练准备、组织动员、演练实施、总结评估等流程进行统一
管理，支持配置演练计划、演练场景、演练科目、参演单位、参演人员、处置流程及对
应预案等内容，并支持对演练方案及演练脚本进行审核。系统可结合应急预案、应急资
源、应急任务等数据进行联动配置。
核心字段：演练周期、所属分类、演练名称、演练场景、演练时间、演练类型、承
办单位、参演单位、处置流程、参演人数、参演人员、演练地点、主办单位、演练科目、
演练对应预案、应急资源绑定、演练附件。
###### 3.4.4.6.1.1.2.1 输入
用户或系统发起场景配置信息相关操作（系统按照演练准备、组织动员、演练实施、
总结评估等流程进行统一管理，支持配置演练计划、演练场景、演练科目、参演单位、
参演人员、处置流程及对应预案等内容，并支持对演练方案及演练脚本进行审核。系统
可结合应急预案、应急资源、应急任务等数据进行联动配置），提交演练周期、所属分
类、演练名称、演练场景、演练时间、演练类型、承办单位、参演单位、处置流程、参
演人数、参演人员、演练地点、主办单位、演练科目、演练对应预案、应急资源绑定、

<!-- PDF 第 339 页 -->

演练附件等信息，系统同步校验用户的操作权限与参数合规性，触发场景配置信息处理
流程。
###### 3.4.4.6.1.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回演练周期、所属
分类、演练名称、演练场景、演练时间、演练类型、承办单位、参演单位、处置流程、
参演人数、参演人员、演练地点、主办单位、演练科目、演练对应预案、应急资源绑定、
演练附件等核心字段信息，输出场景配置信息管理维护结果；若操作失败，返回具体错
误原因，如权限不足、演练周期参数不合法、场景配置信息配置异常等。
###### 3.4.4.6.1.1.3 流程编排信息
功能点描述：支持演练流程编排与脚本设计，面向不同事故场景构建演练全过程事
件流转逻辑。系统支持通过可视化流程方式配置演练开始、事件节点、任务节点、并行
节点及结束节点等内容，按照演练时间进程组织各阶段演练动作。支持配置演练情景、
事件链、关联任务及关联文件，实现演练脚本动态化管理。演练组织单位可根据事故发
展过程，对不同阶段的演练情景进行分段设计，并结合事件触发条件控制后续流程推进。
系统支持关联文本、图片、音频、视频等文件资料，用于模拟现场情况、下发处置指令
及展示事件信息，同时支持在不同阶段配置导调任务、处置任务及专项响应任务。通过
流程编排实现演练方案标准化、节点化及可视化管理，便于后续演练执行、过程推演及
复盘评估。
任务节点：用于配置演练流程中的具体处置任务、导调任务及协同任务，是演练过
程中实际执行动作的核心节点。支持配置办理事项、办理结果、办理要求、承办人员、
通知方式及办理时限等内容，用于模拟真实业务场景中的任务下发与执行过程。任务节

<!-- PDF 第 340 页 -->

点可关联责任单位、责任人员及任务附件，并支持设置办理意见、完成反馈、接收回执
等要求，实现任务全过程闭环管理。
任务节点支持按照不同业务场景配置多种办理结果，例如同意、转办，系统支持配
置合理完成时限及宽限完成时限，用于模拟任务超时、催办及异常处置场景。任务下发
后，可通过系统通知方式同步给相关承办人员，并记录任务接收、办理、反馈及完成全
过程信息。
核心字段：任务名称、办理事项、办理结果、办理要求、办理意见、合理完成时限、
宽限完成时限、承办单位、承办人员、通知方式、回执要求、任务附件、任务状态、任
务优先级、任务来源节点、任务描述、创建时间、完成时间。
###### 3.4.4.6.1.1.3.1 输入
用户或系统发起流程编排信息相关操作（支持演练流程编排与脚本设计，面向不同
事故场景构建演练全过程事件流转逻辑），提交任务名称、办理事项、办理结果、办理
要求、办理意见、合理完成时限、宽限完成时限、承办单位、承办人员、通知方式、回
执要求、任务附件、任务状态、任务优先级、任务来源节点、任务描述、创建时间、完
成时间等信息，系统同步校验用户的操作权限与参数合规性，触发流程编排信息处理流
程。
###### 3.4.4.6.1.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回任务名称、办理
事项、办理结果、办理要求、办理意见、合理完成时限、宽限完成时限、承办单位、承
办人员、通知方式、回执要求、任务附件、任务状态、任务优先级、任务来源节点、任
务描述、创建时间、完成时间等核心字段信息，输出流程编排信息查询展示结果及文件

<!-- PDF 第 341 页 -->

处理结果；若操作失败，返回具体错误原因，如权限不足、任务名称参数不合法、流程
编排信息配置异常等。
###### 3.4.4.6.1.1.4 角色分配信息
功能点描述：支持基于演练脚本及应急预案进行角色分配与组织结构配置，建立演
练期间的人员组织体系。系统支持配置导调组、综合协调组、应急处置组、新闻宣传组、
后勤保障组、通信保障组、评估组、观摩组等不同演练小组，并为各小组配置负责人、
承办人员及岗位职责。支持按照演练阶段及任务节点，将不同任务分配至对应小组及人
员，实现演练任务分工管理。
系统支持关联组织通讯录信息，直接从应急指挥系统通讯录中选择参演人员，并同
步人员联系方式、所属单位、岗位信息等内容，便于统一开展演练通知、任务下发及应
急联络。支持配置多人办理规则、备选人员、权限范围及承办逻辑，实现多角色、多层
级的协同演练组织管理。不同角色可根据权限查看对应演练内容、接收任务、填报信息
及参与演练处置。
核心字段：小组名称、小组类型、组织结构、角色名称、岗位名称、负责人。
###### 3.4.4.6.1.1.4.1 输入
用户或系统发起角色分配信息相关操作（支持基于演练脚本及应急预案进行角色分
配与组织结构配置，建立演练期间的人员组织体系），提交小组名称、小组类型、组织
结构、角色名称、岗位名称、负责人等信息，系统同步校验用户的操作权限与参数合规
性，触发角色分配信息处理流程。

<!-- PDF 第 342 页 -->

###### 3.4.4.6.1.1.4.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回小组名称、小组
类型、组织结构、角色名称、岗位名称、负责人等核心字段信息，输出角色分配信息查
询展示结果及接口处理结果；若操作失败，返回具体错误原因，如权限不足、小组名称
参数不合法、角色分配信息配置异常等。
###### 3.4.4.6.1.1.5 时间线设定信息
功能点描述：支持对演练流程中的各任务节点配置办理时限及时间控制规则，按照
演练步骤设置合理完成时限、宽限完成时限及超时规则，对演练全过程进行时间管控。
系统支持按天、小时、分钟、秒等维度配置任务执行时长，并支持自然日计算方式，用
于模拟真实应急场景中的处置时效要求。
核心字段：节点名称、任务名称、合理完成时限、宽限完成时限。
###### 3.4.4.6.1.1.5.1 输入
用户或系统发起时间线设定信息相关操作（支持对演练流程中的各任务节点配置办
理时限及时间控制规则，按照演练步骤设置合理完成时限、宽限完成时限及超时规则，
对演练全过程进行时间管控。系统支持按天、小时、分钟、秒等维度配置任务执行时长，
并支持自然日计算方式，用于模拟真实应急场景中的处置时效要求），提交节点名称、
任务名称、合理完成时限、宽限完成时限等信息，系统同步校验用户的操作权限与参数
合规性，触发时间线设定信息处理流程。
###### 3.4.4.6.1.1.5.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回节点名称、任务

<!-- PDF 第 343 页 -->

名称、合理完成时限、宽限完成时限等核心字段信息，输出时间线设定信息管理维护结
果；若操作失败，返回具体错误原因，如权限不足、节点名称参数不合法、时间线设定
信息配置异常等。
##### 3.4.4.6.2 演练过程控制
对演练全程进行实时监控、事件触发、指挥调度、通信联动与日志留痕，实现可控
可管。
| 模块 | 功能点 |
| --- | --- |
| 演练过程控制 | 实时监控信息 |
|  | 事件触发信息 |
|  | 指挥调度信息 |
|  | 通信系统信息 |
|  | 日志记录信息 |

###### 3.4.4.6.2.1 功能点
###### 3.4.4.6.2.1.1 实时监控信息
功能点描述：支持对演练全过程进行实时监控，按照时间轴动态展示各演练步骤、
任务节点及参演小组的执行状态，实时反映演练推进情况。系统通过时间线方式展示不
同应急小组、值班人员及处置环节的执行进度，并区分已完成、执行中、待执行、超时、
异常中断等不同状态。
系统支持实时查看事件处置流程、任务执行时长、节点触发情况、人员响应情况及
各阶段推进进度。对于超时未处理、未按计划执行、任务异常中断等情况，系统自动进
行状态标识与预警提示。

<!-- PDF 第 344 页 -->

核心字段：演练名称、演练阶段、任务节点名称、执行状态、开始时间。
###### 3.4.4.6.2.1.1.1 输入
用户或系统发起实时监控信息相关操作（支持对演练全过程进行实时监控，按照时
间轴动态展示各演练步骤、任务节点及参演小组的执行状态，实时反映演练推进情况），
提交演练名称、演练阶段、任务节点名称、执行状态、开始时间等信息，系统同步校验
用户的操作权限与参数合规性，触发实时监控信息处理流程。
###### 3.4.4.6.2.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回演练名称、演练
阶段、任务节点名称、执行状态、开始时间等核心字段信息，输出实时监控信息查询展
示结果；若操作失败，返回具体错误原因，如权限不足、演练名称参数不合法、实时监
控信息处理失败等。
###### 3.4.4.6.2.1.2 事件触发信息
功能点描述：支持在演练过程中新增临时突发性事件，用于模拟真实应急处置过程
中突发情况不断变化、事件持续演化的业务场景。系统支持导调员在演练不同阶段新增
关联事件、衍生事件，对原有演练流程进行动态调整。
核心字段：事件名称。
###### 3.4.4.6.2.1.2.1 输入
用户或系统发起事件触发信息相关操作（支持在演练过程中新增临时突发性事件，
用于模拟真实应急处置过程中突发情况不断变化、事件持续演化的业务场景。系统支持
导调员在演练不同阶段新增关联事件、衍生事件，对原有演练流程进行动态调整），提

<!-- PDF 第 345 页 -->

交事件名称等信息，系统同步校验用户的操作权限与参数合规性，触发事件触发信息处
理流程。
###### 3.4.4.6.2.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回事件名称等核心
字段信息，输出事件触发信息管理维护结果；若操作失败，返回具体错误原因，如权限
不足、事件名称参数不合法、事件触发信息处理失败等。
###### 3.4.4.6.2.1.3 指挥调度信息
功能点描述：指挥人员可在演练过程中快速下达调度指令，包括任务分派、事件上
报、发布预警、现场签到、现场快报、数据上报、资源调度等操作。系统支持根据演练
阶段动态调整任务内容、执行时限、责任人员及处置要求。
系统支持查看各应急小组、参演单位及任务节点的执行状态，包括任务响应情况、
人员到位情况、任务完成进度、超时情况及异常状态。对于新增事件、衍生事故、情景
补充材料等信息。
核心字段：演练名称。
###### 3.4.4.6.2.1.3.1 输入
用户或系统发起指挥调度信息相关操作（指挥人员可在演练过程中快速下达调度指
令，包括任务分派、事件上报、发布预警、现场签到、现场快报、数据上报、资源调度
等操作），提交演练名称等信息，系统同步校验用户的操作权限与参数合规性，触发指
挥调度信息处理流程。

<!-- PDF 第 346 页 -->

###### 3.4.4.6.2.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回演练名称等核心
字段信息，输出指挥调度信息查询展示结果及接口处理结果；若操作失败，返回具体错
误原因，如权限不足、演练名称参数不合法、指挥调度信息接口调用失败等。
###### 3.4.4.6.2.1.4 通信系统信息
功能点描述：系统支持接收来自指挥中心、导调组或其他协同参演人员发布的任务
信息，并可查看任务详情、任务要求、处置时限、关联事件及附件材料。参演人员可对
任务进行接收确认、进度反馈、结果上报及状态更新，形成完整的任务闭环。
通信过程中支持发送文本、图片、音频、文件等多种信息内容，用于现场情况反馈、
事件上报、处置过程记录及证据材料上传。
系统支持广播通知与群组通知能力，可按照应急小组、单位、岗位范围进行定向通
知。
核心字段：通信ID、通道状态、链路类型、在线设备。
###### 3.4.4.6.2.1.4.1 输入
用户或系统发起通信系统信息相关操作（系统支持接收来自指挥中心、导调组或其
他协同参演人员发布的任务信息，并可查看任务详情、任务要求、处置时限、关联事件
及附件材料），提交通信ID、通道状态、链路类型、在线设备等信息，系统同步校验用
户的操作权限与参数合规性，触发通信系统信息处理流程。
###### 3.4.4.6.2.1.4.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回通信ID、通道状

<!-- PDF 第 347 页 -->

态、链路类型、在线设备等核心字段信息，输出通信系统信息查询展示结果及文件处理
结果；若操作失败，返回具体错误原因，如权限不足、通信ID 参数不合法、通信系统
信息接口调用失败等。
###### 3.4.4.6.2.1.5 日志记录信息
功能点描述：系统对演练创建、流程调整、任务发布、事件触发、状态变更、任务
反馈、文件上传、消息通知、调度指令、审批操作等关键业务行为进行自动留痕，并按
照时间顺序形成完整的操作日志链路。
日志信息支持关联演练任务、事件节点、操作模块及具体业务对象，便于快速定位
演练过程中某一阶段、某一人员或某一任务的操作情况。系统同时支持记录移动端、PC
端及指挥大屏等不同终端的操作来源。
对于新增事件、流程调整、任务超时、异常中断等关键操作，系统自动进行重点日
志标识，便于后续复盘分析。日志记录不可人为篡改，支持按时间、人员、模块、事件
类型等条件进行查询筛选。
核心字段：操作类型、操作内容、操作时间。
###### 3.4.4.6.2.1.5.1 输入
用户或系统发起日志记录信息相关操作（系统对演练创建、流程调整、任务发布、
事件触发、状态变更、任务反馈、文件上传、消息通知、调度指令、审批操作等关键业
务行为进行自动留痕，并按照时间顺序形成完整的操作日志链路），提交操作类型、操
作内容、操作时间等信息，系统同步校验用户的操作权限与参数合规性，触发日志记录
信息处理流程。

<!-- PDF 第 348 页 -->

###### 3.4.4.6.2.1.5.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回操作类型、操作
内容、操作时间等核心字段信息，输出日志记录信息查询展示结果及统计分析结果；若
操作失败，返回具体错误原因，如权限不足、操作类型参数不合法、日志记录信息文件
处理失败等。
##### 3.4.4.6.3 应急响应模拟
模拟真实应急响应流程，检验决策链、资源调度、协同联动与事件升级能力。
| 模块 | 功能点 |
| --- | --- |
| 应急响应模拟 | 智能应急推演决策链信息 |
|  | 资源调用信息 |
|  | 互动反馈信息 |
|  | 事件升级信息 |

###### 3.4.4.6.3.1 功能点
###### 3.4.4.6.3.1.1 智能应急推演决策链信息
功能点描述：系统支持联动应急预案中的应急资源库视频监控信息，实现救援物资
调用、人员调度，并以时间线展的方式展示演练整个过程信息。
核心字段：决策ID、环节、建议动作、依据、响应等级。
###### 3.4.4.6.3.1.1.1 输入
用户或系统发起智能应急推演决策链信息相关操作（系统支持联动应急预案中的应
急资源库视频监控信息，实现救援物资调用、人员调度，并以时间线展的方式展示演练
整个过程信息），提交决策ID、环节、建议动作、依据、响应等级等信息，系统同步校

<!-- PDF 第 349 页 -->

验用户的操作权限与参数合规性，触发智能应急推演决策链信息处理流程。
###### 3.4.4.6.3.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回决策ID、环节、
建议动作、依据、响应等级等核心字段信息，输出智能应急推演决策链信息查询展示结
果；若操作失败，返回具体错误原因，如权限不足、决策ID 参数不合法、智能应急推
演决策链信息配置异常等。
###### 3.4.4.6.3.1.2 资源调用信息
功能点描述：支持在演练过程中对应急资源进行模拟调用与调度，包括应急人员、
救援车辆、通信设备、防护装备、应急物资资源进行调度。在任务发布时，支持关联预
案配置的物资、车辆。支持厅物资管理系统中的物资进行关联，
核心字段：资源状态、资源位置。
###### 3.4.4.6.3.1.2.1 输入
用户或系统发起资源调用信息相关操作（支持在演练过程中对应急资源进行模拟调
用与调度，包括应急人员、救援车辆、通信设备、防护装备、应急物资资源进行调度。
在任务发布时，支持关联预案配置的物资、车辆。支持厅物资管理系统中的物资进行关
联），提交资源状态、资源位置等信息，系统同步校验用户的操作权限与参数合规性，
触发资源调用信息处理流程。
###### 3.4.4.6.3.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回资源状态、资源
位置等核心字段信息，输出资源调用信息管理维护结果；若操作失败，返回具体错误原

<!-- PDF 第 350 页 -->

因，如权限不足、资源状态参数不合法、资源调用信息配置异常等。
###### 3.4.4.6.3.1.3 互动反馈信息
功能点描述：支持参演人员在演练过程中通过移动端或指挥终端进行互动反馈与现
场快报，实时上报异常情况、资源需求及现场动态信息。
系统支持自由快报模式，参演人员可根据现场情况自主填写反馈内容，并上传现场
图片、音频、视频等附件材料，用于反馈事故变化、设备故障、人员伤亡、交通中断、
通信异常等现场情况。反馈内容可直接关联当前演练事件、任务节点及处置阶段。并同
步推送至导调组或指挥人员进行处理。系统支持短信通知方式，将重要反馈内容快速传
递至相关参演单位。
核心字段：反馈标题、反馈内容。
###### 3.4.4.6.3.1.3.1 输入
用户或系统发起互动反馈信息相关操作（支持参演人员在演练过程中通过移动端或
指挥终端进行互动反馈与现场快报，实时上报异常情况、资源需求及现场动态信息），
提交反馈标题、反馈内容等信息，系统同步校验用户的操作权限与参数合规性，触发互
动反馈信息处理流程。
###### 3.4.4.6.3.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回反馈标题、反馈
内容等核心字段信息，输出互动反馈信息文件处理结果及接口处理结果；若操作失败，
返回具体错误原因，如权限不足、反馈标题参数不合法、互动反馈信息接口调用失败等。

<!-- PDF 第 351 页 -->

###### 3.4.4.6.3.1.4 事件升级信息
功能点描述：支持应急事件升级。
核心字段：支持对应急演练事件的升级。
###### 3.4.4.6.3.1.4.1 输入
用户或系统发起事件升级信息相关操作（支持应急事件升级），提交支持对应急演
练的事件的升级等信息，系统同步校验用户的操作权限与参数合规性，触发事件升级信
息处理流程。
###### 3.4.4.6.3.1.4.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回支持对应急演练
的事件的升级等核心字段信息，输出事件升级信息处理结果；若操作失败，返回具体错
误原因，如权限不足、支持对应急演练的事件的升级参数不合法、事件升级信息处理失
败等。
##### 3.4.4.6.4 效果评估与反馈
演练后自动评分、问题归类、数据分析、生成改进建议与总结材料。

| 模块 | 功能点 |
| --- | --- |
| 效果评估与反馈 | 评分系统信息 |
|  | 问题记录与分类信息 |
|  | 数据分析信息 |
|  | 改进建议信息 |
|  | 演练总结会议信息 |

<!-- PDF 第 352 页 -->

###### 3.4.4.6.4.1 功能点
###### 3.4.4.6.4.1.1 评分系统信息
功能点描述：支持对演练全过程进行量化评分与综合评估，对事件报送、任务响应、
现场处置、分析研判、协同联动及总结复盘等环节进行统一评价，形成完整的演练评分
体系。
系统支持按照不同评估维度建立评分指标，包括报送效率、处置及时性、研判分析
有效性、任务执行情况、信息报送规范性、情景问答准确性、资源调度合理性、协同联
动效率等内容。评分过程中支持按照星级、分值、权重等方式进行评价，并支持填写评
价意见及问题说明。
对于演练中的各任务组、参演人员、参演单位及整体演练效果，系统支持分别进行
评分统计。
核心字段：评分人员、评分时间、评分对象。
###### 3.4.4.6.4.1.1.1 输入
用户或系统发起评分系统信息相关操作（支持对演练全过程进行量化评分与综合评
估，对事件报送、任务响应、现场处置、分析研判、协同联动及总结复盘等环节进行统
一评价，形成完整的演练评分体系），提交评分人员、评分时间、评分对象等信息，系
统同步校验用户的操作权限与参数合规性，触发评分系统信息处理流程。
###### 3.4.4.6.4.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回评分人员、评分
时间、评分对象等核心字段信息，输出评分系统信息统计分析结果；若操作失败，返回
具体错误原因，如权限不足、评分人员参数不合法、评分系统信息处理失败等。

<!-- PDF 第 353 页 -->

###### 3.4.4.6.4.1.2 问题记录与分类信息
功能点描述：支持对演练过程中发现的问题、意见及建议进行统一记录与分类管理，
形成演练问题库及整改依据。系统支持参演人员、观摩人员、评估专家等多角色提交反
馈信息，覆盖演练组织、流程执行、资源保障、通信联动、现场处置、任务协同等多个
环节。
系统支持通过文本填写、问卷调查、问题登记等方式收集反馈内容，并按照问题类
型、问题等级、发现环节、责任单位等维度进行分类管理。对于演练过程中发现的流程
问题、协同不足等情况，可记录详细的问题描述、发现时间、发现地点及现场情况。
系统支持上传现场图片、视频、附件材料等内容，作为问题佐证资料留档保存。所
有问题及反馈内容均自动记录提交人员、提交时间，满足全过程留痕管理需求。
核心字段：问题标题、问题类型、问题等级、发现时间、发现地点、发现环节、发
现人员。
###### 3.4.4.6.4.1.2.1 输入
用户或系统发起问题记录与分类信息相关操作（支持对演练过程中发现的问题、意
见及建议进行统一记录与分类管理，形成演练问题库及整改依据），提交问题标题、问
题类型、问题等级、发现时间、发现地点、发现环节、发现人员等信息，系统同步校验
用户的操作权限与参数合规性，触发问题记录与分类信息处理流程。
###### 3.4.4.6.4.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回问题标题、问题
类型、问题等级、发现时间、发现地点、发现环节、发现人员等核心字段信息，输出问
题记录与分类信息生成结果及文件处理结果；若操作失败，返回具体错误原因，如权限

<!-- PDF 第 354 页 -->

不足、问题标题参数不合法、问题记录与分类信息配置异常等。
###### 3.4.4.6.4.1.3 数据分析信息
功能点描述：支持对演练全过程数据进行综合分析与评估，结合演练执行过程中的
任务记录、事件流转、响应时效、情景问答、指挥调度、协同联动、资源调用等数据，
形成完整的演练评估分析体系。系统能够自动汇总演练过程中产生的业务数据，对演练
组织能力、响应处置能力、协同联动能力、参演人员表现等内容进行统计分析和综合评
分。
评估报告支持在线查看、保存、下载及导出，可导出为PDF、Word 等格式。
系统支持查看不同单位、不同演练类型、不同阶段的评分情况。
核心字段：演练名称、演练类型、评估对象、评估时间、评估人员。
###### 3.4.4.6.4.1.3.1 输入
用户或系统发起数据分析信息相关操作（支持对演练全过程数据进行综合分析与评
估，结合演练执行过程中的任务记录、事件流转、响应时效、情景问答、指挥调度、协
同联动、资源调用等数据，形成完整的演练评估分析体系），提交演练名称、演练类型、
评估对象、评估时间、评估人员等信息，系统同步校验用户的操作权限与参数合规性，
触发数据分析信息处理流程。
###### 3.4.4.6.4.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回演练名称、演练
类型、评估对象、评估时间、评估人员等核心字段信息，输出数据分析信息查询展示结
果及统计分析结果；若操作失败，返回具体错误原因，如权限不足、演练名称参数不合

<!-- PDF 第 355 页 -->

法、数据分析信息生成失败等。
###### 3.4.4.6.4.1.4 改进建议信息
功能点描述：支持对演练全过程中的问题、意见及优化方向进行统一收集和管理，
形成演练改进建议库。系统支持参演人员、评估专家、观摩人员及管理单位通过文本填
写、问卷调查等方式提交反馈建议，对演练准备、脚本设计、资源保障、现场组织、通
信联动、任务执行、处置流程等内容进行评价和改进建议反馈。
系统支持按照建议类型、发现环节、发现地点、所属阶段等维度对建议内容进行分
类管理，
系统支持对建议内容进行审核、流转及跟踪，记录建议采纳情况、整改措施、整改
结果及完成状态，形成建议闭环管理机制。支持上传图片、文档等附件材料，作为建议
依据留档保存。
核心字段：建议标题、建议类型、发现时间、发现地点、发现环节、发现人员。
###### 3.4.4.6.4.1.4.1 输入
用户或系统发起改进建议信息相关操作（支持对演练全过程中的问题、意见及优化
方向进行统一收集和管理，形成演练改进建议库），提交建议标题、建议类型、发现时
间、发现地点、发现环节、发现人员等信息，系统同步校验用户的操作权限与参数合规
性，触发改进建议信息处理流程。
###### 3.4.4.6.4.1.4.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回建议标题、建议
类型、发现时间、发现地点、发现环节、发现人员等核心字段信息，输出改进建议信息

<!-- PDF 第 356 页 -->

生成结果及文件处理结果；若操作失败，返回具体错误原因，如权限不足、建议标题参
数不合法、改进建议信息生成失败等。
###### 3.4.4.6.4.1.5 演练总结会议信息
功能点描述：支持组织召开演练总结会议，对演练全过程进行集中复盘、总结分析
和问题讨论。系统支持线上视频会商与线下会议结合的方式召开总结会议。
系统支持在会议过程中加入演练数据进行分享，包括任务完成情况、事件响应时间、
节点执行情况、问题记录、资源调用情况、指挥调度过程等内容，并通过时间线形式进
行展示。
核心字段：会议主题、会议类型、发起人、所属单位、开始时间、结束时间、会议
状态。
###### 3.4.4.6.4.1.5.1 输入
用户或系统发起演练总结会议信息相关操作（支持组织召开演练总结会议，对演练
全过程进行集中复盘、总结分析和问题讨论），提交会议主题、会议类型、发起人、所
属单位、开始时间、结束时间、会议状态等信息，系统同步校验用户的操作权限与参数
合规性，触发演练总结会议信息处理流程。
###### 3.4.4.6.4.1.5.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回会议主题、会议
类型、发起人、所属单位、开始时间、结束时间、会议状态等核心字段信息，输出演练
总结会议信息查询展示结果及统计分析结果；若操作失败，返回具体错误原因，如权限
不足、会议主题参数不合法、演练总结会议信息处理失败等。

<!-- PDF 第 357 页 -->

##### 3.4.4.6.5 演练数据管理
对演练成果、过程数据、复盘信息、效能指标统一管理，形成知识资产。
| 模块 | 功能点 |
| --- | --- |
| 演练数据管理 | 预案推演资产沉淀体系信息 |
|  | 全景演练复盘溯源信息 |
|  | 跨平台数据赋能信息 |
|  | 多维度演练效能诊断信息 |
|  | 分级防控准入机制信息 |

###### 3.4.4.6.5.1 功能点
###### 3.4.4.6.5.1.1 预案推演资产沉淀体系信息
功能点描述：将演练案例、数据、报告、视频入库，形成可复用经验资产。
核心字段：预案名称。
###### 3.4.4.6.5.1.1.1 输入
用户或系统发起预案推演资产沉淀体系信息相关操作（将演练案例、数据、报告、
视频入库，形成可复用经验资产），提交预案名称等信息，系统同步校验用户的操作权
限与参数合规性，触发预案推演资产沉淀体系信息处理流程。
###### 3.4.4.6.5.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回预案名称等核心
字段信息，输出预案推演资产沉淀体系信息处理结果；若操作失败，返回具体错误原因，
如权限不足、预案名称参数不合法、预案推演资产沉淀体系信息生成失败等。

<!-- PDF 第 358 页 -->

###### 3.4.4.6.5.1.2 全景演练复盘溯源信息
功能点描述：按时间轴回放全过程。
核心字段：时间轴、操作记录。
###### 3.4.4.6.5.1.2.1 输入
用户或系统发起全景演练复盘溯源信息相关操作（按时间轴回放全过程），提交时
间轴、操作记录等信息，系统同步校验用户的操作权限与参数合规性，触发全景演练复
盘溯源信息处理流程。
###### 3.4.4.6.5.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回时间轴、操作记
录等核心字段信息，输出全景演练复盘溯源信息处理结果；若操作失败，返回具体错误
原因，如权限不足、时间轴参数不合法、全景演练复盘溯源信息处理失败等。
###### 3.4.4.6.5.1.3 跨平台数据赋能信息
功能点描述：支持演练数据导出为Excel、PDF 格式。
核心字段：演练名称、文件名称。
###### 3.4.4.6.5.1.3.1 输入
用户或系统发起跨平台数据赋能信息相关操作（支持演练数据导出为Excel、PDF
格式），提交演练名称、文件名称等信息，系统同步校验用户的操作权限与参数合规性，
触发跨平台数据赋能信息处理流程。
###### 3.4.4.6.5.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回演练名称、文件

<!-- PDF 第 359 页 -->

名称等核心字段信息，输出跨平台数据赋能信息文件处理结果；若操作失败，返回具体
错误原因，如权限不足、演练名称参数不合法、跨平台数据赋能信息文件处理失败等。
###### 3.4.4.6.5.1.4 多维度演练效能诊断信息
功能点描述：支持基于演练全过程数据生成多维度演练效能诊断报告，对演练组织、
任务执行、人员响应、协同联动、指挥调度、资源保障等情况进行综合分析，形成演练
评估结果及问题诊断信息。
核心字段：演练名称。
###### 3.4.4.6.5.1.4.1 输入
用户或系统发起多维度演练效能诊断信息相关操作（支持基于演练全过程数据生成
多维度演练效能诊断报告，对演练组织、任务执行、人员响应、协同联动、指挥调度、
资源保障等情况进行综合分析，形成演练评估结果及问题诊断信息），提交演练名称等
信息，系统同步校验用户的操作权限与参数合规性，触发多维度演练效能诊断信息处理
流程。
###### 3.4.4.6.5.1.4.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回演练名称等核心
字段信息，输出多维度演练效能诊断信息统计分析结果及生成结果；若操作失败，返回
具体错误原因，如权限不足、演练名称参数不合法、多维度演练效能诊断信息生成失败
等。
###### 3.4.4.6.5.1.5 分级防控准入机制信息
功能点描述：根据应急演练的参与单位、小组、成员进行配置，演练数据仅参与其

<!-- PDF 第 360 页 -->

中的账户可查看。
核心字段：小组名称、成员名称。
###### 3.4.4.6.5.1.5.1 输入
用户或系统发起分级防控准入机制信息相关操作（根据应急演练的参与单位、小组、
成员进行配置，演练数据仅参与其中的账户可查看），提交小组名称、成员名称等信息，
系统同步校验用户的操作权限与参数合规性，触发分级防控准入机制信息处理流程。
###### 3.4.4.6.5.1.5.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回小组名称、成员
名称等核心字段信息，输出分级防控准入机制信息查询展示结果及管理维护结果；若操
作失败，返回具体错误原因，如权限不足、小组名称参数不合法、分级防控准入机制信
息配置异常等。
##### 3.4.4.6.6 系统配置和管理
提供演练环境的安全、模板、审计、保障、通告统一配置管理。

| 模块 | 功能点 |
| --- | --- |
| 系统配置和管理 | 多级安全防控矩阵信息 |
|  | 标准化应急响应模板库信息 |
|  | 全周期操作审计轨迹信息 |
|  | 业务连续性保障信息 |
|  | 全域协同预警通告信息 |

<!-- PDF 第 361 页 -->

###### 3.4.4.6.6.1 功能点
###### 3.4.4.6.6.1.1 多级安全防控矩阵信息
功能点描述：支持系统管理员配置不同用户的权限，确保各用户只能访问和操作其
授权范围内的内容。
核心字段：权限ID、角色、功能范围、数据范围。
###### 3.4.4.6.6.1.1.1 输入
用户或系统发起多级安全防控矩阵信息相关操作（支持系统管理员配置不同用户的
权限，确保各用户只能访问和操作其授权范围内的内容），提交权限ID、角色、功能范
围、数据范围等信息，系统同步校验用户的操作权限与参数合规性，触发多级安全防控
矩阵信息处理流程。
###### 3.4.4.6.6.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回权限ID、角色、
功能范围、数据范围等核心字段信息，输出多级安全防控矩阵信息管理维护结果；若操
作失败，返回具体错误原因，如权限不足、权限ID 参数不合法、多级安全防控矩阵信
息配置异常等。
###### 3.4.4.6.6.1.2 标准化应急响应模板库信息
功能点描述：系统支持通过“自动解析+上传方案”方式快速生成模板，将已发布
的演练方案一键转换为标准模板，自动解析方案中的关键内容，包括演练场景、角色分
工、流程任务、演练名称、演练类型、承办单位、参演人员、演练地点、演练科目、应
急预案等。

<!-- PDF 第 362 页 -->

核心字段：文档名称、演练名称。
###### 3.4.4.6.6.1.2.1 输入
用户或系统发起标准化应急响应模板库信息相关操作（系统支持通过“自动解析+上
传方案”方式快速生成模板，将已发布的演练方案一键转换为标准模板，自动解析方案
中的关键内容，包括演练场景、角色分工、流程任务、演练名称、演练类型、承办单位、
参演人员、演练地点、演练科目、应急预案等），提交文档名称、演练名称等信息，系
统同步校验用户的操作权限与参数合规性，触发标准化应急响应模板库信息处理流程。
###### 3.4.4.6.6.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回文档名称、演练
名称等核心字段信息，输出标准化应急响应模板库信息生成结果及文件处理结果；若操
作失败，返回具体错误原因，如权限不足、文档名称参数不合法、标准化应急响应模板
库信息配置异常等。
###### 3.4.4.6.6.1.3 全周期操作审计轨迹信息
功能点描述：系统自动记录用户的操作日志。
核心字段：账号、操作、模块、时间。
###### 3.4.4.6.6.1.3.1 输入
用户或系统发起全周期操作审计轨迹信息相关操作（系统自动记录用户的操作日
志），提交账号、操作、模块、时间等信息，系统同步校验用户的操作权限与参数合规
性，触发全周期操作审计轨迹信息处理流程。

<!-- PDF 第 363 页 -->

###### 3.4.4.6.6.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回账号、操作、模
块、时间等核心字段信息，输出全周期操作审计轨迹信息处理结果；若操作失败，返回
具体错误原因，如权限不足、账号参数不合法、全周期操作审计轨迹信息处理失败等。
###### 3.4.4.6.6.1.4 业务连续性保障信息
功能点描述：支持系统数据的定期备份和恢复功能。
核心字段：备份周期、备份方式。
###### 3.4.4.6.6.1.4.1 输入
用户或系统发起业务连续性保障信息相关操作（支持系统数据的定期备份和恢复功
能），提交备份周期、备份方式等信息，系统同步校验用户的操作权限与参数合规性，
触发业务连续性保障信息处理流程。
###### 3.4.4.6.6.1.4.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回备份周期、备份
方式等核心字段信息，输出业务连续性保障信息处理结果；若操作失败，返回具体错误
原因，如权限不足、备份周期参数不合法、业务连续性保障信息处理失败等。
###### 3.4.4.6.6.1.5 全域协同预警通告信息
功能点描述：提供系统内部通知功能，支持任务通知、演练预告通知、系统通知。
核心字段：类型、内容、接收范围、发布时间。
###### 3.4.4.6.6.1.5.1 输入
用户或系统发起全域协同预警通告信息相关操作（提供系统内部通知功能，支持任

<!-- PDF 第 364 页 -->

务通知、演练预告通知、系统通知），提交类型、内容、接收范围、发布时间等信息，
系统同步校验用户的操作权限与参数合规性，触发全域协同预警通告信息处理流程。
###### 3.4.4.6.6.1.5.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回类型、内容、接
收范围、发布时间等核心字段信息，输出全域协同预警通告信息处理结果；若操作失败，
返回具体错误原因，如权限不足、类型参数不合法、全域协同预警通告信息处理失败等。
#### 3.4.4.7 预案评估与优化
通过指标体系、自动分析、人工修订、反馈闭环、历史追溯，实现预案持续迭代优
化。
图3.4-8 预案评估与优化
##### 3.4.4.7.1 评估指标设置信息
建立标准化与自定义评估指标体系，支撑预案科学性、可操作性评价。

<!-- PDF 第 365 页 -->

| 模块 | 功能点 |
| --- | --- |
| 评估指标设置信息 | 制定评估标准信息 |
|  | 通用指标库信息 |
|  | 自定义指标库信息 |
|  | 指标项支持主题分类信息 |

###### 3.4.4.7.1.1 功能点
###### 3.4.4.7.1.1.1 制定评估标准信息
功能点描述：系统支持按照业务阶段对指标进行分类，包括启动阶段、响应阶段、
处置阶段、恢复阶段、总结阶段等，实现全过程评估管理。
系统支持自定义指标内容，可配置指标名称、指标说明、评分维度、阈值条件、分
数，用于建立本地化评估标准。
系统支持配置指标阈值规则，可根据时间、次数、类型、偏差率、完成率等条件自
动判定指标等级，并通过分数标量化展示。
核心字段：指标名称、指标说明、主题分类、业务阶段、评分维度。
###### 3.4.4.7.1.1.1.1 输入
用户或系统发起制定评估标准信息相关操作（系统支持按照业务阶段对指标进行分
类，包括启动阶段、响应阶段、处置阶段、恢复阶段、总结阶段等，实现全过程评估管
理），提交指标名称、指标说明、主题分类、业务阶段、评分维度等信息，系统同步校
验用户的操作权限与参数合规性，触发制定评估标准信息处理流程。
###### 3.4.4.7.1.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回指标名称、指标

<!-- PDF 第 366 页 -->

说明、主题分类、业务阶段、评分维度等核心字段信息，输出制定评估标准信息查询展
示结果及管理维护结果；若操作失败，返回具体错误原因，如权限不足、指标名称参数
不合法、制定评估标准信息配置异常等。
###### 3.4.4.7.1.1.2 通用指标库信息
功能点描述：根据实际的业务，系统内置指标评估指标，包括任务完成率、任务完
成时长等。
核心字段：指标名称、指标说明、主题分类、业务阶段、评分维度、指标。
###### 3.4.4.7.1.1.2.1 输入
用户或系统发起通用指标库信息相关操作（根据实际的业务，系统内置指标评估指
标，包括任务完成率、任务完成时长等），提交指标名称、指标说明、主题分类、业务
阶段、评分维度、指标等信息，系统同步校验用户的操作权限与参数合规性，触发通用
指标库信息处理流程。
###### 3.4.4.7.1.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回指标名称、指标
说明、主题分类、业务阶段、评分维度、指标等核心字段信息，输出通用指标库信息处
理结果；若操作失败，返回具体错误原因，如权限不足、指标名称参数不合法、通用指
标库信息处理失败等。
###### 3.4.4.7.1.1.3 自定义指标库信息
功能点描述：系统支持自定义指标。
核心字段：指标名称、指标说明、主题分类、业务阶段、评分维度、指标。

<!-- PDF 第 367 页 -->

###### 3.4.4.7.1.1.3.1 输入
用户或系统发起自定义指标库信息相关操作（系统支持自定义指标），提交指标名
称、指标说明、主题分类、业务阶段、评分维度、指标等信息，系统同步校验用户的操
作权限与参数合规性，触发自定义指标库信息处理流程。
###### 3.4.4.7.1.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回指标名称、指标
说明、主题分类、业务阶段、评分维度、指标等核心字段信息，输出自定义指标库信息
处理结果；若操作失败，返回具体错误原因，如权限不足、指标名称参数不合法、自定
义指标库信息处理失败等。
###### 3.4.4.7.1.1.4 指标项支持主题分类信息
功能点描述：支持指标选择中的主题、阶段的类型进行自定义和修改。
核心字段：名称。
###### 3.4.4.7.1.1.4.1 输入
用户或系统发起指标项支持主题分类信息相关操作（支持指标选择中的主题、阶段
的类型进行自定义和修改），提交名称等信息，系统同步校验用户的操作权限与参数合
规性，触发指标项支持主题分类信息处理流程。
###### 3.4.4.7.1.1.4.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回名称等核心字段
信息，输出指标项支持主题分类信息处理结果；若操作失败，返回具体错误原因，如权
限不足、名称参数不合法、指标项支持主题分类信息处理失败等。

<!-- PDF 第 368 页 -->

##### 3.4.4.7.2 自动化分析与提示信息
系统自动检查预案条款、流程、要素、冲突，给出优化建议。
| 模块 | 功能点 |
| --- | --- |
| 自动化分析与提示信息 | 预案自动分析信息 |
|  | 建议与提示信息 |

###### 3.4.4.7.2.1 功能点
###### 3.4.4.7.2.1.1 预案自动分析信息
功能点描述：支持根据演练的过程来对预案进行评测。
预案中的组织架构、职责分工、处置流程、资源配置、响应时限、联动机制等核心
信息，并形成结构化分析结果。
结合演练过程数据进行自动评估，包括任务完成时长、响应效率、资源调用情况、
事件升级情况、通信中断情况、协同处置记录等内容，分析预案执行效果。
核心字段：预案名称、演练名称。
###### 3.4.4.7.2.1.1.1 输入
用户或系统发起预案自动分析信息相关操作（支持根据演练的过程来对预案进行评
测），提交预案名称、演练名称等信息，系统同步校验用户的操作权限与参数合规性，
触发预案自动分析信息处理流程。
###### 3.4.4.7.2.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回预案名称、演练
名称等核心字段信息，输出预案自动分析信息统计分析结果及管理维护结果；若操作失

<!-- PDF 第 369 页 -->

败，返回具体错误原因，如权限不足、预案名称参数不合法、预案自动分析信息配置异
常等。
###### 3.4.4.7.2.1.2 建议与提示信息
功能点描述：AI 分析后，提出需要修改的建议。
核心字段：预案名称。
###### 3.4.4.7.2.1.2.1 输入
用户或系统发起建议与提示信息相关操作（AI 分析后，提出需要修改的建议），提
交预案名称等信息，系统同步校验用户的操作权限与参数合规性，触发建议与提示信息
处理流程。
###### 3.4.4.7.2.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回预案名称等核心
字段信息，输出建议与提示信息统计分析结果及生成结果；若操作失败，返回具体错误
原因，如权限不足、预案名称参数不合法、建议与提示信息生成失败等。
##### 3.4.4.7.3 人工优化调整配置信息
支持专家在线修订、痕迹留存、版本回退，确保优化可追溯。

| 模块 | 功能点 |
| --- | --- |
| 人工优化调整配置信息 | 手动调整信息 |
|  | 调整过程记录 |
|  | 版本回溯信息 |

<!-- PDF 第 370 页 -->

###### 3.4.4.7.3.1 功能点
###### 3.4.4.7.3.1.1 手动调整信息
功能点描述：支持对预案的文本进行修改。
核心字段：预案名称、修改人、修改时间。
###### 3.4.4.7.3.1.1.1 输入
用户或系统发起手动调整信息相关操作（支持对预案的文本进行修改），提交预案
名称、修改人、修改时间等信息，系统同步校验用户的操作权限与参数合规性，触发手
动调整信息处理流程。
###### 3.4.4.7.3.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回预案名称、修改
人、修改时间等核心字段信息，输出手动调整信息处理结果；若操作失败，返回具体错
误原因，如权限不足、预案名称参数不合法、手动调整信息处理失败等。
###### 3.4.4.7.3.1.2 调整过程记录
功能点描述：对预案修改的版本进行记录。
核心字段：预案名称、修改人、修改时间。
###### 3.4.4.7.3.1.2.1 输入
用户或系统发起调整过程记录相关操作（对预案修改的版本进行记录），提交预案
名称、修改人、修改时间等信息，系统同步校验用户的操作权限与参数合规性，触发调
整过程记录处理流程。

<!-- PDF 第 371 页 -->

###### 3.4.4.7.3.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回预案名称、修改
人、修改时间等核心字段信息，输出调整过程记录处理结果；若操作失败，返回具体错
误原因，如权限不足、预案名称参数不合法、调整过程记录处理失败等。
###### 3.4.4.7.3.1.3 版本回溯信息
功能点描述：支持对历史版本的回溯和查看。
核心字段：预案名称、修改人、修改时间。
###### 3.4.4.7.3.1.3.1 输入
用户或系统发起版本回溯信息相关操作（支持对历史版本的回溯和查看），提交预
案名称、修改人、修改时间等信息，系统同步校验用户的操作权限与参数合规性，触发
版本回溯信息处理流程。
###### 3.4.4.7.3.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回预案名称、修改
人、修改时间等核心字段信息，输出版本回溯信息查询展示结果；若操作失败，返回具
体错误原因，如权限不足、预案名称参数不合法、版本回溯信息处理失败等。
##### 3.4.4.7.4 反馈机制
收集演练、实战、处置中的问题，形成评估—反馈—优化闭环。

| 模块 | 功能点 |
| --- | --- |
| 反馈机制 | 评估反馈信息 |
|  | 评估结果信息 |

<!-- PDF 第 372 页 -->

###### 3.4.4.7.4.1 功能点
###### 3.4.4.7.4.1.1 评估反馈信息
功能点描述：对应急演练中绑定了应急预案的，可反向在预案中查看相关的演练数
据，对演练中的反馈、评估等都展示在反馈。
核心字段：演练名称。
###### 3.4.4.7.4.1.1.1 输入
用户或系统发起评估反馈信息相关操作（对应急演练中绑定了应急预案的，可反向
在预案中查看相关的演练数据，对演练中的反馈、评估等都展示在反馈），提交演练名
称等信息，系统同步校验用户的操作权限与参数合规性，触发评估反馈信息处理流程。
###### 3.4.4.7.4.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回演练名称等核心
字段信息，输出评估反馈信息查询展示结果；若操作失败，返回具体错误原因，如权限
不足、演练名称参数不合法、评估反馈信息处理失败等。
###### 3.4.4.7.4.1.2 评估结果信息
功能点描述：展示预案演练中的评分结果。
核心字段：演练名称。
###### 3.4.4.7.4.1.2.1 输入
用户或系统发起评估结果信息相关操作（展示预案演练中的评分结果），提交演练
名称等信息，系统同步校验用户的操作权限与参数合规性，触发评估结果信息处理流程。

<!-- PDF 第 373 页 -->

###### 3.4.4.7.4.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回演练名称等核心
字段信息，输出评估结果信息查询展示结果；若操作失败，返回具体错误原因，如权限
不足、演练名称参数不合法、评估结果信息处理失败等。
##### 3.4.4.7.5 优化历史追溯
记录所有优化历史，支持查询、对比、复盘、审计。
| 模块 | 功能点 |
| --- | --- |
| 优化历史追溯 | 优化过程记录 |
|  | 版本回溯信息 |

###### 3.4.4.7.5.1 功能点
###### 3.4.4.7.5.1.1 优化过程记录
功能点描述：记录历次优化原因、内容、审核人、生效时间。
核心字段：记录ID、优化原因、内容、审核人、时间。
###### 3.4.4.7.5.1.1.1 输入
用户或系统发起优化过程记录相关操作（记录历次优化原因、内容、审核人、生效
时间），提交记录ID、优化原因、内容、审核人、时间等信息，系统同步校验用户的操
作权限与参数合规性，触发优化过程记录处理流程。
###### 3.4.4.7.5.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回记录ID、优化原
因、内容、审核人、时间等核心字段信息，输出优化过程记录处理结果；若操作失败，
`,Vs=[{key:"overview",keyPoints:["应急标准、行业规范、流程制度统一存储","预案拆解为模块，支持可视化拼装、编辑、复用与版本回溯","基于大模型实现预案智能生成","建立指标体系、自动分析、人工调整、反馈闭环，持续迭代预案","支持演练设计、过程控制、响应模拟、效果评估与数据沉淀"],functionPoints:["分类层级管理","规范存储","多版本管理","模板管理","模型微调","任务对接"],keyTerms:["政务服务和应急指挥中心","总管理员","政急中心科室值班人员","技术保障人员","普通用户","业务角色一览表"]},{key:"应急分类库管理",keyPoints:["构建全省交通运输行业统一的应急预案分类体系","支持预案分类的多级结构配置","支持文件上传、版本管理、信息维护","基于事件条件进行创建","归类后的数据自动进入情景样本库"],functionPoints:["分类层级管理","维度定义","情景样本库","应急预案可视化图表信息","自定义预案多级分类信息","事件案例数据归类"],keyTerms:["应急预案分类体系","影响等级字典","应急响应等级分类","历史情景样本库","多维度字典配置"]},{key:"预案流程模块化管理",keyPoints:["将应急预案拆解为标准化模块","实现预案文本解析、要素提取、场景化管理","生成对应解析结果","支持按模块单独调整","支持版本列表查看、版本对比、版本恢复"],functionPoints:["预案文本解析结果信息","预案要素提取结果信息","结构化解析信息","关键信息提取信息","预案版本信息","可视化编制工具信息"],keyTerms:["模板版本","关键要素","单位职责","版本回溯记录信息","思维导图","风险场景-预案模板-处置方案"]},{key:"规则规范库管理",keyPoints:["统一存储应急标准、行业规范、流程制度","根据事件类别、响应等级自动抽取对应规范子集","支持预案历史版本恢复","版本识别与覆盖更新","自动触发和手动触发两种方式"],functionPoints:["规范存储与管理信息","多版本支持信息","子集分配信息","规范接入接口信息","下发接口信息","上报接口信息"],keyTerms:["应急标准范式化存储","行业规范范式化存储","流程标准范式化存储","规范子集","压缩包文件","回执信息"]},{key:"模型微调与专项预案生成",keyPoints:["基于大模型微调实现预案智能生成","根据事件场景自动匹配模板与规范","支持生成不同公文风格的预案文本","对低评分或被频繁修改的模块进行二次生成优化","构建训练样本数据集（如指令微调数据）"],functionPoints:["开源模型微调","情境自适应生成","自适应语言风格","多轮生成与反馈学习信息","自动优化信息","优化结果应用监督信息"],keyTerms:["提示词工程","监督微调（SFT/LoRA）","事件属性","多模板融合","二次生成优化","指令微调数据"]},{key:"自动化流程管理",keyPoints:["基于应急预案自动生成处置任务","将预案流程自动转化为可执行任务","建立任务从派发、执行、反馈到结案的全闭环规则","自动汇总执行时长、超时情况、任务完成率","绑定与预案相关的视频资源"],functionPoints:["任务对接与通知信息","任务闭环管理信息","任务绩效评估与报告","自动化通知信息","任务推送信息","生成执行报告信息"],keyTerms:["多种通知方式","状态机规则","闭环证明","GIS 地图","执行报告","任务完成率"]},{key:"应急模拟演练",keyPoints:["支持桌面推演、实战演练等多种模式","实现预案可演练、流程可检验","支持演练流程编排与脚本设计","支持对演练全过程进行实时监控","支持对演练全过程进行量化评分与综合评估"],functionPoints:["演练设计管理","演练过程控制","应急响应模拟","效果评估与反馈","演练数据管理","系统配置和管理"],keyTerms:["桌面推演","事件链","自然日计算方式","自由快报模式","演练问题库","一键转换为标准模板"]},{key:"预案评估与优化",keyPoints:["通过指标体系、自动分析、人工修订、反馈闭环、历史追溯","建立标准化与自定义评估指标体系","系统自动检查预案条款、流程、要素、冲突","支持专家在线修订、痕迹留存、版本回退","记录所有优化历史，支持查询、对比、复盘、审计"],functionPoints:["评估指标设置信息","自动化分析与提示信息","人工优化调整配置信息","反馈机制","优化历史追溯","制定评估标准信息"],keyTerms:["指标阈值规则","通用指标库信息","自定义指标库信息","评估—反馈—优化闭环","阈值条件"]}],Bs=[{key:"plan-req-classify",title:"应急分类库管理",sourceRef:"3.4.4.1",relatedDocKey:"plan-design-classify",relatedDocTitle:"应急分类库管理"},{key:"plan-req-module",title:"预案流程模块化管理",sourceRef:"3.4.4.2",relatedDocKey:"plan-design-module",relatedDocTitle:"预案流程模块化管理"},{key:"plan-req-standard",title:"规则规范库管理",sourceRef:"3.4.4.3",relatedDocKey:"plan-design-standard",relatedDocTitle:"规则规范库管理"},{key:"plan-req-model",title:"模型微调与专项预案生成",sourceRef:"3.4.4.4",relatedDocKey:"plan-design-model",relatedDocTitle:"模型微调与专项预案生成"},{key:"plan-req-workflow",title:"自动化流程管理",sourceRef:"3.4.4.5",relatedDocKey:"plan-design-workflow",relatedDocTitle:"自动化流程管理"},{key:"plan-req-drill",title:"应急模拟演练",sourceRef:"3.4.4.6",relatedDocKey:"plan-design-drill",relatedDocTitle:"应急模拟演练"},{key:"plan-req-optimize",title:"预案评估与优化",sourceRef:"3.4.4.7",relatedDocKey:"plan-design-drill",relatedDocTitle:"应急模拟演练（含预案评估与优化）"}],we=new Map(Vs.map(o=>[o.key,o])),be=he(ke,4),se=at(ke),Gn=be.find(o=>o.key==="overview"),Ke=be.filter(o=>o.key!=="overview"),gn=Gn?{key:"plan-req-overview",title:"需求总览",sourceRef:"3.4.1–3.4.3",level:4,component:Cn(Sn(Gn,we.get("overview")),"PlanRequirementHtmlSection"),searchText:Gn.searchText}:null,Qs=new Map(Ke.map(o=>[o.sourceRef,o])),Us=Bs.flatMap((o,k)=>{const d=Qs.get(o.sourceRef)??Ke[k];return d?[{key:o.key,title:o.title,sourceRef:o.sourceRef,level:4,component:Cn(Sn(d,we.get(o.title)),"PlanRequirementHtmlSection"),relatedDocKey:o.relatedDocKey,relatedDocTitle:o.relatedDocTitle,searchText:d.searchText}]:[]}),Vn=[{key:"req-chapter",sourceRef:se.sourceRef,title:se.title,level:3,targetKey:gn==null?void 0:gn.key,description:"功能总图、功能描述表、业务角色与详细功能。",items:[...gn?[gn]:[],...Us]}],Ys=Vn.flatMap(o=>o.items),Yn={key:"root",text:"智能应急预案管理子系统",tone:"root",children:[{key:"classify",text:"应急分类库管理",tone:"branch",children:[{text:"分类层级管理",tone:"accent",children:[{text:"应急预案可视化图表"},{text:"自定义预案多级分类"},{text:"预案文件管理"},{text:"文件查询检索"},{text:"文件预览缓存"},{text:"文件内目录"},{text:"文件标签设置"},{text:"文件知识库"}]},{text:"维度定义",tone:"accent",children:[{text:"影响等级类别定义规则"},{text:"应急响应等级设置"},{text:"多维度类别定制"}]},{text:"情景样本库",tone:"accent",children:[{text:"历史情景样本库"},{text:"事件案例数据归类"}]}]},{key:"standard",text:"规则规范库管理",tone:"branch",children:[{text:"规范存储与管理",tone:"accent",children:[{text:"应急标准范式化存储"},{text:"行业规范范式化存储"},{text:"流程标准范式化存储"},{text:"规范管理"}]},{text:"多版本支持",tone:"accent",children:[{text:"版本全流程管理"},{text:"版本回溯"}]},{text:"子集分配",tone:"accent",children:[{text:"按事件类别调用规范子集"},{text:"按响应等级调用规范子集"}]},{text:"规范接入接口",tone:"accent",children:[{text:"下发接口"},{text:"上报接口"}]}]},{key:"module",text:"预案流程模块化管理",tone:"branch",children:[{text:"模板管理",tone:"accent",children:[{text:"预案文本解析结果"},{text:"预案要素提取结果"},{text:"预案模块存储"},{text:"预案模块自定义"}]},{text:"预案场景管理",tone:"accent",children:[{text:"结构化解析"},{text:"关键信息提取"},{text:"关键信息结构存储"}]},{text:"预案模块生成与调整",tone:"accent",children:[{text:"预案版本管理"},{text:"版本回溯记录"}]},{text:"模板应用",tone:"accent",children:[{text:"可视化编制工具"},{text:"模板关联人员组织机构"},{text:"模板关联应急资源"},{text:"风险场景-预案模板-处置方案融合"}]}]},{key:"model",text:"模型微调与专项预案生成",tone:"branch",children:[{text:"开源模型微调",tone:"accent",children:[{text:"提示词工程及抽取识别微调"}]},{text:"情境自适应生成",tone:"accent",children:[{text:"自动选择模板"},{text:"自动选择规范子集"}]},{text:"自适应语言风格",tone:"accent",children:[{text:"通用语言风格预案"},{text:"专业术语风格预案"},{text:"指令式语言风格预案"}]},{text:"多轮生成与反馈学习",tone:"accent",children:[{text:"自动优化"},{text:"手动修改"},{text:"优化结果应用监督"}]}]},{key:"workflow",text:"自动化流程管理",tone:"branch",children:[{text:"任务对接与通知",tone:"accent",children:[{text:"自动化通知"},{text:"任务推送"},{text:"任务状态提醒反馈"}]},{text:"任务闭环管理",tone:"accent",children:[{text:"任务闭环管理规则"},{text:"全程跟踪任务执行"}]},{text:"地图与视频数据接入",tone:"accent",children:[{text:"地理位置信息接口"},{text:"实时视频流数据"}]},{text:"任务绩效评估与报告",tone:"accent",children:[{text:"自动记录评估过程"},{text:"生成执行报告"}]}]},{key:"drill",text:"应急模拟演练",tone:"branch",children:[{text:"演练设计管理",tone:"accent",children:[{text:"演练类型"},{text:"场景配置"},{text:"流程编排"},{text:"角色分配"},{text:"时间线设定"}]},{text:"演练过程控制",tone:"accent",children:[{text:"实时监控"},{text:"事件触发"},{text:"指挥调度"},{text:"通信系统"},{text:"日志记录"}]},{text:"应急响应模拟",tone:"accent",children:[{text:"智能应急推演决策链"},{text:"资源调用"},{text:"互动反馈"},{text:"事件升级"}]},{text:"效果评估与反馈",tone:"accent",children:[{text:"评分系统"},{text:"问题记录与分类"},{text:"数据分析"},{text:"改进建议"},{text:"演练总结会议"}]},{text:"演练数据管理",tone:"accent",children:[{text:"预案推演资产沉淀体系"},{text:"全景演练复盘溯源"},{text:"跨平台数据赋能"},{text:"多维度演练效能诊断"},{text:"分级防控准入机制"}]},{text:"系统配置与管理",tone:"accent",children:[{text:"多级安全防控矩阵"},{text:"标准化应急响应模板库"},{text:"全周期操作审计轨迹"},{text:"业务连续性保障"},{text:"全域协同预警通告"}]}]},{key:"optimize",text:"预案评估与优化",tone:"branch",children:[{text:"评估指标设置",tone:"accent",children:[{text:"制定评估标准"},{text:"通用指标库"},{text:"自定义指标库"},{text:"指标项主题分类"}]},{text:"自动化分析与提示",tone:"accent",children:[{text:"预案自动分析"},{text:"建议与提示"}]},{text:"人工优化调整配置",tone:"accent",children:[{text:"手动调整"},{text:"调整过程记录"},{text:"版本回溯"}]},{text:"反馈机制",tone:"accent",children:[{text:"评估反馈"},{text:"评估结果"}]},{text:"优化历史追溯",tone:"accent",children:[{text:"优化过程记录"},{text:"版本回溯"}]}]},{key:"operations",text:"八类标准流程模块",tone:"danger",children:[{text:"先期处置"},{text:"分级响应"},{text:"组织指挥"},{text:"应急处置"},{text:"保障行动"},{text:"信息发布"},{text:"响应中止"},{text:"后期处理"}]}]};function jn(o){var k;return o.tone==="note"||o.tone==="annotation"?0:(k=o.children)!=null&&k.length?o.children.reduce((d,L)=>d+jn(L),0):1}const Fn=(Yn.children??[]).filter(o=>o.key&&o.key!=="operations"),Hn=(Yn.children??[]).find(o=>o.key==="operations"),ae=Object.fromEntries(Fn.map(o=>{var k;return[o.key,{modules:((k=o.children)==null?void 0:k.filter(d=>d.tone!=="note").length)??0,points:jn(o)}]}));var de;const re={domains:Fn.length,modules:Fn.reduce((o,k)=>{var d;return o+(((d=k.children)==null?void 0:d.length)??0)},0),points:Fn.reduce((o,k)=>o+jn(k),0),operations:((de=Hn==null?void 0:Hn.children)==null?void 0:de.filter(o=>o.tone!=="note").length)??0},qn=[{id:"plan-classification",docKey:"plan-design-classify",type:"term",term:"应急分类库",title:"应急分类库",description:"不是一份分类清单，而是「多级分类树 + 预案文件 + 属性维度」的组合：主要类别之下细分具体事件类型，节点可关联预案文件与预案实例。模型生成专项预案时依赖该树的层级信息做事件归类，因此分类编码需稳定且可被下游引用，禁止用名称当外键。"},{id:"plan-dimension",docKey:"plan-design-classify",type:"term",term:"影响等级",title:"影响等级与属性维度",description:"影响等级（一般、较大、重大、特别重大）与应急响应等级、责任部门、时间敏感性、触发条件、事件来源、气象影响、交通通断类型、资源依赖、是否跨区域、是否需专家参与等属性，均以字典项维护（字典项名称 + 字典项编码）。实现上应做成可扩展的键值属性而非固定列，新增维度时无需改表；影响等级与响应等级各自独立成字典，不要合并成一个「级别」字段。"},{id:"plan-scenario-sample",docKey:"plan-design-classify",type:"term",term:"情景样本库",title:"情景样本库",description:"汇聚历史突发事件与典型案例形成的可复用样本，数据来源是应急事件子系统按样本库创建条件自动归档，而非人工逐条录入。核心字段包含应急响应区域、灾害类型、交通通断情况、受伤 / 死亡人数，是模型训练与情景匹配的训练集来源，需保留数据来源标识以便回溯。"},{id:"plan-classify-national-standard",docKey:"plan-design-classify",type:"term",term:"国家应急预案分级分类标准",title:"分类标准对齐",description:"分类层级要与国家应急预案分级分类标准保持一致：先按自然灾害、事故灾难、公共卫生、社会安全等大类划分，再逐步细分到具体事件类型。实现上应把标准版本纳入分类库元数据，标准更新时保留旧版本的分类映射，避免历史预案因分类调整而失去归属；分类编码一旦被预案引用不可随意重编。"},{id:"plan-classify-event-type",docKey:"plan-design-classify",type:"term",term:"具体应急事件类型",title:"事件类型叶子节点",description:"「主要类别」之下的最细一层，是预案挂接与事件归类的实际落点。它需要稳定编码、上级路径以及适用灾害、区域等属性；实现时把它设计为分类树上可挂载的叶子节点，而不是自由文本，新增或改名走变更流程，并用编码做外键，避免按名称匹配导致同义异名。"},{id:"plan-classify-multi-view",docKey:"plan-design-classify",type:"tech",term:"多维视图",title:"预案多维视图",description:"基于影响等级、响应等级、责任部门、灾害类型、行政区划等数字化属性自动组合出的查询视图，不需要为每个维度单独建一套菜单。实现上属性存为键值或字典引用，视图由维度组合动态生成；维度值变更后视图需重新计算，不要把视图结果当成静态表固化。"},{id:"plan-classify-event-layer",docKey:"plan-design-classify",type:"tech",term:"事件分层信息",title:"事件分层信息",description:"分类库向模型输出的层级路径（大类 → 子类 → 事件类型），用于让模型判断事件归属并选择对应预案条目。实现上输出的应是稳定的编码路径而非展示名称，并与事件子系统的事件分类保持同一口径；分层缺失会让模型回退到模糊匹配，生成结果的可解释性随之下降。"},{id:"plan-classify-multi-level",docKey:"plan-design-classify",type:"term",term:"多级分类定义",title:"多级分类维护",description:"支持任意层级的分类树增删改与拖拽调整。实现上需校验父子关系防止成环，移动节点时同步更新子树路径；删除分类前先检查是否挂有预案或子类，建议逻辑删除并保留历史引用，避免已归档预案的归属信息被物理删除。"},{id:"plan-classify-knowledge-base",docKey:"plan-design-classify",type:"tech",term:"文件纳入知识库",title:"预案文件纳入知识库",description:"预案附件在上传后可解析入库，成为可检索、可被问答助手引用的知识资产。实现上要保留原始文件与解析文本两套数据，记录解析状态与失败原因；知识库切分粒度按章节或条款而非整篇，便于模型检索时精准命中，并注意涉密文件的权限过滤。"},{id:"plan-classify-case-data",docKey:"plan-design-classify",type:"term",term:"事件案例数据归类",title:"情景样本归类",description:"把实际发生的突发事件案例按分类库归入对应事件类型，沉淀为历史情景样本。实现上样本应携带来源事件编号、发生时间、区域、灾害类型与处置结果，归入分类后与事件类型建立关联；数据来源最好是事件子系统自动归档，人工补录需留操作痕迹。"},{id:"plan-rule-library",docKey:"plan-design-standard",type:"term",term:"规则规范库",title:"规则规范库",description:"对应急标准、行业规范、流程标准做范式化存储，供预案生成时按类型调用作为合规依据。每条规范至少携带规范类型、版本号、启用状态、适用部门、适用响应等级、适用灾害类型，这些字段就是生成阶段的过滤条件。解析出的「预案级别 / 预案类型 / 适用范围」等核心要素属于规范的结构化结果，不要与原始附件混存。"},{id:"plan-versioning",docKey:"plan-design-standard",type:"term",term:"多版本支持",title:"多版本与状态机",description:"同一预案在不同阶段、批次、适用背景下形成多个内容版本，版本需有版本号、创建时间、状态（草稿 / 已发布 / 已失效）及适用范围。实现要点是版本保存完整内容快照而非增量 diff，历史版本默认只读，支持对比、恢复与封存；「是否当前版本」只能有一个为真，切换需原子操作。"},{id:"plan-subset",docKey:"plan-design-standard",type:"tech",term:"规范子集",title:"规范子集调用",description:"生成专项预案时按事件类别 + 响应等级快速取出特定规范子集，避免无关条文干扰模型上下文。本质是规则库上的多维过滤视图，接口应支持按类型、等级、灾害类型组合查询并返回子集标识，而不是让调用方自行拼接全量规范。"},{id:"plan-standard-interface",docKey:"plan-design-standard",type:"tech",term:"上报接口",title:"规范下发与上报接口",description:"上报接口把本系统规则修改记录同步至监管平台以支持变更追溯，反向的下发接口则从上级应急管理部门经 API 拉取最新规范库（压缩包形式）。工程上需明确全量 / 增量语义、压缩包解包校验、重复拉取的幂等与版本冲突策略，并保证上报记录不可被本地修改，否则追溯链断裂。"},{id:"plan-standard-normalize",docKey:"plan-design-standard",type:"tech",term:"范式化存储",title:"规范范式化存储",description:"把应急标准、行业规范、流程标准从「附件文档」拆成统一的结构化字段（规范类型、适用部门、适用响应等级、适用灾害类型、版本等）后再存储，使生成阶段可以按条件检索。实现上原始附件与结构化要素分表保存，要素抽取失败时仍保留附件；不要把不同来源的规范字段硬塞进同一张宽表。"},{id:"plan-standard-core-elements",docKey:"plan-design-standard",type:"term",term:"核心要素",title:"规范核心要素",description:"指预案级别、预案类型、适用范围等决定规范适用性的关键字段，是后续过滤与推荐的依据。实现上应以字典或枚举承载并保留原文表述，抽取结果标注置信度与来源段落，便于人工复核；核心要素变更需触发版本升级，避免历史引用产生歧义。"},{id:"plan-standard-structured-storage",docKey:"plan-design-standard",type:"tech",term:"结构化存储",title:"规范结构化存储",description:"解析后的关键信息按统一 schema 入库，支持按类型、等级、部门、灾害类型组合查询。实现上要为每条规范记录解析版本与解析时间，重复解析时覆盖而非追加；结构化字段与原文条款建立锚点关系，保证生成内容可回溯到具体条文。"},{id:"plan-standard-push-interface",docKey:"plan-design-standard",type:"tech",term:"下发接口",title:"规范下发接口",description:"从上级应急管理部门经 API 拉取最新规范库，接口传输的是压缩包。实现上需约定全量或增量语义、包内清单与校验和、解包后的字段映射，以及重复拉取的幂等与版本冲突策略；拉取失败要可重试并保留上一版可用快照，不能因一次同步失败阻塞预案生成。"},{id:"plan-standard-change-trace",docKey:"plan-design-standard",type:"tech",term:"变更追溯",title:"规范变更追溯",description:"自动上报的规则修改记录要形成不可篡改的追溯链：谁、何时、改了哪条规范、改前改后是什么。实现上记录应只追加不修改，敏感字段用审计表或事件日志保存，并在规范主表保留当前版本指针；仅靠业务表的时间戳无法还原历史修改内容。"},{id:"plan-standard-three-libraries",docKey:"plan-design-standard",type:"term",term:"三类规则库",title:"国家 / 行业 / 本地三类规则库",description:"国家标准库、行业标准库、本地化规则库分别对接不同来源，优先级与冲突处理必须在配置层明确：通常本地补充优先于行业、行业优先于国家通用条款，但强制性国家规范不可被覆盖。实现上用来源标识加优先级字段做合并，冲突时保留全部依据并提示人工确认，避免静默覆盖。"},{id:"plan-standard-smart-recommend",docKey:"plan-design-standard",type:"tech",term:"智能分析推荐",title:"智能分析推荐",description:"基于预案内容、历史使用与事件特征，向用户推荐可复用的规范、条款或预案片段。实现上推荐服务与主业务解耦，输入输出留日志便于评估；推荐结果必须可解释（命中哪些条件、引用哪条规范），并允许用户一键忽略，避免把推荐做成不可控的黑盒。"},{id:"plan-standard-llm-adapt",docKey:"plan-design-standard",type:"tech",term:"通用大模型接口适配",title:"大模型接口适配",description:"对多家大模型服务做统一封装（鉴权、超时、重试、限流、内容过滤），业务侧只依赖统一接口，避免绑定单一厂商。实现上要处理提示词长度与上下文裁剪、返回 JSON 结构校验、失败降级（模板或人工），并记录每次调用的模型版本与 token 消耗，便于成本与效果评估。"},{id:"plan-modularization",docKey:"plan-design-module",type:"tech",term:"模块化管理",title:"预案模块化拆解",description:"预案被拆为先期处置、分级响应、组织指挥、应急处置、保障行动、信息发布、响应中止、后期处理等标准模块，每块可独立定义、存储、编辑后按需拼装。模块类型应是稳定枚举（供生成、可视化编制、版本回溯共同引用），模块内容与模板结构分层存储，避免改动模板即破坏既有模块。"},{id:"plan-structure-recognition",docKey:"plan-design-module",type:"tech",term:"预案结构识别",title:"预案结构化解析",description:"借助 AI 模型对预案文本做全量结构化解析，抽取预案要素、预警响应条件、应急响应条件、响应措施、单位职责等信息并结构化存储。解析由模板中配置的提示词驱动，结果需按模板版本区分并记录解析过程与状态，支持重复解析覆盖；原始文本与抽取结果要分开落库，否则无法复核抽取准确性。"},{id:"plan-module-template-library",docKey:"plan-design-module",type:"term",term:"模板库",title:"预案模板库",description:"模板库与模块库是两层概念：模板是面向某类预案的可复用骨架，模块是可独立引用的标准处置单元。实现上模板保存对模块的引用与顺序，而不是复制模块内容；模板升级不应影响已生成预案，需按引用时的版本快照还原。"},{id:"plan-module-standard-blocks",docKey:"plan-design-module",type:"term",term:"标准流程模块",title:"八类标准流程模块",description:"指先期处置、分级响应、组织指挥、应急处置、保障行动、信息发布、响应中止、后期处理等可独立定义、存储的处置单元。实现上模块类型用稳定枚举，模块内容与模板编排分层存储；同一模块可被多份预案复用，修改模块需评估对已发布预案的影响并走版本管理。"},{id:"plan-module-elements",docKey:"plan-design-module",type:"term",term:"预案要素",title:"预案要素抽取",description:"从预案文本中抽取的结构化字段，包括适用事件、启动条件、响应措施、责任单位等。实现上先定义要素 schema 再抽取，字段缺失与抽取失败要区分；抽取结果保留原文位置用于溯源，模型升级后应支持按模板版本重新解析对比。"},{id:"plan-module-unit-duty",docKey:"plan-design-module",type:"term",term:"单位职责",title:"单位职责抽取",description:"从预案中识别「哪个单位在什么阶段做什么」，并尽量映射到组织树中的真实机构。实现上职责条目应包含单位、角色、动作、阶段与依据条款；映射不唯一时保留原文并标记待确认，避免把职责错误挂到无关机构导致战时派单失误。"},{id:"plan-module-structured-parse",docKey:"plan-design-module",type:"tech",term:"结构化解析",title:"结构化解析任务",description:"借助 AI 对预案文本做章节、要素、条件、措施、职责的全面解析。实现上解析任务要异步化并记录状态（排队、成功、失败、部分成功），失败可重试；解析结果按模板版本隔离，原始文本只读，避免解析过程反向修改原文。"},{id:"plan-module-version",docKey:"plan-design-module",type:"tech",term:"版本管理",title:"模块版本管理",description:"预案模块每次调整都保留历史版本，支持追溯与回滚。实现上版本保存完整内容快照，历史版本只读；「当前版本」唯一且切换原子，引用模块的预案需记录所引版本，避免模块更新后历史预案内容被悄悄改变。"},{id:"plan-module-visual-editor",docKey:"plan-design-module",type:"tech",term:"可视化编制工具",title:"可视化编制",description:"提供拖拽式预案编排界面，把模块、步骤、责任人以可视化方式组合。实现上画布数据应保存为结构化 JSON（节点、连线、属性），而不是截图或富文本；保存时做环路与孤立节点校验，渲染层与存储结构解耦便于后续导出与对比。"},{id:"plan-module-mixed-edit",docKey:"plan-design-module",type:"tech",term:"流程图与表格混合编辑",title:"流程图与表格混编",description:"同一份预案既可画流程图，也可用表格维护步骤、责任与时限。实现上两者应共享同一套节点数据模型：流程图是视图，表格是另一种视图，编辑任一侧都写回同一份数据；避免各存一份导致内容不一致，导出时再按需渲染成图或表。"},{id:"plan-module-scene-template-plan",docKey:"plan-design-module",type:"term",term:"风险场景-预案模板-处置方案",title:"风险场景—模板—处置方案",description:"这是三层联动关系：风险场景描述「可能发生什么」，预案模板描述「按什么骨架响应」，处置方案是「本次实际执行的版本」。实现上用场景、模板、方案三类实体加关联表串起来，方案生成时记录所用的模板与模块版本，确保演练或真实处置后可以回溯依据。"},{id:"plan-module-qa-assistant",docKey:"plan-design-module",type:"tech",term:"问答助手",title:"预案问答助手",description:"面向预案内容的检索问答入口，回答需引用原文条款而不是自由生成。实现上走「检索加大模型总结」的链路，检索结果带文档与段落锚点；无命中时应明确告知而不是编造，涉密内容按用户权限过滤后再进入上下文。"},{id:"plan-module-knowledge-graph",docKey:"plan-design-module",type:"tech",term:"知识图谱生成",title:"预案知识图谱",description:"把预案中的事件、单位、资源、措施、条件抽成实体与关系，形成可查询的图谱。实现上先定义实体与关系 schema，再按预案版本抽取，图谱节点保留来源锚点；图谱用于辅助检索与推理，不能替代预案正文作为执行依据。"},{id:"plan-finetune",docKey:"plan-design-model",type:"tech",term:"开源大语言模型",title:"开源大模型微调",description:"基于开源大语言模型（如 ChatGLM、Qwen），用预案模板库与规则规范库数据做提示词工程和抽取识别微调，使模型更准确地抽取预案要素。落地时要约定训练数据版本、模型服务部署方式、推理超时与失败降级（如回退规则模板或人工处理），并把每轮生成后的抽取反馈沉淀为再训练样本。"},{id:"plan-context-adaptive",docKey:"plan-design-model",type:"tech",term:"情境自适应",title:"情境自适应生成",description:"生成专项预案时，模型依据事件类型、严重程度、责任部门等属性自动选择模板模块与规范子集。实现上是一组「事件属性 → 模块 / 子集」的可配置匹配规则，不要硬编码在模型提示词里；匹配结果需可解释、可回查，便于评估生成内容是否选错依据。"},{id:"plan-model-prompt-engineering",docKey:"plan-design-model",type:"tech",term:"提示词工程",title:"提示词工程",description:"为不同预案类型、不同抽取任务维护可版本化的提示词模板，而不是把提示词写死在代码里。实现上提示词与模型、任务类型绑定并存版本，变更需可回滚；输入要做长度裁剪与敏感信息过滤，输出按约定 schema 解析并校验，解析失败走重试或人工。"},{id:"plan-model-extract-finetune",docKey:"plan-design-model",type:"tech",term:"抽取识别微调",title:"抽取识别微调",description:"在开源模型上用预案模板库与规范库数据做领域微调，提升要素抽取准确率。实现上训练数据要标注来源与版本、去重并脱敏，训练集与验证集分离；微调模型上线前需与基线模型做回归对比，保留旧模型以便快速回退。"},{id:"plan-model-multi-round-finetune",docKey:"plan-design-model",type:"tech",term:"多轮迭代微调",title:"多轮迭代微调",description:"把每轮生成与人工修改的反馈沉淀为再训练样本，持续优化模型。实现上反馈数据要清洗（剔除误操作与敏感内容）并记录来源轮次，训练与评估指标固定，避免只追求生成速度而忽略抽取准确率；模型版本与训练数据版本需一并登记。"},{id:"plan-model-event-attrs",docKey:"plan-design-model",type:"term",term:"事件属性",title:"事件属性匹配",description:"事件类型、严重程度、责任部门等属性是情境自适应的输入特征。实现上属性取值必须与分类库、组织树使用同一套字典与编码，生成前先做完整性校验；缺失关键属性时应提示补充或走默认策略，不能静默按空值生成。"},{id:"plan-model-language-style",docKey:"plan-design-model",type:"term",term:"语言风格",title:"预案语言风格",description:"同一份预案面向综合调度、专项处置、现场执行等不同读者，需要通用语言、专业术语或指令式等不同风格。实现上把风格做成可配置的生成参数（语气、术语密度、句式），并与预案类型绑定；风格切换只影响表达，不应改变处置步骤与责任主体。"},{id:"plan-model-field-plan",docKey:"plan-design-model",type:"term",term:"现场处置方案",title:"现场处置方案",description:"面向一线执行人员的精简预案形态，强调动作、时限与责任人，通常比综合或专项预案更短更具体。实现上应与专项预案共享同一套模块与要素数据，按受众裁剪内容；生成时保留到完整预案的引用，避免现场方案与主预案长期失同步。"},{id:"plan-model-auto-match",docKey:"plan-design-model",type:"tech",term:"自动选择合适的模板模块和规范子集",title:"模板与规范子集匹配",description:"根据事件属性自动挑选模板模块与规范子集，是生成质量的关键。实现上匹配规则应可配置、可解释，记录「命中了哪些条件、选中了哪些模块与子集」；规则与模型推荐并存时要有优先级和人工干预入口，避免选错依据后难以发现。"},{id:"plan-model-manual-save",docKey:"plan-design-model",type:"tech",term:"手动修改并保存",title:"人工修改与保存",description:"允许用户在生成结果上手工修改并保存，作为最终采用版本。实现上保存的是完整预案快照并记录修改人、时间与差异，修改内容可回流为再训练样本；要区分「模型生成」与「人工修订」字段，便于评估模型效果与责任追溯。"},{id:"plan-model-retrain",docKey:"plan-design-model",type:"tech",term:"再训练",title:"反馈再训练",description:"将每轮生成后的抽取反馈用于模型微调与再训练，形成越用越准的闭环。实现上反馈采集要有统一入口与字段结构，先做质量筛选再入训练集；再训练上线需灰度与回归，防止新模型在少数场景变好、整体变差。"},{id:"plan-automation-flow",docKey:"plan-design-workflow",type:"tech",term:"自动化流程",title:"自动化流程管理",description:"把生成后的预案与业务系统对接，自动向责任单位推送任务、设置跟进提醒、监控反馈，并按阶段生成计划时间轴；同时对接 GIS 与实时监控获取地理信息、视频流。落地关键是定义清晰的任务状态机与外部系统回调契约，外部推送需幂等重试，避免重复派单。"},{id:"plan-task-closed-loop",docKey:"plan-design-workflow",type:"tech",term:"任务闭环管理",title:"任务闭环",description:"围绕任务状态更新、完成确认、反馈收集形成闭环，全程跟踪执行情况并生成执行报告。数据上需保留每次状态变更的操作人、时间与附件，状态流转单向且可校验（如未完成不可直接关闭），超时未反馈应触发提醒，否则「闭环」只有展示意义。"},{id:"plan-workflow-system-integration",docKey:"plan-design-workflow",type:"tech",term:"业务系统对接",title:"业务系统对接",description:"预案生成后要与事件、指挥调度、通知等系统交换任务与状态。实现上先定接口契约（任务编号、责任单位、时限、状态枚举、回调地址），再做鉴权与幂等；跨系统任务用唯一业务号去重，失败重试有上限并进入人工处理队列。"},{id:"plan-workflow-auto-notify",docKey:"plan-design-workflow",type:"tech",term:"自动化通知",title:"自动化通知",description:"按预案阶段自动向责任单位推送任务与提醒。实现上通知渠道（站内、短信、消息）与模板可配置，发送记录留痕；要处理重复通知、发送失败重试与用户退订，重要任务需有送达确认，不能只调用一次接口就算完成。"},{id:"plan-workflow-task-schedule",docKey:"plan-design-workflow",type:"tech",term:"任务调度",title:"任务调度",description:"根据预案阶段、责任单位与时限把任务派发到具体执行方。实现上派单规则可配置，任务状态用状态机流转；同一任务避免重复派发，跨单位协同时明确主办与协办，超时未接收应自动提醒或升级。"},{id:"plan-workflow-timeline",docKey:"plan-design-workflow",type:"tech",term:"计划时间轴",title:"计划时间轴",description:"按预案阶段设置计划开始与结束时间，形成任务推进的基准线。实现上计划时间与实际执行时间分开存储，便于计算延误；阶段变更要留版本，避免调整计划后历史考核数据被重算。"},{id:"plan-workflow-progress",docKey:"plan-design-workflow",type:"tech",term:"实时进度反馈",title:"进度反馈",description:"执行方在任务各阶段回填进度与状态，供指挥侧实时掌握。实现上反馈要结构化（状态、百分比、说明、附件）并带时间戳，状态只能按规则前进；对长时间无反馈的任务触发提醒，避免时间轴停留在「已派发」而失真。"},{id:"plan-workflow-complete-confirm",docKey:"plan-design-workflow",type:"tech",term:"完成确认",title:"任务完成确认",description:"任务完成后由执行方确认、必要时由上级复核，才能关闭。实现上区分「提交完成」与「确认完成」，保留确认人、时间与依据；未完成或未反馈的任务不能直接关闭，避免闭环数据虚高。"},{id:"plan-workflow-geo",docKey:"plan-design-workflow",type:"tech",term:"地理位置信息",title:"地理位置信息",description:"对接 GIS 获取事件地点、队伍与资源位置，用于指挥研判。实现上坐标统一坐标系并校验范围，位置数据带采集时间；GIS 只做展示与辅助，关键处置动作仍以业务数据为准，避免地图滞后造成误判。"},{id:"plan-workflow-video",docKey:"plan-design-workflow",type:"tech",term:"视频流数据",title:"视频流接入",description:"对接实时监控系统获取现场视频流，辅助指挥决策。实现上视频地址按权限下发并设置有效期，播放失败要有降级提示；视频只作为情报参考，不写入任务状态，避免把监控可用性当成处置进度。"},{id:"plan-workflow-report",docKey:"plan-design-workflow",type:"tech",term:"执行报告",title:"执行报告",description:"系统自动记录预案执行全过程并生成报告，供复盘与优化。实现上报告数据来自任务状态、反馈与时间戳的汇总，关键指标可配置；报告要能追溯到原始记录，不能只保存最终汇总值而丢失过程明细。"},{id:"plan-drill-script",docKey:"plan-design-drill",type:"tech",term:"演练脚本",title:"演练脚本配置",description:"演练脚本包含演练情景信息、事件链及关键节点触发条件、关联文件、关联任务；事件链按时间进程串联流程并支持多分支。脚本是演练执行期的唯一配置源，情景事件要支持按阶段追加，关联文件涵盖文本、图片、语音、视频，存储上需区分脚本静态定义与运行期产生的实例数据。"},{id:"plan-drill-director",docKey:"plan-design-drill",type:"term",term:"导调",title:"导调与事件注入",description:"导调员在预设节点发布新增事件，作为原有事故的关联或衍生事故，可据此升级或调整演练级别；导调组、执行组、评估组、观摩组按角色划分权限。实现时应让导调注入与脚本预设事件走同一事件通道并统一打时间戳，否则回放与评估会漏事件。"},{id:"plan-effect-evaluation",docKey:"plan-design-drill",type:"tech",term:"效果评估",title:"演练效果评估",description:"结合评分指标与过程记录对演练过程、参演人员、参演组织、整体效果打分，指标覆盖报送效率、响应及时性、研判有效性、报告规范性、情景问答准确性等。系统自动集成情景问答得分、完成时间等已有数据，专家再补充点评与人工打分；评分项与权重需可配置，评估报告支持 PDF/Word 导出与存档。"},{id:"plan-drill-data-isolation",docKey:"plan-design-drill",type:"tech",term:"与真实数据存储完全隔离",title:"演练数据隔离",description:"演练数据需放入独立存储区域，采集环节打特定标识，存储上采用不同数据库表或数据文件夹分类存放，防止与真实业务数据混淆。实现时应在数据层保留 drill 标识并默认在业务查询中过滤，只做「逻辑隔离 + 文件夹区分」不足以防止真实数据被演练流程写入污染。"},{id:"plan-typo-direct-user-report",docKey:"plan-design-drill",type:"typo",term:"直接用户评估报告",title:"疑似漏字",description:"原文「能够自动集成系统已有的数据，如情景问答得分、完成时间等信息，直接用户评估报告」缺少谓语或介词，语义不完整，推测为 OCR 或录入时漏字。",correction:"直接用于评估报告"},{id:"plan-drill-tabletop",docKey:"plan-design-drill",type:"term",term:"桌面推演",title:"桌面推演",description:"不调动真实资源，由参演人员在系统内按脚本推演处置动作，用于检验预案流程与协同。实现上推演与真实处置共用任务与事件模型但数据隔离，推演时钟可加速或暂停，所有动作打演练标识，避免与真实数据混淆。"},{id:"plan-drill-plan",docKey:"plan-design-drill",type:"term",term:"演练计划方案",title:"演练计划方案",description:"一次演练的总体设计：演练目标、类型、场景、参演单位、流程与时间安排。实现上计划方案是演练实例的模板来源，确认后生成独立的演练实例并记录所用版本；计划调整需留痕，避免演练开始后随意改动导致评估口径不一致。"},{id:"plan-drill-scenario-info",docKey:"plan-design-drill",type:"term",term:"演练情景信息",title:"演练情景信息",description:"包括事发背景、说明材料以及各阶段新增的情景事件。实现上情景按阶段组织并可追加，每条情景带出现时间与触发条件；情景文本、图片、音视频分开存储，运行期新增情景与脚本预设情景走同一数据通道。"},{id:"plan-drill-event-chain",docKey:"plan-design-drill",type:"tech",term:"事件链",title:"演练事件链",description:"按时间进程把演练流程串成事件序列，划分关键阶段并配置触发条件。实现上事件链是脚本的核心结构，节点包含事件、时间、条件与关联任务；要防止游离节点与断链，运行期按时间与条件双驱动推进并记录实际触发时刻。"},{id:"plan-drill-role-groups",docKey:"plan-design-drill",type:"term",term:"导调组、执行组、评估组、观摩组",title:"演练角色分组",description:"演练组织通常分为导调组、执行组、评估组、观摩组，各自权限不同：导调可注入事件，执行组处置，评估组打分，观摩组只读。实现上按分组配置功能权限与数据可见范围，参演人员直接关联组织通讯录，避免手工重复录入。"},{id:"plan-drill-directory",docKey:"plan-design-drill",type:"tech",term:"组织通讯录",title:"组织通讯录关联",description:"参演人员从指挥系统组织通讯录直接选取，保证人员与单位关系真实。实现上以人员与机构唯一编码关联，不复制姓名电话等易变字段；通知发送前校验在职与联系方式，人员岗位变动后演练记录仍保留当时快照。"},{id:"plan-drill-timeline",docKey:"plan-design-drill",type:"tech",term:"时间轴",title:"演练时间轴",description:"把演练中的事件、指令、反馈按时间排序，支持回放到任意时刻。实现上所有动作统一打演练相对时间与绝对时间，时间轴由事件流生成而非手工维护；回放只读，不能通过回放修改演练数据。"},{id:"plan-drill-condition-trigger",docKey:"plan-design-drill",type:"tech",term:"预设条件触发特定事件",title:"条件触发事件",description:"在脚本里为事件设置时间或状态条件，满足时自动触发。实现上触发条件应结构化配置（时间点、前置任务完成、人工确认），触发后记录触发来源；自动触发与导调手动注入要能区分，便于复盘时判断事件是否按计划发生。"},{id:"plan-drill-commander",docKey:"plan-design-drill",type:"term",term:"演练指挥员",title:"演练指挥员",description:"演练中的指挥角色，可下达指令、调整任务、通知人员并接收导调注入的新增事件。实现上指挥员操作与执行组反馈走同一消息通道并统一编号，指令要有目标对象与时限，避免只发消息不跟踪执行。"},{id:"plan-drill-operation-log",docKey:"plan-design-drill",type:"tech",term:"操作日志",title:"演练操作日志",description:"自动记录每个操作的时间、内容与执行人，是评估与复盘的证据。实现上日志只追加不修改，包含操作对象的前后状态；查询按演练实例隔离，导出时脱敏，避免日志被业务修改覆盖。"},{id:"plan-drill-response-action",docKey:"plan-design-drill",type:"tech",term:"模拟应急响应动作",title:"模拟响应动作",description:"演练中按预设预案提示或执行疏散、物资调用、人员调度等响应动作。实现上动作清单来自预案模块而不是硬编码，执行结果回写任务状态；模拟动作要明确是演练行为，不触发真实通知或资源调度。"},{id:"plan-drill-decision-actions",docKey:"plan-design-drill",type:"tech",term:"疏散指示、救援物资调用、人员调度",title:"推演决策动作",description:"智能推演决策链会提示或执行的三类典型动作，分别对应人员安全、资源保障与力量投送。实现上每类动作拆成可配置的动作模板（对象、数量、地点、时限），执行前校验资源可用性；演练中只做模拟占用，不能扣减真实库存。"},{id:"plan-drill-resource-call",docKey:"plan-design-drill",type:"tech",term:"模拟调用各类应急资源",title:"模拟资源调用",description:"演练中模拟调用设备、人员、车辆等资源，检验分配是否合理。实现上资源数据来自应急资源主数据，模拟调用打演练标识并单独记账；要能发现资源冲突与超配，评估时以模拟占用与实际需求的匹配度为准。"},{id:"plan-drill-interaction",docKey:"plan-design-drill",type:"term",term:"互动反馈",title:"演练互动反馈",description:"参演人员在演练中报告异常或提出资源调整需求。实现上反馈应关联具体演练步骤与位置，进入导调或指挥的处理队列；反馈与脚本事件分开管理，处理结果要回写时间轴，避免演练中的问题在复盘时丢失。"},{id:"plan-drill-feedback-collect",docKey:"plan-design-drill",type:"tech",term:"问卷、文本形式收集",title:"演练反馈收集",description:"通过问卷或文本收集参演、观摩人员对演练的意见。实现上问卷模板可配置、匿名与实名可选，结果按演练实例归档；文本反馈要做分类与关键词提取，便于汇总成改进建议，而不是散落在附件里。"},{id:"plan-drill-report-export",docKey:"plan-design-drill",type:"tech",term:"保存和导出功能",title:"评估报告导出",description:"评估报告支持保存为 PDF、Word 等格式用于分享与存档。实现上报告由结构化评估数据渲染生成，导出件带版本与生成时间；原始评分与过程记录仍需在系统中留存，不能只保留导出文件导致无法复核。"},{id:"plan-drill-improvement",docKey:"plan-design-drill",type:"term",term:"优化提升建议",title:"演练改进建议",description:"针对演练准备、策划设计、文件编制、保障与实施等环节提出优化建议。实现上建议应可追溯到具体问题与评分项，区分「本次演练问题」与「预案本身缺陷」；建议进入整改台账并跟踪闭环，避免只停留在报告里。"},{id:"plan-drill-replay",docKey:"plan-design-drill",type:"tech",term:"回放记录",title:"演练全景回放",description:"把演练全过程的关键信息、角色与动作整合为连贯的回放记录。实现上回放基于事件流与时间戳重建，而非录屏；支持按角色、阶段筛选，回放数据只读，用于复盘与培训。"},{id:"plan-drill-snapshot",docKey:"plan-design-drill",type:"tech",term:"快照和录像",title:"演练快照与录像",description:"在时间轴上生成某一时刻的态势快照，并可导出录像片段。实现上快照保存当时的状态数据，录像保存音视频片段并关联时间区间；两者都要与演练实例绑定，清理演练数据时同步清理，避免残留占用存储。"},{id:"plan-drill-data-export",docKey:"plan-design-drill",type:"tech",term:"导出为Excel、PDF",title:"演练数据导出",description:"演练数据可导出为 Excel、PDF 便于备份与汇报。实现上导出按权限过滤字段并脱敏，大数据量走异步任务并给下载链接；导出件记录操作人与时间，敏感演练数据需审批后才能导出。"},{id:"plan-drill-template-manage",docKey:"plan-design-drill",type:"tech",term:"演练模板管理",title:"演练模板管理",description:"把已发布的演练方案沉淀为可复用模板，供后续快速创建。实现上模板保存场景、角色分工、流程任务等结构化内容并分类存储，创建新演练时复制为独立实例，后续模板变更不影响已创建的演练。"},{id:"plan-drill-plan-to-template",docKey:"plan-design-drill",type:"tech",term:"一键转换为模板",title:"方案转模板",description:"将已编辑发布的演练方案一键提取关键信息并转成模板存档。实现上转换前做完整性校验，抽取场景、角色、流程任务等字段；模板与源方案建立来源关系，便于追溯模板由哪次演练沉淀而来。"},{id:"plan-drill-manual-optimize",docKey:"plan-design-drill",type:"term",term:"人工评估、调整和优化",title:"预案人工评估优化",description:"在智能分析基础上由评估人员人工评估、局部调整预案文本、流程与附件。实现上修改走版本管理并保留修改痕迹，支持按评估项定位到具体条款；人工调整与自动建议分开记录，便于评估闭环效果。"},{id:"plan-drill-metrics",docKey:"plan-design-drill",type:"term",term:"响应时间、适应性、操作简便性、资源需求匹配度",title:"预案评估指标",description:"这是专项预案的通用评估维度：响应是否及时、场景是否适配、操作是否易执行、资源是否匹配。实现上指标与权重可配置，按主题或业务阶段分类；评分需有数据来源或人工依据，避免只打分不留证。"},{id:"plan-drill-rule-engine",docKey:"plan-design-drill",type:"tech",term:"规则引擎与数据驱动",title:"自动化分析与提示",description:"通过规则引擎与历史数据对预案文本、流程、执行记录和演练反馈做分析，识别问题并给出改进提示。实现上规则可配置、命中结果可解释，数据驱动部分要说明依据；分析结论进入优化待办，而不是只生成一段文字。"},{id:"plan-drill-change-mark",docKey:"plan-design-drill",type:"tech",term:"修改痕迹",title:"预案修改痕迹",description:"人工优化时自动记录每处修改的内容、修改人与时间。实现上保存修改前后差异并关联评估项，历史记录只读可追溯；修改痕迹要能还原到具体条款，不能只记录「某预案已修改」。"},{id:"plan-drill-eval-loop",docKey:"plan-design-drill",type:"term",term:"评估-优化",title:"评估—优化闭环",description:"评估结果回流到预案并触发优化，优化后再次评估，形成持续改进闭环。实现上闭环要有状态与责任人：问题、建议、修改、复核、关闭，每一步留痕；避免评估报告生成后无人跟进，闭环只停留在纸面。"},{id:"plan-drill-history-trace",docKey:"plan-design-drill",type:"tech",term:"历史修改记录",title:"优化历史追溯",description:"记录每次优化并支持追溯预案的历史修改，用于分析优化趋势与效果。实现上按预案版本组织修改记录，支持对比任意两版；趋势统计要基于真实版本数据，不能只统计操作日志条数。"},{id:"plan-overview-new-system",docKey:"plan-design-overview",type:"term",term:"新建系统",title:"新建系统定位",description:"本子系统为新建而非改造，定位是省交通运输厅及下属单位的预案数字化管理平台。它不重复建设事件接报与指挥调度能力，而是与应急事件、指挥调度等系统通过事件编号、组织编码等接口协同。实现上应独立建库建表，以预案主表贯穿分类、规范、模块、生成、执行与演练各阶段，避免预案数据散落到其他业务库。"},{id:"plan-overview-dept",docKey:"plan-design-overview",type:"term",term:"省交通运输厅",title:"服务对象与数据范围",description:"服务对象以省交通运输厅为主，向下覆盖厅属单位、地市交通运输主管部门与一线执法/管养单位。权限与数据范围应绑定组织树，按「厅—市—县/路段」层级隔离；应急分类库、规则规范库等基础数据可全省共享，演练与执行数据按组织归属过滤，避免跨级看到不属于本单位的处置细节。"},{id:"plan-overview-support",docKey:"plan-design-overview",type:"term",term:"应急预案管理支持",title:"预案全生命周期管理",description:"这里的管理支持不是简单的文档上传，而是覆盖「分类建库—规范入库—结构识别—模块编排—模型生成—执行跟踪—演练评估」的完整链路：预案既要能被人检索阅读，也要能被 AI 结构化拆解并驱动任务。实现时各阶段产物（模块、任务、评估）都通过 plan_id 关联到预案主表，避免形成互不相通的文件孤岛。"},{id:"plan-overview-standard-digital",docKey:"plan-design-overview",type:"term",term:"行业应急规范数字化管理",title:"三类规范库数字化",description:"面向国家、行业、本地三类应急规范做范式化存储，抽取预案级别、预案类型、适用范围等核心要素，并支持多版本追溯、按事件类别与响应等级分配规范子集、经下发/上报接口同步上级与监管平台。实现上规范原文与结构化要素分表存储，版本保存完整快照；生成预案时只传入命中的子集，避免无关条文干扰模型上下文。"},{id:"plan-overview-elements",docKey:"plan-design-overview",type:"term",term:"应急元素（人员、物资、措施）动态管理",title:"应急元素动态管理",description:"把预案依赖的人员、物资装备与处置措施抽象为可复用的应急元素：人员关联组织通讯录与角色，物资关联应急资源库存，措施关联八类标准流程模块。动态管理意味着元素可增删改并实时反映到预案编排与任务派发中；实现上应维护元素主数据与预案引用关系，删除元素前先校验引用，避免预案出现悬空引用。"},{id:"plan-overview-lifecycle",docKey:"plan-design-overview",type:"term",term:"发现、报送、处置、完结、归档",title:"事件处置五阶段闭环",description:"这是突发事件从发现到归档的完整状态链路：发现（监测/接报）→ 报送（信息上报与核实）→ 处置（预案启动、任务派发、响应行动）→ 完结（响应中止、善后）→ 归档（复盘、样本沉淀）。实现上应以状态机驱动，禁止跳阶段或回退到已归档状态；每阶段留存操作人与时间戳，归档数据可作为情景样本库的训练来源。"},{id:"plan-overview-efficiency",docKey:"plan-design-overview",type:"term",term:"突发事件处置全流程效能",title:"全流程效能",description:"效能指从发现到归档整条链路的时效与质量，常见度量包括接报响应时长、预案启动时长、任务完成率与超时率、信息报送准确率、复盘问题闭环率。实现上应在各阶段埋点采集时间戳与状态变更，由绩效评估模块汇总成报告；不要只统计单点耗时，否则无法定位瓶颈出现在报送、处置还是归档环节。"},{id:"plan-req-overview-role-matrix",docKey:"plan-req-overview",type:"term",term:"业务角色一览表",title:"业务角色与权限边界",description:"该表以「机构 × 业务角色 × 拥有权限」三元组定义需求侧权限边界，覆盖政务服务和应急指挥中心、厅属与地市单位两类机构。实现时应把权限拆成功能权限与数据范围两个维度，按角色聚合而非散落在页面判断；同一角色在不同机构下的数据范围不同，需以组织编码做隔离，避免仅按角色名授权。"},{id:"plan-req-overview-super-admin",docKey:"plan-req-overview",type:"term",term:"总管理员",title:"超级角色权限拆分",description:"总管理员对七个模块拥有全功能维护、全权限配置、全流程管理与全权限操作，是需求侧唯一的超级角色。实现上建议拆分为权限点集合（分类、维度、情景样本、模板、场景、模块、版本、存储、子集、接口、训练、生成、任务、闭环、演练、指标、追溯等），并保留操作审计；不要把超级权限硬编码到单一账号。"},{id:"plan-req-overview-tech-support",docKey:"plan-req-overview",type:"term",term:"技术保障人员",title:"运维角色与业务分权",description:"技术保障人员承担系统配置、接口调试、存储维护、版本管理、环境保障、模型部署维护、流程引擎维护、异常处理与数据支撑，权限偏运维而非业务决策。实现时应与业务管理员分权：运维角色可配置但不应绕过数据权限查看敏感处置内容，所有配置变更需留痕，模型部署与流程引擎操作单独审计。"},{id:"plan-req-classify-visual-graph",docKey:"plan-req-classify",type:"tech",term:"结构化树形图",title:"预案可视化图表",description:"把预案的编制依据、适用范围、组织体系、职责分工等要素以结构化树形图、关系图与节点信息呈现，节点可点击并与右侧基本信息联动。实现上应以树/图节点数据驱动渲染，节点保留原文锚点与要素类型；避免把图谱做成静态图片，否则无法联动查询与后续要素抽取复用。"},{id:"plan-req-classify-impact-dict",docKey:"plan-req-classify",type:"term",term:"影响等级字典",title:"影响等级字典",description:"影响等级（一般、较大、重大、特别重大）以字典项维护，含字典项名称、字典项编码、等级顺序、启用状态及适用范围。实现上等级与应急响应等级应各自独立成字典，不要合并为单一「级别」字段；编码稳定可被预案引用，停用只影响新选择，历史数据仍需可解析。"},{id:"plan-req-classify-response-dict",docKey:"plan-req-classify",type:"term",term:"应急响应等级分类",title:"应急响应等级字典",description:"用于配置Ⅰ级、Ⅱ级、Ⅲ级、Ⅳ级等响应级别的字典化管理，维护等级顺序及状态，支持在预案信息中关联选择并用于响应流程匹配与统计。实现上应把响应等级与影响等级解耦，按等级顺序而非名称排序；关联关系存编码，避免改名后历史预案失配。"},{id:"plan-req-classify-multi-dim-dict",docKey:"plan-req-classify",type:"term",term:"多维度字典配置",title:"多维度属性字典",description:"按责任部门、时间敏感性、触发条件、事件来源、气象影响、交通通断类型、资源依赖、是否跨区域、是否需专家参与等维度对预案做结构化属性定义。实现上应设计为可扩展的键值属性而非固定列，各维度独立维护字典项，新增维度无需改表；属性值存编码并保留组合查询能力。"},{id:"plan-req-classify-history-sample",docKey:"plan-req-classify",type:"term",term:"历史情景样本库",title:"历史情景样本库",description:"基于事件条件创建历史样本库，按应急响应等级、区域、灾害类型、交通情况、事故等级等筛选查询，核心字段含交通通断情况、受伤人数、死亡人数。实现上样本应保留来源事件标识与发生时间，作为模型训练与情景匹配的数据集；筛选条件需与事件子系统口径一致。"},{id:"plan-req-classify-case-archive",docKey:"plan-req-classify",type:"tech",term:"事件案例数据归类",title:"事件案例归档",description:"按历史样本库的创建条件，把应急事件子系统中产生的事件自动归档到对应类别，归类数据自动进入情景样本库供检索和模型使用。实现上应由规则或事件分类编码驱动归档，而非人工逐条搬运；保留原始事件编号与归档时间，条件调整后可重算，但不得重复入库。"},{id:"plan-req-module-structured-parse",docKey:"plan-req-module",type:"tech",term:"结构化解析",title:"预案文本结构化解析",description:"基于模板中配置的提示词对预案原文分章节解析，生成结构化结果，支持按模板版本区分、重复解析与结果覆盖，并记录解析过程及状态。实现上解析应异步执行并保存状态机；原文只读，解析结果按模板版本隔离，覆盖前保留历史，便于对比解析质量。"},{id:"plan-req-module-key-elements",docKey:"plan-req-module",type:"term",term:"关键要素",title:"预案要素提取",description:"按模板定义的关键要素（如预案级别、预案类型、适用范围等）从解析结果中提取字段，形成结构化要素数据，支持字段扩展与多版本对比。实现上先定义要素 schema 再抽取，缺失与抽取失败要区分；结果保留原文位置用于溯源，模型升级后可重跑并对比差异。"},{id:"plan-req-module-dimension-store",docKey:"plan-req-module",type:"tech",term:"模块维度",title:"按模块维度拆分存储",description:"把解析后的内容按先期处置、分级响应、组织指挥等模块拆分存储，支持模块独立查看、编辑并与模板模块结构关联。实现上模块类型用稳定枚举，模块内容与模板编排分层存储；同一模块可被多份预案引用，修改时需评估对已发布预案的影响。"},{id:"plan-req-module-version-trace",docKey:"plan-req-module",type:"tech",term:"版本回溯记录信息",title:"模块版本回溯",description:"对模块级内容做版本管理，记录每次生成或调整后的版本，支持版本列表查看、版本对比与版本恢复，不同版本保留完整模块结构与内容快照。实现上保存完整快照而非增量 diff，历史版本只读；当前版本唯一且切换原子，引用方需记录所引版本。"},{id:"plan-req-module-mindmap",docKey:"plan-req-module",type:"tech",term:"思维导图",title:"AI 生成思维导图",description:"可视化编制工具支持用 AI 对预案内容生成思维导图，并可按提示词修改。实现上画布应保存为结构化节点与关系数据，而不是截图或富文本；提示词修改走同一生成服务并保留版本，导出时再渲染为图，保证可继续编辑与对比。"},{id:"plan-req-module-scene-mapping",docKey:"plan-req-module",type:"term",term:"风险场景-预案模板-处置方案",title:"风险场景—模板—处置方案映射",description:"建立风险场景、预案模板与处置方案之间的映射关系，基于风险场景自动匹配模板及处置模块，实现预案内容自动组合生成，支持多场景、多模板、多方案关联配置。实现上用关联表串联三类实体，生成时记录所用模板与模块版本，便于回溯依据。"},{id:"plan-req-standard-normalize",docKey:"plan-req-standard",type:"tech",term:"范式化存储",title:"规范范式化存储",description:"把应急标准、行业规范、流程标准从附件文档拆成统一结构化字段（规范类型、适用部门、适用响应等级、适用灾害类型、版本号、启用状态等）后存储，使生成阶段可按条件检索。实现上原文附件与结构化要素分表保存，抽取失败仍保留附件，不要硬塞进同一张宽表。"},{id:"plan-req-standard-response-level",docKey:"plan-req-standard",type:"term",term:"适用响应等级",title:"规范适用性过滤",description:"每条规范携带适用部门、适用响应等级、适用灾害类型等适用性字段，是生成阶段筛选规范子集的过滤条件。实现上取值应与应急响应等级字典共用同一套编码，避免自由文本；字段缺失时应明确为「不限」而非空值，防止过滤时被意外排除。"},{id:"plan-req-standard-version-flow",docKey:"plan-req-standard",type:"tech",term:"版本全流程管理功能信息",title:"规范多版本状态机",description:"同一预案的不同版本按版本号区分，记录创建时间、状态（草稿、已发布、已失效等）及适用范围，支持历史版本查看、差异对比与恢复为当前版本。实现上版本保存完整快照，历史版本默认只读；状态流转单向可校验，「是否当前版本」唯一且切换需原子操作。"},{id:"plan-req-standard-subset",docKey:"plan-req-standard",type:"tech",term:"规范子集",title:"规范子集抽取",description:"根据事件类别、响应等级等条件从规范库中抽取对应规范内容集合，作为预案生成的参考依据，支持一个事件类别匹配多条规范及多类别组合筛选。实现上应提供多维过滤查询并返回子集标识，调用方不自行拼接全量规范；组合筛选需明确优先级与去重规则。"},{id:"plan-req-standard-package",docKey:"plan-req-standard",type:"tech",term:"压缩包文件",title:"规范数据包接入",description:"下发接口通过 API 接收上级系统的规范库压缩包，完成下载、解压、解析及入库，并按规范类型分类存储、版本识别与覆盖更新。实现上需校验包内清单与校验和，明确全量/增量语义与幂等策略；解包失败要保留上一版可用快照，不能阻塞预案生成。"},{id:"plan-req-standard-receipt",docKey:"plan-req-standard",type:"tech",term:"回执信息",title:"规范上报回执",description:"上报接口把本地规范库的新增、修改、删除变更推送至监管平台，支持自动与手动触发，并记录上报结果及回执信息，支持失败重试与状态追踪。实现上变更记录只追加不修改，回执与请求一一对应；重试需幂等，避免同一变更重复上报造成监管侧重复数据。"},{id:"plan-req-model-prompt",docKey:"plan-req-model",type:"tech",term:"提示词工程",title:"提示词工程",description:"基于开源大语言模型，结合预案模板库、规范库、情景样本库等数据设计并维护提示词，用于预案文本解析、要素抽取与结构生成。实现上提示词应与模型、任务类型绑定并存版本，变更可回滚；输入做长度裁剪与敏感信息过滤，输出按约定 schema 校验。"},{id:"plan-req-model-sft-lora",docKey:"plan-req-model",type:"tech",term:"监督微调（SFT/LoRA）",title:"监督微调",description:"在开源大模型上以预案模板库、规范库、情景样本库数据做 SFT/LoRA 监督微调，定向优化解析、抽取与生成能力，提升结构理解与生成一致性。实现上训练数据需标注来源与版本、去重脱敏，训练集验证集分离；上线前与基线回归对比并保留旧模型回退。"},{id:"plan-req-model-event-attrs",docKey:"plan-req-model",type:"term",term:"事件属性",title:"事件属性输入",description:"事件类别、影响等级、应急响应等级、灾害类型、适用区域等属性是自动选择模板与规范子集的输入特征。实现上取值必须与分类库、字典共用同一套编码，生成前做完整性校验；缺失关键属性时提示补充或走默认策略，不能静默按空值生成。"},{id:"plan-req-model-multi-match",docKey:"plan-req-model",type:"tech",term:"多条件匹配",title:"模板多条件匹配",description:"根据事件属性通过预设匹配规则筛选适用的预案模板或模板组合，支持多条件匹配、优先级排序及多模板融合，用于确定预案整体结构与模块框架。实现上匹配规则应可配置、可解释，记录命中条件与选中模板，规则冲突时按优先级处理并保留人工干预入口。"},{id:"plan-req-model-second-gen",docKey:"plan-req-model",type:"tech",term:"二次生成优化",title:"低分模块二次生成",description:"基于点赞/点踩反馈、历史修改记录及评价结果识别需优化的内容，对低评分或被频繁修改的模块进行二次生成，并结合规则库、模板库及样本库重生成，记录优化前后差异。实现上反馈需结构化采集，优化任务异步可追踪，避免无限重试与重复消耗。"},{id:"plan-req-model-instruct-data",docKey:"plan-req-model",type:"tech",term:"指令微调数据",title:"监督数据与指令微调",description:"把用户反馈、人工修改记录及自动优化结果结构化沉淀为监督数据，筛选高质量修改内容标注后构建训练样本数据集（如指令微调数据），用于模型微调与再训练。实现上需记录样本来源、轮次与质量标签，清洗剔除误操作与敏感内容后再入训练集。"},{id:"plan-req-workflow-notify-channels",docKey:"plan-req-workflow",type:"tech",term:"多种通知方式",title:"多渠道通知",description:"按预案执行流程与任务流转节点自动触发通知，向责任人、协同人员推送消息，支持 APP 推送、短信、系统消息等方式，并可基于启动、流转、完成、回退等阶段配置通知模板。实现上渠道与模板可配置，发送记录留痕，失败重试且重要任务需送达确认。"},{id:"plan-req-workflow-state-machine",docKey:"plan-req-workflow",type:"tech",term:"状态机规则",title:"任务状态机",description:"按流程节点配置任务流转路径、状态机规则、完成条件及异常处理策略，控制任务是否进入下一环节，确保完成确认后才能闭环。实现上状态流转单向可校验，非法跳转直接拒绝；异常策略（超时、回退、卡点）需可配置，并记录每次状态变更的操作人与时间。"},{id:"plan-req-workflow-abnormal",docKey:"plan-req-workflow",type:"tech",term:"超时、未处理、回退、卡点",title:"任务异常标识",description:"全程跟踪任务时对超时、未处理、回退、卡点等异常情况做标识，形成可追溯的执行记录和闭环证明。实现上异常应由规则实时判定而非人工标记，标识需带触发时间与依据；异常解除后保留历史，避免只看当前状态而丢失过程。"},{id:"plan-req-workflow-closed-proof",docKey:"plan-req-workflow",type:"tech",term:"闭环证明",title:"任务闭环证明",description:"围绕任务从派发、执行、反馈到结案建立完整跟踪链路，记录流转轨迹、状态变化、执行进度与反馈，最终形成闭环证明。实现上闭环证明应由任务状态、回执与时间戳自动汇总生成，可追溯到原始记录；未完成或未反馈的任务不得生成闭环证明。"},{id:"plan-req-workflow-one-map",docKey:"plan-req-workflow",type:"tech",term:"一张图",title:"任务一张图",description:"把任务位置与 GIS 地图、现场视频联动，在地图上展示应急资源点位并绑定预案相关视频资源，实现任务「一张图」可视、可指挥。实现上坐标统一坐标系并校验范围，视频地址按权限下发且设有效期；地图与视频只做辅助研判，不替代任务状态数据。"},{id:"plan-req-workflow-completion-rate",docKey:"plan-req-workflow",type:"tech",term:"任务完成率",title:"绩效指标",description:"执行过程中自动采集流程节点、任务执行、人员响应及反馈处理数据，汇总执行时长、超时情况、任务完成率等指标，并生成执行报告。实现上指标应来自过程数据计算而非手工填报，口径固定可复算；报告需可追溯到原始任务与时间戳。"},{id:"plan-req-drill-tabletop",docKey:"plan-req-drill",type:"term",term:"桌面推演",title:"桌面推演",description:"不调动真实资源，由参演人员在系统内按脚本推演处置动作，与实战演练并列支持，用于检验预案流程与协同。实现上推演与真实处置共用任务与事件模型但数据隔离，推演时钟可加速或暂停；所有动作打演练标识，避免与真实业务数据混淆。"},{id:"plan-req-drill-script",docKey:"plan-req-drill",type:"tech",term:"演练脚本",title:"演练脚本",description:"演练脚本由演练情景、事件链、关联任务及关联文件组成，支持按阶段分段设计并用事件触发条件控制流程推进。实现上脚本是演练执行期的配置源，情景事件可追加；脚本静态定义与运行期实例数据分开存储，脚本变更需审核并留版本。"},{id:"plan-req-drill-event-chain",docKey:"plan-req-drill",type:"tech",term:"事件链",title:"演练事件链",description:"按演练时间进程把事件节点、任务节点、并行节点及结束节点串成事件链，配置触发条件控制后续流程。实现上事件链节点应包含事件、时间、条件与关联任务，防止游离节点与断链；运行期按时间与条件双驱动推进，并记录实际触发时刻。"},{id:"plan-req-drill-director",docKey:"plan-req-drill",type:"term",term:"导调员",title:"导调事件注入",description:"导调员可在演练不同阶段新增关联事件、衍生事件，对原有流程做动态调整，模拟突发情况持续演化。实现上导调注入与脚本预设事件走同一事件通道并统一编号、打时间戳；注入权限按导调组角色控制，回放时能区分计划事件与临时注入。"},{id:"plan-req-drill-free-report",docKey:"plan-req-drill",type:"tech",term:"自由快报模式",title:"自由快报",description:"参演人员可通过移动端或指挥终端自主填写反馈内容，上传图片、音频、视频等附件，上报异常、资源需求与现场动态，并关联当前事件、任务节点及处置阶段。实现上反馈需结构化保存类型与关联对象，重要内容走短信通知，推送导调或指挥处理并回写时间轴。"},{id:"plan-req-drill-problem-library",docKey:"plan-req-drill",type:"term",term:"演练问题库",title:"演练问题库",description:"统一记录演练中发现的问题、意见及建议，按问题类型、问题等级、发现环节、责任单位分类，形成演练问题库及整改依据。实现上问题应关联具体演练实例与发现位置，支持图片视频佐证；问题进入整改跟踪并保留提交人、提交时间，满足全过程留痕。"},{id:"plan-req-drill-access",docKey:"plan-req-drill",type:"tech",term:"演练数据仅参与其中的账户可查看",title:"演练数据准入",description:"按参与单位、小组、成员配置演练数据可见范围，仅参与其中的账户可查看，属于演练数据的分级防控准入机制。实现上权限应绑定演练实例与组织/成员编码，默认拒绝非参与方访问；导出同样受该范围约束，避免通过导出绕过准入控制。"},{id:"plan-req-optimize-threshold",docKey:"plan-req-optimize",type:"tech",term:"指标阈值规则",title:"指标阈值与等级",description:"可配置指标阈值规则，按时间、次数、类型、偏差率、完成率等条件自动判定指标等级，并通过分数标量化展示。实现上阈值与评分维度应可配置并保留版本，判定结果记录命中条件；阈值调整只影响新评估，历史结果不重算，避免口径漂移。"},{id:"plan-req-optimize-completion-rate",docKey:"plan-req-optimize",type:"term",term:"任务完成率",title:"通用指标",description:"系统内置通用评估指标，如任务完成率、任务完成时长等，按业务阶段与主题分类，支撑预案科学性、可操作性评价。实现上内置指标公式需固定可复算，数据来源为任务与演练过程记录；自定义指标与内置指标共用同一套评分维度与阈值机制。"},{id:"plan-req-optimize-comm-interrupt",docKey:"plan-req-optimize",type:"tech",term:"通信中断情况",title:"自动分析输入",description:"预案自动分析结合演练过程数据，评估任务完成时长、响应效率、资源调用、事件升级、通信中断、协同处置等执行效果。实现上分析输入应来自结构化过程记录而非人工描述，结论保留依据与时间范围；分析结果进入建议与提示，不直接改动预案。"},{id:"plan-req-optimize-trace",docKey:"plan-req-optimize",type:"tech",term:"痕迹留存",title:"人工优化痕迹",description:"支持专家在线修订预案文本，并保留调整过程记录与版本回溯，确保优化痕迹留存、可追溯。实现上修改需记录修改人、时间、前后差异并关联评估项；历史版本只读可恢复，人工调整与 AI 建议分开记录，便于判断优化来源与效果。"},{id:"plan-req-optimize-loop",docKey:"plan-req-optimize",type:"term",term:"评估—反馈—优化闭环",title:"反馈闭环",description:"收集演练、实战、处置中的问题，经评估反馈与评估结果回流到预案并触发优化，形成评估—反馈—优化闭环。实现上闭环要有状态与责任人：问题、建议、修改、复核、关闭，每步留痕；绑定预案的演练数据可反向查看，避免反馈停留在报告里。"},{id:"plan-req-optimize-history",docKey:"plan-req-optimize",type:"tech",term:"优化原因",title:"优化历史追溯",description:"记录历次优化的原因、内容、审核人、生效时间，支持查询、对比、复盘与审计。实现上记录按预案版本组织，只追加不修改，支持任意两版对比；统计应基于真实版本数据而非操作日志条数，保证追溯链完整可信。"},{id:"plan-req-classify-preview-cache",docKey:"plan-req-classify",type:"tech",term:"缓存机制",title:"文件预览缓存",description:"预案文件在线预览时对已解析内容做缓存，减少重复加载并提升响应速度。实现上缓存需绑定文件版本与权限，文件更新或权限变更时失效；缓存只存渲染所需分片，避免整篇常驻内存。"},{id:"plan-req-classify-knowledge-node",docKey:"plan-req-classify",type:"term",term:"知识节点",title:"预案知识节点",description:"预案文件结构化解析后的最小知识单元，按章节或条款拆分，供检索、问答与生成复用。实现上节点需保留原文章节路径与位置锚点，切分粒度不可跨条款，并随文件版本更新重建索引。"},{id:"plan-req-classify-accident-level",docKey:"plan-req-classify",type:"term",term:"事故等级",title:"情景样本事故等级",description:"历史情景样本库的筛选与归档条件之一，与应急响应等级、灾害类型、交通情况共同描述事件严重程度。实现上应引用事件子系统的等级字典编码，避免自由文本；等级口径需与事件模块一致，便于样本回溯。"},{id:"plan-req-module-initial-disposal",docKey:"plan-req-module",type:"term",term:"先期处置",title:"先期处置模块",description:"预案模块化的标准段落之一，通常描述事件初期先于分级响应启动的处置动作。实现上应作为独立模块类型参与解析、存储与版本管理，与其他模块共享同一套模块编码和模板结构，便于拼装复用。"},{id:"plan-req-module-content-snapshot",docKey:"plan-req-module",type:"tech",term:"内容快照",title:"模块内容快照",description:"模块版本回溯时保存的完整内容副本，而非增量差异，用于版本对比与恢复。实现上每次生成或调整都落一份不可变快照，历史版本只读；快照需携带模块结构与引用版本，避免恢复后结构错位。"},{id:"plan-req-module-ai-template-typo",docKey:"plan-req-module",type:"typo",term:"AI 生成中模板",title:"AI 生成模板",correction:"AI 生成模板",description:"原文「AI 生成中模板」多一「中」字，应为「AI 生成模板」，指由 AI 生成并可绑定应急装备的预案模板。实现上模板与装备资源应通过关联表绑定，生成时按模板引用资源，避免把资源信息写死在模板正文。"},{id:"plan-req-standard-response-level-typo",docKey:"plan-req-standard",type:"typo",term:"响应登记",title:"响应等级",correction:"响应等级",description:"「响应登记」应为「响应等级」，指规范子集匹配所依据的应急响应级别。实现上规范与响应等级通过字典编码关联，子集抽取按编码精确匹配；字段命名需统一，避免同一含义在接口与页面出现两种写法。"},{id:"plan-req-standard-regulator",docKey:"plan-req-standard",type:"term",term:"监管平台",title:"规范上报对象",description:"上报接口的对接方，接收本地规范库新增、修改、删除等变更数据。实现上应配置独立接口地址与认证信息，变更按增量生成上报包；回执与请求一一对应，失败可重试且保持幂等，避免重复上报。"},{id:"plan-req-standard-retry",docKey:"plan-req-standard",type:"tech",term:"失败重试",title:"接口失败重试",description:"规范下发或上报失败后的自动重发机制，需记录失败原因、重试次数与最终状态。实现上重试应幂等并设上限与退避策略，避免同一数据包重复入库或重复推送；超过上限转人工处理并保留现场。"},{id:"plan-req-model-llm-candidates",docKey:"plan-req-model",type:"tech",term:"ChatGLM、Qwen、LLaMA",title:"开源模型候选",description:"需求指定的开源大语言模型候选，用于交通应急领域微调。实现上模型接入应抽象为统一适配层，屏蔽各家 tokenizer、上下文长度与推理参数差异；模型路径与版本需入库管理，便于回退和复现训练结果。"},{id:"plan-req-model-feedback",docKey:"plan-req-model",type:"term",term:"点赞/点踩",title:"生成内容显式反馈",description:"用户对生成内容的显式反馈信号，与历史修改记录、评价结果共同识别需二次生成的模块。实现上反馈需结构化存储对象、类型、时间与用户，同一内容可多次反馈；反馈进入监督数据前要清洗去重。"},{id:"plan-req-model-learning-rate",docKey:"plan-req-model",type:"tech",term:"学习率",title:"微调超参数",description:"模型微调的关键超参数，与训练轮数、批处理大小、最大样本数共同写入训练任务。实现上应随训练任务持久化保存，支持实验对比与复现；调整学习率只影响新训练，不得覆盖已发布模型配置。"},{id:"plan-req-workflow-receipt",docKey:"plan-req-workflow",type:"tech",term:"回执机制",title:"任务回执",description:"任务下发后要求接收方确认并回传处理结果的机制，用于证明任务已送达、已办理。实现上回执应与任务、接收人一一对应，记录接收时间与处理结论；未回执的任务按超时规则提醒，回执不可事后补造。"},{id:"plan-req-workflow-task-level",docKey:"plan-req-workflow",type:"term",term:"任务分级",title:"任务优先级分级",description:"按紧急程度或业务重要性给任务设置级别，配合时间节点配置控制流转优先级。实现上分级应引用统一字典，影响提醒频次、时限与升级路径；级别变更需留痕，避免执行中随意改级绕过考核。"},{id:"plan-req-workflow-response-typo",docKey:"plan-req-workflow",type:"typo",term:"人员响应、及反馈处理",title:"人员响应及反馈处理",correction:"人员响应及反馈处理",description:"原文「人员响应、及反馈处理」多一顿号，应为「人员响应及反馈处理」，指绩效评估采集的人员侧过程数据。实现上人员响应与任务执行、反馈处理并列进入评估记录，字段命名统一，便于统计口径一致。"},{id:"plan-req-drill-grace-deadline",docKey:"plan-req-drill",type:"term",term:"宽限完成时限",title:"任务宽限时限",description:"任务合理完成时限之后允许的宽限区间，用于模拟催办、超时与异常处置场景。实现上合理时限与宽限时限分别存储，超时判定先看合理时限、再看宽限；宽限结束仍未完成即记逾期并触发升级。"},{id:"plan-req-drill-director-group",docKey:"plan-req-drill",type:"term",term:"导调组",title:"导调小组",description:"演练中负责注入事件、调整流程与指挥协调的小组，与处置组、评估组等并列。实现上导调组应有独立角色权限，可新增关联或衍生事件；其操作与脚本预设事件统一编号并标记来源，便于复盘区分。"},{id:"plan-req-drill-timeline-typo",docKey:"plan-req-drill",type:"typo",term:"时间线展",title:"时间线展示",correction:"时间线展示",description:"原文「时间线展」漏字，应为「时间线展示」，指按时间顺序呈现演练过程信息。实现上时间线数据来自事件与任务状态变更，节点需带时间戳和关联对象；前端按时间排序渲染，不能依赖手工拼接。"},{id:"plan-req-optimize-builtin-typo",docKey:"plan-req-optimize",type:"typo",term:"内置指标评估指标",title:"内置评估指标",correction:"内置评估指标",description:"原文「内置指标评估指标」语义重复，应为「内置评估指标」，指系统预置的任务完成率、任务完成时长等指标。实现上内置指标公式固定可复算，与自定义指标共用评分维度与阈值机制，不随页面改名。"},{id:"plan-req-optimize-score-dimension",docKey:"plan-req-optimize",type:"term",term:"评分维度",title:"指标评分维度",description:"评估指标的可打分维度，与指标说明、阈值条件、分数共同构成评估标准。实现上维度应字典化并支持权重配置，指标得分由维度分值加权汇总；维度调整只影响新评估，历史结果保留原口径。"},{id:"plan-req-optimize-version-rollback",docKey:"plan-req-optimize",type:"term",term:"版本回退",title:"预案版本回退",description:"将预案恢复到指定历史版本的操作，依赖调整过程记录与版本快照。实现上回退应生成新版本而非直接改写历史，保留回退人、时间与目标版本；当前版本唯一且切换原子，避免并发回退互相覆盖。"}],js={stages:[{key:"classify",title:"分类建库",subtitle:"CLASSIFICATION",description:"按国家应急预案分级分类标准维护多级类别与具体事件类型，通过 11 维数字化属性自动生成预案多维视图，并归集历史情景样本。",metrics:[{label:"分类层级",value:"多级"},{label:"事件属性",value:"11 维"},{label:"影响等级",value:"4 级"},{label:"情景样本",value:"自动归档"}],highlights:["主要类别下细化具体事件类型，每个子类可继续细分至事件级别","影响等级按一般 / 较大 / 重大 / 特别重大字典维护，与应急响应等级独立成字典","责任部门、时间敏感性、触发条件、事件来源、气象影响、交通通断类型等维度可扩展","应急事件子系统按样本库创建条件自动归档，形成模型训练与情景匹配样本集"],docKey:"plan-design-classify"},{key:"standard",title:"规范入库",subtitle:"STANDARDIZATION",description:"国家、行业、本地三类规范范式化存储，支持初稿—评审—试用—发布多版本追溯、规范子集分配与下发 / 上报接口对接。",metrics:[{label:"规范库",value:"3 类"},{label:"版本状态",value:"4 阶段"},{label:"子集调用维度",value:"2 维"},{label:"接口方向",value:"下发 / 上报"}],highlights:["应急标准、行业规范、流程标准统一范式化存储，抽取预案级别、预案类型、适用范围等核心要素","同一规范保留完整内容快照，历史版本只读，支持对比、恢复与封存","按事件类别与响应等级调用规范子集，避免无关条文干扰生成上下文","下发接口经 API 接收上级规范压缩包，上报接口同步本地变更至监管平台"],docKey:"plan-design-standard"},{key:"structure",title:"结构识别",subtitle:"STRUCTURE RECOGNITION",description:"AI 对预案文本做全量结构化解析，按预案要素、预警 / 应急响应条件、响应措施、单位职责等维度抽取并结构化存储。",metrics:[{label:"抽取维度",value:"5 类"},{label:"解析驱动",value:"模板提示词"},{label:"解析结果",value:"按版本区分"},{label:"原文与结果",value:"分开落库"}],highlights:["基于模板配置的提示词逐章节 / 模块解析，生成对应解析结果","支持重复解析与结果覆盖，记录解析过程及状态","抽取预案要素、预警响应条件、应急响应条件、响应措施、单位职责","原始文本与抽取结果分开存储，便于复核抽取准确性"],docKey:"plan-design-module"},{key:"module",title:"模块编排",subtitle:"MODULARIZATION",description:"将预案拆解为先期处置、分级响应、组织指挥等八类标准流程模块，单独定义存储并按需组合，支持流程图与表格混合编辑。",metrics:[{label:"标准模块",value:"8 类"},{label:"编辑方式",value:"流程图 + 表格"},{label:"版本管理",value:"内容快照"},{label:"关联对象",value:"人员 / 资源"}],highlights:["八类模块覆盖先期处置、分级响应、组织指挥、应急处置、保障行动、信息发布、响应中止、后期处理","模块类型为稳定枚举，模块内容与模板结构分层存储，供生成、编制与回溯共同引用","按需组合不同模块，构建「风险场景—预案模板—处置方案」映射","关联责任单位、组织架构、人员与应急资源，支撑职责分工与指挥体系生成"],docKey:"plan-design-module"},{key:"model",title:"模型生成",subtitle:"MODEL GENERATION",description:"基于 ChatGLM / Qwen 等开源大模型结合模板库与规范库微调，按事件属性自适应选择模块与规范子集，生成专项预案。",metrics:[{label:"基座模型",value:"ChatGLM / Qwen"},{label:"微调方式",value:"SFT / LoRA"},{label:"语言风格",value:"3 类"},{label:"再训练",value:"多轮反馈"}],highlights:["按事件类型、严重程度、责任部门自动选择模板模块与规范子集","适配综合预案、专项预案、现场处置方案的通用语言 / 专业术语 / 指令式风格","每轮生成后的人工修改与抽取反馈沉淀为再训练样本","情境匹配规则可配置、可解释、可回查，避免硬编码在提示词中"],docKey:"plan-design-model"},{key:"execute",title:"执行与评估",subtitle:"EXECUTION & EVALUATION",description:"数字化预案自动推送责任单位并设置阶段时间轴，闭环跟踪任务状态与反馈，联动 GIS / 视频；演练评估结果回流优化预案。",metrics:[{label:"通知渠道",value:"APP / 短信 / 系统"},{label:"联动能力",value:"GIS + 视频"},{label:"演练环节",value:"设计—控制—评估"},{label:"数据管理",value:"隔离存档"}],highlights:["按预案职责分工与流程节点自动派发任务，配置阶段计划时间轴与超时提醒","状态机控制任务流转，完成确认与反馈收集后方可闭环，执行过程生成报告","演练覆盖设计、过程控制、响应模拟与效果评估，数据独立存储并与真实数据完全隔离","时间轴复盘与评估结果回流预案，形成「评估—优化—反馈」闭环"],docKey:"plan-design-workflow"}],sourceNote:"来源：初步设计 5.5.3「应急预案管理子系统设计」（5.5.3.1 应急分类库、5.5.3.2 规则规范库、5.5.3.3 预案流程模块化、5.5.3.4 模型微调与专项预案生成、5.5.3.5 自动化流程管理、5.5.3.6 应急模拟演练与预案评估优化）与需求规格 3.4.4「详细功能」；阶段按预案生产—执行—优化闭环归并，指标取自原文功能描述与字段口径。"},Xs={groups:[{key:"superior-standard",title:"上级规范库 / 监管平台",description:"对接上级应急管理部门规范库与监管平台，完成国家、行业标准压缩包下发解析入库与本地规范变更上报追溯。",items:[{key:"standard-download",title:"规范下发",description:"按 API 接收国家标准库、行业标准库压缩包，完成下载、解压、解析、版本识别与覆盖入库，并回传入库结果。",interfaces:["规范包下载","解压与完整性校验","版本识别与覆盖","解析入库","入库结果回执"],authMode:"API + 认证信息",docKey:"plan-design-standard",compareKey:"standard"},{key:"standard-report",title:"规范上报",description:"将本地规范库新增、修改、删除变更自动上报监管平台，支持失败重试、回执查询与变更追溯。",interfaces:["变更上报","上报回执查询","失败重试","变更追溯"],authMode:"API + 认证信息",docKey:"plan-design-standard",compareKey:"standard"}]},{key:"knowledge-ai",title:"知识与智能能力",description:"接入知识库、案例库与 AI 模型服务，为预案编制、结构识别、专项生成与效果评估提供数据与模型支撑。",items:[{key:"knowledge-base",title:"知识与案例库",description:"检索法规、行业规范、历史预案与情景样本，为预案编制、模板配置和模块生成提供依据。",interfaces:["知识检索","案例关联","情景样本引用","预案引用"],authMode:"内网 API",docKey:"plan-design-model",compareKey:"model"},{key:"ai-model",title:"AI 模型服务",description:"调用开源大模型微调与专项预案生成能力，回传结构化抽取结果、生成内容与评估指标。",interfaces:["模型微调（SFT / LoRA）","预案文本结构解析","专项预案生成","语言风格适配","生成效果评估"],authMode:"模型网关 Token",docKey:"plan-design-model",compareKey:"model"}]},{key:"collab-alert",title:"协同与通知",description:"与应急指挥、事件、地图及消息平台联动，实现预案调阅、流程启动、任务闭环与演练通知。",items:[{key:"emergency-link",title:"应急指挥 / 事件",description:"向指挥调度与事件处置提供预案调阅、流程启动与处置节点回传，支撑预案在突发事件中的调用。",interfaces:["预案调阅","流程启动","处置节点回传","事件预案关联"],authMode:"内网 API",docKey:"plan-design-workflow",compareKey:"workflow"},{key:"notify",title:"短信 / 粤政易",description:"推送演练通知、审批待办、任务提醒与预案发布消息，支持 APP、短信、系统消息多渠道触达。",interfaces:["模板通知","待办提醒","任务状态提醒","发送回执"],authMode:"AK/SK / OAuth2",docKey:"plan-design-workflow",compareKey:"workflow"},{key:"gis",title:"GIS 地图 / 视频",description:"将预案资源点位、影响范围与演练场景落图展示，并在执行过程中提供地理位置与实时视频流。",interfaces:["资源落图","影响范围","图层查询","实时视频流"],authMode:"地图服务 Token / 视频信令 Token",docKey:"plan-design-workflow",compareKey:"workflow"}]}],sourceNote:"来源：需求规格 3.4.4「详细功能」（3.4.4.3.4 规范接入接口、3.4.4.4 模型微调与专项预案生成、3.4.4.5 自动化流程管理）与初步设计 5.5.3 相关章节；接口清单按现有外部接口预设整理，鉴权方式为建议方案，具体以对接联调方案为准。"},Zs={domains:[{key:"classify",title:"应急分类库"},{key:"standard",title:"规则规范库"},{key:"module",title:"预案流程模块化"},{key:"model",title:"模型微调与生成"},{key:"workflow",title:"自动化流程"},{key:"drill",title:"应急模拟演练"},{key:"optimize",title:"预案评估与优化"}],rows:[{key:"super-admin",role:"总管理员",org:"政务服务和应急指挥中心",scope:"7 个能力域全功能维护、全权限配置与全流程管控",access:{classify:"manage",standard:"manage",module:"manage",model:"manage",workflow:"manage",drill:"manage",optimize:"manage"}},{key:"center-duty-office",role:"政急中心科室值班人员",org:"政务服务和应急指挥中心",scope:"预案查看调用、生成结果使用、流程发起与演练参与",access:{classify:"view",standard:"view",module:"view",model:"view",workflow:"view",drill:"view",optimize:"view"}},{key:"center-duty-room",role:"政急中心值班室值班人员",org:"政务服务和应急指挥中心",scope:"预案与规范查看、生成结果使用、任务接收、演练参与与评估查看",access:{classify:"view",standard:"view",module:"view",model:"view",workflow:"view",drill:"view",optimize:"view"}},{key:"tech-support",role:"技术保障人员",org:"政务服务和应急指挥中心",scope:"数据维护、系统配置、模型部署、流程引擎与演练技术保障",access:{classify:"configure",standard:"configure",module:"configure",model:"configure",workflow:"configure",drill:"configure",optimize:"configure"}},{key:"general-user",role:"普通用户",org:"政务服务和应急指挥中心",scope:"仅查看公开预案、规范、流程、演练信息与评估报告",access:{classify:"view",standard:"view",module:"view",model:"view",workflow:"view",drill:"view",optimize:"view"}}],sourceNote:"角色、机构与权限描述取自需求规格 3.4.3「业务角色一览表」；能力域对齐 3.4.2 功能描述表的 7 个模块与 3.4.4 详细功能。总管理员映射为 manage，技术保障人员按其数据维护、系统配置、部署维护职责映射为 configure，值班人员与普通用户按查看、调用、参与类权限映射为 view；原文未明确的权限按最小权限原则保守映射。"},Js={items:[{key:"module-classify",title:"应急分类库管理",category:"业务模块",workload:6.6,deliverables:["应急分类库设计说明","分类层级与 11 维属性字典","情景样本库归集方案"],description:"覆盖分类层级、维度定义与情景样本库共 13 个功能点，按 2 人月基础 + 0.35×13 估算，规模 13 个功能点，合计 6.6 人月。",docKey:"plan-design-classify"},{key:"module-standard",title:"规则规范库管理",category:"业务模块",workload:5.5,deliverables:["规则规范库设计说明","三类规范范式化模板","规范下发 / 上报接口说明书"],description:"覆盖规范存储、多版本支持、子集分配与规范接入接口共 10 个功能点，按 2 人月基础 + 0.35×10 估算，规模 10 个功能点，合计 5.5 人月。",docKey:"plan-design-standard"},{key:"module-compose",title:"预案流程模块化管理",category:"业务模块",workload:6.6,deliverables:["预案模块化拆解方案","八类标准模块库","可视化编排与版本回溯设计"],description:"覆盖模板管理、场景管理、模块生成与调整、模板应用共 13 个功能点，按 2 人月基础 + 0.35×13 估算，规模 13 个功能点，合计 6.6 人月。",docKey:"plan-design-module"},{key:"module-model",title:"模型微调与专项预案生成",category:"业务模块",workload:5.2,deliverables:["模型微调方案（SFT / LoRA）","情境自适应匹配规则","专项预案生成与评估报告"],description:"覆盖开源模型微调、情境自适应、自适应语言风格、多轮生成与反馈学习共 9 个功能点，按 2 人月基础 + 0.35×9 估算，规模 9 个功能点，合计 5.2 人月。",docKey:"plan-design-model"},{key:"module-workflow",title:"自动化流程管理",category:"业务模块",workload:5.2,deliverables:["自动化流程设计说明","任务闭环状态机规则","任务执行与绩效报告模板"],description:"覆盖任务对接与通知、任务闭环管理、地图 / 视频接入、任务绩效评估与报告共 9 个功能点，按 2 人月基础 + 0.35×9 估算，规模 9 个功能点，合计 5.2 人月。",docKey:"plan-design-workflow"},{key:"module-drill",title:"应急模拟演练",category:"业务模块",workload:12.2,deliverables:["应急演练设计说明书","演练脚本与角色配置模板","演练评估与复盘报告"],description:"覆盖演练设计、过程控制、响应模拟、效果评估、演练数据管理、系统配置和管理共 29 个功能点，按 2 人月基础 + 0.35×29 估算，规模 29 个功能点，合计 12.2 人月。",docKey:"plan-design-drill"},{key:"module-optimize",title:"预案评估与优化",category:"业务模块",workload:6.6,deliverables:["预案评估指标库","自动化分析规则集","优化历史追溯设计"],description:"覆盖评估指标设置、自动化分析与提示、人工优化调整、反馈机制、优化历史追溯共 13 个功能点，按 2 人月基础 + 0.35×13 估算，规模 13 个功能点，合计 6.6 人月。",docKey:"plan-design-drill"}],totalWorkload:47.9,sourceNote:"工作量按「2 人月基础 + 0.35 × 功能点数」估算，功能点数取自需求规格 3.4.4 各模块「功能点」小节并逐项计数，结果保留 1 位小数；7 项业务模块合计 47.9 人月。该口径为设计资料估算，不作为正式报价依据。"},na={class:"plan-design-page"},ea={class:"fd-header"},ta={class:"fd-brand"},la={class:"fd-title"},ia={class:"fd-title-main"},oa=["title"],sa={class:"fd-subtitle-label"},aa={class:"fd-subtitle-text"},ra={class:"fd-nav"},da={class:"fd-tab"},ca=tn({__name:"PlanDesignView",setup(o){const k={overview:nt,mindmap:ce,compare:Je,design:on,requirements:Ze,dataflow:kn,integrations:bn,functions:me,roles:fe,quality:_n,effort:ve},{activeView:d,viewOptions:L,moreViewItems:R,primaryViewValue:P,isPrimaryView:G,currentViewLabel:D,currentViewIcon:I,viewIcon:O,activeDesignDocKey:g,activeRequirementDocKey:t,activeCompareKey:_,handlePrimaryView:m,handleMoreView:a,handleOpenDoc:x,handleOpenMindmap:$,handleBack:b}=dt({key:"plan",views:Ae,icons:k,designSections:Ws,requirementSections:Ys,compareKeys:xn.map(E=>E.key),requirementPrefix:"plan-req-"}),K=S(()=>d.value==="requirements"?"智能应急预案管理子系统需求规格":d.value==="compare"?"智能应急预案管理子系统设计比对":d.value==="dataflow"?"预案治理链路":d.value==="integrations"?"外部系统接口全景":d.value==="functions"?"功能点交付矩阵":d.value==="roles"?"角色权限矩阵":d.value==="quality"?"批注与质量":d.value==="effort"?"实施与工作量":"智能应急预案管理子系统初步设计方案"),r=S(()=>d.value==="requirements"?"需求规格说明书 · 第 3 章 3.4 智能应急预案管理子系统":d.value==="compare"?"初设 5.5.3 ↔ 需规 3.4.4 · 按业务模块查看功能点落点":d.value==="mindmap"?"七大业务模块 · 功能模块与功能点全景导图":d.value==="design"?"初步设计原文 · 第 5 章 5.5.3 应急预案管理子系统设计":d.value==="dataflow"?"分类建库 → 规范入库 → 结构识别 → 模块编排 → 模型生成 → 执行与评估":d.value==="integrations"?"上级规范库、知识与 AI、协同通知与 GIS 对接全景":d.value==="functions"?"需求功能点 × 初设模块 × 覆盖关系 × 批注情况":d.value==="roles"?"业务角色 × 七大业务模块 · 权限范围一览":d.value==="quality"?"技术批注、术语、错别字与关联批注质量总览":d.value==="effort"?"七类业务模块的工作量、规模与交付物":"项目初步设计 · 定位、业务模块与建设目标"),y=S(()=>d.value==="design"||d.value==="requirements"?"来源说明":G.value?"内容概要":"视角说明");return(E,z)=>{const J=cn,ln=dn,h=Ce,W=Se;return i(),u("div",na,[n("header",ea,[n("div",ta,[c(ln,{link:"",class:"fd-back",onClick:p(b)},{default:f(()=>[c(J,null,{default:f(()=>[c(p(je))]),_:1}),z[3]||(z[3]=w(" 返回 ",-1))]),_:1},8,["onClick"]),z[6]||(z[6]=n("div",{class:"fd-divider"},null,-1)),n("div",la,[n("div",ia,[z[4]||(z[4]=n("i",{class:"fd-title-mark"},null,-1)),n("h1",null,e(K.value),1),z[5]||(z[5]=n("span",{class:"fd-badge"},"NEW",-1))]),n("p",{class:"fd-subtitle",title:r.value},[n("span",sa,e(y.value),1),n("span",aa,e(r.value),1)],8,oa)])]),n("nav",ra,[c(h,{class:"fd-tabs","model-value":p(P),options:p(L),"onUpdate:modelValue":p(m)},{default:f(({item:V})=>[n("span",da,[c(J,null,{default:f(()=>[(i(),H(wn(p(O)(V.value))))]),_:2},1024),w(" "+e(V.label),1)])]),_:1},8,["model-value","options","onUpdate:modelValue"]),c(W,{items:p(R),trigger:"click",placement:"bottom-end",onCommand:p(a)},{default:f(()=>[c(ln,{link:"",class:nn(["fd-more-trigger",{"is-active":!p(G)}])},{default:f(()=>[c(J,null,{default:f(()=>[(i(),H(wn(p(I))))]),_:1}),n("span",null,e(p(G)?"更多视角":p(D)),1),c(J,null,{default:f(()=>[c(p(Xe))]),_:1})]),_:1},8,["class"])]),_:1},8,["items","onCommand"])])]),n("main",{class:nn(["fd-body",{"fd-body-fixed":p(d)!=="overview"}])},[p(d)==="overview"?(i(),H(Nt,{key:0,overview:p(te),capabilities:p(le),operations:p(ie),"capability-stats":p(ae),totals:p(re),onOpenDoc:p(x),onOpenMindmap:p($)},null,8,["overview","capabilities","operations","capability-stats","totals","onOpenDoc","onOpenMindmap"])):p(d)==="mindmap"?(i(),H(gl,{key:1,data:p(Yn),overview:p(te),capabilities:p(le),operations:p(ie),"compare-items":p(xn),"capability-stats":p(ae),stats:p(re)},null,8,["data","overview","capabilities","operations","compare-items","capability-stats","stats"])):p(d)==="compare"?(i(),H(Jl,{key:2,"active-key":p(_),"onUpdate:activeKey":z[0]||(z[0]=V=>Nn(_)?_.value=V:null),items:p(xn),onOpenDoc:p(x)},null,8,["active-key","items","onOpenDoc"])):p(d)==="design"?(i(),H(ee,{key:3,"doc-key":p(g),"onUpdate:docKey":z[1]||(z[1]=V=>Nn(g)?g.value=V:null),groups:p(oe),annotations:p(qn),"source-label":"初设原文","default-view-mode":"annotate",onOpenDoc:p(x)},null,8,["doc-key","groups","annotations","onOpenDoc"])):p(d)==="requirements"?(i(),H(ee,{key:4,"doc-key":p(t),"onUpdate:docKey":z[2]||(z[2]=V=>Nn(t)?t.value=V:null),groups:p(Vn),annotations:p(qn),"source-label":"需求规格","default-view-mode":"annotate","show-content-legend":!0,onOpenDoc:p(x)},null,8,["doc-key","groups","annotations","onOpenDoc"])):p(d)==="dataflow"?(i(),H(wi,{key:5,data:p(js),onOpenDoc:p(x)},null,8,["data","onOpenDoc"])):p(d)==="integrations"?(i(),H(eo,{key:6,data:p(Xs),onOpenDoc:p(x)},null,8,["data","onOpenDoc"])):p(d)==="functions"?(i(),H(to,{key:7,items:p(xn),annotations:p(qn),onOpenDoc:p(x)},null,8,["items","annotations","onOpenDoc"])):p(d)==="roles"?(i(),H(Ko,{key:8,data:p(Zs),onOpenDoc:p(x)},null,8,["data","onOpenDoc"])):p(d)==="quality"?(i(),H(cs,{key:9,annotations:p(qn),"design-groups":p(oe),"requirement-groups":p(Vn),onOpenDoc:p(x)},null,8,["annotations","design-groups","requirement-groups","onOpenDoc"])):p(d)==="effort"?(i(),H(Es,{key:10,data:p(Js),onOpenDoc:p(x)},null,8,["data","onOpenDoc"])):Y("",!0)],2)])}}}),_a=sn(ca,[["__scopeId","data-v-fc641948"]]);export{_a as default};

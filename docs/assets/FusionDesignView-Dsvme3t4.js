import{i as xs,j as Sn,a as pn,_ as cn,k as Nn,l as Hn,u as En,m as $s,n as Ss,F as qs}from"./index-D4PYKMw-.js";import{d as Gn,b as rn,j as yn,aJ as cs,al as $n,aN as As,aO as Rs,as as os,aP as gn,aQ as qn,aR as Ts,aS as Os,aT as Fs,aU as Ls,s as Xn,N as Ms,aV as Cs,aW as Es,p as Ns,t as Hs,h as Wn,f as Gs,aX as Ws,aD as ds,l as Us,q as ps,aH as Qs,B as rs,aY as Bs,w as zs,ao as Vs,aZ as us,c as Ys,a1 as js,a_ as Js,a$ as Xs,ar as Zs,b0 as ne}from"./element-plus-DvdzYCWZ.js";import{G as U,L as l,M as d,P as n,a0 as p,W as y,v as r,_ as g,$ as s,F as T,ae as C,O as W,R as bn,Y as _n,c as L,e as un,s as se,l as ee,n as Kn,z as Un,Z as J,S as ln,aB as Z,j as X,aq as dn,ac as mn,aj as te,q as Ln}from"./vue-vendor-CkCmkeKr.js";import{M as le}from"./MindmapNode-BU2R4iEK.js";import{F as ie,c as ms,r as ys,e as ae,s as ce,D as Zn}from"./highlightHtml-B6maQaJg.js";import{u as oe}from"./useDocWorkspace-CeszOPeA.js";import"./echarts-D5HcNVqP.js";const de={class:"overview-panel"},pe={class:"hero"},re={class:"hero-main"},ue={class:"hero-kicker"},me={class:"hero-chips"},ye={class:"stats-row"},he={class:"stat-value"},fe={class:"stat-label"},De={class:"stat-desc"},ve={class:"section"},Ie={class:"capability-grid"},ke={class:"capability-head"},ge={class:"capability-icon"},_e={class:"capability-title"},be={class:"capability-source"},we={class:"capability-summary"},Ke={class:"capability-meta"},Pe={class:"meta-pill"},xe={class:"meta-pill"},$e={class:"capability-actions"},Se={class:"section"},qe={class:"operation-grid"},Ae={class:"operation-watermark"},Re={class:"operation-head"},Te={class:"operation-index"},Oe={class:"operation-title"},Fe={class:"section"},Le={class:"goal-grid"},Me={class:"goal-index"},Ce={class:"source-note"},Ee=U({__name:"FusionOverviewPanel",props:{overview:{},capabilities:{},operations:{},capabilityStats:{},totals:{}},emits:["open-doc","open-mindmap"],setup(c,{emit:f}){const t=c,O=f,A={Cpu:Ls,MapLocation:Fs,VideoCamera:Os,PhoneFilled:Ts,Connection:qn,DataLine:gn,Grid:os,Link:Rs},K=L(()=>[{label:"能力域",value:t.totals.domains,desc:"5.4.1 系统设计"},{label:"功能模块",value:t.totals.modules,desc:"按章节标题拆分"},{label:"功能点",value:t.totals.points,desc:"按编号条目提炼"},{label:"运营服务",value:t.totals.operations,desc:"5.4.2.3 治理运营"}]);function H(_){return A[_]??gn}function w(_){return String(_+1).padStart(2,"0")}const q={ai:{main:"#3b82f6",soft:"#eff6ff"},map:{main:"#0ea5e9",soft:"#f0f9ff"},video:{main:"#06b6d4",soft:"#ecfeff"},comm:{main:"#6366f1",soft:"#eef2ff"},service:{main:"#8b5cf6",soft:"#f5f3ff"},data:{main:"#10b981",soft:"#ecfdf5"},portal:{main:"#f59e0b",soft:"#fffbeb"},external:{main:"#ec4899",soft:"#fdf2f8"}};function E(_){const i=q[_]??{main:"#3b82f6",soft:"#eff6ff"};return{"--cap-main":i.main,"--cap-soft":i.soft}}return(_,i)=>{const k=rn,I=xs,m=Sn,v=pn;return l(),d("div",de,[n("section",pe,[n("div",re,[n("div",ue,[p(k,null,{default:y(()=>[p(r(Gn))]),_:1}),i[1]||(i[1]=g(" 项目初步设计 · 数据融合子系统 ",-1))]),i[2]||(i[2]=n("h2",null,"双底座融合的应急调度数据基座",-1)),p(I,{content:c.overview.positioning,placement:"top"},{default:y(()=>[n("p",null,s(c.overview.positioning),1)]),_:1},8,["content"]),n("div",me,[(l(!0),d(T,null,C(c.overview.highlights,D=>(l(),d("span",{key:D,class:"hero-chip"},s(D),1))),128))])])]),p(m,{class:"stats-card"},{default:y(()=>[n("div",ye,[(l(!0),d(T,null,C(K.value,D=>(l(),d("div",{key:D.label,class:"stat-tile"},[n("div",he,s(D.value),1),n("div",fe,s(D.label),1),n("div",De,s(D.desc),1)]))),128))])]),_:1}),n("section",ve,[i[8]||(i[8]=n("div",{class:"section-head"},[n("div",null,[n("h3",null,"八大能力域"),n("p",null,"按 5.4.1 系统设计章节梳理，点击卡片可直接查看对应功能点与原文。")])],-1)),n("div",Ie,[(l(!0),d(T,null,C(c.capabilities,D=>(l(),W(m,{key:D.key,class:"capability-card",shadow:"hover",style:bn(E(D.key))},{default:y(()=>{var b,u;return[n("div",ke,[n("div",ge,[p(k,null,{default:y(()=>[(l(),W(_n(H(D.iconKey))))]),_:2},1024)]),n("div",_e,[n("h4",null,s(D.title),1),n("span",null,s(D.subtitle),1)]),n("span",be,s(D.sourceRef),1)]),p(I,{content:D.summary,placement:"top"},{default:y(()=>[n("p",we,s(D.summary),1)]),_:2},1032,["content"]),i[7]||(i[7]=n("div",{class:"capability-spacer"},null,-1)),n("div",Ke,[n("div",Pe,[n("em",null,s(((b=c.capabilityStats[D.key])==null?void 0:b.modules)??0),1),i[3]||(i[3]=n("span",null,"功能模块",-1))]),n("div",xe,[n("em",null,s(((u=c.capabilityStats[D.key])==null?void 0:u.points)??0),1),i[4]||(i[4]=n("span",null,"功能点",-1))])]),n("div",$e,[p(v,{link:"",size:"small",onClick:e=>O("open-doc",D.docKey)},{default:y(()=>[p(k,null,{default:y(()=>[p(r(yn))]),_:1}),i[5]||(i[5]=g(" 阅读原文 ",-1))]),_:1},8,["onClick"]),p(v,{link:"",size:"small",onClick:i[0]||(i[0]=e=>O("open-mindmap"))},{default:y(()=>[p(k,null,{default:y(()=>[p(r(cs))]),_:1}),i[6]||(i[6]=g(" 查看功能点 ",-1))]),_:1})])]}),_:2},1032,["style"]))),128))])]),n("section",Se,[i[10]||(i[10]=n("div",{class:"section-head"},[n("div",null,[n("h3",null,"数据融合治理运营服务"),n("p",null,"5.4.2.3 运营类服务，围绕数据采集、治理与基础库 / 主题库 / 专题库建设展开。")])],-1)),n("div",qe,[(l(!0),d(T,null,C(c.operations,(D,b)=>(l(),W(m,{key:D.key,class:"operation-card",shadow:"hover"},{default:y(()=>[n("span",Ae,s(w(b)),1),n("div",Re,[n("span",Te,s(w(b)),1),n("div",Oe,s(D.title),1)]),p(I,{content:D.summary,placement:"top"},{default:y(()=>[n("p",null,s(D.summary),1)]),_:2},1032,["content"]),p(v,{class:"operation-link",link:"",size:"small",onClick:u=>O("open-doc",D.docKey)},{default:y(()=>[i[9]||(i[9]=g(" 阅读原文 ",-1)),p(k,null,{default:y(()=>[p(r($n))]),_:1})]),_:1},8,["onClick"])]),_:2},1024))),128))])]),n("section",Fe,[i[11]||(i[11]=n("div",{class:"section-head"},[n("div",null,[n("h3",null,"设计要点"),n("p",null,"依据 5.4.1 能力域与 5.4.2.3 治理运营提炼。")])],-1)),p(m,{class:"goal-card"},{default:y(()=>[n("div",Le,[(l(!0),d(T,null,C(c.overview.goals,(D,b)=>(l(),d("div",{key:D,class:"goal-item"},[n("span",Me,s(w(b)),1),p(I,{content:D,placement:"top"},{default:y(()=>[n("p",null,s(D),1)]),_:2},1032,["content"]),p(k,{class:"goal-check"},{default:y(()=>[p(r(As))]),_:1})]))),128))])]),_:1})]),n("p",Ce,s(c.overview.sourceNote),1)])}}}),Ne=cn(Ee,[["__scopeId","data-v-37882433"]]),He={class:"mm-panel"},Ge={class:"mm-toolbar"},We={class:"mm-toolbar-left"},Ue={class:"mm-stat"},Qe={class:"mm-toolbar-right"},Be={key:0,class:"mm-hit"},ze={class:"mm-level"},Ve={class:"mm-zoom"},Ye={class:"mm-body"},je=["width","height"],Je=["d"],Xe={key:1,class:"mm-empty"},Ze={class:"inspector-head"},nt={class:"inspector-head-top"},st={class:"inspector-kicker"},et={key:0,class:"inspector-subtitle"},tt={key:0,class:"inspector-summary"},lt={key:2,class:"inspector-section"},it={class:"inspector-section-count"},at=["onClick"],ct={class:"inspector-child-index"},ot={class:"inspector-child-main"},dt={class:"inspector-child-text"},pt={key:0,class:"inspector-child-meta"},rt={key:3,class:"inspector-note"},ut=15,mt=9,yt=.15,ht=2.5,ft=U({__name:"FusionMindmapPanel",props:{data:{},overview:{},capabilities:{},operations:{},compareItems:{},capabilityStats:{},stats:{}},setup(c){const f=c,t=X(),O=X(),A=X("");function K(o,a){if(!a)return o;const h=o.text.toLowerCase().includes(a),x=(o.children??[]).map($=>K($,a)).filter($=>$!==null);return h?o:x.length?{...o,children:x}:null}const H=L(()=>{const o=A.value.trim().toLowerCase();return o?K(f.data,o):f.data});function w(o){var a;return o?(a=o.children)!=null&&a.length?o.children.reduce((h,x)=>h+w(x),0):1:0}const q=L(()=>w(H.value));function E(o,a,h="r",x=0,$=[]){if(h===a)return{node:o,path:h,depth:x,ancestors:$};const F=o.children??[];for(let j=0;j<F.length;j+=1){const M=E(F[j],a,`${h}-${j}`,x+1,[...$,o]);if(M)return M}return null}const _=X("r"),i=X(),k=L(()=>E(f.data,_.value));un(_,async()=>{var o;await Kn(),(o=i.value)==null||o.scrollTo({top:0})});function I(o){_.value=o}un(A,()=>{_.value="r"});const m=L(()=>{var M,z,sn,an;const o=k.value;if(!o)return null;const{node:a,depth:h,ancestors:x}=o;if(h===0)return{kicker:"方案总览",title:a.text,subtitle:"八大能力域 · 功能模块与功能点全景",summary:f.overview.sourceNote,stats:[{label:"能力域",value:f.stats.domains},{label:"功能模块",value:f.stats.modules},{label:"功能点",value:f.stats.points},{label:"运营服务",value:f.stats.operations}],childrenTitle:"能力域",childrenSelectable:!0,children:(a.children??[]).map(G=>{if(G.key==="ops")return{text:G.text,meta:`${f.stats.operations} 项服务`};const Y=G.key?f.capabilityStats[G.key]:void 0;return{text:G.text,meta:Y?`${Y.modules} 模块 / ${Y.points} 点`:void 0}})};const $=h<=1?a:x[1],F=$!=null&&$.key?f.capabilities.find(G=>G.key===$.key):void 0;if(F){const G=h===1,Y=a.children??[],nn=f.compareItems.find(In=>In.key===F.key),wn=G?[{label:"功能模块",value:((M=f.capabilityStats[F.key])==null?void 0:M.modules)??0},{label:"功能点",value:((z=f.capabilityStats[F.key])==null?void 0:z.points)??0},...nn?[{label:"需规功能点",value:nn.requirementFunctions.length}]:[]]:Y.length?[{label:h===2?"功能点":"子项",value:Y.length}]:void 0;return{kicker:G?`能力域 · ${F.sourceRef}`:h===2?"功能模块":"功能点",title:G?F.title:a.text,subtitle:G?F.subtitle:F.title,summary:G?F.summary:`所属能力域：${F.title}（${F.sourceRef}）`,stats:wn,childrenTitle:G?"功能模块":h===2?"功能点":"子项",childrenSelectable:Y.length>0,children:Y.map(In=>{var Jn;return{text:In.text,meta:(Jn=In.children)!=null&&Jn.length?`${In.children.length} 项`:void 0}}),docKey:F.docKey,compareKey:G?F.key:void 0,note:G&&nn?`需求规格 ${nn.requirementRef} · 共同覆盖 ${nn.sharedModules.length} 个模块`:void 0}}if(a.key==="ops"||x.some(G=>G.key==="ops")){const G=a.key==="ops",Y=f.operations.find(nn=>a.text.includes(nn.title));return{kicker:G?"治理运营":"运营服务",title:a.text,subtitle:G?"5.4.2.3 数据融合治理运营服务":"数据融合治理运营服务",summary:G?"面向应急调度双底座的数据采集、标准化治理与基础库 / 主题库 / 专题库运营。":Y==null?void 0:Y.summary,childrenTitle:G?"运营服务":void 0,children:G?f.operations.map(nn=>({text:nn.title,meta:nn.summary})):void 0,docKey:G||Y==null?void 0:Y.docKey,note:"运营类服务，非前端页面开发功能点。"}}return{kicker:"节点",title:a.text,subtitle:(sn=x[x.length-1])==null?void 0:sn.text,childrenTitle:"子项",childrenSelectable:!!((an=a.children)!=null&&an.length),children:(a.children??[]).map(G=>({text:G.text}))}}),v=new Set,D=[{label:"1 级",value:1},{label:"2 级",value:2},{label:"3 级",value:3},{label:"全部",value:0}],b=X(2);function u(o,a,h="r",x=0,$=[]){var F;return(F=o.children)==null||F.forEach((j,M)=>{var sn;const z=`${h}-${M}`;x+1===a&&((sn=j.children)!=null&&sn.length)&&$.push(z),u(j,a,z,x+1,$)}),$}function e(o){return o===0?new Set:new Set(u(f.data,o))}const P=se(e(b.value));un(b,o=>{P.value=e(o)}),un(()=>f.data,()=>{P.value=e(b.value)});const R=L(()=>A.value.trim()?v:P.value),Q=L(()=>P.value.size>0);function en(o){const a=new Set(P.value);a.has(o)?a.delete(o):a.add(o),P.value=a}function S(){if(Q.value){P.value=new Set,b.value=0;return}P.value=new Set(u(f.data,1)),b.value=1}function N(o){const a=`${_.value}-${o}`,h=new Set(P.value),x=a.split("-");for(let $=2;$<x.length;$+=1)h.delete(x.slice(0,$).join("-"));P.value=h,_.value=a}const V=X(1),B=X(0),on=X(0),Is=L(()=>({transform:`translate(${B.value}px, ${on.value}px) scale(${V.value})`})),An=X([]),Rn=X({w:0,h:0});function ks(o,a){const h=j=>j.toFixed(1);if(Math.abs(a.y-o.y)<.5)return`M ${h(o.x)} ${h(o.y)} L ${h(a.x)} ${h(a.y)}`;const x=o.x+ut,$=a.y>o.y?1:-1,F=Math.min(mt,Math.abs(a.y-o.y)/2,x-o.x,a.x-x);return[`M ${h(o.x)} ${h(o.y)}`,`L ${h(x-F)} ${h(o.y)}`,`Q ${h(x)} ${h(o.y)} ${h(x)} ${h(o.y+$*F)}`,`L ${h(x)} ${h(a.y-$*F)}`,`Q ${h(x)} ${h(a.y)} ${h(x+F)} ${h(a.y)}`,`L ${h(a.x)} ${h(a.y)}`].join(" ")}function fn(){const o=O.value,a=H.value;if(!o||!a){An.value=[];return}const h=o.getBoundingClientRect(),x=V.value||1,$=(M,z)=>{const sn=o.querySelector(`[data-mm-path="${M}"]`);if(!sn)return null;const an=sn.getBoundingClientRect();return{x:((z==="left"?an.left:an.right)-h.left)/x,y:(an.top+an.height/2-h.top)/x}},F=[],j=(M,z)=>{var an;if(!((an=M.children)!=null&&an.length)||R.value.has(z))return;const sn=$(z,"right");M.children.forEach((G,Y)=>{const nn=`${z}-${Y}`,wn=$(nn,"left");sn&&wn&&F.push(ks(sn,wn)),j(G,nn)})};j(a,"r"),An.value=F,Rn.value={w:o.offsetWidth,h:o.offsetHeight}}function Tn(o){return Math.min(ht,Math.max(yt,o))}function On(o,a,h){const x=Tn(V.value*o);if(x===V.value)return;const $=x/V.value;B.value=Math.round(a-$*(a-B.value)),on.value=Math.round(h-$*(h-on.value)),V.value=x}function gs(){var a;const o=(a=t.value)==null?void 0:a.getBoundingClientRect();o&&On(1.2,o.width/2,o.height/2)}function _s(){var a;const o=(a=t.value)==null?void 0:a.getBoundingClientRect();o&&On(1/1.2,o.width/2,o.height/2)}function bs(){V.value=1,B.value=48,on.value=28}function Yn(o){var x;o.preventDefault();const a=(x=t.value)==null?void 0:x.getBoundingClientRect();if(!a)return;const h=Math.exp(-o.deltaY*.0015);On(h,o.clientX-a.left,o.clientY-a.top)}function ws(){const o=t.value,a=O.value;if(!o||!a)return;const h=a.offsetWidth||1,x=Tn((o.clientWidth-96)/h);V.value=x;const $=h*x;B.value=Math.round($<o.clientWidth?(o.clientWidth-$)/2:48);const F=(a.offsetHeight||1)*x;on.value=F<o.clientHeight?Math.round((o.clientHeight-F)/2):28}function Dn(){const o=t.value,a=O.value;if(!o||!a)return;const h=Tn(Math.min((o.clientWidth-80)/(a.offsetWidth||1),(o.clientHeight-80)/(a.offsetHeight||1),1));V.value=h,B.value=Math.round((o.clientWidth-a.offsetWidth*h)/2),on.value=Math.round((o.clientHeight-a.offsetHeight*h)/2)}let Fn=!1,vn={x:0,y:0,tx:0,ty:0};function Ks(o){var h;if(o.button!==0)return;const a=o.target;a.closest(".mm-legend")||a.closest(".mm-label")||(Fn=!0,vn={x:o.clientX,y:o.clientY,tx:B.value,ty:on.value},(h=t.value)==null||h.setPointerCapture(o.pointerId))}function Ps(o){Fn&&(B.value=Math.round(vn.tx+(o.clientX-vn.x)),on.value=Math.round(vn.ty+(o.clientY-vn.y)))}function jn(o){var a;Fn=!1,(a=t.value)==null||a.releasePointerCapture(o.pointerId)}let hn=null;return un(H,async()=>{await Kn(),fn(),Dn()}),un(P,async()=>{await Kn(),fn(),Dn()}),ee(async()=>{var o,a,h;await Kn(),(o=i.value)==null||o.scrollTo({top:0}),fn(),Dn(),(a=t.value)==null||a.addEventListener("wheel",Yn,{passive:!1}),hn=new ResizeObserver(()=>fn()),O.value&&hn.observe(O.value),(h=document.fonts)==null||h.ready.then(()=>{fn(),Dn()}).catch(()=>{})}),Un(()=>{var o;(o=t.value)==null||o.removeEventListener("wheel",Yn),hn==null||hn.disconnect(),hn=null}),(o,a)=>{var F,j;const h=rn,x=Ms,$=pn;return l(),d("div",He,[n("header",Ge,[n("div",We,[a[7]||(a[7]=n("div",{class:"mm-title"},[n("span",{class:"mm-title-dot"}),g(" 开发功能点思维导图 ")],-1)),n("div",Ue,[n("span",null,[n("strong",null,s(c.stats.domains),1),a[3]||(a[3]=g(" 能力域",-1))]),n("span",null,[n("strong",null,s(c.stats.modules),1),a[4]||(a[4]=g(" 功能模块",-1))]),n("span",null,[n("strong",null,s(c.stats.points),1),a[5]||(a[5]=g(" 功能点",-1))]),n("span",null,[n("strong",null,s(c.stats.operations),1),a[6]||(a[6]=g(" 运营服务",-1))])]),a[8]||(a[8]=n("span",{class:"mm-hint"},"滚轮缩放 · 拖拽平移 · 点击节点查看详情 · +/- 展开折叠",-1))]),n("div",Qe,[p(x,{modelValue:A.value,"onUpdate:modelValue":a[0]||(a[0]=M=>A.value=M),class:"mm-search",placeholder:"搜索功能点 / 模块",clearable:""},{prefix:y(()=>[p(h,null,{default:y(()=>[p(r(Xn))]),_:1})]),_:1},8,["modelValue"]),A.value.trim()?(l(),d("span",Be,"命中 "+s(q.value)+" 项",1)):J("",!0),n("div",ze,[a[9]||(a[9]=n("span",{class:"mm-level-label"},"展开",-1)),(l(),d(T,null,C(D,M=>p($,{key:M.value,link:"",size:"small",class:ln({"is-active":b.value===M.value}),onClick:z=>b.value=M.value},{default:y(()=>[g(s(M.label),1)]),_:2},1032,["class","onClick"])),64))]),n("div",Ve,[p($,{link:"",icon:r(Cs),onClick:_s},null,8,["icon"]),n("span",{class:"mm-percent",title:"恢复 100%",onClick:bs},s(Math.round(V.value*100))+"%",1),p($,{link:"",icon:r(Es),onClick:gs},null,8,["icon"]),a[12]||(a[12]=n("div",{class:"mm-zoom-divider"},null,-1)),p($,{link:"",onClick:ws},{default:y(()=>[...a[10]||(a[10]=[g("适配宽度",-1)])]),_:1}),p($,{link:"",onClick:Dn},{default:y(()=>[...a[11]||(a[11]=[g("居中全览",-1)])]),_:1}),p($,{link:"",onClick:S},{default:y(()=>[g(s(Q.value?"展开全部":"收起全部"),1)]),_:1})])])]),n("div",Ye,[n("main",{ref_key:"viewportRef",ref:t,class:"mm-viewport",onPointerdown:Ks,onPointermove:Ps,onPointerup:jn,onPointercancel:jn},[H.value?(l(),d("div",{key:0,ref_key:"canvasRef",ref:O,class:"mm-canvas",style:bn(Is.value)},[(l(),d("svg",{class:"mm-links",width:Rn.value.w,height:Rn.value.h,"aria-hidden":"true"},[(l(!0),d(T,null,C(An.value,(M,z)=>(l(),d("path",{key:z,d:M},null,8,Je))),128))],8,je)),p(le,{node:H.value,path:"r",depth:0,collapsible:!A.value.trim(),selectable:!0,"selected-path":_.value,"collapsed-paths":R.value,onToggle:en,onSelect:I},null,8,["node","collapsible","selected-path","collapsed-paths"])],4)):(l(),d("div",Xe,[p(h,null,{default:y(()=>[p(r(Xn))]),_:1}),n("p",null,"未找到与「"+s(A.value)+"」匹配的功能点",1),p($,{link:"",onClick:a[1]||(a[1]=M=>A.value="")},{default:y(()=>[...a[13]||(a[13]=[g("清空搜索",-1)])]),_:1})])),a[14]||(a[14]=Z('<div class="mm-legend" data-v-8945fc84><span class="legend-item" data-v-8945fc84><i class="dot branch" data-v-8945fc84></i>能力域</span><span class="legend-item" data-v-8945fc84><i class="dot accent" data-v-8945fc84></i>功能模块</span><span class="legend-item" data-v-8945fc84><i class="dot text" data-v-8945fc84></i>功能点</span><span class="legend-item" data-v-8945fc84><i class="dot danger" data-v-8945fc84></i>治理运营</span></div>',1))],544),n("aside",{ref_key:"inspectorRef",ref:i,class:"mm-inspector"},[m.value?(l(),d(T,{key:0},[n("div",Ze,[n("div",nt,[n("span",st,s(m.value.kicker),1),_.value!=="r"?(l(),W($,{key:0,link:"",size:"small",onClick:a[2]||(a[2]=M=>_.value="r")},{default:y(()=>[...a[15]||(a[15]=[g(" 回到总览 ",-1)])]),_:1})):J("",!0)]),n("h3",null,s(m.value.title),1),m.value.subtitle?(l(),d("p",et,s(m.value.subtitle),1)):J("",!0)]),m.value.summary?(l(),d("p",tt,s(m.value.summary),1)):J("",!0),(F=m.value.stats)!=null&&F.length?(l(),d("div",{key:1,class:ln(["inspector-stats",`is-${m.value.stats.length}`])},[(l(!0),d(T,null,C(m.value.stats,M=>(l(),d("div",{key:M.label,class:"inspector-stat"},[n("strong",null,s(M.value),1),n("span",null,s(M.label),1)]))),128))],2)):J("",!0),(j=m.value.children)!=null&&j.length?(l(),d("section",lt,[n("h4",null,[g(s(m.value.childrenTitle)+" ",1),n("span",it,s(m.value.children.length),1)]),n("ul",null,[(l(!0),d(T,null,C(m.value.children,(M,z)=>(l(),d("li",{key:`${M.text}-${z}`,class:ln({"is-clickable":m.value.childrenSelectable}),onClick:sn=>m.value.childrenSelectable&&N(z)},[n("span",ct,s(String(z+1).padStart(2,"0")),1),n("div",ot,[n("span",dt,s(M.text),1),M.meta?(l(),d("span",pt,s(M.meta),1)):J("",!0)])],10,at))),128))])])):J("",!0),m.value.note?(l(),d("p",rt,s(m.value.note),1)):J("",!0)],64)):J("",!0)],512)])])}}}),Dt=cn(ft,[["__scopeId","data-v-8945fc84"]]),vt={class:"compare-panel"},It={class:"domain-nav"},kt={class:"domain-nav-head"},gt={class:"domain-nav-list"},_t=["onClick"],bt={class:"nav-index"},wt={class:"nav-copy"},Kt={class:"nav-count"},Pt={key:0,class:"compare-detail"},xt={class:"detail-head"},$t={class:"detail-copy"},St={class:"detail-ref"},qt={class:"detail-actions"},At={class:"coverage-bar"},Rt={class:"coverage-stat"},Tt={class:"coverage-stat is-muted"},Ot={class:"coverage-stat"},Ft={class:"mapping-section"},Lt={class:"section-head"},Mt={class:"section-count"},Ct={class:"mapping-list"},Et={class:"mapping-initial"},Nt={key:0},Ht={class:"mapping-link"},Gt={class:"relation-badge"},Wt={class:"mapping-count"},Ut={class:"mapping-requirement"},Qt={class:"function-chips"},Bt={key:0,class:"mapping-note"},zt={class:"diff-section"},Vt={class:"diff-columns"},Yt={class:"diff-card is-requirement"},jt={class:"diff-card is-initial"},Jt=U({__name:"FusionComparePanel",props:{items:{},activeKey:{}},emits:["update:activeKey","open-doc"],setup(c,{emit:f}){const t=c,O=f,A=L({get:()=>t.activeKey,set:_=>O("update:activeKey",_)}),K=L(()=>t.items.find(_=>_.key===A.value)??t.items[0]),H=L(()=>t.items.reduce((_,i)=>_+i.requirementFunctions.length,0)),w={aligned:{label:"一一对应"},refined:{label:"需规细化"},split:{label:"拆分细化"}};function q(_){var I;const[i,k]=_.functionRange;return((I=K.value)==null?void 0:I.requirementFunctions.slice(i-1,k))??[]}function E(_){return _.functionRange[1]-_.functionRange[0]+1}return(_,i)=>{const k=rn,I=pn;return l(),d("div",vt,[n("aside",It,[n("div",kt,[i[2]||(i[2]=n("span",{class:"nav-kicker"},"DESIGN CHECK",-1)),i[3]||(i[3]=n("h2",null,"能力域比对",-1)),n("p",null,s(c.items.length)+" 个能力域 · "+s(H.value)+" 个需规功能点",1)]),n("div",gt,[(l(!0),d(T,null,C(c.items,(m,v)=>(l(),d("button",{key:m.key,type:"button",class:ln(["domain-nav-item",{active:m.key===A.value}]),onClick:D=>A.value=m.key},[n("span",bt,s(String(v+1).padStart(2,"0")),1),n("span",wt,[n("strong",null,s(m.title),1),n("small",null,s(m.initialRef)+" ↔ "+s(m.requirementRef),1)]),n("span",Kt,s(m.requirementFunctions.length),1)],10,_t))),128))]),i[4]||(i[4]=n("div",{class:"domain-nav-foot"},[n("span",null,[n("i",{class:"legend-dot is-aligned"}),g("一一对应")]),n("span",null,[n("i",{class:"legend-dot is-refined"}),g("需规细化")]),n("span",null,[n("i",{class:"legend-dot is-split"}),g("拆分细化")])],-1))]),K.value?(l(),d("section",Pt,[n("header",xt,[n("div",$t,[n("span",St,s(K.value.initialRef)+" ↔ "+s(K.value.requirementRef),1),n("h1",null,s(K.value.title),1),n("p",null,s(K.value.conclusion),1)]),n("div",qt,[p(I,{size:"small",plain:"",onClick:i[0]||(i[0]=m=>O("open-doc",K.value.initialDocKey))},{default:y(()=>[p(k,null,{default:y(()=>[p(r(yn))]),_:1}),i[5]||(i[5]=g(" 阅读初设 ",-1))]),_:1}),p(I,{size:"small",onClick:i[1]||(i[1]=m=>O("open-doc",K.value.requirementDocKey))},{default:y(()=>[p(k,null,{default:y(()=>[p(r(yn))]),_:1}),i[6]||(i[6]=g(" 阅读需规 ",-1))]),_:1})])]),n("div",At,[n("div",Rt,[n("strong",null,s(K.value.initialModules.length),1),i[7]||(i[7]=n("span",null,"初设模块",-1))]),i[10]||(i[10]=n("span",{class:"coverage-arrow"},"→",-1)),n("div",Tt,[n("strong",null,s(K.value.mappings.length),1),i[8]||(i[8]=n("span",null,"关联分组",-1))]),i[11]||(i[11]=n("span",{class:"coverage-arrow"},"→",-1)),n("div",Ot,[n("strong",null,s(K.value.requirementFunctions.length),1),i[9]||(i[9]=n("span",null,"需规功能点",-1))]),i[12]||(i[12]=n("p",{class:"coverage-hint"},"按初设能力模块分组，逐组对应需规功能点；中间标签表示覆盖方式。",-1))]),n("section",Ft,[n("header",Lt,[i[13]||(i[13]=n("div",null,[n("h2",null,"模块 → 功能点映射"),n("p",null,"按初设模块分组，中列标注覆盖方式，右列对应需规功能点")],-1)),n("span",Mt,s(K.value.mappings.length)+" 组关联",1)]),i[14]||(i[14]=n("div",{class:"mapping-head"},[n("span",null,"初设能力模块"),n("span",null,"覆盖关系"),n("span",null,"需规功能点")],-1)),n("div",Ct,[(l(!0),d(T,null,C(K.value.mappings,(m,v)=>(l(),d("article",{key:`${m.initialModule}-${v}`,class:ln(["mapping-row",`is-${m.relation}`])},[n("div",Et,[n("strong",null,s(m.initialModule),1),m.initialDetail?(l(),d("p",Nt,s(m.initialDetail),1)):J("",!0)]),n("div",Ht,[n("span",Gt,s(w[m.relation].label),1),n("span",Wt,s(E(m))+" 个功能点",1)]),n("div",Ut,[n("div",Qt,[(l(!0),d(T,null,C(q(m),(D,b)=>(l(),d("span",{key:D,class:"function-chip"},[n("em",null,s(m.functionRange[0]+b),1),g(" "+s(D),1)]))),128))]),m.note?(l(),d("p",Bt,s(m.note),1)):J("",!0)])],2))),128))])]),n("section",zt,[i[17]||(i[17]=n("header",{class:"section-head"},[n("div",null,[n("h2",null,"差异与保留"),n("p",null,"映射之外的补充说明，避免只看到功能点数量")])],-1)),n("div",Vt,[n("article",Yt,[i[15]||(i[15]=n("h3",null,[n("i",{class:"diff-dot"}),g("需规侧细化 / 补充")],-1)),n("ul",null,[(l(!0),d(T,null,C(K.value.requirementHighlights,m=>(l(),d("li",{key:m},s(m),1))),128))])]),n("article",jt,[i[16]||(i[16]=n("h3",null,[n("i",{class:"diff-dot"}),g("初设侧保留")],-1)),n("ul",null,[(l(!0),d(T,null,C(K.value.designHighlights,m=>(l(),d("li",{key:m},s(m),1))),128))])])])])])):J("",!0)])}}}),Xt=cn(Jt,[["__scopeId","data-v-5fff8290"]]),Zt={class:"flow-panel"},nl={class:"flow-hero"},sl={class:"hero-copy"},el={class:"hero-kicker"},tl={class:"hero-metrics"},ll={class:"flow-section"},il={class:"section-head"},al={class:"pipeline"},cl=["role","tabindex","onClick","onKeyup"],ol={class:"stage-head"},dl={class:"stage-index"},pl={class:"stage-icon"},rl={class:"stage-title"},ul={key:0},ml={class:"stage-desc"},yl={class:"stage-metrics"},hl={class:"stage-highlights"},fl={key:0,class:"stage-foot"},Dl={key:0,class:"stage-arrow","aria-hidden":"true"},vl={class:"source-note"},Il=U({__name:"FusionDataflowPanel",props:{data:{}},emits:["open-doc"],setup(c,{emit:f}){const t=c,O=f,A={sources:ps,collect:Us,ods:ds,standard:Ws,base:Gs,topic:Wn,special:Hs,service:Ns},K={sources:{main:"#3b82f6",soft:"#eff6ff"},collect:{main:"#0ea5e9",soft:"#f0f9ff"},ods:{main:"#06b6d4",soft:"#ecfeff"},standard:{main:"#10b981",soft:"#ecfdf5"},base:{main:"#14b8a6",soft:"#f0fdfa"},topic:{main:"#6366f1",soft:"#eef2ff"},special:{main:"#f59e0b",soft:"#fffbeb"},service:{main:"#8b5cf6",soft:"#f5f3ff"}},H=L(()=>{const v=t.data.stages,D=v.reduce((e,P)=>e+i(P,"库数量"),0),b=v.reduce((e,P)=>e+i(P,"工作量"),0),u=_(v,"汇聚数据表")??"200+ 张";return[{label:"治理阶段",value:String(v.length),unit:"阶段"},{label:"汇聚数据表",value:u.replace(/[^\d.+]/g,""),unit:"张"},{label:"数据仓库",value:String(D),unit:"库"},{label:"治理工作量",value:k(b),unit:"人月"}]});function w(v){return A[v]??gn}function q(v){const D=K[v]??{main:"#3b82f6",soft:"#eff6ff"};return{"--stage-main":D.main,"--stage-soft":D.soft}}function E(v){return String(v+1).padStart(2,"0")}function _(v,D){for(const b of v){const u=b.metrics.find(e=>e.label===D);if(u)return u.value}}function i(v,D){const b=v.metrics.find(e=>e.label===D);if(!b)return 0;const u=Number.parseFloat(b.value.replace(/[^\d.]/g,""));return Number.isFinite(u)?u:0}function k(v){return Number.isInteger(v)?String(v):v.toFixed(1)}function I(v){v.docKey&&O("open-doc",v.docKey)}function m(v){v&&O("open-doc",v)}return(v,D)=>{const b=rn,u=pn;return l(),d("div",Zt,[n("header",nl,[n("div",sl,[n("span",el,[p(b,null,{default:y(()=>[p(r(gn))]),_:1}),D[0]||(D[0]=g(" DATA PIPELINE ",-1))]),D[1]||(D[1]=n("h2",null,"数据治理链路",-1)),D[2]||(D[2]=n("p",null," 从多源数据到服务与 AI 的完整链路：采集汇聚进入贴源层，经标准化治理沉淀为基础库、主题库与专题库， 最终以 API、消息与门户形态对外输出，并与 AI、地图、视频、通信能力融合。 ",-1))]),n("div",tl,[(l(!0),d(T,null,C(H.value,e=>(l(),d("div",{key:e.label,class:"hero-metric"},[n("strong",null,[g(s(e.value),1),n("em",null,s(e.unit),1)]),n("span",null,s(e.label),1)]))),128))])]),n("section",ll,[n("header",il,[D[3]||(D[3]=n("h3",null,"阶段流水线",-1)),n("p",null,"共 "+s(c.data.stages.length)+" 个阶段，点击阶段卡片可查看对应治理服务的原文",1)]),n("div",al,[(l(!0),d(T,null,C(c.data.stages,(e,P)=>(l(),d(T,{key:e.key},[n("article",{class:ln(["stage-card",{"is-clickable":!!e.docKey}]),style:bn(q(e.key)),role:e.docKey?"button":void 0,tabindex:e.docKey?0:void 0,onClick:R=>I(e),onKeyup:dn(R=>I(e),["enter"])},[n("header",ol,[n("span",dl,s(E(P)),1),n("span",pl,[p(b,null,{default:y(()=>[(l(),W(_n(w(e.key))))]),_:2},1024)]),n("div",rl,[n("h4",null,s(e.title),1),e.subtitle?(l(),d("span",ul,s(e.subtitle),1)):J("",!0)])]),n("p",ml,s(e.description),1),n("div",yl,[(l(!0),d(T,null,C(e.metrics,R=>(l(),d("div",{key:R.label,class:"metric-tile"},[n("strong",null,s(R.value),1),n("span",null,s(R.label),1)]))),128))]),n("ul",hl,[(l(!0),d(T,null,C(e.highlights,R=>(l(),d("li",{key:R},s(R),1))),128))]),e.docKey?(l(),d("footer",fl,[p(u,{link:"",size:"small",onClick:mn(R=>m(e.docKey),["stop"])},{default:y(()=>[p(b,null,{default:y(()=>[p(r(yn))]),_:1}),D[4]||(D[4]=g(" 阅读原文 ",-1)),p(b,{class:"foot-arrow"},{default:y(()=>[p(r($n))]),_:1})]),_:1},8,["onClick"])])):J("",!0)],46,cl),P<c.data.stages.length-1?(l(),d("div",Dl,[p(b,null,{default:y(()=>[p(r($n))]),_:1})])):J("",!0)],64))),128))])]),n("p",vl,s(c.data.sourceNote),1)])}}}),kl=cn(Il,[["__scopeId","data-v-fdf1c863"]]),gl={class:"integration-panel"},_l={class:"panel-header"},bl={class:"panel-head-main"},wl={class:"panel-kicker"},Kl={class:"panel-stats"},Pl={class:"stat"},xl={class:"stat"},$l={class:"stat"},Sl={class:"panel-body"},ql={class:"group-nav"},Al={class:"group-nav-head"},Rl={class:"group-nav-list"},Tl=["onClick"],Ol={class:"nav-index"},Fl={class:"nav-copy"},Ll={class:"nav-count"},Ml={key:0,class:"group-detail"},Cl={class:"group-head"},El={class:"relation-strip"},Nl={class:"rel-node is-target"},Hl={class:"group-copy-row"},Gl={class:"group-copy"},Wl={class:"group-badges"},Ul={class:"item-grid"},Ql={class:"item-head"},Bl={class:"item-index"},zl={class:"item-count"},Vl={class:"item-desc"},Yl={class:"item-interfaces"},jl={class:"item-foot"},Jl=["title"],Xl={class:"source-note"},Zl=U({__name:"FusionIntegrationPanel",props:{data:{}},emits:["open-doc"],setup(c,{emit:f}){var i;const t=c,O=f,A=X(((i=t.data.groups[0])==null?void 0:i.key)??""),K=L(()=>t.data.groups.find(k=>k.key===A.value)??t.data.groups[0]),H=L(()=>t.data.groups.reduce((k,I)=>k+I.items.length,0)),w=L(()=>t.data.groups.reduce((k,I)=>k+I.items.reduce((m,v)=>m+v.interfaces.length,0),0));un(()=>t.data.groups,k=>{var I;k.some(m=>m.key===A.value)||(A.value=((I=k[0])==null?void 0:I.key)??"")});function q(k){return String(k+1).padStart(2,"0")}function E(k){return k.items.reduce((I,m)=>I+m.interfaces.length,0)}function _(k){O("open-doc",k??"design-external")}return(k,I)=>{const m=rn,v=Nn,D=pn,b=Sn,u=Hn;return l(),d("div",gl,[n("header",_l,[n("div",bl,[n("span",wl,[p(m,null,{default:y(()=>[p(r(qn))]),_:1}),I[0]||(I[0]=g(" INTEGRATION MAP ",-1))]),I[1]||(I[1]=n("h1",null,"外部接口全景",-1)),I[2]||(I[2]=n("p",null,"以数据融合子系统为统一对接枢纽，汇聚省政务云、交通集团、国家部级与厅内协同平台的接口能力，形成外部系统一张图。",-1))]),n("div",Kl,[n("div",Pl,[n("em",null,s(c.data.groups.length),1),I[3]||(I[3]=n("span",null,"外部平台",-1))]),n("div",xl,[n("em",null,s(H.value),1),I[4]||(I[4]=n("span",null,"对接能力",-1))]),n("div",$l,[n("em",null,s(w.value),1),I[5]||(I[5]=n("span",null,"接口能力",-1))])])]),n("div",Sl,[n("aside",ql,[n("div",Al,[I[6]||(I[6]=n("span",{class:"nav-kicker"},"PLATFORM GROUPS",-1)),n("p",null,s(c.data.groups.length)+" 类对接来源",1)]),n("div",Rl,[(l(!0),d(T,null,C(c.data.groups,(e,P)=>(l(),d("button",{key:e.key,type:"button",class:ln(["group-nav-item",{active:e.key===A.value}]),onClick:R=>A.value=e.key},[n("span",Ol,s(q(P)),1),n("span",Fl,[n("strong",null,s(e.title),1),n("small",null,s(e.items.length)+" 项对接能力",1)]),n("span",Ll,s(e.items.length),1)],10,Tl))),128))]),I[7]||(I[7]=n("div",{class:"group-nav-foot"},"统一接入 · 统一鉴权 · 统一管控",-1))]),K.value?(l(),d("section",Ml,[n("div",Cl,[n("div",El,[I[8]||(I[8]=n("span",{class:"rel-node is-core"},[g(" 数据融合子系统 "),n("small",null,"统一对接枢纽")],-1)),I[9]||(I[9]=n("span",{class:"rel-link","aria-hidden":"true"},[n("i"),n("em",null,"⇄"),n("i")],-1)),n("span",Nl,[g(s(K.value.title)+" ",1),n("small",null,s(K.value.items.length)+" 项对接能力",1)])]),n("div",Hl,[n("div",Gl,[n("h2",null,s(K.value.title),1),n("p",null,s(K.value.description),1)]),n("div",Wl,[p(v,{size:"small",effect:"plain"},{default:y(()=>[g(s(K.value.items.length)+" 项能力",1)]),_:1}),p(v,{size:"small",effect:"plain",type:"success"},{default:y(()=>[g(s(E(K.value))+" 个接口",1)]),_:1})])])]),n("div",Ul,[(l(!0),d(T,null,C(K.value.items,(e,P)=>(l(),W(b,{key:e.key,class:"item-card",shadow:"hover"},{default:y(()=>[n("div",Ql,[n("span",Bl,s(q(P)),1),n("h3",null,s(e.title),1),n("span",zl,s(e.interfaces.length)+" 接口",1)]),n("p",Vl,s(e.description),1),n("div",Yl,[(l(!0),d(T,null,C(e.interfaces,R=>(l(),d("span",{key:R,class:"interface-chip"},s(R),1))),128))]),n("div",jl,[n("span",{class:"item-auth",title:e.authMode},[p(m,null,{default:y(()=>[p(r(Qs))]),_:1}),n("em",null,s(e.authMode||"未标注"),1)],8,Jl),p(D,{link:"",size:"small",class:"item-link",onClick:R=>_(e.docKey)},{default:y(()=>[I[10]||(I[10]=g(" 阅读原文 ",-1)),p(m,null,{default:y(()=>[p(r($n))]),_:1})]),_:1},8,["onClick"])])]),_:2},1024))),128))]),n("p",Xl,s(c.data.sourceNote),1)])):(l(),W(u,{key:1,class:"empty-state",description:"暂无外部接口数据"}))])])}}}),ni=cn(Zl,[["__scopeId","data-v-5074a723"]]),si=U({__name:"FusionFunctionMatrixPanel",props:{items:{},annotations:{default:()=>[]}},emits:["open-doc"],setup(c,{emit:f}){const t=c,O=f;function A(w){return{id:w.id,type:w.type,term:w.term,title:w.title,description:w.description,correction:w.correction,docKey:w.docKey}}const K=L(()=>{const w=new Map;for(const q of t.annotations){if(!q.docKey)continue;const E=w.get(q.docKey)??{tech:[],typo:[]};q.type==="tech"&&E.tech.push(A(q)),q.type==="typo"&&E.typo.push(A(q)),w.set(q.docKey,E)}return w}),H=L(()=>t.items.flatMap(w=>{const q=K.value.get(w.requirementDocKey);return w.requirementFunctions.map((E,_)=>{const i=_+1,k=w.mappings.find(I=>i>=I.functionRange[0]&&i<=I.functionRange[1]);return{rowKey:`${w.key}-${i}`,domainKey:w.key,domain:w.title,functionName:E,initialModule:(k==null?void 0:k.initialModule)??"",relation:(k==null?void 0:k.relation)??"unmapped",requirementDocKey:w.requirementDocKey,initialDocKey:w.initialDocKey,techAnnotations:(q==null?void 0:q.tech)??[],typoAnnotations:(q==null?void 0:q.typo)??[]}})}));return(w,q)=>(l(),W(ie,{rows:H.value,accent:"#3b82f6","accent-rgb":"59, 130, 246","domain-label":"能力域","function-label":"功能点","count-hint":"批注数按需求原文文档统计",description:"需求功能点 × 初设模块 × 覆盖关系 × 批注质量",onOpenDoc:q[0]||(q[0]=E=>O("open-doc",E))},null,8,["rows"]))}}),ei={class:"role-panel"},ti={class:"panel-header"},li={class:"panel-head-main"},ii={class:"panel-kicker"},ai={class:"panel-head-actions"},ci={class:"panel-stats"},oi={class:"stat"},di={class:"stat"},pi={class:"stat"},ri={class:"role-body"},ui={class:"legend"},mi={class:"legend-hint"},yi={class:"matrix-wrap"},hi={class:"role-table"},fi={class:"role-cell"},Di={class:"role-main"},vi={class:"role-scope"},Ii={class:"source-note"},ki=U({__name:"FusionRoleMatrixPanel",props:{data:{}},emits:["open-doc"],setup(c,{emit:f}){const t=c,O=f,A=[{key:"manage",label:"管理"},{key:"configure",label:"配置"},{key:"view",label:"查看"},{key:"none",label:"无"}],K={manage:"管理",configure:"配置",view:"查看",none:"无"},H=L(()=>t.data.rows.reduce((_,i)=>_+t.data.domains.filter(k=>i.access[k.key]==="manage").length,0));function w(_,i){return _.access[i]??"none"}function q(_){return K[_]}function E(){O("open-doc","req-spec-overview")}return(_,i)=>{const k=rn,I=pn;return l(),d("div",ei,[n("header",ti,[n("div",li,[n("span",ii,[p(k,null,{default:y(()=>[p(r(rs))]),_:1}),i[0]||(i[0]=g(" ROLE MATRIX ",-1))]),i[2]||(i[2]=n("h1",null,"角色权限矩阵",-1)),n("p",null,"按需求规格 3.8.3 业务角色一览表，将 "+s(c.data.rows.length)+" 类角色映射到 "+s(c.data.domains.length)+" 大能力域的管理、配置与查看权限。",1),n("div",ai,[p(I,{size:"small",plain:"",onClick:E},{default:y(()=>[p(k,null,{default:y(()=>[p(r(yn))]),_:1}),i[1]||(i[1]=g(" 查看需求总览 ",-1))]),_:1})])]),n("div",ci,[n("div",oi,[n("em",null,s(c.data.rows.length),1),i[3]||(i[3]=n("span",null,"业务角色",-1))]),n("div",di,[n("em",null,s(c.data.domains.length),1),i[4]||(i[4]=n("span",null,"能力域",-1))]),n("div",pi,[n("em",null,s(H.value),1),i[5]||(i[5]=n("span",null,"管理授权",-1))])])]),n("div",ri,[n("div",ui,[i[7]||(i[7]=n("span",{class:"legend-title"},"权限级别",-1)),(l(),d(T,null,C(A,m=>n("span",{key:m.key,class:"legend-item"},[n("i",{class:ln(["legend-swatch",`is-${m.key}`])},null,2),g(" "+s(m.label),1)])),64)),n("span",mi,[p(k,null,{default:y(()=>[p(r(Bs))]),_:1}),i[6]||(i[6]=g(" 点击角色行查看需求总览原文 ",-1))])]),n("div",yi,[n("table",hi,[n("thead",null,[n("tr",null,[i[8]||(i[8]=n("th",{class:"corner"},"角色 / 机构",-1)),(l(!0),d(T,null,C(c.data.domains,m=>(l(),d("th",{key:m.key,class:"domain-head"},[n("span",null,s(m.title),1)]))),128))])]),n("tbody",null,[(l(!0),d(T,null,C(c.data.rows,m=>(l(),d("tr",{key:m.key,class:"role-row",tabindex:"0",onClick:E,onKeyup:dn(E,["enter"])},[n("th",fi,[n("span",Di,[n("strong",null,s(m.role),1),n("em",null,s(m.org),1)]),n("span",vi,s(m.scope),1)]),(l(!0),d(T,null,C(c.data.domains,v=>(l(),d("td",{key:v.key,class:"access-cell"},[n("span",{class:ln(["access-pill",`is-${w(m,v.key)}`])},s(q(w(m,v.key))),3)]))),128))],32))),128))])])]),n("p",Ii,s(c.data.sourceNote),1)])])}}}),gi=cn(ki,[["__scopeId","data-v-0c3f45af"]]),tn=[{id:"req-industry-base",docKey:"req-3-2-7",type:"term",term:"行业数字底座",title:"行业数字底座",description:"交通运输行业统一的数据、算法与时空能力底座；本系统需要与其完成数据与能力对接。"},{id:"req-digital-hall",docKey:"req-3-2-7",type:"term",term:"数字交通运输厅",title:"数字交通运输厅",description:"广东省交通运输厅的数字化底座，与行业数字底座共同构成「双底座」。"},{id:"req-dual-base",docKey:"req-3-2-7",type:"term",term:"双底座",title:"双底座",description:"行业数字底座 + 数字交通运输厅数据底座。数据融合子系统负责两者的资源整合与统一服务。"},{id:"req-collab-platform",docKey:"req-3-2-7",type:"link",term:"安全应急业务协同平台",title:"安全应急业务协同平台",description:"横向服务的厅内协同平台，相关外部接口与统一门户能力见「外部系统接口对接」。",targetDocKey:"design-external"},{id:"ai-knowledge-base",docKey:"design-ai",type:"term",term:"知识库",title:"知识库",description:"承载文档、切片与向量索引的知识容器，是知识检索与智能体问答的数据基础。",maxOccurrences:2},{id:"ai-chunk",docKey:"design-ai",type:"term",term:"知识切片",title:"知识切片",description:"把长文档按语义或文本块切分成可检索单元；切片质量直接影响知识召回准确率。",maxOccurrences:2},{id:"ai-vector-db",docKey:"design-ai",type:"term",term:"向量数据库",title:"向量数据库",description:"存储知识切片向量并提供相似度检索的数据库，是语义检索的核心组件。"},{id:"ai-agent",docKey:"design-ai",type:"term",term:"智能体",title:"智能体（AI Agent）",description:"由大模型、知识库、工具与编排流程组合而成的 AI 应用；可面向具体业务场景独立运行。",maxOccurrences:2},{id:"ai-typo-simple",docKey:"design-ai",type:"typo",term:"建议编排",title:"疑似错别字",description:"原文写为「支持建议编排」，结合上下文与后文标题应为「简易编排」。",correction:"简易编排"},{id:"ai-orchestration",docKey:"design-ai",type:"term",term:"编排",title:"编排",description:"以可视化方式组织提示词、知识库、工具与流程节点，形成智能体的可执行逻辑。"},{id:"ai-hit-test",docKey:"design-ai",type:"term",term:"命中测试",title:"命中测试",description:"输入关键词模拟检索，验证知识库召回效果、TopK 数量与置信度配置是否合理。"},{id:"ai-rerank",docKey:"design-ai",type:"term",term:"重排",title:"重排（Rerank）",description:"对多路召回结果再次排序，把最相关的知识排在前面，提升最终回答质量。"},{id:"ai-typo-fasle",docKey:"design-ai",type:"typo",term:"fasle",title:"疑似拼写错误",description:"原文参数说明中出现 `fasle`，应为布尔值 `false`。",correction:"false"},{id:"ai-typo-work2vec",docKey:"design-ai",type:"typo",term:"work2vec",title:"疑似拼写错误",description:"原文写为 `work2vec`，常见词向量模型名称为 `word2vec`。",correction:"word2vec"},{id:"map-typo-region",docKey:"design-map",type:"typo",term:"地区引擎封装服务",title:"疑似错别字",description:"原文首段写为「地区引擎封装服务」，结合章节标题与上下文应为「地图引擎封装服务」。",correction:"地图引擎封装服务"},{id:"map-poi",docKey:"design-map",type:"term",term:"POI",title:"POI（兴趣点）",description:"Point of Interest，地图上的兴趣点，如收费站、服务区、桥梁等。"},{id:"map-aoi",docKey:"design-map",type:"term",term:"AOI",title:"AOI（兴趣面）",description:"Area of Interest，地图上的面状兴趣区域，如园区、场站、管理片区。"},{id:"map-stake",docKey:"design-map",type:"term",term:"桩号",title:"桩号",description:"高速公路沿线里程位置标识；桩号与坐标互转是路网定位与事件上图的基础能力。"},{id:"map-isochrone",docKey:"design-map",type:"term",term:"等时到达圈",title:"等时圈",description:"从中心点出发、在指定时间内可到达的空间范围，用于应急力量覆盖分析。"},{id:"map-buffer",docKey:"design-map",type:"term",term:"缓冲区分析",title:"缓冲区分析",description:"围绕点、线、面要素按指定距离生成影响范围，用于事件影响圈与资源覆盖分析。"},{id:"map-drift",docKey:"design-map",type:"term",term:"轨迹纠偏",title:"轨迹纠偏",description:"把带误差的定位点吸附到道路或车道上，提升车辆轨迹与里程统计的准确性。"},{id:"video-preview",docKey:"design-video",type:"term",term:"实时预览",title:"实时预览",description:"拉取视频流并实时播放，是视频监控应用的最基础能力。"},{id:"video-ptz",docKey:"design-video",type:"term",term:"云台控制",title:"云台控制",description:"控制摄像头的方向、焦距与预置位，用于现场画面追踪。"},{id:"video-permission",docKey:"design-video",type:"link",term:"用户权限查询",title:"用户权限查询",description:"视频能力需要与统一用户中心/权限体系联动，校验用户是否有权查看对应通道。",targetDocKey:"design-external"},{id:"comm-typo-ji",docKey:"design-comm",type:"typo",term:"既正在召开",title:"疑似错别字",description:"原文两处写为「既正在召开」，结合语境应为「即正在召开」。",correction:"即正在召开",maxOccurrences:2},{id:"comm-video-meeting",docKey:"design-comm",type:"term",term:"视频会议",title:"视频会议",description:"指挥中心与现场、上下级单位之间的实时会商能力，支持预约、录制与回放。"},{id:"comm-reserve",docKey:"design-comm",type:"term",term:"预约会议",title:"预约会议",description:"提前创建会议并配置时间、参会方与会议室资源，支持后续变更或取消。"},{id:"comm-recording",docKey:"design-comm",type:"term",term:"录制文件",title:"录制文件",description:"会议过程录制产物，可用于复盘、归档与事件证据留存。"},{id:"ext-typo-log-center",docKey:"design-external",type:"typo",term:"消息中心接口，为本工程所有系统提供日志管理功能",title:"疑似错别字",description:"该段属于「日志中心」章节，但原文写成「开发消息中心接口」，应为「开发日志中心接口」。",correction:"日志中心接口"},{id:"ext-typo-messageimprint",docKey:"design-external",type:"typo",term:"messagelmprint",title:"疑似拼写错误",description:"原文写为 `messagelmprint`，按时间戳接口常见字段名应为 `messageImprint`。",correction:"messageImprint"},{id:"service-auth",docKey:"design-service",type:"term",term:"服务授权",title:"服务授权",description:"按调用方授予服务访问权限并生成 Token / Secret 等访问凭证。"},{id:"service-gateway",docKey:"design-service",type:"term",term:"服务网关",title:"服务网关",description:"服务的统一入口，负责鉴权、路由、限流与访问日志。"},{id:"service-jms",docKey:"design-service",type:"term",term:"JMS",title:"JMS",description:"Java Message Service，面向消息中间件的标准接口，用于异步服务适配。"},{id:"service-rest",docKey:"design-service",type:"term",term:"REST",title:"REST",description:"基于 HTTP 的资源式接口风格，是融合服务对外暴露的主要协议之一。"},{id:"data-workflow",docKey:"design-data",type:"term",term:"工作流",title:"工作流",description:"以 DAG 方式编排数据抽取、清洗、转换与写入任务，支持定时调度与运行监控。",maxOccurrences:2},{id:"data-dag",docKey:"design-data",type:"term",term:"DAG",title:"DAG（有向无环图）",description:"用节点与依赖边描述任务执行顺序，保证数据处理任务按依赖关系运行。"},{id:"data-warehouse",docKey:"design-data",type:"link",term:"数仓",title:"数仓（数据仓库）",description:"按 ODS / DWD / ADS 分层组织数据；数据标准与治理规则见「数据标准化治理服务」。",targetDocKey:"ops-standard",maxOccurrences:2},{id:"data-ods",docKey:"design-data",type:"term",term:"ODS",title:"ODS（贴源层）",description:"与源系统结构基本一致的原始数据层，保留最细粒度数据。"},{id:"data-dwd",docKey:"design-data",type:"term",term:"DWD",title:"DWD（明细层）",description:"对贴源层数据做清洗、标准化与主题化整合后的明细数据层。"},{id:"data-ads",docKey:"design-data",type:"term",term:"ADS",title:"ADS（应用层）",description:"面向报表、看板与业务应用的汇总数据层。"},{id:"data-reconcile",docKey:"design-data",type:"term",term:"数据对账",title:"数据对账",description:"核对源端与目标端的记录数、金额或指标，发现采集链路中的数据差异。"},{id:"data-quality",docKey:"design-data",type:"term",term:"数据质检",title:"数据质检",description:"按规则检查数据完整性、准确性、一致性与时效性，并输出质检结果。"},{id:"data-app-link",docKey:"design-data",type:"link",term:"应用系统管理",title:"应用系统管理",description:"管理接入数据交换的应用系统、系统凭证与授权服务；外部系统统一身份与权限见外部系统接口对接。",targetDocKey:"design-external"},{id:"portal-todo",docKey:"design-portal",type:"term",term:"待办中心",title:"待办中心",description:"聚合各业务系统待办事项，统一提醒与跳转，避免用户在多系统间反复切换。"},{id:"portal-message",docKey:"design-portal",type:"term",term:"消息中心",title:"消息中心",description:"统一承载系统通知、预警提醒与业务消息。"},{id:"portal-knowledge",docKey:"design-portal",type:"term",term:"知识中心",title:"知识中心",description:"面向用户的知识检索与浏览入口，底层对接 AI 能力系统的知识库。",targetDocKey:"design-ai"},{id:"portal-dashboard",docKey:"design-portal",type:"term",term:"数据看板",title:"数据看板",description:"按应急值守、预案、事件、物资等主题组织的可视化看板。"},{id:"portal-sso",docKey:"design-portal",type:"term",term:"单点登录",title:"单点登录（SSO）",description:"一次登录即可访问门户集成的多个业务系统，登录态由统一认证体系维护。"},{id:"portal-integration",docKey:"design-portal",type:"term",term:"子系统集成",title:"子系统集成",description:"把已建业务系统接入门户，统一入口、待办消息与权限控制。"},{id:"ext-auth",docKey:"design-external",type:"term",term:"统一身份认证",title:"统一身份认证",description:"区分政务侧与公众侧身份，为不同用户提供统一登录与身份校验能力。"},{id:"ext-yue-map",docKey:"design-external",type:"term",term:"粤政图",title:"粤政图",description:"广东省政务地图服务，提供政务侧基础地理与专题图层能力。"},{id:"ext-crypto",docKey:"design-external",type:"term",term:"商用密码",title:"商用密码",description:"符合国家密码管理要求的加密、签名、证书与密钥服务能力。"},{id:"ext-ecc",docKey:"design-external",type:"term",term:"ECC",title:"ECC",description:"椭圆曲线密码算法，用于签名、验签与密钥协商。"},{id:"ext-der",docKey:"design-external",type:"term",term:"DER",title:"DER",description:"一种二进制编码格式，常用于证书、签名值等密码对象的传输与存储。"},{id:"ext-key",docKey:"design-external",type:"term",term:"智能密码钥匙",title:"智能密码钥匙",description:"存放数字证书与密钥的硬件载体，调用时需要 PIN 鉴权。"},{id:"ext-timestamp",docKey:"design-external",type:"term",term:"时间戳",title:"时间戳",description:"由可信时间源对数据摘要签发的时间证明，用于防篡改与事后追溯。"},{id:"ext-typo-param",docKey:"design-external",type:"typo",term:"uicInDataLen",title:"疑似参数名拼写不一致",description:"上文签名接口使用 `uiInDataLen`，此处写为 `uicInDataLen`，建议与接口定义核对。",correction:"uiInDataLen"},{id:"portal-typo-daily",docKey:"design-portal",type:"typo",term:"日常管理",title:"疑似错别字",description:"上文为「日程管理」，此处写为「日常管理」，应为「日程管理」。",correction:"日程管理"},{id:"ops-collect-gather",docKey:"ops-collect",type:"term",term:"采集汇聚",title:"采集汇聚",description:"把多源数据按统一标准抽取到原始库/贴源层，是后续治理与主题库建设的前置环节。",maxOccurrences:2},{id:"ops-collect-api",docKey:"ops-collect",type:"term",term:"接口采集",title:"接口采集",description:"通过 API 拉取外部系统数据，适合实时性要求较高的业务数据。"},{id:"ops-collect-db",docKey:"ops-collect",type:"term",term:"库表采集",title:"库表采集",description:"直接读取源数据库表或视图，适合批量、结构化的存量数据。"},{id:"ops-std-standard",docKey:"ops-standard",type:"term",term:"数据标准",title:"数据标准",description:"统一字段命名、格式、编码值域与元数据定义，是跨系统数据融合的前提。",maxOccurrences:2},{id:"ops-std-rule",docKey:"ops-standard",type:"term",term:"质检规则库",title:"质检规则库",description:"集中管理完整性、准确性、有效性、时效性、一致性等数据质量规则。"},{id:"ops-std-quality",docKey:"ops-standard",type:"term",term:"数据质量",title:"数据质量",description:"衡量数据是否满足业务使用的程度；本方案从多个维度建立评价与整改闭环。",maxOccurrences:2},{id:"ops-std-etl",docKey:"ops-standard",type:"term",term:"ETL",title:"ETL",description:"Extract-Transform-Load，数据抽取、转换与加载的标准处理流程。"},{id:"ops-std-ods",docKey:"ops-standard",type:"term",term:"贴源库层",title:"贴源层",description:"与源系统结构基本一致的原始数据层，是数据清洗与标准化的起点。"},{id:"ops-std-warehouse",docKey:"ops-standard",type:"term",term:"数据仓库",title:"数据仓库",description:"面向分析组织的数据集合，通常按贴源层、明细层、应用层分层建设。"},{id:"ops-std-typo-clean",docKey:"ops-standard",type:"typo",term:"数据清选",title:"疑似错别字",description:"原文写为「数据清选」，结合上下文应为「数据清洗」。",correction:"数据清洗"},{id:"ops-std-typo-duplicate",docKey:"ops-standard",type:"typo",term:"根据目录，生成数据库表交换语句",title:"疑似重复表述",description:"该句在同一段落连续出现两次，建议删除重复语句，避免开发人员误读为两个独立步骤。",correction:"删除重复语句",maxOccurrences:1},{id:"ops-std-master-link",docKey:"ops-standard",type:"link",term:"主数据",title:"主数据",description:"跨系统共享的核心基础数据，其标准与库建设见「基础库运营服务」。",targetDocKey:"ops-base"},{id:"ops-base-master",docKey:"ops-base",type:"term",term:"主数据",title:"主数据",description:"应急装备、终端、通讯组织与人员等跨系统共享的核心数据，需要统一标准与编码。",maxOccurrences:2},{id:"ops-base-meta",docKey:"ops-base",type:"term",term:"元数据",title:"元数据",description:"描述数据的数据，包括字段定义、类型、长度、值域与归属关系。"},{id:"ops-base-base",docKey:"ops-base",type:"term",term:"基础库",title:"基础库",description:"沉淀应急调度最核心、最稳定的基础数据，供主题库与业务系统共享。"},{id:"ops-base-model",docKey:"ops-base",type:"term",term:"数据模型",title:"数据模型",description:"对业务实体、属性与关系的结构化定义，是数据库设计与数据开发的基础。"},{id:"ops-base-standard-link",docKey:"ops-base",type:"link",term:"数据标准",title:"数据标准",description:"基础库主数据标准的来源与治理规则见「数据标准化治理服务」。",targetDocKey:"ops-standard"},{id:"ops-topic-topic",docKey:"ops-topic",type:"term",term:"主题库",title:"主题库",description:"面向应急装备物资、预案、知识、指挥调度等业务主题的结构化数据集合。",maxOccurrences:2},{id:"ops-topic-entity",docKey:"ops-topic",type:"term",term:"主实体对象",title:"主实体对象",description:"主题库中的核心业务对象（如装备、预案、事件），其他业务事实数据围绕其关联。"},{id:"ops-topic-fact",docKey:"ops-topic",type:"term",term:"业务事实数据",title:"业务事实数据",description:"围绕主实体发生的业务记录，如调用、维护、处置过程等。"},{id:"ops-topic-typo",docKey:"ops-topic",type:"typo",term:"业务主体",title:"疑似错别字",description:"原文为「按业务主体数据融合规则」，结合主题库语境应为「业务主题」。",correction:"业务主题"},{id:"ops-topic-base-link",docKey:"ops-topic",type:"link",term:"基础库",title:"基础库",description:"主题库建设依赖基础库主数据；基础库说明见「基础库运营服务」。",targetDocKey:"ops-base"},{id:"ops-special-special",docKey:"ops-special",type:"term",term:"专题库",title:"专题库",description:"面向大客流大货流、航道、海峡办、恶劣天气等专题场景组织的数据集合。",maxOccurrences:2},{id:"ops-special-passenger",docKey:"ops-special",type:"term",term:"公路大客流大货流",title:"公路大客流大货流专题",description:"围绕路段、收费站、服务区的客货流通行与停留数据建设的专题。"},{id:"ops-special-channel",docKey:"ops-special",type:"term",term:"航道专题",title:"航道专题",description:"围绕航道基础、视频清单与水运应急事件数据建设的专题。"},{id:"ops-special-strait",docKey:"ops-special",type:"term",term:"海峡办专题",title:"海峡办专题",description:"围绕风险点位、视频清单与海峡应急事件数据建设的专题。"},{id:"ops-special-weather",docKey:"ops-special",type:"term",term:"恶劣天气专题",title:"恶劣天气专题",description:"整合气象、台风、降雨、预警与风力监测数据，支撑恶劣天气应急。"},{id:"ops-special-vehicle",docKey:"ops-special",type:"term",term:"重点车辆监测",title:"重点车辆监测专题",description:"整合重点车辆轨迹、告警、基础数据与监测任务预警数据。"},{id:"ops-special-typo",docKey:"ops-special",type:"typo",term:"专题题库",title:"疑似错别字",description:"原文多次出现「专题题库」，结合语境应为「专题库」。",correction:"专题库",maxOccurrences:2},{id:"ops-special-topic-link",docKey:"ops-special",type:"link",term:"主题库",title:"主题库",description:"专题库与主题库的边界：主题库按业务主题沉淀，专题库面向跨主题的专题应用。",targetDocKey:"ops-topic"},{id:"req-spec-overview-2",docKey:"req-spec-overview",type:"term",term:"功能描述表",title:"功能描述表",description:"功能描述表按能力域逐行列出模块名称、模块功能简述与主要功能点，是详细功能章节的索引；开发时应以主要功能点为最小交付单元，逐项映射到接口契约、表结构与测试用例，并据此核对覆盖情况。"},{id:"req-spec-overview-3",docKey:"req-spec-overview",type:"term",term:"业务角色一览",title:"业务角色一览",description:"业务角色一览按机构与岗位划分总管理员、值班人员、技术保障、普通用户等角色，并给出各能力域的权限范围；落地时需转换为角色-菜单-数据权限矩阵，在网关与服务层分别做权限校验，避免越权访问。"},{id:"req-spec-ai-1",docKey:"req-spec-ai",type:"term",term:"知识切片",title:"知识切片",description:"知识切片把文档按文本块大小、语义或自定义拆分符切成可检索单元，并可启用指代消解、语法纠错与摘要增强；切片粒度直接影响检索召回质量，重建索引前需评估切片策略、文本块长度与向量维度。"},{id:"req-spec-ai-2",docKey:"req-spec-ai",type:"term",term:"向量数据库",title:"向量数据库",description:"向量数据库保存知识切片经向量嵌入模型生成的向量，支持语义检索与混合检索的相似度召回；需规要求可配置向量库类型、嵌入模型与向量维度，变更维度时必须全量重建索引，避免新旧向量混用。"},{id:"req-spec-ai-3",docKey:"req-spec-ai",type:"term",term:"向量嵌入模型",title:"向量嵌入模型",description:"向量嵌入模型负责把文本转为多维向量，需求列出 bert 与 word2vec 等实现；模型与向量维度必须匹配，重新构建向量数据时需按库维度全量重算，避免新旧向量混用导致召回失真，并记录模型版本，变更前先做离线评估。"},{id:"req-spec-ai-4",docKey:"req-spec-ai",type:"term",term:"知识命中测试",title:"知识命中测试",description:"知识命中测试允许输入测试问题查看召回结果、命中分值与来源切片，用于验证召回数量、召回阈值与重排模型配置；建议把典型问题沉淀为回归集，作为调整切片与检索参数的验收依据，覆盖多轮问答与长文档场景。"},{id:"req-spec-ai-5",docKey:"req-spec-ai",type:"term",term:"模型接入",title:"模型接入",description:"模型接入统一纳管大模型与小模型服务，配置模型名称、版本号、接入时间及键值对参数，支持模型目录分类与启停状态；接入配置应加密保存密钥，并把调用状态、耗时与异常纳入监控和限流，并支持按模型维度配置配额。"},{id:"req-spec-ai-6",docKey:"req-spec-ai",type:"term",term:"智能体",title:"智能体",description:"智能体由大模型、知识库、工具与编排流程组合而成，需求覆盖开发管理、简易编排与流程编排；需支持版本管理、历史对话记录以及通过标准 API/SDK 与网页端对外发布，供第三方业务系统集成，并对发布渠道做权限控制。"},{id:"req-spec-ai-7",docKey:"req-spec-ai",type:"term",term:"简易编排",title:"简易编排",description:"简易编排以配置方式设置智能体基本信息、问答模型、角色指令、变量与记忆、开场白和推荐问题，无需编写流程；实现时把模型参数、提示词与记忆时长结构化存储，便于按场景复用和版本回退，并支持克隆为新应用。"},{id:"req-spec-ai-8",docKey:"req-spec-ai",type:"term",term:"流程编排",title:"流程编排",description:"流程编排用可视化工作流组织信息收集、消息回复、大模型、知识库、数据库与代码等节点，支持话题跳转与兜底；流程以 JSON 落库并保留版本，执行引擎需处理节点异常、超时与上下文传递，并提供试运行与调试入口。"},{id:"req-spec-map-1",docKey:"req-spec-map",type:"term",term:"地图引擎封装服务",title:"地图引擎封装服务",description:"地图引擎封装服务把底层地图能力标准化为 WebAPI，覆盖桩号换算、车道线查询、轨迹纠偏、路径规划与高程获取；业务系统统一经该层调用，便于集中鉴权、限流、缓存与调用日志统计，并按调用方统计使用量。"},{id:"req-spec-map-2",docKey:"req-spec-map",type:"term",term:"高精地图",title:"高精地图",description:"高精地图服务提供车道级定位、地点检索、路线规划与轨迹计算，支撑应急车辆的精准调度；需求以厘米级定位为目标，接口需返回精度等级与来源，便于前端判断结果可信度并选择降级底图，并缓存图层元数据。"},{id:"req-spec-map-3",docKey:"req-spec-map",type:"term",term:"POI",title:"POI",description:"POI 是地图上的兴趣点，需求要求支持按城市、圆形或矩形范围、类型与关键字检索 POI 详情；可用于展示加油站、服务区等应急相关设施，并作为路径规划、空间过滤与专题图层的数据输入，并要求返回坐标参考系。"},{id:"req-spec-map-4",docKey:"req-spec-map",type:"term",term:"AOI",title:"AOI",description:"AOI 表示兴趣面，需求要求支持圆形与矩形范围内的 AOI 检索及详情查询；与 POI 的点状语义互补，适合表达园区、场站、封控区等面状区域，供空间过滤、专题展示与缓冲区分析使用，检索结果应支持分页与属性过滤。"},{id:"req-spec-map-5",docKey:"req-spec-map",type:"term",term:"等时到达圈",title:"等时到达圈",description:"等时到达圈以坐标为中心，按指定时间内可到达范围生成多边形，支持驾车、步行、骑行三种模式；可用于评估应急力量覆盖与到场时间，属于路线规划服务中的空间计算能力，结果需缓存复用，并支持多中心点对比。"},{id:"req-spec-map-6",docKey:"req-spec-map",type:"term",term:"轨迹纠偏",title:"轨迹纠偏",description:"轨迹纠偏把连续定位点吸附到道路或车道上，并据此计算里程与停留点；需求同时提供批量路算能力，实现时需处理漂移点、断点与坐标系转换，避免里程统计偏差，并保留纠偏前后的轨迹对照，并对异常点做剔除。"},{id:"req-spec-map-7",docKey:"req-spec-map",type:"term",term:"交通仿真引擎",title:"交通仿真引擎",description:"交通仿真引擎基于交通流模型对事件、拥堵、封闭与分流场景进行推演，提供仿真方案、运行状态、宏观分析与事件模板；方案运行支持暂停、恢复和进度拖动，结果用于辅助指挥决策与方案比选，并保留仿真输入快照。"},{id:"req-spec-map-8",docKey:"req-spec-map",type:"term",term:"桩号",title:"桩号",description:"桩号是高速公路里程定位的常用标识，地图服务支持桩号查坐标、坐标反查桩号及桩号定位；实现时需按高速编码与路段校验桩号有效性，并注意米级与百米级精度接口的差异及坐标转换口径。"},{id:"req-spec-video-1",docKey:"req-spec-video",type:"term",term:"视频实时预览",title:"视频实时预览",description:"视频实时预览通过通道编码获取通道详情与取流 URL，实现浏览器或标准 GUI 播放工具的实时播放；流地址应临时签发并绑定用户权限，避免长期有效的直链被非法复用，同时按网络状况切换码流，并对播放失败做重连。"},{id:"req-spec-video-2",docKey:"req-spec-video",type:"term",term:"云台控制",title:"云台控制",description:"云台控制支持设置、调用、查询、删除预置点，并可控制方向、焦距与转速，速度范围为 1–100；指令下发需校验通道权限、做超时与幂等处理，并记录操作人、通道与时间用于审计和问题回溯，速度与角度需做边界校验。"},{id:"req-spec-video-3",docKey:"req-spec-video",type:"term",term:"预置点",title:"预置点",description:"预置点保存摄像头特定角度与焦距的位置编号，便于应急时一键转向重点区域；需规要求按视频通道编号维护预置点名称与编号，并支持调用、查询与删除，删除后应同步清理前端缓存，预置点编号在同一通道内唯一。"},{id:"req-spec-video-4",docKey:"req-spec-video",type:"term",term:"手动抓图",title:"手动抓图",description:"手动抓图在录像回放或预览过程中一键截取当前画面并支持下载保存，满足“看见即取证、取证即归档”；实现时需关联视频名称、通道与时间，并落库留存抓图记录，便于事件处置时追溯来源，并支持批量导出证据包。"},{id:"req-spec-video-5",docKey:"req-spec-video",type:"term",term:"取流URLv2",title:"取流URLv2",description:"取流URLv2 是获取通道预览播放地址的接口，前端拿到地址后交给播放器拉流；地址通常带有效期与鉴权参数，不应长期落库，并需按网络与终端能力选择合适码流，失败时返回明确错误码，并对跨域与防盗链做配置。"},{id:"req-spec-video-6",docKey:"req-spec-video",type:"term",term:"视频通道",title:"视频通道",description:"视频通道以通道编码作为设备与视频资源的唯一标识，是预览、云台、抓图与权限查询的基础主键；通道详情包含位置、分辨率、在线状态等元数据，查询时需按用户权限过滤，无权限通道不返回流地址。"},{id:"req-spec-video-7",docKey:"req-spec-video",type:"term",term:"录像回放",title:"录像回放",description:"录像回放基于历史录像查询与播放，支持按时间、位置与视频名称检索；回放地址同样需要鉴权签发，并与抓图、下载等操作共用通道权限模型，防止越权查看，同时记录回放操作日志，并支持倍速与进度拖动。"},{id:"req-spec-comm-1",docKey:"req-spec-comm",type:"term",term:"会议模板",title:"会议模板",description:"创建会议模板信息支持创建立即会议与预约会议，区分语音会议和视频会议，配置会议主题、开始时间、类型与与会者；会议时长限制在 15 至 1440 分钟，默认 30 分钟，超限需在表单层拦截，模板可复用并支持复制。"},{id:"req-spec-comm-2",docKey:"req-spec-comm",type:"term",term:"预约会议",title:"预约会议",description:"预约会议面向未来时段，需求覆盖取消、变更、列表与详情查询；取消时管理员可取消全部会议、普通用户仅能取消本人创建且尚未召开的会议，已召开会议默认不可取消，需在服务端强制校验，并对重复时段做冲突提示。"},{id:"req-spec-comm-3",docKey:"req-spec-comm",type:"term",term:"变更单",title:"变更单",description:"变更单是预约会议修改后生成的差异记录，系统把主题、时间、类型与参会人变化推送到所有参会人终端，并可通过短信通知；实现时需保证推送幂等与失败重试，并保留变更前后内容供追溯，变更单需与会议版本关联。"},{id:"req-spec-comm-4",docKey:"req-spec-comm",type:"term",term:"会议录制",title:"会议录制",description:"会议录制覆盖录制列表、录制详情与录制文件下载；管理员可查询全部录制，普通用户仅能查看本人创建会议的录制，查询条件包括会议主题、预约人与会议 ID，并支持按时间范围过滤，同时管理录制文件生命周期。"},{id:"req-spec-comm-5",docKey:"req-spec-comm",type:"term",term:"录制文件",title:"录制文件",description:"录制文件是会议过程的留存产物，需求支持下载辅流、高清与标清文件；当录制时长超过 3 小时会拆分为多个文件并产生多个下载链接，下载需校验权限与有效期，文件本体应存对象存储，并记录下载人与下载时间。"},{id:"req-spec-comm-6",docKey:"req-spec-comm",type:"term",term:"辅流",title:"辅流",description:"辅流是会议中共享屏幕或第二路视频的码流，与高清、标清并列作为可下载文件类型；实现时需在录制元数据中区分码流类型与文件后缀，避免与主视频流混淆，并支持按码流单独下载，下载时按码流类型分别签名。"},{id:"req-spec-comm-7",docKey:"req-spec-comm",type:"term",term:"会议主题",title:"会议主题",description:"会议主题是会议列表与录制检索的主要关键字，需求支持按主题、发起人、所属单位与会议状态筛选；主题同时作为变更单和短信通知的展示字段，需保证长度与敏感字符校验，并建立检索索引，同时支持模糊匹配。"},{id:"req-spec-service-1",docKey:"req-spec-service",type:"term",term:"服务接口",title:"服务接口",description:"服务接口管理维护厅局内外部接口的注册、测试与发布，记录服务名称、标识码、服务 ID、提供方、协议与接口地址；支持第三方接口注册、Web/JMS/HTTP 适配与状态启停，发布后由网关统一路由，并维护接口参数与返回示例。"},{id:"req-spec-service-2",docKey:"req-spec-service",type:"term",term:"服务注册",title:"服务注册",description:"服务注册把接口元数据登记到融合服务，发布后由网关生成路由对外提供调用；注册与下架应保留审计记录，接口地址变更需同步刷新路由缓存，避免已下线接口仍被路由命中造成调用失败，并校验标识码唯一。"},{id:"req-spec-service-3",docKey:"req-spec-service",type:"term",term:"服务授权",title:"服务授权",description:"服务授权为应用系统授予服务调用权限，支持多选服务、自动生成 Token 与访问凭证，并按所属区域或日期范围配置返回数据范围；鉴权需校验应用身份、授权有效性与访问范围，防止横向越权，授权变更需即时生效。"},{id:"req-spec-service-4",docKey:"req-spec-service",type:"term",term:"服务调用日志",title:"服务调用日志",description:"服务调用日志记录 API 被调用的成功、失败与异常结果，包含调用方、请求参数、返回码、耗时与 IP；用于运维排查和审计，查询时需按调用方与时间范围限制可见数据，并对敏感参数脱敏，同时支持按服务维度聚合统计。"},{id:"req-spec-service-5",docKey:"req-spec-service",type:"term",term:"服务网关",title:"服务网关",description:"服务网关统一承担鉴权、路由、代理与访问控制，支持服务总线地址配置、第三方接口透传和路由调度；越权请求应在网关拒绝，并对后端服务做熔断与降级，避免单点故障扩散到全部调用方，并支持灰度与权重路由。"},{id:"req-spec-service-6",docKey:"req-spec-service",type:"term",term:"服务总线",title:"服务总线",description:"服务总线提供服务主机名或地址、端口的配置、检测与保存能力，是网关代理访问后端接口的通道；配置变更需先做连通性检测，失败时回滚并告警，同时记录检测结果与操作人便于追责，并支持多地址负载。"},{id:"req-spec-service-7",docKey:"req-spec-service",type:"term",term:"限流QPS",title:"限流QPS",description:"限流QPS是服务授权记录中的配额字段，用于限制调用方在单位时间内的请求量；实现时可在网关按租户与服务维度做令牌桶或滑动窗口限流，超限返回明确错误码，并保留限流命中日志，同时按接口配置差异化配额。"},{id:"req-spec-service-8",docKey:"req-spec-service",type:"term",term:"黑白名单",title:"黑白名单",description:"黑白名单用于服务访问控制，可放行可信调用方或阻断风险来源；名单通常在网关与服务层双重校验并缓存，变更需实时生效，同时记录拦截日志便于追溯，避免误封正常业务调用，并支持按服务维度配置。"},{id:"req-spec-data-1",docKey:"req-spec-data",type:"term",term:"工作流定义",title:"工作流定义",description:"工作流定义以 DAG 画布组织数据同步、对账、质检、脚本与流程控制节点，形成有依赖关系的数据处理流程；支持项目分组、上下线生命周期、定时调度与运行监控，节点失败可按策略重试或告警，并支持版本对比与回滚。"},{id:"req-spec-data-2",docKey:"req-spec-data",type:"term",term:"DAG 画布",title:"DAG 画布",description:"DAG 画布通过节点拖拽与连线定义上下游依赖，并自动检测循环依赖；画布配置以 JSON 落库，节点类型决定执行器与参数表单，前端需保证画布数据与后端模型双向一致，避免保存后节点丢失，并支持画布缩放与节点搜索。"},{id:"req-spec-data-3",docKey:"req-spec-data",type:"term",term:"数据对账",title:"数据对账",description:"数据对账组件通过配置对账规则抽取两端数据，当前支持全量对账，即比对两侧数据行数并在差异超阈值时告警；实现时需记录对账周期、阈值与告警方式，并保留每次对账结果供问题定位，同时区分结构差异与行数差异。"},{id:"req-spec-data-4",docKey:"req-spec-data",type:"term",term:"数据质检",title:"数据质检",description:"数据质检组件按质检规则检查字段完整性、准确性与有效性，并对问题数据分拣；规则、字段、阈值与异常处理方式需可配置，质检结果应落库形成报告供追溯，异常数据可回流整改，并支持按批次查看异常明细。"},{id:"req-spec-data-5",docKey:"req-spec-data",type:"term",term:"文件汇聚",title:"文件汇聚",description:"文件汇聚管理展示源目录、目标目录、同步状态与文件数量，支持同步成功、失败等状态；同步配置可设置周期、方式、频率与断点续传，并保留同步日志，失败文件应支持按批次重传，并展示最近一次同步耗时。"},{id:"req-spec-data-6",docKey:"req-spec-data",type:"term",term:"数仓层级",title:"数仓层级",description:"数仓层级用于统一管理数据中台库表的分层结构，记录层级代码、中英文名称、绑定数据库与负责人；层级设计需与命名规范联动，作为建表时表名与写入库的约束，并支持新增、编辑与删除，同时校验层级代码唯一。"},{id:"req-spec-data-7",docKey:"req-spec-data",type:"term",term:"命名规范",title:"命名规范",description:"命名规范定义建表表名的组成元素，区分固定项、读取项与自定义项；固定项内置于系统不可编辑，自定义项可全局共享，配置结果用于快速建表时生成合规表名，并在建表前做唯一性校验，同时支持预览生成表名。"},{id:"req-spec-data-8",docKey:"req-spec-data",type:"term",term:"应用Token",title:"应用Token",description:"应用Token是应用系统调用数据服务的凭证，可由后台手动生成或在授权审核通过后自动生成；凭证支持启用、停用与操作留痕，停用后立即失效，重新启用后恢复，生成时需记录操作原因与证据文件，并支持按系统查询凭证。"},{id:"req-spec-portal-1",docKey:"req-spec-portal",type:"term",term:"门户框架",title:"门户框架",description:"门户框架提供个人中心、待办、消息、知识、日程、快捷菜单等通用能力，作为应急指挥人员的统一工作入口；各卡片数据来自不同业务服务，首页聚合需考虑缓存、超时与降级，避免单服务拖垮门户，并支持卡片拖拽排序。"},{id:"req-spec-portal-2",docKey:"req-spec-portal",type:"term",term:"数据看板",title:"数据看板",description:"数据看板以图形和报表展示应急值守、智能应急预案、应急事件与应急物资四类指标；实现时按看板预聚合数据，支持按时间与区域筛选，避免实时扫描全量业务表，并对环比同比指标预计算，同时支持下钻到明细。"},{id:"req-spec-portal-3",docKey:"req-spec-portal",type:"term",term:"子系统集成",title:"子系统集成",description:"子系统集成把七大业务子系统统一接入门户，实现单点登录、权限统一与界面集成；接入配置包含系统地址、菜单、权限映射、Logo 与首页地址，并可选择 IFrame 或微应用封装，统一票据与样式，并记录接入调试结果。"},{id:"req-spec-portal-4",docKey:"req-spec-portal",type:"term",term:"待办中心",title:"待办中心",description:"待办中心集中展示各业务系统推送的待办，支持按来源、紧急程度与状态筛选以及处理和跳转；待办数据需要统一标识与回写机制，避免多系统重复办理，并对已办事项保留处理记录，同时支持批量处理。"},{id:"req-spec-portal-5",docKey:"req-spec-portal",type:"term",term:"消息中心",title:"消息中心",description:"消息中心统一展示预警、通知、公告与消息，支持已读标记和回执；消息来源与推送渠道需区分站内、短信等类型，并保存发送人、时间与回执状态，未读消息需在登录后聚合提醒，并支持按渠道订阅与免打扰设置。"},{id:"req-spec-portal-6",docKey:"req-spec-portal",type:"term",term:"知识中心",title:"知识中心",description:"知识中心聚合常用预案、法规、流程与案例，提供列表和详情查阅；知识条目需记录类型、来源、更新时间、热度与权限，确保不同角色只能看到授权范围内内容，并支持按关键字与分类检索，同时记录阅读与收藏行为。"},{id:"req-spec-portal-7",docKey:"req-spec-portal",type:"term",term:"工作日程",title:"工作日程",description:"工作日程以日历形式展示值班、会议、演练与调度安排，记录主题、时间、地点、参会人与提醒时间；日程数据可来自多个业务系统，需处理时间冲突与提醒触发，并支持按日、周、月视图切换，同时支持共享给参会人。"},{id:"req-spec-portal-8",docKey:"req-spec-portal",type:"term",term:"IFrame",title:"IFrame",description:"IFrame 是子系统门户化封装的一种方式，适合改造成本低、交互简单的系统；封装时需统一鉴权票据与样式，并处理跨域、Cookie 与浏览器安全策略限制，同时提供加载失败与超时的兜底提示，并记录子应用加载状态。"},{id:"req-spec-external-1",docKey:"req-spec-external",type:"term",term:"统一用户中心",title:"统一用户中心",description:"统一用户中心对接省政务用户体系，同步用户、机构与权限信息；用户接口支持增量更新，机构接口构建省市县集团路段多级组织树，权限接口同步角色、菜单与数据范围，并保留同步状态与失败重试。"},{id:"req-spec-external-2",docKey:"req-spec-external",type:"term",term:"统一身份认证",title:"统一身份认证",description:"统一身份认证区分政务侧与公众侧：政务侧支持粤政易、统一认证账号免密登录、票据校验与会话管理，公众侧支持手机号、验证码与实名认证，两侧均需处理票据失效、登出与会话续期，并支持多因子扩展。"},{id:"req-spec-external-3",docKey:"req-spec-external",type:"term",term:"政务短信",title:"政务短信",description:"政务短信对接省政务短信平台，支持短信发送、状态回执、模板管理、发送记录与频次控制；预警叫应、通知提醒和验证码共用该通道，发送需做模板校验与频控，失败进入重试队列并记录回执，同时对失败号码做标记。"},{id:"req-spec-external-4",docKey:"req-spec-external",type:"term",term:"粤政图",title:"粤政图",description:"粤政图是广东省政务地图服务，提供统一底图、POI、行政区划、路网、标注、测距与空间分析接口；本系统通过对接粤政图获取政务地理信息，避免自建重复底图，并按权限控制图层与要素访问，同时缓存常用图层元数据。"},{id:"req-spec-external-5",docKey:"req-spec-external",type:"term",term:"高精地图",title:"高精地图",description:"省交通集团高精地图对接获取影像、地形、路网、航道、标志标线等基础图层，以及设施、病害、监测、管控等治理专题图层；图层调用需记录权限、范围与更新状态，服务异常时可降级到基础底图，并缓存图层元数据。"},{id:"req-spec-external-6",docKey:"req-spec-external",type:"term",term:"融合通信",title:"融合通信",description:"融合通信接口对接会议创建、呼叫、挂断、录制、对讲、广播与卫星通信能力，实现语音、视频、对讲和集群调度统一调用；调用结果需记录通道、参会方、时长与状态，并处理超时与重连，同时支持通话质量监测。"},{id:"req-spec-external-7",docKey:"req-spec-external",type:"term",term:"商用密码服务",title:"商用密码服务",description:"商用密码服务对接省政务密码服务平台，覆盖存储加密解密、签名验签、证书导出解析验证、智能密码钥匙、密钥生成分发销毁与时间戳；密钥和证书不得以明文落库，配置项需加密并限制访问，同时记录每次密码运算审计。"},{id:"req-spec-external-8",docKey:"req-spec-external",type:"term",term:"数字证书",title:"数字证书",description:"数字证书用于绑定用户或设备身份，需求覆盖证书导出、解析与验证；解析返回主体、颁发者、有效期和用途，验证需判断证书是否有效、过期或被吊销，结果用于签名验签链路并保留验证日志，同时支持证书链校验。"},{id:"fusion-req-governance",docKey:"req-3-2-7",type:"term",term:"数据治理",title:"数据治理",description:"数据治理不是一次性的清洗脚本，而是覆盖标准、质量、元数据与主数据的持续机制：融合层先统一字段命名与编码值域，再按完整性、一致性、时效性规则做质检，问题数据分流整改。落地时把治理规则与执行结果落库并保留版本，避免规则变更后历史数据无法复算。"},{id:"fusion-req-heterogeneous",docKey:"req-3-2-7",type:"term",term:"多源异构",title:"多源异构数据",description:"指数据库、文件、API 等来源在结构与语义上互不一致的数据。实现上需要一层适配与映射：源端字段映射到统一模型，保留原始值与来源标识，冲突时按优先级合并而非静默覆盖；同步任务记录批次与水位，便于增量续跑和问题回溯。"},{id:"fusion-req-three-resources",docKey:"req-3-2-7",type:"term",term:"三大资源",title:"数据、算法、时空三大资源",description:"双底座统管的三类资源：数据是库表与主题数据，算法是模型与 AI 能力，时空是地图、坐标与图层服务。融合层应把三类资源分别编目注册，对外只暴露统一资源目录与调用凭证；资源下线前先查引用方，避免上游业务调用断链。"},{id:"fusion-req-portal-integration",docKey:"req-3-2-7",type:"term",term:"门户集成",title:"门户集成",description:"把多个业务系统接入统一门户，实现一次登录与统一入口。实现上以 SSO 票据或令牌换取各子系统会话，菜单与权限由后台配置下发而非前端硬编码；跨域部署时注意票据有效期、单点退出同步与回跳地址白名单，避免登录态在子系统间不一致。"},{id:"fusion-req-drilldown",docKey:"req-3-2-7",type:"tech",term:"钻取分析",title:"看板钻取分析",description:"从汇总指标逐层下钻到明细记录的交互分析能力。实现上要求指标与维度使用统一口径，下钻路径（如区域到路段再到事件）由数据模型预定义，前端只传维度条件不拼 SQL；明细查询需分页与权限过滤，避免大结果集拖垮看板。"},{id:"fusion-req-smart-retrieval",docKey:"req-3-2-7",type:"term",term:"智能检索推荐",title:"智能检索与推荐",description:"面向知识使用场景的检索与推荐能力：检索侧走关键词或语义召回并排序，推荐侧依据用户角色、历史浏览与业务上下文推送知识。实现上检索与推荐服务应独立部署，输入输出留日志用于效果评估；推荐结果需可解释并可关闭，避免把不相关知识推给一线人员。"},{id:"fusion-req-nlp-model",docKey:"req-3-2-7",type:"tech",term:"自然语言处理模型",title:"NLP 模型接入",description:"用于文本理解、抽取与问答的模型服务，涵盖分词、实体识别、语义匹配与生成。接入时应统一封装鉴权、超时、重试与限流，业务侧只依赖统一接口；请求前做长度裁剪与敏感信息过滤，响应按 schema 校验，失败时降级到规则或人工，避免单点模型故障阻塞业务。"},{id:"fusion-req-map-layers",docKey:"req-3-2-7",type:"tech",term:"多图层叠加",title:"多图层叠加",description:"地图引擎在同一视图中叠加底图、路网、事件、资源等多类图层。实现上各图层使用统一坐标系与范围，按缩放级别控制显隐与抽稀；图层数据量大时用矢量瓦片或服务端聚合，前端只做渲染与交互，避免把全量要素一次性下发导致卡顿。"},{id:"fusion-req-load-balance",docKey:"req-3-2-7",type:"tech",term:"负载均衡",title:"服务负载均衡",description:"把服务请求分发到多个实例以提升吞吐与可用性。实现上通常由网关或注册中心配合轮询、加权、最少连接等策略，健康检查失败自动摘除节点；需注意会话粘性、重试幂等与超时传递，避免重试风暴把局部故障放大成整体不可用。"},{id:"fusion-req-custom-workflow",docKey:"req-3-2-7",type:"tech",term:"自定义工作流",title:"自定义数据处理工作流",description:"按业务需要编排数据处理步骤，如抽取、清洗、转换与写入的执行流程。实现上以 DAG 描述节点与依赖，支持定时与手动触发，运行实例记录状态、耗时与日志；节点需可重试且幂等，失败时从断点续跑而不是整条链路重新执行。"},{id:"fusion-ai-embedding-model",docKey:"design-ai",type:"tech",term:"向量嵌入模型",title:"向量嵌入模型",description:"把文本切片编码为稠密向量的模型，决定检索的语义匹配效果。实现上模型与向量维度必须和向量库索引保持一致，换模型等于换向量空间，需要整库重建；配置项应随知识库持久化，重建任务异步执行并记录进度与失败原因。"},{id:"fusion-ai-unstructured-file",docKey:"design-ai",type:"term",term:"非结构化文件",title:"非结构化文件",description:"Word、PDF、图片等没有固定表结构的文档。处理链路是解析、清洗、切片、向量化、入库，原始文件与解析文本分开存储；解析失败要保留失败原因并可重试，涉密文件在入库前完成权限标记，避免检索时越权命中。"},{id:"fusion-ai-object-storage",docKey:"design-ai",type:"tech",term:"对象存储",title:"对象存储导入",description:"以 OSS 或 MinIO 等对象存储作为文件来源或落点。导入时先校验桶、路径与访问凭证，大文件走分片上传并记录 ETag；系统只存对象 key 与元数据，不把文件二进制写进业务库，删除知识文件时同步清理对象，防止存储泄漏。"},{id:"fusion-ai-datasource-access",docKey:"design-ai",type:"tech",term:"数据源接入",title:"数据源接入",description:"把 PostgreSQL、MySQL、OSS、ODPS、MinIO 等外部数据源登记为可采集来源。实现上连接信息加密存储，接入后做连通性测试并记录状态；采集任务按数据源维度隔离与限流，源端结构变更时需重新映射字段，避免同步过程静默丢列。"},{id:"fusion-ai-semantic-index",docKey:"design-ai",type:"term",term:"语义索引",title:"语义索引",description:"在切片之上补充的语义层索引，用于提升召回准确率。可由模型自动识别关键段落生成初稿，再由知识库管理员人工修订；索引信息与切片版本绑定，切片重建后旧索引需失效重算，否则会出现索引指向已不存在内容的问题。"},{id:"fusion-ai-entity-index",docKey:"design-ai",type:"term",term:"实体索引",title:"实体索引",description:"用 NER 把文本中的机构、地点、事件、专业术语等识别为结构化实体并建立索引。实现上实体需归一处理，包括别名合并与同义归并，并保留原文位置，人工可增删合并；实体表与切片分表存储，检索时先命中实体再回捞切片，同时注意实体歧义消解。"},{id:"fusion-ai-hybrid-search",docKey:"design-ai",type:"tech",term:"混合检索",title:"混合检索",description:"同时走语义检索与全文检索，对多路结果合并后再排序。实现上需为每路设置召回数量与权重，用 RRF 或模型打分做融合，再按阈值截断；要记录各路命中情况便于调参，避免只调一个总分导致效果问题无法定位。"},{id:"fusion-ai-rag",docKey:"design-ai",type:"tech",term:"检索增强生成",title:"检索增强生成（RAG）",description:"先从知识库召回切片，再把切片作为上下文交给大模型生成答案。实现上要控制上下文长度与切片数量，答案携带引用来源以便溯源；无命中时应明确拒答而不是让模型编造，检索与生成分属不同服务，需分别监控耗时与失败率。"},{id:"fusion-ai-model-param-config",docKey:"design-ai",type:"tech",term:"模型接入参数配置",title:"模型接入参数配置",description:"以键值对方式配置第三方模型的地址、密钥、超时与生成参数。实现上敏感值加密存储且不回显，参数按模型版本保存并支持灰度；不同厂商参数名不一致，应由适配层做映射与校验，避免原样透传导致调用失败且难以排查。"},{id:"fusion-ai-db-mount",docKey:"design-ai",type:"tech",term:"数据库挂载组件",title:"数据库挂载组件",description:"把业务数据表绑定到智能体，使其能回答数据类问题并做选表与计算。实现上以只读账号连接、限制可查表与返回行数，SQL 由模型生成后需做语法与权限校验再执行；查询结果不回写源库，慢查询要设超时，防止智能体拖垮业务数据库。"},{id:"fusion-map-lane-query",docKey:"design-map",type:"term",term:"里程查询车道线",title:"里程查询车道线",description:"按高速编码加里程区间反查车道线与车道面几何，是车道级定位、车道封闭与拥堵定位的基础接口。实现上要统一高速编码字典与上下行方向，里程区间先转成连续段再查询；车道面数据量大，建议按路段缓存并做几何简化，避免整段下发拖慢前端渲染。"},{id:"fusion-map-lane-snap",docKey:"design-map",type:"tech",term:"车道吸附",title:"车道吸附",description:"把米级或亚米级定位点投影到最近车道中心线，解决定位漂移与车道误判。算法需结合航向角与相邻车道拓扑做约束，跨桥、隧道、并行匝道处要设兜底策略；返回结果应带车道 ID 与置信度，供轨迹纠偏和里程统计复用，不要只返回吸附后的坐标。"},{id:"fusion-map-elevation",docKey:"design-map",type:"tech",term:"高程实时获取API",title:"高程实时获取API",description:"按经纬度查询路面高程，用于三维场景、纵坡分析与积水、隧道段判断。高程通常来自 DEM 或点云抽稀成果，精度与采样间距要写进接口契约；同一坐标在不同数据源差异较大，需固定数据版本，避免三维模型与业务分析口径不一致。"},{id:"fusion-map-region-flow",docKey:"design-map",type:"term",term:"重点区域实时车流",title:"重点区域实时车流（慧眼大数据）",description:"按重点区域统计实时定位人数并去重，属慧眼大数据能力，数据源为运营商信令或定位上报而非视频检测。实现上需明确去重口径、统计时间窗与区域边界来源；区域面积上限与网格粒度要在接口层校验，否则大区域查询会拖垮后端计算。"},{id:"fusion-map-rgeo",docKey:"design-map",type:"term",term:"逆地理编码",title:"逆地理编码",description:"把经纬度转换为地址描述与省市区三级行政区划，并返回周边 200 米内 POI、道路、路口信息（每类最多 5 条、按距离排序），常用于事件上图的地址回填。实现上应缓存行政区划结果、限制单次批量点数，并对无结果坐标返回最近道路而非空值。"},{id:"fusion-map-realtime-traffic",docKey:"design-map",type:"tech",term:"实时路况",title:"实时路况瓦片",description:"以栅格瓦片方式发布路况红黄绿状态，约 2 分钟刷新一次。前端应按 z/x/y 拉取瓦片叠加到地图，不要轮询整幅路况；需处理瓦片缓存失效、路况与路网版本错位，以及高缩放级别瓦片缺失时的回退策略，避免旧路况长期驻留误导指挥。"},{id:"fusion-map-batch-route",docKey:"design-map",type:"term",term:"批量路算",title:"批量路算",description:"一次提交多组起终点，仅返回各组路线的时间与距离而不返回完整坐标集合，适合运力匹配与到达时间批量估算。实现上要限制单批数量、分片或异步处理并设超时；出行模式与路径规划策略需逐组透传，结果按请求顺序对齐，避免阻塞网关。"},{id:"fusion-map-sim-plan",docKey:"design-map",type:"term",term:"仿真方案",title:"仿真方案",description:"交通仿真的可复用配置单元，包含仿真类型、区域、事件与模板参数，支持分页查询、增删改与复制。方案与运行实例必须分开存储：方案只存配置，运行记录存状态、进度与结果快照；复制方案时重新生成 ID 并隔离引用，避免多实例共享同一份模板数据。"},{id:"fusion-video-channel-code",docKey:"design-video",type:"term",term:"通道编码",title:"通道编码",description:"视频通道在平台内的唯一标识，是取流、云台、抓图与权限校验的统一入参。业务侧不要直接用设备 IP 或国标编码当主键，应经通道编码映射表转换；编码需保证跨级联稳定，设备迁移或重新接入时只更新映射关系，避免历史录像与告警记录失去关联。"},{id:"fusion-video-stream-url",docKey:"design-video",type:"tech",term:"通道预览取流URLv2",title:"通道预览取流URLv2",description:"按通道编码申请实时预览播放地址的接口，返回的 URL 通常带时效与鉴权签名，可直接交给播放器或标准 GUI 工具使用。实现上前端不要长期缓存该地址，过期需重新申请；并发预览数受平台授权限制，需做同屏路数控制与失败重试，避免多标签页重复拉流。"},{id:"fusion-video-gui-player",docKey:"design-video",type:"tech",term:"GUI 播放工具",title:"GUI 播放工具",description:"平台提供的标准图形化播放客户端，可脱离业务系统直接用取流 URL 预览，常用于现场排障与临时监看。对接时要确认工具支持的协议与 URL 参数格式；生产环境不要把带签名的地址外泄，临时排障应使用短时效凭证并记录操作日志，便于事后审计。"},{id:"fusion-video-preset",docKey:"design-video",type:"term",term:"预置点",title:"预置点",description:"摄像头预置位，保存云台方位、俯仰与焦距，按通道编号加预置点编号管理。设置、调用、查询、删除必须幂等，重复调用不能产生重复预置位；设备侧编号空间有限且删除后可能被复用，业务库需保存名称与创建人做区分，避免调用到错误机位。"},{id:"fusion-video-playback",docKey:"design-video",type:"term",term:"录像回放",title:"录像回放",description:"按通道与时间范围检索历史录像并回放，是事件复盘与取证的主要入口。实现上先查录像片段索引再拼接播放地址，注意设备时钟漂移造成的片段缺口；跨级联通道需逐级查询，回放地址同样带时效，长时间回放要处理分片续拉与断流重连。"},{id:"fusion-video-ptz-speed",docKey:"design-video",type:"term",term:"云台速度",title:"云台速度",description:"云台方向与变焦指令的执行速度，取值 1 到 100，值越大转动越快。下发时需带通道编号与指令序列号，做超时与幂等处理，避免网络抖动造成指令堆积；连续操作应节流与合并，并在界面回显当前速度档位，防止误操作把镜头甩出有效监控范围。"},{id:"fusion-video-snapshot",docKey:"design-video",type:"tech",term:"抓取当前画面",title:"抓图取证",description:"在预览或回放中截取当前帧生成图片并支持下载，用于「看见即取证」。抓图应由流媒体服务端完成而非前端 canvas 截屏，保证分辨率与时间戳准确；图片需落对象存储并记录通道、时间与操作人，下载链接设时效，避免内部通道信息外泄。"},{id:"fusion-comm-create",docKey:"design-comm",type:"term",term:"创建会议",title:"创建会议",description:"支持创建立即会议与预约会议，会议类型分语音与视频，必填主题、开始时间、类型与与会者列表；时长上限 1440 分钟、最小 15 分钟、默认 30 分钟。实现上时长与时间窗要在服务端二次校验，与会者终端在线状态需在入会时再确认，不能只依赖创建时名单。"},{id:"fusion-comm-instant",docKey:"design-comm",type:"term",term:"立即会议",title:"立即会议",description:"创建后即刻召开的会议，与预约会议共用会议模型但没有未来时间窗，多用于突发事件现场会商。实现上要预生成会议 ID 与房间资源，避免多人同时点击造成重复建会；断线重入应复用同一会议 ID，并保证录制与变更单链路对两类会议口径一致。"},{id:"fusion-comm-audio",docKey:"design-comm",type:"term",term:"语音会议",title:"语音会议",description:"仅传输音频的会议类型，带宽占用低，适合网络条件差的现场或车载终端接入。与视频会议共用预约、变更单与录制链路，但录制产物只有音频轨；实现上要区分会议类型对终端能力的约束，避免把语音会议推到只支持视频的房间导致入会失败。"},{id:"fusion-comm-attendees",docKey:"design-comm",type:"term",term:"与会者列表",title:"与会者列表",description:"会议参与方集合，包含用户、终端或会议室资源，是变更单推送与入会鉴权的依据。实现上与会者要存稳定 ID 而非昵称，支持按组织批量选择；编辑会议后需对比新旧名单生成差异，只对新增与移除方推送通知，避免全量广播造成终端骚扰。"},{id:"fusion-comm-change-order",docKey:"design-comm",type:"tech",term:"变更单",title:"变更单",description:"编辑预约会议后系统自动生成的差异凭证，记录会议主题、时间、类型、与会者的前后值，并推送到所有参会人终端。实现上变更单要可追溯、带版本号，重复编辑按序追加；推送失败需重试并落回执，避免部分终端仍按旧时间参会。"},{id:"fusion-comm-meeting-id",docKey:"design-comm",type:"term",term:"会议ID",title:"会议ID",description:"会议的唯一标识，是查询列表与详情、录制检索以及下载链接生成的关联键。实现上不要用主题或时间组合当业务主键；会议结束后 ID 仍需保留以支撑录制归档与审计，跨系统对接时应以会议 ID 做幂等，避免重复建会或录制串档。"},{id:"fusion-comm-aux-stream",docKey:"design-comm",type:"term",term:"辅流",title:"辅流",description:"会议中的第二路视频流，通常用于共享屏幕、文档或视频材料，与主流（摄像头画面）并行传输。下载录制文件时需区分辅流、高清、标清三种产物；实现上要按流类型分别存储与签发链接，并注意超过 3 小时的录制会拆成多文件、返回多个下载链接。"},{id:"fusion-comm-record-list",docKey:"design-comm",type:"term",term:"录制列表",title:"录制列表",description:"按会议维度查询录制产物，管理员可见全部、普通用户仅限自己创建的会议，支持按会议主题、预约人、会议 ID 与时间检索。实现上列表只存元数据、文件存对象存储，列表项要能定位到具体文件与下载链接；删除会议不应级联删除录制，需单独保留归档策略。"},{id:"fusion-svc-code",docKey:"design-service",type:"term",term:"标识码",title:"服务标识码",description:"服务对外唯一稳定的业务编码，与数据库自增的服务ID 解耦：服务ID 是系统内部主键，标识码才是授权、日志与调用方引用的依据。实现上标识码需全局唯一且不可变，改名不换码；授权记录与调用日志都应存标识码而非名称，避免服务重命名后历史授权失联。"},{id:"fusion-svc-origin-url",docKey:"design-service",type:"term",term:"接口原始地址",title:"原始地址与网关地址",description:"接口详情里同时记录「接口地址」和「接口原始地址」：前者是融合服务网关对外暴露的地址，后者是提供方真实的物理地址。注册第三方服务时两者不同，网关据此做代理透传；若只保存对外地址，路由调度时无法回源，因此改由网关转发后务必同步维护原始地址。"},{id:"fusion-svc-rate-limit",docKey:"design-service",type:"term",term:"调用频次限制",title:"调用频次限制",description:"注册服务时为每个接口声明单位时间内的最大调用次数，属于服务契约的一部分，而不是网关上的临时配置。实现上应与服务授权、访问控制联动：超限时返回统一错误码而非直接断开，并在服务日志中记录限流命中，便于调用方区分是配额不足还是接口故障。"},{id:"fusion-svc-call-guide",docKey:"design-service",type:"term",term:"服务调用指南",title:"服务调用指南",description:"随接口一起维护的接入文档，说明参数、返回结构、鉴权方式与调用示例，供第三方注册后自助对接。它和接口参数说明、返回参数说明分开存放，避免把调用约定塞进字段描述；接口变更时需同步更新指南版本，否则调用方按旧文档接入会直接踩空。"},{id:"fusion-svc-adapter",docKey:"design-service",type:"term",term:"服务适配管理",title:"服务适配管理",description:"把异构协议的服务统一收敛到融合服务：Web 服务、JMS 服务、HTTP/REST 服务分别由适配层转换后，对外呈现同一套调用形态。实现上适配器应与协议类型解耦，新增协议只加适配实现、不改业务代码；JMS 这类异步服务需额外定义请求-响应关联与超时策略。"},{id:"fusion-svc-test",docKey:"design-service",type:"term",term:"服务接口测试配置",title:"接口连通性测试",description:"发布前的连通性自检：手动填入调用参数发起一次真实调用，回显响应内容并给出耗时、成功率等稳定性反馈，同时提供错误码表对照。实现上测试请求应走与生产一致的网关链路，但需打标隔离，避免测试流量污染服务日志统计和调用频次计数。"},{id:"fusion-svc-errorcode",docKey:"design-service",type:"term",term:"错误码表",title:"错误码表",description:"接口测试结果旁附带的错误码对照表，把网关鉴权失败、参数校验失败、后端超时等场景映射为统一错误码与文案。实现上错误码由融合服务统一定义并向下游透传，禁止各提供方自定义码段；新增错误码需同步进对照表，否则调用方只能看到无意义的原始异常。"},{id:"fusion-svc-api-wrap",docKey:"design-service",type:"term",term:"接口封装管理",title:"数据接口封装",description:"把库表数据直接封装成可调用的 API：支持单表构建、多表构建，也可在单实例中写自定义 SQL 生成服务接口。实现上封装出的接口与手写接口一样进入注册-测试-发布流程并受授权管控；SQL 需做参数化与结果集行数上限，防止一次调用拖垮源库。"},{id:"fusion-svc-scope",docKey:"design-service",type:"term",term:"服务范围管理",title:"返回数据范围",description:"按调用方身份裁剪返回的数据行，例如按所属区域或日期范围过滤，同一接口对不同调用方返回不同数据子集。实现上范围条件由网关在转发前注入，而不是让调用方传参，避免越权自选；过滤字段需与源表索引匹配，否则大范围查询会退化为全表扫描。"},{id:"fusion-svc-bus",docKey:"design-service",type:"tech",term:"资源服务总线",title:"代理访问模式",description:"服务请求不直连提供方，而是由网关发往接口挂接的资源服务总线，再由总线代理访问真实服务并回传结果。这是典型的代理访问模式，好处是提供方地址对调用方不可见；实现上要保证总线与网关之间的超时、重试和幂等一致，否则一次请求可能被重复执行。"},{id:"fusion-data-quality",docKey:"design-data",type:"term",term:"数据质量",title:"数据质量监控",description:"贯穿采集、清洗、入库全链路的质量监控目标，与「数据质检组件」是两层概念：前者是体系与指标口径，后者是工作流里可配置的执行节点。实现上质量指标（完整性、准确性、一致性、时效性）应落库并可追溯到具体批次，异常按规则触发告警而非只写日志。"},{id:"fusion-data-preset-component",docKey:"design-data",type:"term",term:"预置组件",title:"预置处理组件",description:"工作流画布上可拖拽的数据处理算子，覆盖数据抽取、清洗、转换、加载等类型，每个组件带数据源地址、处理规则、输出格式等属性。实现上组件应做成可注册的物料而非硬编码节点类型，组件库支持增删与版本更新；属性 schema 决定配置面板渲染，改动需兼容存量工作流。"},{id:"fusion-data-dependency",docKey:"design-data",type:"term",term:"上下游依赖",title:"节点依赖关系",description:"通过画布连线表达的节点执行顺序，决定一个节点的输入来自哪些上游、结果被哪些下游消费。实现上依赖关系存为有向边并在保存时做环检测，运行前再做一次拓扑排序；下游只在上游成功后触发，上游失败时的传播策略要显式定义，避免整条链路静默跳过。"},{id:"fusion-data-cron",docKey:"design-data",type:"term",term:"CRON 表达式",title:"CRON 调度表达式",description:"定时调度配置里最灵活的一种执行周期写法，用于表达每日、每周、每月之外的复杂时刻组合。实现上要统一时区（按服务端时区解析并在界面标注），保存前校验表达式合法性，并展示未来若干次触发时间供运营确认；直接存用户输入的原始字符串容易导致误调度。"},{id:"fusion-data-sync",docKey:"design-data",type:"term",term:"数据同步组件",title:"数据同步组件",description:"配置数据库到数据库的同步任务，支持结构化数据的全量与增量同步，是工作流里最常用的落地节点。实现上增量同步依赖时间戳或自增主键做水位，必须持久化每次同步位点；全量同步要处理目标端去重与事务边界，否则任务重跑会产生重复数据。"},{id:"fusion-data-full-reconcile",docKey:"design-data",type:"term",term:"全量对账",title:"全量对账模式",description:"对账组件当前支持的对账模式：分别统计源端与目标端的数据行数并比对，用于发现采集或共享链路中的丢失与重复。实现上要固定同一时间快照再计数，跨库统计需容忍统计期间的新增写入；行数一致不等于内容一致，字段级校验需另配规则。"},{id:"fusion-data-issue-sort",docKey:"design-data",type:"term",term:"问题数据分拣",title:"问题数据分拣",description:"质检命中规则后把不合规记录挑出来单独归集，而不是直接阻断整批数据入库。实现上分拣结果需带规则编号、字段、原值与批次号，写入问题数据表供人工复核与回补；分拣策略（阻断/放行/隔离）要可按规则配置，否则脏数据会悄悄进入下游。"},{id:"fusion-data-staging",docKey:"design-data",type:"term",term:"贴源层",title:"贴源层与贴源库",description:"数仓最底层，结构与源系统基本保持一致，离线采集把数据交换区（前置数据库）的结构化数据汇聚到这里形成贴源库。实现上贴源层只做落地不做业务加工，保留原始字段与加载时间；命名和分层归属由数仓层级管理统一约束，禁止在此层做跨表关联。"},{id:"fusion-data-field-map",docKey:"design-data",type:"term",term:"字段映射配置",title:"字段映射配置",description:"汇聚任务的核心配置：建立源字段与目标字段的对应关系，决定采集到的数据能否正确写入目标库。实现上需处理类型转换、空值默认与字段增减，源表结构变更时映射要能检测失配并告警；映射关系应随任务版本保存，便于回溯某次采集用了哪套映射。"},{id:"fusion-data-executor",docKey:"design-data",type:"term",term:"执行器管理",title:"执行器管理",description:"调度任务的实际执行载体，记录执行器名称、分组标识、注册方式与在线机器地址，任务按路由策略分发到某个执行器运行。实现上执行器需心跳上报在线状态，下线后其上的任务要能重新路由；分组标识是任务与执行器的绑定依据，配置错会导致任务长期排队。"},{id:"fusion-portal-service",docKey:"design-portal",type:"term",term:"融合服务",title:"应急融合服务门户定位",description:"应急融合服务门户的核心定位：把分散在各业务系统的入口、待办、消息与看板收敛为一个政务工作台。实现上以门户壳加微前端或 iframe 集成子系统，登录态依赖统一认证下发的票据；注意子系统路由前缀与门户部署路径解耦，避免深链回跳丢失上下文。"},{id:"fusion-portal-frame",docKey:"design-portal",type:"term",term:"门户框架",title:"门户框架",description:"门户外壳骨架，负责顶部导航、按登录用户权限动态渲染菜单，并承载个人中心、待办、消息、知识等通用模块。实现要点：菜单由后端权限码驱动而非前端硬编码，导航跳转前先鉴权再走 SSO；权限变更后需刷新菜单缓存，避免越权入口残留。"},{id:"fusion-portal-user-center",docKey:"design-portal",type:"term",term:"个人中心",title:"个人中心",description:"面向登录用户的个人信息与自助服务区，展示姓名、部门，提供密码修改、权限申请、门户模板个性化，以及进入事项、日程、消息、收藏的快捷入口。实现上个人信息从统一用户中心拉取并本地缓存，权限申请需回写审批流；模板配置按用户维度持久化，避免多端不一致。"},{id:"fusion-portal-schedule",docKey:"design-portal",type:"term",term:"工作日程",title:"工作日程",description:"日程中心能力，支持平台推送待办自动生成日程与用户手动新增，也可代他人创建，用于领导派活、秘书排程。关键点：系统推送的待办日程只读，禁止编辑删除，需以来源标识区分；提醒时间与方式落到调度任务，重复频次要做幂等，防止重复提醒。"},{id:"fusion-portal-shortcut",docKey:"design-portal",type:"term",term:"快捷菜单",title:"快捷菜单",description:"用户可自由订阅的高频菜单入口，把常用业务一键放到门户首页，最多 8 个。实现上维护用户与菜单的订阅关系并按用户维度存储，菜单项需校验可见权限，权限回收后订阅应自动失效；上限在前后端同时校验，避免只靠前端限制被绕过。"},{id:"fusion-portal-integration-service",docKey:"design-portal",type:"term",term:"统一集成服务系统",title:"统一集成服务系统",description:"各厅局委办及开发商用户接入门户的统一工作台，提供接口在线调试、使用指引、服务在线订阅申请与服务创建。实现上它是门户与业务系统之间的集成控制面：应用注册、凭证与订阅关系在此维护，调试请求需带环境标识与鉴权，生产凭证禁止下发到前端。"},{id:"fusion-portal-todo-message-aggregation",docKey:"design-portal",type:"term",term:"待办/消息聚合",title:"待办与消息聚合",description:"通过标准化接口或适配器从各集成系统抽取待办任务与通知消息，在门户首页或待办中心统一展示。坑点：各系统待办模型字段不一，需定义统一契约，含标题、来源系统、类型、状态、跳转地址；拉取要增量且幂等，跳转地址需带一次性凭证完成免登。"},{id:"fusion-portal-access-control",docKey:"design-portal",type:"term",term:"门户级访问控制",title:"门户级访问控制",description:"在门户入口层对集成应用做可见性与可访问性控制，按用户角色、部门分配，即使业务系统内部放行也可在门户拦截。实现上门户入口鉴权与业务系统鉴权是两道闸，不能互相替代；需记录访问日志，含用户、时间、应用、结果，满足审计并处理权限缓存失效。"},{id:"fusion-ext-user-api",docKey:"design-external",type:"term",term:"用户接口",title:"统一用户中心用户接口",description:"对接一体化数字平台的用户能力，查询与管理省领导、厅领导、处室及地市交通局、重点企业等安全应急人员信息。实现上以用户唯一 ID 为主键做本地映射，避免用姓名或手机号关联；同步采用增量拉取并保留平台侧版本号，防止组织调整后本地数据滞后。"},{id:"fusion-ext-gov-auth-api",docKey:"design-external",type:"term",term:"政务侧身份认证接口",title:"政务侧身份认证接口",description:"面向政务端工作人员的统一身份核验接口，与公众侧接口分离。实现上政务侧走政务网络与证书令牌体系，公众侧走互联网通道，两套凭证不可混用；回调需校验签名与时效，票据换发后要绑定会话，防止重放与越权访问。"},{id:"fusion-ext-gov-sms",docKey:"design-external",type:"term",term:"政务短信",title:"政务短信",description:"对接一体化数字平台的短信能力，向安全应急业务相关人员发送通知短信。关键点：短信通道有频次与模板限制，需做发送去重与失败重试；手机号须来自统一用户中心而非业务自填，敏感内容先脱敏，发送记录留痕便于审计与计费核对。"},{id:"fusion-ext-hd-map",docKey:"design-external",type:"term",term:"高精度数字底图",title:"省交通集团高精度数字底图",description:"省交通集团的高精度数字底图，提供道路基础要素、位置大数据、标精地图及基础设施、安全设施、机电设施等专题图层。实现上按图层服务接入并做坐标系转换，图层权限与更新频率需与提供方约定，避免底图与业务图层错位。"},{id:"fusion-ext-comm",docKey:"design-external",type:"term",term:"融合通信",title:"融合通信能力",description:"对接一体化数字平台的融合通信能力，汇聚高速公路、航道、港口、国省道及两客一危一重车辆等行业态势视频。实现上视频以流地址加鉴权令牌接入，需处理不同厂商协议与转码；通道权限要经统一权限校验，避免越权调阅敏感视频。"},{id:"fusion-ext-virtual-hsm",docKey:"design-external",type:"term",term:"虚拟加密机",title:"省政务云虚拟加密机",description:"省政务云提供的虚拟加密机，按 GM/T 0018 规范提供对称加解密接口，入参含会话句柄、密钥句柄、算法标识与明文密文缓冲区。坑点：句柄有生命周期需复用与释放，IV 缓冲区长度要匹配，加解密必须成对且算法标识一致，否则解密失败。"},{id:"fusion-ext-key-pool",docKey:"design-external",type:"term",term:"密码资源池",title:"省政务云密码资源池",description:"省政务云密码资源池，提供密钥生成、分发、销毁等密钥全生命周期管理接口。实现上密钥生成与分发分离，会话密钥用接收方公钥加密传输；密钥销毁要确认无在用业务，操作留审计日志。切勿在应用侧缓存明文密钥，密钥句柄应由密码机托管。"},{id:"fusion-ext-unified-todo",docKey:"design-external",type:"term",term:"统一待办",title:"统一待办",description:"对接一体化数字平台，为各系统提供统一待办能力，集中展示公文与事务待办并可跳转到对应系统待办页。实现上待办需携带来源系统与业务主键，跳转前用一次性票据完成免登；状态回写要及时，避免门户显示已办而源系统仍未处理。"},{id:"fusion-ext-waterway-chart",docKey:"design-external",type:"term",term:"电子航道图",title:"电子航道图",description:"从智慧航道系统获取的电子航道图公共能力，提供航道基础地理数据共享与切片服务。实现上以瓦片服务接入并叠加到融合底图，需处理航道图与陆域底图的坐标系与层级对齐；切片缓存要跟随源数据版本刷新，避免展示过期航道。"},{id:"fusion-ext-warning-call",docKey:"design-external",type:"term",term:"预警叫应",title:"预警叫应信息接口",description:"国家综合交通运输信息平台的预警叫应接口，贯通部、省、站三级开展预警叫应。实现上叫应是有状态流程，含下发、接收、反馈、闭环，需保证消息必达与超时升级；接口先预留，联调时要与部侧确认报文格式、重试策略与签收凭证。"},{id:"fusion-collect-data-exchange",docKey:"ops-collect",type:"term",term:"数据采集",title:"数据采集交换",description:"融合数据采集交换系统是采集汇聚的执行底座，承担库表、接口、文件导入等任务的配置与调度。开发上应把「数据源—采集任务—贴源表」建成可追溯的元数据关系，任务失败可重跑且幂等；采集账号与交换中心账号分离，避免权限过大。"},{id:"fusion-collect-resource",docKey:"ops-collect",type:"term",term:"数据资源",title:"数据资源",description:"数据资源指可被申请、编目和汇聚的业务数据集合。需求分析阶段要逐项标注资源是否已在厅一体化数字平台或省一网共享平台挂接，形成「资源—来源系统—共享方式」清单；未挂接资源需走申请流程，避免开发阶段才发现无数据可用。"},{id:"fusion-collect-source",docKey:"ops-collect",type:"term",term:"数源",title:"数源部门",description:"数源即数据提供方部门。接口采集前需由数源部门提供访问地址、输入输出参数与验证方式，并完成联通测试；上线后按调用频率、数据量、响应时间、返回结果做运行监控，异常需能定位到具体数源接口。"},{id:"fusion-collect-node-init",docKey:"ops-collect",type:"tech",term:"节点初始化",title:"交换节点初始化",description:"交换节点是库表采集的接入端点，初始化需登记节点 IP、端口、数据库实例及三套账号密码（初始化、部门使用、交换中心）。实现上账号密码应加密存储并支持轮换，节点连通性需有健康检查，避免任务调度时才发现网络或权限不通。"},{id:"fusion-collect-special-table",docKey:"ops-collect",type:"term",term:"专项数据表",title:"专项数据表",description:"专项数据表用于承载无业务系统支撑或临时采集的数据，需配置表元数据、数据项内容与类型，并选择 Excel 导入或页面填报方式。建表时应复用统一数据标准与审计字段，导入模板与表结构同源生成，避免模板字段与落库字段漂移。"},{id:"fusion-collect-import",docKey:"ops-collect",type:"term",term:"数据导入",title:"数据导入",description:"数据导入面向存量系统数据与突发临时数据，支持 Excel 模板导入和页面在线填报。导入后须由归口管理部门审核规范性与完整性，问题数据退回重报，审核通过才正式入库；实现上要保留导入批次、校验结果与审核痕迹，便于回溯。"},{id:"fusion-collect-governance",docKey:"ops-collect",type:"term",term:"数据治理",title:"数据治理工作量",description:"数据治理在本章指采集汇聚的人员与流程保障，工作量按需求分析、资源申请、汇聚库设计、采集对接、任务建立、入库检查与运行监测拆解。排期时要把资源申请的外部审批周期计入，采集任务上线后仍需持续处理异常与数据补齐。"},{id:"fusion-std-governance",docKey:"ops-standard",type:"term",term:"数据治理",title:"数据治理标准化",description:"数据治理标准化是把政策法规转化为可执行标准与制度的过程。开发上需建立标准审核、发布、更新、废止的版本机制，字段命名、格式、代码值以标准为唯一来源；下游清洗与质检任务应引用标准版本号，避免标准升级后历史任务口径不一致。"},{id:"fusion-std-security",docKey:"ops-standard",type:"term",term:"数据安全",title:"数据安全",description:"数据安全在本章强调标准落地过程中的合规使用。实现上要在数据分级分类基础上做字段级权限与脱敏，敏感数据访问留审计日志；共享与开放需与标准中的安全要求对齐，避免治理过程中把敏感字段直接暴露给下游分析。"},{id:"fusion-std-meta-standard",docKey:"ops-standard",type:"term",term:"元数据标准",title:"元数据标准",description:"元数据标准定义字段名称、含义、类型、长度、格式与值域，是数据标准的结构化载体。建议用元数据管理工具维护技术元数据与业务元数据映射，标准变更走评审并保留历史版本；下游建表、ETL 映射与接口文档应从标准生成，减少人工抄写。"},{id:"fusion-std-integrity",docKey:"ops-standard",type:"tech",term:"数据完整性检验",title:"数据完整性检验",description:"完整性检验分记录级与字段级：记录级对比源库与目的库表行数判断是否缺失，字段级统计空值率，主键与非空字段空值率应为 0。实现上要固定对账时间点并排除同步延迟，空值率阈值按字段配置，异常结果进入质量问题清单而非只出报表。"},{id:"fusion-std-biz-rule",docKey:"ops-standard",type:"term",term:"业务质检规则",title:"业务质检规则",description:"业务质检规则由业务处室提出质量要求，覆盖救援物资、应急装备、避难场所、专家队伍、应急预案等业务数据项，并封装成接口存入质检规则库。开发时应把规则参数化（阈值、值域、关联字段），业务规则与基础规则分开管理，避免业务调整时改动代码。"},{id:"fusion-std-transform-clean",docKey:"ops-standard",type:"tech",term:"数据转换清洗",title:"数据转换清洗",description:"数据转换清洗通过 ETL 完成抽取、清洗、转换、加载，把多源数据转成标准数据。实现上每个任务要有源表、目标表、映射规则与调度周期，清洗规则需覆盖去重、补全、格式与编码转换；任务需可重跑且幂等，并输出异常数据明细供复核。"},{id:"fusion-std-exchange",docKey:"ops-standard",type:"tech",term:"数据交换",title:"数据交换",description:"数据交换指跨库、跨异构数据库的表级数据搬运，包括生成交换语句、配置交换任务、异构数据库转译、定时规则与交换流程，以及交换质量管理。实现上要关注字段类型映射、字符集与时区差异，交换失败需断点续传并保留批次日志。"},{id:"fusion-std-load",docKey:"ops-standard",type:"tech",term:"数据加载",title:"数据加载",description:"数据加载把清洗转换后的数据写入标准化明细库，不只是批量装载，还包括代理键管理、维度表管理与索引维护。实现上要保证加载幂等与批次可追溯，代理键由加载流程统一生成，维度表变更走缓慢变化维策略；加载失败需支持按批次重跑。"},{id:"fusion-base-equipment",docKey:"ops-base",type:"term",term:"应急装备信息库",title:"应急装备信息库",description:"应急装备信息库沉淀装备名称、型号、数量、存放位置、技术参数、制造商、生产日期与保修期限等基础数据。开发上以装备编码为主键，存放位置关联行政区划或场站，数量与状态需支持按机构汇总；与装备调用、维护等业务事实通过装备 ID 关联。"},{id:"fusion-base-terminal",docKey:"ops-base",type:"term",term:"应急终端信息库",title:"应急终端信息库",description:"应急终端信息库覆盖无人机、布控球、指挥车、单兵设备等终端数据。实现上要区分终端类型与通信制式，统一设备编码并记录所属机构、在线状态与绑定关系；终端位置与状态变化频繁，基础属性与实时状态建议分表存储，避免主数据表被高频更新。"},{id:"fusion-base-org",docKey:"ops-base",type:"term",term:"应急指挥通讯组织库",title:"应急指挥通讯组织库",description:"应急指挥通讯组织库维护应急指挥组织机构、机构名称与职责等信息。组织编码应稳定且可映射到厅内组织体系，支持上下级关系与有效期；人员库通过组织编码挂接，组织撤并时用失效日期而非物理删除，保证历史调度记录可追溯。"},{id:"fusion-base-person",docKey:"ops-base",type:"term",term:"应急指挥通讯人员库",title:"应急指挥通讯人员库",description:"应急指挥通讯人员库记录人员名称、联系方式、职责范围、专业技能与紧急联系方式。实现上人员 ID 全局唯一，一个人员可归属多个组织或岗位，联系方式需区分办公与紧急号码；与值班、调度任务关联时保留当时快照，避免人员信息变更影响历史记录。"},{id:"fusion-base-match",docKey:"ops-base",type:"tech",term:"数据匹配与整合",title:"数据匹配与整合",description:"数据匹配与整合用于识别不同源系统中的同一实体（如同一应急组织在不同系统的名称或编码不同），通过唯一标识、名称相似度与业务规则匹配合并，生成统一记录。整合后要做一致性校验，如可用物资数量不得大于总储备量；合并需保留来源映射，支持回溯。"},{id:"fusion-base-init",docKey:"ops-base",type:"tech",term:"数据初始化",title:"数据初始化",description:"数据初始化把清洗整合后的高质量主数据加载到业务系统，作为初始主数据。实现上要完成应用层适配、索引与查询优化，并同步初始化数据来源、更新周期、字段说明等元数据；初始化应可重复执行且幂等，正式切换前先在测试环境做全量校验。"},{id:"fusion-base-service",docKey:"ops-base",type:"tech",term:"主数据服务",title:"主数据服务",description:"主数据服务是基础库对外供给的核心，通过 API 或消息队列把主数据推送、订阅给协同平台各业务系统，并在厅一体化数字平台挂接主数据资源与服务。实现上要定义变更通知机制、订阅方白名单与版本号，保证多系统间同一主数据的一致性与可追溯。"},{id:"fusion-base-catalog-rule",docKey:"ops-base",type:"term",term:"编目规则",title:"主数据编目规则",description:"编目规则定义主数据如何分类、命名与编码，是主数据标准落地的关键。实现上应把编目规则做成可配置的编码段组合（如地区代码+类型代码+序号），并由规则生成器统一发号；编码一经使用不可复用，规则调整需版本化并兼容历史数据。"},{id:"fusion-topic-hetero",docKey:"ops-topic",type:"term",term:"多源异构数据",title:"多源异构数据",description:"多源异构数据指来自不同部门、不同系统且结构或编码不一致的应急调度数据。主题库建设要先做来源梳理与标准对齐，再按主题模型抽取融合；实现上需记录每个字段的来源系统与转换规则，避免同名不同义或同义不同名直接合并。"},{id:"fusion-topic-data-element",docKey:"ops-topic",type:"term",term:"数据元标准",title:"数据元标准",description:"数据元标准是对主题数据最小数据单元的定义，包括名称、含义、类型、长度、值域与编码。主题库设计应复用基础库主数据的数据元标准，新增数据元走评审入库；开发时以数据元编码做映射，避免用中文名称做关联导致口径漂移。"},{id:"fusion-topic-fusion-rule",docKey:"ops-topic",type:"tech",term:"数据融合规则",title:"数据融合规则",description:"数据融合规则决定主实体对象、业务事实数据与业务维度数据如何清洗关联。实现上要按主题分别定义关联键、去重策略、优先级与冲突处理，例如同一实体多来源时以权威系统为准；规则应配置化并可回溯每次融合结果。"},{id:"fusion-topic-dimension",docKey:"ops-topic",type:"term",term:"业务维度数据",title:"业务维度数据",description:"业务维度数据为主题分析提供切片口径，如时间、区域、机构、事件类型等。建模时维度表要有稳定代理键与缓慢变化维处理，避免直接使用业务名称；维度值变更需保留历史版本，保证跨期指标可比。"},{id:"fusion-topic-catalog-rule",docKey:"ops-topic",type:"tech",term:"关联编目规则",title:"关联编目规则",description:"关联编目规则定义主数据对象与业务事实数据之间的挂接关系，是主题库把「谁发生了什么」组织起来的基础。实现上要明确主实体键、事实表外键与关联基数，编目关系变更需版本化；入库后要校验关联完整性，防止事实数据成为孤儿记录。"},{id:"fusion-topic-code-value",docKey:"ops-topic",type:"term",term:"属性编码值",title:"属性编码值",description:"属性编码值指主题库各属性采用的统一代码值域。入库检查时要验证编码是否归一化、是否存在一码多义或同义多码；实现上建议维护码表与映射表，源系统编码转换在抽取阶段完成，主题库只存标准码，展示层再做翻译。"},{id:"fusion-topic-knowledge",docKey:"ops-topic",type:"term",term:"应急知识主题库",title:"应急知识主题库",description:"应急知识主题库汇聚政策法规、预案知识、演练知识、事件处置知识与知识优化反馈数据，为智能问答与辅助决策提供语料。实现上要与知识库、向量库区分：主题库存结构化知识与元数据，非结构化文档切片与向量索引由知识库承载，通过知识 ID 关联。"},{id:"fusion-topic-command",docKey:"ops-topic",type:"term",term:"应急指挥调度主题库",title:"应急指挥调度主题库",description:"应急指挥调度主题库覆盖公路/水路应急事件、工程建设事件、值班值守、调度任务及处置结果、指挥机构人员与无人机/单兵/指挥车调度数据。开发上以事件与任务为核心事实，按事件 ID、任务 ID 关联资源与人员，状态流转需保留时间戳以支撑处置时效分析。"},{id:"fusion-special-resource",docKey:"ops-special",type:"term",term:"数据资源",title:"专题数据资源",description:"数据资源在专题库中指支撑专题指标的业务明细与外部数据，包括内部系统、外部接口、物联网设备与公开数据。建设前要明确数据粒度、时间跨度、来源与质量要求，并登记到资源清单；抽取时按专题归集，避免不同专题重复建设同一份明细。"},{id:"fusion-special-indicator",docKey:"ops-special",type:"term",term:"专题应用指标",title:"专题应用指标",description:"专题应用指标是专题库对外输出的核心，需定义指标名称、计算口径、数据来源与采集频率。实现上指标应配置化定义（公式、过滤条件、时间窗口），由宽表或中间表预计算；口径变更要版本化并重算历史数据，避免同名指标前后不可比。"},{id:"fusion-special-caliber",docKey:"ops-special",type:"term",term:"指标计算口径",title:"指标计算口径",description:"指标计算口径明确指标的统计范围、过滤条件、时间窗口与计算公式。开发时要把口径写成可执行配置而非注释，指标结果需能追溯到来源字段与中间表；同一指标在不同专题复用时必须引用同一口径，防止各部门各算一套。"},{id:"fusion-special-schema",docKey:"ops-special",type:"tech",term:"星型/雪花模式",title:"星型/雪花模式",description:"星型/雪花模式是支撑维度分析的维度建模方法：事实表存度量值，维度表存分析属性，雪花模式进一步规范化维度层级。专题库选型时要权衡查询性能与冗余，常用维度可适度反规范化；事实表按时间分区，维度表用代理键关联。"},{id:"fusion-special-wide-table",docKey:"ops-special",type:"tech",term:"指标聚合宽表",title:"指标聚合宽表",description:"指标聚合宽表预计算常用汇总指标，把多维分析所需的度量与维度冗余到一张宽表，减少查询时多表关联。实现上要明确宽表粒度（如日×路段×收费站），按分区增量刷新；宽表不是越多越好，需与查询模式匹配并控制存储与更新成本。"},{id:"fusion-special-transform",docKey:"ops-special",type:"tech",term:"数据转换与融合",title:"数据转换与融合",description:"数据转换与融合基于指标体系做字段映射、代码转换、指标预计算、实体识别与跨源关联，为指标计算准备结构化基础数据。实现上先落中间表再组合宽表，转换规则需可配置并保留血缘；跨源关联要处理主键不一致与重复实体问题。"},{id:"fusion-special-lineage",docKey:"ops-special",type:"tech",term:"数据血缘",title:"数据血缘",description:"数据血缘记录指标从来源字段、中间表到最终宽表的计算过程。实现上应在 ETL 与指标配置中自动采集血缘，而不是手工维护文档；血缘可用于影响分析（改字段前评估影响范围）和问题定位（指标异常时快速回溯到源表与规则）。"},{id:"fusion-special-key-road",docKey:"ops-special",type:"term",term:"重点路段专题",title:"重点路段专题",description:"重点路段专题整合公路路网、易拥堵、易灾害、事故多发路段及视频、联络人、车流量与拥堵数据。开发上以路段编码为关联主键，路网基础数据与动态监测数据分表存储；易灾害点、事故多发点等标签需支持多标签叠加与时间有效性。"},{id:"req-spec-overview-4",docKey:"req-spec-overview",type:"term",term:"总管理员",title:"总管理员",description:"总管理员拥有 AI、地图、视频、通信、数据采集与门户的全权限，落地时需在角色、菜单、接口三层同时授权，避免仅隐藏菜单而不校验后端接口造成越权。"},{id:"req-spec-overview-5",docKey:"req-spec-overview",type:"term",term:"技术保障人员",title:"技术保障人员",description:"技术保障人员负责模型部署、图层维护、视频通道保障、会议线路排查与接口调试，属于运维角色；开发时应为其配置独立权限集与操作审计，不开放业务数据编辑能力。"},{id:"req-spec-ai-9",docKey:"req-spec-ai",type:"typo",term:"fasle",title:"疑似拼写错误",description:"原文写为「fasle：不自动识别标题」，与同句 true 对应，应为布尔值 false；建议同步检查切片配置项与接口参数默认值。",correction:"false"},{id:"req-spec-ai-10",docKey:"req-spec-ai",type:"term",term:"指代消解",title:"指代消解",description:"指代消解用于知识切片增强，把代词还原为具体实体，减少检索歧义；实现时需保留原文位置与改写结果，切片重建后同步更新索引，避免指向旧文本。"},{id:"req-spec-ai-11",docKey:"req-spec-ai",type:"tech",term:"NER",title:"NER（命名实体识别）",description:"NER 即命名实体识别，用于从文档中抽取人物、地点、事件与专业术语并建立实体索引；需处理别名合并、同义归并与实体歧义，人工可增删合并。"},{id:"req-spec-map-9",docKey:"req-spec-map",type:"tech",term:"慧眼大数据",title:"慧眼大数据",description:"慧眼大数据是重点区域客流的分析数据源，提供实时定位人数、分时客流预测、网格热力与当日累计客流；对接时需确认去重口径、区域上限与刷新频率。"},{id:"req-spec-map-10",docKey:"req-spec-map",type:"term",term:"三急一速",title:"三急一速",description:"三急一速指高速公路上急加速、急减速、急转弯与超速等风险驾驶指标；交通大数据分析按天统计路段明细，前端需按路段与时间聚合展示并支持下钻。"},{id:"req-spec-video-8",docKey:"req-spec-video",type:"tech",term:"云台速度",title:"云台速度",description:"云台速度取值为 1 至 100，控制方向与变焦的执行快慢；下发时需携带通道编号并做节流、超时与幂等处理，界面应回显当前档位，避免指令堆积。"},{id:"req-spec-video-9",docKey:"req-spec-video",type:"term",term:"全网共享",title:"全网共享",description:"全网共享指视频资源一点接入后向指挥中心、移动端与会商系统统一开放；实现上以通道编码做唯一标识，按用户权限过滤可看通道，不向无权限方返回流地址。"},{id:"req-spec-comm-8",docKey:"req-spec-comm",type:"term",term:"立即会议",title:"立即会议",description:"立即会议创建后即刻召开，与预约会议共用会议模型但没有未来时间窗；实现上应先占用会议 ID 与房间资源，断线重入复用同一会议，避免重复建会。"},{id:"req-spec-comm-9",docKey:"req-spec-comm",type:"term",term:"会议时长",title:"会议时长",description:"会议时长限制为 15 至 1440 分钟，默认 30 分钟；前后端都需校验起止时间与时长上限，超限在表单层拦截，服务端二次校验，避免绕过前端写入非法会议。"},{id:"req-spec-comm-10",docKey:"req-spec-comm",type:"term",term:"语音会议",title:"语音会议",description:"语音会议只传音频，带宽占用低，适合网络较差的现场或车载终端；与视频会议共用预约、变更与录制链路，但录制产物仅含音频轨，需在终端能力上做区分。"},{id:"req-spec-service-9",docKey:"req-spec-service",type:"term",term:"接口原始地址",title:"接口原始地址",description:"接口原始地址是服务提供方真实的物理地址，与网关对外暴露的接口地址不同；注册第三方服务时两者需分别维护，网关代理回源依赖原始地址，缺失会导致路由失败。"},{id:"req-spec-service-10",docKey:"req-spec-service",type:"tech",term:"错误码表",title:"错误码表",description:"错误码表把鉴权失败、参数校验失败、后端超时等场景映射为统一错误码与文案；应由融合服务统一定义并向下游透传，新增错误码需同步维护，避免调用方只拿到原始异常。"},{id:"req-spec-service-11",docKey:"req-spec-service",type:"tech",term:"PassID",title:"PassID",description:"PassID 与 ServiceID、Pass Token、App secret 组成服务访问凭证；网关鉴权需校验四者匹配关系，凭证应加密存储并支持轮换，禁止写入前端或日志。"},{id:"req-spec-data-9",docKey:"req-spec-data",type:"term",term:"离线数据采集",title:"离线数据采集",description:"离线数据采集以文件或批量方式汇聚结构化数据，任务需配置文件路径、解析规则、编码、分隔符与目标表；实现上要记录批次与水位，失败可重跑且幂等。"},{id:"req-spec-data-10",docKey:"req-spec-data",type:"tech",term:"断点续传",title:"断点续传",description:"断点续传用于文件汇聚同步，在传输中断后从已完成位置继续而非整文件重传；实现上需记录偏移量与校验方式，处理源文件变更与重复分片，并限制重传次数。"},{id:"req-spec-data-11",docKey:"req-spec-data",type:"term",term:"字段映射配置",title:"字段映射配置",description:"字段映射配置建立源字段与目标字段的对应关系，决定采集数据能否正确落表；需处理类型转换、空值默认与字段增减，源表结构变化时应检测失配并告警。"},{id:"req-spec-portal-9",docKey:"req-spec-portal",type:"term",term:"预警叫应",title:"预警叫应",description:"预警叫应把预警信息推送给值班人员并跟踪接收、反馈与闭环；门户待办与值守看板均需展示叫应次数与响应率，实现上要保证消息必达、超时升级与回执留痕。"},{id:"req-spec-portal-10",docKey:"req-spec-portal",type:"term",term:"查岗记录",title:"查岗记录",description:"查岗记录用于记录值班人员在岗抽查过程与结果，是值守看板统计查岗次数的基础；实现上需保存查岗人、被查岗人、时间与结果，异常情况应触发提醒并留痕。"},{id:"req-spec-portal-11",docKey:"req-spec-portal",type:"tech",term:"IP 白名单",title:"IP 白名单",description:"IP 白名单在子系统接入层限制可访问的客户端地址，与角色、岗位、区域权限共同生效；网关需同时校验来源 IP 与会话身份，名单变更实时生效并记录拦截日志。"},{id:"req-spec-external-9",docKey:"req-spec-external",type:"tech",term:"USBKey",title:"USBKey",description:"USBKey 即智能密码钥匙，用于存放数字证书与密钥并完成身份认证、签名；调用时需 PIN 鉴权，私钥不出硬件，业务侧只接收签名结果并校验证书链与有效期。"},{id:"req-spec-external-10",docKey:"req-spec-external",type:"term",term:"密钥全生命周期",title:"密钥全生命周期",description:"密钥全生命周期覆盖生成、分发、使用、轮换与销毁；实现上生成与分发分离，会话密钥用接收方公钥加密传输，销毁前确认无在用业务，全程记录审计日志。"},{id:"req-spec-external-11",docKey:"req-spec-external",type:"term",term:"三防态势",title:"三防态势",description:"三防态势指防汛、防旱、防风等应急态势数据，来源于安全应急协同平台；对接时需同步风险点位、事件与资源状态，按区域和时间聚合展示，并保留来源标识。"}],_i={class:"doc-html"},bi=U({__name:"00-需求分析-数据融合子系统建设需求",setup(c){return(f,t)=>(l(),d("article",_i,[...t[0]||(t[0]=[Z('<aside class="doc-summary"><div class="doc-summary-title">本章要点</div><ul class="doc-summary-list"><li>融合服务门户支撑的需求</li><li>AI 能力支撑的需求​</li><li>地图引擎能力支撑的需求​</li><li>视频监控能力支撑的需求</li><li>融合通信能力支撑的需求​</li><li>融合服务支撑的需求​</li><li>数据采集与交换的需求​</li></ul></aside><p class="doc-p doc-lead">本系统是融合<span class="doc-kw">行业数字底座</span>和广东省“<span class="doc-kw">数字交通运输厅</span>”数据底座的融合中间数据处理系统，解决多源异构<span class="doc-kw">数据治理</span>难题，实现多级多部门系统数据的深度融合，充分整合各底座所具备的<span class="doc-kw">AI 能力</span>、时空能力与数据能力，系统向上支撑<span class="doc-kw">应急指挥调度</span>系统6 大业务系统，横向服务厅安全应急业务协同平台，向下统管<span class="doc-kw">双底座</span>数据、算法、时空等三大资源。</p><h4 id="3271-融合服务门户支撑的需求" class="doc-h4">3.2.7.1 融合服务门户支撑的需求</h4><p class="doc-p">为给用户提供直观、全面的数据展示和分析工具，业务人员需要快速了解业务数据的状况和趋势，通过<span class="doc-fn">数据看板</span>的可视化展示和钻取分析功能，辅助业务决策和问题发现。用户在业务处理过程中需要使用多个系统，为实现各类系统的统一访问和集中管理，通过门户集成实现<span class="doc-kw">单点登录</span>和统一界面，提高用户的工作效率，降低系统使用的复杂性，为用户提供便捷的业务操作入口。</p><h4 id="3272-ai-能力支撑的需求​" class="doc-h4">3.2.7.2 AI 能力支撑的需求​</h4><p class="doc-p">从<span class="doc-kw">知识管理</span>能力来看，业务上需要实现安全应急各类知识的有效沉淀、共享与复用，以提升工作人员的工作效率和决策的科学性。无论是从多种来源采集知识，还是对知识进行组织分类、更新维护以及智能检索推荐，都是为了满足业务中对知识的快速获取和精准应用需求。</p><p class="doc-p">为能够灵活引入和管理各类AI 模型，支撑不同业务场景下的智能化应用。例如，在<span class="doc-kw">应急指挥调度</span>服务场景中接入自然语言处理模型提升响应效率，在数据分析场景中接入机器学习模型辅助决策，同时需要对模型的版本、性能进行有效管控，确保模型在业务应用中的稳定性和可靠性。最后，不同<span class="doc-kw">智能体</span>各司其职又相互协作，能够减少人工干预，提高业务处理的效率和准确性，同时需要对<span class="doc-kw">智能体</span>的全生命周期进行管理，保障其安全、高效地服务于业务。​</p><h4 id="3273-地图引擎能力支撑的需求​" class="doc-h4">3.2.7.3 地图引擎能力支撑的需求​</h4><p class="doc-p">为业务提供地理空间信息的展示、分析和应用支持，业务中需要<span class="doc-kw">地图引擎</span>支持多图层叠加、空间查询、路径分析等功能，以满足不同业务场景对地理信息的多样化需求。​</p><h4 id="3274-视频监控能力支撑的需求" class="doc-h4">3.2.7.4 视频监控能力支撑的需求</h4><p class="doc-p">为实现对特定区域、场所或设备的实时监控和安全防范。在安防领域，需要通过<span class="doc-kw">视频监控</span>及时发现异常情况并进行预警，保障人员和财产安全；在生产车间，可利用<span class="doc-kw">视频监控</span>监督生产流程，确保生产规范有序进行。此外，业务还要求<span class="doc-kw">视频监控</span>系统具备视频存储、回放、智能分析等功能，以便事后追溯和数据分析，提升监控的有效性和智能化水平。</p><h4 id="3275-融合通信能力支撑的需求​" class="doc-h4">3.2.7.5 融合通信能力支撑的需求​</h4><p class="doc-p">为实现多种通信方式的统一整合和高效协同，业务中人员之间、人员与系统之间需要便捷地进行信息交互，包括语音通话、视频会议、即时消息、短信等。例如，在应急指挥场景中，需要<span class="doc-kw">融合通信</span>能力确保指挥中心与现场人员之间的实时沟通，快速传递指令和信息；同时，还要求<span class="doc-kw">融合通信</span>系统具备跨平台、跨终端的兼容性，保障通信的顺畅性和稳定性等。​</p><h4 id="3276-融合服务支撑的需求​" class="doc-h4">3.2.7.6 融合服务支撑的需求​</h4><p class="doc-p">业务中存在众多不同的服务接口，需要将其统一整合、分类展示，方便服务使用者快速找到并调用所需接口，促进业务系统之间的集成和数据交互。同时，不同的用户或系统对服务的访问权限不同，需要通过授权机制确保服务只被授权对象合法使用，防止未授权访问带来的安全风险，保障业务数据和服务的安全性；另外，需要对服务调用过程进行全面监控和追溯，以便对服务进行优化和问题排查，同时为业务审计和决策提供依据；最后，为保障服务的稳定、高效、安全调用，需要对服务请求进行处理，实现服务的负载均衡和高可用，确保业务系统之间的顺畅通信。​</p><h4 id="3277-数据采集与交换的需求​" class="doc-h4">3.2.7.7 数据采集与交换的需求​</h4><p class="doc-p">不同的业务场景有不同的数据处理流程，通过自定义工作流，能够满足多样化的业务需求，提高数据处理的效率和准确性。业务决策和业务处理依赖大量的数据支持，需要从数据库、文件、API 接口等多种来源采集数据，为业务分析和应用提供数据基础。为实现对数据源的有效管控需求，需要对数据源进行分类管理，确保数据源的可靠性和安全性，同时方便对数据源进行维护和管理，保障<span class="doc-fn">数据采集</span>工作的顺利开展。业务往往涉及多个应用系统，为实现不同应用系统之间的协同工作和数据共享，需要明确系统之间的关联关系和数据交互规则，实现系统的无缝集成，提高业务处理的整体性和效率。</p>',17)])]))}}),wi={class:"doc-html"},Ki=U({__name:"01-AI能力系统",setup(c){return(f,t)=>(l(),d("article",wi,[...t[0]||(t[0]=[Z('<aside class="doc-summary"><div class="doc-summary-title">本章要点</div><ul class="doc-summary-list"><li>知识管理能力</li><li>模型接入管理能力</li><li>AI agent（智能体）应用管理</li></ul></aside><p class="doc-p doc-lead"><span class="doc-kw">AI 能力</span>系统覆盖从<span class="doc-kw">知识管理</span>、<span class="doc-kw">模型接入</span>开发、AI <span class="doc-kw">智能体</span>应用建设和管理。</p><h5 id="54111-知识管理能力" class="doc-h5">5.4.1.1.1 知识管理能力</h5><p class="doc-p">需支持面向用户构建<span class="doc-kw">知识管理</span>的能力，支持创建应用知识库，管理知识库导入的文件，对文件进行分段清洗并存储至向量知识库。支持编辑、删除知识库。支持对知识库进行命中测试，输入命中测试关键词，设置命中测试范围、返回结果topk、置信度。支持查看关键词的命中历史记录。</p><h6 id="541111-知识文件管理" class="doc-h6">5.4.1.1.1.1 知识文件管理</h6><p class="doc-p">支持用户新增<span class="doc-fn">知识文件管理</span>，文件名称、上传时间、文档格式类型等；将非结构化文件转为向量数据存储，可自定义修改向量数据库、向量嵌入模型。文档支持word、ppt、excel、pdf、图片、txt、md 格式文件。</p><ul class="doc-list doc-list-bullet"><li>文件导入：支持通过本地上传和对象存储两种方式导入文件。其中对象存储数据来源可选择云上对象存储数据源，也支持选择MinIO 数据源。</li><li>数据源接入：支持通过添加数据源接入PostgreSQL、OSS、ODPS、MySQL和MinIO 的数据或文档。</li><li>支持以数据源名称、接入方式和接入状态三个维度对已接入的数据源进行筛选。</li><li>支持文档库的新增、编辑、删除、查看基本管理功能。已上架文档库，不支持删除。</li></ul><h6 id="541112-知识文件检索" class="doc-h6">5.4.1.1.1.2 知识文件检索</h6><p class="doc-p">支持用户通过输入发布状态、关键字检索文档库，用户输入文字后点击搜索按钮从知识库表查询相关知识库。</p><h6 id="541113-知识解析及切片" class="doc-h6">5.4.1.1.1.3 知识解析及切片</h6><ol class="doc-list doc-list-paren"><li><span class="doc-list-title">文档解析</span>实现非结构化文档转化为向量知识的管理目标，提供用户从文档上传到知识库构建的全面能力。 <ol class="doc-list doc-list-sub"><li><span class="doc-list-title">支持格式</span>支持用户上传 txt、.md、.doc、.docx、.ppt、.pptx、.xls、.xlsx、.pdf、.jpg、.png、.jpeg 格式的文档。</li><li><span class="doc-list-title">构建流程</span>通过文档解析策略、切分策略、信息抽取及生成策略进行知识文档构建。</li><li><span class="doc-list-title">自动识别</span>支持目录与标题的自动识别；支持自定义输入优化提示词，调用大模型对 md 文件进行结构化处理。</li></ol></li><li><span class="doc-list-title">知识切片</span>知识切片为用户提供多种方式进行文档内容切分，支持将文档内容按语义拆分（将文档内容转为向量后利用 bert 模型拆分文档内容）或者按预设的文本块大小切分成标题、段落、表格、列表等不同类型的文本块，支持用户灵活编辑更改知识切分策略。 <ol class="doc-list doc-list-sub"><li><span class="doc-list-title">切片策略</span>支持根据文本块大小拆分、调用小模型能力按语义拆分、按拆分符自定义拆分三种方式进行文档切片；支持拆分文本块大小自定义；支持拆分符自定义；支持将图片单独拆分。</li><li><span class="doc-list-title">增强策略</span>支持启用指代消解功能进行知识消歧；支持自动进行语法纠错处理；支持自动进行语义补全处理。</li><li><span class="doc-list-title">知识摘要信息</span>支持对文章生成摘要；支持对图片生成摘要；支持自定义图片描述提示词，规范图片描述信息，调用多模态模型自动对文档中对图片生成描述信息，提高知识检索准确度；支持自定义表格提示词，调用大模型对表格自动生成描述信息。</li><li><span class="doc-list-title">识别标题</span>是否自动识别标题，true：调用模型自动识别标题，fasle：不自动识别标题，根据文档的标题标签识别。</li><li><span class="doc-list-title">拆分方式</span>支持根据文本块大小拆分和调用小模型能力按语义拆分两种拆分方式。</li><li><span class="doc-list-title">OCR 识别</span>支持 paddle 单语言图片内容识别和 tesseract 多语言图片识别。</li><li><span class="doc-list-title">图像版面分析</span>支持将文档图像转化为结构化数据，方便后续 ocr、信息提取、数据分析等任务。</li><li><span class="doc-list-title">表格图像最长边</span>支持用户指定图像在传入表格结构模型进行预测的最长长度，如果图像超出预设长度的内容将不会被识别。</li><li><span class="doc-list-title">灰色水印去除</span>支持自动去除文档灰色水印。</li><li><span class="doc-list-title">MLLM 图片描述</span>支持调用多模态模型对文档中的图像生成描述信息。</li><li><span class="doc-list-title">MLLM 表格识别</span>支持调用多模态模型对表格中的图像生成描述信息。</li><li><span class="doc-list-title">MLLM PPT 识别</span>支持调用多模态模型对 PPT 页面内容进行识别生成 markdown 数据。</li><li><span class="doc-list-title">文本块长度</span>支持用户自定义知识切片的最大长度，数值设置越大对于概括性问题的回答生成会更准确，数值设置越小对于检索细节类问题的准确性会更高。</li><li><span class="doc-list-title">生成摘要</span>支持自动生成每个知识切片的摘要。</li><li><span class="doc-list-title">Excel 拆分模式</span>表头行数支持用户自定义 excel 上传的表头行数，0 无表头；1 表头为第一行；2 前两行是表头；-1 使用大模型判断表头。拆分模式支持用户自定义按文本块大小拆分或者按表头+行数据进行拆分。</li><li><span class="doc-list-title">生成 HTML</span>支持将拆分的表格生成为 html 文件。</li><li><span class="doc-list-title">生成 JSON</span>支持将拆分的表格生成为 json 文件。</li><li><span class="doc-list-title">文件类型</span>支持用户自定义拆分的文件类型，normal 为普通表格，qa 为问答类型表格。</li><li><span class="doc-list-title">自定义编号</span>支持自动识别获取 doc 文档自定义编号。</li><li><span class="doc-list-title">PDF 拆分模式</span>common 使用 pdfplumber 组件解析 pdf，ocr 使用 paddle_ocr 解析 pdf。</li><li><span class="doc-list-title">PDF 表格识别</span>lines_strict：只有当线条完全对齐时才会被判断为表格的一部分（精确识别）；lines 通过 pdf 垂直和水平线条来确定边界（模糊识别）。</li></ol></li></ol><h6 id="541114-知识重新构建" class="doc-h6">5.4.1.1.1.4 知识重新构建</h6><p class="doc-p">知识库重新构建，利用向量嵌入模型（bert、word2vec）的能力，将知识库现有存储的文档重新解析分段后，转换成多维向量表示，向量数据导入到用户指定的高性能向量数据库，实现知识库文档的批量重建。</p><h6 id="541115-知识索引" class="doc-h6">5.4.1.1.1.5 知识索引</h6><p class="doc-p">在检索问答时，系统通过检索知识点召回对应的切片，通过<span class="doc-fn">知识索引</span>的二次管理增加知识查找和检索的准确性。</p><p class="doc-subhead">一、语义索引</p><p class="doc-p">语义索引编辑通过知识库管理员手工维护文档分片增强知识库的检索能力。利用自然语言处理技术，自动分析并识别文档中的关键信息段落，按照语义相关性生成初步的索引结构。支持知识库管理员根据实际需求手工更改索引信息，以达到更精确的语义检索效果。</p><p class="doc-subhead">二、实体索引</p><p class="doc-p">实体索引编辑利用NER 识别算法自动分析文档，基于知识概念识别技术将文本内容分解为，如人物、地点、事件、专业术语等结构化的知识实体。支持知识库管理员通过界面添加、删除、合并或重新定义实体，从而提升知识库中实体检索的准确性和效率。</p><h6 id="541116-知识查询" class="doc-h6">5.4.1.1.1.6 知识查询</h6><p class="doc-p"><span class="doc-fn">知识查询</span>为用户提供高效检索当前知识库内容的功能，集成了语义检索、全文检索及混合检索等多种查询能力，知识召回后作为提示词提供给LLM 大模型生成答案使用。</p><ol class="doc-list doc-list-numbered"><li>语义检索：利用work2vec、BERT 等模型将用户查询问题向量化后通过向量的相似度计算检索出高度相关的知识条目。</li><li>全文检索：通过文本预处理提取用户输入的关键词，从知识库海量文档中快速找到与关键词相关文档，根据相关性对检索结果进行排序，为用户提供最相关的文档，相比传统的数据库查询，全文检索速度更快而且能够处理自然语言的复杂查询。</li><li>混合检索：结合上述多种检索方式，对知识库内容进行多路找回并对多种检索结果进行重排，利用综合排序找到用户查询最相关的知识。</li></ol><h5 id="54112-模型接入管理能力" class="doc-h5">5.4.1.1.2 模型接入管理能力</h5><p class="doc-p"><span class="doc-kw">模型接入</span>管理实现大模型（如DeepSeek-V3/R1 671B 模型）、小模型服务（分类、检测等）接入到<span class="doc-kw">AI 能力</span>系统，包括模型名称、版本号、接入时间等，为相关<span class="doc-kw">知识管理</span>、业务应用进行调用。</p><ol class="doc-list doc-list-numbered"><li><span class="doc-fn">模型接入参数配置</span>：支持<span class="doc-kw">模型接入</span>，可为自定义模型修改参数配置，允许用户按照键值对的形式灵活配置模型参数，从而快速对接第三方大模型。</li><li>模型目录：支持自定义模型目录，对模型分类及版本等，以树型结构管理模型。</li><li><span class="doc-fn">模型接入模式</span>：支持单例模式、负载均衡模式接入模型。</li><li><span class="doc-fn">模型运行</span>：支持模型启用、停用。</li><li><span class="doc-fn">模型测试</span>：支持模型在线测试。</li><li><span class="doc-fn">模型日志</span>：支持在线查看模型调用日志。</li></ol><h5 id="54113-ai-agent智能体应用管理" class="doc-h5">5.4.1.1.3 AI agent（智能体）应用管理</h5><p class="doc-p">利用集成大模型简化<span class="doc-kw">智能体</span>的搭建开发过程，支持用户通过知识库、工作流等功能来配置<span class="doc-kw">智能体</span>如何响应用户查询，以保证<span class="doc-kw">智能体</span>的回复符合预期；<span class="doc-kw">智能体</span>平台面向不同技术背景的用户提供了<span class="doc-kw">智能体</span>开发模式，方便各类人员按需构建符合业务需求的<span class="doc-kw">智能体</span>。</p><h6 id="541131-智能体管理" class="doc-h6">5.4.1.1.3.1 智能体管理</h6><p class="doc-p">系统提供统一的<span class="doc-fn">智能体管理</span>功能，开发的<span class="doc-kw">智能体</span>展示在<span class="doc-kw">智能体</span>列表中，并提供完善的系统管理功能。</p><p class="doc-subhead">一、<span class="doc-kw">智能体</span>信息管理</p><p class="doc-p">提供<span class="doc-kw">智能体</span>创建功能，用户输入<span class="doc-kw">智能体</span>名称、描述、选择<span class="doc-kw">智能体</span>应用的图标，以及创建方式即可完成<span class="doc-kw">智能体</span>的创建。<span class="doc-kw">智能体</span>应用图标可以选择本地图标文件，满足用户个性化的需求。支持建议编排、<span class="doc-fn">流程编排</span>、代码编排三种创建方式。</p><p class="doc-subhead">二、版本信息</p><p class="doc-p">针对已创建的<span class="doc-kw">智能体</span>应用提供版本管理功能，对创建的<span class="doc-kw">智能体</span>进行配置修改后会生成历史版本。进入<span class="doc-kw">智能体</span>版本列表，默认会展示当前发布版本的配置信息，包括基础信息、开场白、编排信息。</p><p class="doc-subhead">三、对话记录</p><p class="doc-p">对话记录功能保存了该<span class="doc-kw">智能体</span>应用的历史对话记录，按照列表形式展示。对话记录包括历史对话的来源、时间、标题、消息总数、用户反馈、自定义反馈、标准答案数量等信息。</p><p class="doc-subhead">四、大模型替换</p><p class="doc-p">在平台接入多个大模型的情况下，对通过<span class="doc-fn">流程编排</span>、代码编排方式创建的<span class="doc-kw">智能体</span>可以按需替换已选择的大模型。替换执行后，配置立即生效。</p><p class="doc-subhead">五、<span class="doc-kw">智能体</span>发布</p><p class="doc-p">开发好的<span class="doc-kw">智能体</span>，支持第三方业务系统通过标准API/SDK 及网页端直接访问，实现灵活的外部集成与交互，快速发布到相关应用渠道。</p><h6 id="541132-简易编排" class="doc-h6">5.4.1.1.3.2 简易编排</h6><p class="doc-p"><span class="doc-fn">简易编排</span>采用无代码方式快速的构建<span class="doc-kw">智能体</span>，直接按照业务需求引用知识库、大模型、业务插件等能力通过快速配置实现<span class="doc-kw">智能体</span>的编排开发。配置完成后可以直接进行调试预览以验证<span class="doc-kw">智能体</span>是否满足实际业务需求。</p><ol class="doc-list doc-list-paren"><li><span class="doc-list-title">基本信息</span>基本信息设置包括应用的名称、描述、图标，这些基本信息既能帮助开发者更好地管理应用，也方便使用者快速查询和定位所需要的应用。</li><li><span class="doc-list-title">大模型配置</span>该功能主要为<span class="doc-kw">智能体</span>配置使用的基础大模型，包括问答模型、历史记录、温度、回复上限以及对话是否允许图片输入、对话是否允许语音输入，对大模型回答问题进行规范限定。</li><li><span class="doc-list-title">角色指令</span>角色指令决定了AI <span class="doc-kw">智能体</span>在应用中的具体表现和行动准则。通过角色指令，用户能够自定义AI <span class="doc-kw">智能体</span>的角色设定、所具备的能力、应用场景、工具使用的限制条件以及输出的格式样式等，从而实现对AI <span class="doc-kw">智能体</span>行为的精确控制。通过在角色指令中引用记忆和工具，可以实现精准调用。</li><li><span class="doc-list-title">记忆</span><ul class="doc-list doc-list-bullet"><li>系统支持通过创建变量来保存用户个人信息，例如语言偏好等，并让<span class="doc-kw">智能体</span>记住这些特征，使回复更加个性化。</li><li>将数据存储在结构化表中。例如，创建一个数据库来存储阅读笔记，包括书名、阅读进度和个人注释。Agent 可以通过查询数据库中的数据来提供更准确的答案。</li><li>用户可以定制表结构，并设定字段名称、字段属性、字段描述等，用来存储和管理结构化数据。支持用户通过自然语言方式对数据库中的数据进行增删改查。</li><li>储存和终端用户有关的重要信息、长期记忆，由用户定制记忆时长。</li><li>开启记忆片段功能，能够根据记忆片段prompt 在用户会话过程中保存用户提及的个人信息。</li><li>短期记忆支持配置参考对话轮数，以应对不同模型的上下文长度限制，大模型依据短期记忆的学习，提供符合场景的输出。</li></ul></li><li><span class="doc-list-title">开场白</span>支持自定义Agent 应用的开场话术配置，确保用户在初次启动应用时能够立即看到温馨的开场语，从而提升用户界面的亲和力和使用体验的个性化。此外，系统还集成了大模型功能，能够依据应用的详细描述信息自动生成个性化的开场白，为开发者节省时间并提供初始内容框架。开发者可随后根据业务的具体需求和场景，对这些自动生成的开场白进行微调与优化，以达到最佳的用户沟通效果。</li><li><span class="doc-list-title">对话引导</span><ol class="doc-list doc-list-sub"><li><span class="doc-list-title">推荐问</span>AI 应用开发管理平台支持灵活配置推荐问题，作为用户首次启动应用时的对话引导机制。提供模型自动生成与完全自定义两种模式，以满足不同开发者的需求。在默认模式下，系统会自动根据用户最近的三次对话记录，特别是最后一次回复的内容，智能推荐三个与之紧密相关的提问建议，旨在无缝引导用户深入探索应用功能。而对于追求个性化体验的开发者，自定义模式则提供了更大的灵活性。您不仅可以设定用于生成推荐问题的参考对话轮数，还能自定义Prompt（提示语），以精确控制推荐问题的生成逻辑，确保它们完全符合应用的业务场景和用户需求。适应特定的使用场景或用户偏好，增强推荐问题的准确性和相关性，支持借助先进的大模型技术来进一步提升，支持通过大模型自动生成推荐问题，允许开发者在此基础上根据业务需求进行细致的调整和优化，确保最终呈现给用户的推荐问题既精准又贴心。</li><li><span class="doc-list-title">追问</span>支持两种灵活的追问设置方式：一是利用大模型技术，根据实时对话内容智能生成追加问题，确保对话的连续性和深度；二是允许开发者自定义Prompt（提示语），并在此基础上配置追问。同时，自定义模式下还能设定追问所参考的对话轮数，从而精准控制追问内容的关联性和针对性，以提供更加个性化且高效的对话体验。</li></ol></li><li><span class="doc-list-title">问答模型</span>问答模型的选择是构建高效、精准的智能问答系统的关键环节，用于总结生成回复结果。考虑到不同模型在理解、分析和生成回复方面的能力差异，开发者根据不同场景和需求，支持选择并使用合适的私有化部署模型作为应用的回答模型，以优化总结回复生成的结果，从而提升用户满意度和应用价值。同时，为支持用户自调优实现场景化的机制问答效果，问答模型可选择自定义模型（用户SFT 模型、用户开发上传或外部下载模型）。</li><li><span class="doc-list-title">应用调试</span>支持对话式调试AI 原生应用，直观测试性能与效果。支持采用数据干预，向应用中融入特定知识。同时，开发者能够方便地通过用户行为，如点赞、点踩来反馈数据和线上对话抽取，例行监控应用端到端的回复内容，对不符合标准的答案及时进行线上干预，增强应用的安全性和可控性。</li><li><span class="doc-list-title">应用发布</span>支持一键发布AI 原生应用，支持第三方业务系统通过标准API/SDK 及网页端直接访问。</li></ol><h6 id="541133-流程编排" class="doc-h6">5.4.1.1.3.3 流程编排</h6><p class="doc-p"><span class="doc-fn">流程编排</span>基于工作流方式构建<span class="doc-kw">智能体</span>的核心业务处理逻辑。工作流是一系列可执行指令的集合，用于实现业务逻辑或完成特定任务，它为<span class="doc-kw">智能体</span>的数据流动和任务处理提供了一个结构化框架。工作流的核心在于将大模型的强大能力与特定的业务逻辑相结合，通过系统化、流程化的方法来实现高效、可扩展的AI 应用开发。系统提供可视化画布，通过托拉拽方式选择系统预置的基础组件，以及各类业务插件建立工作流，灵活的实现特定的<span class="doc-kw">智能体</span>业务功能。</p><ol class="doc-list doc-list-paren"><li><span class="doc-list-title">信息收集节点</span>你可以通过信息收集节点向用户提问，等待用户回复，并将用户回复内容及抽取的信息作为输出参数。节点输入为输入给该节点的参数，可以被引用到下面的提问内容中；输出为该节点输出的参数，包括用户回复的信息、对话历史及参数抽取的结果，可以被后续节点引用。</li><li><span class="doc-list-title">消息节点</span>用户可以通过按模板配置的格式或者直接返回参数值两种不同的回复模式选择来使用消息节点。支持用户通过上游节点信息，进行处理并生成结果，同时允许用户配置输入参数、基础设置如对话模型、历史记录、温度、回复上限，以及系统提示词、引用内容模版、引用内容模版提示词，确保<span class="doc-kw">智能体</span>能够以最优状态完成工作流的最终输出。</li><li><span class="doc-list-title">全局跳转节点</span>支持话题的跳转及拉回，当用户回应不符预期，可跳转回全局意图，或使用知识库、闲聊作为兜底回复，再拉回到原话题，实现多轮对话场景下的话题切换。</li><li><span class="doc-list-title">大模型配置组件</span>该功能主要为<span class="doc-kw">智能体</span>配置使用的基础大模型，包括问答模型、历史记录、温度、回复上限以及对话是否允许图片输入、对话是否允许语音输入，对大模型回答问题进行规范限定。</li><li><span class="doc-list-title">知识库调用组件</span><ul class="doc-list doc-list-bullet"><li>支持将外部知识库集成至应用中，利用检索增强生成（RAG）架构，为应用提供外部知识，从而显著提升应用性能。知识内容源自用户上传至知识库，允许用户同时选择多个文档库作为查询资源，实现广泛的信息检索。</li><li>在文档回答策略层面，支持语义检索、全文检索及二者结合的混合检索模式。</li><li>语义检索通过深入理解查询意图，精准找回相关的知识片段；全文检索则侧重于关键词匹配，快速定位含有关键词的知识切片；混合检索则巧妙融合这两种方法，兼顾深度与广度。</li><li>检索完成后，系统会依据匹配度对检索到的知识切片进行智能排序，最终输出最相关、最有价值的切片内容，为用户呈现精准且全面的信息。</li><li>支持图表（折线图、柱状图、饼图等）解析和公式解析，允许用户根据文档中的图表和公式进行提问，模型答复时可追溯到相应的图表和公式。</li></ul></li><li><span class="doc-list-title">数据库挂载组件</span>通过数据库挂载，开发者可以将数据库中的数据表与应用进行绑定，以支持回答用户数据相关的问题，并进一步支持后续的选表、计算等操作，实现复杂的数据操作和用户交互需求，为用户提供丰富、准确的数据信息服务。支持接入不同格式的数据源，可直接上传数据表，通过上传Excel、csv 等格式数据表创建数据库；也可直连数据库，通过与已有业务建立链接创建数据库。</li><li><span class="doc-list-title">代码组件</span>该组件主要实现<span class="doc-kw">智能体</span>工作流的自定义逻辑处理和灵活输出目标，提供<span class="doc-kw">智能体</span>工作流编排的代码组件能力。支持用户通过输入、编写代码逻辑以及输出三个部分进行操作，包括手工输入或引用上游节点输出、定义自定义代码逻辑，以及根据代码逻辑进行配置输出，确保<span class="doc-kw">智能体</span>能够执行复杂的自定义逻辑并生成相应的输出结果。</li></ol>',45)])]))}}),Pi={class:"doc-html"},xi=U({__name:"02-地图引擎能力",setup(c){return(f,t)=>(l(),d("article",Pi,[...t[0]||(t[0]=[Z('<aside class="doc-summary"><div class="doc-summary-title">本章要点</div><ul class="doc-summary-list"><li>地图引擎封装服务</li><li>高精地图引擎服务</li><li>交通仿真引擎服务</li></ul></aside><p class="doc-p doc-lead"><span class="doc-kw">地图引擎</span>能力为交通应急指挥提供“一张图”时空底座，把道路、车辆、事件、资源全部叠加到地图上实时可视、可算、可推演。<span class="doc-kw">地图引擎</span>能力主要包括地区引擎封装服务、高精<span class="doc-kw">地图引擎</span>服务和<span class="doc-kw">交通仿真</span>引擎服务。</p><h5 id="54121-地图引擎封装服务" class="doc-h5">5.4.1.2.1 地图引擎封装服务</h5><h6 id="541211-webapi" class="doc-h6">5.4.1.2.1.1 WebAPI</h6><p class="doc-p">提供多个API 服务：</p><ol class="doc-list doc-list-numbered"><li>根据<span class="doc-fn">里程查询车道线</span>信息：根据高速编码、桩号等参数，获取车道线、车道面数据。</li><li><span class="doc-fn">轨迹纠偏</span>服务：提供车道吸附功能，将高精度定位点吸附到车道上，实现精准的车道级定位，解决高精度定位点与车道偏离的问题。</li><li><span class="doc-fn">桩号查询坐标</span>接口：根据桩号、高速编码等参数，获取对应坐标，精度米级。</li><li><span class="doc-fn">桩号经纬度转换</span>服务：根据桩号、高速编码等参数，获取对应坐标，精度百米级。</li><li><span class="doc-fn">封闭车道</span>服务：根据高速编码、桩号等参数，获取车道线、车道面数据。</li><li><span class="doc-fn">坐标绑定桩号</span>：根据坐标获取桩号信息。</li><li><span class="doc-fn">POI 兴趣点</span>服务组件：提供<span class="doc-fn">POI 兴趣点</span>服务，业务系统可以通过该服务展示附近的加油站、服务区等兴趣点。</li><li>道路级/车道级<span class="doc-fn">路径规划</span>服务：提供道路和车道级<span class="doc-fn">路径规划</span>服务。</li><li>高程实时获取API：根据经纬度获取路面高程。</li></ol><h6 id="541212-慧眼大数据" class="doc-h6">5.4.1.2.1.2 慧眼大数据</h6><p class="doc-p">对高速公路、隐患点重点区域进行大数据统计分析，分析内容主要包括：</p><ol class="doc-list doc-list-numbered"><li><span class="doc-fn">重点区域实时车流</span>：查询重点区域实时定位人数（去重）。</li><li>高速公路重点区域未来1 天分小时<span class="doc-fn">客流预测</span>：查询高速公路某重点区域未来1 天分小时人流量预测。</li><li>重点区域<span class="doc-fn">实时热力</span>：查询重点区域网格实时定位热力。</li><li>重点区域<span class="doc-fn">当日累计客流量</span>：查询重点区域（不大于100 平方千米）<span class="doc-fn">当日累计客流量</span>。</li></ol><h6 id="541213-交通大数据" class="doc-h6">5.4.1.2.1.3 交通大数据</h6><p class="doc-p">提供交通情况的大数据统计分析，分析内容主要包括：</p><ul class="doc-list doc-list-bullet"><li>高速三急一速指数分析：查询高速三急一速数据，天级。</li><li>区域内所有路段详情接口：获取节点（以目标节点为终点）相关的路段信息。</li><li>获取指定辖区拥堵预警列表：查询某辖区的拥堵预警列表，支持按高疑似拥堵、异常拥堵、常规拥堵分类提取列表，查询拥堵数据的基本详情。</li><li>获取指定拥堵预警的拥堵详情：查询指定的拥堵预警拥堵详情数据，高疑似事件、异常拥堵、常规拥堵的详情数据。</li><li>获取指定拥堵预警的拥堵指标曲线数据：查询指定拥堵预警的交通拥堵指数、平均速度和拥堵里程的交通指标曲线数据。</li></ul><h5 id="54122-高精地图引擎服务" class="doc-h5">5.4.1.2.2 高精地图引擎服务</h5><h6 id="541221-地点" class="doc-h6">5.4.1.2.2.1 地点</h6><p class="doc-p">提供各类地点检索服务，具体包括：</p><ol class="doc-list doc-list-numbered"><li><span class="doc-fn">POI 检索</span>：允许设置检索城市、检索圆形区域内POI、检索矩形区域内POI、检索结果详情。根据图层名称、地名地址关键字、搜索范围、POI 类型、坐标参考、属性或空间过滤查询、分页参数，获取符合要求的POI 信息。</li><li><span class="doc-fn">AOI 检索</span>：提供AOI (Area of Interest) 兴趣面信息的检索服务，允许检索圆形区域内AOI、检索矩形区域内AOI、检索结果详情。根据地名地址关键字、搜索范围、属性或空间过滤查询、分页参数，获取符合要求的AOI 信息。</li><li><span class="doc-fn">路网检索</span>：提供道路名称检索服务，根据用户指定的道路名称，得到指定道路对应的道路空间几何数据，返回的道路信息道路空间几何数据，并支持路网按照省市行政区划过滤查询。</li><li><span class="doc-fn">地理编码</span>：可根据道路名称或中文地址或poi 名称转换为空间坐标，同时支持以RESTful、WebService 服务接口提供服务。</li><li><span class="doc-fn">逆地理编码</span>：提供将空间<span class="doc-fn">坐标转换</span>为地址位置描述的功能，同时提供坐标经纬度定位省市区三级行政区划名称。支持返回坐标点附近200 米内的POI、道路和路口信息，每类信息最多返回5 条，按照距离指定点的距离排序。支持以RESTful 接口提供服务。</li><li><span class="doc-fn">行政区划定位</span>：本接口提供行政区划信息定位行政区划中心点坐标。</li><li><span class="doc-fn">行政区边界查询</span>：提供行政区划信息查询行政区划边界数据。支持输入“省市区县名称”返回相关边界。</li><li><span class="doc-fn">坐标转换</span>：提供WGS84 坐标系、国测局坐标系等转换为互联网坐标系，支持批量矢量数据的<span class="doc-fn">坐标转换</span>，支持以RESTful 接口提供服务。</li><li><span class="doc-fn">桩号定位</span>：选择路段后，输入此路段内的桩号信息进行位置定位。便于在不清楚具体经纬度信息的情况下，进行位置定位查询相关信息。</li><li><span class="doc-fn">缓冲区分析</span>：按照设定的距离条件，围绕这组要素形成具有一定范围的多边形实体，给定点、线、面和缓存半径返回缓冲区边界坐标集合，从而实现数据在二维空间扩展的信息分析，支持生成平头缓冲区、圆头缓冲区、单侧缓冲区、双侧缓冲区。支持以RESTful 接口提供服务。</li><li><span class="doc-fn">实时路况</span>：通过栅格瓦片方式提供<span class="doc-fn">实时路况</span>服务，通过服务直观展示路况红黄绿状态信息，2 分钟更新一次。</li></ol><h6 id="541222-路线" class="doc-h6">5.4.1.2.2.2 路线</h6><p class="doc-p">提供<span class="doc-fn">路线规划</span>、空间计算等服务，具体包括：</p><ol class="doc-list doc-list-numbered"><li><span class="doc-fn">路线规划</span>：通过给定起终点坐标，选择给定途径点坐标、避让区域、出行模式、<span class="doc-fn">路线规划</span>策略，以及是否展示详细信息。返回<span class="doc-fn">路线规划</span>的坐标集合以及对应的<span class="doc-fn">路线规划</span>策略。</li><li><span class="doc-fn">等时到达圈</span>：提供以坐标为中心点，在一定时间内所能到达的多边形范围，支持驾车、步行、骑行三种模式的等时到达的服务，为城市管理与指挥调度提供最优到达时间分析。</li><li><span class="doc-fn">空间几何图形计算</span>：提供地图上任意几何图形返回计算<span class="doc-kw">数据服务</span>，实现基于空间位置的自定义范围的几何分析与计算。</li></ol><h6 id="541223-轨迹" class="doc-h6">5.4.1.2.2.3 轨迹</h6><p class="doc-p">提供<span class="doc-fn">轨迹纠偏</span>和批量算路功能：</p><ol class="doc-list doc-list-numbered"><li><span class="doc-fn">轨迹纠偏</span>：用于对一段连续长轨迹进行纠偏绑路、如：对一辆车一个行程或一天的轨迹进行纠偏并计算里程，并返回纠偏后的信息。</li><li><span class="doc-fn">批量路算</span>：用户需要给定多个起终点坐标，可选择给定出行模式、<span class="doc-fn">路线规划</span>策略，最后仅返回多个<span class="doc-fn">路线规划</span>的时间和距离。</li></ol><h5 id="54123-交通仿真引擎服务" class="doc-h5">5.4.1.2.3 交通仿真引擎服务</h5><h6 id="541231-仿真方案管理" class="doc-h6">5.4.1.2.3.1 仿真方案管理</h6><ol class="doc-list doc-list-paren"><li>仿真方案列表分页查询：获取各类仿真类型的实时事件和模板列表查询。</li><li>新增仿真方案：支持新增仿真方案。</li><li>编辑仿真方案：支持编辑仿真方案。</li><li>删除仿真方案：支持删除仿真方案。</li><li>复制仿真方案：支持复制仿真方案。</li></ol><h6 id="541232-仿真运行管理" class="doc-h6">5.4.1.2.3.2 仿真运行管理</h6><p class="doc-p">对仿真方案运行过程进行管理，支持对运行中的方案进行暂停、恢复、进度拖动等管理。</p><h6 id="541233-宏观仿真管理" class="doc-h6">5.4.1.2.3.3 宏观仿真管理</h6><p class="doc-p">支持对自定义区域进行列表查询、新增区域分析、修改区域分析、删除区域分析等操作，支持预测明细，支持自定义区域的拥堵列表查询。</p><h6 id="541234-事件与模板管理" class="doc-h6">5.4.1.2.3.4 事件与模板管理</h6><p class="doc-p">支持查询各类仿真类型的实时事件和模板，支持新增事件模板，支持导入事件模板，支持编辑事件模板，支持删除事件或模板。</p>',31)])]))}}),$i={class:"doc-html"},Si=U({__name:"03-视频监控能力",setup(c){return(f,t)=>(l(),d("article",$i,[...t[0]||(t[0]=[Z('<aside class="doc-summary"><div class="doc-summary-title">本章要点</div><ul class="doc-summary-list"><li>视频应用</li></ul></aside><p class="doc-p doc-lead">在<span class="doc-kw">应急指挥调度</span>中，<span class="doc-kw">视频监控</span>能力作为“可视指挥”的核心支撑，面向用户提供<span class="doc-fn">实时预览</span>、<span class="doc-fn">云台控制</span>、录像回放等一站式视频应用服务，确保突发事件现场画面实时可达、关键信息实时可判。</p><h5 id="54131-视频应用" class="doc-h5">5.4.1.3.1 视频应用</h5><h6 id="541311-实时预览" class="doc-h6">5.4.1.3.1.1 实时预览</h6><p class="doc-p">提供视频<span class="doc-fn">实时预览</span>功能，通过根据通道编码获取视频通道详细信息接口，根据视频通道编号获取视频通道详细信息，视频通道编号可以通过获取。通过获取通道预览取流URLv2 接口，实现<span class="doc-fn">实时预览</span>或者使用标准的GUI 播放工具进行<span class="doc-fn">实时预览</span>。</p><h6 id="541312-云台控制" class="doc-h6">5.4.1.3.1.2 云台控制</h6><p class="doc-p">视频应用提供<span class="doc-fn">云台控制</span>能力，包括设置预置点、调用预置点、查询预置点、删除预置点、云台操作等功能。</p><ul class="doc-list doc-list-bullet"><li>设置预置点：可根据视频通道编号进行设置预置点信息操作，包括预置点名称、预置点编号。</li><li>调用预置点：可根据视频通道编号，指定预置点编号，进行跳转到指定预置点位置操作。</li><li>查询预置点：可根据视频通道编号进行查询预置点信息操作。</li><li>删除预置点：可删除预置点。</li><li>云台操作：可对云台方向、转向速度进行控制，如左转、右转、上转、下转、焦距变大、焦距变小等控制；云台速度支持1-100 的速度范围。</li></ul><h6 id="541313-手动抓图" class="doc-h6">5.4.1.3.1.3 手动抓图</h6><p class="doc-p">支持在查看录像回放视频过程中一键抓取当前画面为图片。生成的图片支持下载保存，真正做到“看见即取证，取证即归档”。</p><h6 id="541314-用户权限查询" class="doc-h6">5.4.1.3.1.4 用户权限查询</h6><p class="doc-p">根据<span class="doc-fn">用户权限查询</span>视频列表，仅向用户展示有权限的视频，对于无权限的视频无法查看。</p>',12)])]))}}),qi={class:"doc-html"},Ai=U({__name:"04-融合通信能力",setup(c){return(f,t)=>(l(),d("article",qi,[...t[0]||(t[0]=[Z('<aside class="doc-summary"><div class="doc-summary-title">本章要点</div><ul class="doc-summary-list"><li>视频会议</li></ul></aside><p class="doc-p doc-lead"><span class="doc-kw">融合通信</span>能力为应急指挥提供“语音、视频、消息、会议”一站式融合调度服务，让指挥人员通过单一门户即可对现场、车载、单兵、会议室等多终端进行统一呼叫、会商与录制，确保指令秒级下达、现场实时可视、过程全程留痕。</p><h5 id="54141-视频会议" class="doc-h5">5.4.1.4.1 视频会议</h5><p class="doc-p">视频会议主要包括<span class="doc-fn">创建会议</span>、<span class="doc-fn">取消预约会议</span>、<span class="doc-fn">编辑预约会议</span>、<span class="doc-fn">查询会议列表</span>、<span class="doc-fn">查询会议详情</span>、<span class="doc-fn">查询录制列表</span>、<span class="doc-fn">查询录制详情</span>、查询录制文件下载链接等功能。</p><h6 id="541411-创建会议" class="doc-h6">5.4.1.4.1.1 创建会议</h6><p class="doc-p">支持用户创建立即会议和预约会议。支持创建语音会议和视频会议。会议内容包括会议主题、会议开始时间、会议类型、与会者列表等内容。会议时长最高支持1440 分钟（24 小时），最小15 分钟，默认30 分钟。</p><h6 id="541412-取消预约会议" class="doc-h6">5.4.1.4.1.2 取消预约会议</h6><p class="doc-p">支持取消已预约的会议，企业管理员可以取消本企业下用户创建的会议，普通用户只能取消自己创建的会议。默认已召开的会议不能取消。</p><h6 id="541413-编辑预约会议" class="doc-h6">5.4.1.4.1.3 编辑预约会议</h6><p class="doc-p">支持修改已预约的会议。支持对会议主题、会议开始时间、会议类型、与会者信息进行修改。修改后系统自动生成“变更单”，推送差异内容至所有参会人终端。</p><h6 id="541414-查询会议列表" class="doc-h6">5.4.1.4.1.4 查询会议列表</h6><p class="doc-p">支持查询尚未结束的会议。管理员可以查询所有的会议，普通用户仅能查询自己创建或者需要参加的会议。默认查询权限范围内正在召开或还未召开的会议。只能查询尚未结束的会议（既正在召开的会议和已预约还未召开的会议）。</p><h6 id="541415-查询会议详情" class="doc-h6">5.4.1.4.1.5 查询会议详情</h6><p class="doc-p">支持查询会议的详情。管理员可以查询所有会议的详情，普通用户仅能查询自己创建或者需要参加的会议详情。只能查询尚未结束的会议详情（既正在召开的会议和已预约还未召开的会议）。</p><h6 id="541416-查询录制列表" class="doc-h6">5.4.1.4.1.6 查询录制列表</h6><p class="doc-p">支持查询会议录制列表。管理员可以查询所有的录制，普通用户仅能查询自己创建的会议的录制。支持通过搜索会议主题、会议预约人与会议ID 作为条件进行查询。支持按时间进行查询。</p><h6 id="541417-查询录制详情" class="doc-h6">5.4.1.4.1.7 查询录制详情</h6><p class="doc-p">支持查询某个会议录制的详情。管理员可以查询所有的录制，普通用户仅能查询自己创建的会议的录制。支持通过搜索会议主题、会议预约人与会议ID 作为条件进行查询。支持按时间进行查询。</p><h6 id="541418-下载录制文件" class="doc-h6">5.4.1.4.1.8 下载录制文件</h6><p class="doc-p">支持下载某个录制文件，支持下载辅流、高清和标清文件，当会议录制时长超过3 小时将拆分成多个文件，有多个下载链接。</p>',20)])]))}}),Ri={class:"doc-html"},Ti=U({__name:"05-融合服务",setup(c){return(f,t)=>(l(),d("article",Ri,[...t[0]||(t[0]=[Z('<aside class="doc-summary"><div class="doc-summary-title">本章要点</div><ul class="doc-summary-list"><li>服务接口上架管理</li><li>服务授权管理</li><li>服务日志管理</li><li>服务网关管理</li></ul></aside><p class="doc-p doc-lead">应急调度涉及了多个外部系统如交通集团、省应急厅、广东省交通运输厅一体化数字平台等的能力、数据的交互，内部也涉及指挥调度、应急预案、值班值守等多个子系统的能力集成，涉及的能力接口、数据接口等接口服务众多，通过统一<span class="doc-kw">融合服务</span>实现内外部服务共享对接的规范管理，服务对接双耦合，集约安全管控，避免多网状交互，提升效率。</p><h5 id="54151-服务接口上架管理" class="doc-h5">5.4.1.5.1 服务接口上架管理</h5><p class="doc-p">服务接口管理维护厅局的内外部接口服务，包括服务的注册、测试、发布等功能，满足厅局不同业务场景的接口注册发布需求。</p><ol class="doc-list doc-list-paren"><li>服务接口注册信息：管理服务接口信息，包括服务名称、标识码、服务ID、服务状态、服务提供方、协议、接口地址、更新时间、更新人。</li><li>服务接口详情：包括基本信息：服务名称、标识码、服务提供方、更新人、更新时间、服务ID、资源简介，以及接口信息：协议类型、支持协议、接口地址、接口原始地址、接口来源系统、端口、支持格式、请求方式、数据更新频率、调用频次限制。接口参数说明、返回参数说明、服务调用指南。</li><li>第三方服务接口配置信息：提供配置页面，支持将第三方接口注册，成功注册后，第三方可通过<span class="doc-kw">融合服务</span>系统统一的对外服务进行接口调用。</li><li>服务适配管理：支持以下类型的<span class="doc-kw">数据服务</span>：Web 服务、JMS 服务、HTTP/REST 服务。</li><li>服务接口测试配置信息：支持通过手动输入调用参数，测试服务API接口的连通性，展示接口服务返回的内容，自动反馈服务的稳定性等参数，并提供错误码表对照。</li><li>服务接口状态管理信息：支持对服务API 进行停用\\启用。操作时，需录入停用\\启用API 的操作原因。停用后，该服务将暂时失效，无法被任何系统调用，直到下次重新启用。不提供删除服务API 功能。</li><li><span class="doc-kw">数据服务</span>接口封装管理：支持对数据进行API 封装，并以API 的方式进行数据共享调用。支持两种方式：单表构建、多表构建。自定义生成服务接口信息，支持单实例中，自定义SQL 语句生成服务接口。</li></ol><h5 id="54152-服务授权管理" class="doc-h5">5.4.1.5.2 服务授权管理</h5><p class="doc-p"><span class="doc-fn">服务授权管理</span>是对应用系统的服务注册及服务调用权限进行集中管理。为应急相关业务内外部系统模块提供统一API 服务，调用服务时需先进行接入鉴权，鉴权管理功能对服务请求方是否合法进行鉴别和确认，通过鉴权认证，平台能快速确认服务请求方身份，确定是否有该服务的访问权限。服务权限管理实现对服务授予应用系统调用权限的统一管理，其中服务为服务接口管理中已配置的服务。服务权限管理主要包括：</p><ol class="doc-list doc-list-paren"><li><span class="doc-fn">服务授权管理</span>：提供页面管理<span class="doc-kw">服务授权</span>记录，可选择需授权的服务（支持多选，字段包括：服务名称、标识码），支撑系统自动生成该应用系统的Token，并对该应用系统授权所选择的多个服务，生成访问凭证。</li><li>服务访问控制：支持使用Service id、Pass id、Pass Token 和App secret作为应用调用服务的通行证，对服务请求方是否合法进行鉴别和确认，以控制<span class="doc-kw">数据服务</span>接口的访问者。</li><li>服务范围管理：实现支持灵活配置特定调用方在请求接口时的返回数据范围，可按调用方所属区域，或所限制的日期范围等，返回对应行的数据。</li></ol><h5 id="54153-服务日志管理" class="doc-h5">5.4.1.5.3 服务日志管理</h5><p class="doc-p">服务日志模块面向运维人员提供服务调用明细日志检索和集中展示的工具。服务日志模块能够展示平台中各API 服务接口被调用的系统日志信息，覆盖成功、失败、异常等所有各类调用结果情况，为运维人员展示日志详细信息，方便出现系统调用异常时，运维人员进行日志跟踪排查，提高定位问题的效率。</p><h5 id="54154-服务网关管理" class="doc-h5">5.4.1.5.4 服务网关管理</h5><p class="doc-p"><span class="doc-fn">服务网关管理</span>，作为<span class="doc-kw">融合服务</span>的核心子模块，支持对服务接口、数据接口的鉴权控制、路由分配等能力，包括有：授权访问管理、数据总线模块、接入适配管理、访问控制管理、路由调度管理、<span class="doc-fn">数据交换</span>网关设置。</p><ol class="doc-list doc-list-paren"><li>授权访问管理：网关支持使用Service id、Pass id、Pass Token 和App secret作为网关鉴权的组合体，对调用访问进行鉴权和授权。</li><li>服务总线：支持服务总线主机名/ 地址和端口的配置、检测、保存功能。</li><li>接入适配管理：不仅支持基于本地能力和<span class="doc-kw">数据资源</span>进行封装生成的服务接口，同时支持接入第三方的<span class="doc-kw">数据服务</span>接口，实现接口透传。</li><li>访问控制管理：支持对服务请求方和服务接口的身份合法性进行验证，对服务请求方发出的请求进行权限检查，对于越权访问予以拒绝。</li><li>路由调度管理：支持实现代理访问模式，支持将服务请求发往服务接口所挂接的资源服务总线，由资源服务总线代理访问服务接口，并返回结果。</li></ol>',13)])]))}}),Oi={class:"doc-html"},Fi=U({__name:"06-应急数据采集与交换",setup(c){return(f,t)=>(l(),d("article",Oi,[...t[0]||(t[0]=[Z('<aside class="doc-summary"><div class="doc-summary-title">本章要点</div><ul class="doc-summary-list"><li>工作流定义</li><li>数据采集</li><li>数仓管理</li><li>数源管理</li><li>应用系统管理</li></ul></aside><p class="doc-p doc-lead">应急<span class="doc-fn">数据采集</span>与交换需要具备收集、处理和传输应急管理相关的数据等基本功能，包含但不限于多源数据的采集、清洗与预处理、<span class="doc-kw">数据质量</span>的监控与管理。主要模块设计如下：</p><h5 id="54161-工作流定义" class="doc-h5">5.4.1.6.1 工作流定义</h5><p class="doc-p"><span class="doc-fn">工作流定义</span>指通过<span class="doc-fn">工作流定义</span>管理，支撑数据运营人员进行数据运营、<span class="doc-kw">数据治理</span>、数据开发的数据处理过程。数据运营人员根据业务需求，将数据处理拆分多个节点，按照节点处理顺序，构建数据<span class="doc-fn">工作流定义</span>，定时调度或运行工作流，最终得到所需的数据结果。系统展示已定义的工作流信息。</p><h6 id="541611-工作流画布管理" class="doc-h6">5.4.1.6.1.1 工作流画布管理</h6><p class="doc-p">工作流画布管理支持数据运营人员通过DAG 画布页面，拖拽预置组件，配置数据处理逻辑，形成节点间依赖的数据<span class="doc-fn">工作流定义</span>。同时支持管理已有的工作流（定时、上线、编辑、删除），支持<span class="doc-fn">工作流定义</span>按照业务属性（以“项目”作为分类）分组管理。</p><ol class="doc-list doc-list-paren"><li>DAG 画布可视化配置：支持数据运营人员通过可视化画布界面，进行节点拖拽、布局调整，直观呈现数据工作流的整体结构；提供节点样式、连线样式自定义，清晰区分不同类型节点及依赖关系</li><li>预置组件管理：包含丰富的预置数据处理组件（如数据抽取、清洗、转换、加载等类型）；支持组件属性配置（如数据源地址、处理规则、输出格式等）；提供组件库的增删、更新维护功能。</li><li>节点依赖关系定义：支持通过画布连线方式设置节点间的上下游依赖；自动检测并提示循环依赖等不合理依赖关系；可视化展示依赖链条，支持依赖关系的编辑与删除。</li><li>工作流基础操作：支持新建工作流（从空白画布开始配置）、编辑已有工作流（修改节点、依赖或组件属性）、删除工作流（含二次确认机制）。</li><li>工作流生命周期管理：提供上线/下线状态切换功能，上线后按配置执行，下线后暂停运行；明确上线生效规则（如立即生效、指定时间生效）；记录工作流状态变更历史。</li><li>定时调度配置：支持为工作流设置定时执行规则，包括调度时间（具体时刻）、执行周期（如每日、每周、每月、自定义CRON 表达式）；提供调度任务的启用/禁用开关；支持依赖前置任务完成后触发执行。</li><li>项目分组管理：支持创建、编辑、删除“项目”作为业务分类单元；允许将工作流关联至指定项目，实现按项目聚合展示；支持项目级权限控制（如查看、编辑权限分配）。</li><li>工作流运行监控：实时展示工作流当前运行状态（运行中、成功、失败、等待）；提供节点级运行状态详情（单个节点的执行结果、耗时）；记录工作流执行日志（执行时间、触发方式、错误信息）</li></ol><h6 id="541612-数据同步组件" class="doc-h6">5.4.1.6.1.2 数据同步组件</h6><p class="doc-p">数据同步组件主要用于配置、管理数据库之间的数据同步任务，支持配置数据同步的规则，支持结构化数据的全量、增量同步。</p><h6 id="541613-数据对账组件" class="doc-h6">5.4.1.6.1.3 数据对账组件</h6><p class="doc-p">在数据接入、数据共享的数据传输过程中，可能存在两端数据不一致的情况。为了保证数据接入的准确性，以及数据共享的准确性，需要对两端的数据进行对账，并做出告警的动作，数据对账组件通过配置数据对账规则，系统抽取解析两端数据，并根据规则进行数据对账分析。支持对账模式：全量对账。全量对账：通过计算两侧的数据行数，比对数据行数。</p><h6 id="541614-数据质检组件" class="doc-h6">5.4.1.6.1.4 数据质检组件</h6><p class="doc-p"><span class="doc-kw">数据质检</span>组件支持根据质检规则，配置<span class="doc-kw">数据质检</span>，并进行问题数据分拣。</p><h6 id="541615-shell-组件" class="doc-h6">5.4.1.6.1.5 SHELL 组件</h6><p class="doc-p">支持Shell 任务类型用于创建Shell 类型的任务并执行一系列的Shell 脚本。</p><h6 id="541616-sql-组件" class="doc-h6">5.4.1.6.1.6 SQL 组件</h6><p class="doc-p">SQL 组件用于定义SQL 任务类型的工作流节点，用于连接数据库并执行相应自定义SQL 脚本。</p><h6 id="541617-python-组件" class="doc-h6">5.4.1.6.1.7 PYTHON 组件</h6><p class="doc-p">PYTHON 组件使用TBDS、MRS 的PAAS 能力，用于创建Python 类型的任务并执行一系列的Python 脚本，进行数据处理、分析任务。</p><h6 id="541618-流程控制组件" class="doc-h6">5.4.1.6.1.8 流程控制组件</h6><p class="doc-p">流程控制组件支持对工作流中的组件进行流程控制操作，控制类型有子流程、依赖、条件判断。</p><h6 id="541619-任务调度配置" class="doc-h6">5.4.1.6.1.9 任务调度配置</h6><p class="doc-p">任务调度配置支持对构建的工作流任务进行调度时间配置，配置时间支持精确到年、月、日、时、分、秒。</p><h5 id="54162-数据采集" class="doc-h5">5.4.1.6.2 数据采集</h5><h6 id="541621-离线数据采集" class="doc-h6">5.4.1.6.2.1 离线数据采集</h6><p class="doc-p">离线<span class="doc-fn">数据采集</span>汇聚支持异构数据库之间的结构化数据同步，通过配置、管理数据汇聚任务，承担从外部源数据、<span class="doc-fn">数据交换</span>区（前置数据库）汇聚结构化数据到贴源层的贴源库。</p><h6 id="5416211-离线数据采集管理" class="doc-h6">5.4.1.6.2.1.1 离线数据采集管理</h6><p class="doc-p">离线<span class="doc-fn">数据采集</span>管理信息是以列表的形式展示数据汇聚系统已配置的离线数据汇聚任务。表头字段包括：</p><ul class="doc-list doc-list-bullet"><li>任务名称</li><li>所属项目</li><li>调度（已配置/未配置）</li><li>上次执行时间</li><li>上次执行结果</li><li>累计成功执行次数</li><li>累计执行次数</li><li>操作包括（执行、编辑、删除）</li></ul><h6 id="5416212-汇聚任务配置信息" class="doc-h6">5.4.1.6.2.1.2 汇聚任务配置信息</h6><p class="doc-p">汇聚任务配置信息，包括以下内容：</p><ul class="doc-list doc-list-bullet"><li>读取源数据信息：配置离线<span class="doc-fn">数据采集</span>的数据源信息。</li><li>写入源数据信息：配置离线<span class="doc-fn">数据采集</span>过来后写入的目标源信息。</li><li>离线<span class="doc-fn">数据采集</span>字段映射配置信息，包括以下内容：数据源字段信息、目标字段信息，建立数据源字段和目标字段之间的映射关系，确保采集到的数据可以正确地存储到目标数据存储库中。</li><li>采集任务配置：设置离线<span class="doc-fn">数据采集</span>任务的相关配置，包括采集任务名称、采集时间、数据存储位置等。</li><li>采集策略配置：设置<span class="doc-fn">数据采集</span>策略，包括增量采集和全量采集。</li><li>任务调度配置：设置任务的调度方式，包括手动调度和定时调度。</li></ul><h6 id="5416213-数据采集日志信息" class="doc-h6">5.4.1.6.2.1.3 数据采集日志信息</h6><p class="doc-p"><span class="doc-fn">数据采集</span>日志信息，展示离线<span class="doc-fn">数据采集</span>任务日志信息，包括以下内容：</p><ul class="doc-list doc-list-bullet"><li>日志记录信息：离线<span class="doc-fn">数据采集</span>任务日志记录了任务的详细执行过程，包括任务启动、<span class="doc-fn">数据采集</span>、数据转换、数据存储等各个阶段的执行情况。用户可以通过日志信息查看任务的执行结果、错误信息、警告信息等。</li><li>日志级别设置：用户可以设置日志的级别，包括调试级别、信息级别、警告级别、错误级别等。根据不同的级别设置，用户可以选择查看不同程度的日志信息。</li></ul><h6 id="5416214-任务调度管理" class="doc-h6">5.4.1.6.2.1.4 任务调度管理</h6><p class="doc-p">任务调度管理信息用于调度并管理离线数据汇聚，支持进行配置管理等操作，改造前端页面，形成统一风格。主要功能模块有：调度列表、调度日志、执行器管理。</p><p class="doc-p">列表的形式展示数据汇聚系统已配置的调度任务。表头：</p><ul class="doc-list doc-list-bullet"><li>调度内容（任务、作业名称）</li><li>所属项目</li><li>调度名称</li><li>状态</li><li>下次触发时间</li><li>执行结果</li><li>运行模式</li><li>路由策略</li><li>操作（执行、暂停/开始、日志、编辑、删除）</li></ul><h6 id="5416215-调度配置" class="doc-h6">5.4.1.6.2.1.5 调度配置</h6><p class="doc-p">调度配置信息在调度列表的头部，有新增按钮用于数据汇聚系统新增调度任务，配置调度任务所需参数。</p><h6 id="5416216-调度任务运行日志" class="doc-h6">5.4.1.6.2.1.6 调度任务运行日志</h6><p class="doc-p">调度任务运行日志信息展示数据汇聚系统记录的调度日志数据。以便于追溯过往的调度情况。调度日志字段包括：</p><ul class="doc-list doc-list-bullet"><li>调度内容</li><li>调度名称</li><li>所属项目</li><li>调度结果</li><li>调度备注</li><li>执行器地址</li><li>运行模式</li><li>执行时间</li><li>执行结果</li><li>查看日志按钮</li></ul><h6 id="5416217-执行器管理" class="doc-h6">5.4.1.6.2.1.7 执行器管理</h6><ul class="doc-list doc-list-bullet"><li>执行器管理信息包括执行器名称，分组标示，注册方式，在线机器地址。</li><li>用户配置执行器参数包括：执行器名称、分组标识，注册方式，在线机器名称。</li></ul><h6 id="541622-文件采集" class="doc-h6">5.4.1.6.2.2 文件采集</h6><p class="doc-p">文件采集用于实现配置、管理对于文件的采集任务。</p><h6 id="5416221-文件汇聚管理" class="doc-h6">5.4.1.6.2.2.1 文件汇聚管理</h6><p class="doc-p">文件汇聚管理信息页面通常包括以下内容：</p><ul class="doc-list doc-list-bullet"><li>源文件夹路径</li><li>目标文件夹路径</li><li>同步状态</li><li>同步开始时间</li><li>同步结束时间</li><li>同步文件数量等</li></ul><p class="doc-p">其中同步状态可以显示同步成功或失败的状态。</p><h6 id="5416222-文件汇聚配置" class="doc-h6">5.4.1.6.2.2.2 文件汇聚配置</h6><p class="doc-p">文件汇聚同步配置信息页面通常包括以下内容：</p><ul class="doc-list doc-list-bullet"><li>同步源路径</li><li>同步目标路径</li><li>同步周期</li><li>同步方式</li><li>同步频率</li><li>同步策略</li><li>同步状态</li><li>同步日志等</li></ul><p class="doc-p">此外，页面还需提供配置编辑、删除、新增、测试等功能。</p><h5 id="54163-数仓管理" class="doc-h5">5.4.1.6.3 数仓管理</h5><p class="doc-p"><span class="doc-kw">数仓</span>层级管理是在现有贴源层（ODS）、明细层（DWD）、应用层（ADS）的基础上按照业务场景细分层级的配置管理功能。</p><h6 id="541631-数仓层级管理" class="doc-h6">5.4.1.6.3.1 数仓层级管理</h6><p class="doc-p"><span class="doc-kw">数仓</span>层级管理用于管理数据中台的数据库表，提高<span class="doc-kw">数仓</span>的规范性。<span class="doc-fn">数仓管理</span>信息包括基础层级信息、中文名称、英文名称、绑定数据库、创建时间、描述信息。</p><h6 id="541632-数仓层级配置" class="doc-h6">5.4.1.6.3.2 数仓层级配置</h6><p class="doc-p">定义<span class="doc-kw">数仓</span>层级并进行配置，展示已定义<span class="doc-kw">数仓</span>层级，以及提供增删改的操作入口。</p><ul class="doc-list doc-list-bullet"><li>在<span class="doc-kw">数仓</span>层级列表，点击“新增”按钮，弹出“新增<span class="doc-kw">数仓</span>层级”弹窗，填写<span class="doc-kw">数仓</span>层级和中文名称等信息。</li><li>在“英文名称”、“所属基础<span class="doc-kw">数仓</span>”和“绑定数据库”的标题旁，有图标以示注释，鼠标悬停即气泡显示注释内容：“英文名称”：该名称会用于建表时的表名约束；“绑定数据库”：该<span class="doc-kw">数仓</span>层级的表会写入绑定的数据库。</li><li>在<span class="doc-kw">数仓</span>层级列表，点击“编辑”按钮，弹出“编辑<span class="doc-kw">数仓</span>层级”弹窗，填写<span class="doc-kw">数仓</span>层级和中文名称等信息。</li></ul><h6 id="541633-命名规范管理" class="doc-h6">5.4.1.6.3.3 命名规范管理</h6><p class="doc-p">命名规范管理用于定义建表时的表名规范元素，支持三种类型的命名元素：自定义、读取、固定项。</p><ul class="doc-list doc-list-bullet"><li>固定项：内置系统，不可编辑；在<span class="doc-kw">数仓</span>层级设计时，选择命名规范时不可缺少。</li><li>读取：内置系统，不可编辑；从预定义好的取数逻辑中选取合适的选项。</li><li>自定义：用户自定义的命名元素，一人定义，全局可见、可用。</li></ul><p class="doc-p">命名规范列表包括命名元素名称、中文名称、英文名称。</p><h6 id="541634-命名规范配置" class="doc-h6">5.4.1.6.3.4 命名规范配置</h6><p class="doc-p">命名规范配置，包括：</p><ul class="doc-list doc-list-bullet"><li>“更新方式”命名元素，为固定项命名元素，内置系统，不可编辑；在<span class="doc-kw">数仓</span>层级设计时，选择命名规范时不可缺少。“更新方式”用于标记库表的更新方式。</li><li>“自定义内容”命名元素，为固定项命名元素，内置系统，不可编辑；在<span class="doc-kw">数仓</span>层级设计时，选择命名规范时不可缺少。“自定义内容”命名元素，用于快速建表时，用户自行定义表名内容。</li><li>“组织”命名元素，为读取命名元素。“组织”命名元素，用于快速建表时，用户设置表名中，需要包含组织名称。</li><li>“业务系统”命名元素，为读取命名元素。“业务系统”命名元素，用于快速建表时，用户设置表名中，需要包含所属的业务系统名称。</li><li>自定义命名元素，用户在内置命名元素之外新增的命名元素，用户可编辑维护。</li></ul><h5 id="54164-数源管理" class="doc-h5">5.4.1.6.4 数源管理</h5><p class="doc-p">数据源管理<span class="doc-fn">数据采集</span>系统所挂接的数据源，也包括其它模块需使用的数据源。</p><h6 id="541641-数据库管理" class="doc-h6">5.4.1.6.4.1 数据库管理</h6><p class="doc-p">数据库管理，不仅是管理<span class="doc-fn">数据采集</span>系统所挂接的数据库，也包括整个系统其它模块需使用的数据库。通过列表的方式展示系统挂接的数据库，用于运营人员管理数据库，包含源数据库、目标数据库等，列表字段包括：</p><ul class="doc-list doc-list-bullet"><li>数据库状态</li><li>数据库类型</li><li>数据库名称</li><li>数据库URL</li><li>数据库层级</li><li>所属机构</li><li>机构类别</li><li>所属系统</li><li>异常原因</li></ul><h6 id="541642-数据库参数配置" class="doc-h6">5.4.1.6.4.2 数据库参数配置</h6><p class="doc-p">数据库参数配置信息包括：</p><ul class="doc-list doc-list-bullet"><li>数据库类型</li><li>数据库名称</li><li>数据库层级</li><li>所属系统名称</li><li>机构类型</li><li>数据库层级</li><li>数据库类别</li><li>所属机构</li><li>机构类型</li><li>责任人</li><li>责任人手机号</li><li>邮箱</li></ul><p class="doc-p">数据库连接参数配置信息，包括：</p><ul class="doc-list doc-list-bullet"><li>数据库URL</li><li>JDBC 驱动类信息</li><li>用户名</li><li>密码</li><li>异常原因内容</li></ul><h5 id="54165-应用系统管理" class="doc-h5">5.4.1.6.5 应用系统管理</h5><p class="doc-p">用于管理需接入本系统的应用系统的基础信息。</p><h6 id="541651-应用系统管理" class="doc-h6">5.4.1.6.5.1 应用系统管理</h6><p class="doc-p"><span class="doc-fn">应用系统管理</span>包括：应用ID、应用系统名称、启用状态、应用系统关联处室、应用Token、Token 状态（已启用\\已停用\\无Token 时用--表示）、系统联系人、联系电话，点击Token,则进入Token 配置同时授权服务界面。</p><ul class="doc-list doc-list-bullet"><li>应用系统信息配置包括应用系统名称、启用状态、应用系统关联的处室、应用系统的联系人和联系人电话；统计应用系统关联的数据资产服务申请数和数据需求申请数。</li><li><span class="doc-fn">应用系统管理</span>信息包括应用系统编号、应用系统名称、联系人名称、联系人电话、业务系统主管单位等信息。</li><li>系统地址信息包括应用地址、端口号、备注。</li><li>系统开发商信息包括开发商代码、开发商名称、开发商联系人姓名、联系电话等。</li></ul><h6 id="541652-系统凭证管理" class="doc-h6">5.4.1.6.5.2 系统凭证管理</h6><p class="doc-p">后台管理人员为应用系统手动生成凭证（也称为应用Token），须同时提交本次操作原因的相关证据，然后选择要授权调用的服务。支持对应用系统的凭证进行停用、启用操作。停用后，该应用系统的凭证将暂时失效，直到下次启用。</p><p class="doc-p">自动生成凭证，即当应用系统关联的服务调用申请或需求申请，在数据资产管理系统中被审核通过后，将自动判断该系统是否已存在凭证（也称为应用Token），若还没有凭证，则会自动生成凭证并展示该凭证。凭证生成后默认为启用状态。</p><p class="doc-p">针对需求方线下已走流程同意系统对接（未在线上系统提交申请流程），而对接时效要求紧的情况，实施人员可在本系统中为应用系统手动生成凭证，须同时提交本次操作原因的相关证据，然后选择要授权调用的服务。</p><p class="doc-p">用户手动生成凭证，针对数据需求方线下已走流程同意系统对接（未在线上系统提交申请流程），而对接时效要求紧的情况，实施人员可在本系统中为应用系统手动生成凭证，须同时提交本次操作原因的相关证据，然后选择要授权调用的服务，填写字段包括操作原因、相关证据文件上传。支持对应用系统的凭证进行停用、启用操作。停用后，该应用系统的凭证将暂时失效，直到下次启用。</p><h6 id="541653-授权服务配置管理" class="doc-h6">5.4.1.6.5.3 授权服务配置管理</h6><p class="doc-p">授权服务配置管理信息可选择需授权的服务（支持多选，字段包括：服务名称、标识码）。填写完成后，点击【生成凭证并授权】按钮，则系统自动生成该应用系统的Token，并对该应用系统授权所选择的多个服务，完成后，提示用户：生成凭证成功并已授权相应服务。</p>',92)])]))}}),Li={class:"doc-html"},Mi=U({__name:"07-应急融合服务门户",setup(c){return(f,t)=>(l(),d("article",Li,[...t[0]||(t[0]=[Z('<aside class="doc-summary"><div class="doc-summary-title">本章要点</div><ul class="doc-summary-list"><li>门户框架</li><li>数据看板</li><li>子系统集成</li></ul></aside><p class="doc-p doc-lead">应急<span class="doc-kw">融合服务</span>门户主要面向政务人员提供统一的工作台，汇聚各业务系统入口、统一用户待办和消息、<span class="doc-fn">数据看板</span>等，提升办事效率与用户体验。</p><h5 id="54171-门户框架" class="doc-h5">5.4.1.7.1 门户框架</h5><p class="doc-p"><span class="doc-fn">门户框架</span>支持集成各业务系统，顶部提供导航菜单，根据登录用户的权限显示不同的导航菜单，点击导航菜单可进入不同的子系统。同时提供个人中心、业务系统导航菜单等通用功能、<span class="doc-fn">待办中心</span>、<span class="doc-fn">消息中心</span>、<span class="doc-fn">知识中心</span>等功能。</p><h6 id="541711-通用功能" class="doc-h6">5.4.1.7.1.1 通用功能</h6><p class="doc-p">通用功能包括个人中心、消息待办提醒、业务系统导航菜单、待办消息统计共四个功能。</p><ul class="doc-list doc-list-bullet"><li>个人中心包括用户个人信息展示，如姓名、部门等；提供密码修改和权限申请功能；可对分配的门户模板进行个性化编辑；可通过个人中心页的快速入口进入事项中心、日程中心、<span class="doc-fn">消息中心</span>、知识收藏等模块。</li><li>消息待办提醒接收、查看、并处理集成进来的业务系统消息，当有新的消息或待办进入系统时，消息待办有明显的提示，用户点击可跳转到对应的业务系统查看或办理。</li><li>业务系统导航菜单包含登录用户所拥有的业务角色可访问的业务系统，可点击业务系统菜单进行权限鉴权并<span class="doc-kw">单点登录</span>跳转至业务系统。</li><li>待办消息统计直观展示登录用户需处理的待办、消息、日程的统计数据。</li></ul><h6 id="541712-待办中心" class="doc-h6">5.4.1.7.1.2 待办中心</h6><p class="doc-p"><span class="doc-fn">待办中心</span>提供待办列表展示、待办事项处理。代表列表展示由平台和各业务系统推送的待办事项信息，包括任务标题、创建时间、来源系统、待办类型、待办状态、待办处理等内容，并以创建时间为倒序进行展示。支持查看所有待办和已办的事项，通过待办状态进行分组展示，以便快速查看并处理待办的事项。</p><h6 id="541713-消息中心" class="doc-h6">5.4.1.7.1.3 消息中心</h6><p class="doc-p"><span class="doc-fn">消息中心</span>提供消息查看和消息订阅功能。</p><ul class="doc-list doc-list-bullet"><li>用户可通过消息列表查看收到的由平台和业务系统推送的消息通知，消息通知以创建时间为倒序进行展示。</li><li>可查看全部已读或未读的消息，可将已读状态的消息标记为未读。</li><li>可订阅系统的消息分类及该分类的消息渠道，订阅后系统将通过所选渠道推送指定分类的消息给用户，无订阅的消息分类和渠道将不推送消息给用户。</li><li>消息通知展示内容包括：消息标题、来源业务系统、创建时间、操作（查看/标为未读）等内容。</li></ul><h6 id="541714-知识中心" class="doc-h6">5.4.1.7.1.4 知识中心</h6><p class="doc-p"><span class="doc-fn">知识中心</span>主要为用户提供统一知识专栏，可查看应用中台推送的不同类别的知识，对知识进行点评、评分。<span class="doc-fn">知识中心</span>包括知识列表和知识库两个功能。</p><p class="doc-p">知识列表展示内容包括：知识标题、发表时间，并以发表时间进行倒序展示。可进入知识库查看全部知识，支持对知识类别进行搜索并进入对应的知识类别。</p><p class="doc-p">知识库提供知识搜索、知识列表、知识详情三个功能。</p><ul class="doc-list doc-list-bullet"><li>知识搜索支持在全部知识中搜索或分类搜索，分类搜索提供分类树供用户选择分类，当切换知识类别时，对应的搜索结果也刷新切换；支持用户筛选某个时间段（下拉框，待选项为：本日，本周，本月，近三个月，近半年，近一年）查询发布在该时间段的知识；支持通过输入关键词进行精准匹配或模糊匹配的方式搜索；支持针对标题、作者、摘要、正文等高级搜索。</li><li>知识列表针对全部、内部知识和外部知识进行分类划分展示，默认显示内部知识和首个知识类别，按知识发表时间进行倒序排序。</li><li>知识详情支持查看知识详情、预览附件、下载附件、点评、评分、推荐、收藏知识。</li></ul><p class="doc-p">其中，预览和下载附件由系统根据用户权限选择是否允许用户进行预览或下载附件；点评是用户针对查看的知识进行主观评论，可对其他评论进行点赞，用户自己可以删除自己发布的评论，知识创建者可以删除他人的评论，但是不能修改，支持多次评论；评分是用户针对查看的知识进行评分，一旦确认提交则不可再修改；收藏是用户针对查看的知识进行收藏，收藏后的知识集中展示在个人知识收藏夹。其中，收藏数不需要统计，收藏夹支持分类。</p><h6 id="541715-工作日程" class="doc-h6">5.4.1.7.1.5 工作日程</h6><p class="doc-p"><span class="doc-fn">工作日程</span>为用户提供日程中心功能，支持各个平台推送待办至<span class="doc-fn">工作日程</span>和用户手动添加日程，支持为他人创建日程，方便领导为下属直接安排任务，或秘书为领导安排行程，互相了解工作安排，提高协同效率。</p><p class="doc-p"><span class="doc-fn">工作日程</span>主要包括日程列表、日程管理两个功能。</p><ul class="doc-list doc-list-bullet"><li>日程列表包括日历和日程两部分，选择日历中的某一天可对应展示当天的日程，日历支持搜索功能。</li><li>日常管理主要包括日程列表展示、新增、编辑、查询、查看、批量共享、删除功能。</li></ul><p class="doc-p">用户通过设置事项标题、事项内容、执行人、执行频次、时间范围、提醒时间、提醒方式、是否共享等内容新增日程。</p><p class="doc-p">新增后的日程支持编辑，但无法编辑系统推送的待办日程。</p><p class="doc-p">新增后的日程支持删除，但无法删除系统推送的待办日程。</p><h6 id="541716-快捷菜单" class="doc-h6">5.4.1.7.1.6 快捷菜单</h6><p class="doc-p"><span class="doc-fn">快捷菜单</span>为用户提供自由订阅<span class="doc-fn">快捷菜单</span>的功能，将业务价值量大、使用频繁的菜单添加至门户首页<span class="doc-fn">快捷菜单</span>处，实现一键触达，提高办事效率。<span class="doc-fn">快捷菜单</span>包括菜单新增和菜单删除两个功能。</p><p class="doc-p">用户进入菜单管理界面，选择对应的菜单添加保存即可，最多可选择8 个。</p><p class="doc-p">如需删除菜单，进入菜单管理界面，选择对应的菜单删除，并保存。</p><h5 id="54172-数据看板" class="doc-h5">5.4.1.7.2 数据看板</h5><p class="doc-p"><span class="doc-fn">数据看板</span>主要为用户提供统计分析功能，包括应急值守、智能应急预案、应急事件、应急物资四个专题。</p><h6 id="541721-应急值守" class="doc-h6">5.4.1.7.2.1 应急值守</h6><p class="doc-p">应急值守提供多种图表统计分析，从“人员-事件-设备-时效”四个维度，提供“区域值守概览图、值班力量构成图、事件处置时效图、个人值守效能图”四大功能，帮助指挥中心实时掌握值守态势、快速发现薄弱环节、科学调配应急资源。</p><ol class="doc-list doc-list-paren"><li><span class="doc-list-title">区域值守概览图</span><ol class="doc-list doc-list-sub"><li><span class="doc-list-title">地市/区县值班人次统计图</span>统计本年、本月、本周的昼夜值班总人次，按地市或区县划分，以柱状图展示。</li><li><span class="doc-list-title">地市/区县事件接报量统计图</span>统计本年、本月、本周的突发事件接报总量，以堆叠柱状图展示，区分未处置、处置中和已处置量等不同状态的事件量。</li></ol></li><li><span class="doc-list-title">值班力量构成图</span><ol class="doc-list doc-list-sub"><li><span class="doc-list-title">岗位构成图</span>以饼图展示当前在班人员中不同类型岗位的占比。</li><li><span class="doc-list-title">值班时长分布图</span>以直方图展示本月个人累计值班时长在“0–8h、8–16h、16–24h、&gt;24h”区间的分布人数。</li></ol></li><li><span class="doc-list-title">事件处置时效图</span><ol class="doc-list doc-list-sub"><li><span class="doc-list-title">平均响应时长图</span>以折线图展示本年、本月、本周地市/区县对事件的首次响应平均时长（接报至出动）变化趋势。</li><li><span class="doc-list-title">处置完成率图</span>以仪表盘展示当日24h 内事件处置完成率。</li><li><span class="doc-list-title">超时事件排行图</span>以横向条形图列出本月超时未结事件数量Top5 的地市/区县，支持一键下钻查看详情。</li></ol></li><li><span class="doc-list-title">个人值守效能图</span><ol class="doc-list doc-list-sub"><li><span class="doc-list-title">个人值班日历</span>以月历图展示个人全年值班日期，颜色深浅对应值班时长。</li><li><span class="doc-list-title">个人效能评分图</span>综合值班到岗率、事件处置及时率、信息报送准确率三项指标，生成雷达图并给出星级评级。</li></ol></li></ol><h6 id="541722-智能应急预案" class="doc-h6">5.4.1.7.2.2 智能应急预案</h6><p class="doc-p">智能应急预案统计从“预案-演练-事件-优化”四个维度出发，提供“预案覆盖率看板、演练成效评估图、应急响应命中图、预案优化建议图”四大功能，实现对应急预案全生命周期的量化评估与持续改进。</p><ol class="doc-list doc-list-paren"><li><span class="doc-list-title">预案覆盖率看板</span><ol class="doc-list doc-list-sub"><li><span class="doc-list-title">预案数量与分布统计图</span>统计本年已编制行业应急预案总量，并按照不同预案类型（如总体预案、专项预案、部门预案等）以柱状图呈现。</li><li><span class="doc-list-title">预案版本更新率图</span>统计近12 个月各预案的版本更新次数，以折线图展示趋势。</li></ol></li><li><span class="doc-list-title">演练成效评估图</span><ol class="doc-list doc-list-sub"><li><span class="doc-list-title">演练计划完成率图</span>统计本年度演练计划总数与已执行数，以环形图展示总体完成率，并下钻至地市/区县。</li><li><span class="doc-list-title">演练问题闭环率图</span>统计演练发现问题总数与已整改闭环数，以堆叠柱状图展示“已闭环、整改中、未整改”三类占比。</li><li><span class="doc-list-title">演练平均得分图</span>根据演练情况从不同维度对演练效果进行自动打分，以雷达图展示地市/区县平均得分。</li></ol></li><li><span class="doc-list-title">应急响应命中图</span><ol class="doc-list doc-list-sub"><li><span class="doc-list-title">响应时长对比图</span>以箱线图对比“按预案响应”与“无预案响应”两类事件的平均响应时长差异。</li><li><span class="doc-list-title">资源调度吻合度图</span>统计实际调度资源与预案预设资源的匹配度（数量、类型、到位时间），以百分比条形图展示。</li></ol></li><li><span class="doc-list-title">预案优化建议图</span><ol class="doc-list doc-list-sub"><li><span class="doc-list-title">预案评分提升图</span>以柱状图对比预案优化前后的综合评分变化，直观展示优化成效。</li></ol></li></ol><h6 id="541723-应急事件" class="doc-h6">5.4.1.7.2.3 应急事件</h6><p class="doc-p">应急事件统计从“事件-处置-复盘”三个维度出发，提供“事件概览图、处置时效图、复盘改进图”四大功能，实现对突发事件全周期数据的量化分析与决策支撑。</p><ol class="doc-list doc-list-paren"><li><span class="doc-list-title">事件概览图</span><ol class="doc-list doc-list-sub"><li><span class="doc-list-title">事件总量趋势图</span>统计本年、本月、本周的事件上报总数，以折线图展示时间趋势。</li><li><span class="doc-list-title">事件等级分布图</span>按一般、较大、重大、特别重大四级分类，以饼图展示占比。</li><li><span class="doc-list-title">事件类型分布图</span>按事件类型以堆叠柱状图展示。</li><li class="doc-list-sub-plain"><span class="doc-list-title">事件地区分布图</span>按事件所在地区统计事件上报总数。</li></ol></li><li><span class="doc-list-title">处置时效图</span><ol class="doc-list doc-list-sub"><li><span class="doc-list-title">平均响应时长图</span>统计接报至首支队伍出动平均耗时，按地市/区县以柱状图展示。</li><li><span class="doc-list-title">处置完成率图</span>统计已关闭事件与总事件占比，以仪表盘展示。</li><li><span class="doc-list-title">超时事件排行图</span>以横向条形图展示本月超时未结事件数量TOP5 的地市/区县，支持一键下钻。</li></ol></li><li><span class="doc-list-title">复盘改进图</span><ol class="doc-list doc-list-sub"><li><span class="doc-list-title">重复事件发生率图</span>统计同类事件再次发生次数占比，以折线图展示月度变化。</li></ol></li></ol><h6 id="541724-应急物资" class="doc-h6">5.4.1.7.2.4 应急物资</h6><p class="doc-p">应急物资统计从“储备-调拨-消耗-预警”四个维度出发，提供“物资储备看板、调拨轨迹图、消耗分析图、库存预警图”四大功能，实现对应急物资全链路可视化、可量化、可预警管理。</p><ol class="doc-list doc-list-paren"><li><span class="doc-list-title">物资储备看板</span><ol class="doc-list doc-list-sub"><li><span class="doc-list-title">总储备量统计图</span>统计本年当前应急物资总件数/总吨位，按地市/区县以柱状图展示。</li><li><span class="doc-list-title">品类覆盖率图</span>统计已储备品类数，按物资大类、按储备地市/仓库等维度以柱状图统计。</li><li><span class="doc-list-title">储备等级分布图</span>按中央库、省级库、市级库、县级库、前置点五级分类，以堆叠柱状图展示各等级储备量占比。</li></ol></li><li><span class="doc-list-title">调拨轨迹图</span><ol class="doc-list doc-list-sub"><li><span class="doc-list-title">调拨频次图</span>统计本年、本月、本周物资的出库/调拨总次数，以折线图展示时间趋势。</li><li><span class="doc-list-title">调拨流向图</span>按物资用途或按调用事件/申请单位/目的地划分，以流向地图或堆叠柱状图展示。</li></ol></li><li><span class="doc-list-title">消耗分析图</span><ol class="doc-list doc-list-sub"><li><span class="doc-list-title">品类消耗排行图</span>以横向条形图展示本年消耗量TOP10 的物资品类及对应数量。</li><li><span class="doc-list-title">事件消耗占比图</span>统计各突发事件消耗物资数量占总消耗量的比例，以饼图展示。</li></ol></li><li><span class="doc-list-title">库存预警图</span><ol class="doc-list doc-list-sub"><li><span class="doc-list-title">低库存预警图</span>统计低于安全库存线的物资品类数量，以红色柱状图预警，并支持一键补货。</li><li><span class="doc-list-title">临期物资图</span>统计距离过期≤90 天的物资数量，按品类以堆叠条形图展示。</li><li><span class="doc-list-title">补货及时率图</span>统计预警发出后72 小时内完成补货的比例，以仪表盘展示，支持阈值告警。</li></ol></li></ol><h5 id="54173-子系统集成" class="doc-h5">5.4.1.7.3 子系统集成</h5><p class="doc-p">服务门户支持将各业务子系统集成到门户中，为用户提供“<span class="doc-kw">单点登录</span>、统一入口、聚合信息”的一站式体验。用户可通过该入口进入统一集成服务系统，在统一集成服务系统中，各厅局委办用户及开发商用户可实现接口在线调试、使用指引、服务在线订阅申请、服务创建等功能。</p><h6 id="541731-业务系统接入配置" class="doc-h6">5.4.1.7.3.1 业务系统接入配置</h6><ol class="doc-list doc-list-paren"><li>认证对接配置：支持配置与业务系统的<span class="doc-kw">单点登录</span>（SSO）集成参数，实现用户身份在门户与业务系统间的安全传递与识别。</li><li>服务/应用定义：支持管理员定义待集成的“业务应用”实体，配置应用名称、图标、描述、访问地址（URL）等元信息。</li></ol><h6 id="541732-应用门户化封装与展示" class="doc-h6">5.4.1.7.3.2 应用门户化封装与展示</h6><ol class="doc-list doc-list-paren"><li>统一应用门户：将已集成的各业务系统应用入口，按照可配置的分类（如按部门、按功能）聚合展示在门户的“我的应用”或导航菜单中，形成用户统一的访问入口矩阵。</li><li>个性化应用中心：支持用户根据自身角色和偏好，自定义常用应用的快捷方式或收藏夹，提升访问效率。</li><li>待办/消息聚合：提供标准化接口或适配器，支持从集成的业务系统中抽取用户待办任务、通知消息等关键信息，在门户首页或统一<span class="doc-fn">待办中心</span>进行聚合展示（需业务系统配合提供接口）。</li></ol><h6 id="541733-访问权限与安全控制" class="doc-h6">5.4.1.7.3.3 访问权限与安全控制</h6><ol class="doc-list doc-list-paren"><li>统一权限继承：支持将门户的用户身份、角色/组织架构信息传递给业务系统，业务系统可基于此进行细粒度权限控制（需业务系统支持），实现权限在门户层与业务系统层的联动。</li><li>门户级访问控制：支持在门户层面对集成的应用入口进行访问权限控制（如基于用户角色、部门分配应用的可见性和可访问性），即使业务系统内部有权限，也可在门户入口处进行拦截。</li><li>访问日志：记录用户通过门户访问各集成业务系统的日志（包括用户、时间、访问的应用、操作结果等），满足安全审计要求。</li></ol><h6 id="541734-集成配置管理" class="doc-h6">5.4.1.7.3.4 集成配置管理</h6><p class="doc-p">配置管理界面：提供直观的管理控制台，支持管理员集中查看、编辑、启用/禁用所有已配置的子系统集成信息。</p>',53)])]))}}),Ci={class:"doc-html"},Ei=U({__name:"08-外部系统接口对接",setup(c){return(f,t)=>(l(),d("article",Ci,[...t[0]||(t[0]=[Z('<aside class="doc-summary"><div class="doc-summary-title">本章要点</div><ul class="doc-summary-list"><li>统一用户中心</li><li>统一身份认证</li><li>政务短信</li><li>粤政图服务</li><li>省交通集团高精地图对接</li><li>融合通信能力</li><li>商用密码服务能力</li><li>消息中心</li><li>日志中心</li><li>统一门户</li><li>统一待办</li><li>统一资讯</li><li>电子航道图</li><li>国家综合交通运输信息平台对接</li><li>路网运行监测工程对接</li><li>安全应急协同平台（一期）对接</li><li>国储中心系统对接</li></ul></aside><p class="doc-p doc-lead">本系统需依托厅一体化数字平台数据枢纽和公共支撑能力，以接口对接的方式，进行相关能力及数据的获取。具体如下：</p><h5 id="54181-统一用户中心" class="doc-h5">5.4.1.8.1 统一用户中心</h5><p class="doc-p">对接一体化数字平台，获取统一的用户、机构、岗位、权限等信息查询与管理服务，统一全厅用户及组织数据。包括对接以下接口能力：</p><h6 id="541811-用户接口信息对接" class="doc-h6">5.4.1.8.1.1 用户接口信息对接</h6><p class="doc-p">对接一体化数字平台的用户接口能力，实现对省领导、厅领导、厅内各处室安全应急业务人员、各地市交通局安全应急人员、交通行业重点企业安全应急人员等用户的信息查看与管理。</p><h6 id="541812-机构接口信息对接" class="doc-h6">5.4.1.8.1.2 机构接口信息对接</h6><p class="doc-p">对接一体化数字平台的机构接口能力，实现对广东省交通运输厅各业务处室及直属单位、广东省人民政府应急管理办公室、各地市交通局、交通行业重点企业等组织、机构的信息查看与管理。</p><h6 id="541813-权限接口信息对接" class="doc-h6">5.4.1.8.1.3 权限接口信息对接</h6><p class="doc-p">对接一体化数字平台的权限接口能力，实现根据用户、机构的职能权责分配用户的信息查看、后台管理等权限配置。</p><h5 id="54182-统一身份认证" class="doc-h5">5.4.1.8.2 统一身份认证</h5><p class="doc-p">对接一体化数字平台，获取政务侧及公众侧<span class="doc-kw">统一身份认证</span>能力，结合交通运输厅业务发展需要，为政务端工作人员以及公众提供<span class="doc-kw">统一身份认证</span>核验服务。</p><h6 id="541821-政务侧身份认证接口信息对接" class="doc-h6">5.4.1.8.2.1 政务侧身份认证接口信息对接</h6><p class="doc-p">对接一体化数字平台，开发政务侧身份认证接口，为政务端工作人员（如省领导、厅领导、厅内各处室安全应急业务人员、各地市交通局安全应急人员、交通行业重点企业安全应急人员等）提供<span class="doc-kw">统一身份认证</span>核验服务。</p><h6 id="541822-公众侧身份认证接口信息对接" class="doc-h6">5.4.1.8.2.2 公众侧身份认证接口信息对接</h6><p class="doc-p">对接一体化数字平台，开发公众侧身份认证接口，为企业端工作人员提供<span class="doc-kw">统一身份认证</span>核验服务。</p><h5 id="54183-政务短信" class="doc-h5">5.4.1.8.3 政务短信</h5><h6 id="541831-政务短信接口信息对接" class="doc-h6">5.4.1.8.3.1 政务短信接口信息对接</h6><p class="doc-p">对接一体化数字平台，获取政务短信能力，实现对省领导、厅领导、厅内各处室安全应急业务人员、各地市交通局安全应急人员、交通行业重点企业安全应急人员等安全应急业务相关用户发送短信的功能。</p><h5 id="54184-粤政图服务" class="doc-h5">5.4.1.8.4 粤政图服务</h5><h6 id="541841-粤政图接口信息对接" class="doc-h6">5.4.1.8.4.1 粤政图接口信息对接</h6><p class="doc-p">对接一体化数字平台，开发<span class="doc-kw">粤政图</span>接口，为安全应急业务协同平台提供地理信息数据的共享与服务，为融合系统的底图的各类图层信息提供地理信息数据支撑。</p><h5 id="54185-省交通集团高精地图对接" class="doc-h5">5.4.1.8.5 省交通集团高精地图对接</h5><h6 id="541851-底图基础图层接口对接" class="doc-h6">5.4.1.8.5.1 底图基础图层接口对接</h6><p class="doc-p">对接省交通集团高精度数字底图基础图层，获取道路基础要素图层、位置大数据图层以及标精地图图层。</p><h6 id="541852-数据治理加工图层接口对接" class="doc-h6">5.4.1.8.5.2 数据治理加工图层接口对接</h6><p class="doc-p">对接省交通集团高精度数字底图基础图层，获取道路基础设施图层、交通安全设施图层、紧急设施图层、管理服务设施图层、机电设施图层、其他路产管理图层、养护管理图层以及路网服务图层等。</p><h5 id="54186-融合通信能力" class="doc-h5">5.4.1.8.6 融合通信能力</h5><h6 id="541861-融合通信接口信息对接" class="doc-h6">5.4.1.8.6.1 融合通信接口信息对接</h6><p class="doc-p">对接一体化数字平台<span class="doc-kw">融合通信</span>能力，包括高速公路视频、航道视频、港口视频、国省道视频、两客一危一重车辆视频等行业态势视频展现能力。</p><h5 id="54187-商用密码服务能力" class="doc-h5">5.4.1.8.7 商用密码服务能力</h5><p class="doc-p">对接一体化数字平台，获取省政务云的<span class="doc-kw">商用密码</span>资源池能力，为系统提供数据加解密、签名/验签运算服务能力，以及统一接入及运营分析保障。</p><h6 id="541871-数据存储加密接口信息对接" class="doc-h6">5.4.1.8.7.1 数据存储加密接口信息对接</h6><p class="doc-p">调用省政务云平台虚拟加密机加密接口，按照《GM∕T00182012 密码设备应用接口规范》标准，接入信息见下表：</p><ul class="doc-list doc-list-plain"><li>与设备建立的会话句柄</li><li>指定的密钥句柄</li><li>算法标识，指定对称加密算法</li><li>缓冲区指针，用于存放输入和返回的ＩＶ数据</li><li>缓冲区指针，用于存放输入的数据明文</li><li>输入的数据明文长度</li><li>缓冲区指针，用于存放输出的数据密文</li><li>输出的数据密文长度</li></ul><h6 id="541872-数据存储解密接口信息对接" class="doc-h6">5.4.1.8.7.2 数据存储解密接口信息对接</h6><p class="doc-p">调用省政务云平台虚拟加密机解密接口，按照《GM∕T00182012 密码设备应用接口规范》标准，接入信息如下：</p><ul class="doc-list doc-list-plain"><li>与设备建立的会话句柄</li><li>指定的密钥句柄</li><li>算法标识，指定对称加密算法</li><li>缓冲区指针，用于存放输入和返回的ＩＶ数据</li><li>缓冲区指针，用于存放输入的数据密文</li><li>输入的数据密文长度</li></ul><h6 id="541873-数据签名接口信息对接" class="doc-h6">5.4.1.8.7.3 数据签名接口信息对接</h6><p class="doc-p">调用省政务云平台签名验签服务器的ECC 签名接口，按照《GMT0019-2012通用密码服务接口规范》标准，接入信息见下表：</p><div class="doc-table-wrap"><table class="doc-table doc-table-fixed doc-table-fields"><colgroup><col style="width:42%;"><col style="width:58%;"></colgroup><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>hAppHandle[in]</td><td>应用接口句柄</td></tr><tr><td>pucContainerName[in]</td><td>密钥的容器</td></tr><tr><td>uiContainerNameLen[in]</td><td>密钥的容器名长度</td></tr><tr><td>uiAlgorithmIDEin[in]</td><td>签名算法标识</td></tr><tr><td>pucInDataE[in]</td><td>待签名数据</td></tr><tr><td>uiInDataLen[in]</td><td>原始数据的长度</td></tr><tr><td>pucSignDataE[out]</td><td>输出的DER 编码的签名数据</td></tr><tr><td>puiSignDataLen[in.out]</td><td>输出的签名结果数据长度</td></tr></tbody></table></div><h6 id="541874-数据验签接口信息对接" class="doc-h6">5.4.1.8.7.4 数据验签接口信息对接</h6><p class="doc-p">调用省政务云平台签名验签服务器的ECC 验签接口，按照《GMT0019-2012通用密码服务接口规范》标准，接入信息见下表：</p><div class="doc-table-wrap"><table class="doc-table doc-table-fixed doc-table-fields"><colgroup><col style="width:42%;"><col style="width:58%;"></colgroup><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>ucPublicKey[in]</td><td>DER 编码的公钥</td></tr><tr><td>uiPublicKeyLen[in]</td><td>公钥长度</td></tr><tr><td>uiAlgorithmID[in]</td><td>ECC 签名算法</td></tr><tr><td>pucInData[in]</td><td>待验证数据</td></tr><tr><td>uicInDataLen[in]</td><td>待验证数据的长度</td></tr><tr><td>pucSignData[in]</td><td>DER 编码的签名数据</td></tr><tr><td>uiSignDataLen[in]</td><td>签名数据长度</td></tr></tbody></table></div><h6 id="541875-数字证书导出接口信息对接" class="doc-h6">5.4.1.8.7.5 数字证书导出接口信息对接</h6><p class="doc-p">调用SSL 服务器证书导出接口，按照《GMT 0020-2012 证书应用综合服务接口规范》标准，接入信息见下表：</p><div class="doc-table-wrap"><table class="doc-table doc-table-fixed doc-table-fields"><colgroup><col style="width:42%;"><col style="width:58%;"></colgroup><thead><tr><th>字段</th><th>说明</th></tr></thead><tbody><tr><td>Subject Public Key Info</td><td>使用者信息</td></tr><tr><td>Public Key Algorithm</td><td>—</td></tr><tr><td>Subject Public Key</td><td>公钥</td></tr><tr><td>Issuer Unique Identifier (Optional)</td><td>颁发者唯一标识</td></tr><tr><td>Subject Unique Identifier (Optional)</td><td>使用者唯一标识</td></tr></tbody></table></div><h6 id="541876-数字证书解析接口信息对接" class="doc-h6">5.4.1.8.7.6 数字证书解析接口信息对接</h6><p class="doc-p">调用SSL 服务器证书解释证书接口，按照《GMT 0020-2012 证书应用综合服务接口规范》标准，接入信息如下：</p><div class="doc-table-wrap"><table class="doc-table doc-table-fixed doc-table-fields"><colgroup><col style="width:42%;"><col style="width:58%;"></colgroup><thead><tr><th>字段</th><th>说明</th></tr></thead><tbody><tr><td>Certificate</td><td>证书</td></tr><tr class="is-child"><td>Version</td><td>版本</td></tr><tr class="is-child"><td>Serial Number</td><td>序列号</td></tr><tr class="is-child"><td>Algorithm ID</td><td>算法标识</td></tr><tr class="is-child"><td>Issuer</td><td>颁发者</td></tr><tr class="is-child"><td>Validity</td><td>有效期</td></tr><tr class="is-child is-grandchild"><td>Not Before</td><td>有效起始日期</td></tr><tr class="is-child is-grandchild"><td>Not After</td><td>有效终止日期</td></tr><tr class="is-child"><td>Subject</td><td>使用者</td></tr></tbody></table></div><h6 id="541877-数字证书验证接口信息对接" class="doc-h6">5.4.1.8.7.7 数字证书验证接口信息对接</h6><p class="doc-p">调用SSL 服务器证书解释证书接口，按照《GMT 0020-2012 证书应用综合服务接口规范》标准，接入信息如下：</p><div class="doc-table-wrap"><table class="doc-table doc-table-fixed doc-table-fields"><colgroup><col style="width:42%;"><col style="width:58%;"></colgroup><thead><tr><th>字段</th><th>说明</th></tr></thead><tbody><tr><td>Certificate</td><td>证书</td></tr><tr class="is-child"><td>Version</td><td>版本</td></tr><tr class="is-child"><td>Serial Number</td><td>序列号</td></tr><tr class="is-child"><td>Algorithm ID</td><td>算法标识</td></tr><tr class="is-child"><td>Issuer</td><td>颁发者</td></tr><tr class="is-child"><td>Validity</td><td>有效期</td></tr><tr class="is-child is-grandchild"><td>Not Before</td><td>有效起始日期</td></tr><tr class="is-child is-grandchild"><td>Not After</td><td>有效终止日期</td></tr><tr class="is-child"><td>Subject</td><td>使用者</td></tr></tbody></table></div><h6 id="541878-智能密码钥匙接口信息对接" class="doc-h6">5.4.1.8.7.8 智能密码钥匙接口信息对接</h6><p class="doc-p">调用<span class="doc-fn">智能密码钥匙</span>接口，按照《<span class="doc-fn">智能密码钥匙</span>密码应用接口规范》标准，接入信息如下：</p><ol class="doc-list doc-list-numbered"><li>连接设备时返回的设备句柄。</li><li>应用名称。</li><li>管理员PIN.</li><li>管理员PIN 最大重试次数。</li><li>用户PIN 最大重试次数。</li><li>用户PIN.</li><li>在该应用下创建文件和容器的权限，参见型。为各种权限的阈值。</li><li>应用的句柄</li></ol><h6 id="541879-密钥生成接口信息对接" class="doc-h6">5.4.1.8.7.9 密钥生成接口信息对接</h6><p class="doc-p">调用省政务云密码资源池密钥管理接口，按照《GMT 0051-2016 密码设备管理对称密钥管理技术规范》标准，接入信息如下：</p><ol class="doc-list doc-list-numbered"><li>发送方（密管密码机）的设备唯一标识</li><li>接收方（<span class="doc-fn">密钥生成</span>装置）的设备唯一标识</li><li><span class="doc-fn">密钥生成</span>参数长度</li><li><span class="doc-fn">密钥生成</span>参数</li><li><span class="doc-fn">密钥生成</span>的会话密钥长度</li><li><span class="doc-fn">密钥生成</span>的会话密钥加密算法标识</li><li>签名算法标识</li><li>签名长度</li><li>对SourceID//DestID//ParaData 的签名</li><li>原子密钥的长度</li><li>用<span class="doc-fn">密钥生成</span>会话密钥加密的原子密钥</li><li>加密的<span class="doc-fn">密钥生成</span>会话密钥长度</li><li>用发送方（密管密码机）公钥加密的<span class="doc-fn">密钥生成</span>会话密钥</li><li>对SourceID//DestID//AtomKey//CipheredSkey 的签名</li></ol><h6 id="5418710-密钥分发接口信息对接" class="doc-h6">5.4.1.8.7.10 密钥分发接口信息对接</h6><p class="doc-p">调用省政务云密码资源池<span class="doc-fn">密钥分发</span>接口，按照《GMT 0051-2016 密码设备管理对称密钥管理技术规范》标准，接入信息如下：</p><ol class="doc-list doc-list-numbered"><li>分发时间；</li><li>密码产生装置编号；</li><li>密钥类型；</li><li>密钥数量；</li><li>被管设备型号或名称；</li><li>被管设备唯一编号；</li><li>被管设备IP 地址；</li><li>密管设备所属管理系统；</li><li>密管设备使用单位；</li></ol><h6 id="5418711-密钥销毁接口信息对接" class="doc-h6">5.4.1.8.7.11 密钥销毁接口信息对接</h6><p class="doc-p">调用省政务云密码资源池<span class="doc-fn">密钥销毁</span>接口，按照《GMT 0051-2016 密码设备管理对称密钥管理技术规范》标准，接入信息如下：</p><ol class="doc-list doc-list-numbered"><li>发送方（密管密码机）的设备唯一标识</li><li>接收方（<span class="doc-fn">密钥生成</span>装置）的设备唯一标识</li><li><span class="doc-fn">密钥生成</span>参数长度</li><li><span class="doc-fn">密钥生成</span>参数</li><li><span class="doc-fn">密钥生成</span>的会话密钥长度</li><li><span class="doc-fn">密钥生成</span>的会话密钥加密算法标识</li><li>签名算法标识</li><li>签名长度</li><li>对SourceID//DestID//ParaData 的签名</li><li>原子密钥的长度</li><li>用<span class="doc-fn">密钥生成</span>会话密钥加密的原子密钥</li><li>加密的<span class="doc-fn">密钥生成</span>会话密钥长度</li><li>用发送方（密管密码机）公钥加密的<span class="doc-fn">密钥生成</span>会话密钥</li><li>对SourceID//DestID//AtomKey//CipheredSkey 的签名</li><li>分发时间；</li><li>密码产生装置编号；</li><li>密钥类型；</li><li>密钥数量；</li><li>被管设备型号或名称；</li><li>被管设备唯一编号；</li><li>被管设备IP 地址；</li><li>密管设备所属管理系统；</li><li>密管设备使用单位；</li></ol><h6 id="5418712-时间戳接口信息对接" class="doc-h6">5.4.1.8.7.12 时间戳接口信息对接</h6><p class="doc-p">调用<span class="doc-fn">时间戳</span>服务器的<span class="doc-fn">时间戳</span>接口，按照《GMT 0033-2014 <span class="doc-fn">时间戳</span>接口规范》标准，接入信息如下：</p><div class="doc-table-wrap"><table class="doc-table doc-table-fixed doc-table-fields"><colgroup><col style="width:42%;"><col style="width:58%;"></colgroup><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>version</td><td>版本号。</td></tr><tr><td>messagelmprint</td><td>摘要值。</td></tr></tbody></table></div><h5 id="54188-消息中心" class="doc-h5">5.4.1.8.8 消息中心</h5><h6 id="541881-消息中心接口信息对接" class="doc-h6">5.4.1.8.8.1 消息中心接口信息对接</h6><p class="doc-p">对接一体化数字平台，开发<span class="doc-fn">消息中心</span>接口，为应急调度等相关业务应用提供短信、邮件等形式的消息推送功能。</p><h5 id="54189-日志中心" class="doc-h5">5.4.1.8.9 日志中心</h5><h6 id="541891-日志中心接口信息对接" class="doc-h6">5.4.1.8.9.1 日志中心接口信息对接</h6><p class="doc-p">对接一体化数字平台，开发消息中心接口，为本工程所有系统提供日志管理功能。</p><h5 id="541810-统一门户" class="doc-h5">5.4.1.8.10 统一门户</h5><h6 id="5418101-统一门户接口信息对接" class="doc-h6">5.4.1.8.10.1 统一门户接口信息对接</h6><p class="doc-p">对接一体化数字平台，获取统一门户能力服务，对工作页面进行集约化，集成各业务系统入口，并且支持主要统计视图、消息提醒等功能。</p><h5 id="541811-统一待办" class="doc-h5">5.4.1.8.11 统一待办</h5><h6 id="5418111-统一待办接口信息对接" class="doc-h6">5.4.1.8.11.1 统一待办接口信息对接</h6><p class="doc-p">对接一体化数字平台，为各系统提供统一待办能力，可针对公文/事务的待办数据进行集中展示，形成统一的待办列表，点击列表中的待办信息可跳转至对应系统的待办页面。</p><h5 id="541812-统一资讯" class="doc-h5">5.4.1.8.12 统一资讯</h5><h6 id="5418121-统一资讯接口信息对接" class="doc-h6">5.4.1.8.12.1 统一资讯接口信息对接</h6><p class="doc-p">对接一体化数字平台，为各系统提供统一资讯服务，可以实现跨系统的资讯信息协同共享。</p><h5 id="541813-电子航道图" class="doc-h5">5.4.1.8.13 电子航道图</h5><h6 id="5418131-电子航道图接口信息对接" class="doc-h6">5.4.1.8.13.1 电子航道图接口信息对接</h6><p class="doc-p">对接一体化数字平台，从智慧航道系统获取<span class="doc-kw">电子航道图</span>公共能力服务，为系统提供航道基础地理信息数据共享，<span class="doc-kw">电子航道图</span>切片服务。</p><h5 id="541814-国家综合交通运输信息平台对接" class="doc-h5">5.4.1.8.14 国家综合交通运输信息平台对接</h5><h6 id="5418141-阻断信息接口对接" class="doc-h6">5.4.1.8.14.1 阻断信息接口对接</h6><p class="doc-p">目前交通运输部已发布阻断信息上报接口和对接流程，由省级建立省级<span class="doc-kw">应急指挥调度</span>系统，路段将阻断信息上报至省级<span class="doc-kw">应急指挥调度</span>系统，省级<span class="doc-kw">应急指挥调度</span>系统再经接口转发至交通运输部国家综合交通运输信息平台（路网风险管理与预警叫应系统）。本系统需开发阻断信息接口与部路网运行监测及预警叫应系统进行对接。同时可根据需要将过往阻断信息数据接入至厅指挥调度相关系统进行保存。</p><h6 id="5418142-预警叫应信息接口对接" class="doc-h6">5.4.1.8.14.2 预警叫应信息接口对接</h6><p class="doc-p">平台将预留与国家综合交通运输信息平台预警叫应信息接口，贯通部-省-站三级<span class="doc-kw">应急指挥调度</span>开展预警叫应工作。</p><h6 id="5418143-组织架构及人员信息接口对接" class="doc-h6">5.4.1.8.14.3 组织架构及人员信息接口对接</h6><p class="doc-p">平台将预留与国家综合交通运输信息平台组织架构及人员接口，贯通部-省-站三级<span class="doc-kw">应急指挥调度</span>开展预警叫应工作。</p><h5 id="541815-路网运行监测工程对接" class="doc-h5">5.4.1.8.15 路网运行监测工程对接</h5><h6 id="5418151-气象数据对接" class="doc-h6">5.4.1.8.15.1 气象数据对接</h6><p class="doc-p">由广东省交通运输路网运行监测工程负责与省气象局对接气象数据，本项目与路网运行监测工程对接气象数据，对接气象数据如下：</p><p class="doc-subhead">一、天气专题</p><p class="doc-p">全省一轴两网范围内，尤其是隐患点、风险点周边台风、降水、风力、能见度、预警信息等的数据接入与展示图层，并进行统计分析。</p><p class="doc-subhead">二、全省天气预警情况</p><p class="doc-p">全省有关气温、台风、降水、能见度、寒潮等预警信息实时数据和预报数据，实现全省的天气态势感知。</p><h6 id="5418152-航道监控数据对接" class="doc-h6">5.4.1.8.15.2 航道监控数据对接</h6><p class="doc-p">由广东省交通运输路网运行监测工程负责对接航道监控数据，本项目从路网运行监测工程对接航道监控数据进行展示。</p><h5 id="541816-安全应急协同平台一期对接" class="doc-h5">5.4.1.8.16 安全应急协同平台（一期）对接</h5><p class="doc-p">对接安全应急协同平台（一期）应急资源相关数据，包括应急仓库、应急队伍、装备企业的位置、数量相关信息。</p><h5 id="541817-国储中心系统对接" class="doc-h5">5.4.1.8.17 国储中心系统对接</h5><p class="doc-p">对接国储中心系统应急资源相关数据，包括应急仓库、应急人员、物资数量等信息。</p>',106)])]))}}),Ni={class:"doc-html"},Hi=U({__name:"09-应急调度数据采集汇聚服务",setup(c){return(f,t)=>(l(),d("article",Ni,[...t[0]||(t[0]=[Z('<aside class="doc-summary"><div class="doc-summary-title">本章要点</div><ul class="doc-summary-list"><li>服务概述</li><li>服务内容</li><li>数据采集需求分析</li><li>数据资源申请</li><li>采集汇聚实施</li><li>服务范围</li><li>工作量分析</li><li>服务交付物</li></ul></aside><h5 id="542311-服务概述" class="doc-h5">5.4.2.3.1.1 服务概述</h5><p class="doc-p doc-lead">应急调度数据库建立的数据来源多样，不同的数据来源有不同的采集方式和工具，应急调度<span class="doc-fn">数据采集</span>汇聚包括应急调度协同平台各系统数据、厅8 大业务协同相关业务数据、其他省直厅局相关的应急调度指挥数据、交通部相关业务系统等数据，利用不同的方式完成应急调度数据从数据源到原始库的<span class="doc-fn">数据采集</span>汇聚，采集方式包括接口采集、库表采集等，主要目的是确保各类数据能够按时按量安全稳定地汇聚到数据库中。</p><h5 id="542312-服务内容" class="doc-h5">5.4.2.3.1.2 服务内容</h5><h6 id="5423121-数据采集需求分析" class="doc-h6">5.4.2.3.1.2.1 数据采集需求分析</h6><p class="doc-p">对照应急调度的工作场景需求以及<span class="doc-kw">数据仓库</span>建设需求，主要基于具体业务开展需求分析，包括基于前期现状和问题分析，梳理应急调度场景应用时涉及的各项业务数据现状和需求，分析满足相关业务工作场景需求的<span class="doc-kw">数据资源</span>的符合性和<span class="doc-kw">数据资源</span>来源。</p><h6 id="5423122-数据资源申请" class="doc-h6">5.4.2.3.1.2.2 数据资源申请</h6><p class="doc-p">根据业务场景和数据库建设所需的数据，分析资源申请数据是否已在厅一体化数字平台编目挂接、是否已在省一网共享平台编目挂接，依据共享要求按照相应的流程进行申请。</p><h6 id="5423123-采集汇聚实施" class="doc-h6">5.4.2.3.1.2.3 采集汇聚实施</h6><p class="doc-p">依据统一的<span class="doc-kw">数据标准</span>体系对现有业务数据进行采集汇聚，采集方式有通过融合<span class="doc-fn">数据采集</span>交换系统进行采集汇聚库的建立，并完成相关业务数据的库表采集、接口对接采集、数据导入采集，结合业务管理系统的数据填报采集。</p><p class="doc-subhead">（一）库表采集</p><p class="doc-p">对于数据量大、对数据实时性要求较低、定期批量推送的情形下，采用库表交换方式或者库表直采方式，通过采集任务将数据读取至贴源库中。</p><p class="doc-subhead">1. 交换节点初始化</p><p class="doc-p">根据需求进行采集的节点初始化和节点检查。节点初始化需要录入的内容包含：节点IP、端口，节点数据库实例，初始化的数据库账号、密码，部门使用数据的账号、密码，交换中心系统所使用的账号、密码。</p><p class="doc-subhead">2. <span class="doc-fn">数据采集</span>交换服务配置</p><p class="doc-p">基于应急调度业务<span class="doc-kw">数据资源</span>目录清单和数据库的建设需求，配置相应的<span class="doc-fn">数据采集</span>交换任务和相应的调度计划，并对交换服务进行测试。</p><p class="doc-subhead">3. 采集服务监控</p><p class="doc-p">监控所有采集任务的运行情况，监控部门数据是否安全稳定采集到本项目系统，对于异常运行的交换任务及时进行处理，保障采集任务能够按照调度计划正常运行。</p><p class="doc-subhead">（二）接口采集</p><p class="doc-p">对于数据实时性要求高、数据量小的情形下，按照接口规范的要求，由接入部门提供接口信息，包括接口访问地址、输入参数、输出参数、验证方式等，根据提供的数据接口进行定义及编排，配置、运行传输任务将数据接入到贴源库中。</p><ol class="doc-list doc-list-numbered"><li>数据接口联通测试：依据相关接口规范，对<span class="doc-kw">数源</span>部门提供的数据接口进行开发和调用测试，确保接口数据的正常调用；</li><li>接口运行监控：对接口进行实时监控，实时监控接口的调用频率、数据量、响应时间、调用结果等，当接口出现异常情况时及时进行处理，确保接口正常运行。</li></ol><p class="doc-subhead">（三）数据导入</p><p class="doc-p">对于存量应急调度业务系统的业务数据或者是突发情况下需要临时采集的数据，包括无业务系统承载的应急调度业务数据，可以直接通过相关工具实现Excel 导入或者结合生成自定义页面进行填报：</p><p class="doc-subhead">1. 专项数据表配置</p><p class="doc-p">数据运营团队根据数据部门导入需求，通过相关工具为<span class="doc-fn">数据采集</span>部门创建和配置好相应的专项数据表，包括数据表<span class="doc-kw">元数据</span>信息、数据项内容、数据项类型，并配置好数据表的填报方式，包括Excel 导入或页面填报。</p><p class="doc-subhead">2. Excel 导入和审核</p><p class="doc-p">应急调度业务数据有关部门可以通过页面采集模块进行数据在线导入，或者下载数据的导入模板后，根据模板样式直接在Excel 表里填写数据，填写完成后，再将Excel 表导入到系统中。对于填报好的数据，归口管理部门需要进行审核，核对部门填报数据内容是否规范和完整，对于有问题的数据，退回让部门重新导入。数据审核通过后，才正式入库。</p><h5 id="542313-服务范围" class="doc-h5">5.4.2.3.1.3 服务范围</h5><ul class="doc-list doc-list-bullet"><li><span class="doc-kw">应急指挥调度</span>工程：5 个子系统数据不少于80 张数据表汇聚。</li><li>厅其他业务协同相关系统：包括建设管养、综合运输、行政执法等协同平台，在工程应急、公路水路运输应急、执法应急等相关业务数据，不少于10 个系统60 张数据表申请、汇聚等。</li><li>省直及地市其他政府部门业务系统数据：包括省气象台风灾害、台风预报、气象监测，省应急厅应急装备信息、应急预案数据、应急管理专家、应急物资库等不少于30 张数据表申请、对接、汇聚等。</li><li>交通行业相关企事业单位数据：包括交通集团路网运行监测、路网事件报送等不少于30 张数据表对接、汇聚等。</li></ul><h5 id="542314-工作量分析" class="doc-h5">5.4.2.3.1.4 工作量分析</h5><p class="doc-p"><span class="doc-fn">数据采集</span>汇聚通过库表、接口、数据导入等方式，汇聚厅内业务协同平台、省直和地市相关部门、交通行业企事业单位等数据表不少于200 张，投入<span class="doc-kw">数据治理</span>中级人员2 人，进行需求分析、资源申请、汇聚库设计、采集对接、任务建立、数据入库、入库数据检查，采集任务运行监测，采集问题处理等，预估工作量为26 人月。</p><h5 id="542315-服务交付物" class="doc-h5">5.4.2.3.1.5 服务交付物</h5><p class="doc-p">形成《<span class="doc-kw">数据资源</span>对接需求汇总表》《<span class="doc-fn">数据采集</span>汇聚库设计》《<span class="doc-fn">数据采集</span>汇聚运营报告》等资料各1 份。</p>',33)])]))}}),Gi={class:"doc-html"},Wi=U({__name:"10-应急调度数据标准化治理服务",setup(c){return(f,t)=>(l(),d("article",Gi,[...t[0]||(t[0]=[Z('<aside class="doc-summary"><div class="doc-summary-title">本章要点</div><ul class="doc-summary-list"><li>服务概述</li><li>服务内容</li><li>数据标准服务</li><li>质检规则库建设</li><li>数据转换清洗</li><li>应急调度业务系统数据质量评估</li><li>服务范围</li><li>工作量分析</li><li>服务交付物</li></ul></aside><h5 id="542321-服务概述" class="doc-h5">5.4.2.3.2.1 服务概述</h5><p class="doc-p doc-lead">当前，交通领域应急调度<span class="doc-kw">数据治理</span>存在诸多挑战，不同业务部门和系统间<span class="doc-kw">数据标准</span>不统一，如公路、水路等业务部门在数据格式、编码规则上差异显著，导致数据难以融合共享，同时<span class="doc-kw">数据质量</span>参差不齐，存在数据缺失、错误、重复等问题，影响应急决策准确性。应急调度<span class="doc-kw">数据标准</span>化治理服务统一<span class="doc-kw">数据标准</span>，实现公路、水路、城市交通等多业务部门数据的无缝融合，通过数据清洗、校验、评估等闭环管理运营手段，确保应急调度数据的准确性、完整性、一致性。</p><h5 id="542322-服务内容" class="doc-h5">5.4.2.3.2.2 服务内容</h5><h6 id="5423221-数据标准服务" class="doc-h6">5.4.2.3.2.2.1 数据标准服务</h6><p class="doc-p"><span class="doc-kw">数据治理</span>标准化是进行<span class="doc-kw">数据治理</span>、管理的关键突破口和重要手段，一系列政策、法规、规划需要转化为标准和制度才能有效落地。<span class="doc-kw">数据治理</span>标准化既有利于建立健全各种数据管理工作机制、完善业务流程，又有利于提升<span class="doc-kw">数据质量</span>，保障<span class="doc-kw">数据安全</span>合规使用，释放数据价值。应急调度的<span class="doc-kw">数据标准</span>结合业务与系统现状，充分遵循各类成熟的外部标准，并按照国标、省标、行标进行采纳，统一定义字段命名、格式、代码值等<span class="doc-kw">数据标准</span>，构建审核、更新维护机制，通过<span class="doc-kw">元数据标准</span>管理工具进行结构化管理，保证标准的一致性、权威性。<span class="doc-kw">数据标准</span>聚焦落实<span class="doc-kw">数据标准</span>工作，联合数据管理部门，结合业务管理要求制定<span class="doc-kw">数据标准</span>；同时，针对具有较高管理要求的数据，编制制度发文。</p><h6 id="5423222-质检规则库建设" class="doc-h6">5.4.2.3.2.2.2 质检规则库建设</h6><p class="doc-p">针对应急调度相关数据，从基础和业务两个角度配置<span class="doc-kw">数据质量</span>检测规则，在对数据进行质检时直接调用对应的规则，完成对目标数据的质检。</p><ol class="doc-list doc-list-numbered"><li><span class="doc-list-title">基础质检规则的配置</span>基础规则的质检主要参考国家标准《GB∕T36344-2018 信息技术<span class="doc-kw">数据质量</span>评价指标》制定<span class="doc-kw">数据质量</span>的评价标准，从数据的完整性、准确性、有效性、时效性、一致性、可访问性对接入的数据项进行质检规则的制定，并存储在<span class="doc-fn">质检规则库</span>中。 <ol class="doc-list doc-list-sub"><li><span class="doc-list-title">数据完整性检验</span>完整性，描述数据信息缺失的程度，是<span class="doc-kw">数据质量</span>中最基础的一项评估标准。数据缺失的情况可以分为数据信息记录缺失和字段信息记录缺失。数据完整性检测的步骤是：1）对于应急调度汇聚相关数据信息记录缺失的检测，可以通过对比源库上的表数据量和目的库上对应表的数据量来判断数据是否存在缺失。2）对于应急调度汇聚相关数据的字段信息记录进行缺失的检测，选择需要进行完整性检查的字段，计算该字段中空值数据的占比，通常来说表的主键及非空字段空值率为0%。空值率越小说明字段信息越完善，空值率越大说明字段信息缺失的越多。</li><li><span class="doc-list-title">数据的准确性</span>准确性，用于描述一个值与它所描述的客观事物的真实值之间的接近程度，通俗来说就是指数据记录的信息是否存在异常或错误。例如业务员在上报系统上填写用户信息时，手误输错了某一信息，造成了数据库里存在的信息与客观事实不一样。数据准确性的检测较为困难，一般情况下很难解决。在某些特定的情况下，例如性别，年龄，出生日期，籍贯等信息可以通过校验身份证号来检测，前提是确保身份证号码是正确的。</li><li><span class="doc-list-title">数据的有效性</span>有效性，描述数据遵循预定的语法规则的程度，是否符合其定义，比如数据的类型、格式、取值范围等。数据有效性检测的步骤是用户选择需要进行有效性检测的字段，针对每个字段设定有效性规则。有效性规则包括类型有效、格式有效和取值有效等。类型有效检测字段数据的类型是否符合其定义，例如可以通过求和来判断是否是数值型，通过时间操作来判断是否是时间类型。格式有效性检测可以通过正则表达式来判断数据是否与其定义相符。取值有效检测则通过计算最大最小值来判断数据是否在有效的取值范围之内。</li><li><span class="doc-list-title">数据的时效性</span>时效性，是指信息仅在一定时间段内对决策具有价值的属性。数据从生成到录入数据库存在一定的时间间隔，若该间隔较久，就可能导致分析得出的结论失去了借鉴意义。例如当天的数据生成后没有及时的录入数据库或者源库与目的库之间的同步延迟，则会导致统计结果和真实结果存在一定误差。</li><li><span class="doc-list-title">数据的一致性</span>把待检测的表作为主表，首先用户确定一致性检测的主表字段，然后选择需要给定检测的从表和从表字段，设置好主表和从表之间的关联项，关联项可以是多个字段，但是关联项必须是拥有匹配值的相似字段。匹配关联之后检查主表和从表相同或者类似字段值是否一致。</li><li><span class="doc-list-title">数据的可访问性</span>指数据是否可以被正常访问进行使用。</li></ol></li><li><span class="doc-list-title">业务规则的质检的配置</span>业务质检规则的配置主要以应急调度业务需求为主，对救援物资、应急装备、应急避难场所、专家队伍、应急预案业务数据项进行业务质检规则的制定，并封装成接口存储在<span class="doc-fn">质检规则库</span>中。业务质检规则需和业务处室充分沟通调研，以业务处室提出的质量要求作为首要原则，结合业务处室质量要求进行业务质检规则的配置。</li><li><span class="doc-list-title"><span class="doc-fn">质检规则库</span>管理</span>对质检规则提供管理和维护服务，对质检规则的配置、入库、服务、更新、废止等环节提供运营维护服务，保证质检库规则的一致性和权威性，满足日常<span class="doc-kw">数据质检</span>的需求。</li></ol><h6 id="5423223-数据转换清洗" class="doc-h6">5.4.2.3.2.2.3 数据转换清洗</h6><p class="doc-p">制定<span class="doc-kw">数据标准</span>化清洗规则，对汇聚的<span class="doc-kw">应急指挥调度</span>工程各业务系统数据，厅内其他协同平台数据，厅外其他单位数据以及企事业单位等应急调度相关业务的数据，通过ETL 工具对存量数据进行清洗转换，完成<span class="doc-kw">数据标准</span>转换工作，形成标准数据。整个过程包括数据抽取、清洗、转换、加载的过程的工作内容。详细工作如：</p><ul class="doc-list doc-list-bullet"><li>根据目录，生成数据库表交换语句；</li><li>根据目录，生成数据库表交换语句；</li><li>前置数据库创建表交换语句；</li><li>配置交换任务，异构数据库交换转译；</li><li>创建定时规则、交换流程；</li><li><span class="doc-fn">数据交换</span>质量管理等。</li></ul><p class="doc-subhead">（一）数据抽取</p><p class="doc-p">结合应急调度<span class="doc-fn">数据采集</span>汇聚服务接入的数据，从贴源库层进行已汇聚数据的二次抽取。</p><p class="doc-subhead">（二）数据清洗</p><p class="doc-p">数据清洗和校验，从<span class="doc-kw">数据仓库</span>中抽取数据清洗，按一定规则校验数据；要对来自不同系统的数据进行综合的比对清洗，验证各种数据的有效性，数据排重，去除重复的数据；保证数据的正确性和合法性。数据清洗的结果是对各种脏数据进行对应方式的处理，得到标准的、干净的、连续的数据，提供给数据统计、数据挖掘等使用。数据清选要解决数据各种问题，包括但不限于：数据的完整性----例如人的属性中缺少性别、籍贯、年龄等；数据的唯一性----例如不同来源的数据出现重复的情况；数据的权威性----例如同一个指标出现多个来源的数据，且数值不一样；数据的合法性----例如获取的数据与常识不符，年龄大于150 岁；数据的一致性----例如不同来源的不同指标，实际内涵是一样的，或是同一指标内涵不一致。</p><p class="doc-subhead">（三）数据转换</p><p class="doc-p">数据转换对抽取的源数据根据<span class="doc-kw">数据仓库</span>系统模型的要求，进行数据的转换、清洗、拆分、汇总等，保证来自不同系统、不同格式的数据和信息模型具有一致性和完整性，并按要求装入<span class="doc-kw">数据仓库</span>。</p><p class="doc-subhead">（四）数据加载</p><p class="doc-p">将清洗转换后的数据加载到标准化后的明细库中，不仅仅是将数据批量装载到目标表，加载过程还包括对代理键的管理和对维度表的管理等。</p><h6 id="5423224-应急调度业务系统数据质量评估" class="doc-h6">5.4.2.3.2.2.4 应急调度业务系统数据质量评估</h6><p class="doc-p">对应急管理业务相关的多个业务系统汇聚的数据，开展数据评估服务，如应急调度装备、救援物资、应急避难场所、专家队伍、应急预案等各核心业务，挖掘各业务处室对安全生产监管场景下的相关数据指标的<span class="doc-kw">数据质量</span>问题。定位将<span class="doc-kw">数据质量</span>问题进行分级分类，形成<span class="doc-kw">数据质量</span>问题跟踪情况，并设置优先级，解决<span class="doc-kw">数据质量</span>问题。</p><h5 id="542323-服务范围" class="doc-h5">5.4.2.3.2.3 服务范围</h5><ul class="doc-list doc-list-bullet"><li>应急调度<span class="doc-kw">元数据标准</span>：结合国家标准、交通部行业标准、省交通运输厅相关<span class="doc-kw">元数据标准</span>、<span class="doc-kw">主数据标准</span>，并结合应急业务协同平台5 个子系统设计，以及应急调度<span class="doc-kw">数据仓库</span>建设需求，制定交通运输应急调度<span class="doc-kw">元数据标准</span>规范1 份。</li><li>应急调度数据<span class="doc-fn">质检规则库</span>建设：不少于20 个<span class="doc-kw">数据质量</span>规则建立。</li><li>应急调度<span class="doc-fn">数据转换清洗</span>：结合应急调度汇聚数据情况，为<span class="doc-kw">数仓</span>层建设建立不少于200 个<span class="doc-fn">数据转换清洗</span>任务。</li><li>应急调度业务系统<span class="doc-fn">数据质量评估</span>：对<span class="doc-kw">应急指挥调度</span>工程下的业务系统进行应急调度相关业务<span class="doc-fn">数据质量评估</span>，不少于5 个系统。</li></ul><h5 id="542324-工作量分析" class="doc-h5">5.4.2.3.2.4 工作量分析</h5><ul class="doc-list doc-list-bullet"><li>应急调度<span class="doc-kw">元数据标准</span>：投入1 名高级数据架构人员，支撑<span class="doc-kw">元数据</span>梳理、<span class="doc-kw">元数据标准</span>设计、<span class="doc-kw">元数据</span>评审及完善等，预估工作量3 人月。</li><li>应急调度数据<span class="doc-fn">质检规则库</span>建设：投入1 名中级<span class="doc-kw">数据治理</span>人员，支撑不少于20 项质检规则梳理、质检规则设计、质检规则接口开发及配置上线，预估工作量6 人月。</li><li>应急调度<span class="doc-fn">数据转换清洗</span>：投入1 名中级<span class="doc-kw">数据治理</span>人员，支撑不少于200 个<span class="doc-fn">数据转换清洗</span>任务的配置、运行、问题数据处理、数据检查、<span class="doc-kw">数据质量</span>报告输出、清洗任务运行监测及问题处理等，预估工作量30 人月。</li><li>应急调度业务系统<span class="doc-fn">数据质量评估</span>：投入1 名中级<span class="doc-kw">数据治理</span>人员，支撑不少于5 个应急协同平台系统业务<span class="doc-kw">数据质量</span>的评估，并输出应急调度业务<span class="doc-fn">数据质量评估</span>报告，预估工作量10 人月。</li></ul><h5 id="542325-服务交付物" class="doc-h5">5.4.2.3.2.5 服务交付物</h5><p class="doc-p">形成《应急调度业务<span class="doc-kw">元数据</span>规范》1 份，《应急调度业务<span class="doc-fn">质检规则库</span>设计》1 份，《应急调度业务<span class="doc-fn">数据转换清洗</span>报告》1 份，《应急调度业务<span class="doc-kw">数据质量</span>报告》1 份。</p>',28)])]))}}),Ui={class:"doc-html"},Qi=U({__name:"11-应急调度基础库运营服务",setup(c){return(f,t)=>(l(),d("article",Ui,[...t[0]||(t[0]=[Z('<aside class="doc-summary"><div class="doc-summary-title">本章要点</div><ul class="doc-summary-list"><li>服务概述</li><li>服务内容</li><li>应急调度基础库主数据标准制定</li><li>应急调度基础库数据库设计</li><li>应急调度基础库数据汇聚清洗、整合与初始化</li><li>应急调度基础库主数据服务</li><li>服务范围</li><li>工作量分析</li><li>应急装备信息库建设</li><li>应急终端信息库建设</li><li>应急指挥通讯组织库建设</li><li>应急指挥通讯人员库建设</li><li>服务交付物</li></ul></aside><h5 id="542331-服务概述" class="doc-h5">5.4.2.3.3.1 服务概述</h5><p class="doc-p doc-lead">应急调度管理<span class="doc-kw">基础库</span>数据建设是提升应急响应效率和决策质量的核心基础工程。它旨在构建一套权威、准确、一致、共享的核心业务<span class="doc-kw">数据标准</span>和管理体系，为<span class="doc-kw">应急指挥调度</span>系统提供坚实的数据支撑。</p><h5 id="542332-服务内容" class="doc-h5">5.4.2.3.3.2 服务内容</h5><h5 id="542333-应急调度基础库主数据标准制定" class="doc-h5">5.4.2.3.3.3 应急调度基础库主数据标准制定</h5><p class="doc-p">依据国家标准、交通部标准、交通运输行业标准、省交通运输厅相关业务规范，梳理应急调度<span class="doc-kw">主数据</span>范围，梳理应急调度<span class="doc-kw">主数据</span>的<span class="doc-kw">元数据</span>定义，<span class="doc-kw">主数据</span>编目规则以及静态编码值域定义。结合省交通运输厅<span class="doc-kw">主数据</span>管理要求，进行应急调度<span class="doc-kw">主数据标准</span>的统一管理维护更新。</p><h5 id="542334-应急调度基础库数据库设计" class="doc-h5">5.4.2.3.3.4 应急调度基础库数据库设计</h5><p class="doc-p">进行应急调度<span class="doc-kw">主数据</span>库的数据模型设计，为每类<span class="doc-kw">主数据</span>设计逻辑模型和物理模型；进行编码规则制定，统一制定相关<span class="doc-kw">主数据</span>如组织机构代码、人员ID、物资编码、位置编码、事件类型码等<span class="doc-kw">主数据</span>编码体系；进行属性标准定义，明确定义每个属性的名称、含义、数据类型、长度、格式、值域（枚举值）等。</p><h5 id="542335-应急调度基础库数据汇聚清洗整合与初始化" class="doc-h5">5.4.2.3.3.5 应急调度基础库数据汇聚清洗、整合与初始化</h5><ul class="doc-list doc-list-bullet"><li><span class="doc-kw">基础库</span>数据汇聚：基础<span class="doc-fn">数据采集</span>汇聚是<span class="doc-kw">主数据</span>信息融合的起点，结合<span class="doc-fn">数据采集</span>汇聚服务通过接口对接、批量导入等方式，整合各业务系统基础数据（如应急队伍、应急物资）等。</li><li>数据清洗：对从各源系统抽取的数据结合应急调度<span class="doc-kw">数据质量</span>清洗规则进行清洗（去重、补全、纠错、格式转换），确保符合<span class="doc-kw">主数据标准</span>。数据清洗阶段聚焦于剔除“数据噪音”，通过多维度校验提升<span class="doc-kw">数据质量</span>。首先对原始数据进行完整性筛查，识别并标记缺失值（如应急资源的联系方式缺失、地理坐标不全等），采用插值法或基于业务规则的默认值填充关键字段，对无效样本进行隔离存档。其次开展格式标准化处理，统一格式（如将“2023/10/01”“10-01-2023” 转换为“2023-10-01”）、坐标体系（将非WGS84 坐标系转换为标准经纬度）及编码规则（如统一应急队伍编号为“地区代码+ 类型代码+ 序号”）。同时通过重复项检测算法（如基于MD5 哈希值比对）识别并保留最新版本数据，最终形成清洗报告，记录异常数据处理明细。​</li><li>数据匹配与整合：识别不同源系统中的相同实体（如“XX 应急组织”在不同系统可能有不同名称或编码），进行匹配和合并，生成统一记录。数据整合环节旨在构建关联型数据网络。基于应急业务逻辑建立实体关系模型，将分散的资源数据（如救援队伍、物资储备点）、通过唯一标识符（如资源ID、区域编码）进行关联映射。整合后的数据需通过一致性校验，确保字段间逻辑自洽（如“可用物资数量” 不得大于“总储备量”）。​</li><li>数据初始化：将清洗整合后的高质量数据加载到应急管理业务系统，作为初始<span class="doc-kw">主数据</span>。初始化过程完成数据向应用层的适配，并配置索引结构以提升查询效率。同步初始化<span class="doc-kw">元数据</span>信息，包括数据来源、更新周期、字段说明等，支撑后续<span class="doc-kw">数据治理</span>。</li></ul><h5 id="542336-应急调度基础库主数据服务" class="doc-h5">5.4.2.3.3.6 应急调度基础库主数据服务</h5><p class="doc-p"><span class="doc-kw">主数据服务</span>是<span class="doc-kw">基础库</span><span class="doc-kw">主数据</span>应用的核心环节，其核心目标是实现关键数据在各业务系统间的一致性流转，消除信息孤岛。<span class="doc-kw">主数据服务</span>：</p><ul class="doc-list doc-list-bullet"><li>一是配置应急调度<span class="doc-kw">主数据</span>的API 或消息队列等，将<span class="doc-kw">主数据</span>“推送”或“订阅”给应急协同平台内各业务消费系统。</li><li>二是按照厅一体化数字平台<span class="doc-kw">主数据</span>管理要求，在一体化数字平台进行<span class="doc-kw">主数据资源</span>及<span class="doc-kw">主数据服务</span>挂接，为其他业务协同平台提供应急调度<span class="doc-kw">主数据</span>的服务。</li></ul><h5 id="542337-服务范围" class="doc-h5">5.4.2.3.3.7 服务范围</h5><p class="doc-p"><span class="doc-kw">基础库</span>运营服务包括以下<span class="doc-kw">基础库</span>的<span class="doc-kw">数据标准</span>制定，<span class="doc-kw">基础库</span>设计，<span class="doc-kw">主数据</span>的汇聚清洗、整合与初始化，<span class="doc-kw">主数据</span>的服务应用。表5.4-1 <span class="doc-kw">基础库</span>建设内容一览表</p><div class="doc-table-wrap"><table class="doc-table"><thead><tr><th>分类</th><th>库名</th><th>库描述</th><th>备注</th></tr></thead><tbody><tr><td><span class="doc-kw">基础库</span></td><td><span class="doc-fn">应急装备信息库</span></td><td>应急装备的名称、型号、数量、存放位置、技术参数与性能、制造商、生产日期、保修期限等基本数据</td><td></td></tr><tr><td></td><td><span class="doc-fn">应急终端信息库</span></td><td>应急无人机数据、应急布控球数据、应急指挥车数据、应急单兵设备数据</td><td></td></tr><tr><td></td><td><span class="doc-fn">应急指挥通讯组织库</span></td><td>应急指挥组织机构数据，机构名称、机构职责等</td><td></td></tr><tr><td></td><td><span class="doc-fn">应急指挥通讯人员库</span></td><td>应急指挥人员数据，人员名称、联系方式、职责范围、专业技能和紧急联系方式</td><td></td></tr></tbody></table></div><h5 id="542338-工作量分析" class="doc-h5">5.4.2.3.3.8 工作量分析</h5><h6 id="5423381-应急装备信息库建设" class="doc-h6">5.4.2.3.3.8.1 应急装备信息库建设</h6><p class="doc-p">投入1 名高级数据架构人员，支撑标准制定、<span class="doc-kw">基础库</span>数据库设计，预估工作量2 人月；投入1 名中级治理人员，进行装备信息库的数据汇聚、清洗整合、初始化及服务配置等，预估工作量4 人月。</p><h6 id="5423382-应急终端信息库建设" class="doc-h6">5.4.2.3.3.8.2 应急终端信息库建设</h6><p class="doc-p">投入1 名高级数据架构人员，支撑标准制定、<span class="doc-kw">基础库</span>数据库设计，预估工作量3 人月；投入1 名中级治理人员，进行终端信息库的数据汇聚、清洗整合、初始化及服务配置等，预估工作量6 人月。</p><h6 id="5423383-应急指挥通讯组织库建设" class="doc-h6">5.4.2.3.3.8.3 应急指挥通讯组织库建设</h6><p class="doc-p">投入1 名高级数据架构人员，支撑标准制定、<span class="doc-kw">基础库</span>数据库设计，预估工作量1 月；投入1 名中级治理人员，进行组织库的数据汇聚、清洗整合、初始化及服务配置等，预估工作量1 人月。</p><h6 id="5423384-应急指挥通讯人员库建设" class="doc-h6">5.4.2.3.3.8.4 应急指挥通讯人员库建设</h6><p class="doc-p">投入1 名高级数据架构人员，支撑标准制定、<span class="doc-kw">基础库</span>数据库设计，预估工作量0.5 月；投入1 名中级治理人员，进行人员库的数据汇聚、清洗整合、初始化及服务配置等，预估工作量1 人月。</p><h5 id="542339-服务交付物" class="doc-h5">5.4.2.3.3.9 服务交付物</h5><p class="doc-p">形成《应急调度<span class="doc-kw">主数据标准</span>规范》1 份，《应急调度<span class="doc-kw">主数据</span>库设计》1 份，《应急调度<span class="doc-kw">主数据</span>建设及<span class="doc-kw">主数据质量</span>情况报告》1 份。</p>',27)])]))}}),Bi={class:"doc-html"},zi=U({__name:"12-应急调度主题库运营服务",setup(c){return(f,t)=>(l(),d("article",Bi,[...t[0]||(t[0]=[Z('<aside class="doc-summary"><div class="doc-summary-title">本章要点</div><ul class="doc-summary-list"><li>服务概述</li><li>服务内容</li><li>调研梳理分析应急调度主题库数据</li><li>应急调度主题库数据库设计</li><li>应急调度主题库数据抽取融合建立</li><li>服务范围</li><li>工作量分析</li><li>应急装备物资主题库建设</li><li>应急预案主题库建设</li><li>应急知识主题库建设</li><li>应急指挥调度主题库建设</li><li>服务交付物</li></ul></aside><h5 id="542341-服务概述" class="doc-h5">5.4.2.3.4.1 服务概述</h5><p class="doc-p doc-lead">应急调度<span class="doc-kw">主题库</span>运营服务方案，涵盖<span class="doc-kw">主题库</span>设计、<span class="doc-kw">主题库</span><span class="doc-kw">数据资源</span>建设，进行应急调度相关业务数据跨部门系统、多源异构数据的标准化整合，形成应急调度物资、应急预案、<span class="doc-kw">应急指挥调度</span>信息的结构化沉淀，为突发事件处置提供精准决策支持，提升跨区域、多层级应急联动效率。</p><h5 id="542342-服务内容" class="doc-h5">5.4.2.3.4.2 服务内容</h5><h6 id="5423421-调研梳理分析应急调度主题库数据" class="doc-h6">5.4.2.3.4.2.1 调研梳理分析应急调度主题库数据</h6><p class="doc-p">依据国家标准、交通部标准以及省交通运输厅应急调度主题数据管理需求，调研、梳理、分析确定广东省交通运输厅的应急调度类主题数据范围，结合应急调度<span class="doc-kw">基础库</span><span class="doc-kw">主数据</span>的数据元标准定义，分析应急调度平台相关业务系统应急调度业务数据，以及省直相关应急业务单位、交通部业务系统等数据需求，数据来源和<span class="doc-kw">数据标准</span>等。</p><h6 id="5423422-应急调度主题库数据库设计" class="doc-h6">5.4.2.3.4.2.2 应急调度主题库数据库设计</h6><p class="doc-p">根据确定的交通应急调度<span class="doc-kw">主数据</span>及业务数据，进行<span class="doc-kw">主题库</span>数据模型设计，包括应急调度主题相关的应急装备物资、应急预案、应急知识、<span class="doc-kw">应急指挥调度</span>等每类数据的逻辑模型和物理模型；属性标准定义，明确定义每个属性的名称、含义、数据类型、长度、格式、值域（枚举值）等；<span class="doc-kw">主数据</span>对象与业务事实数据的关联编目规则设计，业务事实数据的整合规则设计，业务事实等。</p><h6 id="5423423-应急调度主题库数据抽取融合建立" class="doc-h6">5.4.2.3.4.2.3 应急调度主题库数据抽取融合建立</h6><p class="doc-p">结合应急调度<span class="doc-kw">基础库</span>的<span class="doc-kw">主数据</span>信息，以及应急调度采集汇聚的贴源层数据、应急调度<span class="doc-kw">数据标准</span>化数据，按照应急调度<span class="doc-kw">主题库</span>设计，对每个数据源信息进行分析，建立相关数据抽取任务进行应急调度主题数据抽取，并按业务主体数据融合规则进行主实体对象、实体对象业务事实数据、业务维度数据等进行清洗关联。</p><p class="doc-p">完成数据入库后，对入库数据进行检查验证，包括与应急调度主题资源相关的数据架构是否准确合适，实体对象与业务事实数据关联是否正确，属性编码值是否进行了归一化统一，并根据实际数据库情况进行调整优化。</p><h5 id="542343-服务范围" class="doc-h5">5.4.2.3.4.3 服务范围</h5><p class="doc-p">应急调度<span class="doc-kw">主题库</span>运营服务包括以下<span class="doc-kw">主题库</span>的调研梳理分析，<span class="doc-kw">主题库</span>设计，<span class="doc-kw">主题库</span>的数据抽取、融合、检查核验等。表5.4-2 <span class="doc-kw">主题库</span>建设内容一览表</p><div class="doc-table-wrap"><table class="doc-table"><thead><tr><th>分类</th><th>库名</th><th>库描述</th></tr></thead><tbody><tr><td><span class="doc-kw">主题库</span></td><td>厅级<span class="doc-fn">应急装备物资主题库</span></td><td>应急装备基础数据、装备分类数据、装备调用数据、装备维护数据、装备退役与报废数据、装备状态监控数据、装备培训与考核数据</td></tr><tr><td></td><td><span class="doc-fn">应急预案主题库</span></td><td>应急预案基础数据、应急事件分类数据、应急事件情景样本数据、应急规则规范数据、应急预案模版及流程模版数据、应急模拟演练方案设计数据、应急模拟演练过程数据、应急模拟演练响应模拟数据、应急模拟演练效果评估数据、</td></tr><tr><td></td><td><span class="doc-fn">应急知识主题库</span></td><td>应急政策法规数据、应急预案知识库数据、应急演练知识库数据、应急事件任务处置知识库数据、知识库优化反馈数据</td></tr><tr><td></td><td><span class="doc-fn">应急指挥调度主题库</span></td><td>公路网交通应急事件数据、水路网交通应急事件数据、公路水路工程建设事件数据、应急值班值守数据、应急调度任务数据、应急调度任务处理数据、应急任务处置结果数据、应急任务处置评估数据、应急指挥机构及人员调度数据、无人机调度数据、单兵设备调度数据、应急指挥车调度数据</td></tr></tbody></table></div><h5 id="542344-工作量分析" class="doc-h5">5.4.2.3.4.4 工作量分析</h5><h6 id="5423441-应急装备物资主题库建设" class="doc-h6">5.4.2.3.4.4.1 应急装备物资主题库建设</h6><p class="doc-p">投入1 名高级数据架构人员，支撑<span class="doc-kw">主题库</span>调研梳理分析、<span class="doc-kw">主题库</span>数据库设计，预估工作量2 人月；投入1 名中级治理人员，进行<span class="doc-fn">应急装备物资主题库</span>的数据抽取、清洗整合、数据入库等工作，预估工作量6 人月。</p><h6 id="5423442-应急预案主题库建设" class="doc-h6">5.4.2.3.4.4.2 应急预案主题库建设</h6><p class="doc-p">投入1 名高级数据架构人员，支撑<span class="doc-kw">主题库</span>调研梳理分析、<span class="doc-kw">主题库</span>数据库设计，预估工作量3 人月；投入1 名中级治理人员，进行<span class="doc-fn">应急预案主题库</span>的数据抽取、清洗整合、数据入库检查等工作，预估工作量6 人月。</p><h6 id="5423443-应急知识主题库建设" class="doc-h6">5.4.2.3.4.4.3 应急知识主题库建设</h6><p class="doc-p">投入1 名高级数据架构人员，支撑<span class="doc-kw">主题库</span>调研梳理分析、<span class="doc-kw">主题库</span>数据库设计，预估工作量3 人月；投入1 名中级治理人员，进行<span class="doc-fn">应急知识主题库</span>的数据抽取、清洗整合、数据入库检查等工作，预估工作量8 人月。</p><h6 id="5423444-应急指挥调度主题库建设" class="doc-h6">5.4.2.3.4.4.4 应急指挥调度主题库建设</h6><p class="doc-p">投入1 名高级数据架构人员，支撑<span class="doc-kw">主题库</span>调研梳理分析、<span class="doc-kw">主题库</span>数据库设计，预估工作量3 人月；投入1 名中级治理人员，进行<span class="doc-fn">应急指挥调度主题库</span>的数据抽取、清洗整合、数据入库检查等工作，预估工作量8 人月。</p><h5 id="542345-服务交付物" class="doc-h5">5.4.2.3.4.5 服务交付物</h5><p class="doc-p">《应急调度<span class="doc-kw">主题库</span>数据库设计》1 份，《应急调度<span class="doc-kw">主题库</span>数据建设及<span class="doc-kw">数据质量</span>情况报告》1 份。</p>',25)])]))}}),Vi={class:"doc-html"},Yi=U({__name:"13-应急调度专题库运营服务",setup(c){return(f,t)=>(l(),d("article",Vi,[...t[0]||(t[0]=[Z('<aside class="doc-summary"><div class="doc-summary-title">本章要点</div><ul class="doc-summary-list"><li>服务概述</li><li>服务内容</li><li>调研梳理分析应急调度专题数据资源</li><li>专题库数据指标及数据库设计</li><li>专题库数据抽取及数据指标开发</li><li>服务范围</li><li>工作量分析</li><li>公路大客流大货流专题库建设</li><li>航道专题库建设</li><li>海峡办专题库建设</li><li>重点路段专题库建设</li><li>恶劣天气专题库建设</li><li>重点保障工作专题库建设</li><li>重点车辆监测专题库建设</li></ul></aside><h5 id="542351-服务概述" class="doc-h5">5.4.2.3.5.1 服务概述</h5><p class="doc-p doc-lead">应急调度<span class="doc-kw">专题库</span>运营服务方案，涵盖专题题库设计、<span class="doc-kw">数据资源</span>建设，形成公路大客流大货流专题、航道专题、海峡办专题等专题应用的业务明细数据和应用指标数据结构化沉淀，为突发事件处置提供精准决策支持，提升跨区域、多层级应急联动效率。</p><h5 id="542352-服务内容" class="doc-h5">5.4.2.3.5.2 服务内容</h5><h6 id="5423521-调研梳理分析应急调度专题数据资源" class="doc-h6">5.4.2.3.5.2.1 调研梳理分析应急调度专题数据资源</h6><p class="doc-p">深入调研应急调度专题目标领域（如公路大客流大货流专题、航道专题、海峡办专题、恶劣天气专题）等，明确核心业务痛点、决策瓶颈与发展目标，确定<span class="doc-kw">专题库</span>数据库及应用需解决的核心问题。围绕业务目标，明确需要哪些主题、专题数据（如应急装备物资、应急预案、应急调度、天气气象等）、数据粒度、时间跨度、来源（内部系统、外部接口、物联网设备、公开数据）以及质量要求。</p><h6 id="5423522-专题库数据指标及数据库设计" class="doc-h6">5.4.2.3.5.2.2 专题库数据指标及数据库设计</h6><p class="doc-p">专题应用指标梳理设计：根据应急调度专题应用需求，梳理应急调度工作专题的业务指标梳理设计，包括指标名称、指标计算口径、指标数据来源分析、指标<span class="doc-fn">数据采集</span>频率要求等；同时按照专题业务分析的维度要求，形成时间维度、部门维度、应急业务维度等不限于多种单一维度组合的复合维度的维度指标设计。</p><p class="doc-p">模型设计与优化：依据专题特性，以设计好的指标体系和维度分析需求为直接驱动，选择并优化数据模型（如星型/雪花模式维度模型、宽表模型、图模型，星型/雪花模型是支撑维度分析的理想选择）。设计高效的表结构、索引、分区策略，设计事实表（存储度量值/指标数值）、维度表（存储维度属性）、指标聚合宽表（预计算常用汇总指标）的结构、索引和分区策略，确保模型能高效支持预期的指标查询和分析。</p><h6 id="5423523-专题库数据抽取及数据指标开发" class="doc-h6">5.4.2.3.5.2.3 专题库数据抽取及数据指标开发</h6><p class="doc-p">以专题应用的指标设计为依据，并根据应急调度相关专题应用需求和专题数据的范围，抽取应急调度<span class="doc-kw">数据仓库</span>贴源层、<span class="doc-kw">主题库</span>等数据，对接需要的外部系统数据，分别汇聚归集相关的公路大客流大货流、航道专题、天气及重点车辆监测等<span class="doc-kw">数据资源</span>。</p><ul class="doc-list doc-list-bullet"><li>数据清洗与标准化：清洗脏数据，进行格式、单位、代码的统一标准化。特别注意清洗规则需满足指标计算的准确性要求（如缺失值处理方式需符合指标逻辑）。</li><li>数据转换与融合：基于设计好的指标体系和维度，进行关键字段映射、代码转换、复杂计算（指标预计算或预备中间表）、实体识别与跨源关联融合，为指标的计算准备高质量、结构化的基础数据，基于中间表或者指标宽表组合生成最终业务指标。</li><li>质量管控与<span class="doc-kw">元数据</span>管理：建立<span class="doc-kw">数据质量</span>规则（完整性、准确性、一致性、时效性），特别关注支撑关键指标的核心字段的质量。构建<span class="doc-kw">元数据</span>，明确记录指标的定义、公式、数据血缘（来源字段和计算过程）。</li></ul><h5 id="542353-服务范围" class="doc-h5">5.4.2.3.5.3 服务范围</h5><p class="doc-p">应急调度专题题库运营服务包括以下<span class="doc-kw">主题库</span>的调研梳理分析，<span class="doc-kw">主题库</span>设计，<span class="doc-kw">主题库</span>的数据抽取、融合、检查核验等。表5.4-3 <span class="doc-kw">专题库</span>建设内容一览表</p><div class="doc-table-wrap"><table class="doc-table"><thead><tr><th>分类</th><th>库名</th><th>库描述</th></tr></thead><tbody><tr><td></td><td><span class="doc-fn">公路大客流大货流专题库</span></td><td>路段数据、收费站数据、服务区数据、客货车路段通行数据、客货车服务区停留数据、客货车收费站通行数据、</td></tr><tr><td></td><td><span class="doc-fn">航道专题库</span></td><td>航道基础数据、航道视频清单数据、水运航道应急事件数据</td></tr><tr><td></td><td><span class="doc-fn">海峡办专题库</span></td><td>风险点位数据、海峡办视频清单数据、海峡应急事件数据</td></tr><tr><td></td><td>重点路段专题</td><td>公路路网数据、易拥堵路段数据、易灾害点路段数据、事故多发路段数据、重点路段视频数据、重点路段联络人数据、重点路段车流量数据、重点路段拥堵数据</td></tr><tr><td></td><td>恶劣天气专题</td><td>第三方气象数据、隐患点台风数据、隐患点降雨量数据、隐患点天气预警数据、隐患点风力监测数据</td></tr><tr><td></td><td>重点保障工作专题</td><td>重点保障任务数据、重点路段及交通设施数据、应急事件基础数据、应急事件处理数据</td></tr><tr><td></td><td>重点车辆监测专题</td><td>重点车辆轨迹数据、重点车辆告警数据、重点车辆基础数据、重点监测任务预警数据</td></tr></tbody></table></div><h5 id="542354-工作量分析" class="doc-h5">5.4.2.3.5.4 工作量分析</h5><h6 id="5423541-公路大客流大货流专题库建设" class="doc-h6">5.4.2.3.5.4.1 公路大客流大货流专题库建设</h6><p class="doc-p">投入 1 名高级数据架构人员，支撑<span class="doc-kw">专题库</span>调研梳理分析、<span class="doc-kw">专题库</span>数据库数据指标及数据库设计，预估工作量 3 人月；投入 1 名中级治理人员，进行<span class="doc-fn">公路大客流大货流专题库</span>数据抽取及数据指标开发的数据抽取、清洗整合、数据入库等工作，预估工作量 10 人月。</p><h6 id="5423542-航道专题库建设" class="doc-h6">5.4.2.3.5.4.2 航道专题库建设</h6><p class="doc-p">投入 1 名高级数据架构人员，支撑<span class="doc-kw">专题库</span>调研梳理分析、<span class="doc-kw">专题库</span>数据库数据指标及数据库设计，预估工作量 2 人月；投入 1 名中级治理人员，进行<span class="doc-fn">航道专题库</span>数据抽取及数据指标开发的数据抽取、清洗整合、数据入库等工作，预估工作量 6 人月。</p><h6 id="5423543-海峡办专题库建设" class="doc-h6">5.4.2.3.5.4.3 海峡办专题库建设</h6><p class="doc-p">投入 1 名高级数据架构人员，支撑<span class="doc-kw">专题库</span>调研梳理分析、<span class="doc-kw">专题库</span>数据库数据指标及数据库设计，预估工作量 1.5 人月；投入 1 名中级治理人员，进行<span class="doc-fn">海峡办专题库</span>数据抽取及数据指标开发的数据抽取、清洗整合、数据入库等工作，预估工作量 4 人月。</p><h6 id="5423544-重点路段专题库建设" class="doc-h6">5.4.2.3.5.4.4 重点路段专题库建设</h6><p class="doc-p">投入 1 名高级数据架构人员，支撑<span class="doc-kw">专题库</span>调研梳理分析、<span class="doc-kw">专题库</span>数据库数据指标及数据库设计，预估工作量 2 人月；投入 1 名中级治理人员，进行重点路段<span class="doc-kw">专题库</span>数据抽取及数据指标开发的数据抽取、清洗整合、数据入库等工作，预估工作量 6 人月。</p><h6 id="5423545-恶劣天气专题库建设" class="doc-h6">5.4.2.3.5.4.5 恶劣天气专题库建设</h6><p class="doc-p">投入 1 名高级数据架构人员，支撑<span class="doc-kw">专题库</span>调研梳理分析、<span class="doc-kw">专题库</span>数据库数据指标及数据库设计，预估工作量 2 人月；投入 1 名中级治理人员，进行重点路段<span class="doc-kw">专题库</span>数据抽取及数据指标开发的数据抽取、清洗整合、数据入库等工作，预估工作量6 人月。</p><h6 id="5423546-重点保障工作专题库建设" class="doc-h6">5.4.2.3.5.4.6 重点保障工作专题库建设</h6><p class="doc-p">投入1 名高级数据架构人员，支撑<span class="doc-kw">专题库</span>调研梳理分析、<span class="doc-kw">专题库</span>数据库数据指标及数据库设计，预估工作量3 人月；投入1 名中级治理人员，进行重点路段<span class="doc-kw">专题库</span>数据抽取及数据指标开发的数据抽取、清洗整合、数据入库等工作，预估工作量8 人月。</p><h6 id="5423547-重点车辆监测专题库建设" class="doc-h6">5.4.2.3.5.4.7 重点车辆监测专题库建设</h6><p class="doc-p">投入1 名高级数据架构人员，支撑<span class="doc-kw">专题库</span>调研梳理分析、<span class="doc-kw">专题库</span>数据库数据指标及数据库设计，预估工作量4 人月；投入1 名中级治理人员，进行重点路段<span class="doc-kw">专题库</span>数据抽取及数据指标开发的数据抽取、清洗整合、数据入库等工作，预估工作量10 人月。</p>',30)])]))}}),Qn=[{key:"design",sourceRef:"5.4.1",title:"数据融合子系统设计",level:3,targetKey:"req-3-2-7",description:"数据融合子系统的建设背景、系统定位与 AI、地图、视频、通信、服务、数据交换、门户与外部接口八大能力域。",items:[{key:"req-3-2-7",title:"数据融合子系统建设需求",sourceRef:"3.2.7",level:4,component:bi},{key:"design-ai",title:"AI 能力系统",sourceRef:"5.4.1.1",level:4,component:Ki},{key:"design-map",title:"地图引擎能力",sourceRef:"5.4.1.2",level:4,component:xi},{key:"design-video",title:"视频监控能力",sourceRef:"5.4.1.3",level:4,component:Si},{key:"design-comm",title:"融合通信能力",sourceRef:"5.4.1.4",level:4,component:Ai},{key:"design-service",title:"融合服务",sourceRef:"5.4.1.5",level:4,component:Ti},{key:"design-data",title:"应急数据采集与交换",sourceRef:"5.4.1.6",level:4,component:Fi},{key:"design-portal",title:"应急融合服务门户",sourceRef:"5.4.1.7",level:4,component:Mi},{key:"design-external",title:"外部系统接口对接",sourceRef:"5.4.1.8",level:4,component:Ei}]},{key:"operations",sourceRef:"5.4.2.3",title:"数据融合治理运营服务",level:3,hidden:!0,description:"采集汇聚、标准化治理、基础库、主题库与专题库五类运营服务。",items:[{key:"ops-collect",title:"数据采集汇聚服务",sourceRef:"5.4.2.3.1",level:4,component:Hi},{key:"ops-standard",title:"数据标准化治理服务",sourceRef:"5.4.2.3.2",level:4,component:Wi},{key:"ops-base",title:"基础库运营服务",sourceRef:"5.4.2.3.3",level:4,component:Qi},{key:"ops-topic",title:"主题库运营服务",sourceRef:"5.4.2.3.4",level:4,component:zi},{key:"ops-special",title:"专题库运营服务",sourceRef:"5.4.2.3.5",level:4,component:Yi}]}],ji=Qn.flatMap(c=>c.items),hs=`# 3.8 数据融合子系统

### 3.8.1 功能总图
图3.8-1 数据融合子系统功能总图

<!-- PDF 第 539 页 -->

### 3.8.2 功能描述表
表3.8-1 数据融合子系统功能描述表

| 编号 | 模块名称 | 模块功能简述 | 主要功能点 |
| --- | --- | --- | --- |
| 1 | AI 能力系统 | 模型管理、微调、推理、智能体、算法服务 | 模型管理、微调服务、推理引擎、智能体应用 |
| 2 | 地图引擎能力 | GIS 地图、路径规划、标绘、图层、热力图、空间分析 | 地图服务、路径规划、标绘功能、图层控制、空间分析 |
| 3 | 视频监控能力 | 统一接入、汇聚、管理全省交通视频资源，提供实时预览、云台控制、抓图、录像查询等能力 | 视频实时预览数据、云台控制信息、手动抓图图片数据、视频查询结果列表数据 |
| 4 | 融合通信能力 | 融合视频会议、语音、短信、粤政易、卫星电话等多种通信方式，实现应急指令一键下达 | 创建会议模板信息、预约会议取消申请信息、预约会议变更信息、查询会议列表信息、查询结果详情信息、会议录制列表信息、会议录制详情信息、录制文件下载配置信息 |
| 5 | 融合服务 | 统一封装各类服务接口，实现服务注册、授权、调用、监控、网关统一管控 | 服务接口管理维护信息、服务授权信息、服务调用日志信息、服务网关信息 |
| 6 | 应急数据采集与交换 | 提供可视化工作流、数据采集、数仓管理、数源管理、应用系统管理，实现数据全流程自动化汇聚治理 | 数据采集、数仓管理、数源管理、工作流定义、应用系统管理 |
| 7 | 应急融合服务门户 | 面向应急指挥人员提供统一工作门户，集成待办、消息、知识、日程、数据看板、子系统入口 | 门户框架、数据看板、子系统集成 |
| 8 | 外部系统接口 | 对接厅一体化、集团、部路网、气象、粤政易等系统 | 接口对接、数据同步、权限鉴权、容错处理 |

<!-- PDF 第 540 页 -->

### 3.8.3 业务角色一览表
表3.8-2 数据融合子系统业务角色一览

| 机构 | 业务角色 | 拥有权限 |
| --- | --- | --- |
| 政务服务和应急指挥中心 | 总管理员 | 1. AI 能力系统：全权限管理（知识、模型、智能体配置与运维）2. 地图引擎能力：全权限配置（地图服务、轨迹、仿真、图层）3. 视频监控能力：全权限接入、预览、云台、回看、设备管理4. 融合通信能力：全权限会议创建、预约、录制、下载5. 应急数据采集与交换：全流程管理（采集、同步、对账、质检、调度）6. 应急融合服务门户：全权限框架配置、看板、集成、权限7. 外部系统接口对接：全权限配置、对接、认证、加密、日志 |
|  | 政急中心科室值班人员 | 1. AI 能力：查看知识、检索、调用智能助手、生成建议2. 地图引擎：查看地图、轨迹、标绘、查询分析3. 视频监控：查看实时视频、回放、截图、轮巡4. 融合通信：加入会议、查看通讯录、发起呼叫5. 数据服务：查看共享数据、报表、接口状态6. 外部接口：查看已对接数据、同步状态 |
|  | 政急中心值班室值班人员 | 1. AI 能力：仅查看公开知识、基础检索2. 地图引擎：仅查看态势、点位、路况图层3. 视频监控：仅查看授权视频、公共画面4. 融合通信：仅加入会议、查看状态5. 数据服务：仅查看公开数据看板 |

<!-- PDF 第 541 页 -->

| 机构 | 业务角色 | 拥有权限 |
| --- | --- | --- |
|  | 技术保障人员 | 1. AI 能力：模型部署、环境维护、接口调试2. 地图引擎：服务配置、图层维护、定位保障3. 视频监控：设备接入、网关配置、通道保障4. 融合通信：会议服务器、线路、故障排查5. 数据采集：任务调度、异常处理、数据同步6. 融合门户：页面维护、权限配置、集成调试7. 外部接口：对接调试、密码服务、安全运维 |
|  | 普通用户 | 1. AI 能力：仅查看公开知识条目2. 地图引擎：仅查看公共交通态势图3. 视频监控：仅查看开放视频画面4. 数据服务：仅查看公开数据展示 |
| 广东省公路事务中心、广东省航道事务中心、省交通集团、综合运输处、海峡办、厅科技处、公路运营管理处 | 管理员 | 1. 本领域数据：查看、上报、同步、管理业务数据2. 地图服务：查看专题图层、态势分析、路径查询3. 视频监控：查看管辖范围视频资源4. 数据接口：查看数据同步与对接状态 |
|  | 普通用户 | 1. 地图引擎：查看本领域交通态势、路况信息2. 视频监控：仅查看授权公开画面3. 数据服务：查看本领域公开数据 |
| 各地市交通运输局、各地市公路事务中心 | 管理员 | 1. 本市/辖区数据：汇聚、上报、同步交通数据2. 地图服务：查看全域交通态势、标绘、分析3. 视频与通信：调用辖区视频、终端、会议资料4. 接口对接：查看市级与省级数据同步状态 |

<!-- PDF 第 542 页 -->

| 机构 | 业务角色 | 拥有权限 |
| --- | --- | --- |
|  | 普通用户 | 1. 地图服务：查看航道运行态势2. 视频查看：仅查看授权视频3. 数据服务：仅查看航道公开数据 |

### 3.8.4 详细功能
#### 3.8.4.1 AI能力系统
AI 能力系统是数据融合子系统的智能引擎，提供知识管理、模型接入管理、AI 智
能体应用管理三大能力，实现应急知识结构化、模型统一调度、智能体流程自动化，为
业务系统提供AI 决策支撑。
图3.8-2 AI 能力系统
##### 3.8.4.1.1 知识管理能力
对交通应急领域知识进行统一入库、解析、切片、向量化、索引构建与智能查询，
形成可检索、可复用、可推理的应急知识体系。

<!-- PDF 第 543 页 -->

| 模块 | 功能点 |
| --- | --- |
| 知识管理能力 | 知识文件入库数据 |
|  | 知识文件检索结果信息 |
|  | 文档解析结果信息 |
|  | 知识切片信息 |
|  | 知识重新构建向量数据 |
|  | 知识语义、实体索引信息 |
|  | 知识查询结果数据 |

###### 3.8.4.1.1.1 功能点
###### 3.8.4.1.1.1.1 知识文件入库数据
功能点描述：支持知识文件的统一管理，用户可创建知识文件并维护文件基础信息，
包括文件名称、文件类型、所属知识库、上传时间、上传来源、解析状态等内容。系统
支持上传Word、PPT、Excel、PDF、TXT、Markdown、图片等格式文件，并对上传文件进
行统一存储管理。
支持对非结构化文件进行知识解析处理，将文档内容进行切片、向量化后写入向量
数据库。支持配置向量数据库类型、向量嵌入模型、向量维度等参数。系统支持通过向
量模型对知识内容生成向量数据，用于后续语义检索、混合检索及知识召回。
支持文件导入功能，可通过本地上传方式导入文件，也支持通过对象存储方式导入
知识文件。对象存储支持接入云对象存储及MinIO 数据源，用户可配置对象存储地址、
访问密钥、存储桶名称等信息，实现批量文件接入。
支持数据源接入管理，可新增PostgreSQL、MySQL、OSS、ODPS、MinIO 等数据源。
支持配置数据源名称、连接地址、认证信息、数据库类型、同步方式等内容，并支持对

<!-- PDF 第 544 页 -->

接入的数据源进行连接测试。
支持按照数据源名称、接入方式、接入状态等条件对数据源进行筛选查询。支持查
看数据源接入状态、最近同步时间、同步结果、异常信息等内容。
支持文档库管理功能，包括文档库新增、编辑、删除、查看等操作。用户可维护文
档库名称、文档库描述、所属分类、发布状态、共享状态等信息。已发布上架的文档库
不允许删除，仅支持停用或下架处理。
支持知识文件解析状态管理，展示文件解析中、解析完成、解析失败等状态信息。
支持查看知识切片内容、切片数量、向量生成状态及知识启用状态。支持对知识切片进
行启用、停用、重新解析等操作。
核心字段：知识库名称、知识库描述、知识库分类、发布状态。
###### 3.8.4.1.1.1.1.1 输入
用户或系统发起知识文件入库数据相关操作（支持知识文件的统一管理，用户可创
建知识文件并维护文件基础信息，包括文件名称、文件类型、所属知识库、上传时间、
上传来源、解析状态等内容），提交知识库名称、知识库描述、知识库分类、发布状态
等信息，系统同步校验用户的操作权限与参数合规性，触发知识文件入库数据处理流程。
###### 3.8.4.1.1.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回知识库名称、知
识库描述、知识库分类、发布状态等核心字段信息，输出知识文件入库数据查询展示结
果及生成结果；若操作失败，返回具体错误原因，如权限不足、知识库名称参数不合法、
知识文件入库数据配置异常等。

<!-- PDF 第 545 页 -->

###### 3.8.4.1.1.1.2 知识文件检索结果信息
功能点描述：支持用户对知识库及知识文件进行统一检索查询，用户可通过输入关
键字、发布状态等条件对知识库内容进行筛选。系统支持根据知识库名称、知识描述、
文件名称、文件内容摘要等信息进行模糊匹配查询，并返回符合条件的知识库及文件数
据。
支持按照发布状态对知识库进行筛选，包括未发布、已发布、已下架等状态。支持
根据知识来源类型对知识库进行分类检索，包括文档模式、指定数据库、第三方API、
法规标准、导入数据集、问答对等类型。
支持知识文件关键字检索，用户输入检索内容后，系统从知识库表及知识切片数据
中查询相关内容，并根据匹配结果返回对应知识文件。支持展示知识名称、知识类型、
创建时间、知识描述、解析状态等基础信息。
核心字段：知识库名称、知识库描述、知识库分类、发布状态。
###### 3.8.4.1.1.1.2.1 输入
用户或系统发起知识文件检索结果信息相关操作（支持用户对知识库及知识文件进
行统一检索查询，用户可通过输入关键字、发布状态等条件对知识库内容进行筛选），
提交知识库名称、知识库描述、知识库分类、发布状态等信息，系统同步校验用户的操
作权限与参数合规性，触发知识文件检索结果信息处理流程。
###### 3.8.4.1.1.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回知识库名称、知
识库描述、知识库分类、发布状态等核心字段信息，输出知识文件检索结果信息查询展
示结果及文件处理结果；若操作失败，返回具体错误原因，如权限不足、知识库名称参

<!-- PDF 第 546 页 -->

数不合法、知识文件检索结果信息接口调用失败等。
###### 3.8.4.1.1.1.3 文档解析结果信息
功能点描述：支持用户通过关键字、知识库名称、发布状态等条件对知识库进行检
索查询。用户输入检索内容后，系统基于知识库中的知识切片数据进行匹配查询，并返
回命中的知识文件、知识切片及摘要信息。支持关键词检索、语义检索及混合检索方式，
语义检索通过向量模型对用户问题进行向量化后，从向量数据库中召回相似知识内容。
支持配置知识召回数量、召回阈值、重排模型等参数。支持查看知识命中分值、知
识来源文件、知识切片内容、知识更新时间等信息。支持知识命中测试，可输入测试问
题查看知识召回结果。
核心字段：文件格式、文件大小、上传时间、所属知识库、解析状态。
###### 3.8.4.1.1.1.3.1 输入
用户或系统发起文档解析结果信息相关操作（支持用户通过关键字、知识库名称、
发布状态等条件对知识库进行检索查询），提交文件格式、文件大小、上传时间、所属
知识库、解析状态等信息，系统同步校验用户的操作权限与参数合规性，触发文档解析
结果信息处理流程。
###### 3.8.4.1.1.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回文件格式、文件
大小、上传时间、所属知识库、解析状态等核心字段信息，输出文档解析结果信息查询
展示结果及文件处理结果；若操作失败，返回具体错误原因，如权限不足、文件格式参
数不合法、文档解析结果信息配置异常等。

<!-- PDF 第 547 页 -->

###### 3.8.4.1.1.1.4 知识切片信息
功能点描述：切片策略：支持根据文本块大小拆分、调用小模型能力按语义拆分、
按拆分符自定义拆分三种方式进行文档切片；支持拆分文本块大小自定义；支持拆分符
自定义；支持将图片单独拆分。
增强策略：支持启用指代消解功能进行知识消歧；支持自动进行语法纠错处理；支
持自动进行语义补全处理。
知识摘要信息：支持对文章生成摘要；支持对图片生成摘要；支持自定义图片描述
提示词，规范图片描述信息，调用多模态模型自动对文档中对图片生成描述信息，提高
知识检索准确度；支持自定义表格提示词，调用大模型对表格自动生成描述信息。
知识切片为用户提供多种方式进行文档内容切分，支持将文档内容按语义拆分（将
文档内容转为向量后利用bert 模型拆分文档内容）或者按预设的文本块大小切分成标
题、段落、表格、列表等不同类型的文本块，支持用户灵活编辑更改知识切分策略。
识别标题：是否自动识别标题，true：调用模型自动识别标题，fasle：不自动识
别标题，根据文档的标题标签识别。
拆分方式：支持根据文本块大小拆分和调用小模型能力按语义拆分两种拆分方式；
ocr 识别：支持paddle 单语言图片内容识别和tesseract 多语言图片识别；
图像版面分析：支持将文档图像转化为结构化数据，方便后续ocr、信息提取、数
据分析等任务。
表格图像最长边：支持用户指定图像在传入表格结构模型进行预测的最长长度，如
果图像超出预设长度的内容将不会被识别。
灰色水印去除：支持自动去除文档灰色水印。

<!-- PDF 第 548 页 -->

mllm 图片描述：支持调用多模态模型对文档中的图像生成描述信息。
mllm 表格识别：支持调用多模态模型对表格中的图像生成描述信息。
mllmPPT 识别：支持调用多模态模型对PPT 页面内容进行识别生成markdown 数据。
文本块长度：支持用户自定义知识切片的最大长度，数值设置越大对于概括性问题
的回答生成会更准确，数值设置越小对于检索细节类问题的准确性会更高；
生成摘要：支持自动生成每个知识切片的摘要；
Excel 拆分模式：表头行数支持用户自定义Excel 上传的表头行数，0 无表头；
1 表头为第一行；2 前两行是表头；-1 使用大模型判断表头；Excel 拆分模式支持
用户自定义Excel 拆分模式，按文本块大小拆分或者按表头+行数据进行拆分；生成
html：支持将拆分的表格生成为html 文件；生成json：支持将拆分的表格生成为json
文件；
文件类型：这次用户自定义拆分的文件类型，normal 为普通表格，qa 为问答类型
表格；
自定义编号：支持自动识别获取doc 文档自定义编号；
PDF 拆分模式：common 使用PDFplumber 组件解析PDF，ocr 使用paddle_ocr 解析
PDF；
PDF 表格识别：lines_strict：只有当线条完全对齐时才会被判断为表格的一部
分（精确识别）；lines 通过PDF 垂直和水平线条来确定边界（模糊识别）。
核心字段：知识库名称。
###### 3.8.4.1.1.1.4.1 输入
用户或系统发起知识切片信息相关操作（支切片策略：支持根据文本块大小拆分、

<!-- PDF 第 549 页 -->

调用小模型能力按语义拆分、按拆分符自定义拆分三种方式进行文档切片），提交知识
库名称等信息，系统同步校验用户的操作权限与参数合规性，触发知识切片信息处理流
程。
###### 3.8.4.1.1.1.4.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回知识库名称等核
心字段信息，输出知识切片信息查询展示结果及统计分析结果；若操作失败，返回具体
错误原因，如权限不足、知识库名称参数不合法、知识切片信息配置异常等。
###### 3.8.4.1.1.1.5 知识重新构建向量数据
功能点描述：支持向量嵌入模型（bert、word2vec）的能力，将知识库现有存储的
文档重新解析分段后，转换成多维向量表示，向量数据导入到用户指定的高性能向量数
据库。
核心字段：知识库名称。
###### 3.8.4.1.1.1.5.1 输入
用户或系统发起知识重新构建向量数据相关操作（支持向量嵌入模型（bert、
word2vec）的能力，将知识库现有存储的文档重新解析分段后，转换成多维向量表示，
向量数据导入到用户指定的高性能向量数据库），提交知识库名称等信息，系统同步校
验用户的操作权限与参数合规性，触发知识重新构建向量数据处理流程。
###### 3.8.4.1.1.1.5.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回知识库名称等核
心字段信息，输出知识重新构建向量数据处理结果；若操作失败，返回具体错误原因，

<!-- PDF 第 550 页 -->

如权限不足、知识库名称参数不合法、知识重新构建向量数据配置异常等。
###### 3.8.4.1.1.1.6 知识语义、实体索引信息
功能点描述：支持知识库管理员手工维护文档分片增强知识库的检索能力。利用自
然语言处理技术，自动分析并识别文档中的关键信息段落，按照语义相关性生成初步的
索引结构。支持知识库管理员根据实际需求手工更改索引信息。
支持NER 识别算法自动分析文档，基于知识概念识别技术将文本内容分解为，如人
物、地点、事件、专业术语等结构化的知识实体。支持知识库管理员通过界面添加、删
除、合并或重新定义实体。
核心字段：知识库名称。
###### 3.8.4.1.1.1.6.1 输入
用户或系统发起知识语义、实体索引信息相关操作（支持知识库管理员手工维护文
档分片增强知识库的检索能力），提交知识库名称等信息，系统同步校验用户的操作权
限与参数合规性，触发知识语义、实体索引信息处理流程。
###### 3.8.4.1.1.1.6.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回知识库名称等核
心字段信息，输出知识语义、实体索引信息查询展示结果及统计分析结果；若操作失败，
返回具体错误原因，如权限不足、知识库名称参数不合法、知识语义、实体索引信息生
成失败等。
###### 3.8.4.1.1.1.7 知识查询结果数据
功能点描述：支持语义检索、全文检索、混合检索。

<!-- PDF 第 551 页 -->

核心字段：查询ID、用户ID、查询语句、返回结果列表、匹配度、响应时间、调
用模型。
###### 3.8.4.1.1.1.7.1 输入
用户或系统发起知识查询结果数据相关操作（支持语义检索、全文检索、混合检索），
提交查询ID、用户ID、查询语句、返回结果列表、匹配度、响应时间、调用模型等信
息，系统同步校验用户的操作权限与参数合规性，触发知识查询结果数据处理流程。
###### 3.8.4.1.1.1.7.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回查询ID、用户
ID、查询语句、返回结果列表、匹配度、响应时间、调用模型等核心字段信息，输出知
识查询结果数据查询展示结果；若操作失败，返回具体错误原因，如权限不足、查询ID
参数不合法、知识查询结果数据配置异常等。
##### 3.8.4.1.2 模型接入管理能力
统一接入、配置、调度、监控各类AI 模型，实现模型统一纳管、按需调用、状态
可视、权限可控。

| 模块 | 功能点 |
| --- | --- |
| 模型接入管理能力 | 模型接入参数配置信息 |
|  | 模型目录管理信息 |
|  | 模型运行调用状态信息 |

<!-- PDF 第 552 页 -->

###### 3.8.4.1.2.1 功能点
###### 3.8.4.1.2.1.1 模型接入参数配置信息
功能点描述：实现大模型（如DeepSeek-V3/R1 671B 模型）、小模型服务（分类、
检测等）接入AI 能力系统，包括模型名称、版本号、接入时间等，支持模型接入，可
为自定义模型修改参数配置，允许用户按照键值对的形式灵活配置模型参数，从而快速
对接第三方大模型。
核心字段：模型名称、版本号、接入时间。
###### 3.8.4.1.2.1.1.1 输入
用户或系统发起模型接入参数配置信息相关操作（实现大模型（如DeepSeek-V3/R1
671B 模型）、小模型服务（分类、检测等）接入到AI 能力系统，包括模型名称、版本
号、接入时间等，支持模型接入，可为自定义模型修改参数配置，允许用户按照键值对
的形式灵活配置模型参数，从而快速对接第三方大模型），提交模型名称、版本号、接
入时间等信息，系统同步校验用户的操作权限与参数合规性，触发模型接入参数配置信
息处理流程。
###### 3.8.4.1.2.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回模型名称、版本
号、接入时间等核心字段信息，输出模型接入参数配置信息接口处理结果及管理维护结
果；若操作失败，返回具体错误原因，如权限不足、模型名称参数不合法、模型接入参
数配置信息配置异常等。

<!-- PDF 第 553 页 -->

###### 3.8.4.1.2.1.2 模型目录管理信息
功能点描述：支持自定义模型目录，对模型分类及版本等。
核心字段：模型名称、版本号、接入时间。
###### 3.8.4.1.2.1.2.1 输入
用户或系统发起模型目录管理信息相关操作（支持自定义模型目录，对模型分类及
版本等），提交模型名称、版本号、接入时间等信息，系统同步校验用户的操作权限与
参数合规性，触发模型目录管理信息处理流程。
###### 3.8.4.1.2.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回模型名称、版本
号、接入时间等核心字段信息，输出模型目录管理信息管理维护结果；若操作失败，返
回具体错误原因，如权限不足、模型名称参数不合法、模型目录管理信息配置异常等。
###### 3.8.4.1.2.1.3 模型运行调用状态信息
功能点描述：支持模型启用、停用。
核心字段：状态。
###### 3.8.4.1.2.1.3.1 输入
用户或系统发起模型运行调用状态信息相关操作（支持模型启用、停用），提交状
态等信息，系统同步校验用户的操作权限与参数合规性，触发模型运行调用状态信息处
理流程。
###### 3.8.4.1.2.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回状态等核心字段

<!-- PDF 第 554 页 -->

信息，输出模型运行调用状态信息处理结果；若操作失败，返回具体错误原因，如权限
不足、状态参数不合法、模型运行调用状态信息配置异常等。
##### 3.8.4.1.3 AIagent（智能体）应用管理
提供应急指挥智能体的开发、编排、流程自动化能力，实现事件感知、决策、调度、
处置全流程智能执行。
| 模块 | 功能点 |
| --- | --- |
| AIagent（智能体）应用管理 | 智能体开发管理信息 |
|  | 智能体简易编排信息 |
|  | 智能体流程编排信息 |

###### 3.8.4.1.3.1 功能点
###### 3.8.4.1.3.1.1 智能体开发管理信息
功能点描述：系统提供统一的智能体管理功能，开发的智能体展示在智能体列表中，
并提供完善的系统管理功能。
支持智能体创建功能，用户输入智能体名称、描述、选择智能体应用的图标，以及
创建方式即可完成智能体的创建。智能体应用图标可以选择本地图标文件。支持建议编
排、流程编排、代码编排三种创建方式。
支持对已创建的智能体应用提供版本管理功能，对创建的智能体进行配置修改后会
生成历史版本。进入智能体版本列表，默认会展示当前发布版本的配置信息，包括基础
信息、开场白、编排信息。
支持智能体应用的历史对话记录，按照列表形式展示。对话记录包括历史对话的来
源、时间、标题、消息总数、用户反馈、自定义反馈、标准答案数量等信息。

<!-- PDF 第 555 页 -->

支持在平台接入多个大模型的情况下，对通过流程编排、代码编排方式创建的智能
体可以按需替换已选择的大模型。替换执行后，配置立即生效。
支持第三方业务系统通过标准API/SDK 及网页端直接访问，实现灵活的外部集成与
交互，快速发布到相关应用渠道。
核心字段：智能体ID、名称、类型、触发条件、能力列表、状态、创建人、创建
时间。
###### 3.8.4.1.3.1.1.1 输入
用户或系统发起智能体开发管理信息相关操作（系统提供统一的智能体管理功能，
开发的智能体展示在智能体列表中，并提供完善的系统管理功能），提交智能体ID、名
称、类型、触发条件、能力列表、状态、创建人、创建时间等信息，系统同步校验用户
的操作权限与参数合规性，触发智能体开发管理信息处理流程。
###### 3.8.4.1.3.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回智能体ID、名称、
类型、触发条件、能力列表、状态、创建人、创建时间等核心字段信息，输出智能体开
发管理信息查询展示结果及生成结果；若操作失败，返回具体错误原因，如权限不足、
智能体ID 参数不合法、智能体开发管理信息配置异常等。
###### 3.8.4.1.3.1.2 智能体简易编排信息
功能点描述：支持基本信息设置包括应用的名称、描述、图标，这些基本信息既能
帮助开发者更好地管理应用，也方便使用者快速查询和定位所需要的应用。
支持为智能体配置使用的基础大模型，包括问答模型、历史记录、温度、回复上限

<!-- PDF 第 556 页 -->

以及对话是否允许图片输入、对话是否允许语音输入，对大模型回答问题进行规范限定。
支持用户能够自定义AI 智能体的角色设定、所具备的能力、应用场景、工具使用
的限制条件以及输出的格式样式等，从而实现对AI 智能体行为的精确控制。通过在角
色指令中引用记忆和工具，可以实现精准调用。
支持通过创建变量来保存用户个人信息，例如语言偏好等，并让智能体记住这些特
征，使回复更加个性化。将数据存储在结构化表中。例如，创建一个数据库来存储阅读
笔记，包括书名、阅读进度和个人注释。Agent 可以通过查询数据库中的数据来提供更
准确的答案。
支持定制表结构，并设定字段名称、字段属性、字段描述等，用来存储和管理结构
化数据。支持用户通过自然语言方式对数据库中的数据进行增删改查。储存和终端用户
有关的重要信息、长期记忆，由用户定制记忆时长。开启记忆片段功能，能够根据记忆
片段prompt 在用户会话过程中保存用户提及的个人信息。短期记忆支持配置参考对话
轮数，以应对不同模型的上下文长度限制，大模型依据短期记忆的学习，提供符合场景
的输出。
支持自定义Agent 应用的开场话术配置，确保用户在初次启动应用时能够立即看到
温馨的开场语。
支持依据应用的详细描述信息自动生成个性化的开场白。
支持根据业务的具体需求和场景，对这些自动生成的开场白进行微调与优化，以达
到最佳的用户沟通效果。
支持AI 应用开发管理平台支持灵活配置推荐问题，作为用户首次启动应用时的对
话引导机制。支持模型自动生成与完全自定义两种模式。在默认模式下，系统会自动根

<!-- PDF 第 557 页 -->

据用户最近的三次对话记录，特别是最后一次回复的内容，智能推荐三个与之紧密相关
的提问建议。自定义模式则提供了更大的灵活性。可以设定用于生成推荐问题的参考对
话轮数，还能自定义Prompt（提示语）。
支持适应特定的使用场景或用户偏好，增强推荐问题的准确性和相关性，支持通过
大模型自动生成推荐问题，允许开发者在此基础上根据业务需求进行细致的调整和优
化。
支持两种灵活的追问设置方式：一是利用大模型技术，根据实时对话内容智能生成
追加问题，确保对话的连续性和深度；二是允许开发者自定义Prompt（提示语），并在
此基础上配置追问。同时，自定义模式下还能设定追问所参考的对话轮数。
支持根据不同场景和需求，支持选择并使用合适的私有化部署模型作为应用的回答
模型，以优化总结回复生成的结果，从而提升用户满意度和应用价值。同时，为支持用
户自调优实现场景化的机制问答效果，问答模型可选择自定义模型（用户SFT 模型、用
户开发上传或外部下载模型）。
支持对话式调试AI 原生应用，直观测试性能与效果。
支持采用数据干预，向应用中融入特定知识。同时，开发者能够方便地通过用户行
为，如点赞、点踩来反馈数据和线上对话抽取，例行监控应用端到端的回复内容，对不
符合标准的答案及时进行线上干预。
支持一键发布AI 原生应用，支持第三方业务系统通过标准API/SDK 及网页端直接
访问。
核心字段：创建人、流程名称、保存时间。

<!-- PDF 第 558 页 -->

###### 3.8.4.1.3.1.2.1 输入
用户或系统发起智能体简易编排信息相关操作（支持基本信息设置包括应用的名
称、描述、图标，这些基本信息既能帮助开发者更好地管理应用，也方便使用者快速查
询和定位所需要的应用），提交创建人、流程名称、保存时间等信息，系统同步校验用
户的操作权限与参数合规性，触发智能体简易编排信息处理流程。
###### 3.8.4.1.3.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回创建人、流程名
称、保存时间等核心字段信息，输出智能体简易编排信息查询展示结果及生成结果；若
操作失败，返回具体错误原因，如权限不足、创建人参数不合法、智能体简易编排信息
配置异常等。
###### 3.8.4.1.3.1.3 智能体流程编排信息
功能点描述：支持通过信息收集节点向用户提问，等待用户回复，并将用户回复内
容及抽取的信息作为输出参数。节点输入为输入给该节点的参数，可以被引用到下面的
提问内容中；输出为该节点输出的参数，包括用户回复的信息、对话历史及参数抽取的
结果，可以被后续节点引用。
支持通过按模板配置的格式或者直接返回参数值两种不同的回复模式选择来使用
消息节点。
支持用户通过上游节点信息，进行处理并生成结果，同时允许用户配置输入参数、
基础设置如对话模型、历史记录、温度、回复上限，以及系统提示词、引用内容模板、
引用内容模板提示词。
支持话题的跳转及拉回，当用户回应不符预期，可跳转回全局意图，或使用知识库、

<!-- PDF 第 559 页 -->

闲聊作为兜底回复，再拉回到原话题，实现多轮对话场景下的话题切换。
支持为智能体配置使用的基础大模型，包括问答模型、历史记录、温度、回复上限
以及对话是否允许图片输入、对话是否允许语音输入，对大模型回答问题进行规范限定。
支持将外部知识库集成至应用中，利用检索增强生成（RAG）架构，为应用提供外
部知识。知识内容源自用户上传至知识库，支持用户同时选择多个文档库作为查询资源。
支持语义检索、全文检索及二者结合的混合检索模式。
支持图表（折线图、柱状图、饼图等）解析和公式解析，支持用户根据文档中的图
表和公式进行提问，模型答复时可追溯到相应的图表和公式。
支持通过数据库挂载，开发者可以将数据库中的数据表与应用进行绑定，支持回答
用户数据相关的问题，并进一步支持后续的选表、计算等操作。
支持接入不同格式的数据源，支持直接上传数据表，支持通过上传Excel、csv 等
格式数据表创建数据库；支持直连数据库，通过与已有业务建立链接创建数据库。
支持智能体工作流的自定义逻辑处理和灵活输出目标，提供智能体工作流编排的代
码组件能力。支持用户通过输入、编写代码逻辑以及输出三个部分进行操作，包括手工
输入或引用上游节点输出、定义自定义代码逻辑，以及根据代码逻辑进行配置输出
核心字段：流程ID、智能体ID、流程JSON、节点配置、异常处理、版本号、更新
时间。
###### 3.8.4.1.3.1.3.1 输入
用户或系统发起智能体流程编排信息相关操作（支持通过信息收集节点向用户提
问，等待用户回复，并将用户回复内容及抽取的信息作为输出参数），提交流程ID、智
能体ID、流程JSON、节点配置、异常处理、版本号、更新时间等信息，系统同步校验

<!-- PDF 第 560 页 -->

用户的操作权限与参数合规性，触发智能体流程编排信息处理流程。
###### 3.8.4.1.3.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回流程ID、智能体
ID、流程JSON、节点配置、异常处理、版本号、更新时间等核心字段信息，输出智能体
流程编排信息查询展示结果及生成结果；若操作失败，返回具体错误原因，如权限不足、
流程ID 参数不合法、智能体流程编排信息配置异常等。
#### 3.8.4.2 地图引擎能力
地图引擎能力为应急指挥提供统一地图支撑，包括基础地图封装、高精地图服务、
交通仿真引擎，实现“一张图”指挥。
图3.8-3 地图引擎能力

<!-- PDF 第 561 页 -->

##### 3.8.4.2.1 地图引擎封装服务
对底层地图能力进行标准化封装，提供统一WebAPI、慧眼大数据分析、交通大数据
分析服务，供各业务系统调用。
| 模块 | 功能点 |
| --- | --- |
| 地图引擎封装服务 | WebAPI 服务接口信息 |
|  | 慧眼大数据分析信息 |
|  | 交通大数据分析信息 |

###### 3.8.4.2.1.1 功能点
###### 3.8.4.2.1.1.1 WebAPI服务接口信息
功能点描述：提供多个API 服务：
1．根据里程查询车道线信息：根据高速编码、桩号等参数，获取车道线、车道面
数据。
2．轨迹纠偏服务：提供车道吸附功能，将高精度定位点吸附到车道上，实现精准
的车道级定位，解决高精度定位点与车道偏离的问题。
3．桩号查询坐标接口：根据桩号、高速编码等参数，获取对应坐标，精度米级。
4．桩号经纬度转换服务：根据桩号、高速编码等参数，获取对应坐标，精度百米
级。
5．封闭车道服务：根据高速编码、桩号等参数，获取车道线、车道面数据。
6．坐标绑定桩号：根据坐标获取桩号信息。
7．POI 兴趣点服务组件：提供POI 兴趣点服务，业务系统可以通过该服务展示附近
的加油站、服务区等兴趣点。

<!-- PDF 第 562 页 -->

8．道路级/车道级路径规划服务：提供道路和车道级路径规划服务。
9．高程实时获取API：根据经纬度获取路面高程。
核心字段：接口ID、接口名称、请求方式、参数、返回格式、权限、调用频次、
状态。
###### 3.8.4.2.1.1.1.1 输入
用户或系统发起WebAPI 服务接口信息相关操作（提供多个API 服务：根据里程查
询车道线信息：根据高速编码、桩号等参数，获取车道线、车道面数据），提交接口ID、
接口名称、请求方式、参数、返回格式、权限、调用频次、状态等信息，系统同步校验
用户的操作权限与参数合规性，触发WebAPI 服务接口信息处理流程。
###### 3.8.4.2.1.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回接口ID、接口名
称、请求方式、参数、返回格式、权限、调用频次、状态等核心字段信息，输出WebAPI
服务接口信息查询展示结果及接口处理结果；若操作失败，返回具体错误原因，如权限
不足、接口ID 参数不合法、WebAPI 服务接口信息接口调用失败等。
###### 3.8.4.2.1.1.2 慧眼大数据分析信息
功能点描述：对高速公路、隐患点重点区域进行大数据统计分析，分析内容主要包
括：
1．重点区域实时车流：查询重点区域实时定位人数（去重）。
2．高速公路重点区域未来1 天分小时客流预测：查询高速公路某重点区域未来1
天分小时人流量预测。

<!-- PDF 第 563 页 -->

3．重点区域实时热力：查询重点区域网格实时定位热力。
4．重点区域当日累计客流量：查询重点区域（不大于100 平方千米）当日累计客
流量。
核心字段：高速公路名称、隐患点区域。
###### 3.8.4.2.1.1.2.1 输入
用户或系统发起慧眼大数据分析信息相关操作（对高速公路、隐患点重点区域进行
大数据统计分析，分析内容主要包括：
重点区域实时车流：查询重点区域实时定位人数（去重）），提交高速公路名称、
隐患点区域等信息，系统同步校验用户的操作权限与参数合规性，触发慧眼大数据分析
信息处理流程。
###### 3.8.4.2.1.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回高速公路名称、
隐患点区域等核心字段信息，输出慧眼大数据分析信息查询展示结果及统计分析结果；
若操作失败，返回具体错误原因，如权限不足、高速公路名称参数不合法、慧眼大数据
分析信息处理失败等。
###### 3.8.4.2.1.1.3 交通大数据分析信息
功能点描述：提供交通情况的大数据统计分析，分析内容主要包括：
高速三急一速指数分析：查询高速三急一速数据，天级区域内所有路段详情接口：
获取节点（以目标节点为终点）相关的路段信息。
获取指定辖区拥堵预警列表：查询某辖区的拥堵预警列表，支持按高疑似拥堵、异

<!-- PDF 第 564 页 -->

常拥堵、常规拥堵分类提取列表，查询拥堵数据的基本详情。
获取指定拥堵预警的拥堵详情：查询指定的拥堵预警拥堵详情数据，高疑似事件、
异常拥堵、常规拥堵的详情数据。
获取指定拥堵预警的拥堵指标曲线数据：查询指定拥堵预警的交通拥堵指数、平均
速度和拥堵里程的交通指标曲线数据。
核心字段：高速公路名称。
###### 3.8.4.2.1.1.3.1 输入
用户或系统发起交通大数据分析信息相关操作（提供交通情况的大数据统计分析，
分析内容主要包括：高速三急一速指数分析：查询高速三急一速数据，天级区域内所有
路段详情接口：获取节点（以目标节点为终点）相关的路段信息），提交高速公路名称
等信息，系统同步校验用户的操作权限与参数合规性，触发交通大数据分析信息处理流
程。
###### 3.8.4.2.1.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回高速公路名称等
核心字段信息，输出交通大数据分析信息查询展示结果及统计分析结果；若操作失败，
返回具体错误原因，如权限不足、高速公路名称参数不合法、交通大数据分析信息接口
调用失败等。
##### 3.8.4.2.2 高精地图引擎服务
提供高精度地图能力，支持厘米级定位、地点检索、路线规划、轨迹计算，服务精
准调度。

<!-- PDF 第 565 页 -->

| 模块 | 功能点 |
| --- | --- |
| 高精地图引擎服务 | 地点检索服务接口信息 |
|  | 路线规划服务接口信息 |
|  | 轨迹计算服务接口信息 |

###### 3.8.4.2.2.1 功能点
###### 3.8.4.2.2.1.1 地点检索服务接口信息
功能点描述：支持地点检索服务，具体包括：
1．POI 检索：允许设置检索城市、检索圆形区域内POI、检索矩形区域内POI、检
索结果详情。根据图层名称、地名地址关键字、搜索范围、POI 类型、坐标参考、属性
或空间过滤查询、分页参数，获取符合要求的POI 信息。
2．AOI 检索：提供AOI(Area of Interest)兴趣面信息的检索服务，允许检索圆形
区域内AOI、检索矩形区域内AOI、检索结果详情。根据地名地址关键字、搜索范围、
属性或空间过滤查询、分页参数，获取符合要求的AOI 信息。
3．路网检索：提供道路名称检索服务，根据用户指定的道路名称，得到指定道路
对应的道路空间几何数据，返回的道路信息道路空间几何数据，并支持路网按照省市行
政区划过滤查询。
4．地理编码：可根据道路名称或中文地址或POI 名称转换为空间坐标，同时支持
以RESTful、WebService 服务接口提供服务。
5．逆地理编码：提供将空间坐标转换为地理位置描述的功能，同时提供坐标经纬
度定位省市区三级行政区划名称。支持返回坐标点附近200 米内的POI、道路和路口信
息，每类信息最多返回5 条，按照距离指定点的距离排序。支持以RESTful 接口提供服
务。

<!-- PDF 第 566 页 -->

6．行政区划定位：本接口提供行政区划信息定位行政区划中心点坐标。
7．行政区边界查询：提供行政区划信息查询行政区划边界数据。支持输入“省市
区县名称”返回相关边界。
8．坐标转换：提供WGS84 坐标系、国测局坐标系等转换为互联网坐标系，支持批
量矢量数据的坐标转换，支持以RESTful 接口提供服务。
9．桩号定位：选择路段后，输入此路段内的桩号信息进行位置定位。便于在不清
楚具体经纬度信息的情况下，进行位置定位查询相关信息。
10．缓冲区分析：按照设定的距离条件，围绕这组要素形成具有一定范围的多边形
实体，给定点、线、面和缓存半径返回缓冲区边界坐标集合，从而实现数据在二维空间
扩展的信息分析，支持生成平头缓冲区、圆头缓冲区、单侧缓冲区、双侧缓冲区。支持
以RESTful 接口提供服务。
11．实时路况：通过栅格瓦片方式提供实时路况服务，通过服务直观展示路况红黄
绿状态信息，2 分钟更新一次。
核心字段：检索ID、关键词、经纬度、半径、结果列表、精度等级、来源、返回
时间。
###### 3.8.4.2.2.1.1.1 输入
用户或系统发起地点检索服务接口信息相关操作（支持地点检索服务，具体包括：
1．POI 检索：允许设置检索城市、检索圆形区域内POI、检索矩形区域内POI、检索结
果详情），提交检索ID、关键词、经纬度、半径、结果列表、精度等级、来源、返回时
间等信息，系统同步校验用户的操作权限与参数合规性，触发地点检索服务接口信息处
理流程。

<!-- PDF 第 567 页 -->

###### 3.8.4.2.2.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回检索ID、关键词、
经纬度、半径、结果列表、精度等级、来源、返回时间等核心字段信息，输出地点检索
服务接口信息查询展示结果及统计分析结果；若操作失败，返回具体错误原因，如权限
不足、检索ID 参数不合法、地点检索服务接口信息配置异常等。
###### 3.8.4.2.2.1.2 路线规划服务接口信息
功能点描述：提供路线规划、空间计算等服务，具体包括：
1．路线规划：通过给定起终点坐标，选择给定途经点坐标、避让区域、出行模式、
路线规划策略，以及是否展示详细信息。返回路线规划的坐标集合以及对应的路线规划
策略。
2．等时到达圈：提供以坐标为中心点，在一定时间内所能到达的多边形范围，支
持驾车、步行、骑行三种模式的等时到达的服务，为城市管理与指挥调度提供最优到达
时间分析。
3．空间几何图形计算：提供地图上任意几何图形返回计算数据服务，实现基于空
间位置的自定义范围的几何分析与计算。
核心字段：规划ID、起点、终点、途经点、路径距离、预计时间、避让条件、方
案列表。
###### 3.8.4.2.2.1.2.1 输入
用户或系统发起路线规划服务接口信息相关操作（提供路线规划、空间计算等服务，
具体包括：1．路线规划：通过给定起终点坐标，选择给定途经点坐标、避让区域、出
行模式、路线规划策略，以及是否展示详细信息），提交规划ID、起点、终点、途经点、

<!-- PDF 第 568 页 -->

路径距离、预计时间、避让条件、方案列表等信息，系统同步校验用户的操作权限与参
数合规性，触发路线规划服务接口信息处理流程。
###### 3.8.4.2.2.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回规划ID、起点、
终点、途经点、路径距离、预计时间、避让条件、方案列表等核心字段信息，输出路线
规划服务接口信息查询展示结果及统计分析结果；若操作失败，返回具体错误原因，如
权限不足、规划ID 参数不合法、路线规划服务接口信息配置异常等。
###### 3.8.4.2.2.1.3 轨迹计算服务接口信息
功能点描述：提供轨迹纠偏和批量算路功能：
1．轨迹纠偏：用于对一段连续长轨迹进行纠偏绑路、如：对一辆车一个行程或一
天的轨迹进行纠偏并计算里程，并返回纠偏后的信息。
2．批量路算：用户需要给定多个起终点坐标，可选择给定出行模式、路线规划策
略，最后仅返回多个路线规划的时间和距离。
核心字段：轨迹ID、目标ID、点位序列、里程、停留点、匹配路段、更新时间。
###### 3.8.4.2.2.1.3.1 输入
用户或系统发起轨迹计算服务接口信息相关操作（提供轨迹纠偏和批量算路功能：
1．轨迹纠偏：用于对一段连续长轨迹进行纠偏绑路、如：对一辆车一个行程或一
天的轨迹进行纠偏并计算里程，并返回纠偏后的信息。
2．批量路算：用户需要给定多个起终点坐标，可选择给定出行模式、路线规划策
略，最后仅返回多个路线规划的时间和距离），提交轨迹ID、目标ID、点位序列、里

<!-- PDF 第 569 页 -->

程、停留点、匹配路段、更新时间等信息，系统同步校验用户的操作权限与参数合规性，
触发轨迹计算服务接口信息处理流程。
###### 3.8.4.2.2.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回轨迹ID、目标
ID、点位序列、里程、停留点、匹配路段、更新时间等核心字段信息，输出轨迹计算服
务接口信息接口处理结果；若操作失败，返回具体错误原因，如权限不足、轨迹ID 参
数不合法、轨迹计算服务接口信息配置异常等。
##### 3.8.4.2.3 交通仿真引擎服务
基于交通流模型对事件、拥堵、封闭、分流等场景进行仿真，辅助指挥决策。
| 模块 | 功能点 |
| --- | --- |
| 交通仿真引擎能力 | 仿真方案信息 |
|  | 仿真运行状态信息 |
|  | 宏观仿真分析信息 |
|  | 事件与模板数据 |

###### 3.8.4.2.3.1 功能点
###### 3.8.4.2.3.1.1 仿真方案信息
功能点描述：支持仿真方案的新增、编辑、删除、复制。
核心字段：方案名称。
###### 3.8.4.2.3.1.1.1 输入
用户或系统发起仿真方案信息相关操作（支持仿真方案的新增、编辑、删除、复制），

<!-- PDF 第 570 页 -->

提交方案名称等信息，系统同步校验用户的操作权限与参数合规性，触发仿真方案信息
处理流程。
###### 3.8.4.2.3.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回方案名称等核心
字段信息，输出仿真方案信息管理维护结果；若操作失败，返回具体错误原因，如权限
不足、方案名称参数不合法、仿真方案信息处理失败等。
###### 3.8.4.2.3.1.2 仿真运行状态信息
功能点描述：支持对运行中的方案进行暂停、恢复、进度拖动等管理。
核心字段：方案运行状态。
###### 3.8.4.2.3.1.2.1 输入
用户或系统发起仿真运行状态信息相关操作（支持对运行中的方案进行暂停、恢复、
进度拖动等管理），提交方案运行状态等信息，系统同步校验用户的操作权限与参数合
规性，触发仿真运行状态信息处理流程。
###### 3.8.4.2.3.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回方案运行状态等
核心字段信息，输出仿真运行状态信息管理维护结果；若操作失败，返回具体错误原因，
如权限不足、方案运行状态参数不合法、仿真运行状态信息处理失败等。
###### 3.8.4.2.3.1.3 宏观仿真分析信息
功能点描述：支持对自定义区域进行列表查询、新增区域分析、修改区域分析、删
除区域分析等操作，支持预测明细，支持自定义区域的拥堵列表查询。

<!-- PDF 第 571 页 -->

核心字段：方案名称。
###### 3.8.4.2.3.1.3.1 输入
用户或系统发起宏观仿真分析信息相关操作（支持对自定义区域进行列表查询、新
增区域分析、修改区域分析、删除区域分析等操作，支持预测明细，支持自定义区域的
拥堵列表查询），提交方案名称等信息，系统同步校验用户的操作权限与参数合规性，
触发宏观仿真分析信息处理流程。
###### 3.8.4.2.3.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回方案名称等核心
字段信息，输出宏观仿真分析信息查询展示结果及统计分析结果；若操作失败，返回具
体错误原因，如权限不足、方案名称参数不合法、宏观仿真分析信息处理失败等。
###### 3.8.4.2.3.1.4 事件与模板数据
功能点描述：支持查询各类仿真类型的实时事件和模板，支持新增事件模板，支持
导入事件模板，支持编辑事件模板，支持删除事件或模板。
核心字段：方案名称。
###### 3.8.4.2.3.1.4.1 输入
用户或系统发起事件与模板数据相关操作（支持查询各类仿真类型的实时事件和模
板，支持新增事件模板，支持导入事件模板，支持编辑事件模板，支持删除事件或模板），
提交方案名称等信息，系统同步校验用户的操作权限与参数合规性，触发事件与模板数
据处理流程。

<!-- PDF 第 572 页 -->

###### 3.8.4.2.3.1.4.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回方案名称等核心
字段信息，输出事件与模板数据查询展示结果及管理维护结果；若操作失败，返回具体
错误原因，如权限不足、方案名称参数不合法、事件与模板数据配置异常等。
#### 3.8.4.3 视频监控能力
统一接入、汇聚、管理全省交通视频资源，提供实时预览、云台控制、抓图、录像
查询等能力。
图3.8-4 视频监控能力

<!-- PDF 第 573 页 -->

##### 3.8.4.3.1 视频应用
提供视频统一调用能力，供指挥中心、移动端、会商系统使用，实现视频“一点接
入、全网共享”。
| 模块 | 功能点 |
| --- | --- |
| 视频应用 | 视频实时预览数据 |
|  | 云台控制信息 |
|  | 手动抓图图片数据 |
|  | 视频查询结果列表数据 |

###### 3.8.4.3.1.1 功能点
###### 3.8.4.3.1.1.1 视频实时预览数据
功能点描述：支持视频的实时播放，支持根据通道编码获取视频通道详细信息接口，
根据视频通道编号获取视频通道详细信息，视频通道编号可以通过获取。通过获取通道
预览取流URLv2 接口，实现实时预览或者使用标准的GUI 播放工具进行实时预览。
核心字段：视频ID、设备ID、名称、位置、流地址、分辨率、状态、接入时间、
在线状态。
###### 3.8.4.3.1.1.1.1 输入
用户或系统发起视频实时预览数据相关操作（支持视频的实时播放，支持根据通道
编码获取视频通道详细信息接口，根据视频通道编号获取视频通道详细信息，视频通道
编号可以通过获取。通过获取通道预览取流URLv2 接口，实现实时预览或者使用标准的
GUI 播放工具进行实时预览），提交视频ID、设备ID、名称、位置、流地址、分辨率、

<!-- PDF 第 574 页 -->

状态、接入时间、在线状态等信息，系统同步校验用户的操作权限与参数合规性，触发
视频实时预览数据处理流程。
###### 3.8.4.3.1.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回视频ID、设备
ID、名称、位置、流地址、分辨率、状态、接入时间、在线状态等核心字段信息，输出
视频实时预览数据查询展示结果及接口处理结果；若操作失败，返回具体错误原因，如
权限不足、视频ID 参数不合法、视频实时预览数据接口调用失败等。
###### 3.8.4.3.1.1.2 云台控制信息
功能点描述：支持对视频云台的接入，实现视频应用提供云台控制能力，包括设置
预置点、调用预置点、查询预置点、删除预置点、云台操作等功能。
设置预置点：可根据视频通道编号进行设置预置点信息操作，包括预置点名称、预
置点编号。
调用预置点：可根据视频通道编号，指定预置点编号，进行跳转到指定预置点位置
操作。
查询预置点：可根据视频通道编号进行查询预置点信息操作。
删除预置点：可删除预置点。
云台操作：可对云台方向、转向速度进行控制，如左转、右转、上转、下转、焦距
变大、焦距变小等控制；云台速度支持1-100 的速度范围。
核心字段：控制ID、设备ID、操作类型、角度、变焦值、预置点、操作人、时间。

<!-- PDF 第 575 页 -->

###### 3.8.4.3.1.1.2.1 输入
用户或系统发起云台控制信息相关操作（支持对视频云台的接入，实现视频应用提
供云台控制能力，包括设置预置点、调用预置点、查询预置点、删除预置点、云台操作
等功能），提交控制ID、设备ID、操作类型、角度、变焦值、预置点、操作人、时间
等信息，系统同步校验用户的操作权限与参数合规性，触发云台控制信息处理流程。
###### 3.8.4.3.1.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回控制ID、设备
ID、操作类型、角度、变焦值、预置点、操作人、时间等核心字段信息，输出云台控制
信息查询展示结果及接口处理结果；若操作失败，返回具体错误原因，如权限不足、控
制ID 参数不合法、云台控制信息接口调用失败等。
###### 3.8.4.3.1.1.3 手动抓图图片数据
功能点描述：支持在查看录像回放视频过程中一键抓取当前画面为图片。生成的图
片支持下载保存，真正做到“看见即取证，取证即归档”。
核心字段：视频名称。
###### 3.8.4.3.1.1.3.1 输入
用户或系统发起手动抓图图片数据相关操作（支持在查看录像回放视频过程中一键
抓取当前画面为图片。生成的图片支持下载保存，真正做到“看见即取证，取证即归档”），
提交视频名称等信息，系统同步校验用户的操作权限与参数合规性，触发手动抓图图片
数据处理流程。

<!-- PDF 第 576 页 -->

###### 3.8.4.3.1.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回视频名称等核心
字段信息，输出手动抓图图片数据查询展示结果及生成结果；若操作失败，返回具体错
误原因，如权限不足、视频名称参数不合法、手动抓图图片数据生成失败等。
###### 3.8.4.3.1.1.4 视频查询结果列表数据
功能点描述：根据用户权限查询视频列表，仅向用户展示有权限的视频，对于无权
限的视频无法查看。按时间、位置、视频名称查询视频。
核心字段：视频名称。
###### 3.8.4.3.1.1.4.1 输入
用户或系统发起视频查询结果列表数据相关操作（根据用户权限查询视频列表，仅
向用户展示有权限的视频，对于无权限的视频无法查看。按时间、位置、视频名称查询
视频），提交视频名称等信息，系统同步校验用户的操作权限与参数合规性，触发视频
查询结果列表数据处理流程。
###### 3.8.4.3.1.1.4.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回视频名称等核心
字段信息，输出视频查询结果列表数据查询展示结果；若操作失败，返回具体错误原因，
如权限不足、视频名称参数不合法、视频查询结果列表数据处理失败等。
#### 3.8.4.4 融合通信能力
融合视频会议、语音、短信、粤政易、卫星电话等多种通信方式，实现应急指令一

<!-- PDF 第 577 页 -->

键下达。
图3.8-5 融合通信能力
##### 3.8.4.4.1 视频会议
提供视频会议创建、预约、变更、取消、录制、查询、下载等全生命周期管理。

<!-- PDF 第 578 页 -->

| 模块 | 功能点 |
| --- | --- |
| 视频会议 | 创建会议模板信息 |
|  | 预约会议取消申请信息 |
|  | 预约会议变更信息 |
|  | 查询会议列表信息 |
|  | 查询结果详情信息 |
|  | 会议录制列表信息 |
|  | 会议录制详情信息 |
|  | 录制文件下载配置信息 |

###### 3.8.4.4.1.1 功能点
###### 3.8.4.4.1.1.1 创建会议模板信息
功能点描述：支持用户创建立即会议和预约会议。
支持创建语音会议和视频会议。会议内容包括会议主题、会议开始时间、会议类型、
与会者列表等内容。会议时长最高支持1440 分钟（24 小时），最小15 分钟，默认30
分钟。
核心字段：主题、时间、参会人、创建人、状态。
###### 3.8.4.4.1.1.1.1 输入
用户或系统发起创建会议模板信息相关操作（支持用户创建立即会议和预约会议。
支持创建语音会议和视频会议。会议内容包括会议主题、会议开始时间、会议类型、与
会者列表等内容。会议时长最高支持1440 分钟（24 小时），最小15 分钟，默认30 分
钟），提交主题、时间、参会人、创建人、状态等信息，系统同步校验用户的操作权限
与参数合规性，触发创建会议模板信息处理流程。

<!-- PDF 第 579 页 -->

###### 3.8.4.4.1.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回主题、时间、参
会人、创建人、状态等核心字段信息，输出创建会议模板信息处理结果；若操作失败，
返回具体错误原因，如权限不足、主题参数不合法、创建会议模板信息配置异常等。
###### 3.8.4.4.1.1.2 预约会议取消申请信息
功能点描述：支持取消已预约的会议，管理员可以取消所有用户创建的会议，普通
用户只能取消自己创建的会议。默认已召开的会议不能取消。
核心字段：主题、时间、参会人、创建人、状态。
###### 3.8.4.4.1.1.2.1 输入
用户或系统发起预约会议取消申请信息相关操作（支持取消已预约的会议，管理员
可以取消所有用户创建的会议，普通用户只能取消自己创建的会议。默认已召开的会议
不能取消），提交主题、时间、参会人、创建人、状态等信息，系统同步校验用户的操
作权限与参数合规性，触发预约会议取消申请信息处理流程。
###### 3.8.4.4.1.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回主题、时间、参
会人、创建人、状态等核心字段信息，输出预约会议取消申请信息管理维护结果；若操
作失败，返回具体错误原因，如权限不足、主题参数不合法、预约会议取消申请信息处
理失败等。
###### 3.8.4.4.1.1.3 预约会议变更信息
功能点描述：支持修改已预约的会议。支持对会议主题、会议开始时间、会议类型、

<!-- PDF 第 580 页 -->

与会者信息进行修改。修改后系统自动生成“变更单”，推送差异内容至所有参会人终
端，支持通过短信通知。
核心字段：主题、时间、参会人、创建人、状态。
###### 3.8.4.4.1.1.3.1 输入
用户或系统发起预约会议变更信息相关操作（支持修改已预约的会议。支持对会议
主题、会议开始时间、会议类型、与会者信息进行修改。修改后系统自动生成“变更单”，
推送差异内容至所有参会人终端，支持通过短信通知），提交主题、时间、参会人、创
建人、状态等信息，系统同步校验用户的操作权限与参数合规性，触发预约会议变更信
息处理流程。
###### 3.8.4.4.1.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回主题、时间、参
会人、创建人、状态等核心字段信息，输出预约会议变更信息生成结果；若操作失败，
返回具体错误原因，如权限不足、主题参数不合法、预约会议变更信息生成失败等。
###### 3.8.4.4.1.1.4 查询会议列表信息
功能点描述：展示会议列表，支持按时间、发起人、所属单位、会议状态等多条件
进行展示。列表展示会议主题、会议类型、发起人、所属单位、开始时间、会议状态、
参会单位。
核心字段：主题、时间、参会人、创建人、状态。
###### 3.8.4.4.1.1.4.1 输入
用户或系统发起查询会议列表信息相关操作（展示会议列表，支持按时间、发起人、

<!-- PDF 第 581 页 -->

所属单位、会议状态等多条件进行展示。列表展示会议主题、会议类型、发起人、所属
单位、开始时间、会议状态、参会单位），提交主题、时间、参会人、创建人、状态等
信息，系统同步校验用户的操作权限与参数合规性，触发查询会议列表信息处理流程。
###### 3.8.4.4.1.1.4.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回主题、时间、参
会人、创建人、状态等核心字段信息，输出查询会议列表信息查询展示结果；若操作失
败，返回具体错误原因，如权限不足、主题参数不合法、查询会议列表信息处理失败等。
###### 3.8.4.4.1.1.5 查询结果详情信息
功能点描述：支持查询会议的详情。管理员可以查询所有会议的详情，普通用户仅
能查询自己创建或者需要参加的会议详情。只能查询尚未结束的会议详情（即正在召开
的会议和已预约还未召开的会议）。
核心字段：主题、时间、参会人、创建人、状态。
###### 3.8.4.4.1.1.5.1 输入
用户或系统发起查询结果详情信息相关操作（支持查询会议的详情。管理员可以查
询所有会议的详情，普通用户仅能查询自己创建或者需要参加的会议详情。只能查询尚
未结束的会议详情（即正在召开的会议和已预约还未召开的会议）），提交主题、时间、
参会人、创建人、状态等信息，系统同步校验用户的操作权限与参数合规性，触发查询
结果详情信息处理流程。
###### 3.8.4.4.1.1.5.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回主题、时间、参

<!-- PDF 第 582 页 -->

会人、创建人、状态等核心字段信息，输出查询结果详情信息查询展示结果及管理维护
结果；若操作失败，返回具体错误原因，如权限不足、主题参数不合法、查询结果详情
信息处理失败等。
###### 3.8.4.4.1.1.6 会议录制列表信息
功能点描述：支持查询会议录制列表。管理员可以查询所有的录制，普通用户仅能
查询自己创建的会议的录制。
支持通过搜索会议主题、会议预约人与会议ID 作为条件进行查询。支持按时间进
行查询。
核心字段：主题、时间、参会人、创建人、状态。
###### 3.8.4.4.1.1.6.1 输入
用户或系统发起会议录制列表信息相关操作（支持查询会议录制列表。管理员可以
查询所有的录制，普通用户仅能查询自己创建的会议的录制。支持通过搜索会议主题、
会议预约人与会议ID 作为条件进行查询。支持按时间进行查询），提交主题、时间、
参会人、创建人、状态等信息，系统同步校验用户的操作权限与参数合规性，触发会议
录制列表信息处理流程。
###### 3.8.4.4.1.1.6.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回主题、时间、参
会人、创建人、状态等核心字段信息，输出会议录制列表信息查询展示结果及管理维护
结果；若操作失败，返回具体错误原因，如权限不足、主题参数不合法、会议录制列表
信息处理失败等。

<!-- PDF 第 583 页 -->

###### 3.8.4.4.1.1.7 会议录制详情信息
功能点描述：支持查询某个会议录制的详情。管理员可以查询所有的录制，普通用
户仅能查询自己创建的会议的录制。
支持通过搜索会议主题、会议预约人与会议ID 作为条件进行查询。支持按时间进
行查询。
核心字段：主题、时间、参会人、创建人、状态。
###### 3.8.4.4.1.1.7.1 输入
用户或系统发起会议录制详情信息相关操作（支持查询某个会议录制的详情。管理
员可以查询所有的录制，普通用户仅能查询自己创建的会议的录制。支持通过搜索会议
主题、会议预约人与会议ID 作为条件进行查询。支持按时间进行查询），提交主题、
时间、参会人、创建人、状态等信息，系统同步校验用户的操作权限与参数合规性，触
发会议录制详情信息处理流程。
###### 3.8.4.4.1.1.7.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回主题、时间、参
会人、创建人、状态等核心字段信息，输出会议录制详情信息查询展示结果及管理维护
结果；若操作失败，返回具体错误原因，如权限不足、主题参数不合法、会议录制详情
信息处理失败等。
###### 3.8.4.4.1.1.8 录制文件下载配置信息
功能点描述：支持下载某个录制文件，支持下载辅流、高清和标清文件，当会议录
制时长超过3 小时将拆分成多个文件，有多个下载链接。

<!-- PDF 第 584 页 -->

核心字段：主题、时间、参会人、创建人、状态。
###### 3.8.4.4.1.1.8.1 输入
用户或系统发起录制文件下载配置信息相关操作（支持下载某个录制文件，支持下
载辅流、高清和标清文件，当会议录制时长超过3 小时将拆分成多个文件，有多个下载
链接），提交主题、时间、参会人、创建人、状态等信息，系统同步校验用户的操作权
限与参数合规性，触发录制文件下载配置信息处理流程。
###### 3.8.4.4.1.1.8.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回主题、时间、参
会人、创建人、状态等核心字段信息，输出录制文件下载配置信息文件处理结果及管理
维护结果；若操作失败，返回具体错误原因，如权限不足、主题参数不合法、录制文件
下载配置信息配置异常等。
#### 3.8.4.5 融合服务
统一封装各类服务接口，实现服务注册、授权、调用、监控、网关统一管控。
模块
功能点

<!-- PDF 第 585 页 -->

| 模块 | 功能点 |
| --- | --- |
| 融合服务 | 服务接口管理维护信息 |
|  | 服务授权信息 |
|  | 服务调用日志信息 |
|  | 服务网关信息 |

##### 3.8.4.5.1 功能点
###### 3.8.4.5.1.1 服务接口管理维护信息
功能点描述：服务接口管理维护厅局的内外部接口服务，包括服务的注册、测试、
发布等功能，满足厅局不同业务场景的接口注册发布需求。
（1）服务接口注册信息：管理服务接口信息，包括服务名称、标识码、服务ID、
服务状态、服务提供方、协议、接口地址、更新时间、更新人。
（2）服务接口详情：包括基本信息：服务名称、标识码、服务提供方、更新人、
更新时间、服务ID、资源简介，以及接口信息：协议类型、支持协议、接口地址、接口
原始地址、接口来源系统、端口、支持格式、请求方式、数据更新频率、调用频次限制。
接口参数说明、返回参数说明、服务调用指南。
（3）第三方服务接口配置信息：提供配置页面，支持将第三方接口注册，成功注
册后，第三方可通过融合服务系统统一的对外服务进行接口调用。
（4）服务适配管理：支持以下类型的数据服务：Web 服务、JMS 服务、HTTP/REST
服务。
（5）服务接口测试配置信息：支持通过手动输入调用参数，测试服务API。接口的
连通性，展示接口服务返回的内容，自动反馈服务的稳定性等参数，并提供错误码表对
照。

<!-- PDF 第 586 页 -->

（6）服务接口状态管理信息：支持对服务API 进行停用\\启用。操作时，需录入停
用\\启用API 的操作原因。停用后，该服务将暂时失效，无法被任何系统调用，直到下
次重新启用。不提供删除服务API 功能。
（7）数据服务接口封装管理：支持对数据进行API 封装，并以API 的方式进行数
据共享调用。支持两种方式：单表构建、多表构建。
自定义生成服务接口信息，支持单实例中，自定义SQL 语句生成服务接口。
核心字段：服务ID、接口名称、地址、请求方式、参数、返回值、状态、版本、
文档。
###### 3.8.4.5.1.1.1.1 输入
用户或系统发起服务接口上架管理相关操作（服务接口注册、详情维护、第三方接
口配置、服务适配、接口测试、状态启停、数据服务接口封装），提交服务名称、标识
码、服务ID、服务状态、服务提供方、协议、接口地址、更新时间、更新人、资源简介、
协议类型、支持协议、接口原始地址、接口来源系统、端口、支持格式、请求方式、数
据更新频率、调用频次限制、接口参数说明、返回参数说明、服务调用指南、调用参数、
停用或启用原因、SQL 语句等信息，系统同步校验用户的操作权限、接口参数合规性、
服务配置完整性和接口连通性，触发服务接口注册、测试、发布、封装和状态管理流程。
###### 3.8.4.5.1.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回服务名称、标识
码、服务ID、服务状态、服务提供方、协议、接口地址、更新时间、更新人、接口参数、
返回参数、调用指南、服务适配类型、接口测试结果、服务稳定性、错误码对照、停用
或启用状态、API 封装结果等核心字段信息，输出服务接口注册发布结果、第三方接口

<!-- PDF 第 587 页 -->

配置结果、服务API 测试结果、服务启停结果及数据服务接口封装结果；若操作失败，
返回具体错误原因，如权限不足、服务接口参数不合法、接口地址不可用、接口测试不
通过、第三方接口注册失败、服务状态配置异常或SQL 语句生成服务接口失败等。
###### 3.8.4.5.1.2 服务授权信息
功能点描述：服务授权管理是对应用系统的服务注册及服务调用权限进行集中管
理。为应急相关业务内外部系统模块提供统一API 服务，调用服务时需先进行接入鉴权，
鉴权管理功能对服务请求方是否合法进行鉴别和确认，通过鉴权认证，平台能快速确认
服务请求方身份，确定是否有该服务的访问权限。服务权限管理实现对服务授予应用系
统调用权限的统一管理，其中服务为服务接口管理中已配置的服务。服务权限管理主要
包括：
（1）服务授权管理：提供页面管理服务授权记录，可选择需授权的服务（支持多
选，字段包括：服务名称、标识码），支撑系统自动生成该应用系统的Token，并对该
应用系统授权所选择的多个服务，生成访问凭证。
（2）服务访问控制：支持使用ServiceID、PassID、Pass Token 和App secret 作
为应用调用服务的通行证，对服务请求方是否合法进行鉴别和确认，以控制数据服务接
口的访问者。
（3）服务范围管理：实现支持灵活配置特定调用方在请求接口时的返回数据范围，
可按调用方所属区域，或所限制的日期范围等，返回对应行的数据。
核心字段：授权ID、服务ID、授权对象、权限类型、限流QPS、黑白名单、生效
时间。

<!-- PDF 第 588 页 -->

###### 3.8.4.5.1.2.1.1 输入
用户或系统发起服务授权管理相关操作（服务授权记录管理、服务访问控制、服务
范围配置），提交服务名称、标识码、应用系统信息、ServiceID、PassID、Pass Token、
App secret、Token、授权服务范围、调用方所属区域、日期范围等信息，系统同步校验
用户的操作权限、应用系统身份合法性、授权服务有效性和访问范围配置合规性，触发
服务授权、访问鉴权和服务范围管理流程。
###### 3.8.4.5.1.2.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回服务名称、标识
码、应用系统授权记录、Token、ServiceID、PassID、Pass Token、App secret、授权
服务清单、调用方身份、服务访问权限、返回数据范围、所属区域及日期范围等核心字
段信息，输出服务授权结果、访问凭证生成结果、服务访问控制结果及服务范围配置结
果；若操作失败，返回具体错误原因，如权限不足、应用系统身份不合法、服务名称或
标识码参数不合法、Token 生成失败、访问凭证无效、服务未授权或服务范围配置异常
等。
###### 3.8.4.5.1.3 服务调用日志信息
功能点描述：支持展示平台中API 服务接口被调用的系统日志信息，覆盖成功、失
败、异常等所有各类调用结果情况。
核心字段：日志ID、服务ID、调用方、请求参数、返回码、耗时、IP、调用时间。
###### 3.8.4.5.1.3.1.1 输入
用户或系统发起服务日志管理相关操作（服务调用明细日志检索、日志集中展示、

<!-- PDF 第 589 页 -->

异常日志跟踪排查），提交API 服务接口、调用系统、调用时间、调用结果、成功状态、
失败状态、异常状态、日志关键字、日志明细等查询条件，系统同步校验用户的操作权
限、查询条件合规性和日志访问范围，触发服务调用日志检索与展示流程。
###### 3.8.4.5.1.3.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回API 服务接口调
用日志、调用系统、调用时间、调用结果、成功记录、失败记录、异常记录、日志详细
信息及异常跟踪信息等核心字段信息，输出服务调用明细日志检索结果和日志集中展示
结果，支撑运维人员进行系统调用异常排查；若操作失败，返回具体错误原因，如权限
不足、查询条件不合法、日志数据不存在、日志访问范围受限或日志检索失败等。
###### 3.8.4.5.1.4 服务网关信息
功能点描述：支持对服务接口、数据接口的鉴权控制、路由分配等能力，包括：授
权访问管理、数据总线模块、接入适配管理、访问控制管理、路由调度管理、数据交换
网关设置。
（1）授权访问管理：网关支持使用ServiceID、PassID、Pass Token 和App secret
作为网关鉴权的组合体，对调用访问进行鉴权和授权。
（2）服务总线：支持服务总线主机名/地址和端口的配置、检测、保存功能。
（3）接入适配管理：不仅支持基于本地能力和数据资源进行封装生成的服务接口，
同时支持接入第三方的数据服务接口，实现接口透传。
（4）访问控制管理：支持对服务请求方和服务接口的身份合法性进行验证，对服
务请求方发出的请求进行权限检查，对于越权访问予以拒绝。
（5）路由调度管理：支持实现代理访问模式，支持将服务请求发往服务接口所挂

<!-- PDF 第 590 页 -->

接的资源服务总线，由资源服务总线代理访问服务接口，并返回结果。
核心字段：网关ID、路由ID、目标服务、负载策略、熔断阈值、降级策略、状态。
###### 3.8.4.5.1.4.1.1 输入
用户或系统发起服务网关管理相关操作（授权访问管理、服务总线配置、接入适配
管理、访问控制管理、路由调度管理、数据交换网关设置），提交ServiceID、PassID、
Pass Token、App secret、服务总线主机名或地址、端口、服务接口、数据接口、第三
方数据服务接口、服务请求方身份、服务接口身份、权限检查信息、路由调度规则、资
源服务总线信息等参数，系统同步校验用户的操作权限、网关鉴权参数合规性、服务总
线配置有效性、请求方身份合法性和路由调度规则有效性，触发服务网关鉴权、授权、
适配、访问控制和路由代理访问流程。
###### 3.8.4.5.1.4.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回ServiceID、
PassID、Pass Token、App secret、服务总线主机名或地址、端口、检测结果、服务接
口、数据接口、第三方接口接入结果、请求方身份验证结果、权限检查结果、路由调度
结果、资源服务总线代理访问结果等核心字段信息，输出网关授权访问结果、服务总线
配置检测结果、接入适配结果、访问控制结果及路由调度返回结果；若操作失败，返回
具体错误原因，如权限不足、网关鉴权失败、服务总线地址或端口配置异常、请求方身
份不合法、服务接口权限不足、越权访问被拒绝或路由调度失败等。

<!-- PDF 第 591 页 -->

#### 3.8.4.6 应急数据采集与交换
提供可视化工作流、数据采集、数仓管理、数源管理、应用系统管理，实现数据全
流程自动化汇聚治理。
图3.8-6 应急数据采集与交换
##### 3.8.4.6.1 工作流定义
通过可视化画布构建数据同步、对账、质检、脚本执行等自动化任务流程。

<!-- PDF 第 592 页 -->

| 模块 | 功能点 |
| --- | --- |
| 工作流定义 | 工作流画布信息 |
|  | 数据同步组件信息 |
|  | 数据对账组件信息 |
|  | 数据质检组件信息 |
|  | SHELL 组件信息 |
|  | SQL 组件信息 |
|  | PYTHON 组件信息 |
|  | 流程控制组件信息 |
|  | 任务调度时间配置信息 |

###### 3.8.4.6.1.1 功能点
###### 3.8.4.6.1.1.1 工作流画布信息
功能点描述：支持通过DAG 画布页面，拖拽预置组件，配置数据处理逻辑，形成节
点间依赖的数据工作流定义。同时支持管理已有的工作流（定时、上线、编辑、删除），
支持工作流定义按照业务属性（以“项目”作为分类）分组管理。
（1）DAG 画布可视化配置：支持数据运营人员通过可视化画布界面，进行节点拖拽、
布局调整，直观呈现数据工作流的整体结构；提供节点样式、连线样式自定义，清晰区
分不同类型节点及依赖关系。
（2）预置组件管理：包含丰富的预置数据处理组件（如数据抽取、清洗、转换、
加载等类型）；支持组件属性配置（如数据源地址、处理规则、输出格式等）；提供组
件库的增删、更新维护功能。
（3）节点依赖关系定义：支持通过画布连线方式设置节点间的上下游依赖；自动
检测并提示循环依赖等不合理依赖关系；可视化展示依赖链条，支持依赖关系的编辑与

<!-- PDF 第 593 页 -->

删除。
（4）工作流基础操作：支持新建工作流（从空白画布开始配置）、编辑已有工作
流（修改节点、依赖或组件属性）、删除工作流（含二次确认机制）。
（5）工作流生命周期管理：提供上线/下线状态切换功能，上线后按配置执行，下
线后暂停运行；明确上线生效规则（如立即生效、指定时间生效）；记录工作流状态变
更历史。
（6）定时调度配置：支持为工作流设置定时执行规则，包括调度时间（具体时刻）、
执行周期（如每日、每周、每月、自定义CRON 表达式）；提供调度任务的启用/禁用开
关；支持依赖前置任务完成后触发执行。
（7）项目分组管理：支持创建、编辑、删除“项目”作为业务分类单元；允许将
工作流关联至指定项目，实现按项目聚合展示；支持项目级权限控制（如查看、编辑权
限分配）。
（8）工作流运行监控：实时展示工作流当前运行状态（运行中、成功、失败、等
待）；提供节点级运行状态详情（单个节点的执行结果、耗时）；记录工作流执行日志
（执行时间、触发方式、错误信息）。
核心字段：流程ID、名称、画布JSON、节点数、创建人、状态、创建时间。
###### 3.8.4.6.1.1.1.1 输入
用户或系统发起工作流画布信息相关操作（支持通过DAG 画布页面，拖拽预置组件，
配置数据处理逻辑，形成节点间依赖的数据工作流定义），提交流程ID、名称、画布
JSON、节点数、创建人、状态、创建时间等信息，系统同步校验用户的操作权限与参数
合规性，触发工作流画布信息处理流程。

<!-- PDF 第 594 页 -->

###### 3.8.4.6.1.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回流程ID、名称、
画布JSON、节点数、创建人、状态、创建时间等核心字段信息，输出工作流画布信息查
询展示结果及管理维护结果；若操作失败，返回具体错误原因，如权限不足、流程ID
参数不合法、工作流画布信息配置异常等。
###### 3.8.4.6.1.1.2 数据同步组件信息
功能点描述：支持结构化数据的全量、增量同步。
核心字段：组件ID、流程ID、源库、目标库、表映射、过滤条件、同步类型。
###### 3.8.4.6.1.1.2.1 输入
用户或系统发起数据同步组件信息相关操作（支持结构化数据的全量、增量同步），
提交组件ID、流程ID、源库、目标库、表映射、过滤条件、同步类型等信息，系统同
步校验用户的操作权限与参数合规性，触发数据同步组件信息处理流程。
###### 3.8.4.6.1.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回组件ID、流程
ID、源库、目标库、表映射、过滤条件、同步类型等核心字段信息，输出数据同步组件
信息接口处理结果；若操作失败，返回具体错误原因，如权限不足、组件ID 参数不合
法、数据同步组件信息接口调用失败等。
###### 3.8.4.6.1.1.3 数据对账组件信息
功能点描述：支持对两端的数据进行对账，并做出告警的动作，数据对账组件通过
配置数据对账规则，系统抽取解析两端数据。支持对账模式：全量对账。全量对账：通

<!-- PDF 第 595 页 -->

过计算两侧的数据行数，比对数据行数。
核心字段：组件ID、流程ID、对账指标、阈值、告警方式、对账周期。
###### 3.8.4.6.1.1.3.1 输入
用户或系统发起数据对账组件信息相关操作（支持对两端的数据进行对账，并做出
告警的动作，数据对账组件通过配置数据对账规则，系统抽取解析两端数据。支持对账
模式：全量对账。全量对账：通过计算两侧的数据行数，比对数据行数），提交组件ID、
流程ID、对账指标、阈值、告警方式、对账周期等信息，系统同步校验用户的操作权限
与参数合规性，触发数据对账组件信息处理流程。
###### 3.8.4.6.1.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回组件ID、流程
ID、对账指标、阈值、告警方式、对账周期等核心字段信息，输出数据对账组件信息管
理维护结果；若操作失败，返回具体错误原因，如权限不足、组件ID 参数不合法、数
据对账组件信息配置异常等。
###### 3.8.4.6.1.1.4 数据质检组件信息
功能点描述：支持根据质检规则，配置数据质检，并进行问题数据分拣。
核心字段：组件ID、流程ID、质检规则、字段、阈值、异常处理方式。
###### 3.8.4.6.1.1.4.1 输入
用户或系统发起数据质检组件信息相关操作（支持根据质检规则，配置数据质检，
并进行问题数据分拣），提交组件ID、流程ID、质检规则、字段、阈值、异常处理方
式等信息，系统同步校验用户的操作权限与参数合规性，触发数据质检组件信息处理流

<!-- PDF 第 596 页 -->

程。
###### 3.8.4.6.1.1.4.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回组件ID、流程
ID、质检规则、字段、阈值、异常处理方式等核心字段信息，输出数据质检组件信息管
理维护结果；若操作失败，返回具体错误原因，如权限不足、组件ID 参数不合法、数
据质检组件信息配置异常等。
###### 3.8.4.6.1.1.5 SHELL组件信息
功能点描述：支持SHELL 任务类型用于创建SHELL类型的任务并执行一系列的SHELL
脚本。
核心字段：组件ID、流程ID、脚本内容、执行用户、超时时间、参数。
###### 3.8.4.6.1.1.5.1 输入
用户或系统发起SHELL 组件信息相关操作（支持SHELL 任务类型用于创建SHELL 类
型的任务并执行一系列的SHELL 脚本），提交组件ID、流程ID、脚本内容、执行用户、
超时时间、参数等信息，系统同步校验用户的操作权限与参数合规性，触发SHELL 组件
信息处理流程。
###### 3.8.4.6.1.1.5.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回组件ID、流程
ID、脚本内容、执行用户、超时时间、参数等核心字段信息，输出SHELL 组件信息处理
结果；若操作失败，返回具体错误原因，如权限不足、组件ID 参数不合法、SHELL 组件
信息处理失败等。

<!-- PDF 第 597 页 -->

###### 3.8.4.6.1.1.6 SQL组件信息
功能点描述：SQL 组件用于定义SQL 任务类型的工作流节点，用于连接数据库并执
行相应自定义SQL 脚本。
核心字段：组件ID、流程ID、SQL 内容、数据库、事务、超时、参数。
###### 3.8.4.6.1.1.6.1 输入
用户或系统发起SQL 组件信息相关操作（SQL 组件用于定义SQL 任务类型的工作流
节点，用于连接数据库并执行相应自定义SQL 脚本），提交组件ID、流程ID、SQL 内容、
数据库、事务、超时、参数等信息，系统同步校验用户的操作权限与参数合规性，触发
SQL 组件信息处理流程。
###### 3.8.4.6.1.1.6.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回组件ID、流程
ID、SQL 内容、数据库、事务、超时、参数等核心字段信息，输出SQL 组件信息处理结
果；若操作失败，返回具体错误原因，如权限不足、组件ID 参数不合法、SQL 组件信息
处理失败等。
###### 3.8.4.6.1.1.7 PYTHON组件信息
功能点描述：PYTHON 组件使用TBDS、MRS 的PAAS 能力，用于创建Python 类型的
任务并执行一系列的Python 脚本，进行数据处理、分析任务。
核心字段：组件ID、流程ID、脚本内容、依赖包、版本、超时时间。
###### 3.8.4.6.1.1.7.1 输入
用户或系统发起PYTHON 组件信息相关操作（PYTHON 组件使用TBDS、MRS 的PAAS

<!-- PDF 第 598 页 -->

能力，用于创建Python 类型的任务并执行一系列的Python 脚本，进行数据处理、分析
任务），提交组件ID、流程ID、脚本内容、依赖包、版本、超时时间等信息，系统同
步校验用户的操作权限与参数合规性，触发PYTHON 组件信息处理流程。
###### 3.8.4.6.1.1.7.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回组件ID、流程
ID、脚本内容、依赖包、版本、超时时间等核心字段信息，输出PYTHON 组件信息统计
分析结果；若操作失败，返回具体错误原因，如权限不足、组件ID 参数不合法、PYTHON
组件信息处理失败等。
###### 3.8.4.6.1.1.8 流程控制组件信息
功能点描述：流程控制组件支持对工作流中的组件进行流程控制操作，控制类型有
子流程、依赖、条件判断。
核心字段：组件ID、流程ID、控制类型、条件表达式、子流程ID、等待时间。
###### 3.8.4.6.1.1.8.1 输入
用户或系统发起流程控制组件信息相关操作（流程控制组件支持对工作流中的组件
进行流程控制操作，控制类型有子流程、依赖、条件判断），提交组件ID、流程ID、
控制类型、条件表达式、子流程ID、等待时间等信息，系统同步校验用户的操作权限与
参数合规性，触发流程控制组件信息处理流程。
###### 3.8.4.6.1.1.8.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回组件ID、流程
ID、控制类型、条件表达式、子流程ID、等待时间等核心字段信息，输出流程控制组件

<!-- PDF 第 599 页 -->

信息处理结果；若操作失败，返回具体错误原因，如权限不足、组件ID 参数不合法、
流程控制组件信息处理失败等。
###### 3.8.4.6.1.1.9 任务调度时间配置信息
功能点描述：任务调度配置支持对构建的工作流任务进行调度时间配置，配置时间
支持精确到年、月、日、时、分、秒。
核心字段：调度ID、流程ID、类型、Cron 表达式、开始时间、结束时间、状态。
###### 3.8.4.6.1.1.9.1 输入
用户或系统发起任务调度时间配置信息相关操作（任务调度配置支持对构建的工作
流任务进行调度时间配置，配置时间支持精确到年、月、日、时、分、秒），提交调度
ID、流程ID、类型、Cron 表达式、开始时间、结束时间、状态等信息，系统同步校验
用户的操作权限与参数合规性，触发任务调度时间配置信息处理流程。
###### 3.8.4.6.1.1.9.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回调度ID、流程
ID、类型、Cron 表达式、开始时间、结束时间、状态等核心字段信息，输出任务调度时
间配置信息管理维护结果；若操作失败，返回具体错误原因，如权限不足、调度ID 参
数不合法、任务调度时间配置信息配置异常等。
##### 3.8.4.6.2 数据采集
统一采集离线文件、数据库、接口、消息队列等多源数据，实现自动化汇聚。

<!-- PDF 第 600 页 -->

| 模块 | 功能点 |
| --- | --- |
| 数据采集 | 离线数据采集管理信息 |
|  | 汇聚任务配置信息 |
|  | 数据采集日志信息 |
|  | 任务调度管理信息 |
|  | 调度配置信息 |
|  | 调度任务运行日志信息 |
|  | 执行器管理信息 |
|  | 文件汇聚管理信息 |
|  | 文件汇聚同步配置信息 |

###### 3.8.4.6.2.1 功能点
###### 3.8.4.6.2.1.1 离线数据采集管理信息
功能点描述：支持以列表的形式展示数据汇聚系统已配置的离线数据汇聚任务。表
头字段包括：任务名称、所属项目、调度（已配置/未配置）、上次执行时间、上次执
行结果、累计成功执行次数、累计执行次数、操作包括（执行、编辑、删除）。
核心字段：采集ID、文件路径、解析规则、编码、分隔符、表头、目标表、状态。
###### 3.8.4.6.2.1.1.1 输入
用户或系统发起离线数据采集管理信息相关操作（支持以列表的形式展示数据汇聚
系统已配置的离线数据汇聚任务。表头字段包括：任务名称、所属项目、调度（已配置
/未配置）、上次执行时间、上次执行结果、累计成功执行次数、累计执行次数、操作
包括（执行、编辑、删除）），提交采集ID、文件路径、解析规则、编码、分隔符、表
头、目标表、状态等信息，系统同步校验用户的操作权限与参数合规性，触发离线数据

<!-- PDF 第 601 页 -->

采集管理信息处理流程。
###### 3.8.4.6.2.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回采集ID、文件路
径、解析规则、编码、分隔符、表头、目标表、状态等核心字段信息，输出离线数据采
集管理信息查询展示结果及管理维护结果；若操作失败，返回具体错误原因，如权限不
足、采集ID 参数不合法、离线数据采集管理信息配置异常等。
###### 3.8.4.6.2.1.2 汇聚任务配置信息
功能点描述：支持汇聚任务配置信息管理，支持配置离线数据采集的数据源信息及
目标源信息。支持离线数据采集字段映射配置，支持配置数据源字段信息、目标字段信
息及字段映射关系，支持采集数据与目标存储字段的对应关系管理。支持采集任务配置，
支持配置采集任务名称、采集时间、数据存储位置等信息。支持采集策略配置，支持增
量采集、全量采集等采集方式配置。支持任务调度配置，支持手动调度、定时调度等任
务调度方式配置。
核心字段：任务ID、名称、来源类型、目标表、调度周期、异常策略、状态。
###### 3.8.4.6.2.1.2.1 输入
用户或系统发起汇聚任务配置信息相关操作（支持汇聚任务配置信息管理，支持配
置离线数据采集的数据源信息及目标源信息），提交任务ID、名称、来源类型、目标表、
调度周期、异常策略、状态等信息，系统同步校验用户的操作权限与参数合规性，触发
汇聚任务配置信息处理流程。

<!-- PDF 第 602 页 -->

###### 3.8.4.6.2.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回任务ID、名称、
来源类型、目标表、调度周期、异常策略、状态等核心字段信息，输出汇聚任务配置信
息管理维护结果；若操作失败，返回具体错误原因，如权限不足、任务ID 参数不合法、
汇聚任务配置信息配置异常等。
###### 3.8.4.6.2.1.3 数据采集日志信息
功能点描述：支持展示离线数据采集任务日志信息，支持查看任务启动、数据采集、
数据转换、数据存储等各阶段的执行情况。支持通过日志信息查看任务执行结果、错误
信息、警告信息等内容。支持日志级别设置，支持调试级别、信息级别、警告级别、错
误级别等日志分类管理。支持根据日志级别筛选和查看对应的日志信息。
核心字段：日志ID、任务ID、开始时间、结束时间、总条数、成功数、错误信息。
###### 3.8.4.6.2.1.3.1 输入
用户或系统发起数据采集日志信息相关操作（支持展示离线数据采集任务日志信
息，支持查看任务启动、数据采集、数据转换、数据存储等各阶段的执行情况），提交
日志ID、任务ID、开始时间、结束时间、总条数、成功数、错误信息等信息，系统同
步校验用户的操作权限与参数合规性，触发数据采集日志信息处理流程。
###### 3.8.4.6.2.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回日志ID、任务
ID、开始时间、结束时间、总条数、成功数、错误信息等核心字段信息，输出数据采集
日志信息查询展示结果及管理维护结果；若操作失败，返回具体错误原因，如权限不足、

<!-- PDF 第 603 页 -->

日志ID 参数不合法、数据采集日志信息处理失败等。
###### 3.8.4.6.2.1.4 任务调度管理信息
功能点描述：支持离线数据汇聚任务的调度与管理，支持调度任务配置管理、调度
任务统一展示及前端页面统一风格改造。支持调度列表、调度日志、执行器管理等功能
模块。支持以列表形式展示数据汇聚系统已配置的调度任务，展示内容包括调度内容（任
务、作业名称）、所属项目、调度名称、状态、下次触发时间、执行结果、运行模式、
路由策略等信息。支持对调度任务进行执行、暂停/开始、日志查看、编辑、删除等操
作。
核心字段：调度ID、任务ID、操作类型、操作人、执行状态、执行时间。
###### 3.8.4.6.2.1.4.1 输入
用户或系统发起任务调度管理信息相关操作（支持离线数据汇聚任务的调度与管
理，支持调度任务配置管理、调度任务统一展示及前端页面统一风格改造），提交调度
ID、任务ID、操作类型、操作人、执行状态、执行时间等信息，系统同步校验用户的操
作权限与参数合规性，触发任务调度管理信息处理流程。
###### 3.8.4.6.2.1.4.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回调度ID、任务
ID、操作类型、操作人、执行状态、执行时间等核心字段信息，输出任务调度管理信息
查询展示结果及管理维护结果；若操作失败，返回具体错误原因，如权限不足、调度ID
参数不合法、任务调度管理信息配置异常等。

<!-- PDF 第 604 页 -->

###### 3.8.4.6.2.1.5 调度配置信息
功能点描述：支持在调度列表头部提供新增按钮，用于新增数据汇聚调度任务。支
持配置调度任务所需参数信息。
核心字段：配置ID、任务ID、最大并发、优先级、重试次数、重试间隔。
###### 3.8.4.6.2.1.5.1 输入
用户或系统发起调度配置信息相关操作（支持在调度列表头部提供新增按钮，用于
新增数据汇聚调度任务。支持配置调度任务所需参数信息），提交配置ID、任务ID、
最大并发、优先级、重试次数、重试间隔等信息，系统同步校验用户的操作权限与参数
合规性，触发调度配置信息处理流程。
###### 3.8.4.6.2.1.5.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回配置ID、任务
ID、最大并发、优先级、重试次数、重试间隔等核心字段信息，输出调度配置信息管理
维护结果；若操作失败，返回具体错误原因，如权限不足、配置ID 参数不合法、调度
配置信息配置异常等。
###### 3.8.4.6.2.1.6 调度任务运行日志信息
功能点描述：支持展示数据汇聚系统记录的调度任务运行日志信息，支持调度历史
记录追溯与查询。支持以列表形式展示调度日志数据，展示内容包括调度内容、调度名
称、所属项目、调度结果、调度备注、执行器地址、运行模式、执行时间、执行结果等
信息。支持查看日志详情操作。
核心字段：运行ID、任务ID、执行时间、耗时、状态、节点日志、错误信息。

<!-- PDF 第 605 页 -->

###### 3.8.4.6.2.1.6.1 输入
用户或系统发起调度任务运行日志信息相关操作（记支持展示数据汇聚系统记录的
调度任务运行日志信息，支持调度历史记录追溯与查询。支持以列表形式展示调度日志
数据，展示内容包括调度内容、调度名称、所属项目、调度结果、调度备注、执行器地
址、运行模式、执行时间、执行结果等信息。支持查看日志详情操作），提交运行ID、
任务ID、执行时间、耗时、状态、节点日志、错误信息等信息，系统同步校验用户的操
作权限与参数合规性，触发调度任务运行日志信息处理流程。
###### 3.8.4.6.2.1.6.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回运行ID、任务
ID、执行时间、耗时、状态、节点日志、错误信息等核心字段信息，输出调度任务运行
日志信息查询展示结果；若操作失败，返回具体错误原因，如权限不足、运行ID 参数
不合法、调度任务运行日志信息处理失败等。
###### 3.8.4.6.2.1.7 执行器管理信息
功能点描述：支持执行器管理信息展示，支持展示执行器名称、分组标识、注册方
式、在线机器地址等信息。支持执行器参数配置，支持配置执行器名称、分组标识、注
册方式、在线机器名称等内容。
核心字段：执行器ID、节点IP、端口、状态、CPU、内存、任务数、注册时间。
###### 3.8.4.6.2.1.7.1 输入
用户或系统发起执行器管理信息相关操作（支持执行器管理信息展示，支持展示执
行器名称、分组标识、注册方式、在线机器地址等信息。支持执行器参数配置，支持配

<!-- PDF 第 606 页 -->

置执行器名称、分组标识、注册方式、在线机器名称等内容），提交执行器ID、节点
IP、端口、状态、CPU、内存、任务数、注册时间等信息，系统同步校验用户的操作权
限与参数合规性，触发执行器管理信息处理流程。
###### 3.8.4.6.2.1.7.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回执行器ID、节点
IP、端口、状态、CPU、内存、任务数、注册时间等核心字段信息，输出执行器管理信
息查询展示结果及管理维护结果；若操作失败，返回具体错误原因，如权限不足、执行
器ID 参数不合法、执行器管理信息配置异常等。
###### 3.8.4.6.2.1.8 文件汇聚管理信息
功能点描述：支持文件汇聚管理信息展示，支持展示源文件夹路径、目标文件夹路
径、同步状态、同步开始时间、同步结束时间、同步文件数量等信息。支持同步状态展
示，支持显示同步成功、同步失败等状态信息。
核心字段：汇聚ID、协议、服务器、路径、文件匹配规则、备份策略、状态。
###### 3.8.4.6.2.1.8.1 输入
用户或系统发起文件汇聚管理信息相关操作（支持文件汇聚管理信息展示，支持展
示源文件夹路径、目标文件夹路径、同步状态、同步开始时间、同步结束时间、同步文
件数量等信息。支持同步状态展示，支持显示同步成功、同步失败等状态信息），提交
汇聚ID、协议、服务器、路径、文件匹配规则、备份策略、状态等信息，系统同步校验
用户的操作权限与参数合规性，触发文件汇聚管理信息处理流程。

<!-- PDF 第 607 页 -->

###### 3.8.4.6.2.1.8.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回汇聚ID、协议、
服务器、路径、文件匹配规则、备份策略、状态等核心字段信息，输出文件汇聚管理信
息查询展示结果及文件处理结果；若操作失败，返回具体错误原因，如权限不足、汇聚
ID 参数不合法、文件汇聚管理信息配置异常等。
###### 3.8.4.6.2.1.9 文件汇聚同步配置信息
功能点描述：支持文件汇聚同步配置信息管理，支持配置同步源路径、同步目标路
径、同步周期、同步方式、同步频率、同步策略、同步状态、同步日志等信息。支持同
步配置新增、编辑、删除、测试等操作。支持同步状态查看及同步日志查询。
核心字段：配置ID、汇聚ID、同步模式、断点续传、校验方式、重传次数。
###### 3.8.4.6.2.1.9.1 输入
用户或系统发起文件汇聚同步配置信息相关操作（支持文件汇聚同步配置信息管
理，支持配置同步源路径、同步目标路径、同步周期、同步方式、同步频率、同步策略、
同步状态、同步日志等信息。支持同步配置新增、编辑、删除、测试等操作。支持同步
状态查看及同步日志查询），提交配置ID、汇聚ID、同步模式、断点续传、校验方式、
重传次数等信息，系统同步校验用户的操作权限与参数合规性，触发文件汇聚同步配置
信息处理流程。
###### 3.8.4.6.2.1.9.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回配置ID、汇聚
ID、同步模式、断点续传、校验方式、重传次数等核心字段信息，输出文件汇聚同步配

<!-- PDF 第 608 页 -->

置信息查询展示结果及文件处理结果；若操作失败，返回具体错误原因，如权限不足、
配置ID 参数不合法、文件汇聚同步配置信息配置异常等。
##### 3.8.4.6.3 数仓管理
统一管理数据仓库层级、配置、命名规范，保障数据标准化。
| 模块 | 功能点 |
| --- | --- |
| 数仓管理 | 数仓层级基础信息管理数据 |
|  | 数仓层级配置信息 |
|  | 命名规范元素管理信息 |
|  | 命名规范配置信息 |

###### 3.8.4.6.3.1 功能点
###### 3.8.4.6.3.1.1 数仓层级基础信息管理数据
功能点描述：支持数仓层级管理，支持对数据中台数据库表进行统一管理。支持展
示基础层级信息、中文名称、英文名称、绑定数据库、创建时间、描述信息等内容。支
持数仓层级信息维护与管理。
核心字段：层级ID、层级代码、层级名称、描述、负责人、状态。
###### 3.8.4.6.3.1.1.1 输入
用户或系统发起数仓层级基础信息管理数据相关操作（支持数仓层级管理，支持对
数据中台数据库表进行统一管理。支持展示基础层级信息、中文名称、英文名称、绑定
数据库、创建时间、描述信息等内容。支持数仓层级信息维护与管理），提交层级ID、
层级代码、层级名称、描述、负责人、状态等信息，系统同步校验用户的操作权限与参
数合规性，触发数仓层级基础信息管理数据处理流程。

<!-- PDF 第 609 页 -->

###### 3.8.4.6.3.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回层级ID、层级代
码、层级名称、描述、负责人、状态等核心字段信息，输出数仓层级基础信息管理数据
查询展示结果及管理维护结果；若操作失败，返回具体错误原因，如权限不足、层级ID
参数不合法、数仓层级基础信息管理数据处理失败等。
###### 3.8.4.6.3.1.2 数仓层级配置信息
功能点描述：支持数仓层级定义与配置管理，支持展示已定义的数仓层级信息，并
提供新增、编辑、删除等操作入口。支持在数仓层级列表中通过“新增”按钮新增数仓
层级，支持填写数仓层级、中文名称、英文名称、所属基础数仓、绑定数据库等信息。
支持在“英文名称”“所属基础数仓”“绑定数据库”等字段标题旁展示注释图标，支
持鼠标悬停显示字段说明信息，其中“英文名称”用于建表时的表名约束，“绑定数据
库”用于配置该数仓层级对应的数据写入数据库。支持在数仓层级列表中通过“编辑”
按钮修改数仓层级信息。
核心字段：配置ID、层级ID、生命周期、分区字段、存储策略、副本数。
###### 3.8.4.6.3.1.2.1 输入
用户或系统发起数仓层级配置信息相关操作（支持数仓层级定义与配置管理，支持
展示已定义的数仓层级信息，并提供新增、编辑、删除等操作入口），提交配置ID、层
级ID、生命周期、分区字段、存储策略、副本数等信息，系统同步校验用户的操作权限
与参数合规性，触发数仓层级配置信息处理流程。

<!-- PDF 第 610 页 -->

###### 3.8.4.6.3.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回配置ID、层级
ID、生命周期、分区字段、存储策略、副本数等核心字段信息，输出数仓层级配置信息
查询展示结果及管理维护结果；若操作失败，返回具体错误原因，如权限不足、配置ID
参数不合法、数仓层级配置信息配置异常等。
###### 3.8.4.6.3.1.3 命名规范元素管理信息
功能点描述：支持命名规范管理，支持定义建表时的表名规范元素。支持自定义、
读取、固定项三种命名元素类型管理。支持固定项命名元素内置系统管理，固定项不可
编辑，支持在数仓层级设计时作为必选命名规范使用。支持读取类型命名元素内置系统
管理，支持从预定义取数逻辑中选择对应内容。支持自定义命名元素配置，支持用户自
定义命名元素并全局共享使用。支持命名规范列表展示，展示内容包括命名元素名称、
中文名称、英文名称等信息。
核心字段：元素ID、类型、名称、缩写、描述、状态、创建人。
###### 3.8.4.6.3.1.3.1 输入
用户或系统发起命名规范元素管理信息相关操作（支持命名规范管理，支持定义建
表时的表名规范元素），提交元素ID、类型、名称、缩写、描述、状态、创建人等信息，
系统同步校验用户的操作权限与参数合规性，触发命名规范元素管理信息处理流程。
###### 3.8.4.6.3.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回元素ID、类型、
名称、缩写、描述、状态、创建人等核心字段信息，输出命名规范元素管理信息查询展

<!-- PDF 第 611 页 -->

示结果及管理维护结果；若操作失败，返回具体错误原因，如权限不足、元素ID 参数
不合法、命名规范元素管理信息配置异常等。
###### 3.8.4.6.3.1.4 命名规范配置信息
功能点描述：支持命名规范配置管理，支持“更新方式”命名元素配置，“更新方
式”为固定项命名元素，内置系统且不可编辑，支持在数仓层级设计时作为必选命名规
范使用，支持用于标记库表更新方式。支持“自定义内容”命名元素配置，“自定义内
容”为固定项命名元素，内置系统且不可编辑，支持在数仓层级设计时作为必选命名规
范使用，支持用户在快速建表时自定义表名内容。支持“组织”命名元素配置，“组织”
为读取类型命名元素，支持在快速建表时配置表名中包含组织名称。支持“业务系统”
命名元素配置，“业务系统”为读取类型命名元素，支持在快速建表时配置表名中包含
所属业务系统名称。支持自定义命名元素管理，支持用户在内置命名元素基础上新增、
编辑、维护自定义命名元素。
核心字段：规范ID、层级、业务域、类型、命名规则、示例、状态。
###### 3.8.4.6.3.1.4.1 输入
用户或系统发起命名规范配置信息相关操作（支持命名规范配置管理，支持“更新
方式”命名元素配置，“更新方式”为固定项命名元素，内置系统且不可编辑，支持在数
仓层级设计时作为必选命名规范使用，支持用于标记库表更新方式），提交规范ID、层
级、业务域、类型、命名规则、示例、状态等信息，系统同步校验用户的操作权限与参
数合规性，触发命名规范配置信息处理流程。

<!-- PDF 第 612 页 -->

###### 3.8.4.6.3.1.4.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回规范ID、层级、
业务域、类型、命名规则、示例、状态等核心字段信息，输出命名规范配置信息管理维
护结果；若操作失败，返回具体错误原因，如权限不足、规范ID 参数不合法、命名规
范配置信息配置异常等。
##### 3.8.4.6.4 数源管理
统一管理所有数据源连接信息、驱动、权限、状态。
| 模块 | 功能点 |
| --- | --- |
| 数源管理 | 数据库管理信息 |
|  | 数据库参数配置信息 |

###### 3.8.4.6.4.1 功能点
###### 3.8.4.6.4.1.1 数据库管理信息
功能点描述：支持数据库管理，支持统一管理数据采集系统及其他业务模块使用的
数据库资源。支持以列表形式展示系统挂接的数据库信息，支持对源数据库、目标数据
库等数据库资源进行管理。支持展示数据库状态、数据库类型、数据库名称、数据库URL、
数据库层级、所属机构、机构类别、所属系统、异常原因等信息。
核心字段：数据源ID、名称、类型、地址、端口、库名、驱动、状态。
###### 3.8.4.6.4.1.1.1 输入
用户或系统发起数据库管理信息相关操作（支持数据库管理，支持统一管理数据采
集系统及其他业务模块使用的数据库资源），提交数据源ID、名称、类型、地址、端口、

<!-- PDF 第 613 页 -->

库名、驱动、状态等信息，系统同步校验用户的操作权限与参数合规性，触发数据库管
理信息处理流程。
###### 3.8.4.6.4.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回数据源ID、名称、
类型、地址、端口、库名、驱动、状态等核心字段信息，输出数据库管理信息查询展示
结果及管理维护结果；若操作失败，返回具体错误原因，如权限不足、数据源ID 参数
不合法、数据库管理信息处理失败等。
###### 3.8.4.6.4.1.2 数据库参数配置信息
功能点描述：支持数据库参数配置信息管理，支持配置数据库类型、数据库名称、
数据库层级、所属系统名称、机构类型、数据库类别、所属机构、责任人、责任人手机
号、邮箱等信息。支持数据库连接参数配置，支持配置数据库URL、JDBC 驱动类信息、
用户名、密码、异常原因等内容。
核心字段：配置ID、数据源ID、连接池、超时时间、最大连接、重试次数、SSL。
###### 3.8.4.6.4.1.2.1 输入
用户或系统发起数据库参数配置信息相关操作（支持数据库参数配置信息管理，支
持配置数据库类型、数据库名称、数据库层级、所属系统名称、机构类型、数据库类别、
所属机构、责任人、责任人手机号、邮箱等信息。支持数据库连接参数配置，支持配置
数据库URL、JDBC 驱动类信息、用户名、密码、异常原因等内容），提交配置ID、数据
源ID、连接池、超时时间、最大连接、重试次数、SSL 等信息，系统同步校验用户的操
作权限与参数合规性，触发数据库参数配置信息处理流程。

<!-- PDF 第 614 页 -->

###### 3.8.4.6.4.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回配置ID、数据源
ID、连接池、超时时间、最大连接、重试次数、SSL 等核心字段信息，输出数据库参数
配置信息管理维护结果；若操作失败，返回具体错误原因，如权限不足、配置ID 参数
不合法、数据库参数配置信息配置异常等。
##### 3.8.4.6.5 应用系统管理
对接业务系统，管理系统基础信息、凭证、授权服务。
| 模块 | 功能点 |
| --- | --- |
| 应用系统管理 | 应用系统基础信息 |
|  | 系统凭证信息 |
|  | 授权服务配置管理信息 |

###### 3.8.4.6.5.1 功能点
###### 3.8.4.6.5.1.1 应用系统基础信息
功能点描述：支持应用系统管理，支持展示应用ID、应用系统名称、启用状态、
应用系统关联处室、应用Token、Token 状态、系统联系人、联系电话等信息。支持通
过Token 进入Token 配置及授权服务界面。支持应用系统信息配置，支持配置应用系统
名称、启用状态、关联处室、联系人、联系人电话等内容。支持统计应用系统关联的数
据资产服务申请数及数据需求申请数。支持应用系统管理信息展示，支持展示应用系统
编号、应用系统名称、联系人名称、联系人电话、业务系统主管单位等信息。支持系统
地址信息配置，支持配置应用地址、端口号、备注等内容。支持系统开发商信息管理，
支持配置开发商代码、开发商名称、开发商联系人姓名、联系电话等信息。

<!-- PDF 第 615 页 -->

核心字段：系统ID、系统名称、负责人、联系人、电话、地址、用途、状态。
###### 3.8.4.6.5.1.1.1 输入
用户或系统发起应用系统基础信息相关操作（支持应用系统管理，支持展示应用ID、
应用系统名称、启用状态、应用系统关联处室、应用Token、Token 状态、系统联系人、
联系电话等信息），提交系统ID、系统名称、负责人、联系人、电话、地址、用途、状
态等信息，系统同步校验用户的操作权限与参数合规性，触发应用系统基础信息处理流
程。
###### 3.8.4.6.5.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回系统ID、系统名
称、负责人、联系人、电话、地址、用途、状态等核心字段信息，输出应用系统基础信
息查询展示结果及统计分析结果；若操作失败，返回具体错误原因，如权限不足、系统
ID 参数不合法、应用系统基础信息配置异常等。
###### 3.8.4.6.5.1.2 系统凭证信息
功能点描述：支持后台管理人员为应用系统手动生成应用凭证（应用Token），支
持在生成凭证时填写操作原因、上传相关证据文件，并选择授权调用的服务。支持对应
用系统凭证进行启用、停用操作，停用后凭证暂时失效，重新启用后恢复使用。支持自
动生成应用凭证，当应用系统关联的服务调用申请或数据需求申请审核通过后，系统自
动判断是否已存在应用凭证，若不存在则自动生成凭证并进行展示，生成后的凭证默认
为启用状态。支持针对线下已完成审批但未在线上提交申请流程的系统对接场景，由实
施人员手动生成应用凭证并配置授权服务。支持凭证生成、启用、停用等操作记录管理。

<!-- PDF 第 616 页 -->

核心字段：凭证ID、系统ID、密钥类型、密钥值、有效期、状态、更新时间。
###### 3.8.4.6.5.1.2.1 输入
用户或系统发起系统凭证信息相关操作（支持后台管理人员为应用系统手动生成应
用凭证（应用Token），支持在生成凭证时填写操作原因、上传相关证据文件，并选择
授权调用的服务），提交凭证ID、系统ID、密钥类型、密钥值、有效期、状态、更新
时间等信息，系统同步校验用户的操作权限与参数合规性，触发系统凭证信息处理流程。
###### 3.8.4.6.5.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回凭证ID、系统
ID、密钥类型、密钥值、有效期、状态、更新时间等核心字段信息，输出系统凭证信息
查询展示结果及生成结果；若操作失败，返回具体错误原因，如权限不足、凭证ID 参
数不合法、系统凭证信息配置异常等。
###### 3.8.4.6.5.1.3 授权服务配置管理信息
功能点描述：支持授权服务配置管理，支持选择需授权的服务，支持多选配置。支
持展示服务名称、标识码等服务信息。支持生成凭证并授权操作，支持系统自动生成应
用系统Token，并对所选择的多个服务进行授权。支持完成授权后提示生成凭证成功及
服务授权结果。
核心字段：授权ID、系统ID、服务ID、数据范围、权限、生效时间、过期时间。
###### 3.8.4.6.5.1.3.1 输入
用户或系统发起授权服务配置管理信息相关操作（支持授权服务配置管理，支持选
择需授权的服务，支持多选配置。支持展示服务名称、标识码等服务信息。支持生成凭

<!-- PDF 第 617 页 -->

证并授权操作，支持系统自动生成应用系统Token，并对所选择的多个服务进行授权。
支持完成授权后提示生成凭证成功及服务授权结果），提交授权ID、系统ID、服务ID、
数据范围、权限、生效时间、过期时间等信息，系统同步校验用户的操作权限与参数合
规性，触发授权服务配置管理信息处理流程。
###### 3.8.4.6.5.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回授权ID、系统
ID、服务ID、数据范围、权限、生效时间、过期时间等核心字段信息，输出授权服务配
置管理信息查询展示结果及生成结果；若操作失败，返回具体错误原因，如权限不足、
授权ID 参数不合法、授权服务配置管理信息配置异常等。
#### 3.8.4.7 应急融合服务门户
面向应急指挥人员提供统一工作门户，集成待办、消息、知识、日程、数据看板、
子系统入口。
图3.8-7 应急融合服务门户

<!-- PDF 第 618 页 -->

##### 3.8.4.7.1 门户框架
提供统一门户框架，包括个人中心、待办、消息、知识、日程、快捷菜单、数据看
板。
| 模块 | 功能点 |
| --- | --- |
| 门户框架 | 通用功能-个人信息 |
|  | 通用功能-待办提醒消息 |
|  | 通用功能-业务系统导航信息 |
|  | 待办中心-待办列表信息 |
|  | 消息中心-消息列表和详情信息 |
|  | 知识中心-列表和详情信息 |
|  | 工作日程信息 |
|  | 快捷菜单列表信息 |

###### 3.8.4.7.1.1 功能点
###### 3.8.4.7.1.1.1 通用功能-个人信息
功能点描述：展示用户姓名、单位、角色、值班状态、在线状态。
核心字段：用户ID、姓名、单位、角色、值班状态、在线状态、头像、联系方式。
###### 3.8.4.7.1.1.1.1 输入
用户或系统发起个人信息相关操作（展示用户姓名、单位、角色、值班状态、在线
状态），提交用户ID、姓名、单位、角色、值班状态、在线状态、头像、联系方式等信
息，系统同步校验用户的操作权限与参数合规性，触发个人信息处理流程。

<!-- PDF 第 619 页 -->

###### 3.8.4.7.1.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回用户ID、姓名、
单位、角色、值班状态、在线状态、头像、联系方式等核心字段信息，输出个人信息查
询展示结果；若操作失败，返回具体错误原因，如权限不足、用户ID 参数不合法、个
人信息处理失败等。
###### 3.8.4.7.1.1.2 通用功能-待办提醒消息
功能点描述：展示待办任务、预警叫应、会议提醒、审核待办。
核心字段：提醒ID、类型、标题、内容、时间、紧急程度、处理状态。
###### 3.8.4.7.1.1.2.1 输入
用户或系统发起待办提醒消息相关操作（展示待办任务、预警叫应、会议提醒、审
核待办），提交提醒ID、类型、标题、内容、时间、紧急程度、处理状态等信息，系统
同步校验用户的操作权限与参数合规性，触发待办提醒消息处理流程。
###### 3.8.4.7.1.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回提醒ID、类型、
标题、内容、时间、紧急程度、处理状态等核心字段信息，输出待办提醒消息查询展示
结果；若操作失败，返回具体错误原因，如权限不足、提醒ID 参数不合法、待办提醒
消息处理失败等。
###### 3.8.4.7.1.1.3 通用功能-业务系统导航信息
功能点描述：统一展示7 大子系统入口，支持快速跳转。
核心字段：导航ID、系统名称、图标、地址、排序、权限、状态。

<!-- PDF 第 620 页 -->

###### 3.8.4.7.1.1.3.1 输入
用户或系统发起通用功能-业务系统导航信息相关操作（统一展示7 大子系统入口，
支持快速跳转），提交导航ID、系统名称、图标、地址、排序、权限、状态等信息，系
统同步校验用户的操作权限与参数合规性，触发通用功能-业务系统导航信息处理流程。
###### 3.8.4.7.1.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回导航ID、系统名
称、图标、地址、排序、权限、状态等核心字段信息，输出通用功能-业务系统导航信
息查询展示结果；若操作失败，返回具体错误原因，如权限不足、导航ID 参数不合法、
通用功能-业务系统导航信息处理失败等。
###### 3.8.4.7.1.1.4 待办中心-待办列表信息
功能点描述：集中展示所有待办，支持筛选、处理、跳转。
核心字段：待办ID、标题、来源系统、发起人、时间、紧急程度、处理状态。
###### 3.8.4.7.1.1.4.1 输入
用户或系统发起待办中心-待办列表信息相关操作（集中展示所有待办，支持筛选、
处理、跳转），提交待办ID、标题、来源系统、发起人、时间、紧急程度、处理状态等
信息，系统同步校验用户的操作权限与参数合规性，触发待办中心-待办列表信息处理
流程。
###### 3.8.4.7.1.1.4.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回待办ID、标题、
来源系统、发起人、时间、紧急程度、处理状态等核心字段信息，输出待办中心-待办

<!-- PDF 第 621 页 -->

列表信息查询展示结果；若操作失败，返回具体错误原因，如权限不足、待办ID 参数
不合法、待办中心-待办列表信息处理失败等。
###### 3.8.4.7.1.1.5 消息中心-消息列表和详情信息
功能点描述：展示预警、通知、公告、消息，支持已读、回执。
核心字段：消息ID、类型、标题、内容、发送人、时间、已读状态、回执状态。
###### 3.8.4.7.1.1.5.1 输入
用户或系统发起消息中心-消息列表和详情信息相关操作（展示预警、通知、公告、
消息，支持已读、回执），提交消息ID、类型、标题、内容、发送人、时间、已读状态、
回执状态等信息，系统同步校验用户的操作权限与参数合规性，触发消息中心-消息列
表和详情信息处理流程。
###### 3.8.4.7.1.1.5.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回消息ID、类型、
标题、内容、发送人、时间、已读状态、回执状态等核心字段信息，输出消息中心-消
息列表和详情信息查询展示结果；若操作失败，返回具体错误原因，如权限不足、消息
ID 参数不合法、消息中心-消息列表和详情信息处理失败等。
###### 3.8.4.7.1.1.6 知识中心-列表和详情信息
功能点描述：展示常用预案、法规、流程、案例，一键查阅。
核心字段：知识ID、标题、类型、来源、更新时间、热度、权限。
###### 3.8.4.7.1.1.6.1 输入
用户或系统发起知识中心-列表和详情信息相关操作（展示常用预案、法规、流程、

<!-- PDF 第 622 页 -->

案例，一键查阅），提交知识ID、标题、类型、来源、更新时间、热度、权限等信息，
系统同步校验用户的操作权限与参数合规性，触发知识中心-列表和详情信息处理流程。
###### 3.8.4.7.1.1.6.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回知识ID、标题、
类型、来源、更新时间、热度、权限等核心字段信息，输出知识中心-列表和详情信息
查询展示结果；若操作失败，返回具体错误原因，如权限不足、知识ID 参数不合法、
知识中心-列表和详情信息处理失败等。
###### 3.8.4.7.1.1.7 工作日程信息
功能点描述：展示值班、会议、演练、调度日程。
核心字段：日程ID、主题、时间、地点、参会人、状态、提醒时间。
###### 3.8.4.7.1.1.7.1 输入
用户或系统发起工作日程信息相关操作（展示值班、会议、演练、调度日程），提
交日程ID、主题、时间、地点、参会人、状态、提醒时间等信息，系统同步校验用户的
操作权限与参数合规性，触发工作日程信息处理流程。
###### 3.8.4.7.1.1.7.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回日程ID、主题、
时间、地点、参会人、状态、提醒时间等核心字段信息，输出工作日程信息查询展示结
果；若操作失败，返回具体错误原因，如权限不足、日程ID 参数不合法、工作日程信
息处理失败等。

<!-- PDF 第 623 页 -->

###### 3.8.4.7.1.1.8 快捷菜单列表信息
功能点描述：自定义常用功能、视频、报表、工具快捷入口。
核心字段：菜单ID、名称、图标、链接、排序、用户ID、创建时间。
###### 3.8.4.7.1.1.8.1 输入
用户或系统发起快捷菜单列表信息相关操作（自定义常用功能、视频、报表、工具
快捷入口），提交菜单ID、名称、图标、链接、排序、用户ID、创建时间等信息，系
统同步校验用户的操作权限与参数合规性，触发快捷菜单列表信息处理流程。
###### 3.8.4.7.1.1.8.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回菜单ID、名称、
图标、链接、排序、用户ID、创建时间等核心字段信息，输出快捷菜单列表信息处理结
果；若操作失败，返回具体错误原因，如权限不足、菜单ID 参数不合法、快捷菜单列
表信息处理失败等。
##### 3.8.4.7.2 数据看板
可通过图形、报表等手段，直观查看相关应急数据信息，包含应急值守、预案、事
件、物资等内容。

<!-- PDF 第 624 页 -->

| 模块 | 功能点 |
| --- | --- |
| 数据看板 | 应急值守看板数据 |
|  | 智能应急预案看板数据 |
|  | 应急事件看板数据 |
|  | 应急物资看板数据 |

###### 3.8.4.7.2.1 功能点
###### 3.8.4.7.2.1.1 应急值守看板数据
功能点描述：展示值班人员、在岗情况、查岗记录、预警叫应情况。
核心字段：看板ID、值班人员、在岗数、查岗次数、叫应次数、响应率。
###### 3.8.4.7.2.1.1.1 输入
用户或系统发起应急值守看板数据相关操作（展示值班人员、在岗情况、查岗记录、
预警叫应情况），提交看板ID、值班人员、在岗数、查岗次数、叫应次数、响应率等信
息，系统同步校验用户的操作权限与参数合规性，触发应急值守看板数据处理流程。
###### 3.8.4.7.2.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回看板ID、值班人
员、在岗数、查岗次数、叫应次数、响应率等核心字段信息，输出应急值守看板数据查
询展示结果；若操作失败，返回具体错误原因，如权限不足、看板ID 参数不合法、应
急值守看板数据处理失败等。
###### 3.8.4.7.2.1.2 智能应急预案看板数据
功能点描述：预案总数、启用次数、演练次数、覆盖率、适用事件统计。
核心字段：看板ID、预案数、启用次数、演练次数、覆盖率、更新时间。

<!-- PDF 第 625 页 -->

###### 3.8.4.7.2.1.2.1 输入
用户或系统发起智能应急预案看板数据相关操作（预案总数、启用次数、演练次数、
覆盖率、适用事件统计），提交看板ID、预案数、启用次数、演练次数、覆盖率、更新
时间等信息，系统同步校验用户的操作权限与参数合规性，触发智能应急预案看板数据
处理流程。
###### 3.8.4.7.2.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回看板ID、预案数、
启用次数、演练次数、覆盖率、更新时间等核心字段信息，输出智能应急预案看板数据
统计分析结果；若操作失败，返回具体错误原因，如权限不足、看板ID 参数不合法、
智能应急预案看板数据处理失败等。
###### 3.8.4.7.2.1.3 应急事件看板数据
功能点描述：今日、本月事件数、处置中、已办结、响应时长、趋势。
核心字段：看板ID、事件总数、处置中、已办结、平均时长、环比、同比。
###### 3.8.4.7.2.1.3.1 输入
用户或系统发起应急事件看板数据相关操作（今日、本月事件数、处置中、已办结、
响应时长、趋势），提交看板ID、事件总数、处置中、已办结、平均时长、环比、同比
等信息，系统同步校验用户的操作权限与参数合规性，触发应急事件看板数据处理流程。
###### 3.8.4.7.2.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回看板ID、事件总
数、处置中、已办结、平均时长、环比、同比等核心字段信息，输出应急事件看板数据

<!-- PDF 第 626 页 -->

处理结果；若操作失败，返回具体错误原因，如权限不足、看板ID 参数不合法、应急
事件看板数据处理失败等。
###### 3.8.4.7.2.1.4 应急物资看板数据
功能点描述：物资总量、在用、库存、预警、分布、调用统计。
核心字段：看板ID、物资总数、库存数、预警数、调用次数、分布区域。
###### 3.8.4.7.2.1.4.1 输入
用户或系统发起应急物资看板数据相关操作（物资总量、在用、库存、预警、分布、
调用统计），提交看板ID、物资总数、库存数、预警数、调用次数、分布区域等信息，
系统同步校验用户的操作权限与参数合规性，触发应急物资看板数据处理流程。
###### 3.8.4.7.2.1.4.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回看板ID、物资总
数、库存数、预警数、调用次数、分布区域等核心字段信息，输出应急物资看板数据统
计分析结果；若操作失败，返回具体错误原因，如权限不足、看板ID 参数不合法、应
急物资看板数据处理失败等。
##### 3.8.4.7.3 子系统集成
将7 大业务子系统统一接入门户，实现单点登录、权限统一、界面集成。

<!-- PDF 第 627 页 -->

| 模块 | 功能点 |
| --- | --- |
| 子系统集成 | 业务系统接入配置信息 |
|  | 应用门户化封装与展示信息 |
|  | 访问权限与安全控制信息 |
|  | 集成配置管理信息 |

###### 3.8.4.7.3.1 功能点
###### 3.8.4.7.3.1.1 业务系统接入配置信息
功能点描述：配置子系统地址、菜单、权限、Logo、首页地址。
核心字段：接入ID、系统ID、菜单配置、权限映射、Logo、首页地址。
###### 3.8.4.7.3.1.1.1 输入
用户或系统发起业务系统接入配置信息相关操作（配置子系统地址、菜单、权限、
Logo、首页地址），提交接入ID、系统ID、菜单配置、权限映射、Logo、首页地址等
信息，系统同步校验用户的操作权限与参数合规性，触发业务系统接入配置信息处理流
程。
###### 3.8.4.7.3.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回接入ID、系统
ID、菜单配置、权限映射、Logo、首页地址等核心字段信息，输出业务系统接入配置信
息接口处理结果及管理维护结果；若操作失败，返回具体错误原因，如权限不足、接入
ID 参数不合法、业务系统接入配置信息配置异常等。
###### 3.8.4.7.3.1.2 应用门户化封装与展示信息
功能点描述：对系统进行IFrame、微应用封装，统一风格展示。

<!-- PDF 第 628 页 -->

核心字段：封装ID、系统ID、封装方式、样式配置、展示模式、状态。
###### 3.8.4.7.3.1.2.1 输入
用户或系统发起应用门户化封装与展示信息相关操作（对系统进行IFrame、微应用
封装，统一风格展示），提交封装ID、系统ID、封装方式、样式配置、展示模式、状
态等信息，系统同步校验用户的操作权限与参数合规性，触发应用门户化封装与展示信
息处理流程。
###### 3.8.4.7.3.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回封装ID、系统
ID、封装方式、样式配置、展示模式、状态等核心字段信息，输出应用门户化封装与展
示信息查询展示结果；若操作失败，返回具体错误原因，如权限不足、封装ID 参数不
合法、应用门户化封装与展示信息配置异常等。
###### 3.8.4.7.3.1.3 访问权限与安全控制信息
功能点描述：按角色、岗位、区域控制子系统访问权限，支持IP 限制。
核心字段：控制ID、系统ID、角色、权限、IP 白名单、有效期、状态。
###### 3.8.4.7.3.1.3.1 输入
用户或系统发起访问权限与安全控制信息相关操作（按角色、岗位、区域控制子系
统访问权限，支持IP 限制），提交控制ID、系统ID、角色、权限、IP 白名单、有效期、
状态等信息，系统同步校验用户的操作权限与参数合规性，触发访问权限与安全控制信
息处理流程。

<!-- PDF 第 629 页 -->

###### 3.8.4.7.3.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回控制ID、系统ID、
角色、权限、IP 白名单、有效期、状态等核心字段信息，输出访问权限与安全控制信息
处理结果；若操作失败，返回具体错误原因，如权限不足、控制ID 参数不合法、访问
权限与安全控制信息处理失败等。
###### 3.8.4.7.3.1.4 集成配置管理信息
功能点描述：单点登录、消息推送、待办同步、用户同步配置。
核心字段：配置ID、系统ID、集成项、开关、参数、同步频率、状态。
###### 3.8.4.7.3.1.4.1 输入
用户或系统发起集成配置管理信息相关操作（单点登录、消息推送、待办同步、用
户同步配置），提交配置ID、系统ID、集成项、开关、参数、同步频率、状态等信息，
系统同步校验用户的操作权限与参数合规性，触发集成配置管理信息处理流程。
###### 3.8.4.7.3.1.4.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回配置ID、系统
ID、集成项、开关、参数、同步频率、状态等核心字段信息，输出集成配置管理信息接
口处理结果及管理维护结果；若操作失败，返回具体错误原因，如权限不足、配置ID
参数不合法、集成配置管理信息配置异常等。
#### 3.8.4.8 外部系统接口对接
外部系统接口对接模块是数据融合子系统的统一对接枢纽，负责与省政务公共能力

<!-- PDF 第 630 页 -->

平台、交通集团平台、国家综合交通运输信息平台、路网监测工程、安全应急协同平台
（一期）、国储中心等外部系统进行标准化对接，实现用户、认证、消息、地图、视频、
数据、权限、待办等能力统一接入、统一调用、统一管控，确保整个应急指挥体系上下
贯通、横向协同、数据同源。
图3.8-8 外部系统接口对接
##### 3.8.4.8.1 统一用户中心
对接省政务统一用户中心，实现用户、机构、权限信息同步，确保一套用户体系全
系统通行。

<!-- PDF 第 631 页 -->

| 模块 | 功能点 |
| --- | --- |
| 统一用户中心 | 用户接口对接信息 |
|  | 机构接口对接信息 |
|  | 权限接口对接信息 |

###### 3.8.4.8.1.1 功能点
###### 3.8.4.8.1.1.1 用户接口对接信息
功能点描述：对接统一用户中心接口，获取用户基本信息、岗位、职务、手机号、
账号状态，实现自动同步与增量更新。
核心字段：用户ID、姓名、性别、手机号、所属机构、岗位、职务、账号状态、
同步时间、来源。
###### 3.8.4.8.1.1.1.1 输入
用户或系统发起用户接口对接信息相关操作（对接统一用户中心接口，获取用户基
本信息、岗位、职务、手机号、账号状态，实现自动同步与增量更新），提交用户ID、
姓名、性别、手机号、所属机构、岗位、职务、账号状态、同步时间、来源等信息，系
统同步校验用户的操作权限与参数合规性，触发用户接口对接信息处理流程。
###### 3.8.4.8.1.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回用户ID、姓名、
性别、手机号、所属机构、岗位、职务、账号状态、同步时间、来源等核心字段信息，
输出用户接口对接信息接口处理结果及管理维护结果；若操作失败，返回具体错误原因，
如权限不足、用户ID 参数不合法、用户接口对接信息接口调用失败等。

<!-- PDF 第 632 页 -->

###### 3.8.4.8.1.1.2 机构接口对接信息
功能点描述：对接统一用户中心机构体系，同步省、市、县、集团、路段多级组织
机构，构建应急指挥组织架构。
核心字段：机构ID、机构名称、上级机构、层级、区域编码、机构类型、状态、
同步时间。
###### 3.8.4.8.1.1.2.1 输入
用户或系统发起机构接口对接信息相关操作（对接统一用户中心机构体系，同步省、
市、县、集团、路段多级组织机构，构建应急指挥组织架构），提交机构ID、机构名称、
上级机构、层级、区域编码、机构类型、状态、同步时间等信息，系统同步校验用户的
操作权限与参数合规性，触发机构接口对接信息处理流程。
###### 3.8.4.8.1.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回机构ID、机构名
称、上级机构、层级、区域编码、机构类型、状态、同步时间等核心字段信息，输出机
构接口对接信息接口处理结果；若操作失败，返回具体错误原因，如权限不足、机构ID
参数不合法、机构接口对接信息接口调用失败等。
###### 3.8.4.8.1.1.3 权限接口对接信息
功能点描述：同步用户角色、数据权限、菜单权限、操作权限，实现权限统一管控。
核心字段：权限ID、用户ID、角色ID、权限项、数据范围、有效状态、同步时间、
授权来源。

<!-- PDF 第 633 页 -->

###### 3.8.4.8.1.1.3.1 输入
用户或系统发起权限接口对接信息相关操作（同步用户角色、数据权限、菜单权限、
操作权限，实现权限统一管控），提交权限ID、用户ID、角色ID、权限项、数据范围、
有效状态、同步时间、授权来源等信息，系统同步校验用户的操作权限与参数合规性，
触发权限接口对接信息处理流程。
###### 3.8.4.8.1.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回权限ID、用户
ID、角色ID、权限项、数据范围、有效状态、同步时间、授权来源等核心字段信息，输
出权限接口对接信息接口处理结果；若操作失败，返回具体错误原因，如权限不足、权
限ID 参数不合法、权限接口对接信息接口调用失败等。
##### 3.8.4.8.2 统一身份认证
对接政务统一身份认证能力，实现政务侧、公众侧统一登录、鉴权、登出、会话管
理。
| 模块 | 功能点 |
| --- | --- |
| 统一身份认证 | 政务侧身份认证接口对接信息 |
|  | 公众侧身份认证接口对接信息 |

###### 3.8.4.8.2.1 功能点
###### 3.8.4.8.2.1.1 政务侧身份认证接口对接信息
功能点描述：对接省政务统一认证，支持粤政易、统一认证账号免密登录、票据校
验、会话管理。

<!-- PDF 第 634 页 -->

核心字段：认证ID、用户ID、认证方式、票据信息、会话ID、登录时间、失效时
间、状态。
###### 3.8.4.8.2.1.1.1 输入
用户或系统发起政务侧身份认证接口对接信息相关操作（对接省政务统一认证，支
持粤政易、统一认证账号免密登录、票据校验、会话管理），提交认证ID、用户ID、
认证方式、票据信息、会话ID、登录时间、失效时间、状态等信息，系统同步校验用户
的操作权限与参数合规性，触发政务侧身份认证接口对接信息处理流程。
###### 3.8.4.8.2.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回认证ID、用户
ID、认证方式、票据信息、会话ID、登录时间、失效时间、状态等核心字段信息，输出
政务侧身份认证接口对接信息接口处理结果及管理维护结果；若操作失败，返回具体错
误原因，如权限不足、认证ID 参数不合法、政务侧身份认证接口对接信息接口调用失
败等。
###### 3.8.4.8.2.1.2 公众侧身份认证接口对接信息
功能点描述：面向企业、运营单位提供公众侧认证对接，支持手机号、验证码、实
名认证对接。
核心字段：认证ID、账号类型、手机号、证件号、认证结果、认证时间、有效期、
状态。
###### 3.8.4.8.2.1.2.1 输入
用户或系统发起公众侧身份认证接口对接信息相关操作（面向企业、运营单位提供

<!-- PDF 第 635 页 -->

公众侧认证对接，支持手机号、验证码、实名认证对接），提交认证ID、账号类型、手
机号、证件号、认证结果、认证时间、有效期、状态等信息，系统同步校验用户的操作
权限与参数合规性，触发公众侧身份认证接口对接信息处理流程。
###### 3.8.4.8.2.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回认证ID、账号类
型、手机号、证件号、认证结果、认证时间、有效期、状态等核心字段信息，输出公众
侧身份认证接口对接信息接口处理结果；若操作失败，返回具体错误原因，如权限不足、
认证ID 参数不合法、公众侧身份认证接口对接信息接口调用失败等。
##### 3.8.4.8.3 政务短信
对接省政务短信平台，实现预警叫应、通知提醒、验证码、应急通知统一发送。
| 模块 | 功能点 |
| --- | --- |
| 政务短信 | 政务短信接口对接信息 |

###### 3.8.4.8.3.1 功能点
###### 3.8.4.8.3.1.1 政务短信接口对接信息
功能点描述：调用政务短信能力，实现短信发送、状态回执、模板管理、发送记录、
频次控制。
核心字段：短信ID、模板ID、手机号、短信内容、发送时间、状态、回执结果、
业务类型。

<!-- PDF 第 636 页 -->

###### 3.8.4.8.3.1.1.1 输入
用户或系统发起政务短信接口对接信息相关操作（调用政务短信能力，实现短信发
送、状态回执、模板管理、发送记录、频次控制），提交短信ID、模板ID、手机号、
短信内容、发送时间、状态、回执结果、业务类型等信息，系统同步校验用户的操作权
限与参数合规性，触发政务短信接口对接信息处理流程。
###### 3.8.4.8.3.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回短信ID、模板
ID、手机号、短信内容、发送时间、状态、回执结果、业务类型等核心字段信息，输出
政务短信接口对接信息接口处理结果及管理维护结果；若操作失败，返回具体错误原因，
如权限不足、短信ID 参数不合法、政务短信接口对接信息配置异常等。
##### 3.8.4.8.4 粤政图服务
对接广东省政务地图（粤政图），提供统一底图、空间检索、空间分析、标绘服务。
| 模块 | 功能点 |
| --- | --- |
| 粤政图服务 | 粤政图接口对接信息 |

###### 3.8.4.8.4.1 功能点
###### 3.8.4.8.4.1.1 粤政图接口对接信息
功能点描述：对接粤政图底图、POI、行政区划、路网、标注、测距、空间分析接
口。
核心字段：接口ID、服务类型、请求参数、返回结果、调用时间、状态、权限标

<!-- PDF 第 637 页 -->

识。
###### 3.8.4.8.4.1.1.1 输入
用户或系统发起粤政图接口对接信息相关操作（对接粤政图底图、POI、行政区划、
路网、标注、测距、空间分析接口），提交接口ID、服务类型、请求参数、返回结果、
调用时间、状态、权限标识等信息，系统同步校验用户的操作权限与参数合规性，触发
粤政图接口对接信息处理流程。
###### 3.8.4.8.4.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回接口ID、服务类
型、请求参数、返回结果、调用时间、状态、权限标识等核心字段信息，输出粤政图接
口对接信息统计分析结果及接口处理结果；若操作失败，返回具体错误原因，如权限不
足、接口ID 参数不合法、粤政图接口对接信息接口调用失败等。
##### 3.8.4.8.5 省交通集团高精地图对接
对接交通集团高精地图平台，获取高精度路网、航道、桥梁、隧道、设施图层。
| 模块 | 功能点 |
| --- | --- |
| 省交通集团高精地图对接 | 底图基础图层接口对接信息 |
|  | 数据治理加工图层接口对接信息 |

###### 3.8.4.8.5.1 功能点
###### 3.8.4.8.5.1.1 底图基础图层接口对接信息
功能点描述：获取高精地图影像、地形、路网、航道、标志标线等基础图层服务。
核心字段：图层ID、图层名称、类型、级别、范围、更新时间、权限、调用状态。

<!-- PDF 第 638 页 -->

###### 3.8.4.8.5.1.1.1 输入
用户或系统发起底图基础图层接口对接信息相关操作（获取高精地图影像、地形、
路网、航道、标志标线等基础图层服务），提交图层ID、图层名称、类型、级别、范围、
更新时间、权限、调用状态等信息，系统同步校验用户的操作权限与参数合规性，触发
底图基础图层接口对接信息处理流程。
###### 3.8.4.8.5.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回图层ID、图层名
称、类型、级别、范围、更新时间、权限、调用状态等核心字段信息，输出底图基础图
层接口对接信息接口处理结果；若操作失败，返回具体错误原因，如权限不足、图层ID
参数不合法、底图基础图层接口对接信息接口调用失败等。
###### 3.8.4.8.5.1.2 数据治理加工图层接口对接信息
功能点描述：获取交通集团治理后的设施、病害、监测、管控等专题图层数据。
核心字段：图层ID、专题类型、数据范围、更新频率、精度、来源、同步状态。
###### 3.8.4.8.5.1.2.1 输入
用户或系统发起数据治理加工图层接口对接信息相关操作（获取交通集团治理后的
设施、病害、监测、管控等专题图层数据），提交图层ID、专题类型、数据范围、更新
频率、精度、来源、同步状态等信息，系统同步校验用户的操作权限与参数合规性，触
发数据治理加工图层接口对接信息处理流程。
###### 3.8.4.8.5.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回图层ID、专题类

<!-- PDF 第 639 页 -->

型、数据范围、更新频率、精度、来源、同步状态等核心字段信息，输出数据治理加工
图层接口对接信息接口处理结果；若操作失败，返回具体错误原因，如权限不足、图层
ID 参数不合法、数据治理加工图层接口对接信息接口调用失败等。
##### 3.8.4.8.6 融合通信能力
对接融合通信平台，实现语音、视频会议、对讲、卫星电话、集群调度统一调用。
| 模块 | 功能点 |
| --- | --- |
| 融合通信能力 | 融合通信接口对接信息 |

###### 3.8.4.8.6.1 功能点
###### 3.8.4.8.6.1.1 融合通信接口对接信息
功能点描述：对接会议创建、呼叫、挂断、录制、对讲、广播、卫星通信接口。
核心字段：通信ID、呼叫类型、参会方、呼叫状态、通道ID、时长、结果、时间。
###### 3.8.4.8.6.1.1.1 输入
用户或系统发起融合通信接口对接信息相关操作（对接会议创建、呼叫、挂断、录
制、对讲、广播、卫星通信接口），提交通信ID、呼叫类型、参会方、呼叫状态、通道
ID、时长、结果、时间等信息，系统同步校验用户的操作权限与参数合规性，触发融合
通信接口对接信息处理流程。
###### 3.8.4.8.6.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回通信ID、呼叫类
型、参会方、呼叫状态、通道ID、时长、结果、时间等核心字段信息，输出融合通信接

<!-- PDF 第 640 页 -->

口对接信息接口处理结果；若操作失败，返回具体错误原因，如权限不足、通信ID 参
数不合法、融合通信接口对接信息接口调用失败等。
##### 3.8.4.8.7 商用密码服务能力
对接省政务密码服务平台，实现加密、解密、签名、验签、证书、密钥全生命周期
管理。
| 模块 | 功能点 |
| --- | --- |
| 商用密码服务能力 | 数据存储加密接口对接信息 |
|  | 数据存储解密接口对接信息 |
|  | 数据签名接口对接信息 |
|  | 数据验签接口对接信息 |
|  | 数字证书导出接口对接信息 |
|  | 数字证书解析接口对接信息 |
|  | 数字证书验证接口对接信息 |
|  | 智能密码钥匙接口对接信息 |
|  | 密钥生成接口对接信息 |
|  | 密钥分发接口对接信息 |
|  | 密钥销毁接口对接信息 |
|  | 时间戳接口对接信息 |

###### 3.8.4.8.7.1 功能点
###### 3.8.4.8.7.1.1 数据存储加密接口对接信息
功能点描述：调用密码机对敏感数据进行存储加密，保障数据安全。
核心字段：加密ID、数据ID、算法、密文、密钥ID、加密时间、状态。

<!-- PDF 第 641 页 -->

###### 3.8.4.8.7.1.1.1 输入
用户或系统发起数据存储加密接口对接信息相关操作（调用密码机对敏感数据进行
存储加密，保障数据安全），提交加密ID、数据ID、算法、密文、密钥ID、加密时间、
状态等信息，系统同步校验用户的操作权限与参数合规性，触发数据存储加密接口对接
信息处理流程。
###### 3.8.4.8.7.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回加密ID、数据
ID、算法、密文、密钥ID、加密时间、状态等核心字段信息，输出数据存储加密接口对
接信息接口处理结果；若操作失败，返回具体错误原因，如权限不足、加密ID 参数不
合法、数据存储加密接口对接信息接口调用失败等。
###### 3.8.4.8.7.1.2 数据存储解密接口对接信息
功能点描述：对加密数据进行解密，返回明文，支持权限控制。
核心字段：解密ID、数据ID、密文、明文、密钥ID、解密时间、状态。
###### 3.8.4.8.7.1.2.1 输入
用户或系统发起数据存储解密接口对接信息相关操作（对加密数据进行解密，返回
明文，支持权限控制），提交解密ID、数据ID、密文、明文、密钥ID、解密时间、状
态等信息，系统同步校验用户的操作权限与参数合规性，触发数据存储解密接口对接信
息处理流程。
###### 3.8.4.8.7.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回解密ID、数据

<!-- PDF 第 642 页 -->

ID、密文、明文、密钥ID、解密时间、状态等核心字段信息，输出数据存储解密接口对
接信息接口处理结果；若操作失败，返回具体错误原因，如权限不足、解密ID 参数不
合法、数据存储解密接口对接信息接口调用失败等。
###### 3.8.4.8.7.1.3 数据签名接口对接信息
功能点描述：对文件、指令、报表进行数字签名，确保防篡改、可追溯。
核心字段：签名ID、数据ID、签名值、证书ID、签名时间、验证结果。
###### 3.8.4.8.7.1.3.1 输入
用户或系统发起数据签名接口对接信息相关操作（对文件、指令、报表进行数字签
名，确保防篡改、可追溯），提交签名ID、数据ID、签名值、证书ID、签名时间、验
证结果等信息，系统同步校验用户的操作权限与参数合规性，触发数据签名接口对接信
息处理流程。
###### 3.8.4.8.7.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回签名ID、数据
ID、签名值、证书ID、签名时间、验证结果等核心字段信息，输出数据签名接口对接信
息文件处理结果及接口处理结果；若操作失败，返回具体错误原因，如权限不足、签名
ID 参数不合法、数据签名接口对接信息接口调用失败等。
###### 3.8.4.8.7.1.4 数据验签接口对接信息
功能点描述：验证签名合法性，确保数据未被篡改。
核心字段：验签ID、数据ID、签名值、证书ID、验签结果、时间。

<!-- PDF 第 643 页 -->

###### 3.8.4.8.7.1.4.1 输入
用户或系统发起数据验签接口对接信息相关操作（验证签名合法性，确保数据未被
篡改），提交验签ID、数据ID、签名值、证书ID、验签结果、时间等信息，系统同步
校验用户的操作权限与参数合规性，触发数据验签接口对接信息处理流程。
###### 3.8.4.8.7.1.4.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回验签ID、数据
ID、签名值、证书ID、验签结果、时间等核心字段信息，输出数据验签接口对接信息接
口处理结果；若操作失败，返回具体错误原因，如权限不足、验签ID 参数不合法、数
据验签接口对接信息接口调用失败等。
###### 3.8.4.8.7.1.5 数字证书导出接口对接信息
功能点描述：导出用户、设备证书公钥信息。
核心字段：证书ID、证书类型、使用者、有效期、公钥信息、导出时间。
###### 3.8.4.8.7.1.5.1 输入
用户或系统发起数字证书导出接口对接信息相关操作（导出用户、设备证书公钥信
息），提交证书ID、证书类型、使用者、有效期、公钥信息、导出时间等信息，系统同
步校验用户的操作权限与参数合规性，触发数字证书导出接口对接信息处理流程。
###### 3.8.4.8.7.1.5.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回证书ID、证书类
型、使用者、有效期、公钥信息、导出时间等核心字段信息，输出数字证书导出接口对
接信息文件处理结果及接口处理结果；若操作失败，返回具体错误原因，如权限不足、

<!-- PDF 第 644 页 -->

证书ID 参数不合法、数字证书导出接口对接信息接口调用失败等。
###### 3.8.4.8.7.1.6 数字证书解析接口对接信息
功能点描述：解析证书主体、颁发者、有效期、用途等信息。
核心字段：解析ID、证书信息、主题、颁发者、有效期、用途、状态。
###### 3.8.4.8.7.1.6.1 输入
用户或系统发起数字证书解析接口对接信息相关操作（解析证书主题、颁发者、有
效期、用途等信息），提交解析ID、证书信息、主题、颁发者、有效期、用途、状态等
信息，系统同步校验用户的操作权限与参数合规性，触发数字证书解析接口对接信息处
理流程。
###### 3.8.4.8.7.1.6.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回解析ID、证书信
息、主题、颁发者、有效期、用途、状态等核心字段信息，输出数字证书解析接口对接
信息接口处理结果；若操作失败，返回具体错误原因，如权限不足、解析ID 参数不合
法、数字证书解析接口对接信息接口调用失败等。
###### 3.8.4.8.7.1.7 数字证书验证接口对接信息
功能点描述：验证证书是否有效、是否过期、是否被吊销。
核心字段：验证ID、证书ID、结果、原因、验证时间。
###### 3.8.4.8.7.1.7.1 输入
用户或系统发起数字证书验证接口对接信息相关操作（验证证书是否有效、是否过
期、是否被吊销），提交验证ID、证书ID、结果、原因、验证时间等信息，系统同步

<!-- PDF 第 645 页 -->

校验用户的操作权限与参数合规性，触发数字证书验证接口对接信息处理流程。
###### 3.8.4.8.7.1.7.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回验证ID、证书
ID、结果、原因、验证时间等核心字段信息，输出数字证书验证接口对接信息接口处理
结果；若操作失败，返回具体错误原因，如权限不足、验证ID 参数不合法、数字证书
验证接口对接信息接口调用失败等。
###### 3.8.4.8.7.1.8 智能密码钥匙接口对接信息
功能点描述：对接USBKey，实现身份认证与签名操作。
核心字段：KeyID、用户ID、证书ID、状态、操作类型、时间。
###### 3.8.4.8.7.1.8.1 输入
用户或系统发起智能密码钥匙接口对接信息相关操作（对接USBKey，实现身份认证
与签名操作），提交KeyID、用户ID、证书ID、状态、操作类型、时间等信息，系统同
步校验用户的操作权限与参数合规性，触发智能密码钥匙接口对接信息处理流程。
###### 3.8.4.8.7.1.8.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回KeyID、用户ID、
证书ID、状态、操作类型、时间等核心字段信息，输出智能密码钥匙接口对接信息接口
处理结果；若操作失败，返回具体错误原因，如权限不足、KeyID 参数不合法、智能密
码钥匙接口对接信息接口调用失败等。
###### 3.8.4.8.7.1.9 密钥生成接口对接信息
功能点描述：调用密码服务生成对称、非对称密钥。

<!-- PDF 第 646 页 -->

核心字段：密钥ID、算法、长度、用途、生成时间、状态。
###### 3.8.4.8.7.1.9.1 输入
用户或系统发起密钥生成接口对接信息相关操作（调用密码服务生成对称、非对称
密钥），提交密钥ID、算法、长度、用途、生成时间、状态等信息，系统同步校验用户
的操作权限与参数合规性，触发密钥生成接口对接信息处理流程。
###### 3.8.4.8.7.1.9.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回密钥ID、算法、
长度、用途、生成时间、状态等核心字段信息，输出密钥生成接口对接信息生成结果及
接口处理结果；若操作失败，返回具体错误原因，如权限不足、密钥ID 参数不合法、
密钥生成接口对接信息接口调用失败等。
###### 3.8.4.8.7.1.10 密钥分发接口对接信息
功能点描述：将密钥安全分发至业务系统。
核心字段：分发ID、密钥ID、目标系统、状态、分发时间。
###### 3.8.4.8.7.1.10.1 输入
用户或系统发起密钥分发接口对接信息相关操作（将密钥安全分发至业务系统），
提交分发ID、密钥ID、目标系统、状态、分发时间等信息，系统同步校验用户的操作
权限与参数合规性，触发密钥分发接口对接信息处理流程。
###### 3.8.4.8.7.1.10.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回分发ID、密钥
ID、目标系统、状态、分发时间等核心字段信息，输出密钥分发接口对接信息接口处理

<!-- PDF 第 647 页 -->

结果；若操作失败，返回具体错误原因，如权限不足、分发ID 参数不合法、密钥分发
接口对接信息接口调用失败等。
###### 3.8.4.8.7.1.11 密钥销毁接口对接信息
功能点描述：对废弃密钥执行销毁，不可恢复。
核心字段：销毁ID、密钥ID、操作人、销毁时间、结果。
###### 3.8.4.8.7.1.11.1 输入
用户或系统发起密钥销毁接口对接信息相关操作（对废弃密钥执行销毁，不可恢
复），提交销毁ID、密钥ID、操作人、销毁时间、结果等信息，系统同步校验用户的
操作权限与参数合规性，触发密钥销毁接口对接信息处理流程。
###### 3.8.4.8.7.1.11.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回销毁ID、密钥
ID、操作人、销毁时间、结果等核心字段信息，输出密钥销毁接口对接信息接口处理结
果；若操作失败，返回具体错误原因，如权限不足、销毁ID 参数不合法、密钥销毁接
口对接信息接口调用失败等。
###### 3.8.4.8.7.1.12 时间戳接口对接信息
功能点描述：获取权威时间戳，用于操作留痕、证据固化。
核心字段：时间戳ID、数据ID、时间、签名、验证结果。
###### 3.8.4.8.7.1.12.1 输入
用户或系统发起时间戳接口对接信息相关操作（获取权威时间戳，用于操作留痕、
证据固化），提交时间戳ID、数据ID、时间、签名、验证结果等信息，系统同步校验

<!-- PDF 第 648 页 -->

用户的操作权限与参数合规性，触发时间戳接口对接信息处理流程。
###### 3.8.4.8.7.1.12.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回时间戳ID、数据
ID、时间、签名、验证结果等核心字段信息，输出时间戳接口对接信息接口处理结果；
若操作失败，返回具体错误原因，如权限不足、时间戳ID 参数不合法、时间戳接口对
接信息接口调用失败等。
##### 3.8.4.8.8 消息中心
对接统一消息中心，实现系统消息、预警、通知、公告、待办消息统一推送。
| 模块 | 功能点 |
| --- | --- |
| 消息中心 | 消息中心接口对接信息 |

###### 3.8.4.8.8.1 功能点
###### 3.8.4.8.8.1.1 消息中心接口对接信息
功能点描述：消息发布、订阅、推送、已读、回执、删除、统计。
核心字段：消息ID、标题、内容、类型、接收人、推送渠道、状态、时间。
###### 3.8.4.8.8.1.1.1 输入
用户或系统发起消息中心接口对接信息相关操作（消息发布、订阅、推送、已读、
回执、删除、统计），提交消息ID、标题、内容、类型、接收人、推送渠道、状态、时
间等信息，系统同步校验用户的操作权限与参数合规性，触发消息中心接口对接信息处
理流程。

<!-- PDF 第 649 页 -->

###### 3.8.4.8.8.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回消息ID、标题、
内容、类型、接收人、推送渠道、状态、时间等核心字段信息，输出消息中心接口对接
信息统计分析结果及接口处理结果；若操作失败，返回具体错误原因，如权限不足、消
息ID 参数不合法、消息中心接口对接信息接口调用失败等。
##### 3.8.4.8.9 日志中心
对接统一日志中心，实现操作日志、登录日志、接口日志、异常日志统一归集。
| 模块 | 功能点 |
| --- | --- |
| 日志中心 | 日志中心接口对接信息 |

###### 3.8.4.8.9.1 功能点
###### 3.8.4.8.9.1.1 日志中心接口对接信息
功能点描述：日志上报、查询、统计、审计、留存。
核心字段：日志ID、用户ID、模块、操作、IP、终端、结果、时间。
###### 3.8.4.8.9.1.1.1 输入
用户或系统发起日志中心接口对接信息相关操作（日志上报、查询、统计、审计、
留存），提交日志ID、用户ID、模块、操作、IP、终端、结果、时间等信息，系统同
步校验用户的操作权限与参数合规性，触发日志中心接口对接信息处理流程。
###### 3.8.4.8.9.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回日志ID、用户

<!-- PDF 第 650 页 -->

ID、模块、操作、IP、终端、结果、时间等核心字段信息，输出日志中心接口对接信息
查询展示结果及统计分析结果；若操作失败，返回具体错误原因，如权限不足、日志ID
参数不合法、日志中心接口对接信息接口调用失败等。
##### 3.8.4.8.10 统一门户
对接省、厅统一门户，实现单点登录、菜单集成、样式统一。
| 模块 | 功能点 |
| --- | --- |
| 统一门户 | 统一门户接口对接信息 |

###### 3.8.4.8.10.1 功能点
###### 3.8.4.8.10.1.1 统一门户接口对接信息
功能点描述：门户菜单、权限、样式、主题、快捷入口同步。
核心字段：门户ID、菜单ID、权限、样式、同步时间、状态。
###### 3.8.4.8.10.1.1.1 输入
用户或系统发起统一门户接口对接信息相关操作（门户菜单、权限、样式、主题、
快捷入口同步），提交门户ID、菜单ID、权限、样式、同步时间、状态等信息，系统
同步校验用户的操作权限与参数合规性，触发统一门户接口对接信息处理流程。
###### 3.8.4.8.10.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回门户ID、菜单
ID、权限、样式、同步时间、状态等核心字段信息，输出统一门户接口对接信息接口处
理结果；若操作失败，返回具体错误原因，如权限不足、门户ID 参数不合法、统一门

<!-- PDF 第 651 页 -->

户接口对接信息接口调用失败等。
##### 3.8.4.8.11 统一待办
对接统一待办平台，实现审核、任务、预警、会议待办统一汇聚与回写。
| 模块 | 功能点 |
| --- | --- |
| 统一待办 | 统一待办接口对接信息 |

###### 3.8.4.8.11.1 功能点
###### 3.8.4.8.11.1.1 统一待办接口对接信息
功能点描述：待办推送、已办回写、状态同步、处理链接跳转。
核心字段：待办ID、标题、来源、链接、状态、处理人、同步时间。
###### 3.8.4.8.11.1.1.1 输入
用户或系统发起统一待办接口对接信息相关操作（待办推送、已办回写、状态同步、
处理链接跳转），提交待办ID、标题、来源、链接、状态、处理人、同步时间等信息，
系统同步校验用户的操作权限与参数合规性，触发统一待办接口对接信息处理流程。
###### 3.8.4.8.11.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回待办ID、标题、
来源、链接、状态、处理人、同步时间等核心字段信息，输出统一待办接口对接信息接
口处理结果；若操作失败，返回具体错误原因，如权限不足、待办ID 参数不合法、统
一待办接口对接信息接口调用失败等。

<!-- PDF 第 652 页 -->

##### 3.8.4.8.12 统一资讯
对接统一资讯平台，实现政策、通知、公告、行业动态统一展示。
| 模块 | 功能点 |
| --- | --- |
| 统一资讯 | 统一资讯接口对接信息 |

###### 3.8.4.8.12.1 功能点
###### 3.8.4.8.12.1.1 统一资讯接口对接信息
功能点描述：资讯拉取、分类、置顶、阅读量统计。
核心字段：资讯ID、标题、类型、来源、发布时间、状态、阅读量。
###### 3.8.4.8.12.1.1.1 输入
用户或系统发起统一资讯接口对接信息相关操作（资讯拉取、分类、置顶、阅读量
统计），提交资讯ID、标题、类型、来源、发布时间、状态、阅读量等信息，系统同步
校验用户的操作权限与参数合规性，触发统一资讯接口对接信息处理流程。
###### 3.8.4.8.12.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回资讯ID、标题、
类型、来源、发布时间、状态、阅读量等核心字段信息，输出统一资讯接口对接信息统
计分析结果及接口处理结果；若操作失败，返回具体错误原因，如权限不足、资讯ID
参数不合法、统一资讯接口对接信息接口调用失败等。
##### 3.8.4.8.13 电子航道图
对接省航道中心电子航道图服务，获取航道、航标、水位、船闸、通航信息。

<!-- PDF 第 653 页 -->

| 模块 | 功能点 |
| --- | --- |
| 电子航道图 | 电子航道图接口对接信息 |

###### 3.8.4.8.13.1 功能点
###### 3.8.4.8.13.1.1 电子航道图接口对接信息
功能点描述：航道图层、航标状态、水位、通航条件、船闸状态调用。
核心字段：图层ID、航道ID、航标ID、水位值、通航状态、更新时间。
###### 3.8.4.8.13.1.1.1 输入
用户或系统发起电子航道图接口对接信息相关操作（航道图层、航标状态、水位、
通航条件、船闸状态调用），提交图层ID、航道ID、航标ID、水位值、通航状态、更
新时间等信息，系统同步校验用户的操作权限与参数合规性，触发电子航道图接口对接
信息处理流程。
###### 3.8.4.8.13.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回图层ID、航道
ID、航标ID、水位值、通航状态、更新时间等核心字段信息，输出电子航道图接口对接
信息接口处理结果；若操作失败，返回具体错误原因，如权限不足、图层ID 参数不合
法、电子航道图接口对接信息接口调用失败等。

<!-- PDF 第 654 页 -->

##### 3.8.4.8.14 国家综合交通运输信息平台对接
对接部级平台，实现部省数据同步、事件上报、预警叫应、阻断信息报送。
| 模块 | 功能点 |
| --- | --- |
| 国家综合交通运输信息平台对接 | 组织架构及人员信息接口对接 |
|  | 阻断信息接口对接 |
|  | 预警叫应信息接口对接 |

###### 3.8.4.8.14.1 功能点
###### 3.8.4.8.14.1.1 组织架构及人员信息接口对接
功能点描述：向部级平台同步省市县三级应急组织机构与联系人。
核心字段：单位ID、名称、联系人、职务、电话、职责、同步状态、时间。
###### 3.8.4.8.14.1.1.1 输入
用户或系统发起组织架构及人员信息接口对接相关操作（向部级平台同步省市县三
级应急组织机构与联系人），提交单位ID、名称、联系人、职务、电话、职责、同步状
态、时间等信息，系统同步校验用户的操作权限与参数合规性，触发组织架构及人员信
息接口对接处理流程。
###### 3.8.4.8.14.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回单位ID、名称、
联系人、职务、电话、职责、同步状态、时间等核心字段信息，输出组织架构及人员信
息接口对接接口处理结果；若操作失败，返回具体错误原因，如权限不足、单位ID 参
数不合法、组织架构及人员信息接口对接接口调用失败等。

<!-- PDF 第 655 页 -->

###### 3.8.4.8.14.1.2 阻断信息接口对接
功能点描述：公路阻断、拥堵、封闭、抢通信息自动上报部级平台。
核心字段：事件ID、路段、起止点、类型、状态、处置进展、上报时间。
###### 3.8.4.8.14.1.2.1 输入
用户或系统发起阻断信息接口对接相关操作（公路阻断、拥堵、封闭、抢通信息自
动上报部级平台），提交事件ID、路段、起止点、类型、状态、处置进展、上报时间等
信息，系统同步校验用户的操作权限与参数合规性，触发阻断信息接口对接处理流程。
###### 3.8.4.8.14.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回事件ID、路段、
起止点、类型、状态、处置进展、上报时间等核心字段信息，输出阻断信息接口对接接
口处理结果；若操作失败，返回具体错误原因，如权限不足、事件ID 参数不合法、阻
断信息接口对接接口调用失败等。
###### 3.8.4.8.14.1.3 预警叫应信息接口对接
功能点描述：接收部级气象、地质、灾害预警，向下叫应并回执。
核心字段：预警ID、等级、类型、影响范围、发布时间、回执状态、处理结果。
###### 3.8.4.8.14.1.3.1 输入
用户或系统发起预警叫应信息接口对接相关操作（接收部级气象、地质、灾害预警，
向下叫应并回执），提交预警ID、等级、类型、影响范围、发布时间、回执状态、处理
结果等信息，系统同步校验用户的操作权限与参数合规性，触发预警叫应信息接口对接
处理流程。

<!-- PDF 第 656 页 -->

###### 3.8.4.8.14.1.3.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回预警ID、等级、
类型、影响范围、发布时间、回执状态、处理结果等核心字段信息，输出预警叫应信息
接口对接接口处理结果；若操作失败，返回具体错误原因，如权限不足、预警ID 参数
不合法、预警叫应信息接口对接配置异常等。
##### 3.8.4.8.15 路网运行监测工程对接
对接路网运行监测工程，获取气象、路况、视频、流量、预警数据。
| 模块 | 功能点 |
| --- | --- |
| 路网运行监测工程对接 | 气象数据接口对接信息 |
|  | 航道监控数据对接 |

###### 3.8.4.8.15.1 功能点
###### 3.8.4.8.15.1.1 气象数据接口对接信息
功能点描述：获取全省雨量、气温、风速、能见度、恶劣天气预警。
核心字段：气象ID、站点、路段、雨量、温度、风速、能见度、预警等级、时间。
###### 3.8.4.8.15.1.1.1 输入
用户或系统发起气象数据接口对接信息相关操作（获取全省雨量、气温、风速、能
见度、恶劣天气预警），提交气象ID、站点、路段、雨量、温度、风速、能见度、预警
等级、时间等信息，系统同步校验用户的操作权限与参数合规性，触发气象数据接口对
接信息处理流程。

<!-- PDF 第 657 页 -->

###### 3.8.4.8.15.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回气象ID、站点、
路段、雨量、温度、风速、能见度、预警等级、时间等核心字段信息，输出气象数据接
口对接信息接口处理结果；若操作失败，返回具体错误原因，如权限不足、气象ID 参
数不合法、气象数据接口对接信息配置异常等。
###### 3.8.4.8.15.1.2 航道监控数据对接
功能点描述：获取航道视频、水位、流量、航标、船闸运行数据。
核心字段：监控ID、航道ID、水位、流量、航标状态、船闸状态、视频地址。
###### 3.8.4.8.15.1.2.1 输入
用户或系统发起航道监控数据对接相关操作（获取航道视频、水位、流量、航标、
船闸运行数据），提交监控ID、航道ID、水位、流量、航标状态、船闸状态、视频地
址等信息，系统同步校验用户的操作权限与参数合规性，触发航道监控数据对接处理流
程。
###### 3.8.4.8.15.1.2.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回监控ID、航道
ID、水位、流量、航标状态、船闸状态、视频地址等核心字段信息，输出航道监控数据
对接接口处理结果；若操作失败，返回具体错误原因，如权限不足、监控ID 参数不合
法、航道监控数据对接接口调用失败等。

<!-- PDF 第 658 页 -->

##### 3.8.4.8.16 安全应急协同平台（一期）对接
对接一期安全应急平台，实现应急资源、事故、隐患、三防数据互通。
| 模块 | 功能点 |
| --- | --- |
| 安全应急协同平台（一期）对接 | 安全应急协同平台（一期）接口对接信息 |

###### 3.8.4.8.16.1 功能点
###### 3.8.4.8.16.1.1 安全应急协同平台（一期）对接信息
功能点描述：同步应急资源、事故信息、隐患数据、三防态势、一张图数据。
核心字段：资源ID、类型、数量、位置、事件ID、状态、同步时间、来源。
###### 3.8.4.8.16.1.1.1 输入
用户或系统发起安全应急协同平台（一期）接口对接信息相关操作（同步应急资源、
事故信息、隐患数据、三防态势、一张图数据），提交资源ID、类型、数量、位置、事
件ID、状态、同步时间、来源等信息，系统同步校验用户的操作权限与参数合规性，触
发安全应急协同平台（一期）接口对接信息处理流程。
###### 3.8.4.8.16.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回资源ID、类型、
数量、位置、事件ID、状态、同步时间、来源等核心字段信息，输出安全应急协同平台
（一期）接口对接信息统计分析结果及接口处理结果；若操作失败，返回具体错误原因，
如权限不足、资源ID 参数不合法、安全应急协同平台（一期）接口对接信息接口调用
失败等。

<!-- PDF 第 659 页 -->

##### 3.8.4.8.17 国储中心系统对接
对接国家储备中心，实现应急物资、储备库、调拨指令、库存对账。
| 模块 | 功能点 |
| --- | --- |
| 国储中心系统对接 | 国储中心系统对接 |

###### 3.8.4.8.17.1 功能点
###### 3.8.4.8.17.1.1 国储中心系统对接
功能点描述：物资目录、库存数量、仓库信息、调拨指令、回执状态、对账结果。
核心字段：物资ID、名称、规格、库存、仓库、调拨单号、状态、同步时间。
###### 3.8.4.8.17.1.1.1 输入
用户或系统发起国储中心系统对接相关操作（物资目录、库存数量、仓库信息、调
拨指令、回执状态、对账结果），提交物资ID、名称、规格、库存、仓库、调拨单号、
状态、同步时间等信息，系统同步校验用户的操作权限与参数合规性，触发国储中心系
统对接处理流程。
###### 3.8.4.8.17.1.1.2 输出
系统返回操作成功或失败的结果反馈，操作成功时完整记录或返回物资ID、名称、
规格、库存、仓库、调拨单号、状态、同步时间等核心字段信息，输出国储中心系统对
接接口处理结果；若操作失败，返回具体错误原因，如权限不足、物资ID 参数不合法、
国储中心系统对接接口调用失败等。
`,Ji=[{key:"overview",keyPoints:["功能总图给出系统能力全景","功能描述表按能力域汇总模块与功能点","业务角色一览划分机构与岗位权限"],functionPoints:["功能总图","功能描述表","业务角色一览","主要功能点","模块功能简述"],keyTerms:["数据融合子系统","AI 能力系统","外部系统接口","应急融合服务门户","业务角色"]},{key:"AI能力系统",keyPoints:["知识管理覆盖入库、检索、解析、切片与向量化","模型接入统一纳管大模型与小模型","智能体支持开发、简易编排与流程编排","知识查询支持语义、全文与混合检索"],functionPoints:["知识文件入库","知识切片","向量数据库","模型接入","简易编排","流程编排"],keyTerms:["知识管理能力","模型接入管理能力","智能体","知识库","向量嵌入模型","RAG"]},{key:"地图引擎能力",keyPoints:["地图封装提供 WebAPI 与大数据分析","高精地图覆盖地点检索、路线规划与轨迹计算","交通仿真支持方案运行与宏观分析","桩号与坐标转换支撑道路精准定位"],functionPoints:["WebAPI","地点检索","路线规划","轨迹计算","仿真方案","宏观仿真分析"],keyTerms:["地图引擎封装服务","高精地图引擎服务","交通仿真引擎","POI","AOI","等时到达圈"]},{key:"视频监控能力",keyPoints:["统一接入全省交通视频资源","实时预览基于通道编码获取取流地址","云台支持预置点与方向焦距控制","抓图与录像查询支撑取证"],functionPoints:["视频实时预览","云台控制","预置点","手动抓图","视频查询结果列表"],keyTerms:["视频应用","视频通道","取流URLv2","GUI 播放工具","录像回放"]},{key:"融合通信能力",keyPoints:["融合视频、语音、短信、粤政易与卫星电话","视频会议覆盖创建、预约、变更、录制与下载","变更单推送差异并支持短信通知","录制文件按码流类型提供下载"],functionPoints:["创建会议模板","预约会议取消申请","预约会议变更","查询会议列表","会议录制列表","录制文件下载配置"],keyTerms:["融合通信能力","视频会议","会议主题","与会者列表","变更单","辅流"]},{key:"融合服务",keyPoints:["统一封装服务接口并支持注册测试发布","服务授权生成凭证并控制访问范围","服务网关承担鉴权、路由与代理","服务调用日志支撑运维排查"],functionPoints:["服务接口注册","服务适配管理","服务授权","服务范围管理","服务调用日志","服务网关"],keyTerms:["融合服务","服务总线","限流QPS","黑白名单","ServiceID","App secret"]},{key:"应急数据采集与交换",keyPoints:["可视化工作流编排数据同步、对账、质检与脚本","数据采集覆盖离线、调度、执行器与文件汇聚","数仓管理统一层级与命名规范","数源与应用系统管理支撑数据共享"],functionPoints:["工作流画布","数据同步组件","数据对账组件","数据质检组件","文件汇聚","数仓层级"],keyTerms:["DAG 画布","数据对账","命名规范","应用Token","执行器","数据中台"]},{key:"应急融合服务门户",keyPoints:["门户框架集成个人信息、待办、消息、知识与日程","数据看板覆盖值守、预案、事件与物资","子系统集成实现单点登录与权限统一","支持 IFrame 与微应用封装"],functionPoints:["个人信息","待办中心","消息中心","知识中心","工作日程","子系统集成"],keyTerms:["门户框架","数据看板","子系统集成","单点登录","IFrame","微应用"]},{key:"外部系统接口对接",keyPoints:["对接省政务公共能力平台与交通集团平台","统一用户中心同步用户、机构与权限","统一身份认证区分政务侧与公众侧","商用密码服务覆盖加密、签名、证书与密钥","平台对接覆盖部省、路网、航道与国储"],functionPoints:["统一用户中心","统一身份认证","政务短信","粤政图","商用密码服务","消息中心"],keyTerms:["外部系统接口对接","高精地图","电子航道图","预警叫应","阻断信息","数字证书"]}],Xi=[{key:"req-spec-ai",title:"AI能力系统",sourceRef:"3.8.4.1",relatedDocKey:"design-ai",relatedDocTitle:"AI 能力系统"},{key:"req-spec-map",title:"地图引擎能力",sourceRef:"3.8.4.2",relatedDocKey:"design-map",relatedDocTitle:"地图引擎能力"},{key:"req-spec-video",title:"视频监控能力",sourceRef:"3.8.4.3",relatedDocKey:"design-video",relatedDocTitle:"视频监控能力"},{key:"req-spec-comm",title:"融合通信能力",sourceRef:"3.8.4.4",relatedDocKey:"design-comm",relatedDocTitle:"融合通信能力"},{key:"req-spec-service",title:"融合服务",sourceRef:"3.8.4.5",relatedDocKey:"design-service",relatedDocTitle:"融合服务"},{key:"req-spec-data",title:"应急数据采集与交换",sourceRef:"3.8.4.6",relatedDocKey:"design-data",relatedDocTitle:"应急数据采集与交换"},{key:"req-spec-portal",title:"应急融合服务门户",sourceRef:"3.8.4.7",relatedDocKey:"design-portal",relatedDocTitle:"应急融合服务门户"},{key:"req-spec-external",title:"外部系统接口对接",sourceRef:"3.8.4.8",relatedDocKey:"design-external",relatedDocTitle:"外部系统接口对接"}],fs=new Map(Ji.map(c=>[c.key,c])),Ds=ce(hs,4),ns=ae(hs),Mn=Ds.find(c=>c.key==="overview"),vs=Ds.filter(c=>c.key!=="overview"),kn=Mn?{key:"req-spec-overview",title:"需求总览",sourceRef:"3.8.1–3.8.3",level:4,component:ms(ys(Mn,fs.get("overview")),"FusionRequirementHtmlSection"),searchText:Mn.searchText}:null,Zi=new Map(vs.map(c=>[c.sourceRef,c])),na=Xi.flatMap((c,f)=>{const t=Zi.get(c.sourceRef)??vs[f];return t?[{key:c.key,title:c.title,sourceRef:c.sourceRef,level:4,component:ms(ys(t,fs.get(c.title)),"FusionRequirementHtmlSection"),relatedDocKey:c.relatedDocKey,relatedDocTitle:c.relatedDocTitle,searchText:t.searchText}]:[]}),Bn=[{key:"req-chapter",sourceRef:ns.sourceRef,title:ns.title,level:3,targetKey:kn==null?void 0:kn.key,description:"功能总图、功能描述表、业务角色与八个能力域详细功能。",items:[...kn?[kn]:[],...na]}],sa=Bn.flatMap(c=>c.items),ea={class:"quality-panel"},ta={class:"quality-inner"},la={class:"quality-head"},ia={class:"quality-summary"},aa={class:"chart-grid"},ca={class:"card-head"},oa={class:"card-count"},da={class:"donut-wrap"},pa={class:"donut-media"},ra={class:"donut-center"},ua={class:"type-legend"},ma={class:"type-label"},ya={class:"type-value"},ha={class:"card-head"},fa={class:"card-count"},Da={class:"rank-body"},va={class:"rank-list"},Ia=["title","onClick","onKeydown"],ka={class:"rank-index"},ga={class:"rank-main"},_a={class:"rank-total"},ba={class:"list-grid"},wa={class:"card-head"},Ka={key:0,class:"note-list"},Pa=["onClick","onKeydown"],xa={class:"note-line"},$a={class:"note-term"},Sa={class:"note-fix"},qa={class:"note-meta"},Aa={class:"note-title"},Ra={class:"note-doc"},Ta={class:"note-desc"},Oa={class:"card-head"},Fa={key:0,class:"note-list"},La=["onClick","onKeydown"],Ma={class:"note-line"},Ca={class:"note-title"},Ea={class:"note-doc"},Na={class:"note-desc"},Ha=U({__name:"FusionQualityPanel",emits:["open-doc"],setup(c,{emit:f}){const t=f,O=[{type:"tech",label:"技术批注",color:"#8b5cf6",icon:Gn},{type:"term",label:"术语",color:"#2563eb",icon:Wn},{type:"typo",label:"错别字",color:"#ef4444",icon:zs},{type:"link",label:"关联链接",color:"#0ea5e9",icon:qn}],A=L(()=>{const u=new Map;for(const e of[...Qn,...Bn])for(const P of e.items)u.set(P.key,{title:P.title,groupTitle:e.title});return u}),K=L(()=>{const u={tech:0,term:0,typo:0,link:0};for(const e of tn)u[e.type]+=1;return u}),H=L(()=>{const u=new Map;for(const e of tn){const P=A.value.get(e.docKey);let R=u.get(e.docKey);R||(R={docKey:e.docKey,title:(P==null?void 0:P.title)??e.docKey,groupTitle:(P==null?void 0:P.groupTitle)??"未归组",total:0,counts:{tech:0,term:0,typo:0,link:0}},u.set(e.docKey,R)),R.total+=1,R.counts[e.type]+=1}return[...u.values()].sort((e,P)=>P.total-e.total||e.title.localeCompare(P.title))});function w(u){const e=A.value.get(u.docKey);return{...u,docTitle:(e==null?void 0:e.title)??u.docKey,groupTitle:(e==null?void 0:e.groupTitle)??"未归组"}}const q=L(()=>tn.filter(u=>u.type==="typo").map(w)),E=L(()=>tn.filter(u=>u.type==="tech").map(w)),_=L(()=>[{key:"total",label:"总批注数",value:tn.length,icon:Vs,color:"#2563eb",bgColor:"#eff6ff"},...O.map(u=>({key:u.type,label:u.label,value:K.value[u.type],icon:u.icon,color:u.color,bgColor:`${u.color}14`}))]),i=X(null),k=X(null),I=L(()=>({tooltip:{trigger:"item",formatter:"{b}<br/>{c} 条（{d}%）"},series:[{type:"pie",radius:["58%","78%"],center:["50%","50%"],label:{show:!1},labelLine:{show:!1},itemStyle:{borderColor:"#fff",borderWidth:2},data:O.map(u=>({name:u.label,value:K.value[u.type],itemStyle:{color:u.color}}))}]})),m=L(()=>{const u=H.value.slice(0,10).reverse();return{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:4,right:28,top:8,bottom:4,containLabel:!0},xAxis:{type:"value",minInterval:1,axisLabel:{color:"#94a3b8",fontSize:10},splitLine:{lineStyle:{color:"#eef2f7"}}},yAxis:{type:"category",data:u.map(e=>e.title),axisTick:{show:!1},axisLine:{show:!1},axisLabel:{color:"#475569",fontSize:11,width:96,overflow:"truncate"}},series:[{type:"bar",data:u.map(e=>e.total),barWidth:10,itemStyle:{color:"#3b82f6",borderRadius:[0,5,5,0]},label:{show:!0,position:"right",color:"#64748b",fontSize:10}}]}}),{dispose:v}=En(i,I),{dispose:D}=En(k,m);Un(()=>{v(),D()});function b(u){t("open-doc",u)}return(u,e)=>{const P=te("stats-cards"),R=Sn,Q=Nn,en=Hn;return l(),d("div",ea,[n("div",ta,[n("header",la,[e[4]||(e[4]=n("div",{class:"quality-title"},[n("span",{class:"quality-kicker"},"ANNOTATION QUALITY"),n("h1",null,"批注与质量"),n("p",null,"技术批注、术语、错别字与关联批注的整体质量总览")],-1)),n("div",ia,[n("span",null,[e[0]||(e[0]=g("覆盖 ",-1)),n("strong",null,s(H.value.length),1),e[1]||(e[1]=g(" 篇原文",-1))]),n("span",null,[e[2]||(e[2]=g("共 ",-1)),n("strong",null,s(r(tn).length),1),e[3]||(e[3]=g(" 条批注",-1))])])]),p(P,{items:_.value,clickable:!1},null,8,["items"]),n("div",aa,[p(R,{class:"chart-card type-card"},{header:y(()=>[n("div",ca,[e[5]||(e[5]=n("div",null,[n("h2",null,"批注类型分布"),n("p",null,"技术批注 / 术语 / 错别字 / 关联链接")],-1)),n("span",oa,s(r(tn).length)+" 条",1)])]),default:y(()=>[n("div",da,[n("div",pa,[n("div",{ref_key:"typeChartRef",ref:i,class:"chart-canvas"},null,512),n("div",ra,[n("strong",null,s(r(tn).length),1),e[6]||(e[6]=n("span",null,"总批注",-1))])]),n("ul",ua,[(l(),d(T,null,C(O,S=>n("li",{key:S.type,class:"type-row"},[n("i",{class:"type-dot",style:bn({background:S.color})},null,4),n("span",ma,s(S.label),1),n("span",ya,s(K.value[S.type]),1)])),64))])])]),_:1}),p(R,{class:"chart-card rank-card"},{header:y(()=>[n("div",ha,[e[7]||(e[7]=n("div",null,[n("h2",null,"文档批注排行"),n("p",null,"按批注总数排序 · 图表取 Top 10，右侧为全量清单")],-1)),n("span",fa,s(H.value.length)+" 篇",1)])]),default:y(()=>[n("div",Da,[n("div",{ref_key:"docChartRef",ref:k,class:"chart-canvas doc-canvas"},null,512),n("ul",va,[(l(!0),d(T,null,C(H.value,(S,N)=>(l(),d("li",{key:S.docKey,class:"rank-row",role:"button",tabindex:"0",title:`${S.title} · ${S.total} 条批注`,onClick:V=>b(S.docKey),onKeydown:[dn(mn(V=>b(S.docKey),["stop","prevent"]),["enter"]),dn(mn(V=>b(S.docKey),["stop","prevent"]),["space"])]},[n("span",ka,s(String(N+1).padStart(2,"0")),1),n("span",ga,[n("strong",null,s(S.title),1),n("small",null,s(S.groupTitle),1)]),n("span",_a,s(S.total),1)],40,Ia))),128))])])]),_:1})]),n("div",ba,[p(R,{class:"list-card"},{header:y(()=>[n("div",wa,[e[8]||(e[8]=n("div",null,[n("h2",null,"错别字清单"),n("p",null,"term → correction · 点击定位原文")],-1)),p(Q,{type:"danger",size:"small"},{default:y(()=>[g(s(q.value.length)+" 条",1)]),_:1})])]),default:y(()=>[q.value.length?(l(),d("ul",Ka,[(l(!0),d(T,null,C(q.value,S=>(l(),d("li",{key:S.id,class:"note-row",role:"button",tabindex:"0",onClick:N=>b(S.docKey),onKeydown:[dn(mn(N=>b(S.docKey),["stop","prevent"]),["enter"]),dn(mn(N=>b(S.docKey),["stop","prevent"]),["space"])]},[n("div",xa,[n("span",$a,s(S.term),1),e[9]||(e[9]=n("span",{class:"note-arrow"},"→",-1)),n("span",Sa,s(S.correction||"待确认"),1)]),n("div",qa,[n("span",Aa,s(S.title),1),n("span",Ra,s(S.docTitle),1)]),n("p",Ta,s(S.description),1)],40,Pa))),128))])):(l(),W(en,{key:1,description:"暂无错别字批注","image-size":70}))]),_:1}),p(R,{class:"list-card"},{header:y(()=>[n("div",Oa,[e[10]||(e[10]=n("div",null,[n("h2",null,"技术批注清单"),n("p",null,"技术实现说明 · 点击定位原文")],-1)),p(Q,{type:"primary",size:"small"},{default:y(()=>[g(s(E.value.length)+" 条",1)]),_:1})])]),default:y(()=>[E.value.length?(l(),d("ul",Fa,[(l(!0),d(T,null,C(E.value,S=>(l(),d("li",{key:S.id,class:"note-row",role:"button",tabindex:"0",onClick:N=>b(S.docKey),onKeydown:[dn(mn(N=>b(S.docKey),["stop","prevent"]),["enter"]),dn(mn(N=>b(S.docKey),["stop","prevent"]),["space"])]},[n("div",Ma,[n("span",Ca,s(S.title),1),n("span",Ea,s(S.docTitle),1)]),n("p",Na,s(S.description),1)],40,La))),128))])):(l(),W(en,{key:1,description:"暂无技术批注","image-size":70}))]),_:1})])])])}}}),Ga=cn(Ha,[["__scopeId","data-v-2bf94aa9"]]),Wa={class:"effort-panel"},Ua={class:"effort-inner"},Qa={class:"effort-hero"},Ba={class:"hero-copy"},za={class:"hero-kicker"},Va={class:"hero-total"},Ya={class:"total-sub"},ja={class:"summary-grid"},Ja={class:"summary-icon"},Xa={class:"summary-copy"},Za={class:"summary-value"},nc={class:"summary-label"},sc={class:"summary-desc"},ec={class:"detail-section"},tc={class:"detail-grid"},lc={class:"detail-head"},ic={class:"detail-index"},ac={class:"detail-title"},cc={class:"detail-workload"},oc={class:"detail-desc"},dc={class:"detail-meta"},pc={class:"meta-item"},rc={class:"meta-item"},uc={class:"detail-deliverables"},mc={class:"deliverable-label"},yc={class:"deliverable-tags"},hc={class:"detail-foot"},fc={class:"source-note"},Dc=U({__name:"FusionEffortPanel",props:{data:{}},emits:["open-doc"],setup(c,{emit:f}){const t=c,O=f,A={"ops-collect":{main:"#3b82f6",soft:"#bfdbfe"},"ops-standard":{main:"#6366f1",soft:"#c7d2fe"},"ops-base":{main:"#10b981",soft:"#a7f3d0"},"ops-topic":{main:"#f59e0b",soft:"#fde68a"},"ops-special":{main:"#ec4899",soft:"#fbcfe8"}},K={"ops-collect":"blue","ops-standard":"purple","ops-base":"green","ops-topic":"orange","ops-special":"pink"},H=L(()=>t.data.items.reduce((u,e)=>u+(e.libraryCount??0),0)),w=L(()=>t.data.items.reduce((u,e)=>u+e.deliverables.length,0)),q=L(()=>[{label:"总工作量",value:t.data.totalWorkload,unit:"人月",desc:"五类治理服务合计",icon:ds},{label:"治理服务",value:t.data.items.length,unit:"类",desc:"5.4.2.3 运营服务",icon:os},{label:"数据库 / 专题库",value:H.value,unit:"个",desc:"基础 4 + 主题 4 + 专题 7",icon:Wn},{label:"交付物",value:w.value,unit:"份",desc:"规范 / 设计 / 报告",icon:ps}]);function E(u){return A[u]??A["ops-collect"]}function _(u){const e=E(u);return{"--effort-main":e.main,"--effort-soft":e.soft}}function i(u){return K[u]??"blue"}function k(u){return u.libraryCount!=null?`${u.libraryCount} 个库`:u.key==="ops-collect"?"200+ 张表":u.key==="ops-standard"?"5 个系统":"—"}function I(u){return String(u+1).padStart(2,"0")}function m(u){u.docKey&&O("open-doc",u.docKey)}const v=X(null),D=L(()=>({grid:{left:52,right:24,top:38,bottom:52},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},backgroundColor:"rgba(15, 23, 42, 0.92)",borderColor:"rgba(59, 130, 246, 0.35)",textStyle:{color:"#e2e8f0",fontSize:12},valueFormatter:u=>`${u} 人月`},xAxis:{type:"category",data:t.data.items.map(u=>u.title),axisLabel:{color:"#64748b",fontSize:11,interval:0,width:96,overflow:"break"},axisLine:{lineStyle:{color:"#e2e8f0"}},axisTick:{show:!1}},yAxis:{type:"value",name:"人月",nameTextStyle:{color:"#94a3b8",fontSize:11},axisLabel:{color:"#94a3b8",fontSize:11},splitLine:{lineStyle:{color:"#eef2f7"}}},series:[{type:"bar",barWidth:38,data:t.data.items.map(u=>{const e=E(u.key);return{value:u.workload,itemStyle:{borderRadius:[6,6,0,0],color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:e.main},{offset:1,color:e.soft}]}}}}),label:{show:!0,position:"top",color:"#334155",fontSize:11,fontWeight:600,formatter:"{c}"}}]})),{dispose:b}=En(v,D);return Un(()=>b()),(u,e)=>{const P=rn,R=Sn,Q=Nn,en=pn,S=Hn;return l(),d("div",Wa,[n("div",Ua,[n("header",Qa,[n("div",Ba,[n("span",za,[p(P,null,{default:y(()=>[p(r(us))]),_:1}),e[0]||(e[0]=g(" DELIVERY & EFFORT ",-1))]),e[1]||(e[1]=n("h2",null,"实施与工作量",-1)),e[2]||(e[2]=n("p",null," 按 5.4.2.3 数据融合治理运营服务拆解五类服务的工作量、数据库建设规模与交付物； 总工作量 200 人月，点击服务卡片可进入对应原文核对口径。 ",-1))]),n("div",Va,[e[4]||(e[4]=n("span",{class:"total-label"},"TOTAL EFFORT",-1)),n("strong",null,[g(s(c.data.totalWorkload),1),e[3]||(e[3]=n("em",null,"人月",-1))]),n("span",Ya,s(c.data.items.length)+" 类治理服务 · "+s(H.value)+" 个库",1)])]),c.data.items.length?(l(),d(T,{key:0},[n("section",ja,[(l(!0),d(T,null,C(q.value,N=>(l(),W(R,{key:N.label,class:"summary-card"},{default:y(()=>[n("span",Ja,[p(P,null,{default:y(()=>[(l(),W(_n(N.icon)))]),_:2},1024)]),n("div",Xa,[n("div",Za,[g(s(N.value),1),n("em",null,s(N.unit),1)]),n("div",nc,s(N.label),1),n("div",sc,s(N.desc),1)])]),_:2},1024))),128))]),p(R,{class:"chart-card"},{default:y(()=>[e[5]||(e[5]=n("div",{class:"chart-head"},[n("div",null,[n("h3",null,"五类服务工作量分布"),n("p",null,"单位：人月，按 5.4.2.3 工作量分析口径取整")]),n("span",{class:"chart-legend"},[n("i"),g("工作量（人月）")])],-1)),n("div",{ref_key:"chartRef",ref:v,class:"effort-chart"},null,512)]),_:1}),n("section",ec,[e[10]||(e[10]=n("header",{class:"section-head"},[n("div",null,[n("h3",null,"服务明细"),n("p",null,"逐项展示工作量、库 / 系统规模与交付物，可点击进入原文")])],-1)),n("div",tc,[(l(!0),d(T,null,C(c.data.items,(N,V)=>(l(),W(R,{key:N.key,class:"detail-card",shadow:"hover",style:bn(_(N.key))},{default:y(()=>[n("div",lc,[n("span",ic,s(I(V)),1),n("div",ac,[n("h4",null,s(N.title),1),n("span",null,s(N.category),1)]),n("span",cc,[g(s(N.workload),1),e[6]||(e[6]=n("em",null,"人月",-1))])]),n("p",oc,s(N.description),1),n("div",dc,[n("div",pc,[e[7]||(e[7]=n("span",null,"工作量",-1)),n("strong",null,s(N.workload)+" 人月",1)]),n("div",rc,[e[8]||(e[8]=n("span",null,"库 / 规模",-1)),n("strong",null,s(k(N)),1)])]),n("div",uc,[n("span",mc,"交付物 "+s(N.deliverables.length)+" 份",1),n("div",yc,[(l(!0),d(T,null,C(N.deliverables,B=>(l(),W(Q,{key:B,size:"small",effect:"plain","color-type":i(N.key)},{default:y(()=>[g(s(B),1)]),_:2},1032,["color-type"]))),128))])]),n("div",hc,[p(en,{link:"",size:"small",onClick:B=>m(N)},{default:y(()=>[p(P,null,{default:y(()=>[p(r(yn))]),_:1}),e[9]||(e[9]=g(" 查看原文 ",-1))]),_:1},8,["onClick"])])]),_:2},1032,["style"]))),128))])]),n("p",fc,s(c.data.sourceNote),1)],64)):(l(),W(S,{key:1,description:"暂无实施与工作量数据","image-size":80}))])])}}}),vc=cn(Dc,[["__scopeId","data-v-e498061f"]]),ss={positioning:"数据融合子系统是行业数字底座与广东省“数字交通运输厅”数据底座之间的融合中间层：向下统管数据、算法、时空三大资源，向上支撑应急指挥调度业务系统，横向服务厅安全应急业务协同。本期建设 AI、地图、视频、融合通信、融合服务、数据采集交换、融合门户、外部接口 8 大能力域，以及采集汇聚、标准化治理、基础库、主题库、专题库 5 类数据治理运营服务。",highlights:["双底座融合中间层：整合 AI、时空、数据三类能力","8 大能力域：AI / 地图 / 视频 / 通信 / 融合服务 / 数据交换 / 门户 / 外部接口","5 类治理运营：采集汇聚 → 标准化 → 基础库 / 主题库 / 专题库","统一融合服务治理，避免多网状交互","17 类外部接口，依托厅一体化数字平台数据枢纽"],goals:["AI 能力：建设知识管理、大小模型接入与智能体简易/流程编排，沉淀可复用 AI 能力。","时空与可视：建设“一张图”地图引擎、视频监控与“语音/视频/消息/会议”融合通信能力。","融合服务：统一 API 服务上架、授权、日志与网关治理，实现内外部服务规范对接。","数据交换：建设 DAG 工作流、离线/文件采集、ODS-DWD-ADS 数仓与数源应用管理。","门户与接口：建设统一门户、单点登录、待办消息与 4 类看板，依托厅一体化数字平台对接 17 类外部系统。","数据治理运营：按采集汇聚 → 标准化治理 → 基础库/主题库/专题库建设 5 类运营服务，形成 15 库、200 人月的治理能力。"],sourceNote:"本文取自初步设计第3章 3.2.7、第5章 5.4.1 与 5.4.2.3；能力域按 5.4.1.1–5.4.1.8，治理运营按 5.4.2.3.1–5.4.2.3.5 整理。5.1 与 5.4.1 对能力范围的表述存在差异，本页以 5.4.1 的 8 大能力域为准。"},es=[{key:"ai",title:"AI 能力系统",subtitle:"AI Capability",iconKey:"Cpu",summary:"知识文件解析/切片/索引与语义+全文+混合检索，大小模型（含 DeepSeek-V3/R1）单例/负载均衡接入，智能体管理与简易/流程编排。",sourceRef:"5.4.1.1",docKey:"design-ai"},{key:"map",title:"地图引擎能力",subtitle:"Map Engine",iconKey:"MapLocation",summary:"“一张图”时空底座：地图封装（WebAPI/慧眼大数据/交通大数据）、高精地图（地点/路线/轨迹）与交通仿真（方案/运行/宏观/事件模板）。",sourceRef:"5.4.1.2",docKey:"design-map"},{key:"video",title:"视频监控能力",subtitle:"Video Monitor",iconKey:"VideoCamera",summary:"“可视指挥”视频应用：实时预览、云台控制（预置点/方向/速度）、手动抓图与用户权限过滤，正文延伸录像回放。",sourceRef:"5.4.1.3",docKey:"design-video"},{key:"comm",title:"融合通信能力",subtitle:"Unified Communication",iconKey:"PhoneFilled",summary:"总体定位“语音/视频/消息/会议”一站式融合调度、现场/车载/单兵/会议室多终端统一呼叫；本期落地视频会议创建、预约、查询、录制与下载。",sourceRef:"5.4.1.4",docKey:"design-comm"},{key:"service",title:"融合服务",subtitle:"Fusion Service",iconKey:"Connection",summary:"统一 API 服务治理：接口注册/测试/发布上架、授权与 Token/访问控制、调用日志、服务网关（鉴权/服务总线/接入适配/路由），避免多网状交互。",sourceRef:"5.4.1.5",docKey:"design-service"},{key:"data",title:"应急数据采集与交换",subtitle:"Data Collection & Exchange",iconKey:"DataLine",summary:"DAG 工作流（同步/对账/质检/SHELL/SQL/PYTHON/流程控制/调度）、离线与文件采集、ODS-DWD-ADS 数仓层级与命名规范、数源及应用系统凭证管理。",sourceRef:"5.4.1.6",docKey:"design-data"},{key:"portal",title:"应急融合服务门户",subtitle:"Fusion Portal",iconKey:"Grid",summary:"统一工作台：单点登录/统一入口/待办/消息/知识/日程/快捷菜单，应急值守/预案/事件/物资 4 类数据看板，业务子系统门户化集成与权限控制。",sourceRef:"5.4.1.7",docKey:"design-portal"},{key:"external",title:"外部系统接口对接",subtitle:"External Integration",iconKey:"Link",summary:"依托厅一体化数字平台数据枢纽，对接统一用户、统一认证、政务短信、粤政图、高精地图、融合通信、商用密码、消息/日志、统一门户/待办/资讯、电子航道图、国家平台、路网监测、安全应急协同、国储中心等 17 类接口。",sourceRef:"5.4.1.8",docKey:"design-external"}],ts=[{key:"ops-collect",title:"数据采集汇聚服务",summary:"面向应急调度 5 子系统、厅其他业务协同、省直及地市部门、交通行业企事业单位及交通部系统等多源数据，完成需求分析、资源申请与采集汇聚；汇聚 200+ 张表，26 人月。",docKey:"ops-collect"},{key:"ops-standard",title:"数据标准化治理服务",summary:"制定应急调度元数据标准，建设 20+ 项质检规则（GB/T 36344-2018 六维度），配置 200+ 个转换清洗任务，完成 5 个业务系统质量评估；49 人月。",docKey:"ops-standard"},{key:"ops-base",title:"基础库运营服务",summary:"建设应急装备、应急终端、指挥通讯组织、指挥通讯人员 4 个基础库，覆盖主数据标准、编码体系、汇聚清洗整合与主数据服务；18.5 人月。",docKey:"ops-base"},{key:"ops-topic",title:"主题库运营服务",summary:"建设厅级装备物资、应急预案、应急知识、应急指挥调度 4 个主题库，完成跨部门多源异构数据标准化整合；39 人月。",docKey:"ops-topic"},{key:"ops-special",title:"专题库运营服务",summary:"建设公路大客流大货流、航道、海峡办、重点路段、恶劣天气、重点保障工作、重点车辆监测 7 个专题库，含指标/维度/模型设计与指标开发；67.5 人月。",docKey:"ops-special"}],Pn=[{key:"ai",title:"AI 能力系统",initialRef:"5.4.1.1",requirementRef:"3.8.4.1",initialDocKey:"design-ai",requirementDocKey:"req-spec-ai",initialModules:["知识管理能力（文件管理、检索、解析切片、重新构建、索引、查询）","模型接入管理能力（参数配置、目录、接入模式、运行、测试、日志）","AI agent（智能体）应用管理（智能体管理、简易编排、流程编排）"],mappings:[{initialModule:"知识管理能力",initialDetail:"文件管理、检索、解析切片、重新构建、索引、查询",relation:"split",functionRange:[1,7],note:"拆为 7 个功能点，补齐输入/输出与核心字段"},{initialModule:"模型接入管理能力",initialDetail:"参数配置、目录、接入模式、运行、测试、日志",relation:"split",functionRange:[8,10],note:"拆为 3 个功能点，明确参数配置、目录与运行状态"},{initialModule:"AI agent 应用管理",initialDetail:"智能体管理、简易编排、流程编排",relation:"split",functionRange:[11,13],note:"拆为 3 个功能点，覆盖开发、简易编排与流程编排"}],requirementFunctions:["知识文件入库数据","知识文件检索结果信息","文档解析结果信息","知识切片信息","知识重新构建向量数据","知识语义、实体索引信息","知识查询结果数据","模型接入参数配置信息","模型目录管理信息","模型运行调用状态信息","智能体开发管理信息","智能体简易编排信息","智能体流程编排信息"],sharedModules:["知识管理","模型接入管理","智能体应用管理"],requirementHighlights:["知识管理拆为 7 个功能点，补充入库、检索、解析、切片、重建、索引、查询的输入/输出与核心字段。","模型接入拆为 3 个功能点，明确参数配置、目录、运行状态的输入/输出。","智能体拆为 3 个功能点，覆盖开发管理、简易编排、流程编排。","补充业务角色权限与功能点级验收口径。"],designHighlights:["初设单独描述模型接入模式（单例/负载均衡）、模型测试、模型日志，需规未单列。","初设对知识索引的语义索引、实体索引实现说明更细。","初设保留接口、参数与实现层面的设计细节。"],conclusion:"主体模块一一对应；需规把初设的能力描述拆成可验收的功能点、输入输出和核心字段。初设中的模型接入模式、测试、日志等内容在需规未单列，需以初设为准。"},{key:"map",title:"地图引擎能力",initialRef:"5.4.1.2",requirementRef:"3.8.4.2",initialDocKey:"design-map",requirementDocKey:"req-spec-map",initialModules:["地图引擎封装服务（WebAPI、慧眼大数据、交通大数据）","高精地图引擎服务（地点、路线、轨迹）","交通仿真引擎服务（仿真方案、运行、宏观仿真、事件与模板）"],mappings:[{initialModule:"地图引擎封装服务",initialDetail:"WebAPI、慧眼大数据、交通大数据",relation:"refined",functionRange:[1,3],note:"三类服务分别对应 1 个功能点，需规补充输入/输出"},{initialModule:"高精地图引擎服务",initialDetail:"地点、路线、轨迹",relation:"refined",functionRange:[4,6],note:"地点检索、路线规划、轨迹计算逐项对应"},{initialModule:"交通仿真引擎服务",initialDetail:"仿真方案、运行、宏观仿真、事件与模板",relation:"refined",functionRange:[7,10],note:"仿真方案、运行状态、宏观分析与事件模板"}],requirementFunctions:["WebAPI 服务接口信息","慧眼大数据分析信息","交通大数据分析信息","地点检索服务接口信息","路线规划服务接口信息","轨迹计算服务接口信息","仿真方案信息","仿真运行状态信息","宏观仿真分析信息","事件与模板数据"],sharedModules:["地图引擎封装服务","高精地图引擎服务","交通仿真引擎服务"],requirementHighlights:["把三类地图服务拆为 10 个功能点，补充每个功能点的输入/输出。","地点检索覆盖 POI、AOI、路网、地理编码、逆地理编码、行政区划、坐标转换、桩号定位、缓冲区、实时路况等能力。","仿真服务覆盖方案、运行状态、宏观分析与事件模板。"],designHighlights:["初设逐项列出 WebAPI 9 类接口、慧眼 4 类分析、交通大数据 5 类分析，接口级细节更完整。","初设的地点检索 11 项能力、路线 3 项、轨迹 2 项可直接作为需规功能点的实现说明。","初设的仿真方案 5 项操作、运行暂停/恢复/进度拖动等细节需规未逐项展开。"],conclusion:"三类能力完全对应；需规细化到 10 个功能点并补充输入输出，初设保留接口清单、参数与实现细节。"},{key:"video",title:"视频监控能力",initialRef:"5.4.1.3",requirementRef:"3.8.4.3",initialDocKey:"design-video",requirementDocKey:"req-spec-video",initialModules:["视频应用（实时预览、云台控制、手动抓图、用户权限查询）"],mappings:[{initialModule:"实时预览",relation:"aligned",functionRange:[1,1]},{initialModule:"云台控制",relation:"aligned",functionRange:[2,2]},{initialModule:"手动抓图",relation:"aligned",functionRange:[3,3]},{initialModule:"视频查询 / 权限",relation:"aligned",functionRange:[4,4],note:"初设“用户权限查询”归入视频查询结果列表"}],requirementFunctions:["视频实时预览数据","云台控制信息","手动抓图图片数据","视频查询结果列表数据"],sharedModules:["实时预览","云台控制","手动抓图","视频查询/权限"],requirementHighlights:["4 项能力逐一对应，补充实时预览、云台控制、抓图、视频查询的输入输出。","需规把初设的“用户权限查询”归入“视频查询结果列表数据”，强调按权限返回视频列表。"],designHighlights:["初设保留取流 URL、GUI 播放、预置点增删改查、云台 1-100 速度范围等实现细节。","初设明确手动抓图在录像回放过程中的取证与归档语义。"],conclusion:"4 项能力一一对应；需规补充输入输出与核心字段，初设保留取流、云台、抓图的具体接口与操作细节。"},{key:"comm",title:"融合通信能力",initialRef:"5.4.1.4",requirementRef:"3.8.4.4",initialDocKey:"design-comm",requirementDocKey:"req-spec-comm",initialModules:["视频会议（创建、取消、编辑、查询列表/详情、录制列表/详情、下载）"],mappings:[{initialModule:"会议创建 / 取消 / 变更",relation:"aligned",functionRange:[1,3],note:"创建模板、取消申请、预约变更逐项对应"},{initialModule:"会议列表 / 详情",relation:"aligned",functionRange:[4,5]},{initialModule:"会议录制 / 下载",relation:"aligned",functionRange:[6,8],note:"录制列表、录制详情、文件下载配置"}],requirementFunctions:["创建会议模板信息","预约会议取消申请信息","预约会议变更信息","查询会议列表信息","查询结果详情信息","会议录制列表信息","会议录制详情信息","录制文件下载配置信息"],sharedModules:["创建会议","取消预约会议","编辑/变更预约会议","会议列表/详情","录制列表/详情","录制下载"],requirementHighlights:["8 个会议功能点与初设一一对应。","需规把初设“编辑预约会议”表述为“预约会议变更信息”，补充变更申请与输入输出。","需规补充会议创建、取消、变更、查询、录制、下载的核心字段。"],designHighlights:["初设保留会议时长 1440/15/30 分钟、变更单推送、录制超过 3 小时拆分等业务规则。","初设明确管理员与普通用户的取消、查询权限边界。"],conclusion:"8 个功能点一一对应；需规补充输入输出与核心字段，初设保留会议时长、变更单、录制拆分等业务规则。"},{key:"service",title:"融合服务",initialRef:"5.4.1.5",requirementRef:"3.8.4.5",initialDocKey:"design-service",requirementDocKey:"req-spec-service",initialModules:["服务接口上架管理","服务授权管理","服务日志管理","服务网关管理"],mappings:[{initialModule:"服务接口上架管理",initialDetail:"注册、详情、适配、测试、启停、封装",relation:"aligned",functionRange:[1,1]},{initialModule:"服务授权管理",initialDetail:"授权记录、访问控制、授权范围",relation:"aligned",functionRange:[2,2]},{initialModule:"服务日志管理",initialDetail:"调用日志检索",relation:"aligned",functionRange:[3,3]},{initialModule:"服务网关管理",initialDetail:"鉴权、路由、调度",relation:"aligned",functionRange:[4,4]}],requirementFunctions:["服务接口管理维护信息","服务授权信息","服务调用日志信息","服务网关信息"],sharedModules:["服务接口管理","服务授权","服务日志","服务网关"],requirementHighlights:["4 个功能模块一一对应。","需规补充服务接口注册/详情/适配/测试/启停/封装、授权记录/访问控制/范围、日志检索、网关鉴权/路由等输入输出。","需规补充服务 ID、接口名称、地址、请求方式、参数、返回值等核心字段。"],designHighlights:["初设保留 7 类服务接口配置、Service id/Pass id/Pass Token/App secret 鉴权组合。","初设明确单表/多表构建、自定义 SQL 生成服务接口等实现方式。","初设的服务网关授权访问、服务总线、接入适配、访问控制、路由调度细节更完整。"],conclusion:"4 个模块一一对应；需规补充功能点级输入输出与核心字段，初设保留鉴权组合、SQL 封装、网关路由等实现细节。"},{key:"data",title:"应急数据采集与交换",initialRef:"5.4.1.6",requirementRef:"3.8.4.6",initialDocKey:"design-data",requirementDocKey:"req-spec-data",initialModules:["工作流定义（画布、同步/对账/质检组件、SHELL/SQL/PYTHON、流程控制、任务调度）","数据采集（离线采集、汇聚配置、日志、任务调度、文件采集）","数仓管理（层级、配置、命名规范）","数源管理（数据库、参数配置）","应用系统管理（基础信息、系统凭证、授权服务）"],mappings:[{initialModule:"工作流定义",initialDetail:"画布、同步/对账/质检组件、SHELL/SQL/PYTHON、流程控制、任务调度",relation:"split",functionRange:[1,9],note:"拆为 9 个功能点，覆盖画布、组件与调度配置"},{initialModule:"数据采集",initialDetail:"离线采集、汇聚配置、日志、任务调度、文件采集",relation:"split",functionRange:[10,18],note:"拆为 9 个功能点，文件采集并入数据采集"},{initialModule:"数仓管理",initialDetail:"层级、配置、命名规范",relation:"split",functionRange:[19,22]},{initialModule:"数源管理",initialDetail:"数据库、参数配置",relation:"split",functionRange:[23,24]},{initialModule:"应用系统管理",initialDetail:"基础信息、系统凭证、授权服务",relation:"split",functionRange:[25,27]}],requirementFunctions:["工作流画布信息","数据同步组件信息","数据对账组件信息","数据质检组件信息","SHELL 组件信息","SQL 组件信息","PYTHON 组件信息","流程控制组件信息","任务调度时间配置信息","离线数据采集管理信息","汇聚任务配置信息","数据采集日志信息","任务调度管理信息","调度配置信息","调度任务运行日志信息","执行器管理信息","文件汇聚管理信息","文件汇聚同步配置信息","数仓层级基础信息管理数据","数仓层级配置信息","命名规范元素管理信息","命名规范配置信息","数据库管理信息","数据库参数配置信息","应用系统基础信息","系统凭证信息","授权服务配置管理信息"],sharedModules:["工作流定义","数据采集","数仓管理","数源管理","应用系统管理"],requirementHighlights:["5 个模块细化为 27 个功能点，覆盖工作流、采集、数仓、数源、应用系统管理。","需规补充每个功能点的输入/输出与核心字段，便于直接拆开发任务。","需规把文件采集纳入数据采集模块，覆盖文件汇聚管理与同步配置。"],designHighlights:["初设保留工作流 DAG 8 项配置、组件属性、任务调度 CRON 等实现细节。","初设保留离线采集表头字段、汇聚任务配置、调度日志字段等页面级设计。","初设的数仓层级、命名规范、数据库参数配置说明更贴近实现。"],conclusion:"5 个模块对应；需规细化为 27 个功能点并补充输入输出，初设保留 DAG 配置、调度、表头字段等实现细节。"},{key:"portal",title:"应急融合服务门户",initialRef:"5.4.1.7",requirementRef:"3.8.4.7",initialDocKey:"design-portal",requirementDocKey:"req-spec-portal",initialModules:["门户框架（通用功能、待办中心、消息中心、知识中心、工作日程、快捷菜单）","数据看板（应急值守、智能应急预案、应急事件、应急物资）","子系统集成（业务系统接入、门户化封装、访问权限、集成配置）"],mappings:[{initialModule:"门户框架",initialDetail:"通用功能、待办中心、消息中心、知识中心、工作日程、快捷菜单",relation:"split",functionRange:[1,8],note:"拆为 8 个功能点，覆盖门户通用能力"},{initialModule:"数据看板",initialDetail:"应急值守、智能应急预案、应急事件、应急物资",relation:"split",functionRange:[9,12],note:"4 个专题看板分别对应 1 个功能点"},{initialModule:"子系统集成",initialDetail:"业务系统接入、门户化封装、访问权限、集成配置",relation:"split",functionRange:[13,16]}],requirementFunctions:["通用功能-个人信息","通用功能-待办提醒消息","通用功能-业务系统导航信息","待办中心-待办列表信息","消息中心-消息列表和详情信息","知识中心-列表和详情信息","工作日程信息","快捷菜单列表信息","应急值守看板数据","智能应急预案看板数据","应急事件看板数据","应急物资看板数据","业务系统接入配置信息","应用门户化封装与展示信息","访问权限与安全控制信息","集成配置管理信息"],sharedModules:["门户框架","数据看板","子系统集成"],requirementHighlights:["3 个模块细化为 16 个功能点。","需规补门户框架 8 个功能点（个人信息、待办、消息、知识、日程、快捷菜单等）。","需规补数据看板 4 个专题与子系统集成 4 个功能点的输入输出。"],designHighlights:["初设保留门户通用功能、待办/消息/知识中心的详细交互规则。","初设保留看板具体图表指标与钻取说明。","初设的 SSO 集成参数、门户级访问控制、访问日志等实现细节更完整。"],conclusion:"3 个模块对应；需规细化为 16 个功能点并补充输入输出，初设保留交互规则、图表指标与 SSO 集成细节。"},{key:"external",title:"外部系统接口对接",initialRef:"5.4.1.8",requirementRef:"3.8.4.8",initialDocKey:"design-external",requirementDocKey:"req-spec-external",initialModules:["统一用户中心、统一身份认证、政务短信、粤政图、省交通集团高精地图","融合通信、商用密码、消息中心、日志中心、统一门户、统一待办、统一资讯、电子航道图","国家综合交通运输信息平台、路网运行监测工程、安全应急协同平台（一期）、国储中心系统"],mappings:[{initialModule:"统一用户 / 认证 / 短信 / 地图",initialDetail:"统一用户中心、统一身份认证、政务短信、粤政图、省交通集团高精地图",relation:"split",functionRange:[1,9],note:"用户、机构、权限、认证、短信、地图与图层接口"},{initialModule:"融合通信",initialDetail:"融合通信接口",relation:"aligned",functionRange:[10,10],note:"融合通信接口一一对应"},{initialModule:"商用密码",initialDetail:"数据加解密、签名验签、证书、密钥与时间戳",relation:"split",functionRange:[11,22],note:"商用密码拆为 12 个功能点，覆盖加解密、签名验签、证书、密钥与时间戳"},{initialModule:"消息与门户",initialDetail:"消息中心、日志中心、统一门户、统一待办、统一资讯、电子航道图",relation:"split",functionRange:[23,28],note:"6 类消息与门户接口各对应 1 个功能点"},{initialModule:"部省平台 / 路网监测 / 应急协同 / 国储",initialDetail:"国家综合交通运输信息平台、路网运行监测工程、安全应急协同平台（一期）、国储中心系统",relation:"split",functionRange:[29,35]}],requirementFunctions:["用户接口对接信息","机构接口对接信息","权限接口对接信息","政务侧身份认证接口对接信息","公众侧身份认证接口对接信息","政务短信接口对接信息","粤政图接口对接信息","底图基础图层接口对接信息","数据治理加工图层接口对接信息","融合通信接口对接信息","数据存储加密接口对接信息","数据存储解密接口对接信息","数据签名接口对接信息","数据验签接口对接信息","数字证书导出接口对接信息","数字证书解析接口对接信息","数字证书验证接口对接信息","智能密码钥匙接口对接信息","密钥生成接口对接信息","密钥分发接口对接信息","密钥销毁接口对接信息","时间戳接口对接信息","消息中心接口对接信息","日志中心接口对接信息","统一门户接口对接信息","统一待办接口对接信息","统一资讯接口对接信息","电子航道图接口对接信息","组织架构及人员信息接口对接","阻断信息接口对接","预警叫应信息接口对接","气象数据接口对接信息","航道监控数据对接","安全应急协同平台（一期）接口对接信息","国储中心系统对接"],sharedModules:["17 类外部系统/接口对接"],requirementHighlights:["17 类对接细化为 35 个功能点。","需规补充统一用户、认证、短信、地图、通信、密码、消息、门户、待办、资讯、航道图、部省平台等输入输出。","需规把商用密码拆为 12 个功能点，覆盖加解密、签名验签、证书、密钥、时间戳。"],designHighlights:["初设保留商用密码各接口的参数表、GM/T 规范引用与字段顺序。","初设保留统一用户、认证、政务短信、粤政图、高精地图等接口的对接说明。","初设的 8.7.1–8.7.12 密码接口参数清单可直接作为需规功能点的实现依据。"],conclusion:"17 类对接一一对应；需规细化为 35 个功能点并补充输入输出，初设保留密码接口参数表、规范引用与对接细节。"}],zn={key:"root",text:"数据融合子系统",tone:"root",children:[{key:"ai",text:"AI 能力系统",tone:"branch",children:[{text:"知识管理能力",tone:"accent",children:[{text:"知识文件管理"},{text:"知识文件检索"},{text:"知识解析及切片"},{text:"知识重新构建"},{text:"知识索引"},{text:"知识查询（语义 / 全文 / 混合）"}]},{text:"模型接入管理能力",tone:"accent",children:[{text:"模型接入参数配置"},{text:"模型目录管理"},{text:"模型接入模式（单例 / 负载均衡）"},{text:"模型启停与运行"},{text:"模型在线测试"},{text:"模型调用日志"}]},{text:"AI Agent 应用管理",tone:"accent",children:[{text:"智能体管理"},{text:"简易编排（角色指令 / 记忆 / 开场白 / 对话引导 / 问答模型 / 调试发布）"},{text:"流程编排（信息收集 / 消息 / 全局跳转 / 大模型 / 知识库 / 数据库 / 代码）"}]}]},{key:"map",text:"地图引擎能力",tone:"branch",children:[{text:"地图引擎封装服务",tone:"accent",children:[{text:"WebAPI 服务"},{text:"慧眼大数据"},{text:"交通大数据"}]},{text:"高精地图引擎服务",tone:"accent",children:[{text:"地点服务（POI / AOI / 路网 / 编码转换 / 行政区 / 桩号 / 缓冲区 / 实时路况）"},{text:"路线服务（路径规划 / 等时圈 / 几何计算）"},{text:"轨迹服务（轨迹纠偏 / 批量路算）"}]},{text:"交通仿真引擎服务",tone:"accent",children:[{text:"仿真方案管理"},{text:"仿真运行管理"},{text:"宏观仿真管理"},{text:"事件与模板管理"}]}]},{key:"video",text:"视频监控能力",tone:"branch",children:[{text:"视频应用",tone:"accent",children:[{text:"实时预览"},{text:"云台控制"},{text:"手动抓图"},{text:"用户权限查询"}]}]},{key:"comm",text:"融合通信能力",tone:"branch",children:[{text:"视频会议",tone:"accent",children:[{text:"创建会议"},{text:"取消预约会议"},{text:"编辑预约会议"},{text:"查询会议列表"},{text:"查询会议详情"},{text:"查询录制列表"},{text:"查询录制详情"},{text:"下载录制文件"}]}]},{key:"service",text:"融合服务",tone:"branch",children:[{text:"服务接口上架管理",tone:"accent"},{text:"服务授权管理",tone:"accent"},{text:"服务日志管理",tone:"accent"},{text:"服务网关管理",tone:"accent"}]},{key:"data",text:"应急数据采集与交换",tone:"branch",children:[{text:"工作流定义",tone:"accent",children:[{text:"工作流画布管理"},{text:"数据同步组件"},{text:"数据对账组件"},{text:"数据质检组件"},{text:"SHELL / SQL / PYTHON 组件"},{text:"流程控制组件"},{text:"任务调度配置"}]},{text:"数据采集",tone:"accent",children:[{text:"离线数据采集"},{text:"文件采集"}]},{text:"数仓管理",tone:"accent",children:[{text:"数仓层级管理"},{text:"命名规范管理"}]},{text:"数源管理",tone:"accent",children:[{text:"数据库管理"},{text:"数据库参数配置"}]},{text:"应用系统管理",tone:"accent",children:[{text:"应用系统管理"},{text:"系统凭证管理"},{text:"授权服务配置管理"}]}]},{key:"portal",text:"应急融合服务门户",tone:"branch",children:[{text:"门户框架",tone:"accent",children:[{text:"通用功能"},{text:"待办中心"},{text:"消息中心"},{text:"知识中心"},{text:"工作日程"},{text:"快捷菜单"}]},{text:"数据看板",tone:"accent",children:[{text:"应急值守看板"},{text:"智能应急预案看板"},{text:"应急事件看板"},{text:"应急物资看板"}]},{text:"子系统集成",tone:"accent",children:[{text:"业务系统接入配置"},{text:"应用门户化封装与展示"},{text:"访问权限与安全控制"},{text:"集成配置管理"}]}]},{key:"external",text:"外部系统接口对接",tone:"branch",children:[{text:"统一用户中心（用户 / 机构 / 权限）",tone:"accent"},{text:"统一身份认证（政务侧 / 公众侧）",tone:"accent"},{text:"政务短信",tone:"accent"},{text:"粤政图服务",tone:"accent"},{text:"省交通集团高精地图（底图 / 治理图层）",tone:"accent"},{text:"融合通信能力",tone:"accent"},{text:"商用密码服务（加解密 / 签名验签 / 证书 / 密钥 / 时间戳）",tone:"accent"},{text:"消息中心 / 日志中心",tone:"accent"},{text:"统一门户 / 统一待办 / 统一资讯",tone:"accent"},{text:"电子航道图",tone:"accent"}]},{key:"ops",text:"数据融合治理运营服务",tone:"danger",children:[{text:"应急调度数据采集汇聚服务"},{text:"应急调度数据标准化治理服务"},{text:"应急调度基础库运营服务"},{text:"应急调度主题库运营服务"},{text:"应急调度专题库运营服务"},{text:"运营类服务，非前端页面开发功能点",tone:"note"}]}]};function Vn(c){var f;return c.tone==="note"||c.tone==="annotation"?0:(f=c.children)!=null&&f.length?c.children.reduce((t,O)=>t+Vn(O),0):1}const xn=(zn.children??[]).filter(c=>c.key&&c.key!=="ops"),Cn=(zn.children??[]).find(c=>c.key==="ops"),ls=Object.fromEntries(xn.map(c=>{var f;return[c.key,{modules:((f=c.children)==null?void 0:f.filter(t=>t.tone!=="note").length)??0,points:Vn(c)}]}));var as;const is={domains:xn.length,modules:xn.reduce((c,f)=>{var t;return c+(((t=f.children)==null?void 0:t.length)??0)},0),points:xn.reduce((c,f)=>c+Vn(f),0),operations:((as=Cn==null?void 0:Cn.children)==null?void 0:as.filter(c=>c.tone!=="note").length)??0},Ic={stages:[{key:"sources",title:"多源数据",subtitle:"MULTI-SOURCE",description:"覆盖应急调度协同平台、厅内业务协同系统、省直与地市部门、交通行业企事业单位四类数据来源。",metrics:[{label:"数据源类别",value:"4 类"},{label:"业务系统",value:"20+ 个"},{label:"汇聚数据表",value:"200+ 张"}],highlights:["应急指挥调度工程 5 个子系统，汇聚不少于 80 张数据表","厅内建设管养、综合运输、行政执法等协同平台，不少于 10 个系统 60 张表","省应急厅、省气象等省直与地市部门，不少于 30 张表申请对接","交通集团路网监测、路网事件报送等企事业单位数据不少于 30 张表"],docKey:"ops-collect",opsKey:"collect"},{key:"collect",title:"采集汇聚",subtitle:"INGESTION",description:"按数据实时性与数据量选择库表采集、接口采集或数据导入，统一沉淀到采集汇聚库。",metrics:[{label:"汇聚数据表",value:"200+ 张"},{label:"采集方式",value:"库表 / 接口 / 导入"},{label:"工作量",value:"26 人月"}],highlights:["库表采集：交换节点初始化、交换服务配置与采集任务监控","接口采集：接口联通测试与调用频率、数据量、响应时间监控","数据导入：专项数据表配置，Excel 导入或页面填报后审核入库","配置调度计划并持续监测，异常任务及时处理保障按时按量入库"],docKey:"ops-collect",opsKey:"collect"},{key:"ods",title:"贴源层 ODS",subtitle:"RAW LAYER",description:"贴源层按源系统原样保留数据结构，作为标准化治理与二次抽取的唯一数据底座。",metrics:[{label:"贴源库",value:"1 套"},{label:"汇聚表",value:"200+ 张"},{label:"更新方式",value:"定时 + 实时"}],highlights:["原始结构不裁剪，便于问题回溯与源系统口径核对","按来源系统分域组织，采集任务与源表一一对应","定时批量与实时接口并存，兼顾存量与增量数据","入库数据检查纳入采集任务运行监测范围"],docKey:"design-data",opsKey:"collect"},{key:"standard",title:"标准化治理",subtitle:"STANDARDIZATION",description:"统一数据标准与质检规则，经 ETL 抽取、清洗、转换、加载形成标准明细数据。",metrics:[{label:"质检规则",value:"20+ 项"},{label:"清洗任务",value:"200+ 个"},{label:"质量评估",value:"5 个系统"},{label:"工作量",value:"49 人月"}],highlights:["制定应急调度元数据标准规范 1 份，统一字段命名、格式与代码值","质检覆盖完整性、准确性、有效性、时效性、一致性、可访问性六个维度","ETL 完成抽取、清洗、转换、加载，处理缺失、重复、非法与不一致数据","对不少于 5 个业务系统开展数据质量评估并输出质量报告"],docKey:"ops-standard",opsKey:"standard"},{key:"base",title:"基础库",subtitle:"BASE LIBRARY",description:"围绕应急主数据建设四类基础库，形成权威、准确、一致、可共享的主数据底座。",metrics:[{label:"库数量",value:"4 库"},{label:"主数据",value:"4 类"},{label:"工作量",value:"18.5 人月"}],highlights:["应急装备信息库、应急终端信息库、应急指挥通讯组织库、应急指挥通讯人员库","制定主数据标准与编码体系，明确组织机构、人员、物资、位置等编码规则","数据汇聚、清洗、匹配整合与初始化，配置索引支撑主数据查询","主数据经 API 或消息队列推送订阅，并在省一体化数字平台挂接服务"],docKey:"ops-base",opsKey:"base"},{key:"topic",title:"主题库",subtitle:"SUBJECT LIBRARY",description:"在基础库主数据之上融合贴源层与标准化数据，面向应急业务主题构建四类主题库。",metrics:[{label:"库数量",value:"4 库"},{label:"覆盖主题",value:"装备物资 / 预案 / 知识 / 指挥调度"},{label:"工作量",value:"39 人月"}],highlights:["厅级应急装备物资主题库：装备基础、调用、维护、报废与状态监控","应急预案主题库：预案模板、情景样本、演练方案与效果评估","应急知识主题库：政策法规、预案知识、演练知识与处置知识","应急指挥调度主题库：公路水路事件、值班值守、任务处置与设备调度"],docKey:"ops-topic",opsKey:"topic"},{key:"special",title:"专题库",subtitle:"THEMATIC LIBRARY",description:"面向专题应用梳理指标与维度模型，抽取贴源层、主题库及外部数据开发七类专题库。",metrics:[{label:"库数量",value:"7 库"},{label:"专题方向",value:"大客流大货流 / 航道 / 海峡办 等"},{label:"工作量",value:"67.5 人月"}],highlights:["公路大客流大货流、航道、海峡办、重点路段、恶劣天气、重点保障工作、重点车辆监测","指标设计明确名称、计算口径、数据来源与采集频率，并组合复合维度","采用星型 / 雪花模型与指标宽表，设计索引与分区策略支撑指标查询","指标开发同步建设质量规则与元数据血缘，保障指标可解释可追溯"],docKey:"ops-special",opsKey:"special"},{key:"service",title:"服务与 AI",subtitle:"SERVICE & AI",description:"以 API、消息与门户三种形态输出数据服务，并与 AI、地图、视频、通信能力融合。",metrics:[{label:"服务形态",value:"API / 消息 / 门户"},{label:"挂接平台",value:"省一体化数字平台"},{label:"融合能力",value:"AI + 地图 + 视频 + 通信"}],highlights:["主数据与主题数据经 API 或消息队列向平台内各业务系统推送订阅","基础库、主题库、专题库指标经融合服务门户对外提供查询与展示","资源及服务在省一体化数字平台编目挂接，支撑跨部门协同调用","AI 能力与地图引擎、视频监控、融合通信组合，服务指挥调度场景"],docKey:"design-service",opsKey:"service"}],sourceNote:"来源：初步设计 5.4.2.3 治理运营服务（数据采集汇聚 5.4.2.3.1、标准化治理 5.4.2.3.2、基础库 5.4.2.3.3、主题库 5.4.2.3.4、专题库 5.4.2.3.5）与 5.4.1.5 融合服务、5.4.1.7 融合服务门户章节；工作量与库数量按各章节服务范围与工作量分析归集。"},kc={groups:[{key:"gov-cloud",title:"省政务云 / 一体化数字平台",description:"依托厅一体化数字平台数据枢纽与公共支撑能力，统一接入用户、认证、短信、地图、密码、消息与门户等待办类服务。",items:[{key:"unified-user",title:"统一用户中心",description:"同步省、市、县、集团、路段多级用户、机构与权限数据，构建全厅统一的应急指挥用户与组织体系。",interfaces:["用户信息查询 / 增量同步","机构层级与区域编码同步","角色与数据权限同步","账号状态校验","同步结果回执"],authMode:"一体化平台 OAuth2 客户端凭证 + 网关签名",docKey:"design-external",compareKey:"external"},{key:"unified-auth",title:"统一身份认证",description:"对接政务侧与公众侧统一认证能力，支持粤政易免密登录、票据校验、会话管理与统一登出。",interfaces:["政务侧免密登录","公众侧手机号 / 实名认证","SSO 票据校验","会话续期与失效","统一登出"],authMode:"OAuth2 / OIDC + SSO 票据校验",docKey:"design-external",compareKey:"external"},{key:"gov-sms",title:"政务短信",description:"对接省政务短信平台，支撑预警叫应、通知提醒、验证码与应急通知的统一发送、回执与频次控制。",interfaces:["短信发送","短信模板管理","状态回执查询","发送记录查询","频次控制"],authMode:"政务云 AK/SK 签名",docKey:"design-external",compareKey:"external"},{key:"yue-zheng-tu",title:"粤政图服务",description:"接入广东省政务地图，为融合系统底图与各类专题图层提供统一底图、空间检索、空间分析与标绘能力。",interfaces:["政务底图瓦片服务","POI 与地址检索","行政区划服务","路网与标注图层","空间分析与测距标绘"],authMode:"政务云应用授权 + 访问 Token",docKey:"design-external",compareKey:"external"},{key:"commercial-crypto",title:"商用密码服务",description:"接入省政务云商用密码资源池，提供数据加解密、签名验签、数字证书、密钥全生命周期与可信时间戳服务。",interfaces:["数据存储加密 / 解密","数据签名与验签","数字证书导出 / 解析 / 验证","密钥生成 / 分发 / 销毁","可信时间戳","智能密码钥匙（USBKey）"],authMode:"密码机会话句柄 + 密钥句柄",docKey:"design-external",compareKey:"external"},{key:"message-center",title:"消息中心",description:"对接统一消息中心，实现系统消息、预警、通知、公告与待办消息的统一发布、订阅、推送与回执。",interfaces:["消息发布","消息订阅","站内 / 短信 / 邮件多渠道推送","已读回执","消息统计"],authMode:"统一网关 Token + 消息签名",docKey:"design-external",compareKey:"external"},{key:"log-center",title:"日志中心",description:"对接统一日志中心，归集操作、登录、接口与异常日志，支撑查询、统计、审计与留存。",interfaces:["日志上报","日志查询","审计导出","统计聚合"],authMode:"网关 AK/SK + 敏感字段脱敏",docKey:"design-external",compareKey:"external"},{key:"unified-portal",title:"统一门户",description:"对接省、厅统一门户，实现单点登录、菜单与权限同步、主题样式统一及快捷入口集成。",interfaces:["单点登录跳转","门户菜单同步","门户权限同步","主题样式同步","快捷入口同步"],authMode:"OAuth2 / OIDC + SSO 票据",docKey:"design-external",compareKey:"external"},{key:"unified-todo",title:"统一待办",description:"对接统一待办平台，汇聚审核、任务、预警与会议待办，并完成已办回写与处理链接跳转。",interfaces:["待办推送","已办回写","待办状态同步","处理链接跳转","幂等查询"],authMode:"网关 Token + 幂等键",docKey:"design-external",compareKey:"external"},{key:"unified-news",title:"统一资讯",description:"对接统一资讯平台，汇聚政策、通知、公告与行业动态，支撑分类、置顶与阅读量统计。",interfaces:["资讯拉取","栏目分类","置顶配置","阅读量统计"],authMode:"统一门户网关 Token",docKey:"design-external",compareKey:"external"}]},{key:"transport-group",title:"交通集团 / 行业平台",description:"对接省交通集团与行业侧平台，获取高精地图、融合通信与电子航道图等时空及通信能力。",items:[{key:"high-precision-map",title:"省交通集团高精地图",description:"对接省交通集团高精度数字底图，获取道路基础要素、位置大数据、标精地图及治理加工后的专题图层。",interfaces:["底图基础图层服务","道路基础要素图层","位置大数据图层","标精地图图层","数据治理加工专题图层"],authMode:"集团开放平台 AK/SK + 图层授权",docKey:"design-external",compareKey:"external"},{key:"unified-communication",title:"融合通信",description:"对接融合通信平台，统一调用语音、视频会议、对讲、广播、卫星电话与集群调度能力。",interfaces:["会议创建与预约","呼叫 / 挂断","会议录制与下载","对讲与广播","卫星通信","参会方状态查询"],authMode:"平台 AppKey / AppSecret + 访问 Token",docKey:"design-external",compareKey:"external"},{key:"electronic-waterway",title:"电子航道图",description:"对接省航道中心电子航道图服务，获取航道、航标、水位、通航条件与船闸运行信息。",interfaces:["航道图层服务","航标状态","水位数据","通航条件","船闸状态"],authMode:"航道中心服务授权 Token",docKey:"design-external",compareKey:"external"}]},{key:"national-platform",title:"国家 / 部级平台",description:"对接国家综合交通运输信息平台与国储中心，支撑阻断信息上报、预警叫应、组织人员同步与应急物资对账。",items:[{key:"national-transport-platform",title:"国家综合交通运输信息平台",description:"对接部级路网风险管理与预警叫应系统，实现阻断信息上报、预警叫应接收回执及部省组织机构与人员同步。",interfaces:["阻断信息上报","预警叫应接收","叫应回执反馈","省市县组织机构同步","联系人及职责同步","事件处置进展同步"],authMode:"部级平台 CA 证书 + 白名单",docKey:"design-external",compareKey:"external"},{key:"national-reserve-center",title:"国储中心",description:"对接国家储备中心系统，同步应急物资目录、库存、仓库信息、调拨指令、回执状态与对账结果。",interfaces:["物资目录同步","库存数量查询","仓库信息同步","调拨指令接收","调拨回执反馈","库存对账"],authMode:"专线接入 + 国储平台 Token",docKey:"design-external",compareKey:"external"}]},{key:"hall-collaboration",title:"厅内 / 协同平台",description:"对接厅内路网运行监测工程与安全应急协同平台（一期），补齐气象、航道监控、应急资源与三防态势数据。",items:[{key:"road-network-monitoring",title:"路网运行监测工程",description:"对接路网运行监测工程，获取气象实况与预警、航道视频、水位流量、航标及船闸运行数据。",interfaces:["气象实况数据","天气预警数据","航道视频","水位与流量","航标与船闸状态"],authMode:"厅内数据交换网关 + IP 白名单",docKey:"design-external",compareKey:"external"},{key:"safety-emergency-platform",title:"安全应急协同平台（一期）",description:"对接一期安全应急协同平台，实现应急资源、事故信息、隐患数据、三防态势与一张图数据互通。",interfaces:["应急资源同步","事故信息同步","隐患数据同步","三防态势同步","一张图数据同步"],authMode:"厅内网关 Token + 数据分级授权",docKey:"design-external",compareKey:"external"}]}],sourceNote:"外部系统与接口能力梳理自初步设计 5.4.1.8「外部系统接口对接」与需求规格 3.8.4.8「外部系统接口对接」；鉴权方式综合需规接口描述与现有技术批注整理，具体以对接联调方案为准。"},gc={domains:[{key:"ai",title:"AI 能力系统"},{key:"map",title:"地图引擎能力"},{key:"video",title:"视频监控能力"},{key:"comm",title:"融合通信能力"},{key:"service",title:"融合服务"},{key:"data",title:"应急数据采集与交换"},{key:"portal",title:"应急融合服务门户"},{key:"external",title:"外部系统接口对接"}],rows:[{key:"super-admin",role:"总管理员",org:"政务服务和应急指挥中心",scope:"8 个能力域全权限管理",access:{ai:"manage",map:"manage",video:"manage",comm:"manage",service:"manage",data:"manage",portal:"manage",external:"manage"}},{key:"center-duty-office",role:"政急中心科室值班人员",org:"政务服务和应急指挥中心",scope:"知识调用、态势查看、会议协同与数据查看",access:{ai:"view",map:"view",video:"view",comm:"view",service:"view",data:"view",portal:"view",external:"view"}},{key:"center-duty-room",role:"政急中心值班室值班人员",org:"政务服务和应急指挥中心",scope:"公开知识、基础态势与授权画面查看",access:{ai:"view",map:"view",video:"view",comm:"view",service:"none",data:"none",portal:"view",external:"none"}},{key:"tech-support",role:"技术保障人员",org:"政务服务和应急指挥中心",scope:"模型部署、服务配置、设备接入与接口调试",access:{ai:"configure",map:"configure",video:"configure",comm:"configure",service:"configure",data:"configure",portal:"configure",external:"configure"}},{key:"general-user",role:"普通用户",org:"政务服务和应急指挥中心",scope:"公开知识、公共交通态势与开放画面查看",access:{ai:"view",map:"view",video:"view",comm:"none",service:"none",data:"none",portal:"view",external:"none"}},{key:"external-admin",role:"外部单位管理员",org:"省公路 / 航道事务中心、省交通集团等",scope:"本领域业务数据上报、同步与管理",access:{ai:"none",map:"view",video:"view",comm:"none",service:"view",data:"manage",portal:"view",external:"view"}},{key:"external-user",role:"外部单位普通用户",org:"省公路 / 航道事务中心、省交通集团等",scope:"本领域态势、授权画面与公开数据查看",access:{ai:"none",map:"view",video:"view",comm:"none",service:"none",data:"view",portal:"view",external:"none"}},{key:"city-admin",role:"地市管理员",org:"各地市交通运输局、公路事务中心",scope:"本市 / 辖区数据汇聚上报与资源调用",access:{ai:"none",map:"view",video:"view",comm:"view",service:"view",data:"configure",portal:"view",external:"view"}},{key:"city-user",role:"地市普通用户",org:"各地市交通运输局、公路事务中心",scope:"航道运行态势、授权视频与公开数据查看",access:{ai:"none",map:"view",video:"view",comm:"none",service:"none",data:"view",portal:"view",external:"none"}}],sourceNote:"角色、机构与权限描述取自需求规格 3.8.3「业务角色一览表」；能力域口径对齐 3.8.2 功能描述表与初步设计 5.4.1 的 8 大能力域。原文未明确的权限按只读（view）或无权限（none）保守映射。"},_c={items:[{key:"ops-collect",title:"数据采集汇聚服务",category:"数据采集汇聚",workload:26,deliverables:["数据资源对接需求汇总表","数据采集汇聚库设计","数据采集汇聚运营报告"],description:"通过库表、接口、数据导入等方式汇聚厅内业务协同平台、省直和地市相关部门、交通行业企事业单位数据表不少于 200 张，覆盖需求分析、资源申请、汇聚库设计、采集对接、任务建立与入库检查。",docKey:"ops-collect"},{key:"ops-standard",title:"数据标准化治理服务",category:"标准化治理",workload:49,deliverables:["应急调度业务元数据规范","应急调度业务质检规则库设计","应急调度业务数据转换清洗报告","应急调度业务数据质量报告"],description:"按元数据标准 3 + 质检规则 6 + 数据转换清洗 30 + 质量评估 10 拆分，建立不少于 20 条数据质量规则、200 个数据转换清洗任务，并对不少于 5 个业务系统开展数据质量评估。",docKey:"ops-standard"},{key:"ops-base",title:"基础库运营服务",category:"基础库运营",workload:18.5,libraryCount:4,deliverables:["应急调度主数据标准规范","应急调度主数据库设计","应急调度主数据质量报告"],description:"建设应急装备信息库、应急终端信息库、应急指挥通讯组织库、应急指挥通讯人员库 4 个基础库，统一主数据标准、数据库设计与主数据服务。",docKey:"ops-base"},{key:"ops-topic",title:"主题库运营服务",category:"主题库运营",workload:39,libraryCount:4,deliverables:["应急调度主题库数据库设计","应急调度主题库数据质量报告"],description:"建设应急装备物资、应急预案、应急知识、应急指挥调度 4 个主题库，完成跨部门、多源异构数据的调研梳理、模型设计与抽取融合。",docKey:"ops-topic"},{key:"ops-special",title:"专题库运营服务",category:"专题库运营",workload:67.5,libraryCount:7,deliverables:["应急调度专题库数据库设计","应急调度专题库数据质量报告"],description:"建设公路大客流大货流、航道、海峡办、重点路段、恶劣天气、重点保障工作、重点车辆监测 7 个专题库，支撑专题应用与数据指标开发。",docKey:"ops-special"}],totalWorkload:200,sourceNote:"工作量与库数量口径来源于初步设计 5.4.2.3 数据融合治理运营服务（5.4.2.3.1 ~ 5.4.2.3.5）；总工作量 200 人月，数据库 / 专题库 15 个，交付物 14 份。"},bc={class:"fusion-design-page"},wc={class:"fd-header"},Kc={class:"fd-brand"},Pc={class:"fd-title"},xc={class:"fd-title-main"},$c=["title"],Sc={class:"fd-subtitle-label"},qc={class:"fd-subtitle-text"},Ac={class:"fd-nav"},Rc={class:"fd-tab"},Tc=U({__name:"FusionDesignView",setup(c){const f={overview:ne,mindmap:cs,compare:Zs,design:yn,requirements:Xs,dataflow:gn,integrations:qn,functions:Js,roles:rs,quality:Gn,effort:us},{activeView:t,viewOptions:O,moreViewItems:A,primaryViewValue:K,isPrimaryView:H,currentViewLabel:w,currentViewIcon:q,viewIcon:E,activeDesignDocKey:_,activeRequirementDocKey:i,activeCompareKey:k,handlePrimaryView:I,handleMoreView:m,handleOpenDoc:v,handleOpenMindmap:D,handleBack:b}=oe({key:"fusion",views:qs,icons:f,designSections:ji,requirementSections:sa,compareKeys:Pn.map(R=>R.key),requirementPrefix:"req-spec-"}),u=L(()=>t.value==="requirements"?"数据融合子系统需求规格":t.value==="compare"?"数据融合设计比对":t.value==="dataflow"?"数据治理链路":t.value==="integrations"?"外部系统接口全景":t.value==="functions"?"功能点交付矩阵":t.value==="roles"?"角色权限矩阵":t.value==="quality"?"批注与质量":t.value==="effort"?"实施与工作量":"数据融合子系统初步设计方案"),e=L(()=>t.value==="requirements"?"需求规格说明书 V1.8 · 第 3 章 3.8 数据融合子系统":t.value==="compare"?"初设 5.4.1 ↔ 需求规格 3.8.4 · 按能力模块查看功能点落点":t.value==="mindmap"?"八大能力域 · 功能模块与功能点全景导图":t.value==="design"?"项目初步设计原文 · 第 3 章 3.2.7 / 第 5 章 5.4.1":t.value==="dataflow"?"多源采集 → 标准化治理 → 基础库 / 主题库 / 专题库 → 服务与 AI":t.value==="integrations"?"统一用户、认证、短信、地图、密码与部省平台对接全景":t.value==="functions"?"需求功能点 × 初设模块 × 覆盖关系 × 批注情况":t.value==="roles"?"业务角色 × 八大能力域 · 权限范围一览":t.value==="quality"?"技术批注、术语、错别字与关联批注质量总览":t.value==="effort"?"五类治理服务的工作量、库数量与交付物":"项目初步设计 · 定位、能力域与建设目标"),P=L(()=>t.value==="design"||t.value==="requirements"?"来源说明":H.value?"内容概要":"视角说明");return(R,Q)=>{const en=rn,S=pn,N=$s,V=Ss;return l(),d("div",bc,[n("header",wc,[n("div",Kc,[p(S,{link:"",class:"fd-back",onClick:r(b)},{default:y(()=>[p(en,null,{default:y(()=>[p(r(Ys))]),_:1}),Q[3]||(Q[3]=g(" 返回 ",-1))]),_:1},8,["onClick"]),Q[6]||(Q[6]=n("div",{class:"fd-divider"},null,-1)),n("div",Pc,[n("div",xc,[Q[4]||(Q[4]=n("i",{class:"fd-title-mark"},null,-1)),n("h1",null,s(u.value),1),Q[5]||(Q[5]=n("span",{class:"fd-badge"},"NEW",-1))]),n("p",{class:"fd-subtitle",title:e.value},[n("span",Sc,s(P.value),1),n("span",qc,s(e.value),1)],8,$c)])]),n("nav",Ac,[p(N,{class:"fd-tabs","model-value":r(K),options:r(O),"onUpdate:modelValue":r(I)},{default:y(({item:B})=>[n("span",Rc,[p(en,null,{default:y(()=>[(l(),W(_n(r(E)(B.value))))]),_:2},1024),g(" "+s(B.label),1)])]),_:1},8,["model-value","options","onUpdate:modelValue"]),p(V,{items:r(A),trigger:"click",placement:"bottom-end",onCommand:r(m)},{default:y(()=>[p(S,{link:"",class:ln(["fd-more-trigger",{"is-active":!r(H)}])},{default:y(()=>[p(en,null,{default:y(()=>[(l(),W(_n(r(q))))]),_:1}),n("span",null,s(r(H)?"更多视角":r(w)),1),p(en,null,{default:y(()=>[p(r(js))]),_:1})]),_:1},8,["class"])]),_:1},8,["items","onCommand"])])]),n("main",{class:ln(["fd-body",{"fd-body-fixed":r(t)!=="overview"}])},[r(t)==="overview"?(l(),W(Ne,{key:0,overview:r(ss),capabilities:r(es),operations:r(ts),"capability-stats":r(ls),totals:r(is),onOpenDoc:r(v),onOpenMindmap:r(D)},null,8,["overview","capabilities","operations","capability-stats","totals","onOpenDoc","onOpenMindmap"])):r(t)==="mindmap"?(l(),W(Dt,{key:1,data:r(zn),overview:r(ss),capabilities:r(es),operations:r(ts),"compare-items":r(Pn),"capability-stats":r(ls),stats:r(is)},null,8,["data","overview","capabilities","operations","compare-items","capability-stats","stats"])):r(t)==="compare"?(l(),W(Xt,{key:2,"active-key":r(k),"onUpdate:activeKey":Q[0]||(Q[0]=B=>Ln(k)?k.value=B:null),items:r(Pn),onOpenDoc:r(v)},null,8,["active-key","items","onOpenDoc"])):r(t)==="design"?(l(),W(Zn,{key:3,"doc-key":r(_),"onUpdate:docKey":Q[1]||(Q[1]=B=>Ln(_)?_.value=B:null),groups:r(Qn),annotations:r(tn),"source-label":"初设原文","default-view-mode":"annotate",onOpenDoc:r(v)},null,8,["doc-key","groups","annotations","onOpenDoc"])):r(t)==="requirements"?(l(),W(Zn,{key:4,"doc-key":r(i),"onUpdate:docKey":Q[2]||(Q[2]=B=>Ln(i)?i.value=B:null),groups:r(Bn),annotations:r(tn),"source-label":"需求规格","default-view-mode":"annotate","show-content-legend":!0,onOpenDoc:r(v)},null,8,["doc-key","groups","annotations","onOpenDoc"])):r(t)==="dataflow"?(l(),W(kl,{key:5,data:r(Ic),onOpenDoc:r(v)},null,8,["data","onOpenDoc"])):r(t)==="integrations"?(l(),W(ni,{key:6,data:r(kc),onOpenDoc:r(v)},null,8,["data","onOpenDoc"])):r(t)==="functions"?(l(),W(si,{key:7,items:r(Pn),annotations:r(tn),onOpenDoc:r(v)},null,8,["items","annotations","onOpenDoc"])):r(t)==="roles"?(l(),W(gi,{key:8,data:r(gc),onOpenDoc:r(v)},null,8,["data","onOpenDoc"])):r(t)==="quality"?(l(),W(Ga,{key:9,onOpenDoc:r(v)},null,8,["onOpenDoc"])):r(t)==="effort"?(l(),W(vc,{key:10,data:r(_c),onOpenDoc:r(v)},null,8,["data","onOpenDoc"])):J("",!0)],2)])}}}),Hc=cn(Tc,[["__scopeId","data-v-30daff85"]]);export{Hc as default};

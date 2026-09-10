import{aP as de,bI as pe,m as ie,aQ as le,aa as Z,bJ as Me,d as G,am as ge,s as Qe,ar as Je,q as Ee,bK as Ze,bw as et,bx as tt,R as ke,a as z,aK as nt,aI as Se,bl as ot,as as Ue,b9 as at,n as he,b6 as it,u as Ne,bL as rt,ae as st,bM as lt,r as dt,ac as ct,aG as Ie,bN as ut,bO as _t,bd as pt,au as vt,$ as mt,aT as yt,b5 as ht,z as ft,ag as gt,bP as Nt}from"./element-plus-Bt8i1BPk.js";import{a as re,aL as Ct,aM as Ae,aN as Ot,aO as Lt,y as ue,d as Y,F as Tt,aP as bt,ar as _e,aQ as we,B as De,t as Re,f as Mt,aR as Et,aS as kt,z as Te,O as x}from"./index-BQSjtNr4.js";import{G as W,p as N,d as Ce,L as s,O as V,W as a,P as e,a0 as t,u as l,$ as o,_ as A,M as L,F as q,ae as P,S as ce,Z as J,R as Oe,Y as Le,c as X,n as ve,m as St,aA as $e,aj as xe}from"./vue-vendor-CrWx_I7L.js";/* empty css                     */import{D as Ut}from"./DailyReportDrawer-CnOs6Dyu.js";import{w as me,a as be}from"./process-DrmXocuM.js";import"./markdown-BUTMf7eB.js";import"./editor-CMUCu6Rk.js";import"./ol-map-DY4XWb27.js";import"./reportData-BITD0uGY.js";import"./report-HTXm7QqA.js";const fe="王小明",It={name:"白班",time:"08:00 - 18:00",startHour:8,endHour:18},ye=[{id:"normal",name:"常规白班交接",description:"适用于日常无重大事件的平稳交接",icon:de,color:"linear-gradient(135deg, #fbbf24, #f59e0b)",itemCount:4,useCount:128,sections:[{key:"followUp",content:"暂无待跟进事项。"},{key:"workRequirements",content:"请持续关注系统告警监控，按时完成日报填报。"},{key:"inspectionContent",content:"已完成 4 次例行巡检，设备运行正常。"},{key:"others",content:"空调温度偏低，已联系物业处理。"}]},{id:"night",name:"夜间值班交接",description:"适用于夜班值守，重点关注安防和告警",icon:pe,color:"linear-gradient(135deg, #6366f1, #4f46e5)",itemCount:5,useCount:86,sections:[{key:"followUp",content:"需关注 XX 系统的夜间数据同步任务。"},{key:"workRequirements",content:"夜间重点关注安防监控、消防告警、机房温湿度。"},{key:"inspectionContent",content:"已完成机房夜巡，UPS 设备运行正常。"},{key:"handoverItems",content:"门禁卡、对讲机、值班手机各 1 台。"},{key:"others",content:"夜间值班室空调已开启至 24℃。"}]},{id:"event",name:"应急事件交接",description:"发生应急事件后的专项交接",icon:ie,color:"linear-gradient(135deg, #ef4444, #dc2626)",itemCount:6,useCount:23,sections:[{key:"followUp",content:"XX 事件已启动二级响应，处置进度 60%，预计 22:00 前完成。"},{key:"importantMatters",content:"XX 突发事故：现场已封锁，救援力量已到位，需持续关注舆情。"},{key:"workRequirements",content:"持续跟踪事件进展，每 30 分钟向上级汇报一次。"},{key:"inspectionContent",content:"已完成现场周边 3 次巡查，次生风险可控。"},{key:"handoverItems",content:"现场指挥记录本、应急通讯设备、事件档案。"},{key:"others",content:"已通知应急办、宣传部门做好对接准备。"}]},{id:"maintenance",name:"维保专项交接",description:"设备设施维保期间的交接",icon:le,color:"linear-gradient(135deg, #10b981, #059669)",itemCount:4,useCount:45,sections:[{key:"followUp",content:"XX 设备维保进行中，预计次日下午 17:00 完成。"},{key:"importantMatters",content:"维保期间相关功能降级，请知会相关业务部门。"},{key:"workRequirements",content:"配合维保人员做好现场监护，发现异常立即上报。"},{key:"handoverItems",content:"维保工作票、临时出入证、监护记录本。"}]},{id:"drill",name:"演练专项交接",description:"完成演练后的总结交接",icon:Z,color:"linear-gradient(135deg, #8b5cf6, #7c3aed)",itemCount:3,useCount:18,sections:[{key:"importantMatters",content:"完成 XX 科目演练，参演 XX 人，整体顺利。"},{key:"workRequirements",content:"整理演练评估材料，按时报送演练总结报告。"},{key:"others",content:"演练中发现 XX 流程待优化，已记录在册。"}]},{id:"custom",name:"自定义模板",description:"根据历史交接习惯自动推荐",icon:Me,color:"linear-gradient(135deg, #06b6d4, #0891b2)",itemCount:5,useCount:67,sections:[{key:"followUp",content:"基于近 7 天交接习惯自动生成，请确认后使用。"},{key:"workRequirements",content:"请关注 XX、XX 两个重点工作的进展。"},{key:"inspectionContent",content:"本周已完成 XX 次巡检，整体设备正常。"},{key:"handoverItems",content:"常规交接物品齐全。"},{key:"others",content:"暂无其他事项。"}]},{id:"weekend",name:"周末值班交接",description:"适用于周末值班，关注人员轮换",icon:de,color:"linear-gradient(135deg, #f97316, #ea580c)",itemCount:4,useCount:52,sections:[{key:"followUp",content:"周末期间需关注值班人员到岗情况。"},{key:"workRequirements",content:"确保周末值班电话畅通，应急响应及时。"},{key:"inspectionContent",content:"已完成周末安全巡查，无异常。"},{key:"others",content:"周末食堂供餐时间已调整。"}]},{id:"holiday",name:"节假日专项交接",description:"适用于重大节假日前后交接",icon:ie,color:"linear-gradient(135deg, #ec4899, #db2777)",itemCount:6,useCount:38,sections:[{key:"followUp",content:"节假日期间值班安排已确认，人员全部到岗。"},{key:"importantMatters",content:"重点路段已加强巡查，应急物资已备齐。"},{key:"workRequirements",content:"严格执行领导带班制度，确保信息畅通。"},{key:"inspectionContent",content:"已完成节前安全大检查，发现的问题已整改。"},{key:"handoverItems",content:"值班手机、对讲机、应急钥匙已清点。"},{key:"others",content:"节后需提交节假日值班总结报告。"}]},{id:"equipment",name:"设备巡检交接",description:"适用于设备设施巡检后交接",icon:le,color:"linear-gradient(135deg, #14b8a6, #0d9488)",itemCount:5,useCount:31,sections:[{key:"followUp",content:"XX 设备巡检完成，运行状态正常。"},{key:"importantMatters",content:"发现 1 处轻微异常，已记录并安排处理。"},{key:"workRequirements",content:"请继续关注设备运行参数变化。"},{key:"inspectionContent",content:"本次巡检覆盖全部关键设备，未发现重大隐患。"},{key:"handoverItems",content:"巡检记录表、设备状态报告。"}]},{id:"training",name:"培训演练交接",description:"适用于培训或演练结束后交接",icon:Z,color:"linear-gradient(135deg, #8b5cf6, #7c3aed)",itemCount:4,useCount:22,sections:[{key:"importantMatters",content:"完成 XX 培训科目，参演人员 XX 人。"},{key:"workRequirements",content:"整理培训考核材料，报送培训总结。"},{key:"inspectionContent",content:"培训设备已归位，场地已清理。"},{key:"others",content:"培训中发现的问题已记录在册。"}]},{id:"special",name:"特殊事件交接",description:"适用于特殊事件处置后交接",icon:ie,color:"linear-gradient(135deg, #ef4444, #dc2626)",itemCount:5,useCount:15,sections:[{key:"followUp",content:"XX 事件已处置完毕，后续跟踪中。"},{key:"importantMatters",content:"事件影响已消除，恢复正常秩序。"},{key:"workRequirements",content:"持续关注事件后续发展，做好舆情监测。"},{key:"inspectionContent",content:"已完成现场复查，无遗留问题。"},{key:"others",content:"事件报告已提交，等待审批。"}]},{id:"daily",name:"日常白班交接",description:"适用于日常白班工作交接",icon:de,color:"linear-gradient(135deg, #22c55e, #16a34a)",itemCount:4,useCount:95,sections:[{key:"followUp",content:"今日待办事项已全部完成。"},{key:"workRequirements",content:"请关注明日工作安排，提前做好准备。"},{key:"inspectionContent",content:"已完成日常巡检，设备运行正常。"},{key:"others",content:"办公室卫生已清理。"}]},{id:"nightShift",name:"夜班专项交接",description:"适用于夜班值守，重点关注安防",icon:pe,color:"linear-gradient(135deg, #6366f1, #4f46e5)",itemCount:5,useCount:73,sections:[{key:"followUp",content:"夜间监控系统运行正常，无异常告警。"},{key:"importantMatters",content:"机房温湿度正常，UPS 电池状态良好。"},{key:"workRequirements",content:"继续加强夜间巡查，确保安全。"},{key:"inspectionContent",content:"已完成 3 次夜间巡逻，未发现异常。"},{key:"handoverItems",content:"值班手机、门禁卡、手电筒。"}]},{id:"flood",name:"防汛专项交接",description:"适用于汛期防汛值班交接",icon:le,color:"linear-gradient(135deg, #0ea5e9, #0284c7)",itemCount:6,useCount:28,sections:[{key:"followUp",content:"当前水位正常，未超过警戒线。"},{key:"importantMatters",content:"气象预报明日有暴雨，需提前做好准备。"},{key:"workRequirements",content:"加强排水设施巡查，确保排水畅通。"},{key:"inspectionContent",content:"已完成防汛物资盘点，数量充足。"},{key:"handoverItems",content:"防汛值班记录、水位监测数据。"},{key:"others",content:"防汛应急预案已更新，请查阅。"}]},{id:"meeting",name:"会议保障交接",description:"适用于重要会议保障后交接",icon:Z,color:"linear-gradient(135deg, #a855f7, #9333ea)",itemCount:4,useCount:41,sections:[{key:"importantMatters",content:"XX 会议圆满结束，保障任务完成。"},{key:"workRequirements",content:"整理会议纪要，报送相关部门。"},{key:"inspectionContent",content:"会议室设备已关闭，场地已清理。"},{key:"others",content:"会议资料已归档保存。"}]},{id:"inspection",name:"安全检查交接",description:"适用于安全检查后交接",icon:le,color:"linear-gradient(135deg, #f59e0b, #d97706)",itemCount:5,useCount:36,sections:[{key:"followUp",content:"安全检查已完成，发现 XX 项问题。"},{key:"importantMatters",content:"XX 项问题已整改，XX 项正在整改中。"},{key:"workRequirements",content:"跟踪整改进度，确保按时完成。"},{key:"inspectionContent",content:"检查记录已整理归档。"},{key:"others",content:"安全检查报告已提交。"}]},{id:"emergency",name:"应急响应交接",description:"适用于应急响应期间交接",icon:ie,color:"linear-gradient(135deg, #ef4444, #dc2626)",itemCount:6,useCount:19,sections:[{key:"followUp",content:"XX 应急响应已启动，处置工作进行中。"},{key:"importantMatters",content:"已通知相关部门，应急力量已到位。"},{key:"workRequirements",content:"每 30 分钟上报一次处置进展。"},{key:"inspectionContent",content:"已完成现场巡查，情况可控。"},{key:"handoverItems",content:"应急通讯录、处置记录本。"},{key:"others",content:"舆情监测正常，无负面报道。"}]},{id:"quarterly",name:"季度总结交接",description:"适用于季度工作总结交接",icon:Z,color:"linear-gradient(135deg, #64748b, #475569)",itemCount:4,useCount:12,sections:[{key:"importantMatters",content:"本季度值班工作顺利完成，无重大事件。"},{key:"workRequirements",content:"整理季度值班统计报表。"},{key:"inspectionContent",content:"值班记录已归档，设备状态良好。"},{key:"others",content:"下季度值班计划已制定。"}]},{id:"weeknight",name:"工作日晚间交接",description:"适用于工作日晚间值班交接",icon:pe,color:"linear-gradient(135deg, #7c3aed, #6d28d9)",itemCount:4,useCount:58,sections:[{key:"followUp",content:"晚间值班期间无异常情况。"},{key:"workRequirements",content:"请关注夜间系统运行状态。"},{key:"inspectionContent",content:"已完成晚间安全巡查。"},{key:"others",content:"值班室空调已调至节能模式。"}]},{id:"weather",name:"恶劣天气值班交接",description:"适用于暴雨、大雾等恶劣天气值班",icon:ie,color:"linear-gradient(135deg, #0891b2, #0e7490)",itemCount:5,useCount:34,sections:[{key:"followUp",content:"当前天气状况：XX，能见度 XX 米。"},{key:"importantMatters",content:"已启动恶劣天气应急预案，加强巡查。"},{key:"workRequirements",content:"密切关注天气变化，及时上报路况信息。"},{key:"inspectionContent",content:"已完成重点路段巡查，暂无异常。"},{key:"others",content:"应急物资已就位，救援力量待命。"}]}],At={class:"handover-top"},wt={class:"shift-card"},Dt={class:"shift-card-icon"},Rt={class:"shift-card-body"},$t={class:"shift-card-meta"},xt={class:"meta-tag meta-tag--primary"},Xt={class:"shift-time"},jt={class:"meta-text"},Vt={class:"receiver-card"},Ft={class:"receiver-avatar"},Ht={class:"receiver-name"},qt={class:"handover-tip"},Pt={class:"progress-strip"},Bt={class:"progress-stat"},zt={class:"progress-num"},Gt={class:"progress-stat"},Yt={class:"progress-num"},Wt={class:"progress-stat"},Kt={class:"progress-num"},Qt={class:"handover-body"},Jt={class:"section-nav"},Zt=["onClick"],en={class:"nav-index"},tn={class:"nav-title"},nn={key:0,class:"nav-dot"},on=["data-key"],an={class:"section-card-head"},rn={class:"section-card-title"},sn={class:"section-card-index"},ln={class:"section-card-name"},dn={class:"section-card-actions"},cn={class:"section-card-body"},un={class:"section-card-foot"},_n={class:"template-grid"},pn=["onClick"],vn={class:"template-card-body"},mn={class:"template-card-title"},yn={class:"template-card-desc"},hn={class:"template-card-meta"},fn=W({__name:"HandoverDrawer",props:{visible:{type:Boolean},receiverName:{}},emits:["update:visible","confirm","cancel"],setup(y,{emit:w}){let U=0;function T(i=""){return{id:`sub_${++U}_${Date.now().toString(36)}`,text:i}}const f=[{key:"followUp",title:"待跟进",placeholder:"请描述待跟进的事件、工作等，例如：XX 路段交通事故正在处置，需持续跟踪..."},{key:"importantMatters",title:"重要事项",placeholder:"请记录本班次发生的重大事件、决策、上级指示等..."},{key:"workRequirements",title:"工作要求",placeholder:"请列出对接班人员的工作安排、重点关注事项..."},{key:"inspectionContent",title:"检查内容",placeholder:"请描述本班次巡检情况、发现的问题等..."},{key:"handoverItems",title:"交接物品情况",placeholder:"请说明需交接的物品、文件、钥匙、印章等..."},{key:"others",title:"其他",placeholder:"其他需要说明的事项..."}];function b(){return f.map(i=>({key:i.key,title:i.title,items:[T()],files:[],placeholder:i.placeholder}))}const E=y,v=w,d=N(!1),m=N("https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"),C=N(!1),c=N([]),u=X({get:()=>E.visible,set:i=>v("update:visible",i)}),D=X(()=>{if(c.value.length>0){const i=c.value[0];return(i==null?void 0:i.memberName)||E.receiverName||fe}return E.receiverName||fe}),k=N(It),O=N(b()),R=N(!1),j=N(""),F=N({}),_=N(null),B=N("followUp"),ee=X(()=>{const i=new Date(new Date().setHours(k.value.startHour,0,0,0)),n=Math.max(0,Date.now()-i.getTime()),M=Math.floor(n/(1e3*60*60)),S=Math.floor(n%(1e3*60*60)/(1e3*60));return M>0?`${M} 小时 ${S} 分钟`:`${S} 分钟`}),te=X(()=>O.value.filter(i=>r(i)).length),ne=X(()=>O.value.reduce((i,n)=>i+n.files.length,0)),$=X(()=>f),g=X(()=>$.value.map(i=>({label:i.title,command:i.key})));function p(i,n){F.value[i]=n}function r(i){return i.items.some(n=>n.text.trim().length>0)||i.files.length>0}function I(i){const n=String(i),M=f.find(oe=>oe.key===n);if(!M)return;const S=O.value.filter(oe=>oe.key.startsWith(n)).length,H=S>0?`${n}_${S}`:n;O.value.push({key:H,title:M.title,items:[T()],files:[],placeholder:M.placeholder}),ve(()=>se(H))}function K(i){O.value.length<=1||O.value.splice(i,1)}async function se(i){B.value=i,await ve();const n=F.value[i];if(!n)return;const M=_.value;if(!M)return;const S=n.offsetTop-12;M.scrollHeight>M.clientHeight+4?M.scrollTo({top:S,behavior:"smooth"}):n.scrollIntoView({behavior:"smooth",block:"start"})}function Xe(){var M;if(!_.value)return;const i=_.value.scrollTop;let n=((M=O.value[0])==null?void 0:M.key)??"";for(const S of O.value){const H=F.value[S.key];H&&H.offsetTop-80<=i&&(n=S.key)}B.value=n}function je(){O.value=b()}function Ve(i){v("cancel"),i()}async function Fe(){var n,M;d.value=!0,await new Promise(S=>setTimeout(S,600));const i={receiverName:D.value,receiverId:(n=c.value[0])==null?void 0:n.id,receiverMobile:(M=c.value[0])==null?void 0:M.mobilePhone,sections:O.value.map(S=>({key:S.key,title:S.title,items:S.items.map(H=>({...H})),files:[...S.files],placeholder:S.placeholder}))};v("confirm",i),v("update:visible",!1),d.value=!1}function He(){C.value=!0}function qe(i){const n=Array.isArray(i)?i:[i];c.value=n}function Pe(){j.value=ye[0].id,R.value=!0}function Be(){const i=ye.find(n=>n.id===j.value);i&&(i.sections.forEach(n=>{const M=O.value.find(S=>S.key===n.key);!M||!n.content||(M.items.length===1&&M.items[0].text.trim()===""?M.items[0].text=n.content:M.items.push(T(n.content)))}),R.value=!1,z.success(`已套用「${i.name}」模板`))}return Ce(()=>E.visible,async i=>{var n;i&&(je(),c.value=[],await ve(),B.value=((n=O.value[0])==null?void 0:n.key)??"",_.value&&(_.value.scrollTop=0))}),(i,n)=>{const M=G,S=Qe,H=re,oe=Ct,ze=ke,Ge=Ae,Ye=Ot,We=Lt,Ke=ue;return s(),V(Ke,{modelValue:u.value,"onUpdate:modelValue":n[3]||(n[3]=h=>u.value=h),title:"交班登记",size:"920px",direction:"rtl","before-close":Ve,"confirm-text":d.value?"提交中...":"提交交班","cancel-text":"取消","on-confirm":Fe,loading:d.value},{default:a(()=>[e("div",At,[e("div",wt,[e("div",Dt,[t(M,{size:22},{default:a(()=>[t(l(ge))]),_:1})]),e("div",Rt,[n[5]||(n[5]=e("div",{class:"shift-card-title"},"本班次信息",-1)),e("div",$t,[e("span",xt,o(k.value.name),1),e("span",Xt,o(k.value.time),1),n[4]||(n[4]=e("span",{class:"meta-sep"},"|",-1)),e("span",jt,"当班时长 "+o(ee.value),1)])])]),e("div",Vt,[n[7]||(n[7]=e("span",{class:"receiver-label"},"接班人",-1)),e("span",Ft,[t(S,{size:28,src:m.value},null,8,["src"])]),e("span",Ht,o(D.value),1),t(H,{type:"primary",link:"",icon:l(Je),onClick:He},{default:a(()=>[...n[6]||(n[6]=[A("编辑",-1)])]),_:1},8,["icon"])]),e("div",qt,[t(M,{size:14},{default:a(()=>[t(l(Ee))]),_:1}),n[8]||(n[8]=e("span",null,"班组轮班中只允许一次交班，请完整填写各交接事项",-1))])]),e("div",Pt,[e("div",Bt,[e("span",zt,o(te.value),1),n[9]||(n[9]=e("span",{class:"progress-label"},"已填写",-1))]),n[14]||(n[14]=e("div",{class:"progress-divider"},null,-1)),e("div",Gt,[e("span",Yt,o(ne.value),1),n[10]||(n[10]=e("span",{class:"progress-label"},"附件",-1))]),n[15]||(n[15]=e("div",{class:"progress-divider"},null,-1)),e("div",Wt,[e("span",Kt,o(O.value.length),1),n[11]||(n[11]=e("span",{class:"progress-label"},"事项",-1))]),n[16]||(n[16]=e("div",{class:"progress-spacer"},null,-1)),t(H,{type:"primary",link:"",icon:l(Ze),onClick:Pe},{default:a(()=>[...n[12]||(n[12]=[A(" 一键套用模板 ",-1)])]),_:1},8,["icon"]),t(oe,{items:g.value,onCommand:I},{default:a(()=>[t(H,{type:"primary",link:"",icon:l(et)},{default:a(()=>[...n[13]||(n[13]=[A(" 新增事项 ",-1)])]),_:1},8,["icon"])]),_:1},8,["items"])]),e("div",Qt,[e("nav",Jt,[(s(!0),L(q,null,P(O.value,(h,ae)=>(s(),L("div",{key:h.key,class:ce(["nav-item",{"nav-item--active":B.value===h.key,"nav-item--filled":r(h)}]),onClick:Q=>se(h.key)},[e("span",en,o(String(ae+1).padStart(2,"0")),1),e("span",tn,o(h.title),1),r(h)?(s(),L("span",nn)):J("",!0)],10,Zt))),128))]),e("div",{ref_key:"bodyRef",ref:_,class:"section-list",onScroll:Xe},[(s(!0),L(q,null,P(O.value,(h,ae)=>(s(),L("div",{key:h.key,ref_for:!0,ref:Q=>p(h.key,Q),class:"section-card","data-key":h.key},[e("div",an,[e("div",rn,[e("span",sn,o(ae+1),1),e("span",ln,o(h.title),1)]),e("div",dn,[O.value.length>1?(s(),V(H,{key:0,type:"danger",link:"",icon:l(tt),onClick:Q=>K(ae)},{default:a(()=>[...n[17]||(n[17]=[A(" 删除 ",-1)])]),_:1},8,["icon","onClick"])):J("",!0)])]),e("div",cn,[t(ze,{modelValue:h.items[0].text,"onUpdate:modelValue":Q=>h.items[0].text=Q,placeholder:h.placeholder||"请输入事项内容...",maxlength:500,type:"textarea",autosize:{minRows:3,maxRows:8},clearable:""},null,8,["modelValue","onUpdate:modelValue","placeholder"]),e("div",un,[t(Ge,{modelValue:h.files,"onUpdate:modelValue":Q=>h.files=Q,accept:".rar,.zip,.doc,.docx,.pdf,.jpg,.jpeg,.png","file-size":10,limit:5,multiple:"","button-text":"上传附件",tip:"支持 .rar .zip .doc .docx .pdf .jpg .png，单文件 ≤ 10MB","list-type":"text"},null,8,["modelValue","onUpdate:modelValue"])])])],8,on))),128))],544)]),t(Ye,{modelValue:R.value,"onUpdate:modelValue":n[0]||(n[0]=h=>R.value=h),title:"选择交接模板",width:"560px","on-confirm":Be},{default:a(()=>[e("div",_n,[(s(!0),L(q,null,P(l(ye),h=>(s(),L("div",{key:h.id,class:ce(["template-card",{"template-card--active":j.value===h.id}]),onClick:ae=>j.value=h.id},[e("div",{class:"template-card-icon",style:Oe({background:h.color})},[t(M,{size:20},{default:a(()=>[(s(),V(Le(h.icon)))]),_:2},1024)],4),e("div",vn,[e("div",mn,o(h.name),1),e("div",yn,o(h.description),1),e("div",hn,[e("span",null,o(h.itemCount)+" 项",1),n[18]||(n[18]=e("span",{class:"meta-sep"},"·",-1)),e("span",null,"已使用 "+o(h.useCount)+" 次",1)])])],10,pn))),128))])]),_:1},8,["modelValue"]),t(We,{visible:C.value,"onUpdate:visible":n[1]||(n[1]=h=>C.value=h),title:"选择接班人",width:"880px",selected:c.value,"only-joined":"",onSelect:n[2]||(n[2]=h=>qe(h))},null,8,["visible","selected"])]),_:1},8,["modelValue","confirm-text","loading"])}}}),gn=Y(fn,[["__scopeId","data-v-de4dfaf7"]]),Nn={class:"receive-hero"},Cn={class:"hero-left"},On={class:"hero-meta"},Ln={class:"hero-title"},Tn={class:"hero-handover-person"},bn={class:"hero-date"},Mn={class:"hero-sub"},En={class:"hero-tip"},kn={class:"receive-body"},Sn={class:"section-card-header"},Un={class:"section-index"},In={class:"section-title"},An={class:"section-card-body"},wn={class:"readonly-content"},Dn={class:"readonly-text"},Rn={key:0,class:"attachments-area"},$n={class:"attachment-label"},xn={class:"attachment-list"},Xn={class:"file-name"},jn=W({__name:"ReceiveDrawer",props:{visible:{type:Boolean},handoverData:{}},emits:["update:visible","confirm"],setup(y,{emit:w}){const U=y,T=w,f=N(!1),b=N([]),E=X({get:()=>U.visible,set:m=>T("update:visible",m)});Ce([()=>U.visible,()=>U.handoverData],([m,C])=>{m&&(b.value=C.sections.map(c=>({...c,files:[...c.files]})))},{immediate:!0,deep:!0});async function v(){f.value=!0,await new Promise(m=>setTimeout(m,600)),T("confirm",{sections:b.value.map(m=>({...m,files:[...m.files]}))}),T("update:visible",!1),f.value=!1}function d(m){z.info(`下载文件：${m.name}`)}return(m,C)=>{const c=G,u=re,D=ue;return s(),V(D,{modelValue:E.value,"onUpdate:modelValue":C[0]||(C[0]=k=>E.value=k),title:"接班",size:"820px",direction:"rtl","confirm-text":f.value?"确认中...":"确认接班","cancel-text":"取消","on-confirm":v,loading:f.value,class:"receive-drawer"},{default:a(()=>[e("div",Nn,[e("div",Cn,[t(c,{class:"hero-icon"},{default:a(()=>[t(l(nt))]),_:1}),e("div",On,[e("div",Ln,[e("span",Tn,o(y.handoverData.handoverPerson),1),C[1]||(C[1]=e("span",{class:"hero-sep"},"·",-1)),e("span",bn,o(y.handoverData.handoverDate),1)]),e("div",Mn,"已交接 "+o(y.handoverData.sections.length)+" 项记录，请仔细确认后接班",1)])]),e("div",En,[t(c,null,{default:a(()=>[t(l(Ee))]),_:1}),C[2]||(C[2]=e("span",null,"班组轮班中，仅允许一次接班",-1))])]),e("div",kn,[(s(!0),L(q,null,P(b.value,(k,O)=>(s(),L("div",{key:k.key,class:ce(["section-card",{"section-card--primary":O===0}])},[e("div",Sn,[e("span",Un,o(O+1),1),e("span",In,o(k.title),1),C[3]||(C[3]=e("span",{class:"section-tag"},"交班记录",-1))]),e("div",An,[e("div",wn,[t(c,{class:"readonly-icon"},{default:a(()=>[t(l(Me))]),_:1}),e("div",Dn,o(k.content||"无内容"),1)]),k.files.length>0?(s(),L("div",Rn,[e("div",$n,[t(c,null,{default:a(()=>[t(l(Se))]),_:1}),e("span",null,"附件（"+o(k.files.length)+"）",1)]),e("ul",xn,[(s(!0),L(q,null,P(k.files,(R,j)=>(s(),L("li",{key:`${R.id}-${j}`,class:"attachment-item"},[t(c,{class:"attachment-icon"},{default:a(()=>[t(l(Z))]),_:1}),e("span",Xn,o(R.name),1),t(u,{link:"",type:"primary",icon:l(ot),size:"small",onClick:F=>d(R)},{default:a(()=>[...C[4]||(C[4]=[A(" 下载 ",-1)])]),_:1},8,["icon","onClick"])]))),128))])])):J("",!0)])],2))),128))])]),_:1},8,["modelValue","confirm-text","loading"])}}}),Vn=Y(jn,[["__scopeId","data-v-41925de3"]]),Fn={class:"drawer-hero"},Hn={class:"field-card"},qn={class:"field-card-body"},Pn={class:"field-card"},Bn={class:"field-card-body"},zn={class:"field-card"},Gn={class:"field-card-body"},Yn={class:"field-card"},Wn={class:"field-card-body"},Kn={class:"field-card"},Qn={class:"field-card-body"},Jn=W({__name:"DutyRecordDrawer",props:{visible:{type:Boolean}},emits:["update:visible","confirm"],setup(y,{emit:w}){const U=y,T=w,f=N(),b=N(!1),E=()=>({workSummary:"",importantMatters:"",eventType:"",other:"",files:[]}),v=St(E()),d=X({get:()=>U.visible,set:c=>T("update:visible",c)});Ce(()=>U.visible,c=>{c||m()});function m(){var c;(c=f.value)==null||c.clearValidate(),Object.assign(v,E())}async function C(){b.value=!0,await new Promise(c=>setTimeout(c,600)),T("confirm",{workSummary:v.workSummary,importantMatters:v.importantMatters,eventType:v.eventType,other:v.other,files:[...v.files]}),T("update:visible",!1),b.value=!1}return(c,u)=>{const D=G,k=ke,O=Tt,R=Ae,j=at,F=ue;return s(),V(F,{modelValue:d.value,"onUpdate:modelValue":u[5]||(u[5]=_=>d.value=_),title:"值班记录填报",direction:"rtl",size:"800px","confirm-text":b.value?"提交中...":"提交记录","cancel-text":"取消","on-confirm":C,loading:b.value,class:"duty-record-drawer"},{default:a(()=>[e("div",Fn,[t(D,{class:"hero-icon"},{default:a(()=>[t(l(Ue))]),_:1}),u[6]||(u[6]=e("div",{class:"hero-text"},[e("div",{class:"hero-title"},"值班记录填报"),e("div",{class:"hero-sub"},"快速记录今日工作内容，便于交接班查阅")],-1))]),t(j,{ref_key:"formRef",ref:f,model:v,"label-position":"top",class:"record-form"},{default:a(()=>[e("div",Hn,[u[7]||(u[7]=e("div",{class:"field-card-head"},[e("div",{class:"field-title-group"},[e("span",{class:"field-index"},"1"),e("span",{class:"field-name"},"工作总结")]),e("span",{class:"field-optional-tag"},"选填")],-1)),e("div",qn,[t(k,{modelValue:v.workSummary,"onUpdate:modelValue":u[0]||(u[0]=_=>v.workSummary=_),type:"textarea",placeholder:"请输入今日值班期间的工作总结",rows:4,maxlength:"500","show-word-limit":""},null,8,["modelValue"])])]),e("div",Pn,[u[8]||(u[8]=e("div",{class:"field-card-head"},[e("div",{class:"field-title-group"},[e("span",{class:"field-index"},"2"),e("span",{class:"field-name"},"重要事项")]),e("span",{class:"field-optional-tag"},"选填")],-1)),e("div",Bn,[t(k,{modelValue:v.importantMatters,"onUpdate:modelValue":u[1]||(u[1]=_=>v.importantMatters=_),type:"textarea",placeholder:"请输入重要事项或异常情况",rows:4,maxlength:"500","show-word-limit":""},null,8,["modelValue"])])]),e("div",zn,[u[9]||(u[9]=e("div",{class:"field-card-head"},[e("div",{class:"field-title-group"},[e("span",{class:"field-index"},"3"),e("span",{class:"field-name"},"事件类型")]),e("span",{class:"field-optional-tag"},"选填")],-1)),e("div",Gn,[t(O,{modelValue:v.eventType,"onUpdate:modelValue":u[2]||(u[2]=_=>v.eventType=_),placeholder:"下拉选择事件类型",options:l(bt),style:{width:"100%"}},null,8,["modelValue","options"])])]),e("div",Yn,[u[10]||(u[10]=e("div",{class:"field-card-head"},[e("div",{class:"field-title-group"},[e("span",{class:"field-index"},"4"),e("span",{class:"field-name"},"其他")]),e("span",{class:"field-optional-tag"},"选填")],-1)),e("div",Wn,[t(k,{modelValue:v.other,"onUpdate:modelValue":u[3]||(u[3]=_=>v.other=_),type:"textarea",placeholder:"请输入其他需要说明的内容",rows:3,maxlength:"500","show-word-limit":""},null,8,["modelValue"])])]),e("div",Kn,[u[11]||(u[11]=e("div",{class:"field-card-head"},[e("div",{class:"field-title-group"},[e("span",{class:"field-index"},"5"),e("span",{class:"field-name"},"上传文件")]),e("span",{class:"field-optional-tag"},"选填")],-1)),e("div",Qn,[t(R,{modelValue:v.files,"onUpdate:modelValue":u[4]||(u[4]=_=>v.files=_),"file-size":50,limit:5,accept:".rar,.zip,.doc,.docx,.pdf,.jpg,.jpeg,.png",tip:"支持格式：.rar .zip .doc .docx .pdf .jpg，单个文件不超过 50MB"},null,8,["modelValue"])])])]),_:1},8,["model"])]),_:1},8,["modelValue","confirm-text","loading"])}}}),Zn=Y(Jn,[["__scopeId","data-v-43906b32"]]),eo={class:"panel-header"},to={class:"panel-title"},no={class:"entry-grid"},oo=["onClick"],ao={class:"entry-icon"},io={class:"entry-text"},ro={class:"entry-label"},so={class:"entry-desc"},lo=W({__name:"QuickEntries",props:{entries:{},receiveHandoverData:{},todayDate:{default:""},currentUser:{default:""}},emits:["confirm-handover","cancel-handover","confirm-receive","cancel-receive","confirm-duty-record","cancel-duty-record","daily-report-save","daily-report-submit","daily-report-close"],setup(y,{expose:w,emit:U}){const T=y,f=U,b=$e(),E=N(!1),v=N(!1),d=N(!1),m=N(!1),C=X(()=>we("YYYY-MM-DD")),c=X(()=>({dutyDate:T.todayDate||C.value,dutyPersons:T.currentUser}));function u($){D($.action,$)}function D($,g){if(g&&"route"in g&&g.route){b.push(g.route);return}switch(g&&"label"in g&&!("handoverPerson"in g)&&!("handoverDate"in g)&&($=g.action),$){case"handover":E.value=!0;break;case"receive":if(g&&("handoverPerson"in g||"handoverDate"in g)){const p=g;p.handoverPerson&&(T.receiveHandoverData.handoverPerson=p.handoverPerson),p.handoverDate&&(T.receiveHandoverData.handoverDate=p.handoverDate)}v.value=!0;break;case"duty-record":d.value=!0;break;case"daily-report":m.value=!0;break}}function k($){f("confirm-handover",$)}function O(){f("cancel-handover")}function R($){f("confirm-receive",$)}function j(){f("cancel-receive")}function F($){f("confirm-duty-record",$)}function _(){f("cancel-duty-record")}function B(){f("daily-report-save")}function ee(){f("daily-report-submit")}function te(){f("daily-report-close")}function ne(){m.value=!1}return w({open:D,closeDailyReport:ne}),($,g)=>{const p=G,r=_e;return s(),L(q,null,[t(r,{class:"panel-card",shadow:"never"},{header:a(()=>[e("div",eo,[e("span",to,[t(p,{class:"panel-title-icon"},{default:a(()=>[t(l(it))]),_:1}),g[4]||(g[4]=A(" 快速填报入口 ",-1))]),g[5]||(g[5]=e("span",{class:"panel-subtitle"},"常用操作一键直达",-1))])]),default:a(()=>[e("div",no,[(s(!0),L(q,null,P(y.entries,I=>(s(),L("div",{key:I.label,class:"entry-card",style:Oe({"--entry-color":I.color}),onClick:K=>u(I)},[e("div",ao,[t(p,{size:22},{default:a(()=>[(s(),V(Le(I.icon)))]),_:2},1024)]),e("div",io,[e("div",ro,o(I.label),1),e("div",so,o(I.desc),1)]),t(p,{class:"entry-arrow"},{default:a(()=>[t(l(he))]),_:1})],12,oo))),128))])]),_:1}),t(gn,{visible:E.value,"onUpdate:visible":g[0]||(g[0]=I=>E.value=I),"receiver-name":l(fe),onConfirm:k,onCancel:O},null,8,["visible","receiver-name"]),t(Vn,{visible:v.value,"onUpdate:visible":g[1]||(g[1]=I=>v.value=I),"handover-data":y.receiveHandoverData,onConfirm:R,onCancel:j},null,8,["visible","handover-data"]),t(Zn,{visible:d.value,"onUpdate:visible":g[2]||(g[2]=I=>d.value=I),onConfirm:F,onCancel:_},null,8,["visible"]),t(Ut,{visible:m.value,"onUpdate:visible":g[3]||(g[3]=I=>m.value=I),record:c.value,onSave:B,onSubmit:ee,onClose:te},null,8,["visible","record"])],64)}}}),co=Y(lo,[["__scopeId","data-v-42ef7826"]]),uo={class:"panel-header"},_o={class:"panel-title"},po={key:0,class:"unfinished-list"},vo={class:"item-index"},mo={class:"item-content"},yo={class:"item-title"},ho={class:"item-meta"},fo={class:"meta-time"},go={class:"meta-creator"},No={key:0,class:"item-attachments"},Co={class:"item-action"},Oo=W({__name:"UnfinishedItems",props:{items:{}},emits:["complete"],setup(y,{emit:w}){const U=w;async function T(f){await Mt(`确认已完成"${f.title.substring(0,20)}..."？`)&&(U("complete",f),z.success("已标记为完成"))}return(f,b)=>{const E=G,v=Re,d=re,m=De,C=_e;return s(),V(C,{class:"panel-card",shadow:"never"},{header:a(()=>[e("div",uo,[e("span",_o,[t(E,{class:"panel-title-icon"},{default:a(()=>[t(l(rt))]),_:1}),b[0]||(b[0]=A(" 未办结重要工作事项 ",-1))]),t(v,{type:"danger",effect:"light",round:""},{default:a(()=>[A(o(y.items.length)+" 项待处理 ",1)]),_:1})])]),default:a(()=>[y.items.length>0?(s(),L("ul",po,[(s(!0),L(q,null,P(y.items,(c,u)=>(s(),L("li",{key:u,class:"unfinished-item"},[e("div",vo,o(String(u+1).padStart(2,"0")),1),e("div",mo,[e("div",yo,o(c.title),1),e("div",ho,[e("span",fo,[t(E,null,{default:a(()=>[t(l(ge))]),_:1}),A(" "+o(c.time),1)]),e("span",go,[t(E,null,{default:a(()=>[t(l(Ne))]),_:1}),A(" 由 "+o(c.creator)+" 创建 ",1)])]),c.attachments&&c.attachments.length>0?(s(),L("div",No,[(s(!0),L(q,null,P(c.attachments,(D,k)=>(s(),L("span",{key:k,class:"attachment-chip"},[t(E,null,{default:a(()=>[t(l(Se))]),_:1}),e("span",null,o(D.name),1)]))),128))])):J("",!0)]),e("div",Co,[t(d,{type:"primary",link:"",onClick:D=>T(c)},{default:a(()=>[...b[1]||(b[1]=[A(" 确定完成 ",-1)])]),_:1},8,["onClick"])])]))),128))])):(s(),V(m,{key:1,description:"暂无待办事项"}))]),_:1})}}}),Lo=Y(Oo,[["__scopeId","data-v-fa8cd9d3"]]),To={class:"panel-header"},bo={class:"panel-title"},Mo={class:"panel-header-right"},Eo={class:"panel-subtitle"},ko={class:"record-card"},So={class:"record-card-body"},Uo={class:"record-card-head"},Io={class:"record-title"},Ao={class:"record-date"},wo={class:"record-summary"},Do={class:"record-meta"},Ro={class:"meta-item"},$o={key:0,class:"meta-item"},xo={key:0,class:"record-card-action"},Xo={key:0,class:"other-record-detail"},jo={class:"detail-hero"},Vo={class:"detail-title"},Fo={class:"detail-time"},Ho={class:"detail-section"},qo={class:"detail-text"},Po={class:"detail-section"},Bo=W({__name:"TodayRecords",props:{records:{},record:{}},emits:["record-click","view-all","update:record"],setup(y,{emit:w}){const U=y,T=w,f=X(()=>{const d=U.record;return d?[{label:"记录编号",value:String(d.id),type:"code"},{label:"记录人",value:d.creater},{label:"记录时间",value:d.createTime,type:"code"},{label:"最近更新",value:`${d.updater} · ${d.updateTime}`}]:[]});function b(d){d||T("update:record",null)}function E(d){return Te(d,"HH:mm")}function v(d){return Te(d,"MM/DD")}return(d,m)=>{const C=G,c=re,u=Re,D=kt,k=Et,O=De,R=_e,j=xe("detail-list"),F=ue;return s(),L(q,null,[t(R,{class:"panel-card",shadow:"never"},{header:a(()=>[e("div",To,[e("span",bo,[t(C,{class:"panel-title-icon"},{default:a(()=>[t(l(lt))]),_:1}),m[1]||(m[1]=A(" 今日工作记录 ",-1))]),e("div",Mo,[e("span",Eo,"共 "+o(y.records.length)+" 条",1),t(c,{type:"primary",link:"",icon:l(he),onClick:m[0]||(m[0]=_=>T("view-all"))},{default:a(()=>[...m[2]||(m[2]=[A(" 查看全部 ",-1)])]),_:1},8,["icon"])])])]),default:a(()=>[y.records.length>0?(s(),V(k,{key:0,class:"records-timeline"},{default:a(()=>[(s(!0),L(q,null,P(y.records,_=>(s(),V(D,{key:_.id,type:l(me)[_.recordType],timestamp:E(_.createTime),placement:"top",class:ce(["record-timeline-item",{"record-timeline-item--clickable":_.recordType!=="other"}]),onClick:B=>T("record-click",_)},{default:a(()=>[e("div",ko,[e("div",So,[e("div",Uo,[t(u,{type:l(me)[_.recordType],size:"small",effect:"light",round:""},{default:a(()=>[A(o(l(be)[_.recordType]),1)]),_:2},1032,["type"]),e("span",Io,o(_.title),1),e("span",Ao,o(v(_.createTime)),1)]),e("div",wo,o(_.summary),1),e("div",Do,[e("span",Ro,[t(C,null,{default:a(()=>[t(l(Ne))]),_:1}),e("span",null,o(_.creater),1)]),_.relatedHandoverId?(s(),L("span",$o,[t(C,null,{default:a(()=>[t(l(st))]),_:1}),e("span",null,"交接单 #"+o(_.relatedHandoverId),1)])):J("",!0)])]),_.recordType!=="other"?(s(),L("div",xo,[t(C,{class:"action-arrow"},{default:a(()=>[t(l(he))]),_:1})])):J("",!0)])]),_:2},1032,["type","timestamp","class","onClick"]))),128))]),_:1})):(s(),V(O,{key:1,description:"今日暂无该类工作记录"}))]),_:1}),t(F,{"model-value":!!y.record,title:"工作记录详情",size:"520px",direction:"rtl","hide-footer":!0,"onUpdate:modelValue":b},{default:a(()=>[y.record?(s(),L("div",Xo,[e("div",jo,[t(u,{type:l(me)[y.record.recordType],size:"default",effect:"light",round:""},{default:a(()=>[A(o(l(be)[y.record.recordType]),1)]),_:1},8,["type"]),e("h3",Vo,o(y.record.title),1),e("div",Fo,o(y.record.createTime),1)]),e("div",Ho,[m[3]||(m[3]=e("div",{class:"detail-label"},"事项摘要",-1)),e("div",qo,o(y.record.summary),1)]),e("div",Po,[m[4]||(m[4]=e("div",{class:"detail-label"},"记录信息",-1)),t(j,{items:f.value,column:1},null,8,["items"])])])):J("",!0)]),_:1},8,["model-value"])],64)}}}),zo=Y(Bo,[["__scopeId","data-v-665dfef5"]]),Go={class:"panel-header"},Yo={class:"panel-title"},Wo={class:"panel-subtitle"},Ko={class:"stats-grid"},Qo={class:"stat-icon"},Jo={class:"stat-info"},Zo={class:"stat-value"},ea={class:"stat-label"},ta=W({__name:"WorkStats",props:{stats:{},title:{default:"我的工作统计"},subtitle:{default:"本年度累计"},historyLabel:{default:"查看历史交接班"}},emits:["view-history"],setup(y,{emit:w}){const U=w;return(T,f)=>{const b=G,E=re,v=_e;return s(),V(v,{class:"panel-card",shadow:"never"},{header:a(()=>[e("div",Go,[e("span",Yo,[t(b,{class:"panel-title-icon"},{default:a(()=>[t(l(ct))]),_:1}),A(" "+o(y.title),1)]),e("span",Wo,o(y.subtitle),1)])]),footer:a(()=>[t(E,{plain:"",class:"history-btn",onClick:f[0]||(f[0]=d=>U("view-history"))},{default:a(()=>[t(b,{size:16},{default:a(()=>[t(l(dt))]),_:1}),e("span",null,o(y.historyLabel),1)]),_:1})]),default:a(()=>[e("div",Ko,[(s(!0),L(q,null,P(y.stats,d=>(s(),L("div",{key:d.label,class:"stat-card",style:Oe({"--stat-color":d.color})},[e("div",Qo,[t(b,{size:18},{default:a(()=>[(s(),V(Le(d.icon)))]),_:2},1024)]),e("div",Jo,[e("div",Zo,o(d.value),1),e("div",ea,o(d.label),1)])],4))),128))])]),_:1})}}}),na=Y(ta,[["__scopeId","data-v-2ac891bd"]]),oa=`-- Table structure for duty_handover
-- ----------------------------
DROP TABLE IF EXISTS "public"."duty_handover";
CREATE TABLE "public"."duty_handover" (
  "handover_id" bigint NOT NULL,
  "schedule_rule_id" bigint,
  "handover_date" date NOT NULL,
  "handover_time" timestamp(6),
  "receiver_id" bigint,
  "receiver_name" varchar(128) COLLATE "pg_catalog"."default",
  "receiver_date" date,
  "receiver_time" timestamp(6),
  "handover_status" varchar(20) COLLATE "pg_catalog"."default" NOT NULL DEFAULT 'pending'::character varying,
  "status" integer NOT NULL DEFAULT 1101,
  "remark" varchar(500) COLLATE "pg_catalog"."default",
  "creater" varchar(64) COLLATE "pg_catalog"."default",
  "creater_id" bigint,
  "create_time" timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updater" varchar(64) COLLATE "pg_catalog"."default",
  "updater_id" bigint,
  "update_time" timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "creater_org_id" bigint,
  "creater_org_name" varchar(128) COLLATE "pg_catalog"."default",
  "deleted" smallint NOT NULL DEFAULT 0,
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer NOT NULL DEFAULT 1,
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer NOT NULL DEFAULT 1
)
;
ALTER TABLE "public"."duty_handover" OWNER TO "postgres";
COMMENT ON COLUMN "public"."duty_handover"."handover_id" IS '主键ID';
COMMENT ON COLUMN "public"."duty_handover"."schedule_rule_id" IS '排班规则ID（关联 duty_schedule_rule.id）';
COMMENT ON COLUMN "public"."duty_handover"."handover_date" IS '交班日期';
COMMENT ON COLUMN "public"."duty_handover"."handover_time" IS '交班时间';
COMMENT ON COLUMN "public"."duty_handover"."receiver_id" IS '接班人员ID（多个英文逗号分隔，冗余，明细见 duty_handover_receiver）';
COMMENT ON COLUMN "public"."duty_handover"."receiver_name" IS '接班人员姓名（多个英文逗号分隔，冗余，明细见 duty_handover_receiver）';
COMMENT ON COLUMN "public"."duty_handover"."receiver_date" IS '接班日期';
COMMENT ON COLUMN "public"."duty_handover"."receiver_time" IS '接班时间';
COMMENT ON COLUMN "public"."duty_handover"."handover_status" IS '交接状态（pending-待交接 done-已交接 received-已接班）';
COMMENT ON COLUMN "public"."duty_handover"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."duty_handover"."remark" IS '备注';
COMMENT ON COLUMN "public"."duty_handover"."creater" IS '创建者';
COMMENT ON COLUMN "public"."duty_handover"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."duty_handover"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."duty_handover"."updater" IS '更新者';
COMMENT ON COLUMN "public"."duty_handover"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."duty_handover"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."duty_handover"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."duty_handover"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."duty_handover"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."duty_handover"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."duty_handover"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."duty_handover"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."duty_handover"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."duty_handover" IS '交接班记录表';

-- ----------------------------

-- Indexes structure for table duty_handover
-- ----------------------------
CREATE INDEX "idx_duty_handover_date" ON "public"."duty_handover" USING btree (
  "handover_date" "pg_catalog"."date_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_handover_rule" ON "public"."duty_handover" USING btree (
  "schedule_rule_id" "pg_catalog"."int8_ops" ASC NULLS LAST
) WHERE deleted = 0;
CREATE INDEX "idx_duty_handover_status" ON "public"."duty_handover" USING btree (
  "handover_status" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_handover_org" ON "public"."duty_handover" USING btree (
  "creater_org_id" "pg_catalog"."int8_ops" ASC NULLS LAST
) WHERE deleted = 0;

-- Primary Key structure for table duty_handover
-- ----------------------------
ALTER TABLE "public"."duty_handover" ADD CONSTRAINT "duty_handover_pkey" PRIMARY KEY ("handover_id");

-- ----------------------------
`,aa=`DROP TABLE IF EXISTS "public"."duty_handover_receiver";
CREATE TABLE "public"."duty_handover_receiver" (
  "handover_receiver_id" bigint NOT NULL,
  "handover_id" bigint NOT NULL,
  "receiver_id" bigint NOT NULL,
  "receiver_name" varchar(128) COLLATE "pg_catalog"."default",
  "receiver_phone" varchar(20) COLLATE "pg_catalog"."default",
  "receive_status" varchar(20) COLLATE "pg_catalog"."default" NOT NULL DEFAULT 'pending'::character varying,
  "receive_time" timestamp(6),
  "confirm_remark" varchar(500) COLLATE "pg_catalog"."default",
  "is_completed" boolean NOT NULL DEFAULT false,
  "completed_time" timestamp(6),
  "completed_by_id" bigint,
  "completed_by_name" varchar(64) COLLATE "pg_catalog"."default",
  "completed_remark" varchar(500) COLLATE "pg_catalog"."default",
  "display_order" integer NOT NULL DEFAULT 0,
  "status" integer NOT NULL DEFAULT 1101,
  "remark" varchar(500) COLLATE "pg_catalog"."default",
  "creater" varchar(64) COLLATE "pg_catalog"."default",
  "creater_id" bigint,
  "create_time" timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updater" varchar(64) COLLATE "pg_catalog"."default",
  "updater_id" bigint,
  "update_time" timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "creater_org_id" bigint,
  "creater_org_name" varchar(128) COLLATE "pg_catalog"."default",
  "deleted" smallint NOT NULL DEFAULT 0,
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer NOT NULL DEFAULT 1,
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer NOT NULL DEFAULT 1
)
;
ALTER TABLE "public"."duty_handover_receiver" OWNER TO "postgres";
COMMENT ON COLUMN "public"."duty_handover_receiver"."handover_receiver_id" IS '主键ID';
COMMENT ON COLUMN "public"."duty_handover_receiver"."handover_id" IS '关联交接班主表ID';
COMMENT ON COLUMN "public"."duty_handover_receiver"."receiver_id" IS '接班人ID（关联duty_member表）';
COMMENT ON COLUMN "public"."duty_handover_receiver"."receiver_name" IS '接班人姓名（冗余）';
COMMENT ON COLUMN "public"."duty_handover_receiver"."receiver_phone" IS '接班人电话（冗余）';
COMMENT ON COLUMN "public"."duty_handover_receiver"."receive_status" IS '接班状态（pending-待接班 confirmed-已接班 rejected-已拒绝）';
COMMENT ON COLUMN "public"."duty_handover_receiver"."receive_time" IS '实际接班时间';
COMMENT ON COLUMN "public"."duty_handover_receiver"."confirm_remark" IS '接班确认备注';
COMMENT ON COLUMN "public"."duty_handover_receiver"."is_completed" IS '事项是否完成';
COMMENT ON COLUMN "public"."duty_handover_receiver"."completed_time" IS '完成时间';
COMMENT ON COLUMN "public"."duty_handover_receiver"."completed_by_id" IS '完成人ID';
COMMENT ON COLUMN "public"."duty_handover_receiver"."completed_by_name" IS '完成人姓名';
COMMENT ON COLUMN "public"."duty_handover_receiver"."completed_remark" IS '完成备注';
COMMENT ON COLUMN "public"."duty_handover_receiver"."display_order" IS '排序';
COMMENT ON COLUMN "public"."duty_handover_receiver"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."duty_handover_receiver"."remark" IS '备注';
COMMENT ON COLUMN "public"."duty_handover_receiver"."creater" IS '创建者';
COMMENT ON COLUMN "public"."duty_handover_receiver"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."duty_handover_receiver"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."duty_handover_receiver"."updater" IS '更新者';
COMMENT ON COLUMN "public"."duty_handover_receiver"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."duty_handover_receiver"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."duty_handover_receiver"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."duty_handover_receiver"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."duty_handover_receiver"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."duty_handover_receiver"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."duty_handover_receiver"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."duty_handover_receiver"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."duty_handover_receiver"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."duty_handover_receiver" IS '交接班接班人关联表';

CREATE INDEX "idx_duty_handover_receiver_handover" ON "public"."duty_handover_receiver" USING btree (
  "handover_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_handover_receiver_receiver" ON "public"."duty_handover_receiver" USING btree (
  "receiver_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_handover_receiver_status" ON "public"."duty_handover_receiver" USING btree (
  "receive_status" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_handover_receiver_order" ON "public"."duty_handover_receiver" USING btree (
  "display_order" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int4_ops" ASC NULLS LAST
);

ALTER TABLE "public"."duty_handover_receiver" ADD CONSTRAINT "duty_handover_receiver_pkey" PRIMARY KEY ("handover_receiver_id");
`,ia=`DROP TABLE IF EXISTS "public"."duty_handover_item";
CREATE TABLE "public"."duty_handover_item" (
  "handover_item_id" bigint NOT NULL,
  "handover_id" bigint NOT NULL,
  "item_type_code" varchar(30) COLLATE "pg_catalog"."default" NOT NULL,
  "item_type_label" varchar(128) COLLATE "pg_catalog"."default",
  "content" text COLLATE "pg_catalog"."default",
  "event_id" bigint,
  "event_name" varchar(256) COLLATE "pg_catalog"."default",
  "attachment_json" text COLLATE "pg_catalog"."default",
  "display_order" integer NOT NULL DEFAULT 0,
  "status" integer NOT NULL DEFAULT 1101,
  "remark" varchar(500) COLLATE "pg_catalog"."default",
  "creater" varchar(64) COLLATE "pg_catalog"."default",
  "creater_id" bigint,
  "create_time" timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updater" varchar(64) COLLATE "pg_catalog"."default",
  "updater_id" bigint,
  "update_time" timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "creater_org_id" bigint,
  "creater_org_name" varchar(128) COLLATE "pg_catalog"."default",
  "deleted" smallint NOT NULL DEFAULT 0,
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer NOT NULL DEFAULT 1,
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer NOT NULL DEFAULT 1
)
;
ALTER TABLE "public"."duty_handover_item" OWNER TO "postgres";
COMMENT ON COLUMN "public"."duty_handover_item"."handover_item_id" IS '主键ID';
COMMENT ON COLUMN "public"."duty_handover_item"."handover_id" IS '关联交接班主表ID';
COMMENT ON COLUMN "public"."duty_handover_item"."item_type_code" IS '事项类型编码（follow_up-待跟进 important_matters-重要事项 work_requirements-工作要求 inspection_content-检查内容 handover_items-交接物品 others-其他）';
COMMENT ON COLUMN "public"."duty_handover_item"."item_type_label" IS '事项类型名称';
COMMENT ON COLUMN "public"."duty_handover_item"."content" IS '事项内容';
COMMENT ON COLUMN "public"."duty_handover_item"."event_id" IS '关联应急事件ID（可选）';
COMMENT ON COLUMN "public"."duty_handover_item"."event_name" IS '应急事件名称（冗余）';
COMMENT ON COLUMN "public"."duty_handover_item"."attachment_json" IS '附件列表（JSON字符串，格式 [{"id":"xxx","name":"xxx","url":"xxx"}]）';
COMMENT ON COLUMN "public"."duty_handover_item"."display_order" IS '排序';
COMMENT ON COLUMN "public"."duty_handover_item"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."duty_handover_item"."remark" IS '备注';
COMMENT ON COLUMN "public"."duty_handover_item"."creater" IS '创建者';
COMMENT ON COLUMN "public"."duty_handover_item"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."duty_handover_item"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."duty_handover_item"."updater" IS '更新者';
COMMENT ON COLUMN "public"."duty_handover_item"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."duty_handover_item"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."duty_handover_item"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."duty_handover_item"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."duty_handover_item"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."duty_handover_item"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."duty_handover_item"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."duty_handover_item"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."duty_handover_item"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."duty_handover_item" IS '交班事项表';

CREATE INDEX "idx_duty_handover_item_handover" ON "public"."duty_handover_item" USING btree (
  "handover_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_handover_item_key" ON "public"."duty_handover_item" USING btree (
  "item_type_code" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_handover_item_status" ON "public"."duty_handover_item" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_handover_item_event" ON "public"."duty_handover_item" USING btree (
  "event_id" "pg_catalog"."int8_ops" ASC NULLS LAST
) WHERE deleted = 0;
CREATE INDEX "idx_duty_handover_item_order" ON "public"."duty_handover_item" USING btree (
  "display_order" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int4_ops" ASC NULLS LAST
);

ALTER TABLE "public"."duty_handover_item" ADD CONSTRAINT "duty_handover_item_pkey" PRIMARY KEY ("handover_item_id");
`,ra=`DROP TABLE IF EXISTS "public"."duty_work_log";
CREATE TABLE "public"."duty_work_log" (
  "work_log_id" bigint NOT NULL,
  "obj_id" varchar(64) COLLATE "pg_catalog"."default",
  "record_type" varchar(30) COLLATE "pg_catalog"."default" NOT NULL,
  "title" varchar(256) COLLATE "pg_catalog"."default",
  "content" text COLLATE "pg_catalog"."default",
  "summary" varchar(500) COLLATE "pg_catalog"."default",
  "json_data" text COLLATE "pg_catalog"."default",
  "status" integer NOT NULL DEFAULT 1101,
  "remark" varchar(500) COLLATE "pg_catalog"."default",
  "creater" varchar(64) COLLATE "pg_catalog"."default",
  "creater_id" bigint,
  "create_time" timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updater" varchar(64) COLLATE "pg_catalog"."default",
  "updater_id" bigint,
  "update_time" timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "creater_org_id" bigint,
  "creater_org_name" varchar(128) COLLATE "pg_catalog"."default",
  "deleted" smallint NOT NULL DEFAULT 0,
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer NOT NULL DEFAULT 1,
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer NOT NULL DEFAULT 1
)
;
ALTER TABLE "public"."duty_work_log" OWNER TO "postgres";
COMMENT ON COLUMN "public"."duty_work_log"."work_log_id" IS '主键ID';
COMMENT ON COLUMN "public"."duty_work_log"."obj_id" IS '关联业务表ID（交班ID/接班ID/值班记录ID/值班报告ID，字符串形式便于扩展）';
COMMENT ON COLUMN "public"."duty_work_log"."record_type" IS '记录类型（handover_out-交班 handover_in-接班 duty_record-值班记录填报 duty_report-值班报告）';
COMMENT ON COLUMN "public"."duty_work_log"."title" IS '标题';
COMMENT ON COLUMN "public"."duty_work_log"."content" IS '日志正文';
COMMENT ON COLUMN "public"."duty_work_log"."summary" IS '摘要';
COMMENT ON COLUMN "public"."duty_work_log"."json_data" IS 'JSON扩展字段（存储任意扩展数据）';
COMMENT ON COLUMN "public"."duty_work_log"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."duty_work_log"."remark" IS '备注';
COMMENT ON COLUMN "public"."duty_work_log"."creater" IS '创建者';
COMMENT ON COLUMN "public"."duty_work_log"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."duty_work_log"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."duty_work_log"."updater" IS '更新者';
COMMENT ON COLUMN "public"."duty_work_log"."updater_id" IS '更新人ID';
COMMENT ON COLUMN "public"."duty_work_log"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."duty_work_log"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."duty_work_log"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."duty_work_log"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."duty_work_log"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."duty_work_log"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."duty_work_log"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."duty_work_log"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."duty_work_log" IS '工作日志表';

CREATE INDEX "idx_duty_work_log_record_type" ON "public"."duty_work_log" USING btree (
  "record_type" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_work_log_status" ON "public"."duty_work_log" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_work_log_obj" ON "public"."duty_work_log" USING btree (
  "obj_id" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE deleted = 0;
CREATE INDEX "idx_duty_work_log_time" ON "public"."duty_work_log" USING btree (
  "create_time" "pg_catalog"."timestamp_ops" DESC NULLS LAST
) WHERE deleted = 0;
CREATE INDEX "idx_duty_work_log_org" ON "public"."duty_work_log" USING btree (
  "creater_org_id" "pg_catalog"."int8_ops" ASC NULLS LAST
) WHERE deleted = 0;

ALTER TABLE "public"."duty_work_log" ADD CONSTRAINT "duty_work_log_pkey" PRIMARY KEY ("work_log_id");
`,sa="黄利群",la=369,da={name:"早班",time:"08:00-18:00"},ca={date:"2026年3月12号",name:"早班",time:"08:00-18:00",weekday:"星期四",daysLeft:8},ua=[{label:"值班日志数",value:256,icon:Ie,color:"#409EFF"},{label:"电话记录数",value:9,icon:ut,color:"#67C23A"},{label:"咨询电话数",value:8,icon:_t,color:"#E6A23C"},{label:"投诉电话数",value:1,icon:pt,color:"#F56C6C"},{label:"文件收发数量",value:50,icon:vt,color:"#7B68EE"},{label:"信息报送次数",value:46,icon:mt,color:"#13C2C2"},{label:"领导交办事项数",value:3,icon:Ne,color:"#DAA520"},{label:"视频调看次数",value:8,icon:yt,color:"#EC5BAA"},{label:"值勤总时长(小时)",value:4428,icon:ht,color:"#2B5876"}],_a=[{label:"交班",desc:"移交当班工作",icon:ft,color:"#67C23A",action:"handover"},{label:"接班",desc:"接收交班内容",icon:Ie,color:"#E6A23C",action:"receive"},{label:"值班记录填报",desc:"填写当日记录",icon:Ue,color:"#F56C6C",action:"duty-record"},{label:"值班日报填报",desc:"提交日报",icon:Z,color:"#409EFF",action:"daily-report"}],pa=[{title:"省应急厅来电对接交通运行情况信息报送工作，要求完成对接。",time:"03/02",creator:"林佳能",attachments:[{name:"文件名称.jpg"},{name:"文件名称.jpg"}]},{title:"省委值班室来电咨询当日交通运行数据情况，需协调相关处室核实反馈。",time:"03/01",creator:"潘志成",attachments:[{name:"文件名称.jpg"},{name:"文件名称.jpg"}]},{title:"监控中心报告部分高速路段车流量增加，需加强监控关注。",time:"01/12",creator:"黄利群",attachments:[{name:"文件名称.jpg"},{name:"文件名称.jpg"}]}],va=[{id:1,recordType:"handover_in",title:"早班接班登记",summary:"接班人王小明，确认承接本班次工作，阅读交班登记后完成接班确认。",relatedHandoverId:1001,...x("2026-08-22 08:00:00","2026-08-22 08:30:00")},{id:2,recordType:"handover_in",title:"技术白班接班登记",summary:"技术白班人员已到岗，接班人邱宏伟签收系统巡检记录与设备状态报告。",relatedHandoverId:1002,...x("2026-08-22 08:35:00","2026-08-22 09:00:00")},{id:3,recordType:"handover_in",title:"监控大厅值班接班",summary:"完成监控大厅交接班交接，上一班次遗留 1 项待跟进事项已确认。",relatedHandoverId:1003,...x("2026-08-22 09:05:00","2026-08-22 09:25:00")},{id:4,recordType:"handover_in",title:"总值班室接班",summary:"厅总值班室完成接班登记，确认领导当日行程与重点关注事项。",relatedHandoverId:1004,...x("2026-08-22 09:30:00","2026-08-22 09:55:00")},{id:5,recordType:"handover_in",title:"应急值守岗位接班",summary:"应急值守岗位接班到位，电话系统、对讲机、值班手机均测试正常。",relatedHandoverId:1005,...x("2026-08-22 10:00:00","2026-08-22 10:20:00")},{id:6,recordType:"handover_in",title:"视频监控岗接班",summary:"视频监控岗完成接班，重点路段摄像头在线率 99.6%，一切正常。",relatedHandoverId:1006,...x("2026-08-22 10:25:00","2026-08-22 10:45:00")},{id:7,recordType:"handover_out",title:"夜班交班登记",summary:"夜班完成交班登记：夜间系统运行平稳，共处置 3 起监控告警，已全部闭环。",relatedHandoverId:2001,...x("2026-08-22 00:00:00","2026-08-22 00:30:00")},{id:8,recordType:"handover_out",title:"技术夜班交班登记",summary:"技术夜班交班：完成核心系统巡检 4 次，发现并处理 1 起接口告警。",relatedHandoverId:2002,...x("2026-08-22 00:35:00","2026-08-22 01:00:00")},{id:9,recordType:"handover_out",title:"应急值守岗位交班",summary:"应急值守岗交班：累计接听咨询电话 6 起、投诉 1 起，已全部登记。",relatedHandoverId:2003,...x("2026-08-22 01:10:00","2026-08-22 01:30:00")},{id:10,recordType:"handover_out",title:"视频监控岗交班",summary:"视频监控岗交班：完成重点路段全覆盖巡查，标记 2 处异常已转交白班。",relatedHandoverId:2004,...x("2026-08-22 02:00:00","2026-08-22 02:20:00")},{id:11,recordType:"handover_out",title:"总值班室交班",summary:"总值班室完成交班登记：当日重要文件 8 份已签收流转。",relatedHandoverId:2005,...x("2026-08-22 02:30:00","2026-08-22 03:00:00")},{id:12,recordType:"handover_out",title:"监控大厅交班",summary:"监控大厅交班：留 1 项待跟进事项给早班（南沙大桥车流量持续观察）。",relatedHandoverId:2006,...x("2026-08-22 07:30:00","2026-08-22 07:55:00")},{id:13,recordType:"other",title:"领导交办事项处置",summary:"完成杨副厅长交办的「清明假期路网运行研判」专项报告并报送。",...x("2026-08-22 11:00:00","2026-08-22 11:30:00")},{id:14,recordType:"other",title:"应急事件处置记录",summary:"G15 沈海高速 K102+300 车辆故障抛锚事件已通报交警现场处置，全程跟进闭环。",...x("2026-08-22 14:00:00","2026-08-22 14:30:00")},{id:15,recordType:"other",title:"信息报送及发布",summary:"完成 14:00 当日路网运行日报（港珠澳、深中通道、虎门大桥等）向部路网中心报送。",...x("2026-08-22 14:45:00","2026-08-22 15:10:00")},{id:16,recordType:"other",title:"系统巡检与故障处理",summary:"完成下午巡检，发现视频调看子系统接口延迟升高，已通知运维跟进。",...x("2026-08-22 16:00:00","2026-08-22 16:30:00")}],ma={handoverDate:"2025/3/3",handoverPerson:"潘志成",sections:[{key:"followUp",title:"待跟进",content:"跟进今日交通监控系统升级情况，确认是否恢复正常运行。持续关注南沙大桥车流量异常情况，确认是否恢复正常运行。",files:[{id:1,name:"文件名称.jpg",url:"/files/文件名称.jpg",type:"jpg"},{id:2,name:"文件名称.jpg",url:"/files/文件名称.jpg",type:"jpg"}],readonly:!0},{key:"importantMatters",title:"重要事项",content:"省应急厅来电对接交通运行情况信息报送工作，已按要求完成对接。",files:[{id:1,name:"文件名称.jpg",url:"/files/文件名称.jpg",type:"jpg"},{id:2,name:"文件名称.jpg",url:"/files/文件名称.jpg",type:"jpg"}],readonly:!0},{key:"workRequirements",title:"工作要求",content:"加强重点路段视频巡查。发现异常情况及时上报指挥中心。",files:[{id:1,name:"文件名称.jpg",url:"/files/文件名称.jpg",type:"jpg"},{id:2,name:"文件名称.jpg",url:"/files/文件名称.jpg",type:"jpg"}],readonly:!0},{key:"inspectionContent",title:"检查内容",content:"今日天气多云，可能有短时降雨，注意交通情况。",files:[{id:1,name:"文件名称.jpg",url:"/files/文件名称.jpg",type:"jpg"},{id:2,name:"文件名称.jpg",url:"/files/文件名称.jpg",type:"jpg"}],readonly:!0},{key:"handoverItems",title:"交接物品情况",content:"",files:[{id:1,name:"文件名称.jpg",url:"/files/文件名称.jpg",type:"jpg"},{id:2,name:"文件名称.jpg",url:"/files/文件名称.jpg",type:"jpg"}],readonly:!1},{key:"others",title:"其他",content:"",files:[{id:1,name:"文件名称.jpg",url:"/files/文件名称.jpg",type:"jpg"},{id:2,name:"文件名称.jpg",url:"/files/文件名称.jpg",type:"jpg"}],readonly:!1}]},ya={class:"duty-dashboard"},ha={class:"hero-banner"},fa={class:"hero-content"},ga={class:"hero-text"},Na={class:"hero-greeting"},Ca={class:"greeting-label"},Oa={class:"greeting-name"},La={class:"hero-date"},Ta={class:"hero-tip"},ba={class:"hero-cards"},Ma={class:"hero-card hero-card--primary"},Ea={class:"hero-card-head"},ka={class:"hero-card-value"},Sa={class:"hero-card-meta hero-card-meta--single"},Ua={class:"meta-text"},Ia={class:"hero-card hero-card--accent"},Aa={class:"hero-card-head"},wa={class:"hero-card-value hero-card-value--compact"},Da={class:"hero-card-meta hero-card-meta--single"},Ra={class:"meta-text"},$a={class:"meta-countdown"},xa={class:"hero-card hero-card--success"},Xa={class:"hero-card-head"},ja={class:"hero-card-value"},Va={class:"dashboard-body"},Fa={class:"side-panel"},Ha={class:"main-panel"},qa=W({__name:"DutyDashboard",setup(y){const w=$e(),U=N(null),T=N(null),f=N(ma),b=N(sa),E=N(la),v=N(da),d=N(ca),m=X(()=>{const p=new Date().getHours();return p<6?"凌晨好":p<12?"上午好":p<14?"中午好":p<18?"下午好":"晚上好"}),C=X(()=>{const p=new Date;return`${p.getFullYear()}年${p.getMonth()+1}月${p.getDate()}号`}),c=X(()=>we("YYYY-MM-DD")),u=X(()=>["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][new Date().getDay()]),D=N(ua),k=N(_a),O=N(pa),R=N([...va].sort((p,r)=>r.createTime.localeCompare(p.createTime)));function j(p){const r=O.value.indexOf(p);r>=0&&O.value.splice(r,1)}function F(p){var r,I;switch(p.recordType){case"handover_in":(r=U.value)==null||r.open("receive",{handoverPerson:p.summary.slice(0,12)||"交班人",handoverDate:p.createTime.slice(0,10).replace(/-/g,"/")});break;case"handover_out":(I=U.value)==null||I.open("handover");break;case"other":default:T.value=p;break}}function _(){w.push("/duty/duty-record/list")}function B(){w.push("/duty/duty-record/list")}function ee(p){z.success("交班成功")}function te(p){z.success("接班成功")}function ne(p){z.success("值班记录提交成功")}function $(){z.success("草稿已保存")}function g(){var p,r;z.success("提交成功"),(r=(p=U.value)==null?void 0:p.closeDailyReport)==null||r.call(p)}return(p,r)=>{const I=xe("table-structure-drawer"),K=G;return s(),L("div",ya,[e("section",ha,[e("div",fa,[e("div",ga,[e("div",Na,[e("span",Ca,o(m.value)+"，",1),e("span",Oa,o(b.value)+"同事",1),t(I,{sql:[l(oa),l(aa),l(ia),l(ra)]},null,8,["sql"])]),e("div",La,[t(K,null,{default:a(()=>[t(l(gt))]),_:1}),e("span",null,o(C.value)+" · "+o(u.value),1)]),e("div",Ta,[r[1]||(r[1]=A(" 今天是您坚守岗位的第 ",-1)),e("em",null,o(E.value),1),r[2]||(r[2]=A(" 天 ",-1))])]),e("div",ba,[e("div",Ma,[e("div",Ea,[t(K,{class:"hero-card-icon"},{default:a(()=>[t(l(de))]),_:1}),r[3]||(r[3]=e("span",{class:"hero-card-title"},"当前班次",-1))]),e("div",ka,o(v.value.name),1),e("div",Sa,[e("span",Ua,o(v.value.time),1)])]),e("div",Ia,[e("div",Aa,[t(K,{class:"hero-card-icon"},{default:a(()=>[t(l(ge))]),_:1}),r[4]||(r[4]=e("span",{class:"hero-card-title"},"下次值班",-1))]),e("div",wa,o(d.value.date),1),e("div",Da,[e("span",Ra,o(d.value.name)+" "+o(d.value.time),1),r[7]||(r[7]=e("span",{class:"meta-sep"},"|",-1)),e("span",$a,[r[5]||(r[5]=A("还 ",-1)),e("em",null,o(d.value.daysLeft),1),r[6]||(r[6]=A(" 天",-1))])])]),e("div",xa,[e("div",Xa,[t(K,{class:"hero-card-icon"},{default:a(()=>[t(l(Nt))]),_:1}),r[8]||(r[8]=e("span",{class:"hero-card-title"},"连续值班",-1))]),e("div",ja,[A(o(E.value),1),r[9]||(r[9]=e("span",{class:"hero-card-unit"},"天",-1))]),r[10]||(r[10]=e("div",{class:"hero-card-meta"},"坚守岗位",-1))])])]),r[11]||(r[11]=e("div",{class:"hero-decor hero-decor--1"},null,-1)),r[12]||(r[12]=e("div",{class:"hero-decor hero-decor--2"},null,-1))]),e("div",Va,[e("aside",Fa,[t(na,{stats:D.value,onViewHistory:B},null,8,["stats"])]),e("main",Ha,[t(co,{ref_key:"quickEntriesRef",ref:U,entries:k.value,"receive-handover-data":f.value,"today-date":c.value,"current-user":b.value,onConfirmHandover:ee,onConfirmReceive:te,onConfirmDutyRecord:ne,onDailyReportSave:$,onDailyReportSubmit:g},null,8,["entries","receive-handover-data","today-date","current-user"]),t(Lo,{items:O.value,onComplete:j},null,8,["items"]),t(zo,{record:T.value,"onUpdate:record":r[0]||(r[0]=se=>T.value=se),records:R.value,onRecordClick:F,onViewAll:_},null,8,["record","records"])])])])}}}),ti=Y(qa,[["__scopeId","data-v-41878835"]]);export{ti as default};

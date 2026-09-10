import{ar as Ye,az as je,bx as Qe,s as Ze,l as Je,aZ as ea,b9 as aa,ba as la,R as ta,d as na,bb as sa,a_ as oa,a as S}from"./element-plus-Bt8i1BPk.js";import{q as ra,r as ua,e as ia,t as da,a as ma,x as ca,w as _a,F as pa,G as ga,y as ya,N as ba,A as fa,ah as Na,P as Ta,Q as Ca,d as Ma}from"./index-BQSjtNr4.js";/* empty css                     */import{m as x,b as Oa}from"./mealData-PHKg9gx_.js";import{m as Ea}from"./subsystemData-CTyhJAzK.js";import{c as me}from"./menuMockApi-BBFvvu0j.js";import{c as La}from"./mockCrud-BtS6NwdU.js";import{b as ce}from"./common-CRcHQUfu.js";import{G as va,o as Ia,aj as _e,L as w,M as X,a0 as t,W as n,P as o,R as pe,_ as M,$ as y,u as g,F as ge,ae as Sa,S as ye,O as ha,Y as Aa,p as u,m as B,c as H}from"./vue-vendor-CrWx_I7L.js";import"./markdown-BUTMf7eB.js";import"./editor-CMUCu6Rk.js";import"./ol-map-DY4XWb27.js";const Ua=`-- Table structure for sys_meal
-- ----------------------------
DROP TABLE IF EXISTS "public"."sys_meal";
CREATE TABLE "public"."sys_meal" (
  "meal_id" bigint NOT NULL,
  "meal_name" varchar(128) COLLATE "pg_catalog"."default" NOT NULL,
  "meal_code" varchar(64) COLLATE "pg_catalog"."default" NOT NULL,
  "meal_type" integer NOT NULL,
  "display_order" integer DEFAULT 0,
  "status" integer DEFAULT 1101,
  "remark" varchar(500) COLLATE "pg_catalog"."default",
  "creater" varchar(64) COLLATE "pg_catalog"."default",
  "creater_id" bigint,
  "create_time" timestamp(6) DEFAULT CURRENT_TIMESTAMP,
  "updater" varchar(64) COLLATE "pg_catalog"."default",
  "updater_id" bigint,
  "update_time" timestamp(6) DEFAULT CURRENT_TIMESTAMP,
  "creater_org_id" bigint,
  "creater_org_name" varchar(128) COLLATE "pg_catalog"."default",
  "deleted" smallint DEFAULT 0,
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer DEFAULT 1,
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer DEFAULT 1
)
;
ALTER TABLE "public"."sys_meal" OWNER TO "postgres";
COMMENT ON COLUMN "public"."sys_meal"."meal_id" IS '套餐ID';
COMMENT ON COLUMN "public"."sys_meal"."meal_name" IS '套餐名称';
COMMENT ON COLUMN "public"."sys_meal"."meal_code" IS '套餐编码';
COMMENT ON COLUMN "public"."sys_meal"."meal_type" IS '套餐类型（1顶节点 2交通节点 3事务中心节点 4公司企业节点）';
COMMENT ON COLUMN "public"."sys_meal"."display_order" IS '排序号';
COMMENT ON COLUMN "public"."sys_meal"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."sys_meal"."remark" IS '备注';
COMMENT ON COLUMN "public"."sys_meal"."creater" IS '创建者';
COMMENT ON COLUMN "public"."sys_meal"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."sys_meal"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."sys_meal"."updater" IS '更新者';
COMMENT ON COLUMN "public"."sys_meal"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."sys_meal"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."sys_meal"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."sys_meal"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."sys_meal"."deleted" IS '逻辑删除（0正常 1删除）';
COMMENT ON COLUMN "public"."sys_meal"."local_signature" IS '本地签名（SM2）';
COMMENT ON COLUMN "public"."sys_meal"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."sys_meal"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."sys_meal"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."sys_meal" IS '系统角色套餐定义表';

-- ----------------------------

-- Indexes structure for table sys_meal
-- ----------------------------
CREATE INDEX "idx_sys_meal_meal_code" ON "public"."sys_meal" USING btree (
  "meal_code" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE meal_code IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_sys_meal_meal_type_status" ON "public"."sys_meal" USING btree (
  "meal_type" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "display_order" "pg_catalog"."int4_ops" ASC NULLS LAST
) WHERE deleted = 0;
CREATE INDEX "idx_sys_meal_org_id" ON "public"."sys_meal" USING btree (
  "creater_org_id" "pg_catalog"."int8_ops" ASC NULLS LAST
) WHERE creater_org_id IS NOT NULL AND deleted = 0;

-- Primary Key structure for table sys_meal
-- ----------------------------
ALTER TABLE "public"."sys_meal" ADD CONSTRAINT "sys_meal_pkey" PRIMARY KEY ("meal_id");

-- ----------------------------
`,Fa=`-- Table structure for sys_meal_menu_rel
-- ----------------------------
DROP TABLE IF EXISTS "public"."sys_meal_menu_rel";
CREATE TABLE "public"."sys_meal_menu_rel" (
  "rel_id" bigint NOT NULL,
  "meal_id" bigint NOT NULL,
  "menu_id" bigint NOT NULL,
  "creater" varchar(64) COLLATE "pg_catalog"."default",
  "creater_id" bigint,
  "create_time" timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "creater_org_id" bigint,
  "creater_org_name" varchar(128) COLLATE "pg_catalog"."default",
  "deleted" integer NOT NULL DEFAULT 0,
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer NOT NULL DEFAULT 1,
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer NOT NULL DEFAULT 1
)
;
ALTER TABLE "public"."sys_meal_menu_rel" OWNER TO "postgres";
COMMENT ON COLUMN "public"."sys_meal_menu_rel"."rel_id" IS '主键ID';
COMMENT ON COLUMN "public"."sys_meal_menu_rel"."meal_id" IS '套餐ID';
COMMENT ON COLUMN "public"."sys_meal_menu_rel"."menu_id" IS '菜单ID';
COMMENT ON COLUMN "public"."sys_meal_menu_rel"."creater" IS '创建者';
COMMENT ON COLUMN "public"."sys_meal_menu_rel"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."sys_meal_menu_rel"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."sys_meal_menu_rel"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."sys_meal_menu_rel"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."sys_meal_menu_rel"."local_signature" IS '本地签名（SM2）';
COMMENT ON COLUMN "public"."sys_meal_menu_rel"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."sys_meal_menu_rel"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."sys_meal_menu_rel"."signature_version" IS '一体化签名版本号';
COMMENT ON COLUMN "public"."sys_meal_menu_rel"."deleted" IS '删除标志（0-未删除 1-已删除）';
COMMENT ON TABLE "public"."sys_meal_menu_rel" IS '套餐菜单关联表';

-- ----------------------------

-- Indexes structure for table sys_meal_menu_rel
-- ----------------------------
CREATE INDEX "idx_sys_meal_menu_rel_meal_menu" ON "public"."sys_meal_menu_rel" USING btree (
  "meal_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "menu_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);
CREATE INDEX "idx_sys_meal_menu_rel_menu_meal" ON "public"."sys_meal_menu_rel" USING btree (
  "menu_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "meal_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);

-- Primary Key structure for table sys_meal_menu_rel
-- ----------------------------
ALTER TABLE "public"."sys_meal_menu_rel" ADD CONSTRAINT "sys_meal_menu_rel_pkey" PRIMARY KEY ("rel_id");

-- ----------------------------
`,Va={class:"code-cell"},Da={class:"code-text"},ka={class:"creator-cell"},Ra={class:"bind-container"},xa={class:"bind-left"},wa={class:"bind-subsystem-list"},Ba=["onClick"],Ka={class:"subsystem-name"},Pa={class:"subsystem-count"},za={class:"bind-right"},$a={class:"bind-right-header"},qa={class:"bind-menu-tree"},Ga={class:"bind-tree-node"},Wa={class:"node-label"},Xa={class:"drawer-footer"},Ha=va({__name:"MealManagement",setup(Ya){const Y=a=>new Promise(e=>setTimeout(e,a)),O=La(Oa,{idKey:"mealId"});function be(a){return O.add({...a,code:a.code.toUpperCase(),remark:""})}function fe(a,e){return O.update(a,{...e,code:e.code.toUpperCase()})}function Ne(a){return O.remove(a)}function Te(a,e){return O.toggleStatus(a,e)}const E=[{id:1,mealId:1,menuId:3000001,subsystemId:1,createTime:"2026-07-21 10:00:00"},{id:2,mealId:1,menuId:3000002,subsystemId:1,createTime:"2026-07-21 10:00:00"},{id:3,mealId:1,menuId:4000001,subsystemId:2,createTime:"2026-07-21 10:00:00"},{id:4,mealId:1,menuId:0x1c9b99594f421000,subsystemId:99,createTime:"2026-07-21 10:00:00"}];async function Ce(a){return await Y(200+Math.random()*200),E.filter(e=>e.mealId===a).map(e=>e.menuId)}async function Me(a,e,s){await Y(300+Math.random()*300);const m=[];E.forEach((i,f)=>{i.mealId===a&&m.unshift(f)}),m.forEach(i=>E.splice(i,1));const _=E.reduce((i,f)=>Math.max(i,f.id),0);e.forEach((i,f)=>{E.push({id:_+f+1,mealId:a,menuId:i,subsystemId:s,createTime:Na()})})}const K=u(!1),j=u([]),h=u(!1),A=u(!1),U=u(),F=u(),L=u(!1),v=u(!1),N=u(null),V=u(1),D=u([]),Q=u([]),P=u(!1),z=u(!1),T=u(null),Z=Ea.filter(a=>!a.isHidden),J=u({}),c=B({name:"",mealType:"",status:""}),b=B({pageNum:1,pageSize:20}),ee=H(()=>{let a=j.value;return c.name&&(a=a.filter(e=>Ca(c.name,e.name))),c.mealType!==""&&(a=a.filter(e=>e.mealType===Number(c.mealType))),c.status!==""&&(a=a.filter(e=>e.status===Number(c.status))),a}),ae=H(()=>ee.value.length),Oe=H(()=>Ta(ee.value,b.pageNum,b.pageSize)),d=B({code:"",name:"",mealType:"",sort:0,status:1101}),r=B({code:"",name:"",mealType:"",sort:0,status:1101}),le={code:[{required:!0,message:"请输入套餐代码",trigger:"blur"}],mealType:[{required:!0,message:"请选择节点类型",trigger:"change"}],name:[{required:!0,message:"请输入套餐名称",trigger:"blur"}],status:[{required:!0,message:"请选择状态",trigger:"change"}]},Ee=[{prop:"mealId",label:"ID",width:70},{prop:"code",label:"套餐代码",width:200,slot:"code"},{prop:"name",label:"套餐名称",minWidth:140},{prop:"mealType",label:"节点类型",width:150,slot:"mealType"},{prop:"sort",label:"排序",width:80},{prop:"status",label:"状态",width:120,slot:"status"},{prop:"creater",label:"创建人",width:110,slot:"creater"},{type:"audit",prop:"createTime",label:"创建时间"},{type:"actions",label:"操作",slot:"actions"}],Le=[{label:"编辑",icon:Ye,handler:a=>Ie(a)},{label:"绑定",icon:je,handler:a=>Fe(a)},{label:"删除",icon:Qe,divided:!0,handler:a=>Ae(a)}];async function I(){K.value=!0;try{j.value=await O.getAll()}finally{K.value=!1}}function $(){b.pageNum=1}function ve(){Object.assign(d,{code:"",name:"",mealType:"",sort:ae.value+1,status:1101}),h.value=!0}function Ie(a){Object.assign(r,{mealId:a.mealId,code:a.code,name:a.name,mealType:a.mealType,sort:a.sort,status:a.status}),A.value=!0}function te(){var a,e;(a=U.value)==null||a.resetFields(),(e=F.value)==null||e.resetFields()}async function Se(){if(U.value){try{await U.value.validate()}catch{return}await be({...d,mealType:Number(d.mealType)}),S.success("新增成功"),h.value=!1,I()}}async function he(){if(F.value){try{await F.value.validate()}catch{return}r.mealId&&(await fe(r.mealId,{...r,mealType:Number(r.mealType)}),S.success("编辑成功"),A.value=!1,I())}}async function Ae(a){await ba(a.name)&&(await Ne(a.mealId),S.success("删除成功"),I())}async function Ue(a,e){try{await Te(a.mealId,e),a.status=e,S.success("状态已切换")}catch{I()}}async function Fe(a){N.value=a,V.value=1,L.value=!0,await Ve(),await ne(1)}async function Ve(){const a={};for(const e of Z){const s=await me(e.subsystemId);a[e.subsystemId]=k(s).length}J.value=a}async function ne(a){V.value=a,v.value=!0;try{const e=await me(a);if(D.value=e,N.value){const s=await Ce(N.value.mealId),m=k(e);Q.value=s.filter(_=>m.includes(_)),se()}}finally{v.value=!1}}function k(a){const e=[];function s(m){m.forEach(_=>{var i;e.push(_.menuId),(i=_.children)!=null&&i.length&&s(_.children)})}return s(a),e}function De(a){var e,s;a?(e=T.value)==null||e.setCheckedKeys(k(D.value)):(s=T.value)==null||s.setCheckedKeys([]),z.value=!1}function se(){var s;const a=k(D.value),e=((s=T.value)==null?void 0:s.getCheckedKeys())||[];P.value=e.length===a.length,z.value=e.length>0&&e.length<a.length}async function ke(){var a,e;if(N.value){v.value=!0;try{const s=((a=T.value)==null?void 0:a.getCheckedKeys())||[],m=((e=T.value)==null?void 0:e.getHalfCheckedKeys())||[];await Me(N.value.mealId,[...s,...m].map(Number),V.value),S.success("绑定保存成功"),L.value=!1}finally{v.value=!1}}}const oe={1:{icon:"Bell",color:"#E6A23C",bg:"linear-gradient(135deg, #FDF6EC 0%, #FAECD8 100%)"},2:{icon:"Document",color:"#409EFF",bg:"linear-gradient(135deg, #ECF5FF 0%, #D9ECFF 100%)"},3:{icon:"Warning",color:"#F56C6C",bg:"linear-gradient(135deg, #FEF0F0 0%, #FDE2E2 100%)"},4:{icon:"Connection",color:"#9B59B6",bg:"linear-gradient(135deg, #F4ECF7 0%, #E8DAEF 100%)"},5:{icon:"Box",color:"#67C23A",bg:"linear-gradient(135deg, #F0F9EB 0%, #E1F3D8 100%)"},99:{icon:"Setting",color:"#606266",bg:"linear-gradient(135deg, #F5F7FA 0%, #E9ECEF 100%)"}};function q(a){return oe[a]||oe[99]}function Re(a){return{0:"目录",1:"菜单",2:"权限",99:"导航"}[a]||"未知"}function xe(a){return{0:"type-directory",1:"type-menu",2:"type-permission",99:"type-navigation"}[a]||""}function we(a){var e;return((e=x.find(s=>s.value===a))==null?void 0:e.label)||"未知"}function Be(a){return{1:"#409EFF",2:"#67C23A",3:"#E6A23C",4:"#9B59B6"}[a]||"#909399"}function Ke(a){const e=["#409EFF","#67C23A","#E6A23C","#F56C6C","#9B59B6","#00BCD4"];let s=0;for(let m=0;m<a.length;m++)s=a.charCodeAt(m)+((s<<5)-s);return e[Math.abs(s)%e.length]}async function Pe(a){fa(a)}return Ia(()=>I()),(a,e)=>{var de;const s=_e("table-structure-drawer"),m=ca,_=_a,i=ma,f=Je,ze=da,G=ia,$e=Ze,qe=ua,Ge=ra,We=_e("panel-layout"),R=ta,p=la,re=pa,ue=ga,ie=aa,W=ya,Xe=na,He=sa;return w(),X(ge,null,[t(We,{title:"套餐管理"},{"title-extra":n(()=>[t(s,{sql:[g(Ua),g(Fa)]},null,8,["sql"])]),search:n(()=>[t(m,{modelValue:c.name,"onUpdate:modelValue":e[0]||(e[0]=l=>c.name=l),placeholder:"搜索套餐名称",onSearch:$},null,8,["modelValue"]),t(_,{modelValue:c.mealType,"onUpdate:modelValue":e[1]||(e[1]=l=>c.mealType=l),placeholder:"节点类型",options:g(x).map(l=>({label:l.label,value:l.value})),onSearch:$},null,8,["modelValue","options"]),t(_,{modelValue:c.status,"onUpdate:modelValue":e[2]||(e[2]=l=>c.status=l),placeholder:"状态",options:[{label:"正常",value:1101},{label:"停用",value:1102}],onSearch:$},null,8,["modelValue"])]),actions:n(()=>[t(i,{"margin-left":10,onClick:ve},{default:n(()=>[...e[20]||(e[20]=[M("新增套餐",-1)])]),_:1})]),default:n(()=>[t(Ge,{"page-num":b.pageNum,"onUpdate:pageNum":e[3]||(e[3]=l=>b.pageNum=l),"page-size":b.pageSize,"onUpdate:pageSize":e[4]||(e[4]=l=>b.pageSize=l),data:Oe.value,columns:Ee,total:ae.value,loading:K.value,"row-key":"mealId","show-tool-bar":!1},{code:n(({row:l})=>[o("div",Va,[o("span",Da,y(l.code),1),t(f,{content:"复制代码",placement:"top"},{default:n(()=>[t(i,{link:"",type:"primary",icon:g(ea),onClick:C=>Pe(l.code)},null,8,["icon","onClick"])]),_:2},1024)])]),mealType:n(({row:l})=>[t(ze,{color:Be(l.mealType),effect:"dark",round:""},{default:n(()=>[M(y(we(l.mealType)),1)]),_:2},1032,["color"])]),status:n(({row:l})=>[t(G,{"model-value":l.status,options:[{label:"正常",value:1101},{label:"停用",value:1102}],onChange:C=>Ue(l,C)},null,8,["model-value","onChange"])]),creater:n(({row:l})=>[o("div",ka,[t($e,{size:24,style:pe({background:Ke(l.creater)})},{default:n(()=>[M(y(l.creater.charAt(0)),1)]),_:2},1032,["style"]),o("span",null,y(l.creater),1)])]),actions:n(({row:l})=>[t(qe,{items:Le,row:l},null,8,["row"])]),_:1},8,["page-num","page-size","data","total","loading"])]),_:1}),t(W,{modelValue:h.value,"onUpdate:modelValue":e[10]||(e[10]=l=>h.value=l),title:"新增套餐",size:"480px",direction:"rtl","destroy-on-close":"","confirm-text":"确认创建","on-confirm":Se,onClosed:te},{default:n(()=>[t(ie,{ref_key:"addFormRef",ref:U,model:d,rules:le,"label-width":"100px","label-position":"right"},{default:n(()=>[t(p,{label:"套餐代码",prop:"code"},{default:n(()=>[t(R,{modelValue:d.code,"onUpdate:modelValue":e[5]||(e[5]=l=>d.code=l),placeholder:"请输入代码，如：PKG_PROV_TRANSPORT",maxlength:"50","show-word-limit":""},null,8,["modelValue"])]),_:1}),t(p,{label:"节点类型",prop:"mealType"},{default:n(()=>[t(re,{modelValue:d.mealType,"onUpdate:modelValue":e[6]||(e[6]=l=>d.mealType=l),options:g(x),placeholder:"请选择节点类型"},null,8,["modelValue","options"])]),_:1}),t(p,{label:"套餐名称",prop:"name"},{default:n(()=>[t(R,{modelValue:d.name,"onUpdate:modelValue":e[7]||(e[7]=l=>d.name=l),placeholder:"请输入套餐名称",maxlength:"50","show-word-limit":""},null,8,["modelValue"])]),_:1}),t(p,{label:"排序",prop:"sort"},{default:n(()=>[t(ue,{modelValue:d.sort,"onUpdate:modelValue":e[8]||(e[8]=l=>d.sort=l),min:0,max:9999,width:"180px"},null,8,["modelValue"])]),_:1}),t(p,{label:"状态",prop:"status"},{default:n(()=>[t(G,{modelValue:d.status,"onUpdate:modelValue":e[9]||(e[9]=l=>d.status=l),options:g(ce)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),t(W,{modelValue:A.value,"onUpdate:modelValue":e[16]||(e[16]=l=>A.value=l),title:"编辑套餐",size:"480px",direction:"rtl","destroy-on-close":"","confirm-text":"保存修改","on-confirm":he,onClosed:te},{default:n(()=>[t(ie,{ref_key:"editFormRef",ref:F,model:r,rules:le,"label-width":"100px","label-position":"right"},{default:n(()=>[t(p,{label:"套餐代码",prop:"code"},{default:n(()=>[t(R,{modelValue:r.code,"onUpdate:modelValue":e[11]||(e[11]=l=>r.code=l),disabled:"",maxlength:"50"},null,8,["modelValue"])]),_:1}),t(p,{label:"节点类型",prop:"mealType"},{default:n(()=>[t(re,{modelValue:r.mealType,"onUpdate:modelValue":e[12]||(e[12]=l=>r.mealType=l),options:g(x),placeholder:"请选择节点类型"},null,8,["modelValue","options"])]),_:1}),t(p,{label:"套餐名称",prop:"name"},{default:n(()=>[t(R,{modelValue:r.name,"onUpdate:modelValue":e[13]||(e[13]=l=>r.name=l),placeholder:"请输入套餐名称",maxlength:"50","show-word-limit":""},null,8,["modelValue"])]),_:1}),t(p,{label:"排序",prop:"sort"},{default:n(()=>[t(ue,{modelValue:r.sort,"onUpdate:modelValue":e[14]||(e[14]=l=>r.sort=l),min:0,max:9999,width:"180px"},null,8,["modelValue"])]),_:1}),t(p,{label:"状态",prop:"status"},{default:n(()=>[t(G,{modelValue:r.status,"onUpdate:modelValue":e[15]||(e[15]=l=>r.status=l),options:g(ce)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),t(W,{modelValue:L.value,"onUpdate:modelValue":e[19]||(e[19]=l=>L.value=l),title:`绑定菜单 - ${((de=N.value)==null?void 0:de.name)||""}`,size:"50%",direction:"rtl","destroy-on-close":""},{footer:n(()=>[o("div",Xa,[t(i,{"margin-left":10,onClick:e[18]||(e[18]=l=>L.value=!1)},{default:n(()=>[...e[24]||(e[24]=[M("取消",-1)])]),_:1}),t(i,{type:"primary",loading:v.value,"margin-left":10,onClick:ke},{default:n(()=>[...e[25]||(e[25]=[M("保存绑定",-1)])]),_:1},8,["loading"])])]),default:n(()=>[o("div",Ra,[o("div",xa,[e[21]||(e[21]=o("div",{class:"bind-left-header"},[o("span",null,"子系统")],-1)),o("div",wa,[(w(!0),X(ge,null,Sa(g(Z),l=>(w(),X("div",{key:l.subsystemId,class:ye(["bind-subsystem-item",{active:V.value===l.subsystemId}]),onClick:C=>ne(l.subsystemId)},[o("div",{class:"subsystem-icon",style:pe({background:q(l.subsystemId).bg})},[t(Xe,{color:q(l.subsystemId).color},{default:n(()=>[(w(),ha(Aa(q(l.subsystemId).icon)))]),_:2},1032,["color"])],4),o("span",Ka,y(l.subsystemShortName),1),o("span",Pa,"（"+y(J.value[l.subsystemId]||0)+"）",1)],10,Ba))),128))])]),o("div",za,[o("div",$a,[e[23]||(e[23]=o("span",null,"菜单列表",-1)),t(He,{modelValue:P.value,"onUpdate:modelValue":e[17]||(e[17]=l=>P.value=l),indeterminate:z.value,onChange:De},{default:n(()=>[...e[22]||(e[22]=[M("全选",-1)])]),_:1},8,["modelValue","indeterminate"])]),o("div",qa,[t(g(oa),{ref_key:"bindTreeRef",ref:T,data:D.value,"show-checkbox":"","node-key":"menuId","default-checked-keys":Q.value,props:{label:"menuName",children:"children"},"default-expand-all":"",indent:24,onCheckChange:se},{default:n(({node:l,data:C})=>[o("span",Ga,[o("span",Wa,y(l.label),1),o("span",{class:ye(["menu-type-tag",xe(C.menuType)])},y(Re(C.menuType)),3)])]),_:1},8,["data","default-checked-keys"])])])])]),_:1},8,["modelValue","title"])],64)}}}),ul=Ma(Ha,[["__scopeId","data-v-333f2c31"]]);export{ul as default};

import{ar as He,aB as Je,bo as Qe,k as Ze,b8 as ea,bc as aa,bd as la,M as ta,d as na,be as sa,ba as oa,a as I}from"./element-plus-FTcyDTKl.js";import{m as ra,s as ua,j as ia,k as da,i as ma,b as pa,q as ca,w as _a,n as ya,p as Ta,o as ga,v as Na,h as fa,g as ba}from"./index-BGoR6y1A.js";import{m as B,b as Ma}from"./mealData-DXMfQUb7.js";import{m as Oa}from"./subsystemData-AVVWZ4Z9.js";import{c as pe}from"./menuMockApi-zdEoJICO.js";import{c as Ca}from"./mockCrud-VGUp_ajm.js";import{a as Ea}from"./randomMock-C6-QJwcy.js";import{m as La}from"./search-BoGTCmM8.js";import{p as Sa}from"./pagination-BHZHZx5b.js";import{S as N,b as X}from"./warning-BshV8eZN.js";import{P as j,a as va,b as Ia,p as ce}from"./subsystem-BQNqsSr5.js";import{M as Ua}from"./menu-Cvc35UU8.js";import{a as _e}from"./subsystemPresentation-D4HFtJPT.js";import{c as Aa,b as ha,d as ye,a as Va,M as Da}from"./ui-CkdNVOlu.js";import{G as ka,n as Ra,M as H,a0 as t,W as n,F as Te,r as d,aj as ge,k as P,L as G,P as o,$ as f,u as m,_ as U,ae as xa,S as Ne,R as wa,O as Fa,Y as Ba,c as J}from"./vue-vendor-CYCT-Zs3.js";const ja=`-- Table structure for sys_meal
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
COMMENT ON COLUMN "public"."sys_meal"."display_order" IS '排序字段';
COMMENT ON COLUMN "public"."sys_meal"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."sys_meal"."remark" IS '备注信息';
COMMENT ON COLUMN "public"."sys_meal"."creater" IS '创建者';
COMMENT ON COLUMN "public"."sys_meal"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."sys_meal"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."sys_meal"."updater" IS '更新者';
COMMENT ON COLUMN "public"."sys_meal"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."sys_meal"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."sys_meal"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."sys_meal"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."sys_meal"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."sys_meal"."local_signature" IS '本地签名（SM2，用于批量验签）';
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
`,Pa=`-- Table structure for sys_meal_menu_rel
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
COMMENT ON COLUMN "public"."sys_meal_menu_rel"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."sys_meal_menu_rel"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."sys_meal_menu_rel"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."sys_meal_menu_rel"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."sys_meal_menu_rel"."signature_version" IS '一体化签名版本号';
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
`,Ga={class:"code-cell"},Ka={class:"code-text"},$a={class:"bind-container"},za={class:"bind-left"},Ya={class:"bind-subsystem-list"},qa=["onClick"],Wa={class:"subsystem-name"},Xa={class:"subsystem-count"},Ha={class:"bind-right"},Ja={class:"bind-right-header"},Qa={class:"bind-menu-tree"},Za={class:"bind-tree-node"},el={class:"node-label"},al={class:"drawer-footer"},ll=ka({__name:"MealManagement",setup(tl){const C=Ca(Ma,{idKey:"mealId"});function fe(a){return C.add({...a,code:a.code.toUpperCase(),remark:""})}function be(a,e){return C.update(a,{...e,code:e.code.toUpperCase()})}function Me(a){return C.remove(a)}function Oe(a,e){return C.toggleStatus(a,e)}const E=[{id:1,mealId:1,menuId:3000001,subsystemId:1,createTime:"2026-07-21 10:00:00"},{id:2,mealId:1,menuId:3000002,subsystemId:1,createTime:"2026-07-21 10:00:00"},{id:3,mealId:1,menuId:4000001,subsystemId:2,createTime:"2026-07-21 10:00:00"},{id:4,mealId:1,menuId:0x1c9b99594f421000,subsystemId:99,createTime:"2026-07-21 10:00:00"}];async function Ce(a){return await new Promise(e=>setTimeout(e,ye)),E.filter(e=>e.mealId===a).map(e=>e.menuId)}async function Ee(a,e,s){await new Promise(u=>setTimeout(u,ye));const _=[];E.forEach((u,g)=>{u.mealId===a&&_.unshift(g)}),_.forEach(u=>E.splice(u,1));const y=E.reduce((u,g)=>Math.max(u,g.id),0);e.forEach((u,g)=>{E.push({id:y+g+1,mealId:a,menuId:u,subsystemId:s,createTime:Ea()})})}const K=d(!1),Q=d([]),A=d(!1),h=d(!1),V=d(),D=d(),L=d(!1),S=d(!1),b=d(null),k=d(1),R=d([]),Z=d([]),$=d(!1),z=d(!1),M=d(null),ee=Oa.filter(a=>!a.isHidden),ae=d({}),p=P({name:"",mealType:"",status:""}),T=P({pageNum:1,pageSize:20}),le=J(()=>{let a=Q.value;return p.name&&(a=a.filter(e=>La(p.name,e.name))),p.mealType!==""&&(a=a.filter(e=>e.mealType===Number(p.mealType))),p.status!==""&&(a=a.filter(e=>e.status===Number(p.status))),a}),te=J(()=>le.value.length),Le=J(()=>Sa(le.value,T.pageNum,T.pageSize)),i=P({code:"",name:"",mealType:"",projectType:j.EMERGENCY,sort:0,status:N.NORMAL}),r=P({code:"",name:"",mealType:"",projectType:j.EMERGENCY,sort:0,status:N.NORMAL}),ne={code:[{required:!0,message:"请输入套餐代码",trigger:"blur"}],projectType:[{required:!0,message:"请选择工程分类",trigger:"change"}],mealType:[{required:!0,message:"请选择套餐类型",trigger:"change"}],name:[{required:!0,message:"请输入套餐名称",trigger:"blur"}],status:[{required:!0,message:"请选择状态",trigger:"change"}]},Se=[{prop:"code",label:"套餐代码",width:200,slot:"code"},{prop:"name",label:"套餐名称",minWidth:140},{prop:"mealType",label:"套餐类型",width:150,slot:"mealType",highlight:!0},{prop:"projectType",label:"工程分类",width:110,align:"center",highlight:!0,cellType:"tag",tagMap:Ia,tagLabelMap:va},{prop:"sort",label:"排序",width:80},{prop:"status",label:"状态",width:120,slot:"status"},{prop:"creater",label:"创建人",width:110,slot:"creater"},{type:"audit",prop:"createTime",label:"创建时间"},{type:"audit",prop:"updater",label:"修改人"},{type:"audit",prop:"updateTime",label:"修改时间"},{type:"actions",label:"操作",slot:"actions"}],ve=[{label:"编辑",icon:He,handler:a=>Ue(a)},{label:"绑定套餐",icon:Je,handler:a=>ke(a)},{label:"删除",icon:Qe,divided:!0,handler:a=>Ve(a)}];async function v(){K.value=!0;try{Q.value=await C.getAll()}finally{K.value=!1}}function Y(){T.pageNum=1}function Ie(){Object.assign(i,{code:"",name:"",mealType:"",projectType:j.EMERGENCY,sort:te.value+1,status:N.NORMAL}),A.value=!0}function Ue(a){Object.assign(r,{mealId:a.mealId,code:a.code,name:a.name,mealType:a.mealType,projectType:a.projectType??j.EMERGENCY,sort:a.sort,status:a.status}),h.value=!0}function se(){var a,e;(a=V.value)==null||a.resetFields(),(e=D.value)==null||e.resetFields()}async function Ae(){if(V.value){try{await V.value.validate()}catch{return}await fe({...i,mealType:Number(i.mealType)}),I.success(Va),A.value=!1,v()}}async function he(){if(D.value){try{await D.value.validate()}catch{return}r.mealId&&(await be(r.mealId,{...r,mealType:Number(r.mealType)}),I.success(Da),h.value=!1,v())}}async function Ve(a){await Na(a.name)&&(await Me(a.mealId),I.success(Aa),v())}async function De(a,e){if(a.status!==e&&!(e!==N.NORMAL&&e!==N.DISABLED))try{await Oe(a.mealId,e),a.status=e,I.success(ha)}catch{v()}}async function ke(a){b.value=a,k.value=1,L.value=!0,await Re(),await oe(1)}async function Re(){const a={};for(const e of ee){const s=await pe(e.subsystemId);a[e.subsystemId]=x(s).length}ae.value=a}async function oe(a){k.value=a,S.value=!0;try{const e=await pe(a);if(R.value=e,b.value){const s=await Ce(b.value.mealId),_=x(e);Z.value=s.filter(y=>_.includes(y)),re()}}finally{S.value=!1}}function x(a){const e=[];function s(_){_.forEach(y=>{var u;e.push(y.menuId),(u=y.children)!=null&&u.length&&s(y.children)})}return s(a),e}function xe(a){var e,s;a?(e=M.value)==null||e.setCheckedKeys(x(R.value)):(s=M.value)==null||s.setCheckedKeys([]),z.value=!1}function re(){var s;const a=x(R.value),e=((s=M.value)==null?void 0:s.getCheckedKeys())||[];$.value=e.length===a.length,z.value=e.length>0&&e.length<a.length}async function we(){var a,e;if(b.value){S.value=!0;try{const s=((a=M.value)==null?void 0:a.getCheckedKeys())||[],_=((e=M.value)==null?void 0:e.getHalfCheckedKeys())||[];await Ee(b.value.mealId,[...s,..._].map(Number),k.value),I.success("绑定保存成功"),L.value=!1}finally{S.value=!1}}}function q(a){return _e[a]||_e[99]}function Fe(a){var e;return((e=Ua[a])==null?void 0:e.label)||"未知"}function Be(a){return{0:"type-directory",1:"type-menu",2:"type-permission",99:"type-navigation"}[a]||""}function je(a){var e;return((e=B.find(s=>s.value===a))==null?void 0:e.label)||"未知"}function Pe(a){return{1:"#409EFF",2:"#67C23A",3:"#E6A23C",4:"#9B59B6"}[a]||"#909399"}async function Ge(a){fa(a)}return Ra(()=>v()),(a,e)=>{var me;const s=ge("table-structure-drawer"),_=ca,y=_a,u=pa,g=Ze,Ke=ma,$e=da,ze=ia,Ye=ua,qe=ge("card-layout"),w=ta,c=la,ue=ya,F=Ta,ie=ga,de=aa,W=ra,We=na,Xe=sa;return G(),H(Te,null,[t(qe,{title:"套餐管理"},{"title-extra":n(()=>[t(s,{sql:[m(ja),m(Pa)]},null,8,["sql"])]),search:n(()=>[t(_,{modelValue:p.name,"onUpdate:modelValue":e[0]||(e[0]=l=>p.name=l),placeholder:"搜索套餐名称",onSearch:Y},null,8,["modelValue"]),t(y,{modelValue:p.mealType,"onUpdate:modelValue":e[1]||(e[1]=l=>p.mealType=l),placeholder:"套餐类型",options:m(B).map(l=>({label:l.label,value:l.value})),onSearch:Y},null,8,["modelValue","options"]),t(y,{modelValue:p.status,"onUpdate:modelValue":e[2]||(e[2]=l=>p.status=l),placeholder:"状态",options:m(X),onSearch:Y},null,8,["modelValue","options"])]),actions:n(()=>[t(u,{"margin-left":10,onClick:Ie},{default:n(()=>[...e[22]||(e[22]=[U("新增套餐",-1)])]),_:1})]),default:n(()=>[t(Ye,{pageNum:T.pageNum,"onUpdate:pageNum":e[3]||(e[3]=l=>T.pageNum=l),pageSize:T.pageSize,"onUpdate:pageSize":e[4]||(e[4]=l=>T.pageSize=l),data:Le.value,columns:Se,total:te.value,loading:K.value,"row-key":"mealId","show-tool-bar":!1},{code:n(({row:l})=>[o("div",Ga,[o("span",Ka,f(l.code),1),t(g,{content:"复制代码",placement:"top"},{default:n(()=>[t(u,{link:"",type:"primary",icon:m(ea),onClick:O=>Ge(l.code)},null,8,["icon","onClick"])]),_:2},1024)])]),mealType:n(({row:l})=>[t(Ke,{color:Pe(l.mealType),effect:"dark",round:""},{default:n(()=>[U(f(je(l.mealType)),1)]),_:2},1032,["color"])]),status:n(({row:l})=>[t($e,{"model-value":l.status,"active-value":m(N).NORMAL,"inactive-value":m(N).DISABLED,"active-text":"正常","inactive-text":"停用",onChange:O=>De(l,O)},null,8,["model-value","active-value","inactive-value","onChange"])]),creater:n(({row:l})=>[o("span",null,f(l.creater),1)]),actions:n(({row:l})=>[t(ze,{items:ve,row:l},null,8,["row"])]),_:1},8,["pageNum","pageSize","data","total","loading"])]),_:1}),t(W,{modelValue:A.value,"onUpdate:modelValue":e[11]||(e[11]=l=>A.value=l),title:"新增套餐",size:"480px",direction:"rtl","destroy-on-close":"","confirm-text":"确认创建","on-confirm":Ae,onClosed:se},{default:n(()=>[t(de,{ref_key:"addFormRef",ref:V,model:i,rules:ne,"label-width":"100px","label-position":"right"},{default:n(()=>[t(c,{label:"套餐代码",prop:"code"},{default:n(()=>[t(w,{modelValue:i.code,"onUpdate:modelValue":e[5]||(e[5]=l=>i.code=l),placeholder:"请输入代码，如：PKG_PROV_TRANSPORT",maxlength:"50","show-word-limit":""},null,8,["modelValue"])]),_:1}),t(c,{label:"套餐类型",prop:"mealType"},{default:n(()=>[t(ue,{modelValue:i.mealType,"onUpdate:modelValue":e[6]||(e[6]=l=>i.mealType=l),options:m(B),placeholder:"请选择套餐类型"},null,8,["modelValue","options"])]),_:1}),t(c,{label:"工程分类",prop:"projectType"},{default:n(()=>[t(F,{modelValue:i.projectType,"onUpdate:modelValue":e[7]||(e[7]=l=>i.projectType=l),options:m(ce)},null,8,["modelValue","options"])]),_:1}),t(c,{label:"套餐名称",prop:"name"},{default:n(()=>[t(w,{modelValue:i.name,"onUpdate:modelValue":e[8]||(e[8]=l=>i.name=l),placeholder:"请输入套餐名称",maxlength:"50","show-word-limit":""},null,8,["modelValue"])]),_:1}),t(c,{label:"排序",prop:"sort"},{default:n(()=>[t(ie,{modelValue:i.sort,"onUpdate:modelValue":e[9]||(e[9]=l=>i.sort=l),min:0,max:9999,width:"180px"},null,8,["modelValue"])]),_:1}),t(c,{label:"状态",prop:"status"},{default:n(()=>[t(F,{modelValue:i.status,"onUpdate:modelValue":e[10]||(e[10]=l=>i.status=l),options:m(X)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),t(W,{modelValue:h.value,"onUpdate:modelValue":e[18]||(e[18]=l=>h.value=l),title:"编辑套餐",size:"480px",direction:"rtl","destroy-on-close":"","confirm-text":"保存修改","on-confirm":he,onClosed:se},{default:n(()=>[t(de,{ref_key:"editFormRef",ref:D,model:r,rules:ne,"label-width":"100px","label-position":"right"},{default:n(()=>[t(c,{label:"套餐代码",prop:"code"},{default:n(()=>[t(w,{modelValue:r.code,"onUpdate:modelValue":e[12]||(e[12]=l=>r.code=l),disabled:"",maxlength:"50"},null,8,["modelValue"])]),_:1}),t(c,{label:"套餐类型",prop:"mealType"},{default:n(()=>[t(ue,{modelValue:r.mealType,"onUpdate:modelValue":e[13]||(e[13]=l=>r.mealType=l),options:m(B),placeholder:"请选择套餐类型"},null,8,["modelValue","options"])]),_:1}),t(c,{label:"工程分类",prop:"projectType"},{default:n(()=>[t(F,{modelValue:r.projectType,"onUpdate:modelValue":e[14]||(e[14]=l=>r.projectType=l),options:m(ce)},null,8,["modelValue","options"])]),_:1}),t(c,{label:"套餐名称",prop:"name"},{default:n(()=>[t(w,{modelValue:r.name,"onUpdate:modelValue":e[15]||(e[15]=l=>r.name=l),placeholder:"请输入套餐名称",maxlength:"50","show-word-limit":""},null,8,["modelValue"])]),_:1}),t(c,{label:"排序",prop:"sort"},{default:n(()=>[t(ie,{modelValue:r.sort,"onUpdate:modelValue":e[16]||(e[16]=l=>r.sort=l),min:0,max:9999,width:"180px"},null,8,["modelValue"])]),_:1}),t(c,{label:"状态",prop:"status"},{default:n(()=>[t(F,{modelValue:r.status,"onUpdate:modelValue":e[17]||(e[17]=l=>r.status=l),options:m(X)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),t(W,{modelValue:L.value,"onUpdate:modelValue":e[21]||(e[21]=l=>L.value=l),title:`绑定菜单 - ${((me=b.value)==null?void 0:me.name)||""}`,size:"50%",direction:"rtl","destroy-on-close":""},{footer:n(()=>[o("div",al,[t(u,{"margin-left":10,onClick:e[20]||(e[20]=l=>L.value=!1)},{default:n(()=>[...e[26]||(e[26]=[U("取消",-1)])]),_:1}),t(u,{type:"primary",loading:S.value,"margin-left":10,onClick:we},{default:n(()=>[...e[27]||(e[27]=[U("保存绑定",-1)])]),_:1},8,["loading"])])]),default:n(()=>[o("div",$a,[o("div",za,[e[23]||(e[23]=o("div",{class:"bind-left-header"},[o("span",null,"子系统")],-1)),o("div",Ya,[(G(!0),H(Te,null,xa(m(ee),l=>(G(),H("div",{key:l.subsystemId,class:Ne(["bind-subsystem-item",{active:k.value===l.subsystemId}]),onClick:O=>oe(l.subsystemId)},[o("div",{class:"subsystem-icon",style:wa({background:q(l.subsystemId).bg})},[t(We,{color:q(l.subsystemId).color},{default:n(()=>[(G(),Fa(Ba(q(l.subsystemId).icon)))]),_:2},1032,["color"])],4),o("span",Wa,f(l.subsystemShortName),1),o("span",Xa,"（"+f(ae.value[l.subsystemId]||0)+"）",1)],10,qa))),128))])]),o("div",Ha,[o("div",Ja,[e[25]||(e[25]=o("span",null,"菜单列表",-1)),t(Xe,{modelValue:$.value,"onUpdate:modelValue":e[19]||(e[19]=l=>$.value=l),indeterminate:z.value,onChange:xe},{default:n(()=>[...e[24]||(e[24]=[U("全选",-1)])]),_:1},8,["modelValue","indeterminate"])]),o("div",Qa,[t(m(oa),{ref_key:"bindTreeRef",ref:M,data:R.value,"show-checkbox":"","node-key":"menuId","default-checked-keys":Z.value,props:{label:"menuName",children:"children"},"default-expand-all":"",indent:24,onCheckChange:re},{default:n(({node:l,data:O})=>[o("span",Za,[o("span",el,f(l.label),1),o("span",{class:Ne(["menu-type-tag",Be(O.menuType)])},f(Fe(O.menuType)),3)])]),_:1},8,["data","default-checked-keys"])])])])]),_:1},8,["modelValue","title"])],64)}}}),fl=ba(ll,[["__scopeId","data-v-aef64346"]]);export{fl as default};

import{au as He,aD as Ze,bz as Je,l as Qe,a_ as ea,bb as aa,bc as la,R as ta,d as na,bd as sa,b0 as oa,a as I}from"./element-plus-DrBWcvYy.js";import{x as ra,a2 as ua,a3 as ia,y as da,K as ma,k as ca,a as pa,B as _a,A as ya,T as ga,e as Ta,W as pe,X as ba,Z as w,a1 as Na,F as fa,C as Ma,aw as Ca,a5 as Ea,a6 as Oa,d as La}from"./index-DlrKsU8X.js";/* empty css                     */import{m as B,b as va}from"./mealData-Bx9ZOQEZ.js";import{m as Ia}from"./subsystemData-CcikfVPA.js";import{c as _e}from"./menuMockApi-AwpzlPgC.js";import{c as Sa}from"./mockCrud-Diyr-LrV.js";import{S as j,b as ye}from"./common-CRcHQUfu.js";import{G as Ua,n as Aa,L as K,M as X,a0 as t,W as n,P as o,$ as b,u as m,_ as S,F as ge,ae as ha,S as Te,R as Va,O as Da,Y as Fa,r as i,k as P,c as H,aj as be}from"./vue-vendor-BFL4yudo.js";import"./markdown-CGqRJECw.js";import"./editor-CDjaDkQU.js";import"./ol-map-BDSc84yL.js";const ka=`-- Table structure for sys_meal
-- ----------------------------
DROP TABLE IF EXISTS "public"."sys_meal";
CREATE TABLE "public"."sys_meal" (
  "meal_id" bigint NOT NULL,
  "meal_name" varchar(128) COLLATE "pg_catalog"."default" NOT NULL,
  "meal_code" varchar(64) COLLATE "pg_catalog"."default" NOT NULL,
  "meal_type" integer NOT NULL,
  "project_type" integer NOT NULL DEFAULT 1,
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
COMMENT ON COLUMN "public"."sys_meal"."project_type" IS '工程分类（1-应急工程；2-路网工程）';
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
`,Ra=`-- Table structure for sys_meal_menu_rel
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
`,xa={class:"code-cell"},wa={class:"code-text"},Ba={class:"bind-container"},ja={class:"bind-left"},Ka={class:"bind-subsystem-list"},Pa=["onClick"],za={class:"subsystem-name"},$a={class:"subsystem-count"},Ga={class:"bind-right"},qa={class:"bind-right-header"},Wa={class:"bind-menu-tree"},Ya={class:"bind-tree-node"},Xa={class:"node-label"},Ha={class:"drawer-footer"},Za=Ua({__name:"MealManagement",setup(Ja){const Z=a=>new Promise(e=>setTimeout(e,a)),C=Sa(va,{idKey:"mealId"});function Ne(a){return C.add({...a,code:a.code.toUpperCase(),remark:""})}function fe(a,e){return C.update(a,{...e,code:e.code.toUpperCase()})}function Me(a){return C.remove(a)}function Ce(a,e){return C.toggleStatus(a,e)}const E=[{id:1,mealId:1,menuId:3000001,subsystemId:1,createTime:"2026-07-21 10:00:00"},{id:2,mealId:1,menuId:3000002,subsystemId:1,createTime:"2026-07-21 10:00:00"},{id:3,mealId:1,menuId:4000001,subsystemId:2,createTime:"2026-07-21 10:00:00"},{id:4,mealId:1,menuId:0x1c9b99594f421000,subsystemId:99,createTime:"2026-07-21 10:00:00"}];async function Ee(a){return await Z(200+Math.random()*200),E.filter(e=>e.mealId===a).map(e=>e.menuId)}async function Oe(a,e,s){await Z(300+Math.random()*300);const _=[];E.forEach((d,T)=>{d.mealId===a&&_.unshift(T)}),_.forEach(d=>E.splice(d,1));const y=E.reduce((d,T)=>Math.max(d,T.id),0);e.forEach((d,T)=>{E.push({id:y+T+1,mealId:a,menuId:d,subsystemId:s,createTime:Ca()})})}const z=i(!1),J=i([]),U=i(!1),A=i(!1),h=i(),V=i(),O=i(!1),L=i(!1),N=i(null),D=i(1),F=i([]),Q=i([]),$=i(!1),G=i(!1),f=i(null),ee=Ia.filter(a=>!a.isHidden),ae=i({}),c=P({name:"",mealType:"",status:""}),g=P({pageNum:1,pageSize:20}),le=H(()=>{let a=J.value;return c.name&&(a=a.filter(e=>Oa(c.name,e.name))),c.mealType!==""&&(a=a.filter(e=>e.mealType===Number(c.mealType))),c.status!==""&&(a=a.filter(e=>e.status===Number(c.status))),a}),te=H(()=>le.value.length),Le=H(()=>Ea(le.value,g.pageNum,g.pageSize)),u=P({code:"",name:"",mealType:"",projectType:w.EMERGENCY,sort:0,status:1101}),r=P({code:"",name:"",mealType:"",projectType:w.EMERGENCY,sort:0,status:1101}),ne={code:[{required:!0,message:"请输入套餐代码",trigger:"blur"}],projectType:[{required:!0,message:"请选择工程分类",trigger:"change"}],mealType:[{required:!0,message:"请选择节点类型",trigger:"change"}],name:[{required:!0,message:"请输入套餐名称",trigger:"blur"}],status:[{required:!0,message:"请选择状态",trigger:"change"}]},ve=[{prop:"code",label:"套餐代码",width:200,slot:"code"},{prop:"name",label:"套餐名称",minWidth:140},{prop:"mealType",label:"节点类型",width:150,slot:"mealType"},{prop:"projectType",label:"工程分类",width:110,align:"center",highlight:!0,cellType:"tag",tagMap:ia,tagLabelMap:ua},{prop:"sort",label:"排序",width:80},{prop:"status",label:"状态",width:120,slot:"status"},{prop:"creater",label:"创建人",width:110,slot:"creater"},{type:"audit",prop:"createTime",label:"创建时间"},{type:"audit",prop:"updater",label:"修改人"},{type:"audit",prop:"updateTime",label:"修改时间"},{type:"actions",label:"操作",slot:"actions"}],Ie=[{label:"编辑",icon:He,handler:a=>Ue(a)},{label:"绑定套餐",icon:Ze,handler:a=>Fe(a)},{label:"删除",icon:Je,divided:!0,handler:a=>Ve(a)}];async function v(){z.value=!0;try{J.value=await C.getAll()}finally{z.value=!1}}function q(){g.pageNum=1}function Se(){Object.assign(u,{code:"",name:"",mealType:"",projectType:w.EMERGENCY,sort:te.value+1,status:1101}),U.value=!0}function Ue(a){Object.assign(r,{mealId:a.mealId,code:a.code,name:a.name,mealType:a.mealType,projectType:a.projectType??w.EMERGENCY,sort:a.sort,status:a.status}),A.value=!0}function se(){var a,e;(a=h.value)==null||a.resetFields(),(e=V.value)==null||e.resetFields()}async function Ae(){if(h.value){try{await h.value.validate()}catch{return}await Ne({...u,mealType:Number(u.mealType)}),I.success("新增成功"),U.value=!1,v()}}async function he(){if(V.value){try{await V.value.validate()}catch{return}r.mealId&&(await fe(r.mealId,{...r,mealType:Number(r.mealType)}),I.success("编辑成功"),A.value=!1,v())}}async function Ve(a){await Na(a.name)&&(await Me(a.mealId),I.success("删除成功"),v())}async function De(a,e){if(a.status!==e&&[j.NORMAL,j.DISABLED].includes(e))try{await Ce(a.mealId,e),a.status=e,I.success("状态已切换")}catch{v()}}async function Fe(a){N.value=a,D.value=1,O.value=!0,await ke(),await oe(1)}async function ke(){const a={};for(const e of ee){const s=await _e(e.subsystemId);a[e.subsystemId]=k(s).length}ae.value=a}async function oe(a){D.value=a,L.value=!0;try{const e=await _e(a);if(F.value=e,N.value){const s=await Ee(N.value.mealId),_=k(e);Q.value=s.filter(y=>_.includes(y)),re()}}finally{L.value=!1}}function k(a){const e=[];function s(_){_.forEach(y=>{var d;e.push(y.menuId),(d=y.children)!=null&&d.length&&s(y.children)})}return s(a),e}function Re(a){var e,s;a?(e=f.value)==null||e.setCheckedKeys(k(F.value)):(s=f.value)==null||s.setCheckedKeys([]),G.value=!1}function re(){var s;const a=k(F.value),e=((s=f.value)==null?void 0:s.getCheckedKeys())||[];$.value=e.length===a.length,G.value=e.length>0&&e.length<a.length}async function xe(){var a,e;if(N.value){L.value=!0;try{const s=((a=f.value)==null?void 0:a.getCheckedKeys())||[],_=((e=f.value)==null?void 0:e.getHalfCheckedKeys())||[];await Oe(N.value.mealId,[...s,..._].map(Number),D.value),I.success("绑定保存成功"),O.value=!1}finally{L.value=!1}}}const ue={1:{icon:"Bell",color:"#E6A23C",bg:"linear-gradient(135deg, #FDF6EC 0%, #FAECD8 100%)"},2:{icon:"Document",color:"#409EFF",bg:"linear-gradient(135deg, #ECF5FF 0%, #D9ECFF 100%)"},3:{icon:"Warning",color:"#F56C6C",bg:"linear-gradient(135deg, #FEF0F0 0%, #FDE2E2 100%)"},4:{icon:"Connection",color:"#9B59B6",bg:"linear-gradient(135deg, #F4ECF7 0%, #E8DAEF 100%)"},5:{icon:"Box",color:"#67C23A",bg:"linear-gradient(135deg, #F0F9EB 0%, #E1F3D8 100%)"},99:{icon:"Setting",color:"#606266",bg:"linear-gradient(135deg, #F5F7FA 0%, #E9ECEF 100%)"}};function W(a){return ue[a]||ue[99]}function we(a){return{0:"目录",1:"菜单",2:"权限",99:"导航"}[a]||"未知"}function Be(a){return{0:"type-directory",1:"type-menu",2:"type-permission",99:"type-navigation"}[a]||""}function je(a){var e;return((e=B.find(s=>s.value===a))==null?void 0:e.label)||"未知"}function Ke(a){return{1:"#409EFF",2:"#67C23A",3:"#E6A23C",4:"#9B59B6"}[a]||"#909399"}async function Pe(a){fa(a)}return Aa(()=>v()),(a,e)=>{var ce;const s=be("table-structure-drawer"),_=_a,y=ya,d=pa,T=Qe,ze=ca,$e=ma,Ge=da,qe=ra,We=be("panel-layout"),R=ta,p=la,ie=ga,x=Ta,de=ba,me=aa,Y=Ma,Ye=na,Xe=sa;return K(),X(ge,null,[t(We,{title:"套餐管理"},{"title-extra":n(()=>[t(s,{sql:[m(ka),m(Ra)]},null,8,["sql"])]),search:n(()=>[t(_,{modelValue:c.name,"onUpdate:modelValue":e[0]||(e[0]=l=>c.name=l),placeholder:"搜索套餐名称",onSearch:q},null,8,["modelValue"]),t(y,{modelValue:c.mealType,"onUpdate:modelValue":e[1]||(e[1]=l=>c.mealType=l),placeholder:"节点类型",options:m(B).map(l=>({label:l.label,value:l.value})),onSearch:q},null,8,["modelValue","options"]),t(y,{modelValue:c.status,"onUpdate:modelValue":e[2]||(e[2]=l=>c.status=l),placeholder:"状态",options:[{label:"正常",value:1101},{label:"停用",value:1102}],onSearch:q},null,8,["modelValue"])]),actions:n(()=>[t(d,{"margin-left":10,onClick:Se},{default:n(()=>[...e[22]||(e[22]=[S("新增套餐",-1)])]),_:1})]),default:n(()=>[t(qe,{"page-num":g.pageNum,"onUpdate:pageNum":e[3]||(e[3]=l=>g.pageNum=l),"page-size":g.pageSize,"onUpdate:pageSize":e[4]||(e[4]=l=>g.pageSize=l),data:Le.value,columns:ve,total:te.value,loading:z.value,"row-key":"mealId","show-tool-bar":!1},{code:n(({row:l})=>[o("div",xa,[o("span",wa,b(l.code),1),t(T,{content:"复制代码",placement:"top"},{default:n(()=>[t(d,{link:"",type:"primary",icon:m(ea),onClick:M=>Pe(l.code)},null,8,["icon","onClick"])]),_:2},1024)])]),mealType:n(({row:l})=>[t(ze,{color:Ke(l.mealType),effect:"dark",round:""},{default:n(()=>[S(b(je(l.mealType)),1)]),_:2},1032,["color"])]),status:n(({row:l})=>[t($e,{"model-value":l.status,"active-value":m(j).NORMAL,"inactive-value":m(j).DISABLED,"active-text":"正常","inactive-text":"停用",onChange:M=>De(l,M)},null,8,["model-value","active-value","inactive-value","onChange"])]),creater:n(({row:l})=>[o("span",null,b(l.creater),1)]),actions:n(({row:l})=>[t(Ge,{items:Ie,row:l},null,8,["row"])]),_:1},8,["page-num","page-size","data","total","loading"])]),_:1}),t(Y,{modelValue:U.value,"onUpdate:modelValue":e[11]||(e[11]=l=>U.value=l),title:"新增套餐",size:"480px",direction:"rtl","destroy-on-close":"","confirm-text":"确认创建","on-confirm":Ae,onClosed:se},{default:n(()=>[t(me,{ref_key:"addFormRef",ref:h,model:u,rules:ne,"label-width":"100px","label-position":"right"},{default:n(()=>[t(p,{label:"套餐代码",prop:"code"},{default:n(()=>[t(R,{modelValue:u.code,"onUpdate:modelValue":e[5]||(e[5]=l=>u.code=l),placeholder:"请输入代码，如：PKG_PROV_TRANSPORT",maxlength:"50","show-word-limit":""},null,8,["modelValue"])]),_:1}),t(p,{label:"节点类型",prop:"mealType"},{default:n(()=>[t(ie,{modelValue:u.mealType,"onUpdate:modelValue":e[6]||(e[6]=l=>u.mealType=l),options:m(B),placeholder:"请选择节点类型"},null,8,["modelValue","options"])]),_:1}),t(p,{label:"工程分类",prop:"projectType"},{default:n(()=>[t(x,{modelValue:u.projectType,"onUpdate:modelValue":e[7]||(e[7]=l=>u.projectType=l),options:m(pe)},null,8,["modelValue","options"])]),_:1}),t(p,{label:"套餐名称",prop:"name"},{default:n(()=>[t(R,{modelValue:u.name,"onUpdate:modelValue":e[8]||(e[8]=l=>u.name=l),placeholder:"请输入套餐名称",maxlength:"50","show-word-limit":""},null,8,["modelValue"])]),_:1}),t(p,{label:"排序",prop:"sort"},{default:n(()=>[t(de,{modelValue:u.sort,"onUpdate:modelValue":e[9]||(e[9]=l=>u.sort=l),min:0,max:9999,width:"180px"},null,8,["modelValue"])]),_:1}),t(p,{label:"状态",prop:"status"},{default:n(()=>[t(x,{modelValue:u.status,"onUpdate:modelValue":e[10]||(e[10]=l=>u.status=l),options:m(ye)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),t(Y,{modelValue:A.value,"onUpdate:modelValue":e[18]||(e[18]=l=>A.value=l),title:"编辑套餐",size:"480px",direction:"rtl","destroy-on-close":"","confirm-text":"保存修改","on-confirm":he,onClosed:se},{default:n(()=>[t(me,{ref_key:"editFormRef",ref:V,model:r,rules:ne,"label-width":"100px","label-position":"right"},{default:n(()=>[t(p,{label:"套餐代码",prop:"code"},{default:n(()=>[t(R,{modelValue:r.code,"onUpdate:modelValue":e[12]||(e[12]=l=>r.code=l),disabled:"",maxlength:"50"},null,8,["modelValue"])]),_:1}),t(p,{label:"节点类型",prop:"mealType"},{default:n(()=>[t(ie,{modelValue:r.mealType,"onUpdate:modelValue":e[13]||(e[13]=l=>r.mealType=l),options:m(B),placeholder:"请选择节点类型"},null,8,["modelValue","options"])]),_:1}),t(p,{label:"工程分类",prop:"projectType"},{default:n(()=>[t(x,{modelValue:r.projectType,"onUpdate:modelValue":e[14]||(e[14]=l=>r.projectType=l),options:m(pe)},null,8,["modelValue","options"])]),_:1}),t(p,{label:"套餐名称",prop:"name"},{default:n(()=>[t(R,{modelValue:r.name,"onUpdate:modelValue":e[15]||(e[15]=l=>r.name=l),placeholder:"请输入套餐名称",maxlength:"50","show-word-limit":""},null,8,["modelValue"])]),_:1}),t(p,{label:"排序",prop:"sort"},{default:n(()=>[t(de,{modelValue:r.sort,"onUpdate:modelValue":e[16]||(e[16]=l=>r.sort=l),min:0,max:9999,width:"180px"},null,8,["modelValue"])]),_:1}),t(p,{label:"状态",prop:"status"},{default:n(()=>[t(x,{modelValue:r.status,"onUpdate:modelValue":e[17]||(e[17]=l=>r.status=l),options:m(ye)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),t(Y,{modelValue:O.value,"onUpdate:modelValue":e[21]||(e[21]=l=>O.value=l),title:`绑定菜单 - ${((ce=N.value)==null?void 0:ce.name)||""}`,size:"50%",direction:"rtl","destroy-on-close":""},{footer:n(()=>[o("div",Ha,[t(d,{"margin-left":10,onClick:e[20]||(e[20]=l=>O.value=!1)},{default:n(()=>[...e[26]||(e[26]=[S("取消",-1)])]),_:1}),t(d,{type:"primary",loading:L.value,"margin-left":10,onClick:xe},{default:n(()=>[...e[27]||(e[27]=[S("保存绑定",-1)])]),_:1},8,["loading"])])]),default:n(()=>[o("div",Ba,[o("div",ja,[e[23]||(e[23]=o("div",{class:"bind-left-header"},[o("span",null,"子系统")],-1)),o("div",Ka,[(K(!0),X(ge,null,ha(m(ee),l=>(K(),X("div",{key:l.subsystemId,class:Te(["bind-subsystem-item",{active:D.value===l.subsystemId}]),onClick:M=>oe(l.subsystemId)},[o("div",{class:"subsystem-icon",style:Va({background:W(l.subsystemId).bg})},[t(Ye,{color:W(l.subsystemId).color},{default:n(()=>[(K(),Da(Fa(W(l.subsystemId).icon)))]),_:2},1032,["color"])],4),o("span",za,b(l.subsystemShortName),1),o("span",$a,"（"+b(ae.value[l.subsystemId]||0)+"）",1)],10,Pa))),128))])]),o("div",Ga,[o("div",qa,[e[25]||(e[25]=o("span",null,"菜单列表",-1)),t(Xe,{modelValue:$.value,"onUpdate:modelValue":e[19]||(e[19]=l=>$.value=l),indeterminate:G.value,onChange:Re},{default:n(()=>[...e[24]||(e[24]=[S("全选",-1)])]),_:1},8,["modelValue","indeterminate"])]),o("div",Wa,[t(m(oa),{ref_key:"bindTreeRef",ref:f,data:F.value,"show-checkbox":"","node-key":"menuId","default-checked-keys":Q.value,props:{label:"menuName",children:"children"},"default-expand-all":"",indent:24,onCheckChange:re},{default:n(({node:l,data:M})=>[o("span",Ya,[o("span",Xa,b(l.label),1),o("span",{class:Te(["menu-type-tag",Be(M.menuType)])},b(we(M.menuType)),3)])]),_:1},8,["data","default-checked-keys"])])])])]),_:1},8,["modelValue","title"])],64)}}}),ml=La(Za,[["__scopeId","data-v-316022bd"]]);export{ml as default};

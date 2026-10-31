import{d as Ke,bc as Ge,bd as $e,M as qe,O as Ye,be as Xe,ba as We,ar as He,v as je,bo as Ze,a as K,P as Je}from"./element-plus-FTcyDTKl.js";import{m as Qe,s as el,j as ll,i as ol,b as tl,q as al,w as nl,o as rl,p as sl,v as il,g as ul}from"./index-BGoR6y1A.js";import{o as dl}from"./org_user_role_rel-z2-kft6H.js";import{r as D}from"./randomMock-C6-QJwcy.js";import{S as C,s as cl,a as _l,b as pl}from"./warning-BshV8eZN.js";import"./subsystem-BQNqsSr5.js";import{m as k,b as ml}from"./menuMockApi-CoQfgv5J.js";import{m as gl}from"./subsystemData-9ryuBAt0.js";import{p as Nl}from"./pagination-BHZHZx5b.js";import{D as ne,d as G,b as re}from"./misc-GijYeB5-.js";import{M as bl}from"./menu-Cvc35UU8.js";import{a as se}from"./subsystemPresentation-D4HFtJPT.js";import{c as Ll,M as Ol,a as fl}from"./ui-CkdNVOlu.js";import{G as Cl,n as Ml,M as V,a0 as t,W as n,F as $,r as i,aj as ie,k as q,L,_ as f,$ as d,R as Y,O as X,Y as ue,P as r,u as g,ae as de,S as ce,c as W}from"./vue-vendor-CYCT-Zs3.js";import"./mockCrud-VGUp_ajm.js";import"./subsystemData-AVVWZ4Z9.js";const Sl=`-- Table structure for org_role
-- ----------------------------
DROP TABLE IF EXISTS "public"."org_role";
CREATE TABLE "public"."org_role" (
  "role_id" bigint NOT NULL,
  "role_name" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "role_code" varchar(64) COLLATE "pg_catalog"."default",
  "role_level" integer NOT NULL DEFAULT 1,
  "data_scope" varchar(64) COLLATE "pg_catalog"."default",
  "display_order" integer NOT NULL DEFAULT 0,
  "status" integer NOT NULL DEFAULT 1101,
  "remark" varchar(500) COLLATE "pg_catalog"."default",
  "is_builtin" integer NOT NULL DEFAULT 0,
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
ALTER TABLE "public"."org_role" OWNER TO "postgres";
COMMENT ON COLUMN "public"."org_role"."role_id" IS '角色ID';
COMMENT ON COLUMN "public"."org_role"."role_name" IS '角色名称';
COMMENT ON COLUMN "public"."org_role"."role_code" IS '角色编码';
COMMENT ON COLUMN "public"."org_role"."role_level" IS '角色级别（数字越小权限越高）';
COMMENT ON COLUMN "public"."org_role"."data_scope" IS '数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限）';
COMMENT ON COLUMN "public"."org_role"."display_order" IS '排序字段';
COMMENT ON COLUMN "public"."org_role"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."org_role"."remark" IS '备注信息';
COMMENT ON COLUMN "public"."org_role"."is_builtin" IS '是否内建角色（0否 1是，内建角色不允许删除；仅超管/组织管理员可操作）';
COMMENT ON COLUMN "public"."org_role"."creater" IS '创建者';
COMMENT ON COLUMN "public"."org_role"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."org_role"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."org_role"."updater" IS '更新者';
COMMENT ON COLUMN "public"."org_role"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."org_role"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."org_role"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."org_role"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."org_role"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."org_role"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."org_role"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."org_role"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."org_role"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."org_role" IS '组织角色表';

-- ----------------------------

-- Indexes structure for table org_role
-- ----------------------------
CREATE INDEX "idx_org_role_role_level" ON "public"."org_role" USING btree (
  "role_level" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_org_role_status" ON "public"."org_role" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table org_role
-- ----------------------------
ALTER TABLE "public"."org_role" ADD CONSTRAINT "org_role_pkey" PRIMARY KEY ("role_id");

-- ----------------------------
`,Tl=`-- Table structure for org_role_menu_rel
-- ----------------------------
DROP TABLE IF EXISTS "public"."org_role_menu_rel";
CREATE TABLE "public"."org_role_menu_rel" (
  "id" bigint NOT NULL,
  "role_id" bigint NOT NULL,
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
ALTER TABLE "public"."org_role_menu_rel" OWNER TO "postgres";
COMMENT ON COLUMN "public"."org_role_menu_rel"."id" IS '主键ID（自增）';
COMMENT ON COLUMN "public"."org_role_menu_rel"."role_id" IS '角色ID';
COMMENT ON COLUMN "public"."org_role_menu_rel"."menu_id" IS '菜单ID';
COMMENT ON COLUMN "public"."org_role_menu_rel"."creater" IS '创建者';
COMMENT ON COLUMN "public"."org_role_menu_rel"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."org_role_menu_rel"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."org_role_menu_rel"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."org_role_menu_rel"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."org_role_menu_rel"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."org_role_menu_rel"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."org_role_menu_rel"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."org_role_menu_rel"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."org_role_menu_rel"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."org_role_menu_rel" IS '组织角色菜单关联表';

-- ----------------------------

-- Indexes structure for table org_role_menu_rel
-- ----------------------------
CREATE INDEX "idx_org_role_menu_rel_menu_role" ON "public"."org_role_menu_rel" USING btree (
  "menu_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "role_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);
CREATE INDEX "idx_org_role_menu_rel_role_menu" ON "public"."org_role_menu_rel" USING btree (
  "role_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "menu_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);

-- Primary Key structure for table org_role_menu_rel
-- ----------------------------
ALTER TABLE "public"."org_role_menu_rel" ADD CONSTRAINT "org_role_menu_rel_pkey" PRIMARY KEY ("id");

-- ----------------------------
`,El=[{roleId:1,roleCode:"SUPER_ADMIN",roleName:"超级管理员",description:"拥有全部菜单权限，可管理所有角色与系统配置；系统内置角色不可删除",dataScope:"ORG_AND_CHILDREN",roleLevel:1,isBuiltin:1,menuCount:14,memberCount:3,status:C.NORMAL,menuIds:[10001001,10001002,10001003,10001005,10001010,10001011,10001012,10001013,10001014,10001015,10001016,10001017,10001018,10001019],...D()},{roleId:2,roleCode:"ORG_ADMIN",roleName:"组织管理员",description:"管理本组织及下级组织的部门、成员、角色等数据",dataScope:"ORG_AND_CHILDREN",roleLevel:5,isBuiltin:0,menuCount:7,memberCount:12,status:C.NORMAL,menuIds:[10001011,10001012,10001013,10001014,10001015,10001016,10001017],...D()},{roleId:3,roleCode:"ON_DUTY",roleName:"值班人员",description:"负责日常值守、信息报送与值班记录填写",dataScope:"ORG",roleLevel:30,isBuiltin:0,menuCount:3,memberCount:8,status:C.NORMAL,menuIds:[10001011,10001012,10001017],...D()},{roleId:4,roleCode:"NORMAL_USER",roleName:"普通用户",description:"基础查看权限，仅可访问本人相关数据",dataScope:"SELF",roleLevel:100,isBuiltin:0,menuCount:1,memberCount:27,status:C.NORMAL,menuIds:[10001012],...D()}],vl={class:"name-text"},Il={class:"scope-option"},Ul={class:"scope-label"},Al={class:"bind-container"},yl={class:"bind-left"},hl={class:"bind-subsystem-list"},Rl=["onClick"],Dl={class:"subsystem-name"},kl={class:"subsystem-count"},Vl={class:"bind-right"},Bl={class:"bind-right-header"},Fl={class:"bind-menu-tree"},xl={class:"bind-tree-node"},wl={class:"node-label"},Pl={class:"drawer-footer"},_e=100,zl=Cl({__name:"RoleManagement",setup(Kl){const B=i(!1),_=i(),M=i(!1),O=i(!1),E=i(),v=i(!1),p=i(null),H=i([]),m=q({roleName:"",dataScope:""}),F=i(1),I=i([]),S=i([]),U=i(!1),A=i(!1),j=i({}),y=gl.filter(l=>!l.isHidden),a=q({roleId:0,roleCode:"",roleName:"",description:"",dataScope:ne.SELF,roleLevel:_e,isBuiltin:0,status:C.NORMAL}),pe={roleCode:[{required:!0,message:"请输入角色编码",trigger:"blur"},{pattern:/^[A-Z_]+$/,message:"只能包含大写字母和下划线",trigger:"blur"}],roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"}]},me=[{label:"自定义",value:0},{label:"内建",value:1}],N=q({pageNum:1,pageSize:20}),ge=[{prop:"roleName",label:"角色名称",minWidth:190,slot:"roleName"},{prop:"roleCode",label:"角色编码",width:140,cellType:"code"},{prop:"isBuiltin",label:"角色类型",width:100,align:"center",highlight:!0,slot:"isBuiltin"},{prop:"description",label:"角色描述",minWidth:150,showOverflowTooltip:!0},{prop:"dataScope",label:"数据范围",width:150,slot:"dataScope"},{prop:"roleLevel",label:"角色级别",width:100},{prop:"menuCount",label:"菜单权限",width:100,slot:"menuCount"},{prop:"status",label:"状态",width:80,cellType:"tag",tagMap:_l,tagLabelMap:cl},{type:"audit",prop:"creater",label:"创建人"},{type:"audit",prop:"createTime",label:"创建时间"},{type:"actions",label:"操作",slot:"actions"}],Z=W(()=>{let l=H.value;return m.roleName&&(l=l.filter(e=>e.roleName.includes(m.roleName))),m.dataScope&&(l=l.filter(e=>e.dataScope===m.dataScope)),l}),Ne=W(()=>Z.value.length),be=W(()=>Nl(Z.value,N.pageNum,N.pageSize));function Le(l){return[{label:"编辑",icon:He,handler:e=>fe(e)},{label:"配置菜单",icon:je,handler:e=>Se(e)},{label:"删除",icon:Ze,divided:!0,disabled:l.isBuiltin===1,handler:e=>Me(e)}]}function h(){B.value=!0;try{H.value=El}finally{B.value=!1}}function J(){N.pageNum=1}function Oe(){O.value=!1,a.roleId=0,a.roleCode="",a.roleName="",a.description="",a.dataScope=ne.SELF,a.roleLevel=_e,a.isBuiltin=0,a.status=C.NORMAL,M.value=!0}function fe(l){O.value=!0,a.roleId=l.roleId,a.roleCode=l.roleCode,a.roleName=l.roleName,a.description=l.description,a.dataScope=l.dataScope,a.roleLevel=l.roleLevel,a.isBuiltin=l.isBuiltin??0,a.status=l.status,M.value=!0}function Ce(){E.value&&E.value.validate(l=>{l&&(K.success(O.value?Ol:fl),M.value=!1,h())})}async function Me(l){await il(l.roleName)&&(K.success(Ll),h())}function Se(l){p.value=l,v.value=!0,Te(),y.length>0&&Q(y[0].subsystemId)}function Te(){const l={};for(const e of y)l[e.subsystemId]=k.filter(s=>s.subsystemId===e.subsystemId).length;j.value=l}function Q(l){F.value=l;const e=k.filter(s=>s.subsystemId===l);if(I.value=ml(e),p.value){const s=p.value.menuIds.filter(T=>{const c=k.find(R=>R.menuId===T);return c&&c.subsystemId===l});S.value=s}else S.value=[];U.value=!1,A.value=!1}function Ee(l){if(!_.value)return;if(l===!0){const s=ee(I.value);_.value.setCheckedKeys(s),S.value=s}else _.value.setCheckedKeys([]),S.value=[];A.value=!1}function ee(l){const e=[];function s(T){for(const c of T)e.push(c.menuId),c.children&&c.children.length>0&&s(c.children)}return s(l),e}function ve(){if(!_.value)return;const l=_.value.getCheckedKeys(),e=ee(I.value);U.value=l.length===e.length,A.value=l.length>0&&l.length<e.length}function Ie(){!_.value||!p.value||(_.value.getCheckedKeys(),p.value.menuIds.filter(l=>{const e=k.find(s=>s.menuId===l);return e&&e.subsystemId!==F.value}),K.success("菜单配置保存成功"),v.value=!1,h())}function x(l){return se[l]||se[99]}function Ue(l){return re[l]||"#909399"}function Ae(l){const e=G.find(s=>s.value===l);return(e==null?void 0:e.label)||l}function ye(l){return{0:"type-directory",1:"type-menu",2:"type-permission",99:"type-navigation"}[l]||""}function he(l){var e;return((e=bl[l])==null?void 0:e.label)||""}function Re(){var l;(l=E.value)==null||l.resetFields()}return Ml(()=>{h()}),(l,e)=>{var ae;const s=ie("table-structure-drawer"),T=al,c=nl,R=tl,le=Ke,w=ol,De=ll,ke=el,Ve=ie("card-layout"),P=qe,b=$e,Be=Je,Fe=Ye,xe=rl,oe=sl,we=Ge,te=Qe,Pe=Xe,ze=We;return L(),V($,null,[t(Ve,{title:"角色管理"},{"title-extra":n(()=>[t(s,{sql:[g(Sl),g(Tl),g(dl)]},null,8,["sql"])]),search:n(()=>[t(T,{modelValue:m.roleName,"onUpdate:modelValue":e[0]||(e[0]=o=>m.roleName=o),placeholder:"搜索角色名称",onSearch:J},null,8,["modelValue"]),t(c,{modelValue:m.dataScope,"onUpdate:modelValue":e[1]||(e[1]=o=>m.dataScope=o),placeholder:"数据范围",options:g(G),onSearch:J},null,8,["modelValue","options"])]),actions:n(()=>[t(R,{"margin-left":10,onClick:Oe},{default:n(()=>[...e[14]||(e[14]=[f("新增角色",-1)])]),_:1})]),default:n(()=>[t(ke,{pageNum:N.pageNum,"onUpdate:pageNum":e[2]||(e[2]=o=>N.pageNum=o),pageSize:N.pageSize,"onUpdate:pageSize":e[3]||(e[3]=o=>N.pageSize=o),data:be.value,columns:ge,total:Ne.value,loading:B.value,"row-key":"roleId","show-tool-bar":!1},{roleName:n(({row:o})=>[t(le,{style:Y({color:o.isBuiltin===1?"#E6A23C":"#67C23A"})},{default:n(()=>[(L(),X(ue(o.isBuiltin===1?"Lock":"User")))]),_:2},1032,["style"]),r("span",vl,d(o.roleName),1)]),isBuiltin:n(({row:o})=>[t(w,{type:o.isBuiltin===1?"warning":"info",effect:"plain",size:"small"},{default:n(()=>[f(d(o.isBuiltin===1?"内建":"自定义"),1)]),_:2},1032,["type"])]),dataScope:n(({row:o})=>[t(w,{color:Ue(o.dataScope),effect:"dark",size:"small"},{default:n(()=>[f(d(Ae(o.dataScope)),1)]),_:2},1032,["color"])]),menuCount:n(({row:o})=>[t(w,{size:"small",effect:"plain"},{default:n(()=>[f(d(o.menuCount),1)]),_:2},1024)]),actions:n(({row:o})=>[t(De,{items:Le(o),row:o},null,8,["items","row"])]),_:1},8,["pageNum","pageSize","data","total","loading"])]),_:1}),t(te,{modelValue:M.value,"onUpdate:modelValue":e[11]||(e[11]=o=>M.value=o),title:O.value?"编辑角色":"新增角色",size:"420px",direction:"rtl","destroy-on-close":"","confirm-text":O.value?"保存修改":"确认创建","on-confirm":Ce,onClosed:Re},{default:n(()=>[t(we,{ref_key:"roleFormRef",ref:E,model:a,rules:pe,"label-width":"90px","label-position":"right",class:"role-form"},{default:n(()=>[t(b,{label:"角色编码",prop:"roleCode"},{default:n(()=>[t(P,{modelValue:a.roleCode,"onUpdate:modelValue":e[4]||(e[4]=o=>a.roleCode=o),placeholder:"如：SYSTEM_ADMIN",maxlength:"50","show-word-limit":"",disabled:O.value},null,8,["modelValue","disabled"])]),_:1}),t(b,{label:"角色名称",prop:"roleName"},{default:n(()=>[t(P,{modelValue:a.roleName,"onUpdate:modelValue":e[5]||(e[5]=o=>a.roleName=o),placeholder:"请输入角色名称",maxlength:"30","show-word-limit":""},null,8,["modelValue"])]),_:1}),t(b,{label:"数据范围",prop:"dataScope"},{default:n(()=>[t(Fe,{modelValue:a.dataScope,"onUpdate:modelValue":e[6]||(e[6]=o=>a.dataScope=o),placeholder:"请选择数据范围"},{default:n(()=>[(L(!0),V($,null,de(g(G),o=>(L(),X(Be,{key:o.value,label:o.label,value:o.value},{default:n(()=>[r("div",Il,[r("span",Ul,d(o.label),1),r("span",{class:"scope-code",style:Y({color:g(re)[o.value]})},d(o.value),5)])]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(b,{label:"角色级别",prop:"roleLevel"},{default:n(()=>[t(xe,{modelValue:a.roleLevel,"onUpdate:modelValue":e[7]||(e[7]=o=>a.roleLevel=o),min:1,max:9999},null,8,["modelValue"]),e[15]||(e[15]=r("div",{class:"form-tip"},"数字越小权限越高",-1))]),_:1}),t(b,{label:"角色类型",prop:"isBuiltin"},{default:n(()=>[t(oe,{modelValue:a.isBuiltin,"onUpdate:modelValue":e[8]||(e[8]=o=>a.isBuiltin=o),options:me},null,8,["modelValue"]),e[16]||(e[16]=r("div",{class:"form-tip"},"内建角色不允许删除",-1))]),_:1}),t(b,{label:"角色描述",prop:"description"},{default:n(()=>[t(P,{modelValue:a.description,"onUpdate:modelValue":e[9]||(e[9]=o=>a.description=o),type:"textarea",rows:3,placeholder:"请输入角色描述",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1}),t(b,{label:"状态",prop:"status"},{default:n(()=>[t(oe,{modelValue:a.status,"onUpdate:modelValue":e[10]||(e[10]=o=>a.status=o),options:g(pl)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title","confirm-text"]),t(te,{modelValue:v.value,"onUpdate:modelValue":e[13]||(e[13]=o=>v.value=o),title:`配置菜单 - ${((ae=p.value)==null?void 0:ae.roleName)||""}`,size:"50%",direction:"rtl"},{footer:n(()=>{var o;return[r("div",Pl,[t(R,{type:"primary",disabled:((o=p.value)==null?void 0:o.isBuiltin)===1,"margin-left":10,onClick:Ie},{default:n(()=>[...e[20]||(e[20]=[f("提交修改",-1)])]),_:1},8,["disabled"])])]}),default:n(()=>{var o;return[r("div",Al,[r("div",yl,[e[17]||(e[17]=r("div",{class:"bind-left-header"},[r("span",null,"子系统")],-1)),r("div",hl,[(L(!0),V($,null,de(g(y),u=>(L(),V("div",{key:u.subsystemId,class:ce(["bind-subsystem-item",{active:F.value===u.subsystemId}]),onClick:z=>Q(u.subsystemId)},[r("div",{class:"subsystem-icon",style:Y({background:x(u.subsystemId).bg})},[t(le,{color:x(u.subsystemId).color},{default:n(()=>[(L(),X(ue(x(u.subsystemId).icon)))]),_:2},1032,["color"])],4),r("span",Dl,d(u.subsystemShortName),1),r("span",kl,"（"+d(j.value[u.subsystemId]||0)+"）",1)],10,Rl))),128))])]),r("div",Vl,[r("div",Bl,[e[19]||(e[19]=r("span",null,"菜单列表",-1)),t(Pe,{modelValue:U.value,"onUpdate:modelValue":e[12]||(e[12]=u=>U.value=u),indeterminate:A.value,disabled:((o=p.value)==null?void 0:o.isBuiltin)===1,onChange:Ee},{default:n(()=>[...e[18]||(e[18]=[f(" 全选 ",-1)])]),_:1},8,["modelValue","indeterminate","disabled"])]),r("div",Fl,[t(ze,{ref_key:"bindTreeRef",ref:_,data:I.value,"show-checkbox":"","node-key":"menuId","default-checked-keys":S.value,props:{label:"menuName",children:"children"},"default-expand-all":"",indent:24,"highlight-current":!0,"check-strictly":!0,onCheckChange:ve},{default:n(({node:u,data:z})=>[r("span",xl,[r("span",wl,d(u.label),1),r("span",{class:ce(["menu-type-tag",ye(z.menuType)])},d(he(z.menuType)),3)])]),_:1},8,["data","default-checked-keys"])])])])]}),_:1},8,["modelValue","title"])],64)}}}),no=ul(zl,[["__scopeId","data-v-3b56b064"]]);export{no as default};

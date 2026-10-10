import{d as Pe,bc as $e,bd as Ge,M as qe,O as Ye,be as We,ba as Xe,ar as He,v as je,bo as Ze,a as K,P as Je}from"./element-plus-FTcyDTKl.js";import{m as Qe,s as el,j as ll,i as ol,b as tl,q as nl,w as al,o as rl,p as sl,v as il,g as ul}from"./index-XehKi6pI.js";import{o as dl}from"./org_user_role_rel-z2-kft6H.js";import{r as F}from"./randomMock-C6-QJwcy.js";import{m as R,b as cl}from"./menuMockApi-DupvlBSh.js";import{m as _l}from"./subsystemData-BoqqXqRF.js";import{p as pl}from"./pagination-BHZHZx5b.js";import"./subsystem-cdL3j6aS.js";import{d as P,b as ae,D as re}from"./misc-GijYeB5-.js";import{G as ml,n as gl,M as B,a0 as t,W as n,F as $,r as i,aj as se,L as b,_ as C,$ as d,R as G,O as q,Y as ie,P as r,u as L,ae as ue,S as de,k as Y,c as W}from"./vue-vendor-CYCT-Zs3.js";import"./mockCrud-BX4GelFb.js";import"./subsystemData-7ooVpSiT.js";const Nl=`-- Table structure for org_role
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
`,bl=`-- Table structure for org_role_menu_rel
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
`,Cl=[{roleId:1,roleCode:"SUPER_ADMIN",roleName:"超级管理员",description:"拥有全部菜单权限，可管理所有角色与系统配置；系统内置角色不可删除",dataScope:"ORG_AND_CHILDREN",roleLevel:1,isBuiltin:1,menuCount:14,memberCount:3,status:1101,menuIds:[10001001,10001002,10001003,10001005,10001010,10001011,10001012,10001013,10001014,10001015,10001016,10001017,10001018,10001019],...F()},{roleId:2,roleCode:"ORG_ADMIN",roleName:"组织管理员",description:"管理本组织及下级组织的部门、成员、角色等数据",dataScope:"ORG_AND_CHILDREN",roleLevel:5,isBuiltin:0,menuCount:7,memberCount:12,status:1101,menuIds:[10001011,10001012,10001013,10001014,10001015,10001016,10001017],...F()},{roleId:3,roleCode:"ON_DUTY",roleName:"值班人员",description:"负责日常值守、信息报送与值班记录填写",dataScope:"ORG",roleLevel:30,isBuiltin:0,menuCount:3,memberCount:8,status:1101,menuIds:[10001011,10001012,10001017],...F()},{roleId:4,roleCode:"NORMAL_USER",roleName:"普通用户",description:"基础查看权限，仅可访问本人相关数据",dataScope:"SELF",roleLevel:100,isBuiltin:0,menuCount:1,memberCount:27,status:1101,menuIds:[10001012],...F()}],Ll={class:"name-text"},fl={class:"scope-option"},Ol={class:"scope-label"},El={class:"bind-container"},Ml={class:"bind-left"},Tl={class:"bind-subsystem-list"},vl=["onClick"],Sl={class:"subsystem-name"},Il={class:"subsystem-count"},Ul={class:"bind-right"},Al={class:"bind-right-header"},yl={class:"bind-menu-tree"},hl={class:"bind-tree-node"},Dl={class:"node-label"},Fl={class:"drawer-footer"},Rl=ml({__name:"RoleManagement",setup(Bl){const k=i(!1),_=i(),O=i(!1),f=i(!1),T=i(),v=i(!1),p=i(null),X=i([]),ce=i([]),m=Y({roleName:"",dataScope:""}),V=i(1),S=i([]),E=i([]),I=i(!1),U=i(!1),H=i({}),A=_l.filter(l=>!l.isHidden&&!0),a=Y({roleId:0,roleCode:"",roleName:"",description:"",dataScope:re.SELF,roleLevel:100,isBuiltin:0,status:1101}),_e={roleCode:[{required:!0,message:"请输入角色编码",trigger:"blur"},{pattern:/^[A-Z_]+$/,message:"只能包含大写字母和下划线",trigger:"blur"}],roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"}]},pe=[{label:"正常",value:1101},{label:"停用",value:1102}],me=[{label:"自定义",value:0},{label:"内建",value:1}],g=Y({pageNum:1,pageSize:20}),ge=[{prop:"roleName",label:"角色名称",minWidth:190,slot:"roleName"},{prop:"roleCode",label:"角色编码",width:140,cellType:"code"},{prop:"isBuiltin",label:"角色类型",width:100,align:"center",highlight:!0,slot:"isBuiltin"},{prop:"description",label:"角色描述",minWidth:150,showOverflowTooltip:!0},{prop:"dataScope",label:"数据范围",width:150,slot:"dataScope"},{prop:"roleLevel",label:"角色级别",width:100},{prop:"menuCount",label:"菜单权限",width:100,slot:"menuCount"},{prop:"status",label:"状态",width:80,slot:"status"},{type:"audit",prop:"creater",label:"创建人"},{type:"audit",prop:"createTime",label:"创建时间"},{type:"actions",label:"操作",slot:"actions"}],j=W(()=>{let l=X.value;return m.roleName&&(l=l.filter(e=>e.roleName.includes(m.roleName))),m.dataScope&&(l=l.filter(e=>e.dataScope===m.dataScope)),l}),Ne=W(()=>j.value.length),be=W(()=>pl(j.value,g.pageNum,g.pageSize));function Ce(l){return[{label:"编辑",icon:He,handler:e=>fe(e)},{label:"配置菜单",icon:je,handler:e=>Me(e)},{label:"删除",icon:Ze,divided:!0,disabled:l.isBuiltin===1,handler:e=>Ee(e)}]}function y(){k.value=!0;try{X.value=Cl}finally{k.value=!1}}function Z(){g.pageNum=1}function Le(){f.value=!1,a.roleId=0,a.roleCode="",a.roleName="",a.description="",a.dataScope=re.SELF,a.roleLevel=100,a.isBuiltin=0,a.status=1101,O.value=!0}function fe(l){f.value=!0,a.roleId=l.roleId,a.roleCode=l.roleCode,a.roleName=l.roleName,a.description=l.description,a.dataScope=l.dataScope,a.roleLevel=l.roleLevel,a.isBuiltin=l.isBuiltin??0,a.status=l.status,O.value=!0}function Oe(){T.value&&T.value.validate(l=>{l&&(K.success(f.value?"编辑成功":"新增成功"),O.value=!1,y())})}async function Ee(l){await il(l.roleName)&&(K.success("删除成功"),y())}function Me(l){p.value=l,ce.value=l.menuIds,v.value=!0,Te(),A.length>0&&J(A[0].subsystemId)}function Te(){const l={};for(const e of A)l[e.subsystemId]=R.filter(s=>s.subsystemId===e.subsystemId).length;H.value=l}function J(l){V.value=l;const e=R.filter(s=>s.subsystemId===l);if(S.value=cl(e),p.value){const s=p.value.menuIds.filter(M=>{const c=R.find(h=>h.menuId===M);return c&&c.subsystemId===l});E.value=s}else E.value=[];I.value=!1,U.value=!1}function ve(l){if(!_.value)return;if(l===!0){const s=Q(S.value);_.value.setCheckedKeys(s),E.value=s}else _.value.setCheckedKeys([]),E.value=[];U.value=!1}function Q(l){const e=[];function s(M){for(const c of M)e.push(c.menuId),c.children&&c.children.length>0&&s(c.children)}return s(l),e}function Se(){if(!_.value)return;const l=_.value.getCheckedKeys(),e=Q(S.value);I.value=l.length===e.length,U.value=l.length>0&&l.length<e.length}function Ie(){!_.value||!p.value||(_.value.getCheckedKeys(),p.value.menuIds.filter(l=>{const e=R.find(s=>s.menuId===l);return e&&e.subsystemId!==V.value}),K.success("菜单配置保存成功"),v.value=!1,y())}const ee={1:{icon:"Bell",color:"#E6A23C",bg:"linear-gradient(135deg, #FDF6EC 0%, #FAECD8 100%)"},2:{icon:"Document",color:"#409EFF",bg:"linear-gradient(135deg, #ECF5FF 0%, #D9ECFF 100%)"},3:{icon:"Warning",color:"#F56C6C",bg:"linear-gradient(135deg, #FEF0F0 0%, #FDE2E2 100%)"},4:{icon:"DataLine",color:"#67C23A",bg:"linear-gradient(135deg, #F0F9EB 0%, #E1F3D8 100%)"},5:{icon:"Box",color:"#9B59B6",bg:"linear-gradient(135deg, #F5EEF8 0%, #E8DAEF 100%)"},6:{icon:"TrendCharts",color:"#1ABC9C",bg:"linear-gradient(135deg, #E8F8F5 0%, #D1F2EB 100%)"},7:{icon:"Connection",color:"#3498DB",bg:"linear-gradient(135deg, #EBF5FB 0%, #D6EAF8 100%)"},8:{icon:"Monitor",color:"#E74C3C",bg:"linear-gradient(135deg, #FDEDEC 0%, #FADBD8 100%)"},99:{icon:"Setting",color:"#909399",bg:"linear-gradient(135deg, #F4F4F5 0%, #E9E9EB 100%)"}};function x(l){return ee[l]||ee[99]}function Ue(l){return ae[l]||"#909399"}function Ae(l){const e=P.find(s=>s.value===l);return(e==null?void 0:e.label)||l}function ye(l){return{0:"type-directory",1:"type-menu",2:"type-permission",99:"type-navigation"}[l]||""}function he(l){return{0:"目录",1:"菜单",2:"按钮",99:"外链"}[l]||""}function De(){var l;(l=T.value)==null||l.resetFields()}return gl(()=>{y()}),(l,e)=>{var ne;const s=se("table-structure-drawer"),M=nl,c=al,h=tl,le=Pe,D=ol,Fe=ll,Re=el,Be=se("card-layout"),w=qe,N=Ge,ke=Je,Ve=Ye,xe=rl,oe=sl,we=$e,te=Qe,ze=We,Ke=Xe;return b(),B($,null,[t(Be,{title:"角色管理"},{"title-extra":n(()=>[t(s,{sql:[L(Nl),L(bl),L(dl)]},null,8,["sql"])]),search:n(()=>[t(M,{modelValue:m.roleName,"onUpdate:modelValue":e[0]||(e[0]=o=>m.roleName=o),placeholder:"搜索角色名称",onSearch:Z},null,8,["modelValue"]),t(c,{modelValue:m.dataScope,"onUpdate:modelValue":e[1]||(e[1]=o=>m.dataScope=o),placeholder:"数据范围",options:L(P),onSearch:Z},null,8,["modelValue","options"])]),actions:n(()=>[t(h,{"margin-left":10,onClick:Le},{default:n(()=>[...e[14]||(e[14]=[C("新增角色",-1)])]),_:1})]),default:n(()=>[t(Re,{pageNum:g.pageNum,"onUpdate:pageNum":e[2]||(e[2]=o=>g.pageNum=o),pageSize:g.pageSize,"onUpdate:pageSize":e[3]||(e[3]=o=>g.pageSize=o),data:be.value,columns:ge,total:Ne.value,loading:k.value,"row-key":"roleId","show-tool-bar":!1},{roleName:n(({row:o})=>[t(le,{style:G({color:o.isBuiltin===1?"#E6A23C":"#67C23A"})},{default:n(()=>[(b(),q(ie(o.isBuiltin===1?"Lock":"User")))]),_:2},1032,["style"]),r("span",Ll,d(o.roleName),1)]),isBuiltin:n(({row:o})=>[t(D,{type:o.isBuiltin===1?"warning":"info",effect:"plain",size:"small"},{default:n(()=>[C(d(o.isBuiltin===1?"内建":"自定义"),1)]),_:2},1032,["type"])]),dataScope:n(({row:o})=>[t(D,{color:Ue(o.dataScope),effect:"dark",size:"small"},{default:n(()=>[C(d(Ae(o.dataScope)),1)]),_:2},1032,["color"])]),menuCount:n(({row:o})=>[t(D,{size:"small",effect:"plain"},{default:n(()=>[C(d(o.menuCount),1)]),_:2},1024)]),status:n(({row:o})=>[t(D,{type:o.status===1101?"success":"info",effect:"light",round:""},{default:n(()=>[C(d(o.status===1101?"正常":"停用"),1)]),_:2},1032,["type"])]),actions:n(({row:o})=>[t(Fe,{items:Ce(o),row:o},null,8,["items","row"])]),_:1},8,["pageNum","pageSize","data","total","loading"])]),_:1}),t(te,{modelValue:O.value,"onUpdate:modelValue":e[11]||(e[11]=o=>O.value=o),title:f.value?"编辑角色":"新增角色",size:"420px",direction:"rtl","destroy-on-close":"","confirm-text":f.value?"保存修改":"确认创建","on-confirm":Oe,onClosed:De},{default:n(()=>[t(we,{ref_key:"roleFormRef",ref:T,model:a,rules:_e,"label-width":"90px","label-position":"right",class:"role-form"},{default:n(()=>[t(N,{label:"角色编码",prop:"roleCode"},{default:n(()=>[t(w,{modelValue:a.roleCode,"onUpdate:modelValue":e[4]||(e[4]=o=>a.roleCode=o),placeholder:"如：SYSTEM_ADMIN",maxlength:"50","show-word-limit":"",disabled:f.value},null,8,["modelValue","disabled"])]),_:1}),t(N,{label:"角色名称",prop:"roleName"},{default:n(()=>[t(w,{modelValue:a.roleName,"onUpdate:modelValue":e[5]||(e[5]=o=>a.roleName=o),placeholder:"请输入角色名称",maxlength:"30","show-word-limit":""},null,8,["modelValue"])]),_:1}),t(N,{label:"数据范围",prop:"dataScope"},{default:n(()=>[t(Ve,{modelValue:a.dataScope,"onUpdate:modelValue":e[6]||(e[6]=o=>a.dataScope=o),placeholder:"请选择数据范围"},{default:n(()=>[(b(!0),B($,null,ue(L(P),o=>(b(),q(ke,{key:o.value,label:o.label,value:o.value},{default:n(()=>[r("div",fl,[r("span",Ol,d(o.label),1),r("span",{class:"scope-code",style:G({color:L(ae)[o.value]})},d(o.value),5)])]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(N,{label:"角色级别",prop:"roleLevel"},{default:n(()=>[t(xe,{modelValue:a.roleLevel,"onUpdate:modelValue":e[7]||(e[7]=o=>a.roleLevel=o),min:1,max:9999},null,8,["modelValue"]),e[15]||(e[15]=r("div",{class:"form-tip"},"数字越小权限越高",-1))]),_:1}),t(N,{label:"角色类型",prop:"isBuiltin"},{default:n(()=>[t(oe,{modelValue:a.isBuiltin,"onUpdate:modelValue":e[8]||(e[8]=o=>a.isBuiltin=o),options:me},null,8,["modelValue"]),e[16]||(e[16]=r("div",{class:"form-tip"},"内建角色不允许删除",-1))]),_:1}),t(N,{label:"角色描述",prop:"description"},{default:n(()=>[t(w,{modelValue:a.description,"onUpdate:modelValue":e[9]||(e[9]=o=>a.description=o),type:"textarea",rows:3,placeholder:"请输入角色描述",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1}),t(N,{label:"状态",prop:"status"},{default:n(()=>[t(oe,{modelValue:a.status,"onUpdate:modelValue":e[10]||(e[10]=o=>a.status=o),options:pe},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title","confirm-text"]),t(te,{modelValue:v.value,"onUpdate:modelValue":e[13]||(e[13]=o=>v.value=o),title:`配置菜单 - ${((ne=p.value)==null?void 0:ne.roleName)||""}`,size:"50%",direction:"rtl"},{footer:n(()=>{var o;return[r("div",Fl,[t(h,{type:"primary",disabled:((o=p.value)==null?void 0:o.isBuiltin)===1,"margin-left":10,onClick:Ie},{default:n(()=>[...e[20]||(e[20]=[C("提交修改",-1)])]),_:1},8,["disabled"])])]}),default:n(()=>{var o;return[r("div",El,[r("div",Ml,[e[17]||(e[17]=r("div",{class:"bind-left-header"},[r("span",null,"子系统")],-1)),r("div",Tl,[(b(!0),B($,null,ue(L(A),u=>(b(),B("div",{key:u.subsystemId,class:de(["bind-subsystem-item",{active:V.value===u.subsystemId}]),onClick:z=>J(u.subsystemId)},[r("div",{class:"subsystem-icon",style:G({background:x(u.subsystemId).bg})},[t(le,{color:x(u.subsystemId).color},{default:n(()=>[(b(),q(ie(x(u.subsystemId).icon)))]),_:2},1032,["color"])],4),r("span",Sl,d(u.subsystemShortName),1),r("span",Il,"（"+d(H.value[u.subsystemId]||0)+"）",1)],10,vl))),128))])]),r("div",Ul,[r("div",Al,[e[19]||(e[19]=r("span",null,"菜单列表",-1)),t(ze,{modelValue:I.value,"onUpdate:modelValue":e[12]||(e[12]=u=>I.value=u),indeterminate:U.value,disabled:((o=p.value)==null?void 0:o.isBuiltin)===1,onChange:ve},{default:n(()=>[...e[18]||(e[18]=[C(" 全选 ",-1)])]),_:1},8,["modelValue","indeterminate","disabled"])]),r("div",yl,[t(Ke,{ref_key:"bindTreeRef",ref:_,data:S.value,"show-checkbox":"","node-key":"menuId","default-checked-keys":E.value,props:{label:"menuName",children:"children"},"default-expand-all":"",indent:24,"highlight-current":!0,"check-strictly":!0,onCheckChange:Se},{default:n(({node:u,data:z})=>[r("span",hl,[r("span",Dl,d(u.label),1),r("span",{class:de(["menu-type-tag",ye(z.menuType)])},d(he(z.menuType)),3)])]),_:1},8,["data","default-checked-keys"])])])])]}),_:1},8,["modelValue","title"])],64)}}}),Xl=ul(Rl,[["__scopeId","data-v-b760c1cd"]]);export{Xl as default};

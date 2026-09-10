import{p as U,aD as be,aE as Ne,a4 as Oe,aG as Ce,as as Te,F as ve,s as Me,aQ as Le}from"./element-plus-D60thvil.js";import{l as ye,i as Ee,j as Se,k as Ue,a as Ie,p as Ve,q as ke,f as Ae,n as De,o as we,r as Re,b as xe}from"./index-Dz8cBk7z.js";/* empty css                     */import{f as z,d as Fe,a as I}from"./floodRoleData-DaP1uRav.js";import{f as V}from"./floodMenuData-B0E1JDHn.js";import{a as Ke,b as $e,s as ze}from"./common-Bz-Eyofd.js";import{u as Be}from"./useCrudDrawer-BXVv24BH.js";import{u as qe}from"./useMockTablePage-Cliqp1A6.js";import{G as Pe,M as Ge,a0 as t,W as r,v as l,q as B,F as We,j as m,aj as q,L as je,_ as T,$ as k,P as d,S as Xe,u as Ye,c as He}from"./vue-vendor-Dq7Ldkyc.js";import"./randomMock-BnXBY1mw.js";import"./pagination-BbYzDLaW.js";const Qe=`-- Table structure for flood_auth_role
-- ----------------------------
DROP TABLE IF EXISTS "public"."flood_auth_role";
CREATE TABLE "public"."flood_auth_role" (
  "role_id" bigint NOT NULL,
  "org_id" bigint,
  "role_name" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "role_code" varchar(50) COLLATE "pg_catalog"."default",
  "role_level" integer,
  "data_scope" varchar(20) COLLATE "pg_catalog"."default",
  "display_order" integer DEFAULT 0,
  "status" smallint DEFAULT 1101,
  "remark" varchar(500) COLLATE "pg_catalog"."default",
  "creater" varchar(64) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6) DEFAULT pg_systimestamp(),
  "updater" varchar(64) COLLATE "pg_catalog"."default",
  "update_time" timestamp(6) DEFAULT pg_systimestamp(),
  "deleted" smallint DEFAULT 0,
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer DEFAULT 0,
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer DEFAULT 1
)
;
ALTER TABLE "public"."flood_auth_role" OWNER TO "postgres";
COMMENT ON COLUMN "public"."flood_auth_role"."role_id" IS '角色ID';
COMMENT ON COLUMN "public"."flood_auth_role"."org_id" IS '归属组织ID（null表示系统内置全局角色，非null为公司自定义角色）';
COMMENT ON COLUMN "public"."flood_auth_role"."role_name" IS '角色名称';
COMMENT ON COLUMN "public"."flood_auth_role"."role_code" IS '角色编码';
COMMENT ON COLUMN "public"."flood_auth_role"."role_level" IS '角色级别（1-超级管理员 2-机构管理员 3-路线管理员 4-路段管理员 5-巡检员 6-普通用户，数字越小权限越高）';
COMMENT ON COLUMN "public"."flood_auth_role"."data_scope" IS '数据范围权限（SELF-仅本人 ROUTE-本路线 ORG-本机构 ORG_AND_CHILDREN-本机构及下级机构）';
COMMENT ON COLUMN "public"."flood_auth_role"."display_order" IS '排序号';
COMMENT ON COLUMN "public"."flood_auth_role"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."flood_auth_role"."remark" IS '备注信息';
COMMENT ON COLUMN "public"."flood_auth_role"."creater" IS '创建者';
COMMENT ON COLUMN "public"."flood_auth_role"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."flood_auth_role"."updater" IS '更新者';
COMMENT ON COLUMN "public"."flood_auth_role"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."flood_auth_role"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."flood_auth_role"."signature" IS '数据签名';
COMMENT ON COLUMN "public"."flood_auth_role"."signature_version" IS '签名版本号';
COMMENT ON COLUMN "public"."flood_auth_role"."local_signature" IS '数据签名（本地）';
COMMENT ON COLUMN "public"."flood_auth_role"."local_signature_version" IS '签名版本号（本地）';
COMMENT ON TABLE "public"."flood_auth_role" IS '巡检角色信息表';

-- ----------------------------

-- Indexes structure for table flood_auth_role
-- ----------------------------
CREATE INDEX "idx_flood_auth_role_deleted" ON "public"."flood_auth_role" USING btree (
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table flood_auth_role
-- ----------------------------
ALTER TABLE "public"."flood_auth_role" ADD CONSTRAINT "flood_auth_role_pkey" PRIMARY KEY ("role_id");

-- ----------------------------
`,Je={class:"bind-container"},Ze={class:"bind-menu-tree"},el={class:"bind-menu-header"},ll={class:"bind-tree-node"},al={class:"node-label"},ol={class:"drawer-footer"},tl=Pe({__name:"Role",setup(nl){const{allData:v,loading:M,pagination:h,searchKeyword:L,pagedData:P,total:G,handleSearch:A}=qe({initialData:[...z],keywordFields:["roleName"]}),D=Ye({dataScope:null}),W={roleId:0,roleCode:"",roleName:"",dataScope:"SELF",roleLevel:5,displayOrder:0,status:1101,remark:""},{drawerVisible:b,isEdit:y,submitting:w,formData:u,openCreate:j,openEdit:X,handleSubmit:Y,resetForm:H}=Be({defaultFormData:W,onSubmit:async(n,e)=>{v.value=[...v.value],U.success(e?"编辑成功":"新增成功"),await new Promise(o=>setTimeout(o,500)),b.value=!1}}),Q={roleCode:[{required:!0,message:"请输入角色编码",trigger:"blur"}],roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"}],dataScope:[{required:!0,message:"请选择数据范围",trigger:"change"}]},N=m(!1),E=m(null),O=m(),i=m(!1),C=m(!1),c=m([]),_=He(()=>R(V));function R(n,e=0){return n.filter(o=>o.parentId===e).sort((o,s)=>o.displayOrder-s.displayOrder).map(o=>{const s=R(n,o.menuId);return s.length>0?{...o,children:s}:o})}function J(n){return{0:"type-directory",1:"type-menu",2:"type-button",99:"type-nav"}[n]||""}function Z(n){return{0:"目录",1:"菜单",2:"按钮",99:"导航"}[n]||"未知"}function ee(n){const e=n,o=O.value;if(!o)return;const s=f(_.value);e?o.setCheckedKeys(s):o.setCheckedKeys([]),i.value=e,C.value=!1}function f(n){var o;const e=[];for(const s of n)e.push(s.menuId),"children"in s&&((o=s.children)!=null&&o.length)&&e.push(...f(s.children));return e}function le(){const n=O.value;if(!n)return;const e=f(_.value),o=n.getCheckedKeys();i.value=o.length===e.length,C.value=o.length>0&&o.length<e.length}function ae(){var o;const n=O.value;if(!n)return;const e=n.getCheckedKeys();U.success(`已为「${(o=E.value)==null?void 0:o.roleName}」配置 ${e.length} 个菜单权限`),N.value=!1}const oe=[{prop:"roleName",label:"角色名称",minWidth:150},{prop:"roleCode",label:"角色编码",minWidth:140,cellType:"code"},{prop:"dataScope",label:"数据范围",width:130,align:"center",slot:"dataScope"},{prop:"roleLevel",label:"角色级别",width:100,align:"center"},{prop:"status",label:"状态",width:80,cellType:"tag",tagMap:$e,tagLabelMap:Ke},{prop:"remark",label:"备注",minWidth:150,cellType:"secondary",showOverflowTooltip:!0},{type:"audit",prop:"creater",label:"创建人"},{type:"audit",prop:"createTime",label:"创建时间"},{type:"audit",prop:"updater",label:"更新人"},{type:"audit",prop:"updateTime",label:"更新时间"},{type:"actions",label:"操作",slot:"actions"}];function te(n){return[{label:"编辑",icon:ve,handler:()=>X(n)},{label:"配置权限",icon:Me,handler:()=>ne(n)},{label:"删除",icon:Le,divided:!0,handler:()=>re(n)}]}function ne(n){E.value=n;const e=n.roleLevel||5;e<=2?(c.value=f(_.value),i.value=!0):e<=4?(c.value=V.filter(o=>o.menuType!==2).map(o=>o.menuId),i.value=!1):(c.value=V.filter(o=>o.menuType===1&&o.path).map(o=>o.menuId),i.value=!1),C.value=c.value.length>0&&c.value.length<f(_.value).length,N.value=!0}async function re(n){await Re(n.roleName)&&(U.success("删除成功"),M.value=!0,setTimeout(()=>{v.value=[...z],M.value=!1},500))}return(n,e)=>{var $;const o=q("table-structure-drawer"),s=Ve,ue=ke,x=Ie,se=Ue,de=Se,ie=Ee,pe=q("panel-layout"),S=Oe,p=Ne,ce=Ae,F=De,me=we,_e=be,K=ye,fe=Ce,ge=Te;return je(),Ge(We,null,[t(pe,{title:"角色管理"},{"title-extra":r(()=>[t(o,{sql:l(Qe)},null,8,["sql"])]),search:r(()=>[t(s,{modelValue:l(L),"onUpdate:modelValue":e[0]||(e[0]=a=>B(L)?L.value=a:null),placeholder:"搜索角色名称",onSearch:l(A)},null,8,["modelValue","onSearch"]),t(ue,{modelValue:D.dataScope,"onUpdate:modelValue":e[1]||(e[1]=a=>D.dataScope=a),placeholder:"数据范围",options:l(I),"margin-left":10,onSearch:l(A)},null,8,["modelValue","options","onSearch"])]),actions:r(()=>[t(x,{"margin-left":10,onClick:l(j)},{default:r(()=>[...e[14]||(e[14]=[T("新增角色",-1)])]),_:1},8,["onClick"])]),default:r(()=>[t(ie,{"page-num":l(h).pageNum,"onUpdate:pageNum":e[2]||(e[2]=a=>l(h).pageNum=a),"page-size":l(h).pageSize,"onUpdate:pageSize":e[3]||(e[3]=a=>l(h).pageSize=a),data:l(P),columns:oe,total:l(G),loading:l(M)||l(w),"row-key":"roleId","show-tool-bar":!1},{dataScope:r(({row:a})=>[t(se,{size:"small",type:l(Fe)[a.dataScope]||"info"},{default:r(()=>{var g;return[T(k(((g=l(I).find(he=>he.value===a.dataScope))==null?void 0:g.label)||a.dataScope),1)]}),_:2},1032,["type"])]),actions:r(({row:a})=>[t(de,{items:te(a),row:a},null,8,["items","row"])]),_:1},8,["page-num","page-size","data","total","loading"])]),_:1}),t(K,{modelValue:l(b),"onUpdate:modelValue":e[11]||(e[11]=a=>B(b)?b.value=a:null),title:l(y)?"编辑角色":"新增角色",size:"480px",direction:"rtl","destroy-on-close":"","confirm-text":l(y)?"保存修改":"确认创建",loading:l(w),"on-confirm":l(Y),onClosed:l(H)},{default:r(()=>[t(_e,{ref:"formRef",model:l(u),rules:Q,"label-width":"100px","label-position":"right"},{default:r(()=>[t(p,{label:"角色编码",prop:"roleCode"},{default:r(()=>[t(S,{modelValue:l(u).roleCode,"onUpdate:modelValue":e[4]||(e[4]=a=>l(u).roleCode=a),placeholder:"请输入角色编码",maxlength:"50","show-word-limit":"",disabled:l(y)},null,8,["modelValue","disabled"])]),_:1}),t(p,{label:"角色名称",prop:"roleName"},{default:r(()=>[t(S,{modelValue:l(u).roleName,"onUpdate:modelValue":e[5]||(e[5]=a=>l(u).roleName=a),placeholder:"请输入角色名称",maxlength:"100","show-word-limit":""},null,8,["modelValue"])]),_:1}),t(p,{label:"数据范围",prop:"dataScope"},{default:r(()=>[t(ce,{modelValue:l(u).dataScope,"onUpdate:modelValue":e[6]||(e[6]=a=>l(u).dataScope=a),options:l(I),placeholder:"请选择数据范围"},null,8,["modelValue","options"])]),_:1}),t(p,{label:"角色级别",prop:"roleLevel"},{default:r(()=>[t(F,{modelValue:l(u).roleLevel,"onUpdate:modelValue":e[7]||(e[7]=a=>l(u).roleLevel=a),min:1,max:99},null,8,["modelValue"])]),_:1}),t(p,{label:"排序",prop:"displayOrder"},{default:r(()=>[t(F,{modelValue:l(u).displayOrder,"onUpdate:modelValue":e[8]||(e[8]=a=>l(u).displayOrder=a),min:0,max:999},null,8,["modelValue"])]),_:1}),t(p,{label:"状态",prop:"status"},{default:r(()=>[t(me,{modelValue:l(u).status,"onUpdate:modelValue":e[9]||(e[9]=a=>l(u).status=a),options:l(ze)},null,8,["modelValue","options"])]),_:1}),t(p,{label:"备注",prop:"remark"},{default:r(()=>[t(S,{modelValue:l(u).remark,"onUpdate:modelValue":e[10]||(e[10]=a=>l(u).remark=a),type:"textarea",rows:3,placeholder:"请输入备注信息",maxlength:"500","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title","confirm-text","loading","on-confirm","onClosed"]),t(K,{modelValue:N.value,"onUpdate:modelValue":e[13]||(e[13]=a=>N.value=a),title:`配置权限 - ${(($=E.value)==null?void 0:$.roleName)||""}`,size:"30%",direction:"rtl","destroy-on-close":""},{footer:r(()=>[d("div",ol,[t(x,{type:"primary","margin-left":10,onClick:ae},{default:r(()=>[...e[17]||(e[17]=[T("提交修改",-1)])]),_:1})])]),default:r(()=>[d("div",Je,[d("div",Ze,[d("div",el,[e[16]||(e[16]=d("span",null,"菜单列表",-1)),t(fe,{modelValue:i.value,"onUpdate:modelValue":e[12]||(e[12]=a=>i.value=a),indeterminate:C.value,onChange:ee},{default:r(()=>[...e[15]||(e[15]=[T(" 全选 ",-1)])]),_:1},8,["modelValue","indeterminate"])]),t(ge,{ref_key:"bindTreeRef",ref:O,data:_.value,"show-checkbox":"","node-key":"menuId","default-checked-keys":c.value,props:{label:"menuName",children:"children"},"default-expand-all":"",indent:24,"highlight-current":!0,"check-strictly":!0,onCheckChange:le},{default:r(({node:a,data:g})=>[d("span",ll,[d("span",al,k(a.label),1),d("span",{class:Xe(["menu-type-tag",J(g.menuType)])},k(Z(g.menuType)),3)])]),_:1},8,["data","default-checked-keys"])])])]),_:1},8,["modelValue","title"])],64)}}}),hl=xe(tl,[["__scopeId","data-v-8ea1f5cc"]]);export{hl as default};

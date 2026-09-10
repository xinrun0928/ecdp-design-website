import{q as ue,r as se,t as _e,y as me,ag as Ne,F as Oe,a as fe,x as Te,w as Ce,N as Le,d as be}from"./index-BQSjtNr4.js";import{ar as Me,bw as Ee,bx as Ie,d as he,aH as ye,l as Ue,b9 as Ae,ba as Se,bu as ke,R as ve,a as w}from"./element-plus-Bt8i1BPk.js";/* empty css                     *//* empty css                       */import{o as N}from"./orgTreeData-CoAXZm9S.js";import{m as x,a as k}from"./mealData-PHKg9gx_.js";import{G as ze,o as Ve,aj as F,L as b,O as M,W as r,a0 as o,_ as E,$ as I,R as De,u as h,P as we,Z as v,p as y,m as P,c as u}from"./vue-vendor-CrWx_I7L.js";import"./markdown-BUTMf7eB.js";import"./editor-CMUCu6Rk.js";import"./ol-map-DY4XWb27.js";const xe=`-- Table structure for org_organization
-- ----------------------------
DROP TABLE IF EXISTS "public"."org_organization";
CREATE TABLE "public"."org_organization" (
  "org_id" bigint NOT NULL,
  "parent_id" bigint NOT NULL DEFAULT 0,
  "ancestors" text COLLATE "pg_catalog"."default",
  "level" integer NOT NULL DEFAULT 1,
  "org_code" varchar(50) COLLATE "pg_catalog"."default",
  "org_name" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "introduce" varchar(500) COLLATE "pg_catalog"."default",
  "area_codes" varchar(1000) COLLATE "pg_catalog"."default",
  "area_min_code" varchar(32) COLLATE "pg_catalog"."default",
  "area_min_name" varchar(128) COLLATE "pg_catalog"."default",
  "area_names" varchar(1000) COLLATE "pg_catalog"."default",
  "meal_id" bigint,
  "meal_name" varchar(100) COLLATE "pg_catalog"."default",
  "parent_city_org_ids" text COLLATE "pg_catalog"."default",
  "parent_city_org_names" text COLLATE "pg_catalog"."default",
  "parent_affair_org_ids" text COLLATE "pg_catalog"."default",
  "parent_affair_org_names" text COLLATE "pg_catalog"."default",
  "parent_company_org_ids" text COLLATE "pg_catalog"."default",
  "parent_company_org_names" text COLLATE "pg_catalog"."default",
  "contact_person" varchar(255) COLLATE "pg_catalog"."default",
  "contact_phone" varchar(255) COLLATE "pg_catalog"."default",
  "contact_fax" varchar(255) COLLATE "pg_catalog"."default",
  "contact_email" varchar(255) COLLATE "pg_catalog"."default",
  "display_order" integer NOT NULL DEFAULT 0,
  "status" integer NOT NULL DEFAULT 1101,
  "subordinate_count" integer NOT NULL DEFAULT 0,
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
ALTER TABLE "public"."org_organization" OWNER TO "postgres";
COMMENT ON COLUMN "public"."org_organization"."org_id" IS '组织ID';
COMMENT ON COLUMN "public"."org_organization"."parent_id" IS '父组织ID（0表示根组织）';
COMMENT ON COLUMN "public"."org_organization"."ancestors" IS '祖级路径，格式：父ID1/父ID2/父ID3，用于快速查询所有祖先节点';
COMMENT ON COLUMN "public"."org_organization"."level" IS '层级深度';
COMMENT ON COLUMN "public"."org_organization"."org_code" IS '组织编码';
COMMENT ON COLUMN "public"."org_organization"."org_name" IS '组织名称';
COMMENT ON COLUMN "public"."org_organization"."introduce" IS '组织介绍';
COMMENT ON COLUMN "public"."org_organization"."area_codes" IS '归属地区编码列表，多个用英文逗号分隔';
COMMENT ON COLUMN "public"."org_organization"."area_min_code" IS '最小单元区域编码（动态层级：选到市存市编码，选到街道存街道编码）';
COMMENT ON COLUMN "public"."org_organization"."area_min_name" IS '最小单元区域名称';
COMMENT ON COLUMN "public"."org_organization"."area_names" IS '归属地区名称列表，多个用英文逗号分隔';
COMMENT ON COLUMN "public"."org_organization"."meal_id" IS '套餐ID';
COMMENT ON COLUMN "public"."org_organization"."meal_name" IS '套餐名称';
COMMENT ON COLUMN "public"."org_organization"."parent_city_org_ids" IS '上级地市交通组织ID列表，多个用逗号分隔';
COMMENT ON COLUMN "public"."org_organization"."parent_city_org_names" IS '上级地市交通组织名称，多个用逗号分隔';
COMMENT ON COLUMN "public"."org_organization"."parent_affair_org_ids" IS '上级事务中心组织ID列表，多个用逗号分隔';
COMMENT ON COLUMN "public"."org_organization"."parent_affair_org_names" IS '上级事务中心组织名称，多个用逗号分隔';
COMMENT ON COLUMN "public"."org_organization"."parent_company_org_ids" IS '上级公司企业组织ID列表，多个用逗号分隔';
COMMENT ON COLUMN "public"."org_organization"."parent_company_org_names" IS '上级公司企业组织名称，多个用逗号分隔';
COMMENT ON COLUMN "public"."org_organization"."contact_person" IS '联系人姓名';
COMMENT ON COLUMN "public"."org_organization"."contact_phone" IS '联系电话';
COMMENT ON COLUMN "public"."org_organization"."contact_fax" IS '传真号码';
COMMENT ON COLUMN "public"."org_organization"."contact_email" IS '电子邮箱';
COMMENT ON COLUMN "public"."org_organization"."display_order" IS '排序字段';
COMMENT ON COLUMN "public"."org_organization"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."org_organization"."subordinate_count" IS '下辖人数';
COMMENT ON COLUMN "public"."org_organization"."creater" IS '创建者';
COMMENT ON COLUMN "public"."org_organization"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."org_organization"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."org_organization"."updater" IS '更新者';
COMMENT ON COLUMN "public"."org_organization"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."org_organization"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."org_organization"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."org_organization"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."org_organization"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."org_organization"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."org_organization"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."org_organization"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."org_organization"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."org_organization" IS '组织机构表';

-- ----------------------------

-- Indexes structure for table org_organization
-- ----------------------------
CREATE INDEX "idx_org_organization_area_min_code" ON "public"."org_organization" USING btree (
  "area_min_code" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE area_min_code IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_org_organization_level" ON "public"."org_organization" USING btree (
  "level" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_org_organization_org_name" ON "public"."org_organization" USING btree (
  "org_name" COLLATE "pg_catalog"."default" "pg_catalog"."varchar_pattern_ops" ASC NULLS LAST
);
CREATE INDEX "idx_org_organization_parent_order" ON "public"."org_organization" USING btree (
  "parent_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "display_order" "pg_catalog"."int4_ops" ASC NULLS LAST
);
CREATE INDEX "idx_org_organization_status" ON "public"."org_organization" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table org_organization
-- ----------------------------
ALTER TABLE "public"."org_organization" ADD CONSTRAINT "org_organization_pkey" PRIMARY KEY ("org_id");

-- ----------------------------
`,Fe={class:"org-name"},Pe=ze({__name:"OrgTreeView",setup(Re){const U=y(!1),O=y(!1),s=y(!1),f=y(),p=P({name:"",packageType:null,areaName:[]}),e=P({id:0,parentId:0,packageType:null,packageName:"",areaCode:[],name:"",leader:"",contactPhone:"",email:"",description:"",parentCityOrgId:null,parentAffairOrgId:null,parentCompanyOrgId:null}),R=[{prop:"name",label:"组织名称",minWidth:280,align:"left",headerAlign:"left",slot:"name"},{prop:"orgCode",label:"组织编码",width:100,align:"center",showOverflowTooltip:!0},{prop:"packageName",label:"套餐名称",width:140,align:"center",slot:"packageName"},{prop:"packageType",label:"套餐类型",width:110,align:"center",slot:"packageType"},{prop:"areaName",label:"归属地区",width:120,align:"center",showOverflowTooltip:!0,formatter:n=>n.areaName||"-"},{prop:"status",label:"状态",width:90,align:"center",slot:"status"},{prop:"leader",label:"负责人",width:100,align:"center",showOverflowTooltip:!0,formatter:n=>n.leader||"-"},{prop:"contactPhone",label:"联系电话",width:130,align:"center",showOverflowTooltip:!0,formatter:n=>n.contactPhone||"-"},{prop:"email",label:"邮箱",minWidth:150,showOverflowTooltip:!0,formatter:n=>n.email||"-"},{prop:"members",label:"成员数",width:80,align:"center",formatter:n=>{var a;return((a=n.members)==null?void 0:a.length)||0}},{prop:"creater",label:"创建人",width:100,align:"center",formatter:n=>n.creater||"-"},{prop:"createTime",label:"创建时间",width:175,align:"center",formatter:n=>n.createTime||"-"},{prop:"updater",label:"更新人",width:100,align:"center",formatter:n=>n.updater||"-"},{prop:"updateTime",label:"更新时间",width:175,align:"center",formatter:n=>n.updateTime||"-"},{prop:"actions",label:"操作",width:60,align:"center",fixed:"right",slot:"actions"}],B=u(()=>e.packageType?k[e.packageType]||[]:[]),$=u(()=>T(N).filter(a=>a.packageName==="市交通"||a.packageName==="交通")),q=u(()=>T(N).filter(a=>a.packageName==="事务中心"||a.packageName==="省事务中心"||a.packageName==="市事务中心")),G=u(()=>T(N).filter(a=>a.packageName==="公司"||a.packageName==="省交通公司")),X=u(()=>[{id:0,name:"（顶级组织）",children:N}]),W=u(()=>{let n=N;if(p.name||p.packageType!==null||p.areaName.length){const i=T(n).filter(l=>{const c=!p.name||l.name.includes(p.name),g=p.packageType===null||K(l.packageName)===p.packageType,L=p.areaName[p.areaName.length-1],A=!L||(l.areaName||"").includes(L);return c&&g&&A});n=j(i)}return n});function T(n){const a=[];function i(l){for(const c of l)a.push(c),c.children&&i(c.children)}return i(n),a}function j(n){const a=new Map,i=[];return n.forEach(l=>{a.set(l.id,{...l,children:[]})}),n.forEach(l=>{const c=a.get(l.id),g=H(l,n);g&&a.has(g.id)?a.get(g.id).children.push(c):i.push(c)}),i}function H(n,a){const i=a.findIndex(l=>l.id===n.id);for(let l=i-1;l>=0;l--)if(a[l].id<n.id)return a[l];return null}function K(n){for(const[a,i]of Object.entries(k))if(i.includes(n))return Number(a);return 0}function z(n){return{省交通本级:"#409EFF",交通:"#67C23A",市交通:"#E6A23C",县交通:"#F56C6C",省事务中心:"#9B59B6",事务中心:"#1ABC9C",市事务中心:"#3498DB",县事务中心:"#2ECC71",省交通公司:"#E74C3C",公司:"#F39C12",监控中心:"#8E44AD",高速公路:"#16A085",普通公路:"#27AE60"}[n]||"#909399"}function Y(n){return n&&{1:"顶节点",2:"交通节点",3:"事务中心",4:"公司企业"}[n]||"未知"}function Z(n){return n&&{1:"success",2:"success",3:"warning",4:"danger"}[n]||"info"}const J=[{label:"编辑",icon:Me,handler:n=>Q(n)},{label:"新增子集",icon:Ee,handler:n=>D(n)},{label:"删除",icon:Ie,divided:!0,handler:n=>ee(n)}];function C(){U.value=!0;try{}finally{U.value=!1}}function V(){C()}function D(n){s.value=!1,e.id=0,e.parentId=(n==null?void 0:n.id)||0,e.packageType=null,e.packageName="",e.areaCode=[],e.name="",e.leader="",e.contactPhone="",e.email="",e.description="",e.parentCityOrgId=null,e.parentAffairOrgId=null,e.parentCompanyOrgId=null,O.value=!0}function Q(n){s.value=!0,e.id=n.id,e.parentId=0;const a=n.packageName;let i=null;for(const[l,c]of Object.entries(k))if(c.includes(a)){i=Number(l);break}e.packageType=i,e.packageName=a,e.areaCode=[],e.name=n.name,e.leader="",e.contactPhone="",e.email="",e.description=n.description,e.parentCityOrgId=null,e.parentAffairOrgId=null,e.parentCompanyOrgId=null,O.value=!0}async function ee(n){await Le(n.name)&&(w.success("删除成功"),C())}function ae(){e.packageName="",e.parentCityOrgId=null,e.parentAffairOrgId=null,e.parentCompanyOrgId=null}function ne(n){e.packageName=String(n??""),e.parentCityOrgId=null,e.parentAffairOrgId=null,e.parentCompanyOrgId=null}async function te(){return f.value&&await f.value.validate().catch(()=>!1)?(w.success(s.value?"编辑成功":"新增成功"),C(),!0):!1}function oe(){var n;(n=f.value)==null||n.resetFields()}return Ve(()=>{C()}),(n,a)=>{const i=F("table-structure-drawer"),l=Te,c=Ce,g=fe,L=he,A=Ue,S=_e,re=se,le=ue,ie=ke,d=Se,_=ve,pe=Ne,m=Oe,ce=Ae,de=me,ge=F("panel-layout");return b(),M(ge,{title:"组织管理"},{"title-extra":r(()=>[o(i,{sql:h(xe)},null,8,["sql"])]),search:r(()=>[o(l,{modelValue:p.name,"onUpdate:modelValue":a[0]||(a[0]=t=>p.name=t),placeholder:"搜索组织名称",onSearch:V},null,8,["modelValue"]),o(c,{modelValue:p.packageType,"onUpdate:modelValue":a[1]||(a[1]=t=>p.packageType=t),placeholder:"套餐类型",options:h(x),"margin-left":10,onSearch:V},null,8,["modelValue","options"])]),actions:r(()=>[o(g,{"margin-left":10,onClick:a[2]||(a[2]=t=>D(null))},{default:r(()=>[...a[16]||(a[16]=[E("新增组织",-1)])]),_:1})]),default:r(()=>[o(le,{data:W.value,columns:R,loading:U.value,"row-key":"id","tree-props":{children:"children",hasChildren:"hasChildren"},"default-expand-all":!0,indent:24,"show-index":!1,"show-pagination":!1,"show-tool-bar":!1},{name:r(({row:t})=>[o(L,{class:"org-icon",style:De({color:z(t.packageName)})},{default:r(()=>[o(h(ye))]),_:1},8,["style"]),o(A,{content:t.name,placement:"top"},{default:r(()=>[we("span",Fe,I(t.name),1)]),_:2},1032,["content"])]),packageName:r(({row:t})=>[o(S,{color:z(t.packageName),effect:"dark",size:"small",round:""},{default:r(()=>[E(I(t.packageName),1)]),_:2},1032,["color"])]),packageType:r(({row:t})=>[o(S,{size:"small",type:Z(t.packageType)},{default:r(()=>[E(I(Y(t.packageType)),1)]),_:2},1032,["type"])]),status:r(({row:t})=>[o(S,{size:"small",type:t.status===1101?"success":"info"},{default:r(()=>[E(I(t.status===1101?"正常":"停用"),1)]),_:2},1032,["type"])]),actions:r(({row:t})=>[o(re,{items:J,row:t},null,8,["row"])]),_:1},8,["data","loading"]),o(de,{modelValue:O.value,"onUpdate:modelValue":a[15]||(a[15]=t=>O.value=t),title:s.value?"编辑组织":"新增组织",size:"480px",direction:"rtl","destroy-on-close":"","confirm-text":s.value?"保存修改":"确认创建","on-confirm":te,onClosed:oe},{default:r(()=>[o(ce,{ref_key:"formRef",ref:f,model:e,"label-width":"110px","label-position":"right"},{default:r(()=>[o(d,{label:"上级节点",prop:"parentId"},{default:r(()=>[o(ie,{modelValue:e.parentId,"onUpdate:modelValue":a[3]||(a[3]=t=>e.parentId=t),data:X.value,props:{label:"name",children:"children"},"node-key":"id",placeholder:"请选择上级节点（不选则为顶级）",clearable:"","check-strictly":"",style:{width:"100%"}},null,8,["modelValue","data"])]),_:1}),o(d,{label:"组织名称",prop:"name",rules:[{required:!0,message:"请输入组织名称",trigger:"blur"}]},{default:r(()=>[o(_,{modelValue:e.name,"onUpdate:modelValue":a[4]||(a[4]=t=>e.name=t),placeholder:"请输入组织名称",maxlength:"100","show-word-limit":""},null,8,["modelValue"])]),_:1}),o(d,{label:"归属地区",prop:"areaCode"},{default:r(()=>[o(pe,{modelValue:e.areaCode,"onUpdate:modelValue":a[5]||(a[5]=t=>e.areaCode=t),placeholder:"请选择归属地区",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),o(d,{label:"套餐类型",prop:"packageType",rules:[{required:!0,message:"请选择套餐类型",trigger:"change"}]},{default:r(()=>[o(m,{modelValue:e.packageType,"onUpdate:modelValue":a[6]||(a[6]=t=>e.packageType=t),options:h(x),placeholder:"请选择套餐类型",onChange:ae},null,8,["modelValue","options"])]),_:1}),o(d,{label:"套餐名称",prop:"packageName",rules:[{required:!0,message:"请选择套餐名称",trigger:"change"}]},{default:r(()=>[o(m,{modelValue:e.packageName,"onUpdate:modelValue":a[7]||(a[7]=t=>e.packageName=t),options:B.value.map(t=>({label:t,value:t})),placeholder:"请选择套餐名称",disabled:!e.packageType,onChange:ne},null,8,["modelValue","options","disabled"])]),_:1}),e.packageType===2||e.packageType===3||e.packageType===4?(b(),M(d,{key:0,label:"上级地市交通",prop:"parentCityOrgId"},{default:r(()=>[o(m,{modelValue:e.parentCityOrgId,"onUpdate:modelValue":a[8]||(a[8]=t=>e.parentCityOrgId=t),options:$.value.map(t=>({label:t.name,value:t.id})),placeholder:"请选择上级地市交通组织",clearable:""},null,8,["modelValue","options"])]),_:1})):v("",!0),e.packageType===3||e.packageType===4?(b(),M(d,{key:1,label:"上级事务中心",prop:"parentAffairOrgId"},{default:r(()=>[o(m,{modelValue:e.parentAffairOrgId,"onUpdate:modelValue":a[9]||(a[9]=t=>e.parentAffairOrgId=t),options:q.value.map(t=>({label:t.name,value:t.id})),placeholder:"请选择上级事务中心组织",clearable:""},null,8,["modelValue","options"])]),_:1})):v("",!0),e.packageType===4?(b(),M(d,{key:2,label:"上级公司企业",prop:"parentCompanyOrgId"},{default:r(()=>[o(m,{modelValue:e.parentCompanyOrgId,"onUpdate:modelValue":a[10]||(a[10]=t=>e.parentCompanyOrgId=t),options:G.value.map(t=>({label:t.name,value:t.id})),placeholder:"请选择上级公司企业组织",clearable:""},null,8,["modelValue","options"])]),_:1})):v("",!0),o(d,{label:"负责人",prop:"leader"},{default:r(()=>[o(_,{modelValue:e.leader,"onUpdate:modelValue":a[11]||(a[11]=t=>e.leader=t),placeholder:"请输入负责人"},null,8,["modelValue"])]),_:1}),o(d,{label:"联系电话",prop:"contactPhone"},{default:r(()=>[o(_,{modelValue:e.contactPhone,"onUpdate:modelValue":a[12]||(a[12]=t=>e.contactPhone=t),placeholder:"请输入联系电话"},null,8,["modelValue"])]),_:1}),o(d,{label:"邮箱",prop:"email"},{default:r(()=>[o(_,{modelValue:e.email,"onUpdate:modelValue":a[13]||(a[13]=t=>e.email=t),placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1}),o(d,{label:"备注",prop:"description"},{default:r(()=>[o(_,{modelValue:e.description,"onUpdate:modelValue":a[14]||(a[14]=t=>e.description=t),type:"textarea",rows:3,placeholder:"请输入备注",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title","confirm-text"])]),_:1})}}}),Ze=be(Pe,[["__scopeId","data-v-d70ce9d2"]]);export{Ze as default};

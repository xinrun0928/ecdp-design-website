import{j as te,i as ne,o as re,p as le,v as ie,q as de,b as pe,s as ge,m as ce,g as se}from"./index-4pNdp9yc.js";import{ar as ue,bn as _e,bo as me,d as Ne,aK as Oe,k as Te,bc as fe,bd as Le,bl as Ce,M as Me,bD as be,a as E}from"./element-plus-FTcyDTKl.js";/* empty css                       */import{o as h}from"./orgTreeData-CsDrU_2I.js";import{a as Ee}from"./areaData-DFLUZyLP.js";import{o as I,b as he}from"./orgTypeData-CB60QXbY.js";import{b as Ie}from"./warning-BshV8eZN.js";import"./subsystem-cdL3j6aS.js";import{G as Se,n as Ue,O as ye,W as r,aj as S,r as O,L as Ae,a0 as n,_ as U,$ as y,u as C,P as A,k as v,c as T}from"./vue-vendor-CYCT-Zs3.js";import"./orgTreeData-D6VkkBhm.js";import"./randomMock-C6-QJwcy.js";import"./tree-Di5k6ZR9.js";const ve=`-- Table structure for org_organization
-- ----------------------------
DROP TABLE IF EXISTS "public"."org_organization";
CREATE TABLE "public"."org_organization" (
  "org_id" bigint NOT NULL,
  "parent_id" bigint NOT NULL DEFAULT 0,
  "ancestors" text COLLATE "pg_catalog"."default",
  "level" integer NOT NULL DEFAULT 1,
  "org_code" varchar(50) COLLATE "pg_catalog"."default",
  "org_name" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "org_short_name" varchar(128) COLLATE "pg_catalog"."default",
  "introduce" varchar(500) COLLATE "pg_catalog"."default",
  "area_codes" varchar(1000) COLLATE "pg_catalog"."default",
  "area_min_code" varchar(32) COLLATE "pg_catalog"."default",
  "area_min_name" varchar(128) COLLATE "pg_catalog"."default",
  "area_names" varchar(1000) COLLATE "pg_catalog"."default",
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
  "org_type_id" text COLLATE "pg_catalog"."default",
  "org_type_name" text COLLATE "pg_catalog"."default",
  "org_type_code" text COLLATE "pg_catalog"."default",
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
COMMENT ON COLUMN "public"."org_organization"."org_short_name" IS '组织简称';
COMMENT ON COLUMN "public"."org_organization"."introduce" IS '组织介绍';
COMMENT ON COLUMN "public"."org_organization"."area_codes" IS '归属地区编码列表，多个用英文逗号分隔';
COMMENT ON COLUMN "public"."org_organization"."area_min_code" IS '最小单元区域编码（动态层级：选到市存市编码，选到街道存街道编码）';
COMMENT ON COLUMN "public"."org_organization"."area_min_name" IS '最小单元区域名称';
COMMENT ON COLUMN "public"."org_organization"."area_names" IS '归属地区名称列表，多个用英文逗号分隔';
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
COMMENT ON COLUMN "public"."org_organization"."org_type_id" IS '组织类型ID';
COMMENT ON COLUMN "public"."org_organization"."org_type_name" IS '组织类型名称';
COMMENT ON COLUMN "public"."org_organization"."org_type_code" IS '组织类型编码';
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
`,ze={class:"org-name"},Ve=Se({__name:"OrgTreeView",setup(xe){const f=O(!1),_=O(!1),u=O(!1),m=O(),g=v({name:"",areaName:[]}),a=v({id:0,parentId:0,orgCode:"",areaCode:[],name:"",orgShortName:"",orgTypeId:null,orgTypeName:"",orgTypeCode:"",leader:"",contactPhone:"",contactFax:"",email:"",displayOrder:0,status:1101,description:""}),z=[{prop:"name",label:"组织名称",minWidth:280,align:"left",headerAlign:"left",slot:"name"},{prop:"orgCode",label:"组织编码",width:100,align:"center",showOverflowTooltip:!0},{prop:"orgShortName",label:"组织简称",width:140,align:"center",showOverflowTooltip:!0,formatter:e=>e.orgShortName||"-"},{prop:"orgTypeName",label:"组织类型",width:170,align:"center",highlight:!0,showOverflowTooltip:!0,formatter:e=>e.orgTypeName||"-"},{prop:"areaName",label:"归属地区",width:120,align:"center",showOverflowTooltip:!0,formatter:e=>e.areaName||"-"},{prop:"status",label:"状态",width:90,align:"center",slot:"status"},{prop:"leader",label:"负责人",width:100,align:"center",showOverflowTooltip:!0,formatter:e=>e.leader||"-"},{prop:"contactPhone",label:"联系电话",width:130,align:"center",showOverflowTooltip:!0,formatter:e=>e.contactPhone||"-"},{prop:"email",label:"邮箱",minWidth:150,showOverflowTooltip:!0,formatter:e=>e.email||"-"},{prop:"members",label:"成员数",width:80,align:"center",formatter:e=>{var o;return((o=e.members)==null?void 0:o.length)||0}},{prop:"creater",label:"创建人",width:100,align:"center",formatter:e=>e.creater||"-"},{prop:"createTime",label:"创建时间",width:175,align:"center",formatter:e=>e.createTime||"-"},{prop:"updater",label:"更新人",width:100,align:"center",formatter:e=>e.updater||"-"},{prop:"updateTime",label:"更新时间",width:175,align:"center",formatter:e=>e.updateTime||"-"},{prop:"actions",label:"操作",width:60,align:"center",fixed:"right",slot:"actions"}],V=T(()=>Ee),x=T(()=>he(I)),D={label:"name",value:"code",children:"children",checkStrictly:!0,emitPath:!0},w=T(()=>[{id:0,name:"（顶级组织）",children:h}]),F=T(()=>{let e=h;if(g.name||g.areaName.length){const i=P(e).filter(l=>{const p=!g.name||l.name.includes(g.name),c=g.areaName[g.areaName.length-1],L=!c||(l.areaName||"").includes(c);return p&&L});e=R(i)}return e});function P(e){const o=[];function i(l){for(const p of l)o.push(p),p.children&&i(p.children)}return i(e),o}function R(e){const o=new Map,i=[];return e.forEach(l=>{o.set(l.id,{...l,children:[]})}),e.forEach(l=>{const p=o.get(l.id),c=k(l,e);c&&o.has(c.id)?o.get(c.id).children.push(p):i.push(p)}),i}function k(e,o){const i=o.findIndex(l=>l.id===e.id);for(let l=i-1;l>=0;l--)if(o[l].id<e.id)return o[l];return null}const B=[{label:"编辑",icon:ue,handler:e=>G(e)},{label:"新增子集",icon:_e,handler:e=>M(e)},{label:"删除",icon:me,divided:!0,handler:e=>X(e)}];function N(){f.value=!0;try{}finally{f.value=!1}}function $(){N()}function q(e){const o=I.find(i=>i.orgTypeId===e);a.orgTypeName=(o==null?void 0:o.orgTypeName)??"",a.orgTypeCode=(o==null?void 0:o.orgTypeCode)??""}function M(e){u.value=!1,a.id=0,a.parentId=(e==null?void 0:e.id)||0,a.orgCode="",a.areaCode=[],a.name="",a.orgShortName="",a.orgTypeId=null,a.orgTypeName="",a.orgTypeCode="",a.leader="",a.contactPhone="",a.contactFax="",a.email="",a.displayOrder=0,a.status=1101,a.description="",_.value=!0}function G(e){u.value=!0,a.id=e.id,a.parentId=0,a.orgCode=e.orgCode??"",a.areaCode=[],a.name=e.name,a.orgShortName=e.orgShortName??"",a.orgTypeId=e.orgTypeId??null,a.orgTypeName=e.orgTypeName??"",a.orgTypeCode=e.orgTypeCode??"",a.leader="",a.contactPhone="",a.contactFax=e.contactFax??"",a.email="",a.displayOrder=e.displayOrder??0,a.status=e.status??1101,a.description=e.description,_.value=!0}async function X(e){await ie(e.name)&&(E.success("删除成功"),N())}async function W(){return m.value&&await m.value.validate().catch(()=>!1)?(E.success(u.value?"编辑成功":"新增成功"),N(),!0):!1}function K(){var e;(e=m.value)==null||e.resetFields()}return Ue(()=>{N()}),(e,o)=>{const i=S("table-structure-drawer"),l=de,p=pe,c=Ne,L=Te,j=ne,Y=te,H=ge,b=Ce,d=Le,s=Me,J=be,Q=re,Z=le,ee=fe,ae=ce,oe=S("card-layout");return Ae(),ye(oe,{title:"组织管理"},{"title-extra":r(()=>[n(i,{sql:C(ve)},null,8,["sql"])]),search:r(()=>[n(l,{modelValue:g.name,"onUpdate:modelValue":o[0]||(o[0]=t=>g.name=t),placeholder:"搜索组织名称",onSearch:$},null,8,["modelValue"])]),actions:r(()=>[n(p,{"margin-left":10,onClick:o[1]||(o[1]=t=>M(null))},{default:r(()=>[...o[16]||(o[16]=[U("新增组织",-1)])]),_:1})]),default:r(()=>[n(H,{data:F.value,columns:z,loading:f.value,"row-key":"id","tree-props":{children:"children",hasChildren:"hasChildren"},"default-expand-all":!0,indent:24,"show-index":!1,"show-pagination":!1,"show-tool-bar":!1},{name:r(({row:t})=>[n(c,{class:"org-icon",color:"#409EFF"},{default:r(()=>[n(C(Oe))]),_:1}),n(L,{content:t.name,placement:"top"},{default:r(()=>[A("span",ze,y(t.name),1)]),_:2},1032,["content"])]),status:r(({row:t})=>[n(j,{size:"small",type:t.status===1101?"success":"info"},{default:r(()=>[U(y(t.status===1101?"正常":"停用"),1)]),_:2},1032,["type"])]),actions:r(({row:t})=>[n(Y,{items:B,row:t},null,8,["row"])]),_:1},8,["data","loading"]),n(ae,{modelValue:_.value,"onUpdate:modelValue":o[15]||(o[15]=t=>_.value=t),title:u.value?"编辑组织":"新增组织",size:"480px",direction:"rtl","destroy-on-close":"","confirm-text":u.value?"保存修改":"确认创建","on-confirm":W,onClosed:K},{default:r(()=>[n(ee,{ref_key:"formRef",ref:m,model:a,"label-width":"110px","label-position":"right"},{default:r(()=>[n(d,{label:"上级节点",prop:"parentId"},{default:r(()=>[n(b,{modelValue:a.parentId,"onUpdate:modelValue":o[2]||(o[2]=t=>a.parentId=t),data:w.value,props:{label:"name",children:"children"},"node-key":"id",placeholder:"请选择上级节点（不选则为顶级）",clearable:"","check-strictly":"",style:{width:"100%"}},null,8,["modelValue","data"])]),_:1}),n(d,{label:"组织编码",prop:"orgCode",rules:[{required:!0,message:"请输入组织编码",trigger:"blur"}]},{default:r(()=>[n(s,{modelValue:a.orgCode,"onUpdate:modelValue":o[3]||(o[3]=t=>a.orgCode=t),placeholder:"请输入组织编码",maxlength:"50","show-word-limit":""},null,8,["modelValue"])]),_:1}),n(d,{label:"组织名称",prop:"name",rules:[{required:!0,message:"请输入组织名称",trigger:"blur"}]},{default:r(()=>[n(s,{modelValue:a.name,"onUpdate:modelValue":o[4]||(o[4]=t=>a.name=t),placeholder:"请输入组织名称",maxlength:"100","show-word-limit":""},null,8,["modelValue"])]),_:1}),n(d,{label:"组织简称",prop:"orgShortName"},{default:r(()=>[n(s,{modelValue:a.orgShortName,"onUpdate:modelValue":o[5]||(o[5]=t=>a.orgShortName=t),placeholder:"请输入组织简称",maxlength:"50","show-word-limit":""},null,8,["modelValue"])]),_:1}),n(d,{label:"组织类型",prop:"orgTypeId"},{default:r(()=>[n(b,{modelValue:a.orgTypeId,"onUpdate:modelValue":o[6]||(o[6]=t=>a.orgTypeId=t),data:x.value,props:{label:"orgTypeName",children:"children"},"node-key":"orgTypeId","check-strictly":"","render-after-expand":!1,placeholder:"请选择组织类型",clearable:"",style:{width:"100%"},onChange:q},null,8,["modelValue","data"])]),_:1}),n(d,{label:"归属地区",prop:"areaCode"},{default:r(()=>[n(J,{modelValue:a.areaCode,"onUpdate:modelValue":o[7]||(o[7]=t=>a.areaCode=t),options:V.value,props:D,placeholder:"请选择归属地区",clearable:"",style:{width:"100%"}},null,8,["modelValue","options"])]),_:1}),n(d,{label:"负责人",prop:"leader"},{default:r(()=>[n(s,{modelValue:a.leader,"onUpdate:modelValue":o[8]||(o[8]=t=>a.leader=t),placeholder:"请输入负责人"},null,8,["modelValue"])]),_:1}),n(d,{label:"联系电话",prop:"contactPhone"},{default:r(()=>[n(s,{modelValue:a.contactPhone,"onUpdate:modelValue":o[9]||(o[9]=t=>a.contactPhone=t),placeholder:"请输入联系电话"},null,8,["modelValue"])]),_:1}),n(d,{label:"传真",prop:"contactFax"},{default:r(()=>[n(s,{modelValue:a.contactFax,"onUpdate:modelValue":o[10]||(o[10]=t=>a.contactFax=t),placeholder:"请输入传真号码",maxlength:"20"},null,8,["modelValue"])]),_:1}),n(d,{label:"邮箱",prop:"email"},{default:r(()=>[n(s,{modelValue:a.email,"onUpdate:modelValue":o[11]||(o[11]=t=>a.email=t),placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1}),n(d,{label:"排序",prop:"displayOrder"},{default:r(()=>[n(Q,{modelValue:a.displayOrder,"onUpdate:modelValue":o[12]||(o[12]=t=>a.displayOrder=t),min:0,max:9999,width:"180px"},null,8,["modelValue"]),o[17]||(o[17]=A("div",{class:"form-tip"},"数值越小越靠前",-1))]),_:1}),n(d,{label:"状态",prop:"status"},{default:r(()=>[n(Z,{modelValue:a.status,"onUpdate:modelValue":o[13]||(o[13]=t=>a.status=t),options:C(Ie)},null,8,["modelValue","options"])]),_:1}),n(d,{label:"备注",prop:"description"},{default:r(()=>[n(s,{modelValue:a.description,"onUpdate:modelValue":o[14]||(o[14]=t=>a.description=t),type:"textarea",rows:3,placeholder:"请输入备注",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title","confirm-text"])]),_:1})}}}),Ke=se(Ve,[["__scopeId","data-v-d93db408"]]);export{Ke as default};

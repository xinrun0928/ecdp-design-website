import{m as Z,s as J,j as Q,i as ee,b as te,q as ae,o as re,p as oe,v as le,g as ne}from"./index-B-IfrPXT.js";import{d as se,ae as pe,k as ie,aG as _e,aH as de,aW as ue,M as ce,aY as ge,b8 as ye,a_ as me,a as E}from"./element-plus-C-8OMMB5.js";/* empty css                       */import{o as u,b as y}from"./orgTypeData-CB60QXbY.js";import{b as Ne}from"./warning-BshV8eZN.js";import"./subsystem-DveL0s1z.js";import{G as Te,n as Oe,M as Le,a0 as r,W as l,r as i,aj as b,L as fe,_ as m,$ as N,u as T,P as C,k as M,c as I}from"./vue-vendor-CYCT-Zs3.js";import"./randomMock-C6-QJwcy.js";import"./tree-Di5k6ZR9.js";const Ee=`-- Table structure for sys_org_type
-- ----------------------------
DROP TABLE IF EXISTS "public"."sys_org_type";
CREATE TABLE "public"."sys_org_type" (
  "org_type_id" bigint NOT NULL,
  "parent_id" bigint NOT NULL DEFAULT 0,
  "ancestors" text COLLATE "pg_catalog"."default",
  "org_type_code" varchar(64) COLLATE "pg_catalog"."default" NOT NULL,
  "org_type_name" varchar(128) COLLATE "pg_catalog"."default" NOT NULL,
  "display_order" integer NOT NULL DEFAULT 0,
  "is_builtin" integer NOT NULL DEFAULT 0,
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
ALTER TABLE "public"."sys_org_type" OWNER TO "postgres";
COMMENT ON COLUMN "public"."sys_org_type"."org_type_id" IS '组织类型ID';
COMMENT ON COLUMN "public"."sys_org_type"."parent_id" IS '父组织类型ID（0表示根节点）';
COMMENT ON COLUMN "public"."sys_org_type"."ancestors" IS '祖级路径（含自身ID），格式：0/父ID1/父ID2/.../直接父ID/自身orgTypeId';
COMMENT ON COLUMN "public"."sys_org_type"."org_type_code" IS '组织类型编码（唯一，不允许修改）';
COMMENT ON COLUMN "public"."sys_org_type"."org_type_name" IS '组织类型名称';
COMMENT ON COLUMN "public"."sys_org_type"."display_order" IS '排序字段';
COMMENT ON COLUMN "public"."sys_org_type"."is_builtin" IS '是否内建类型（0否 1是，内建类型不允许删除）';
COMMENT ON COLUMN "public"."sys_org_type"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."sys_org_type"."remark" IS '备注';
COMMENT ON COLUMN "public"."sys_org_type"."creater" IS '创建者';
COMMENT ON COLUMN "public"."sys_org_type"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."sys_org_type"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."sys_org_type"."updater" IS '更新者';
COMMENT ON COLUMN "public"."sys_org_type"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."sys_org_type"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."sys_org_type"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."sys_org_type"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."sys_org_type"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."sys_org_type"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."sys_org_type"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."sys_org_type"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."sys_org_type"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."sys_org_type" IS '组织类型表';

-- ----------------------------
-- Indexes structure for table sys_org_type
-- ----------------------------
CREATE INDEX "idx_sys_org_type_ancestors" ON "public"."sys_org_type" USING btree (
  "ancestors" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE ancestors IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_sys_org_type_org_type_code" ON "public"."sys_org_type" USING btree (
  "org_type_code" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE org_type_code IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_sys_org_type_parent_order" ON "public"."sys_org_type" USING btree (
  "parent_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "display_order" "pg_catalog"."int4_ops" ASC NULLS LAST
) WHERE deleted = 0;
CREATE INDEX "idx_sys_org_type_status_display" ON "public"."sys_org_type" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "display_order" "pg_catalog"."int4_ops" ASC NULLS LAST
) WHERE deleted = 0;
CREATE INDEX "idx_sys_org_type_creater_org_id" ON "public"."sys_org_type" USING btree (
  "creater_org_id" "pg_catalog"."int8_ops" ASC NULLS LAST
) WHERE creater_org_id IS NOT NULL AND deleted = 0;

-- Primary Key structure for table sys_org_type
-- ----------------------------
ALTER TABLE "public"."sys_org_type" ADD CONSTRAINT "sys_org_type_pkey" PRIMARY KEY ("org_type_id");

-- ----------------------------
`,be={class:"org-type-management"},Ce={class:"type-name"},Me=Te({__name:"OrgTypeManagement",setup(Ie){const c=i(!1),U=i([]),p=i(!1),n=i(!1),_=i(),d=M({orgTypeName:""}),a=M({orgTypeId:0,parentId:0,orgTypeCode:"",orgTypeName:"",displayOrder:0,status:1101,remark:""}),S={orgTypeName:[{required:!0,message:"请输入组织类型名称",trigger:"blur"}],orgTypeCode:[{required:!0,message:"请输入组织类型编码",trigger:"blur"},{pattern:/^[A-Z_]+$/,message:"只能包含大写字母和下划线",trigger:"blur"}],displayOrder:[{required:!0,message:"请输入排序值",trigger:"blur"}],status:[{required:!0,message:"请选择状态",trigger:"change"}]},A=[{prop:"orgTypeName",label:"类型名称",minWidth:240,align:"left",headerAlign:"left",slot:"orgTypeName"},{prop:"orgTypeCode",label:"类型编码",minWidth:200,align:"center",showOverflowTooltip:!0,cellType:"code"},{prop:"isBuiltin",label:"类型来源",width:100,align:"center",slot:"isBuiltin"},{prop:"displayOrder",label:"排序",width:80,align:"center"},{prop:"status",label:"状态",width:90,align:"center",slot:"status"},{prop:"remark",label:"备注",minWidth:200,align:"center",showOverflowTooltip:!0,formatter:o=>o.remark||"-"},{prop:"creater",label:"创建人",width:100,align:"center",cellType:"secondary"},{prop:"createTime",label:"创建时间",width:175,align:"center",cellType:"secondary"},{prop:"updater",label:"更新人",width:100,align:"center",cellType:"secondary"},{prop:"updateTime",label:"更新时间",width:175,align:"center",cellType:"secondary"},{label:"操作",width:60,align:"center",fixed:"right",slot:"actions"}],h=I(()=>{if(!d.orgTypeName)return y(u);const o=u.filter(e=>e.orgTypeName.includes(d.orgTypeName));return y(o)}),v=I(()=>[{orgTypeId:0,orgTypeName:"（顶级类型）",children:y(u)}]);function D(o){return[{label:"编辑",icon:ge,handler:e=>V(e)},{label:"子类型",icon:ye,handler:e=>L(e)},{label:"删除",icon:me,divided:!0,disabled:o.isBuiltin===1,handler:e=>w(e)}]}function O(){c.value=!0;try{U.value=[...u]}finally{c.value=!1}}function x(){}function L(o){n.value=!1,a.orgTypeId=0,a.parentId=o?o.orgTypeId:0,a.orgTypeCode="",a.orgTypeName="",a.displayOrder=0,a.status=1101,a.remark="",p.value=!0}function V(o){n.value=!0,a.orgTypeId=o.orgTypeId,a.parentId=o.parentId,a.orgTypeCode=o.orgTypeCode,a.orgTypeName=o.orgTypeName,a.displayOrder=o.displayOrder,a.status=o.status,a.remark=o.remark??"",p.value=!0}function R(){_.value&&_.value.validate(o=>{o&&(E.success(n.value?"编辑成功":"新增成功"),p.value=!1)})}async function w(o){await le(o.orgTypeName)&&(E.success("删除成功"),O())}function k(){var o;(o=_.value)==null||o.resetFields()}return Oe(()=>{O()}),(o,e)=>{const F=b("table-structure-drawer"),B=ae,W=te,q=se,$=ie,f=ee,G=Q,H=J,P=b("card-layout"),X=ue,s=de,g=ce,z=re,Y=oe,j=_e,K=Z;return fe(),Le("div",be,[r(P,{title:"组织类型"},{"title-extra":l(()=>[r(F,{sql:T(Ee)},null,8,["sql"])]),search:l(()=>[r(B,{modelValue:d.orgTypeName,"onUpdate:modelValue":e[0]||(e[0]=t=>d.orgTypeName=t),placeholder:"搜索类型名称",onSearch:x},null,8,["modelValue"])]),actions:l(()=>[r(W,{"margin-left":10,onClick:e[1]||(e[1]=t=>L(null))},{default:l(()=>[...e[9]||(e[9]=[m("新增组织类型",-1)])]),_:1})]),default:l(()=>[r(H,{data:h.value,columns:A,"row-key":"orgTypeId","tree-props":{children:"children",hasChildren:"hasChildren"},"default-expand-all":!0,indent:24,"show-index":!1,"show-pagination":!1,"show-tool-bar":!1,loading:c.value,"empty-text":" "},{orgTypeName:l(({row:t})=>[r(q,{class:"type-icon",color:"#409EFF"},{default:l(()=>[r(T(pe))]),_:1}),r($,{content:t.orgTypeName,placement:"top"},{default:l(()=>[C("span",Ce,N(t.orgTypeName),1)]),_:2},1032,["content"])]),isBuiltin:l(({row:t})=>[r(f,{type:t.isBuiltin===1?"warning":"info",effect:"plain",size:"small"},{default:l(()=>[m(N(t.isBuiltin===1?"内建":"自定义"),1)]),_:2},1032,["type"])]),status:l(({row:t})=>[r(f,{type:t.status===1101?"success":"info",effect:"plain",size:"small"},{default:l(()=>[m(N(t.status===1101?"正常":"停用"),1)]),_:2},1032,["type"])]),actions:l(({row:t})=>[r(G,{items:D(t),row:t},null,8,["items","row"])]),_:1},8,["data","loading"])]),_:1}),r(K,{modelValue:p.value,"onUpdate:modelValue":e[8]||(e[8]=t=>p.value=t),title:n.value?"编辑组织类型":"新增组织类型",size:"480px",direction:"rtl","destroy-on-close":"","confirm-text":n.value?"保存修改":"确认创建","on-confirm":R,onClosed:k},{default:l(()=>[r(j,{ref_key:"formRef",ref:_,model:a,rules:S,"label-width":"90px","label-position":"right",class:"org-type-form"},{default:l(()=>[r(s,{label:"上级类型",prop:"parentId"},{default:l(()=>[r(X,{modelValue:a.parentId,"onUpdate:modelValue":e[2]||(e[2]=t=>a.parentId=t),data:v.value,props:{label:"orgTypeName",children:"children"},"node-key":"orgTypeId","check-strictly":"","render-after-expand":!1,placeholder:"请选择上级类型（不选则为顶级）",clearable:"",style:{width:"100%"}},null,8,["modelValue","data"])]),_:1}),r(s,{label:"类型名称",prop:"orgTypeName"},{default:l(()=>[r(g,{modelValue:a.orgTypeName,"onUpdate:modelValue":e[3]||(e[3]=t=>a.orgTypeName=t),placeholder:"请输入组织类型名称",maxlength:"50","show-word-limit":""},null,8,["modelValue"])]),_:1}),r(s,{label:"类型编码",prop:"orgTypeCode"},{default:l(()=>[r(g,{modelValue:a.orgTypeCode,"onUpdate:modelValue":e[4]||(e[4]=t=>a.orgTypeCode=t),placeholder:"如：TRAFFIC_ADMIN",maxlength:"64","show-word-limit":"",disabled:n.value},null,8,["modelValue","disabled"])]),_:1}),r(s,{label:"排序",prop:"displayOrder"},{default:l(()=>[r(z,{modelValue:a.displayOrder,"onUpdate:modelValue":e[5]||(e[5]=t=>a.displayOrder=t),min:0,max:9999,width:"180px"},null,8,["modelValue"]),e[10]||(e[10]=C("div",{class:"form-tip"},"数值越小越靠前",-1))]),_:1}),r(s,{label:"状态",prop:"status"},{default:l(()=>[r(Y,{modelValue:a.status,"onUpdate:modelValue":e[6]||(e[6]=t=>a.status=t),options:T(Ne)},null,8,["modelValue","options"])]),_:1}),r(s,{label:"备注",prop:"remark"},{default:l(()=>[r(g,{modelValue:a.remark,"onUpdate:modelValue":e[7]||(e[7]=t=>a.remark=t),type:"textarea",rows:3,placeholder:"请输入备注",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title","confirm-text"])])}}}),we=ne(Me,[["__scopeId","data-v-ba69d962"]]);export{we as default};

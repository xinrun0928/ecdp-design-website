import{m as Y,s as Z,j as J,i as Q,b as ee,q as te,o as ae,p as re,v as oe,g as le}from"./index-BGoR6y1A.js";import{d as ne,al as se,k as pe,bc as ie,bd as _e,bl as de,M as ue,ar as ge,by as ce,bo as ye,a as O}from"./element-plus-FTcyDTKl.js";/* empty css                       */import{b as c,o as y}from"./orgTypeData-BH2M6DUv.js";import{S as L,s as me,a as Ne,b as Te}from"./warning-BshV8eZN.js";import"./subsystem-BQNqsSr5.js";import{c as Oe,M as Le,a as Ee}from"./ui-CkdNVOlu.js";import{G as fe,n as be,M as Ce,a0 as o,W as l,r as d,aj as E,k as f,L as Me,_ as b,$ as C,u as m,P as M,c as S}from"./vue-vendor-CYCT-Zs3.js";import"./randomMock-C6-QJwcy.js";import"./tree-Di5k6ZR9.js";const Se=`-- Table structure for sys_org_type
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
COMMENT ON COLUMN "public"."sys_org_type"."remark" IS '备注信息';
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
CREATE INDEX "idx_sys_org_type_creater_org_id" ON "public"."sys_org_type" USING btree (
  "creater_org_id" "pg_catalog"."int8_ops" ASC NULLS LAST
) WHERE creater_org_id IS NOT NULL AND deleted = 0;
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

-- Primary Key structure for table sys_org_type
-- ----------------------------
ALTER TABLE "public"."sys_org_type" ADD CONSTRAINT "sys_org_type_pkey" PRIMARY KEY ("org_type_id");

-- ----------------------------
`,Ie={class:"org-type-management"},Ue={class:"type-name"},Ae=fe({__name:"OrgTypeManagement",setup(he){const u=d(!1),p=d(!1),n=d(!1),i=d(),_=f({orgTypeName:""}),t=f({orgTypeId:0,parentId:0,orgTypeCode:"",orgTypeName:"",displayOrder:0,status:L.NORMAL,remark:""}),I={orgTypeName:[{required:!0,message:"请输入组织类型名称",trigger:"blur"}],orgTypeCode:[{required:!0,message:"请输入组织类型编码",trigger:"blur"},{pattern:/^[A-Z_]+$/,message:"只能包含大写字母和下划线",trigger:"blur"}],displayOrder:[{required:!0,message:"请输入排序值",trigger:"blur"}],status:[{required:!0,message:"请选择状态",trigger:"change"}]},U=[{prop:"orgTypeName",label:"类型名称",minWidth:240,align:"left",headerAlign:"left",slot:"orgTypeName"},{prop:"orgTypeCode",label:"类型编码",minWidth:200,align:"center",showOverflowTooltip:!0,cellType:"code"},{prop:"isBuiltin",label:"类型来源",width:100,align:"center",slot:"isBuiltin"},{prop:"displayOrder",label:"排序",width:80,align:"center"},{prop:"status",label:"状态",width:90,align:"center",cellType:"tag",tagMap:Ne,tagLabelMap:me},{prop:"remark",label:"备注",minWidth:200,align:"center",showOverflowTooltip:!0,formatter:r=>r.remark||"-"},{prop:"creater",label:"创建人",width:100,align:"center",cellType:"secondary"},{prop:"createTime",label:"创建时间",width:175,align:"center",cellType:"secondary"},{prop:"updater",label:"更新人",width:100,align:"center",cellType:"secondary"},{prop:"updateTime",label:"更新时间",width:175,align:"center",cellType:"secondary"},{label:"操作",width:60,align:"center",fixed:"right",slot:"actions"}],A=S(()=>{if(!_.orgTypeName)return c(y);const r=y.filter(e=>e.orgTypeName.includes(_.orgTypeName));return c(r)}),h=S(()=>[{orgTypeId:0,orgTypeName:"（顶级类型）",children:c(y)}]);function v(r){return[{label:"编辑",icon:ge,handler:e=>D(e)},{label:"子类型",icon:ce,handler:e=>T(e)},{label:"删除",icon:ye,divided:!0,disabled:r.isBuiltin===1,handler:e=>R(e)}]}function N(){u.value=!0;try{}finally{u.value=!1}}function T(r){n.value=!1,t.orgTypeId=0,t.parentId=r?r.orgTypeId:0,t.orgTypeCode="",t.orgTypeName="",t.displayOrder=0,t.status=L.NORMAL,t.remark="",p.value=!0}function D(r){n.value=!0,t.orgTypeId=r.orgTypeId,t.parentId=r.parentId,t.orgTypeCode=r.orgTypeCode,t.orgTypeName=r.orgTypeName,t.displayOrder=r.displayOrder,t.status=r.status,t.remark=r.remark??"",p.value=!0}function x(){i.value&&i.value.validate(r=>{r&&(O.success(n.value?Le:Ee),p.value=!1)})}async function R(r){await oe(r.orgTypeName)&&(O.success(Oe),N())}function V(){var r;(r=i.value)==null||r.resetFields()}return be(()=>{N()}),(r,e)=>{const w=E("table-structure-drawer"),k=te,F=ee,B=ne,W=pe,G=Q,q=J,$=Z,P=E("card-layout"),X=de,s=_e,g=ue,H=ae,j=re,z=ie,K=Y;return Me(),Ce("div",Ie,[o(P,{title:"组织类型"},{"title-extra":l(()=>[o(w,{sql:m(Se)},null,8,["sql"])]),search:l(()=>[o(k,{modelValue:_.orgTypeName,"onUpdate:modelValue":e[0]||(e[0]=a=>_.orgTypeName=a),placeholder:"搜索类型名称"},null,8,["modelValue"])]),actions:l(()=>[o(F,{"margin-left":10,onClick:e[1]||(e[1]=a=>T(null))},{default:l(()=>[...e[9]||(e[9]=[b("新增组织类型",-1)])]),_:1})]),default:l(()=>[o($,{data:A.value,columns:U,"row-key":"orgTypeId","tree-props":{children:"children",hasChildren:"hasChildren"},"default-expand-all":!0,indent:24,"show-index":!1,"show-pagination":!1,"show-tool-bar":!1,loading:u.value,"empty-text":" "},{orgTypeName:l(({row:a})=>[o(B,{class:"type-icon",color:"#409EFF"},{default:l(()=>[o(m(se))]),_:1}),o(W,{content:a.orgTypeName,placement:"top"},{default:l(()=>[M("span",Ue,C(a.orgTypeName),1)]),_:2},1032,["content"])]),isBuiltin:l(({row:a})=>[o(G,{type:a.isBuiltin===1?"warning":"info",effect:"plain",size:"small"},{default:l(()=>[b(C(a.isBuiltin===1?"内建":"自定义"),1)]),_:2},1032,["type"])]),actions:l(({row:a})=>[o(q,{items:v(a),row:a},null,8,["items","row"])]),_:1},8,["data","loading"])]),_:1}),o(K,{modelValue:p.value,"onUpdate:modelValue":e[8]||(e[8]=a=>p.value=a),title:n.value?"编辑组织类型":"新增组织类型",size:"480px",direction:"rtl","destroy-on-close":"","confirm-text":n.value?"保存修改":"确认创建","on-confirm":x,onClosed:V},{default:l(()=>[o(z,{ref_key:"formRef",ref:i,model:t,rules:I,"label-width":"90px","label-position":"right",class:"org-type-form"},{default:l(()=>[o(s,{label:"上级类型",prop:"parentId"},{default:l(()=>[o(X,{modelValue:t.parentId,"onUpdate:modelValue":e[2]||(e[2]=a=>t.parentId=a),data:h.value,props:{label:"orgTypeName",children:"children"},"node-key":"orgTypeId","check-strictly":"","render-after-expand":!1,placeholder:"请选择上级类型（不选则为顶级）",clearable:"",style:{width:"100%"}},null,8,["modelValue","data"])]),_:1}),o(s,{label:"类型名称",prop:"orgTypeName"},{default:l(()=>[o(g,{modelValue:t.orgTypeName,"onUpdate:modelValue":e[3]||(e[3]=a=>t.orgTypeName=a),placeholder:"请输入组织类型名称",maxlength:"50","show-word-limit":""},null,8,["modelValue"])]),_:1}),o(s,{label:"类型编码",prop:"orgTypeCode"},{default:l(()=>[o(g,{modelValue:t.orgTypeCode,"onUpdate:modelValue":e[4]||(e[4]=a=>t.orgTypeCode=a),placeholder:"如：TRAFFIC_ADMIN",maxlength:"64","show-word-limit":"",disabled:n.value},null,8,["modelValue","disabled"])]),_:1}),o(s,{label:"排序",prop:"displayOrder"},{default:l(()=>[o(H,{modelValue:t.displayOrder,"onUpdate:modelValue":e[5]||(e[5]=a=>t.displayOrder=a),min:0,max:9999,width:"180px"},null,8,["modelValue"]),e[10]||(e[10]=M("div",{class:"form-tip"},"数值越小越靠前",-1))]),_:1}),o(s,{label:"状态",prop:"status"},{default:l(()=>[o(j,{modelValue:t.status,"onUpdate:modelValue":e[6]||(e[6]=a=>t.status=a),options:m(Te)},null,8,["modelValue","options"])]),_:1}),o(s,{label:"备注",prop:"remark"},{default:l(()=>[o(g,{modelValue:t.remark,"onUpdate:modelValue":e[7]||(e[7]=a=>t.remark=a),type:"textarea",rows:3,placeholder:"请输入备注",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title","confirm-text"])])}}}),Ge=le(Ae,[["__scopeId","data-v-b5a82d5e"]]);export{Ge as default};

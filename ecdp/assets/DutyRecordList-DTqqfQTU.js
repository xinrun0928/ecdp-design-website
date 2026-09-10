import{y as V,F as G,aP as Y,a as k,aU as q,d as K,q as W,r as j,N as H,U as $,ah as Q,ai as J,aQ as Z}from"./index-BQSjtNr4.js";import{ba as tt,R as et,a0 as at,d as rt,$ as nt,a as m,b9 as lt,ar as ot,bx as dt}from"./element-plus-Bt8i1BPk.js";/* empty css                     */import{G as B,d as _t,O as it,W as n,c as ut,L as P,a0 as a,P as N,u as _,_ as C,p as x,m as ct,M as Nt,l as pt,F as Ot,aj as F}from"./vue-vendor-CrWx_I7L.js";import{m as st}from"./dutyRecordData-0Xab1D1b.js";import{u as Lt}from"./useMockTablePage-BzRj7glv.js";import{u as gt}from"./useCrudDrawer-BkD-uz5U.js";import"./markdown-BUTMf7eB.js";import"./editor-CMUCu6Rk.js";import"./ol-map-DY4XWb27.js";const Tt={class:"form-field-group"},Mt={class:"form-field-group"},mt={class:"form-field-group"},Ct={class:"form-field-group"},Et={class:"upload-area"},yt={class:"drawer-footer"},St=B({__name:"DutyRecordFormDrawer",props:{visible:{type:Boolean},editData:{default:void 0}},emits:["update:visible","confirm","cancel"],setup(A,{emit:E}){const u=A,g=E,p=x(),f=x(),T=x(!1),I=ut(()=>{var o;return!!((o=u.editData)!=null&&o.id)}),y=Y,e=ct({workSummary:"",importantMatters:"",eventType:"",other:"",files:[]}),s={workSummary:[{required:!0,message:"请输入工作总结",trigger:"blur"}],importantMatters:[{required:!0,message:"请输入重要事项",trigger:"blur"}],eventType:[{required:!0,message:"请选择事件类型",trigger:"change"}]};_t(()=>u.visible,o=>{o&&(u.editData?(e.workSummary=u.editData.workSummary||"",e.importantMatters=u.editData.importantMatters||"",e.eventType=u.editData.eventType||"",e.other=u.editData.other||"",e.files=u.editData.files?[...u.editData.files]:[]):S())});function S(){var o;(o=p.value)==null||o.resetFields(),e.workSummary="",e.importantMatters="",e.eventType="",e.other="",e.files=[]}function b(o,t){if(o.size&&!q(o.size,50)){m.error("文件大小不能超过 50MB"),t.pop();return}e.files=t.map(d=>{var i;return{id:d.uid,name:d.name||"",url:d.url||"",size:d.size,type:(i=d.raw)==null?void 0:i.type}})}function h(o,t){e.files=t.map(d=>{var i;return{id:d.uid,name:d.name||"",url:d.url||"",size:d.size,type:(i=d.raw)==null?void 0:i.type}})}function v(){m.warning("最多只能上传 5 个文件")}function M(){g("update:visible",!1),g("cancel")}async function D(){var o;if(p.value)try{await p.value.validate(),T.value=!0;const t={id:(o=u.editData)==null?void 0:o.id,workSummary:e.workSummary,importantMatters:e.importantMatters,eventType:e.eventType,other:e.other,files:e.files};g("confirm",t)}catch{}finally{T.value=!1}}return(o,t)=>{const d=et,i=tt,R=G,w=rt,l=k,r=at,c=lt,U=V;return P(),it(U,{"model-value":A.visible,title:I.value?"编辑值班记录":"新增值班记录",direction:"rtl",size:"800px","before-close":M,class:"duty-record-form-drawer","destroy-on-close":""},{footer:n(()=>[N("div",yt,[a(l,{onClick:M},{default:n(()=>[...t[10]||(t[10]=[C("取消",-1)])]),_:1}),a(l,{type:"primary",loading:T.value,onClick:D},{default:n(()=>[...t[11]||(t[11]=[C("确定",-1)])]),_:1},8,["loading"])])]),default:n(()=>[a(c,{ref_key:"formRef",ref:p,model:e,rules:s,"label-width":"100px","label-position":"top"},{default:n(()=>[N("div",Tt,[t[4]||(t[4]=N("div",{class:"field-number"},"1",-1)),a(i,{label:"工作总结",prop:"workSummary"},{default:n(()=>[a(d,{modelValue:e.workSummary,"onUpdate:modelValue":t[0]||(t[0]=O=>e.workSummary=O),type:"textarea",placeholder:"请输入",rows:4,maxlength:"500","show-word-limit":""},null,8,["modelValue"])]),_:1})]),N("div",Mt,[t[5]||(t[5]=N("div",{class:"field-number"},"2",-1)),a(i,{label:"重要事项",prop:"importantMatters"},{default:n(()=>[a(d,{modelValue:e.importantMatters,"onUpdate:modelValue":t[1]||(t[1]=O=>e.importantMatters=O),type:"textarea",placeholder:"请输入",rows:4,maxlength:"500","show-word-limit":""},null,8,["modelValue"])]),_:1})]),N("div",mt,[t[6]||(t[6]=N("div",{class:"field-number"},"3",-1)),a(i,{label:"事件类型",prop:"eventType"},{default:n(()=>[a(R,{modelValue:e.eventType,"onUpdate:modelValue":t[2]||(t[2]=O=>e.eventType=O),placeholder:"下拉选择",options:_(y)},null,8,["modelValue","options"])]),_:1})]),N("div",Ct,[t[7]||(t[7]=N("div",{class:"field-number"},"4",-1)),a(i,{label:"其他",prop:"other"},{default:n(()=>[a(d,{modelValue:e.other,"onUpdate:modelValue":t[3]||(t[3]=O=>e.other=O),type:"textarea",placeholder:"请输入",rows:4,maxlength:"500","show-word-limit":""},null,8,["modelValue"])]),_:1})]),a(i,{label:"上传文件"},{default:n(()=>[N("div",Et,[a(r,{ref_key:"uploadRef",ref:f,"auto-upload":!1,limit:5,"on-change":b,"on-exceed":v,"on-remove":h,"file-list":e.files,accept:".rar,.zip,.doc,.docx,.pdf,.jpg,.jpeg,.png"},{default:n(()=>[a(l,{type:"primary",plain:""},{default:n(()=>[a(w,null,{default:n(()=>[a(_(nt))]),_:1}),t[8]||(t[8]=C(" 上传文件 ",-1))]),_:1})]),_:1},8,["file-list"]),t[9]||(t[9]=N("div",{class:"format-hint"},"支持格式：.rar .zip .doc .docx .pdf .jpg",-1))])]),_:1})]),_:1},8,["model"])]),_:1},8,["model-value","title"])}}}),bt=K(St,[["__scopeId","data-v-8b87cfe0"]]),Ut=`-- Table structure for duty_record
-- ----------------------------
DROP TABLE IF EXISTS "public"."duty_record";
CREATE TABLE "public"."duty_record" (
  "id" bigint NOT NULL,
  "duty_date" date NOT NULL,
  "rule_name" varchar(100) COLLATE "pg_catalog"."default",
  "duty_person" varchar(100) COLLATE "pg_catalog"."default",
  "fill_time" timestamp(6),
  "work_summary" text COLLATE "pg_catalog"."default",
  "important_matters" text COLLATE "pg_catalog"."default",
  "event_type" varchar(50) COLLATE "pg_catalog"."default",
  "other" text COLLATE "pg_catalog"."default",
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
ALTER TABLE "public"."duty_record" OWNER TO "postgres";
COMMENT ON COLUMN "public"."duty_record"."id" IS '主键ID';
COMMENT ON COLUMN "public"."duty_record"."duty_date" IS '值班日期';
COMMENT ON COLUMN "public"."duty_record"."rule_name" IS '排班规则/值班岗位名称';
COMMENT ON COLUMN "public"."duty_record"."duty_person" IS '值班人员';
COMMENT ON COLUMN "public"."duty_record"."fill_time" IS '填报时间';
COMMENT ON COLUMN "public"."duty_record"."work_summary" IS '工作总结';
COMMENT ON COLUMN "public"."duty_record"."important_matters" IS '重要事项';
COMMENT ON COLUMN "public"."duty_record"."event_type" IS '事件类型（traffic_accident交通事故/road_construction道路施工/weather_disaster天气灾害/equipment_failure设备故障/other其他）';
COMMENT ON COLUMN "public"."duty_record"."other" IS '其他事项';
COMMENT ON COLUMN "public"."duty_record"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."duty_record"."remark" IS '备注';
COMMENT ON COLUMN "public"."duty_record"."creater" IS '创建者';
COMMENT ON COLUMN "public"."duty_record"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."duty_record"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."duty_record"."updater" IS '更新者';
COMMENT ON COLUMN "public"."duty_record"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."duty_record"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."duty_record"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."duty_record"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."duty_record"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."duty_record"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."duty_record"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."duty_record"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."duty_record"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."duty_record" IS '值班记录表';

-- ----------------------------

-- Indexes structure for table duty_record
-- ----------------------------
CREATE INDEX "idx_duty_record_duty_date" ON "public"."duty_record" USING btree (
  "duty_date" "pg_catalog"."date_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_record_duty_person" ON "public"."duty_record" USING btree (
  "duty_person" COLLATE "pg_catalog"."default" "pg_catalog"."varchar_pattern_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_record_event_type" ON "public"."duty_record" USING btree (
  "event_type" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE event_type IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_duty_record_status" ON "public"."duty_record" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table duty_record
-- ----------------------------
ALTER TABLE "public"."duty_record" ADD CONSTRAINT "duty_record_pkey" PRIMARY KEY ("id");

-- ----------------------------
`,At=`-- Table structure for duty_log
-- ----------------------------
DROP TABLE IF EXISTS "public"."duty_log";
CREATE TABLE "public"."duty_log" (
  "id" bigint NOT NULL,
  "log_date" date,
  "work_summary" text COLLATE "pg_catalog"."default",
  "important_matters" text COLLATE "pg_catalog"."default",
  "other" text COLLATE "pg_catalog"."default",
  "log_time" varchar(10) COLLATE "pg_catalog"."default",
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
ALTER TABLE "public"."duty_log" OWNER TO "postgres";
COMMENT ON COLUMN "public"."duty_log"."id" IS '主键ID';
COMMENT ON COLUMN "public"."duty_log"."log_date" IS '日志日期';
COMMENT ON COLUMN "public"."duty_log"."work_summary" IS '工作总结';
COMMENT ON COLUMN "public"."duty_log"."important_matters" IS '重要事项';
COMMENT ON COLUMN "public"."duty_log"."other" IS '其他事项';
COMMENT ON COLUMN "public"."duty_log"."log_time" IS '记录时间（HH:mm）';
COMMENT ON COLUMN "public"."duty_log"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."duty_log"."remark" IS '备注';
COMMENT ON COLUMN "public"."duty_log"."creater" IS '创建者';
COMMENT ON COLUMN "public"."duty_log"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."duty_log"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."duty_log"."updater" IS '更新者';
COMMENT ON COLUMN "public"."duty_log"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."duty_log"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."duty_log"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."duty_log"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."duty_log"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."duty_log"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."duty_log"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."duty_log"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."duty_log"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."duty_log" IS '值班日志表';

-- ----------------------------

-- Indexes structure for table duty_log
-- ----------------------------
CREATE INDEX "idx_duty_log_log_date" ON "public"."duty_log" USING btree (
  "log_date" "pg_catalog"."date_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
) WHERE log_date IS NOT NULL;
CREATE INDEX "idx_duty_log_status" ON "public"."duty_log" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table duty_log
-- ----------------------------
ALTER TABLE "public"."duty_log" ADD CONSTRAINT "duty_log_pkey" PRIMARY KEY ("id");

-- ----------------------------
`,ft=`-- Table structure for duty_record_org_rel
-- ----------------------------
DROP TABLE IF EXISTS "public"."duty_record_org_rel";
CREATE TABLE "public"."duty_record_org_rel" (
  "id" bigint NOT NULL,
  "record_id" bigint NOT NULL,
  "org_id" bigint NOT NULL,
  "org_name" varchar(128) COLLATE "pg_catalog"."default",
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
ALTER TABLE "public"."duty_record_org_rel" OWNER TO "postgres";
COMMENT ON COLUMN "public"."duty_record_org_rel"."id" IS '主键ID（自增）';
COMMENT ON COLUMN "public"."duty_record_org_rel"."record_id" IS '值班记录ID';
COMMENT ON COLUMN "public"."duty_record_org_rel"."org_id" IS '涉及单位组织ID';
COMMENT ON COLUMN "public"."duty_record_org_rel"."org_name" IS '涉及单位名称（冗余）';
COMMENT ON COLUMN "public"."duty_record_org_rel"."creater" IS '创建者';
COMMENT ON COLUMN "public"."duty_record_org_rel"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."duty_record_org_rel"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."duty_record_org_rel"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."duty_record_org_rel"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."duty_record_org_rel"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."duty_record_org_rel"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."duty_record_org_rel"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."duty_record_org_rel"."signature_version" IS '一体化签名版本号';
COMMENT ON COLUMN "public"."duty_record_org_rel"."deleted" IS '删除标志（0-未删除 1-已删除）';
COMMENT ON TABLE "public"."duty_record_org_rel" IS '值班记录涉及单位关联表';

-- ----------------------------

-- Indexes structure for table duty_record_org_rel
-- ----------------------------
CREATE INDEX "idx_duty_record_org_rel_record_org" ON "public"."duty_record_org_rel" USING btree (
  "record_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "org_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_record_org_rel_org_record" ON "public"."duty_record_org_rel" USING btree (
  "org_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "record_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);

-- Primary Key structure for table duty_record_org_rel
-- ----------------------------
ALTER TABLE "public"."duty_record_org_rel" ADD CONSTRAINT "duty_record_org_rel_pkey" PRIMARY KEY ("id");

-- ----------------------------
`,It=`-- Table structure for duty_record_attachment
-- ----------------------------
DROP TABLE IF EXISTS "public"."duty_record_attachment";
CREATE TABLE "public"."duty_record_attachment" (
  "id" bigint NOT NULL,
  "record_id" bigint NOT NULL,
  "file_name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "file_size" bigint NOT NULL DEFAULT 0,
  "file_url" varchar(500) COLLATE "pg_catalog"."default",
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
ALTER TABLE "public"."duty_record_attachment" OWNER TO "postgres";
COMMENT ON COLUMN "public"."duty_record_attachment"."id" IS '主键ID';
COMMENT ON COLUMN "public"."duty_record_attachment"."record_id" IS '值班记录ID';
COMMENT ON COLUMN "public"."duty_record_attachment"."file_name" IS '附件名称';
COMMENT ON COLUMN "public"."duty_record_attachment"."file_size" IS '附件大小（字节）';
COMMENT ON COLUMN "public"."duty_record_attachment"."file_url" IS '附件URL';
COMMENT ON COLUMN "public"."duty_record_attachment"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."duty_record_attachment"."remark" IS '备注';
COMMENT ON COLUMN "public"."duty_record_attachment"."creater" IS '创建者';
COMMENT ON COLUMN "public"."duty_record_attachment"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."duty_record_attachment"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."duty_record_attachment"."updater" IS '更新者';
COMMENT ON COLUMN "public"."duty_record_attachment"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."duty_record_attachment"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."duty_record_attachment"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."duty_record_attachment"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."duty_record_attachment"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."duty_record_attachment"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."duty_record_attachment"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."duty_record_attachment"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."duty_record_attachment"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."duty_record_attachment" IS '值班记录附件表';

-- ----------------------------

-- Indexes structure for table duty_record_attachment
-- ----------------------------
CREATE INDEX "idx_duty_record_attachment_record" ON "public"."duty_record_attachment" USING btree (
  "record_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_record_attachment_file_name" ON "public"."duty_record_attachment" USING btree (
  "file_name" COLLATE "pg_catalog"."default" "pg_catalog"."varchar_pattern_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_record_attachment_status" ON "public"."duty_record_attachment" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table duty_record_attachment
-- ----------------------------
ALTER TABLE "public"."duty_record_attachment" ADD CONSTRAINT "duty_record_attachment_pkey" PRIMARY KEY ("id");

-- ----------------------------
`,ht=`-- Table structure for duty_log_attachment
-- ----------------------------
DROP TABLE IF EXISTS "public"."duty_log_attachment";
CREATE TABLE "public"."duty_log_attachment" (
  "id" bigint NOT NULL,
  "log_id" bigint NOT NULL,
  "file_name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "file_size" bigint NOT NULL DEFAULT 0,
  "file_url" varchar(500) COLLATE "pg_catalog"."default",
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
ALTER TABLE "public"."duty_log_attachment" OWNER TO "postgres";
COMMENT ON COLUMN "public"."duty_log_attachment"."id" IS '主键ID';
COMMENT ON COLUMN "public"."duty_log_attachment"."log_id" IS '值班日志ID';
COMMENT ON COLUMN "public"."duty_log_attachment"."file_name" IS '附件名称';
COMMENT ON COLUMN "public"."duty_log_attachment"."file_size" IS '附件大小（字节）';
COMMENT ON COLUMN "public"."duty_log_attachment"."file_url" IS '附件URL';
COMMENT ON COLUMN "public"."duty_log_attachment"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."duty_log_attachment"."remark" IS '备注';
COMMENT ON COLUMN "public"."duty_log_attachment"."creater" IS '创建者';
COMMENT ON COLUMN "public"."duty_log_attachment"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."duty_log_attachment"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."duty_log_attachment"."updater" IS '更新者';
COMMENT ON COLUMN "public"."duty_log_attachment"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."duty_log_attachment"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."duty_log_attachment"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."duty_log_attachment"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."duty_log_attachment"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."duty_log_attachment"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."duty_log_attachment"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."duty_log_attachment"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."duty_log_attachment"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."duty_log_attachment" IS '值班日志附件表';

-- ----------------------------

-- Indexes structure for table duty_log_attachment
-- ----------------------------
CREATE INDEX "idx_duty_log_attachment_log" ON "public"."duty_log_attachment" USING btree (
  "log_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_log_attachment_file_name" ON "public"."duty_log_attachment" USING btree (
  "file_name" COLLATE "pg_catalog"."default" "pg_catalog"."varchar_pattern_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_log_attachment_status" ON "public"."duty_log_attachment" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table duty_log_attachment
-- ----------------------------
ALTER TABLE "public"."duty_log_attachment" ADD CONSTRAINT "duty_log_attachment_pkey" PRIMARY KEY ("id");

-- ----------------------------
`,Xt=B({__name:"DutyRecordList",setup(A){const{allData:E,filteredData:u,loading:g,pagination:p,pagedData:f,total:T,deleteItem:I,upsertItem:y}=Lt({initialData:st}),e={id:0,workSummary:"",importantMatters:"",eventType:"",other:""},{drawerVisible:s,isEdit:S,formData:b,openCreate:h,openEdit:v}=gt({defaultFormData:e}),M=[{prop:"date",label:"值班日期",width:140},{prop:"rule",label:"排班规则",minWidth:180,showOverflowTooltip:!0},{prop:"person",label:"值班人员",width:140},{prop:"fillTime",label:"填报时间",width:180},{type:"actions",label:"操作",slot:"actions"}],D=[{label:"编辑",icon:ot,handler:l=>t(l)},{label:"删除",icon:dt,divided:!0,handler:l=>d(l)}];function o(){h()}function t(l){v(l)}async function d(l){await H(l.date)&&(I(r=>r.id===l.id),m.success("删除成功"))}function i(){const l=M.filter(c=>c.label!=="操作").map(c=>c.label),r=u.value.map(c=>[c.date,c.rule,c.person,c.fillTime]);$("值班记录",l,r)}function R(l){S.value?(y({...E.value.find(r=>r.id===b.id),...l},"id"),m.success("编辑成功")):(y({id:Math.max(...E.value.map(r=>r.id),0)+1,date:Z("YYYY-MM-DD"),rule:"视频会议保障人员",person:J(),fillTime:Q(),...l},"id"),m.success("新增成功")),s.value=!1,p.pageNum=1}function w(){s.value=!1}return(l,r)=>{const c=F("table-structure-drawer"),U=k,O=j,z=W,X=F("panel-layout");return P(),Nt(Ot,null,[a(X,{title:"值班记录"},{"title-extra":n(()=>[a(c,{sql:[_(Ut),_(At),_(ft),_(It),_(ht)]},null,8,["sql"])]),actions:n(()=>[a(U,{"margin-left":10,onClick:o},{default:n(()=>[...r[3]||(r[3]=[C("新增",-1)])]),_:1}),a(U,{type:"info","margin-left":10,onClick:i},{default:n(()=>[...r[4]||(r[4]=[C("导出",-1)])]),_:1})]),default:n(()=>[a(z,{"page-num":_(p).pageNum,"onUpdate:pageNum":r[0]||(r[0]=L=>_(p).pageNum=L),"page-size":_(p).pageSize,"onUpdate:pageSize":r[1]||(r[1]=L=>_(p).pageSize=L),data:_(f),columns:M,total:_(T),loading:_(g),"row-key":"id","show-tool-bar":!1},{actions:n(({row:L})=>[a(O,{items:D,row:L},null,8,["row"])]),_:1},8,["page-num","page-size","data","total","loading"])]),_:1}),a(bt,{visible:_(s),"onUpdate:visible":r[2]||(r[2]=L=>pt(s)?s.value=L:null),"edit-data":_(S)?_(b):void 0,onConfirm:R,onCancel:w},null,8,["visible","edit-data"])],64)}}});export{Xt as default};

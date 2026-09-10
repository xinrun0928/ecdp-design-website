const t=`-- Table structure for duty_report
-- ----------------------------
DROP TABLE IF EXISTS "public"."duty_report";
CREATE TABLE "public"."duty_report" (
  "id" bigint NOT NULL,
  "duty_date" date NOT NULL,
  "duty_persons" varchar(200) COLLATE "pg_catalog"."default",
  "filler" varchar(100) COLLATE "pg_catalog"."default",
  "fill_time" timestamp(6),
  "publish_status" varchar(20) COLLATE "pg_catalog"."default" NOT NULL DEFAULT '未发布'::character varying,
  "audit_status" varchar(20) COLLATE "pg_catalog"."default" NOT NULL DEFAULT '待填报'::character varying,
  "auditor" varchar(100) COLLATE "pg_catalog"."default",
  "audit_time" timestamp(6),
  "template_id" bigint,
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
ALTER TABLE "public"."duty_report" OWNER TO "postgres";
COMMENT ON COLUMN "public"."duty_report"."id" IS '主键ID';
COMMENT ON COLUMN "public"."duty_report"."duty_date" IS '值班日期';
COMMENT ON COLUMN "public"."duty_report"."duty_persons" IS '值班人员';
COMMENT ON COLUMN "public"."duty_report"."filler" IS '填报人';
COMMENT ON COLUMN "public"."duty_report"."fill_time" IS '填报时间';
COMMENT ON COLUMN "public"."duty_report"."publish_status" IS '发布状态（未发布/已发布）';
COMMENT ON COLUMN "public"."duty_report"."audit_status" IS '审核状态（待填报/待提交/已审核）';
COMMENT ON COLUMN "public"."duty_report"."auditor" IS '审核人';
COMMENT ON COLUMN "public"."duty_report"."audit_time" IS '审核时间';
COMMENT ON COLUMN "public"."duty_report"."template_id" IS '日报模板ID';
COMMENT ON COLUMN "public"."duty_report"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."duty_report"."remark" IS '备注';
COMMENT ON COLUMN "public"."duty_report"."creater" IS '创建者';
COMMENT ON COLUMN "public"."duty_report"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."duty_report"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."duty_report"."updater" IS '更新者';
COMMENT ON COLUMN "public"."duty_report"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."duty_report"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."duty_report"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."duty_report"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."duty_report"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."duty_report"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."duty_report"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."duty_report"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."duty_report"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."duty_report" IS '值班日报表';

-- ----------------------------

-- Indexes structure for table duty_report
-- ----------------------------
CREATE INDEX "idx_duty_report_duty_date" ON "public"."duty_report" USING btree (
  "duty_date" "pg_catalog"."date_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_report_audit_status" ON "public"."duty_report" USING btree (
  "audit_status" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "publish_status" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_report_filler" ON "public"."duty_report" USING btree (
  "filler" COLLATE "pg_catalog"."default" "pg_catalog"."varchar_pattern_ops" ASC NULLS LAST
) WHERE filler IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_duty_report_status" ON "public"."duty_report" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table duty_report
-- ----------------------------
ALTER TABLE "public"."duty_report" ADD CONSTRAINT "duty_report_pkey" PRIMARY KEY ("id");

-- ----------------------------
`,e=`-- Table structure for duty_report_item
-- ----------------------------
DROP TABLE IF EXISTS "public"."duty_report_item";
CREATE TABLE "public"."duty_report_item" (
  "id" bigint NOT NULL,
  "report_id" bigint NOT NULL,
  "section_type" varchar(30) COLLATE "pg_catalog"."default" NOT NULL,
  "item_time" varchar(20) COLLATE "pg_catalog"."default",
  "category" varchar(50) COLLATE "pg_catalog"."default",
  "content" text COLLATE "pg_catalog"."default",
  "handling" text COLLATE "pg_catalog"."default",
  "situation" text COLLATE "pg_catalog"."default",
  "copies" integer,
  "task" text COLLATE "pg_catalog"."default",
  "title" varchar(200) COLLATE "pg_catalog"."default",
  "matters" text COLLATE "pg_catalog"."default",
  "leaders" varchar(200) COLLATE "pg_catalog"."default",
  "subject" varchar(200) COLLATE "pg_catalog"."default",
  "description" text COLLATE "pg_catalog"."default",
  "dispose_status" varchar(20) COLLATE "pg_catalog"."default",
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
ALTER TABLE "public"."duty_report_item" OWNER TO "postgres";
COMMENT ON COLUMN "public"."duty_report_item"."id" IS '主键ID';
COMMENT ON COLUMN "public"."duty_report_item"."report_id" IS '值班日报ID';
COMMENT ON COLUMN "public"."duty_report_item"."section_type" IS '栏目类型（phone/file/leader/monitor/video/visit/meeting/report/suggestion/other/handover）';
COMMENT ON COLUMN "public"."duty_report_item"."item_time" IS '时间';
COMMENT ON COLUMN "public"."duty_report_item"."category" IS '类别/分类';
COMMENT ON COLUMN "public"."duty_report_item"."content" IS '内容';
COMMENT ON COLUMN "public"."duty_report_item"."handling" IS '处置情况';
COMMENT ON COLUMN "public"."duty_report_item"."situation" IS '收发情况（文件收发栏目）';
COMMENT ON COLUMN "public"."duty_report_item"."copies" IS '收发份数（文件收发栏目）';
COMMENT ON COLUMN "public"."duty_report_item"."task" IS '交办事项（领导交办栏目）';
COMMENT ON COLUMN "public"."duty_report_item"."title" IS '标题（来访接待/会议保障栏目）';
COMMENT ON COLUMN "public"."duty_report_item"."matters" IS '接待事宜（来访接待栏目）';
COMMENT ON COLUMN "public"."duty_report_item"."leaders" IS '主要领导（来访接待/会议保障栏目）';
COMMENT ON COLUMN "public"."duty_report_item"."subject" IS '会议主题（会议保障栏目）';
COMMENT ON COLUMN "public"."duty_report_item"."description" IS '事项说明/情况说明（视频调看/其他事项/交接班栏目）';
COMMENT ON COLUMN "public"."duty_report_item"."dispose_status" IS '处置状态（已处置/处置中/已收悉/今日运行正常/有异常处置）';
COMMENT ON COLUMN "public"."duty_report_item"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."duty_report_item"."remark" IS '备注';
COMMENT ON COLUMN "public"."duty_report_item"."creater" IS '创建者';
COMMENT ON COLUMN "public"."duty_report_item"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."duty_report_item"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."duty_report_item"."updater" IS '更新者';
COMMENT ON COLUMN "public"."duty_report_item"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."duty_report_item"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."duty_report_item"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."duty_report_item"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."duty_report_item"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."duty_report_item"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."duty_report_item"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."duty_report_item"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."duty_report_item"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."duty_report_item" IS '值班日报明细表';

-- ----------------------------

-- Indexes structure for table duty_report_item
-- ----------------------------
CREATE INDEX "idx_duty_report_item_report" ON "public"."duty_report_item" USING btree (
  "report_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_report_item_section" ON "public"."duty_report_item" USING btree (
  "section_type" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_report_item_dispose_status" ON "public"."duty_report_item" USING btree (
  "dispose_status" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE dispose_status IS NOT NULL AND deleted = 0;

-- Primary Key structure for table duty_report_item
-- ----------------------------
ALTER TABLE "public"."duty_report_item" ADD CONSTRAINT "duty_report_item_pkey" PRIMARY KEY ("id");

-- ----------------------------
`,r=`-- Table structure for duty_report_template
-- ----------------------------
DROP TABLE IF EXISTS "public"."duty_report_template";
CREATE TABLE "public"."duty_report_template" (
  "id" bigint NOT NULL,
  "template_name" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "version" varchar(50) COLLATE "pg_catalog"."default",
  "creator" varchar(100) COLLATE "pg_catalog"."default",
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
ALTER TABLE "public"."duty_report_template" OWNER TO "postgres";
COMMENT ON COLUMN "public"."duty_report_template"."id" IS '主键ID';
COMMENT ON COLUMN "public"."duty_report_template"."template_name" IS '模板名称';
COMMENT ON COLUMN "public"."duty_report_template"."version" IS '模板版本';
COMMENT ON COLUMN "public"."duty_report_template"."creator" IS '创建人';
COMMENT ON COLUMN "public"."duty_report_template"."status" IS '模板状态（1101启用 1102禁用）';
COMMENT ON COLUMN "public"."duty_report_template"."remark" IS '备注';
COMMENT ON COLUMN "public"."duty_report_template"."creater" IS '创建者';
COMMENT ON COLUMN "public"."duty_report_template"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."duty_report_template"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."duty_report_template"."updater" IS '更新者';
COMMENT ON COLUMN "public"."duty_report_template"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."duty_report_template"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."duty_report_template"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."duty_report_template"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."duty_report_template"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."duty_report_template"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."duty_report_template"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."duty_report_template"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."duty_report_template"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."duty_report_template" IS '值班日报模板表';

-- ----------------------------

-- Indexes structure for table duty_report_template
-- ----------------------------
CREATE INDEX "idx_duty_report_template_name" ON "public"."duty_report_template" USING btree (
  "template_name" COLLATE "pg_catalog"."default" "pg_catalog"."varchar_pattern_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_report_template_status" ON "public"."duty_report_template" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table duty_report_template
-- ----------------------------
ALTER TABLE "public"."duty_report_template" ADD CONSTRAINT "duty_report_template_pkey" PRIMARY KEY ("id");

-- ----------------------------
`,a=`-- Table structure for duty_report_audit
-- ----------------------------
DROP TABLE IF EXISTS "public"."duty_report_audit";
CREATE TABLE "public"."duty_report_audit" (
  "id" bigint NOT NULL,
  "report_id" bigint NOT NULL,
  "audit_action" varchar(20) COLLATE "pg_catalog"."default" NOT NULL,
  "audit_result" varchar(20) COLLATE "pg_catalog"."default" NOT NULL,
  "audit_opinion" varchar(500) COLLATE "pg_catalog"."default",
  "auditor" varchar(100) COLLATE "pg_catalog"."default",
  "audit_time" timestamp(6),
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
ALTER TABLE "public"."duty_report_audit" OWNER TO "postgres";
COMMENT ON COLUMN "public"."duty_report_audit"."id" IS '主键ID';
COMMENT ON COLUMN "public"."duty_report_audit"."report_id" IS '值班日报ID';
COMMENT ON COLUMN "public"."duty_report_audit"."audit_action" IS '审核动作（reject-拒绝 approve-通过 publish-通过并发布）';
COMMENT ON COLUMN "public"."duty_report_audit"."audit_result" IS '审核结果（approved-通过 rejected-拒绝）';
COMMENT ON COLUMN "public"."duty_report_audit"."audit_opinion" IS '审核意见';
COMMENT ON COLUMN "public"."duty_report_audit"."auditor" IS '审核人';
COMMENT ON COLUMN "public"."duty_report_audit"."audit_time" IS '审核时间';
COMMENT ON COLUMN "public"."duty_report_audit"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."duty_report_audit"."remark" IS '备注';
COMMENT ON COLUMN "public"."duty_report_audit"."creater" IS '创建者';
COMMENT ON COLUMN "public"."duty_report_audit"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."duty_report_audit"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."duty_report_audit"."updater" IS '更新者';
COMMENT ON COLUMN "public"."duty_report_audit"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."duty_report_audit"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."duty_report_audit"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."duty_report_audit"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."duty_report_audit"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."duty_report_audit"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."duty_report_audit"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."duty_report_audit"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."duty_report_audit"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."duty_report_audit" IS '值班日报审核记录表';

-- ----------------------------

-- Indexes structure for table duty_report_audit
-- ----------------------------
CREATE INDEX "idx_duty_report_audit_report" ON "public"."duty_report_audit" USING btree (
  "report_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_report_audit_audit_action" ON "public"."duty_report_audit" USING btree (
  "audit_action" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "audit_time" "pg_catalog"."timestamp_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_report_audit_status_deleted" ON "public"."duty_report_audit" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table duty_report_audit
-- ----------------------------
ALTER TABLE "public"."duty_report_audit" ADD CONSTRAINT "duty_report_audit_pkey" PRIMARY KEY ("id");

-- ----------------------------
`,_=`-- Table structure for duty_report_item_attachment
-- ----------------------------
DROP TABLE IF EXISTS "public"."duty_report_item_attachment";
CREATE TABLE "public"."duty_report_item_attachment" (
  "id" bigint NOT NULL,
  "item_id" bigint NOT NULL,
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
ALTER TABLE "public"."duty_report_item_attachment" OWNER TO "postgres";
COMMENT ON COLUMN "public"."duty_report_item_attachment"."id" IS '主键ID';
COMMENT ON COLUMN "public"."duty_report_item_attachment"."item_id" IS '值班日报明细ID';
COMMENT ON COLUMN "public"."duty_report_item_attachment"."file_name" IS '附件名称';
COMMENT ON COLUMN "public"."duty_report_item_attachment"."file_size" IS '附件大小（字节）';
COMMENT ON COLUMN "public"."duty_report_item_attachment"."file_url" IS '附件URL';
COMMENT ON COLUMN "public"."duty_report_item_attachment"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."duty_report_item_attachment"."remark" IS '备注';
COMMENT ON COLUMN "public"."duty_report_item_attachment"."creater" IS '创建者';
COMMENT ON COLUMN "public"."duty_report_item_attachment"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."duty_report_item_attachment"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."duty_report_item_attachment"."updater" IS '更新者';
COMMENT ON COLUMN "public"."duty_report_item_attachment"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."duty_report_item_attachment"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."duty_report_item_attachment"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."duty_report_item_attachment"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."duty_report_item_attachment"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."duty_report_item_attachment"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."duty_report_item_attachment"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."duty_report_item_attachment"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."duty_report_item_attachment"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."duty_report_item_attachment" IS '值班日报明细附件表';

-- ----------------------------

-- Indexes structure for table duty_report_item_attachment
-- ----------------------------
CREATE INDEX "idx_duty_report_item_attachment_item" ON "public"."duty_report_item_attachment" USING btree (
  "item_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_report_item_attachment_file_name" ON "public"."duty_report_item_attachment" USING btree (
  "file_name" COLLATE "pg_catalog"."default" "pg_catalog"."varchar_pattern_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_report_item_attachment_status" ON "public"."duty_report_item_attachment" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table duty_report_item_attachment
-- ----------------------------
ALTER TABLE "public"."duty_report_item_attachment" ADD CONSTRAINT "duty_report_item_attachment_pkey" PRIMARY KEY ("id");

-- ----------------------------
`;export{e as a,r as b,a as c,t as d,_ as e};

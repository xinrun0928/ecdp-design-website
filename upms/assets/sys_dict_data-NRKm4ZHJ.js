const t=`-- Table structure for sys_dict_type
-- ----------------------------
DROP TABLE IF EXISTS "public"."sys_dict_type";
CREATE TABLE "public"."sys_dict_type" (
  "dict_type_id" bigint NOT NULL,
  "dict_type_name" varchar(100) COLLATE "pg_catalog"."default",
  "dict_type" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "subsystem_id" bigint,
  "display_order" integer DEFAULT 0,
  "status" smallint DEFAULT 1101,
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
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer DEFAULT 1,
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer DEFAULT 1
)
;
ALTER TABLE "public"."sys_dict_type" OWNER TO "postgres";
COMMENT ON COLUMN "public"."sys_dict_type"."dict_type_id" IS '类型ID';
COMMENT ON COLUMN "public"."sys_dict_type"."dict_type_name" IS '类型名称';
COMMENT ON COLUMN "public"."sys_dict_type"."dict_type" IS '类型编码（唯一，关联字典表的dict_type字段）';
COMMENT ON COLUMN "public"."sys_dict_type"."subsystem_id" IS '子系统ID';
COMMENT ON COLUMN "public"."sys_dict_type"."display_order" IS '排序字段';
COMMENT ON COLUMN "public"."sys_dict_type"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."sys_dict_type"."remark" IS '备注信息';
COMMENT ON COLUMN "public"."sys_dict_type"."creater" IS '创建者';
COMMENT ON COLUMN "public"."sys_dict_type"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."sys_dict_type"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."sys_dict_type"."updater" IS '更新者';
COMMENT ON COLUMN "public"."sys_dict_type"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."sys_dict_type"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."sys_dict_type"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."sys_dict_type"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."sys_dict_type"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."sys_dict_type"."signature" IS '数据签名';
COMMENT ON COLUMN "public"."sys_dict_type"."signature_version" IS '数据签名版本号';
COMMENT ON COLUMN "public"."sys_dict_type"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."sys_dict_type"."local_signature_version" IS '本地签名版本号';
COMMENT ON TABLE "public"."sys_dict_type" IS '字典类型表';

-- ----------------------------

-- Indexes structure for table sys_dict_type
-- ----------------------------
CREATE INDEX "idx_sys_dict_type_dict_type" ON "public"."sys_dict_type" USING btree (
  "dict_type" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE deleted = 0;
CREATE INDEX "idx_sys_dict_type_org_id" ON "public"."sys_dict_type" USING btree (
  "creater_org_id" "pg_catalog"."int8_ops" ASC NULLS LAST
) WHERE creater_org_id IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_sys_dict_type_status_display" ON "public"."sys_dict_type" USING btree (
  "status" "pg_catalog"."int2_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST,
  "display_order" "pg_catalog"."int4_ops" ASC NULLS LAST
) WHERE deleted = 0;
CREATE INDEX "idx_sys_dict_type_subsystem_id" ON "public"."sys_dict_type" USING btree (
  "subsystem_id" "pg_catalog"."int8_ops" ASC NULLS LAST
) WHERE subsystem_id IS NOT NULL AND deleted = 0;

-- Primary Key structure for table sys_dict_type
-- ----------------------------
ALTER TABLE "public"."sys_dict_type" ADD CONSTRAINT "sys_dict_type_pkey" PRIMARY KEY ("dict_type_id");

-- ----------------------------
`,_=`-- Table structure for sys_dict_data
-- ----------------------------
DROP TABLE IF EXISTS "public"."sys_dict_data";
CREATE TABLE "public"."sys_dict_data" (
  "dict_id" bigint NOT NULL,
  "dict_type" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "subsystem_id" bigint,
  "dict_label" varchar(100) COLLATE "pg_catalog"."default",
  "dict_value" varchar(255) COLLATE "pg_catalog"."default",
  "dict_code" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "display_order" integer DEFAULT 0,
  "dict_class" varchar(100) COLLATE "pg_catalog"."default",
  "is_default" smallint DEFAULT 0,
  "status" smallint DEFAULT 1101,
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
ALTER TABLE "public"."sys_dict_data" OWNER TO "postgres";
COMMENT ON COLUMN "public"."sys_dict_data"."dict_id" IS '字典ID';
COMMENT ON COLUMN "public"."sys_dict_data"."dict_type" IS '字典类型（同一类型下有多条字典项）';
COMMENT ON COLUMN "public"."sys_dict_data"."subsystem_id" IS '子系统ID';
COMMENT ON COLUMN "public"."sys_dict_data"."dict_label" IS '字典标签';
COMMENT ON COLUMN "public"."sys_dict_data"."dict_value" IS '字典值';
COMMENT ON COLUMN "public"."sys_dict_data"."dict_code" IS '字典编码（唯一）';
COMMENT ON COLUMN "public"."sys_dict_data"."display_order" IS '排序字段';
COMMENT ON COLUMN "public"."sys_dict_data"."dict_class" IS '样式 class（用于自定义颜色）';
COMMENT ON COLUMN "public"."sys_dict_data"."is_default" IS '是否默认（0否 1是）';
COMMENT ON COLUMN "public"."sys_dict_data"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."sys_dict_data"."remark" IS '备注信息';
COMMENT ON COLUMN "public"."sys_dict_data"."creater" IS '创建者';
COMMENT ON COLUMN "public"."sys_dict_data"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."sys_dict_data"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."sys_dict_data"."updater" IS '更新者';
COMMENT ON COLUMN "public"."sys_dict_data"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."sys_dict_data"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."sys_dict_data"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."sys_dict_data"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."sys_dict_data"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."sys_dict_data"."local_signature" IS '数据签名（本地）';
COMMENT ON COLUMN "public"."sys_dict_data"."local_signature_version" IS '签名版本号（本地）';
COMMENT ON COLUMN "public"."sys_dict_data"."signature" IS '数据签名';
COMMENT ON COLUMN "public"."sys_dict_data"."signature_version" IS '数据签名版本号';
COMMENT ON TABLE "public"."sys_dict_data" IS '数据字典表';

-- ----------------------------

-- Indexes structure for table sys_dict_data
-- ----------------------------
CREATE INDEX "idx_sys_dict_data_dict_code" ON "public"."sys_dict_data" USING btree (
  "dict_code" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE dict_code IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_sys_dict_data_dict_type_status" ON "public"."sys_dict_data" USING btree (
  "dict_type" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "status" "pg_catalog"."int2_ops" ASC NULLS LAST,
  "display_order" "pg_catalog"."int4_ops" ASC NULLS LAST
) WHERE deleted = 0;
CREATE INDEX "idx_sys_dict_data_org_id" ON "public"."sys_dict_data" USING btree (
  "creater_org_id" "pg_catalog"."int8_ops" ASC NULLS LAST
) WHERE creater_org_id IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_sys_dict_data_subsystem_id" ON "public"."sys_dict_data" USING btree (
  "subsystem_id" "pg_catalog"."int8_ops" ASC NULLS LAST
) WHERE subsystem_id IS NOT NULL AND deleted = 0;

-- Primary Key structure for table sys_dict_data
-- ----------------------------
ALTER TABLE "public"."sys_dict_data" ADD CONSTRAINT "sys_dict_data_pkey" PRIMARY KEY ("dict_id");

-- ----------------------------
`;export{_ as a,t as s};

const r=`-- Table structure for org_job
-- ----------------------------
DROP TABLE IF EXISTS "public"."org_job";
CREATE TABLE "public"."org_job" (
  "job_id" bigint NOT NULL,
  "job_code" varchar(64) COLLATE "pg_catalog"."default",
  "job_name" varchar(128) COLLATE "pg_catalog"."default" NOT NULL,
  "display_order" integer NOT NULL DEFAULT 0,
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
ALTER TABLE "public"."org_job" OWNER TO "postgres";
COMMENT ON COLUMN "public"."org_job"."job_id" IS '职务ID';
COMMENT ON COLUMN "public"."org_job"."job_code" IS '职务编码';
COMMENT ON COLUMN "public"."org_job"."job_name" IS '职务名称';
COMMENT ON COLUMN "public"."org_job"."display_order" IS '排序字段';
COMMENT ON COLUMN "public"."org_job"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."org_job"."remark" IS '备注信息';
COMMENT ON COLUMN "public"."org_job"."creater" IS '创建者';
COMMENT ON COLUMN "public"."org_job"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."org_job"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."org_job"."updater" IS '更新者';
COMMENT ON COLUMN "public"."org_job"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."org_job"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."org_job"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."org_job"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."org_job"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."org_job"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."org_job"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."org_job"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."org_job"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."org_job" IS '组织职务表';

-- ----------------------------

-- Indexes structure for table org_job
-- ----------------------------
CREATE INDEX "idx_org_job_job_name" ON "public"."org_job" USING btree (
  "job_name" COLLATE "pg_catalog"."default" "pg_catalog"."varchar_pattern_ops" ASC NULLS LAST
);
CREATE INDEX "idx_org_job_display" ON "public"."org_job" USING btree (
  "display_order" "pg_catalog"."int4_ops" ASC NULLS LAST
);
CREATE INDEX "idx_org_job_status" ON "public"."org_job" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table org_job
-- ----------------------------
ALTER TABLE "public"."org_job" ADD CONSTRAINT "org_job_pkey" PRIMARY KEY ("job_id");

-- ----------------------------
`;export{r as o};

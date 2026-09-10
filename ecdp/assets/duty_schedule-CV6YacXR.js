const e=`-- Table structure for duty_schedule_rule
-- ----------------------------
DROP TABLE IF EXISTS "public"."duty_schedule_rule";
CREATE TABLE "public"."duty_schedule_rule" (
  "id" bigint NOT NULL,
  "rule_name" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "sort_order" integer NOT NULL DEFAULT 1,
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
ALTER TABLE "public"."duty_schedule_rule" OWNER TO "postgres";
COMMENT ON COLUMN "public"."duty_schedule_rule"."id" IS '主键ID';
COMMENT ON COLUMN "public"."duty_schedule_rule"."rule_name" IS '规则名称';
COMMENT ON COLUMN "public"."duty_schedule_rule"."sort_order" IS '排序号（数值越小越靠前）';
COMMENT ON COLUMN "public"."duty_schedule_rule"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."duty_schedule_rule"."remark" IS '备注';
COMMENT ON COLUMN "public"."duty_schedule_rule"."creater" IS '创建者';
COMMENT ON COLUMN "public"."duty_schedule_rule"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."duty_schedule_rule"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."duty_schedule_rule"."updater" IS '更新者';
COMMENT ON COLUMN "public"."duty_schedule_rule"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."duty_schedule_rule"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."duty_schedule_rule"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."duty_schedule_rule"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."duty_schedule_rule"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."duty_schedule_rule"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."duty_schedule_rule"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."duty_schedule_rule"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."duty_schedule_rule"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."duty_schedule_rule" IS '值班排班规则表';

-- ----------------------------

-- Indexes structure for table duty_schedule_rule
-- ----------------------------
CREATE INDEX "idx_duty_schedule_rule_sort" ON "public"."duty_schedule_rule" USING btree (
  "sort_order" "pg_catalog"."int4_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_schedule_rule_rule_name" ON "public"."duty_schedule_rule" USING btree (
  "rule_name" COLLATE "pg_catalog"."default" "pg_catalog"."varchar_pattern_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_schedule_rule_status" ON "public"."duty_schedule_rule" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table duty_schedule_rule
-- ----------------------------
ALTER TABLE "public"."duty_schedule_rule" ADD CONSTRAINT "duty_schedule_rule_pkey" PRIMARY KEY ("id");

-- ----------------------------
`,u=`-- Table structure for duty_schedule_rule_shift
-- ----------------------------
DROP TABLE IF EXISTS "public"."duty_schedule_rule_shift";
CREATE TABLE "public"."duty_schedule_rule_shift" (
  "id" bigint NOT NULL,
  "rule_id" bigint NOT NULL,
  "shift_name" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "start_time" varchar(10) COLLATE "pg_catalog"."default",
  "end_time" varchar(10) COLLATE "pg_catalog"."default",
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
ALTER TABLE "public"."duty_schedule_rule_shift" OWNER TO "postgres";
COMMENT ON COLUMN "public"."duty_schedule_rule_shift"."id" IS '主键ID';
COMMENT ON COLUMN "public"."duty_schedule_rule_shift"."rule_id" IS '排班规则ID';
COMMENT ON COLUMN "public"."duty_schedule_rule_shift"."shift_name" IS '班次名称（如：白班、晚班）';
COMMENT ON COLUMN "public"."duty_schedule_rule_shift"."start_time" IS '班次开始时间（HH:mm）';
COMMENT ON COLUMN "public"."duty_schedule_rule_shift"."end_time" IS '班次结束时间（HH:mm）';
COMMENT ON COLUMN "public"."duty_schedule_rule_shift"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."duty_schedule_rule_shift"."remark" IS '备注';
COMMENT ON COLUMN "public"."duty_schedule_rule_shift"."creater" IS '创建者';
COMMENT ON COLUMN "public"."duty_schedule_rule_shift"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."duty_schedule_rule_shift"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."duty_schedule_rule_shift"."updater" IS '更新者';
COMMENT ON COLUMN "public"."duty_schedule_rule_shift"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."duty_schedule_rule_shift"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."duty_schedule_rule_shift"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."duty_schedule_rule_shift"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."duty_schedule_rule_shift"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."duty_schedule_rule_shift"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."duty_schedule_rule_shift"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."duty_schedule_rule_shift"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."duty_schedule_rule_shift"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."duty_schedule_rule_shift" IS '值班排班规则班次表';

-- ----------------------------

-- Indexes structure for table duty_schedule_rule_shift
-- ----------------------------
CREATE INDEX "idx_duty_schedule_rule_shift_rule" ON "public"."duty_schedule_rule_shift" USING btree (
  "rule_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_schedule_rule_shift_name" ON "public"."duty_schedule_rule_shift" USING btree (
  "shift_name" COLLATE "pg_catalog"."default" "pg_catalog"."varchar_pattern_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_schedule_rule_shift_status" ON "public"."duty_schedule_rule_shift" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table duty_schedule_rule_shift
-- ----------------------------
ALTER TABLE "public"."duty_schedule_rule_shift" ADD CONSTRAINT "duty_schedule_rule_shift_pkey" PRIMARY KEY ("id");

-- ----------------------------
`,t=`-- Table structure for duty_schedule
-- ----------------------------
DROP TABLE IF EXISTS "public"."duty_schedule";
CREATE TABLE "public"."duty_schedule" (
  "id" bigint NOT NULL,
  "rule_id" bigint,
  "schedule_date" date NOT NULL,
  "duty_type" varchar(20) COLLATE "pg_catalog"."default" NOT NULL,
  "shift_id" bigint,
  "shift_name" varchar(50) COLLATE "pg_catalog"."default",
  "member_id" bigint,
  "member_name" varchar(100) COLLATE "pg_catalog"."default",
  "unit_type" varchar(50) COLLATE "pg_catalog"."default",
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
ALTER TABLE "public"."duty_schedule" OWNER TO "postgres";
COMMENT ON COLUMN "public"."duty_schedule"."id" IS '主键ID';
COMMENT ON COLUMN "public"."duty_schedule"."rule_id" IS '排班规则ID';
COMMENT ON COLUMN "public"."duty_schedule"."schedule_date" IS '值班日期';
COMMENT ON COLUMN "public"."duty_schedule"."duty_type" IS '值班类型（总/技白/技夜/视）';
COMMENT ON COLUMN "public"."duty_schedule"."shift_id" IS '班次ID（关联排班规则班次表）';
COMMENT ON COLUMN "public"."duty_schedule"."shift_name" IS '班次名称（冗余，如：白班、晚班）';
COMMENT ON COLUMN "public"."duty_schedule"."member_id" IS '值班人员ID';
COMMENT ON COLUMN "public"."duty_schedule"."member_name" IS '值班人员姓名（冗余）';
COMMENT ON COLUMN "public"."duty_schedule"."unit_type" IS '单位类型（厅总值班室/厅直属单位/地市交通局/路段）';
COMMENT ON COLUMN "public"."duty_schedule"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."duty_schedule"."remark" IS '备注';
COMMENT ON COLUMN "public"."duty_schedule"."creater" IS '创建者';
COMMENT ON COLUMN "public"."duty_schedule"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."duty_schedule"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."duty_schedule"."updater" IS '更新者';
COMMENT ON COLUMN "public"."duty_schedule"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."duty_schedule"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."duty_schedule"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."duty_schedule"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."duty_schedule"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."duty_schedule"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."duty_schedule"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."duty_schedule"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."duty_schedule"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."duty_schedule" IS '值班排班明细表';

-- ----------------------------

-- Indexes structure for table duty_schedule
-- ----------------------------
CREATE INDEX "idx_duty_schedule_date_type" ON "public"."duty_schedule" USING btree (
  "schedule_date" "pg_catalog"."date_ops" ASC NULLS LAST,
  "duty_type" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_schedule_rule_date" ON "public"."duty_schedule" USING btree (
  "rule_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "schedule_date" "pg_catalog"."date_ops" ASC NULLS LAST
) WHERE rule_id IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_duty_schedule_shift" ON "public"."duty_schedule" USING btree (
  "shift_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "schedule_date" "pg_catalog"."date_ops" ASC NULLS LAST
) WHERE shift_id IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_duty_schedule_unit_type" ON "public"."duty_schedule" USING btree (
  "unit_type" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE unit_type IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_duty_schedule_member" ON "public"."duty_schedule" USING btree (
  "member_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
) WHERE member_id IS NOT NULL;
CREATE INDEX "idx_duty_schedule_status" ON "public"."duty_schedule" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table duty_schedule
-- ----------------------------
ALTER TABLE "public"."duty_schedule" ADD CONSTRAINT "duty_schedule_pkey" PRIMARY KEY ("id");

-- ----------------------------
`;export{u as a,t as b,e as d};
